<template>
    <div class="header">

        <button class="nav-btn"></button>

        <div class="header__logo">
            <span> Fluid Contact </span>
        </div>

        <form action="#" class="search">
            <button class="search__button">
                <svg class="search__icon">
                    <use xlink:href="./img/sprite.svg#icon-search"></use>
                </svg>
            </button>
            <input type="text" class="search__input" placeholder="Search">
        </form>

        <figure class="header__avatar">
            <img src="https://robohash.org/contact.png" alt="User Avatar" class="header__avatar--img">
        </figure>
        
    </div>
</template>
