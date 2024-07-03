export interface Images {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}


export interface Params {
  client_id: string;
  query: string;
  page: number;
  per_page: number;
  orientation: string;
}