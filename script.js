import { HTMLElements } from "constants/index.js";
import { injectHTML } from "utils/InjectElements.js";

HTMLElements.map((element) => {
  const oldDiv = document.querySelector(`#${element.id}`)
  if (!oldDiv) {
    const div = document.createElement("div");
    div.id = element.id;
    document.body.appendChild(div);
    console.log('loaded resources from script.js')
  } else {
    console.log('loaded resources from index.html')
  }
  injectHTML(element.id, element.path, element.images, element.style);
});
