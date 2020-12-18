<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ActionMobMapViewBase from './action-mob-map-view-base.vue';

import view_map from '@widgets/action/user-login-position-map/user-login-position-map.vue';
@Component({
    components: {
        view_map, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ActionMobMapView extends ActionMobMapViewBase {

}
</script>