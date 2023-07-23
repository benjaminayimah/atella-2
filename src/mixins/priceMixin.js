export default {
    methods: {
        computePrice(price) {
            return Intl.NumberFormat('en-US').format(price.toFixed(2))
        }
    }
}