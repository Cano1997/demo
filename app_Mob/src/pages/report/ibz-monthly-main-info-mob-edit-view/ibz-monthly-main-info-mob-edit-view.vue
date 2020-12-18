<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMonthlyMainInfoMobEditViewBase from './ibz-monthly-main-info-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-monthly/mob-main-info-form/mob-main-info-form.vue';
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
export default class IbzMonthlyMainInfoMobEditView extends IbzMonthlyMainInfoMobEditViewBase {

}
</script>