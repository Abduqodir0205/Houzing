<template>
  <nav>
    <div class="container">
      <div class="nav__content">
        <div class="nav__content-bar" @click="Mobile__list">
          <img src="../assets/images/svg/bar.svg" alt="bar icon" />
        </div>
        <div class="nav__content-logo">
          <a href="#"><img src="../assets/images/svg/logo.svg" alt="Logo" /></a>
        </div>
        <div class="nav__content-list">
          <ul>
            <li><a class="web__a-style" href="#">Home</a></li>
            <li><a class="web__a-style" href="#">Properties</a></li>
            <li><a class="web__a-style" href="#">Contacts</a></li>
          </ul>
          <div class="nav__content-list-userIcon">
            <img src="../assets/images/svg/userIcon.svg" alt="User__icon" />
          </div>
        </div>
      </div>
      <div class="mobile__list">
        <ul>
          <li><a class="web__a-style" href="#">Home</a></li>
          <li><a class="web__a-style" href="#">Properties</a></li>
          <li><a class="web__a-style" href="#">Contacts</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
const err = ref("hato")
function Mobile__list(err){
  // alert(err )
  document.querySelector('.mobile__list').classList.toggle('mobile__list-on')
  
}
</script>
<style>

</style>
