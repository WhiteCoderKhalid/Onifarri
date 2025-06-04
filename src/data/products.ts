import { Product } from '../types';
import image1 from '../Assest/image1.jpg';
import Profile from '../Assest/Profile.jpg'
import image2 from '../Assest/image2.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Velvet Cap',
    price: 15000,
    category: 'caps',
    description: 'Handcrafted velvet cap with intricate embroidery, perfect for special occasions.',
    image: image1
  },
  {
    id: '2',
    name: 'Premium Aso Oke',
    price: 45000,
    category: 'asooke',
    description: 'Hand-woven premium Aso Oke fabric in traditional patterns.',
    image: 'https://images.unsplash.com/photo-1589363360147-4f2d51541551?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Classic Embroidered Cap',
    price: 12000,
    category: 'caps',
    description: 'Traditional cap with detailed embroidery work, suitable for daily wear.',
    image: Profile
  },
  {
    id: '5',
    name: 'Festive Aso Oke Bundle',
    price: 65000,
    category: 'asooke',
    description: 'Complete set of premium Aso Oke fabric for special celebrations.',
    image: Profile
  },
  {
    id: '7',
    name: 'Premium Velvet Cap',
    price: 18000,
    category: 'caps',
    description: 'Luxurious velvet cap with gold thread embroidery.',
    image: image2
  },
  {
    id: '8',
    name: 'Heritage Aso Oke',
    price: 55000,
    category: 'asooke',
    description: 'Traditional Aso Oke with heritage patterns and premium quality.',
    image: image1
  }
];