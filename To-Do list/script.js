const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//function to add the task 
function addTask(){
    if(inputBox.value === ''){
        alert("invalid input, this field cannot be empty");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";  //to make the field empty after clicking on the add button
    saveData();  //whenever new data is added then this function will be called and will updated and saved in the browser
}


//function to mark a task complete and delete a task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();   //check and update while marking a task complete
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();  //check and update while deleting a task
    }
}, false);

//function to save the data upon refreshing the browser
function saveData(){
    localStorage.setItem("dataStore", listContainer.innerHTML);  //dataStore - all the data is saved to localStorage and saved in the variable "dataStore"
}

//after reloading the browser page, the restored data will be displayed using this function
function showTask(){
    listContainer.innerHTML = localStorage.getItem("dataStore");
}
showTask(); //calling the function to do the above task