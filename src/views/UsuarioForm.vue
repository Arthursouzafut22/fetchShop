
<script>
export default {
  data() {
    return {
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    };
  },

  methods: {
    async keyForm() {
      await fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then((response) => response.json())
        .then((response) => {
          const { logradouro, localidade, uf, bairro } = response;
          this.rua = logradouro;
          this.bairro = bairro;
          this.cidade = localidade;
          this.estado = uf;
        });
    },
  },
};
</script>

<template>
  <h1>Dados Endereço</h1>

  <transition>
    <form>
      <label for="cep">Cep</label>
      <input type="text" id="cep" name="cep" v-model="cep" @keyup="keyForm" />
      <label for="rua">Rua</label>
      <input type="text" id="rua" name="rua" v-model="rua" />
      <label for="numero">Número</label>
      <input type="text" id="numero" name="rua" v-model="numero" />
      <label for="bairro">Bairro</label>
      <input type="text" name="bairro" id="bairro" v-model="bairro" />
      <label for="cidade">Cidade</label>
      <input type="text" name="cidade" id="cidade" v-model="cidade" />
      <label for="estado">Estado</label>
      <input type="text" name="estado" id="estado" v-model="estado" />
    </form>
  </transition>
</template>




<style scoped>
h1 {
  font-size: clamp(22px, 4vw, 34px);
  text-align: center;
  color: #808080;
  margin-bottom: 12px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 0px 18px;
}

label {
  font-size: 18px;
  color: #808080;
  margin-bottom: 5px;
  display: block;
}

input {
  font-size: 18px;
  border: none;
  outline: transparent;
  padding: 12px;
  margin-bottom: 5px;
  border-radius: 6px;
  box-shadow: 4px 7px 15px -6px rgba(150, 150, 150, 0.24);
  width: 100%;
}
</style>