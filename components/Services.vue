<template>


<div class="services relative">




    <div class="heading-of-section max-w-screen-2xl  relative flex flex-col flex-wrap items-center justify-center mx-auto px-4 py-14 mt-10">
        <img src="public/services_icon.webp" class=" w-16 m-0 m-auto " alt="Flowbite Logo" />
        <h5 class="mt-6">Services</h5>
        <h4 class="mt-3 text-center"><span>B</span>oostez votre café, bar ou restaurant</h4>
        <h6 class="mt-3 text-center">Attirez plus de clients, fidélisez les existants et facilitez la gestion de votre établissement avec notre solution  <br>  web tout-en-un.</h6>



    </div>

    <img src="public/Leaf_right.webp" class="absolute w-16 right-0 top-14" alt="Leaf right icon" />

    <img src="public/Leaf_left.webp" class="absolute w-8 left-0 top-16" alt="Leaf left icon" />






</div>

</template>


<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/styling.scss";

.services{
    background-color: $secondary;
}

.heading-of-section{
    color:$primary;
    h5{
        font-size: $section_name_size;
        font-family: $Inter_B;
    }
    h4{
        font-size: $section_slogan_size;
        font-family: $Inter_B;

        span{
            font-family: $MrDeHaviland;
        }
    }
    h6{
        font-family: $Inter_R;
    }

}


</style>

