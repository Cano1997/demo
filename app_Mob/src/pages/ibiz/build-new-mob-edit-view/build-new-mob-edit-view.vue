<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BuildNewMobEditViewBase from './build-new-mob-edit-view-base.vue';

import view_form from '@widgets/build/mob-new-form-form/mob-new-form-form.vue';
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
export default class BuildNewMobEditView extends BuildNewMobEditViewBase {

}
</script>