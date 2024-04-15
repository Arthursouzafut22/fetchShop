
<script>
export default {
  data() {
    return {
      quantidade: 0,
    };
  },
  watch: {
    quantidade(nv) {
      this.$emit("onChange", nv);
    },
  },
};
</script>

<template>
  <div class="controlador">
    <button v-if="quantidade > 0" @click="quantidade--">
      <img src="/src/assets/menos.png" alt="menos" />
    </button>
    <button v-else disabled>
      <img src="/src/assets/menos.png" alt="menos" />
    </button>
    <input type="number" :value="quantidade" name="number" id="number" />
    <button @click="quantidade++">
      <img src="/src/assets/mais.png" alt="menos" />
    </button>
  </div>
</template>

<style scoped>
.controlador {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 150px;
  width: 100%;
  margin-top: 40px;
  padding: 10px 5px;
  background: #e8e8e8;
  border-radius: 5px;
}

button {
  display: block;
  background: transparent;
  padding: 5px;
  cursor: pointer;
  border: none;
}

button img {
  max-width: 18px;
}

input {
  font-size: 22px;
  text-align: center;
  display: block;
  width: 30%;
  margin: 0 auto;
  border: none;
  outline: none;
  background: #e8e8e8;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

