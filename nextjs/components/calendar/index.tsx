import { Calendar as Cal, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export interface TEvent extends Event {
  id: number;
}

type Props = {
  events: TEvent[];
};

const Calendar: React.FC<Props> = ({ events }) => {
  const router = useRouter();
  console.log(events);

  return (
    <div className={styles.calendar}>
      <Cal
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        showAllEvents={true}
        style={{ height: 650 }}
        onSelectEvent={(event) => router.push(`/events/${event.id}`)}
      />
    </div>
  );
};

export default Calendar;
