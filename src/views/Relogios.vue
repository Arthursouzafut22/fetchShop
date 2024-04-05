<script>
import fetchShop from "@/mixins/fetchShop.js";
import Love from "../components/Love.vue";
import Loading from "../components/Loading.vue";
import BuscarProdutos from "@/components/BuscarProdutos.vue";

export default {
  components: {
    Love,
    Loading,
    BuscarProdutos,
  },
  inject: ["search"],
  mixins: [fetchShop],
  created() {
    this.fetchShop("/relogios");
  },
  data() {
    return {
      search: "",
      filtered_clocks: [],
    };
  },
  watch: {
    search(nv) {
      this.filtered_clocks = this.api.filter((item) =>
        item.nome.toLowerCase().includes(nv.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <section>
    <BuscarProdutos v-model="search"  />

    <div v-if="api.length" class="produtos">
      <div
        v-for="relogio in search.length ? filtered_clocks : api"
        :key="relogio.id"
        class="produto-relogio"
      >
        <router-link
          :to="{ name: 'relogiospaginas', params: { id: relogio.id } }"
        >
          <div class="love">
            <Love />
          </div>
          <img :src="relogio.foto" alt="relogio" class="img-relogio" />
          <div class="conteiner-info">
            <div class="conteiner-info2">
              <h1>{{ relogio.nome }}</h1>
              <p>{{ relogio.marca }}</p>
            </div>
            <router-link to="/" class="btn-preco">
              {{ "R$" + relogio.preco }}
            </router-link>
          </div>
        </router-link>
      </div>
    </div>
    <loading v-else />
  </section>
</template>

<style scoped>
section {
  max-width: 1450px;
  margin: 10px auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(342px, auto));
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.produto-relogio {
  background: #e8e8e8;
  padding: 15px;
  max-width: 100%;
  transition: 0.5s;
  cursor: pointer;
}

.produto-relogio:hover {
  transform: scale(1.1);
}
.love {
  display: flex;
  justify-content: end;
}
.img-relogio {
  max-width: 250px;
  margin: 0 auto;
}
.conteiner-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.conteiner-info2 {
  margin-top: 20px;
}
.conteiner-info2 h1 {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
}
.conteiner-info2 p {
  color: black;
}
.btn-preco {
  display: block;
  border: 1px solid;
  color: black;
  border-radius: 8px;
  padding: 8px;
}
</style>
