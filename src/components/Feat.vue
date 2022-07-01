<!-- <template>
    <component :is="current"></component>
</template> -->
<template>
    <el-carousel indicator-position="none" ref="carousel" :height="currentHeight" :arrow="CarouselOption.isArrow"
        :autoplay="CarouselOption.isAuto" :loop="CarouselOption.isLoop">
        <el-carousel-item v-for="item in componentList" :key="item" :name="item.name">
            <component :is="item" @switch="switchTo" @mobile="fitMobileHeight"></component>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import Fun from '@/components/Fun.vue'
import Start from '@/components/Start.vue'
import Crop from '@/components/Crop.vue'


const mediaQueryMobile = window.matchMedia(`(max-width: 768px)`)
const mediaQueryWin = window.matchMedia(`(min-width: 768px)`)
function handleMobileResize(e) {
    if (e.matches) {
        console.log("嘿嘿嘿")
        bridge.currentHeight = "1100px"
        bridge.isMobile = true
    }
}
function handleWinResize(e){
     if (e.matches) {
        console.log("嘿嘿嘿嘿")
        bridge.currentHeight = "750px"
        bridge.isMobile = false
    }

}
mediaQueryMobile.addEventListener('change', handleMobileResize)
mediaQueryWin.addEventListener('change',handleWinResize)
let bridge = null
export default {
    name: 'Feat',
    data() {
        return {
            isMobile:false,
            currentHeight: "750px",
            current: Start,
            componentList: [
                Start,
                Fun
            ],
            CarouselOption: {
                isLoop: false,
                isAuto: false,
                isArrow: 'never',
            }
        }
    },
    created: function () {

        bridge = this
        if (mediaQueryMobile.matches) {
            console.log("嘿嘿嘿")
            bridge.currentHeight = "1100px"
            bridge.isMobile = true
        }
        if (mediaQueryWin.matches) {
            console.log("嘿嘿嘿")
            bridge.currentHeight = "750px"
            bridge.isMobile = false
        }


    },
    components: {
        Fun,
        Start,
        Crop
    },
    methods: {
        switchTo(name) {
            this.$refs.carousel.setActiveItem(name)
        },
        fitMobileHeight(){

            if (this.isMobile == true){
                this.currentHeight = "600px"
            }else {
                this.currentHeight = "1100px"
            }

        }
    }

}

</script>

<style>
</style>

