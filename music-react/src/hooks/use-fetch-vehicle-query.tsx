import { useQuery } from '@tanstack/react-query';
import { fetchVehicle } from '../api/fetchVehcile';

export const useFetchVehicle = (vehicleId: string | undefined) => {
  return useQuery({
    queryKey: ['vehicle', vehicleId],
    queryFn: () => fetchVehicle(vehicleId, {
      headers: {
        delay: '1500',
      },
    }),
  });
};
