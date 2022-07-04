<template>
    <transition name="el-zoom-in-bottom">
        <el-image v-show="haveResult" style="width:201.6px;height:283.5px;" :src="result" :fit="fit"
            :preview-src-list="srcPre">
        </el-image>
    </transition>
</template>

<script>


export default {
    name: 'Upload',
    props: ['urlPeople', 'urlClothe', 'canUpload'],
    data() {
        return {
            lurlPeople: '',
            lurlClothe: '',
            url: require('../assets/logo.png'),
            thisUpload: this.canUpload,
            result: '',
            haveResult: false,
            isWaiting: false,
        }
    },
    methods: {
        dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        },
        upload() {

            this.startWaiting()
            let fdata = new FormData()
            fdata.append("img_1", this.dataURLtoBlob(this.lurlClothe), "Clothe.jpg")
            fdata.append("img_2", this.dataURLtoBlob(this.lurlPeople), "People.jpg")

            this.axios({
                method: 'POST',
                url: 'http://127.0.0.1:9099/get_image/getImage/',
                data: fdata,   //参数
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(resp => {
                let response = resp.data;
                console.log(response)

                let arr = eval(response)
                this.result = 'data:image/jpeg;base64,'+arr.file_content
                console.log(arr.file_content)
                this.stopWaiting()
                this.showResult()
                console.log(response)
            }).catch(err => {
                console.log(err);
            });

        },
        showResult() {
            this.haveResult = true
        },
        startWaiting() {
            this.$emit("wait", true)

        },
        stopWaiting() {
            this.$emit("wait", false)
        },
        uploadInhand(urlP,urlC){
            this.lurlPeople = urlP
            this.lurlClothe = urlC
            this.upload()
        }
    },
    watch: {
        urlPeople: function (newData, oldData) {
            this.lurlPeople = newData
            console.log("url1 updated")
        },
        urlClothe: function (newData, oldData) {
            this.lurlClothe = newData
            console.log("url2 updated")
        },
        canUpload: function (newData, oldData) {
            if (newData == true) {
                if (this.lurlPeople != '' && this.lurlClothe != '') {
                    this.upload()
                } else {
                    console.log("乌鱼子")
                }
            }
        },
    }
}
</script>
<style>
.button {
    font-size: larger;
    background-color: rgb(181, 56, 54);
    color: white;
    width: 60%;
    height: 50px;
}

.load {
    position: relative;
    top: 180px;
}
</style>