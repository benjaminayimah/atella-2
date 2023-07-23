<template>
    <div class="wrapper">
        <div class="flx column gap-40">
            <div>
                <div class="fs-103rem mb-16">Select your Atella type</div>
                <div class="flx flx-wrap gap-24">
                    <configure-list v-for="item in types" :key="item.id" :item="item" :name="'type'" />
                </div>
            </div>
            <div>
                <div class="fs-103rem mb-16">Choose your base color</div>
                <div class="flx flx-wrap gap-24">
                    <configure-list v-for="item in colors" :key="item.id" :item="item" :name="'color'" />
                </div>
            </div>
            <div>
                <div class="fs-103rem mb-16">Appliance package</div>
                <div class="flx flx-wrap gap-24">
                    <configure-list v-for="item in appliances" :key="item.id" :item="item" :name="'appliance'" />
                </div>
            </div>
            <div>
                <div class="fs-103rem mb-16">Choose your exterior deck</div>
                <div class="flx flx-wrap gap-24">
                    <configure-list v-for="item in exterior_decks" :key="item.id" :item="item" :name="'exterior'" />
                </div>
            </div>
            <div>
                <div class="fs-103rem mb-16">Choose your sewage option</div>
                <div class="flx flx-wrap gap-24">
                    <configure-list v-for="item in sewages" :key="item.id" :item="item" :name="'sewage'" />
                </div>
            </div>
            <div>
                <div class="fs-103rem mb-16">Choose your blinds</div>
                <div class="flx flx-wrap gap-24">
                    <configure-list v-for="item in blinds" :key="item.id" :item="item" :cover="true" :name="'blind'" />
                </div>
            </div>
            <div class="grand-total br-16 mt-32 flx column gap-24 bg-white">
                <total-card :button="true"/>
                <div>Price breakdown</div>
                <grand-total-card />
            </div>
        </div>
    </div>
</template>

<script>
import TotalCard from '@/components/includes/TotalCard.vue';
import priceMixin from '@/mixins/priceMixin'
import { mapState } from 'vuex';
import ConfigureList from '@/components/includes/ConfigureList.vue'
import GrandTotalCard from '@/components/includes/GrandTotalCard.vue';
export default {
  components: { ConfigureList, TotalCard, GrandTotalCard },
    name: 'ConfigureHome',
    mixins: [priceMixin],
    computed: {
        ...mapState({
            types: (state) => state.types,
            colors: (state) => state.colors,
            appliances: (state) => state.appliances,
            exterior_decks: (state) => state.exterior_decks,
            sewages: (state) => state.sewages,
            blinds: (state) => state.blinds
        })
    },
    data() {
        return {
            configuration: '',
            cost: 10000,
            selections: [],
        }
    },
    methods: {
        doSelection(item) {
            const i = this.selections.find(data => data === item.id)
            if (i) {
                this.selections = this.selections.filter(x => x !== i)
                this.$store.commit('setRotation', 150)
            } else {
                this.selections.push(item.id)
                this.$store.commit('setRotation', item.rotation)
            }
        },
        setPage() {
            const data = { page: 1, title: 'Configure your atella', sub_title: 'Design the perfect atella for your backyard.'}
            this.$store.commit('setConfigTab', data)
        }
    },
    mounted() {
        this.setPage()
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
}
</style>