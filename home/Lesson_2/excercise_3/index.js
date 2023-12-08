import { injectTagHTML } from "../../../utils/InjectElements.js";

const MainElements = [
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai1.html",
    style: "width: 100%; height: 25vh;",
  },
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai2.html",
    style: "width: 100%; height: 50vh; margin-top: 50px",
  },
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai3.html",
    style: "width: 100%; height: 40vh; margin-top: 50px",
  },
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_3/bai4.html",
    style: "width: 100%; height: 50vh; margin-top: 50px",
  },
];

const wrapper = document.createElement('div')
wrapper.className='main-wrapper'
document.body.appendChild(wrapper)

MainElements.map((element) => {
  const tagEl = injectTagHTML(element.tag, element.src, element.style)
  wrapper.appendChild(tagEl)
}
);
