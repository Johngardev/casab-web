import { Component } from '@angular/core';

export interface MemoryEvent {
  id: number;
  title: string;
  dateStr: string; // Formato legible ej: "17 Dic, 2022"
  fullDate: string;
  artists?: string[];
  description?: string;
  imageUrl: string;
  category?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  memories: MemoryEvent[] = [
    {
      id: 11,
      title: 'Aserrín Live & Techno',
      dateStr: '31 Oct, 2025',
      fullDate: '31 de Octubre de 2025',
      artists: ['Matt Ballenger', 'Dayhann / Pimi', 'Xerox', 'Hommy'],
      description: 'Máscaras, frecuencias profundas y visual live set.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 10,
      title: 'Teknodelic Night (Free Party)',
      dateStr: '25 Oct, 2025',
      fullDate: '25 de Octubre de 2025',
      artists: ['Naxia', 'Karmakox', 'Nova', 'Ardea'],
      description: 'Gestión cultural independiente, escenografía y pintura colectiva.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 9,
      title: 'Intervención Multisensorial',
      dateStr: '30 Ago, 2025',
      fullDate: '30 de Agosto de 2025',
      artists: ['Naxia', 'Enigma', 'Psicodelic', 'Spectrum666'],
      description: 'Pintura en vivo, exposición por espaciomitante.co y proyección visual.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 8,
      title: 'Sesión Inolvidable',
      dateStr: '22 Jun, 2025',
      fullDate: '22 de Junio de 2025',
      artists: ['Soren', 'Cybergothzz', 'Failure', 'Tarab'],
      description: 'Recreando los momentos que alimentaron el inicio de este movimiento.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 7,
      title: 'Noche de Arte, Música y Tattoo',
      dateStr: '16 Nov, 2024',
      fullDate: '16 de Noviembre de 2024',
      artists: ['Hypogea', 'Murmux', 'Spectrum666', 'Khaoz111 B2B Cybergothzz'],
      description: 'Visuales en vivo por Matt Ballenger y zona de Flash Tattoo.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 6,
      title: 'Masks Reflections',
      dateStr: '19 Oct, 2024',
      fullDate: '19 de Octubre de 2024',
      artists: ['Tatann', 'Strange Soul', 'Sonder', 'Abluecatt'],
      description: 'Exposiciones fotográficas, dibujo y ritmos ácidos, house y electro.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 5,
      title: 'Sinergia en el Jardín',
      dateStr: '01 Jun, 2024',
      fullDate: '1 de Junio de 2024',
      artists: ['Tarab', 'Dystorted Opera', 'Wave of Energy'],
      description: 'Ondas deep y nature con exposiciones artísticas y performance.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 4,
      title: 'Especial de Residentes & Emergentes',
      dateStr: '06 Abr, 2024',
      fullDate: '6 de Abril de 2024',
      artists: ['Alejandro BR', 'Feiteru', 'Cybergothzz', 'Spectrum666'],
      description: 'Warm up atmosférico, tendencias emergentes y cierre oscuro.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 3,
      title: 'Velada Electro-Cibernética',
      dateStr: '02 Mar, 2024',
      fullDate: '2 de Marzo de 2024',
      artists: ['Underast', 'Noisync', 'Artista Invitado'],
      description: 'Corriente electrónica avanzada y paisajes sonoros atemporales.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 2,
      title: 'Seleccion de Artistas Emergentes',
      dateStr: '18 Feb, 2023',
      fullDate: '18 de Febrero de 2023',
      artists: ['Spectrum666', 'Random Selector', 'Xtanford'],
      description: 'Exploración de nuevos talentos y sonidos innovadores en la escena musical.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 2,
      title: 'Sinergia Producente',
      dateStr: '28 Ene, 2023',
      fullDate: '28 de Enero de 2023',
      artists: ['Orson Viafara', 'ARSÖ', 'Milillo B2B Cybergothzz'],
      description: 'Sinergia producente entre la música electrónica y la tecnología.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    },
    {
      id: 1,
      title: 'Inauguración Casa B',
      dateStr: '17 Dic, 2022',
      fullDate: '17 de Diciembre de 2022',
      artists: ['FV07', 'Cybergothzz B2B Milo', 'The Cosmic Thing', 'Spectrum', 'Delirium Tremenz'],
      description: 'Gran apertura de nuestro espacio cultural y musical.',
      imageUrl: '/assets/casab.jpg',
      category: 'Música'
    }
  ];

}
