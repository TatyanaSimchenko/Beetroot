"use strict";

const todoList = [];

const deleteListener = function () {
  const {  todoid } = this.parentElement.parentElement.datatest;
  const idx = todoList.findIndex(({id}) => id === todoid);
  if (idx >= 0) {
    todoList.splice(idx, 1);
    render();
  }
};

const subscribeEditButtons = () => {
  const deleteButtonsCollection = document.querySelectorAll('button[name="delete"]');
  const $deleteButtons = [...deleteButtonsCollection];
  $deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteListener);
  });
};

const render = () => {
  const todoElements = todoList.map((todo) => {
  const todoElement = getTodoElement(todo);
  return todoElement;
  })
  console.log(todoElements.join(''));
  document.getElementById('todo-list').innerHTML = todoElements.join('');
  subscribeEditButtons();
};

const addTodoListener = function (e) {
  e.preventDefault();
  const todo = {
 id: `id-${Date.now()}`,
 title: this.title.value,
 status: 'todo',
};
todoList.push(todo);
this.reset() ;
render();
};

const getTodoElement = ({ id, title, status}) => {
    const renderEditButton = () => {
    
      return `<button name="done" class="todo__btn button button--success ${status !== 'todo' ? '_hidden' : ''}">Done</button>
      <button name="todo" class="todo__btn button button--warning ${status === 'todo' ? '_hidden' : ''}">Todo</button>`
  }
  return `
  <li class="todo-list__item todo" data-todoid='${id}'>
  <h2 class="todo__title">${title}</h2>
     <div class="todo__control">
        <span class="todo__status status ${status !== 'todo' ? '_success' : '_warning'}">${status}</span>
        ${renderEditButton()}
        <button name="delete" class="todo__btn button button--danger">Delete</button>
    </div>
    </li>`;
};
document.addEventListener('DOMContentLoaded', () => {
  const $addTodoForm = document.getElementById('add-todo-form');
  
  $addTodoForm.addEventListener('submit', addTodoListener);
});


