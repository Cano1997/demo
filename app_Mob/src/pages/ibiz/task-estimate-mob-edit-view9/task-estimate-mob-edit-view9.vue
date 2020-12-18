<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskEstimateMobEditView9Base from './task-estimate-mob-edit-view9-base.vue';

import view_form from '@widgets/ibz-taskestimate/new-form-form/new-form-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskEstimateMobEditView9 extends TaskEstimateMobEditView9Base {

}
</script>