<template>
    <div class="test-containter mb-24 mt-24 flex flex-col gap-8">
<!-- 
        <div class="box a">a</div>
        <div class="box b">b</div>
        <div class="box c">c</div>
        <div class="box D">D</div>
 -->


        <div class="py-24 sloganText mt-24 flex flex-row gap-4" style="color:white;font-size:7rem"><span>juste a random text test</span> </div>


        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>
        <p>teeeeeeeeest</p>



    </div>





</template>

<script setup>


onMounted(() => {


      
    let splitWords =  function (selector) {
        var h1Element = document.querySelector(selector);
        var textContent = h1Element.textContent;
        var words = textContent.split(' ');
                var firstWord = `<span class="testbabe">${words[0]}</span>`;
                var remainingWords = words.slice(1)
                var wrappedRemainingWords=[];
                remainingWords.forEach((item,index)=>{
                    wrappedRemainingWords[index] = `<div class="testbabe" style="transform: translateY(-20px);opacity: 0;" >${item}</div> `;
                })
                var remaintext=wrappedRemainingWords.join('   ');
                var newContent = firstWord + '    ' + remaintext;
                h1Element.innerHTML = newContent;
    };



  splitWords(".sloganText")


  let revealText = document.querySelectorAll(".testbabe")


  console.log("revealText",revealText)

  

  revealText.forEach((item,index) => {

    useGsap.to(item, {
                // duration: 0.8,
                // opacity:1,
                // y: 0, 
                // delay: index*0.5,

                y: '-90px',
                opacity: 1,
                rotationZ: '0',
                duration: 0.1,
                stagger: 0.5,
                delay: index*0.5,
                ease: "power4.easeInOut"




            });


  });




    let box=document.querySelectorAll(".box")



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



.testbabe{
    transform: translateY(-20px);
    opacity: 0;

}


</style>