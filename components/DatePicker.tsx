"use client";

import { ChevronLeft, ChevronRight, Minus } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarMonth {
  year: number;
  month: number;
  selectedStart?: number;
  selectedEnd?: number;
  unavailableDays?: number[];
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return {
    firstDay,
    daysInMonth,
  };
}

function MonthCalendar({
  year,
  month,
  selectedStart,
  selectedEnd,
  unavailableDays = [],
}: CalendarMonth) {
  const { firstDay, daysInMonth } = getMonthDays(year, month);

  const cells: (number | null)[] = [];

  // Empty cells before the first day
  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }

  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  return (
    <div className="calendar-month">
      {/* Month title */}
      <div className="calendar-month-title">
        {MONTH_NAMES[month]} {year}
      </div>

      {/* Weekdays */}
      <div className="calendar-grid calendar-weekdays">
        {DAYS.map((day, index) => (
          <div key={index} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="calendar-grid calendar-dates">
        {cells.map((day, index) => {
          if (day === null) {
            return <div key={index} className="calendar-empty" />;
          }

          const isStart = day === selectedStart;
          const isEnd = day === selectedEnd;

          const isSelected =
            selectedStart !== undefined &&
            selectedEnd !== undefined &&
            day >= selectedStart &&
            day <= selectedEnd;

          const isUnavailable = unavailableDays.includes(day);

          return (
            <button
              key={index}
              type="button"
              className={`
                calendar-day
                ${isSelected ? "calendar-day-selected" : ""}
                ${isStart ? "calendar-day-start" : ""}
                ${isEnd ? "calendar-day-end" : ""}
                ${isUnavailable ? "calendar-day-unavailable" : ""}
              `}
              disabled={isUnavailable}
              aria-label={`${MONTH_NAMES[month]} ${day}, ${year}`}
              aria-selected={isStart || isEnd}
            >
              <span className="calendar-day-number">{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DatePicker() {
  const { nights, checkIn, checkOut } = PROPERTY_DATA;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", {
      month: "short",
    });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <section
      className="calendar-section"
      aria-labelledby="calendar-heading"
    >
      {/* Header */}
      <div className="calendar-header">
        <h2 id="calendar-heading">
          {nights} nights in Candolim
        </h2>

        <p className="calendar-subtitle">
          {formatDate(checkInDate)} - {formatDate(checkOutDate)}
        </p>
      </div>

      {/* Calendar */}
      <div className="calendar-wrapper">
        {/* Left arrow */}
        <button
          type="button"
          className="calendar-nav calendar-nav-left"
          aria-label="Previous month"
        >
          <ChevronLeft size={25} strokeWidth={1.8} />
        </button>

        {/* Months */}
        <div className="calendar-months">
          <MonthCalendar
            year={2026}
            month={9}
            selectedStart={18}
            selectedEnd={23}
          />

          <MonthCalendar
            year={2026}
            month={10}
            unavailableDays={[
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              29,
              30,
            ]}
          />
        </div>

        {/* Right arrow */}
        <button
          type="button"
          className="calendar-nav calendar-nav-right"
          aria-label="Next month"
        >
          <ChevronRight size={25} strokeWidth={1.8} />
        </button>

        {/* Footer */}
        <div className="calendar-footer">
          <div
            className="calendar-footer-icon"
            aria-label="Selected dates indicator"
          >
            <div className="calendar-footer-icon-inner">
              <Minus size={16} strokeWidth={1.7} />
            </div>
          </div>

          <button
            type="button"
            className="clear-dates"
            aria-label="Clear selected dates"
          >
            Clear dates
          </button>
        </div>
      </div>
    </section>
  );
}