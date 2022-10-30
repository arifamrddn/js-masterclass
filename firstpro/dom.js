//Document object model

////////////////////////////////////////////////////////
//window object = browser api
//document
//console.dir

// console.dir(document)

////////////////////////////////////////////////////
//getElementById('element')

// const h1 = document.getElementById('title')
// h1.style.color = 'red'

// const btn = document.getElementById('btn')
// btn.style.backgroundColor = 'blue'
// btn.style.color = 'white'

///////////////////////////////////////////////////////
//getElementsByTagName('tagname')

// const headings = document.getElementsByTagName('h2')
// //array like objects but cannot user array methods

// headings[0].style.color = 'red'

// const items = document.getElementsByTagName('li')
// items[2].style.color = 'orange'
// //querySelectorAll()
// //nodelist - objects are collections of nodes
// //can run foreach
// //turn them into array - spread operator [...]

// const betterItems = [...items]
// betterItems.forEach(function (item) {
//   console.log(item)
// })
// console.log(items)
// console.log(betterItems)

///////////////////////////////////////////////////////
//getelementsbytag

//HTMLCollection
// const listItems = document.getElementsByClassName('special')
// listItems[2].style.color = 'blue'
// console.log(listItems)

////////////////////////////////////////////////////////
//queryselector -single
//queryselectorall -all
//can use foreach

// const result = document.querySelector('#result') //#cari id
// result.style.backgroundColor = 'blue'

// const item = document.querySelector('.special') //.cari class
// // console.log(item)

// const lastItem = document.querySelector('li:last-child') //cari tag yang last child
// // console.log(lastItem)

// const list = document.querySelectorAll('.special')
// console.log(list)

// list.forEach(function (item) {
//   console.log(item)
//   item.style.color = 'yellow'
// })

///////////////////////////////////////////////////////

//childNodes - returns all childNodes including whitespace
// const result = document.querySelector('#result')
// // const allChildren = result.childNodes
// // console.log(allChildren)

// const children = result.children
// console.log(children)
// console.log(result.firstChild)
// console.log(result.lastChild)

////////////////////////////////////////////////////////
//find parent

// const heading = document.querySelector('h2')
// console.log(heading.parentElement)
// const parent = heading.parentElement
// parent.style.color = 'red'

///////////////////////////////////////////////////////////
// previussibling
// nextsibling
// returnwhitespace

// const first = document.querySelector('.first')
// const second = first.nextSibling.nextSibling
// second.style.color = 'red'
// console.log(second)

// const last = document.querySelector('#last')
// const third = last.previousSibling.previousSibling
// console.log(third)
// console.log(last.nextSibling)

//previousElementSibling
//nextElementSibling

// const first = document.querySelector('.first')
// first.nextElementSibling.ne.style.color = 'red'
// const last = document.querySelector('#last')

//nodeValue
//textContent

// const item = document.getElementById('special')
// const value = item.nodeValue
// console.log(item.firstChild.nodeValue)
// const easyValue = item.textContent
// console.log(easyValue)

////////////////////////////////////////////////////////////////////////
//getAttribute
//setAttribute

// const first = document.querySelector('.first')
// const classValue = first.getAttribute('class')
// console.log(classValue)
// const idValue = first.getAttribute('id')
// console.log(idValue)

// const link = document.getElementById('link')
// const showlink = link.getAttribute('href')
// console.log(showlink)

// const last = link.nextElementSibling
// last.setAttribute('class', 'first')
// last.textContent = `i also have a class of first`

// const links = document.querySelectorAll('.first')
// console.log(links)

////////////////////////////////////////////////////////////////////////
// css element
//className
//classList

// const first = document.getElementById('first')
// const second = document.getElementById('second')
// const third = document.getElementById('third')

// const classValue = first.className
// // console.log(classValue)
// second.className = 'colors text'

// // third.classList.add('colors') //tambah satu satu class in
// // third.classList.add('text')
// third.classList.add('text', 'colors') //kalau tambah multiple
// third.classList.remove('text') //kalau tambah multiple

// let result = third.classList.contains('colors')
// if (result) {
//   console.log('hellow worlds')
// } else {
//   console.log('meowmeow')
// }

///////////////////////////////////////////////////////////////////
//createElement('element)
//createTextNode('text content')
//element.appendChild('')

// const result = document.querySelector('#result')

// //create empty element
// const bodyDiv = document.createElement('div')
// //create text node
// const text = document.createTextNode('a simple body div')
// bodyDiv.appendChild(text)
// document.body.appendChild(bodyDiv)

// const heading1 = document.createElement('h2')
// const headingText = document.createTextNode('dynamicHeading')
// heading1.appendChild(headingText)
// heading1.classList.add('blue')
// result.appendChild(heading1)
// console.log(result.children)

//InsertBefore('element','location')

// const result = document.querySelector('#result')
// const first = document.querySelector('.red')
// //create empty element
// const bodyDiv = document.createElement('div')
// //create text node
// const text = document.createTextNode('a simple body div')
// bodyDiv.appendChild(text)
// document.body.insertBefore(bodyDiv, result)
// //result element
// const heading1 = document.createElement('h2')
// const headingText = document.createTextNode('dynamicHeading')
// heading1.appendChild(headingText)
// heading1.classList.add('blue')

// result.insertBefore(heading1, first)

// // ReplaceChild(new,old)
// const smallHeading = document.createElement('h6')
// const smallText = document.createTextNode(`i'm small heading text`)

// smallHeading.classList.add('red')
// smallHeading.appendChild(smallText)
// document.body.replaceChild(smallHeading, bodyDiv)

//prepend
//innerText

// const heading2 = document.createElement('h2')
// heading2.innerText = `i am a dynamic heading`

// document.body.prepend(heading2) //letak depan before script jalan

//remove
//removeChild

// const result = document.querySelector('#result')
// // result.remove()
// const heading = result.querySelector('h1')
// result.removeChild(heading)
// console.log(heading)

///////////////////////////////////////////////////////////////

// innerHTML
//textContent

// const list = document.getElementById('first')
// const div = document.getElementById('second')
// const item = document.querySelector('.item')

// console.log(div.textContent)
// console.log(list.innerHTML) //CARI HTML CONTENT

// const ul = document.createElement('ul')
// ul.innerHTML = `<li class="item">list item</li>
//       <li>list item</li>`
// document.body.appendChild(ul)
// item.appendChild(ul)

/////////////////////////////////////////////////////////////////
// CSS

// const random = document.querySelector('.random')
// console.log(random.style)
// random.classList.add('title')

//////////////////////////////////////////////////////////////
// event
//really interactive

//select element
//addEventListener()
//what event, what to do

// const btn = document.querySelector('.btn')
// const divah = document.querySelector('.divah')
// const heading = document.querySelector('h2')
// const text = document.createElement('h3')
// // btn.addEventListener('click', function () {
// //   text.innerHTML = `<button class="btn">click me pulak</button>`
// //   divah.appendChild(text)
// //   h2.classList.add('title')
// // })

// function changeColor() {
//   // console.log('hello')
//   let hasClass = heading.classList.contains('red')
//   if (hasClass) {
//     heading.classList.remove('red')
//   } else {
//     heading.classList.add('red')
//   }
// }

// btn.addEventListener('click', changeColor) //jangan tambah () nnti dia execute

//////////////////////////////////////////////////////////////////
// click - fires after full action occurs
//mousedown - button is pressed
//mousedown - button is released
//mouseenter - moved onto an element
// mouseleave - moved out of an element

// const heading = document.querySelector('h1')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', function () {
//   console.log('you click me') //third
// })
// btn.addEventListener('mousedown', function () {
//   console.log('down') //first
// })
// btn.addEventListener('mouseup', function () {
//   console.log('up') //second
// })

// //HOVER!!!!
// heading.addEventListener('mouseenter', function () {
//   heading.classList.add('blue')
// }) //HOVER IN
// heading.addEventListener('mouseleave', function () {
//   heading.classList.remove('blue')
// }) //HOVER OUT

////////////////////////////////////////////////////////////////
//keypress - when key is pressed
//keydown - when key is down
//keyup - when key is released

const nameInput = document.getElementById('name')

nameInput.addEventListener('keypress', function () {
  const text = `this input is required \n`
  document.body.append(text)
})
nameInput.addEventListener('keydown', function () {
  console.log(nameInput.value)
})
