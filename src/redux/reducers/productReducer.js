const initialState = {
    products: [
        {
            id: 1,
            title: "T-Shirt",
            category: "Clothes"
        }
    ]
}

export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS:
            return state;
        default: 
            return state;
    }
}