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
  ],
});
