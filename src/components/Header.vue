<template>
    <div class="headerContainer">
        <nav>
            <router-link to="/vetements">VÊTEMENTS</router-link>
            <!-- <a href=#>HOMME</a> -->
        </nav>
        <router-link to="/">
          <img src ="../assets/img/logo.png" alt="logo Anashi"/>
        </router-link>
        <!-- <nav>
            <a href=#>LOGIN</a>
            <a href=#>PANIER</a>
        </nav> -->
    </div>
</template>

<style scoped>

.headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 40px 55px;
    background-color: #f8f8f8;
    color: var(--main-orange);
    background-color: var(--main-yellow);
}

.headerContainer a {
    color: var(--main-orange);
}

nav{
    /* border: 1px solid red; */
    width: 167px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 10%;
}


</style>