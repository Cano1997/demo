<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyDailyInfoMobEditViewBase from './ibz-daily-daily-info-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-daily/daily-info-mob-form/daily-info-mob-form.vue';
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
export default class IbzDailyDailyInfoMobEditView extends IbzDailyDailyInfoMobEditViewBase {

}
</script>