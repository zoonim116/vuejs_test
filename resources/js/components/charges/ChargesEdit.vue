<template>
    <div class="mt-5">
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>
        <div class="col-sm-12">
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="typeSelect">Type</label>
                    <v-select label="title" id="typeSelect" :reduce="charge => charge.id" v-model="currentCharge.charge_type_id" :options="allChargeTypes" name="type"></v-select>
                </div>
                <div class="form-group">
                    <label for="amount"></label>
                    <input type="text" v-model="currentCharge.amount" class="form-control" id="amount" name="amount" placeholder="Amount" />
                </div>
                <div class="form-group">
                    <label for="charge_date">Charge date</label>
                    <datepicker v-model="currentCharge.charge_date" id="charge_date" name="charge_date" format="yyyy-MM-dd"></datepicker>
                </div>
                <div class="form-group">
                    <label for="comment">Comment</label>
                    <textarea class="form-control" v-model="currentCharge.comment" id="comment" name="comment" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Update</button>
            </form>
        </div>
    </div>
</template>

<script>
    import VueSelect from 'vue-select'
    import Datepicker from 'vuejs-datepicker'
    import { mapGetters, mapActions } from 'vuex'
    import moment from 'moment'

    export default {
        computed: mapGetters(['allChargeTypes', 'currentCharge']),
        mounted() {
            this.getChargeTypes();
            this.getCharge(this.$route.params.id);
        },
        methods: {
            ...mapActions(['getChargeTypes', 'updateCharge', 'getCharge']),
            submit() {
                this.updateCharge({
                        id: this.currentCharge.id,
                        charge_type_id: this.currentCharge.type,
                        amount: this.currentCharge.amount,
                        comment: this.currentCharge.comment,
                        charge_date: moment(this.currentCharge.charge_date).format('YYYY-MM-DD')
                    });
            }
        },
        components: {
            'v-select': VueSelect,
            Datepicker
        },
        name: "ChargesEdit"
    }
</script>

<style scoped>

</style>