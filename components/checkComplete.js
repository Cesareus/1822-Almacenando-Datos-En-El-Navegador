const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex(item => item.id == id);
  //compara el elemento del JSON item.id con el id que recibe la función.
  tasks[index]["complete"] = !tasks[index]["complete"]  //tasks[index]."complete"
  /*ubica el elemento complete del objeto dentro del array de objetos tasks y lo modifica
   por el opuesto cada vez que se hace check*/
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
