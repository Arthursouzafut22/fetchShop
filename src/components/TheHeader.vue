
<script>
export default {};
</script>

<template>
  <header>
    <div>
        <router-link to="/">
          <img src="/src/assets/logo.png" alt="logo" class="img-logo">
        </router-link>
    </div>
    <nav>
      <router-link to="/relogios">Rélogios</router-link>
      <router-link to="/tenis">Ténis</router-link>
      <router-link to="/roupas">Roupas</router-link>
      <router-link to="/carrinho">
        <img src="/src/assets/carrinho.png" alt="carrinho" class="img-cart" />
      </router-link>
      <router-link to="/login" class="login">Conecte-se</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  max-width: 1450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

nav a {
  font-size: 18px;
  color: #808080;
}

a:active {
    color: black;
}

.img-logo {
  width: 100px;
}

.img-cart {
  max-width: 35px;
}

.login {
  color: white;
  background: black;
  width: 100%;
  padding: 10px 22px;
  border-radius: 5px;
  transition: 0.50s;
}

.login:active {
    background: #808080;
}
.login:hover {
  transform: scale(1.1)
}
</style>