const sideBar = document.getElementById('projectLinks');
const projectList = [];
const docBody = document.getElementById('btnHolder');

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
        const buttonHolders = document.createElement('div')
        buttonHolders.classList.add('btnHolders')
        toDoObject.classList.add('card');
        toDoObject.setAttribute('data-priority', `${element.priority}`)
        const toDoTitle = document.createElement('div');
        const hoverElements = document.createElement('div');
        hoverElements.classList.add('toDoDetails');
        const toDoDesc = document.createElement('div');
        const toDoDueDate = document.createElement('div');
        const removeButton = document.createElement('button')
        const changePriority = document.createElement('button')
        removeButton.classList.add('remove')
        removeButton.setAttribute('index', `${i}`)
        changePriority.classList.add('changePriority')
        changePriority.setAttribute('index', `${i}`)
        toDoTitle.textContent = `${element.name}`;
        toDoDesc.textContent = `Notes: ${element.description}`;
        toDoDueDate .textContent = `Due Date: ${element.dueDate}`;
        removeButton.textContent = 'Remove ToDo'
        changePriority.textContent = 'Change Priority'
        toDoObject.appendChild(toDoTitle);
        hoverElements.appendChild(toDoDesc);
        hoverElements.appendChild(toDoDueDate);
        buttonHolders.appendChild(removeButton);
        buttonHolders.appendChild(changePriority);
        toDoObject.appendChild(buttonHolders)
        toDoObject.appendChild(hoverElements);
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