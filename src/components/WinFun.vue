<template>
    <transition name="el-zoom-in-top">
        <el-card class="win-fun-card" :body-style="{ padding: '0px' }" v-show="show">
            <div class="option-bar">select pic below</div>
            <el-divider :border-style="{ margin: '0px' }"></el-divider>
            <div class="select-pic-bar">select pic below</div>
            <el-row v-loading="isLoading">
                <image-select :isMobile="false" :pheight="240" :pwidth="180" @transUrl="setUrlPeople"></image-select>
                <upload :urlPeople="aboveUrlPeople" :urlClothe="aboveUrlClothe" :canUpload="startUpload"
                    :testupload="test">
                </upload>
                <image-select :isMobile="false" :pheight="240" :pwidth="180" @transUrl="setUrlClothe"></image-select>
            </el-row>
            <div class="process-bar">
                <el-steps :active="active" finish-status="success">
                    <el-step title="Step 1" />
                    <el-step title="Step 2" />
                    <el-step title="Step 3" />
                </el-steps>
            </div>
            <el-button @click="uploadImg">aa</el-button>

        </el-card>
    </transition>
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
import Upload from '@/components/Upload.vue'
export default {
    name: 'WinFun',
    props: {
        pshow: Boolean
    },
    data() {
        return {
            show: false,
            aboveUrlPeople: '',
            aboveUrlClothe: '',
            startUpload: false,
            test: false,
            isLoading: false
        }
    },
    components: {
        ImageSelect,
        Upload,
    },
    methods: {
        setShow() {
            this.show = true
        },
        setUrlPeople(url) {
            this.aboveUrlPeople = url
            console.log("url1 have transfered")
        },
        setUrlClothe(url) {
            this.aboveUrlClothe = url
            console.log("url2 have transfered")
        },
        uploadImg() {

            this.test = true
            if (this.aboveUrlClothe != '' && this.aboveUrlPeople != '') {
                this.startUpload = true;
            } else {
                console.log("no enough pics")
            }
        }
    },
    watch: {
        pshow: function (newData, oldData) {

            console.log(newData)

            if (newData == true) {
                setTimeout(this.setShow, 500)
            }

        }

    }
}
</script>

<style>
.el-divider {
    margin: 0px;
    height: 2px;
    color: red
}

.test {
    background-color: black;
    display: inline;
}

.pic-div {
    display: inline;
    position: relative;
    height: 100px;
    width: 50%;
}

.win-fun-card {
    position: relative;
    width: 75%;
    height: 100%;
    top: 50px;
    margin: auto
}

.option-bar {
    background-color: white;
    position: relative;
    width: 100%;
    height: 50px
}

.select-pic-bar {
    background-color: rgb(241, 241, 241);
    position: relative;
    width: 100%;
    height: 50px
}

.process-bar {
    background-color: rgb(241, 241, 241);
    position: relative;
    width: 100%;
    height: 65px
}
</style>