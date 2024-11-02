import { useEffect, useState } from 'react';
import { Vehicle } from '../types/vehicle';
import { fetchVehicles } from '../api/fetchVehicles';

export const useFetchVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const data = await fetchVehicles({
          headers: {
            delay: '250',
          },
        });
        setVehicles(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  return { vehicles, loading, error };
};
