// 1. select everything that will be required
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");

// 2. user intercation
const inputHandler = function () {
    // click -> value get
    const newTask = input.value;
    if (newTask.length == 0)
        return;
    /*****addTask******/
    // element create 
    const taskElem = createTask(newTask);
    // append 
    taskList.appendChild(taskElem);
    // clear the input
    input.value = "";

    const deleteBtn = taskElem.children[1];

    const editBtn = taskElem.children[2];
    deleteBtn.addEventListener("click", function () {
        taskElem.remove();
    })


    editBtn.addEventListener("click", function(){
        const newText = prompt("Enter a new task");
        if(newText.length==0){
            return;
        }
        const data = taskElem.children[0];
        data.textContent = newText;
    })
}

function createTask(newTask) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "Delete";
    li.textContent = newTask;
    div.className = "task";
    const edit = document.createElement("button");
    edit.textContent = "Edit"; 
    button.style.margin = "10px";
    li.style.margin = "10px";
    edit.style.margin = "10px";
    div.appendChild(li);
    div.appendChild(button);
    div.appendChild(edit);

    
    return div;


}

button.addEventListener("click", inputHandler);



