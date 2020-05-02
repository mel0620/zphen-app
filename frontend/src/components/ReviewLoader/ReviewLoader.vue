<template>
    <div class="review-loader">
        <div class="review-loader__item" v-for="n in 2" :key="n">
            <q-skeleton height="100px" square animation="fade" />
            <q-skeleton height="80px" type="text" animation="fade" />
            <q-skeleton height="80px" type="text" animation="fade" />
            <q-skeleton height="80px" type="text" animation="fade" />
            <q-skeleton height="80px" type="text" animation="fade" />
            <q-skeleton height="100px" square animation="fade"/>
        </div>
    </div>
</template>

<script>                                
export default {
    name: 'ReviewLoader'
}
</script>

<style lang="scss" scoped>
.review-loader {
    .review-loader__item {
        display: grid;
        grid-template-columns: 100px 130px 110px 100px 100px 365px;
        align-items: center;
        padding: 1.25rem 0;
        border-bottom: 1px solid #d1d1d1;
        margin-bottom: 10px;
        grid-gap: 30px;

        @media screen and (max-width: $breakpoint-md){
            grid-template-columns: 100px 130px 110px 100px 100px 1fr;
            grid-gap: 15px;
        }

        &:first-child {
            padding-top: 0;
        }
    }
}
</style>