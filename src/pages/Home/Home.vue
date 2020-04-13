<template>
    <q-page class="container">
        <!-- HERO SECTION -->
        <section class="hero-section">
            <div class="categories">
                <!-- TODO: SUB CATEGORIES -->
                <div class="categories__label">Categories</div>
                <ul class="categories__items custom-scroll" 
                    @mouseover="is_display_sub_cat = true"
                    @mouseleave="is_display_sub_cat = false"
                >
                    <li v-for="(cat, index) in categories_options" :key="index" class="categories__item">
                        <a class="categories__item-link" href="javascript:">
                            <span class="text">{{ cat.cat_name }}</span>
                            <span class="mdi mdi-chevron-right"></span>
                        </a>
                    </li>
                    <ul class="sub-category custom-scroll" :class="is_display_sub_cat ? 'active' : ''">
                        <li v-for="n in 20" :key="n" class="sub-category__item">
                            <a class="sub-categories__item-link" href="javascript:">
                                <span class="text">Sub category {{ n }}</span>
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
            <div class="product-slider">
                <!-- Swiper -->
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div v-for="(banner, index) in banner_options" :key="index" class="swiper-slide" 
                            :style="`background-image: url('${ banner.banner_image_url }')`"></div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="others">
                <div class="card-item">
                    <div class="card-item__content">

                    </div>
                    <div class="card-item__bottom-action">
                        <a href="javascript:" @click="$router.push('/be-a-vendor')">Be a vendor</a>
                    </div>
                </div>
                <div class="card-item">
                    <div class="card-item__content">

                    </div>
                    <div class="card-item__bottom-action">
                        <a href="javascript:">Sell Used Items</a>
                    </div>
                </div>
                <div class="card-item">
                    <div class="card-item__content">

                    </div>
                    <div class="card-item__bottom-action">
                        <a href="javascript:">Shop now</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- END HERO SECTION -->

        <!-- ADS SECTION -->
        <section class="ads-section">
            <ads v-for="(item, index) in ads" :key="index" :image_url="item.image_url"></ads>
        </section>
        <!-- END ADS SECTION -->

        <!-- ACCREDITATION SECTION -->
        <section class="accreditation">
            <div class="label">Available slots for free Accreditation</div>
            <!-- <button class="btn-inquire">INQUIRE</button> -->
            <q-btn unelevated color="brand" label="Inquire"></q-btn>
        </section>
        <!-- END ACCREDITATION SECTION -->

        <!-- FEATURE PRODUCTS SECTION -->
        <section class="feature-products">
            <header class="section-header">
                <div class="section-title">FEATURED PRODUCTS</div>
                <a class="section-action" href="javascript:">See all <span class="mdi mdi-chevron-right"></span></a>
            </header>
            <div class="product-wrapper">
                <product-item 
                    v-for="(prod, index) in products" 
                    :key="index" 
                    :prod="prod"
                />
            </div>
        </section>
        <!-- END FEATURE PRODUCTS SECTION -->

        <!-- FEATURE PRODUCTS SECTION -->
        <section class="most-popular">
            <header class="section-header">
                <div class="section-title">MOST POPULAR</div>
                <a class="section-action" href="javascript:">See all <span class="mdi mdi-chevron-right"></span></a>
            </header>
            <div class="product-wrapper">
                <product-item 
                    v-for="(prod, index) in products" 
                    :key="index" 
                    :prod="prod"
                />
            </div>
            <div class="d-flex justify-center q-py-md q-mt-lg">
                <q-btn style="min-width: 250px" unelevated color="brand" label="Load more"></q-btn>
            </div>
        </section>
        <!-- END FEATURE PRODUCTS SECTION -->

        <!-- BUILD, RENOVATE, PROJECTS SECTION -->
        <section class="grid">
            <div class="grid__item">
                <div class="label">Build</div>
            </div>
            <div class="grid__item">
                <div class="label">Renovate</div>
            </div>
            <div class="grid__item">
                <div class="label">Projects</div>
            </div>
        </section>
        <!-- END BUILD, RENOVATE, PROJECTS SECTION -->

    </q-page>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import "./Home.scss"

const Ads = () => import(/*webpackChunkname: "Ads" */ "components/AdsVariantOne/AdsVariantOne")
const ProductItem = () => import(/*webpackChunkname: "ProductItem" */ "components/ProductCardItem/ProductCardItem")

export default {
    name: 'Home',
    components: {
        Ads, ProductItem
    },
    data: () => ({
        is_display_sub_cat: false,
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
        banner_options: [
            {
                banner_image_url: 'https://image.freepik.com/free-vector/cosmetic-spray-bottle-banner-beauty-product_33099-2072.jpg',
                link: ''
            },
            {
                banner_image_url: 'https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg?size=626&ext=jpg',
                link: ''
            },
            {
                banner_image_url: 'https://avartanslider.com/wp-content/uploads/2016/01/product-slider.png',
                link: ''
            },
            {
                banner_image_url: 'https://i.pinimg.com/originals/03/11/62/0311622466bc4c9406c411cc8417888d.jpg',
                link: ''
            },
        ],
        ads: [
            {image_url: 'https://onlinecreative.org/wp-content/plugins/pushdownbanner/images/image-example.jpg', link: ''},
            {image_url: 'https://ghc.anitab.org/wp-content/uploads/sites/2/2017/08/example-banner-announcement-1.png', link: ''},
        ],
        products: [
            {
                prod_name: 'Nikon D5600',
                prod_desc: 'Adorama Nikon D5600 DSLR Camera w/DX 18-140mm f/3.5-56G ED VR Lens w/Premium Acc Bundle',
                prod_img_url: 'https://static.bhphoto.com/images/images500x500/1484050840_1308819.jpg',
                prod_price: '24,000',
                prod_prev_price: '42,000',
                prod_rating: 3.5
            },
            {
				prod_name: 'Nitro 5',
				prod_desc: 'Windows 10 Home Intel® Core™ i7-8750H processor Hexa-core 2.20 GHz',
				prod_img_url: 'https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Gallery/20190222/Acer-Nitro-5-AN515-54-photogallery-01.png',
				prod_price: '30,000',
                prod_prev_price: '50,000',
                prod_rating: 4
			},
            {
                prod_name: 'Nikon D5600',
                prod_desc: 'Adorama Nikon D5600 DSLR Camera w/DX 18-140mm f/3.5-56G ED VR Lens w/Premium Acc Bundle',
                prod_img_url: 'https://static.bhphoto.com/images/images500x500/1484050840_1308819.jpg',
                prod_price: '24,000',
                prod_prev_price: '42,000',
                prod_rating: 3.5
            },
            {
				prod_name: 'Nitro 5',
				prod_desc: 'Windows 10 Home Intel® Core™ i7-8750H processor Hexa-core 2.20 GHz',
				prod_img_url: 'https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Gallery/20190222/Acer-Nitro-5-AN515-54-photogallery-01.png',
				prod_price: '30,000',
                prod_prev_price: '50,000',
                prod_rating: 4
			},
            {
                prod_name: 'Nikon D5600',
                prod_desc: 'Adorama Nikon D5600 DSLR Camera w/DX 18-140mm f/3.5-56G ED VR Lens w/Premium Acc Bundle',
                prod_img_url: 'https://static.bhphoto.com/images/images500x500/1484050840_1308819.jpg',
                prod_price: '24,000',
                prod_prev_price: '42,000',
                prod_rating: 3.5
            },
        ]
    }),
    methods: {
        showSubCategories() {

        }
    },
    mounted() {
        let swiper = new Swiper('.swiper-container', {
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
}
</script>