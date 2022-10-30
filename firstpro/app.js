// document.write('hellow worlds');
// alert('hello worlds');
// console.log('hello worlds');

// document.write({ name: 'john' });
// alert({ name: 'john' });
// console.log({ name: 'john' });

//variables - most basic building block
//declare, assignment operator, assign value
// let name = 'Arif Amiruddin bin Yaacob';
// let address, zip, state;
// address = '101 main stress ';
// zip = '10100';
// state = 'shah alom';
///////////////////////////////////////////////////////////////////////////
//variable
//using var
// var value = 'some balue'

// //using let
// let name = 'john'

// //using const - cant re-assign
// const lastName = 'jordan'

// let firstName, last_name
// firstName = 'Arif Amiruddin'
// last_name = 'Yaacob'

// let address = 'main street'
// address = 'first street'
// console.log(firstName, last_name, address)

//////////////////////////////////////////////////////////////////////////
// quotation marks

// can use \' in a string untuk escape dia terstop

//concat
// const name = 'john'
// const lastname = 'shakeandbake'
// let fullname = name + ' ' + lastname

// console.log('hello : ' + fullname)

//backtick

////////////////////////////////////////////////////////////////////////////
// Numbers
// Loosely Typed = dont declare type

// const number = 34
// const number2 = 2.456

// const add = number + number2
// const add2 = number - number2
// const add3 = number * number2
// const add4 = number / number2

// let number = 40
// number += 5 //=45

// number++ //auto plus one

//////////////////////////////////////////////////////////////////////////////
// implicit

// math operation on a string?
// const name = 'john'
// const lastName = 'jordan'
// const value = name - lastName //return nan

// let number3 = '10'
// let number4 = '20'
// const value = number3 - number4 //return -10 //js do convert

// /////////////////////////////////////////////////////////////////////////
// // Data types 7 total

// // typeof - operator  (typeof variable) (typeof value) //nak tau dia type apa

// //string
// const text = 'some text'

// //number
// const number = 24

// //Boolean
// let valu1 = true
// let valu2 = false

// //null
// let result = null

// //undefined
// let result2

//symbol (ES6)

//return
// const wallHeight = 80

// function calculate(value) {
//   const newValue = value * 2.54

//   return newValue
// }

// const width = calculate(100)

// const height = calculate(wallHeight)

// const dimensions = [width, height]
// console.log(dimensions)

// // Function expressions
// const num1 = 10
// const num2 = 20
// const add = function (num1, num2) {
//   return num1 + num2
// }

// const thirdValue = add(5, 6)
// console.log(thirdValue)

// const multiply = (num1, num2) => num1 * num2
// console.log(multiply(2, 5))

////////////////////////////////////////////////////////
// object
// const person = {
//   name: 'john',
//   lastName: 'peters',
//   age: 40,
//   education: false,
//   married: true,
//   siblings: ['ana', 'susan', 'peter'],
//   greeting: function () {
//     console.log('Hello my name is John')
//   },
// }

// // dot Notation
// person.name = 'bob'
// console.log(person.name)
// console.log(person.siblings[2])
// person.greeting()

////////////////////////////////////////////////////////conditional statements
// >,<,>=,<=,==,===,!=,!===

// if (2 > 1) {
//   console.log('hellow')
//array
// const friend1 = 'anna'
// const friend2 = 'anna'
// const friend3 = 'anna'
// const friend4 = 'anna'

// const friends = ['anna', 'peter', 'bob', 45, undefined, null]

// console.log(friends)

//////////////////////////////////////////////////////////////////////////////
//functions

// function hello() {
//   console.log('hellow there bob')
//   console.log('hellow there ali')
//   console.log('hellow there meow')
// }

// hello()
// hello()
// hello()

// function hellow(name) {
//   console.log('hellow there ' + name)
// }

// hellow('bob')
// hellow('anna')
// hellow('suzy')

///////////////////////////////////////////////////////////////////
// conditional

const num1 = 6
const num2 = 6
// const result = num1 >= num2
// if (num1 > num2) {
//   console.log('first number is bigger than second')
// } else if (result) {
//   //when condition return true
//   console.log('number equal')
// } else {
//   console.log('second number is bigger than first')
// }

// const value = num1 == num2 //check value only
// const value2 = num1 === num2 //check value and type

// const value = num1 != num2 //check value only
// const value2 = num1 !== num2 //check value and type

// const name = 'peter'
// const age = 24

// if (name === 'bob' && age === 24) {
//   console.log('hellow there user')
// } else {
//   console.log('wrong values')
// }

//switch
// dice value

// const dice = 1

// switch (dice) {
//   case 1:
//     console.log('you got one')
//     break
//   case 2:
//     console.log('u got two')
//     break
//   case 3:
//     console.log('u got three')
//     break

//   default:
//     console.log('u did not roll the dice')
//     break
// }

///////////////////////////////////////////////////////////
// loops

// let amount = 10

// while (amount > 0) {
//   console.log('i have ' + amount + "dollars and i'm goint to the mall")
//   amount--
// }

// let money = 0

// do {
//   console.log('you have ' + money + 'dollars')
//   money++
// } while (money < 10)

// let i
// for (i = 0; i < 10; i++) {
//   console.log('and the number is' + i)
// }

// for (let number = 11; number >= 0; number--) {
//   console.log(number)
// }
