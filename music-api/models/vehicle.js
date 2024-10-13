const VEHICLES = [
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

const simulateDelay = (req) => {
  const delay = req.headers['delay'] ? Number(req.headers['delay']) : 0;
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const getVehicles = async (req, res) => {
  await simulateDelay(req);
  res.json(VEHICLES);
};

const getVehicleById = async (req, res) => {
  await simulateDelay(req);
  const vehicleId = Number(req.params.vehicleId);
  const vehicle = VEHICLES.find((v) => v.id === vehicleId);

  if (!vehicle) {
    return res.status(404).json({ error: `Vehicle with id ${vehicleId} not found` });
  }

  res.json(vehicle);
};

module.exports = {
  getVehicles,
  getVehicleById,
};