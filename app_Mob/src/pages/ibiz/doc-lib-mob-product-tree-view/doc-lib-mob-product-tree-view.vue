<script lang='ts'>
import { Component } from 'vue-property-decorator';
import DocLibMobProductTreeViewBase from './doc-lib-mob-product-tree-view-base.vue';

import view_tree from '@widgets/doc-lib/doc-lib-tree-product-mob-treeview/doc-lib-tree-product-mob-treeview.vue';
@Component({
    components: {
        view_tree, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class DocLibMobProductTreeView extends DocLibMobProductTreeViewBase {

}
</script>