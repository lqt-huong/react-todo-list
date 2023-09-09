import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, handleDelete }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No todos"}
            {todos.map(todo => {
                return (
                    <TodoItem
                        // id={todo.id}
                        // title={todo.title}
                        // complete={todo.complete}
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        handleDelete={handleDelete}
                    />)

            })}

        </ul>
    )
}