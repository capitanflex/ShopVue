<template>
  <div class="menu">
    <div class="menu__container container">
      <div
          class="container__item"
          v-for="item in productsCategories"
          :key="item.id"
      >
        <router-link
            :to="`/category/${item.id}`"
            @click="$emit('routeClick')"
            class="container__text"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {CATEGORIES} from "@/stores/productsCategories";
  const productsCategories = CATEGORIES


</script>

<style scoped lang="scss">
  .menu{
    font-size: 17px;
    background-color: #FFFFFF;
    color: black;
    border-bottom: 10px solid black;
    text-transform: uppercase;

    &__container{
      margin: 20px 143px;

        &__text{
            &:hover{
                color: #E31D27;
            }
        }
    }


  }
  .container__item{
    margin-bottom: 15px;
    cursor: pointer;
  }
</style>