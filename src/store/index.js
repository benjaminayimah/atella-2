import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rotation: 150,
    zoom: 20,
    configuration: { 
        type: {
          id: 1, name: 'Atella studio', sub_title: '455 Gross sq. fe.', price: 102500, image: require('@/assets/images/houses/atella_type.png'), rotation: 150 
        },
        color: {},
        appliance: {},
        exterior: {},
        sewage: {},
        blind: {},
    },
    installation: 10000,
    deposit: 1000,
    user: { address: '', info: {}},
    configTab: { page: '', title: '', sub_title: ''},
    types: [
      {id: 1, name: 'Atella studio', sub_title: '455 Gross sq. fe.', price: 102500, image: require('@/assets/images/houses/atella_type.png'), rotation: 150 },
      {id: 2, name: 'Atella one', sub_title: '455 Gross sq. fe.', price: 192500, image: require('@/assets/images/houses/atella_type.png'), rotation: 100}
    ],
    colors: [
      {id: 1, name: 'light', image: require('@/assets/images/houses/color_light.png'), rotation: 90},
      {id: 2, name: 'dark', image: require('@/assets/images/houses/color_dark.png'), rotation: 80},
      {id: 3, name: 'neutral', image: require('@/assets/images/houses/color_neutral.png'), rotation: 180}
    ],
    appliances: [
      {id: 1, name: 'Standard', price: 5000, image: require('@/assets/images/houses/appliance_standard.png'), rotation: 130},
      {id: 2, name: 'Premium', price: 192500, image: require('@/assets/images/houses/appliance_premium.png'), rotation: 70}
    ],
    exterior_decks: [
      {id: 1, name: 'Standard', price: 5000, image: require('@/assets/images/houses/exteriordeck.png'), rotation: 170},
      {id: 2, name: 'Extra wide', price: 192500, image: require('@/assets/images/houses/exteriordeck.png'), rotation: 60}
    ],
    sewages: [
      {id: 1, name: 'Grey water', price: 5000, image: require('@/assets/images/houses/sewage_1.png'), rotation: 180},
      {id: 2, name: 'Connect with principal dwelling', price: 192500, image: require('@/assets/images/houses/sewage_2.png'), rotation: 140}
    ],
    blinds: [
      {id: 1, name: 'No blinds', price: 5000, image: require('@/assets/images/houses/blinds.png'), rotation: 50},
      {id: 2, name: 'Roller blinds', price: 192500, image: require('@/assets/images/houses/blinds.png'), rotation: 40}
    ],
    cost_modal: false,
    appointment_modal: false
  },
  mutations: {
    setSelected(state, payload) {
      if(payload.name === 'type') {
        state.configuration.type = payload.item
      }else if(payload.name === 'color') {
        state.configuration.color = payload.item
        // const i = state.configuration.color
        // if(i.id === payload.item.id) {
        //   state.configuration.color = ''
        // }else {
        // }
      }else if(payload.name === 'appliance') {
        state.configuration.appliance = payload.item
        // const i = state.configuration.appliance
        // if(i.id === payload.item.id) {
        //   state.configuration.appliance = ''
        // }else {
        //   state.configuration.appliance = payload.item
        // }
      }else if(payload.name === 'exterior') {
        state.configuration.exterior = payload.item
        // const i = state.configuration.exterior
        // if(i.id === payload.item.id) {
        //   state.configuration.exterior = ''
        // }else {
        //   state.configuration.exterior = payload.item
        // }
      }else if(payload.name === 'sewage') {
        state.configuration.sewage = payload.item
        // const i = state.configuration.sewage
        // if(i.id === payload.item.id) {
        //   state.configuration.sewage = ''
        // }else {
        //   state.configuration.sewage = payload.item
        // }
      }else if(payload.name === 'blind') {
        state.configuration.blind = payload.item
        // const i = state.configuration.blind
        // if(i.id === payload.item.id) {
        //   state.configuration.blind = ''
        // }else {
        //   state.configuration.blind = payload.item
        // }
      }
      state.rotation = payload.item.rotation
    },
    setAddress(state, payload) {
      state.user.address = payload
    },
    setUserInfo(state, payload) {
      state.user.info = payload
    },
    openCostModal(state) {
      state.cost_modal = true
    },
    closeCostModal(state) {
      state.cost_modal = false
    },
    openAppointmentModal(state) {
      state.appointment_modal = true
    },
    closeAppointmentModal(state) {
      state.appointment_modal = false
    },
    setRotation(state, payload) {
      state.rotation = payload
    },
    setConfigTab(state, payload) {
      state.configTab.page = payload.page
      state.configTab.title = payload.title
      state.configTab.sub_title = payload.sub_title
    }
  },
  actions: {
  },
  getters: {
  }
})
