<template lang="html">
    <main>
        <section class="main-wrapper">
            <h2>О себе</h2>
            <my-about></my-about>
        </section>
        <section class="main-wrapper">
            <h2>Технологии</h2>
            <my-tech></my-tech>
        </section>
        <section class="main-wrapper">
            <h2>Портфолио</h2>
            <my-sites></my-sites>
        </section>
    </main>
</template>

<script>
import mySites from './components/sites.vue';
import myAbout from './components/about.vue';
import myTech from './components/tech.vue';

export default {
    data: () => ({
    }),
    methods: {
    },
    components: {
        'my-sites': mySites,
        'my-about': myAbout,
        'my-tech': myTech,
    }
}
</script>

<style lang="scss">
main {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow-y: auto;
    box-sizing: border-box;
    border-right: 1px solid #888;
    border-left: 1px solid #888;
}
.main-wrapper {
    flex-basis: 50%;
    flex-grow: 1;
    box-sizing: border-box;

    > h2 {
        width: 100%;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>
