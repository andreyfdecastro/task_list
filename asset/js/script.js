class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextCategoryId = 0;
    }

    addProdut(name, price, category) {
        const id = this.nextProductId++;
        const products = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService();
const productList = new ProductService();

function createCategory() {
    const categoryname = "Doce";
    categoryList.addCategory(categoryname);
    console.log(categoryList.categories);
}

function createProduct() {
    const productname = "bolo";
    const productPrice = 28;
    const productCategory = categoryList.categories[0];

    productlist.addProduct(productname, productPrice, productCategory);

    console; log(productList.products);
}