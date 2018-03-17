<template lang="html">
    <div class="sites-wrapper">
        <section class="site-block" v-for="site in sites">
            <a v-bind:href="site.link">
                <div class="site-title">{{ site.name }}</div>
                <div class="site-image"
                    v-bind:style="`background-image: url('${site.image}');`">
                </div>
            </a>
        </section>
    </div>
</template>

<script>
export default {
    data: () => { return {
        sites: [
            {
                name: '"Тверской химико-технологический колледж"',
                link: 'https://thtk.1mcg.ru/',
                image: 'images/sites/thtk.jpg',
            },
            {
                name: 'Бонсай',
                link: 'https://bonsai.asia/',
                image: 'images/sites/bonsai.png',
            },
        ]
    }}
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
    position: relative;
    //border: 1px solid #888;
    box-sizing: border-box;

    &:hover .site-image { filter: blur(2px); }

    a {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        text-decoration: none;
        box-sizing: border-box;
    }

    .site-title {
        padding: 10px;
        z-index: 1;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
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
