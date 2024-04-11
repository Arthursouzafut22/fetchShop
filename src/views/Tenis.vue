<script>
import fetchShop from '@/mixins/fetchShop.js'
import Love from '../components/Love.vue';
import Loading from '../components/Loading.vue';
import BuscarProdutos from "@/components/BuscarProdutos.vue";

export default {
  data() {
    return {
      search: '',
      filtered_clocks: [],
    }
  },
  components: {
    Love,
    Loading,
    BuscarProdutos,
  },
  mixins: [fetchShop],

  watch: {
    search(nv) {
      this.filtered_clocks = this.api.filter((item) =>
        item.nome.toLowerCase().includes(nv.toLowerCase())
      );
    },
  },
  created() {
    this.fetchShop('/tenis')
  }
  
};
</script>

<template>
   <section>
    <div class="info"> 
      <BuscarProdutos v-model="search" />
      <h1>{{ api.length }} Produtos</h1>
   </div>

    <div v-if="api.length" class="produtos">
    <div v-for="tenis in search.length ? filtered_clocks : api" :key="tenis.id" class="produto-tenis">
      <router-link :to="{name: 'tenispaginas', params: {id: tenis.id}}">
      <div class="love">
        <Love />
      </div>
      <img :src="tenis.foto[0]" alt="relogio" class="img-tenis" />
      <div class="conteiner-info">
        <div class="conteiner-info2">
          <h1>{{ tenis.nome }}</h1>
          <p>{{ tenis.marca }}</p>
        </div>
        <router-link to="/" class="btn-preco">
          {{ "R$" + tenis.preco }}
        </router-link>
      </div>
    </router-link>
    </div>
  </div>
  <Loading v-else/>
  </section>
</template>

<style scoped>
section {
  max-width: 1400px;
  margin: 10px auto;
}

.info h1 {
  margin: 0px 12px 10px 0px;
  padding: 0;
  text-align: right;
  color:darkgrey;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, auto));
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.produto-tenis {
  background: #e8e8e8;
  padding: 15px;
  transition: .50s;
  cursor: pointer;
}
.love {
  display: flex;
  justify-content: end;
}
.img-tenis{
  max-width: 220px;
  margin: 0 auto;
}
.conteiner-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
.conteiner-info2 {
  margin-top: 20px;
}
.conteiner-info2 h1 {
  font-size: clamp(14px, 4vw, 1.2rem);

  font-weight: bold;
  color: black;
}
.conteiner-info2 p {
  font-size: clamp(12px, 4vw, 1rem);
  color: black;
}
.btn-preco {
  display: block;
  border: 1px solid;
  color: black;
  border-radius: 8px;
  padding: 8px;
}

@media  (max-width: 480px) {
  .btn-preco {
    padding: 5px;
  }
}

@media  (max-width: 767px) {
  section {
    padding: 20px;
  }
  .produtos {
    grid-template-columns: 1fr 1fr;
  }

  .img-tenis {
    max-width: 120px;
  }
  .conteiner-info2 p {
    display: none;
  }
}

</style>

