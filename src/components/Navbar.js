import './Navbar.css';
import {useState, useEffect} from 'react';
import Main from './Main';

const Navbar = () => {

    const [cartvalue, setcartvalue] = useState(localStorage.getItem('saveCart'));
    const [checktoggle, setchecktoggle] = useState(false);

    const changeCartValue = ()=>{
        setcartvalue(localStorage.getItem('saveCart'));
    }

    const style = {
        position: 'relative',
        zIndex: '2'
    };

    const removeCart = ()=>{
        localStorage.removeItem('saveCart');
        setcartvalue(0);
    }

    const toggleCart = ()=>{
        setchecktoggle(!checktoggle);
    }

    return ( 
        <>
        <div style={style} className="navbar">
            <div className="inner_navbar">
                <div className="item_div">
                    <input type="checkbox" id="nav-toggle" />
                    <label htmlFor="nav-toggle" className="icon-burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                    <h1>Sneakers</h1>
                    <ul className="item_list">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="icon_div">
                    <div onClick={()=>toggleCart()} >
                        <img className="icon_cart" src="/images/icon-cart.svg" alt="icon-cart"/>
                        {cartvalue ? <button>{cartvalue}</button> : <button style={{visibility: 'hidden'}}></button>}
                    </div>
                    <img className="icon_profile" src="/images/image-avatar.png" alt="icon-profile"/>
                </div>
            </div>
            {checktoggle ? <div className="cart_div">
                <p>Cart</p>
                <hr/>
                <div className="cart_content">
                    {!cartvalue ? <p>Your cart is empty.</p> : 
                        <div className="checkout_div">
                            <div>
                                <img className="checkout_thumb_image" src="images/image-product-1-thumbnail.jpg" alt="" />
                                <div>
                                    <p>Fall Limited Edition Sneakers</p>
                                    <div>
                                        <p>$125.00 × {cartvalue}</p>
                                        <p>${125*cartvalue}.00</p>
                                    </div>
                                </div>
                                <img onClick={()=>removeCart()} className="checkout_delete_image" src="/images/icon-delete.svg" alt="" />
                            </div>
                            <button>Checkout</button>
                    </div>
                    }
                </div>
            </div> : null}
            <hr className="hr_line" />
        </div>
        <Main changeCartValue={changeCartValue}/>
        </>
     );
}
 
export default Navbar;