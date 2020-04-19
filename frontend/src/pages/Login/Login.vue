<template>
    <q-page class="container">

        <section class="ads-section">
            <ads v-for="(item, index) in ads" :key="index" :image_url="item.image_url"></ads>
        </section>

        <!-- LOGIN SECTION -->
        <section class="login-wrapper">
            <div class="content-header">
                <div class="content-header__label">Login your Account</div>
                <div class="content-header__signup">New member? <a href="javascript:" @click="$router.push('/signup')" class="text-link">SIGN UP</a> here.</div>
            </div>
            <div class="content-body">
                <form action="">
                    <div class="form-wrapper">
                        <div class="form-group q-mb-md">
                            <label class="text-black" for="number-email">Mobile Number or Email</label>
                            <q-input v-model="phone_or_email_input" 
                                placeholder="Please enter your phone number or email"
                                filled
                                dense
                            >
                            </q-input>
                        </div>
                        <div class="form-group">
                            <label class="text-black" for="password">Password</label>
                            <q-input v-model="password_input" 
                                type="password" 
                                placeholder="Minimum 6 characters with a number and a letter"
                                filled
                                dense
                            >
                            </q-input>
                            <div class="full-width text-center q-mt-sm">
                                <a href="javascript:" class="text-link italic">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    <div class="form-wrapper">
                        <div class="form-group">
                            <div class="spacer"></div>
                            <q-btn outline color="brand" class="full-width q-py-xs" label="I cannot login contact us"></q-btn>
                        </div>
                        <div class="form-group q-mt-lg q-pt-xs">
                            <q-btn unelevated color="brand" class="full-width q-py-xs" label="Login"></q-btn>
                        </div>
                    </div>
                </form>
                <div class="d-flex justify-center q-mt-md">
                    <div class="separator-text">OR LOGIN WITH</div>
                </div>
                <div class="login-with">
                    <q-btn unelevated no-caps color="fb" icon="img:./statics/facebook-white.svg" label="Facebook"></q-btn>
                    <q-btn unelevated no-caps color="google-plus" icon="img:./statics/google.svg" label="Google"></q-btn>
                </div>
            </div>
        </section>
        <!-- END LOGIN SECTION -->
    </q-page>
</template>

<script>
import "./Login.scss"

const Ads = () => import(/*webpackChunkname: "advertisement" */ "components/AdsVariantOne/AdsVariantOne")

export default {
    name: 'Login',
    components: {
        Ads
    },
    data: () => ({
        ads: [
            {image_url: 'https://onlinecreative.org/wp-content/plugins/pushdownbanner/images/image-example.jpg', link: ''},
            {image_url: 'https://ghc.anitab.org/wp-content/uploads/sites/2/2017/08/example-banner-announcement-1.png', link: ''},
        ],
        phone_or_email_input: '',
        password_input: ''
    })
}
</script>