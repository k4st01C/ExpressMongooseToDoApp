/* eslint-disable no-undef */
const inp = document.querySelector('input');
const ul = document.querySelector('ul');
const btn = document.querySelector('button');

const renderTodo = (e) => {
	const li = document.createElement('li');
	if (e.completed) li.classList.add('done');
	li.setAttribute('data-id', e._id);
	li.innerHTML = e.name + '<span class="delete">X</span>';
	ul.append(li);
};
const renderTodos = (response) => {
	response.data.forEach(renderTodo);
};

const removeTodo=function (e) {
	if (e.target.className === 'delete') {
		e.target.parentElement.remove();
	}
	const id = e.target.parentElement.getAttribute('data-id');
	axios.delete('/api/todos/' + id);
}

const add=function(){
	axios.post('/api/todos', { name: inp.value })
	.then((todo) => {
		renderTodo(todo.data);
		inp.value = '';
	});
}
const addTodo=(e) => {
	if (e.keyCode === 13) add()
}


const updateTodo=function (e) {
	e.target.classList.toggle('done');
	const id = e.target.getAttribute('data-id');
    const bool=e.target.classList.contains('done')
	axios.put('/api/todos/' + id, { completed: bool });
}

axios.get('/api/todos').then(renderTodos);
inp.addEventListener('keypress', addTodo);
ul.addEventListener('click', removeTodo);
ul.addEventListener('click', updateTodo);
btn.addEventListener('click',add)
