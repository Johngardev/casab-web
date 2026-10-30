export interface AppEvent {
    id: number;
    title: string;
    imageUrl: string;
    date: string | Date; // Puede ser un string o un objeto Date
    location: string;
    category?: 'Musica' | 'Arte' | 'Gastronomia' | 'Tecnología' | 'Cine' | 'Agro-ecologia' | 'Literatura';
    description?: string; // La descripción es opcional
    event_theme?: string; // Para el color en el calendario
}