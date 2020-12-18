<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysUpdateLogMobEditViewBase from './sys-update-log-mob-edit-view-base.vue';

import view_form from '@widgets/sys-update-log/mob-main-form/mob-main-form.vue';
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
export default class SysUpdateLogMobEditView extends SysUpdateLogMobEditViewBase {

}
</script>