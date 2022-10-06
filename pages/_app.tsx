import "../styles/globals.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider, useMantineTheme, Global } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Layout from "../layouts/layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ARcnMZbx1BgnTwOJKIOkdcCB4Tz4tv5aCbBNpWcc-71PzjB6aYGej3vSTDjoIKWesaNowLpvEQuQHyWc",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Global
          styles={(theme) => ({
            h3: {
              marginTop: 0,
              marginBottom: ".5rem",
            },
          })}
        />
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
            colors: {
              blue: ["#005A9C"],
              orange: ["#c0362c"],
              green: ["#40c057"],
              gray: ["#f8f9fa", "#3a3b3c"],
              white: ["#fff"],
            },
            primaryColor: "gray",
            fontFamily: "Rubik",
            spacing: { xs: 1, sm: 1.5, md: 2, lg: 2.5, xl: 3 },
          }}
        >
          <NotificationsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
