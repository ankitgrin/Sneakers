import './Main.css'
import {useState, useEffect} from 'react';
import cartImage from './../images/icon-cart-white.svg';
import thumb_image1 from './../images/image-product-1-thumbnail.jpg';
import thumb_image2 from './../images/image-product-2-thumbnail.jpg';
import thumb_image3 from './../images/image-product-3-thumbnail.jpg';
import thumb_image4 from './../images/image-product-4-thumbnail.jpg';
import large_image1 from './../images/image-product-1.jpg';
import large_image2 from './../images/image-product-2.jpg';
import large_image3 from './../images/image-product-3.jpg';
import large_image4 from './../images/image-product-4.jpg';
import next_image from './../images/icon-next.svg';
import previous_image from './../images/icon-previous.svg';


const Main = ({changeCartValue}) => {

    const [image, setimage] = useState(large_image1);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(125);
    const [changeIndex, setchangeIndex] = useState(1);

    const style = {
        position: 'absolute',
        zIndex: '1'
    };

    const changeImage = val => {
        switch (val) {
            case 1:
                setimage(large_image1);
                break;
            case 2:
                setimage(large_image2);
                break;
            case 3:
                setimage(large_image3);
                break;
            case 4:
                setimage(large_image4);
                break;
    
            default:
                setimage(large_image1);
                break;
        }
    }

    const changeQuantity = val => {
        if(val === 1){
            setQuantity(quantity + 1);
            setPrice(price + 125);
        } else{
            if(quantity !== 1){
                setQuantity(quantity - 1);
                setPrice(price - 125);
            }
        }
    }

    const savetoCart = () => {
        localStorage.setItem('saveCart', quantity);
        changeCartValue();
    }

    const changeLargeImage = val =>{
        if (val === 1) {
            if (changeIndex !== 4){
                setchangeIndex(changeIndex + 1);
            }
        } else{
            if (changeIndex !== 1){
                setchangeIndex(changeIndex - 1);
            }
        }
    }

    useEffect(() => {
        changeImage(changeIndex);
    }, [changeIndex])

    return ( 
        <>
            <div style={style} className="container">
                <div className="left_div">
                    <div className="change_image">
                        <button className="change_image_button"><img onClick={()=>changeLargeImage(-1)} src={previous_image} alt="" /></button>
                        <button className="change_image_button"><img onClick={()=>changeLargeImage(1)} src={next_image} alt="" /></button>
                    </div>
                    <img className="large_image" src={image} alt="" />
                    <div className="small_image_div">
                    <img onClick={()=>changeImage(1)} className="thumb_image" src={thumb_image1} alt="" />
                    <img onClick={()=>changeImage(2)} className="thumb_image" src={thumb_image2} alt="" />
                    <img onClick={()=>changeImage(3)} className="thumb_image" src={thumb_image3} alt="" />
                    <img onClick={()=>changeImage(4)} className="thumb_image" src={thumb_image4} alt="" />
                    </div>
                </div>
                <div className="right_div">
                    <div className="inner_right_div">
                    <h6>SNEAKER COMPANY</h6>
                    <h1 className="right_heading">Fall Limited Edition Sneakers</h1>
                    <p className="right_content">These low-price sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.</p>
                    <div className="upper_price_div">
                    <div className="price_div">
                    <h2 style={{fontFamily: "sans-serif"}}>${price}.00</h2>
                    <button style={{fontFamily: "sans-serif"}}>50%</button>
                    </div>
                    <p style={{fontFamily: "sans-serif"}} className="real_price">${price*2}.00</p>
                    </div>
                    <div className="button_div">
                        <div className="button_inner_div">
                         <button onClick={()=>changeQuantity(-1)} className="minusbutton">-</button><button style={{fontFamily: "sans-serif"}} className="countbutton">{quantity}</button><button onClick={()=>changeQuantity(1)} className="plusbutton">+</button>
                        </div>
                    <button onClick={()=>savetoCart()} className="addtocart_button"><img className="addtocart_image" src={cartImage} alt="icon-cart"/> <p className="addtocart_text">Add to cart</p></button>
                    </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Main;