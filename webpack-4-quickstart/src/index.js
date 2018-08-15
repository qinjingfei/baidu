import style from "./main.css";

const body = document.querySelector('body')
let demo = document.createElement('div')
let string = "Hello World"
demo.innerHTML = `<h1>${string}</h1>`
body.appendChild(demo)