<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr2MobMPickupViewBase from './story-usr2-mob-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/story/usr2-mob-mpickup-viewpickupviewpanel-pickupviewpanel/usr2-mob-mpickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class StoryUsr2MobMPickupView extends StoryUsr2MobMPickupViewBase {

}
</script>