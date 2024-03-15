import React from 'react';
import { FaEdit} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({ task, onCompleteTask }) => {
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
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <div className={`px-2 py-1 rounded-full text-orange-100 ${getPriorityColor()}`}>
          {task.priority}
        </div>
      </div>
      <p className="text-bg-color-1">{task.description}</p>
      <div className="flex items-center mt-4">
        <FaEdit
          className="text-blue-500 cursor-pointer mr-2"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/tasks/${task.id}`);
          }}
        />
      </div>
      <div className="absolute top-1 text-sm text-color-2 font-bold">
        {new Date(task.deadline).toLocaleDateString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        {new Date(task.deadline).toLocaleTimeString('es-ES', {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-gray-700">
          <span className="font-bold">Categoría:</span> {task.category || 'Sin categoría'}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Estado:</span> {task.done ? 'Completada' : 'Pendiente'}
        </p>
      </div>
    </div>
  );
};
