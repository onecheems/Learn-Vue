<script>
import { ref } from 'vue';

export default {
    name:'App',
    setup(){
        const count=ref(0)
        return{
            count
        }
    }
}

</script>

<template>
 <div class="title">hahaha</div>
</template>

<style scoped>

.title{
    color: red;
}
</style>
