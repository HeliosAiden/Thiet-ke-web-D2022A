import { MainElements } from '../../../constants/Homework/Lesson_1/excercise_1.js'
import { injectTagHTML } from '../../../utils/InjectElements.js'

MainElements.map(element => {
    console.log(element.tag)
    injectTagHTML(element.tag, element.src, element.style)
})