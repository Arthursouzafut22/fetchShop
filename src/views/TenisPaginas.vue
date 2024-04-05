
<script>
import fetchShop from '@/mixins/fetchShop.js'
export default {
    props: ['id'],
    mixins: [fetchShop],

    created() {
        this.fetchShop(`/tenis/${this.id}`)
    }
}
</script>

<template>

    <div :key="api.id">
        <p>{{ api.nome }}</p>
        <p>{{ api.marca }}</p>
        <img :src="api.foto" alt="">
    </div>
    
</template>

<style scoped>

</style>

