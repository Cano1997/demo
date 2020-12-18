<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryChangeMobOptionViewBase from './story-change-mob-option-view-base.vue';

import view_form from '@widgets/story/mob-chage-form-form/mob-chage-form-form.vue';
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
export default class StoryChangeMobOptionView extends StoryChangeMobOptionViewBase {

}
</script>