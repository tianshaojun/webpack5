import helloWorld from './hello-world'
import imgsrc from './assets/1.png'
import logoSvg from './assets/1.svg'
import exampleText from './assets/example.txt'
import jpgMap from './assets/1.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json from './assets/data.json5'
import './async-module.js'
import _ from 'loadsh'

console.log(_.join(['index', 'module', 'loaded!'], ' '))

console.log(Data)
console.log(Notes)

console.log(toml.title)
console.log(toml.owner.name)

console.log(yaml, 'yaml')
// console.log(yaml.owner.name)

console.log(json.title)
console.log(json.owner.name)

helloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width:600px;height:200px'
img2.src = logoSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width:200px;height:200px;background:aliceblue'
block.classList.add('block-bg')
block.textContent = exampleText
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssText = 'width:600px;height:240px;display:block'
img3.src = jpgMap
document.body.appendChild(img3)

document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
span.innerHTML = '&#xe85c;'
document.body.appendChild(span)

const button = document.createElement('button')
button.textContent = '点击执行加法运算'
button.addEventListener('click', () => {
  import(/* webpackChunkName:'math', webpackPreload:true */ './math.js').then(
    ({ add }) => {
      console.log(add(4, 5))
    }
  )
})
document.body.appendChild(button)
