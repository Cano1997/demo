<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskActiveMobTaskBase from './task-active-mob-task-base.vue';

import view_form from '@widgets/task/mob-activite-form-form/mob-activite-form-form.vue';
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
export default class TaskActiveMobTask extends TaskActiveMobTaskBase {

}
</script>