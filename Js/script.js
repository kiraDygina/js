let todosNode = document.querySelector('.js-todos');
let inputNode = document.querySelector('.js-input');
let btnNode = document.querySelector('.js-btn');
let todos = [];

function addTodo(text){
    let todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };
    todos.push(todo);
}

function deleteTodo(id){
    todos.forEach(todo => {

        if(todo.id == id){
            todo.done = true;
        }
    })
}
function render(){
    console.log(todos);
    let html = '';

    todos.forEach(todo => {
        if (todo.done){
            return;
        }
    
        html += `
        <div>
        ${todo.text}
        <button class="done-btn" data-id="${todo.id}">Сделано</button>
        </div>
        `;
    });

    todosNode.innerHTML = html;
}

btnNode.addEventListener('click', ()=>{
    let text = inputNode.value;
    addTodo(text);
    render();
})


todosNode.addEventListener('click',(event)=>{
    if(event.target.tagName != 'BUTTON'){
        return;
    }

    let id = event.target.dataset.id;
    deleteTodo(id)
    render();
});


  render()