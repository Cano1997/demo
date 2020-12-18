<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyMobEditViewBase from './ibz-daily-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-daily/daily-info-ding-ding-form/daily-info-ding-ding-form.vue';
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
export default class IbzDailyMobEditView extends IbzDailyMobEditViewBase {

}
</script>