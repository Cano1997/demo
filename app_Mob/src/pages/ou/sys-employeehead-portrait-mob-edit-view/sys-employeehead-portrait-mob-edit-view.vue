<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysEmployeeheadPortraitMobEditViewBase from './sys-employeehead-portrait-mob-edit-view-base.vue';

import view_form from '@widgets/sys-employee/mob-main-form/mob-main-form.vue';
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
export default class SysEmployeeheadPortraitMobEditView extends SysEmployeeheadPortraitMobEditViewBase {

}
</script>