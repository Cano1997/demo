<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskFavoriteMobMDViewBase from './task-favorite-mob-mdview-base.vue';

import view_searchform from '@widgets/task/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/task/favorite-mobdas-mobmdctrl/favorite-mobdas-mobmdctrl.vue';
@Component({
    components: {
        view_searchform, 
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskFavoriteMobMDView extends TaskFavoriteMobMDViewBase {

}
</script>