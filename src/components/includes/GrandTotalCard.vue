<template>
    <div class="wrapper">
        <div class="flx column gap-24">
            <div class="flx gap-24 ai-c">
                <div class="flx-grow-1 br-16 centered gray-card">
                    <div>
                        <div class="fs-105rem">$23,000</div>
                        <span class="gray">Current configuration</span>
                    </div>
                </div>
                +
                <div class="flx-grow-1 br-16 centered gray-card">
                    <div>
                        <div class="fs-105rem">$10,000</div>
                        <span class="gray">Base installation cost</span>
                    </div>
                </div>
            </div>
            <div class="flx-grow-1 br-16 centered gray-card">
                <div>
                    <div class="fs-105rem">$1000 deposit</div>
                    <span class="gray">Feel free to change your mind. Reservations are fully refundable</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GrandTotalCard',
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
}
</style>