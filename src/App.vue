<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="tsx">
import { defineComponent, onBeforeMount, reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
    },
    setup() {
        /**
         * @description: 组件状态
         */
        const state = reactive({
            columns: [
                {
                    title: '操作',
                    width: 250,
                    customRender: () => (
                        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite">123</HelloWorld>
                    ),
                },
            ],
        });

        return {};
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
