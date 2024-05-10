<template>
    <div class="navbar">
      <nav class="bg-kornerBackground border-gray-200 ">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="public/Logo.webp" class="h-8" alt="Flowbite Logo" />
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


      

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="font-medium bg-kornerBackground flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
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
            <div class="block w-full md:hidden md:w-auto" id="navbar-default">
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

<style lang="scss" scoped>
@use "~/assets/styling.scss";



 a{
    font-family:$Inter_B;
    color:$text-color-primary;
    }
    


</style>


<script setup>


const isMenuOpen=ref(false)

const toggleMenu=()=>{
    isMenuOpen.value=!isMenuOpen.value
}


</script>