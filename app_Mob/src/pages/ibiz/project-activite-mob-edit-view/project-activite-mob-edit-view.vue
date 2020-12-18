<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectActiviteMobEditViewBase from './project-activite-mob-edit-view-base.vue';

import view_form from '@widgets/project/activite-mob-form/activite-mob-form.vue';
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
export default class ProjectActiviteMobEditView extends ProjectActiviteMobEditViewBase {

}
</script>