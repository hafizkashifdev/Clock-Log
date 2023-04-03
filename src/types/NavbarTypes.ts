export type SubItemsType = {
  title: string;
  path: string;
  toshowforrole: string[];
};

export type NavItems = {
  role?: string[];
  title: string;
  path: string;
  icon: any;
  alt: string;
  toshowforrole: string[];
  subItems?: SubItemsType[];
};
