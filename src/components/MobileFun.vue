<template>
    <el-carousel indicator-position="none" height="800px" ref="carousel" :arrow="CarouselOption.isArrow"
        :autoplay="CarouselOption.isAuto" :loop="CarouselOption.isLoop">
        <el-carousel-item v-for="item in 3" :key="item" :name="item">
            <image-select :isMobile="false"></image-select>
        </el-carousel-item>
    </el-carousel>

</template>


<script>
import ImageSelect from '@/components/ImageSelect.vue'
export default {
    name: 'MobileFun',
    data() {
        return {
            CarouselOption: {
                isLoop: false,
                isAuto: false,
                isArrow: 'always',
            }
        }
    },
    components: {
        ImageSelect
    }
}
</script>