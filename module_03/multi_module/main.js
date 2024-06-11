import { createCard } from './modules/ui.js';
import { fetchProducts } from './modules/network.js';

window.addEventListener('load', async () => {
    try {
        const cardContainer = document.getElementById('card-container');

        const products = await fetchProducts();

        products.forEach((product) => {
            const productCard = createCard(product);
            cardContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error(error);
    }
});
