'use client';
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import FullCalendarComponent from '../calenderComponent';
const Calendar = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Calendar" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <FullCalendarComponent />
      {/* <!-- ====== Calendar Section End ====== --> */}
    </div>
  );
};

export default Calendar;
