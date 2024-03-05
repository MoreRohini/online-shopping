import'../App.css';


function CartList({ Cart }) {
    return (
        <div>
            {
                Cart.map((cartItem, cartIndex) => {
                    return (
                        <div>
                           
                            <img src={cartItem.url} width={40} />
                            <span>{cartItem.name}</span>
                            <button>-</button>
                            <span>{cartItem.quantity}</span>
                            <button>+</button>
                            <span>{cartItem.price}</span>
                        </div>
                    )
                })
            }

        </div>
    );

}
export default CartList;