<template>
    <q-page class="sign-up-page container">
        <section class="ads-section">
            <ads v-for="(item, index) in ads" :key="index" :image_url="item.image_url"></ads>
        </section>

        <section class="signup-wrapper">
            <div class="content-header">
                <div class="content-header__label">Create your Zphen Account</div>
                <div class="content-header__signup">Already a member? <a href="javascript:" @click="$router.push('/login')" class="text-link">LOGIN</a> here.</div>
            </div>
            <div class="content-body">
                <div class="tab-wrapper">
                    <q-tabs
						v-model="tab"
						dense
						class="text-grey"
						active-color="primary"
						indicator-color="primary"
						align="justify"
						no-caps
					>
						<q-tab :ripple="false" name="mobile" label="Sign up with Mobile" />
						<q-tab :ripple="false" name="email" label="Sign up with Email" />
                    </q-tabs>

                    <q-tab-panels v-model="tab" animated transition-next="fade" transition-prev="fade">
						<q-tab-panel :name="tab == 'email' ? 'email' : 'mobile'" class="q-pa-none">
							<div class="form-container">
								<div class="form-wrapper">
									<div v-if="tab == 'mobile'" class="form-group">
										<div class="label">Mobile Number</div>
										<q-input v-model="mobile_number_input" 
											placeholder="Please enter your phone number"
											filled
											dense
										>
										</q-input>
									</div>

									<div v-if="tab == 'email'" class="form-group">
										<div class="label">Email Address</div>
										<q-input v-model="email_address_input" 
											placeholder="Please enter your email"
											filled
											dense
										>
										</q-input>
									</div>

									<q-slide-item v-if="tab == 'mobile'" @left="onLeft" left-color="brand">
										<template v-slot:left>
											<q-icon name="done" />
										</template>

										<q-item>
											<q-item-section class="icon-holder bg-brand text-center" avatar>
												<img src="statics/arrow-right-double.svg" alt="">
											</q-item-section>
											<q-item-section class="slide-label">Slide to get SMS Code</q-item-section>
										</q-item>
									</q-slide-item>

									<div v-if="tab == 'email'" class="email-label-confirm">Check your email and click the confirmation link.</div>
									
									<div class="form-group q-mt-md">
										<div class="label">Password</div>
										<q-input v-model="password_input" type="password"
											placeholder="Minimum 6 character with a number and a letter"
											filled
											dense
										>
										</q-input>
									</div>

									<div class="form-group-custom q-mt-md">
										<div class="birthday">
											<label class="text-black" for="birthday">Birthday</label>
											<div class="date-group">
												<q-select v-model="month_select_option" 
													dense filled options-dense
													label="Month"
													:options="['January', 'February', 'March']">
												</q-select>
												<q-select v-model="day_select_option" 
													dense filled options-dense
													label="Day"
													:options="['1', '2', '2']">
												</q-select>
												<q-select v-model="year_select_option" 
													dense filled options-dense
													label="Year"
													:options="['1997', '1998', '1999']">
												</q-select>
											</div>
										</div>
										<div class="gender">
											<label class="text-black" for="birthday">Gender</label>
											<q-select v-model="gender_select_option" 
												dense filled options-dense 
												label="Gender"
												:options="['Male', 'Female']">
											</q-select>
										</div>
									</div>

								</div>
								<div class="form-wrapper column justify-between">
									<div>
										<div class="form-group">
											<div class="label">Full Name</div>
											<q-input v-model="full_name_input" 
												placeholder="Enter your full name"
												filled
												dense
											>
											</q-input>
										</div>
										<div class="q-mt-md">
											<q-checkbox v-model="receive_exclusive_offers_checkbox"
												keep-color dense color="brand"
												label="I want to receive exclusive offers and promotions from zphen.com"/>
										</div>
									</div>
									<div>
										<div class="text-center q-mb-md">By clicking "SIGN UP" I agree to ZPHEN <a class="text-link" href="javascript:">Privacy Policy</a></div>
										<q-btn unelevated class="full-width q-py-xs" color="brand" label="SIGN UP"></q-btn>
									</div>
								</div>
							</div>
						</q-tab-panel>
                    </q-tab-panels>
                </div>
                <div class="d-flex justify-center q-mt-md">
                    <div class="separator-text">OR SIGN UP WITH</div>
                </div>
                <div class="login-with">
                    <q-btn unelevated no-caps color="fb" icon="img:./statics/facebook-white.svg" label="Facebook"></q-btn>
                    <q-btn unelevated no-caps color="google-plus" icon="img:./statics/google.svg" label="Google"></q-btn>
                </div>
            </div>
        </section>
    </q-page>
</template>

<script>
// EXTERNAL CSS
import "./SignUp.scss"

// COMPONENTS LOAD ON DEMAND
const Ads = () => import(/*webpackChunkname: "advertisement" */ "components/AdsVariantOne/AdsVariantOne")

export default {
	name: 'SignUp',
	// COMPONENT REGISTER
    components: {
        Ads
    },
    data: () => ({
		tab: 'mobile',
		
		// INPUTS
		mobile_number_input: '',
		email_address_input: '',
		full_name_input: '',
		password_input: '',
		month_select_option: '',
		day_select_option: '',
		year_select_option: '',
		gender_select_option: '',

		receive_exclusive_offers_checkbox: false,
		
		// STATIC DATA
        ads: [
            {image_url: 'https://onlinecreative.org/wp-content/plugins/pushdownbanner/images/image-example.jpg', link: ''},
            {image_url: 'https://ghc.anitab.org/wp-content/uploads/sites/2/2017/08/example-banner-announcement-1.png', link: ''},
        ],
	}),
	methods: {
		onLeft ({ reset }) {
			this.$q.notify({
				message: 'A verification code is sent to your mobile number.',
				color: 'brand'
			})
			this.finalize(reset)
		},

		finalize (reset) {
			this.timer = setTimeout(() => {
				reset()
			}, 1000)
		}
	},
	beforeDestroy () {
		clearTimeout(this.timer)
	}
}
</script>