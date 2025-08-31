import type { MenuItem } from "../interface/menu-bar.interface";

// Import images to ensure Vite bundles them and resolves paths correctly
import jhonnyBg3 from '@/assets/background/jhonny-bg-3.jpg';
import jhonnyBg2 from '@/assets/background/jhonny-bg-2.jpg';
import jhonnyBg1 from '@/assets/background/jhonny-bg-1.jpg';
import nightCity from '@/assets/background/night-city.jpg';
import windowRetro from '@/assets/background/window-retro.png';
import flashBg1 from '@/assets/background/flash-bg-1.jpg';
import flashBg2 from '@/assets/background/flash-bg-2.jpg';
import minimalist4k from '@/assets/background/minimalist-4k.jpg';
import programmerBg1 from '@/assets/background/programmer-bg-1.jpg';

export const BACKGROUND_IMAGES = [
  jhonnyBg3,
  jhonnyBg2,
  jhonnyBg1,
  nightCity,
  windowRetro,
  flashBg1,
  flashBg2,
  minimalist4k,
  programmerBg1,
] as const;

export const MENU_ITEMS: MenuItem[] = [
  { name: 'system', items: ['Settings', 'Control Panel', 'Restart'] },
  { name: 'file', items: ['New', 'Open', 'Save'] },
  { name: 'go', items: ['Back', 'Forward'] },
  { name: 'view', items: ['Zoom In', 'Zoom Out', 'Change Background'] },
  { name: 'help', items: ['Help Topics', 'About'] },
];