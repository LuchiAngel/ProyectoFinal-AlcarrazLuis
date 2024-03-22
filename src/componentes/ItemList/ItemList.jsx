
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {
  return (
    
    <div className="d-flex flex-sm-wrap">

        {products.map( product => <Item key={product.id} {...product}  />)}
    </div>
  )
}
