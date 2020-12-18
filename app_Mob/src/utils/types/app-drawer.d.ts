import Vue from "vue";
import { AppDrawer } from "../app-drawer/app-drawer";

declare module "vue/types/vue" {
    interface Vue {
        /**
         * 抽屉实例
         *
         * @type {AppDrawer}
         * @memberof Vue
         */
        $appdrawer: AppDrawer;
    }
}
