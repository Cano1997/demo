<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyUsr2MobEditViewBase from './ibz-weekly-usr2-mob-edit-view-base.vue';

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
export default class IbzWeeklyUsr2MobEditView extends IbzWeeklyUsr2MobEditViewBase {

}
</script>