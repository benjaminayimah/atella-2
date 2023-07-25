import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            configuration: (state) => state.configuration,
            user: (state) => state.user
        }),
        computedTotal() {
            let total = 0
            for (const option of Object.values(this.configuration)) {
                if(option.price) {
                    total += option.price
                }
            }
            return total
        },
    },
    methods: {
        computePrice(price) {
            return Intl.NumberFormat('en-US').format(price.toFixed(2))
        }
    }
}