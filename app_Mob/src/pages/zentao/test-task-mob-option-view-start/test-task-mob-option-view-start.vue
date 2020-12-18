<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestTaskMobOptionViewStartBase from './test-task-mob-option-view-start-base.vue';

import view_form from '@widgets/test-task/mob-start-form/mob-start-form.vue';
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
export default class TestTaskMobOptionViewStart extends TestTaskMobOptionViewStartBase {

}
</script>