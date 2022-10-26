function calculateTotal(subTotal, tax) {
  return subTotal + tax
}

let order1, order2, order3
order1 = calculateTotal(156, 20)
order2 = calculateTotal(256, 20)
order3 = calculateTotal(356, 20)
console.log(order1, order2, order3)
