## Product Manager -  Desafio 1

ProductManager es una clase que se encarga de gestionar la lista de productos de una tienda en línea. Permite agregar nuevos productos, verificar la existencia de un producto por su ID y obtener una lista de todos los productos en el inventario.

## Crear una instancia
Para comenzar a utilizar la clase ProductManager, es necesario crear una instancia de la misma.

const productos = new ProductManager();

## Agregar un producto

Para agregar un nuevo producto al inventario, se debe utilizar el método addProduct, el cual recibe los siguientes parámetros:

- Titulo: el título o nombre del producto.
- Descripcion: una breve descripción del producto.
- Precio: el precio del producto.
- Thumbnail: la URL de la imagen del producto.
- Codigo: un código único para el producto.
- stock: la cantidad de unidades disponibles del producto.

productos.addProduct("Title", "description", 666, "Image", "BG001", 5);

## Obtener la lista de productos
Para obtener una lista de todos los productos en el inventario, se debe utilizar el método getProducts.
const listaProductos = productos.getProducts();
console.log(listaProductos);

## Verificar la existencia de un producto por ID
Para verificar si un producto existe en el inventario por su ID, se debe utilizar el método existe, el cual devuelve el producto si existe o undefined si no existe. Luego se puede utilizar el método getProductById para obtener los detalles del producto.
const producto = productos.existe(1);
productos.getProductById(producto.id);

## Consideraciones
- El código de cada producto debe ser único. Si se intenta agregar un producto con un código que ya está en uso, se mostrará un mensaje de error.
- Todos los campos son obligatorios. Si se intenta agregar un producto sin proporcionar alguno de los campos, se mostrará un mensaje de error.
