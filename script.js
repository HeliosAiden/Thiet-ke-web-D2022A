import { HTMLElements } from '../constants/index.js'
import { injectHTML } from './utils/InjectElements.js'

HTMLElements.map(element => injectHTML(element.id, element.path))