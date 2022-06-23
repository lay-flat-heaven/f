<template>
    <nav-bar></nav-bar>
    <div class="common-layout">
        <el-container>
            <el-main>
                <intro></intro>
            </el-main>
            <el-main>
                <input-img></input-img>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>


<script>

import Intro from '@/components/Intro.vue'
import NavBar from '@/components/NavBar.vue'
import InputImg from '@/components/InputImg.vue'
export default {
    name: 'Home',
    components: {
        NavBar,
        Intro,
        InputImg
    }
}
</script>

<style>
.el-main {
    padding: 0px;
    height: 265.5px;

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


