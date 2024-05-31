<template>
    <div class="navbar">
      <nav class="bg-kornerBackground border-gray-200 ">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
          <a  class="py-4 rtl:space-x-reverse">

            <svg   style="scale:0.8;height:4rem" class="opacity-0" id="logo" width="132" height="40" viewBox="0 0 132 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="path1" d="M91.6457 0.502869C113.933 0.502869 132 18.5701 132 40.8572H91.6457V0.502869Z" fill="#FFEDE3"/>
                <path id="path2" d="M44.6914 0.502869H85.2343V40.8572H44.6914V0.502869Z" fill="#FFEDE3"/>
                <ellipse id="ellipse1" cx="20.1771" cy="23.2257" rx="20.1771" ry="20.2714" fill="#FFEDE3"/>
                <circle id="circle1" cx="20.3657" cy="23.5086" r="11.6914" fill="#012714"/>
                <ellipse id="ellipse2" cx="20.1772" cy="23.4144" rx="6.03429" ry="5.94" fill="#FFEDE3"/>
            </svg>
     
          </a>
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>


      

          <div class="hidden  w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="font-medium navbar-items bg-kornerBackground flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
            >
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-textHoverColor rounded md:bg-transparent md:p-0" aria-current="page">À propos de nous</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-textHoverColor rounded md:bg-transparent md:p-0">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-textHoverColor rounded md:bg-transparent md:p-0">Témoignages</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-textHoverColor rounded md:bg-transparent md:p-0">Contact</a>
              </li>
            </ul>
          </div>


          
          
          
        </div>
        <div v-if="isMenuOpen">
            <div class="block  w-full md:hidden md:w-auto" id="navbar-default">
                <ul
              class="font-medium bg-kornerBackground flex flex-col p-4 md:p-0 mt-4  border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
            >
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-primaryColor hover:bg-slate-50 rounded md:bg-transparent md:p-0" aria-current="page">À propos de nous</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-primaryColor hover:bg-slate-50 rounded md:bg-transparent md:p-0">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-primaryColor hover:bg-slate-50 rounded md:bg-transparent md:p-0">Témoignages</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white hover:text-primaryColor hover:bg-slate-50 rounded md:bg-transparent md:p-0">Contact</a>
              </li>
            </ul>
            </div>

        </div>

    </nav>
    </div>
  </template>


<script setup>

onMounted(() => {



  const tl = useGsap.timeline({defaults: {duration: 1,ease: "power1.inOut"}, delay: 1.3});

  tl.to("#logo", {opacity: 1, duration: 0.2});

  // Draw paths animation
  tl.from("#path1", {drawSVG: 0, duration: 1.5})
  .from("#path2", {drawSVG: 0, duration: 1.5}, "-=1.2")

  // Animate ellipses and circles
  tl.fromTo("#ellipse1", {scale: 0}, {scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1")
  .fromTo("#circle1", {scale: 0}, {scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.2")
  .fromTo("#ellipse2", {scale: 0}, {scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.2");

  tl.to("#path1", {rotation: 0, transformOrigin: "center", duration: 1, ease: "back.inOut(1.7)"}, "-=1")
  .to("#path2", {rotation: -360, transformOrigin: "center",delay:0.6 ,duration: 1.8, ease: "back.inOut(1.7)"}, "-=2")



const items = document.querySelectorAll('.navbar-items')[0].childNodes;




items.forEach((item, index) => {
  useGsap.to(item, {
                duration: 0.4,
                opacity:1,
                y: 0, 
                delay: index*0.3 
            });
        });

});



const isMenuOpen=ref(false)

const toggleMenu=()=>{
    isMenuOpen.value=!isMenuOpen.value
}


</script>

<style lang="scss" scoped>
@use "~/assets/styling.scss";


.navbar-items{
  li {
    transform: translateY(-20px);
    opacity: 0;

  }
}


li {
  position:relative;
  a{
     font-family:$Inter_B;
     color:$text-color-primary;
  
     }
}

    
  a::after{
    content: "";
    display: block;
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 6px;
    transform: scaleX(0);
    transition: transform 300ms ease;
    transform-origin: right;
    background:#A9D9C1;
  }    
    a:hover::after{
    transform-origin: left;
    transform: scaleX(1);  
    }

</style>


