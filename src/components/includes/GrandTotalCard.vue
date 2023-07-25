<template>
    <div class="wrapper">
        <div class="mb-8 fs-101rem">Price breakdown</div>
        <div class="flx column gap-24">
            <div class="flx gap-24 ai-c">
                <div class="flx-grow-1 br-16 centered gray-card">
                    <div>
                        <div class="fs-105rem">${{ computePrice(computedTotal) }}</div>
                        <span class="gray">Current configuration</span>
                    </div>
                </div>
                +
                <div class="flx-grow-1 br-16 centered gray-card">
                    <div>
                        <div class="fs-105rem">${{ computePrice(installation) }}</div>
                        <span class="gray">Base installation cost</span>
                    </div>
                </div>
            </div>
            <div class="flx-grow-1 br-16 centered gray-card">
                <div>
                    <div class="fs-105rem">${{ computePrice(deposit) }} deposit</div>
                    <span class="gray">Feel free to change your mind. Reservations are fully refundable</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import priceMixin from '@/mixins/priceMixin'
export default {
    name: 'GrandTotalCard',
    mixins: [priceMixin],
    computed: {
        ...mapState({
            installation: (state) => state.installation,
            deposit: (state) => state.deposit
        })
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    container-type: inline-size;
}
@container(inline-size <= 500px) {
    .gap-24 {
        gap: 8px
    }
    .br-16 {
        border-radius: 9px
    }
    .gray-card{
        padding: 16px;
        span {
            font-size: 0.84rem;
            line-height: 1.3;
        }
    }
}
</style>