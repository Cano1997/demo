<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr2MobPickupMDViewBase from './story-usr2-mob-pickup-mdview-base.vue';

import view_searchform from '@widgets/story/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/story/mob-release-story-mobmdctrl/mob-release-story-mobmdctrl.vue';
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
export default class StoryUsr2MobPickupMDView extends StoryUsr2MobPickupMDViewBase {

}
</script>