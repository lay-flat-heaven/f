<!-- <template>
    <component :is="current"></component>
</template> -->
<template>
    <el-carousel indicator-position="none" ref="carousel" :height="currentHeight" :arrow="CarouselOption.isArrow"
        :autoplay="CarouselOption.isAuto" :loop="CarouselOption.isLoop" @change="onPageChange">
        <el-carousel-item v-for="item in componentList" :key="item" :name="item.name" >
            <component :is="item" @switch="switchTo" @mobile="fitMobileHeight" :pallShow="winFunShow"></component>
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

        bridge.currentHeight = "1100px"
        console.log("currentHeight", bridge.currentHeight)

        bridge.isMobile = true
    }
}
function handleWinResize(e) {
    if (e.matches) {
        bridge.currentHeight = "750px"
        console.log("currentHeight", bridge.currentHeight)
        bridge.isMobile = false
    }

}
mediaQueryMobile.addEventListener('change', handleMobileResize)
mediaQueryWin.addEventListener('change', handleWinResize)
let bridge = null
export default {
    name: 'Feat',
    data() {
        return {
            winFunShow:false,
            isMobile: false,
            isMainFun :false,
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

            bridge.currentHeight = "1100px"
            console.log("currentHeight", bridge.currentHeight)
            bridge.isMobile = true
        }
        if (mediaQueryWin.matches) {

            bridge.currentHeight = "750px"
            console.log("currentHeight", bridge.currentHeight)
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
            this.currentHeight = "600px"
        },
        fitMobileHeight() {

            if (this.isMobile == true) {
                this.currentHeight = "600px"
            }

        },
        onPageChange(currentPage,nextPage){
            console.log("page change")
            this.winFunShow = true
        }

    }

}

</script>

<style>
</style>

