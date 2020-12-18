<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReleaseNewMobEditViewBase from './release-new-mob-edit-view-base.vue';

import view_form from '@widgets/release/mob-new-form-form/mob-new-form-form.vue';
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
export default class ReleaseNewMobEditView extends ReleaseNewMobEditViewBase {

}
</script>