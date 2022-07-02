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
    props: ['urlPeople', 'urlClothe', 'canUpload', 'testupload'],
    data() {
        return {
            lurlPeople: '',
            lurlClothe: '',
            url: require('../assets/logo.png'),
            thisUpload: this.canUpload,
            result: '',
            haveResult: false
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
            let fdata = new FormData()
            fdata.append("file", this.dataURLtoBlob(this.lurlPeople), "People.jpg")
            fdata.append("file", this.dataURLtoBlob(this.lurlClothe), "Clothe.jpg")

            this.axios({
                method: 'POST',
                url: 'http://127.0.0.1:9099/upload',
                data: fdata,   //参数
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(resp => {
                let response = resp.data;
                this.result = response
                setTimeout(this.showResult, 1000)
                console.log(response)
            }).catch(err => {
                console.log(err);
            });

        },
        showResult() {
            this.haveResult = true
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
        testupload: function (newData, oldData) {
            if (newData == true) {
                this.result = this.url
                setTimeout(this.showResult, 1000)

            }
        }
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