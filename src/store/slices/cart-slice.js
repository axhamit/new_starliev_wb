import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { toast } from 'react-toastify'; // Import react-toastify

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            if (!product.variation) {
                const cartItem = state.cartItems.find(item => item.id === product.id);
                if (!cartItem) {
                    state.cartItems.push({
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuidv4(),
                    });
                } else {
                    state.cartItems = state.cartItems.map(item => {
                        if (item.cartItemId === cartItem.cartItemId) {
                            return {
                                ...item,
                                quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
                            };
                        }
                        return item;
                    });
                }
            } else {
                const cartItem = state.cartItems.find(
                    item =>
                        item.id === product.id &&
                        (product.cartItemId ? product.cartItemId === item.cartItemId : true)
                );
                if (!cartItem) {
                    state.cartItems.push({
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuidv4(),
                    });
                } else {
                    state.cartItems = state.cartItems.map(item => {
                        if (item.cartItemId === cartItem.cartItemId) {
                            return {
                                ...item,
                                quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
                            };
                        }
                        return item;
                    });
                }
            }

            toast.success('Added To Cart', { position: 'bottom-left' }); // Use react-toastify
        },
        deleteFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
            toast.error('Removed From Cart', { position: 'bottom-left' }); // Use react-toastify
        },
        decreaseQuantity(state, action) {
            const product = action.payload;
            if (product.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
                toast.error('Removed From Cart', { position: 'bottom-left' }); // Use react-toastify
            } else {
                state.cartItems = state.cartItems.map(item =>
                    item.cartItemId === product.cartItemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                toast.warn('Item Decremented From Cart', { position: 'bottom-left' }); // Use react-toastify
            }
        },
        deleteAllFromCart(state) {
            state.cartItems = [];
            toast.info('All items removed from cart', { position: 'bottom-left' }); // Optional: Notify when cart is emptied
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.cartItems,
                };
            });
    },
});

export const { addToCart, deleteFromCart, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
