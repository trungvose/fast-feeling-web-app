import { Link, useParams } from 'react-router-dom';
import { Spinner } from '../../shared/components/Spinner';
import { useFetchVehicle } from '../../hooks/use-fetch-vehicle-query';

export const VehicleDetails = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const { error, isLoading, data:vehicle } = useFetchVehicle(vehicleId);

  if (isLoading) return <Spinner />;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    vehicle && (
      <div>
        <h2 className='text-xl font-bold mb-4'>
          <Link to='/vehicles' className='text-blue-600 hover:underline'>
            Vehicles
          </Link>
          {' / '}
          {vehicle.name}
        </h2>
        <h3 className='text-lg font-bold'>{vehicle.name}</h3>
        <p className='mb-2'>Plate Number: {vehicle.plate}</p>
        <p className='mb-2'>Vehicle ID: {vehicle.id}</p>
      </div>
    )
  );
};
