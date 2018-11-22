<template>
    <div v-if="getModals[0].addModal" class="modal">
        <div class="modal__content">
            <div class="modal__content--header">
                <p class="head">{{ modalTitle }}</p>
            </div>    
            <form class="modal__content--form">

                <!-- First name and Last name -->
                <div class="modal__content--form-group">
                    <div class="avatar">
                        <figure class="header__avatar">
                            <img src="https://robohash.org/user1.png" alt="User Avatar" class="header__avatar--img">
                        </figure>
                    </div>

                    <div class="group"> <input type="text" placeholder="First name" required> </div>
                    
                    <div class="group"> <input type="text" placeholder="Last name" required> </div>    
                </div>

                <!-- Company and Job title -->
                <div class="modal__content--form-group">
                    <div class="img">
                        <span> <svg>  <use xlink:href="./img/sprite.svg#icon-building-o"></use>  </svg> </span>
                    </div>

                    <div class="group"> <input type="text" placeholder="Company" required> </div>
                    
                    <div class="group"> <input type="text" placeholder="Job title" required> </div>    
                </div>

                <!-- Email -->
                 <div class="modal__content--form-group">
                    <div class="img">
                        <span> <svg>  <use xlink:href="./img/sprite.svg#icon-envelope"></use>  </svg> </span>
                    </div>
                    
                    <div class="group full"> <input type="text" placeholder="Email" required> </div>    
                </div>

                <!-- Phone -->
                 <div class="modal__content--form-group">
                    <div class="img">
                        <span> <svg>  <use xlink:href="./img/sprite.svg#icon-phone"></use>  </svg> </span>
                    </div>
                    
                    <div class="group full"> <input type="text" placeholder="Phone" required> </div>    
                </div>

                <!-- Notes -->
                 <div class="modal__content--form-group">
                    <div class="img">
                        <span> <svg>  <use xlink:href="./img/sprite.svg#icon-list-alt"></use>  </svg> </span>
                    </div>
                    
                    <div class="group full"> <input type="text" placeholder="Notes" required> </div>    
                </div>

            </form>

            <div class="modal__content--buttons">
                <button @click="() => setModals(false)" class="no">cancel</button>
                <button @click="() => setModals(false)" class="yes">save</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modalTitle: {
            type: String,
            default: ''
        },
        getModals: {
            type: Array,
            default: []
        },
        setModals: {
            type: Function,
            default: () => {}
        },
    },
}
</script>
