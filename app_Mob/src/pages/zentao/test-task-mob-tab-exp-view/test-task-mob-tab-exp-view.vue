<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestTaskMobTabExpViewBase from './test-task-mob-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/test-task/mob-tab-exp-viewtabexppanel-tabexppanel/mob-tab-exp-viewtabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TestTaskMobTabExpView extends TestTaskMobTabExpViewBase {

}
</script>