<template>
    <el-row :gutter="0" class="start-row">
        <el-button @click="switchToMainFun" class="start-button">
            START NOW&nbsp&nbsp▶
        </el-button>
    </el-row>
    <el-row class="illustrate">
        <el-col :span="12">
            <div class="part1">
                <p class="step">
                    <img src="../assets/picture1.png" class="picture1">
                    &nbsp&nbsp&nbspstep1
                </p>
                <p class="stepcontent">select pictures of model and cloth in your device which meets the requirements to apply them</p>
            </div>
            <div class="part2">
                HelloWorldnsf📄📄
            </div>
        </el-col>
        <el-col :span="12">
            <div class="part1">
                <p class="step">step2</p>
                φ(*￣0￣)( •̀ ω •́ )✧(～￣▽￣)(～￣▽￣)～（￣︶￣）↗　(￣︶￣)↗[GO!][]~(￣▽￣)~*
            </div>
            <div class="part2">
                HelloWorlf📄📄
            </div>
        </el-col>
    </el-row>
</template>

<script>
import Fun from '@/components/Fun.vue'
export default {
    name: 'Start',
    components: {
        Fun
    },
    methods: {
        switchToMainFun() {
            this.$emit("switch", 'Fun')
        }
    }
}
</script>

<style>
.picture1{
    width:25px;
    height:25px;
    position:relative;
    top: 5px;
}
.part1{
    background-color: rgb(255, 255, 255);
    box-shadow:0 0px 1px 0 rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.19);
    margin: 0 auto;
    border-radius:5px;
    width: 80%;
    height: 30%;
}
.step{
    position: relative;
    text-align: left;
    font-size: 25px;
    height: 5px;
    color: rgb(90, 90, 90);
    top: 20px;
    left: 30px;
    font-weight:bolder;
}
.stepcontent{
    position: relative;
    font-weight: 100;
    text-align: left;
    font-size: 20px;
    top: 25px;
}
.part2{
    position: relative;
    color: black;
    top:50px;
}
.illustrate {
    position: relative;
    background-color: rgb(230, 228, 228);
    min-height: 700px;
    color: black;

}

.start-position {
    text-align: center;

}

.start-button {
    white-space: pre-wrap;
    position: relative;
    display: block;
    margin: 0 auto;
    top: 35px;
    height: 50px;
    width: 200px;
    font-size: larger;
    background-color: rgb(181, 56, 54);
    color: white;
}

.start-button:hover {
    background-color: rgb(152, 47, 45);
    color: white;
}

.start-row {
    position: relative;
    background-color: rgb(230, 228, 228);
    min-height: 100px;
}
</style>