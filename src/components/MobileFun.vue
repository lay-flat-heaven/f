<template>
    <div class="mobile-fun-box" @touchstart="start" @touchmove="move" @touchend="end">
    <el-button @click="currentPage++"></el-button>
     <el-button @click="currentPage--"></el-button>
        <transition :name="slideDirection" mode="out-in" @before-enter="test">
            <div v-if="currentPage == 1" :key="1">
                <image-select :isMobile="true" :pheight="320" :pwidth="240" @transUrl="setUrlPeople"></image-select>
            </div>
            <div v-else-if="currentPage == 2" :key="2">
                <image-select :isMobile="true" :pheight="320" :pwidth="240" @transUrl="setUrlClothe"></image-select>
            </div>
            <div v-else-if="currentPage == 3" class="mobile-image-card" :key="3">
                <el-card class="upload-card" v-loading="isLoading">
                    <upload :urlPeople="aboveUrlPeople" :urlClothe="aboveUrlClothe" @wait="loading" ref="uploadBlock"
                        :canUpload="prepareUpload">
                    </upload>
                </el-card>
                <el-button @click="uploadNow" style="width:75%;height: 40px;">upload</el-button>
            </div>
        </transition>
    </div>
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
import Upload from '@/components/Upload.vue'
import Vconsole from 'vconsole'

const v = new Vconsole()
export default {
    name: 'MobileFun',
    data() {
        return {
            isLoading: false,
            prepareUpload: false,
            slideDirection: 'slide-left-fade',
            currentPage: 1,
            startPoint: 0,
            uploadAllowed: false,
            endPoint: 0,
            aboveUrlPeople: '',
            aboveUrlClothe: '',
            CarouselOption: {
                isLoop: false,
                isAuto: false,
                isArrow: 'never',
            },
            callbackArr: ['setUrlPeople', 'setUrlClothe']
        }
    },
    methods: {
        kk() {
            this.show1 = !this.show1
            this.show2 = !this.show2
        },
        start(e) {
            this.startPoint = e.changedTouches[0].pageX

        },
        move(e) {
            this.endPoint = e.changedTouches[0].pageX

        },
        end(e) {
            console.log("start ", this.startPoint)
            console.log("end ", this.endPoint)
            var direction = this.startPoint - this.endPoint
            if (this.startPoint != 0 && this.endPoint != 0) {
                if (direction < 0 && direction < -60) {
                    if (this.currentPage == 1) {
                        console.log("can not slide exceed")
                    } else {
                        this.slideDirection = 'slide-right-fade'
                        this.currentPage -= 1
                        this.reset()
                    }
                }
                if (direction > 0 && direction > 60) {
                    if (this.currentPage == 2 && !this.uploadAllowed || this.currentPage == 3) {
                        console.log("can not upload now")

                    } else {
                        this.slideDirection = 'slide-left-fade'
                        this.currentPage += 1
                        this.reset()
                    }
                    this.reset()
                }
            }
        },
        reset() {
            this.startPoint = 0
            this.endPoint = 0
        },
        setUrlPeople(url) {
            if (url != '') {
                this.aboveUrlPeople = url

                console.log("url1 have transfered")
            }
        },
        setUrlClothe(url) {
            if (url != '') {
                this.aboveUrlClothe = url
                console.log("url2 have transfered")
            }
        },
        loading(ok) {
            if (ok == true) {
                console.log("mobile loading")
                this.isLoading = true
            } else { this.isLoading = false }
        },
        uploadNow() {
            this.$refs.uploadBlock.uploadInhand(this.aboveUrlPeople, this.aboveUrlClothe)
        },
        test() {
            console.log("now url1", this.aboveUrlClothe, "url2", this.aboveUrlPeople)
        }
    },
    components: {
        ImageSelect,
        Upload
    },
    watch: {
        aboveUrlClothe: function (newData, oldData) {
            if (this.aboveUrlClothe != '' && this.aboveUrlPeople != '') {
                this.uploadAllowed = true
            }
        },
        aboveUrlPeople: function (newData, oldData) {
            if (this.aboveUrlClothe != '' && this.aboveUrlPeople != '') {
                this.uploadAllowed = true
            }
        },
    }
}
</script>

<style>
.slide-right-fade-enter-active {
    transition: all .45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-right-fade-leave-active {
    transition: all .45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}


.slide-right-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}

.slide-right-fade-enter-from {
    transform: translateX(-10px);
    opacity: 0;

}

.slide-right-fade-enter-to,
.slide-right-fade-leave-from {
    opacity: 1;
}


.slide-left-fade-enter-active {
    transition: all .45s
}

.slide-left-fade-leave-active {
    transition: all .45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}


.slide-left-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}

.slide-left-fade-enter-from {
    transform: translateX(10px);
    opacity: 0;

}

.slide-left-fade-enter-to,
.slide-left-fade-leave-from {
    opacity: 1;
}

.mobile-fun-box {
    position: relative;
    top: 75px;
    height: 500px;
}

.upload-card {
    position: relative;
    width: 75%;
    height: 372px;
    margin: auto
}
</style>
