<template>
    <el-row class="intro-row" :gutter="0">
     <el-col :xs="2" :sm="4" :md="4" :lg="3" :xl="15"></el-col>
        <el-col :xs="20" :sm="15" :md="15" :lg="8" :xl="15">
            <div class="description">
                <h1 class="title">Introduction</h1>
                <p class="content">
                Futurama is a online platform for 
                all to virtually try-on with images of cloths and models 
                With a neo-invented 
                and well-designed Deep Neural Networks ,
                it's Futurama that offer anyone an easy-going solution
                to try clothes on virtually .
                </p>
            </div>
        </el-col>
        <el-col :xs="1" :sm="5" :md="5" :lg="10" :xl="9">
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
    min-height: 190px;
    background-image: linear-gradient(260deg, #616161, #212020);
    background-repeat: repeat-x;
}

.description {
    display: inline-block;
    position: relative;
    line-height: 1.5px;
    text-align: left;
    top: 8px;
    height: 60%;
    width: 100%;
}
.title{
    top:0;
    color:white;
    font-size: 30px;
}
.content{
    line-height: 27px;
    color:white;
    font-size:18px;
    word-wrap: break-word;
    word-break: normal;
}
</style>