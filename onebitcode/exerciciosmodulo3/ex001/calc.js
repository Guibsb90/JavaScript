import { charKeyBtn, clear } from "./mod2.js"
import { copyToClipboard } from "./mod3.js"
import { calculate } from "./mod3.js"


let input = document.querySelector('#input')

document.querySelector('#equal').addEventListener('click', calculate)

document.querySelector('#copyToClipboard').addEventListener('click', copyToClipboard)

document.querySelectorAll('.charKey').forEach(charKeyBtn)

document.querySelector('#clear').addEventListener('click', clear )

input.addEventListener('keydown', keys)

