<template>
    <el-button @click="upload"></el-button>
</template>

<script>
export default {
    name: 'UploadButton',
    props: ['url1','url2'],
    data() {
        return {
            lurl1:'',
            lurl2:''
        }
    },
    methods: {
        upload() {
            console.log(this.lurl1)
            console.log(this.lurl2)
        }
    },
    watch:{
        url1:function(newData,oldData){
            this.lurl1 = newData
            console.log("url1 updated")
        },
        url2:function(newData,oldData){
            this.lurl2 = newData
            console.log("url2 updated")
        }
    }
}
</script>