import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "JavaScript基础",
      icon: "book",
      prefix: "javaScript/",
      children: "structure",
    },
    {
      text: "Vue",
      icon: "book",
      prefix: "vue/",
      children: "structure",
    },
    {
      text: "TypeScript",
      icon: "book",
      prefix: "typeScript/",
      children: "structure",
    },
    {
      text: "Css",
      icon: "book",
      prefix: "css/",
      children: "structure",
    },
    {
      text: "nodejs",
      icon: "book",
      prefix: "nodejs/",
      children: "structure",
    },
    {
      text: "other",
      icon: "book",
      prefix: "other/",
      children: "structure",
    },
  ],
});
