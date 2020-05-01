<template>
    <div class="my-account-section my-orders-section">
        <div class="my-account-section__header">
            <div class="my-account-section__title">My Orders</div>
        </div>
        <div class="my-account-section__body">
            <div class="g-table">
                <div class="g-table__head">
                    <div class="g-table__row">
                        <div class="g-table__header">
                            SHOW: 
                            <q-select v-model="filter_select" 
                                :options="['All Orders', 'Delivered', 'Cancelled']" 
                                filled dense options-dense class="q-ml-sm"/>
                        </div>
                        <div class="g-table__header">Product</div>
                        <div class="g-table__header">Order #</div>
                        <div class="g-table__header">Quantity</div>
                        <div class="g-table__header">Status</div>
                        <div class="g-table__header">Date Delivered</div>
                        <div class="g-table__header">Price</div>
                    </div>
                </div>
                <div class="g-table__body">
                    <div class="g-table__row">
                        <div class="g-table__datas">
                            <div class="g-table__data g-table__data--column">
                                <div class="text-wrapper">
                                    <div class="label label--light label--brand">Placed On:</div>
                                    <div class="label">16 Jul 2019 17:48:37</div>
                                </div>
                                <div class="image-wrapper">
                                    <q-img spinner-color="brand" spinner-size="2rem" ratio="1" src="https://www.back2gaming.com/wp-content/uploads/2019/04/FX505-FX705.jpg"/>
                                </div>
                            </div>
                            <div class="g-table__data">
                                <div class="product-name">Product Name Pellentesque diam tempor reon</div>
                            </div>
                            <div class="g-table__data">
                                <div class="order-number">227230222814880</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="quantity">1</div>
                            </div>
                            <div class="g-table__data">
                                <div class="status status--delivered">Delivered</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="date">07 Sep 2019</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="price">₱ 785</div>
                            </div>
                        </div>
                        <div class="g-table__data-footer">
                            <div class="text-wrapper">
                                <div class="label">Sold by: <span>Company Name</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="g-table__row">
                        <div class="g-table__datas">
                            <div class="g-table__data g-table__data--column">
                                <div class="text-wrapper">
                                    <div class="label label--light label--brand">Placed On:</div>
                                    <div class="label">16 Jul 2019 17:48:37</div>
                                </div>
                                <div class="image-wrapper">
                                    <q-img spinner-color="brand" spinner-size="2rem" ratio="1" src="https://www.back2gaming.com/wp-content/uploads/2019/04/FX505-FX705.jpg"/>
                                </div>
                            </div>
                            <div class="g-table__data">
                                <div class="product-name">Product Name Pellentesque diam tempor reon</div>
                            </div>
                            <div class="g-table__data">
                                <div class="order-number">227230222814880</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="quantity">1</div>
                            </div>
                            <div class="g-table__data">
                                <div class="status status--delivered">Delivered</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="date">07 Sep 2019</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="price">₱ 785</div>
                            </div>
                        </div>
                        <div class="g-table__datas">
                            <div class="g-table__data g-table__data--column">
                                <div class="text-wrapper">
                                    <div class="label label--light label--brand">Placed On:</div>
                                    <div class="label">16 Jul 2019 17:48:37</div>
                                </div>
                                <div class="image-wrapper">
                                    <q-img spinner-color="brand" spinner-size="2rem" ratio="1" src="https://www.back2gaming.com/wp-content/uploads/2019/04/FX505-FX705.jpg"/>
                                </div>
                            </div>
                            <div class="g-table__data">
                                <div class="product-name">Product Name Pellentesque diam tempor reon</div>
                            </div>
                            <div class="g-table__data">
                                <div class="order-number">227230222814880</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="quantity">1</div>
                            </div>
                            <div class="g-table__data">
                                <div class="status status--delivered">Delivered</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="date">07 Sep 2019</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="price">₱ 785</div>
                            </div>
                        </div>
                        <div class="g-table__data-footer">
                            <div class="text-wrapper">
                                <div class="label">Sold by: <span>Company Name</span></div>
                                <div class="total"><div>Total:</div> <span>₱ 1570</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="g-table__row">
                        <div class="g-table__datas">
                            <div class="g-table__data g-table__data--column">
                                <div class="text-wrapper">
                                    <div class="label label--light label--brand">Placed On:</div>
                                    <div class="label">16 Jul 2019 17:48:37</div>
                                </div>
                                <div class="image-wrapper">
                                    <q-img spinner-color="brand" spinner-size="2rem" ratio="1" src="https://www.back2gaming.com/wp-content/uploads/2019/04/FX505-FX705.jpg"/>
                                </div>
                            </div>
                            <div class="g-table__data">
                                <div class="product-name">Product Name Pellentesque diam tempor reon</div>
                            </div>
                            <div class="g-table__data">
                                <div class="order-number">227230222814880</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="quantity">1</div>
                            </div>
                            <div class="g-table__data">
                                <div class="status status--cancelled">Cancelled</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="date">07 Sep 2019</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="price">₱ 785</div>
                            </div>
                        </div>
                        <div class="g-table__data-footer">
                            <div class="text-wrapper">
                                <div class="label">Sold by: <span>Company Name</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="g-table__row">
                        <div class="g-table__datas">
                            <div class="g-table__data g-table__data--column">
                                <div class="text-wrapper">
                                    <div class="label label--light label--brand">Placed On:</div>
                                    <div class="label">16 Jul 2019 17:48:37</div>
                                </div>
                                <div class="image-wrapper">
                                    <q-img spinner-color="brand" spinner-size="2rem" ratio="1" src="https://www.back2gaming.com/wp-content/uploads/2019/04/FX505-FX705.jpg"/>
                                </div>
                            </div>
                            <div class="g-table__data">
                                <div class="product-name">Product Name Pellentesque diam tempor reon</div>
                            </div>
                            <div class="g-table__data">
                                <div class="order-number">227230222814880</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="quantity">1</div>
                            </div>
                            <div class="g-table__data">
                                <div class="status status--cancelled">Cancelled</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="date">07 Sep 2019</div>
                            </div>
                            <div class="g-table__data text-center">
                                <div class="price">₱ 785</div>
                            </div>
                        </div>
                        <div class="g-table__data-footer">
                            <div class="text-wrapper">
                                <div class="label">Sold by: <span>Company Name</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="q-pt-lg flex justify-end">
                <q-pagination
                    v-model="pagination"
                    :max="5"
                    :direction-links="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
import "./MyOrders.scss"

export default {
    name: 'MyOrders',
    data: () => ({
        filter_select: 'All Orders',
        pagination: 2
    })
}
</script>