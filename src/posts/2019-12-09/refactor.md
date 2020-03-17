---
title: 'Refactor My Blog'
date: '2019-12-09'
---

I just refactored my blog based on Markdown files. เพราะดูทรงแล้ว Contentful ไม่ตอบโจทย์การทำ Syntax Highlighting เท่าไหร่ (ที่จริงอาจจะมีวิธีทำได้) เมื่อลองบวกลบคูณหารดูแล้ว ใช้ Markdown ตั้งแต่แรกเลยน่าจะโอเคกว่า

```javascript
const formData = {};

for (let input of [creditCardInput, termsCheckBox, veggieSelect]) {
  input.addEventListener('input', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}
```

```shell
npm install -g gatsby-cli
```

ด้วยประการฉะนี้แล...
