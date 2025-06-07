import api from "../utils/api";

export const skipOptionService = {
  fetchOptions: async () => {
    const url = `/api/skips/by-location?postcode=NR32&area=Lowestoft`;
    const { data } = await api.get(url);

    return data;
  },
};
