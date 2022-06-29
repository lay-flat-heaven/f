<!-- <template>
    <component :is="current"></component>
</template> -->
<template>
    <el-carousel 
    indicator-position="none" 
    height="800px"
    ref="carousel"
    :arrow="CarouselOption.isArrow" 
    :autoplay="CarouselOption.isAuto" 
    :loop="CarouselOption.isLoop">
        <el-carousel-item v-for="item in componentList" :key="item" :name="item.name">
            <component :is="item" @switch="switchTo"></component>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import Fun from '@/components/Fun.vue'
import Start from '@/components/Start.vue'
import Crop from '@/components/Crop.vue'
export default {
    name: 'Feat',
    data() {
        return {
            current: Start,
            componentList:[
                Start,
                Fun
            ],
            CarouselOption:{
                isLoop:false,
                isAuto:false,
                isArrow:'never',
            }
        }
    },
    components: {
        Fun,
        Start,
        Crop
    },
    methods:{
        switchTo(name){
            this.$refs.carousel.setActiveItem(name)
        }
    }

}
</script>

