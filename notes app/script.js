// This line selects the HTML element with the class "notes-container" and assigns it to the constant variable notesContainer.
// This element will contain all the notes created by the user. It is where the notes will be appended and displayed.
const notesContainer = document.querySelector(".notes-container");

// This line selects the HTML element with the class "btn" and assigns it to the constant variable createBtn.
// This button is intended to create new notes when clicked.
const createBtn = document.querySelector(".btn");

// This line selects all HTML elements with the class "input-box" and assigns them to the variable notes.
// The notes variable will be a NodeList (similar to an array) containing all the current notes in the document.
// Since this variable is declared with let, it can be reassigned later, allowing the script to update the list of notes as new ones are created or existing ones are deleted.
let notes = document.querySelectorAll(".input-box");


// showNotes(): This function loads the notes from localStorage and displays them in the notesContainer.
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// updateStorage(): This function saves the current state of notesContainer (the notes) to localStorage.
function updateStorage(){
    locatStorage.setItem("notes", notesContainer.innerHTML);
}

// This function adds a delete event to each delete icon (an image in each note) so that clicking it will remove the note and update the storage.
function attachDeleteEvent() {
    let deleteIcons = notesContainer.querySelectorAll("img");
    deleteIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            icon.parentElement.remove();
            updateStorage();
        });
    });
}


// This function adds an input event to each note, so any changes to a note will be saved to localStorage.
function attachInputEvent() {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.addEventListener("input", function() {
            updateStorage();
        });
    });
}


// The createBtn event listener function is responsible for creating a new note when the button is clicked.
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})


// This JavaScript code manages a simple note-taking application that allows users to create, delete, and store notes.
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
//-------------------------------------------------------------------------------
// document.addEventListener("keydown", event =>{
//     document.execCommand("insertLineBreak");
//     event.preventDefault();
// }
// )
//--------------------------------------------------------------------------------
