<script>
export default {
  data() {
    return {
      termoBusca: '',
      rotaSelecionada: ''
    
    };
  },
  methods: {
    buscarProdutos() {
    
        

    }
  }
};
</script>


<template>
  <form>
    <input
      type="text"
      id="buscar"
      placeholder="Buscar Produto"
      v-model="busca"
    />
    <input @click.prevent="buscarProdutos"
      type="submit"
      value="buscar"
      id="lupa" 
    />
  </form>
  {{ termoBusca }}
</template>


<style scoped>
form {
  max-width: 700px;
  gap: 5px;
  margin: 20px auto;
  position: relative;
  padding: 0px 15px;
}

#buscar {
  font-size: 18px;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: none;
  outline: transparent;
  background: #d6d6d6;
}

#lupa {
  width: 62px;
  height: 50px;
  border: none;
  background: url("/src/assets/search.svg") no-repeat center center;
  text-indent: -150px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 8px;
}
</style>