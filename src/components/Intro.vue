<template>
    <el-row class="intro-row" :gutter="0">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="description">aa</div>
        </el-col>
        <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
        };
    },
}
</script>

<style>
.intro-row {
    min-height: 260px;
    background-image: linear-gradient(260deg, #202020, #3a3a3a);
    background-repeat: repeat-x;
}

.description {
    display: inline-block;
    background-color: white;
    position: relative;
    top: 20px;
    height: 75%;
    width: 90%;


}
</style>