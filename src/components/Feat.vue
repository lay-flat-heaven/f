<template>
    <image-select @transUrl="setUrl1"></image-select>
    <image-select @transUrl="setUrl2"></image-select>
    <div>
        <upload-button :url1="aboveurl1" :url2="aboveurl2"></upload-button>
    </div>
</template>

<script>
import ImageSelect from '@/components/ImageSelect.vue'
import UploadButton from '@/components/UploadButton.vue'
export default {
    name: 'Feat',
    data() {
        return {
            aboveurl1: '',
            aboveurl2: ''
        }
    },
    components: {
        ImageSelect,
        UploadButton
    },
    methods: {
        setUrl1(url) {
            this.aboveurl1 = url
            console.log("url1 have transfered")
        },
        setUrl2(url) {
            this.aboveurl2 = url
            console.log("url2 have transfered")
        }
    }
}
</script>