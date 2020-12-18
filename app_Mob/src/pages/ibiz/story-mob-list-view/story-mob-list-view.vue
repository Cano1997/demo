<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryMobListViewBase from './story-mob-list-view-base.vue';

import view_mdctrl from '@widgets/story/ass-mobdashboard-mobmdctrl/ass-mobdashboard-mobmdctrl.vue';
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
export default class StoryMobListView extends StoryMobListViewBase {

}
</script>