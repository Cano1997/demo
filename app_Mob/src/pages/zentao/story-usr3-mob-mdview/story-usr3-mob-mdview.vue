<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr3MobMDViewBase from './story-usr3-mob-mdview-base.vue';

import view_mdctrl from '@widgets/story/mob-release-story-mobmdctrl/mob-release-story-mobmdctrl.vue';
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
export default class StoryUsr3MobMDView extends StoryUsr3MobMDViewBase {

}
</script>