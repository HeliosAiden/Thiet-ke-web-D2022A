import { injectTagHTML } from "../../../utils/InjectElements.js";

const MainElements = [
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai1.html",
    style: "width: 80%; height: 25vh; margin-left:20%;",
  },
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai2.html",
    style: "width: 80%; height: 50vh; margin-left:20%; margin-top: 50px",
  },
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai3.html",
    style: "width: 80%; height: 40vh; margin-left:20%; margin-top: 50px",
  },
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai4.html",
    style: "width: 80%; height: 50vh; margin-left:20%; margin-top: 50px",
  },
];

MainElements.map((element) =>
  injectTagHTML(element.tag, element.src, element.style)
);
