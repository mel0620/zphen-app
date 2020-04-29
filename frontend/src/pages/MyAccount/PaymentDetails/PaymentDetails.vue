<template>
    <div class="my-account-section payment-details-section">
        <div class="my-account-section__header">
            <div class="my-account-section__title">My Payment Details</div>
            <div class="my-account-section__actions">
                <q-btn @click="is_edit = true" v-if="is_edit == false" class="btn-action" outline dense color="info" label="Edit" icon="mdi-pencil"></q-btn>
                <q-btn @click="is_edit = false" v-if="is_edit == true" class="btn-action" outline dense color="info" label="Save" icon="mdi-content-save"></q-btn>
            </div>
        </div>
        <div class="my-account-section__body">
            <div class="payment-details">
                <div class="tab-wrapper">
                    <q-tabs
						v-model="tab"
						class="text-grey"
						active-color="primary"
						indicator-color="primary"
						align="justify"
						no-caps
					>
						<q-tab :ripple="false" name="card" label="Card" />
						<q-tab :ripple="false" name="paypal" label="Paypal" />
                    </q-tabs>
                    <q-tab-panels v-model="tab" animated transition-next="fade" transition-prev="fade">
                        <q-tab-panel name="card" class="q-pa-none">
                            <div class="card-tab-holder">
                                <div>
                                    <div class="form-group">
                                        <div class="form-group__label">Full Name</div>
                                        <div class="form-group__inputs">
                                            <div class="text-preview">Stephen Reon Francisco</div>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Bank Name</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">Union Bank</div>
                                            <q-input v-if="is_edit == true" 
                                                filled dense hide-bottom-space v-model="bank_name_input"
                                                :rules="[ val => val && val.length > 0 || 'Field is required']"
                                            >
                                            </q-input>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Card Number</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">**** **** **** 5594</div>
                                            <q-input v-if="is_edit == true" 
                                                filled dense hide-bottom-space v-model="card_number_input"
                                                :rules="[ val => val && val.length > 0 || 'Field is required']"
                                            >
                                            </q-input>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Card Type</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">Debit</div>
                                            <q-select v-if="is_edit == true" 
                                                filled dense hide-bottom-space v-model="card_type_select"
                                                :options="['Debit', 'Credit']"
                                            >
                                            </q-select>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Expiry Date</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">05/23</div>
                                            <q-input v-if="is_edit == true" filled dense type="date" mask="mm-dd-yyyy" v-model="date_expiry_input"></q-input>
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
                        </q-tab-panel>
                        <q-tab-panel name="paypal" class="q-pa-none">
                            <div class="card-tab-holder">
                                <div>
                                    <div class="form-group">
                                        <div class="form-group__label">Full Name</div>
                                        <div class="form-group__inputs">
                                            <div class="text-preview">Stephen Reon Francisco</div>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Bank Name</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">Union Bank</div>
                                            <q-input v-if="is_edit == true" 
                                                filled dense hide-bottom-space v-model="bank_name_input"
                                                :rules="[ val => val && val.length > 0 || 'Field is required']"
                                            >
                                            </q-input>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Card Number</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">**** **** **** 5594</div>
                                            <q-input v-if="is_edit == true" 
                                                filled dense hide-bottom-space v-model="card_number_input"
                                                :rules="[ val => val && val.length > 0 || 'Field is required']"
                                            >
                                            </q-input>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Card Type</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">Debit</div>
                                            <q-select v-if="is_edit == true" 
                                                filled dense hide-bottom-space v-model="card_type_select"
                                                :options="['Debit', 'Credit']"
                                            >
                                            </q-select>
                                        </div>
                                    </div>
                                    <div class="form-group q-mt-lg">
                                        <div class="form-group__label">Expiry Date</div>
                                        <div class="form-group__inputs">
                                            <div v-if="is_edit == false" class="text-preview">05/23</div>
                                            <q-input v-if="is_edit == true" filled dense type="date" mask="mm-dd-yyyy" v-model="date_expiry_input"></q-input>
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
                        </q-tab-panel>
                    </q-tab-panels>
                </div>
            </div>
        </div>
        <div class="note">
            <div class="note__header">
                <div class="note__header-text">Note</div>
            </div>
            <div class="note__content">
                <p>Please note that all zphen transactions made online will charge a service fee off 1% on all payments below 100,000 pesos, and 1000 pesos on all payments more than 100,000 pesos.</p>
            </div>
        </div>
    </div>
</template>

<script>
import "./PaymentDetails.scss"

export default {
    name: 'MyPaymentDetails',
    data: () => ({
        is_edit: false,
        tab: 'card',
        full_name_input: '',
        bank_name_input: '',
        card_number_input: '',
        card_type_select: '',
        date_expiry_input: ''
    })
}
</script>