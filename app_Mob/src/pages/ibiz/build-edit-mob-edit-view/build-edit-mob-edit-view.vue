<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BuildEditMobEditViewBase from './build-edit-mob-edit-view-base.vue';

import view_form from '@widgets/build/mob-edit-form-form/mob-edit-form-form.vue';
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
export default class BuildEditMobEditView extends BuildEditMobEditViewBase {

}
</script>