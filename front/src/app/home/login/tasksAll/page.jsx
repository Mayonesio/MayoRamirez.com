'use client'
import { useEffect } from 'react';
import { useTasks } from '../../../../context/TaskContext';
import Tareas from '../../../../Components/Tareas/Tareas';
import SubNavBar from '../../../../Components/SubNavBar/SubNavBar';
import ProtectedRoute from '../../../../ProtectedRoute';
import './Tareas.modules.css';


function TaskPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks()
    }, [])


    return (
        <div>
            <ProtectedRoute>
                <SubNavBar />
                {tasks.length === 0 && (
                    <div className="flex justify-center items-center p-10">
                        <div>
                            <h1 className="font-bold text-xl">
                                No Hay tareas, por favor añade una Nueva tarea.
                            </h1>
                        </div>
                    </div>
                )}
              
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 m-6">                
                    {
                        tasks.map(task => (
                            <div key={task._id}>
                                 <Tareas task={task} key={task._id} />
                            </div>
                        ))
                    }                
                </div>

            </ProtectedRoute>
        </div>
    )
}

export default TaskPage;