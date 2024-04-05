<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    test(evt) {
      this.$emit("update:modelValue", evt.target.value);
    },
  },
};
</script>


<template>
  <form>
    <input
      type="text"
      id="buscar"
      placeholder="Buscar Produto"
      :value="modelValue"
      @input="test($event)"
    />
  </form>
</template>


<style scoped>
form {
  max-width: 700px;
  margin: 0px auto 1.8rem auto;
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
  border-radius: 8px;
}
</style>