export interface Experience {
    id: string;
    title: string;
    description?: string;
    category?: string | null;
    subcategory?: string | null;
    date?: string; // "YYYY-MM-DD"
    time?: string;
    location?: string;
    photo?: string | null;
  };