
<template>
  <div class="container">
    <p class="container__title">Contact Us</p>
    <div class="container__body body">
      <div class="body__left-side left-side">
        <p class="left-side__title">Contact Information</p>
        <div
            class="left-side__item item"
            v-for="item in leftSideItems"
            :key = item.id
        >
          <img :src="item.img" alt="" class="item__icon">
          <div class="item__info info">
            <p class="info__title">{{ item.title }}</p>
            <p class="info__body">{{ item.body }}</p>
          </div>
        </div>
      </div>
      <div class="body__right-side right-side">
        <p class="right-side__title">Send us an Email</p>
        <form @submit.prevent="" action="" class="right-side__form form">
          <div class="form__input-fields input-fields">
            <div
                class="input-fields__input-item input-item"
                v-for="item in rightSideItems"
                :key = item.id
            >
              <div class="input-item__image-wrapper image-wrapper">
                <img :src="item.img" alt="" class="image-wrapper__img" >
              </div>
              <input type="text" :placeholder="item.placeholder" class="input-item__input">
            </div>
            <div class="input-fields__input-item input-item large">
              <div class="input-item__image-wrapper image-wrapper">
                <img src="/src/assets/icons/form/comment.png" alt="" class="image-wrapper__img" >
              </div>
              <textarea  type="text" placeholder="Comment" class="input-item__textarea"></textarea>
            </div>
          </div>
          <div class="form__send send">
            <img src="/src/assets/icons/form/captcha_test.png" alt="" class="send__img" >
            <div class="send__right-block right-block">
              <div class="right-block__CC-email CC-email">
                <input class="CC-email__checkbox" type="checkbox">
                <p class="CC-email__text">CC my email</p>
              </div>
              <button class="right-block__btn btn">
                <img src="/src/assets/icons/form/send.svg" alt="" class="btn__img" >
                <p class="btn__text">SEND</p>
              </button>
            </div>

          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const rightSideItems = ref([
  {
    id: 1,
    img: "/src/assets/icons/form/name.png",
    placeholder: 'Full Name',
  },
  {
    id: 2,
    img: '/src/assets/icons/form/company.png',
    placeholder: 'Company',
  },
  {
    id: 3,
    img: '/src/assets/icons/info/phone.png',
    placeholder: '800-718-2453',
  },
  {
    id: 4,
    img: '/src/assets/icons/info/mail.png',
    placeholder: 'Email Address',
  }
])
const leftSideItems = ref([
  {
    id: 1,
    img: "/src/assets/icons/info/location.png",
    title: '',
    body: 'F & R Cycle, Inc.\n' +
        '7220 Somerset Blvd,\n' +
        'Paramount\n' +
        'California, 90723 USA'
  },
  {
    id: 2,
    img: '/src/assets/icons/info/phone.png',
    title: 'Call Us:',
    body: '800-718-2453'
  },
  {
    id: 3,
    img: '/src/assets/icons/info/fax.png',
    title: 'Fax:',
    body: '800?????'
  },
  {
    id: 4,
    img: '/src/assets/icons/info/mail.png',
    title: 'E-mail us:',
    body: 'Info@fnrco.com'
  }
])
</script>


<style lang="scss" scoped>
 .container{
   padding: 22px 64px 53px 72px;
   font-size: 20px;
   &__title{
     color: #E21D27;

     width: 100%;
     padding-bottom: 33px;
   }
   &__body{
     display: flex;
   }
 }

 .left-side{
   height: 500px;
   display: flex;
   flex-direction: column;

   &__title{
     font-weight: 900;
     margin-bottom: 10px;
   }
 }

 .item{
   display: grid;
   grid-template-columns: 50px 200px;
   grid-column-gap: 20px;
   align-items: center;
   margin-bottom: 35px;

 }

 .info{
   &__title{
     font-weight: 700;
     color: #E21D27;
     padding-bottom: 5px;
   }
   &__body{
     width: 200px;
   }
 }

 .right-side{
   margin: 0 auto;
   &__title{
     font-weight: 900;
     margin-bottom: 22px;
   }
 }

 .form{
   .input-fields{
     display: grid;
     grid-template: 45px 45px 1fr / 1fr 1fr;
     grid-gap: 20px;
   }

 }
 .input-fields{
   &__input-item{
     border: #717171 1px solid;
     border-radius: 5px;
     display: flex;
     align-items: center;
     width: 455px;



     &.large{
       grid-column: span 2;
       height: 140px;
       width: 930px;
       align-items: start;
     }

   }
 }
 .input-item{

   &__image-wrapper{
     width: 45px;
     height: 45px;
     margin-right: 20px;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   &__input{
     font-size: 20px;
     margin: auto 0;
     height: 30px;
     width: 100%;
     margin-right: 15px;
     &::placeholder{
       font-size: 20px;
       color: black;
     }
   }
   &__textarea{
     font-size: 20px;
     margin-top: 10px;
     height: 90%;
     width: 100%;
     margin-right: 15px;
     &::placeholder{
       font-size: 20px;
       color: black;
     }
   }
 }

 .image-wrapper{
   &__img{
     max-height: 25px;
     margin: auto;
   }
 }

 .send{
   display: flex;
   justify-content: space-between;
   align-items: center;

   &__right-side{

   }

 }

 .right-block{
   margin-left: auto;
   &__CC-email{
     display: flex;
     align-items: center;
     justify-content: flex-end;
     padding-bottom: 23px;
   }
   &__btn{
     border: #E21D27 1px solid;
     border-radius: 3px;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100px;
     height: 30px;
     margin-left: auto;
   }
 }

 .CC-email{
   &__checkbox{
     margin-right: 9px;
     height: 20px;
     width: 20px;
     appearance: none;
     -webkit-appearance: none;
     border: #E31D27 1px solid;
     display: flex;
     justify-content: center;
     align-items: center;
     &:after{
       content: '';
       padding: 7px;
       border: 2px solid white;
     }
     &:checked{
       background-color: #E31D27;
     }
   }
 }
</style>