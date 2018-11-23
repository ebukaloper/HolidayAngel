<template>
    <section class="landing">
        <!-- <Nav /> -->
        <div class="sunny">
            <div class="col">
                <div class="col__content">
                    <div class="col__content--head col__content--head-sunny">
                        <h1>Sunny Getaway ?</h1>
                    </div>
                    <div class="col__content--details">
                        <div class="col__content--details-name">
                            <h2>Bulgaria - Sunny beach coast</h2>
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
                        <button @click="() => setModals(true)" class="btn">Visit Bulgaria</button>
                    </div>
                    <div class="col__content--images">
                        <vue-picture-swipe :items="items"></vue-picture-swipe>
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
                        <vue-picture-swipe :items="items"></vue-picture-swipe>
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
  import VuePictureSwipe from 'vue-picture-swipe';
  import Nav from '../../components/Nav.vue';
  import ModalForm from '../../components/ModalForm.vue'
  
  export default {
    components: {
        Nav,
        ModalForm
    },
    data() {
      return {
        items: [
        {
          src: './img/annie-spratt-259356-unsplash.jpg',
          thumbnail: './img/annie-spratt-259356-unsplash.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: './img/ostap-senyuk-203227-unsplash.jpg',
          thumbnail: './img/ostap-senyuk-203227-unsplash.jpg',
          w: 1200,
          h: 900
        },
        {
          src: './img/annie-spratt-259356-unsplash.jpg',
          thumbnail: './img/annie-spratt-259356-unsplash.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: './img/ostap-senyuk-203227-unsplash.jpg',
          thumbnail: './img/ostap-senyuk-203227-unsplash.jpg',
          w: 1200,
          h: 900
        }
      ]};
    },
        computed: {
		 ...mapGetters([
            'getModals',
        ]),
    },
    methods: {
		...mapActions([
            'setModals',
        ]),
    },
  }
</script>

<style lang="scss">
  @import "../../../styles/global.scss";

    .sunny {
        // background-image: linear-gradient(to right bottom, transparentize(#f6d365, 0.1), transparentize(#fda085, 0.2)),url(../../assets/img/annie-spratt-259356-unsplash.jpg);
        background-image: linear-gradient(to right bottom, rgba(202, 173, 80, 0.9), rgba(197, 81, 47, 0.8)), url(../../assets/img/annie-spratt-259356-unsplash.jpg);
        background-size: cover;
        background-position: top;
    }

    .winter {
        // background-image: linear-gradient(to right bottom, transparentize(#a1c4fd, 0.2), transparentize(#c2e9fb, 0.2)),url(../../assets/img/ostap-senyuk-203227-unsplash.jpg);
        background-image: linear-gradient(to right bottom, #1d478ce0, rgba(194, 233, 251, 0.91)), url(../../assets/img/ostap-senyuk-203227-unsplash.jpg);
        background-size: cover;
        background-position: top;
    }

    .pswp__bg {
        background: #1b1b1be6 !important;
    }
</style>
