<template>
    <div class="load">
        <el-image style="width:240px;height:320px;" :src="url" :fit="fit" :preview-src-list="srcPre">
        </el-image>
        <el-button class="button" @click="upload">
            upload
        </el-button>
    </div>
</template>

<script>


export default {
    name: 'Upload',
    props: ['url1', 'url2'],
    data() {
        return {
            lurl1: '',
            lurl2: '',
            url: require('../assets/logo.png')
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
            this.url = this.lurl1
            fdata.append("file", this.dataURLtoBlob(this.lurl1), "clothe.jpg")
            fdata.append("file", this.dataURLtoBlob(this.lurl2), "human.jpg")

            console.log(this.dataURLtoBlob(kk))
            this.axios({
                method: 'POST',
                url: 'http://127.0.0.1:9099/upload',
                data: fdata,   //参数
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(resp => {
                let response = resp.data;
                console.log(response)
            }).catch(err => {
                console.log(err);
            });

        }
    },
    watch: {
        url1: function (newData, oldData) {
            this.lurl1 = newData
            console.log("url1 updated")
        },
        url2: function (newData, oldData) {
            this.lurl2 = newData
            console.log("url2 updated")
        }
    }
}
</script>
<style>
.button{
    font-size: larger;
    background-color: rgb(181, 56, 54);
    color: white;
    width: 60%;
    height: 50px;
}
.load{
    position:relative;
    top:180px;
}
</style>