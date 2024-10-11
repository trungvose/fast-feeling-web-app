import { BASE_API_URL } from '../core/environment';
import { Vehicle } from '../types/vehicle';

export const fetchVehicle = async (
  vehicleId: string | undefined,
  options?: RequestInit
): Promise<Vehicle> => {
  const response = await fetch(
    `${BASE_API_URL}/vehicles/${vehicleId}`,
    options
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch vehicle with ID ${vehicleId}`);
  }
  return response.json();
};
