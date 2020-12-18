<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BuildLogMobEditViewBase from './build-log-mob-edit-view-base.vue';

import view_form from '@widgets/build/log-main-form/log-main-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class BuildLogMobEditView extends BuildLogMobEditViewBase {

}
</script>