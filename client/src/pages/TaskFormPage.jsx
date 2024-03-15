import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";


export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast("Tarea Actualizada", {
        icon: "👏",
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Nueva tarea creada", {
        position: "top-center",
        style: {
          background: "#fff",
          color: "blue",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("done", data.done); 
        setValue("priority", data.priority);
        setValue("dueDate", data.dueDate);
      }
    }
    loadTask();
    }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-color-2 text-color-3  p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Tarea"
          {...register("title", { required: true })}
          className="bg-color-1 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />
        {errors.title && <span>Este campo es obligatorio</span>}
        <textarea
          placeholder="Descripcion"
          {...register("description", { required: true })}
          className="bg-color-1 p-3 rounded-lg block w-full"
        />
        {errors.description && <span>Este campo es obligatorio</span>}
        <div className="flex items-center mb-3">
          <input type="checkbox" {...register("done")} className="mr-2" />
          <label>Completada</label>
        </div>
        <div>
          <label htmlFor="priority" className="text-color-3 font-bold">
            Prioridad:
          </label>
          <select
            id="priority"
            {...register("priority")}
            className="bg-color-1 text-color-4 p-3 rounded-lg block w-full mb-3"
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>
        <div>
          <label htmlFor="dueDate" className="text-color-3 font-bold">
            Fecha de vencimiento:
          </label>
          <input
            id="dueDate"
            type="date"
            {...register("dueDate")}
            className="bg-color-1  p-3 rounded-lg block w-full mb-3"
          />
        </div>
        <button className="bg-color-3 text-color-1  p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm(
                "Esta seguro de eliminar esta tarea?"
              );
              if (accepted) {
                await deleteTask(params.id);
                toast.error("Tarea eliminada", {
                  position: "top-center",
                  style: {
                    background: "#fff",
                    color: "red",
                  },
                });
                navigate("/tasks");
              }
            }}
          >
            Borrar
          </button>
        </div>
      )}
    </div>
  );
}
