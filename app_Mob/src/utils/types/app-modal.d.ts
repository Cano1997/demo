import Vue from "vue";
import { AppModal } from "../app-modal/app-modal";

declare module "vue/types/vue" {
    interface Vue {
        /**
         * 模态框实例
         *
         * @type {AppModal}
         * @memberof Vue
         */
        $appmodal: AppModal;
    }
}