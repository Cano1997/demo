<script lang='ts'>
import { Component } from 'vue-property-decorator';
import DocLibProjectDocLibMobTreeViewBase from './doc-lib-project-doc-lib-mob-tree-view-base.vue';

import view_tree from '@widgets/doc-lib/doc-lib-tree-project-mob-treeview/doc-lib-tree-project-mob-treeview.vue';
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
export default class DocLibProjectDocLibMobTreeView extends DocLibProjectDocLibMobTreeViewBase {

}
</script>