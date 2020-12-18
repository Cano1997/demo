<script lang='ts'>
import { Component } from 'vue-property-decorator';
import CaseCreateCaseMobEditViewBase from './case-create-case-mob-edit-view-base.vue';

import view_form from '@widgets/case/createmob-form/createmob-form.vue';
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
export default class CaseCreateCaseMobEditView extends CaseCreateCaseMobEditViewBase {

}
</script>