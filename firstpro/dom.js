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

const first = document.querySelector('.first')
const second = first.nextSibling.nextSibling
second.style.color = 'red'
console.log(second)
