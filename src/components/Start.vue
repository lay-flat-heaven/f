<template>
    <el-row :gutter="0" class="start-row">
        <el-button @click="switchToMainFun">START</el-button>
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
.start-row{
    background-color: gray;
    min-height: 100px;
}
</style>