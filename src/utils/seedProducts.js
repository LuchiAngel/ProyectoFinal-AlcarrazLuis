import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


/*const deleteAllDocumentsInCollection = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const docsSnapshot = await getDocs(collectionRef);

  const deletePromises = docsSnapshot.docs.map((doc) =>
    deleteDoc(doc.ref)
  );

  try {
    await Promise.all(deletePromises);
    console.log(`Todos los documentos en ${collectionName} han sido eliminados.`);
  } catch (error) {
    console.error("Error al eliminar documentos:", error);
  }
};
*/

const products = [
    {  name: "Empanadas", img: "/img/empanadas3.jpg", price: 15000, category: "salado", description: "Entrada de empanadas de Carne y JQ", stock: 1000 },
    {  name: "Pizzas", img: "/img/pizza2.jpg", price: 25000, category: "salado", description: "Servicio de Pizza Party", stock: 1000 },
    {  name: "Pernil de cerdo", img: "/src/img/pernil2.jpg", price: 50000, category: "salado", description: "Sándwiches de Pernil de Ternera", stock: 1000 },
    {  name: "Pollo", img: "/img/mesasalada1.jpg", price: 8000, category: "salado", description: "Patitas de pollo rebozadas KFC", stock: 1000 },
    {  name: "Picada", img: "/img/mesasalada2.jpg", price: 12000, category: "salado", description: "Mesa de queso azul, provolone, fontina y Gouda", stock: 1000 },
    {  name: "Chocolate", img: "/src/img/mesadulce2.jpg", price: 30000, category: "dulce", description: "Cascada de chocolate con mesa dulce", stock: 1000 },
    {  name: "Torta", img: "/img/TortaTejido.jpg", price: 20000, category: "dulce", description: "Tortas Tematicas", stock: 1000 },
    {  name: "Postres", img: "/img/mesadulce1.jpg", price: 14000, category: "dulce", description: "Shots de postre", stock: 1000 },
    
  ];

  export const seedProducts = async () => {

   // await deleteAllDocumentsInCollection("products");

    products.forEach( product => {
        addDoc( collection(db, "products"), product)
    })
  }