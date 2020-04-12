<template>
	<q-layout view="lHh Lpr lFf">
		<q-header>
			<q-toolbar class="bg-white main-header q-pa-none">
				<div class="c-container">
					<div class="header-toolbar">
						<div class="header-toolbar__brand">
							<a href="/" class="d-flex">
								<img width="150px" src="statics/brand.svg" alt="">
							</a>
						</div>
						<div class="header-toolbar__center-actions">
							<div class="search">
								<input type="text" placeholder="Search in zphen..." class="search__input">
								<button class="search__btn">
									<span class="mdi mdi-magnify"></span>
								</button>
							</div>
							<div class="actions">
								<div class="cart">
									<a href="javascript:" class="cart__dropdown">
										My Cart <span class="mdi mdi-menu-down"></span>
									</a>
									<a href="javascript:" class="cart__add">
										<span class="mdi mdi-cart"></span>
										<div class="round-icon">
											<!-- <span class="value">20</span> -->
											<span class="mdi mdi-plus"></span>
										</div>
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
															<img :src="cart.prod_img_url" alt="">
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
											<!-- <button class="cart__action">ADD ITEMS TO PROCEED</button> -->

											<q-btn unelevated color="brand" class="full-width"  label="Proceed to checkout"></q-btn>
											<!-- <button class="cart__action">PROCEED TO CHECKOUT</button> -->
										</div>
									</div>
								</div>
								<a class="notif" href="javascript:">
									<span class="mdi mdi-bell"></span>
									<div class="round-icon">
										<span class="mdi mdi-plus"></span>
									</div>
								</a>
							</div>
						</div>
						
						<!-- VISITOR -->

						<div class="header-toolbar__right-actions">
							<a href="/register">Sign up</a>
							<span class="q-mx-sm separator">|</span> 
							<a href="/login">
								<span>Login</span>
								<span class="mdi mdi-account-circle"></span>
							</a>
						</div>

						<!-- LOGGED IN -->

						<!-- <div class="header-toolbar__is-logged-in">
							<div class="user">
								<a class="user__dropdown" href="javascript:">John Doe <span class="mdi mdi-account-circle"></span></a>
								<div class="user__menu">
									<ul>
										<li><a href="javascript:">My Profile</a></li>
										<li><a href="javascript:">My Orders</a></li>
										<li><a href="javascript:">My Reviews</a></li>
										<li><a href="javascript:">Sell Items</a></li>
										<li><a href="javascript:">Logout</a></li>
									</ul>
								</div>
							</div>
						</div> -->
					</div>
				</div>
			</q-toolbar>
		</q-header>

		<q-page-container style="padding-bottom: 3.125rem;" class="bg-light">
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
                            <a href="javascript:">
                                <img src="statics/facebook.svg" alt="">
                            </a>
                            <a href="javascript:">
                                <img src="statics/instagram.svg" alt="">
                            </a>
                            <a href="javascript:">
                                <img src="statics/twitter.svg" alt="">
                            </a>
                            <a href="javascript:">
                                <img src="statics/linkedin.svg" alt="">
                            </a>
                            <a href="javascript:">
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
                    <div class="footer-nav footer-nav--center">
                        <div class="footer-nav__title">Payment Methods</div>
                        <div class="social">
                            <a href="javascript:">
                                <img class="img-fluid" src="statics/phil.png" alt="">
                            </a>
                            <a href="javascript:">
                                <img class="img-fluid" src="statics/sing.png" alt="">
                            </a>
                            <a href="javascript:">
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
		is_select_all: false,
		is_select_item_on_cart: false,
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
			{ link_title: 'Help Center', link: ''},
			{ link_title: 'How to Buy', link: ''},
			{ link_title: 'Shipping and Delivery', link: ''},
			{ link_title: 'International Product Policy', link: ''},
			{ link_title: 'How to Return', link: ''},
			{ link_title: 'Question', link: ''},
			{ link_title: 'Contact Us', link: ''},
		],
		zphen_options: [
			{link_title: 'About Zphen', link: ''},
			{link_title: 'Careers', link: ''},
			{link_title: 'Terms and Conditions', link: ''},
			{link_title: 'Privacy Policy', link: ''},
			{link_title: 'Cookies Notice', link: ''},
			{link_title: 'Press & Media', link: ''},
			{link_title: 'Intellectual Property Protection', link: ''},
		]
	}),
};
</script>
