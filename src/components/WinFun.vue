<template>
    <transition name="el-zoom-in-center">
        <el-card class="win-fun-card" :body-style="{ padding: '0px' }" v-show="show">
            <div class="option-bar">select pic below</div>
            <el-divider :border-style="{ margin: '0px' }"></el-divider>
            <div class="select-pic-bar">select pic below</div>
            <el-row v-loading="isLoading" class="pic-row">
                <image-select :isMobile="false" :pheight="240" :pwidth="180" @transUrl="setUrlPeople"></image-select>
                <upload :urlPeople="aboveUrlPeople" :urlClothe="aboveUrlClothe" :canUpload="startUpload"
                    @wait="loading">
                </upload>
                <image-select :isMobile="false" :pheight="240" :pwidth="180" @transUrl="setUrlClothe"></image-select>
            </el-row>
            <div class="process-bar">
                <el-steps :space="200" :active="currentStep" simple style="height:24px">
                    <el-step title="Select&Crop" :icon="Edit" />
                    <el-step title="Upload&Wait" :icon="UploadFilled" />
                    <el-step title="Success" :icon="Picture" />
                </el-steps>
            </div>
            <el-button @click="uploadImg">upload</el-button>
            <!-- <el-progress :percentage="100" status="" :indeterminate="true" :duration="5" :stroke-width="18" :show-text="false"
             :stroke-linecap="square"/> -->

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
            isLoading: false,
            currentStep: 0
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

            if (this.aboveUrClothe != '' && this.aboveUrlPeople != '') {
                this.startUpload = true;
                this.currentStep = 2
            } else {
                console.log("no enough pics")
            }
        },
        loading(ok) {
            if (ok == true) {
                this.isLoading = true
            } else {
                this.isLoading = false
            }
        }
    },
    watch: {
        pshow: function (newData, oldData) {
            console.log(newData)

            if (newData == true) {
                setTimeout(this.setShow, 500)
            }
        },
        aboveUrlClothe: function (newData, oldData) {
            if (this.aboveUrlClothe != '' && this.aboveUrlPeople != '') {
                this.currentStep = 1
            }
        },
        aboveUrlPeople: function (newData, oldData) {
            if (this.aboveUrlClothe != '' && this.aboveUrlPeople != '') {
                this.currentStep = 1
            }
        },
        isLoading: function (newData, oldData) {
            if (newData == false && oldData == true) {
                this.currentStep = 3
            }
        }
    }
}
</script>

<style>
.pic-row {
    min-height: 300px;
}

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
    height: 55px
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
    height: 50px
}
</style>