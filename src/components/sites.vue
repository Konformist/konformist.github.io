<template lang="html">
    <div class="sites-wrapper">
        <a class="site-block" v-for="site in sites" v-bind:href="site.link">
            <div class="site-title">{{ site.name }}</div>
            <div class="site-image" v-bind:style="addImageSrc(site.image)"></div>
        </a>
    </div>
</template>

<script>
export default {
    data: () => { return {
        sites: [
            {
                name: '"Тверской химико-технологический колледж"',
                link: 'https://thtk.1mcg.ru/',
                image: 'thtk.jpg',
            },
            {
                name: 'Бонсай',
                link: 'https://bonsai.asia/',
                image: 'bonsai.png',
            },
        ]
    }},
    methods: {
        addImageSrc: (name) => {
            return `background-image: url('images/sites/${name}');`;
        }
    }
}
</script>

<style lang="scss">
.sites-wrapper {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #888;
}

.site-block {
    height: 200px;
    flex-basis: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: black;
    text-decoration: none;
    box-sizing: border-box;

    &:hover .site-title {
        max-width: 100%;
        max-height: 100%;
        padding: 30px;
    }

    .site-title {
        max-width: calc(100% - 40px);
        width: 100%;
        max-height: calc(100% - 40px);
        padding: 10px;
        z-index: 1;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        transition: .15s;
        box-sizing: border-box;
        background-color: rgba(102, 170, 255, .9);
    }

    .site-image {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #888;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}
</style>
