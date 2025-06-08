export type Skip = {
  id: string;
  size: number | string;
  hire_period_days: number | string;
  transport_cost: number | string | null;
  transport_time: number | string | null;
  price_before_vat: number | string;
  vat: number | string;
  postcode: string;
  area: string;
  forbidden: boolean;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};
