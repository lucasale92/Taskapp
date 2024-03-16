import React from 'react';
import { FaEdit} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({ task,}) => {
  const navigate = useNavigate();

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'alta':
        return 'bg-red-500';
      case 'media':
        return 'bg-yellow-500';
      case 'baja':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-color-2 rounded-lg shadow-md p-4 relative mb-4">
      <div className="flex justify-between items-center mb-2 mt-2">
        <div className="flex justify-between mt-2">
        <p className="text-color-3">
          <span className="font-bold">Tarea:</span> {task.title}
        </p>
      </div>
        <div className={`px-2 py-1 rounded-full text-red-100 ${getPriorityColor()}`}>
          {task.priority}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-color-3">
          <span className="font-bold">Descripción:</span> {task.description}
        </p>
      </div>
      <div className="absolute top-1 text-sm text-color-3 font-bold">
        {new Date(task.deadline).toLocaleDateString('es-Ar', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        {new Date(task.deadline).toLocaleTimeString('es-AR', {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-color-3">
          <span className="font-bold">Categoría:</span> {task.category || 'Sin categoría'}
        </p>
        <p className="text-color-3">
          <span className="font-bold">Estado:</span> {task.done ? 'Completada' : 'Pendiente'}
        </p>
      </div>
      <div className="flex items-center mt-4 font-bold " >
        Editar 

        <FaEdit
          className="text-blue-500 cursor-pointer mr-2 mx-2 hover:text-blue-700"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/tasks/${task.id}`);
          }}
        />
      </div>
    </div>
  );
};
