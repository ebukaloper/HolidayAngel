<template>
    <section class="landing">
        <div class="sunny">
            <div class="col">
                <div class="col__content">
                    <div class="col__content--head col__content--head-sunny">
                        <h1>Sunny Getaway ?</h1>
                    </div>
                    <div class="col__content--details">
                        <div class="col__content--details-name">
                            <h2>Maldives - Sunny beach coast</h2>
                        </div>
                        <div class="col__content--details-description">
                            <h3>Known for its water sports, sand dunes and nightlife. Its waterfront is lined by a long sandy beach.</h3>
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
                        <button @click="() => setModals(true)" class="btn">Visit Maldives</button>
                    </div>
                    <div class="col__content--images">
                        <vue-picture-swipe :getGallery="getSunnyGallery"></vue-picture-swipe>
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
                    <div class="col__content--head col__content--head-winter">
                        <h1> Winter Paradise ? </h1>
                    </div>
                    <div class="col__content--details">
                        <div class="col__content--details-name">
                            <h2>Germany - Snowy Frankfurt</h2>
                        </div>
                        <div class="col__content--details-description">
                            <h3>Add a dash of snow for good measure, and you’ll experience an entirely new white wonderland.</h3>
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
                        <button @click="() => setModals(true)" class="btn">Visit Germany</button>
                    </div>
                    <div class="col__content--images">
                        <vue-picture-swipe :getGallery="getWinterGallery"></vue-picture-swipe>
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
        <modal-form :getModals="getModals" :setModals="setModals" />
    </section>
</template>

<script>
/* eslint-disable */

  import { mapGetters, mapActions } from "vuex"
  import ModalForm from '../../components/ModalForm.vue'
  
  export default {
    components: {
        ModalForm,
    },
   
    computed: {
		 ...mapGetters([
            'getModals',
            'getSunnyGallery',
            'getWinterGallery'
        ]),
    },
    methods: {
		...mapActions([
            'setModals',
            'setSunnyGallery',
            'setWinterGallery'
        ]),
    },
    mounted(){
        this.setSunnyGallery();
        this.setWinterGallery();
    }
  }
</script>

<style lang="scss">
    @import "../../../styles/global.scss";

    .sunny {
        background-image: linear-gradient(to right bottom, rgba(202, 173, 80, 0.9), rgba(197, 81, 47, 0.8)), url(../../assets/img/sunny.jpeg);
        background-size: cover;
        background-position: top;
    }

    .winter {
        background-image: linear-gradient(to right bottom, #1d478ce0, rgba(194, 233, 251, 0.91)), url(../../assets/img/winter.jpeg);
        background-size: cover;
        background-position: top;
    }

    .pswp__bg {
        background: #1b1b1be6 !important;
    }
</style>
