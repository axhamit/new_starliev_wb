import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { toast } from 'react-toastify'; // Import react-toastify

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlistItems: [],
    },
    reducers: {
        addToWishlist(state, action) {
            const isInWishlist = state.wishlistItems.findIndex(item => item.id === action.payload.id);
            if (isInWishlist > -1) {
                toast.info('Product already in wishlist', { position: 'bottom-left' }); // Use react-toastify
            } else {
                state.wishlistItems.push(action.payload);
                toast.success('Added To Wishlist', { position: 'bottom-left' }); // Use react-toastify
            }
        },
        deleteFromWishlist(state, action) {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
            toast.error('Removed From Wishlist', { position: 'bottom-left' }); // Use react-toastify
        },
        deleteAllFromWishlist(state) {
            state.wishlistItems = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            return {
                ...state,
                ...action.payload.wishlistItems,
            };
        });
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
