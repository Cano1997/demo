<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TodoMobMDViewBase from './todo-mob-mdview-base.vue';

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
export default class TodoMobMDView extends TodoMobMDViewBase {

}
</script>