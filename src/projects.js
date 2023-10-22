const sideBar = document.getElementById('projectLinks');
const projectList = [];
const docBody = document.getElementById('contentBody');

function createProject(name){
    let title = name;
    let tasks = []
    return{
        tasks, title
    }
}

class ToDo{
    constructor(title, desc, due, pri){
    this.name = title;
    this.description = desc;
    this.dueDate = due;
    this.priority = pri;
    }
}

function updateIndex(){
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        project.remove();
    })

    let i = 0;
    for(const project of projectList){
        const btn = document.createElement('button');
        btn.classList.add('project')
        btn.textContent = `${project.title}`
        btn.setAttribute('id', `${i}`)
        sideBar.appendChild(btn);
        i+=1;
    }
}

function clearToDoList(){
    const projects = document.querySelectorAll('.card')
    projects.forEach((project) => {
        project.remove()
    })
}

function displayToDo(taskList){
    clearToDoList();
    let i = 0;
    for(let element of taskList){
        const container = document.querySelector('#toDoHolder');
        const toDoObject = document.createElement('div');
        toDoObject.classList.add('card');
        //toDoObject.setAttribute('priority', `${book.read}`)
        const toDoTitle = document.createElement('div');
        const toDoDesc = document.createElement('div');
        const toDoDueDate = document.createElement('div');
        const removeButton = document.createElement('button')
        const changeReadStatus = document.createElement('button')
        removeButton.classList.add('remove')
        removeButton.setAttribute('index', `${i}`)
        changeReadStatus.classList.add('changeStatus')
        changeReadStatus.setAttribute('index', `${i}`)
        toDoTitle.textContent = `Title: ${element.name}`;
        toDoDesc.textContent = `Description: ${element.description}`;
        toDoDueDate .textContent = `Due Date: ${element.dueDate}`;
        removeButton.textContent = 'Remove ToDo'
        //if(book.read == 'True'){
            //changeReadStatus.textContent = 'Mark as Unread'
        //}
        //else{
            //changeReadStatus.textContent = "Mark as Read"
        //}
        toDoObject.appendChild(toDoTitle);
        toDoObject.appendChild(toDoDesc);
        toDoObject.appendChild(toDoDueDate);
        toDoObject.appendChild(removeButton);
        toDoObject.appendChild(changeReadStatus);
        container.append(toDoObject);
        i+=1;
    }
}

function clearToDoBtn(){
    const btn = document.querySelectorAll('.addToDo')
    btn.forEach((button) => {
        button.remove();
    })
}

export {
    createProject, ToDo, updateIndex, clearToDoList, clearToDoBtn, displayToDo, sideBar, projectList, docBody
}