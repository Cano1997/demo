
import Vue from "vue";
import { Notice } from '../notice/notice';

declare module "vue/types/vue" {
    interface Vue {
        /**
         * 提示工具
         *
         * @type {Notice}
         * @memberof Vue
         */
        $notice: Notice;
    }
}