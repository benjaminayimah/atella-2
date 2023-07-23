<!-- <template>
    <transition name="fade">
        <backdrop  :index="300" :opacity="0.5" />
    </transition>
    <transition name="zoom">
        <div class="modal-container jc-c ai-c">
            <div class="modal bg-white">
                <div class="flx modal-wrapper">
                    <div class="flx jc-c column col-1 gap-8">
                        <div class="fs-2rem fw-600">Let us know when we can introduce ourselves</div>
                        <span class="sub-heading fs-09">Select a call date starting 3 days after payment is made</span>
                    </div>
                    <div class="flx-grow-1">
                        
                    </div>
                </div>
            </div>
            <div class="modal">

            </div>

        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex';
import Backdrop from '../includes/Backdrop.vue'
export default {
  components: { Backdrop },
    name: 'AppointmentModal',
    computed: {
        ...mapState({
            appointment_modal: (state) => state.appointment_modal
        })
    }
}
</script>

<style lang="scss" scoped>
.modal{
    // max-height: 90vh;
    width: 70vw;
    z-index: 301;
    height: 100dvh;
}
.calendly-inline-widget{
    width: 100%;
    height: inherit;
}
.modal-wrapper {
    padding: 32px;
    height: inherit;
}
.col-1{
    flex-basis: 40%;
}
.sub-heading{
    width: 60%;
}
</style> -->