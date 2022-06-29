<template>
    <el-row :gutter="0" class="start-row">
        <el-button @click="switchToMainFun" class="start-button">
            START NOW&nbsp&nbsp▶
        </el-button>
    </el-row>
    <el-row class="illustrate">
        <el-col :span="12">
            <div class="part1">
                <p class="step">step1</p>
                (❁´◡`❁)(^///^)( ´･･)ﾉ(._.`)( ´･･)ﾉ(._.`)ᓚᘏᗢᓚᘏᗢ╰(*°▽°*)╯(●'◡'●)ಥ_ಥ╰(*°▽°*)╯
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
.part1{
    background-color: rgb(255, 255, 255);
    box-shadow:0 0px 1px 0 rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.19);
    margin: 0 auto;
    border-radius:5px;
    width: 80%;
    height: 30%;
}
.step{
    font-size: 30px;
    font-weight:bolder;
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