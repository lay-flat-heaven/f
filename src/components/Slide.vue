<template>
    <el-carousel 
    indicator-position="none"
    height="500px"
    arrow="never"
   >
        <el-carousel-item v-for="item in 2" :key="item">
            <image-select></image-select>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
export default {

    name: 'Slide',
    data() {
        return {

        }
    },
    components:{
        ImageSelect
    }
}
</script>
<style scoped>
.el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>