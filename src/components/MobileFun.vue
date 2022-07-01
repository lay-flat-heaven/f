<template>
    <el-carousel indicator-position="none" height="600px" ref="carousel" :arrow="CarouselOption.isArrow"
        :autoplay="CarouselOption.isAuto" :loop="CarouselOption.isLoop">
        <el-carousel-item v-for="item in 3" :key="item" :name="item">
            <div class="mobile-image-card">
                <image-select :isMobile="true"></image-select>
            </div>
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

<style>
.mobile-image-card{
    position:relative;
    top:70px;
}
</style>