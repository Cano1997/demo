<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyWorkBase from './my-work-calendar-base.vue';

import layout_todolayoutpanel from '@widgets/todo/mob-panel/mob-panel.vue';
import layout_tasklayoutpanel from '@widgets/task/mob-panel/mob-panel.vue';
import layout_buglayoutpanel from '@widgets/bug/mob-panel/mob-panel.vue';
import layout_dailylayoutpanel from '@widgets/ibz-daily/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_todolayoutpanel,
        layout_tasklayoutpanel,
        layout_buglayoutpanel,
        layout_dailylayoutpanel,
         
    }
})
export default class MyWork extends MyWorkBase {

}
</script>