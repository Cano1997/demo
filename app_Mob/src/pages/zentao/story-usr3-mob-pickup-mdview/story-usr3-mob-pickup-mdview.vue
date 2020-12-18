<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr3MobPickupMDViewBase from './story-usr3-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/story/mob-project-link-story-mobmdctrl/mob-project-link-story-mobmdctrl.vue';
@Component({
    components: {
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryUsr3MobPickupMDView extends StoryUsr3MobPickupMDViewBase {

}
</script>