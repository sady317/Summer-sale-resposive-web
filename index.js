//NORMAL PRACTISE WAY
// function firstCard(){
//     const name=document.getElementById("first-card-name").innerText
//     const price=document.getElementById("first-card-price").innerText
//     console.log(name,price)

// }

// function secondCard(){
//     const name=document.getElementById("second-card-name").innerText
//     const price=document.getElementById("second-card-price").innerText
//     console.log(name,price)
// }
// function thirdCard(){
//     const name=document.getElementById("third-card-name").innerText
//     const price=document.getElementById("third-card-price").innerText
//     console.log(name,price)
// }

//THE BEST WAY OF PRACTISE

let totalprice=0
let discount=0

let displayEl=document.getElementById("display")
let totalPriceEl=document.getElementById("totalPrice")
let discountEl=document.getElementById("discount")
let totalEl=document.getElementById("total")



function getUniversalData(card){
  let name=card.dataset.name
  let price=parseInt(card.dataset.price)
  console.log(name,price)
  totalprice+=price
  console.log("TotalPrice:",totalprice)

  let li=document.createElement("li")
  li.classList.add("list-decimal")
  li.innerText=name
  displayEl.appendChild(li)
  totalPriceEl.innerText=totalprice
  totalEl.innerText=totalprice
}

function getInputDiscount(){
  let discountvalueEl=document.getElementById("discountvalue").value
  console.log(discountvalueEl)
discount=parseInt(totalprice*discountvalueEl/100)
discountEl.innerText=discount
totalEl.innerText=totalprice-discount
}

