import { HomeElements } from 'constants/index.js'
import { injectHTML } from "utils/InjectElements.js";

HomeElements.map(element => {
    const div = document.createElement("div");
    div.id = element.id;
    document.body.appendChild(div);
    injectHTML(element.id, element.path, element.images, element.style)
})