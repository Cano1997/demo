<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMonthlyEditMobEditViewBase from './ibz-monthly-edit-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-monthly/mob-new-form/mob-new-form.vue';
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
export default class IbzMonthlyEditMobEditView extends IbzMonthlyEditMobEditViewBase {

}
</script>