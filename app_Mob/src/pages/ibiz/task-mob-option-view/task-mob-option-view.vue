<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskMobOptionViewBase from './task-mob-option-view-base.vue';

import view_form from '@widgets/task/assign-form-mob-form/assign-form-mob-form.vue';
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
export default class TaskMobOptionView extends TaskMobOptionViewBase {

}
</script>