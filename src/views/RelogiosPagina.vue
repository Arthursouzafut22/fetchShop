
<script>
import fetchShop from "@/mixins/fetchShop.js";
import Avaliable from "../components/Avaliable.vue";
import Controlador from "../components/Controlador.vue";
import Loading from "../components/Loading.vue";
import AlertModal from "../components/AlertModal.vue";

export default {
  data() {
    return {
      currentImage: null,
      quantidade: 0,
      ativo: false,
    };
  },
  methods: {
    setCurrentQtd(quantidade) {
      this.quantidade = quantidade;
    },
    buyProduct() {
      if (this.quantidade && this.quantidade > 0) {
        this.ativo = !this.ativo;
        const obj = { qtd: this.quantidade, product: this.api };
        this.$store.dispatch("insertProduct", obj);
      }
      setTimeout(() => {
        this.ativo = false;
      }, 3000);
    },
  },
  components: {
    Avaliable,
    Controlador,
    Loading,
    AlertModal,
  },
  mixins: [fetchShop],
  props: ["id"],

  created() {
    this.fetchShop(`/relogios/${this.id}`);
  },
};
</script>

<template>
  <section>
    <div class="container-pagina">
      <div class="cc-fotos">
        <div class="container-fotos">
          <div class="cont-img">
            <img
              :src="currentImage ? currentImage : api?.foto[0]"
              alt="foto"
              class="img-principal"
            />
          </div>

          <div class="galery">
            <img
              v-for="(galery, index) in api?.foto"
              :key="galery.foto"
              @click="currentImage = api.foto[index]"
              :src="galery"
              :alt="galery.nome"
              class="img-galery"
            />
          </div>
        </div>
      </div>
      <div class="container-info">
        <p class="marca">{{ api?.marca }}</p>
        <h1>{{ api?.nome }}</h1>
        <Avaliable />
        <span>{{ "R$" + api?.preco + ",00" }}</span>
        <p class="descricao">{{ api?.descricao }}</p>
        <div class="controls">
          <Controlador @onChange="setCurrentQtd" />
          <button @click="buyProduct">Comprar</button>
        </div>
        <AlertModal v-show="ativo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 100%;
  margin: 0 auto;
  padding: 25px;
  overflow-x: hidden;
}

.container-pagina {
  display: flex;
  flex-wrap: wrap;
  gap: 85px;
}
.cont-img {
  background-color: #e8e8e8;
  padding: 10px;
}

.img-principal {
  display: block;
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
}

.cc-fotos {
  max-width: 100%;
  margin: 0 auto;
}
.galery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  max-width: 100%;
  margin: 25px auto 0px auto;
}

.img-galery {
  display: block;
  max-width: 110px;
  width: 100%;
  padding: 15px;
  background-color: #e8e8e8;
  cursor: pointer;
  overflow: auto;
}

.slid-enter-from,
.slid-leave-to {
  opacity: 0;
}

.slid-enter-from {
  transform: translateX(-20%);
}

.slid-enter-active,
.slid-leave-active {
  transition: all 0.5s;
}

.marca {
  font-size: clamp(15px, 4vw, 25px);
}
.container-info {
  flex: 1;
}
.container-info h1 {
  font-size: clamp(18px, 4vw, 50px);
  font-weight: bold;
  margin: 10px 0px;
}

.container-info span {
  font-size: clamp(25px, 4vw, 30px);
  display: block;
  margin: 25px auto;
}
.descricao {
  font-size: 17px;
  line-height: 1.5;
}

.controls {
  display: flex;
  align-items: end;
  gap: 25px;
  max-width: 400px;
}

.controls button {
  font-size: 18px;
  display: inline-blockk;
  width: 100%;
  border: none;
  margin-top: 17px;
  padding: 14px 10px;
  color: white;
  background-color: black;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;
}

.controls button:hover {
  transform: scale(1.1);
}
</style>