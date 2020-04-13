<template>
    <q-page class="vendor-page container">
        <section class="c-card banner">
            <div class="banner__header">Be an online vendor at</div>
            <div class="banner__img-holder">
                <img class="img-fluid" src="statics/logo.png" alt="">
            </div>
            <div class="banner__tagline">Increase your retail sales online</div>
        </section>
        <section class="register-and-login">
            <div class="c-card">
                <div class="header-text">Create your free account now!</div>
                <div class="caption">Sell with 0% commission fee</div>
                <div class="caption">Free access to vendor dashboard and tools</div>
                <div class="caption">Sign up as either individual or corporate</div>
                <q-btn unelevated color="brand" label="Sign up now"></q-btn>
            </div>
            <div class="c-card">
                <div class="header-text">Already have an account!</div>
                <div class="caption">Manage your account</div>
                <div class="caption">Check you daily, weekly and monthly sales</div>
                <div class="caption">Receive your payment</div>
                <q-btn unelevated color="black" label="Login now"></q-btn>
            </div>
        </section>
        <section class="steps">
            <div class="c-card">
                <div class="header-text">SELL IN <b>5</b> EASY <b>STEPS</b></div>
                <div class="stepper">
                    <div class="stepper__step">
                        <div class="stepper__number">1</div>
                        <div class="stepper__label">Create vendor account</div>
                    </div>
                    <div class="stepper__step">
                        <div class="stepper__number">2</div>
                        <div class="stepper__label">Add Product</div>
                    </div>
                    <div class="stepper__step">
                        <div class="stepper__number">3</div>
                        <div class="stepper__label">Manage store</div>
                    </div>
                    <div class="stepper__step">
                        <div class="stepper__number">4</div>
                        <div class="stepper__label">Ship Product</div>
                    </div>
                    <div class="stepper__step">
                        <div class="stepper__number">5</div>
                        <div class="stepper__label">Receive Payment</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="subsription">
            <div class="c-card plan">
                <div class="plan__pricing">
                    <div class="plan__free"><b>FREE</b> PLAN</div>
                </div>
                <div class="plan__features">
                    <div class="plan__feature-list">- Online payment method</div>
                    <div class="plan__feature-list">- Option to deliver</div>
                    <div class="plan__feature-list">- Option for pick-up</div>
                    <div class="plan__feature-list">- Up to 50 products to add</div>
                    <div class="plan__feature-list">- Limited dashboard feature</div>
                </div>
                <div class="plan__action">
                    <div class="plan__caption">Start selling your products online and manage your store</div>
                    <q-btn unelevated color="brand" class="q-mt-md" label="CHOOSE THIS PLAN"></q-btn>
                </div>
            </div>
            <div class="c-card plan">
                <div class="plan__pricing">
                    <div class="plan__price">
                        <div class="plan__price-value">₱ <b>500</b>.00</div>
                        <div class="plan__price-subs">MONTHLY</div>
                        <div class="plan__price-subs">SUBSCRIPTION PLAN</div>
                    </div>
                </div>
                <div class="plan__features">
                    <div class="plan__feature-list">- Online payment method</div>
                    <div class="plan__feature-list">- Cash payment method</div>
                    <div class="plan__feature-list">- Option to deliver</div>
                    <div class="plan__feature-list">- Option for pickup</div>
                    <div class="plan__feature-list">- Unlimited products to add</div>
                    <div class="plan__feature-list">- Full dashboard access</div>
                </div>
                <div class="plan__action">
                    <div class="plan__caption">Access additional dashboard features and track your sales online.</div>
                   <q-btn unelevated color="brand" class="q-mt-md" label="CHOOSE THIS PLAN"></q-btn>
                </div>
            </div>
            <div class="c-card plan">
                <div class="plan__pricing">
                <div class="plan__price">
                        <div class="plan__price-value">₱ <b>5000</b>.00</div>
                        <div class="plan__price-subs">YEARLY</div>
                        <div class="plan__price-subs">SUBSCRIPTION PLAN</div>
                    </div>
                </div>
                <div class="plan__features">
                    <div class="plan__feature-list">- Online payment method</div>
                    <div class="plan__feature-list">- Cash payment method</div>
                    <div class="plan__feature-list">- Option to deliver</div>
                    <div class="plan__feature-list">- Option for pickup</div>
                    <div class="plan__feature-list">- Unlimited products to add</div>
                    <div class="plan__feature-list">- Full dashboard access</div>
                    <div class="plan__feature-list">- Free 2 months subscription</div>
                </div>
                <div class="plan__action">
                    <div class="plan__caption">Full access to all zphen platforms and enjoy discounted monthly subscription.</div>
                   <q-btn unelevated color="brand" class="q-mt-md" label="CHOOSE THIS PLAN"></q-btn>
                </div>
            </div>
        </section>
    </q-page>
</template>

<script>
import "./BeAVendor.scss"

export default {
    name: "BeAVendor",
    data: () => ({

    })
}
</script>