<template>
    <el-card class="win-fun-card" :body-style="{ padding: '0px' }">
        <div class="option-bar">select pic below</div>
        <div class="select-pic-bar">select pic below</div>
        <el-row>

            <image-select :isMobile="false" :pheight="240" :pwidth="180"></image-select>


            <image-select :isMobile="false" :pheight="240" :pwidth="180"></image-select>
        </el-row>
        <!-- <div class="test">test</div>
            <div class="test">test</div> -->

    </el-card>
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
export default {
    name: 'WinFun',
    data() {
        return {

        }
    },
    components: {
        ImageSelect,
    }
}
</script>

<style>
.test {
    background-color: black;
    display: inline;
}

.pic-div {
    display: inline;
    position: relative;
    height: 100px;
    width: 50%;
}

.win-fun-card {
    position: relative;
    width: 75%;
    height: 100%;
    top: 50px;
    margin: auto
}

.option-bar {
    background-color: white;
    position: relative;
    width: 100%;
    height: 50px
}

.select-pic-bar {
    background-color: gray;
    position: relative;
    width: 100%;
    height: 50px
}
</style>