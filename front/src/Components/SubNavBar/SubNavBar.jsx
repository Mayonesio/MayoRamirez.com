import React, { useEffect } from 'react';
import { useAuth } from "../../context/AuthContext";
const SubNavBar = () => {
    useEffect(() => {
        const toggleMenu = () => {
            const navToggle = document.getElementsByClassName("toggle");
            for (let i = 0; i < navToggle.length; i++) {
                navToggle.item(i).classList.toggle("hidden");
            }
        };

        const hamburger = document.getElementById("hamburger");
        if (hamburger) {
            hamburger.addEventListener("click", toggleMenu);
        }

        return () => {
            if (hamburger) {
                hamburger.removeEventListener("click", toggleMenu);
            }
        };
    }, []);

    const { isAuthenticated, logout, user } = useAuth();
    // console.log(isAuthenticated, user);


    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200">
            <img src="https://tailwindflex.com/public/favicon.ico" className="h-10 w-10" alt="ACME" width="120" />
            <div className="flex md:hidden">
                <button id="hamburger">
                    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                </button>
            </div>
            <div className="toggle hidden w-full md:w-auto md:flex text-right font-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
                <ul className="flex gap-x-2">
                    {isAuthenticated ? (
                        <>
                            <li>
                            <a className="block md:inline-block text-blue-900 px-3 py-3 border-b-2 border-blue-900 md:border-none">Bienvenido  {user.username}</a>                                
                            </li>
                            {/* //pendiente de convertirlo en titulo */}
                            <li>
                            <a href="/home/login/tasks" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Nueva Tarea</a>
                            </li>
                            <li>
                            <a href="/home/login/tasksAll" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Tareas</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                 <a href="/home/login" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Login</a>
                            </li>
                            <li>
                            <a href="/home/register" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Registro</a>
                            </li>
                        </>
                    )}
                </ul>

            </div>
            <a href="/" 
            onClick={() => {logout();}}
            className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Salir</a>
        </nav>
    );
}

export default SubNavBar;
