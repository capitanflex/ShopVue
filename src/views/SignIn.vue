<template>
  <div class="container">
    <div class="container__login login">
      <p class="login__title">Registration</p>
      <form action="" class="login__form form" @submit.prevent="signIn">
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
              id="password"
              class="section-input__input"
              v-model="form.password"
          >
        </div>
        <div class="form__section-input section-input">
          <p class="section-input__text">Repeat password</p>
          <input
              type="password"
              id="repeatPassword"
              class="section-input__input"
              v-model="form.repeatedPassword"
              @input="onTextChange"
              :class="{'with-error': hasPasswordError}"
          >
        </div>
        <button @click="signIn" class="form__btn">Sign in</button>
      </form>
    </div>
  </div>
  <LogInPopup
      @closePopup='closePopup'
      :is-hidden="isHidden"
  >
    {{ popupMessage}}
  </LogInPopup>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import LogInPopup from "@/components/UI/LogInPopup.vue";
import {useUserStore} from "@/stores/usersStore";

  const popupMessage = ref('The form contains errors');
  const isHidden = ref(true);
  const hasPasswordError = ref(false);
  const userStore = useUserStore();

  const form = reactive({
    login: '',
    password: '',
    repeatedPassword: ''
  });

  function openPopup(){
    isHidden.value = false;
    hasPasswordError.value = true;
  }

  function closePopup(){
    isHidden.value  = true;
  }

  function signIn() {
    if (form.password === form.repeatedPassword){
      closePopup();
      registerAndAuthorise();
      return;
    }

    openPopup();
  }

  function onTextChange() {
    hasPasswordError.value = false;
  }

  function registerAndAuthorise() {
    const user = {
      login: form.login,
      password: form.password
    }
    userStore.registerUser(user)
    // console.log(user)
  }
</script>

<style lang="scss" scoped>
  .container{
    width: 763px;
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
      &:hover{
        background-color: #a6161d;
      }
      &:active{
        background-color: #620d0d;
      }
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

  .with-error{
    border: #E31D27 solid 2px;
  }
</style>