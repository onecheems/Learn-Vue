<script>
import { timecount } from '@/util/time.js'
import { timer } from '@/util/time.js'
export default {
    name: 'Time',
    setup() {
        function controll() {
            if (!timer.value) {
                timer.value = setInterval(() => {
                    timecount.value--
                    if (timecount.value === 0) {
                        clearInterval(timer.value)
                        timer.value = null
                    }
                }, 1000)
            }
            else {
                clearInterval(timer.value)
                timer.value = null
            }
        }

        return {
            timecount,
            controll,
        }
    }
}
</script>

<template>
    <div>{{ timecount }}</div>
    <button v-on:click="controll">控制</button>
</template>