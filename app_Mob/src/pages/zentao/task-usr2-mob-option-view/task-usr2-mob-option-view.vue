<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskUsr2MobOptionViewBase from './task-usr2-mob-option-view-base.vue';

import view_form from '@widgets/task/mob-start-form-form/mob-start-form-form.vue';
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
export default class TaskUsr2MobOptionView extends TaskUsr2MobOptionViewBase {

}
</script>