const dropdownValue = document.querySelector('#cars')
// const arrayCar = ['myvi', 'yaris', 'hrv']
const arrayCar = [
  {
    id: 1,
    name: `myvi`,
  },
  {
    id: 2,
    name: `yaris`,
  },
  {
    id: 3,
    name: `angsa`,
  },
]

arrayCar.forEach((car) => {
  const id = car.id
  const name = car.name
  const text = document.createElement('option')
  text.innerHTML = `<option value="${car.id}" class="select-selected">${car.name}</option>`
  console.log(text.value)
  dropdownValue.appendChild(text)
  // //   divah.appendChild(text)
  // console.log(car.id)
})

const hellow = document.querySelector('#helloworld')

hellow.addEventListener('mouseenter', function () {
  hellow.classList.add('offset-1')
})
hellow.addEventListener('mouseleave', function () {
  hellow.classList.remove('offset-1')
}) //HOVER OUT
