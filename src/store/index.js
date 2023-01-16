import {
    createStore
} from "vuex";
import {
    users
} from './users';

export default createStore({
    state: {
        user: {
          data: {},
          token: null,
        },
        products: [{
                id: 1,
                name: "Chelsea Shoes",
                price: 200,
                shortdesc: "Best Drip in the Market",
                url: "images/chelsea-shoes.png"
            },
            {
                id: 2,
                name: "Kimono",
                price: 50,
                shortdesc: "Classy, Stylish, Dope",
                url: "images/kimono.png"
            }
        ],
        cart: []
    },
    mutations: {
        deleteProduct(state, item) {
            state.cart = state.cart.filter((cartItem) => {
                return cartItem.id != item.id;
            });
        }
    },
    actions: {
        deleteProduct({ commit }, data) {
            commit( 'deleteProduct', data );
        }
    },
    modules: {
        users
    }
});