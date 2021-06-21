import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import * as volar from '@volar/experimental/compiler';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(volar.vitePluginOptions),
        vueJsx({
            enableObjectSlots: false,
            optimize: true,
        }),
    ],
});
