---
title: "Javascript Refresher - Variables and data types"
date: "2020-02-23"
---

สวัสดีครับวันนี้จะมาเขียน blog เกี่ยวกับพื้นฐาน javascript เบื้องต้นนะครับ ช่วงนี้เรียนที่ codecamp เรื่องนี้พอดีเลยอยากจะทบทวนเก็บไว้อ่านสักหน่อย ที่จริงก็มีอยู่ใน [repository](https://github.com/xeusteerapat/javascript-refresher) ผมนี่แหละ แต่เป็นภาษาอังกฤษ (version ไม่แคร์ grammar 5555555) เนื้อหาก็เหมือนกันหมดเลยครับ (ก็ copy มานั่นแหละ 555555) ทำภาษาไทย เผื่อมีคนมาอ่าน

เนื้อหาส่วนใหญ่จะอ้างอิงมาจาก

1. [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [The Modern JavaScript Tutorial](https://javascript.info/)
3. [The Modern Javascript Bootcamp Course (2020)](https://www.udemy.com/course/javascript-beginners-complete-tutorial/) ใครชอบดูเป็นวิดีโอแนะนำอันนี้เลยครับ เหมาะกับมือใหม่ เข้าใจง่าย

***ออกตัวก่อนนะครับว่าผมไม่ได้เก่งเลยยย ออกจะ beginner ด้วยซ้ำ เพียงแต่อยากเขียนเพื่อทบทวนความรู้ที่ได้รับมา ท่านใดเห็นว่าบทความผิด mention ผมที่ twitter ได้เลยครับ***

## Variables declaration การประกาศตัวแปร

1. ใช้ `let` keyword.
2. ใช้ `const` keyword.
3. ใช้ `var` keyword.

`let` keyword

```javascript
let name = "Teerapat";
console.log(name); // prints "Teerapat"

let myAge = 33;
console.log(myAge); // prints "33"
```

การใช้ `let` keyword, เราสามารถอัพเดทค่าของตัวแปรได้ แต่ไม่สามารถประกาศตัวแปรเดิมซ้ำได้

```javascript
let myAge = 33;
myAge = myAge + 1;
console.log(myAge); // prints "34"
```

`const` keyword (`const` stand for "constant")

```javascript
const pi = 3.14159265359;
const gravity = 9.8337;
```

การใช้ `const` keyword, เราไม่สามารถอัพเดทค่าของตัวแปรได้

```javascript
const weight = 68;
weight + 1;
// TypeError: Assignment to constant variable.
```

การตั้งชื่อตัวแปรใน javascript นิยมใช้ "camel case" เช่น

```javascript
let myAge = 33;
let resultWrapper = document.getElementById("result");
```

## Scoping rules

ในเว็บ Mozilla [let keyword mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) อธิบาย scoping rules ซึ่งแตกต่างจาก `var` เอาไว้ว่า

> *Variables declared by let have their scope in the block for which they are defined, as well as in any contained sub-blocks.*

ซึ่งการใช้ `var` ถึงแม้ว่าจะอยู่คนละ block scope แต่ก็ยังสามารถเข้าถึงตัวแปรได้ ซึ่งอาจจะก่อให้เกิดผลเสียที่ debug ได้ยากได้ แต่การใช้ `let` และ `const` จะถูก block ไว้ 

ตัวอย่างจาก MDN

```javascript
function varTest() {
  var x = 1;

  // different scope
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;

  // different scope
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

## Data Types ประเภทของตัวแปร

1. Primitive Types - ตัวแปรพื้นฐาน
2. Object Types - ตัวแปรแบบวัตถุ

ในที่นี้จะกล่าวถึงตัวแปรแบบ Primitive Types ก่อนนะครับ

## Primitive Types

1. Numbers
2. String
3. Boolean
4. Null
5. Undefined

### Numbers

ตัวเลขใน javascript จะเป็น type number หมดไม่ว่าเป็น integer หรือ float แม้กระทั่ง `Infinity` และ `NaN` (Not a Number)

```javascript
let myMoney = 100;
let height = 173.5;
console.log(1 / 0); // Infinity
console.log(0 / 0); // NaN
```

เราสามารถตรวจสอบ type ของตัวแปรได้โดยใช้ `typeof` keyword.

```javascript
typeof myMoney; // "number"
typeof height; // "number"
typeof Infinity; // "number"
typeof NaN; // "number"
```

`NaN` มันคือ "Not a Number" แต่ว่า `typeof NaN` คือ `"number"` อืมมมมมมมมมมม... ไอ่ตัวนี้ทำผมตกม้าตายไปหลายทีละ 555555

### String

หรืออักขระนั่นเอง สามารถประไว้กายใต้ single quote หรือ double quotes ก็ได้

```javascript
let address = "123 st. downtown";
const firstname = 'Teerapat';
```

### Boolean

ตัวแปรประเภทตรรกกะ มีสองค่าคือ `true` กับ `false`.

```javascript
let isChild = true;
const isChecked = false;
```

### Null

ตัวแปรที่มีค่าเป็น `null` จะถูกใช้กับตัวแปรที่ไม่มีค่าใด ๆ เลย หรือตัวแปรที่เราไม่ทราบค่า

> It’s just a special value which represents “nothing”, “empty” or “value unknown”.

```javascript
let myBox = null;
```

### Undefined

ความหมายของ `undefined` คือตัวแปรที่ยังไม่ถูกกำหนดค่าเข้าไป หรือว่าประกาศไปแล้วแต่ยังไม่ได้กำหนดค่าให้

```javascript
let a = undefined;

let b;
console.log(b); // undefined
```

### ความแตกต่างระหว่าง `null` กับ `undefined`

```javascript
typeof null; // object (for legacy reasons)
typeof undefined; // undefined

// also you can check
null === undefined; // false
```

## Operators ตัวดำเนินการ

บวก `+`  
ลบ `-`  
คูณ `*`  
หาร `/`  
กำหนดค่า `=`

```javascript
2 + 3; // 5
3 - 1; // 2
4 * 6; // 24
22 / 7; // 3.142857142857143
```

ถ้าเราใช้ `+` กับ `string` เราจะได้ข้อความที่ต่อกัน

```javascript
let firstname = "Teerapat";
let lastname = "Prommarak";
let fullname = firstname + " " + lastname; // Teerapat Prommarak
```

ถ้าเราใช้ `+` กับ `strings` และ `number`, มันจะต่อกันกลายเป็น `string` โดยอัตโนมัติ

```javascript
1 + "2"; // "12"
```

### Shortened assigned การกำหนดค่าโดยเขียนแบบย่อ

```javascript
let num = 1;
num += 2; // equal num = num + 2
```

### Other operators ตัวดำเนินการประเภทอื่น ๆ

Remainder `%`  การหาเศษจากการหาร  
Power `**` การยกกำลัง

```javascript
10 % 3; // 1
2 ** 3; // 8
```

### Operator precedence ลำดับการดำเนินการก่อนหลังของตัวดำเนินการ

```javascript
3 + 4 / 5; // 3.8 (just like 3 + (4 / 5))
9 * 2 - 7; // 11
```

[see more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

### Increment and Decrement

```javascript
let count = 10;
count++;
consol.log(count); // 11

let num = 12;
num--; // 11
consol.log(num); // 11
```

### Logical operators ตัวดำเนินการประเภทตรรกะ

และ `&&`  
หรือ `||`  
ไม่ `!`

```javascript
true && true; // true
true && false; // false
false && false; // false

true || true; // true
true || false; // true
false || false; // false

!true; // false
!null; // false
!(3 <= 4); // false
```

## Types Conversion การเปลี่ยนประเภทของตัวแปร

### Numeric conversion เปลี่ยนเป็น number

```javascript
let num = "123"; // 123 as string
let realNum = Number(num); // 123 as number
```

### String conversion เปลี่ยนเป็น string

```javascript
let isCorrect = true; // boolean
let isCorrectString = String(isCorrect); // "true" as string
```

### Boolean conversion เปลี่ยนเป็น boolean

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hi")); // true
console.log(Boolean("") ; // false
```

## String Methods วิธีการจัดการกับ string แบบต่าง ๆ

### String Indices

string จะมีดัชนี (index), ในแต่ละตัวอักษรเราสามารถเข้าถึงได้โดยใช้ index

| s   | t   | r   | i   | n   | g   |
| --- | --- | --- | --- | --- | --- |
| 0   | 1   | 2   | 3   | 4   | 5   |

การใช้ `str.length` จะคืนค่าจำนวนตัวอักษร

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.length; // 16, spaces include.
```

### Accessing characters การเข้าถึงแต่ละตัวอักษร

```javascript
myFavsong[0]; // M
myFavsong[2]; // ' ' space
myFavsong[myFavSong.lenght - 1]; // h , last character
```

### Strings are immutable

ตัวแปรประเภท string ไม่สามารถเปลี่ยนค่าได้

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong[0] = "D";
console.log(myFavSong); // still "My Stupid Mouth"
```

### Uppercase and Lowercase การเปลี่ยนเป็นตัวพิมพ์ใหญ่ พิมพ์เล็ก

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.toUpperCase(); // 'MY STUPID Mouth'
myFavSong.toLowerCase(); // 'my stupid Mouth'
```

### Getting a substring การเข้าบางส่วนของ string

สามารถใช้ `str.slice(start, [end])` โดยที่ตัวเลขสุดท้ายจะไม่ถูกรวมเข้าไป

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.slice(3, 9); // 'Stupid' space not include
myFavSons.slice(11); // Mouth from 11 till the end
```

### Search for substring การหาตำแหน่งของอักขระ

ใช้ `str.indexOf` ถ้าไม่เจอ จะคืนค่าเป็น -1

```javascript
myFavSong.indexOf("Mouth"); // 10
myFavSong.indexOf("TEAM"); // -1 if not found
```

### includes, startWith and endsWith

การค้นหาอักษรบางส่วนใน string สามารถใช้ `includes` ได้ แต่วิธีนี้จะคืนค่าเป็น boolean  
การใช้ `startWith` จะเป็นการตรวจสอบว่าขึ้นต้นด้วย ... หรือไม่  
การใช้ `endWith` จะเป็นการตรวจสอบว่าลงท้ายด้วย ... หรือไม่

```javascript
myFavSong.includes("Mouth"); // true
myFavSong.includes("TEAM"); // false

myFavSong.startWith("My"); // true
myFavSong.endsWith("Yes"); // false
```

### Trimming white space การลบช่องว่างใน string

สามารถใช้ `str.trim()` แต่จะลบเฉพาะหัวกับท้ายเท่านั้น

```javascript
let song = "      Back To You       ";
song.trim(); // 'Back To You' spaces between are not remove
```

### Replace การแทนที่ด้วย string อื่น

สามารถใช้ `replace`

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.replace("My", "Your"); //'Your Stupid Mounth'
```

## Math Object การใช้ฟังก์ชั่นคณิตศาสตร์

มีวิธีการใช้ที่เป็นที่นิยมดังต่อไปนี้

```javascript
Math.PI; // 3.141592653589793
Math.floor(5.8); // 5 ปัดทศนิยมทิ้งไม่ว่าจะเป็นเท่าไหร่
Math.round(5.4); // 5, ปัดตามหลักคณิตศาสตร์ ถ้าเป็น 5.5 หรือมากกว่าก็จะได้ 6
Math.ceil(5.1); // 6 ปัดทศนิยมขึ้น
Math.abs(-123); // 123
Math.pow(3, 6); // 729, เหมือนกับ 3 ** 6
Math.random(); // สุ่มตัวเลขตั้งแต่ 0 ถึง 1

// example for dice rolling
Math.floor(Math.random() * 6) + 1; // result from 1 to 6
```

### parseInt and parseFloat

ใช้สำหรับแปลงค่าเป็น number

```javascript
parseInt("24"); // 24
parseInt("24.54"); // get only 24
parseFloat("24.54"); // 24.54
parseFloat("2dsfsdf"); // 2
parseInt("Deeeee"); // NaN
```

สำหรับเนื้อหาบทนี้ ก็ขอจบไว้เท่านี้ก่อนนะครับ ไว้จะมาต่อเรื่อย ๆ ครับผม (ถ้ามีเวลา จะพยายามมี 55555555)
