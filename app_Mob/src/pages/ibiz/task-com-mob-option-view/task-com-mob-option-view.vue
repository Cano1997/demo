<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskComMobOptionViewBase from './task-com-mob-option-view-base.vue';

import view_form from '@widgets/task/complete-form-mob-form/complete-form-mob-form.vue';
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
export default class TaskComMobOptionView extends TaskComMobOptionViewBase {

}
</script>