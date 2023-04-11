class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(Titulo, Descripcion, Precio, Thumbnail, Codigo, stock) {
    for(let  i = 0; i<this.products.length; i++) {
      if(this.products[i].Codigo === Codigo){
        console.log(`El código ${Codigo} ya está en uso`);
        return;
      }
    }

    const newProduct = {
      Titulo,
      Descripcion,
      Precio,
      Thumbnail,
      Codigo,
      stock,
    };

    if(!Object.values(newProduct).includes(undefined)) {
      ProductManager.id++;
      this.products.push({
        ...newProduct,
        id: ProductManager.id,
      });
    } else {
      console.log("Todos los campos son obligatorios");
    }
  }

  getProducts() {
    return this.products;
  }

  existe(id) {
    return this.products.find((producto) => producto.id === id);
  }

  getProductById(id) {
    !this.existe(id) ? console.log("No encontrado"): console.log(this.existe(id));  
  }
}

const productos = new ProductManager();

productos.addProduct("Title", "description", 666, "Image", "BG001", 5);
productos.addProduct("Title2", "description2", 666, "Image2", "BG002", 6);

console.log(productos.getProducts());
