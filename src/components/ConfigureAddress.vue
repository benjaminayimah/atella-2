<template>
    <div>
        <div v-if="!summary">
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
            <div id="infowindow-content">
                <img src="" width="16" height="16" id="place-icon" />
                <span id="place-name" class="title"></span><br />
                <span id="place-address"></span>
            </div>
            <div class="flx jc-sb">
                <button @click="goBack" class="button-outline br-32 btn-lng scale-in">Back</button>
                <button @click="toggle" class="button-primary br-32 btn-md scale-in">Continue</button>
            </div>
        </div>
        <div v-else class="flx column gap-40">
            <div class="flx ai-c jc-sb br-16 bg-white card-with-border">
                <div>
                    <div class="mb-4 fs-103rem">Studio</div>
                    <div class="gray">320 gross sq.ft</div>
                </div>
                <div>
                    <router-link :to="{ name: 'ConfigureHome'}" class="gap-4 a-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16.919 16.166">
                            <path d="M-3593.823-882.342a.749.749,0,0,1-.2-.713l.857-3.427a.75.75,0,0,1,.2-.348l10.708-10.708a2.555,2.555,0,0,1,1.816-.751,2.55,2.55,0,0,1,1.815.751,2.57,2.57,0,0,1,0,3.631l-10.708,10.708a.749.749,0,0,1-.348.2l-3.427.857a.753.753,0,0,1-.181.022A.751.751,0,0,1-3593.823-882.342Zm12.624-14.134-10.561,10.561-.5,2.012,2.012-.5,10.561-10.561a1.067,1.067,0,0,0,0-1.509,1.059,1.059,0,0,0-.754-.312A1.063,1.063,0,0,0-3581.2-896.476Zm-4.385,14.353a.75.75,0,0,1-.75-.75.75.75,0,0,1,.75-.75h7.709a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75Z" transform="translate(3594.043 898.288)" fill="#2b441d"/>
                        </svg>
                        Edit
                    </router-link>
                </div>
            </div>
            <div class="grid grid-col-2 gap-16 config-summary">
                <div class="col">
                    <div class="col-row mb-16">
                        <label for="exterior">Exterior deck</label>
                        <div id="exterior">Extra wide</div>
                    </div>
                    <div class="col-row">
                        <label for="exterior">Entry & Blinds</label>
                        <div id="exterior">No Blinds</div>
                    </div>
                </div>
                <div class="col">
                    <div class="col-row mb-16">
                        <label for="sewage">Sewage option</label>
                        <div id="sewage">The Roof color</div>
                    </div>
                    <div class="col-row">
                        <label for="solor">Solor type</label>
                        <div id="solor">Premium</div>
                    </div>
                </div>
            </div>
            <div class="flx jc-sb">
                <div class="col-row">
                    <label for="address">Address</label>
                    <div id="address">The Roof color</div>
                </div>
                <div>
                    <a @click.prevent="toggle" href="#" class="gap-4 a-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16.919 16.166">
                            <path d="M-3593.823-882.342a.749.749,0,0,1-.2-.713l.857-3.427a.75.75,0,0,1,.2-.348l10.708-10.708a2.555,2.555,0,0,1,1.816-.751,2.55,2.55,0,0,1,1.815.751,2.57,2.57,0,0,1,0,3.631l-10.708,10.708a.749.749,0,0,1-.348.2l-3.427.857a.753.753,0,0,1-.181.022A.751.751,0,0,1-3593.823-882.342Zm12.624-14.134-10.561,10.561-.5,2.012,2.012-.5,10.561-10.561a1.067,1.067,0,0,0,0-1.509,1.059,1.059,0,0,0-.754-.312A1.063,1.063,0,0,0-3581.2-896.476Zm-4.385,14.353a.75.75,0,0,1-.75-.75.75.75,0,0,1,.75-.75h7.709a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75Z" transform="translate(3594.043 898.288)" fill="#2b441d"/>
                        </svg>
                        Edit
                    </a>
                </div>
            </div>
            <total-card :button="false" />
            <div class="grand-total br-16 bg-white flx column gap-24">
                <grand-total-card />
            </div>
            <div class="flx jc-sb">
                <button @click="toggle" class="button-outline br-32 btn-lng scale-in">Back</button>
                <button @click="nextPage" class="button-primary br-32 btn-md scale-in">Continue</button>
            </div>
        </div>
    </div>
</template>

<script>
import GrandTotalCard from '@/components/includes/GrandTotalCard.vue'
import TotalCard from '@/components/includes/TotalCard.vue'
export default {
  components: { TotalCard, GrandTotalCard },
    name: 'ConfigureAddress',
    data() {
        return {
            address: '',
            latitude: '',
            longitude: '',
            response: { active: false, available: false, message: ''},
            summary: false
        }
    },
    watch: {
        summary(newSummary) {
            this.setSummary(newSummary)
        }
    },
    methods: {
        setPage() {
            const data = { page: 2, title: 'Where are we installing your atella?', sub_title: 'Share your street address to verify availability and refine your installation estimate.'}
            this.$store.commit('setConfigTab', data)
        },
        setSummary(payload) {
            const data = { page: 2, title: 'Your configuration summary', sub_title: 'Review and confirm your selection, then continue to keep your reservation.'}
            payload ? this.$store.commit('setConfigTab', data) : this.setPage()
        },
        toggle() {
            this.summary = !this.summary
        },
        clearRes() {
            if(this.response.active) {
                this.response.active = false
                this.message = ''
            }
        },
        goBack() {
            this.$router.push({ name: 'ConfigureHome'})
        },
        nextPage() {
            this.$router.push({ name: 'ConfigurePayment'})
        }
    },
    mounted() {
        this.setPage()
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
                    place.address_components[0].short_name) ||
                    "",
                    (place.address_components[1] &&
                    place.address_components[1].short_name) ||
                    "",
                    (place.address_components[2] &&
                    place.address_components[2].short_name) ||
                    "",
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

.card-with-border {
    border: 1px solid #F0F0F0;
    padding: 14px 16px;
    a {
        color: #2B441D;;
    }
}
.config-summary {
    .col:first-child {
        border-right: 1px solid #D9D9D9;
    }
}
.col-row {
    label {
        color: var(--gray);
        font-size: 0.82rem;
    }
    div {
        font-size: 1.1rem;
    }
}
</style>