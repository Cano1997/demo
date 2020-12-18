import Vue, { VNode, CreateElement } from "vue";
import { ViewTool } from './../view-tool/view-tool';

declare module "vue/types/vue" {
    interface Vue {
        /**
         * 工具类
         *
         * @type {Verify}
         * @memberof Vue
         */
        $viewTool: ViewTool;
    }
}