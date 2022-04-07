import useGetWeather, { Weather } from "../../hooks/useGetWeather";
import styles from "./styles.module.scss";
import { Paper, Grid, Text } from "@mantine/core";
const Weather: React.FC = (): JSX.Element => {
  const { data, isLoading } = useGetWeather();
  const weather = data as Weather;

  return (
    <>
      {!isLoading && (
        <Paper shadow="sm" p="lg" color="gray">
          <Grid justify="center">
            <Grid.Col>
              <Text component="h2" className={styles.weatherCard__heading}>
                San Rafael, CA
              </Text>
              <Text>(The Home of the Grateful Dead)</Text>
              <div className="text-xl flex items-center justify-center">
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
