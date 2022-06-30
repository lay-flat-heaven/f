<template>
    <el-row class="down-row-footer" :gutter="0">
            <el-col :xs="0" :sm="16" :md="12" :lg="12" :xl="16">
                <div class="container1">
                    <div class="component1" style="line-height:2.5em;">
                        <div class="text">
                            Company
                            <br>
                            <a class="link" href="http://">About us</a>
                            <br>
                            <a class="link" href="http://">Security</a>
                        </div>
                    </div>
                    <div class="component2" style="line-height:2.5em;">
                        <div class="text">
                            Resources
                            <br>
                            <a class="link" href="http://">Blog</a>
                            <br>
                            <a class="link" href="http://">Status</a>
                        </div>
                    </div>
                    <div class="component3" style="line-height:2.5em;">
                        <div class="text">
                            Legal
                            <br>
                            <a class="link" href="http://">Privacy</a>
                            <br>
                            <a class="link" href="http://">Term</a>
                        </div>
                    </div>
                    <div class="component4" style="line-height:2.5em;">
                        <div class="text">
                            Contact
                            <br>
                            <a class="link" href="http://">Contact Us</a>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="12" :lg="12" :xl="8">
                <div class="container2" style="line-height:1em;">
                    <div class="text">
                        <p>© 2022 lay-flat-heaven</p>
                        <p style="color:#a7a5a5 ;">Made in WuHan,China</p>
                    </div>
                </div>
            </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Below'
}
</script>
<style>
.down-row-footer {
    background-color: #D8D8D8;
    min-height: 150px;
}

.text {
    position: relative;
    top: 20px;
}

.footer {
    background-color: #D8D8D8;
    height: 150px;
    width: 100%;
    padding: 0px
}

.container1 {
    font-weight: 600;
    position: absolute;
    height: 150px;
    width: 50%;
    left: 0px;
    top: 0px;
}

.container2 {
    position: relative;
    font-weight: 500;
    height: 150px;
    width: 100%;
    height: 100%;
    font-size: 1.1em;
    text-align: center;
}

.component1 {
    height: 150px;
    width: 25%;
    float: left;
    background-color: #D8D8D8;
    text-align: center;
}

.component2 {
    position: relative;
    height: 150px;
    width: 25%;
    float: left;
    background-color: #D8D8D8;
    text-align: center;
}

.component3 {
    height: 150px;
    width: 25%;
    float: left;
    background-color: #D8D8D8;
    text-align: center;
}

.component4 {
    height: 150px;
    width: 25%;
    float: left;
    background-color: #D8D8D8;
    text-align: center;
}

.link {
    color: rgb(167, 26, 54);
    font-weight: lighter;
    text-decoration: none;
}
</style>