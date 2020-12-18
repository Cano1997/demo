<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMyTerritoryMobMDView9Base from './ibz-my-territory-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/ibz-my-territory/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class IbzMyTerritoryMobMDView9 extends IbzMyTerritoryMobMDView9Base {

}
</script>