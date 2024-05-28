<template>
        <div class="header max-w-screen-2xl flex flex-col flex-wrap items-center justify-center mx-auto px-4 py-8   ">

            <h1  class="text-center sloganText flex flex-row gap-4">Boostez votre <span>Café, Bar ou Restaurant</span>  </h1>
            <h6 class="mt-6 w-3/5 SubSloganText text-center">Attirez de nouveaux clients, fidélisez les anciens et augmentez vos ventes avec un site Web performant et conçu pour votre activité.</h6>


            <button class="button--narvi button button-2 flex w-fit gap-2 justify-center items-center mt-10 px-10 py-4 rounded-xl">
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


            <div class=".video rounded-lg video-korner">
                <video id="video" loop playsinline autoplay muted class="bg-image mt-16 custom-video" allowfullscreen>
                    <source src="public/korner_video.mp4" type="video/mp4">  
                </video>              
            </div>






        </div>


</template>



<script setup>

onMounted(() => {

    let sloganText = document.querySelector(".sloganText")

    let SubSloganText = document.querySelector(".SubSloganText")


    let button = document.querySelector(".button")


    setTimeout(() => {

    useGsap.to(sloganText, {
            

                opacity: 1,
                rotationZ: '0',
                duration: 0.2,
                delay: 0,
                ease: "power4.easeInOut"

            });

        }, 100); // 1000 milliseconds = 1 second



    useGsap.to(SubSloganText, {
            

                opacity: 1,
                y: '-10px',
                duration: 0.3,
                delay: 1.8,
                ease: "power4.easeInOut"

            });



    useGsap.to(button, {
            

            opacity: 1,
            y: '-10px',
            duration: 0.2,
            delay: 1.8,
            ease: "power4.easeInOut"

        });






    let splitWords =  function (selector) {
        var h1Element = document.querySelector(selector);
        var textContent = h1Element.textContent;
        var words = textContent.split(' ');
                var firstWord = `<span class="testbabe" style="font-family: Inter-Bold;font-size:4rem;"' >${words[0]}</span>`;
                var secondword = `<span class="testbabe" style="font-family: Inter-Bold;font-size:4rem;">${words[1]}</span>`;

                var remainingWords = words.slice(2)
                var wrappedRemainingWords=[];
                remainingWords.forEach((item,index)=>{
                    wrappedRemainingWords[index] = `<div class="testbabe slogan-bigg" style="transform: translateY(20px);opacity: 0;font-family: MrDeHaviland" >${item}</div> `;
                })
                var remaintext=wrappedRemainingWords.join('   ');
                var newContent = firstWord + '    ' + secondword + '    ' + remaintext;
                h1Element.innerHTML = newContent;
    };


    splitWords(".sloganText")

   



    

    let revealText = document.querySelectorAll(".testbabe")



    setTimeout(() => {
    revealText.forEach((item,index) => {

        useGsap.to(item, {
            
                    y: '-10px',
                    opacity: 1,
                    rotationZ: '0',
                    duration: 0.1,
                    delay: index*0.3,
                    ease: "power4.easeInOut"




                });


        });

    }, 200); // 1000 milliseconds = 1 second
    






useGsap.to(".video-korner", {
  rotation: 0,
  duration :0.6,
  scale:1.3,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".video-korner",
    start:"top start",
    end:"bottom center",
    pin:false,
    // pinSpacing:true,
    markers:false,

    toggleActions:"play pause reverse reverse"

  }
    
});




});

</script>

<style lang="scss" scoped>
@use "~/assets/styling.scss";

.testbabe{
    transform: translateY(20px);
    opacity: 0;
}

.sloganText{
    opacity: 0;
}

.SubSloganText{
    opacity: 0;
    transform: translateY(10px);

}

.slogan-small{
        font-family: $MrDeHaviland;
    }

.slogan-bigg{
    font-family: $Inter_B;
    font-size:4rem;
    color:$text-color-primary;
  

}

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

.button{
    opacity: 0;
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

// .button-2:hover {
//     box-shadow: 30rem 0 0 0 #A9D9C1 inset;
// }

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


