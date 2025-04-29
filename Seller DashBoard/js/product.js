export class LocalStorageManager {
  constructor() {
    this.initializeProducts();
  }

  initializeProducts() {
    if (!this.getProducts()) {
      this.setProducts([]);
    }
  }

  getProducts() {
    return JSON.parse(localStorage.getItem("products"));
  }
  getUserAuthentication(){
    return JSON.parse(localStorage.getItem("users"));
  }
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  setProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  ClearCurrentUser(products) {
    localStorage.setItem("currentUser","");
  }
  addProduct(productData) {
    const products = this.getProducts();
    products.push(productData);
    this.setProducts(products);
  }

  updateProduct(updatedProduct) {
    const products = this.getProducts();
    const index = products.findIndex((p) => p.id === updatedProduct.id);

    if (index !== -1) {
      products[index] = updatedProduct;
      this.setProducts(products);
    }
  }

  deleteProduct(productId) {
    const products = this.getProducts();
    const filteredProducts = products.filter((p) => p.id !== productId);
    this.setProducts(filteredProducts);
  }

  getSellerProducts(sellerId) {
    const products = this.getProducts();
    return products.filter((p) => p.sellerId === sellerId);
  }


}