<template>


<div class="services relative mt-24 pt-24">




    <div class="heading-of-section opacity-0 max-w-screen-2xl  relative flex flex-col flex-wrap items-center justify-center mx-auto px-4 py-14 mt-10">
        <img src="public/services_icon.webp" class=" w-16 m-0 m-auto " alt="Flowbite Logo" />
        <h5 class="mt-6">Services</h5>
        <h4 class="mt-3 text-center "><span>B</span>oostez votre café, bar ou restaurant</h4>
        <h6 class="mt-3 text-center">Attirez plus de clients, fidélisez les existants et facilitez la gestion de votre établissement avec notre solution  <br>  web tout-en-un.</h6>
    </div>

    <img src="public/Leaf_right.webp" class="absolute w-16 right-0 top-14" alt="Leaf right icon" />
    <img src="public/Leaf_left.webp" class="absolute w-8 left-0 top-16" alt="Leaf left icon" />


    <div class="services-card opacity-0  max-w-screen-2xl flex flex-col  mx-auto px-4 py-4 ">
        <div class="card-wrapper  flex flex-col lg:flex-row  items-center  mt-6 gap-6 w-full">
            <div class="text-card min-h-96 px-8 py-24 w-full lg:w-9/12 ">
                <h1>Conception et Développement de Sites Web</h1>
                <p class="mt-4">Nous créons des sites web sur mesure, optimisés pour les mobiles, qui reflètent l'essence de votre établissement et offrent une expérience utilisateur exceptionnelle. Intégration facile pour la commande en ligne et les réservations.</p>
            </div>

            <div class="service-card min-h-96 flex justify-center  px-8 py-24 bg-cardColor1 w-full lg:w-9/12">
                <img src="public/cardIconTwo.webp" class="scale-50 lg:scale-100 lg:w-48" alt="Card absract icon" />

            </div>
        </div>


        <div class="card-wrapper flex  flex-col lg:flex-row  mt-6 gap-6 w-full">

            <div class="service-card min-h-96 flex justify-center  px-8 py-24 bg-cardColor2 w-full order-2 lg:order-1 lg:w-9/12">
                <img src="public/cardIconOne.webp" class="scale-50 lg:scale-100 lg:w-48 " alt="Card absract icon" />

            </div>

            <div class="text-card min-h-96 px-8 py-24 w-full lg:w-9/12 rder-1 lg:order-2 ">
                <h1>Redesign de Menu</h1>
                <p class="mt-4">Donnez un nouvel élan à votre image avec notre service de redesign de menu. Nous vous aidons à créer des menus attrayants et modernes qui captivent vos clients et mettent en valeur vos plats et boissons.</p>
            </div>
        </div>

        <div id="last" class="card-wrapper  flex  flex-col lg:flex-row   mt-6 gap-6 w-full">
            <div class="text-card min-h-96 px-8 py-24 w-full lg:w-9/12 ">
                <h1>Conception et Optimisation de Menus</h1>
                <p class="mt-4">Attirez et engagez vos clients avec des menus attrayants et optimisés pour les plateformes en ligne. Gestion simplifiée grâce à notre système de gestion de contenu (CMS).</p>
            </div>

            <div class="service-card min-h-96 flex justify-center  px-8 py-24 bg-cardColor3 w-full lg:w-9/12">
                <img src="public/cardIconThree.webp" class="scale-50 lg:scale-100 lg:w-48 " alt="Card absract icon" />

            </div>
        </div>


        

    </div>







</div>

</template>


<script setup>


onMounted(() => {


   


let box=document.querySelectorAll(".card-wrapper")

let services=document.querySelectorAll(".heading-of-section")[0]

let cards=document.querySelectorAll(".services-card")[0]


console.log("service",services)


    useGsap.to(services, {
    opacity:1,
    y: "-60px",
    duration :0.4,

    ease: "power4.easeInOut",
    scrollTrigger:{
        trigger:".services",
        start:"start center",
        markers:false,
        toggleActions:"play reverse play reverse"
    }
        
    });


    useGsap.to(cards, {
    opacity:1,
    duration :0.4,

    ease: "power4.easeInOut",
    scrollTrigger:{
        trigger:".services",
        start:"start top",
        markers:false,
        toggleActions:"play reverse play reverse"
    }
        
    });



box.forEach(element => {
    useGsap.to(element, {

    scrollTrigger:{
        trigger:element,
        endTrigger:"#last",
        start:"start top",
        end:"start end",
        markers:false,
        pin:true,
        pinSpacing:false,
        toggleActions:"play pause reverse reverse"

    }
        
    });
});


});


</script>

<style lang="scss" scoped>
@use "~/assets/styling.scss";

.services{
    background-color: $secondary;
}

.heading-of-section{
    color:$primary;
    h5{
        font-size:  calc($section_name_size + 0.390625vw);
        font-family: $Inter_B;
    }
    h4{
        @include Section-Heading;
    }
    h6{
        font-family: $Inter_R;
        font-size:  calc($section_description_size + 0.390625vw);

    }

}


.services-card{
    .text-card{
        background-color: $primary;
        color:$secondary;
        h1{
            font-family: $Inter_M;
            font-size:calc($card-heading + 0.2vw);
        }
        p{
            font-family: $Inter_L;
            color:white;
            font-size:calc($section_name_size + 0.1vw);


        }
    }

}

</style>

