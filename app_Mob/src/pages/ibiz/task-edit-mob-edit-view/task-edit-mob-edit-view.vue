<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskEditMobEditViewBase from './task-edit-mob-edit-view-base.vue';

import view_form from '@widgets/task/mob-main-edit-form/mob-main-edit-form.vue';
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
export default class TaskEditMobEditView extends TaskEditMobEditViewBase {

}
</script>