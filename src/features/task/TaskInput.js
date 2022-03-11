import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { newTask } from "./taskSlice";

const TaskComponent = () => {
  const dispatch = useDispatch()
  const [editTitle, setEditTitle] = useState("")
  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleTitleChange}
        value={editTitle}
        placeholder="Please type in"/>
      <button>NEW</button>
    </form>
  )
}

export default TaskComponent