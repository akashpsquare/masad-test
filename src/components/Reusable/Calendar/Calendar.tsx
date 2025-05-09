import React, { useEffect, useRef, useState } from "react";
import {
  format,
  addMonths,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
} from "date-fns";
import styles from "./Calendar.module.css";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate)),
  });

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentDate(addMonths(currentDate, -1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.calendar_date_picker_container} ref={datePickerRef}>
      <button
        className={`${styles.calendar_date_picker_button} ${styles.calendar_btn} ${styles.calendar_btn_primary}`}
        onClick={handleToggle}
      >
        {format(selectedDate, "MMMM do, yyyy")}
      </button>

      <div
        className={`${styles.calendar_date_picker} ${isOpen ? styles.calendar_show : ""}`}
      >
        <div className={styles.calendar_date_picker_header}>
          <button
            className={`${styles.calendar_prev_month_button} ${styles.calendar_month_button}`}
            onClick={handlePrevMonth}
          >
            &larr;
          </button>
          <div className={styles.calendar_current_month}>
            {format(currentDate, "MMMM - yyyy")}
          </div>
          <button
            className={`${styles.calendar_next_month_button} ${styles.calendar_month_button}`}
            onClick={handleNextMonth}
          >
            &rarr;
          </button>
        </div>

        <div
          className={`${styles.calendar_date_picker_grid_header} ${styles.calendar_date_picker_grid}`}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div
          className={`${styles.calendar_date_picker_grid_dates} ${styles.calendar_date_picker_grid}`}
        >
          {days.map((day) => {
            const isOtherMonth = !isSameMonth(day, currentDate);
            const isSelected = isSameDay(day, selectedDate);

            return (
              <button
                key={day.toISOString()}
                className={`
                ${styles.calendar_date}
                ${isOtherMonth ? styles.calendar_date_picker_other_month_date : ""}
                ${isSelected ? styles.calendar_selected : ""}
              `}
                onClick={() => handleDateSelect(day)}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Calendar;
