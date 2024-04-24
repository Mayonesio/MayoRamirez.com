import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useTasks } from '../../context/TaskContext';
import './Tareas.modules.css';

const TasksPage = ({ task }) => {
  const { user } = useAuth();
  const {deleteTask} = useTasks();
  const router = useRouter();


  const handleEditClick = () => {
    // Redirigir a la página de edición con el ID de la tarea
    console.log(task._id);
    router.push(`/home/taskEdit/${task._id}`);
  };

  return (
    <>
      <button onClick={
        () => {
          deleteTask(task._id)
        }}>Borrar</button>
          <button onClick={handleEditClick}>Editar</button>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <p>{task.title}</p>
            {/* <p className="text-white">{user.username}</p> */}
          </div>
          <div className="content">
            <p className="heading">{task.title}</p>
            <p>
              {task.description}
            </p>
        
            {/* format date */}
            <p>
              {task.date &&
                new Date(task.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksPage;