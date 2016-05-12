import {Category} from './enums';

interface Book {
  id: number;
  author: string;
  title: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}

//Function INTERFACE
interface DamageLogger {
  (reason: string): void;
}

export { Book, DamageLogger };
