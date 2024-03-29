import { Component, Prop, Watch } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from 'ibiz-vue';
import Vue from 'vue';
import { Label } from './components/Label';
import { Path } from './components/Path';
import { defaultConfig } from './const';
import { Config, Data, PieConfig, PieSlices, UserData } from './types';
import { checkIsDataArrayOfNumbers, checkIsUserData, createElementPieces, mapData, mapRowData } from './utils';
import './pie3d.less';

@Component({
    components: {
        'pie-label': Label,
        'pie-path': Path,
    },
})
@VueLifeCycleProcessing()
export default class Pie3D extends Vue {
    @Prop() public config?: Config;
    @Prop() public data!: Data;

    public height: number = 0;
    public width: number = 0;
    public rx: number = 0;
    public mappedData: PieSlices = mapData([]);

    public pieConfig: PieConfig = { ...defaultConfig };
    public ry: number = 0;
    public params: any = {};
    public pathVariables: any = {};

    public selectKey: string = '';

    created() {
        if (!Array.isArray(this.data)) {
            throw new Error('参数data应该是一个数组');
        }
        if (!checkIsDataArrayOfNumbers(this.data)) {
            if (!checkIsUserData(this.data)) {
                throw new Error('数据格式错误');
            }
        }
        if (this.config) {
            Object.assign(this.pieConfig, this.config);
        }
    }

    mounted() {
        this.calcOptions();
    }

    @Watch('data')
    public onDataChange(newVal: any) {
        if (newVal) {
            this.calcOptions();
        }
    }

    public calcOptions() {
        if (!this.data || !this.data.length) {
            return;
        }
        this.mappedData = checkIsDataArrayOfNumbers(this.data)
            ? mapData(mapRowData(this.data as number[]))
            : mapData(this.data as UserData[]);

        if (this.$el) {
            this.height = this.$el.clientHeight;
            this.width = this.$el.clientWidth;
        }
        this.rx = this.height / 2 * this.pieConfig.size;
        this.ry = (this.rx * this.pieConfig.angle) / 90;

        this.pathVariables = {
            rx: this.rx,
            ry: this.ry,
            ...this.pieConfig,
        };
    }

    clear() {
        const paths = document.querySelectorAll(`.${this.selectKey}`);
        paths.forEach(dom => {
            dom.classList.remove('is-active');
        })
    }

    onClick(item: any) {
        if (this.selectKey) {
            this.clear();
        }
        this.selectKey = item.uuid;
        const paths = document.querySelectorAll(`.${item.uuid}`);
        paths.forEach(dom => {
            dom.classList.add('is-active');
        })
    }

    onMouseEnter(item: any) {
        if (this.selectKey) {
            this.clear();
        }
        this.selectKey = item.uuid;
        const paths = document.querySelectorAll(`.${item.uuid}`);
        paths.forEach(dom => {
            dom.classList.add('is-active');
        })
    }

    renderSider() {
        const [p1Elements, p2Elements, p3Elements, p4Elements, exceptionElements] = createElementPieces(
            this.mappedData,
        );
        const items = [...exceptionElements, ...p4Elements, ...p1Elements, ...p3Elements, ...p2Elements];
        return <g>
            {items.map((item: any) => {
                return [<pie-path class={item.uuid} on-click={() => this.onClick(item)} on-mouse-enter={() => this.onMouseEnter(item)} on-mouse-leave={() => this.clear()} data={item} pathVariables={this.pathVariables} type='start' />,
                <pie-path class={item.uuid} on-click={() => this.onClick(item)} on-mouse-enter={() => this.onMouseEnter(item)} on-mouse-leave={() => this.clear()} data={item} pathVariables={this.pathVariables} type='end' />]
            })}
        </g>
    }

    renderOut() {
        return <g>
            {this.mappedData.map((item: any) => {
                return [<pie-path class={item.uuid} on-click={() => this.onClick(item)} on-mouse-enter={() => this.onMouseEnter(item)} on-mouse-leave={() => this.clear()} data={item} pathVariables={this.pathVariables} type='outer' />]
            })}
        </g>
    }

    renderTop() {
        return <g>
            {this.mappedData.map((item: any) => {
                return <pie-path class={item.uuid} on-click={() => this.onClick(item)} on-mouse-enter={() => this.onMouseEnter(item)} on-mouse-leave={() => this.clear()} data={item} pathVariables={this.pathVariables} type='top' />
            })}
        </g>
    }

    renderLabel() {
        if (!this.config?.showLabels) {
            return null;
        }
        return <g>
            {this.mappedData.map((item: any) => {
                return <pie-label
                    data={item}
                    pathVariables={this.pathVariables}
                    chartWidth={this.width}
                    textSize={this.config?.textSize || defaultConfig.textSize}
                    showLabelPercentage={this.config?.showLabelPercentage}
                />
            })}
        </g>
    }

    render() {
        if (!this.data.length) {
            return;
        }
        return (
            <svg
                class='app-pie3d'
            >
                <g transform={`translate(${this.width / 2}, ${this.height / 2})`}>
                    {this.renderSider()}
                    {this.renderOut()}
                    {this.renderTop()}
                    {this.renderLabel()}
                </g>
            </svg>
        );
    }
}
