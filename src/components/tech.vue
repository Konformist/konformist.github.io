<template lang="html">
    <div class="tech-wrapper">
        <div class="tech">
            <div class="tech-title">Хорошо знаю:</div>
            <ul>
                <li v-for="tech in techesGood">{{ tech }}</li>
            </ul>
        </div>
        <div class="tech">
            <div class="tech-title">Не очень хорошо знаю:</div>
            <ul>
                <li v-for="tech in techesBadly">{{ tech }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: () => { return {
        techesGood: [
            'HTML5',
            'CSS3',
            'JS (es2015)',
            'VueJS',
            'ReactJS',
            'GulpJS',
            'Git',
        ],
        techesBadly: [
            'AngularJS',
            'NodeJS',
            'Webpack',
            'Java',
            'Kotlin',
        ],
    }},
}
</script>

<style lang="scss">
.tech-wrapper {
    display: flex;
    flex-wrap: wrap;

    .tech {
        padding: 10px;
        flex-basis: 50%;
        box-sizing: border-box;

        > ul {
            padding: 0;
            margin: 10px 0 0 20px;
        }

        &-title {
            font-weight: 600;
        }
    }
}
</style>
