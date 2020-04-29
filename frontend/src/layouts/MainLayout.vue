<template>
	<q-layout view="lHh Lpr lFf">
		<q-header>
			<q-toolbar class="bg-white main-header q-pa-none">
				<div class="c-container">
					<div class="header-toolbar">

						<div class="header-toolbar__brand">
							<a href="/" class="d-flex">
								<img width="249px" height="54" src="statics/brand.png" alt="">
							</a>
						</div>

						<div class="header-toolbar__search">
							<div class="search">
								<input type="text" placeholder="Search in zphen..." class="search__input">
								<button class="search__btn">
									<q-icon size="1.5em" color="white" name="mdi-magnify"></q-icon>
								</button>
							</div>
						</div>

						<div class="header-toolbar__actions">
							<div class="actions">
								<div class="cart">
									<a href="javascript:" class="cart__dropdown">
										My Cart <span class="mdi mdi-menu-down"></span>
									</a>
									<div class="cart__dropdown-menu">
										<div class="cart__dropdown-header">
											<q-checkbox dark v-model="is_select_all" dense color="primary" label="Select All(2) Items" />
											<q-btn flat dense round icon="mdi-trash-can-outline"></q-btn>
										</div>

										<!-- IF NO ITEMS  -->

										<!-- <div class="cart__dropdown-content">
											<div class="no-items">No Items</div>
										</div> -->
										
										<!-- IF HAS ITEMS -->
										<div class="cart__dropdown-content custom-scroll">
											<div class="product-items">
												<div v-for="(cart, index) in cart_items" :key="index" class="product-item">
													<div class="product-item__check d-flex">
														<q-checkbox keep-color v-model="cart.is_selected" dense color="brand" />
													</div>
													<div class="product-item__preview">
														<div class="image-holder">
															<q-img :src="cart.prod_img_url"
																style="width: 60px"
																ratio="1"
																spinner-color="brand"
																spinner-size="20px"
															/>
															<!-- <img :src="cart.prod_img_url" alt=""> -->
														</div>
														<div class="prod-info">
															<div class="prod-info__top">
																<div class="prod-name">{{ cart.prod_name }}</div>
																<div class="prod-desc">{{ cart.prod_desc }}</div>
															</div>
															<div class="prod-info__bottom">
																<div class="price">
																	<div class="price__current">₱ {{ cart.prod_price }}</div>
																	<div class="price__prev">₱ {{ cart.prod_prev_price }}</div>
																</div>
																<div class="counter">
																	<button v-ripple @click="cart.prod_quantity++">
																		<i class="mdi mdi-plus"></i>
																	</button>
																	<input type="number" :value="cart.prod_quantity">
																	<button v-ripple @click="cart.prod_quantity--">
																		<i class="mdi mdi-minus"></i>
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="cart__dropdown-footer">
											<div class="cart__total">TOTAL: ₱ 54,000.00</div>

											<!-- NO ITEMS ON CART -->
											<q-btn unelevated color="brand" class="full-width"  label="Add items to proceed"></q-btn>

											<!-- <q-btn unelevated color="brand" class="full-width"  label="Proceed to checkout"></q-btn> -->
											<!-- <button class="cart__action">PROCEED TO CHECKOUT</button> -->
										</div>
									</div>
								</div>
								<a href="javascript:" class="cart__add">
									<q-icon size="1.2em" color="black" name="mdi-cart"></q-icon>
									<div class="round-icon">
										<!-- <span class="value">20</span> -->
										<span class="mdi mdi-plus"></span>
									</div>
								</a>
								<a class="notif" href="javascript:">
									<q-icon size="1.2em" color="black" name="mdi-bell"></q-icon>
									<div class="round-icon">
										<span class="mdi mdi-plus"></span>
									</div>
								</a>
							</div>

							<!-- VISITOR -->
							<!-- <div class="right-actions">
								<a href="javascript:" @click="$router.push('/signup')">Sign up</a>
								<q-separator style="background: #1e1e1e; height: 20px" class="q-mx-sm" vertical></q-separator>
								<a href="javascript:" @click="$router.push('/login')">
									<span>Login</span>
									<q-icon size="1.5em" name="mdi-account-circle"></q-icon>
								</a>
							</div> -->

							<!-- LOGGED IN -->

							<div class="right-actions__is-logged-in">
								<div class="user">
									<a class="user__dropdown" href="javascript:">Stephen Reon Francisco <q-icon size="1.5em" name="mdi-account-circle"></q-icon></a>
									<div class="user__menu">
										<ul>
											<li><router-link :to="{ path: '/my-account/my-profile'}">My Account</router-link></li>
											<li><a href="javascript:">My Orders</a></li>
											<li><a href="javascript:">My Reviews</a></li>
											<li><a href="javascript:">Sell Items</a></li>
											<li><a href="javascript:">Logout</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="$route.path !== '/'" class="container">
					<div class="header-toolbar-bottom">
						<div @click="is_category_visible = !is_category_visible" class="dropdown-categories">
							<div class="dropdown-category-cta bg-brand">
								<span>CATEGORIES</span>
								<i class="mdi mdi-menu-down"></i>
							</div>
							<div class="dropdown-category-content">
								<ul @mouseover="is_sub_cat_visible = true" 
									@mouseleave="is_sub_cat_visible = false" 
									v-show="is_category_visible" 
									class="categories__items custom-scroll"
								>
									<li v-for="(cat, index) in categories_options" :key="index" class="categories__item">
										<a class="categories__item-link" href="javascript:">
											<span class="text">{{ cat.cat_name }}</span>
											<span class="mdi mdi-chevron-right"></span>
										</a>
									</li>
									<ul class="sub-category custom-scroll" :class="is_sub_cat_visible ? 'active' : ''">
										<li v-for="n in 20" :key="n" class="sub-category__item">
											<a class="sub-categories__item-link" href="javascript:">
												<span class="text">Sub category {{ n }}</span>
											</a>
										</li>
									</ul>
								</ul>
							</div>
						</div>
						<div class="choose-location-wrapper d-flex items-center">
							<div class="label text-brand">CHOOSE LOCATION:</div>
							<q-select v-model="shipping_address_select" :options="['Login to select your shipping address:']" 
							filled dense options-dense color="brand"></q-select>
							<!-- <select class="z-input" name="" id="">
								<option value="">Login to select your shipping address:</option>
							</select> -->
						</div>
						<div class="other-actions">
							<a href="javascript:" @click="$router.push('/be-a-vendor')">Be a Vendor</a>
							<a href="javascript:" @click="$router.push('/login')">Sell used Items</a>
						</div>
					</div>
				</div>
			</q-toolbar>
		</q-header>

		<q-page-container class="bg-light">
			<router-view />
		</q-page-container>

		<footer class="footer">
            <div class="container">
                <div class="footer__top">
                    <div class="footer-nav">
                        <div class="footer-nav__title">Customer Care</div>
                        <ul class="footer-nav__links">
                            <li class="footer-nav__link" v-for="(link, index) in customer_care_options" :key="index">
								<a :href="link">{{ link.link_title }}</a>
							</li>
                        </ul>
                    </div>
                    <div class="footer-nav">
                        <div class="footer-nav__title">Zphen</div>
                        <ul class="footer-nav__links">
                            <li class="footer-nav__link" v-for="(link, index) in zphen_options" :key="index">
								<a :href="link">{{ link.link_title }}</a>
							</li>
                        </ul>
                    </div>
                    <div class="footer-nav">
                        <div class="footer-nav__title">Follow Us</div>
                        <div class="social">
                            <a class="q-pr-md" href="javascript:">
                                <img src="statics/facebook.svg" alt="">
                            </a>
                            <a class="q-pr-md" href="javascript:">
                                <img src="statics/instagram.svg" alt="">
                            </a>
                            <a class="q-pr-md" href="javascript:">
                                <img src="statics/twitter.svg" alt="">
                            </a>
                            <a class="q-pr-md" href="javascript:">
                                <img src="statics/linkedin.svg" alt="">
                            </a>
                            <a class="q-pr-md" href="javascript:">
                                <img src="statics/youtube.svg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="footer-nav">
                        <div class="footer-nav__title">Download the App</div>
                        <div class="social">
                            <a href="javascript:">
                                <img src="statics/download-android.png" alt="">
                            </a>
                            <a href="javascript:">
                                <img src="statics/download-ios.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom">
                    <div class="footer-nav">
                        <div class="footer-nav__title">Payment Methods</div>
                        <img class="img-fluid"  src="statics/payment-methods.png" alt="">
                    </div>
                    <div class="footer-nav footer-nav--end">
                        <div class="footer-nav__title">Available Countries</div>
                        <div class="social">
                            <a class="no-cursor" href="javascript:">
                                <img class="img-fluid" src="statics/phil.png" alt="">
                            </a>
                            <a class="no-cursor" href="javascript:">
                                <img class="img-fluid" src="statics/sing.png" alt="">
                            </a>
                            <a class="no-cursor" href="javascript:">
                                <img class="img-fluid" src="statics/kor.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="copyright">&copy; zphen 2019</div>
                </div>
            </div>
        </footer>
	</q-layout>
</template>

<script>
import "./MainLayout.scss"

export default {
	name: "MainLayout",
	data: () => ({
		is_category_visible: false,
		is_sub_cat_visible: false,
		is_select_all: false,
		is_select_item_on_cart: false,
		shipping_address_select: 'Login to select your shipping address:',
		cart_items: [
			{
				prod_name: 'Nikon D5600',
				prod_desc: 'Adorama Nikon D5600 DSLR Camera w/DX 18-140mm f/3.5-56G ED VR Lens w/Premium Acc Bundle',
				prod_price: '24,000',
				prod_prev_price: '40,000',
				prod_img_url: 'https://static.bhphoto.com/images/images500x500/1484050840_1308819.jpg',
				is_selected: false,
				prod_quantity: 0
			},
			{
				prod_name: 'Nitro 5',
				prod_desc: 'Windows 10 Home Intel® Core™ i7-8750H processor Hexa-core 2.20 GHz',
				prod_price: '30,000',
				prod_prev_price: '50,000',
				prod_img_url: 'https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Gallery/20190222/Acer-Nitro-5-AN515-54-photogallery-01.png',
				is_selected: false,
				prod_quantity: 0
			},
		],
		customer_care_options: [
			{ link_title: 'Customer Service', link: ''},
			{ link_title: 'How to Buy', link: ''},
			{ link_title: 'Shipping & Delivery', link: ''},
			{ link_title: 'Product Policy', link: ''},
			{ link_title: 'Payments', link: ''},
			{ link_title: 'How to Return', link: ''},
			{ link_title: 'Contact Us', link: ''},
		],
		zphen_options: [
			{link_title: 'About Zphen', link: ''},
			{link_title: 'Careers', link: ''},
			{link_title: 'Terms & Conditions', link: ''},
			{link_title: 'Privacy Policy', link: ''},
			{link_title: 'Cookie Notice', link: ''},
			{link_title: 'Press Release & Media', link: ''},
			{link_title: 'Intellectual Property', link: ''},
		],
		categories_options: [
            { 
                cat_name: 'Construction Materials',
                sub_categories: [
                    {
                        sub_cat_name: 'Sub Category One'
                    }
                ]
            },
            { 
                cat_name: 'Automotive',
                sub_categories: [
                    {
                        sub_cat_name: 'Lorem'
                    }
                ]
            },
            { cat_name: 'Motorcycle'},
            { cat_name: 'Computer'},
            { cat_name: 'Farm & Gardening'},
            { cat_name: 'Marine & Boating'},
            { cat_name: 'Gym and Sports'},
            { cat_name: 'Pet Accessories & Food'},
            { cat_name: 'Camping'},
            { cat_name: 'Home'},
            { cat_name: 'Office'},
            { cat_name: 'Manufacturing'},
            { cat_name: 'Tools & Equipment'},
            { cat_name: 'Cleaning Supplies'},
            { cat_name: 'Painting Supplies'},
            { cat_name: 'Welding'},
            { cat_name: 'Chemicals'},
            { cat_name: 'Medical Supplies'},
        ],
	}),
};
</script>
