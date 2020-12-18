<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr2MobMDView_5219Base from './story-usr2-mob-mdview-5219-base.vue';

import view_mdctrl from '@widgets/story/mob-product-plan-story-mobmdctrl/mob-product-plan-story-mobmdctrl.vue';
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
export default class StoryUsr2MobMDView_5219 extends StoryUsr2MobMDView_5219Base {

}
</script>