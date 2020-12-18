<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysEmployeeLoginMobEditViewBase from './sys-employee-login-mob-edit-view-base.vue';

import view_form from '@widgets/sys-employee/mob-info-form/mob-info-form.vue';
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
export default class SysEmployeeLoginMobEditView extends SysEmployeeLoginMobEditViewBase {

}
</script>