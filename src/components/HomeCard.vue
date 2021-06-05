<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card
                            class="page_search"
                        >
                            <v-card-title class="page_search__title text-h2 text-center mb-5">Введите то что ищите</v-card-title>
                        <home-card-form />
                        <home-card-result :result-number="counter" />
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-main>
   
  
</template>
<script>
import HomeCardForm from "./HomeCardForm"
import HomeCardResult from "./HomeCardResult";
    export default{
        name: "HomeCard",
        data(){
            return{
                mainData:[],
                counter: 0
            }
        },
        components:{
            HomeCardForm,
            HomeCardResult
        },
        methods:{
            setRandom(){
                //Радомная генерация массива
                function mainRandom(count) {
                    do {
                        let result = ''
                        let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
                        let max_position = words.length - 1
                        for(let i = 0; i < 40; i++ ) {
                            let position = Math.floor ( Math.random() * max_position )
                            result = result + words.substring(position, position + 1)
                        }
                        this.mainData.push(result)
                        count++;
                    } while (count % 1e5 != 0);

                    if (count == 1e6) {
                        return ;
                    }else{
                        setTimeout(() => {
                            mainRandom.call(this, count)
                        });
                    }
                }

                mainRandom.call(this, 0)
                localStorage.setItem('random', JSON.stringify(this.mainData));
            },
            counterSearch(search){
                let filerData = this.mainData.filter(item => item.startsWith(search))
                this.counter = filerData.length
            }
        },
        created(){
            let randomData = localStorage.getItem('random')
            if(randomData){
                this.mainData = JSON.parse(randomData)
            }else{
                setTimeout(() => {
                    this.setRandom();
                }, 0)
            }
        },
        watch:{
            '$store.state.inputSearch': function (e) {
                this.counterSearch(e)
            }
        }
    }
</script>
<style lang="scss" scoped>
    body .page_search{
        box-shadow: none !important;
        &__title{
            display: block;
        }
    }
</style>
