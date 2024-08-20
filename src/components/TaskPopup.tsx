import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addTask } from '../redux/tasks/tasksSlice';

interface TaskPopupProps {
  popupOpen: boolean;
  setPopupOpen: (open: boolean) => void;
}

interface Subtask {
  id: string;
  title: string;
  completed: boolean; // Ensure this matches your Subtask type
}

const TaskPopup: React.FC<TaskPopupProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [subtaskInput, setSubtaskInput] = useState('');

  const handleSubtaskChange = (id: string, title: string) => {
    setSubtasks(subtasks.map(subtask =>
      subtask.id === id ? { ...subtask, title } : subtask
    ));
  };

  const handleSubtaskAdd = () => {
    if (subtaskInput.trim() !== '') {
      setSubtasks([...subtasks, { id: Date.now().toString(), title: subtaskInput, completed: false }]);
      setSubtaskInput('');
    }
  };

  const handleSubtaskRemove = (id: string) => {
    setSubtasks(subtasks.filter(subtask => subtask.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      list,
      subtasks, // This now includes the completed property
      image: files ? files[0] : undefined,
    };
    dispatch(addTask(newTask));
    props.setPopupOpen(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 px-4 py-5 ${
        props.popupOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
        <button
          onClick={() => props.setPopupOpen(false)}
          className="absolute right-1 top-1 sm:right-5 sm:top-5"
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
              fill=""
            />
          </svg>
        </button>

        <form action="#" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Task title
            </label>
            <input
              type="text"
              name="taskTitle"
              id="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="taskDescription"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Task description
            </label>
            <textarea
              name="taskDescription"
              id="taskDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols={30}
              rows={7}
              placeholder="Enter task description"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="taskList"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Task list
            </label>
            <div className="flex flex-col gap-3.5">
              {list.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <input
                    type="text"
                    name="taskList"
                    id={`taskList-${index}`}
                    value={item}
                    placeholder="Enter list text"
                    className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                    readOnly
                  />
                </div>
              ))}
              {/* Add buttons to manipulate the list */}
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="subtasks"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Subtasks
            </label>
            <div className="flex flex-col gap-3.5">
              {subtasks.map((subtask, index) => (
                <div key={subtask.id} className="flex items-center gap-2.5">
                  <input
                    type="text"
                    value={subtask.title}
                    onChange={(e) => handleSubtaskChange(subtask.id, e.target.value)}
                    placeholder="Enter subtask title"
                    className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                  />
                  {index === 0 ? (
                    <button
                      type="button"
                      onClick={handleSubtaskAdd}
                      className="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark"
                    >
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 1V19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 10H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSubtaskRemove(subtask.id)}
                      className="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark"
                    >
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5625 1.5625L18.4375 18.4375"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.5625 18.4375L18.4375 1.5625"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2.5">
                <input
                  type="text"
                  value={subtaskInput}
                  onChange={(e) => setSubtaskInput(e.target.value)}
                  placeholder="Enter subtask title"
                  className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                />
                <button
                  type="button"
                  onClick={handleSubtaskAdd}
                  className="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark"
                >
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1V19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 10H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="taskImage"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Task image
            </label>
            <input
              type="file"
              id="taskImage"
              onChange={(e) => setFiles(e.target.files)}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-sm border border-transparent bg-primary py-2 px-4 text-base font-medium text-white shadow-button transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:bg-opacity-70 dark:bg-primary dark:hover:bg-primary/90 dark:focus:ring-primary"
            >
              Create Task
            </button>
            <button
              type="button"
              onClick={() => props.setPopupOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-sm border border-transparent bg-secondary py-2 px-4 text-base font-medium text-white shadow-button transition hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:pointer-events-none disabled:bg-opacity-70 dark:bg-secondary dark:hover:bg-secondary/90 dark:focus:ring-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskPopup;