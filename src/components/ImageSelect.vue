<template>
    <div class="block">
        <el-image style="width:360px;height:360px" :src="valueUrl" :fit="fit" :preview-src-list="srcList">
        </el-image>
        <div>
            <el-button @click="setCropperVisible(true)">select</el-button>
            <!-- <el-button @click="setCropperVisible(true)">crop</el-button> -->
            <el-dialog title="aaa" v-model="cropperVisible">
                <crop @transCut="getUrl"></crop>
            </el-dialog>
        </div>
    </div>
</template>
<script>

import Crop from '@/components/Crop.vue'
export default {
    name: 'ImageUpload',
    components: {
        Crop
    },
    data() {
        return {
            fits: ['contain'],
            valueUrl: '',
            srcList: [

            ],
            cropperVisible: false
        }
    },
    methods: {
        setCropperVisible(ok) {
            this.cropperVisible = ok
            console.log(ok)

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
        transUrl() {
            this.$emit("transUrl", this.valueUrl)
        },
        getUrl(url){
            console.log("img select get url",url)
            this.srcList.push(url)
            this.valueUrl = url
        }

    },
}


</script>
<style>
.block {
    display: inline-block;
}
</style>