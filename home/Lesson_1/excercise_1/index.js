import { MainElements } from '/constants/homework/Lesson_1/excercise_1.js'
import { injectTagHTML } from '/utils/InjectElements.js'

MainElements.map(element => injectTagHTML(element.tag, element.src, element.style))