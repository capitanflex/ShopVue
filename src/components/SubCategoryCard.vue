<template>
    <div class="product">
        <div class="product__description description">
            <img :src=product.img alt="Product image" class="description__img">
            <div class="description__properties properties">
                <p class="properties__title">{{ product.title }}</p>
                <p class="properties__description">{{ product.description }}</p>
                <ul class="properties__list list">
                    <li
                        class="list__item"
                        v-for="item in product.parameters"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="product__interaction interaction">
            <div class="interaction__top top">
                <p class="top__price">Price: ${{ product.price }} ea</p>
                <div class="top__cart cart">
                    <div class="cart__mount mount">
                        <p class="mount__count">1</p>
                        <div class="mount__btns btns">
                            <button class="btns__select select">
                                <i class="select__arrow up"></i>
                            </button>
                            <button class="btns__select">
                                <i class="select__arrow down"></i>
                            </button>
                        </div>
                    </div>
                    <button class="cart__addToCart">ADD TO CART</button>
                </div>
            </div>
            <div class="interaction__bottom bottom">
                <p class="bottom__qty">Min Purchase Qty: {{ product.minPurchaseQty }}</p>
                <div
                    class="bottom__inStock inStock"
                    v-if="product.isInStock"
                >
                    <img src="@/assets/images/inStock.png" alt="inStock" class="inStock__img">
                    <p class="inStock__text">In stock</p>
                </div>
                <div
                    class="bottom__inStock inStock"
                    v-else
                >
                    <img src="@/assets/images/outOfStock.png" alt="inStock" class="inStock__img">
                    <p class="inStock__text">Out of stock</p>
                </div>
                <p class="bottom__addToFavorites">
                    Add to Favorites
                </p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

const props = defineProps({
    product: {
        type: Object,
        required: true
    },
});


</script>

<style scoped lang="scss">
    .product{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
        padding-bottom: 25px;
        margin-bottom: 25px;

        &:last-child{
            border-bottom: none;
        }

        &__description{
            display: flex;
        }

        &__interaction{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: end;
        }
    }
    .description{
        &__img{
            margin-right: 25px;
            width: 255px;
        }
        &__properties{
            width: 300px;
        }
    }
    .properties{
        &__title{
            color: #E31D27;
            font-weight: 900;
            font-size: 18px;
        }
        &__description{
            font-size: 16px;
            font-weight: 900;
        }

        &__list{
            margin-top: 25px;
            margin-left: 25px;
            font-size: 15px;
            font-weight: 300;
            line-height: 20px;
        }
    }
    .list{

        &__item{
            list-style-type: disc;
        }
    }

    .interaction{
        &__bottom{
            font-size: 15px;

        }
    }
    .top{
        font-size: 18px;
        font-weight: 900;
        &__price{
            color: #E31D27;
        }
        &__cart{
            display: flex;
        }
    }
    .cart{
        &__mount{
            width: 80px;
            height: 35px;
            border: 1px solid #BFBFBF;
            text-align: center;
            display: flex;
        }
        &__addToCart{
            color: #FFFFFF;
            background-color: #E31D27;
            border-radius: 5px;
            font-weight: 900;
            padding: 5px 15px;
            margin-left: 9px;
            letter-spacing: 1px;
            &:hover{
                background-color: #a6161d;
                cursor: pointer;
            }
        }
    }

    .mount{
        &__count{
            margin: auto 0;
            width: 60px;
            color: #494949;
        }
        &__btns{
            height: 35px;
            width: 25px;
            display: flex;
            flex-direction: column;
            padding-top: 1px;
        }
    }
    .btns{
        &__select{
            width: 100%;

            &:hover{
                background-color: #BFBFBF;
                cursor: pointer;
            }
        }
    }
    .select{
        &__arrow{
            border: solid black;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 3px;

            &.up{
                transform: rotate(-135deg);
            }
            &.down{
                transform: rotate(45deg);

            }
        }
    }

    .bottom{
        &__inStock{
            display: flex;
            justify-content: flex-end;
            font-weight: 900;
        }
        &__addToFavorites{
            font-size: 14px;
            color: #E31D27;
        }
    }

    .inStock{
        &__img{
            margin: 10px 10px 10px 0;
            height: 20px;
        }
        &__text{
            margin: auto 0;
        }
    }
</style>