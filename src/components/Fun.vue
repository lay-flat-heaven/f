<template>
    <!-- <el-row class="select-row" :gutter="0">
        <el-col :xs="0" :sm="9" :md="9" :lg="9" :xl="9">
            <image-select @transUrl="setUrl1" :isMobile="false"></image-select>
        </el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6"></el-col>
        <el-col :xs="0" :sm="9" :md="9" :lg="9" :xl="9">
            <image-select @transUrl="setUrl2" :isMobile="false"></image-select>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <mobile-fun></mobile-fun>
        </el-col>
    </el-row> -->
        <div class="upload-row">
            <upload> :url1="aboveurl1" :url2="aboveurl2"></upload>
        </div>
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
import Upload from '@/components/Upload.vue'
import MobileFun from '@/components/MobileFun.vue'
export default {
    name: 'Fun',
    props:{
        isMobile:Boolean
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
        MobileFun
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
    background-color: rgb(230, 228, 228);
    min-height: 800px;
}

.upload-row {
    background-color: yellow;
    min-height: 600px;
}
</style>