<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryMobMDView9Base from './story-mob-mdview9-base.vue';

import view_searchform from '@widgets/story/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/story/mob-plan-mobmdctrl/mob-plan-mobmdctrl.vue';
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
export default class StoryMobMDView9 extends StoryMobMDView9Base {

}
</script>