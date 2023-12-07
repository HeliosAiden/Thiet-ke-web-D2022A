import { injectTagHTML } from "../../../utils/InjectElements.js";

const MainElements = [
  {
    tag: "iframe",
    src: "home/Lesson_3/excercise_2/bai1.html",
    style: "width: 80%; height: 80vh; margin-left:20%;",
  },
];

MainElements.map((element) =>
  injectTagHTML(element.tag, element.src, element.style)
);