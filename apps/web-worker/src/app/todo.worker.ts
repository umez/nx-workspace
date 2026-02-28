import { Todo } from "./todo.model";

addEventListener('message', async ({data}) => {
  console.log(data)

  // Example heavy processing:

  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const list = await response.json();
  console.log(list);

  const completedTodos = list.filter((todo: Todo) => todo.completed);

  // simulate heavy computation
  for (let i = 0; i < 100000; i++) {
    console.log(i)
  };

  postMessage({
    data: list,
    total: data.length,
    completed: completedTodos.length
  });
});
