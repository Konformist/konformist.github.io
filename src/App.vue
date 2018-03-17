<template lang="html">
    <main>
        <section class="main-wrapper">
            <h2>Портфолио</h2>
            <my-sites></my-sites>
        </section>
    </main>
</template>

<script>
import mySites from './components/sites.vue';

export default {
    data: () => ({
    }),
    methods: {
    },
    components: {
        'my-sites': mySites,
    }
}
</script>

<style lang="scss">
main {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    flex-grow: 1;
    overflow-y: auto;
    box-sizing: border-box;
    border: 1px solid #888;
    border-top-width: 0;
    border-bottom-width: 0;
}
.main-wrapper {
    border: 1px solid #888;
    border-right-width: 0;
    border-left-width: 0;

    h2 {
        width: 100%;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>
