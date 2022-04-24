import useGetWeather, { Weather } from "../../hooks/useGetWeather";
import { Paper, Grid, Text, createStyles, Loader } from "@mantine/core";
import Image from "next/image";
import { wrap } from "module";

const useStyles = createStyles((theme) => ({
  card: {
    alignItems: "center",
    border: `1px solid ${theme.colors.gray[3]}`,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: ".25rem",
  },
  cardContain: {
    justifyContent: "space-between",
    width: "100%",
  },
  heading: {
    fontSize: "1rem",
    margin: ".25rem .5rem",
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
      {!isLoading ? (
        <Paper className={classes.card} shadow="sm" p="lg" color="gray">
          <Grid align="center" justify="center" className={classes.cardContain}>
            <Text align="center" component="h2" className={classes.heading}>
              {city}, CA
              {sr && (
                <Text size="xs" align="center">
                  <em>(The Home of the Grateful Dead)</em>
                </Text>
              )}
            </Text>

            <Grid align="center" justify="center">
              <Text size="lg">{Math.ceil(weather.main.temp)}&deg;F&nbsp;</Text>
              <Image
                layout="fixed"
                height={32}
                width={32}
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              />
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Loader size={"sm"} />
      )}
    </>
  );
};

export default Weather;
