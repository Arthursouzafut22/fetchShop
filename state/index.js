import { createStore } from "vuex";


const store = createStore({
  state() {
    return {
      carrinho: [],
    };
  },
  actions: {
    insertProduct({ commit }, payload) {
      commit("INSERT_PRODUCT", payload);
    },
  },
  mutations: {
    INSERT_PRODUCT(state, item) {
      for (let i = 0; i < item.qtd; i++) {
        const new_product = { id_unique: Date.now(), ...item.product };
        state.carrinho.push(new_product);
      }
    },
  },
  getters: {
    $carrinho(state) {
      return state.carrinho || [];
    },
    $total(state) {
      let total = 0;

      if (state.carrinho.length) {
        for (let obj of state.carrinho) {
          total += obj.preco;
        }
        // total = state.carrinho.reduce((sum, current) => sum + current.preco);
      }
      return total;
    },
  },
});

export default store;
