<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestTaskMobOptionViewActiviteBase from './test-task-mob-option-view-activite-base.vue';

import view_form from '@widgets/test-task/mob-activite-form/mob-activite-form.vue';
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
export default class TestTaskMobOptionViewActivite extends TestTaskMobOptionViewActiviteBase {

}
</script>