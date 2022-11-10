const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  // console.log(document.body)
  // const body = document.body
  // body.style.backgroundColor = '#f15025'

  //function
  let hexColor = '#'

  for (let i = 0; i < 6; i++) {
    const element = hex[getRandomNumber()]
    hexColor += element
  }
  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
})

function getRandomNumber() {
  const length = hex.length
  return Math.floor(Math.random() * length)
}
