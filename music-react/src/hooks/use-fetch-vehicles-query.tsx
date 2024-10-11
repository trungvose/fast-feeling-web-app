import { useQuery } from '@tanstack/react-query';
import { fetchVehicles } from '../api/fetchVehicles';

export const useFetchVehicles = () => {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: () => fetchVehicles({
      headers: {
        delay: '250',
      },
    }),
  });
};
