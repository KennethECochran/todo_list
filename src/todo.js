import {
    createProject, ToDo, updateIndex, clearToDoList, clearToDoBtn, displayToDo, sideBar, projectList,docBody
} from './projects'


document.addEventListener('click', e => {
    if(e.target.matches('#addProject')){
        projectForm.showModal();
    }
})

document.addEventListener('click', e => {
    if(e.target.matches('#confirmProjectBtn')){
        let title = document.querySelector('#title').value
        const project = createProject(title);
        projectList.push(project);
        updateIndex();
    }
})

document.addEventListener('click', e => {
    if(e.target.matches('.project')){
        clearToDoBtn();
        clearToDoList();
        let projectID = e.target.getAttribute('id')
        const addToDoBtn = document.createElement('button');
        addToDoBtn.classList.add('addToDo')
        addToDoBtn.setAttribute('data-index', `${projectID}`)
        addToDoBtn.textContent = 'Create ToDo'
        docBody.appendChild(addToDoBtn);
        displayToDo(projectList[projectID].tasks)
    }
})

document.addEventListener('click', e =>{
    if(e.target.matches('.addToDo')){
        todoform.showModal();
    }
})

document.addEventListener('click', e =>{
    if(e.target.matches('#confirmToDoBtn')){
        const projectToAddTo = document.querySelector('.addToDo')
        const dataAttribute = projectToAddTo.getAttribute('data-index')
        let title = document.querySelector('#toDoTitle').value
        let desc = document.querySelector('#description').value
        let date = document.querySelector('#date').value
        let priority = document.querySelector('input[name=priorityStatus]:checked').value
        const toDo = new ToDo(title, desc, date, priority);
        projectList[dataAttribute].tasks.push(toDo)
        displayToDo(projectList[dataAttribute].tasks)
    }
})

document.addEventListener('click', e => {
    if(e.target.matches('.remove')){
        const projectSelector = document.querySelector('.addToDo')
        const projectTarget = projectSelector.getAttribute('data-index')
        const toDoToRemove = e.target.getAttribute('index')
        projectList[projectTarget].tasks.splice(toDoToRemove, 1);
        displayToDo(projectList[projectTarget].tasks);
    }
})

document.addEventListener("click", e => {
    if(e.target.matches('.changePriority')) {
        const projectSelector = document.querySelector('.addToDo')
        const projectTarget = projectSelector.getAttribute('data-index')
        const toDoIndex = e.target.getAttribute('index')
        if(e.target.parentElement.parentElement.getAttribute('data-priority')=='True'){
            projectList[projectTarget].tasks[toDoIndex].priority = 'False';
        }
        else{
            projectList[projectTarget].tasks[toDoIndex].priority = 'True';
        }
        displayToDo(projectList[projectTarget].tasks);
    }
})