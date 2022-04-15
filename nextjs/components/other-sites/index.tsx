import { List, Text } from "@mantine/core";
import Anchor from "../global/anchor";

const OtherSites: React.FC = (): JSX.Element => {
  return (
    <>
      <Text component="h3">Other people and places we like:</Text>
      <List>
        <List.Item>
          <Anchor href="https://www.solfoodrestaurant.com/" target="_blank">
            Sol Food
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://cloudsurfing.gdhour.com/" target="_blank">
            David Gans
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://kpfa.org/" target="_blank">
            KPFA
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.marinbike.org/" target="_blank">
            MCBC
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://gavin.land/" target="_blank">
            GAVIN LAND
          </Anchor>
        </List.Item>
      </List>
    </>
  );
};

export default OtherSites;
