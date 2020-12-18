<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskSTARTMobOptionViewBase from './task-startmob-option-view-base.vue';

import view_form from '@widgets/task/mob-start-form-form/mob-start-form-form.vue';
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
export default class TaskSTARTMobOptionView extends TaskSTARTMobOptionViewBase {

}
</script>