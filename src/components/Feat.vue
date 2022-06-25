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
            current:Start
        }
    },
    components: {
        Fun,
        Start
    }

}
</script>

