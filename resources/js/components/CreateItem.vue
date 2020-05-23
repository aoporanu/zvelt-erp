<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Create Item</div>
            <div class="card-body">
                <form class="form-horizontal" @submit.prevent="store">
                    <div class="form-group">
                        <label for="name">Item name</label>
                        <input type="text" v-model="name" autocomplete="off"
                        class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" v-model="price"
                                           autocomplete="off"
                                           />
                    </div>
                    <div class="form-group">
                        <label for="vat">VAT</label>
                        <input type="text" v-model="vat"
                                           autocomplete="off"
                                           />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateItem",
    data() {
        return {
            name: null,
            price: null,
            vat: null,
            has_error: false
        }
    },

    mounted() {

    },

    methods: {
        store() {

        }
    }
}
</script>
