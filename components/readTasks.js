import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";
import { orderDates } from "../services/date.js";

export const readTask = () => {
    const list = document.querySelector('[data-list]');
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);
    const order = orderDates(dates);
    console.log(order);

    dates.forEach(date =>{
        const dateMoment = moment(date, "DD/MM/YYYY");    
        list.appendChild(dateElement(date));            
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            console.log(diff)
            if(diff == 0)               
            list.appendChild(createTask(task));        
        });
    });
}