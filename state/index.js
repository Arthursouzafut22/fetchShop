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
      const produtoExistente = state.carrinho.find(
        (produto) => produto.id === item.product.id
      );

      if (produtoExistente) {
        produtoExistente.qtd += item.qtd;
      } else {
        const new_product = { ...item.product, qtd: item.qtd };
        state.carrinho.push(new_product);
      }
    },
  },
  getters: {
    $carrinho(state) {
      return state.carrinho || [];
    },
    $total(state) {
      return state.carrinho.reduce((total, produto) => {
        return total + produto.preco * produto.qtd;
      }, 0);
    },
  },
});

export default store;
