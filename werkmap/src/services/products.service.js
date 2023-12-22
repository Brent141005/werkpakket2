export default {
    async getProducts() {
        const response = await fetch('/src/assets/products.json');
        const data = await response.json();
        return data.products;
    },

    async getProductById(id) {
        const response = await fetch('/src/assets/products.json');
        const data = await response.json();
        return data.products.find((product) => product.id === id);
    }
};