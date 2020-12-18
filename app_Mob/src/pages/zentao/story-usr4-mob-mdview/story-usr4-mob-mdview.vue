<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr4MobMDViewBase from './story-usr4-mob-mdview-base.vue';

import view_mdctrl from '@widgets/story/mob-build-story-mobmdctrl/mob-build-story-mobmdctrl.vue';
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
export default class StoryUsr4MobMDView extends StoryUsr4MobMDViewBase {

}
</script>