// Requirements

// When the user enters in text into the text area and then clicks the create button,
// create a new card element in the DOM that includes it's own delete button. You decide
// the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM. Not just made invisible, actually
// removed from the DOM.

let textInput = document.getElementById("input-area");
let createBtn = document.getElementById("createBtn");
let cardsArea = document.getElementById("cardsArea");
let card = document.createElement("div");
let deleteBtn = document.getElementsByClassName("delete");

function makeCard() {
	let card = document.createElement("div");
	card.setAttribute("class", "card");
	card.innerHTML = `<h1>${textInput.value}</h1>`
	cardsArea.appendChild(card);
	deleteBtns(card);
}

function deleteBtns(card) {
	console.log("hey");
	let deleteBtn = document.createElement("button");
	deleteBtn.setAttribute("class", "delete");
  deleteBtn.innerHTML = "Delete";
	card.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", function(){
		cardsArea.removeChild(card);
	})
}

createBtn.addEventListener("click", function() {
	makeCard();
});