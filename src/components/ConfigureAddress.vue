<template>
    <div>
        <address-picker @go-back="goBack" @toggle="toggle" v-if="!summary" />
        <div v-else class="flx column gap-40 wrapper">
            <div class="flx ai-c jc-sb br-16 bg-white card-with-border">
                <div>
                    <div class="mb-4 fs-103rem">{{ configuration.type.name }}</div>
                    <div class="gray">{{ configuration.type.sub_title }}</div>
                </div>
                <div>
                    <router-link :to="{ name: 'ConfigureHome'}" class="gap-4 a-button edit scale-in">
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
                        <div id="exterior" class="flx ai-c gap-8 capitalize"><i class="br-50" :class="configuration.color.name "></i>{{ configuration.color.name }}</div>
                    </div>
                    <div class="col-row">
                        <label for="exterior">Entry & Blinds</label>
                        <div id="blind">{{ configuration.exterior.name }}</div>
                        <div>{{ configuration.blind.name }}</div>
                    </div>
                </div>
                <div class="col">
                    <div class="col-row">
                        <label for="solor">Solor type</label>
                        <div id="solor">{{ configuration.appliance.name }}</div>
                    </div>
                    <div class="col-row mb-16">
                        <label for="sewage">Sewage option</label>
                        <div id="sewage">{{ configuration.sewage.name }}</div>
                    </div>
                </div>
            </div>
            <div class="flx jc-sb">
                <div class="col-row">
                    <label for="address">Address</label>
                    <div id="address">{{ userAddress }}</div>
                </div>
                <div>
                    <a @click.prevent="toggle" href="#" class="gap-4 a-button edit scale-in">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16.919 16.166">
                            <path d="M-3593.823-882.342a.749.749,0,0,1-.2-.713l.857-3.427a.75.75,0,0,1,.2-.348l10.708-10.708a2.555,2.555,0,0,1,1.816-.751,2.55,2.55,0,0,1,1.815.751,2.57,2.57,0,0,1,0,3.631l-10.708,10.708a.749.749,0,0,1-.348.2l-3.427.857a.753.753,0,0,1-.181.022A.751.751,0,0,1-3593.823-882.342Zm12.624-14.134-10.561,10.561-.5,2.012,2.012-.5,10.561-10.561a1.067,1.067,0,0,0,0-1.509,1.059,1.059,0,0,0-.754-.312A1.063,1.063,0,0,0-3581.2-896.476Zm-4.385,14.353a.75.75,0,0,1-.75-.75.75.75,0,0,1,.75-.75h7.709a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75Z" transform="translate(3594.043 898.288)" fill="#2b441d"/>
                        </svg>
                        Edit
                    </a>
                </div>
            </div>
            <div class="grand-total br-16 flx column gap-24 bg-white">
                <total-card :button="false"/>
                <grand-total-card />
            </div>
            <div class="flx jc-sb">
                <button @click="toggle" class="button-outline br-32 icon-btn gap-4 btn-md icon-left scale-in">
                    <svg xmlns="http://www.w3.org/2000/svg" height="13.501" viewBox="0 0 15.243 13.501">
                        <path d="M15.216,11.51a.919.919,0,0,1,.007,1.294l-4.268,4.282H22.218a.914.914,0,0,1,0,1.828H10.955L15.23,23.2a.925.925,0,0,1-.007,1.294.91.91,0,0,1-1.287-.007L8.142,18.647h0a1.026,1.026,0,0,1-.19-.288.872.872,0,0,1-.07-.352.916.916,0,0,1,.26-.64l5.794-5.836A.9.9,0,0,1,15.216,11.51Z" transform="translate(-7.882 -11.252)"/>
                    </svg>
                    Back
                </button>
                <button @click="nextPage" class="button-primary br-32 btn-md gap-4 icon-btn icon-right scale-in">
                    Continue
                    <svg xmlns="http://www.w3.org/2000/svg" height="13.501" viewBox="0 0 15.243 13.501">
                        <path d="M15.791,11.51a.919.919,0,0,0-.007,1.294l4.268,4.282H8.789a.914.914,0,0,0,0,1.828H20.052L15.777,23.2a.925.925,0,0,0,.007,1.294.91.91,0,0,0,1.287-.007l5.794-5.836h0a1.026,1.026,0,0,0,.19-.288.872.872,0,0,0,.07-.352.916.916,0,0,0-.26-.64l-5.794-5.836A.9.9,0,0,0,15.791,11.51Z" transform="translate(-7.882 -11.252)" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import GrandTotalCard from '@/components/includes/GrandTotalCard.vue'
import TotalCard from '@/components/includes/TotalCard.vue'
import AddressPicker from './includes/AddressPicker.vue'
export default {
    components: { TotalCard, GrandTotalCard, AddressPicker },
    name: 'ConfigureAddress',
    computed: {
        ...mapState({
            configuration: (state) => state.configuration,
            userAddress: (state) => state.user.address,
        })
    },
    data() {
        return {
            summary: false,
        }
    },
    watch: {
        summary(newSummary) {
            this.setSummary(newSummary)
        }
    },
    methods: {
        checkConfig() {
            if(this.userAddress) {
                this.summary = true
            }
        },
        setPage() {
            const data = { page: 2, title: 'Where are we installing your atella?', sub_title: 'Share your street address to verify availability and refine your installation estimate.'}
            this.$store.commit('setConfigTab', data)
        },
        setSummary(payload) {
            const data = { page: 2, title: 'Your configuration summary', sub_title: 'Review and confirm your selection, then continue to keep your reservation.'}
            payload ? this.$store.commit('setConfigTab', data) : this.setPage()
        },
        toggle(address) {
            this.summary = !this.summary
            if(address) {
                this.$store.commit('setAddress', address)
            }
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
        this.checkConfig()
    }
}
</script>

<style lang="scss" scoped>


.card-with-border {
    border: 1px solid #F0F0F0;
    padding: 14px 16px;
}
.edit {
    color: #2B441D;
    &:hover {
        text-decoration: underline;
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
#exterior {
    i {
        height: 20px;
        width: 20px;
        border: 1px solid transparent;
    }
    .light{
        background-color: #fff;
        border-color: #D9D9D9;
    }
    .neutral {
        background-color: #D9D9D9;
    }
    .dark {
        background-color: #342309;
    }
}
.wrapper {
    container-type: inline-size;
}
@container(inline-size <= 500px) {
    .gap-24{
        gap: 14px
    }
}
</style>