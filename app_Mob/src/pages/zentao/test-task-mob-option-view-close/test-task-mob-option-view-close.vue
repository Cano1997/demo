<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestTaskMobOptionViewCloseBase from './test-task-mob-option-view-close-base.vue';

import view_form from '@widgets/test-task/mob-close-form/mob-close-form.vue';
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
export default class TestTaskMobOptionViewClose extends TestTaskMobOptionViewCloseBase {

}
</script>