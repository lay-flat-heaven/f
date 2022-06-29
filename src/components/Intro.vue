<template>
    <el-row class="intro-row" :gutter="0">
        <el-col :xs="24" :sm="15" :md="20" :lg="15" :xl="15">
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
    min-height: 200px;
    background-image: linear-gradient(260deg, #616161, #212020);
    background-repeat: repeat-x;
}

.description {
    display: inline-block;
    position: relative;
    line-height: 1.5px;
    text-align: left;
    left:150px;
    top: 20px;
    height: 75%;
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
    font-size:20px;
    word-wrap: break-word;
    word-break: normal;
}
</style>