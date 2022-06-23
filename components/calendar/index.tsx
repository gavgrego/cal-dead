import {
  Calendar as Cal,
  Culture,
  dateFnsLocalizer,
  Event,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Tooltip,
  createStyles,
  Text,
  Button,
  useMantineTheme,
  Grid,
} from "@mantine/core";
import { useMedia } from "react-use";

const useStyles = createStyles((theme) => ({
  calendar: {
    "& .rbc-toolbar-label": {
      fontSize: "2.2rem",
      color: theme.colors.dark[4],
      textTransform: "uppercase",
      letterSpacing: "2px",
      lineHeight: 1,

      [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
        fontSize: "3rem",
        padding: 0,
      },
    },
    "& .rbc-header": {
      color: theme.colors.dark[4],
    },
  },
  calendarFilters: {
    backgroundColor: theme.colors.gray[0],
    textAlign: "right",
    marginBottom: ".5rem",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      textAlign: "center",
    },
  },
  contain: {
    textAlign: "center",
    justifyContent: "center",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      textAlign: "right",
      justifyContent: "flex-end",
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
  slug: string;
}

type Props = {
  events: TEvent[];
};

const formats = {
  weekdayFormat: (date: Date, culture: Culture | undefined, localizer: any) =>
    localizer.format(date, "eee", culture),
};

const Calendar: React.FC<Props> = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const theme = useMantineTheme();
  const isMobile = useMedia("(max-width: 700px)");
  const router = useRouter();
  const { classes } = useStyles();
  const filterEvents = (area: string) => {
    const categoryFilteredEvents = events.filter(
      (item: any) => item.location === area
    );
    setFilteredEvents(categoryFilteredEvents);
  };

  return (
    <Grid mx={4} className={classes.contain}>
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
      <div style={{ overflowX: "auto", width: "100%" }}>
        <Cal
          formats={formats}
          className={classes.calendar}
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          showAllEvents={true}
          style={{ height: 700 }}
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
                  onClick={() => router.push(`/events/${wrapper.event.slug}`)}
                >
                  {wrapper.event.title}
                </span>
              </Tooltip>
            ),
          }}
        />
      </div>
    </Grid>
  );
};

export default Calendar;
