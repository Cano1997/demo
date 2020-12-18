<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyBase from './my-portlet-base.vue';
import view_db_appmenu1_appmenu from '@widgets/app/my-appmenu/my-appmenu.vue';

 
@Component({
    components: {
        view_db_appmenu1_appmenu, 
         
    }
})
export default class My extends MyBase {

}
</script>