
<script>
import fetchShop from "@/mixins/fetchShop.js";
export default {
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
            <img :src="api.foto" alt="foto" class="img-principal" />
          </div>
          <div class="galery">
            <img :src="api.foto" alt="" />
            <img :src="api.foto" alt="" />
            <img :src="api.foto" alt="" />
            <img :src="api.foto" alt="" />
          </div>
        </div>
      </div>
      <div class="container-info">
        <p class="marca">{{ api.marca }}</p>
        <h1>{{ api.nome }}</h1>
        <span>{{ "R$" + api.preco + ",00" }}</span>
        <p class="descricao">{{ api.descricao }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 100%;
  border: 2px solid;
  margin: 20px auto;
  padding: 25px;
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
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
}

.cc-fotos {
  max-width: 100%;
}

.container-fotos {
  /* max-width: 100%; */
 
}
.galery {
  display: flex;
  align-items: center;
  gap: 25px;
  /* width: 400px; */
  /* max-width: 400px; */
  width: 100%;
  margin-top: 25px;
}

.galery img {
  display: block;
  max-width: 120px;
  padding: 15px;
  background-color: #e8e8e8;
}

.marca {
  font-size: 25px;
}
.container-info {
  border: 2px solid;
  flex: 1;
}
.container-info h1 {
  font-size: 50px;
  font-weight: bold;
  margin: 10px 0px;
}

.container-info span {
  font-size: 30px;
  display: block;
  margin: 25px auto;
}
.descricao {
  font-size: 17px;
  line-height: 1.5;
}
</style>