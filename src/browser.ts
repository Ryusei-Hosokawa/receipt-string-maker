import { formatReceipt } from './formatReceipt';
import receipt from './sample_1.json';

const element = document.getElementById('receipt');

if (element === null) {
    throw new Error('表示先の #receipt が見つかりません');
}

element.textContent = formatReceipt(receipt);
