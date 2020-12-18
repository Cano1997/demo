<script lang='ts'>
import { Component } from 'vue-property-decorator';
import FileMobMDView9Base from './file-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/file/mob-list-mobmdctrl/mob-list-mobmdctrl.vue';
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
export default class FileMobMDView9 extends FileMobMDView9Base {

}
</script>