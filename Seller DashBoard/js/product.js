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
    return JSON.parse(localStorage.getItem("products")) || [];
  }
  
  getUserAuthentication() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser")) || {};
  }

 
  getOrders() {
    return JSON.parse(localStorage.getItem('Orders')) || [];
  }
  
  getSellerOrders(sellerId) {
    const orders = this.getOrders(); // This now uses the correct key
    return orders.filter(order => order.sellerId === sellerId);
  }

  createOrder(orderData) {
    const orders = this.getOrders();
    orders.push(orderData);
    localStorage.setItem("Orders", JSON.stringify(orders));
    return orderData;
  }

  setProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  ClearCurrentUser() {
    localStorage.setItem("currentUser", "");
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

  saveOrders(orders) {
    localStorage.setItem('Orders', JSON.stringify(orders));
  }

  restockProduct(productId, additionalQuantity) {
    const products = this.getProducts();
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
      products[productIndex].stock += additionalQuantity;
      this.setProducts(products);
      return true;
    }
    return false;
  }


  checkStock(productId, requestedQuantity) {
    const products = this.getProducts();
    const product = products.find(p => p.id === productId);
    return product && product.stock >= requestedQuantity;
}

decreaseStock(productId, quantity) {
    const products = this.getProducts();
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        products[productIndex].stock -= quantity;
        this.setProducts(products);
        return true;
    }
    return false;
}

increaseStock(productId, quantity) {
    const products = this.getProducts();
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        products[productIndex].stock += quantity;
        this.setProducts(products);
        return true;
    }
    return false;
}
}



