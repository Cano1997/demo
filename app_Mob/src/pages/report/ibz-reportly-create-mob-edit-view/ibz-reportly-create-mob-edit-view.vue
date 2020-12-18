<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzReportlyCreateMobEditViewBase from './ibz-reportly-create-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-reportly/mob-create-form/mob-create-form.vue';
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
export default class IbzReportlyCreateMobEditView extends IbzReportlyCreateMobEditViewBase {

}
</script>