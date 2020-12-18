<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryMobPickupMDViewBase from './story-mob-pickup-mdview-base.vue';

import view_searchform from '@widgets/story/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/story/mob-3817-mobmdctrl/mob-3817-mobmdctrl.vue';
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
export default class StoryMobPickupMDView extends StoryMobPickupMDViewBase {

}
</script>