import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
    onRemoveTodo: RemoveTodo;
    editTodo: EditTodo
}
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, onRemoveTodo, editTodo }) => {
    const [isEditOn, setIsEdiOn] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>(todo.text);

    const onDelete = () => {
        onRemoveTodo(todo)

    }
    const onEdit = () => {
        editTodo(todo);
        setIsEdiOn(true)

    }
    const onTodoUpdate = (e: any) => {
        let text = e.target.value;
        setInputText(text);
        editTodo(text)
    }
    const dropdownOptions: Array<Option> = [
        {
            value: "Delete",
            onclick: onDelete,
            color: "red",
        }, {
            value: "Edit",
            onclick: onEdit,
            color: "blue"
        }
    ]
    return (

        <li className={todo.complete ? "todo-row completed" : "todo-row"}>
            <label >
                <input type="checkbox" onChange={() => toggleComplete(todo)} checked={todo.complete} />
                {isEditOn ? <input className="edit-input" type="text" value={inputText} onChange={(e) => onTodoUpdate(e)} /> : todo.text}
                {todo.text}
            </label>
            <Dropdown
                options={dropdownOptions}
            />
        </li>

    )
}