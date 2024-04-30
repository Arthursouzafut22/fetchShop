
<script>
export default {};
</script>

<template>
  <transition name="toast" mode="out-in">
    <div class="modeAlert">
      <div class="toast">
        <img src="/src/assets/verificar (2).png" alt="concluido" />
        <div>
          <span>Sucesso</span>
          <p>item adicionado ao carrinho</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modeAlert {
  max-width: 550px;
  position: fixed;
  top: 150px;
  right: 75px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  border-radius: 6px;
  padding: 18px 12px;
  width: 100%;
  box-shadow: 9px 5px 17px -2px rgba(150, 150, 150, 0.24);
  border-left: 4px solid #00ba00;
}

.toast img {
  max-width: 35px;
  width: 100%;
}

.toast span {
  font-size: 20px;
  font-weight: bold;
}

.toast p {
  font-size: 17px;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}

.toast-enter-from {
  transform: translateX(60%);
}

.toast-leave-to {
  transform: translateX(60%);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s;
}

@media (max-width: 767px) {
  .modeAlert {
    right: 25px;
  }
  .toast {
    padding: 12px;
  }
  .toast img {
    max-width: 28px;
  }
}
</style>