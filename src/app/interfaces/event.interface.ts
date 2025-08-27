export interface Event {
    id: number;
    title: string;
    imageUrl: string;
    date: string;
    location: string;
    description?: string; // La descripción es opcional
}