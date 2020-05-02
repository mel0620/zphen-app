<template>
    <div class="my-account-section my-reviews-section">
        <div class="my-account-section__header">
            <div class="my-account-section__title">My Reviews</div>
            <div class="my-account-section__actions"></div>
        </div>
        <div class="my-account-section__body">
            <div class="my-reviews">
                <div class="review">
                    <review-loader v-if="is_loading"/>
                    <div v-else class="review__item" v-for="n in 6" :key="n">
                        <div class="review__image">
                            <q-img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg"
                                spinner-size="2rem"
                                spinner-color="brand"
                                ratio="1"
                            />
                        </div>
                        <div class="review__prod-name ">Product Name Pallentesque diam tempor reon</div>
                        <div class="review__sold-by">
                            <div class="review__label">Sold by:</div>
                            <div class="review__value ellipsis">Company Name</div>
                        </div>
                        <div class="review__ratings">
                            <div class="review__label">Product review:</div>
                            <q-rating
                                v-model="prod_review_rating"
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
                        <div class="review__ratings">
                            <div class="review__label">Seller review:</div>
                            <q-rating
                                v-model="seller_review_rating"
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
                        <div class="review__comment">
                            Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at,
                        </div>
                    </div>
                </div>
                <div v-if="!is_loading" class="q-pt-lg flex justify-end">
                    <q-pagination
                        v-model="pagination"
                        :max="5"
                        :direction-links="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "./MyReviews.scss"
const ReviewLoader = () => import(/*webpackChunkname: "ReviewLoader" */ "components/ReviewLoader/ReviewLoader")

export default {
    name: 'MyReviews',
    components: {
        ReviewLoader
    },
    data: () => ({
        is_loading: true,
        pagination: 2,
        prod_review_rating: 4,
        seller_review_rating: 4,
    }),
    mounted() {
        setTimeout(() => {
            this.is_loading = false
        },3000) 
    }
}
</script>