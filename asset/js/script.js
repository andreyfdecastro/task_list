class category {
    constructor(id, name) {
        this.id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price) {
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

class productService {
    constructor() {
        this.products = []
        this.nextCategoryId = 0
    }

    addProdut(name, price, category) {
        const id = this.nextproductId++;
        const products = new Product(id, name, price, category);
        category.products.push(products);
        this.products.push(product);
    }
}

const categoryList = new CategoryService();

function creatCategory() {
    const categoryname = "Doce";

    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);
}