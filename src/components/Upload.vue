<template>
    <el-image style="width:240px;height:320px;" :src="url" :fit="fit" :preview-src-list="srcPre">
    </el-image>
    <el-button @click="upload"></el-button>
</template>

<script>


export default {
    name: 'Upload',
    props: ['url1', 'url2'],
    data() {
        return {
            lurl1: '',
            lurl2: '',
            url: 'data:image/*;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAQCAYAAAGQFDQAAAAAAXNSR0IArs4c6QAAAaJJREFUOBGlVT1OwzAYbcxUlNAKJm5QKRMskWBgKEM3JtauDHANuADswMoFuACgtqpoByLlBjChip+tJLxX5bNcx2mq1ovj7/3Zn622lmWZV8tHr9c7mX3iIxsMBjcCFOd+v/+qqSZMmQYFoN9cEYszAc05jmNfoXAAwrMJ0CEMw59ZDeC9EAiYRE2wAQ8766Rp+uh53ksURYcFlVHgKcA9B/dKt4exaFfXZWAIRjDfp5cWirFpAJNRnjCGYE84C2ec6QkmH6UkgKfD4XCzlGAB4F8onOlhOp3+JkkSWHhhya5iXCvseYPoZDL5WiSUawiCYGfWEKgVYv8objabW61W65vfMkwBbvxTd7FMaAtopEVc2EJumXVuiQn85pgTsWAKubYFrDlHLkzxnLddBP0WCfI5NRqNjt0Il3CZmjzF3PvSw24YeIe5KwbrhpohedCoXq+3dQ/ZApBu1wl1hfi+fyyXpsPkVKuEVoWIdyFMgGVClw0Rz9IwIbhClVLv+EnZFQ7ueIx2taVdUrfnyjARuEIR8oaQo6oQ8Vhp5t/CKsJ/dUVKACzJm6wAAAAASUVORK5CYII='
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
            let kk = 'data:image/*;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAQCAYAAAGQFDQAAAAAAXNSR0IArs4c6QAAAaJJREFUOBGlVT1OwzAYbcxUlNAKJm5QKRMskWBgKEM3JtauDHANuADswMoFuACgtqpoByLlBjChip+tJLxX5bNcx2mq1ovj7/3Zn622lmWZV8tHr9c7mX3iIxsMBjcCFOd+v/+qqSZMmQYFoN9cEYszAc05jmNfoXAAwrMJ0CEMw59ZDeC9EAiYRE2wAQ8766Rp+uh53ksURYcFlVHgKcA9B/dKt4exaFfXZWAIRjDfp5cWirFpAJNRnjCGYE84C2ec6QkmH6UkgKfD4XCzlGAB4F8onOlhOp3+JkkSWHhhya5iXCvseYPoZDL5WiSUawiCYGfWEKgVYv8objabW61W65vfMkwBbvxTd7FMaAtopEVc2EJumXVuiQn85pgTsWAKubYFrDlHLkzxnLddBP0WCfI5NRqNjt0Il3CZmjzF3PvSw24YeIe5KwbrhpohedCoXq+3dQ/ZApBu1wl1hfi+fyyXpsPkVKuEVoWIdyFMgGVClw0Rz9IwIbhClVLv+EnZFQ7ueIx2taVdUrfnyjARuEIR8oaQo6oQ8Vhp5t/CKsJ/dUVKACzJm6wAAAAASUVORK5CYII='

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