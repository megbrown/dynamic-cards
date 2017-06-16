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
var deleteBtn = document.getElementById("deleteBtn");
var newCard = document.getElementsByClassName("card");

createBtn.addEventListener("click", function() {
	cardsArea.innerHTML +=
	`<div class="card">
	 <h1>${textInput.value}</h1>
	 <button id="deleteBtn">Delete</button>
	 </div>`
});

cardsArea.addEventListener("click", function() {
	cardsArea.remove(cardsArea.newCard);
})



