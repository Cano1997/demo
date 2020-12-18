<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestTaskMobOptionViewBase from './test-task-mob-option-view-base.vue';

import view_form from '@widgets/test-task/mobblock-form/mobblock-form.vue';
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
export default class TestTaskMobOptionView extends TestTaskMobOptionViewBase {

}
</script>