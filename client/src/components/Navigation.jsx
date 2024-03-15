import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"; 

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <Link to="/tasks" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-30 w-20 mr-4"/> 
        <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
      </Link>
      <button className="bg-color-3 text-color-1 p-3 rounded-lg">
        <Link to="/tasks-create">Crear tarea</Link>
      </button>
    </div>
  );
}
