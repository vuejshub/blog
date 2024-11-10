---
icon: pen-to-square
date: 2021-02-10
category:
  - css
tag:
  - css 滚动条
star: true
sticky: true
---
# Css修改滚动条样式

## 实现
```css
/* 滚动槽 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
```

## 示例

![滚动条](img.png)