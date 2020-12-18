<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskGSMobOptionViewBase from './task-gsmob-option-view-base.vue';

import view_form from '@widgets/task/estimate-mob-form/estimate-mob-form.vue';
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
export default class TaskGSMobOptionView extends TaskGSMobOptionViewBase {

}
</script>