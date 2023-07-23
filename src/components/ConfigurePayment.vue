<template>
    <div>
        <div v-if="!makePayment" class="flx column gap-40">
            <div class="br-16 centered gray-card">
                <div>
                    <div class="fs-105rem">Fill in your details</div>
                    <span class="gray">Feel free to change your mind. Reservations can be changed at any time</span>
                </div>
            </div>
            <form action="" class="flx column gap-16">
                <div class="form-row grid grid-col-2 gap-24">
                    <div class="form-col">
                        <label for="first_name">First name</label>
                        <div class="input-wrapper">
                            <input type="text" name="first_name" id="first_name">
                        </div>
                    </div>
                    <div class="form-col">
                        <label for="last_name">Last name</label>
                        <div class="input-wrapper">
                            <input type="text" name="last_name" id="last_name">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <label for="email">Email</label>
                    <div class="input-wrapper">
                        <input type="email" name="email" id="email">
                    </div>
                </div>
                <div class="form-row">
                    <label for="phone_number">Phone number</label>
                    <div class="input-wrapper">
                        <input type="tel" name="phone_number" id="phone_number">
                    </div>
                </div>
            </form>
            <div class="flx jc-sb">
                <button @click="goBack" class="button-outline br-32 btn-lng scale-in">Back</button>
                <button @click="toggle" class="button-primary br-32 btn-md scale-in">Continue</button>
            </div>
        </div>
        <div v-else class="flx column gap-40">
            <div class="br-16 centered gray-card">
                <div>
                    <div class="fs-105rem">$1,000 Commitment fee</div>
                    <span class="gray">Fully refundable deposit</span>
                </div>
            </div>
            <i>
                Amount would be deducted from total cost of your atella configuration
            </i>
            <div class="flx jc-sb">
                <button @click="toggle" class="button-outline br-32 btn-lng scale-in">Back</button>
                <button @click="payNow" class="button-primary br-32 btn-md scale-in">Pay $1,000</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfigurePayment',
    data() {
        return {
            makePayment: false
        }
    },
    watch: {
        makePayment(newMakePayment) {
            this.setMakePayment(newMakePayment)
        }
    },
    methods: {
        setPage() {
            const data = { page: 3, title: 'Reserve Your Atella', sub_title: 'Enter your contact information in other to secure reservation.'}
            this.$store.commit('setConfigTab', data)
        },
        setMakePayment(payload) {
            const data = { page: 3, title: 'Atella Reservation Deposit', sub_title: 'Your deposit is fully refundable.'}
            payload ? this.$store.commit('setConfigTab', data) : this.setPage()
        },
        toggle() {
            this.makePayment = !this.makePayment
        },
        goBack() {
            this.$router.push({ name: 'ConfigureAddress'})
        },
        payNow() {
            this.$router.push({name: 'ConfigureAppointment'})
        }
    },
    mounted() {
        this.setPage()
    }
}
</script>

<style lang="scss" scoped>
input {
    height: 48px;
    padding: 8px 12px;
    width: 100%;
}
</style>