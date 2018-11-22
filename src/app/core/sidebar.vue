<template>
        <nav class="sidebar">
            <ul class="side-nav">
                <li class="side-nav__item side-nav__item--active">
                    <a href="#" class="side-nav__link side-nav__link--active">
                        <svg class="side-nav__icon">
                            <use xlink:href="./img/sprite.svg#icon-user"></use>
                        </svg>
                        <span>Contacts ( {{ getContacts.length + getStarredContacts.length }} )</span>
                    </a>
                </li>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <svg class="side-nav__icon">
                            <use xlink:href="./img/sprite.svg#icon-cog"></use>
                        </svg>
                        <span>Settings</span>
                    </a>
                </li>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <svg class="side-nav__icon">
                            <use xlink:href="./img/sprite.svg#icon-question-circle"></use>
                        </svg>
                        <span>Help</span>
                    </a>
                </li>
            </ul>
        </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
		 ...mapGetters([
            'getContacts',
            'getStarredContacts',
        ]),
    },
}
</script>

