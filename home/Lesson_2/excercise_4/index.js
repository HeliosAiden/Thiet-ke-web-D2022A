import { injectTagHTML } from "../../../utils/InjectElements.js";

const MainElements = [
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_4/bai4.html",
    style: "width: 80%; height: 80vh; margin-left:20%",
  },
];

MainElements.map((element) =>
  injectTagHTML(element.tag, element.src, element.style)
);