import { createSlice } from "@reduxjs/toolkit";


const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("wishlist", serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("wishlist");
        if (serializedState === null) return [];
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return [];
    }
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: loadFromLocalStorage(),
    reducers: {
        addProduct: (state, action) => {
            const findProd = state.find((item) => item._id === action.payload._id);
            if (!findProd) {
                state.push(action.payload);
                saveToLocalStorage(state); // Save state to local storage
            }
        },
        deleteItemWishlist: (state, action) => {
            const index = state.findIndex((item) => item._id === action.payload._id);
            if (index !== -1) {
                state.splice(index, 1);
                saveToLocalStorage(state); // Save state to local storage
            }
        }
    }
});


// // Helper functions to interact with local storage
// const saveToLocalStorage = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem("wishlist", serializedState);
//     } catch (e) {
//       console.error("Could not save state", e);
//     }
//   };
  
//   const loadFromLocalStorage = () => {
//     try {
//       const serializedState = localStorage.getItem("wishlist");
//       if (serializedState === null) return [];
//       return JSON.parse(serializedState);
//     } catch (e) {
//       console.error("Could not load state", e);
//       return [];
//     }
//   };


// const wishlistSlice = createSlice({
//     name: 'wishlist',
//     initialState: loadFromLocalStorage(),
//     reducers: {
//         addProduct: (state, action) => {
//             const findProd = state.find((item) => item.id === action.payload.id);
//             if (!findProd) {
//                 state.push({ ...action.payload });
//                 saveToLocalStorage(state); // Save state to local storage
//             }

//         },
//         deleteItemWishlist: (state, action) => {
//             const updatedState = state.filter((item) => item.id !== action.payload.id);
//             saveToLocalStorage(updatedState); // Save state to local storage
//             return updatedState;

//         }
//     }
// });

export const { addProduct, deleteItemWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;















// import { createSlice } from "@reduxjs/toolkit";



// // const wshilstClice = createSlice({
// //     initialState: [],
// //     name : 'wshilstClice',
// //     reducers : {
// //         addProduct : (state , action) => {
// //             const findprod = state.find((item) => item.id === action.payload.id)
// //             if(!findprod) {
// //                 state.push({...action.payload})
// //             }
// //         },
// //         deletItemWshlist: (state , action) => {
// //             return state.filter((item) => item.id !== action.payload.id);
// //         }
// //     }
// // })


// const loadFromLocalStorage = () => {
//     try {
//       const serializedState = localStorage.getItem("wishlist");
//       if (serializedState === null) return [];
//       return JSON.parse(serializedState);
//     } catch (e) {
//       console.error("Could not load wishlist state", e);
//       return [];
//     }
//   };
  
//   // تعريف شريحة wishlist
//   const wishlistSlice = createSlice({
//     name: "wishlistSlice",
//     initialState: loadFromLocalStorage(),
//     reducers: {
//       addProduct: (state, action) => {
//         const findProd = state.find((item) => item.id === action.payload.id);
//         if (!findProd) {
//           state.push({ ...action.payload });
//         }
//       },
//       deleteItemWishlist: (state, action) => {
//         return state.filter((item) => item.id !== action.payload.id);
//       },
//     },
//   });


// export const { addProduct , deletItemWshlist} = wishlistSlice.actions;
// export default wishlistSlice.reducer;