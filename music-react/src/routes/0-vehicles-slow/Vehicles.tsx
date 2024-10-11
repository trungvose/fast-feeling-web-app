import { Link } from 'react-router-dom';
import { Spinner } from '../../shared/components/Spinner';
import { useFetchVehicles } from './hooks/fetchVehicles';

export const Vehicles = () => {
  const { loading, error, vehicles } = useFetchVehicles();

  if (loading) return <Spinner />;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Vehicles</h2>
      <table>
        <thead>
          <tr>
            <th>Plate Number</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.plate}</td>
              <td>{vehicle.name}</td>
              <td>
                <Link
                  to={`/vehicles/${vehicle.id}`}
                  className='text-blue-600 hover:underline'
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
