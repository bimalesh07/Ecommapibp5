import {Cart} from '../Models/Cart.js'

// add to cart

export const addToCart = async(req, res)=>{
    const {productid, title, price, qty} =req.body

    const userId = req.user;

    let cart = await Cart.findOne({userId})

    if(!cart){
        cart = new Cart({userId,itmes:[]})
    }

    const itemindex = cart.items.findIndex(
        (item)=>item.productid.toString() == productid

    )
    if(itemindex >-1){
        cart.items[itemindex].qty += qty;
        cart.items[itemindex].price += price* qty;

    }else{
        cart.items.push({ productid, title, price, qty });
    }
    await cart.save();

    res.json({message:"Items added to caart",
        cart,
        sucess:true
    })

}

// get user cart

export const getuser = async (req,res)=>{
    const userId = req.user

    let cart = await Cart.findOne({userId})

    if(!cart) return res.json({
        message:"Cart is Not Found",
    })

    res.json({message:"User cart",cart})

}
// remove to cart 
export const removerproduct = async(req, res)=>{
    const userId = req.user;
    const productid = req.params.productid

    let cart = await Cart.findOne({userId});
    if(!cart) return res.json({
        message:"Cart is not found"
    })

    cart.items = cart.items.filter((item)=>item.productid.toString() !==productid)
    await cart.save();
    res.json({
        message:"product is delete from cart"
    })
}
// clear cart 
export const claercart = async(req,res)=>{
    const userid = req.user
    const cart = await Cart.findOne(userid)
    if(!cart){
        cart = new Cart({items:[]})
    }
    else{
        cart.items=[]
    }
    await cart.save();
    res.json({
        message:"User Cart is clear"
    })
}

//decrease qty form cart
export const deceraseproductqty = async(req, res)=>{
     const { productid,  qty } = req.body;

     const userId = req.user;

     let cart = await Cart.findOne({ userId });

     if (!cart) {
       cart = new Cart({ userId, itmes: [] });
     }

     const itemindex = cart.items.findIndex(
       (item) => item.productid.toString() == productid
     );

     if (itemindex > -1) {
        const item = cart.items[itemindex];
    
         if(item.qty > qty){
            const priceperunit = item.price/item.qty
            item.qty -= qty;
            item.price -= priceperunit*qty

         }else{
            cart.items.splice(itemindex,1)

        }
     }else{
        return res.json({
            message:"invalaid product id"
        })
     }
     await cart.save();

     res.json({ message: "Items qty decerase", cart, sucess: true });
    
}