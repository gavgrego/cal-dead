import { Calendar as Cal, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Tooltip, createStyles, Dialog, Text } from "@mantine/core";
import { useMedia, useLocalStorage } from "react-use";

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
    // background:"rgb(0,0,0)",
    background:
      "linear-gradient(90deg, rgba(0,0,0,0) 65%, rgba(255,255,255,1) 100%)",
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
  const isMobile = useMedia("(max-width: 700px)");
  const [dialogValue, setDialogValue] = useLocalStorage<boolean>(
    "mobile-dialog",
    false
  );
  const router = useRouter();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(true);
  const scrollRef = useRef(null);
  // timer to close calendar scroll dialog
  const closeDialogOnScroll = () => {
    setDialogValue(true);
    setTimeout(() => {
      setOpened(false);
    }, 500);
  };

  return (
    <div
      // ref={scrollRef}
      onScroll={() => closeDialogOnScroll()}
      className={classes.calendarContain}
      style={{ overflowX: "auto" }}
    >
      {isMobile && !dialogValue && (
        <Dialog
          position={{ bottom: 16, right: 16 }}
          className={classes.dialog}
          transition={"slide-up"}
          opened={opened}
          onClose={() => setOpened(false)}
          size="md"
          radius="sm"
          shadow="xl"
          p={".5rem"}
        >
          <Text>
            Scroll
            <Text component="span" size="xl">
              &nbsp;➡️&nbsp;
            </Text>
            on your
            <Text component="span" size="xl">
              &nbsp;📱&nbsp;
            </Text>
            for the full calendar
          </Text>
        </Dialog>
      )}
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
