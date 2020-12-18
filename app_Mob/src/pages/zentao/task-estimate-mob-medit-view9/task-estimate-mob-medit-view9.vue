<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskEstimateMobMEditView9Base from './task-estimate-mob-medit-view9-base.vue';

import view_meditviewpanel from '@widgets/ibz-taskestimate/main-multieditviewpanel/main-multieditviewpanel.vue';
@Component({
    components: {
        view_meditviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskEstimateMobMEditView9 extends TaskEstimateMobMEditView9Base {

}
</script>