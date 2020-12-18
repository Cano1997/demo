<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryMobOptionViewBase from './story-mob-option-view-base.vue';

import view_form from '@widgets/story/mob-according-to-plan-form/mob-according-to-plan-form.vue';
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
export default class StoryMobOptionView extends StoryMobOptionViewBase {

}
</script>