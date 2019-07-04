<template>
    <div class="mt-5">
        <div class="col-sm-12">
            <div class="form-group">
                <router-link :to="{name: 'createCharge'}" class="btn btn-success">Create Charge</router-link>
            </div>
            <div class="row mb-4">
                <div class="col-sm-2">
                    <label for="perPage">Per page:</label>
                    <select id="perPage" class="form-control" v-model="perPage" @change="changePerPage">
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="col-sm-3">
                    <div class="input-group mb-3">

                        <select class="custom-select" id="inputGroupSelect01" v-model="searchType" @change="changeSearchType">
                            <option value="">Choose...</option>
                            <option value="charge_date">Date</option>
                            <option value="id">ID</option>
                            <option value="amount">Amount</option>
                            <option value="charge_type">Type</option>
                        </select>
                        <div class="input-group-append">
                            <input type="text" class="form-control" id="search" v-model="searchQuery" name="search" @keyup="showResults" placeholder="Start typing" />
                        </div>
                    </div>

                </div>
            </div>
            <table class="table">
                <thead>
                <tr>
                    <th>Charge Type</th>
                    <th>Amount</th>
                    <th>Charge date</th>
                    <th width="150">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="{ id, type, amount, charge_date}, index in allCharges" :key="id">
                    <td> {{ type.title }} </td>
                    <td> {{ amount }} </td>
                    <td> {{ charge_date }}</td>
                    <td >
                        <router-link :to="{name: 'editCharge', params: {id: id}}" class="btn btn-sm btn-info">Edit</router-link>
                        <a href="#" class="btn btn-sm btn-danger" v-on:click="deleteEntry(id, index)">Delete</a>
                    </td>
                </tr>
                </tbody>
            </table>
            <pagination :data="paginationData" @pagination-change-page="pagination"></pagination>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import pagination from 'laravel-vue-pagination';

    export default {
        computed: {
          ...mapGetters(['allCharges', 'paginationData', 'paginationSettings']),
        },
        components: {
            pagination
        },
        mounted() {
            this.getCharges();
        },
        data() {
            return {
                perPage: 3,
                searchType: '',
                searchQuery: ''
            }
        },
        methods: {
            ...mapActions(['getCharges', 'deleteCharge', 'setPaginationSettings', 'setSearchType', 'searchResults']),
            changePerPage(page = 1) {
                this.setPaginationSettings({
                    page,
                    perPage: this.perPage
                });
            },
            pagination(page = 1) {
                this.setPaginationSettings({
                    page,
                    perPage: this.perPage
                });
            },
            deleteEntry(id, index) {
                if(confirm("Confirm deleting charge")) {
                    this.deleteCharge(id);
                }
            },
            showResults() {
                this.searchResults(this.searchQuery)
            },
            changeSearchType() {
                this.setSearchType(this.searchType)
            }
        },
        name: "ChargesIndex"
    }
</script>

<style scoped>

</style>