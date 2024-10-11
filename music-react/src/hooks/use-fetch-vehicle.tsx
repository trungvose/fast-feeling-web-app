import { useEffect, useState } from 'react';
import { Vehicle } from '../types/vehicle';
import { fetchVehicle } from '../api/fetchVehcile';

export const useFetchVehicle = (vehicleId: string | undefined) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const init = async () => {
      try {
        timer = setTimeout(() => {
          setLoading(true);
        }, 300);
        const data: Vehicle = await fetchVehicle(vehicleId, {
          headers: {
            delay: '1500',
          },
        });
        setVehicle(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        if (timer) clearTimeout(timer);
        setLoading(false);
      }
    };

    init();
  }, [vehicleId]);

  return { vehicle, loading, error };
};
