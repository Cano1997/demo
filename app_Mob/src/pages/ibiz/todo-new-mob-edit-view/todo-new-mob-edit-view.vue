<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TodoNewMobEditViewBase from './todo-new-mob-edit-view-base.vue';

import view_form from '@widgets/todo/mob-new-form/mob-new-form.vue';
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
export default class TodoNewMobEditView extends TodoNewMobEditViewBase {

}
</script>