import React from 'react';
import Cart from './Cart';


 class Onlineshopping extends React.Component{
    render(){
        const Cartinfo=[{itemname:"latop", price: 3000},
        {itemname:"lsdfsfatop", price: 893000},{itemname:"lasfsd", price: 45300}];

        return(
            <div classname ="mydiv">
                <h1>Items ordered :</h1>
                <Cart item={Cartinfo}/>
            </div>
        );
    }
}
export default Onlineshopping;