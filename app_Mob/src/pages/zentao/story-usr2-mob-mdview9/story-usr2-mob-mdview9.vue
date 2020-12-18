<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr2MobMDView9Base from './story-usr2-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/story/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class StoryUsr2MobMDView9 extends StoryUsr2MobMDView9Base {

}
</script>