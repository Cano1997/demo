import Vue, { VNode, CreateElement } from "vue";
import { Http } from '@/ibiz-core/utils/http/http';

declare module "vue/types/vue" {
    interface Vue {
        /**
         * Http net 对象
         *
         * @type {Http}
         * @memberof Vue
         */
        $http: Http;
    }
}