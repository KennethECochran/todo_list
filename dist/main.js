(()=>{"use strict";const t=document.getElementById("projectLinks"),e=[],o=document.getElementById("contentBody");class n{constructor(t,e,o,n){this.name=t,this.description=e,this.dueDate=o,this.priority=n}}function c(){document.querySelectorAll(".card").forEach((t=>{t.remove()}))}function d(t){c();let e=0;for(let o of t){const t=document.querySelector("#toDoHolder"),n=document.createElement("div");n.classList.add("card");const c=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button");a.classList.add("remove"),a.setAttribute("index",`${e}`),i.classList.add("changeStatus"),i.setAttribute("index",`${e}`),c.textContent=`Title: ${o.name}`,d.textContent=`Description: ${o.description}`,r.textContent=`Due Date: ${o.dueDate}`,a.textContent="Remove ToDo",n.appendChild(c),n.appendChild(d),n.appendChild(r),n.appendChild(a),n.appendChild(i),t.append(n),e+=1}}document.addEventListener("click",(t=>{t.target.matches("#addProject")&&projectForm.showModal()})),document.addEventListener("click",(o=>{if(o.target.matches("#confirmProjectBtn")){const o={tasks:[],title:document.querySelector("#title").value};e.push(o),function(){document.querySelectorAll(".project").forEach((t=>{t.remove()}));let o=0;for(const n of e){const e=document.createElement("button");e.classList.add("project"),e.textContent=`${n.title}`,e.setAttribute("id",`${o}`),t.appendChild(e),o+=1}}()}})),document.addEventListener("click",(t=>{if(t.target.matches(".project")){document.querySelectorAll(".addToDo").forEach((t=>{t.remove()})),c();let n=t.target.getAttribute("id");const r=document.createElement("button");r.classList.add("addToDo"),r.setAttribute("data-index",`${n}`),r.textContent="Create ToDo",o.appendChild(r),d(e[n].tasks)}})),document.addEventListener("click",(t=>{t.target.matches(".addToDo")&&todoform.showModal()})),document.addEventListener("click",(t=>{if(t.target.matches("#confirmToDoBtn")){const t=document.querySelector(".addToDo").getAttribute("data-index");let o=document.querySelector("#toDoTitle").value,c=document.querySelector("#description").value,r=document.querySelector("#date").value,a=document.querySelector("input[name=priorityStatus]:checked").value;const i=new n(o,c,r,a);e[t].tasks.push(i),d(e[t].tasks)}}))})();