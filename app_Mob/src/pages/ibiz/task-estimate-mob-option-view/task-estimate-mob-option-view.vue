<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskEstimateMobOptionViewBase from './task-estimate-mob-option-view-base.vue';

import view_form from '@widgets/task-estimate/mob-main-form/mob-main-form.vue';
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
export default class TaskEstimateMobOptionView extends TaskEstimateMobOptionViewBase {

}
</script>