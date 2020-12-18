<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestTaskEditNewMobEditViewBase from './test-task-edit-new-mob-edit-view-base.vue';

import view_form from '@widgets/test-task/mob-edit-form-form/mob-edit-form-form.vue';
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
export default class TestTaskEditNewMobEditView extends TestTaskEditNewMobEditViewBase {

}
</script>