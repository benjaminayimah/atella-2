<template>
  <div id="configure" :class="{ 'configure_view2' : configTab.page !== 1}">
        <banner-scene :rotation="rotation" :zoom="computedZoom" />
        <section class="flx flx-grow-1">
          <div id="config_section" class="flx flx-grow-1">
            <div id="configure_left" class="flx column gap-24 overflow-y-scroll">
                <ul class="flx gap-4">
                    <li :class="{ 'active' : $route.path === '/'}"><a href="#" @click.prevent class="centered">1</a></li>
                    <li :class="{ 'active' : $route.path === '/address'}"><a href="#" @click.prevent class="centered">2</a></li>
                    <li :class="{ 'active' : $route.path === '/payment'}"><a href="#" @click.prevent class="centered">3</a></li>
                    <!-- <li><a href="#" class="centered">4</a></li> -->
                </ul>
                <div class="title">
                    <div class="fs-3rem">{{ configTab.title }}</div>
                    <span>{{ configTab.sub_title }}</span>
                </div>
                <total-card :button="true" v-if="configTab.page === 1" />
            </div>
            <div id="configure_right" class="flx-grow-1 overflow-y-scroll">
                <router-view></router-view>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
import BannerScene from '@/components/BannerScene.vue';
import { mapState } from 'vuex';
import TotalCard from '@/components/includes/TotalCard.vue';
export default {
  components: { BannerScene, TotalCard },
  name: 'HomeView',
  computed: {
      ...mapState({
          rotation: (state) => state.rotation,
          configTab: (state) => state.configTab
      }),
      computedZoom() {
        let zoom = 20
        if(this.configTab.page !== 1) {
          zoom = 40
        }
        return zoom
      }
    },
    beforeRouteLeave(to, from, next) {
    // Prevent the default navigation behavior
      next(false);
    },
    methods: {
      handleLinkClick(event) {
        event.preventDefault();
        console.log('me')
      }
    }
}
</script>
<style lang="scss" scoped>
section {
  container-type: inline-size;
}
#configure{
    height: 100dvh;
    background: #FBFBFB;
}
#configure_left{
    flex-basis: 40%;
    padding-right: 40px;
    position: sticky;
    padding: 32px 40px 32px 0;
}
#configure_right{
    border-left: 1px solid #D9D9D9;
    padding: 40px 0 60px 40px;
    container-type: inline-size;

}
#config_section{
  padding: 0 80px;
  height: 50dvh;
  top: 50dvh;
}
.title{
    width: 60%;
    div {
        line-height: 1.2;
    }
}
ul {
    a {
        color: #888;
        height: 50px;
        width: 50px;
        background: rgba(198, 189, 179, 0.19);
        border-radius: 25px;
        cursor: default;
    }
    .active a {
        color: #000;
        background: #C6BDB3;
    }
    li:first-child::after, li:nth-child(2):after{
        content: '';
        width: 55px;
        top: -50%;
        margin-left: 55px;
        display: flex;
        position: relative;
        border-bottom: 1px solid #D9D9D9;
    }
}
@container(inline-size <= 700px) {
    #config_section {
      padding: 0 40px;
    }
}

@container(inline-size <= 500px) {
    .title{
        width: unset;
    }
    .fs-3rem {
      font-size: 1.8rem
    }
}

@media screen and (max-width: 900px){
    #config_section{
        flex-direction: column;
        padding: 0 20px;
        height: unset;
    }
    #configure{
        height: unset;
    }
    #configure_right{
        border-left: unset;
        padding: 40px 0
    }
    #configure_left {
        padding: 32px 0;
        flex-basis: unset;
    }
    
}
</style>