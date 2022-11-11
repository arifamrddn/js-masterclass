//using selectors inside the element

const questions = document.querySelectorAll('.question')
questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn') //cari button dalam satu div tu je terus kita dah limitkan. gini cara dia
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text')
      }
    })
    question.classList.toggle('show-text')
  })
})

//traverse dom
// const btns = document.querySelectorAll('.question-btn')
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     btn.parentElement.parentElement.classList.toggle('show-text')
//   })
// })
