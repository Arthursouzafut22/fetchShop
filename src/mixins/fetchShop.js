export default {
  data() {
    return {
      api: null,
      loading: true,
    };
  },
  methods: {
    async fetchShop(url) {
      (this.loading = true),
        (this.api = null),
        await fetch(`http://localhost:3000${url}`)
          .then((r) => r.json())
          .then((r) => {
            this.api = r;
            this.loading = false;
          });
    },
  },
};
