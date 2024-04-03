<script>
import fetchShop from "@/mixins/fetchShop.js";
import Love from "../components/Love.vue";
import Loading from "../components/Loading.vue";

export default {
  components: {
    Love,
    Loading,
  },
  mixins: [fetchShop],
  created() {
    this.fetchShop("/relogios");
  },
  
};
</script>

<template>
  <section>
    <div v-if="api.length" class="produtos">
      <div v-for="relogio in api" :key="relogio" class="produto-relogio">
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
      </div>
    </div>
    <loading v-else />
  </section>
</template>

<style scoped>
section {
  max-width: 1450px;
  margin: 35px auto;
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
}
.btn-preco {
  display: block;
  border: 1px solid;
  color: black;
  border-radius: 8px;
  padding: 8px;
}
</style>
