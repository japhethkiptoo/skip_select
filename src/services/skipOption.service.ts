import api from "../utils/api";

export const skipOptionService = {
  fetchOptions: async () => {
    const url = `/api/skips/by-location`;
    const { data } = await api.get(url, {
      params: {
        postcode: "NR32",
        area: "Lowestoft",
      },
    });

    return data;
  },
};
