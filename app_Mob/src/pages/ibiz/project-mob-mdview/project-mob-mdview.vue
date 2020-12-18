<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectMobMDViewBase from './project-mob-mdview-base.vue';

import view_searchform from '@widgets/project/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/project/mob-mobmdctrl/mob-mobmdctrl.vue';
@Component({
    components: {
        view_searchform, 
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectMobMDView extends ProjectMobMDViewBase {

}
</script>