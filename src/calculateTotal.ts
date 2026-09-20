import type { ReceiptItem } from './types';

export const calculateTotal = (items: readonly ReceiptItem[]): number =>
    items.reduce((acc, item) => acc + item.price * item.qty, 0);
