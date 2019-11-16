import { IProductState, IActionBase } from "../models/root.interface";
import { ADD_PRODUCT, CHANGE_PRODUCT_PENDING_EDIT, EDIT_PRODUCT, REMOVE_PRODUCT,
    CLEAR_PRODUCT_PENDING_EDIT, SET_MODIFICATION_STATE, CHANGE_PRODUCT_AMOUNT} from "../actions/products.action";
import { IProduct, ProductModificationStatus } from "../models/product.interface";



const initialState: IProductState = {
    modificationState: ProductModificationStatus.None,
    selectedProduct: null,
    products: [{
        id: 1, name: "Chocolate", description: "This is Chocolate and it is Sweet",
        amount: 10, price: 4, hasExpiryDate: true, category: "Sweet"
    },
    {
        id: 2, name: "Apple", description: "This is Apple and it is healthy",
        amount: 5, price: 2, hasExpiryDate: true, category: "Fruit"
    },
    {
        id: 3, name: "Straw", description: "This is Straw and you can use it for your drink",
        amount: 100, price: 1, hasExpiryDate: false, category: "Kitchen"
    },
    {
        id: 4, name: "Spoon", description: "This is Spoon and it is useful while eating",
        amount: 3, price: 2, hasExpiryDate: false, category: "Kitchen"
    },
    {
        id: 5, name: "Sugar", description: "This is Sugar and it is to make your life sweet",
        amount: 15, price: 5, hasExpiryDate: true, category: "Sweet"
    }]
};

function productsReducer(state: IProductState = initialState, action: IActionBase): IProductState {
    switch (action.type) {
        case ADD_PRODUCT: {
            let maxId: number = Math.max.apply(Math, state.products.map(function(o) { return o.id; }));
            action.product.id = maxId + 1;
            return { ...state, products: [...state.products, action.product]};
        }
        case EDIT_PRODUCT: {
            const foundIndex: number = state.products.findIndex(pr => pr.id === action.product.id);
            let products: IProduct[] = state.products;
            products[foundIndex] = action.product;
            return { ...state, products: products };
        }
        case REMOVE_PRODUCT: {
            return { ...state, products: state.products.filter(pr => pr.id !== action.id) };
        }
        case CHANGE_PRODUCT_PENDING_EDIT: {
            return { ...state, selectedProduct: action.product };
        }
        case CLEAR_PRODUCT_PENDING_EDIT: {
            return { ...state, selectedProduct: null };
        }
        case SET_MODIFICATION_STATE: {
            return { ...state, modificationState: action.value };
        }
        case CHANGE_PRODUCT_AMOUNT: {
            const foundIndex: number = state.products.findIndex(pr => pr.id === action.id);
            let products: IProduct[] = state.products;
            products[foundIndex].amount = products[foundIndex].amount - action.amount;
            return { ...state, products: products };
        }
        default:
            return state;
    }
}


export default productsReducer;