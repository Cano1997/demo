<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectSupMobEditViewBase from './project-sup-mob-edit-view-base.vue';

import view_form from '@widgets/project/suspend-nclose-mob-form/suspend-nclose-mob-form.vue';
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
export default class ProjectSupMobEditView extends ProjectSupMobEditViewBase {

}
</script>