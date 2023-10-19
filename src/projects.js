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
    const sideBar = document.getElementById('sidebar')
    const projectObject = document.createElement('button')
    projectObject.classList.add('project');
    projectObject.setAttribute('data-title', `${project.projectName}`)
    projectObject.textContent = `${project.projectName}`
    sideBar.appendChild(projectObject)
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

document.addEventListener('click', e =>{
    if(e.target.matches('.project')){
        console.log(e.target.getAttribute('data-title'));
    }
})