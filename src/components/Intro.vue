<template>
    <el-row class="intro-row" :gutter="0">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="description">
                <p class="title">Introduction</p>
                <p class="content">☆*: .｡. o(≧▽≦)o .｡.:*☆</p>
                <p class="content">劈里啪啦摩西摩西</p>
                <p class="content">哇卡大坑大褂</p>
                <p class="content">巴啦啦能量</p>
            </div>
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
    background-image: linear-gradient(260deg, #616161, #212020);
    background-repeat: repeat-x;
}

.description {
    display: inline-block;
    position: relative;
    line-height: 1.5px;
    /*background-color: rgb(36, 107, 169);*/
    text-align: left;
    left:150px;
    top: 20px;
    height: 75%;
    width: 90%;
}
.title{
    top:0;
    color:#edeeef;
    font-size: 30px;
}
.content{
    color:#edeeef;
}
</style>