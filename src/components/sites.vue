<template lang="html">
    <div class="sites-wrapper">
        <a class="site-block"
            v-for="site in sites"
            v-bind:href="site.link"
            v-bind:style="addImageSrc(site.image)">
            <div class="site-title">{{ site.name }}</div>
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
}

.site-block {
    height: 200px;
    flex-basis: 25%;
    display: flex;
    position: relative;
    text-decoration: none;
    box-sizing: border-box;
    transition: .15s;
    filter: grayscale(1);
    background-color: #888;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:hover { filter: grayscale(0); }

    .site-title {
        width: 100%;
        margin-top: auto;
        padding: 10px;
        font-weight: 600;
        text-align: center;
        color: black;
        background-color: rgba(4, 180, 240, .9);
    }
}
</style>
