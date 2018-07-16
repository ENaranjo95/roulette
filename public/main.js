// user can make a bet
//how can user make a bet?
//enter amount of money
//press a button
//create a global variable to store the clicked card
const submit = document.getElementById('submit')
const name = "Edwin"
let pot = 0

submit.addEventListener('click', function(e){
 e.preventDefault()
 displayName(document.getElementById('name').value)
 displayMoney(document.getElementById('bank').value)
})

document.getElementById('five').onclick = five
document.getElementById('fifteen').onclick = fifteen
document.getElementById('twenty').onclick = twenty

//function for 5 dollar bet
function five (){
  // This tells us that he is making a $5 bet
  const bet = 5;
  // Store the value of the select tag
  let select = document.getElementById('select').value
  // Store the bet in a pot to show in the DOM
  pot += bet
  spin(select)
}

//function for 15 dollar bet
function fifteen (){
  // This tells us that he is making a $15 bet
  const bet = 15;
  // Store the value of the select tag
  let select = document.getElementById('select').value
  // Store the bet in a pot to show in the DOM
  pot += bet
  spin(select)
}
//function for 20 dollar bet
function twenty (){
  // This tells us that he is making a $5 bet
  const bet = 20;
  // Store the value of the select tag
  let select = document.getElementById('select').value
  // Store the bet in a pot to show in the DOM
  pot += bet
  spin(select)
}
function spin(userChoice) {
  let num = Math.random()
  console.log(num)
  if (num <= .165){
    compare("R1", userChoice)
  }else if(num <= .33){
    compare("B2", userChoice)
  }else if(num <= .495){
    compare("R3", userChoice)
  }else if(num <= .66){
    compare("B4", userChoice)
  }else if(num <=.825){
    compare("R5", userChoice)
  }else{
    compare("B6", userChoice)
  }
}

// User can win or lose
function compare(choice, user){
  // Conditional function
  // Compare user choice to outcome
  if (choice === user){
    win(pot)
    alert(`You Win!`)
  }else{
    loss(pot)
    alert(`You Lose!`)
  }
}

function loss(name, cash){
  console.log(name, cash)
  fetch('loss', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'cash': cash
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
}

function win(name, cash){
  console.log(name, cash)
  fetch('mula', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'cash': cash
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
}

function displayName(name){
  document.getElementById('user').innerText = name
}
function displayMoney(wallet){
  document.getElementById('wallet').innerText = wallet
}
