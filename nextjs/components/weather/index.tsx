import useGetWeather, { Weather } from "../../hooks/useGetWeather";
import styles from "./styles.module.scss";
import { Paper, Grid, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid ${theme.colors.gray[3]}`,
  },
}));

export type Props = {
  location: string;
  city: string;
  sr?: boolean;
};

const Weather: React.FC<Props> = ({ location, city, sr }): JSX.Element => {
  const { data, isLoading } = useGetWeather(location);
  const weather = data as Weather;
  const { classes } = useStyles();
  return (
    <>
      {!isLoading && (
        <Paper className={classes.card} shadow="sm" p="lg" color="gray">
          <Grid justify="center">
            <Grid.Col>
              <Text
                align="center"
                component="h2"
                className={styles.weatherCard__heading}
              >
                {city}, CA
              </Text>
              {sr && (
                <Text size="sm" align="center">
                  <em>(The Home of the Grateful Dead)</em>
                </Text>
              )}
              <div style={{ textAlign: "center" }}>
                {Math.ceil(weather.main.temp)}&deg;F&nbsp;
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                />
              </div>
            </Grid.Col>
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default Weather;
