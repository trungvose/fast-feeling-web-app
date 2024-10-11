import { useState, useEffect } from 'react';
import { Vehicle } from '../../../types/vehicle';
import { BASE_API_URL } from '../../../core/environment';

export const useFetchVehicle = (vehicleId: string | undefined) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(
          `${BASE_API_URL}/api/vehicles/${vehicleId}`,
          {
            headers: {
              delay: '250',
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
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  return { vehicle, loading, error };
};
