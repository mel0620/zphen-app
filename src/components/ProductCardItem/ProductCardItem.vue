<template>
    <div class="product-item">
        <div class="product-item__top">
            <a href="/product-view" class="product-item__image">
                <img :src="prod.prod_img_url" alt="">
            </a>
        </div>
        <div class="product-item__bottom">
            <div class="product-item__info">
                <div class="product-item__name">{{ prod.prod_name }}</div>
                <div class="product-item__desc">{{ prod.prod_desc }}</div>
            </div>
            <div class="product-item__order">
                <div class="product-item__price">
                    <div class="product-item__current">₱ {{ prod.prod_price }}</div>
                    <div class="product-item__prev">₱ {{ prod.prod_prev_price }}</div>
                </div>
                <div class="product-item__action">
                    <q-btn no-caps outline dense class="q-px-sm" color="brand" label="Add to cart"></q-btn>
                    <q-rating
                        v-model="prod.prod_rating"
                        max="5"
                        size="1.2em"
                        color="brand"
                        icon="star_border"
                        icon-selected="star"
                        icon-half="star_half"
                        no-dimming
                        readonly
                        class="shadow-none"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import "./ProductCardItem.scss"

export default {
    name: 'ProductItem',
    props: {
        prod: Object
    }
}
</script>

<style lang="scss" scoped>
@import "../../css/toem.scss";

.product-item {

    background-color: #fff;

    &__top {
        border-bottom: 2px solid $body-color;

        .product-item__image {
            // min-width: 250px;
            // min-height: 250px;
            // padding: 5px;
            text-decoration: none;

            img {
                max-width: 100%;
                height: auto;
                object-fit: contain;
                transform: scale(.9);
            }
        }
    }

    &__bottom {
        padding: toem(10px);

        .product-item__info {
            line-height: toem(16px);
            overflow: hidden;

            .product-item__name,
            .product-item__desc {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: $black;
                max-width: 11.875rem;
            }
        }

        .product-item__order {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 0.5rem;

            .product-item__price {
                // line-height: 16px;
                .product-item__current {
                    color: $brand-strong;
                    font-size: toem(18px);
                }
                .product-item__prev {
                    color: $black;
                    opacity: 0.4;
                    font-size: toem(12px);
                    text-decoration: line-through;
                }
            }

            .product-item__action {
                justify-self: flex-end;

                .q-btn {
                    background-color: $brand-light !important;
                    white-space: nowrap;
                }
            }

            @media screen and (max-width: 800px) {
                grid-template-columns: 1fr;

                .product-item__action {
                    // justify-self: flex-start;
                    margin-top: 0.625rem;
                    width: 100%;

                    button {
                        width: 100%;
                    }

                    .z-star {
                        justify-content: flex-start;
                    }
                }
            }
        }
    }
}
</style>
