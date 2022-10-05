const appendTask= () => {
  let list = document.createElement("li");
  let taskItems = document.getElementsByTagName("input")[0].value;
  let textItem = document.createTextNode(taskItems);
  list.appendChild(textItem);
  if (taskItems === '') {
    alert("Task Cannot Be Blank!");
  } else {
    document.getElementById("newTask").prepend(list);
    
  }
  
  let span = document.createElement("span");
  let txt = document.createTextNode("x");
  span.className = "close";
  span.append(txt);
  list.appendChild(span);

  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
}

 const publish = () => {
  console.log(publish);
  var tasks = document.querySelector("newTask").value;
  for(let i=0; i<tasks.length;i++){

  }

}
