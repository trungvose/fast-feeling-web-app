import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchVehicle } from './hooks/fetchVehicles';
import { Vehicle } from '../../types/vehicle';
import { Spinner } from '../../shared/components/Spinner';

export const VehicleDetails = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const [loading, setLoading] = useState(true);
  const [vehicle, setVehicle] = useState<Vehicle | undefined>();

  useEffect(() => {
    const getVehicle = async () => {
      setLoading(true);
      try {
        const id = Number(vehicleId);
        const vehicleData = await fetchVehicle(id);
        setVehicle(vehicleData);
      } catch (error) {
        console.error(error);
        setVehicle(undefined);
      } finally {
        setLoading(false);
      }
    };

    getVehicle();
  }, [vehicleId]);

  if (loading || !vehicle) return <Spinner />;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        <Link to="/demo0/vehicles" className="text-blue-600 hover:underline">
          Vehicles
        </Link>
        {' / '}
        {vehicle.name}
      </h2>
      <h3 className="text-lg font-bold">{vehicle.name}</h3>
      <p className="mb-2">Plate Number: {vehicle.plate}</p>
      <p className="mb-2">Vehicle ID: {vehicle.id}</p>
    </div>
  );
};
