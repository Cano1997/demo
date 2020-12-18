<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryCMobOptionViewBase from './story-cmob-option-view-base.vue';

import view_form from '@widgets/story/close-mob-form/close-mob-form.vue';
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
export default class StoryCMobOptionView extends StoryCMobOptionViewBase {

}
</script>