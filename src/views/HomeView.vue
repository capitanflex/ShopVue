<template>
  <main class="body">
    <div class="body__title-image title-image">
      <img src="@/assets/images/main-page-background.png" alt="" class="title__image">
    </div>
    <div class="body__welcome welcome">
      <div class="welcome__title">
        Welcome to F & R Cycle, Inc.
      </div>
      <div class="welcome__description">
        F & R Cycle Inc, Established in 1982, an international wholesale distributor based in the United States that carries over 5,000 parts and accessories for all Lowrider, Chopper, Limo Cruiser, BMX, and Beach Cruiser bicycles. Pioneering in the Lowrider Sector, our parts and accessories come from the finest manufactures, importing products from both Taiwan and Thailand, With our exclusive custom molds, we are able to not only bring our ideas to life, but also our customers. Being the original creators of the 52 spoke, 72 spoke, and 144 spoke wheels, we were able to add a little twist to it by creating a mold for twisted spokes as well. Accompanied with our Lowrider & Vintage Lowrider branded parts, the designs are limitless. Several of our many custom molds include twisted spring forks, twisted steering wheels, twisted baseball holder, twisted continental kit, twisted cranks, and conversion kits for tricycles (with and without plate). All of our custom molds include various colors and styles.
      </div>
      <Suspense>
        <template #default>
          <PostList/>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>

    </div>

  </main>
</template>

<script setup lang="ts">
  import PostList from "@/components/PostList.vue";


</script>

<style lang="scss">
  .body {

    &__welcome {
      margin: 20px 140px;
    }
  }
  .welcome {
    &__title {
      text-align: center;
      font-size: 25px;
      font-weight: 900;
    }
    &__description {
      margin: 18px 0 55px 0;
      line-height: 25px;
      font-size: 18px;
    }
    &__posts {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }

</style>