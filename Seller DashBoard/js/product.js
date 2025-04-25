export class Product {
    #id;
    #sellerId;
    #name;
    #image;
    #brand;
    #price;
    #stock;
    #gender;
    #description;

    constructor(data = {}) {
        if (data.id) this.#id = data.id;
        if (data.sellerId) this.#sellerId = data.sellerId;
        if (data.name) this.Name = data.name;
        if (data.image) this.Image = data.image;
        if (data.brand) this.Brand = data.brand;
        if (data.price) this.Price = data.price;
        if (data.stock) this.Stock = data.stock;
        if (data.gender) this.Gender = data.gender;
        if (data.description) this.Description = data.description;
    }

    set ID(_id) {
        this.#id = _id;
    }
    
    set SellerId(_sellerId) {
        this.#sellerId = _sellerId;
    }
    
    set Name(_name) {
        if (typeof _name !== 'string' || _name.trim().length < 2) {
            throw new Error('Product name must be at least 2 characters');
        }
        this.#name = _name.trim();
    }
    
    set Image(_image) {
        this.#image = _image;
    }

    set Brand(_brand) {
        if (typeof _brand !== 'string' || _brand.trim().length < 2) {
            throw new Error('Product brand must be at least 2 characters');
        }
        this.#brand = _brand.trim();
    }
    
    set Price(_price) {
        if (typeof _price !== 'number' || _price <= 0) {
            throw new Error('Price must be a positive number');
        }
        this.#price = parseFloat(_price.toFixed(2));
    }
    
    set Stock(_stock) {
        if (!Number.isInteger(_stock)) {
            throw new Error('Stock must be an integer');
        }
        this.#stock = Math.max(0, _stock);
    }
    
    set Gender(_gender) {
        this.#gender = _gender;
    }
    
    set Description(_description) {
        this.#description = _description;
    }

    get ID() {
        return this.#id;
    }
    
    get SellerId() {
        return this.#sellerId;
    }
    
    get Name() {
        return this.#name;
    }
    
    get Image() {
        return this.#image;
    }
    
    get Brand() {
        return this.#brand;
    }
    
    get Price() {
        return this.#price;
    }
    
    get Stock() {
        return this.#stock;
    }
    
    get Gender() {
        return this.#gender;
    }
    
    get Description() {
        return this.#description;
    }

    toJSON() {
        return {
            id: this.#id,
            sellerId: this.#sellerId,
            name: this.#name,
            image: this.#image,
            brand: this.#brand,
            price: this.#price,
            stock: this.#stock,
            gender: this.#gender,
            description: this.#description
        };
    }

    static fromJSON(data) {
        const product = new Product();
        product.#id = data.id;
        product.#sellerId = data.sellerId;
        product.#name = data.name;
        product.#image = data.image;
        product.#brand = data.brand;
        product.#price = data.price;
        product.#stock = data.stock;
        product.#gender = data.gender;
        product.#description = data.description;
        return product;
    }
}

// Product Management Functions
export class ProductManager {
    static STORAGE_KEY = "products";
    static sellerId = "seller-123";

    static getAllProducts() {
        const productsJSON = localStorage.getItem(ProductManager.STORAGE_KEY) || "[]";
        const productsData = JSON.parse(productsJSON);
        return productsData.map(data => Product.fromJSON(data));
    }

    static getSellerProducts() {
        const products = ProductManager.getAllProducts();
        return products.filter(p => p.SellerId === ProductManager.sellerId);
    }

    static addProduct(productData) {
        const products = ProductManager.getAllProducts();
        const newProduct = new Product(productData);
        products.push(newProduct);
        ProductManager.saveProducts(products);
        return newProduct;
    }

    static updateProduct(updatedProduct) {
        const products = ProductManager.getAllProducts();
        const index = products.findIndex(p => p.ID === updatedProduct.ID);

        if (index !== -1) {
            products[index] = updatedProduct;
            ProductManager.saveProducts(products);
            return true;
        }
        return false;
    }

    static deleteProduct(productId) {
        const products = ProductManager.getAllProducts();
        const filteredProducts = products.filter(p => p.ID !== productId);
        ProductManager.saveProducts(filteredProducts);
    }

    static saveProducts(products) {
        const productsJSON = JSON.stringify(products.map(p => p.toJSON()));
        localStorage.setItem(ProductManager.STORAGE_KEY, productsJSON);
    }

    static initializeStorage() {
        if (!localStorage.getItem(ProductManager.STORAGE_KEY)) {
            localStorage.setItem(ProductManager.STORAGE_KEY, JSON.stringify([]));
        }
    }
}