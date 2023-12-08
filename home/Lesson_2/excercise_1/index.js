import { injectTagHTML } from "../../../utils/InjectElements.js";

const MainElements = [
  {
    tag: "iframe",
    src: "home/Lesson_2/excercise_1/bai1.html",
    style: "width: 90%; height: 80vh; margin-left:10%",
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
