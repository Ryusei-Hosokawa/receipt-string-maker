import type { ReceiptItem } from './types';
import { calculateTotal } from './calculateTotal';
import { formatItems } from './formatItems';

export const formatReceipt = (items: readonly ReceiptItem[]): string => {
    const title = 'お買い物レシート';
    const border = '-------------------';
    const [merchandise, total] = [items.length === 0 ? '商品なし' : formatItems(items), calculateTotal(items)];

    return ['', title, border, merchandise, border, `合計: ${total}円`].join('\n');
};
