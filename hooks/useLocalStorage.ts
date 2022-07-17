import { useLocalStorage as mantineUseLocalStorage } from "@mantine/hooks";

type Props = {
  key: string;
  defaultValue?: any;
};

const useLocalStorage = ({ key = "", defaultValue }: Props) => {
  const [value, setValue] = mantineUseLocalStorage({
    key,
    defaultValue,
  });

  return {
    value,
    setValue,
  };
};

export default useLocalStorage;
