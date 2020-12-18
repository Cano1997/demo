<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TodoMobOptionViewBase from './todo-mob-option-view-base.vue';

import view_form from '@widgets/todo/ass-mob-form/ass-mob-form.vue';
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
export default class TodoMobOptionView extends TodoMobOptionViewBase {

}
</script>