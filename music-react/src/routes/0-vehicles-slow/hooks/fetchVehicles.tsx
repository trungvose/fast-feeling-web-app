import { useEffect, useState } from 'react';
import { Vehicle } from '../../../types/vehicle';
import { BASE_API_URL } from '../../../core/environment';

export const useFetchVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fetchVehicles = async () => {
      try {
        timer = setTimeout(() => {
          setLoading(true);
        }, 300);
        const response = await fetch(`${BASE_API_URL}/vehicles`, {
          headers: {
            delay: '250',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles');
        }
        const data: Vehicle[] = await response.json();
        setVehicles(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        if (timer) clearTimeout(timer);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return { vehicles, loading, error };
};
