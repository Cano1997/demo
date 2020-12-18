import { TreeViewServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { EmpTreeModel } from '@/app-core/ctrl-model/sys-employee/emp-tree-treeview-model';
import i18n from '@/locale';
import SysOrganizationService from '@/app-core/service/sys-organization/sys-organization-service';
import ProjectService from '@/app-core/service/project/project-service';
import SysPostService from '@/app-core/service/sys-post/sys-post-service';
import SysDepartmentService from '@/app-core/service/sys-department/sys-department-service';
import SysTeamMemberService from '@/app-core/service/sys-team-member/sys-team-member-service';
import SysTeamService from '@/app-core/service/sys-team/sys-team-service';
import UserContactService from '@/app-core/service/user-contact/user-contact-service';


/**
 * EmpTree 部件服务对象
 *
 * @export
 * @class EmpTreeService
 * @extends {TreeViewServiceBase}
 */
export class EmpTreeService extends TreeViewServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {EmpTreeModel}
     * @memberof ControlServiceBase
     */
    protected model: EmpTreeModel = new EmpTreeModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof EmpTreeService
     */
    protected appDEName: string = 'sysemployee';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof EmpTreeService
     */
    protected appDeKey: string = 'userid';



    /**
     * 单位服务对象
     *
     * @type {SysOrganizationService}
     * @memberof EmpTreeService
     */
    public sysorganizationService: SysOrganizationService = new SysOrganizationService({ $store: this.getStore() });

    /**
     * 项目服务对象
     *
     * @type {ProjectService}
     * @memberof EmpTreeService
     */
    public projectService: ProjectService = new ProjectService({ $store: this.getStore() });

    /**
     * 岗位服务对象
     *
     * @type {SysPostService}
     * @memberof EmpTreeService
     */
    public syspostService: SysPostService = new SysPostService({ $store: this.getStore() });

    /**
     * 部门服务对象
     *
     * @type {SysDepartmentService}
     * @memberof EmpTreeService
     */
    public sysdepartmentService: SysDepartmentService = new SysDepartmentService({ $store: this.getStore() });

    /**
     * 组成员服务对象
     *
     * @type {SysTeamMemberService}
     * @memberof EmpTreeService
     */
    public systeammemberService: SysTeamMemberService = new SysTeamMemberService({ $store: this.getStore() });

    /**
     * 组服务对象
     *
     * @type {SysTeamService}
     * @memberof EmpTreeService
     */
    public systeamService: SysTeamService = new SysTeamService({ $store: this.getStore() });

    /**
     * 用户联系方式服务对象
     *
     * @type {UserContactService}
     * @memberof EmpTreeService
     */
    public usercontactService: UserContactService = new UserContactService({ $store: this.getStore() });

    /**
     * 节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
    public TREENODE_SEPARATOR: string = ';';


    /**
     * 组织节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_ORG: string = 'Org';

    /**
     * 项目节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_PROJECTTEAM: string = 'ProjectTeam';

    /**
     * 岗位（动态）节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_SYSPOST: string = 'SysPost';

    /**
     * 项目团队节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_PROJECT: string = 'project';

    /**
     * 组节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_TEAM: string = 'Team';

    /**
     * 部门节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_DEPART: string = 'Depart';

    /**
     * 组员节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_TEAMMEMBER: string = 'Teammember';

    /**
     * 组织机构节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_ORGEMP: string = 'OrgEmp';

    /**
     * 岗位节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_POST: string = 'post';

    /**
     * 项目人员节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_PROJECTEMP: string = 'ProjectEmp';

    /**
     * 人员节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_IBZEMP: string = 'IBZEMP';

    /**
     * 联系用户节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_CONTACTUSER: string = 'ContActUser';

    /**
     * 联系人节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_CONCATLIST: string = 'ConcatList';

    /**
     * 团队节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_SYSTEAM: string = 'SysTeam';

    /**
     * 默认根节点节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_ROOT: string = 'ROOT';

    /**
     * 联系列表节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof EmpTreeService
     */
	public TREENODE_USERCONTACT: string = 'UserContact';

    /**
     * 获取节点数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async getNodes(context:any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let { srfparentkey, srfcat, srfnodeid, srfnodefilter, query }: { srfparentkey: string, srfcat: string, srfnodeid: string, srfnodefilter: string, query:string } = data;
        srfnodefilter = query ? query : srfnodefilter;
        let list: any[] = [];
        let filter: any = {};


        if (!srfnodeid || Object.is(srfnodeid, '#')) {
            srfnodeid = this.TREENODE_ROOT;
        }

        let strTreeNodeId: string = srfnodeid;
        let strRealNodeId: string = '';
        let bRootSelect: boolean = false;
        let strNodeType: string | null = null;
        let strRootSelectNode: string = '';

        if (Object.is(strTreeNodeId, this.TREENODE_ROOT)) {
            strNodeType = this.TREENODE_ROOT;
            if (srfparentkey) {
                strRealNodeId = srfparentkey;
            }
        } else {
            let nPos = strTreeNodeId.indexOf(this.TREENODE_SEPARATOR);
            if (nPos === -1) {
                return Promise.reject({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
            }
            strNodeType = strTreeNodeId.substring(0, nPos);
			strRealNodeId = strTreeNodeId.substring(nPos + 1);
        }

        Object.assign(filter,
            {
                srfparentkey: srfparentkey,
                srfcat: srfcat,
                srfnodefilter: srfnodefilter,
                strRealNodeId: strRealNodeId,
                srfnodeid: srfnodeid,
                strNodeType: strNodeType,
                viewparams: JSON.parse(JSON.stringify(data)).viewparams
            }
        );

        // 分解节点标识
        let nodeid: string[] = strRealNodeId.split(this.TREENODE_SEPARATOR);
        for (let i = 0; i < nodeid.length; i++) {
            switch (i) {
                case 0:
                    Object.assign(filter, { nodeid: nodeid[0] });
                    break;
                case 1:
                    Object.assign(filter, { nodeid2: nodeid[1] });
                    break;
                case 2:
                    Object.assign(filter, { nodeid3: nodeid[2] });
                    break;
                case 3:
                    Object.assign(filter, { nodeid4: nodeid[3] });
                    break;
                default:
                    break;
            }
        }

        if (Object.is(strNodeType, this.TREENODE_ORG)) {
            await this.fillOrgNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTTEAM)) {
            await this.fillProjectteamNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_SYSPOST)) {
            await this.fillSyspostNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECT)) {
            await this.fillProjectNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_TEAM)) {
            await this.fillTeamNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_DEPART)) {
            await this.fillDepartNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_TEAMMEMBER)) {
            await this.fillTeammemberNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ORGEMP)) {
            await this.fillOrgempNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_POST)) {
            await this.fillPostNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTEMP)) {
            await this.fillProjectempNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_IBZEMP)) {
            await this.fillIbzempNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_CONTACTUSER)) {
            await this.fillContactuserNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_CONCATLIST)) {
            await this.fillConcatlistNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_SYSTEAM)) {
            await this.fillSysteamNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOT)) {
            await this.fillRootNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_USERCONTACT)) {
            await this.fillUsercontactNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        return Promise.resolve({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
    }

    /**
     * 填充 树视图节点[组织]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillOrgNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchOrg(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.orgid;
                        let strText: string = entity.orgname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'SysOrganization',srfparentkey:entity.orgid});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysOrganization',srfparentkey:entity.orgid,sysorganization:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'sysorganization':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'Org';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"sysorganization" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchOrg(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.sysorganizationService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[组织]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillOrgNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充部门
            let DepartRsNavContext:any = {};
            let DepartRsNavParams:any = {};
            let DepartRsParams:any = {};
			await this.fillDepartNodes(context, filter, list ,DepartRsNavContext,DepartRsNavParams,DepartRsParams);
			// 填充人员
            let IbzempRsNavContext:any = {};
            let IbzempRsNavParams:any = {};
            let IbzempRsParams:any = {};
			await this.fillIbzempNodes(context, filter, list ,IbzempRsNavContext,IbzempRsNavParams,IbzempRsParams);
		} else {
			// 填充部门
            let DepartRsNavContext:any = {};
            let DepartRsNavParams:any = {};
            let DepartRsParams:any = {};
			await this.fillDepartNodes(context, filter, list ,DepartRsNavContext,DepartRsNavParams,DepartRsParams);
			// 填充人员
            let IbzempRsNavContext:any = {};
            let IbzempRsNavParams:any = {};
            let IbzempRsParams:any = {};
			await this.fillIbzempNodes(context, filter, list ,IbzempRsNavContext,IbzempRsNavParams,IbzempRsParams);
		}
	}

    /**
     * 填充 树视图节点[项目]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillProjectteamNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchProjectteam(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'Project',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'Project',srfparentkey:entity.id,project:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'project':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'ProjectTeam';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"project" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchProjectteam(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.projectService;
            let list: any[] = [];
            if (_appEntityService['FetchProjectTeam'] && _appEntityService['FetchProjectTeam'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchProjectTeam'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchProjectTeam数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchProjectTeam数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[项目]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillProjectteamNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目人员
            let ProjectempRsNavContext:any = {};
            let ProjectempRsNavParams:any = {};
            let ProjectempRsParams:any = {};
			await this.fillProjectempNodes(context, filter, list ,ProjectempRsNavContext,ProjectempRsNavParams,ProjectempRsParams);
		} else {
			// 填充项目人员
            let ProjectempRsNavContext:any = {};
            let ProjectempRsNavParams:any = {};
            let ProjectempRsParams:any = {};
			await this.fillProjectempNodes(context, filter, list ,ProjectempRsNavContext,ProjectempRsNavParams,ProjectempRsParams);
		}
	}

    /**
     * 填充 树视图节点[岗位（动态）]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillSyspostNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchSyspost(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.postid;
                        let strText: string = entity.postname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'SysPost',srfparentkey:entity.postid});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysPost',srfparentkey:entity.postid,syspost:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'syspost':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'SysPost';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"syspost" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchSyspost(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.syspostService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[岗位（动态）]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillSyspostNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充组员
            let TeammemberRsNavContext:any = {};
            let TeammemberRsNavParams:any = {};
            let TeammemberRsParams:any = {};
			await this.fillTeammemberNodes(context, filter, list ,TeammemberRsNavContext,TeammemberRsNavParams,TeammemberRsParams);
		} else {
			// 填充组员
            let TeammemberRsNavContext:any = {};
            let TeammemberRsNavParams:any = {};
            let TeammemberRsParams:any = {};
			await this.fillTeammemberNodes(context, filter, list ,TeammemberRsNavContext,TeammemberRsNavParams,TeammemberRsParams);
		}
	}

    /**
     * 填充 树视图节点[项目团队]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillProjectNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: '项目团队'});
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode, { isNode: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'project';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[项目团队]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillProjectNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目
            let ProjectteamRsNavContext:any = {};
            let ProjectteamRsNavParams:any = {};
            let ProjectteamRsParams:any = {};
			await this.fillProjectteamNodes(context, filter, list ,ProjectteamRsNavContext,ProjectteamRsNavParams,ProjectteamRsParams);
		} else {
			// 填充项目
            let ProjectteamRsNavContext:any = {};
            let ProjectteamRsNavParams:any = {};
            let ProjectteamRsParams:any = {};
			await this.fillProjectteamNodes(context, filter, list ,ProjectteamRsNavContext,ProjectteamRsNavParams,ProjectteamRsParams);
		}
	}

    /**
     * 填充 树视图节点[组]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillTeamNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: '组'});
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode, { isNode: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'Team';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[组]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillTeamNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充团队
            let SysteamRsNavContext:any = {};
            let SysteamRsNavParams:any = {};
            let SysteamRsParams:any = {};
			await this.fillSysteamNodes(context, filter, list ,SysteamRsNavContext,SysteamRsNavParams,SysteamRsParams);
		} else {
			// 填充团队
            let SysteamRsNavContext:any = {};
            let SysteamRsNavParams:any = {};
            let SysteamRsParams:any = {};
			await this.fillSysteamNodes(context, filter, list ,SysteamRsNavContext,SysteamRsNavParams,SysteamRsParams);
		}
	}

    /**
     * 填充 树视图节点[部门]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillDepartNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            if (Object.is(filter.strNodeType, this.TREENODE_ORG)) {
                Object.assign(searchFilter, { n_orgid_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchDepart(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.deptid;
                        let strText: string = entity.deptname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'SysDepartment',srfparentkey:entity.deptid});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysDepartment',srfparentkey:entity.deptid,sysdepartment:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'sysdepartment':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'Depart';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"sysdepartment" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchDepart(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.sysdepartmentService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[部门]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillDepartNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充人员
            let IbzempRsNavContext:any = {};
            let IbzempRsNavParams:any = {};
            let IbzempRsParams:any = {};
			await this.fillIbzempNodes(context, filter, list ,IbzempRsNavContext,IbzempRsNavParams,IbzempRsParams);
		} else {
			// 填充人员
            let IbzempRsNavContext:any = {};
            let IbzempRsNavParams:any = {};
            let IbzempRsParams:any = {};
			await this.fillIbzempNodes(context, filter, list ,IbzempRsNavContext,IbzempRsNavParams,IbzempRsParams);
		}
	}

    /**
     * 填充 树视图节点[组员]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillTeammemberNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            if (Object.is(filter.strNodeType, this.TREENODE_SYSPOST)) {
                Object.assign(searchFilter, { n_postid_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_SYSTEAM)) {
                Object.assign(searchFilter, { n_teamid_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchTeammember(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.userid;
                        let strText: string = entity.personname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'SysTeamMember',srfparentkey:entity.userid});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysTeamMember',srfparentkey:entity.userid,systeammember:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'systeammember':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'Teammember';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"systeammember" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchTeammember(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.systeammemberService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[组员]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillTeammemberNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[组织机构]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillOrgempNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: '组织机构'});
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode, { isNode: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'OrgEmp';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[组织机构]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillOrgempNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充组织
            let OrgRsNavContext:any = {};
            let OrgRsNavParams:any = {};
            let OrgRsParams:any = {};
			await this.fillOrgNodes(context, filter, list ,OrgRsNavContext,OrgRsNavParams,OrgRsParams);
		} else {
			// 填充组织
            let OrgRsNavContext:any = {};
            let OrgRsNavParams:any = {};
            let OrgRsParams:any = {};
			await this.fillOrgNodes(context, filter, list ,OrgRsNavContext,OrgRsNavParams,OrgRsParams);
		}
	}

    /**
     * 填充 树视图节点[岗位]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillPostNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: '岗位'});
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode, { isNode: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'post';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[岗位]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillPostNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充岗位（动态）
            let SyspostRsNavContext:any = {};
            let SyspostRsNavParams:any = {};
            let SyspostRsParams:any = {};
			await this.fillSyspostNodes(context, filter, list ,SyspostRsNavContext,SyspostRsNavParams,SyspostRsParams);
		} else {
			// 填充岗位（动态）
            let SyspostRsNavContext:any = {};
            let SyspostRsNavParams:any = {};
            let SyspostRsParams:any = {};
			await this.fillSyspostNodes(context, filter, list ,SyspostRsNavContext,SyspostRsNavParams,SyspostRsParams);
		}
	}

    /**
     * 填充 树视图节点[项目人员]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillProjectempNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_PROJECTTEAM)) {
                Object.assign(searchFilter, { n_project_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchProjectemp(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.username;
                        let strText: string = entity.personname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'SysEmployee',srfparentkey:entity.username});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysEmployee',srfparentkey:entity.username,sysemployee:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'sysemployee':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'ProjectEmp';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"sysemployee" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchProjectemp(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.service;
            let list: any[] = [];
            if (_appEntityService['FetchProjectteamPk'] && _appEntityService['FetchProjectteamPk'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchProjectteamPk'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchProjectteamPk数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchProjectteamPk数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[项目人员]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillProjectempNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[人员]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillIbzempNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            if (Object.is(filter.strNodeType, this.TREENODE_DEPART)) {
                Object.assign(searchFilter, { n_mdeptid_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_ORG)) {
                Object.assign(searchFilter, { n_orgid_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchIbzemp(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.username;
                        let strText: string = entity.personname;
                        let strIcon: string = entity.usericon;
                        Object.assign(treeNode,{srfparentdename:'SysEmployee',srfparentkey:entity.username});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysEmployee',srfparentkey:entity.username,sysemployee:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'sysemployee':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'IBZEMP';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"sysemployee" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchIbzemp(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.service;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[人员]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillIbzempNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[联系用户]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillContactuserNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchContactuser(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.username;
                        let strText: string = entity.personname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'SysEmployee',srfparentkey:entity.username});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysEmployee',srfparentkey:entity.username,sysemployee:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'sysemployee':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'ContActUser';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"sysemployee" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchContactuser(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.service;
            let list: any[] = [];
            if (_appEntityService['FetchContActList'] && _appEntityService['FetchContActList'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchContActList'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchContActList数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchContActList数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[联系用户]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillContactuserNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[联系人]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillConcatlistNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: '联系人'});
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode, { isNode: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ConcatList';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[联系人]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillConcatlistNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充联系列表
            let UsercontactRsNavContext:any = {};
            let UsercontactRsNavParams:any = {};
            let UsercontactRsParams:any = {};
			await this.fillUsercontactNodes(context, filter, list ,UsercontactRsNavContext,UsercontactRsNavParams,UsercontactRsParams);
		} else {
			// 填充联系列表
            let UsercontactRsNavContext:any = {};
            let UsercontactRsNavParams:any = {};
            let UsercontactRsParams:any = {};
			await this.fillUsercontactNodes(context, filter, list ,UsercontactRsNavContext,UsercontactRsNavParams,UsercontactRsParams);
		}
	}

    /**
     * 填充 树视图节点[团队]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillSysteamNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchSysteam(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.teamid;
                        let strText: string = entity.teamname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'SysTeam',srfparentkey:entity.teamid});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'SysTeam',srfparentkey:entity.teamid,systeam:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'systeam':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'SysTeam';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"systeam" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchSysteam(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.systeamService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[团队]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillSysteamNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充组员
            let TeammemberRsNavContext:any = {};
            let TeammemberRsNavParams:any = {};
            let TeammemberRsParams:any = {};
			await this.fillTeammemberNodes(context, filter, list ,TeammemberRsNavContext,TeammemberRsNavParams,TeammemberRsParams);
		} else {
			// 填充组员
            let TeammemberRsNavContext:any = {};
            let TeammemberRsNavParams:any = {};
            let TeammemberRsParams:any = {};
			await this.fillTeammemberNodes(context, filter, list ,TeammemberRsNavContext,TeammemberRsNavParams,TeammemberRsParams);
		}
	}

    /**
     * 填充 树视图节点[默认根节点]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillRootNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: '默认根节点'});
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode, { isNode: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ROOT';

            Object.assign(treeNode, { srfkey: 'root' });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += 'root';

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[默认根节点]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillRootNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充组织机构
            let OrgempRsNavContext:any = {};
            let OrgempRsNavParams:any = {};
            let OrgempRsParams:any = {};
			await this.fillOrgempNodes(context, filter, list ,OrgempRsNavContext,OrgempRsNavParams,OrgempRsParams);
			// 填充项目团队
            let ProjectRsNavContext:any = {};
            let ProjectRsNavParams:any = {};
            let ProjectRsParams:any = {};
			await this.fillProjectNodes(context, filter, list ,ProjectRsNavContext,ProjectRsNavParams,ProjectRsParams);
			// 填充组
            let TeamRsNavContext:any = {};
            let TeamRsNavParams:any = {};
            let TeamRsParams:any = {};
			await this.fillTeamNodes(context, filter, list ,TeamRsNavContext,TeamRsNavParams,TeamRsParams);
			// 填充岗位
            let PostRsNavContext:any = {};
            let PostRsNavParams:any = {};
            let PostRsParams:any = {};
			await this.fillPostNodes(context, filter, list ,PostRsNavContext,PostRsNavParams,PostRsParams);
			// 填充联系人
            let ConcatlistRsNavContext:any = {};
            let ConcatlistRsNavParams:any = {};
            let ConcatlistRsParams:any = {};
			await this.fillConcatlistNodes(context, filter, list ,ConcatlistRsNavContext,ConcatlistRsNavParams,ConcatlistRsParams);
		} else {
			// 填充组织机构
            let OrgempRsNavContext:any = {};
            let OrgempRsNavParams:any = {};
            let OrgempRsParams:any = {};
			await this.fillOrgempNodes(context, filter, list ,OrgempRsNavContext,OrgempRsNavParams,OrgempRsParams);
			// 填充项目团队
            let ProjectRsNavContext:any = {};
            let ProjectRsNavParams:any = {};
            let ProjectRsParams:any = {};
			await this.fillProjectNodes(context, filter, list ,ProjectRsNavContext,ProjectRsNavParams,ProjectRsParams);
			// 填充组
            let TeamRsNavContext:any = {};
            let TeamRsNavParams:any = {};
            let TeamRsParams:any = {};
			await this.fillTeamNodes(context, filter, list ,TeamRsNavContext,TeamRsNavParams,TeamRsParams);
			// 填充岗位
            let PostRsNavContext:any = {};
            let PostRsNavParams:any = {};
            let PostRsParams:any = {};
			await this.fillPostNodes(context, filter, list ,PostRsNavContext,PostRsNavParams,PostRsParams);
			// 填充联系人
            let ConcatlistRsNavContext:any = {};
            let ConcatlistRsNavParams:any = {};
            let ConcatlistRsParams:any = {};
			await this.fillConcatlistNodes(context, filter, list ,ConcatlistRsNavContext,ConcatlistRsNavParams,ConcatlistRsParams);
		}
	}

    /**
     * 填充 树视图节点[联系列表]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public fillUsercontactNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchUsercontact(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.listname;
                        let strIcon: string = 'default_text';
                        Object.assign(treeNode,{srfparentdename:'UserContact',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'UserContact',srfparentkey:entity.id,usercontact:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'usercontact':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        Object.assign(treeNode, { strIcon: strIcon });
                        let strNodeId: string = 'UserContact';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"usercontact" });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    public async searchUsercontact(context:any={}, searchFilter: any, filter: any): Promise<any> {
        await this.onBeforeAction();
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.usercontactService;
            let list: any[] = [];
            if (_appEntityService['FetchMyUSERCONTACT'] && _appEntityService['FetchMyUSERCONTACT'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchMyUSERCONTACT'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchMyUSERCONTACT数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchMyUSERCONTACT数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[联系列表]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof EmpTreeService
     */
    public async fillUsercontactNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充联系用户
            let ContactuserRsNavContext:any = {};
            let ContactuserRsNavParams:any = {};
            let ContactuserRsParams:any = {};
			await this.fillContactuserNodes(context, filter, list ,ContactuserRsNavContext,ContactuserRsNavParams,ContactuserRsParams);
		} else {
			// 填充联系用户
            let ContactuserRsNavContext:any = {};
            let ContactuserRsNavParams:any = {};
            let ContactuserRsParams:any = {};
			await this.fillContactuserNodes(context, filter, list ,ContactuserRsNavContext,ContactuserRsNavParams,ContactuserRsParams);
		}
	}


    /**
     * 处理代码表返回数据(树状结构)
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof EmpTreeService
     */
    public handleDataSet(result:Array<any>,context:any,callBack:any){
        let list:Array<any> = [];
        if(result.length === 0){
            return list;
        }
        result.forEach((codeItem:any) =>{
            if(!codeItem.pvalue){
                let valueField:string = codeItem.value;
                this.setChildCodeItems(valueField,result,codeItem);
                list.push(codeItem);
            }
        })
        this.setNodeData(list,context,callBack);
        return list;
    }

    /**
     * 处理非根节点数据
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof EmpTreeService
     */
    public setChildCodeItems(pValue:string,result:Array<any>,codeItem:any){
        result.forEach((item:any) =>{
            if(item.pvalue == pValue){
                let valueField:string = item.value;
                this.setChildCodeItems(valueField,result,item);
                if(!codeItem.children){
                    codeItem.children = [];
                }
                codeItem.children.push(item);
            }
        })
    }

    /**
     * 设置节点UI数据
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof EmpTreeService
     */
    public setNodeData(result:Array<any>,context:any,callBack:any){
        result.forEach((item:any) =>{
            if(item.children){
                item.leaf = false;
                this.setNodeData(item.children,context,callBack);
            }else{
                item.leaf = true;
            }
            callBack(context,item);
        })
    }

    /**
     * 处理节点关系导航上下文
     *
     * @param context 应用上下文
     * @param filter 参数 
     * @param resNavContext 节点关系导航上下文
     *
     * @memberof EmpTreeService
     */
    public handleResNavContext(context:any,filter:any,resNavContext:any){
        if(resNavContext && Object.keys(resNavContext).length > 0){
            let tempContextData:any = JSON.parse(JSON.stringify(context));
            let tempViewParams:any = {};
            if(filter && filter.viewparams){
                tempViewParams = filter.viewparams;
            }
            Object.keys(resNavContext).forEach((item:any) =>{
                let curDataObj:any = resNavContext[item];
                this.handleCustomDataLogic(context,tempViewParams,curDataObj,tempContextData,item);
            })
            return tempContextData;
        }else{
            return context;
        }
    }

    /**
     * 处理关系导航参数
     *
     * @param context 应用上下文
     * @param filter 参数 
     * @param resNavParams 节点关系导航参数
     * @param resParams 节点关系参数
     *
     * @memberof EmpTreeService
     */
	public handleResNavParams(context:any,filter:any,resNavParams:any,resParams:any){
        if((resNavParams && Object.keys(resNavParams).length >0) || (resParams && Object.keys(resParams).length >0)){
            let tempViewParamData:any = {};
            let tempViewParams:any = {};
            if(filter && filter.viewparams){
                tempViewParams = filter.viewparams;
                tempViewParamData = JSON.parse(JSON.stringify(filter.viewparams));
            }
            if( Object.keys(resNavParams).length > 0){
                Object.keys(resNavParams).forEach((item:any) =>{
                    let curDataObj:any = resNavParams[item];
                    this.handleCustomDataLogic(context,tempViewParams,curDataObj,tempViewParamData,item);
                })
            }
            if( Object.keys(resParams).length > 0){
                Object.keys(resParams).forEach((item:any) =>{
                    let curDataObj:any = resParams[item];
                    tempViewParamData[item.toLowerCase()] = curDataObj.value;
                })
            }
            Object.assign(filter,{viewparams:tempViewParamData});
            return filter;
        }else{
            return filter;
        }
    }
    
    /**
     * 处理自定义节点关系导航数据
     * 
     * @param context 应用上下文
     * @param viewparams 参数 
     * @param curNavData 节点关系导航参数对象
     * @param tempData 返回数据
     * @param item 节点关系导航参数键值
     *
     * @memberof EmpTreeService
     */
	public handleCustomDataLogic(context:any,viewparams:any,curNavData:any,tempData:any,item:string){
		// 直接值直接赋值
		if(curNavData.isRawValue){
			if(Object.is(curNavData.value,"null") || Object.is(curNavData.value,"")){
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: null,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }else{
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: curNavData.value,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }
		}else{
			// 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
			if(context[(curNavData.value).toLowerCase()] != null){
				Object.defineProperty(tempData, item.toLowerCase(), {
					value: context[(curNavData.value).toLowerCase()],
					writable : true,
					enumerable : true,
					configurable : true
				});
			}else{
				if(viewparams[(curNavData.value).toLowerCase()] != null){
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: viewparams[(curNavData.value).toLowerCase()],
						writable : true,
						enumerable : true,
						configurable : true
					});
				}else{
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: null,
						writable : true,
						enumerable : true,
						configurable : true
					});
				}
			}
		}
	}


    constructor(opts: any = {}) {
        super(opts)
        this.getService(this.appDEName).then((res)=>{
            this.service = res;
        });
    }
}
// 默认导出
export default EmpTreeService;