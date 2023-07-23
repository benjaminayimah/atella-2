<template>
    <div>
        <address-picker @go-back="goBack" @toggle="toggle" v-if="!summary" />
        <div v-else class="flx column gap-40">
            <div class="flx ai-c jc-sb br-16 bg-white card-with-border">
                <div>
                    <div class="mb-4 fs-103rem">Studio</div>
                    <div class="gray">320 gross sq.ft</div>
                </div>
                <div>
                    <router-link :to="{ name: 'ConfigureHome'}" class="gap-4 a-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16.919 16.166">
                            <path d="M-3593.823-882.342a.749.749,0,0,1-.2-.713l.857-3.427a.75.75,0,0,1,.2-.348l10.708-10.708a2.555,2.555,0,0,1,1.816-.751,2.55,2.55,0,0,1,1.815.751,2.57,2.57,0,0,1,0,3.631l-10.708,10.708a.749.749,0,0,1-.348.2l-3.427.857a.753.753,0,0,1-.181.022A.751.751,0,0,1-3593.823-882.342Zm12.624-14.134-10.561,10.561-.5,2.012,2.012-.5,10.561-10.561a1.067,1.067,0,0,0,0-1.509,1.059,1.059,0,0,0-.754-.312A1.063,1.063,0,0,0-3581.2-896.476Zm-4.385,14.353a.75.75,0,0,1-.75-.75.75.75,0,0,1,.75-.75h7.709a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75Z" transform="translate(3594.043 898.288)" fill="#2b441d"/>
                        </svg>
                        Edit
                    </router-link>
                </div>
            </div>
            <div class="grid grid-col-2 gap-16 config-summary">
                <div class="col">
                    <div class="col-row mb-16">
                        <label for="exterior">Exterior deck</label>
                        <div id="exterior">Extra wide</div>
                    </div>
                    <div class="col-row">
                        <label for="exterior">Entry & Blinds</label>
                        <div id="exterior">No Blinds</div>
                    </div>
                </div>
                <div class="col">
                    <div class="col-row mb-16">
                        <label for="sewage">Sewage option</label>
                        <div id="sewage">The Roof color</div>
                    </div>
                    <div class="col-row">
                        <label for="solor">Solor type</label>
                        <div id="solor">Premium</div>
                    </div>
                </div>
            </div>
            <div class="flx jc-sb">
                <div class="col-row">
                    <label for="address">Address</label>
                    <div id="address">The Roof color</div>
                </div>
                <div>
                    <a @click.prevent="toggle" href="#" class="gap-4 a-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16.919 16.166">
                            <path d="M-3593.823-882.342a.749.749,0,0,1-.2-.713l.857-3.427a.75.75,0,0,1,.2-.348l10.708-10.708a2.555,2.555,0,0,1,1.816-.751,2.55,2.55,0,0,1,1.815.751,2.57,2.57,0,0,1,0,3.631l-10.708,10.708a.749.749,0,0,1-.348.2l-3.427.857a.753.753,0,0,1-.181.022A.751.751,0,0,1-3593.823-882.342Zm12.624-14.134-10.561,10.561-.5,2.012,2.012-.5,10.561-10.561a1.067,1.067,0,0,0,0-1.509,1.059,1.059,0,0,0-.754-.312A1.063,1.063,0,0,0-3581.2-896.476Zm-4.385,14.353a.75.75,0,0,1-.75-.75.75.75,0,0,1,.75-.75h7.709a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75Z" transform="translate(3594.043 898.288)" fill="#2b441d"/>
                        </svg>
                        Edit
                    </a>
                </div>
            </div>
            <total-card :button="false" />
            <div class="grand-total br-16 bg-white flx column gap-24">
                <grand-total-card />
            </div>
            <div class="flx jc-sb">
                <button @click="toggle" class="button-outline br-32 btn-lng scale-in">Back</button>
                <button @click="nextPage" class="button-primary br-32 btn-md scale-in">Continue</button>
            </div>
        </div>
    </div>
</template>

<script>
import GrandTotalCard from '@/components/includes/GrandTotalCard.vue'
import TotalCard from '@/components/includes/TotalCard.vue'
import AddressPicker from './includes/AddressPicker.vue'
export default {
    components: { TotalCard, GrandTotalCard, AddressPicker },
    name: 'ConfigureAddress',
    data() {
        return {
            marker: null,
            infowindow: null,
            address: '',
            latitude: '',
            longitude: '',
            response: { active: false, available: false, message: ''},
            summary: false,
            
        }
    },
    watch: {
        summary(newSummary) {
            this.setSummary(newSummary)
        }
    },
    methods: {
        setPage() {
            const data = { page: 2, title: 'Where are we installing your atella?', sub_title: 'Share your street address to verify availability and refine your installation estimate.'}
            this.$store.commit('setConfigTab', data)
        },
        setSummary(payload) {
            const data = { page: 2, title: 'Your configuration summary', sub_title: 'Review and confirm your selection, then continue to keep your reservation.'}
            payload ? this.$store.commit('setConfigTab', data) : this.setPage()
        },
        toggle() {
            this.summary = !this.summary
        },
        goBack() {
            this.$router.push({ name: 'ConfigureHome'})
        },
        nextPage() {
            this.$router.push({ name: 'ConfigurePayment'})
        }
    },
    mounted() {
        this.setPage()
    }
}
</script>

<style lang="scss" scoped>


.card-with-border {
    border: 1px solid #F0F0F0;
    padding: 14px 16px;
    a {
        color: #2B441D;;
    }
}
.config-summary {
    .col:first-child {
        border-right: 1px solid #D9D9D9;
    }
}
.col-row {
    label {
        color: var(--gray);
        font-size: 0.82rem;
    }
    div {
        font-size: 1.1rem;
    }
}
</style>