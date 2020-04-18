<template>
    <q-page class="my-cart-page container">
        <div class="my-cart-wrapper">
            <section class="my-cart">
                <div class="my-cart__header">
                    <div class="my-cart__header-text">My Cart</div>
                    <div class="my-cart__header-actions">
                        <q-btn outline dense class="q-px-sm" color="info" label="SELECT ALL (6) ITEMS"></q-btn>
                        <q-btn outline dense class="q-px-sm q-ml-md" color="info" icon="mdi-trash-can-outline" label="DELETE"></q-btn>
                    </div>
                </div>
                <div class="my-cart__body">
                    <div class="cart-item" v-for="n in 2" :key="n">
                        <div class="cart-item__header">
                            <q-checkbox v-model="vendor_name"
                                keep-color dense
                                color="brand"
                                label="Vendor Name"
                                class="text-brand"
                            />
                            <div class="cart-item__labels">
                                <div class="cart-item__label">Price</div>
                                <div class="cart-item__label">Quantity</div>
                            </div>
                        </div>
                        <div class="cart-item__content">
                            <div class="cart-item__list" v-for="n in 3" :key="n">
                                <q-checkbox v-model="vendor_name" keep-color dense color="brand"/>
                                <q-img
                                    src="https://static.bhphoto.com/images/images500x500/1484050840_1308819.jpg"
                                    spinner-color="brand" ratio="1"
                                    style="width: 100px"
                                    spinner-size="25px"
                                />
                                <div class="cart-item__product-info">
                                    <div class="cart-item__prod-name">Product Name</div>
                                    <div class="cart-item__prod-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam!</div>
                                    <div class="cart-item__prod-others">
                                        <div>Product Type</div>
                                        <div>Product Brand</div>
                                    </div>
                                </div>
                                <div class="cart-item__prod-price">
                                    <div class="cart-item__current-price">₱ 785</div>
                                    <div class="cart-item__prev-price">₱ 1,285</div>
                                </div>
                                <div class="cart-item__counter">
                                    <button v-ripple>
                                        <i class="mdi mdi-minus"></i>
                                    </button>
                                    <input type="number" value="1" readonly>
                                    <button v-ripple>
                                        <i class="mdi mdi-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="my-cart-summary">
                <div class="list-item-wrapper">
                     <div class="list-item">
                        <div class="list-item__top">
                            <div class="list-item__icon">
                                <q-icon size="1.2em" name="mdi-map-marker"></q-icon>
                            </div>
                            <div class="list-item__delivery">
                                <div>Deliver & Shipped to</div>
                                <p>Metro Manila, Parañaque City, Brgy. San Isidro</p>
                            </div>
                            <div class="list-item__action">
                                <button v-ripple class="btn-edit">
                                    <q-icon size="1.5em" name="mdi-pencil"></q-icon>
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div class="list-item__center">
                            <div class="label">ORDER SUMMARY</div>
                            <div class="total-holder">
                                <div class="total-item">
                                    <div class="total-item__label">Subtotal (6 items)</div>
                                    <div class="total-item__value">₱ <b>4,710</b>.00</div>
                                </div>
                                <div class="total-item">
                                    <div class="total-item__label">Transaction Fee 1%</div>
                                    <div class="total-item__value">₱ <b>47</b>.1</div>
                                </div>
                            </div>
                            <div class="grand-total-holder">
                                <div class="total-item">
                                    <div class="total-item__label">Total:</div>
                                    <div class="total-item__value">₱ <b>4,757</b>.1 <br/><div class="caption">VAT included, where applicable</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <q-btn color="brand" unelevated class="full-width" label="Proceed to checkout"></q-btn>
                </div>
            </section>
        </div>

        <section class="you-may-also-like">
            <header class="section-header">
                <div class="section-title">YOU MAY ALSO LIKE</div>
                <a class="section-action" href="javascript:">See all <span class="mdi mdi-chevron-right"></span></a>
            </header>
            <div class="product-wrapper">
                <product-item 
                    v-for="(prod, index) in products" 
                    :key="index" 
                    :prod="prod"
                />
            </div>
            <div class="d-flex justify-center q-py-md q-mt-xl">
                <q-btn class="btn-load-more" unelevated color="brand" label="Load more"></q-btn>
            </div>
        </section>

    </q-page>
</template>

<script>
import "./MyCart.scss"
const ProductItem = () => import(/*webpackChunkname: "ProductItem" */ "components/ProductCardItem/ProductCardItem")

export default {
    name: 'MyCart',
    components: {
        ProductItem
    },
    data: () => ({
        vendor_name: true,
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
    })
}
</script>