<template>
    <el-card class="card" :style="cardStyle" :body-style="{ padding: '0px' }" :shadow="isShadow">
        <el-image :style="imageStyle" class="box" :src="valueUrl" :fit="fit" :preview-src-list="srcList">
        </el-image>
        <div>
            <el-button class="button" :style="buttonStyle" @click="setCropperVisible(true)">select</el-button>
            <!-- <el-button @click="setCropperVisible(true)">crop</el-button> -->
            <el-dialog title="aaa" v-model="cropperVisible" :fullscreen="mobile" :append-to-body="dialogOption.isAppend"
                :lock-scroll="dialogOption.isLockScroll" :width="dialogOption.dialogWidth">
                <crop @transCut="getUrl"></crop>
            </el-dialog>
        </div>
    </el-card>
</template>
<script>

import Crop from '@/components/Crop.vue'
export default {
    name: 'ImageUpload',
    components: {
        Crop
    },
    props: {
        isMobile: Boolean,
        pwidth: Number,
        pheight: Number
    },
    data() {
        return {
            isShadow: "always",
            mobile: this.isMobile,
            width: this.pwidth,
            height: this.pheight,
            fits: ['contain'],
            valueUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            srcList: [

            ],
            cropperVisible: false,

            dialogOption: {
                dialogWidth: "70%",
                isFullscreen: false,
                isAppend: true,
                isLockScroll: false,

            }
        }
    },
    methods: {
        setCropperVisible(ok) {
            this.cropperVisible = ok
            console.log(ok)
            console.log("mobile value :" + this.mobile)

        },
        getImg() {
            console.log("click")
            // inputelement cant be global 
            let inputElement = null
            if (inputElement === null) {
                inputElement = document.createElement('input')
                inputElement.setAttribute('type', 'file')
                inputElement.style.display = 'none'

                if (window.addEventListener) {
                    inputElement.addEventListener('change', this.uploadFile, false)
                } else {
                    inputElement.attachEvent('onchange', this.uploadFile)
                }

                document.body.appendChild(inputElement)
            }
            inputElement.click()


        },
        uploadFile(el) {
            if (el && el.target && el.target.files && el.target.files.length > 0) {
                console.log(el)
                const files = el.target.files[0]
                console.log(files)

                const that = this;
                const reader = new FileReader();
                reader.readAsDataURL(el.target.files[0]);
                reader.onload = (e) => {
                    let tmpfile = e.target.result
                    that.srcList.push(tmpfile)
                    that.valueUrl = tmpfile
                    that.transUrl()
                };
            }
        },
        beforeDestroy() {
            if (inputElement) {
                if (window.addEventListener) {
                    inputElement.removeEventListener('change', this.onGetLocalFile, false)
                } else {
                    inputElement.detachEvent('onchange', this.onGetLocalFile)
                }
                document.body.removeChild(inputElement)
                inputElement = null
                console.log('destroy')
            }
        },
        getUrl(url) {
            console.log("img select get url", url)
            this.srcList.push(url)
            this.valueUrl = url
            this.$emit("transUrl", this.valueUrl)
        }

    },
    computed: {
        isFullscreenComputed() {
            if (this.mobile == true) {
                console.log("is mobile")
                return true
            } else {
                console.log("no mobile")
                return false
            }
        },
        imageStyle() {
            return {
                '--box-width': this.width + 'px',
                '--box-height': this.width / 3 * 4 + 'px'
            }

        },
        cardStyle() {
            return {
                '--card-width': this.width + 'px'
            }
        },
        buttonStyle() {
            return {
                '--button-height': this.height / 32 * 5 + 'px'
            }
        }
    }
}


</script>
<style scoped>
.box {
    width: var(--box-width);
    height: var(--box-height);
}

.card {
    width: var(--card-width);
    margin: auto;
}

.button {
    font-size: larger;
    background-color: rgb(181, 56, 54);
    color: white;
    width: 100%;
    height: var(--button-height);
}

.button:hover {
    background-color: rgb(152, 47, 45);
    color: white;
}
</style>