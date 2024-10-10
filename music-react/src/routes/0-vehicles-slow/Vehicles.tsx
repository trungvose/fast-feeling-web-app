import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchVehicles } from './hooks/fetchVehicles';
import { Spinner } from '../../shared/components/Spinner';
import { Vehicle } from '../../types/vehicle';

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVehicles = async () => {
      const data = await fetchVehicles();
      setVehicles(data);
      setLoading(false);
    };

    loadVehicles();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Vehicles</h2>
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
                  to={`/demo0/vehicles/${vehicle.id}`}
                  className="text-blue-600 hover:underline"
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
