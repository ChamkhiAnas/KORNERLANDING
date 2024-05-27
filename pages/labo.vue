<template>
    <div class="test-containter mb-24 mt-24 flex flex-col gap-8">

        <div class="box a">a</div>
        <div class="box b">b</div>
        <div class="box c">c</div>
        <div class="box D">D</div>
        <div class="box D">D</div>
        <div class="box D">D</div>
        <div class="box D">D</div>
        <div class="box D">D</div>





    </div>





</template>

<script setup>


onMounted(() => {


useGsap.to(".c", {
  rotation: 0,
  x: 400,
  rotation: 360,
  duration :3,
  scrollTrigger:{
    trigger:".c",
    start:"start start",
    markers:true,
    //when to start the animation depends on scroll top and center of scroll
    // first element about object second about scroll element
    // we can use top or center or bottom , or pixels or pourcentages (always relative to the top)
    toggleActions:"restart pause reverse pause"

    // you can customize end triger with key endTrigger

    //key of toggle actions can be play,pause,resume,revert,restart,reset,complete,none
    // onEnter: What action to perform when the scroll enters the trigger area.
    // onLeave: What action to perform when the scroll leaves the trigger area.
    // onEnterBack: What action to perform when the scroll re-enters the trigger area from the opposite direction.
    // onLeaveBack: What action to perform when the scroll leaves the trigger area from the opposite direction.
  }
    
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
    width:6rem;
    height: 6rem;
    background-color: red;
    padding: 4rem;
    margin: 30rem;
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