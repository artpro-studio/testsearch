<template>
    <v-card-text class="text-center text-h6">Найдено:{{resultNumber}}</v-card-text>
</template>

<script>
    export default {
        name: "HomeCardResult",
        props: {
            resultNumber: {
                type: Number,
                default: 0,
            }
        }
    }
</script>

<style scoped>

</style>