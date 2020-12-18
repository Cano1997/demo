import { StatusMessage, ErrorMessage } from "./http-constant";

/**
 * Http请求返回
 *
 * @export
 * @class HttpResponse
 */
export class HttpResponse {
    /**
     * 状态
     *
     * @type {(200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 406 | 410 | 422 | 500 | 502 | 503 | 504)}
     * @memberof HttpResponse
     */
    public readonly status: 200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 406 | 410 | 422 | 500 | 502 | 503 | 504;

    /**
     * 请求头
     *
     * @type {*}
     * @memberof HttpResponse
     */
    public readonly headers: any;

    /**
     * 状态码对应文本消息
     *
     * @protected
     * @static
     * @memberof HttpResponse
     */
    protected static readonly statusMessage: any = StatusMessage;

    /**
     * 数据
     *
     * @type {*}
     * @memberof HttpResponse
     */
    public readonly data?: any;

    /**
     * 错误内容
     *
     * @type {{ code: HttpResponse['$errorCode'], message?: string }}
     * @memberof HttpResponse
     */
    public readonly error?: { code: HttpResponse['$errorCode'], message?: string } | null = null;

    /**
     * 错误码
     *
     * @protected
     * @type {(-1 | 100 | 101 | 5001 | 5002 | 5003 | 5004 | 5005)} 100为通用错误码，需自定义错误消息内容。101为http请求通用错误码。
     * @memberof HttpResponse
     */
    protected $errorCode: -1 | 100 | 101 | 5001 | 5002 | 5003 | 5004 | 5005 = -1;

    /**
     * 错误状态码对应信息
     *
     * @protected
     * @static
     * @memberof HttpResponse
     */
    protected static readonly errorMessage: any = ErrorMessage;

    /**
     * Creates an instance of HttpResponse.
     * @param {HttpResponse['status']} status
     * @param {HttpResponse['data']} [data=null]
     * @param {HttpResponse['error']} [error=null]
     * @param {*} [headers]
     * @memberof HttpResponse
     */
    constructor(status: HttpResponse['status'], data: HttpResponse['data'] = null, error: HttpResponse['error'] = null, headers?: any) {
        this.status = status;
        this.data = data;
        this.error = error;
        if (!this.error && this.status !== 200 && this.status !== 201 && this.status !== 204) {
            this.error = { code: 101 };
        }
        if (this.error && !this.error.message) {
            if (this.error.code === 101) {
                this.error.message = HttpResponse.getStatusMessage(this.status);
            } else {
                this.error.message = HttpResponse.getErrorMessage(this.error.code);
            }
        }
        this.headers = headers;
    }

    /**
     * 获取状态码文本值
     *
     * @param {HttpResponse['$status']} status
     * @returns {string}
     * @memberof HttpResponse
     */
    public static getStatusMessage(status: HttpResponse['status']): string {
        return this.statusMessage[status];
    }

    /**
     * 获取错误码文本值
     *
     * @param {HttpResponse['$errorCode']} code
     * @returns {string}
     * @memberof HttpResponse
     */
    public static getErrorMessage(code: HttpResponse['$errorCode']): string {
        return this.errorMessage[code];
    }

    /**
     * 是否错误
     *
     * @returns {boolean}
     * @memberof HttpResponse
     */
    public isError(): boolean {
        return this.error ? true : false;
    }

}