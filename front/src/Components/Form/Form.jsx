'use client'
import { useForm } from 'react-hook-form';
import { useTasks } from '../../context/TaskContext';
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const {createTask} = useTasks();
    // const { id } = router.query;
    
    const onSubmit = handleSubmit((data) => {
        createTask(data);
        router.push('/home/login/tasksAll');
    });


    return (
        <div className="h-screen bg-gray-800">
            <div className="pt-10 md:pt-20">
                <div className="p-4 md:p-8">
                    <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Adjunta una queja</h1>
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

export default Form;