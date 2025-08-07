<template>
    <div>
        <div class="homeContenair">
            <div class="imgHome">
            <img class="homeImgHome" src="../assets//img/home.jpg" alt="femme et chaise"/>
        </div>
            <div class="homeText" ref="homeText">
                <div>
                    <p>VINTAGE</p>
                    <p>& SECOND HAND TREASURE</p>
                    <p>SELECTED WITH LOVE</p>
                    <p>BY YOSRA</p>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>

.homeContenair{
    height: calc(100vh - var(--header-height) - var(footer-height));
    border: 1px solid rgb(85, 255, 0);
    background-color: var(--main-yellow);

}
.imgHome{
    width: 100%;
    height: calc(100vh - 50px);
    border: 1px solid rgb(255, 0, 0);
}
.homeImgHome{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.homeText{
    color: var(--main-orange);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    height: calc(h);
    padding-left: 30px;
    font-size: 48px;
    margin: 0 auto;
    display: flex;
}
.homeText div {
    height: 270px; 
    /* border: 1px solid rgb(0, 157, 255); */
    box-sizing: border-box;
    padding: 55px;
    align-items: center;
    justify-content: center;
}

</style>

