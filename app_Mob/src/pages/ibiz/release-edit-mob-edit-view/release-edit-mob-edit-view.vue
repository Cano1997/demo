<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReleaseEditMobEditViewBase from './release-edit-mob-edit-view-base.vue';

import view_form from '@widgets/release/mob-edit-form-form/mob-edit-form-form.vue';
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
export default class ReleaseEditMobEditView extends ReleaseEditMobEditViewBase {

}
</script>