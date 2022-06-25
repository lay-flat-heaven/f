<template>
    <nav-bar></nav-bar>
    <intro></intro>
    <feat></feat>
    <below></below>

</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Intro from '@/components/Intro.vue'
import Feat from '@/components/Feat.vue'
import Below from '@/components/Below.vue'
export default {
    name: 'Layout',
    components: {
        NavBar,
        Intro,
        Feat,
        Below
    }
}
</script>