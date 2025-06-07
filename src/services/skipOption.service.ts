import api from "../utils/api";

export const skipOptionService = {
  fetchOptions: async () => {
    const url = `/api/skips/by-location?postcode=NR32&area=Lowestoft`;
    return api.get(url);
  },
};
