"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Sarah Nodheim
   modified by: Tanvir Shafi
   Date:   2018-03-01
   
   Filename: tc_cart.js
	
*/
let arrayItem = "";
let description = "";
let arrayPrice = 0;
let arrayQty = 0;
let row = "";
let row1 = "";
let row2 = "";
let row3 = "";
let row4 = "";
let itemImage = "";
let finalrow = "";
let firstTotal = 0;
let secondTotal = 0;
let thirdTotal = 0;
let fourthTotal = 0;
let finalTotal = 0;


/* Record the total cost of the customer order */


/* The cartHTML variable will store the HTML code of the shopping cart table */
var cartHTML = "<table>";
cartHTML += "<tr><th colspan='2'>Item</th><th colspan ='1'>Description</th><th>Item Number</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// current formatter
function CurrencyFormater(n){
   return "$" + Number((n).toFixed(2)).toLocaleString();
}


/* Loop through the item array, adding one table row each item ordered */
for(var i =0; i<item.length; i++){
   //1st data
   itemImage = "<td><img class='center'src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   //2nd data
   description = itemDescription[i];
   //3rd data
   arrayItem = item[i];
   //4th data
   arrayPrice = itemPrice[i];
   //5th data
   arrayQty = itemQty[i];
   //6th data
   

   row = "<tr><td></td>"+itemImage+"<td id='leftText'>"+description+"</td><td >"+arrayItem+"</td><td class='centerText'>"+CurrencyFormater(arrayPrice)+"</td><td class='centerText'>"+arrayQty+"</td><td id='rightText'>"+CurrencyFormater(arrayPrice*arrayQty)+"</td></tr>";
   if(i===0){
      row1 = row;
      firstTotal=arrayPrice*arrayQty;
   } if(i===1){
      row2 = row;
      secondTotal=arrayPrice*arrayQty;
   } if(i===2){
      row3 = row;
      thirdTotal=arrayPrice*arrayQty;
   } if(i===3){
      row4 =row;
      fourthTotal=arrayPrice*arrayQty;
   }
   finalTotal=firstTotal+secondTotal+thirdTotal+fourthTotal;
   finalrow = "<tr><td></td><td></td><td></td><td></td><td colspan='2'>Grand total:</td><td>"+CurrencyFormater(finalTotal)+"</td></tr>";
   
}
document.getElementById("cart").innerHTML = cartHTML+row1+row2+row3+row4+finalrow;
//"<tr><td>"+arrayItem+"</td><td>"+description+"</td><td>"+arrayQty+"</td><td>"+arrayPrice+"</td></tr>"


/* Write the HTML code into the shopping cart table */

      
//<td></td>
