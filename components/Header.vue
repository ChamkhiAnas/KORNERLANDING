<template>
        <div class="header max-w-screen-2xl flex flex-col flex-wrap items-center justify-center mx-auto px-4 py-8   ">

            <h1  class="text-center sloganText flex flex-row gap-4">Boostez votre <span>Café, Bar ou Restaurant</span>  </h1>
            <h6 class="mt-6 w-3/5 SubSloganText text-center">Attirez de nouveaux clients, fidélisez les anciens et augmentez vos ventes avec un site Web performant et conçu pour votre activité.</h6>



            <a class="bt more-bt button w-fit mt-10 py-4 px-14 " href="javascript:void(0)">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Réserver un appel maintenant</p>
            </a>


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


.bt {
  cursor: pointer;
  position: relative;
  color: $secondary;
  letter-spacing: 0.5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  text-decoration: none;
  text-align: center;
}

.more-bt {
  border-right: 2px solid $secondary;
  border-bottom: 2px solid $secondary;
  border-color: $secondary;
}

.more-bt p {
  font-size: 16px;
  font-family: $Inter_M ;
}

#wrapper.smooth section.smoothy.show {
  visibility: visible;
}

.more-bt:before {
  left: 0;
  bottom: 0;
  height: -webkit-calc(100% - 17px);
  height: calc(100% - 17px);
  width: 2px;
}

.more-bt:after,
.more-bt:before {
  content: " ";
  display: block;
  background: $secondary;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

.more-bt:after {
  top: 0;
  right: 0;
  width: -webkit-calc(100% - 17px);
  width: calc(100% - 17px);
  height: 2px;
}

.more-bt:after,
.more-bt:before {
  content: " ";
  display: block;
  background: $secondary;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

::selection {
  background: $secondary;
  color: #ffffff;
  text-shadow: none;
}

.more-bt:before {
  left: 0;
  bottom: 0;
  height: -webkit-calc(100% - 17px);
  height: calc(100% - 17px);
  width: 2px;
}

.more-bt:after,
.more-bt:before {
  content: " ";
  display: block;
  background: $secondary;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

.more-bt .fl,
.more-bt .sfl {
  position: absolute;
  right: 0;
  height: 100%;
  width: 0;
  z-index: 2;
  background: $secondary;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.more-bt .fl,
.more-bt .sfl {
  position: absolute;
  right: 0;
  height: 100%;
  width: 0;
  z-index: 2;
  background: $secondary;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.more-bt .sfl {
  z-index: 1;
  background: $secondary;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}

.more-bt .cross {
  position: absolute;
  z-index: 15;
  width: 18px;
  height: 18px;
  top: -webkit-calc(50% - 8px);
  top: calc(50% - 8px);
  left: -webkit-calc(50% - 8px);
  left: calc(50% - 8px);
  color: $primary !important;
}

#wrapper.smooth section.smoothy {
  visibility: hidden;
}

.more-bt .cross:before {
  width: 100%;
  height: 2px;
  top: 8px;
  left: 0px;
  -webkit-transform: translateX(50px) scaleX(0);
  -ms-transform: translateX(50px) scaleX(0);
  transform: translateX(50px) scaleX(0);
}

.more-bt .cross:before,
.more-bt .cross:after {
  content: " ";
  background: $primary !important;
  display: block;
  position: absolute;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

.more-bt .cross:after {
  width: 2px;
  height: 100%;
  left: 8px;
  top: 0;
  -webkit-transform: translateY(20px) scaleY(0);
  -ms-transform: translateY(20px) scaleY(0);
  transform: translateY(20px) scaleY(0);
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

.more-bt .cross:before,
.more-bt .cross:after {
  content: " ";
  background: #fff;
  display: block;
  position: absolute;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

.more-bt i {
  position: absolute;
  display: block;
  top: 1px;
  left: 1px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

.more-bt i:before {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.more-bt i:after,
.more-bt i:before {
  content: " ";
  display: block;
  width: 2px;
  height: 20px;
  background: $secondary;
  position: absolute;
  margin: -10px -1px;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}

.more-bt:hover i:after {
  content: " ";
  display: block;
  width: 2px;
  height: 20px;
  background: $secondary;
  position: absolute;
  margin: 0px -1px;
  left: 50%;
  top: 50%;
}

.more-bt:hover i:before {
  content: " ";
  display: block;
  width: 2px;
  height: 20px;
  background: $secondary;
  position: absolute;
  margin: -10px 0px -10px 8px;
  left: 50%;
  top: 50%;
}

.more-bt p {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  z-index: 1;
}

.more-bt:hover:before,
.more-bt:before {
  height: 100%;
}

.more-bt:before {
  left: 0;
  bottom: 0;
  height: -webkit-calc(100% - 17px);
  height: calc(100% - 17px);
  width: 2px;
}

.more-bt:hover .fl,
.more-bt .fl {
  -webkit-transition: 0.7s;
  transition: 0.7s;
}

.more-bt:hover .fl,
.more-bt:hover .sfl,
.more-bt .fl,
.more-bt .sfl {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  width: 100%;
}

.more-bt .fl,
.more-bt .sfl {
  position: absolute;
  right: 0;
  height: 100%;
  width: 0;
  z-index: 2;
  background: $secondary;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.more-bt:hover .sfl,
.more-bt .sfl {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.more-bt:hover .fl,
.more-bt:hover .sfl,
.more-bt.hvd .fl,
.more-bt.hvd .sfl {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  width: 100%;
}

.more-bt .sfl {
  z-index: 1;
  background: #FFD1B8;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}

.more-bt .cross {
  position: absolute;
  z-index: 15;
  width: 18px;
  height: 18px;
  top: -webkit-calc(50% - 8px);
  top: calc(50% - 8px);
  left: -webkit-calc(50% - 8px);
  left: calc(50% - 8px);
}

.more-bt:hover .cross:before,
.more-bt .cross:before {
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.more-bt:hover .cross:after,
.more-bt:hover .cross:before,
.more-bt .cross:after,
.more-bt .cross:before {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.more-bt .cross:after {
  width: 2px;
  height: 100%;
  left: 8px;
  top: 0;
  -webkit-transform: translateY(20px) scaleY(0);
  -ms-transform: translateY(20px) scaleY(0);
  transform: translateY(20px) scaleY(0);
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

.more-bt .cross:before,
.more-bt .cross:after {
  content: " ";
  background: #fff;
  display: block;
  position: absolute;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

.more-bt:hover .cross:after,
.more-bt:hover .cross:before,
.more-bt.hvd .cross:after,
.more-bt.hvd .cross:before {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.more-bt:hover .cross:after,
.more-bt.hvd .cross:after {
  -webkit-transition-duration: 0.6s;
  transition-duration: 0.6s;
}



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


