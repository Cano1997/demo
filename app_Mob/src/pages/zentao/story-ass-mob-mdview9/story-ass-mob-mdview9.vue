<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryAssMobMDView9Base from './story-ass-mob-mdview9-base.vue';

import view_searchform from '@widgets/story/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/story/ass-mobdashboard-mobmdctrl/ass-mobdashboard-mobmdctrl.vue';
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
export default class StoryAssMobMDView9 extends StoryAssMobMDView9Base {

}
</script>