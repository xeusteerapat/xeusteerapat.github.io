---
title: 'MongoDB local setup'
date: '2019-12-04'
---

สวัสดีครับ วันนี้จะมาแนะนำการติดตั้ง MongoDB Community Edition ใน macOS นะครับ ซึ่งจริง ๆ แล้วก็ทำตามวิธีที่ทางเว็บไซต์ของ [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) เลย แต่ก็จะมีการสร้าง folder สำหรับ datatbase เพิ่มเติมนิดหน่อย

MongoDB เป็นฐานข้อมูลแบบ NoSQL คือไม่มี relation ของตารางแบบ SQL แต่เก็บข้อมูลเป็นแบบ JSON (JavaScript Object Notation) แทน โดยจะเก็บเป็น key-value pair (มันก็คือ JSON นั่นเอง)

วิธีการก็ตามขั้นตอนต่อไปนี้ครับ

1. ติดตั้ง Home brew ก่อน

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. จากนั้นให้พิมพ์คำสั่ง

```shell
brew tap mongodb/brew
```

3. จากนั้นก็ติดตั้ง mongodb community

```shell
brew install mongodb-community@4.2
```

4. MongoDB ก็จะถูกติดตั้งลงในเครื่องของเรา ทีนี้เราต้องสร้าง Folder ที่ใช้เก็บฐานข้อมูลใน root directory

```shell
sudo mkdir -p /data/db
```

5. แต่ทีนี้เราต้องเปิด permission เพื่อให้สามารถเขียนข้อมูลได้

```shell
sudo chown -R whoami ~/data/db
```

6. เสร็จแล้วทีนี้ การเรียกใช้งานเพื่อ run service ของ mongodb ก็ทำได้โดย

```shell
mongod --dbpath 'fullpath/data/db'
```

คร่าว ๆ ก็ประมาณนี้ blog ต่อไปจะมาแนะนำการใช้งาน MongoDB คร่าว ๆ ครับ
