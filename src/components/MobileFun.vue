<template>
    <el-carousel indicator-position="none" height="600px" ref="mobileCarousel" :arrow="CarouselOption.isArrow"
        :autoplay="CarouselOption.isAuto" :loop="CarouselOption.isLoop" @touchstart="start" @touchmove="move"
        @touchend="end">
        <el-carousel-item v-for="item in 3" :key="item" :name="item">
            <div v-if="item == 1" class="mobile-image-card">
                <image-select :isMobile="true" :pheight="320" :pwidth="240" @transUrl="setUrlPeople"></image-select>
            </div>
             <div v-if="item == 2" class="mobile-image-card">
                <image-select :isMobile="true" :pheight="320" :pwidth="240" @transUrl="setUrlClothe"></image-select>
            </div>
        </el-carousel-item>
    </el-carousel>

</template>


<script>
import ImageSelect from '@/components/ImageSelect.vue'
import Vconsole from 'vconsole'

const v = new Vconsole()
export default {
    name: 'MobileFun',
    data() {
        return {
            startPoint: 0,
            endPoint: 0,
            CarouselOption: {
                isLoop: false,
                isAuto: false,
                isArrow: 'never',
            },
            callbackArr:['setUrlPeople','setUrlClothe']
        }
    },
    methods: {
        start(e) {
            this.startPoint = e.changedTouches[0].pageX

        },
        move(e) {
            this.endPoint = e.changedTouches[0].pageX

        },
        end(e) {


            console.log("start ", this.startPoint)
            console.log("end ", this.endPoint)
            var direction = this.startPoint - this.endPoint
            if (this.startPoint != 0 && this.endPoint != 0) {
                if (direction < 0 && direction < -60) {
                    this.$refs.mobileCarousel.prev()
                    this.reset()
                }
                if (direction > 0 && direction > 60) {
                    this.$refs.mobileCarousel.next()
                    this.reset()
                }
            }

            this.reset()
        },
        reset() {
            this.startPoint = 0
            this.endPoint = 0

        }
    },
    components: {
        ImageSelect
    }
}
</script>

<style>
.mobile-image-card {
    position: relative;
    top: 70px;
}
</style>