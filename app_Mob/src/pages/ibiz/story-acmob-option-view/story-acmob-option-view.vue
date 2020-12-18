<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryACMobOptionViewBase from './story-acmob-option-view-base.vue';

import view_form from '@widgets/story/activite-mob-form/activite-mob-form.vue';
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
export default class StoryACMobOptionView extends StoryACMobOptionViewBase {

}
</script>