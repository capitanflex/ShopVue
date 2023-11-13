
<template>
  <div  class="popup " :class="{'hidden': isHidden}">
    <div class="popup__wrapper wrapper">
      <div class="wrapper__content content">
        <span class="content__message">
          <slot></slot>
        </span>
      </div>
      <button @click="emit('closePopup')" class="wrapper__btn">×</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { isHidden } = defineProps(['isHidden'])
  const emit = defineEmits(['closePopup'])


</script>


<style lang="scss" scoped>
  .popup{
    &__wrapper{
      display: flex;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 99;
      background-color: #dd6c6c;
      padding: 5px 0;
      color: #FFFFFF;
    }

  }

  .wrapper{

    &__content{
      margin-left: auto;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
    }

    &__btn{
      margin-left: auto;
      padding: 0 15px;
      margin-right: 15px;
      font-size: 30px;
      border: none;
      border-radius: 8px;
      background-color: rgba(0,0,0,0);
      color: #FFFFFF;
      &:hover{
        background-color: rgba(0,0,0,0.3);
      }
    }
  }

  .content{
    &__message{
      text-align: center;
      font-size: 24px;
    }

  }

  .hidden{
    display: none;
  }
</style>