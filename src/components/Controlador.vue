
<script>

export default {}
</script>

<template>
    <div class="controlador">
        <button><img src="/src/assets/menos.png" alt="menos"></button>
        <input type="number" value="0" name="number" id="number">
        <button><img src="/src/assets/mais.png" alt="menos"></button>
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
    border: none;
    outline: none;
    background: #e8e8e8;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>

