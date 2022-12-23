import qs from "qs";

type CategoryQueryProps = {
  event: any;
};

export const useGetCategoryQuery = ({ event }: CategoryQueryProps) => {
  return qs.stringify(
    {
      filters: {
        location: {
          $eq: event[0].attributes.location,
        },
        start: {
          $gt: new Date().getDay(),
        },
        slug: {
          $ne: event[0].attributes.slug,
        },
      },
      sort: ["start"],
    },
    {
      encodeValuesOnly: true,
    }
  );
};
