<script setup>
import { computed } from 'vue';

const props = defineProps({
    productInfo:{
        type: Object,
        required: true
    }
})

    
        const totalProduct = computed(() => props.productInfo.length)
        console.log(totalProduct)

        const totalProductByType = (type) => {
            return props.productInfo.filter((product) => product.type === type).length
        }



</script>
<template>
    <div class="ListProductContainer">
        <nav class="NavLisProductContainer">Vêtements > Element ciblé</nav>
        <div class="listProduct">
            <p>TOUT . {{ totalProduct }}</p>
            <p>ROBES . {{ totalProductByType('robe') }}</p>
            <p>TOPS . {{ totalProductByType('top') }}</p>
            <p>BOTTOM . {{ totalProductByType('pantalon') }}</p>
            <p>MANTEAUX /VESTES . {{ totalProductByType('veste') }}</p>
            <p>PETITES LAINES . {{ totalProductByType('laine') }}</p>
        </div>
        
    </div>

</template>

<style scoped>

.ListProductContainer{
    width: 408px;
    display: flex;
    flex-direction: column;   
    align-items: flex-start; 
    margin-top: 20px;
    margin-left: 20px;
    font-weight: lighter;
    /* border: 1px solid var(--main-orange); */


}

.NavLisProductContainer{
    height: 80px;
    width: 100%;
    display: flex;
    /* border-right: 1px solid var(--main-orange); */
    padding: 16px;
    align-items: center;

}

.listProduct {
    height: fit-content;
    width: calc(100vh - 700px);
    /* border: 1px solid red; */
    width: 100%;
    height: 180px;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    ;
}  

</style>

