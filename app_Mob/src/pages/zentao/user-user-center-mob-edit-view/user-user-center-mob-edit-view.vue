<script lang='ts'>
import { Component } from 'vue-property-decorator';
import UserUserCenterMobEditViewBase from './user-user-center-mob-edit-view-base.vue';

import view_form from '@widgets/user/user-center-form/user-center-form.vue';
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
export default class UserUserCenterMobEditView extends UserUserCenterMobEditViewBase {

}
</script>