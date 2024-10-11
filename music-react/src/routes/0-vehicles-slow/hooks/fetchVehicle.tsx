import { useState, useEffect } from 'react';
import { Vehicle } from '../../../types/vehicle';
import { BASE_API_URL } from '../../../core/environment';

export const useFetchVehicle = (vehicleId: string | undefined) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fetchVehicle = async () => {
      try {
        timer = setTimeout(() => {
          setLoading(true);           
        }, 300);
        const response = await fetch(
          `${BASE_API_URL}/vehicles/${vehicleId}`,
          {
            headers: {
              delay: '1500',
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Vehicle with id ${vehicleId} not found`);
        }
        const data: Vehicle = await response.json();
        setVehicle(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        if (timer) clearTimeout(timer);
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  return { vehicle, loading, error };
};
