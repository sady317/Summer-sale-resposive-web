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
let shoppingArr=["0"];

let displayEl=document.getElementById("display")
let totalPriceEl=document.getElementById("totalPrice")
let discountEl=document.getElementById("discount")
let totalEl=document.getElementById("total")

const applyBtnEl=document.getElementById("applyBtn")
const buyBtnEl=document.getElementById("buyBtn")


  buyBtnEl.disabled=true;
  buyBtnEl.style.cursor="not-allowed"
  buyBtn.classList.add("opacity-50");

  applyBtnEl.disabled=true;
  applyBtnEl.style.cursor="not-allowed"
  applyBtnEl.classList.add("opacity-50");


function getUniversalData(card){
  const name=card.dataset.name
  const id=card.dataset.id
  const price=parseInt(card.dataset.price)
  
  for(let i=0; i<shoppingArr.length;i++){
    if(shoppingArr[i]===id){
      return alert("You already purchase this product!")
    }
  }
  shoppingArr.push(id)
  console.log(shoppingArr)
    console.log(id, "id");
  
  totalprice+=price
  // console.log(id)
  // console.log(name,price)
  // console.log("TotalPrice:",totalprice)

  if(totalprice>0){
     buyBtnEl.disabled=false;
  buyBtnEl.style.cursor="pointer"
  buyBtn.classList.add("opacity-500");
  }
  if(totalprice>=200){
   applyBtnEl.disabled=false;
  applyBtnEl.style.cursor="pointer"
  applyBtnEl.classList.add("opacity-500");
  }

  let li=document.createElement("li")
  li.classList.add("list-decimal")
  li.innerText=name
  displayEl.appendChild(li)
  totalPriceEl.innerText=totalprice
  totalEl.innerText=totalprice
}

function getInputDiscount(){
  let discountvalueEl=document.getElementById("discountvalue").value
  // console.log(discountvalueEl)
  if(discountvalueEl==="SELL200"){
discount=parseInt(totalprice*2/100)
discountEl.innerText=discount
totalEl.innerText=totalprice-discount
  }
  else{
    alert("Invalid Coupon")
  }

}

