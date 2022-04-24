import { Grid, Text } from "@mantine/core";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Grid my={32} justify="center">
      <Grid.Col sm={12} md={6}>
        <Text>
          Cal Dead was started for the simple purpose of being a single source
          of truth for all Grateul Dead related shows happening in the state of
          California. We are so blessed to live in a place where you can often
          see a Dead band every day of the week.
        </Text>
        <Text>
          If you would like to submit a show that I&apos;ve missed or
          haven&apos;t gotten to yet, please email me at gavgrego@gmail.com
        </Text>
      </Grid.Col>
    </Grid>
  );
};

export default About;
