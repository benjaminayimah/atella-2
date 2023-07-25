<template>
    <div @click="$store.commit('setSelected', { name: name, item: item })" class="house-list br-16 flx-1 bg-white relative scale-in-2" :class="{ 'selected' : computeSelected }">
        <span v-if="computeSelected" class="centered check-btn absolute br-24">
            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 18.788 14.586">
                <path id="Path_264" data-name="Path 264" d="M3710.728,693.174a1.2,1.2,0,0,1-.838-.341l-6.174-6.019a1.2,1.2,0,0,1,1.675-1.718l5.248,5.116,9.383-11.194a1.2,1.2,0,0,1,1.839,1.542l-10.214,12.186a1.2,1.2,0,0,1-.859.428Z" transform="translate(-3703.354 -678.589)" fill="#ffffff"/>
            </svg>
        </span>
        <div :data-type="!cover ? 'no-cover' : ''" class="bg-img br-9 mb-16" :style="{ backgroundImage: 'url('+item.image+')'}"></div>
        <div>
            <h4 class="capitalize" :class="{'mb-8' : !item.sub_title && item.price }">{{ item.name }}</h4>
            <div v-if="item.sub_title" class="mb-8 fs-09">{{ item.sub_title }}</div>
            <span v-if="item.price" class="list-pill br-32">${{ computePrice(item.price) }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import priceMixin from '@/mixins/priceMixin'
export default {
    name: 'ConfigureList',
    props: ['item', 'cover', 'name'],
    mixins: [priceMixin],
    computed: {
        ...mapState({
            configuration: (state) => state.configuration
        }),
        computeSelected() {
            let newItem = this.configuration.type
            if(this.name === 'color')
                newItem = this.configuration.color
            else if(this.name === 'appliance')
                newItem = this.configuration.appliance
            else if(this.name === 'exterior')
                newItem = this.configuration.exterior
            else if(this.name === 'sewage')
                newItem = this.configuration.sewage
            else if (this.name === 'blind') {
                newItem = this.configuration.blind
            }
            if(this.item.id === newItem.id)
            return true
            else
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
.house-list{
    padding: 8px;
    border: 1px solid #F0F0F0;
    transition: 100ms all;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    container-type: inline-size;
    &:hover {
        border-color: #000;
    }
}

.list-pill{
    padding: 6px 18px;
    background: #F6F6F6;
    display: inline-flex;
}
.bg-img {
    background: rgba(198, 189, 179, 0.19);
    height: 120px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.bg-img:not([data-type=no-cover]) {
    background-size: cover;
}
.check-btn {
    --this-height: 28px;
    background-color: var(--primary-color);
    height: var(--this-height);
    width: var(--this-height);
    inset: 8px 8px auto auto;
}
.selected{
    border-color: var(--primary-color);
}
@container(inline-size <= 230px) {
    .bg-img {
        margin-bottom: 8px;
    }
    h4 {
        font-weight: 500;
        line-height: 1.3;
    }
    .mb-8{
        margin-bottom: 4px
    }
    .check-btn {
        --this-height: 20px;
        svg {
            height: 8px
        }
    }
}
</style>