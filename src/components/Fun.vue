<template>
    <el-row class="select-row" :gutter="0">
        <el-col :span="12">
            <image-select @transUrl="setUrl1"></image-select>
        </el-col>
        <el-col :span="12">
            <image-select @transUrl="setUrl2"></image-select>
        </el-col>
    </el-row>
    <el-row class="upload-row">
        <div class="upload-button">
            <upload-button :url1="aboveurl1" :url2="aboveurl2">hhh</upload-button>
        </div>
    </el-row>
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
import UploadButton from '@/components/UploadButton.vue'
export default {
    name: 'Fun',
    data() {
        return {
            aboveurl1: '',
            aboveurl2: ''
        }
    },
    components: {
        ImageSelect,
        UploadButton
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
.select-row{
    background-color: aqua ;
    min-height: 500px;
}
.upload-row{
    background-color: yellow ;
    min-height: 50px;
}
</style>