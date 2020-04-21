<template>
    <div class="ads">
        <a :href="link" class="ads__item" :style="`background-image: url('${ image_url }')`"></a>
    </div>
</template>

<script>
import "./AdsVariantOne.scss"

export default {
    name: 'Advertisement',
    props: {
        image_url: String,
        link: String,
    }
}
</script>

<style lang="scss">
.ads-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 90px;
    grid-gap: 0.625rem;
    
    @media screen and (max-width: 512px) {
        grid-template-columns: 1fr;
    }
}
</style>