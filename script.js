buttontest = document.querySelector('button');
buttontest.disabled = true;


function emptyInput() {
  
  if (document.querySelector("input").value === ''){
    buttontest.disabled = true;
  } else {
    buttontest.disabled = false;
  }
}
 document.getElementById('addtask').onclick = function pushTask() {
    
  let view = document.getElementById("view");
    let newTd = document.createElement("li");
    let delButton = document.createElement('button');
    delButton.innerHTML = 'Delete task';
    let inputText = document.getElementById("inputText").value;
    let node = document.createTextNode(inputText);
    let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = false;

    
    newTd.appendChild(node);
    view.appendChild(newTd);
    newTd.appendChild(checkbox);
    newTd.appendChild(delButton);
    document.getElementById('inputText').value='';

    delButton.addEventListener('click', function() {
      // Get the parent li element
      let liElement = this.parentElement;
  
      // Remove the li element from the DOM
      view.removeChild(liElement);
    });
  };
  
  

  document.getElementById('reset').onclick = function() {
    view.innerHTML = "";
  }
  
  

  

  
  
   

  


