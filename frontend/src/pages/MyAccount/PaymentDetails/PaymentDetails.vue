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
                        <q-tab-panel class="q-pa-none">

                        </q-tab-panel>
                    </q-tab-panels>
                </div>
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
        tab: 'card'
    })
}
</script>