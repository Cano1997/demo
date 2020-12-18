<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryRMobOptionViewBase from './story-rmob-option-view-base.vue';

import view_form from '@widgets/story/review-mob-form/review-mob-form.vue';
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
export default class StoryRMobOptionView extends StoryRMobOptionViewBase {

}
</script>