<template>
    <div class="test-containter mb-24 mt-24 flex flex-col gap-8">

        <div class="box a">a</div>
        <div class="box b">b</div>
        <div class="box c">c</div>
        <div class="box D">D</div>



        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>
        <h1>juste a random test </h1>


    </div>





</template>

<script setup>


onMounted(() => {


    let box=document.querySelectorAll(".box")

    console.log("box",box)


    box.forEach(element => {
        useGsap.to(element, {

        scrollTrigger:{
            trigger:element,
            start:"top top",
            markers:true,
            end:"+=300px",
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

.test-containter{
    background-color: $text-color-secondary;
    height: 100%;
}


.box{
    width:30rem;
    height: 30rem;
    background-color: red;
    padding: 4rem;
    font-size: 10rem;
    text-align: center;
}

.a{
    background-color: #3498db;
}
.b{
    background-color: #e67e22;
}
.c{
    background-color: #e74c3c;
}



</style>