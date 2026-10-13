export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type Listing = {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  area: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  tags: string[];
  featured?: boolean;
};

export type ListingWithCategory = Listing & {
  category: Category;
};
