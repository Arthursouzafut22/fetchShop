
<script>
export default {
  data() {
    return {
      navegacao: [
        "Loja",
        "Sobre",
        "Termos de uso",
        "Política de Privacidade",
        "Perguntas frequentes",
        "Trocas e Devoluções",
      ],

      imagens: [
        "/src/assets/visa.svg",
        "/src/assets/pix.svg",
        "/src/assets/elo.svg",
        "/src/assets/master.svg",
        "/src/assets/vere2.svg",
        "/src/assets/pix.svg",
      ],

      redeSociais: [
        "/src/assets/facebook.svg",
        "/src/assets/tiktok.svg",
        "/src/assets/twiter.svg",
      ],
    };
  },
};
</script>

<template>
  <footer id="footer">
    <ul class="nav">
      <h1>Navegação</h1>
      <li v-for="nav in navegacao" :key="nav">
        {{ nav }}
      </li>
    </ul>

    <div class="certificacoes">
      <h1>Selos e certificações</h1>
      <div class="selos">
        <img src="/src/assets/yampi.svg" alt="bandeira" />
        <img src="/src/assets/verifi.svg" alt="bandeira" />
      </div>
    </div>

    <div class="pagamentos">
      <h1>Formas de Pagamento</h1>
      <div class="pag-1">
        <img :src="img" alt="" v-for="img in imagens" :key="img" />
      </div>
    </div>

    <div class="sociais">
      <h1>Redes Sociais</h1>
      <div class="redes">
        <img
          :src="sociais"
          alt="redesociais"
          v-for="sociais in redeSociais"
          :key="sociais"
        />
      </div>
    </div>

    <div class="info">
      <h1>Eletrônicos de qualidade</h1>
      <p>fetchshop@gmail.com</p>
      <p>Conte com os melhores benefícios.</p>
    </div>

    <!-- <div class="info2">
        <p>© 2024 Eletrônicos de qualidade | 46399451000144</p>
    </div> -->
  </footer>
</template>

<style scoped>
h1 {
  font-size: clamp(17px, 4vw, 20px);
  margin-bottom: 15px;
  color: white;
}

p {
  font-size: clamp(15px, 4vw, 17px);
  color: white;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: 30px;
  position: relative;
  top: 75px;
  background-color: #000000;
  margin-top: 20px;
  padding: 35px 15px;
  box-shadow: -3px 198px 0px 200px #000000;
}

.nav {
  flex: 1;
}

.nav li {
  color: white;
  margin-bottom: 12px;
  cursor: pointer;
  transition: 0.5s;
}

.nav li:hover {
  transform: scale(1.1);
  color: darkgray;
}

.certificacoes {
  flex: 1;
}

.selos {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
}

.selos img {
  max-width: 40px;
}

.selos :nth-child(2) {
  max-width: 30px;
}

.pagamentos {
  flex: 1;
}

.pag-1 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.pag-1 img {
  max-width: 40px;
}

.sociais {
  flex: 1;
}

.redes {
  display: flex;
  align-items: center;
  gap: 7px;
}

.redes img {
  max-width: 40px;
}

.info {
  flex: 1;
}

.info p {
  margin-bottom: 8px;
}
</style>