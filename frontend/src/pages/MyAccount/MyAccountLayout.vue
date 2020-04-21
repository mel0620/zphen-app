<template>
    <q-page class="my-account-layout container">

        <!-- ADS SECTION -->
        <section class="ads-section">
            <ads v-for="(item, index) in ads" :key="index" :image_url="item.image_url"></ads>
        </section>
        <!-- END ADS SECTION -->

        <div class="my-account-wrapper">
            <div class="my-account-nav">
                <div class="my-account-nav__header">Manage My Account</div>
                <div class="my-account-nav__links">
                    <router-link :to="{ path: '/my-account/my-profile'}">My Profile</router-link>
                    <router-link :to="{ path: '/my-account/my-shipping-address'}">My Shipping Address</router-link>
                    <router-link :to="{ path: '/my-account/my-payment-details'}">My Payment Details</router-link>
                    <router-link :to="{ path: '/my-account/my-orders'}">My Orders</router-link>
                    <router-link :to="{ path: '/my-account/my-reviews'}">My Reviews</router-link>
                    <router-link :to="{ path: '/my-account/sell-items'}">Sell Items</router-link>
                </div>
            </div>
            <div class="my-account-content">
                <router-view/>
            </div>
        </div>
    </q-page>
</template>

<script>
import "./MyAccountLayout.scss"

// LOAD COMPONENT ON DEMAND
const Ads = () => import(/*webpackChunkname: "Ads" */ "components/AdsVariantOne/AdsVariantOne")

export default {
    name: 'MyAccountLayout',
    components: {
        Ads
    },
    data: () => ({
        ads: [
            {image_url: 'https://onlinecreative.org/wp-content/plugins/pushdownbanner/images/image-example.jpg', link: ''},
            {image_url: 'https://ghc.anitab.org/wp-content/uploads/sites/2/2017/08/example-banner-announcement-1.png', link: ''},
        ],
    })
}
</script>