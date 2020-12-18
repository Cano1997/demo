<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryUsr3MobMPickupViewBase from './story-usr3-mob-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/story/usr3-mob-mpickup-viewpickupviewpanel-pickupviewpanel/usr3-mob-mpickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class StoryUsr3MobMPickupView extends StoryUsr3MobMPickupViewBase {

}
</script>