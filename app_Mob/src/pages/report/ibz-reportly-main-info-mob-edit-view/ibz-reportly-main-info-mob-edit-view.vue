<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzReportlyMainInfoMobEditViewBase from './ibz-reportly-main-info-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-reportly/mob-reportly-detail-form/mob-reportly-detail-form.vue';
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
export default class IbzReportlyMainInfoMobEditView extends IbzReportlyMainInfoMobEditViewBase {

}
</script>