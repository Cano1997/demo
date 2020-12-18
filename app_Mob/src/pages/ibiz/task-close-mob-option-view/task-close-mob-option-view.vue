<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskCloseMobOptionViewBase from './task-close-mob-option-view-base.vue';

import view_form from '@widgets/task/close-pause-cancel-form-mob-form/close-pause-cancel-form-mob-form.vue';
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
export default class TaskCloseMobOptionView extends TaskCloseMobOptionViewBase {

}
</script>