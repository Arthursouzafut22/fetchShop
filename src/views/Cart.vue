
<script>
import fetchShop from "@/mixins/fetchShop.js";
import Controlador from "../components/Controlador.vue";

export default {
  data() {
    return {};
  },
  components: {
    Controlador,
  },
  mixins: [fetchShop],
};
</script>

<template>
  <section>
    <h1>Seu Carrinho</h1>
    <div class="container-cart">
      <div class="container-product">
        <div
          v-for="produto in $store.getters.$carrinho"
          :key="produto.id_unique"
          class="product"
        >
          <div class="cc-info">
            <img :src="produto.foto[0]" alt="" />
            <div>
              <p class="nome">{{ produto.nome }}</p>
              <span class="marca">Marca</span>
            </div>
          </div>
          <p class="preco">R$ {{ produto.preco }}</p>
          <Controlador class="control" />
          <p class="total">Total</p>
          <button class="close">X</button>
        </div>

      </div>

      <div class="container-detalhes-compras">
        <span>Resumo Do Pedido</span>
        <div class="cc-sub cc">
          <p>SubTotal:</p>
          <p>R$300,00</p>
        </div>
        <div class="cc-frete cc">
          <p>Frete</p>
          <p>Gratis</p>
        </div>
        <div class="cc-total cc">
          <p>Total:</p>
          <p>{{  $store.getters.$total || 0}}</p>
        </div>
        <button class="btn-check">Finalizar</button>
      </div>
    </div>
  </section>
</template>



<style scoped>
section {
  max-width: 1400px;
  margin: 0 auto;
  /* border: 2px solid; */
}

h1 {
  text-align: center;
  font-size: 30px;
}

.container-cart {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.container-product {
  /* overflow-y: scroll; */
}

.product {
  /* border: 2px solid greenyellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 7px 12px -4px rgba(150, 150, 150, 0.24);
}

.cc-info {
  display: flex;
  align-items: center;
  gap: 15px;
}
.cc-info img {
  max-width: 100px;
  background: #e8e8e8;
}

.nome {
  font-size: 20px;
  font-weight: bold;
}
.marca {
  font-size: 17px;
}
.preco {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.total {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.close {
  font-size: 18px;
  font-weight: bold;
  display: block;
  border: none;
  background: #d6d6d6;
  padding: 5px 12px;
  cursor: pointer;
}
.control {
  max-width: 100px;
  padding: 3px;
  margin: 0;
}

.container-detalhes-compras {
  max-width: 100%;
  padding: 15px;
  background: #e8e8e8;
  margin-bottom: 80px;
}

.container-detalhes-compras span {
  font-size: 25px;
}

.cc-sub {
  margin-top: 30px !important;
}
.cc-total :first-child {
  font-size: 30px !important;
  font-weight: bold;
}

.cc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.cc :first-child {
  font-size: 20px;
}

.cc :last-child {
  font-size: 20px;
  font-weight: bold;
}

.btn-check {
  font-size: 18px;
  border: none;
  color: white;
  background-color: black;
  padding: 10px 0px;
  width: 100%;
  display: block;
  margin: 20px auto;
  cursor: pointer;
  border-radius: 5px;
}
</style>