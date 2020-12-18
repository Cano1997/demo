<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestSuiteNewMobEditViewBase from './test-suite-new-mob-edit-view-base.vue';

import view_form from '@widgets/test-suite/mob-edit-table-form/mob-edit-table-form.vue';
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
export default class TestSuiteNewMobEditView extends TestSuiteNewMobEditViewBase {

}
</script>