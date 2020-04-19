<template>
    <div class="product-item">
        <div class="product-item__top">
            <q-img :src="prod.prod_img_url" 
                @click="$router.push(link)" 
                style="max-height: 250px;" 
                spinner-color="brand" 
                ratio="1"
            />
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
                        size="1.3em"
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
        prod: Object,
        link: String
    }
}
</script>

<style lang="scss" scoped>
@import "../../css/toem.scss";

.product-item {
    background-color: #fff;

    &__top {
        border-bottom: 2px solid $body-color;
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;

        .q-img {
            cursor: pointer;
        }

        .product-item__image {
            text-decoration: none;

            img {
                max-width: 250px;
                max-height: 250px;
                object-fit: contain;
                transform: scale(.9);
            }
        }

        @media screen and (max-width: 1367px) {
            width: 100%;
            height: inherit;

            .product-item__image {
                img {
                    max-width: 100%;
                    height: auto;
                }
            }
        }
    }

    &__bottom {
        padding: toem(10px);

        .product-item__info {
            line-height: toem(18px);
            overflow: hidden;

            .product-item__name,
            .product-item__desc {
                font-size: 0.9375rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: $black;
                // max-width: 11.875rem;
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
                    font-size: toem(25px);
                }
                .product-item__prev {
                    color: $black;
                    opacity: 0.4;
                    font-size: toem(16px);
                    text-decoration: line-through;
                }
            }

            .product-item__action {
                justify-self: flex-end;
                display: grid;
                grid-row-gap: 8px;

                .q-btn {
                    background-color: $brand-light !important;
                    white-space: nowrap;
                    font-size: 0.9375rem;
                    min-width: 6.25rem;

                    .q-btn__wrapper {
                        min-height: 1.875rem;
                        padding: 0 !important;
                    }
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

        @media screen and (max-width: 1367px) {
            .product-item__info {
                // font-size: 14px;
            }

            .product-item__order {
                .product-item__price {
                    .product-item__current {
                        font-size: 18px;
                    }
                    .product-item__prev {
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>
