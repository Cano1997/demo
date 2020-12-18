<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyUsr2MobTabExpViewMyTiJiaoBase from './ibz-weekly-usr2-mob-tab-exp-view-my-ti-jiao-base.vue';

import view_tabexppanel from '@widgets/ibz-weekly/usr2-mob-tab-exp-view-my-ti-jiaotabexppanel-tabexppanel/usr2-mob-tab-exp-view-my-ti-jiaotabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzWeeklyUsr2MobTabExpViewMyTiJiao extends IbzWeeklyUsr2MobTabExpViewMyTiJiaoBase {

}
</script>