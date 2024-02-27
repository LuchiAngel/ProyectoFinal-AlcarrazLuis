const products = [
    { id: "1", name: "Empanadas", img: "url-img", price: 15000, category: "salado", description: "Entrada de empanadas de Carne y jamón y queso (opción canastitas de verdura, caprese, brusquettas, etc)", stock: 1000 },
    { id: "2", name: "Pizzas", img: "url-img", price: 25000, category: "salado", description: "Servicio de Pizza Party", stock: 1000 },
    { id: "3", name: "Pernil de cerdo", img: "url-img", price: 50000, category: "salado", description: "Sándwiches de Pernil de Ternera, adobado con finas hierbas y con cocción prolongada", stock: 1000 },
    { id: "4", name: "Pollo", img: "url-img", price: 8000, category: "salado", description: "Patitas de pollo rebozadas con condimentos especiales", stock: 1000 },
    { id: "5", name: "Picada", img: "url-img", price: 12000, category: "salado", description: "Mesa de quesos en servicio de recepción.Queso azul, provolone, fontina y Gouda", stock: 1000 },
    { id: "6", name: "Chocolate", img: "url-img", price: 30000, category: "dulce", description: "Servicio de cascada de chocolate con mesa dulce", stock: 1000 },
    { id: "7", name: "Torta", img: "url-img", price: 20000, category: "dulce", description: "Tortas Tematicas a pedido", stock: 1000 },
    { id: "8", name: "Postres", img: "url-img", price: 14000, category: "dulce", description: "Vasitos shots de postre 100 cc. La mejor opción para tu mesa dulce", stock: 1000 },
    
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
  
  export const getProduct = ( id ) => {
    
    return new Promise((resolve, reject) => {
     
    if (products.length > 0) {

        const product = products.find (p => p.id == id)
        setTimeout(() => {

        if(!product){
            reject('No se encuentra el producto con el id ${id}')
        }
        else{
            resolve(product)
        }
        }, 2000);
    } 
    else {
        reject("No hay productos");
      }
    });
  };
 