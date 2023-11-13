<template>
  <div class="container">
    <div class="container__login login">
      <p class="login__title">Login</p>
      <form action="" class="login__form form" @submit.prevent="Autorizate">
        <div class="form__section-input section-input">
          <p class="section-input__text">Username or email address</p>
          <input
              type="text"
              class="section-input__input"
              v-model="form.login"
          >
        </div>
        <div class="form__section-input section-input">
          <p class="section-input__text">Password</p>
          <input
              type="password"
              class="section-input__input"
              v-model="form.password"
          >
        </div>
        <div class="form__options options">
          <div class="options__checkbox checkbox">
            <input type="checkbox" class="checkbox__box">
            <div class="checkbox__option-name">Remember me</div>
          </div>
          <a href="#" class="options__forgot-password">Forgot Password</a>
        </div>
        <button class="form__btn">Log In</button>
      </form>
    </div>
  </div>
  <LogInPopup />
</template>

<script setup lang="ts">
  import {reactive} from "vue";
  import LogInPopup from "@/components/UI/LogInPopup.vue";

  const form = reactive({
    login: '',
    password: ''
  });

  function Autorizate() {
    console.log("check")
  }
</script>

<style lang="scss" scoped>
  .container{
    max-width: 763px;
    margin: auto;
  }

  .login{
    margin-top: 20%;
    font-size: 20px;

    &__title{
      font-weight: 900;
      padding-bottom: 18px;
    }
  }

  .form{
    &__options{
      display: flex;
      justify-content: space-between;
    }
    &__btn{
      padding: 6px 44px;
      text-transform: uppercase;
      color: #FFFFFF;
      background-color: #E31D27;
      border-radius: 5px;
      display: block;
      margin: 0 auto;
    }
  }

  .section-input{
    &__text{
      padding-bottom: 10px;
    }
    &__input{
      border: #717171 solid 1px;
      border-radius: 5px;
      width: 100%;
      height: 45px;
      padding: 0 10px;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  .options{
    margin: 10px 0 20px 0;
    &__checkbox{
      display: flex;

    }
  }

  .checkbox{
    &__box{
      height: 20px;
      width: 20px;
      margin-right: 9px;
    }
    &__option-name{
      font-size: 18px;
      margin: auto 0;
    }
  }
</style>