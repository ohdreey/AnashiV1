<script setup>
import {ref} from 'vue'
const props = defineProps({
    productInfo:{
        type:Array,
        required:true
    }
})
</script>
<template>
    <div class="cardProduct">
        <div class="cardProductContainer" v-for="product in productInfo"
        :key="product.id" >
            <img :src="product.img" :alt="product.name" />
            <div class="labelCardProduct"   >
                <p>{{ product.name }}</p>
                <p>{{ product.price }} €</p>
            </div>

        </div>


    </div>
</template>
<style scoped>
.cardProduct{
    width: calc(100vw - 408px);
    position: relative;
    bottom: 50px;
    /* border: 1px solid rgb(255, 0, 0); */
    right: 0;
    top: 50px;
    display: grid;
    margin-bottom: 50px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 30px;



}
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 3 / 1 / 4 / 2; }
.div6 { grid-area: 2 / 2 / 3 / 3; }
.div7 { grid-area: 3 / 2 / 4 / 3; }
.div8 { grid-area: 2 / 3 / 3 / 4; }
.div9 { grid-area: 3 / 3 / 4 / 4; }
.div10 { grid-area: 4 / 1 / 5 / 2; }
.div11 { grid-area: 4 / 2 / 5 / 3; }
.div12 { grid-area: 4 / 3 / 5 / 4; }

.cardProduct .cardProductContainer{
    width: 290px;
    height: 440px;
    /* border: 1px solid red; */
    position: relative;
    border-radius: 3px;
    box-sizing: border-box;
    overflow:  hidden;
    border: 1px solid var(--main-orange);
    cursor: pointer;


}

.cardProduct .labelCardProduct{
    /* border: 1px solid rgb(0, 255, 213); */
    height: 26px;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-color:var(--main-orange);
    color: var(--main-yellow);
    font-weight: bold;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 5px;




}
</style>