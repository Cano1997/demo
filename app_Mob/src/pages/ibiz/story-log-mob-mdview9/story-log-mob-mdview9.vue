<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryLogMobMDView9Base from './story-log-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/story/moblog-mobmdctrl/moblog-mobmdctrl.vue';
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
export default class StoryLogMobMDView9 extends StoryLogMobMDView9Base {

}
</script>