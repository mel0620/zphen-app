<template>
    <div class="my-account-section my-account-section--my-shipping">
        <div class="my-account-section__header">
            <div class="my-account-section__title">My Shipping Address</div>
            <div v-if="is_add_address == false" class="my-account-section__actions">
                <q-btn @click="is_add_address = true" class="btn-action btn-action--add" outline dense color="info" label="Add new address" icon="img:./statics/add.svg"></q-btn>
                <q-btn class="btn-action q-ml-md" outline dense color="info" label="Edit" icon="mdi-pencil"></q-btn>
            </div>
        </div>
        <div class="my-account-section__body">
            <div class="my-shipping">
                <div>
                    <div class="form-group">
                        <div class="form-group__label">Full Name</div>
                        <div class="form-group__inputs">
                            <div class="text-preview">Stephen Reon Francisco</div>
                        </div>
                    </div>
                    <div class="form-group q-mt-lg">
                        <div class="form-group__label">Home Address</div>
                        <div class="lists">
                            <div class="list">
                                <div class="list__label">Unit no./Floor no./Blk no./Lot no./House/Building Name/Street</div>
                                <div class="list__value">213 Gemini St. Rainbow Village 2, UPS 5, Sucat Rd.</div>
                            </div>
                            <div class="list">
                                <div class="list__label">Province/City</div>
                                <div class="list__value">Metro Manila - Parañaque City</div>
                            </div>
                            <div class="list">
                                <div class="list__label">Barangay</div>
                                <div class="list__value">San Isidro</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group q-mt-lg">
                        <div class="form-group__label">Office Address</div>
                        <div class="lists">
                            <div class="list">
                                <div class="list__label">Unit no./Floor no./Blk no./Lot no./House/Building Name/Street</div>
                                <div class="list__value">213 Gemini St. Rainbow Village 2, UPS 5, Sucat Rd.</div>
                            </div>
                            <div class="list">
                                <div class="list__label">Province/City</div>
                                <div class="list__value">Metro Manila - Parañaque City</div>
                            </div>
                            <div class="list">
                                <div class="list__label">Barangay</div>
                                <div class="list__value">San Isidro</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <div class="form-group__label">
                            Mobile Number
                            <a class="text-link" href="javascript:">CHANGE</a>
                        </div>
                        <div class="form-group__inputs">
                            <div class="text-preview">(+63) 9171125808</div>
                        </div>
                    </div>  
                    <div class="form-group q-mt-lg">
                        <div class="form-group__label">
                            Email
                            <a class="text-link" href="javascript:">CHANGE</a>
                        </div>
                        <div class="form-group__inputs">
                            <div class="text-preview">stephenreonfrancisco@zphen.com</div>
                        </div>
                    </div> 
                </div>
            </div>
            <div v-if="is_add_address == true" class="my-shipping">
                <div>
                    <div class="form-group">
                        <div class="select-address">
                            <q-select filled dense v-model="select_address" :options="['Office Address','Home Address']"></q-select>
                            <q-input filled dense v-model="address_input" placeholder="Other"></q-input>
                        </div>
                    </div>
                    <div class="form-group q-mt-md">
                        <div class="form-group__label form-group__label--sm">Unit no./Floor no./Blk no./Lot no./House/Building Name/Street</div>
                        <div class="form-group__inputs">
                            <q-input filled dense hide-bottom-space v-model="full_name_input" />
                        </div>
                    </div>
                    <div class="form-group q-mt-md">
                        <div class="form-group__label form-group__label--sm">Province/City</div>
                        <div class="form-group__inputs">
                            <q-input filled dense hide-bottom-space v-model="province_input" />
                        </div>
                    </div>
                    <div class="form-group q-mt-md">
                        <div class="form-group__label form-group__label--sm">Barangay</div>
                        <div class="form-group__inputs">
                            <q-input filled dense hide-bottom-space v-model="brgy_input" />
                        </div>
                    </div>
                    <div class="address-actions">
                        <q-btn outline color="info" icon="mdi-trash-can-outline" label="Delete"></q-btn>
                        <q-btn @click="is_add_address = false" outline color="info" icon="mdi-content-save" label="Save"></q-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "./ShippingAddress.scss"

export default {
    name: 'MyShippingAddress',
    data: () => ({
        is_edit        : false,
        is_add_address : false,
        full_name_input: 'Stephen Reon Francisco',
        select_address : 'Office Address',
        address_input  : '',
        unit_no_input  : '213 Gemini St. Rainbow Village 2, UPS 5, Sucat Rd.',
        province_input : 'Metro Manila - Parañaque City',
        brgy_input     : 'San Isidro'
    })
}
</script>