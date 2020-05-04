<template>
    <q-page class="product-view-page container">
        <!-- PRODUCT VIEW -->
        <section class="product-view">
            <div class="product-display">
                <div class="product-display-swiper">
                    <div class="swiper-container gallery-top">
                        <div class="swiper-wrapper">
                            <div v-for="(img, index) in product_images" :key="index" class="swiper-slide">
                                <img :data-src="img.image_url" class="swiper-lazy" alt="">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                        </div>
                    </div>
                    <div class="relative-position">
                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                                <div v-for="(img, index) in product_images" :key="index" class="swiper-slide">
                                    <img :data-src="img.image_url" class="swiper-lazy" alt="">
                                    <div class="swiper-lazy-preloader"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next swiper-button-custom"></div>
                        <div class="swiper-button-prev swiper-button-custom"></div>
                    </div>
                </div>
                <div class="product-display-info">
                    <div class="product-name">Product Name Pellentesque diam tempor reon</div>
                    <!-- <div class="product-desc">Adorama Nikon D5600 DSLR Camera w/DX 18-140mm f/3.5-56G ED VR Lens w/Premium Acc Bundle</div> -->
                
                    <div class="rating-share">
                        <div class="rating-holder">
                            <div class="z-star mt-2">
                                <q-rating
                                    v-model="rating"
                                    max="5"
                                    size="1.2em"
                                    color="brand"
                                    icon="star_border"
                                    icon-selected="star"
                                    icon-half="star_half"
                                    no-dimming
                                    readonly
                                    class="shadow-none"
                                />
                            </div> 
                            <div class="label">97 Ratings / 5 Reviews</div>
                        </div>
                        <a href="javascript:" class="btn-share justify-self-end text-black">
                            <span class="mdi mdi-share-variant"></span>
                        </a>
                    </div>

                    <div class="pricing">
                        <div class="price-current">₱ 24,000</div>
                        <div class="price-prev-and-discount">
                            <span class="price-prev">₱ 42,000 </span>&nbsp;<span class="price-discount"> - 60% off</span>
                        </div>
                    </div>

                    <div class="actions">
                        <div class="grid-column-2">
                            <q-select v-model="color_variant_select" 
                                filled dense options-dense color="brand"
                                label="Color Variant"
                                :options="['Black', 'Gray']">
                            </q-select>
                            <q-select v-model="size_select" 
                                filled dense options-dense color="brand"
                                label="Size"
                                :options="['Small', 'Medium', 'Large']">
                            </q-select>
                        </div>
                        <div class="grid-wrapper">
                            <div class="grid-column-2 q-mt-md">
                                <div class="counter">
                                    <button>
                                        <i class="mdi mdi-minus"></i>
                                    </button>
                                    <input type="number" value="1">
                                    <button>
                                        <i class="mdi mdi-plus"></i>
                                    </button>
                                </div>
                                <div class="stock">
                                    <div class="stock__chip">180</div>
                                    <div class="stock__label">Stock/s available</div>
                                </div>
                            </div>
                            <div class="grid-column-2 items-end btn-actions">
                                <q-btn no-caps color="brand" outline label="Add to Cart"></q-btn>
                                <q-btn no-caps color="brand" unelevated label="Buy Now"></q-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-shipping">
                <div class="list">
                    <div class="list__item">
                        <div class="list__icon">
                            <span class="mdi mdi-map-marker"></span>
                        </div>
                        <div class="list__text">
                            <div class="list__header">Deliver & Shipped to</div>
                            <div class="list__content">Metro Manila,
                                Parañaque City, Brgy, San Isidro
                            </div>
                        </div>
                        <div class="list__action">
                            <a href="javascript:" class="text-link">
                                <span class="mdi mdi-pencil"></span>
                                EDIT
                            </a>
                        </div>
                    </div>
                    <div class="list__item">
                        <div class="list__icon">
                            <span class="mdi mdi-credit-card-outline"></span>
                        </div>
                        <div class="list__text">
                            <div class="list__header">Payment Options Available</div>
                            <div class="list__content">Cash on Delivery
                                Cash on Pick-up
                                Online Payment
                            </div>
                        </div>
                    </div>
                    <div class="list__item">
                        <div class="list__icon">
                            <span class="mdi mdi-tag"></span>
                        </div>
                        <div class="list__text">
                            <div class="list__header">Return & Warranty</div>
                            <div class="list__content">7 days return to seller
                                Change of mind is not applicable
                                Warranty not available
                            </div>
                        </div>
                    </div>
                    <div class="list__item">
                        <div class="list__icon">
                            <span class="mdi mdi-store"></span>
                        </div>
                        <div class="list__text">
                            <div class="list__header">Vendor Details</div>
                            <div class="list__content">Company Vendor Name

                                Metro Manila,
                                Quezon City, Quezon City, Project 6

                                <div><span class="fw-regular">Email:</span> company@zphen.com</div>
                                <div><span class="fw-regular">Mobile:</span> 09171125808</div>
                                <div><span class="fw-regular">Landline:</span> 1234567</div>
                            </div>
                        </div>
                        <div class="list__action">
                            <a href="javascript:" class="text-link">
                                <span class="mdi mdi-phone"></span>
                                CALL NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="product-others-info">
            <div class="product-view-sections">
                <section class="product-view-section product-details">
                    <div class="section-header">
                        <div class="section-header__title">Product Details</div>
                    </div>
                    <div class="section-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates, ipsam, vitae earum reiciendis quis magnam debitis repellat fuga minima assumenda! Eveniet delectus quasi eos, quis alias libero officiis quas maxime tempora harum minus animi, assumenda atque eaque tempore facere debitis eligendi vel quisquam quaerat? Doloribus necessitatibus quam expedita est ipsam laborum repellat molestiae quaerat. Deserunt totam ducimus hic facilis sed, aliquid porro velit quos eum. Repellat voluptas error voluptate similique, odio expedita omnis laborum necessitatibus in illo! Veniam velit ipsa ipsum enim repellendus provident nihil incidunt sit voluptates neque, doloremque error. Molestias odit voluptatem facere voluptates harum ad incidunt.</p>

                        <div class="image-container">
                            <img src="https://live.staticflickr.com/2596/32938264502_1919dd4f65_b.jpg" alt="">
                        </div>
                    </div>
                </section>
                <section class="product-view-section product-rating">
                    <div class="section-header">
                        <div class="section-header__title">Product Rating</div>
                    </div>
                    <div class="section-body flex items-center">
                        <div class="rating-wrapper">
                            <div class="content">
                                <div class="value">4.5<span>/5</span></div>
                                <div class="rating-holder">
                                    <q-rating
                                        v-model="rating"
                                        max="5"
                                        size="2em"
                                        color="brand"
                                        icon="star_border"
                                        icon-selected="star"
                                        icon-half="star_half"
                                        no-dimming
                                        readonly
                                        class="shadow-none"
                                    />
                                </div>
                                <div class="text">97 ratings</div>
                            </div>
                            <div class="content">
                                <div class="rating-with-bar-wrapper">
                                    <div class="rating-with-bar" v-for="(item, index) in ratings" :key="index">
                                        <div class="rating-holder">
                                            <q-rating
                                                v-model="item.rate"
                                                max="5"
                                                size="1.3em"
                                                color="brand"
                                                icon="star_border"
                                                icon-selected="star"
                                                icon-half="star_half"
                                                no-dimming
                                                readonly
                                                class="shadow-none"
                                            />
                                        </div>
                                        <div class="bar-holder">
                                            <div class="z-bar">
                                                <div class="z-bar-progress" :data-c-progress-value="item.percentage"></div>
                                            </div>
                                        </div>
                                        <div class="rating-value">{{ item.percentage }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="product-view-section product-review">
                    <div class="section-header">
                        <div class="section-header__title">Product Review</div>
                    </div>
                    <div class="section-body">
                        <div class="review-wrapper">
                            <div class="review-item" v-for="n in 5" :key="n">
                                <div class="review-item__header">
                                    <div class="left">
                                        <q-rating
                                            v-model="rating"
                                            max="5"
                                            size="1.3em"
                                            color="brand"
                                            icon="star_border"
                                            icon-selected="star"
                                            icon-half="star_half"
                                            no-dimming
                                            readonly
                                            class="shadow-none"
                                        />
                                        <div class="reviewer">John Doe</div>
                                    </div>
                                    <div class="right">2 Weeks ago</div>
                                </div>
                                <div class="review-item__body">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ratione, aperiam iste quos nesciunt maxime nemo doloribus cumque. Recusandae, vero eligendi quisquam cumque, fugiat accusamus itaque quam pariatur earum maxime placeat ab doloremque laborum libero eaque doloribus vitae impedit? Aliquam illum non, similique dignissimos consectetur iste nulla neque optio fugit.</p>

                                    <div class="media-wrapper">
                                        <a class="media" target="_blank" href="https://cnet3.cbsistatic.com/img/qhohkY6EeDYWs1xoyHCiE6tDCeM=/868x488/2017/10/10/0b2a6d82-8284-4209-90ae-7cab09d3cd81/14-nikon-d5600.jpg">
                                            <q-img src="https://cnet3.cbsistatic.com/img/qhohkY6EeDYWs1xoyHCiE6tDCeM=/868x488/2017/10/10/0b2a6d82-8284-4209-90ae-7cab09d3cd81/14-nikon-d5600.jpg"
                                            ratio="1" style="height: 100px" spinner-color="brand" spinner-size="1rem" alt=""/>
                                        </a>
                                        <a class="media" target="_blank" href="https://3.img-dpreview.com/files/p/E~TS590x393~articles/6109279344/d5600_handson_01.jpeg">
                                            <q-img src="https://3.img-dpreview.com/files/p/E~TS590x393~articles/6109279344/d5600_handson_01.jpeg"
                                            ratio="1" style="height: 100px" spinner-color="brand" spinner-size="1rem" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="ads">
                <div class="ads__item">
                    <div class="ads__item-provider">
                        <div>Ad</div>
                        <div>Google ads</div>
                    </div>
                </div>
                <div class="ads__item">
                    <div class="ads__item-provider">
                        <div>Ad</div>
                        <div>Zphen ads</div>
                    </div>
                </div>
                <div class="ads__item">
                    <div class="ads__item-provider">
                        <div>Ad</div>
                        <div>Zphen ads</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="may-also-like q-mt-md">
            <header class="section-header">
                <div class="section-title">YOU MAY ALSO LIKE</div>
                <a class="section-action" href="javascript:">See all <span class="mdi mdi-chevron-right"></span></a>
            </header>
            <div class="product-wrapper">
                <product-item
                    v-for="(prod, index) in products" 
                    :key="index" 
                    :prod="prod"
                    link="/product-details"
                />
            </div>
            <div class="d-flex justify-center q-py-md q-mt-xl">
                <q-btn class="btn-load-more" unelevated color="brand" label="Load more"></q-btn>
            </div>
        </section>
    </q-page>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import "./ProductDetails.scss"
const ProductItem = () => import(/*webpackChunkname: "ProductItem" */ "components/ProductCardItem/ProductCardItem")

export default {
    name: 'ProductDetails',
    components: {
        ProductItem
    },
    data: () => ({
        color_variant_select: '',
        size_select: '',
        rating: 3.4,
        ratings: [
            { rate: 5, percentage: 45 },
            { rate: 4, percentage: 32 },
            { rate: 3, percentage: 23 },
            { rate: 2, percentage: 18 },
            { rate: 1, percentage: 2 },
        ],
        product_images: [
            { image_url: 'https://static.bhphoto.com/images/images500x500/1484050840_1308819.jpg'},
            { image_url: 'https://www.dpreview.com/files/p/E~products/nikon_d5600/shots/044f2162cc054a10a4aa442ed1f4a1da.png'},
            { image_url: 'https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8go_p7JUL6JpQM8B_IxDfxyg==/Views/1575_D5600_back.png'},
            { image_url: 'https://www.bhphotovideo.com/images/images2000x2000/nikon_d5600_dslr_camera_with_1308913.jpg'},
            { image_url: 'https://www.adorama.com/images/Large/inkd5600bk1b.jpg'},
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
    mounted() {
        let galleryThumbs = new Swiper('.gallery-thumbs', {
            lazy: true,
            spaceBetween: 8,
            slidesPerView: 4,
            // freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        let galleryTop = new Swiper('.gallery-top', {
            lazy: true,
            spaceBetween: 10,
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }
}
</script>