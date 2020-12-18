<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryLinkStoryMobMPickupViewBase from './story-link-story-mob-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/story/link-story-mob-mpickup-viewpickupviewpanel-pickupviewpanel/link-story-mob-mpickup-viewpickupviewpanel-pickupviewpanel.vue';
@Component({
    components: {
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryLinkStoryMobMPickupView extends StoryLinkStoryMobMPickupViewBase {

}
</script>