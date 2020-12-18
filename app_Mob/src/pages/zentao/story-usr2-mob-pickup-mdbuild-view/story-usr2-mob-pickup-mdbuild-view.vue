<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr2MobPickupMDBuildViewBase from './story-usr2-mob-pickup-mdbuild-view-base.vue';

import view_searchform from '@widgets/story/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/story/mob-build-link-story-mobmdctrl/mob-build-link-story-mobmdctrl.vue';
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
export default class StoryUsr2MobPickupMDBuildView extends StoryUsr2MobPickupMDBuildViewBase {

}
</script>