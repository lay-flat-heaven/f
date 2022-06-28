<template>
    <component :is="current"></component>
</template>

<script>
import Fun from '@/components/Fun.vue'
import Start from '@/components/Start.vue'
export default {
    name: 'Feat',
    data() {
        return {
            current:Fun
        }
    },
    components: {
        Fun,
        Start
    }

}
</script>

