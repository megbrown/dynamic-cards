// Requirements

// When the user enters in text into the text area and then clicks the create button,
// create a new card element in the DOM that includes it's own delete button. You decide
// the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM. Not just made invisible, actually
// removed from the DOM.

var textInput = document.getElementById("input-area");
var createBtn = document.getElementById("createBtn");
var cardsArea = document.getElementById("cardsArea");
var newCard = document.getElementsByClassName("card");
let card = document.createElement("div");


function makeCard() {
	let card = document.createElement("div");
	card.setAttribute("class", "card");
	card.innerHTML = `<h1>${textInput.value}</h1>`
	cardsArea.appendChild(card);
	deleteBtns(card);
}

function deleteBtns(card) {
	let deleteBtn = document.createElement("button");
	deleteBtn.setAttribute("class", "delete");
	console.log("hey");
  deleteBtn.innerHTML = "Delete";
	card.appendChild(deleteBtn);
}

createBtn.addEventListener("click", function() {
	makeCard();
});







