import React, { ChangeEvent,FormEvent, useState } from "react";

// TodoFormProps
interface TodoFormProps {
    addTodo :AddTodo;
}

export const TodoForm : React.FC<TodoFormProps> = ({addTodo}) =>{
    const [newTodo,SetNewTodo] = useState<string>("");

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        SetNewTodo(e.target.value);
    }


    const handleSubmit = (e:FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        addTodo(newTodo);
        SetNewTodo("")
    }


    return(
        <form className="todo-form">
            <input className="todo-input" type="text" value={newTodo} placeholder="Add a todo"  onChange={handleChange}/>
            <button type="submit" className="todo-button" onClick={handleSubmit}>
                Add a Todo
            </button>
        </form>
    );
}