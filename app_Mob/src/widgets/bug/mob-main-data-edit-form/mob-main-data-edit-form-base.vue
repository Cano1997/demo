<template>
    <div ref='form' class="app-form bug-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('bug.mobmaindataedit_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel1.visible" 
    :uiActionGroup="detailsModel.grouppanel1.uiActionGroup" 
    :caption="$t('bug.mobmaindataedit_form.details.grouppanel1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='title' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="NONE" 
    ref="title_item"  
    :itemValue="this.data.title" 
    v-show="detailsModel.title.visible" 
    :itemRules="this.rules.title" 
    :caption="$t('bug.mobmaindataedit_form.details.title')"  
    :labelWidth="0"  
    :isShowCaption="false"
    :disabled="detailsModel.title.disabled"
    :error="detailsModel.title.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.title"
    unit=""
    :disabled="detailsModel.title.disabled" 
    @change="($event)=>this.data.title = $event" />
</app-form-item>


    
</app-form-group>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel2.visible" 
    :uiActionGroup="detailsModel.grouppanel2.uiActionGroup" 
    :caption="$t('bug.mobmaindataedit_form.details.grouppanel2')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel3.visible" 
    :uiActionGroup="detailsModel.grouppanel3.uiActionGroup" 
    :caption="$t('bug.mobmaindataedit_form.details.grouppanel3')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='productname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="productname_item"  
    :itemValue="this.data.productname" 
    v-show="detailsModel.productname.visible" 
    :itemRules="this.rules.productname" 
    :caption="$t('bug.mobmaindataedit_form.details.productname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.productname.disabled"
    :error="detailsModel.productname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='productname' 
    deMajorField='name'
    deKeyField='id'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.productname.disabled"
    :service="service"
    :acParams="{ serviceName: 'product', interfaceName: 'FetchCurUer'}"
    :value="data.productname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.productname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='branch' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="branch_item"  
    :itemValue="this.data.branch" 
    v-show="detailsModel.branch.visible" 
    :itemRules="this.rules.branch" 
    :caption="$t('bug.mobmaindataedit_form.details.branch')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.branch.disabled"
    :error="detailsModel.branch.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="ProductBranch"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.branch.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.branch"  
    :navigateContext ='{ "product": "%product%" } '
    :navigateParam ='{ "product": "%product%" } '
    @change="($event)=>this.data.branch = $event" />
</app-form-item>



<app-form-item 
    name='modulename' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="modulename_item"  
    :itemValue="this.data.modulename" 
    v-show="detailsModel.modulename.visible" 
    :itemRules="this.rules.modulename" 
    :caption="$t('bug.mobmaindataedit_form.details.modulename')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.modulename.disabled"
    :error="detailsModel.modulename.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='modulename' 
    deMajorField='name'
    deKeyField='id'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ "n_branch_eq": "%branch%", "product": "%product%", "n_root_eq": "%product%", "branch": "%branch%" } '
    :navigateParam ='{ "product": "%product%", "branch": "%branch%", "n_root_eq": "%product%", "n_branch_eq": "%branch%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.modulename.disabled"
    :service="service"
    :acParams="{ serviceName: 'module', interfaceName: 'FetchBugModule'}"
    :value="data.modulename" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.modulename = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='plan' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="plan_item"  
    :itemValue="this.data.plan" 
    v-show="detailsModel.plan.visible" 
    :itemRules="this.rules.plan" 
    :caption="$t('bug.mobmaindataedit_form.details.plan')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.plan.disabled"
    :error="detailsModel.plan.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="ProductPlan"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.plan.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.plan"  
    :navigateContext ='{ "product": "%product%" } '
    :navigateParam ='{ "product": "%product%" } '
    @change="($event)=>this.data.plan = $event" />
</app-form-item>



<app-form-item 
    name='type' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="type_item"  
    :itemValue="this.data.type" 
    v-show="detailsModel.type.visible" 
    :itemRules="this.rules.type" 
    :caption="$t('bug.mobmaindataedit_form.details.type')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.type.disabled"
    :error="detailsModel.type.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__type"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.type.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.type"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.type = $event" />
</app-form-item>



<app-form-item 
    name='severity' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="severity_item"  
    :itemValue="this.data.severity" 
    v-show="detailsModel.severity.visible" 
    :itemRules="this.rules.severity" 
    :caption="$t('bug.mobmaindataedit_form.details.severity')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.severity.disabled"
    :error="detailsModel.severity.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__severity"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.severity.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.severity"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.severity = $event" />
</app-form-item>



<app-form-item 
    name='pri' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="pri_item"  
    :itemValue="this.data.pri" 
    v-show="detailsModel.pri.visible" 
    :itemRules="this.rules.pri" 
    :caption="$t('bug.mobmaindataedit_form.details.pri')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.pri.disabled"
    :error="detailsModel.pri.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__pri"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.pri.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.pri"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.pri = $event" />
</app-form-item>



<app-form-item 
    name='status' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="status_item"  
    :itemValue="this.data.status" 
    v-show="detailsModel.status.visible" 
    :itemRules="this.rules.status" 
    :caption="$t('bug.mobmaindataedit_form.details.status')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.status.disabled"
    :error="detailsModel.status.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__status"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.status.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.status"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.status = $event" />
</app-form-item>



<app-form-item 
    name='activatedcount' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="activatedcount_item"  
    :itemValue="this.data.activatedcount" 
    v-show="detailsModel.activatedcount.visible" 
    :itemRules="this.rules.activatedcount" 
    :caption="$t('bug.mobmaindataedit_form.details.activatedcount')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.activatedcount.disabled"
    :error="detailsModel.activatedcount.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-number" 
        type="number"  
    :value="data.activatedcount"
    unit=""
    :disabled="detailsModel.activatedcount.disabled" 
    @change="($event)=>this.data.activatedcount = $event"/>
</app-form-item>



<app-form-item 
    name='activateddate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="activateddate_item"  
    :itemValue="this.data.activateddate" 
    v-show="detailsModel.activateddate.visible" 
    :itemRules="this.rules.activateddate" 
    :caption="$t('bug.mobmaindataedit_form.details.activateddate')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.activateddate.disabled"
    :error="detailsModel.activateddate.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.activateddate" 
    :disabled="detailsModel.activateddate.disabled"
    @change="($event)=>this.data.activateddate = $event"/>
</app-form-item>



<app-form-item 
    name='confirmed' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="confirmed_item"  
    :itemValue="this.data.confirmed" 
    v-show="detailsModel.confirmed.visible" 
    :itemRules="this.rules.confirmed" 
    :caption="$t('bug.mobmaindataedit_form.details.confirmed')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.confirmed.disabled"
    :error="detailsModel.confirmed.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="YesNo2"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.confirmed.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.confirmed"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.confirmed = $event" />
</app-form-item>



<app-form-item 
    name='assignedto' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="assignedto_item"  
    :itemValue="this.data.assignedto" 
    v-show="detailsModel.assignedto.visible" 
    :itemRules="this.rules.assignedto" 
    :caption="$t('bug.mobmaindataedit_form.details.assignedto')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.assignedto.disabled"
    :error="detailsModel.assignedto.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="BugUserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.assignedto.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.assignedto"  
    :navigateContext ='{ "project": "%project%" } '
    :navigateParam ='{ "project": "%project%" } '
    @change="($event)=>this.data.assignedto = $event" />
</app-form-item>



<app-form-item 
    name='deadline' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="deadline_item"  
    :itemValue="this.data.deadline" 
    v-show="detailsModel.deadline.visible" 
    :itemRules="this.rules.deadline" 
    :caption="$t('bug.mobmaindataedit_form.details.deadline')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.deadline.disabled"
    :error="detailsModel.deadline.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.deadline" 
    :disabled="detailsModel.deadline.disabled"
    @change="($event)=>this.data.deadline = $event"/>
</app-form-item>



<app-form-item 
    name='os' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="os_item"  
    :itemValue="this.data.os" 
    v-show="detailsModel.os.visible" 
    :itemRules="this.rules.os" 
    :caption="$t('bug.mobmaindataedit_form.details.os')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.os.disabled"
    :error="detailsModel.os.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__os"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.os.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.os"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.os = $event" />
</app-form-item>



<app-form-item 
    name='browser' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="browser_item"  
    :itemValue="this.data.browser" 
    v-show="detailsModel.browser.visible" 
    :itemRules="this.rules.browser" 
    :caption="$t('bug.mobmaindataedit_form.details.browser')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.browser.disabled"
    :error="detailsModel.browser.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__browser"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.browser.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.browser"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.browser = $event" />
</app-form-item>



<app-form-item 
    name='keywords' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="keywords_item"  
    :itemValue="this.data.keywords" 
    v-show="detailsModel.keywords.visible" 
    :itemRules="this.rules.keywords" 
    :caption="$t('bug.mobmaindataedit_form.details.keywords')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.keywords.disabled"
    :error="detailsModel.keywords.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.keywords"
    unit=""
    :disabled="detailsModel.keywords.disabled" 
    @change="($event)=>this.data.keywords = $event" />
</app-form-item>



<app-form-item 
    name='mailtopk' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="mailtopk_item"  
    :itemValue="this.data.mailtopk" 
    v-show="detailsModel.mailtopk.visible" 
    :itemRules="this.rules.mailtopk" 
    :caption="$t('bug.mobmaindataedit_form.details.mailtopk')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.mailtopk.disabled"
    :error="detailsModel.mailtopk.error" 
    :isEmptyCaption="false">
        <app-mob-mpicker 
    :data="data"
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :disabled="detailsModel.mailtopk.disabled"
    :value="data.mailtopk"
    name="mailtopk"
    :context="context"
    :viewparams="viewparams"
    :service="service"
    deMajorField='personname'
    deKeyField='sysemployee'
    :pickupView="{ viewname: 'sys-employee-user-tree-mob-mpickup-view', title: '人员移动端多数据选择视图（人员树）', deResParameters: [], parameters: [{ pathName: 'sysemployees', parameterName: 'sysemployee' }, { pathName: 'usertreemobmpickupview', parameterName: 'usertreemobmpickupview' } ], placement:'' }"
    @formitemvaluechange="onFormItemValueChange" 
    style=""/>

</app-form-item>


    
</app-form-group>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel4.visible" 
    :uiActionGroup="detailsModel.grouppanel4.uiActionGroup" 
    :caption="$t('bug.mobmaindataedit_form.details.grouppanel4')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='projectname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="projectname_item"  
    :itemValue="this.data.projectname" 
    v-show="detailsModel.projectname.visible" 
    :itemRules="this.rules.projectname" 
    :caption="$t('bug.mobmaindataedit_form.details.projectname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.projectname.disabled"
    :error="detailsModel.projectname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='projectname' 
    deMajorField='name'
    deKeyField='id'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ "product": "%product%" } '
    :navigateParam ='{ "product": "%product%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.projectname.disabled"
    :service="service"
    :acParams="{ serviceName: 'project', interfaceName: 'FetchBugProject'}"
    :value="data.projectname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.projectname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='storyname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="storyname_item"  
    :itemValue="this.data.storyname" 
    v-show="detailsModel.storyname.visible" 
    :itemRules="this.rules.storyname" 
    :caption="$t('bug.mobmaindataedit_form.details.storyname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.storyname.disabled"
    :error="detailsModel.storyname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='storyname' 
    deMajorField='title'
    deKeyField='id'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ "n_module_eq": "%module%", "n_project_eq": "%project%", "product": "%product%" } '
    :navigateParam ='{ "product": "%product%", "n_project_eq": "%project%", "n_module_eq": "%module%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.storyname.disabled"
    :service="service"
    :acParams="{ serviceName: 'story', interfaceName: 'FetchBugStory'}"
    :value="data.storyname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.storyname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='taskname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="taskname_item"  
    :itemValue="this.data.taskname" 
    v-show="detailsModel.taskname.visible" 
    :itemRules="this.rules.taskname" 
    :caption="$t('bug.mobmaindataedit_form.details.taskname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.taskname.disabled"
    :error="detailsModel.taskname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='taskname' 
    deMajorField='name'
    deKeyField='id'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ "project": "%project%" } '
    :navigateParam ='{ "project": "%project%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.taskname.disabled"
    :service="service"
    :acParams="{ serviceName: 'task', interfaceName: 'FetchBugTask'}"
    :value="data.taskname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.taskname = $event">
</app-mob-select-drop-down>
</app-form-item>


    
</app-form-group>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel5.visible" 
    :uiActionGroup="detailsModel.grouppanel5.uiActionGroup" 
    :caption="$t('bug.mobmaindataedit_form.details.grouppanel5')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='openedby' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="openedby_item"  
    :itemValue="this.data.openedby" 
    v-show="detailsModel.openedby.visible" 
    :itemRules="this.rules.openedby" 
    :caption="$t('bug.mobmaindataedit_form.details.openedby')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.openedby.disabled"
    :error="detailsModel.openedby.error" 
    :isEmptyCaption="false">
        <app-mob-span  
    codeListType="DYNAMIC" 
    tag="UserRealName"
    :isCache="false" 
    :navigateContext ='{ } '
    :navigateParam ='{ } ' 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.openedby" 
    :itemParam="{}"/>
</app-form-item>



<app-form-item 
    name='openedbuild' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="openedbuild_item"  
    :itemValue="this.data.openedbuild" 
    v-show="detailsModel.openedbuild.visible" 
    :itemRules="this.rules.openedbuild" 
    :caption="$t('bug.mobmaindataedit_form.details.openedbuild')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.openedbuild.disabled"
    :error="detailsModel.openedbuild.error" 
    :isEmptyCaption="false">
        <app-mob-check-list 
    type="dynamic"  
    tag="CurProductBuild"
    :disabled="detailsModel.openedbuild.disabled" 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.openedbuild"   
    :navigateContext ='{ "bugproduct": "%product%", "bugproject": "%project%" } '
    :navigateParam ='{ "bugproject": "%project%", "bugproduct": "%product%" } '
    @change="($event)=>this.data.openedbuild = $event"/>
</app-form-item>



<app-form-item 
    name='resolvedby' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="resolvedby_item"  
    :itemValue="this.data.resolvedby" 
    v-show="detailsModel.resolvedby.visible" 
    :itemRules="this.rules.resolvedby" 
    :caption="$t('bug.mobmaindataedit_form.details.resolvedby')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.resolvedby.disabled"
    :error="detailsModel.resolvedby.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.resolvedby.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.resolvedby"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.resolvedby = $event" />
</app-form-item>



<app-form-item 
    name='resolution' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="resolution_item"  
    :itemValue="this.data.resolution" 
    v-show="detailsModel.resolution.visible" 
    :itemRules="this.rules.resolution" 
    :caption="$t('bug.mobmaindataedit_form.details.resolution')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.resolution.disabled"
    :error="detailsModel.resolution.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__resolution"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.resolution.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.resolution"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.resolution = $event" />
</app-form-item>



<app-form-item 
    name='resolvedbuild' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="resolvedbuild_item"  
    :itemValue="this.data.resolvedbuild" 
    v-show="detailsModel.resolvedbuild.visible" 
    :itemRules="this.rules.resolvedbuild" 
    :caption="$t('bug.mobmaindataedit_form.details.resolvedbuild')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.resolvedbuild.disabled"
    :error="detailsModel.resolvedbuild.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="CurProductBuild"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.resolvedbuild.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.resolvedbuild"  
    :navigateContext ='{ "bugproduct": "%product%", "bugproject": "%project%" } '
    :navigateParam ='{ "bugproject": "%project%", "bugproduct": "%product%" } '
    @change="($event)=>this.data.resolvedbuild = $event" />
</app-form-item>



<app-form-item 
    name='closedby' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="closedby_item"  
    :itemValue="this.data.closedby" 
    v-show="detailsModel.closedby.visible" 
    :itemRules="this.rules.closedby" 
    :caption="$t('bug.mobmaindataedit_form.details.closedby')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.closedby.disabled"
    :error="detailsModel.closedby.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.closedby.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.closedby"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.closedby = $event" />
</app-form-item>



<app-form-item 
    name='lasteditedby' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="lasteditedby_item"  
    :itemValue="this.data.lasteditedby" 
    v-show="detailsModel.lasteditedby.visible" 
    :itemRules="this.rules.lasteditedby" 
    :caption="$t('bug.mobmaindataedit_form.details.lasteditedby')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.lasteditedby.disabled"
    :error="detailsModel.lasteditedby.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.lasteditedby.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.lasteditedby"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.lasteditedby = $event" />
</app-form-item>



<app-form-item 
    name='steps' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="steps_item"  
    :itemValue="this.data.steps" 
    v-show="detailsModel.steps.visible" 
    :itemRules="this.rules.steps" 
    :caption="$t('bug.mobmaindataedit_form.details.steps')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.steps.disabled"
    :error="detailsModel.steps.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.steps" @change="(val) =>{this.data.steps =val}" :disabled="detailsModel.steps.disabled" :data="JSON.stringify(this.data)"  name="steps" :uploadparams='{objecttype:"bug",version:"editor"}' :exportparams='{objecttype:"bug",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-item 
    name='comment' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="comment_item"  
    :itemValue="this.data.comment" 
    v-show="detailsModel.comment.visible" 
    :itemRules="this.rules.comment" 
    :caption="$t('bug.mobmaindataedit_form.details.comment')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.comment.disabled"
    :error="detailsModel.comment.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.comment" @change="(val) =>{this.data.comment =val}" :disabled="detailsModel.comment.disabled" :data="JSON.stringify(this.data)"  name="comment" :uploadparams='{objecttype:"bug",version:"editor"}' :exportparams='{objecttype:"bug",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-item 
    name='files' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="files_item"  
    :itemValue="this.data.files" 
    v-show="detailsModel.files.visible" 
    :itemRules="this.rules.files" 
    :caption="$t('bug.mobmaindataedit_form.details.files')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.files.disabled"
    :error="detailsModel.files.error" 
    :isEmptyCaption="false">
        <app-mob-file-upload 
    name='files' 
    style="overflow: auto;" 
    :multiple="true" 
    :formState="formState" 
    :ignorefieldvaluechange="ignorefieldvaluechange" 
    :data="JSON.stringify(this.data)" 
    :value="data.files" 
    :disabled="detailsModel.files.disabled" 
    :context="context" 
    :viewparams="viewparams" 
    :uploadParam='{objecttype:"bug",objectid:"0"}' 
    :exportParam='{objecttype:"bug",objectid:"0"}' 
    @formitemvaluechange="onFormItemValueChange" />
</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel6.visible" 
    :uiActionGroup="detailsModel.grouppanel6.uiActionGroup" 
    :caption="$t('bug.mobmaindataedit_form.details.grouppanel6')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='bug' 
    refviewtype='DEMOBMDVIEW9'  
    refreshitems='' 
    viewname='action-mob-mdview9' 
    v-show="detailsModel.druipart1.visible" 
    :caption="$t('bug.mobmaindataedit_form.details.druipart1')"  
    paramItem='bug' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdename":"ZT_BUG","SRFPARENTTYPE":"CUSTOM"}' 
    :parameters="[
    ]" 
    tempMode='0'
    :context="context" 
    :viewparams="viewparams" 
    :navigateContext ='{ } ' 
    :navigateParam ='{ } ' 
    :ignorefieldvaluechange="ignorefieldvaluechange" 
    :data="JSON.stringify(this.data)"  
    @drdatasaved="drdatasaved($event)"/>


    
</app-form-group>


    
</app-form-group>


    
</app-form-group>


    
</app-form-group>




    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import BugService from '@/app-core/service/bug/bug-service';
import MobMainDataEditService from '@/app-core/ctrl-service/bug/mob-main-data-edit-form-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import BugUIService from '@/ui-service/bug/bug-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: { }
})
export default class MobMainDataEditBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobMainDataEdit
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobMainDataEdit
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobMainDataEdit
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobMainDataEdit
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobMainDataEdit
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobMainDataEdit
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobMainDataEditBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args);
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {MobMainDataEditService}
     * @memberof MobMainDataEdit
     */
    protected service: MobMainDataEditService = new MobMainDataEditService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof MobMainDataEdit
     */
    protected appEntityService: BugService = new BugService();

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof MobMainDataEditBase
     */  
    public deUIService:BugUIService = new BugUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobMainDataEdit
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof MobMainDataEdit
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobMainDataEdit
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobMainDataEdit
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MobMainDataEdit
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MobMainDataEdit
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected removeAction!: string;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof YDDTBJ
     */
    @Prop({ default: false }) protected isautoload?: boolean;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MobMainDataEdit
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MobMainDataEdit
     */
    protected formState: Subject<any> = new Subject();


    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MobMainDataEditBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MobMainDataEdit
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MobMainDataEdit
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MobMainDataEdit
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MobMainDataEdit
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MobMainDataEdit
     */
    protected data: any = {
        srfupdatedate: null,
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        id: null,
        title: null,
        product: null,
        productname: null,
        branch: null,
        branchname: null,
        module: null,
        modulename: null,
        plan: null,
        type: null,
        severity: null,
        storyversion: null,
        pri: null,
        status: null,
        activatedcount: null,
        activateddate: null,
        confirmed: null,
        assignedto: null,
        deadline: null,
        os: null,
        browser: null,
        keywords: null,
        mailto: null,
        mailtopk: null,
        project: null,
        story: null,
        projectname: null,
        storyname: null,
        taskname: null,
        openedby: null,
        openedbuild: null,
        resolvedby: null,
        resolution: null,
        resolvedbuild: null,
        closedby: null,
        lasteditedby: null,
        steps: null,
        comment: null,
        files: null,
        bug: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MobMainDataEdit
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MobMainDataEdit
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MobMainDataEdit
      */
    protected saveState:any ;

    /**
      * 异常信息缓存
      *
      * @type {any}
      * @memberof MobMainDataEdit
      */
    public errorCache :any = {};

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobMainDataEdit
     */
    protected rules: any = {
        title: [
            { required: true, type: 'string', message: 'required', trigger: 'change' },
            { required: true, type: 'string', message: 'required', trigger: 'blur' },
        ],
        openedbuild: [
            { required: true, type: 'string', message: 'required', trigger: 'change' },
            { required: true, type: 'string', message: 'required', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobMainDataEditBase
     */
    public deRules:any = {
    };

    /**
     * 校验属性值规则
     *
     * @public
     * @param {{ name: string }} { name }
     * @memberof MobNewFormBase
     */
    public verifyDeRules(name:string,rule:any = this.deRules,op:string = "AND") :{isPast:boolean,infoMessage:string}{
        let falg:any = {infoMessage:""};
        if(!rule[name]){
            return falg;
        }
        let opValue = op == 'AND'? true :false;
        let startOp = (val:boolean)=>{
            if(falg.isPast){
                if(opValue){
                    falg.isPast = falg && val;
                }else{
                    falg.isPast = falg || val;
                }
            }else{
                falg.isPast = val;
            }
        }
        rule[name].forEach((item:any) => {
            let dataValue = item.deName?this.data[this.service.getItemNameByDeName(item.deName)]:"";
            // 常规规则
            if(item.type == 'SIMPLE'){
                startOp(!this.$verify.checkFieldSimpleRule(dataValue,item.condOP,item.paramValue,item.ruleInfo,item.paramType,this.data,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
                this.errorCache[item.deName] = item.ruleInfo;
            }
            // 数值范围
            if(item.type == 'VALUERANGE2'){
                startOp( !this.$verify.checkFieldValueRangeRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 正则式
            if (item.type == "REGEX") {
                startOp(!this.$verify.checkFieldRegExRule(dataValue,item.regExCode,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 长度
            if (item.type == "STRINGLENGTH") {
                startOp(!this.$verify.checkFieldStringLengthRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond)); 
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 系统值规则
            if(item.type == "SYSVALUERULE") {
                startOp(!this.$verify.checkFieldSysValueRule(dataValue,item.sysRule.regExCode,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 分组
            if(item.type == 'GROUP'){
                falg = this.verifyDeRules('group',item)
                if(item.isNotMode){
                   falg.isPast = !falg.isPast;
                }
            }
            
        });
        if(!falg.hasOwnProperty("isPast")){
            falg.isPast = true;
        }
        return falg;
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MobMainDataEdit
     */
    protected detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobmaindataedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobmaindataedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '项目/需求/任务', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobmaindataedit_form', extractMode: 'ITEM', details: [] } })
, 
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel6: new FormGroupPanelModel({ caption: '历史记录', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobmaindataedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: 'Bug的一生', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobmaindataedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobmaindataedit_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: 'Bug基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobmaindataedit_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: 'Bug编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: 'Bug标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: 'Bug编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        title: new FormItemModel({ caption: 'Bug标题', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        productname: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        branch: new FormItemModel({ caption: '平台/分支', detailType: 'FORMITEM', name: 'branch', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        branchname: new FormItemModel({ caption: '平台/分支', detailType: 'FORMITEM', name: 'branchname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '模块名称', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        plan: new FormItemModel({ caption: '所属计划', detailType: 'FORMITEM', name: 'plan', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: 'Bug类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        severity: new FormItemModel({ caption: '严重程度', detailType: 'FORMITEM', name: 'severity', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyversion: new FormItemModel({ caption: '需求版本', detailType: 'FORMITEM', name: 'storyversion', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: 'Bug状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        activatedcount: new FormItemModel({ caption: '激活次数', detailType: 'FORMITEM', name: 'activatedcount', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        activateddate: new FormItemModel({ caption: '激活日期', detailType: 'FORMITEM', name: 'activateddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        confirmed: new FormItemModel({ caption: '是否确认', detailType: 'FORMITEM', name: 'confirmed', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '当前指派', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        deadline: new FormItemModel({ caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        os: new FormItemModel({ caption: '操作系统', detailType: 'FORMITEM', name: 'os', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        browser: new FormItemModel({ caption: '浏览器', detailType: 'FORMITEM', name: 'browser', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailtopk: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailtopk', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        projectname: new FormItemModel({ caption: '项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyname: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        taskname: new FormItemModel({ caption: '相关任务', detailType: 'FORMITEM', name: 'taskname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openedbuild: new FormItemModel({ caption: '影响版本', detailType: 'FORMITEM', name: 'openedbuild', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        resolvedby: new FormItemModel({ caption: '由谁解决', detailType: 'FORMITEM', name: 'resolvedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        resolution: new FormItemModel({ caption: '解决方案', detailType: 'FORMITEM', name: 'resolution', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        resolvedbuild: new FormItemModel({ caption: '解决版本', detailType: 'FORMITEM', name: 'resolvedbuild', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closedby: new FormItemModel({ caption: '由谁关闭', detailType: 'FORMITEM', name: 'closedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        lasteditedby: new FormItemModel({ caption: '最后修改者', detailType: 'FORMITEM', name: 'lasteditedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        steps: new FormItemModel({ caption: '重现步骤', detailType: 'FORMITEM', name: 'steps', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        comment: new FormItemModel({ caption: '备注', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        files: new FormItemModel({ caption: '附件', detailType: 'FORMITEM', name: 'files', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srfupdatedate')
    onSrfupdatedateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfupdatedate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srforikey')
    onSrforikeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srforikey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfkey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srfkey')
    onSrfkeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfkey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfmajortext 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srfmajortext')
    onSrfmajortextChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfmajortext', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srftempmode 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srftempmode')
    onSrftempmodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srftempmode', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfuf 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srfuf')
    onSrfufChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfuf', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfdeid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srfdeid')
    onSrfdeidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfdeid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfsourcekey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 title 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.title')
    onTitleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'title', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 product 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.product')
    onProductChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'product', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 productname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.productname')
    onProductnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'productname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 branch 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.branch')
    onBranchChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'branch', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 branchname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.branchname')
    onBranchnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'branchname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 module 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.module')
    onModuleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'module', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 modulename 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.modulename')
    onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 plan 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.plan')
    onPlanChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'plan', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 severity 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.severity')
    onSeverityChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'severity', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyversion 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.storyversion')
    onStoryversionChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyversion', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 activatedcount 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.activatedcount')
    onActivatedcountChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'activatedcount', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 activateddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.activateddate')
    onActivateddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'activateddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 confirmed 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.confirmed')
    onConfirmedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'confirmed', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.assignedto')
    onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 deadline 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.deadline')
    onDeadlineChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'deadline', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 os 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.os')
    onOsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'os', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 browser 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.browser')
    onBrowserChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'browser', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 keywords 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.keywords')
    onKeywordsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'keywords', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.mailto')
    onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailtopk 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.mailtopk')
    onMailtopkChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailtopk', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.project')
    onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 projectname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.projectname')
    onProjectnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'projectname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.storyname')
    onStorynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 taskname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.taskname')
    onTasknameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'taskname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.openedby')
    onOpenedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openedbuild 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.openedbuild')
    onOpenedbuildChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openedbuild', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 resolvedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.resolvedby')
    onResolvedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'resolvedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 resolution 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.resolution')
    onResolutionChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'resolution', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 resolvedbuild 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.resolvedbuild')
    onResolvedbuildChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'resolvedbuild', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.closedby')
    onClosedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 lasteditedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.lasteditedby')
    onLasteditedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'lasteditedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 steps 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.steps')
    onStepsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'steps', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 comment 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.comment')
    onCommentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'comment', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 files 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainDataEdit
     */
    @Watch('data.files')
    onFilesChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'files', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MobMainDataEdit
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (Object.is(name, 'productname')) {
            this.onFormItemValueChange({ name: 'branch', value: null });
        }
        if (Object.is(name, 'branch')) {
            this.onFormItemValueChange({ name: 'modulename', value: null });
        }
        if (Object.is(name, 'productname')) {
            this.onFormItemValueChange({ name: 'plan', value: null });
        }
        if (Object.is(name, 'product')) {
            this.onFormItemValueChange({ name: 'story', value: null });
        }
        if (Object.is(name, 'productname')) {
            this.onFormItemValueChange({ name: 'projectname', value: null });
        }
        if (Object.is(name, 'modulename')) {
            this.onFormItemValueChange({ name: 'storyname', value: null });
        }
        if (Object.is(name, 'projectname')) {
            this.onFormItemValueChange({ name: 'taskname', value: null });
        }
    }

    /**
      * 置空对象
      *
      * @param {any[]} args
      * @memberof EditForm
      */
    protected ResetData(_datas:any){
        if(Object.keys(_datas).length >0){
            Object.keys(_datas).forEach((name: string) => {
                if (this.data.hasOwnProperty(name)) {
                    this.data[name] = null;
                }
            });
        }
    }

    /**
     * 表单逻辑
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MobMainDataEdit
     */
    private async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){
                

























































        if (Object.is(name, 'storyname')) {
            const details: string[] = ['storyversion'];
            if(await this.validItem('storyname', this.data['storyname'])){
                this.updateFormItems('UpdateStoryVersion', this.data, details, true);
            }
        }
    }


    /**
     * 表单项校验逻辑
     *
     * @public
     * @param name 属性名
     * @memberof Main2Base
     */
    public validItem(property:string, data:any):Promise<any>{
        return new Promise((resolve, reject) => {
            if(!property || !this.rules[property]){
                resolve(true);
            }
            Util.validateItem(property,data,this.rules[property]).then(()=>{
                this.detailsModel[property].setError("");
                resolve(true);
            }).catch(({ errors, fields }) => {
                const {field , message } = errors[0];
                let _message :any = (this.$t(`bug.mobmaindataedit_form.details.${field}`) as string) +' '+ this.$t(`app.form.rules.${message}`);
                this.detailsModel[property].setError(this.errorCache[property]?this.errorCache[property]: _message);
                resolve(false);
            });
        });
    }

    /**
     * 校验全部
     *
     * @public
     * @param {{ filter: string}} { filter}
     * @returns {void}
     * @memberof MobMainDataEdit
     */
    public async validAll(filter:string = "defult") {
        let validateState = true;
        let filterProperty = ""
        if(filter === 'new'){
            filterProperty= 'id'
        }
        for (let item of Object.keys(this.rules)) {
            if(!await this.validItem(item,this.data[item]) && item != filterProperty){
                validateState = false;
            }
        }
        return validateState
    }


    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof MobMainDataEdit
     */
    private formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.validItem(name,this.data[name]);
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 表单加载完成
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof MobMainDataEdit
     */
    private onFormLoad(data: any = {},action:string): void {
        this.setFormEnableCond(data);
        this.fillForm(data,action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 值填充
     *
     * @param {*} [_datas={}]
     * @param {string} [action]
     * @memberof MobMainDataEdit
     */
    protected fillForm(_datas: any = {},action:string): void {
        this.ignorefieldvaluechange = true;
        Object.keys(_datas).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = _datas[name];
            }
        });
        if(Object.is(action,'loadDraft')){
            this.createDefault();
        }
        if(Object.is(action,'load')){
            this.updateDefault();
        }
        this.$nextTick(function () {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 设置表单项是否启用
     *
     * @protected
     * @param {*} data
     * @memberof MobMainDataEdit
     */
    protected setFormEnableCond(data: any): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setEnableCond(data.srfuf);
        });
    }

    /**
     * 重置草稿表单状态
     *
     * @private
     * @memberof MobMainDataEdit
     */
    private resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            // form.resetValidation();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof MobMainDataEdit
     */
    protected resetValidates(): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setError('');
        });
    }

    /**
     * 填充校验结果 （后台）
     *
     * @param {any[]} fieldErrors
     * @memberof MobMainDataEdit
     */
    protected fillValidates(fieldErrors: any[]): void {
        fieldErrors.forEach((error: any) => {
            const formItem: FormItemModel = this.detailsModel[error.field];
            if (!formItem) {
                return;
            }
            this.$nextTick(() => {
                formItem.setError(error.message);
            });
        });
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof MobMainDataEdit
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MobMainDataEdit
     */
    protected onFormItemValueChange($event: { name: string, value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !this.data.hasOwnProperty($event.name)) {
            return;
        }
        this.data[$event.name] = $event.value;
    }

    /**
     * 设置数据项值
     *
     * @param {string} name
     * @param {*} value
     * @returns {void}
     * @memberof MobMainDataEdit
     */
    protected setDataItemValue(name: string, value: any): void {
        if (!name || Object.is(name, '') || !this.data.hasOwnProperty(name)) {
            return;
        }
        if (Object.is(this.data[name], value)) {
            return;
        }
        this.data[name] = value;
    }



    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof MobMainDataEdit
     */
    protected groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item:any = $event.item;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof MobMainDataEdit
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobMainDataEdit
     */    
    protected afterCreated(){
        if(this.isautoload){
            this.autoLoad({srfkey:this.context.bug});
        }
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('autoload', action)) {
                    this.autoLoad(data);
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
                if (Object.is('loaddraft', action)) {
                    this.loadDraft(data);
                }
                if (Object.is('save', action)) {
                    this.save(data,data.showResultInfo);
                }
                if (Object.is('remove', action)) {
                    this.remove(data);
                }
                if (Object.is('saveandexit', action)) {
                    this.saveAndExit(data);
                }
                if (Object.is('saveandnew', action)) {
                    this.saveAndNew(data);
                }
                if (Object.is('removeandexit', action)) {
                    this.removeAndExit(data);
                }
                if (Object.is('refresh', action)) {
                    this.refresh(data);
                }
            });
        }
        this.dataChang
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            ).subscribe((data: any) => {
                if (this.autosave) {
                    this.autoSave();
                }
                const state = !Object.is(JSON.stringify(this.oldData), JSON.stringify(this.data)) ? true : false;
                this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: state });
            });
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"Bug")){
                    return;
                }
                if(Object.is(action,'appRefresh') && data.appRefreshAction && this.context.bug){
                    this.refresh([data]);
                }
            })
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MobMainDataEdit
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobMainDataEdit
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if (this.dataChangEvent) {
            this.dataChangEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof MobMainDataEdit
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MobMainDataEdit
     */
    protected refresh(args: any[]): void {
        let arg: any = {};
        Object.assign(arg,args[0]);
        if (this.data.srfkey && !Object.is(this.data.srfkey, '')) {
            Object.assign(arg, { srfkey: this.data.srfkey });
            this.load(arg);
            return;
        }
        if (this.data.srfkeys && !Object.is(this.data.srfkeys, '')) {
            Object.assign(arg, { srfkey: this.data.srfkeys });
            this.load(arg);
            return;
        }
    }


    /**
     * 自动加载
     *
     * @param {*} [arg={}]
     * @returns {void}
     * @memberof MobMainDataEdit
     */
    protected autoLoad(arg: any = {}): void {
        if (arg.srfkey && !Object.is(arg.srfkey, '')) {
            Object.assign(arg, { srfkey: arg.srfkey });
            this.load(arg);
            return;
        }
        if (arg.srfkeys && !Object.is(arg.srfkeys, '')) {
            Object.assign(arg, { srfkey: arg.srfkeys });
            this.load(arg);
            return;
        }
        this.loadDraft(arg);
    }

    /**
     * 加载
     *
     * @private
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    private async load(opt: any = {}): Promise<any> {
        if (!this.loadAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'loadAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = { ...opt };
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.get(this.loadAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data, 'load');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @memberof MobMainDataEdit
     */
    protected async loadDraft(opt: any = {}): Promise<any> {
        if (!this.loaddraftAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'loaddraftAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = { ...opt } ;
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.loadDraft(this.loaddraftAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            const data = response.data;
            if(data.bug){
                Object.assign(this.context, { bug: data.bug });
            }
            this.resetDraftFormStates();
            this.onFormLoad(data, 'loadDraft');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 自动保存
     *
     * @protected
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async autoSave(opt: any = {}): Promise<any> {
        if (!await this.validAll()) {
            return Promise.reject();
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if (!action) {
            let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+actionName+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.add(action, { ...this.context }, arg, this.showBusyIndicator);
        if (response.status && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data,'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
        } else if (response.status && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 保存
     *
     * @protected
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo]
     * @param {boolean} [isStateNext=true] 是否下发通知
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async save(opt: any = {}, showResultInfo?: boolean, isStateNext: boolean = true): Promise<any> {
        showResultInfo = showResultInfo === undefined ? true : false;
        opt.saveEmit = opt.saveEmit === undefined ? true : false;

        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if (this.data.srfuf =='1'? !await this.validAll():!await this.validAll('new')) {
            this.$notice.error('值规则校验异常');
            return Promise.reject();
        }
        if (isStateNext) {
            this.drcounter = 1;
            if (this.drcounter !== 0) {
                this.formState.next({ type: 'beforesave', data: arg });//先通知关系界面保存
                this.saveState = Promise.resolve();
                return Promise.reject();
            }
        }
        
        if (!action) {
            let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+actionName+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        Object.assign(this.viewparams,{ title: arg.title});
        Object.assign(arg, this.viewparams);
        let response: any = null;
        if (Object.is(data.srfuf, '1')) {
            response = await this.service.update(action, { ...this.context }, arg, this.showBusyIndicator);
        } else {
            response = await this.service.add(action, { ...this.context }, arg, this.showBusyIndicator);
        }
        if (response && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data, 'save');
            if(!opt.saveEmit){
                this.$emit('save', data);
            }                
            AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:Object.assign(data,{appRefreshAction:action===this.createAction?false:true})});
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
            if (showResultInfo) {
                this.$notice.success((data.srfmajortext ? data.srfmajortext : '') + '&nbsp;'+ this.$t('app.message.savedSuccess'));
            }
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 删除
     *
     * @private
     * @param {Array<any>} [opt=[]]
     * @param {boolean} [showResultInfo]
     * @returns {Promise<any>}
     * @memberof EditForm
     */
    private async remove(opt: Array<any> = [], showResultInfo?: boolean): Promise<any> {
        if (!this.removeAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'removeAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = opt[0];
        const _this: any = this;
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.delete(_this.removeAction, { ...this.context }, arg, showResultInfo);
        if (response && response.status === 200) {
            const data = response.data;
            this.$emit('remove', data);
            this.formState.next({ type: 'remove', data: data });
            this.data.ismodify = false;
            AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:data});
            this.$notice.success((data.srfmajortext ? data.srfmajortext : '') + '&nbsp;'+ this.$t('app.message.deleteSccess'));
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 工作流启动
     *
     * @protected
     * @param {*} data
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:data});
            return response
        } else if (response && response.status !== 401) {
        }
        return response;
    }

    /**
     * 工作流提交
     *
     * @protected
     * @param {*} data
     * @param {*} linkItem
     * @param {*} datas
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async wfsubmit(data: any, linkItem: any, datas: any): Promise<any> {
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams, linkItem);
        // 强制补充srfwfmemo
        if (this.srfwfmemo) {
            Object.assign(datas, { srfwfmemo: this.srfwfmemo });
        }
        const response: any = await this.service.wfsubmit(this.currentAction, { ...this.context }, datas, this.showBusyIndicator, arg);
        if (response && response.status === 200) {
            AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:data});
            return response        
        } else if (response && response.status !== 401) {
            return response;
        }
    }

    /**
     * 表单项更新
     *
     * @protected
     * @param {string} mode 界面行为名称
     * @param {*} [data={}] 请求数据
     * @param {string[]} updateDetails 更新项
     * @param {boolean} [showloading] 是否显示加载状态
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): Promise<any> {
        if (!mode || (mode && Object.is(mode, ''))) {
            return Promise.reject();
        }
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.frontLogic(mode, { ...this.context }, arg, showloading);
        if (response && response.status === 200) {
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data, 'updateFormItem');
            this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:data});
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof MobMainDataEdit
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async saveAndExit(data: any[]): Promise<any> {
        const arg: any = { ...data[0] };
        this.currentAction = 'saveAndExit';
        const response: any = await this.save([arg]);
        if (response && response.status === 200) {
            this.closeView([{ ...response.data }]);
        }
        return response;
    }

    /**
     * 保存并新建
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async saveAndNew(data: any[]): Promise<any> {
        let arg: any = { ...data[0] };
        this.currentAction = 'saveAndNew';
        const response: any = await this.save([arg]);
        if (response && response.status === 200) {
            this.ResetData(response.data);
            this.loadDraft({});
        }
        return response;
    }

    /**
     * 删除并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobMainDataEdit
     */
    protected async removeAndExit(data: any[]): Promise<any> {
        let arg: any = { ...data[0] };
        const response: any = await this.remove([arg]);
        if (response && response.status === 200) {
            this.closeView([{ ...response.data }]);
        }
        return response;
    }

    /**
    * 关系界面数据保存完成
    *
    * @param {any} $event
    * @memberof MobMainDataEdit
    */
    protected drdatasaved($event:any){
        let _this = this;
        this.drcounter--;
        if(this.drcounter > 0){
            return;
        }
        this.save({}, undefined, false).then((res) =>{
            //this.saveState(res);
            if(Object.is(_this.currentAction, "saveAndNew")){
                _this.ResetData(res);
                _this.loadDraft({});
            }else if(Object.is(_this.currentAction, "saveAndExit")){
                if(res){
                    _this.closeView(res.data);
                }
            }
        });
    }

    /**
     * 新建默认值
     * @memberof MobMainDataEdit
     */
    public createDefault(){                    
    }

        /**
     * 更新默认值
     * @memberof MobMainDataEditBase
     */
    public updateDefault(){                    
    }


    /**
     * 计算表单按钮权限状态
     *
     * @param {*} [data] 传入数据
     * @memberof EditorsBase
     */
    public computeButtonState(data:any){
        let targetData:any = this.transformData(data);
        if(this.detailsModel && Object.keys(this.detailsModel).length >0){
            Object.keys(this.detailsModel).forEach((name:any) =>{
                if(this.detailsModel[name] && this.detailsModel[name].uiaction && this.detailsModel[name].uiaction.dataaccaction && Object.is(this.detailsModel[name].detailType,"BUTTON")){
                    let tempUIAction:any = JSON.parse(JSON.stringify(this.detailsModel[name].uiaction));
                    this.$viewTool.calcActionItemAuthState(targetData,[tempUIAction],this.globaluiservice);
                    this.detailsModel[name].visible = tempUIAction.visabled;
                    this.detailsModel[name].disabled = tempUIAction.disabled;
                }
            })
        }
    }
}
</script>

<style lang='less'>
@import './mob-main-data-edit-form.less';
</style>