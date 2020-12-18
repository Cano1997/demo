<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyMobEditViewMainReceivedBase from './ibz-weekly-mob-edit-view-main-received-base.vue';

import view_form from '@widgets/ibz-weekly/mob-info-main2-form/mob-info-main2-form.vue';
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
export default class IbzWeeklyMobEditViewMainReceived extends IbzWeeklyMobEditViewMainReceivedBase {

}
</script>