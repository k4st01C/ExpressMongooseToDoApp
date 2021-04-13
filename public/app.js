const inp = document.querySelector('input');
const ul = document.querySelector('ul');

const renderTodo = (e) => {
	const li = document.createElement('li');
	if (e.completed) li.classList.add('done');
	li.innerHTML = e.name + '<span class="delete">X</span>';
	ul.append(li);
};
const renderTodos = (response) => {
	response.data.forEach(renderTodo);
};

axios.get('/api/todos').then(renderTodos);
// .then(() => {
// 	const listItems = document.querySelectorAll('li');
// 	console.log([...listItems]);

// 	[...listItems].forEach((e) => {
// 		console.log(e);
// 		e.addEventListener('click', () => e.classList.toggle('done'));
// 	});
// });

inp.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		axios.post('/api/todos', { name: inp.value }).then((todo) => {
			renderTodo(todo.data);
			inp.value = '';
		});
	}
});

ul.addEventListener('click', (e) => {
	if (e.target.className==='delete') {
        console.log(this);
    };
});
