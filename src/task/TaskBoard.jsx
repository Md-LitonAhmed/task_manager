import { useState } from "react";
import SearchActions from "./SearchActions";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    'id': crypto.randomUUID(),
    'title': "Learn React",
    'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolorum! ",
    'tags': ["Web", "React","JS"],
    'priority': "High",
    'isFavorite': true

  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <SearchActions />
          <TaskList tasks={tasks}/>
        </div>
      </div>
    </section>
  );
}
