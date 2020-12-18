<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryAssMoreMobMDViewBase from './story-ass-more-mob-mdview-base.vue';

import view_searchform from '@widgets/story/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/story/ass-mob-mobmdctrl/ass-mob-mobmdctrl.vue';
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
export default class StoryAssMoreMobMDView extends StoryAssMoreMobMDViewBase {

}
</script>