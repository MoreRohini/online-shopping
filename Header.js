// import './App.css';



function Header(props) {
    return (
        <div className='flex shopping-cart'>
        <div>Shopping Cart App</div>
        <div>Cart
            <sup>{props.count}</sup>
        </div>







        </div>
    );
}
export default Header;