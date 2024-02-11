import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import NoTaskFound from "./NoTaskFound";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolorum! ",
    tags: ["Web", "React", "JS"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleModal = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowTaskModal(false);
  };
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowTaskModal(true);
  };
  const handleCloseClick=()=>{
    setShowTaskModal(false)
    setTaskToUpdate(null)
  }
const handleDelete=(deleteTaskId)=>{
 const newTask= tasks.filter((task)=> task.id !== deleteTaskId)
 setTasks(newTask);

}
const handleDeleteAll=()=>{
    tasks.length=0;
    setTasks([...tasks])
}
const handleFavorite=(favId)=>{
    const taskIndex=tasks.findIndex(task=> task.id ===favId);
    const newTask=[...tasks];
    newTask[taskIndex].isFavorite= !newTask[taskIndex].isFavorite;
    setTasks(newTask);
}
const handleSearch=(searchTerm)=>{
    console.log(searchTerm)
    const filtered=tasks.filter((task)=>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setTasks([...filtered])

}
  return (
    <section className="mb-20" id="tasks">
      {showTaskModal && (
        <AddTaskModal taskToUpdate={taskToUpdate} onSave={handleModal} onCloseClick={handleCloseClick}/>
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch}/>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowTaskModal(true)} onDeleteAll={handleDeleteAll}/>
          {
            tasks.length > 0 ?
            (<TaskList 
                tasks={tasks}
                 onEdit={handleEditTask} 
                 onDelete={handleDelete} 
                 onFav={handleFavorite}/>
                 )
                 :(<NoTaskFound />)

          }

        </div>
      </div>
    </section>
  );
}
