import { useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useMobileCalToast = () => {
  const theme = useMantineTheme();

  const { value, setValue } = useLocalStorage({
    key: "mobile-cal",
  });

  const { width: viewPortWidth } = useViewportSize();

  useEffect(() => {
    if (viewPortWidth <= theme.breakpoints.sm) {
      if (!value) {
        setTimeout(() => {
          showNotification({
            title: "📱 Scroll horizontally to view the entire calendar!",
            message: "",
            autoClose: 4000,
            disallowClose: true,
            styles: (theme) => ({
              root: {
                border: "1px solid white",
                background:
                  "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
                animation: "gradient 7.5s linear infinite",
                fontWeight: "bold",
                animationDirection: "alternate",
                backgroundSize: " 600% 100%",
                "@keyframes gradient": {
                  "0%": {
                    backgroundPosition: "0%",
                  },
                  "100%": {
                    backgroundPosition: "100%",
                  },
                },
                bottom: "1.5rem",
                padding: ".5rem",
                margin: "0 .5rem",
              },
              title: {
                color: "white",
                fontWeight: 700,
              },
            }),
          });
        }, 1000);
        setValue(true);
      }
    }
  }, []);
};
