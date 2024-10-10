import { delay } from '../../../shared/utils/delay';
import { Vehicle } from '../../../types/vehicle';

const VEHICLES: Vehicle[] = [
  { id: 1, plate: 'ABC1234', name: 'Toyota Corolla' },
  { id: 2, plate: 'XYZ5678', name: 'Honda Civic' },
  { id: 3, plate: 'LMN9101', name: 'Ford Focus' },
  { id: 4, plate: 'JKL2345', name: 'Chevrolet Malibu' },
  { id: 5, plate: 'DEF6789', name: 'Nissan Altima' },
  { id: 6, plate: 'GHI3456', name: 'Volkswagen Jetta' },
  { id: 7, plate: 'QRS7890', name: 'Hyundai Elantra' },
  { id: 8, plate: 'TUV1234', name: 'Kia Forte' },
  { id: 9, plate: 'WXY5678', name: 'Subaru Impreza' },
  { id: 10, plate: 'PQR9101', name: 'Mazda 3' },
  { id: 11, plate: 'STU2345', name: 'Dodge Charger' },
  { id: 12, plate: 'VWX6789', name: 'Chrysler 200' },
  { id: 13, plate: 'YZA3456', name: 'Toyota Camry' },
  { id: 14, plate: 'BCD7890', name: 'Honda Accord' },
  { id: 15, plate: 'EFG1234', name: 'Ford Fusion' },
  { id: 16, plate: 'HIJ5678', name: 'Chevrolet Impala' },
  { id: 17, plate: 'KLM9101', name: 'Nissan Sentra' },
  { id: 18, plate: 'NOP2345', name: 'Hyundai Sonata' },
  { id: 19, plate: 'QRS6789', name: 'Kia Optima' },
  { id: 20, plate: 'RST3456', name: 'Volkswagen Passat' },
];

export async function fetchVehicles(): Promise<Vehicle[]> {
  await delay(250);
  return VEHICLES;
}

export async function fetchVehicle(vehicleId: number) {
  await delay(250);
  const vehicle = VEHICLES.find(({ id }) => id === vehicleId);
  if (!vehicle) {
    throw new Error(`Vehicle with id ${vehicleId} not found`);
  }
  return vehicle;
}
