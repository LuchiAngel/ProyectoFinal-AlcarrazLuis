import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { seedProducts } from "../../utils/seedProducts";

export const ItemListContainer = () => {

    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

      const getProductsDB = (category) => {

        const myProducts = category ? query( collection( db , "products"), where( "category", "==", category)) : collection ( db, "products")

        getDocs(myProducts)

          .then( response =>{
            
            // const item = {
            //  id: response.docs[0].id,
            //  ...response.docs[0].data()
            // } 

            const productList = response.docs.map( doc => {
              const item = {
                id: doc.id,
                ...doc.data()
              }
              return item;
            })
            setProducts(productList);

            setIsLoading(false);

          })


      
      }   

     /* useEffect(() => {
        const populateProducts = async () => {
          await seedProducts();
        };
        populateProducts();
      }, []); */
    

  useEffect( () => {
     setIsLoading(true);
     getProductsDB(category);
  }, [category])

  

    return (
      
      <div className="container d-flex flex-column align-items-center">
      <>
      {isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products} />}
      </>
      </div>
    )
}


