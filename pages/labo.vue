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


        <svg id="logo" width="132" height="44" viewBox="0 0 132 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path1" d="M91.6457 0.502869C113.933 0.502869 132 18.5701 132 40.8572H91.6457V0.502869Z" fill="#FFEDE3"/>
            <path id="path2" d="M44.6914 0.502869H85.2343V40.8572H44.6914V0.502869Z" fill="#FFEDE3"/>
            <ellipse id="ellipse1" cx="20.1771" cy="23.2257" rx="20.1771" ry="20.2714" fill="#FFEDE3"/>
            <circle id="circle1" cx="20.3657" cy="23.5086" r="11.6914" fill="#012714"/>
            <ellipse id="ellipse2" cx="20.1772" cy="23.4144" rx="6.03429" ry="5.94" fill="#FFEDE3"/>
        </svg>
     




    </div>





</template>

<script setup>


onMounted(() => {

    // useGsap.to("#rect", {
    // duration: 5, 
    // repeat: 12,
    // repeatDelay: 3,
    // yoyo: true,
    // ease: "power1.inOut",
    // motionPath:{
    //     path: "#path",
    //     align: "#path",
    //     autoRotate: true,
    //     alignOrigin: [0.5, 0.5]
    // }
    // });

    const tl = useGsap.timeline({defaults: {duration: 1, ease: "power1.inOut"}});

    // Draw paths animation
    tl.from("#path1", {drawSVG: 0, duration: 1.5})
    .from("#path2", {drawSVG: 0, duration: 1.5}, "-=1.2")

    // Animate ellipses and circles
    tl.fromTo("#ellipse1", {scale: 0}, {scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1")
    .fromTo("#circle1", {scale: 0}, {scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.2")
    .fromTo("#ellipse2", {scale: 0}, {scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.2");

    // Rotate and translate elements for additional complexity
    tl.to("#path1", {rotation: 360, transformOrigin: "center", duration: 2, ease: "back.inOut(1.7)"}, "-=1")
    .to("#path2", {rotation: -360, transformOrigin: "center", duration: 2, ease: "back.inOut(1.7)"}, "-=2")
    // .to("#ellipse1", {x: 50, y: -10, duration: 2, ease: "power2.inOut"}, "-=2")
    // .to("#circle1", {x: 50, y: -10, duration: 2, ease: "power2.inOut"}, "-=2")
    // .to("#ellipse2", {x: 50, y: -10, duration: 2, ease: "power2.inOut"}, "-=2");



      
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
            markers:false,
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



html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
h1 {
  color: white;
}
#rect text {
  pointer-events: none;
}

body {
  background-color: black;
  color: #999;
  font-family: "Signika Negative", Arial, sans-serif;
  font-weight: 300;
  font-size: 17px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
svg {
  overflow: visible;
  height: 100%;
  
  /* Fix Safari rendering bug */
  transform: translateZ(0);
}



a {
  color: #88ce02;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#div {
  width: 120px;
  height: 60px;
  pointer-events: none;
  background-color: #aa00ee;
  color: black;
  text-align: center;
  line-height: 60px;
  position: absolute;
  top: 30%;
  left: 60%;
  font-size: 32px;
}





.gsap-3-logo {
    width: 20vw;
    max-width: 150px;
    position: fixed;
    bottom: 15px;
    right: 15px;
}

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