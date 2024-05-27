<template>
        <div class="header max-w-screen-2xl flex flex-col flex-wrap items-center justify-center mx-auto px-4 py-8   ">

            <h1>Boostez votre <span>Café, Bar ou Restaurant</span>  </h1>
            <h6 class="mt-6 w-3/5 text-center">Attirez de nouveaux clients, fidélisez les anciens et augmentez vos ventes avec un site Web performant et conçu pour votre activité.</h6>


            <button class="button--narvi button-2 flex w-fit gap-2 justify-center items-center mt-10 px-10 py-4 rounded-xl">
                <span><span class="mr-4">Réserver un appel maintenant</span></span>
                <div class="svg-container">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="#FFEDE3" d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3zm3.95 10q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"/>
                    </svg>
                    <svg class="icon2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="#FFEDE3" d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3zm3.95 10q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"/>
                    </svg>
                </div>
            </button>


            <div class="rounded-lg video-korner">
                <video id="video" loop playsinline autoplay muted class="bg-image mt-16 custom-video" allowfullscreen>
                    <source src="public/korner_video.mp4" type="video/mp4">  
                </video>              
            </div>






        </div>


</template>



<script setup>

onMounted(() => {


useGsap.to(".video-korner", {
  rotation: 0,
  duration :0.6,
  scale:1.5,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".video-korner",
    start:"top start",
    end:"bottom center",
    markers:false,

    toggleActions:"play pause reverse reverse"

  }
    
});




});

</script>

<style lang="scss" scoped>
@use "~/assets/styling.scss";


.custom-video {
        height: 42rem; 
        border-radius: 15px; 
        overflow: hidden;
        width: 100%; 
        object-fit: cover; 
}


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



.button--narvi {
    background-color: #FFEDE3;
    font-family: $Inter_M;
    color: $text-color-secondary;
    overflow: hidden;
}

.button-2 {
    border: none;
    cursor: pointer;
    transition: all 0.6s ease-in, color 0.3s 0.3s;
}

.button-2:hover {
    box-shadow: 30rem 0 0 0 #A9D9C1 inset;
}

.svg-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 70px;
    background: $primary;
    height: 35px;
    border-radius: 8px;
    overflow: hidden;
}

.icon {
    position: relative;
    width:22px;
    top: 0;
    right: 0;
    margin: 0 auto;
    transition: transform 0.4s ease-in;
}

.icon2{
    position: absolute;
    width:22px;
    top: 0;
    right: 1px;
    margin-left:  auto;
    visibility: hidden;
    transition: transform 0.4s ease-in;
    transition-delay: 0s;

    


}

.button-2:hover .icon {
    transform: translateX(-3rem);
}

.button-2:hover .icon2 {
    visibility: visible;

    transform: translateX(-1.5rem);
}
// .button-2:hover .svg-container {
//     background-color: black;
// }




</style>


