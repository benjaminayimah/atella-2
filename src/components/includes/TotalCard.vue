<template>
    <div class="total-wrapper bg-white">
        <div class="total-card br-16 flx jc-sb gap-24">
            <div class="flx column">
                <div class="flx gap-8 ai-c">
                    <div class="fs-105rem">${{ computePrice(computedTotal) }}</div>
                    <div v-if="!computedTotal == 0" class="flx gap-8">
                        <span class="gray">or</span>
                        <div class="gray-2">${{ computePrice(computedTotal/12) }}/Mon</div>
                    </div>
                </div>
                <div class="gray">Estimated cost</div>
            </div>
            <div v-if="button" class="centered">
                <button @click="confirm" class="button-primary br-32 scale-in confirm-btn">Confirm availability</button>
            </div>
        </div>
    </div>
</template>

<script>
import priceMixin from '@/mixins/priceMixin';
import { mapState } from 'vuex';
export default {
    name: 'TotalCard',
    mixins: [priceMixin],
    props: ['button'],
    computed: {
        ...mapState({
            configuration: (state) => state.configuration
        }),
        computedTotal() {
            let total = 0
            for (const option of Object.values(this.configuration)) {
                if(option.price) {
                    total += option.price
                }
            }
            return total
        }
    },
    methods: {
        confirm() {
            this.$router.push({ name: 'ConfigureAddress'})
        }
    }
}
</script>

<style lang="scss" scoped>
.total-wrapper{
    container-type: inline-size;
}
@container(inline-size <= 460px) {
    .total-card {
        flex-direction: column
    }
    .centered {
        place-items: stretch
    }
}
</style>