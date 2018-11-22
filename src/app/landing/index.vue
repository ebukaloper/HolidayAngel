<template>
    <div class="landing">
        <div class="sunny">
            <div class="col">
                <div class="col__content">
                    <div class="col__content--head col__content--head-sunny">Sunny Getaway ?</div>
                    <div class="col__content--details">
                        <div class="col__content--details-name">
                            <h3>Bulgaria - Sunny beach coast</h3>
                        </div>
                        <div class="col__content--details-description">
                            <h4>Known for its water sports, sand dunes and nightlife. Its waterfront is lined by a long sandy beach.</h4>
                        </div>
                        <div class="col__content--details-info">
                            <div class="reviews">
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star-o"></use>  </svg>
                                    <p> 497 reviews </p>
                            </div>
                            <div class="duration">
                                <svg>  <use xlink:href="./img/sprite.svg#icon-clock"></use>  </svg>
                                <p> 3 days </p>
                            </div>
                        </div>

                    </div>
                    <div class="col__content--cta">
                        <button class="btn">Visit Bulgaria</button>
                    </div>
                </div>    
            </div>
            <div class="sunny__price">
                <p class="sunny__price--text">
                    <span><s>₦200,000</s></span>
                    <span>₦170,000</span>
                </p>
            </div>
        </div>
        <div class="winter">
             <div class="col">
                <div class="col__content">
                    <div class="col__content--head col__content--head-winter">Winter Paradise ?</div>
                    <div class="col__content--details">
                        <div class="col__content--details-name">
                            <h3>Germany - Snowy Frankfurt</h3>
                        </div>
                        <div class="col__content--details-description">
                            <h4>Add a dash of snow in the higher altitudes for good measure, and you’ll experience an entirely new white wonderland.</h4>
                        </div>
                        <div class="col__content--details-info">
                            <div class="reviews">
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star"></use>  </svg>
                                    <svg>  <use xlink:href="./img/sprite.svg#icon-star-o"></use>  </svg>
                                    <p> 328 reviews </p>
                            </div>
                            <div class="duration">
                                <svg>  <use xlink:href="./img/sprite.svg#icon-clock"></use>  </svg>
                                <p> 4 days </p>
                            </div>
                        </div>

                    </div>
                    <div class="col__content--cta">
                        <button class="btn">Visit Germany</button>
                    </div>
                </div>    
            </div>
             <div class="winter__price">
                <p class="winter__price--text">
                    <span><s>₦220,000</s></span>
                    <span>₦195,000</span>
                </p>
            </div>
        </div>
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
    .sunny {
        background-image: linear-gradient(to right bottom, transparentize(#f6d365, 0.1), transparentize(#fda085, 0.2)),url(../../assets/img/annie-spratt-259356-unsplash.jpg);
        background-size: cover;
        background-position: top;
    }

    .winter {
        // background-image: linear-gradient(to right bottom, transparentize(#a1c4fd, 0.2), transparentize(#c2e9fb, 0.2)),url(../../assets/img/ostap-senyuk-203227-unsplash.jpg);
        background-image: linear-gradient(to right bottom, rgba(29, 71, 140, 0.71), rgba(194, 233, 251, 0.91)), url(/img/ostap-senyuk-203227-unsplash.6d6deccc.jpg);
        background-size: cover;
        background-position: top;
    }
</style>
