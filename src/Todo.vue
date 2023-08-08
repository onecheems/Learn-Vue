<script>
import { ref } from 'vue'
export default {
    name: 'StyleComp',
    setup() {
        const isTitle = ref(false)
        const colorFont = ref('blue')
        const text = ref('blue')
        function getcolor() {
            colorFont.value = text.value
        }
        return {
            isTitle,
            colorFont,
            text,
            getcolor
        }
    }
}
</script>
<template>
    <div :class="{ title: isTitle, 'text-color': isTitle }">12345</div>
    <div :style="{ color: colorFont }">style</div>
    <input v-model="text" />
    <button @click="getcolor()">点击</button>
</template>

<style scoped>
.title {
    color: red;
}

.text-color {
    background-color: aquamarine;
}
</style>