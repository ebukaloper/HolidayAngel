<template>
    <div class="landing">
        <div class="sunny">mdfgdsfjbfhndsf</div>
        <div class="cloudy">kmijhudbdkjwe</div>
    </div>
</template>

<script>
/* eslint-disable */

import { mapGetters, mapActions } from "vuex"
import AddModal from "../../components/AddModal.vue"
import Info from "../../components/Info.vue"

export default {
    name: 'landing',
    components: {
        AddModal,
        Info
    },
    data(){
        return {
            avatarUrl: 'https://robohash.org/'
        }
    },
    computed: {
		 ...mapGetters([
           
        ]),
    },
    methods: {
		...mapActions([
            'setModals',
            'setInfo'
        ]),
    },
    mounted() {
    
    }
}
</script>

<style lang="scss">
  @import "../../../styles/global.scss";

    .hover {
        background-color: $color-grey-light-1;
    }
</style>
