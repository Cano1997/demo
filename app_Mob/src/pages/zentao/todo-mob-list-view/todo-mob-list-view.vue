<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TodoMobListViewBase from './todo-mob-list-view-base.vue';

import view_mdctrl from '@widgets/todo/mob-mobmdctrl/mob-mobmdctrl.vue';
@Component({
    components: {
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TodoMobListView extends TodoMobListViewBase {

}
</script>