let billAmount = 100
let numberOfDiners = 5
let service = 'terrible'

const tip = () => { // calculates the tip that should be paid based on the service //
  if (service === 'great') {
    return 0.2 // 20% tip //
  } else if (service === 'good') {
    return 0.15 // 15% tip //
  } else if (service === 'terrible') {
    return 0.1 // 10% tip //
  } 
}

let totalTip = billAmount * tip() // calculates the Total Tip based on the service and the bill //

let totalBill = billAmount + totalTip // calculates the Total Bill by adding the bill and the tip //

let moneyPerPerson = totalBill/numberOfDiners // calculates how much money each person owes by dividing the Total Bill by the number of people //

console.log('TIP CALCULATOR:')
console.log('Total tip: $' + totalTip)
console.log('Total bill with tip: $' + totalBill)
console.log('What each person owes: $' + moneyPerPerson)