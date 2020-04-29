<template>
    <div class="my-account-section my-profile-section">
        <div class="my-account-section__header">
            <div class="my-account-section__title">My Profile</div>
            <div class="my-account-section__actions">
                <q-btn @click="is_edit = true" v-if="is_edit == false" class="btn-action" outline dense color="info" label="Edit" icon="mdi-pencil"></q-btn>
                <q-btn @click="is_edit = false" v-if="is_edit == true" class="btn-action" outline dense color="info" label="Save" icon="mdi-content-save"></q-btn>
            </div>
        </div>
        <div class="my-account-section__body">
            <div class="my-profile">
                <div>
                    <div class="form-group">
                        <div class="form-group__label">Full Name</div>
                        <div class="form-group__inputs">
                            <div v-if="is_edit == false" class="text-preview">Stephen Reon Francisco</div>
                            <q-input v-if="is_edit == true" 
                                filled dense hide-bottom-space v-model="full_name_input"
                                :rules="[ val => val && val.length > 0 || 'Field is required']"
                            >
                            </q-input>
                        </div>
                    </div>
                    <div class="form-group q-mt-lg">
                        <div class="form-group__label">Birthday mm/dd/year</div>
                        <div class="form-group__inputs">
                            <div v-if="is_edit == false" class="text-preview">02 - 17 - 1986</div>
                            <q-input v-if="is_edit == true" filled dense type="date" mask="mm-dd-yyyy" v-model="date_input"></q-input>
                        </div>
                    </div>
                    <div class="form-group q-mt-lg">
                        <div class="form-group__label">Gender</div>
                        <div class="form-group__inputs">
                            <div v-if="is_edit == false" class="text-preview">Male</div>
                            <q-input v-if="is_edit == true" filled dense v-model="gender_input"></q-input>
                            <!-- <q-select v-if="is_edit == true" filled dense v-model="gender_input" :options="['Male','Female']"></q-select> -->
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <div class="form-group__label">
                            Mobile Number
                            <a v-if="is_edit == true" class="text-link" href="javascript:">CHANGE</a>
                        </div>
                        <div class="form-group__inputs">
                            <div class="text-preview">(+63) 9171125808</div>
                        </div>
                    </div>  
                    <div class="form-group q-mt-lg">
                        <div class="form-group__label">
                            Email
                            <a v-if="is_edit == true" class="text-link" href="javascript:">CHANGE</a>
                        </div>
                        <div class="form-group__inputs">
                            <div class="text-preview">stephenreonfrancisco@zphen.com</div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "./MyProfile.scss"

export default {
    name: 'MyProfile',
    data: () => ({
        is_edit: false,
        full_name_input: 'Stephen Reon Francisco',
        date_input: '02/17/1986',
        gender_input: 'Male'
    })
}
</script>