
<script>
import fetchShop from '@/mixins/fetchShop.js'
import Love from '../components/Love.vue';
import Loading from '../components/Loading.vue';

export default {
  components: {
    Love,
    Loading
  },
    mixins: [fetchShop],
    created() {
        this.fetchShop('/roupas')
    }
}


</script>

<template>
   <section>
  <div v-if="api.length" class="produtos">
    <div v-for="roupa in api" :key="roupa" class="produto-roupas">
      <div class="love">
        <Love />
      </div>
      <img :src="roupa.foto" alt="relogio" class="img-roupa" />
      <div class="conteiner-info">
        <div class="conteiner-info2">
          <h1>{{ roupa.nome }}</h1>
          <p>{{ roupa.marca }}</p>
        </div>
        <router-link to="/" class="btn-preco">
          {{ "R$" + roupa.preco }}
        </router-link>
      </div>
    </div>
  </div>
  <Loading v-else/>
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

.produto-roupas {
  background: #e8e8e8;
  padding: 15px;
  transition: .50s;
  cursor: pointer;
}
.produto-roupas:hover {
  transform: scale(1.1);
}
.love {
  display: flex;
  justify-content: end;
}
.img-roupa{
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