import { Calendar as Cal, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import React, { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { Tooltip, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  calendar: {
    minWidth: 700,

    "& .rbc-toolbar-label": {
      fontSize: "2rem",
      color: theme.colors.dark[4],
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    "& .rbc-header": {
      color: theme.colors.dark[4],
    },
  },
  calendarContain: {
    overflowX: "scroll",
  },
  event: {
    backgroundColor: `${theme.colors.orange}`,
    borderRadius: ".25rem",
    color: "white",
    cursor: "pointer",
    display: "block",
    overflow: "hidden",
    padding: "0 .25rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    "&--bay-area": {
      backgroundColor: `${theme.colors.orange}`,
    },

    "&--la": {
      backgroundColor: `${theme.colors.blue}`,
    },
  },
}));

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
  location: string;
}

type Props = {
  events: TEvent[];
};

const Calendar: React.FC<Props> = ({ events }) => {
  const router = useRouter();
  const { classes } = useStyles();

  return (
    <div style={{ overflowX: "auto" }}>
      <Cal
        className={classes.calendar}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        showAllEvents={true}
        style={{ height: 650 }}
        views={["month", "week"]}
        components={{
          eventWrapper: (wrapper) => (
            <Tooltip
              className={`${classes.event} ${wrapper.event.location}`}
              color="dark"
              label={`${wrapper.event.title}`}
            >
              <span onClick={() => router.push(`/events/${wrapper.event.id}`)}>
                {wrapper.event.title}
              </span>
            </Tooltip>
          ),
        }}
      />
    </div>
  );
};

export default Calendar;
