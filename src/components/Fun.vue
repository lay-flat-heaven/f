<template>
    <el-row class="select-row" :gutter="0">
        <!-- <el-col :xs="0" :sm="8" :md="8" :lg="6" :xl="8">
            <image-select @transUrl="setUrl1" :isMobile="false"></image-select>
        </el-col>
        <el-col :xs="0" :sm="0" :md="0" :lg="3" :xl="0">
            <img src="../assets/add.png" style="position:relative;top:300px;width: 70%;">
        </el-col>
        <el-col :xs="0" :sm="8" :md="8" :lg="6" :xl="8">
            <image-select @transUrl="setUrl2" :isMobile="false"></image-select>
        </el-col>
        <el-col :xs="0" :sm="0" :md="0" :lg="3" :xl="0">
            <img src="../assets/arrowhead.png" style="position:relative;top:300px;width: 70%;">
        </el-col>
        <el-col :xs="0" :sm="8" :md="8" :lg="6" :xl="8">
            <upload :url1="aboveurl1" :url2="aboveurl2"></upload>
        </el-col> -->
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <win-fun></win-fun>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <mobile-fun></mobile-fun>
        </el-col>
    </el-row>
    <!-- <el-row class="upload-row">
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
            <upload :url1="aboveurl1" :url2="aboveurl2"></upload>
        </el-col>

    </el-row> -->
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
import Upload from '@/components/Upload.vue'
import MobileFun from '@/components/MobileFun.vue'
import WinFun from '@/components/WinFun.vue'
export default {
    name: 'Fun',
    props: {
        isMobile: Boolean
    },
    data() {
        return {
            aboveurl1: '',
            aboveurl2: ''
        }
    },
    components: {
        ImageSelect,
        Upload,
        MobileFun,
        WinFun
    },
    methods: {
        setUrl1(url) {
            this.aboveurl1 = url
            console.log("url1 have transfered")
        },
        setUrl2(url) {
            this.aboveurl2 = url
            console.log("url2 have transfered")
        }
    }
}
</script>

<style>
.select-row {
    background-color: rgba(255, 255, 255, 0.9);
    min-height: 500px;
}

.upload-row {
    background-color: yellow;
    min-height: 100px;
}
</style>