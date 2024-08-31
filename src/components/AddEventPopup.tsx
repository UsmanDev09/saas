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
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Create Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              value={nameState}
              onChange={handleNameChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start Date:</label>
            <input
              type="date"
              value={startDate.split('T')[0]}
              readOnly
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <label className="block text-gray-700">Start Time:</label>
            <input
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Date:</label>
            <input
              type="date"
              value={endDateState}
              onChange={handleEndDateChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <label className="block text-gray-700">End Time:</label>
            <input
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
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