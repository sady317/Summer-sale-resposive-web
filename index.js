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

function getUniversalData(card){
    const name=card.dataset.name
   const price=parseInt(card.dataset.price)
 
   totalprice+=price
    console.log(name,price)
    console.log("Totalprice",totalprice)
}