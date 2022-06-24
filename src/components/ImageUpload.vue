<template>
    <div class="block" @click="getImg">
        <el-image style="width: 360px; height: 360px" :src="valueUrl" :fit="fill"></el-image>
    </div>
</template>
<script>
let inputElement = null
export default {
    name: 'ImageUpload',
    data() {
        return {
            fits: ['fill'],
            valueUrl: ''
        }
    },
    methods: {
        getImg() {
            console.log("click")
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
                const isLt2M = files.size / 1024 / 1024 < 2
                const size = files.size / 1024 / 1024
                console.log(size)

                if (!isLt2M) {
                    this.$message.error('lagre')
                } else if (files.type.indexOf('image') === -1) {
                    this.$message.error('plz select');
                } else {
                    const that = this;
                    const reader = new FileReader(); 
                    reader.readAsDataURL(el.target.files[0]); 
                    reader.onload = function () { 
                        that.valueUrl = this.result;
                        console.log(this.result);
                    };
                }
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
        }

    },
}


</script>
<style>
.block {
    display: inline-block;
}
</style>