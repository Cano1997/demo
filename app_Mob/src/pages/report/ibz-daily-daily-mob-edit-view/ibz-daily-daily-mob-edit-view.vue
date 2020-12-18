<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyDailyMobEditViewBase from './ibz-daily-daily-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-daily/mob-daily-edit-form/mob-daily-edit-form.vue';
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
export default class IbzDailyDailyMobEditView extends IbzDailyDailyMobEditViewBase {

}
</script>