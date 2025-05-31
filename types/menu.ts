export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
}
