import '../index.css'
import JS_IMAGE from '../assets/JavaScript.png'

console.log(`Hello World`)

const jsImageHTML = document.createElement(`img`)
jsImageHTML.className = `js-image`
jsImageHTML.src = JS_IMAGE

document.body.append(jsImageHTML)
