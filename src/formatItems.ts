import type { ReceiptItem } from './types';

const formatItem = ({ name, price, qty }: ReceiptItem): string => `${name} / ${price}円×${qty} / ${price * qty}円`;

export const formatItems = (items: readonly ReceiptItem[]): string => items.map(formatItem).join('\n');
