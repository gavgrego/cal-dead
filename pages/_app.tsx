import "../styles/globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { MantineProvider, useMantineTheme, Global } from "@mantine/core";
import Layout from "../layouts/layout";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <QueryClientProvider client={queryClient}>
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
            gray: ["#f8f9fa"],
            white: ["#fff"],
          },

          fontFamily: "Rubik",
          spacing: { xs: 1, sm: 1.5, md: 2, lg: 2.5, xl: 3 },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
