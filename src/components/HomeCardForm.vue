<template>
    <v-form ref="form" class="page_search_form" @submit.prevent="searchData">
        <v-row>
            <v-col cols="12" md="10">
                <v-text-field
                    v-model="search"
                    label="Введите значние"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn
                    color="primary"
                    class="page_search_btn"
                    @click="searchData"
                >
                Поиск
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
    export default{
        name: "HomeCardForm",
        data(){
            return{
                search: this.$store.state.inputSearch || '',
            }
        },
        methods:{
            searchData(){
                //Поиск данных
                this.$store.dispatch('clickSearch', this.search)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .page_search{
        &_btn{
            width: 100%;
            height: 55px !important;
        }
    }
</style>
