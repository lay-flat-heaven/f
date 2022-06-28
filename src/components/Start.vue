<template>
    <el-row :gutter="0" class="start-row">
            <el-button @click="switchToMainFun" class="start-button">
               START &nbsp&nbsp▶
            </el-button>
    </el-row>
</template>

<script>
import Fun from '@/components/Fun.vue'
export default {
    name:'Start',
    components:{
        Fun
    },
    methods:{
        switchToMainFun(){
            this.$emit("switch",'Fun')
        }
    }
}
</script>

<style>
.start-position{
    text-align: center;

}
.start-button{
white-space: pre-wrap;
    position:relative;
    display:block;margin:0 auto;
    top:20px;
    height:65px;
    width: 200px;
    font-size: larger;
    background-color:rgb(181,56,54);
    color:white;
}
.start-button:hover{
    background-color:rgb(152,47,45);
    color: white;
}
.start-row{
    position:relative;
    background-color: rgb(230, 228, 228);
    min-height: 500px;
}
</style>