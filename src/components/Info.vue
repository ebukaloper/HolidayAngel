<template>
    <div v-if="getInfo" class="modal">
        <div class="modal__content">
            <div class="modal__content--header">
                <p class="head">Information</p>
            </div>    
           
            <div class="modal__content--info">
                <p>Hello, This project is incomplete, this is due to the fact that I had insufficient time, which is entirely my fault,</p> <p>I Found the mail late - on the 12th to be precise and the test deadline is today the 13th.</p>
                <p> So I had to rush the development, was able to get to 70%.</p>
                <p> This page is not responsive too and some of the required features are missing. My Apologies. </p>
            </div>    

            <div class="modal__content--buttons">
                <button @click="() => setInfo(false)" class="no">cancel</button>
                <button @click="() => setInfo(false)" class="yes">okay</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        getInfo: {
            type: Boolean,
            default: true
        },
        setInfo: {
            type: Function,
            default: () => {}
        },
    },
}
</script>

<style lang="scss" scoped>
    .modal__content {
        height: auto;
        width: 30%;

        grid-template-rows: 6rem min-content 4rem;

        &--info {
            justify-self: center;
            padding: 4rem 3rem;
            // margin: 0rem 3rem;
            word-spacing: .3rem;
            line-height: 1.5;

            p {
                margin: 1rem 0rem;
            }
        }
    }
</style>
