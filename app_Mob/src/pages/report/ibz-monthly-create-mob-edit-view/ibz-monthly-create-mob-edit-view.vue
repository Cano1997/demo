<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMonthlyCreateMobEditViewBase from './ibz-monthly-create-mob-edit-view-base.vue';

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
export default class IbzMonthlyCreateMobEditView extends IbzMonthlyCreateMobEditViewBase {

}
</script>