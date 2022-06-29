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
                <p class="stepcontent">
                    select pictures of model and cloth in your device which meets the requirements to apply them
                </p>
            </div>
            <div class="part2">
                <div class="part2content">
                    <div class="part2picture">
                        <img src="../assets/picture3.png" class="picture2">
                    </div>
                    <div class="part2text">
                        <p class="part2texttitle">Efficiency</p>
                        <p class="part2textcontent">
                            just a single second is absolutely adequate to a gengeration
                        </p>
                    </div>
                </div>
                <div class="part2content">
                    <div class="part2picture">
                        <img src="../assets/picture5.png" class="picture2">
                    </div>
                    <div class="part2text">
                        <p class="part2texttitle">Mobility</p>
                        <p class="part2textcontent">
                            with the offered pre-trained parameters , even a cellphone is sufficient to run Futurama
                        </p>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="part1">
                <p class="step">
                    <img src="../assets/picture2.png" class="picture1">
                    &nbsp&nbsp&nbspstep2
                </p>
                <p class="stepcontent">
                    fill the images into the fitting block and just click the "generate" button
                </p>
                
            </div>
            <div class="part2">
                <div class="part2content">
                    <div class="part2picture">
                        <img src="../assets/picture4.png" class="picture2" style="top:25px;">
                    </div>
                    <div class="part2text">
                        <p class="part2texttitle">Foresight</p>
                        <p class="part2textcontent">
                            pictures in wild are on their way to availability
                        </p>
                    </div>
                </div>
                <div class="part2content">
                    <div class="part2picture">
                        <img src="../assets/picture6.png" class="picture2">
                    </div>
                    <div class="part2text">
                        <p class="part2texttitle">Accessibility</p>
                        <p class="part2textcontent">
                            get started simply with images of the cloth and the model.
                        </p>
                    </div>      
                </div>
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
.part2picture{
    position: relative;
    text-align: center;
    left: 30px;
    float: left;
    width: 33%;
    height: 100%;
}
.part2text{
    position: relative;
    top: 30px;
    left:30px;
    float: left;
    width: 50%;
    height: 100%;
}
.part2texttitle{
    position: relative;
    text-align: left;
    font-size: 25px;
    height: 5px;
    color:black;
    font-weight:bolder;
}
.part2content{
    width: 67%;
}
.picture1{
    width:25px;
    height:25px;
    position:relative;
    top: 5px;
}
.picture2{
    position: relative;
    top:45px;
    width: 70%;
}
.part1{
    background-color: rgb(255, 255, 255);
    box-shadow:0 0px 1px 0 rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.19);
    margin: 0 auto;
    border-radius:5px;
    width: 80%;
    height: 22%;
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
    top: 40px;
    left: 30px;
    width: 90%;
}
.part2{
    position: relative;
    color: black;
    text-align: left;
    height: 220px;
    top:10px;
}
.part2content{
    position: relative;
    margin: 0 auto;
    justify-content:center;
    width: 80%;
    top:25px;
    height:170px;
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