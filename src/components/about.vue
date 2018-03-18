<template lang="html">
    <div class="about-wrapper">
        <div class="about-image"></div>
        <div class="about-description">
            Занимаюсь разработкой Frontend'а сайтов.
            Увлекаюсь мобильной разработкой.
            Знаком с Unix системами (FreeBSD, Linux-дистрибутивы).
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.about-wrapper {
    display: flex;
    flex-wrap: wrap;

    .about-image {
        height: 300px;
        flex-basis: 40%;
        background-color: #888;
        //background-image: url();
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .about-description {
        padding: 10px;
        flex-basis: 60%;
        box-sizing: border-box;
    }
}
</style>
