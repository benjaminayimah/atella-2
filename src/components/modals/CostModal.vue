<template>
    <div>
        <transition name="fade">
            <backdrop v-if="cost_modal"  :index="300" :opacity="0.5" />
        </transition>
        <transition name="zoom">
            <div v-if="cost_modal" class="modal-container jc-c ai-c">
                <div class="modal br-16 bg-white">
                    <div class="modal-top flx jc-sb ai-c">
                        <h3>Real Cost Options</h3>
                        <button class="br-50" @click="$store.commit('closeCostModal')">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14.683" viewBox="0 0 14.647 14.683">
                                <path d="M5648.416,3695.679l-5.629-5.655-5.6,5.59a1,1,0,1,1-1.412-1.415l5.6-5.592-5.584-5.61a1,1,0,1,1,1.418-1.411l5.583,5.608,5.623-5.61a1,1,0,1,1,1.412,1.417l-5.624,5.611,5.631,5.657a1,1,0,1,1-1.418,1.411Z" transform="translate(-5635.478 -3681.291)" fill="#6f7689"/>
                            </svg>
                        </button>
                    </div>
                    <div class="flx column gap-24 mt-32">
                        <ul class="flx gap-8">
                            <li><a href="#" class="br-32">Cash</a></li>
                            <li><a href="#" class="br-32 active">Finance</a></li>
                            <li><a href="#" class="br-32">Rental Property</a></li>
                            <li><a href="#" class="br-32">Retirement home</a></li>
                        </ul>
                        <div>Financing selection and terms will be confirmed after order</div>
                        <div>
                            <div class="flx jc-sb table-head">
                                <h4>Reservation price</h4>
                                <h4>$192,000</h4>
                            </div>
                            <div class="table-row flx jc-sb gray">
                                <div>Federal Tax Credit</div>
                                <div>-$11,500</div>
                            </div>
                            <div class="table-row flx jc-sb gray">
                                <div>California Incentive</div>
                                <div>-$750</div>
                            </div>
                            <div class="table-row flx jc-sb gray">
                                <div>6 years savings range</div>
                                <div>-$1,750</div>
                            </div>
                            <div class="table-row flx jc-sb gray">
                                <div>Destination Fee</div>
                                <div>$70,050</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Backdrop from '@/components/includes/Backdrop.vue'
export default {
    components: { Backdrop },
    computed: {
        ...mapState({
            cost_modal: (state) => state.cost_modal
        })
    }
}
</script>

<style lang="scss" scoped>
.modal{
    max-height: 90vh;
    width: 700px;
    z-index: 301;
    border: 1px solid #2B441D;
    padding: 24px;
}
li {
    a {
        color: #2B441D;
        padding: 8px 16px;
        border: 1px solid #2B441D;
        height: 40px;
        display: inline-block;
    }
    .active {
        border: 1px solid #2B441D;
        background: #D2B486;
    }
}
.table-row{
    margin-top: 8px;
}
</style>