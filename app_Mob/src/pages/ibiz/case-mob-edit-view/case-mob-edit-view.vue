<script lang='ts'>
import { Component } from 'vue-property-decorator';
import CaseMobEditViewBase from './case-mob-edit-view-base.vue';

import view_form from '@widgets/case/mob-main-form/mob-main-form.vue';
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
export default class CaseMobEditView extends CaseMobEditViewBase {

}
</script>