import './projects'
import './todo'

const addToDoBtn = document.querySelector('.toDoBtn')
document.addEventListener('click', e =>{
    if(e.target.matches('.project')){
        addToDoBtn.setAttribute('data-belonging', `${e.target.getAttribute('data-title')}`)
    }
})