/**
 * Origin process data for Oropéndola — Café de Origen.
 * The six steps of the journey from seed to cup, in order.
 */
export interface PasoProceso {
  id: string;
  titulo: string;
  texto: string;
}

export const pasos: PasoProceso[] = [
  {
    id: 'siembra-y-sombra',
    titulo: 'Siembra y sombra',
    texto:
      'Cada lote se siembra bajo árboles de guayacán, nogal y cedro. La sombra retrasa la maduración del grano y lo hace más dulce, y da casa a la oropéndola y a cientos de especies que cuidan los cafetales.',
  },
  {
    id: 'cosecha-selectiva',
    titulo: 'Cosecha selectiva',
    texto:
      'Recogemos solo la cereza madura, pasando el cafetal varias veces entre noviembre y febrero. Cada recolector elige el grano a mano; la cereza verde no llega al canasto ni al beneficio.',
  },
  {
    id: 'fermentacion-y-lavado',
    titulo: 'Fermentación y lavado',
    texto:
      'La cereza despulpadora se fermenta en tanques con agua clara de la quebrada, entre 18 y 24 horas. El lavado suelta el mucílago y deja el pergamino listo para el patio.',
  },
  {
    id: 'secado-al-sol',
    titulo: 'Secado al sol',
    texto:
      'El café en pergamino descansa en camas elevadas y patios de cemento bajo el sol de Jardín. Lo volteamos cada dos horas para que seque parejo y no tome sabores de hongo ni de humedad.',
  },
  {
    id: 'tueste',
    titulo: 'Tueste',
    texto:
      'Tostamos en lotes pequeños, la misma semana de la venta. Cada tueste se prueba en la mesa de catación antes de empacar, para que el punto (claro, medio u oscuro) quede parejo en el lote entero.',
  },
  {
    id: 'taza',
    titulo: 'Taza',
    texto:
      'El grano reposa, se muele y se prepara en tu cocina. Ahí termina el camino: una taza que cuenta la altura, la sombra y la vereda. Sonamos a bosque: cada taza es un bosque que se oye.',
  },
];