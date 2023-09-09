export function TodoItem({ complete, id, title, toggleTodo, handleDelete }) {
    return (
        <li>
            <label >
                <input type="checkbox" value={complete} onChange={e => { toggleTodo(id, e.target.checked) }} />
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}