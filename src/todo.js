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