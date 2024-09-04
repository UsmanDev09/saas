import React, { useState } from 'react';
import { CalendarEvent } from '../redux/calender/eventSlice';

interface AddEventPopupProps {
  startDate: string;
  onClose: () => void;
  onSubmit: (event: CalendarEvent) => void;
}

const AddEventPopup: React.FC<AddEventPopupProps> = ({ startDate, onClose, onSubmit }) => {
  const [startTime, setStartTime] = useState<string>('00:00');
  const [endTime, setEndTime] = useState<string>('23:59');
  const [endDateState, setEndDateState] = useState<string>(startDate.split('T')[0]);
  const [nameState, setNameState] = useState<string>('');

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDateState(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eventStartDate = `${startDate.split('T')[0]}T${startTime}:00`;
    const eventEndDate = `${endDateState}T${endTime}:00`;

    const newEvent = {
      id: Date.now().toString(),
      name: nameState,
      startDate: eventStartDate,
      endDate: eventEndDate,
    };

    onSubmit(newEvent);
    onClose();
  };

  return (
    <div
      className={`fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 px-4 py-5 ${
        true ? 'block' : 'hidden'
      }`} // Replace 'true' with condition for opening popup
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
        <button
          onClick={onClose}
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

        <h2 className="text-xl font-semibold mb-4">Create Event</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="eventName"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              value={nameState}
              onChange={handleNameChange}
              placeholder="Enter event name"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="startDate"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate.split('T')[0]}
              readOnly
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
            />
            <label
              htmlFor="startTime"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={handleStartTimeChange}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="endDate"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDateState}
              onChange={handleEndDateChange}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
            />
            <label
              htmlFor="endTime"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={handleEndTimeChange}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="flex justify-end gap-2.5">
            {/* <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 items-center justify-center rounded-sm border border-transparent bg-secondary py-2 px-4 text-base font-medium text-white shadow-button transition hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:pointer-events-none disabled:bg-opacity-70 dark:bg-secondary dark:hover:bg-secondary/90 dark:focus:ring-secondary"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-sm border border-transparent bg-primary py-2 px-4 text-base font-medium text-white shadow-button transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:bg-opacity-70 dark:bg-primary dark:hover:bg-primary/90 dark:focus:ring-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventPopup;