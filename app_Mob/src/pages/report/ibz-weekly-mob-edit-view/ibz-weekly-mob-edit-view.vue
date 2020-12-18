<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyMobEditViewBase from './ibz-weekly-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-weekly/mob-wait-read-form/mob-wait-read-form.vue';
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
export default class IbzWeeklyMobEditView extends IbzWeeklyMobEditViewBase {

}
</script>