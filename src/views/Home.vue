<template>
    <nav-bar></nav-bar>
    <div class="common-layout">
        <el-container>
            <el-main class="des">
                <intro></intro>
            </el-main>
            <el-main class="img">
                <image-upload></image-upload>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>


<script>

import Intro from '@/components/Intro.vue'
import NavBar from '@/components/NavBar.vue'
import ImageUpload from '@/components/ImageUpload'
export default {
    name: 'Home',
    components: {
        NavBar,
        Intro,
        ImageUpload
    }
}
</script>

<style>
.el-main.des {
    padding: 0px;
    height: 265.5px;

}
.el-main.img {
    padding: 0px;
    height: 600px;

}

a:link {
    color: grey;
    text-decoration: none;
}

a:visited {
    color: black;
    text-decoration: none;
}

a:hover {
    color: red;
    text-decoration: none;
}
</style>


