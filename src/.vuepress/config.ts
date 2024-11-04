import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "前端进阶",
  description: "前端进阶",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
