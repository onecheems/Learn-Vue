<script>
import { ref, watch } from 'vue'

export default {
    name: 'WatchComp',
    setup() {
        const question = ref('')
        const answer = ref('')
        const imgUrl = ref('')
        const arrs = ref([])

        async function getAnswer() {
            answer.value = 'Thinking...'
            const qingyunkeRes = await fetch(
                `http://124.223.90.239:8000/api/qingyunke?msg=${question.value}`
            )
            const qingyunkAns = await qingyunkeRes.json()
            return qingyunkAns.data.msg
        }

        async function getGif() {
            const res = await fetch('https://yesno.wtf/api')
            const data = await res.json()
            return data.image
        }

        watch(question, () => {
            if (question.value.indexOf('？') === question.value.length - 1) {
                Promise.all([getAnswer(), getGif()]).then(([resAnswer, resGif]) => {
                    arrs.value.push({ arrQuestion: question.value, arrAnswer: resAnswer })
                    answer.value = resAnswer
                    imgUrl.value = resGif
                })
            }
        })

        return {
            question,
            answer,
            arrs,
        }
    }
}
</script>

<template>
    <div v-for="(arr, index) in arrs" class="div1">
        <div>问题{{ index + 1 }}:{{ arr.arrQuestion }}</div>
        <div>回答:{{ arr.arrAnswer }}</div>
    </div>
    <input v-model="question" />
</template>
<style>
* {
    flex-direction: column;
}
</style>