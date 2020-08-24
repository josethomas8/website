
function productListReducer(state = {products:[]}, action){
    switch (action.type){
        case 1: PRODUCT_LIST_REQUEIST:
            return {loading: true};
        case 2:PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case 3:PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export {productListReducer}