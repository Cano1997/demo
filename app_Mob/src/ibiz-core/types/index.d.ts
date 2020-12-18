import { AppEntityServiceConstructor } from '@/app-core/service/app-entity-service-constructor';
import { CounterServiceConstructor } from '@/app-core/counter/counter-service-constructor';
import { AppCommunicationsCenter } from '../app-service/message-center/app-communications-center';
import { AuthServiceConstructor } from '@/app-core/auth-service/auth-service-constructor';
import { CodeListServiceConstructor } from '@/app-core/code-list/code-list-service-constructor';
import { UtilServiceConstructor } from '@/app-core/util-service/util-service-constructor';
declare global {
    interface Window {
        appEntityServiceConstructor: AppEntityServiceConstructor,
        counterServiceConstructor: CounterServiceConstructor,
        authServiceConstructor: AuthServiceConstructor,
        codeListServiceConstructor:CodeListServiceConstructor,
        acc: AppCommunicationsCenter,
        utilServiceConstructor:UtilServiceConstructor
    }
}