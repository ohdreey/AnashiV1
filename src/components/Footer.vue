<template>
    <div class="footerContenair">
        <div class="logoFooter">
            <img src="../assets/img/ANASHI.png" alt="logo anashi" />
        </div>

        <div class="colonneNav">
            <nav class="aideNav">
                <h4>Aide & Contact</h4>
                    <a href="#">CVG</a>
                    <a href="#">Politique et confidentialité</a>
                    <a href="#">Mention légales</a>
                    <a href="#">Contact</a>
            </nav>
            <nav class="aProposNav">
                <h4>À Propos</h4>
                    <a href="#">Yosra</a>
                    <a href="#">Instagram</a>
                    <a href="#">Tik Tok</a>
            </nav>
        </div>
        

    </div>
</template>

<style scopted>
    .footerContenair{
        height: var(--footer-height);
        background-color: var(--main-orange);
        box-sizing: border-box;
        /* border: 1px solid rgb(30, 255, 0); */
        padding: 20px 20px;
        text-align: start;

    }

    .logoFooter{
        height: 40px;
        width: 150;
    }

    .colonneNav{
        /* border: 1px solid red; */
        display: flex;
        margin-top: 40px;
        line-height: 40px;
        color: var(--main-yellow);
        text-decoration: none;
        gap:90px;
    }

    h4{
        font-weight: bold;
    }
    .aProposNav{
        /* border: 1px solid rgb(0, 191, 255); */
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        width: 200px;
        height: 100px;   
    }
    .aideNav{
        /* border: 1px solid rgb(0, 191, 255); */
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        width: 200px;
        height: 100px;   
    }

</style>