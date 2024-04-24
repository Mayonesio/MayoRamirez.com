'use client'
import { useForm } from 'react-hook-form';
import { useTasks } from '../../context/TaskContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const FormEdit = () => {
    const router = useRouter();
    const { id } = router.query;  // Extraer id directamente del query
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { getTask } = useTasks();

    const onSubmit = handleSubmit(async (data) => {
        try {
            await getTask(data);
            router.push('/home/login/tasksAll');
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    });

    useEffect(() => {
        const loadTask = async () => {
            if (id) {  // Usar el id obtenido de router.query
                try {
                    const task = await getTask(id);
                    setValue("title", task.title);
                    setValue("description", task.description);
                    setValue(
                        "date",
                        task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
                    );
                    setValue("completed", task.completed);
                } catch (error) {
                    console.error('Failed to load task:', error);
                }
            }
        };
        loadTask();
    }, [id, getTask]);  // Añadir id y getTask como dependencias

    return (
        <div className="h-screen bg-gray-800">
            <div className="pt-10 md:pt-20">
                <div className="p-4 md:p-8">
                    <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Edita Tu queja</h1>
                    <form className="flex flex-col items-center" onSubmit={onSubmit} action="/submit-post" method="POST">
                        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <input id="subject" 
                                    type="text" 
                                    name='title' 
                                    placeholder="Título" 
                                    {...register("title")}
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600" />
                            <textarea 
                                id="message" 
                                name='description'
                                {...register("description")} 
                                rows="5" 
                                placeholder="Aqui va tu queja"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600 "></textarea>
                        </div>
                        <button
                            className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormEdit;