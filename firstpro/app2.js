//wrapper string object
// let text = ' Peter Jordan'
// let result = text.length
// console.log(result)
// console.log(text.toLocaleLowerCase())
// console.log(text.toUpperCase())
// console.log(text.charAt(1))
// console.log(text.charAt(11))
// console.log(text.charAt(result - 1)) //paling last
// console.log(text.indexOf('P')) //-1 kalau tak jumpa
// console.log(text)
// console.log(text.trim())
// console.log(text.trim().toLowerCase().startsWith('peter'))
// console.log(text.includes('eter'))
// console.log(text.slice(0, 9))
// console.log(text.slice(-5))

// template literals ES6
// const name = 'john'
// const age = 25
// const value = `Hey its ${name} and he is ${age} and here som math ${4 + 4}`
// console.log(value)

// function fullName(firstName, lastName) {
//   let result = `${firstName} ${lastName}`
//   result = result.toUpperCase()
//   return result
// }

// var arum = fullName('Arif', 'Amiruddin')
// console.log(arum)

// function fullName({ firstName, lastName }) {
//   let result = `${firstName} ${lastName}`
//   result = result.toUpperCase()
//   return result
// }

// var arum = fullName({ lastName: 'Arif', firstName: 'Amiruddin' })
// console.log(arum)

//////////////////////////////////////////////////////////////////s
// array properties and method
// let name = ['john', 'bobo', 'barry', 'olga', 'ben']

// //length
// console.log(name.length)
// console.log(name[name.length - 1])

// //concat
// const lastNames = ['pepper', 'onion', 'banana']
// const allNames = name.concat(lastNames)
// console.log(allNames)
// console.log(allNames.reverse())

// // unshift
// allNames.unshift('susy') //masuk depan
// console.log(allNames)

// // unshift
// allNames.shift('susy') //remove depan
// console.log(allNames)

// //push
// allNames.push('susy')
// console.log(allNames)

// //push
// allNames.pop('susy')
// console.log(allNames)

// //splice - mutates original array
// const specificNames = allNames.splice(0, 3)
// console.log(specificNames)
// console.log(allNames)

// arrays and for loop
// const names = ['anna', ' susy', 'bob', 'john', 'susan']
// const lastName = 'shakeandbake'
// let newArray = []

// //for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(i)
//   console.log(names[i])
//   newArray.push(`${names[i]} ${lastName}`)
// }
// console.log(newArray)

//functions, return, if, arrays, for loop
// const gas = [20, 40, 100]
// const food = [10, 40, 50]

// function calculateTotal(arr) {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     total += arr[i]
//   }
//   if (total > 100) {
//     console.log(`You are spending way too much`)
//   } else {
//     console.log(`youre good fam`)
//   }
//   return total
// }

// let fooTotal = calculateTotal(food)
// console.log(fooTotal)

// console.log({
//   gas: fooTotal,
//   food: fooTotal,
// })

// primitive data type

// const number = 1
// let number2 = number
// number2 = 7
// console.log(`the first value is ${number}`)
// console.log(`the first value is ${number2}`)
// let person = { name: 'bob' }
// let person2 = person
// person2.name = `susy` //when assign to variable. will affect the refrence uwek
// console.log(`the prson is ${person.name}`)
// console.log(`the prson is ${person2.name}`)

//null and undefined
//null - developer sets the value
// let number = 20 + null //20+0
// let number = 20 + undefined //return NaN

// const text = 'john'

// if (text) {
//   console.log(`siye jadi`)
// } else {
//   console.log(`tak jadi bohh`)
// }
//js can evaluate true and false. string kosong '' can be false (bijok)

// // unary operator
// let text = `some test`
// console.log(typeof text)
// //binary operator
// let number = 3
// let number2 = 2 + 5

// const value = 2 > 1

// //terniary operator
// value ? console.log('value is true') : console.log('value is false')
// if (value) {
//   console.log('true')
// } else {
//   console.log(`false`)
// }

//////////////////////////////////////////////////////////////////////////
//global scope
//outside code block{} is a global scope
// let name = 'bobo'
// name = 'peter'
// console.log(`my name is ${name}`)

// function calculate() {
//   console.log(name)
//   name = `orange`
// }

// calculate()
// console.log(name)

//local scope
// variable within function cannot access outside the function

// let name = 'bobo'

// function calculate() {
//   //only const and let
//   const name = 'john'
//   const age = 25
//   becomeesGlobal = 'global variable'
// }
// calculate()
// console.log(becomeesGlobal)

//VARIABLE LOOKUP

// const globalNumber = 5

// function add(num1, num2) {
//   const globalNumber = 20
//   const result = num1 + num2 + globalNumber
//   return result
// }
// console.log(add(3, 4))

//akaan amik dalam function dulu, kalau takde baru amik kat global

// CALLBACK FUNCTION

// IF FUNCTION GET FUNCTION AS ARGUMENT
//function is pass in another function

// function greetAfternoon(name) {
//   const myName = `john`
//   console.log(`good afternoon ${name},my name is ${myName}`)
// }
// function morning(user) {
//   return `Good Morning ${user}`
// }

// function greet(name, cb) {
//   const myName = `john`
//   greetOpening = cb(name)
//   console.log(`${greetOpening},my name is ${myName}`)
// }

// greet('Bobo', morning) //function hantar as argument
// greetMorning('peter')

///////////////////////////////////////////////////////////
// array iterators methods

// forEach,map,filter,find,reduce

// const numbers = [0, 1, 2, 3, 4]

// //show all numbers

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }
//FOREACH
// const people = [
//   { name: 'bob', age: 20, position: 'dev' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'helmi', age: 36, position: 'booss' },
// ]
// function showPerson(person) {
//   console.log(person.position.toUpperCase())
// }
// people.forEach(showPerson)
// let person = people.reverse()
// person.reverse().forEach(function (item) {
//   console.log(item)
// })

//MAP

// const people = [
//   { name: 'bob', age: 20, position: 'dev' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'helmi', age: 36, position: 'booss' },
// ]

//MAP MODIFY AND SET IN NEW ARRAY
// const ages = people.map(function (person) {
//   console.log(person)
//   return person.age + 20
// })
// const newPeople = people.map(function (person) {
//   return { firstname: person.name.toUpperCase(), oldAge: person.age + 20 }
// })

// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`
// })

// document.body.innerHTML = names.join('')
// console.log(names)

//FILTER
//does return new array
//can manipulate the size of new array

const people = [
  { name: 'bob', age: 20, position: 'dev', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'helmi', age: 36, position: 'booss', id: 3, salary: 500 },
  { name: 'anna', age: 40, position: 'booss', id: 4, salary: 500 },
]

// const youngPeople = people.filter(function (person) {
//   return person.age <= 25
// })

// const developers = people.filter(function (person) {
//   return person.position === 'dev'
// })

// console.log(developers)

//FIND
//Return ObJECT
// RETURN FIRST MATCH
// GREAT OF UNIQUE VALUE
// no need to use [0] array untuk cari bende

// const names = ['bob', 'peter', 'susy']
// const person = people.find(function (person) {
//   return person.id == 3
// })
// console.log(
//   names.find(function (name) {
//     return name === 'bob'
//   })
// )
// console.log(person)

//REDUCE
// reduce value array into single value

// const total = people.reduce(function (acc, curr) {
//   console.log(`total ${acc}`)
//   console.log(`current money : ${curr.salary}`)
//   acc += curr.salary
//   return acc //must return this
// }, 0) //0) ni initialize value

// console.log(total)

///////////////////////////////////////////////////////////
// Math
// const number = 4.56789

// const result = Math.floor(number)
// const number = 4.56789
// const result = Math.ceil(number)

// const number = 4.56789
// const result = Math.sqrt(number)

// const result = Math.PI
// const result = Math.min(4, 5, 6, 7, 9)
// const result = Math.max(4, 5, 6, 7, 9)

// console.log(result)

////////////////////////////////////////////////////////
// Date
const date = new Date()
const month = date.getMonth() //kene ada lib dia uwek january - 0
console.log(month)
