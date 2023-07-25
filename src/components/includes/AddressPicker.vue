<template>
    <div>
        <div class="mb-24">
            <div class="input-wrapper relative mb-4">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" height="19" viewBox="0 0 19.658 19.661">
                        <path d="M10.248,19.051a9.373,9.373,0,1,1,9.373-9.373A9.386,9.386,0,0,1,10.248,19.051Zm0-17.374a8,8,0,1,0,8,8A8.01,8.01,0,0,0,10.248,1.676Zm9.6,18.29a.678.678,0,0,1-.485-.2l-1.829-1.829a.685.685,0,0,1,.969-.969L20.334,18.8a.69.69,0,0,1,0,.969A.678.678,0,0,1,19.85,19.966Z" transform="translate(-0.875 -0.305)"/>
                    </svg>
                </i>
                <input v-model="address" @input="clearRes" class="w-100" id="search_input" type="search" data-type="icon" placeholder="Enter your current address">
            </div>
            <div v-if="response.active" class="flx gap-4 ai-c">
                <svg v-if="response.available" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 28 28">
                    <path d="M-1985.9,23.9A13.908,13.908,0,0,1-1990,14a13.91,13.91,0,0,1,4.1-9.9A13.907,13.907,0,0,1-1976,0a13.908,13.908,0,0,1,9.9,4.1A13.91,13.91,0,0,1-1962,14a13.908,13.908,0,0,1-4.1,9.9A13.908,13.908,0,0,1-1976,28,13.907,13.907,0,0,1-1985.9,23.9Zm1.414-18.385A11.924,11.924,0,0,0-1988,14a11.924,11.924,0,0,0,3.515,8.485A11.924,11.924,0,0,0-1976,26a11.924,11.924,0,0,0,8.486-3.514A11.924,11.924,0,0,0-1964,14a11.924,11.924,0,0,0-3.515-8.486A11.924,11.924,0,0,0-1976,2,11.924,11.924,0,0,0-1984.486,5.514Zm6.162,13.856-4.539-4.487a.928.928,0,0,1-.017-1.311.928.928,0,0,1,1.311-.016l3.823,3.79L-1970.5,8.7a.928.928,0,0,1,1.307-.114.927.927,0,0,1,.115,1.306l-7.891,9.414a.93.93,0,0,1-.664.331h-.046A.93.93,0,0,1-1978.323,19.371Z" transform="translate(1990)" fill="#07b923"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 28 28">
                    <path d="M-1985.9,23.9A13.908,13.908,0,0,1-1990,14a13.91,13.91,0,0,1,4.1-9.9A13.907,13.907,0,0,1-1976,0a13.908,13.908,0,0,1,9.9,4.1A13.91,13.91,0,0,1-1962,14a13.908,13.908,0,0,1-4.1,9.9A13.908,13.908,0,0,1-1976,28,13.907,13.907,0,0,1-1985.9,23.9Zm1.414-18.385A11.924,11.924,0,0,0-1988,14a11.924,11.924,0,0,0,3.515,8.485A11.924,11.924,0,0,0-1976,26a11.924,11.924,0,0,0,8.486-3.514A11.924,11.924,0,0,0-1964,14a11.924,11.924,0,0,0-3.515-8.486A11.924,11.924,0,0,0-1976,2,11.924,11.924,0,0,0-1984.486,5.514Zm12.811,14.792-4.656-4.657-4.537,4.538a.951.951,0,0,1-1.344,0,.951.951,0,0,1,0-1.344l4.537-4.538-4.42-4.419a.951.951,0,0,1,0-1.344.949.949,0,0,1,1.343,0l4.419,4.419,4.538-4.538a.952.952,0,0,1,1.345,0,.951.951,0,0,1,0,1.344l-4.539,4.538,4.657,4.657a.952.952,0,0,1,0,1.344.948.948,0,0,1-.672.278A.95.95,0,0,1-1971.674,20.307Z" transform="translate(1990)" fill="#e01818"/>
                </svg>
                <span>{{ response.message }}</span>
            </div>
        </div>
        <div id="map" class="map mb-24"></div>
        <div id="infowindow-content" ref="infowindow_content">
            <img src="" width="16" height="16" id="place-icon" />
            <span id="place-name" ref="name" class="title"></span><br />
            <span id="place-address"></span>
        </div>
        <div class="flx jc-sb">
            <button @click="$emit('go-back')" class="button-outline br-32 btn-md icon-btn icon-left gap-4 scale-in">
                <svg xmlns="http://www.w3.org/2000/svg" height="13.501" viewBox="0 0 15.243 13.501">
                    <path d="M15.216,11.51a.919.919,0,0,1,.007,1.294l-4.268,4.282H22.218a.914.914,0,0,1,0,1.828H10.955L15.23,23.2a.925.925,0,0,1-.007,1.294.91.91,0,0,1-1.287-.007L8.142,18.647h0a1.026,1.026,0,0,1-.19-.288.872.872,0,0,1-.07-.352.916.916,0,0,1,.26-.64l5.794-5.836A.9.9,0,0,1,15.216,11.51Z" transform="translate(-7.882 -11.252)"/>
                </svg>
                Back
            </button>
            <button @click="$emit('toggle', address)" class="button-primary br-32 btn-md gap-4 icon-btn icon-right scale-in" :class="{ 'button-disabled' : address == '' || !response.available }" :disabled="!address && !response.available ? true : false">
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" height="13.501" viewBox="0 0 15.243 13.501">
                    <path d="M15.791,11.51a.919.919,0,0,0-.007,1.294l4.268,4.282H8.789a.914.914,0,0,0,0,1.828H20.052L15.777,23.2a.925.925,0,0,0,.007,1.294.91.91,0,0,0,1.287-.007l5.794-5.836h0a1.026,1.026,0,0,0,.19-.288.872.872,0,0,0,.07-.352.916.916,0,0,0-.26-.64l-5.794-5.836A.9.9,0,0,0,15.791,11.51Z" transform="translate(-7.882 -11.252)" fill="#fff"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'AddressPicker',
    computed: {
        ...mapState({
            old_address: (state) => state.user.address
        })
    },
    data() {
        return {
            marker: null,
            infowindow: null,
            address: '',
            latitude: '',
            longitude: '',
            response: { active: false, available: false, message: ''},            
        }
    },
    address(newAddress) {
        this.resetInput(newAddress)
    },
    methods: {
        clearRes() {
            if(this.response.active) {
                this.response.active = false
                this.response.available = false
                this.message = ''
            }
        },
        resetInput(input) {
            if(input == '') {
                this.resetInput()
            }
        },
        setAddress() {
            // console.log(this.old_address)
            // this.address = this.old_address
            // this.response.available = true
        },
        initializeMap() {
            const google = window.google
            const input = document.querySelector('#search_input')
            const greaterTorontoBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(43.494384, -80.237650), // Southwest corner of Greater Toronto
                new google.maps.LatLng(43.855457, -78.905823)  // Northeast corner of Greater Toronto
            );
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 43.70, lng: -79.40 }, // Center the map on Greater Toronto
                scrollwheel: true,
                zoom: 10, // Set an appropriate zoom level for the area
                disableDefaultUI: true, // Disable the default UI controls

            });
            const marker = new google.maps.Marker({
                map: map,
            });
            const options = {
                bounds: greaterTorontoBounds, // Set the bounds to Greater Toronto
                componentRestrictions: { country: 'ca' }, // Restrict to Canada
                fields: ['address_components', 'geometry', 'icon', 'name'],
                strictBounds: true,  // Ensure the place results are within the specified bounds
                types: ['establishment'],
            };
            const autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.bindTo('bounds', map)
            const infowindow = new google.maps.InfoWindow();
            const infowindowContent = document.getElementById("infowindow-content");

            infowindow.setContent(infowindowContent);


            autocomplete.addListener('place_changed', () => {
                marker.setVisible(false)
                let place = autocomplete.getPlace();
                if(!place.geometry || !place.geometry.location) {
                    this.response.active = true
                    this.response.available = false
                    this.response.message = 'Sorry, we are not available in this location yet'
                    return
                }
                if(place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                }else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(17);
                }
                marker.setPosition(place.geometry.location);
                marker.setVisible(true);
                this.response.active = true
                this.response.available = true
                this.response.message = 'Congrats! We\'re available in this location'
                let address = "";
                if (place.address_components) {
                    address = [
                        (place.address_components[0] &&
                        place.address_components[0].short_name) || "",
                        (place.address_components[1] &&
                        place.address_components[1].short_name) || "",
                        (place.address_components[2] &&
                        place.address_components[2].short_name) || "",
                    ].join(" ");
                }
                infowindowContent.children["place-icon"].src = place.icon;
                infowindowContent.children["place-name"].textContent = place.name;
                infowindow.open(map, marker);

                this.address = address
                this.latitude = place.geometry.location.lat()
                this.longitude = place.geometry.location.lng()
            })
        }
    },
    mounted() {
        this.initializeMap()
        this.old_address ? this.setAddress() : ''
    }
}
</script>

<style lang="scss" scoped>
input {
    height: 54px;
}
.map {
    height: 250px;
    border: 1px solid #F0F0F0;
    border-radius: 16px;

}
#infowindow-content {
  display: none;
}
#map #infowindow-content {
  display: inline;
}
#infowindow-content .title {
  font-weight: bold;
}
</style>