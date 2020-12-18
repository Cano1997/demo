<script lang='ts'>
import { Component } from 'vue-property-decorator';
import DocLibTreeProductMobBase from './doc-lib-tree-product-mob-treeview-base.vue';
import { ImagePreview } from 'vant';
import { Environment } from "@/environments/environment";
@Component({
components: { [ImagePreview.Component.name]: ImagePreview.Component, }
})
export default class DocLibTreeProductMob extends DocLibTreeProductMobBase {

    /**
     * 文件列表展示方式  true/列表   false/栅格
     *
     * @memberof DocLibTreeProductMob
     */
    public isList = true;

    /**
     * 获取文件类型
     *
     * @memberof DocLibTreeProductMob
     */
    public getFileType(item:any){
            return item.curData.extension
    }

    /**
     * 下载文件路径
     *
     * @memberof DocLibTreeProductMob
     */
    public downloadUrl = Environment.BaseUrl + Environment.ExportFile;

    /**
     * 打开图片预览
     */
    public openImages(src: any) {
        ImagePreview({
            images: [
                src,
            ],
            showIndex: false,
        });
    }
    /**
     * 是否为图片类型
     */
    public isImages(item: any) {
            return Object.is(item.curData.extension, 'jpg') || Object.is(item.curData.extension, 'gif') || Object.is(item.curData.extension, 'bmp') || Object.is(item.curData.extension, 'png')
    }

    /**
     * 解析图片地址
     */
    public getImage(item: any) {
            return `${this.downloadUrl}` + `/${item.curData.id}`
    }
}
</script>