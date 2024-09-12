import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEventPopup from './AddEventPopup';
import UpdateEventPopup from './UpdateEventPopup';
import { RootState } from '../redux/store';
import { CalendarEvent } from '../redux/calender/eventSlice';
import { addEvent, updateEvent } from '../redux/calender/eventSlice';

const FullCalendarComponent: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const handleDateClick = (info: any) => {
    setSelectedEvent({
      id: Date.now().toString(),
      name: '',
      startDate: `${info.dateStr}T00:00:00`, // Default start time
      endDate: `${info.dateStr}T23:59:59`,   // Default end time
    });
    setIsUpdateMode(false);
    setIsModalOpen(true);
  };

  const handleEventClick = (info: any) => {
    const event = events.find((event) => event.id === info.event.id);
    if (event) {
      setSelectedEvent(event);
      setIsUpdateMode(true);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleSubmitEvent = (event: CalendarEvent) => {
    if (isUpdateMode) {
      dispatch(updateEvent(event));
    } else {
      dispatch(addEvent(event));
    }
    handleCloseModal();
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events.map(event => ({
            id: event.id,
            title: event.name,
            start: event.startDate,
            end: event.endDate,
          }))}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
        />
      </div>
      {isModalOpen && (
        isUpdateMode ? (
          <UpdateEventPopup
            startDate={selectedEvent?.startDate || ''}
            endDate={selectedEvent?.endDate || ''}
            name={selectedEvent?.name || ''}
            id={selectedEvent?.id || ''}
            onClose={handleCloseModal}
            onSubmit={handleSubmitEvent}
          />
        ) : (
          <AddEventPopup
            startDate={selectedEvent?.startDate || ''}
            onClose={handleCloseModal}
            onSubmit={handleSubmitEvent}
          />
        )
      )}
    </div>
  );
};

export default FullCalendarComponent;