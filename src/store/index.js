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
        blind: {}
      },
    configTab: { page: '', title: '', sub_title: ''},
    types: [
      {id: 1, name: 'Atella studio', sub_title: '455 Gross sq. fe.', price: 102500, image: require('@/assets/images/houses/atella_type.png'), rotation: 150 },
      {id: 2, name: 'Atella one', sub_title: '455 Gross sq. fe.', price: 192500, image: require('@/assets/images/houses/atella_type.png'), rotation: 100}
    ],
    colors: [
      {id: 3, name: 'Light', image: require('@/assets/images/houses/color_light.png'), rotation: 90},
      {id: 4, name: 'Dark', image: require('@/assets/images/houses/color_dark.png'), rotation: 80},
      {id: 5, name: 'Neutral', image: require('@/assets/images/houses/color_neutral.png'), rotation: 180}
    ],
    appliances: [
      {id: 6, name: 'Standard', price: 5000, image: require('@/assets/images/houses/appliance_standard.png'), rotation: 130},
      {id: 7, name: 'Premium', price: 192500, image: require('@/assets/images/houses/appliance_premium.png'), rotation: 70}
    ],
    exterior_decks: [
      {id: 8, name: 'Standard', price: 5000, image: require('@/assets/images/houses/exteriordeck.png'), rotation: 170},
      {id: 9, name: 'Extra wide', price: 192500, image: require('@/assets/images/houses/exteriordeck.png'), rotation: 60}
    ],
    sewages: [
      {id: 10, name: 'Grey water', price: 5000, image: require('@/assets/images/houses/sewage_1.png'), rotation: 180},
      {id: 11, name: 'Connect with principal dwelling', price: 192500, image: require('@/assets/images/houses/sewage_2.png'), rotation: 140}
    ],
    blinds: [
      {id: 12, name: 'No blinds', price: 5000, image: require('@/assets/images/houses/blinds.png'), rotation: 50},
      {id: 13, name: 'Roller blinds', price: 192500, image: require('@/assets/images/houses/blinds.png'), rotation: 40}
    ],
    cost_modal: false,
    appointment_modal: false
  },
  mutations: {
    setSelected(state, payload) {
      if(payload.name === 'type') {
        state.configuration.type = payload.item
      }else if(payload.name === 'color') {
        const i = state.configuration.color
        if(i.id === payload.item.id) {
          state.configuration.color = ''
        }else {
          state.configuration.color = payload.item
        }
      }else if(payload.name === 'appliance') {
        const i = state.configuration.appliance
        if(i.id === payload.item.id) {
          state.configuration.appliance = ''
        }else {
          state.configuration.appliance = payload.item
        }
      }else if(payload.name === 'exterior') {
        const i = state.configuration.exterior
        if(i.id === payload.item.id) {
          state.configuration.exterior = ''
        }else {
          state.configuration.exterior = payload.item
        }
      }else if(payload.name === 'sewage') {
        const i = state.configuration.sewage
        if(i.id === payload.item.id) {
          state.configuration.sewage = ''
        }else {
          state.configuration.sewage = payload.item
        }
      }else if(payload.name === 'blind') {
        const i = state.configuration.blind
        if(i.id === payload.item.id) {
          state.configuration.blind = ''
        }else {
          state.configuration.blind = payload.item
        }
      }
      state.rotation = payload.item.rotation
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
