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