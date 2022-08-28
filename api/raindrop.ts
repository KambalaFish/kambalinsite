import axios, { AxiosResponse } from 'axios';

const raindropInstance = axios.create({
  baseURL: 'https://api.raindrop.io/rest/v1',
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_AUTH_TOKEN}`,
  },
});

type Raindrop = {
  title: string;
  link: string;
  cover: string;
};
type Raindrops = {
  count: number;
  items: Raindrop[];
};

const getBookmarks = async (): Promise<AxiosResponse<Raindrops>> => {
  return await raindropInstance.get<Raindrops>(`/raindrops/${process.env.RAINDROP_COLLECTION_ID}`);
};

export { getBookmarks };
export type { Raindrops };
