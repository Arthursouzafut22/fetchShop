
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    
  },

  methods: {
    toggMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <header>
    <div>
      <router-link to="/">
        <img src="/src/assets/logo.png" alt="logo" class="img-logo" />
      </router-link>
    </div>

    <transition mode="out-in" name="mobile">
      <nav v-if="!showMenu" class="menu">
        <router-link to="/relogios">Rélogios</router-link>
        <router-link to="/tenis">Ténis</router-link>
        <router-link to="/roupas">Roupas</router-link>
        <router-link to="/cart">
          <img src="/src/assets/carrinho.png" alt="carrinho" class="img-cart" />
          <span class="value">0</span>
        </router-link>
        <router-link to="/login" class="login">Conecte-se</router-link>
      </nav>
    </transition>

    <button class="btn-mobile" @click="toggMenu">Menu</button>
  </header>
</template>

<style scoped>
header {
  max-width: 1450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8px;
  position: relative;
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
  position: relative;
}

.cc-nav {
  display: flex;
  align-items: center;
  gap: 15px;
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
  display: block;
  text-align: center;
  color: white;
  background: black;
  width: 100%;
  padding: 10px 22px;
  border-radius: 5px;
  transition: 0.5s;
}

.login:active {
  background: #808080;
}
.login:hover {
  transform: scale(1.1);
}

.value {
  position: absolute;
  display: block;
  background-color: red;
  color: white;
  text-align: center;
  margin: 0 auto;
  width: 22px;
  height: 22px;
  top: -5px;
  right: -10px;
  border-radius: 50%;
}

.btn-mobile {
  display: none;
}

@media (max-width: 1000px) {
  .btn-mobile {
    display: block;
    border: 1px solid;
    background: transparent;
    z-index: 3000;
    padding: 2px;
  }
  .menu {
    flex-direction: column;
    position: absolute;
    top: 0px;
    right: 0;
    width: 50%;
    padding: 100px 10px 10px 10px;
    z-index: 200;
    background: white;
    box-shadow: -12px 11px 14px -9px rgba(150, 150, 150, 0.24);
  }

  .menu a {
    font-size: 16px;
  }

  .mobile-enter-from,
  .mobile-leave-to {
    opacity: 0;
  }

  .mobile-enter-from {
    transform: translateX(80%);
  }

  .mobile-leave-to {
    transform: translateX(80%);
  }

  .mobile-enter-active,
  .mobile-leave-active {
    transition: all 0.5s;
  }
}
</style>