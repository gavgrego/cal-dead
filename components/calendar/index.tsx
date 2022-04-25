import { Calendar as Cal, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import {
  Tooltip,
  createStyles,
  Dialog,
  Text,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { useMedia, useLocalStorage } from "react-use";

const useStyles = createStyles((theme) => ({
  calendar: {
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
    // background:"rgb(0,0,0)",
    // background:
    // "linear-gradient(90deg, rgba(0,0,0,0) 65%, rgba(255,255,255,1) 100%)",
  },
  calendarFilters: {
    backgroundColor: theme.colors.gray,
    textAlign: "right",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      textAlign: "center",
      marginBottom: "1rem",
    },
  },
  dialog: {
    background:
      "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
    backgroundSize: " 600% 100%",
    border: "none",
    color: "white",
    fontWeight: 600,
    animation: "gradient 4.5s linear infinite",
    animationDirection: "alternate",
    "@keyframes gradient": {
      "0%": {
        backgroundPosition: "0%",
      },
      "100%": {
        backgroundPosition: "100%",
      },
    },
    minHeight: 0,
  },
  event: {
    // backgroundColor: `${theme.colors.orange}`,
    borderRadius: ".25rem",
    color: "white",
    cursor: "pointer",
    display: "block",
    overflow: "hidden",
    padding: "0 .25rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    "&.bay-area": {
      backgroundColor: `${theme.colors.orange}`,
    },

    "&.la": {
      backgroundColor: `${theme.colors.blue}`,
    },

    "&.other": {
      backgroundColor: `${theme.colors.green}`,
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
  const [dialogValue, setDialogValue] = useLocalStorage<boolean>(
    "mobile-dialog",
    false
  );
  const [filteredEvents, setFilteredEvents] = useState(events);
  console.log(events);
  const theme = useMantineTheme();
  const isMobile = useMedia("(max-width: 700px)");
  const router = useRouter();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(true);
  const scrollRef = useRef(null);

  // this is firing sometimes when the calendar loads in, firing the onscroll (not always scrolling with mouse) need to defer until page is
  const closeDialogOnScroll = () => {
    setTimeout(() => {
      setOpened(false);
    }, 500);
  };

  const filterEvents = (area: string) => {
    if (filteredEvents[0].location === area) {
      setFilteredEvents(events);
    } else {
      const categoryFilteredEvents = events.filter(
        (item: any) => item.location === area
      );
      setFilteredEvents(categoryFilteredEvents);
    }
  };

  return (
    <>
      {/* TODO: Put this in its own component */}
      <div className={classes.calendarFilters}>
        <Text component="h3">Filter by metro area:</Text>
        <Button
          compact
          style={{ backgroundColor: theme.colors.orange[0] }}
          onClick={() => filterEvents("bay-area")}
        >
          Bay Area
        </Button>
        &nbsp;
        <Button
          style={{ backgroundColor: theme.colors.blue[0] }}
          compact
          onClick={() => filterEvents("la")}
        >
          LA
        </Button>
        &nbsp;
        <Button
          compact
          style={{ backgroundColor: theme.colors.green[0] }}
          onClick={() => filterEvents("other")}
        >
          Other
        </Button>
        &nbsp; &nbsp;
        <Button
          compact
          variant="outline"
          color="indigo"
          onClick={() => setFilteredEvents(events)}
        >
          Reset
        </Button>
      </div>
      <div
        ref={scrollRef}
        onScroll={closeDialogOnScroll}
        className={classes.calendarContain}
        style={{ overflowX: "auto" }}
      >
        <Cal
          className={classes.calendar}
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          showAllEvents={true}
          style={{ height: 600 }}
          views={["month"]}
          components={{
            eventWrapper: (wrapper) => (
              <Tooltip
                disabled={isMobile ? true : false}
                className={`${classes.event} ${wrapper.event.location}`}
                color="dark"
                label={`${wrapper.event.title}`}
              >
                <span
                  onClick={() => router.push(`/events/${wrapper.event.id}`)}
                >
                  {wrapper.event.title}
                </span>
              </Tooltip>
            ),
          }}
        />
      </div>
    </>
  );
};

export default Calendar;
