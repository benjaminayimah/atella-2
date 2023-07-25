<template>
    <div class="total-wrapper">
        <div class="total-card br-16 bg-white flx jc-sb gap-24">
            <div class="flx column">
                <div class="flx gap-8 ai-c">
                    <div class="fs-105rem">${{ computePrice(computedTotal+installation) }}</div>
                    <div v-if="!computedTotal == 0" class="flx gap-8">
                        <span class="gray">or</span>
                        <div class="gray-2">${{ computePrice((computedTotal+installation)/12) }}/Mon</div>
                    </div>
                </div>
                <div class="gray">Estimated cost</div>
            </div>
            <div v-if="button" class="centered">
                <button 
                    @click="confirm" 
                    class="button-primary br-32 scale-in gap-4 icon-btn icon-right confirm-btn"
                    :class="{ 'button-disabled' : !allChecked }" 
                    :disabled="!allChecked ? true : false">
                    {{ user.address ? 'Continue' : 'Confirm availability' }}
                    <svg xmlns="http://www.w3.org/2000/svg" height="13.501" viewBox="0 0 15.243 13.501">
                        <path d="M15.791,11.51a.919.919,0,0,0-.007,1.294l4.268,4.282H8.789a.914.914,0,0,0,0,1.828H20.052L15.777,23.2a.925.925,0,0,0,.007,1.294.91.91,0,0,0,1.287-.007l5.794-5.836h0a1.026,1.026,0,0,0,.19-.288.872.872,0,0,0,.07-.352.916.916,0,0,0-.26-.64l-5.794-5.836A.9.9,0,0,0,15.791,11.51Z" transform="translate(-7.882 -11.252)" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import priceMixin from '@/mixins/priceMixin'
import { mapState } from 'vuex'
export default {
    name: 'TotalCard',
    mixins: [priceMixin],
    props: ['button'],
    computed: {
        ...mapState({
            installation: (state) => state.installation
        }),
        allChecked() {
            const config = this.configuration
            if(config.type.name && config.color.name && 
            config.appliance.name && config.exterior.name && 
            config.sewage.name && config.blind.name )
            return true
            else
            return false
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
@container(inline-size <= 500px) {
    .total-card {
        flex-direction: column
    }
    .centered {
        place-items: stretch
    }
}
</style>