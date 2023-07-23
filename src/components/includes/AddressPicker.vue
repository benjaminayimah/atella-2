<template>
    <div>
        <div class="mb-24">
            <div class="input-wrapper relative mb-4">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" height="19" viewBox="0 0 19.658 19.661">
                        <path d="M10.248,19.051a9.373,9.373,0,1,1,9.373-9.373A9.386,9.386,0,0,1,10.248,19.051Zm0-17.374a8,8,0,1,0,8,8A8.01,8.01,0,0,0,10.248,1.676Zm9.6,18.29a.678.678,0,0,1-.485-.2l-1.829-1.829a.685.685,0,0,1,.969-.969L20.334,18.8a.69.69,0,0,1,0,.969A.678.678,0,0,1,19.85,19.966Z" transform="translate(-0.875 -0.305)"/>
                    </svg>
                </i>
                <input v-model="address" @input="clearRes" class="w-100" ref="search_input" type="search" data-type="icon" placeholder="Enter your current address">
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
        <div ref="map" class="map mb-24"></div>
        <div id="infowindow-content">
            <img src="" width="16" height="16" id="place-icon" />
            <span id="place-name" class="title"></span><br />
            <span id="place-address"></span>
        </div>
        <div class="flx jc-sb">
            <button @click="$emit('go-back')" class="button-outline br-32 btn-lng scale-in">Back</button>
            <button @click="$emit('toggle')" class="button-primary br-32 btn-md scale-in">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddressPicker',
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
    methods: {
        clearRes() {
            if(this.response.active) {
                this.response.active = false
                this.message = ''
            }
        },
        initializeMap() {
            const google = window.google;
            const input = this.$refs.search_input;
            const greaterTorontoBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(43.494384, -80.237650), // Southwest corner of Greater Toronto
                new google.maps.LatLng(43.855457, -78.905823)  // Northeast corner of Greater Toronto
            );
            const map = new google.maps.Map(this.$refs.map, {
                center: { lat: 43.70, lng: -79.40 }, // Center the map on Greater Toronto
                scrollwheel: true,
                zoom: 10, // Set an appropriate zoom level for the area
            });

            const options = {
                bounds: greaterTorontoBounds, // Set the bounds to Greater Toronto
                componentRestrictions: { country: 'ca' }, // Restrict to Canada
                fields: ['address_components', 'geometry', 'icon', 'name'],
                strictBounds: true,  // Ensure the place results are within the specified bounds
                types: ['establishment'],
            };
            const autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.bindTo('bounds', map);

            const infowindowContent = document.getElementById("infowindow-content");
            this.infowindow = new google.maps.InfoWindow();
            this.infowindow.setContent(infowindowContent);

            autocomplete.addListener('place_changed', () => {
                if (this.marker) {
                    this.marker.setVisible(false);
                }
                let place = autocomplete.getPlace();
                if(!place.geometry || !place.geometry.location) {
                    this.response.active = true
                    this.response.available = false
                    this.response.message = 'Sorry, we are not available in this location yet'
                    return
                }
                if (!this.marker) {
                // Create marker if not already initialized
                    this.marker = new google.maps.Marker({
                        map: map,
                    });
                }
                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(17);
                }
                this.marker.setPosition(place.geometry.location);
                this.marker.setVisible(true);
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
                this.infowindow.open(map, this.marker);

                this.address = address
                this.latitude = place.geometry.location.lat()
                this.longitude = place.geometry.location.lng()
            });
        }
    },
    mounted() {
        this.initializeMap()
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