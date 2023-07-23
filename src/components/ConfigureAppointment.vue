<template>
    <div>
        <div class="mb-40">
            Let us know when we can introduce ourselves
        </div>
        <div>
            <a href="https://calendly.com/liveatella/30min" class="button-primary br-32 btn-md scale-in" target="_blank">Book now</a>
        </div>
    </div>
</template>
<script>

export default {
    name: 'ConfigureAppointment',
    methods: {
        setPage() {
            const data = { page: 4, title: 'Book an appointment', sub_title: 'Congratulation, your payment was successful' }
            this.$store.commit('setConfigTab', data)
        }
    },
    mounted() {
        this.setPage()
    }
}
</script>

<style lang="scss" scoped>

</style>