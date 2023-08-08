<script>
import { ref } from 'vue'

export default {
    name: 'VdComp',
    setup() {
        const inputValue = ref('123456')

        setInterval(() => {
            console.log(inputValue.value)
        }, 2000)

        function printInput(e) {
            // console.log(inputValue.value)
            inputValue.value = e.target.value
        }
        return {
            inputValue,
            printInput
        }
    }
}
</script>
<template>
    <input v-model="inputValue" />
</template>