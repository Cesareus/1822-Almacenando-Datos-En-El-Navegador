import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { readTask } from './readTasks.js';

const addTask = (evento) => { 
   evento.preventDefault();     
   const list = document.querySelector('[data-list]');    
   const input = document.querySelector('[data-form-input]');
   const calendar = document.querySelector('[data-form-date]') ;
   const value = input.value;
   const date = calendar.value;
   const dateFormat = moment(date).format("DD/MM/YYYY");
   
   if(value == "" || date == ""){
    return;
   }
      
   input.value = '';
   calendar.value = ''; 
   
    const taskObj ={
    value,
    dateFormat
   };
   list.innerHTML="";

    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; 
    taskList.push(taskObj);    
    localStorage.setItem("tasks",JSON.stringify(taskList));

    readTask();
 }



  
 export const createTask = ({value, dateFormat}) => {  
  
   const task = document.createElement('li');
        task.classList.add('card');

   const taskContent = document.createElement('div');

   const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask); 

   const dateTask =  document.createElement('span');   
        dateTask.innerText = dateFormat; 
        task.appendChild(taskContent);
        task.appendChild(dateTask);
        task.appendChild(deleteIcon());
   return task;
 };

 export {
    addTask
 }