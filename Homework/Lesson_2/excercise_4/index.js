import { MainElements } from '../../../constants/Homework/Lesson_2/excercise_4.js'
import { injectTagHTML } from '../../../utils/InjectElements.js'

MainElements.map(element => injectTagHTML(element.tag, element.src, element.style))