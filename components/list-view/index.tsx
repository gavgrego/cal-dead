import { Grid, Text } from "@mantine/core";
import { useContext } from "react";
import {
  DateContext,
  DateContextInterface,
} from "../../data/context/DateContext";
import { format } from "date-fns";

type Props = {
  events: any[];
};

const ListView: React.FC<Props> = ({ events }) => {
  const { monthAndYear, setMonthAndYear }: DateContextInterface =
    useContext(DateContext);

  return (
    <div>
      {format(monthAndYear!, "MMMM")}
      {/* on click, put new value into sessionStorage via react use */}
      <button onClick={() => setMonthAndYear!(monthAndYear!)}>Prev</button>
      <button onClick={() => setMonthAndYear!(monthAndYear!)}>Next</button>
    </div>
  );
};

export default ListView;
