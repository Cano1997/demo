<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr2MobMPickupBuildViewBase from './story-usr2-mob-mpickup-build-view-base.vue';

import view_pickupviewpanel from '@widgets/story/usr2-mob-mpickup-build-viewpickupviewpanel-pickupviewpanel/usr2-mob-mpickup-build-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class StoryUsr2MobMPickupBuildView extends StoryUsr2MobMPickupBuildViewBase {

}
</script>