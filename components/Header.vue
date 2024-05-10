<template>
        <div class="header max-w-screen-2xl flex flex-col flex-wrap items-center justify-center mx-auto px-4 py-8   ">

            <h1>Boostez votre <span>Café, Bar ou Restaurant</span>  </h1>
            <h6 class="mt-6 w-3/5 text-center">Attirez de nouveaux clients, fidélisez les anciens et augmentez vos ventes avec un site Web performant et conçu pour votre activité.</h6>

            <button class="flex gap-4 justify-center items-center mt-10 px-10 py-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#012714" d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3zm3.95 10q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"/></svg>
                Réserver un appel maintenant</button>
        </div>


</template>


<style lang="scss" scoped>
@use "~/assets/styling.scss";

h1{
    font-family: $Inter_B;
    font-size:4rem;
    color:$text-color-primary;
    span{
        font-family: $MrDeHaviland;
    }
}

h6{
    color:$text-color-primary;
    font-family: $Inter_L;
    font-size:1.2rem
}

button{
    background-color: $text-color-primary;
    font-family: $Inter_M;
    color:  $text-color-secondary;


}

</style>


<script setup>

</script>