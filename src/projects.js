function createProject(title){
    const projectName = title;
    let todoList = [];

    function pushToDo(todo){
        todoList.push(todo);
    }
    return{
        projectName, todoList, pushToDo
    }
}

function addProjectToDom(project){
    const sideBar = document.getElementById('sidebar');
    const body = document.getElementById('contentBody');
    const projectObject = document.createElement('button');
    projectObject.classList.add('project');
    projectObject.setAttribute('data-title', `${project.projectName}`);
    projectObject.textContent = `${project.projectName}`;
    sideBar.appendChild(projectObject);
}

const addProjectBtn = document.getElementById('+project')
addProjectBtn.addEventListener('click', () => {
    projectForm.showModal();
});

const confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', ()=>{
    let projectTitle = document.querySelector('#title').value;
    const project = createProject(projectTitle);
    addProjectToDom(project);
});

const defaultProject = createProject('Default Project');
addProjectToDom(defaultProject);

const body = document.getElementById('contentBody');
const addToDo = document.createElement('button');
addToDo.classList.add('toDoBtn');
addToDo.setAttribute('data-belonging', `Default Project`);
addToDo.textContent = `Add ToDo`;
body.appendChild(addToDo);