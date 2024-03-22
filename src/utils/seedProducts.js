import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


const products = [
    {  name: "Empanadas", img: "/src/img/empanadas3.jpg", price: 15000, category: "salado", description: "Entrada de empanadas de Carne y JQ", stock: 1000 },
    {  name: "Pizzas", img: "/src/img/pizza2.jpg", price: 25000, category: "salado", description: "Servicio de Pizza Party", stock: 1000 },
    {  name: "Pernil de cerdo", img: "/src/img/pernil2.jpg", price: 50000, category: "salado", description: "Sándwiches de Pernil de Ternera", stock: 1000 },
    {  name: "Pollo", img: "/src/img/mesasalada1.jpg", price: 8000, category: "salado", description: "Patitas de pollo rebozadas KFC", stock: 1000 },
    {  name: "Picada", img: "/src/img/mesasalada2.jpg", price: 12000, category: "salado", description: "Mesa de queso azul, provolone, fontina y Gouda", stock: 1000 },
    {  name: "Chocolate", img: "/src/img/mesadulce2.jpg", price: 30000, category: "dulce", description: "Cascada de chocolate con mesa dulce", stock: 1000 },
    {  name: "Torta", img: "/src/img/TortaTejido.jpg", price: 20000, category: "dulce", description: "Tortas Tematicas", stock: 1000 },
    {  name: "Postres", img: "/src/img/mesadulce1.jpg", price: 14000, category: "dulce", description: "Shots de postre", stock: 1000 },
    
  ];

  export const seedProducts = () => {

    products.forEach( product => {
        addDoc( collection(db, "products"), product)
    })
  }