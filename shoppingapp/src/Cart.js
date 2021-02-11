import React from 'react';
import ReactDOM from 'react-dom';


 class Cart extends React.Component{
  item =this.props.item.map((item)=>
   {
        return(
            <tr>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
            </tr>
        )
    }
  );
}

export default Cart;

