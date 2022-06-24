<template>
    <div class="block">
        <el-image style="width: 360px; height: 360px" :src="valueUrl" :fit="fill" :preview-src-list="srcList">
        </el-image>
        <el-button @click="getImg">upload</el-button>
    </div>
</template>
<script>
let inputElement = null
export default {
    name: 'ImageUpload',
    data() {
        return {
            fits: ['fill'],
            valueUrl: '',
            srcList: [

            ]
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
                console.log(files)

                const that = this;
                const reader = new FileReader();
                reader.readAsDataURL(el.target.files[0]);
                reader.onload =  (e) => {
                    console.log(e.target.result)
                    let tmpfile = e.target.result
                    that.srcList.push(tmpfile)
                    that.valueUrl = tmpfile
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
        }

    },
}


</script>
<style>
.block {
    display: inline-block;
}
</style>