function createToDo(title, desc, due, pri){
    const todoName = title;
    const todoDesc = desc;
    const dueDate = due;
    const priority = pri;

    const getName = () => todoName;
    const getDesc = () => todoDesc;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return{getName, getDesc, getDueDate, getPriority}
}

document.addEventListener('click', e =>{
    if(e.target.matches('.toDoBtn')){
        todoform.showModal();
    }
})

document.addEventListener('click', e => {
    if(e.target.matches('#confirmToDoBtn')){
        let title = document.querySelector('#toDoTitle').value
        let desc = document.querySelector('#description').value
        let date = document.querySelector('#date').value
        let priority = document.querySelector('input[name=priorityStatus]:checked').value
        const toDo = createToDo(title, desc, date, priority);
        console.log(toDo)
    }
} )