import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { toast } from 'react-toastify'; // Import react-toastify

const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        compareItems: [],
    },
    reducers: {
        addToCompare(state, action) {
            state.compareItems.push(action.payload);
            toast.success('Added To Compare', { position: 'bottom-left' }); // Use react-toastify
        },
        deleteFromCompare(state, action) {
            state.compareItems = state.compareItems.filter(item => item.id !== action.payload);
            toast.error('Removed From Compare', { position: 'bottom-left' }); // Use react-toastify
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            return {
                ...state,
                ...action.payload.compareItems,
            };
        });
    },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
