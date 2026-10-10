/**
 * Product catalog data for Oropéndola — Café de Origen.
 * Prices in Colombian pesos (COP), weights as display strings.
 * Altitude in meters above sea level.
 */
export type Tueste = 'claro' | 'medio' | 'oscuro';

export interface Producto {
  id: string;
  nombre: string;
  tueste: Tueste;
  /** Intensity of the cup, 1 (delicate) to 5 (bold). */
  intensidad: number;
  notas: string[];
  altitud: number;
  peso: string;
  precio: number;
  descripcion: string;
}

export const productos: Producto[] = [
  {
    id: 'sombra-de-guayacanes',
    nombre: 'Sombra de Guayacanes',
    tueste: 'claro',
    intensidad: 2,
    notas: ['jazmín', 'mandarina', 'melao'],
    altitud: 1950,
    peso: '250 g',
    precio: 32000,
    descripcion:
      'Granos del lote más alto, madurados bajo la sombra de los guayacanes. Taza brillante y floral, de cuerpo ligero.',
  },
  {
    id: 'lavado-jardin',
    nombre: 'Lavado Jardín',
    tueste: 'medio',
    intensidad: 3,
    notas: ['panela', 'naranja', 'miel de caña'],
    altitud: 1900,
    peso: '250 g',
    precio: 28000,
    descripcion:
      'El café de toda la vida en la finca: lavado, secado al sol y tostado medio. Dulce, redondo y muy bebible.',
  },
  {
    id: 'fermentado-en-cereza',
    nombre: 'Fermentado en Cereza',
    tueste: 'claro',
    intensidad: 1,
    notas: ['limón', 'té de hierbas', 'durazno'],
    altitud: 1920,
    peso: '250 g',
    precio: 36000,
    descripcion:
      'Fermentación corta dentro de la cereza antes del lavado. Una taza delicada, aromática, con frescura cítrica.',
  },
  {
    id: 'cosecha-del-rio',
    nombre: 'Cosecha del Río',
    tueste: 'medio',
    intensidad: 4,
    notas: ['cacao', 'panela', 'cítrico'],
    altitud: 1880,
    peso: '500 g',
    precio: 48000,
    descripcion:
      'Selección de los lotes que miran al río, de maduración tardía. Cuerpo medio con amargor limpio de cacao.',
  },
  {
    id: 'lote-la-cascada',
    nombre: 'Lote La Cascada',
    tueste: 'oscuro',
    intensidad: 5,
    notas: ['chocolate oscuro', 'nuez', 'canela'],
    altitud: 1850,
    peso: '500 g',
    precio: 54000,
    descripcion:
      'Tueste profundo para el que toma café con leche o espresso: goloso, especiado, con final largo.',
  },
  {
    id: 'reserva-de-la-vereda',
    nombre: 'Reserva de la Vereda',
    tueste: 'oscuro',
    intensidad: 4,
    notas: ['cacao', 'caramelo', 'clavo de olor'],
    altitud: 1860,
    peso: '500 g',
    precio: 52000,
    descripcion:
      'La mezcla de finca: granos de todos los lotes tostados oscuro. Potente, cálido y constante de cosecha en cosecha.',
  },
];