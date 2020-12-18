<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BuildMobEditViewBase from './build-mob-edit-view-base.vue';

import view_form from '@widgets/build/mob-main-form/mob-main-form.vue';
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
export default class BuildMobEditView extends BuildMobEditViewBase {

}
</script>