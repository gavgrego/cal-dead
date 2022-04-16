import useGetWeather, { Weather } from "../../hooks/useGetWeather";
import { Paper, Grid, Text, createStyles } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid ${theme.colors.gray[3]}`,
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: ".25rem",
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
              <Text align="center" component="h2" className={classes.heading}>
                {city}, CA
              </Text>
              {sr && (
                <Text size="sm" align="center">
                  <em>(The Home of the Grateful Dead)</em>
                </Text>
              )}
              <div style={{ textAlign: "center" }}>
                <Text>{Math.ceil(weather.main.temp)}&deg;F&nbsp;</Text>
                <Image
                  layout="fixed"
                  height={32}
                  width={32}
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
