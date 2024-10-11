import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchVehicle } from '../api/fetchVehcile';
import { Vehicle } from '../types/vehicle';

export const useFetchVehicle = (vehicleId: string | undefined) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['vehicle', vehicleId],
    queryFn: () => fetchVehicle(vehicleId, {
      headers: {
        delay: '1500',
      },
    }),
    staleTime: 2 * 60 * 1000,
    initialData: () => {
      let data;
      const queries = queryClient.getQueriesData<Vehicle[]>({
        queryKey: ['vehicles'],
      });
      if (queries[0]) {
        const [, vehicles] = queries[0];
        data = vehicles?.find((vehicle) => `${vehicle.id}` === vehicleId);
      }
      return data;
    },
  });
};
