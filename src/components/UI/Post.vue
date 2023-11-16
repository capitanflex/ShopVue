<script setup lang="ts">

</script>

<template>
  <div class="post">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .post{
    text-align: center;
    width: 282px;
    padding: 90px 0;
    background-color: #D9D9D9;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 900;
    margin: 0 auto;
  }
</style>