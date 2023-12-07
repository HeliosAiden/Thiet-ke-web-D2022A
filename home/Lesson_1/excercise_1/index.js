import { injectTagHTML } from "../../../utils/InjectElements.js";

const MainElements = [
  {
    tag: "iframe",
    src: "home/Lesson_1/excercise_1/bai1.html",
    style: "width: 95%; height: 80vh; margin-left:6%",
  },
];

MainElements.map((element) =>
  injectTagHTML(element.tag, element.src, element.style)
);
