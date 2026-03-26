export const CAFE_NAME = "BeMo Cafe";
export const ADDRESS = "Jl. Nusantara Raya No.284, Depok Jaya, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16432";
export const MAP_LINK = "https://maps.app.goo.gl/mZ7sccxaXXQwhxZ57";
export const OPENING_HOURS = "Daily: 10:00 AM - 11:00 PM";

export enum Category {
  SIGNATURE = "Signature",
  COFFEE = "Coffee",
  NON_COFFEE = "Non-Coffee",
  MAIN_COURSE = "Main Course",
  SNACKS = "Snacks",
  TOAST = "Toast"
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  popular?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  // Signature
  {
    id: 's1',
    name: 'Es Kopi Susu Gula Aren',
    description: 'Kopi dengan gula aren. The classic local favorite.',
    price: '20k',
    category: Category.SIGNATURE,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop',
    popular: true
  },
  {
    id: 's2',
    name: 'BeMo Iced Coffee',
    description: 'Kopi dengan gula aren dan SKM (Condensed Milk). Creamier and sweeter.',
    price: '20k',
    category: Category.SIGNATURE,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=1000&auto=format&fit=crop',
    popular: true
  },

  // Coffee
  {
    id: 'c1',
    name: 'Espresso',
    description: 'Concentrated coffee brewed by forcing a small amount of boiling water under pressure.',
    price: '17k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c2',
    name: 'Double Espresso',
    description: 'Double shot of our house blend espresso.',
    price: '22k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c3',
    name: 'Americano',
    description: 'Espresso diluted with hot water.',
    price: '20k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1551030173-122f525e6556?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c4',
    name: 'Black Coffee',
    description: 'Traditional brewed black coffee.',
    price: '20k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c5',
    name: 'Cappuccino',
    description: 'Espresso-based coffee drink that is traditionally prepared with steamed milk foam.',
    price: '22k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c6',
    name: 'Coffee Latte',
    description: 'Espresso and steamed milk.',
    price: '22k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c7',
    name: 'Affogato',
    description: 'A scoop of vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso.',
    price: '22k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c8',
    name: 'Flavour Latte',
    description: 'Latte with your choice of flavor (Vanilla/Hazelnut/Caramel).',
    price: '27k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1570968992193-d6ea06480b1c?q=80&w=1000&auto=format&fit=crop'
  },
  // Manual Brew
  {
    id: 'mb1',
    name: 'Vietnam Drip',
    description: 'Traditional Vietnamese coffee with condensed milk.',
    price: '22k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1565457194605-779d71e16f30?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mb2',
    name: 'V60',
    description: 'Pour-over coffee method for a clean taste.',
    price: '22k',
    category: Category.COFFEE,
    image: 'https://images.unsplash.com/photo-1544719543-a6d1dc4909b9?q=80&w=1000&auto=format&fit=crop'
  },

  // Non-Coffee (Tea, Milk, Others, Squash)
  {
    id: 'nc1',
    name: 'Ice Tea',
    description: 'Classic refreshing iced tea.',
    price: '14k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc2',
    name: 'Lemon Tea',
    description: 'Iced tea with fresh lemon.',
    price: '17k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc3',
    name: 'Green Tea Milky',
    description: 'Creamy green tea drink.',
    price: '20k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1546833998-d1a1b15d2a6b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc4',
    name: 'Thai Tea',
    description: 'Authentic sweet Thai tea.',
    price: '20k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc5',
    name: 'Lychee Tea',
    description: 'Iced tea with lychee fruit flavor.',
    price: '25k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1629688461783-a764d843818e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc6',
    name: 'Chocolate Milk',
    description: 'Rich and creamy chocolate milk.',
    price: '24k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1550956972-c515a0c10f38?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc7',
    name: 'Red Velvet Latte',
    description: 'Sweet and milky red velvet flavor.',
    price: '24k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1562447279-798c8a1496a7?q=80&w=1000&auto=format&fit=crop',
    popular: true
  },
  {
    id: 'nc8',
    name: 'Taro Latte',
    description: 'Sweet and earthy taro flavor.',
    price: '24k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc9',
    name: 'Milo Dinosaur',
    description: 'Iced Milo with extra Milo powder on top.',
    price: '20k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1592318957434-2e9754f469df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc10',
    name: 'Lemon Squash',
    description: 'Refreshing sparkling lemon drink.',
    price: '22k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nc11',
    name: 'Manggo Squash',
    description: 'Sparkling mango drink.',
    price: '22k',
    category: Category.NON_COFFEE,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop'
  },

  // Toast (Ropang)
  {
    id: 't1',
    name: 'Ropang BeMo',
    description: 'BeMo special toast.',
    price: '17k',
    category: Category.TOAST,
    image: 'https://images.unsplash.com/photo-1584776296944-ab6fb4f71923?q=80&w=1000&auto=format&fit=crop',
    popular: true
  },
  {
    id: 't2',
    name: 'Cokelat Pisang',
    description: 'Toast with chocolate and banana.',
    price: '17k',
    category: Category.TOAST,
    image: 'https://images.unsplash.com/photo-1584776296944-ab6fb4f71923?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Roti Pizza Mozarella',
    description: 'Toast topped with pizza sauce and mozzarella.',
    price: '17k',
    category: Category.TOAST,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop'
  },

  // Snacks
  {
    id: 'sn1',
    name: 'French Fries',
    description: 'Classic salted french fries.',
    price: '18k',
    category: Category.SNACKS,
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sn2',
    name: 'French Fries dan Sosis',
    description: 'French fries served with sausages.',
    price: '27k',
    category: Category.SNACKS,
    image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sn3',
    name: 'Chiken Wings',
    description: 'Savory fried chicken wings.',
    price: '28k',
    category: Category.SNACKS,
    image: 'https://images.unsplash.com/photo-1527477396000-64ca9c00173f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sn4',
    name: 'Nachos',
    description: 'Corn chips with cheese and sauce.',
    price: '22k',
    category: Category.SNACKS,
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sn5',
    name: 'Croffle',
    description: 'Croissant waffle.',
    price: '18k',
    category: Category.SNACKS,
    image: 'https://images.unsplash.com/photo-1629672728469-8d8a7c645b85?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sn6',
    name: 'Pisang Goreng BeMo',
    description: 'BeMo special fried banana.',
    price: '17k',
    category: Category.SNACKS,
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=1000&auto=format&fit=crop'
  },

  // Main Course
  {
    id: 'mc1',
    name: 'Nasi Goreng',
    description: 'Indonesian fried rice.',
    price: '27k',
    category: Category.MAIN_COURSE,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000&auto=format&fit=crop',
    popular: true
  },
  {
    id: 'mc2',
    name: 'Mie Goreng Spesial',
    description: 'Special fried noodles.',
    price: '27k',
    category: Category.MAIN_COURSE,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mc3',
    name: 'Spaghetti BeMo',
    description: 'BeMo signature spaghetti.',
    price: '22k',
    category: Category.MAIN_COURSE,
    image: 'https://images.unsplash.com/photo-1551183053-6fde12976ca1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mc4',
    name: 'Indomo (Rebus/Goreng)',
    description: 'Indomie with Egg & Bakso (Meatballs). Choice of soup or dry.',
    price: '22k',
    category: Category.MAIN_COURSE,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1000&auto=format&fit=crop'
  }
];