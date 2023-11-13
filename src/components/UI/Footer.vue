<template>
  <footer class="footer">
    <img
        alt=""
        class="footer__logo"
        src="@/assets/images/logo%201.png"
    >
    <div class="footer__follow follow">
      <p class="follow__text">
        FOLLOW US
      </p>
      <div class="follow__icons icons">
        <a href="#" class="icons__link link">
          <img src="@/assets/icons/instagram.png" alt="" class="link__icon">
        </a>
        <a href="#" class="icons__link link">
          <img src="@/assets/icons/facebook.png" alt="" class="link__icon">
        </a>
      </div>
    </div>
    <div class="footer__copy-right">
      © 2023 F & R cycle inc. All Rights Reserved.
    </div>

  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
 .footer{
   position: absolute;
   bottom: 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding: 32px 63px;
   background-color: black;
   color: #FFFFFF;

   &__logo{
     width: 183px;
     height: 43px;
   }

   &__follow{
     display: grid;
     grid-template-columns: repeat(3, auto);
     grid-gap: 24px;
     align-content: center;
   }
   &__copy-right{
     margin: auto 0;
   }
 }

 .follow__text{

   font-size: 18px;
   font-weight: bold;
   margin: auto 0;
 }

 .follow__icons{
   display: flex;
   align-items: center;

 }

 .icons__link{
   &:first-child{
     margin-right: 21px;
   }
 }
</style>