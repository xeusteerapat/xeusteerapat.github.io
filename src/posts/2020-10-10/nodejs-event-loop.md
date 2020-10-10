---
title: 'Node.js Event Loop'
date: '2020-10-10'
---

สวัสดีครับ ไม่ได้เขียน blog มานานเป็นเดือนละ เนื่องจากผมค่อนข้างยุ่งกับการเปลี่ยนงานใหม่และงานก็ค่อนข้างถาโถมเข้ามาแบบเยอะเลยทีเดียว (555) แต่ก็ยังพอมีเวลาไปศึกษา ```node.js``` เพิ่มเติมอีกหน่อยนึง โดยเฉพาะการทำงานภายในของตัว ```node.js``` เอง ซึ่ง blog นี้ก็จะนำเสนอเกี่ยวกับ event loop ซึ่งมีบทบาทสำคัญเป็นอย่างมากในตัว ```node.js``` core หวังว่าจะเป็นประโยชน์ต่อคนที่กำลังศึกษา ```node.js``` อยู่นะครับ code และเนื้อหาหลักๆ ผมจะอ้างอิงจาก [Node JS: Advanced Concepts](https://www.udemy.com/course/advanced-node-for-developers/) ของ [Stephen Grider](https://twitter.com/ste_grider) ครับผม

## What is the Event Loop?

Node.js คือ runtime เขียนโดย Javascript ซึ่งเราทราบกันดีอยู่แล้วว่า Javascript คือ Single-Threaded ดังนั้น Event loop คือสิ่งที่คอยจัดการ **asynchronous non-blocking I/O operations** ใน node เปรียบเสมือนเป็นโครงสร้างที่ควบคุมและตัดสินใจว่าจะทำ task ใดในช่วงเวลาหนึ่งบน Thread นั้นๆ ซึ่งการทำงานของ Event Loop จะทำงานอยู่บน thread เดียวโดยมีวัฏจักรการทำงานตาม diagram รูปล่าง

```bash
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

*Ref: [The Node.js Event Loop, Timers, and ```process.nextTick()```](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)*

สมมติว่าเราเขียน code ในไฟล์ ```index.js``` แล้วเราจะใช้คำสั่ง run ```node index.js``` แต่ละช่วง Event Loop จะมีการทำงานดังต่อไปนี้

- **Timers**: เป็นการจัดการเกี่ยวกับเวลา เช่น ```setTimeout()``` หรือ ```setInterval()```
- **Pending callbacks**: เป็นช่วงที่ต้องจัดการเกี่ยวกับ callbacks ต่างๆ
- **Idle, prepare**: เป็นช่วงเวลาที่ event loop กลับไปอยู่ที่สถานะ "รอ" เพื่อให้ tasks ใดๆ ดำเนินการเสร็จ เดี๋ยวผมจะลงรายละเอียดอีกทีนะครับ
- **Poll**: จัดการเกี่ยวกับ I/O event ต่างๆ
- **Check**: ```setImmediate()``` callbacks
- **Close callbacks**: close event ต่างๆ เช่น ```socket.on('close', ...)```

ทีนี้อาจจะยังมองภาพไม่ออกว่าแต่ละช่วงนั้น Event Loop มันทำงานของมันยังไงกันแน่ ต่อไปผมจะเอาแต่ละช่วงมาเขียนเป็น psuedo code ดูนะครับ เพื่อให้เข้าใจมากขึ้น

```javascript
//----- Totally FAKE code -----//

// สมมติว่า run node index.js

// Tasks ต่างๆ ที่ Event Loop ต้องทำการตรวจสอบ
// และตัดสินใจว่าจะดำเนินการอย่างไรต่อไป
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// shouldContinue() คือตัวแทนการทำงานของ Event Loop 
// ซึ่ง function นี้จะคืนค่า truthy หรือ falsy
function shouldContinue() {
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// เข้าสู่ Event Loop
while (shouldContinue()) {

}

// exit back to terminal
```

## Event Loop's phases in Detail

รายละเอียดการทำงานในแต่ละช่วงของ Event Loop มีดังนี้

1. Event Loop จะตรวจสอบว่ามี  task ใน ```pendingTimers``` หรือไม่ ซึ่งก็คือ ```setTimeout()``` และ ```setInterval()``` ถ้ามี ก็จะทำการ execute callbacks function ที่อยู่ใน ```pendingTimers``` เหล่านั้น
2. ต่อไปก็คือการตรวจสอบว่ามี ```pendingOSTasks``` และ  ```pendingOperations``` อยู่หรือไม่ เช่น การเรียก ```httpServer.listen(PORT)``` หรือการเรียกใช้ file system module ```fs```
3. จากนั้น Event Loop จะเข้าสู่ **idle, prepare** รอที่จะดำเนินการต่อไปเมื่อ
    - ทำ ```pendingOSTasks``` เสร็จ
    - ทำ ```pendingOperations``` เสร็จ
    - timer ถึงเวลาที่กำหนดและดำเนินการเรียก callback function ในนั้น
4. ตรวจสอบ ```pendingTimers``` อีกครั้งและเรียก ```setImmediate``` function
5. จัดการ ```close event``` เช่น  ```socket.on('close', ...)``` หรือ ```readStream.on('close', ...)```

ถ้ามี ```pendingTask``` ใดใดสักอันหนึ่งที่มี task อยู่ข้างใน (length > 0) ```shouldContinue()``` ก็จะคืนค่าเป็น ```true``` Event Loop ก็จะดำเนินวัฏจักรของมันไปเรื่อยๆ (```while (true) {}```) จนกว่าทุก ๆ ```pendingTask``` หมดไป ```shouldContinue()``` ก็จะคืนค่าเป็น ```false``` และออกมาจาก loop นั่นเอง

## Is Node.js single-threaded?

มาถึงตรงนี้ อยากจะตั้งคำถามกับคุณผู้อ่านสักหน่อยว่า Node.js เป็น single-thread หรือไม่?

คำตอบคือ...

