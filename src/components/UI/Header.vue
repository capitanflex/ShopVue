<template>
  <header class="header">
    <img
        alt=""
        class="header__logo"
        src="@/assets/images/logo%201.png"
        @click="redirect('/')"
    >
    <div class="header__search search">
      <input class="search__input" type="text" placeholder="Search...">
      <img class="search__icon" src="@/assets/icons/Search.png" alt="">
    </div>
    <nav class="header__navbar navbar">
      <div
          class="navbar__auth"
      >
        <p
            class="navbar__item products"
            @mouseover="showMenu"
        >
            products
        </p>
        <p
            v-for="item in userAuth ? AUTH_ROUTES : PUBLIC_ROUTES"
            :key="item.id"
            @click="redirect(item.path)"
            class="navbar__item"
            :class="{ 'navbar__item_active': currentRoute === item.path }"
        >
          {{ item.name }}
        </p>
        <p
            v-if="userAuth"
            @click="unAuthorise"
            class="navbar__item"
        >
          log out
        </p>
        <p
            v-else
            @click="redirect('/login')"
            class="navbar__item"
            :class="{ 'navbar__item_active': currentRoute === '/login' }"
        >
          log in
        </p>
      </div>
    </nav>
  </header>
    <ProductsMenu
        class="products-menu"
        :class="{'active': isMenuVisible}"
        @mouseleave="hideMenu"
        @routeClick="routeClicked"

    />
</template>

<script setup lang="ts">
  import {AUTH_ROUTES, PUBLIC_ROUTES} from "@/router/constants";
  import {useRoute, useRouter} from 'vue-router';
  import {ref, watchEffect} from "vue";
  import {useUserStore} from "@/stores/usersStore";
  import ProductsMenu from "@/components/UI/ProductsMenu.vue";

  const route = useRoute();
  const currentRoute = ref(route.path);
  const userStore = useUserStore();
  const userAuth = ref(userStore.userAuth)
  const routerUse = useRouter();
  const isMenuVisible = ref(false);
  function showMenu() {
    isMenuVisible.value = true
  }
  const hideMenu = () => {
      isMenuVisible.value = false;

  };

  watchEffect(() => {
    userAuth.value = userStore.userAuth;
  });

  const unAuthorise = (() => {
    userStore.unAuthoriseUser();
  })

  const redirect = (path: string) => {
    routerUse.push(path)
    currentRoute.value = path;
  }

  const routeClicked = () => {
      isMenuVisible.value = false;
  };

</script>

<style lang="scss">
  .header {
    z-index: 15;
    display: flex;
    justify-content: space-between;
    padding: 23px 60px 20px 50px;
    background-color: black;
    align-items: center;

    &__search {
      background-color: #FFFFFF;
      border-radius: 100px;
      height: 34px;
      width: 400px;
      display: flex;
      justify-content: space-between;
      margin: 0 20px
    }
    &__navbar{

      font-size: 18px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .search{
    &__input{
      width: 100%;
      border: none;
      margin: 0 24px;
      font-weight: bold;
      &::placeholder{
        color: rgba(189, 189, 189, 0.9);
      }
    }
    &__icon{
      height: 15px;
      width: 15px;
      margin: 10px 17px;
    }
  }

  .navbar{
    &__auth{
      display: grid;
      color: #FFFFFF;
      grid-template-columns: repeat(5, min-content);
      grid-column-gap: 15px;
    }
    &__item{
      white-space: nowrap;
      &_active{

        color: #E31D27;
      }
      &:hover{
        cursor: pointer;
        color: #E31D27;
      }
    }
  }
  .products-menu{
    position: absolute;
    z-index: 10;
    right: 0;
    left: 0;
    top: -330px;
    transition-duration: 0.5s;
    transition-property: transform;
    &.active {
        transform: translateY(455px);
        transition-timing-function: ease;
    }
  }
</style>