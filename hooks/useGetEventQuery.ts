import qs from "qs";

export const useGetEventQuery = ({ params }: any) => {
  return qs.stringify(
    {
      filters: {
        slug: {
          $eq: params?.slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};
