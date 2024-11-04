---
icon: pen-to-square
date: 2021-02-09
category:
  - JavaScript
tag:
  - JavaScript
star: true
sticky: true
---
# JavaScript 实现复制
在 JavaScript 中，有几种方式可以实现复制文本到剪贴板。以下是几种常用的方法：
## 方法 1：使用 navigator.clipboard.writeText（推荐）

```javascript
const textToCopy = "要复制的文本";
navigator.clipboard.writeText(textToCopy)
  .then(() => {
    console.log("文本已复制到剪贴板！");
  })
  .catch((err) => {
    console.error("复制失败：", err);
  });

```

## 方法 2：使用 document.execCommand（已废弃）

```javascript
function copyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    console.log("文本已复制到剪贴板！");
  } catch (err) {
    console.error("复制失败：", err);
  }
  document.body.removeChild(textArea);
}

copyText("要复制的文本");

```