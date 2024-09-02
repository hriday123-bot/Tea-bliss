import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cartItems: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart')).cartItems || []
    : [],itemsPrice: 0, shippingPrice: 0, gstPrice: 0, totalPrice: 0 }


const addDecimal=(no)=>
    {
        return (Math.round(no*100)/100).toFixed(2)
}
const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload;

            const existItem=state.cartItems.find((x)=>x._id===item._id);

            if(existItem){
                state.cartItems=state.cartItems.map((x)=>x._id===existItem._id?item :x)
            }else{
                state.cartItems=[...state.cartItems,item]
            }

            //calculate the items price
            state.itemsPrice=addDecimal(state.cartItems.reduce((acc,item)=>acc+ item.price*item.qty,0)) 

            //caluclate the shiiping price
            state.shippingPrice=addDecimal(state.itemsPrice>500 ?0:50);

            //calulate the gst price
            state.gstPrice=addDecimal(Number(state.itemsPrice*.15).toFixed(2))

            //calculate the total price

            state.totalPrice=(Number(state.itemsPrice)+Number(state.shippingPrice)+Number(state.gstPrice)).toFixed(2);

            localStorage.setItem('cart',JSON.stringify(state));

            return state;

        },
        removeFromCart: (state, action) => {
            console.log('checking state', action.payload);
            const item = action.payload;
            state.cartItems = state.cartItems.filter((x) => x._id !== item._id);

            state.shippingPrice = addDecimal(state.itemsPrice > 500 ? 0 : 50);

            // Recalculate the GST price
            state.gstPrice = addDecimal(Number(state.itemsPrice * 0.15).toFixed(2));

            // Recalculate the total price
            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.gstPrice)
            ).toFixed(2);

            // Update the local storage with the new cart state
            localStorage.setItem('cart', JSON.stringify(state));

            return state;

        }
    }
}
)

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;