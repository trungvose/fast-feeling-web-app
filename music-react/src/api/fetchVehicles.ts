import { BASE_API_URL } from '../core/environment';
import { Vehicle } from '../types/vehicle';

export const fetchVehicles = async (
  options?: RequestInit
): Promise<Vehicle[]> => {
  const response = await fetch(`${BASE_API_URL}/vehicles`, options);
  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return response.json();
};
