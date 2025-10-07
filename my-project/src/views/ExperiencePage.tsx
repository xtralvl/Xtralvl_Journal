interface Experience {
  id: string; // unique id
  title: string;
  date?: string;
  location?: string;
  category?: string; // Adventure or Skill
  subcategory?: string; // Running, Skiing, Firemaking, etc.
  photo?: string; // URL or base64
  description?: string;
};
