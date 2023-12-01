import { injectHTML } from "../utils/InjectElements.js";
import { MainElements } from "../constants/main.js";
MainElements.map(element => injectHTML(element.id, element.path))
