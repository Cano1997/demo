<template>
    <div ref='form' class="app-form task-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('task.mobmainedit_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='name' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="NONE" 
    ref="name_item"  
    :itemValue="this.data.name" 
    v-show="detailsModel.name.visible" 
    :itemRules="this.rules.name" 
    :caption="$t('task.mobmainedit_form.details.name')"  
    :labelWidth="0"  
    :isShowCaption="false"
    :disabled="detailsModel.name.disabled"
    :error="detailsModel.name.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.name"
    unit=""
    :disabled="detailsModel.name.disabled" 
    @change="($event)=>this.data.name = $event" />
</app-form-item>


    
</app-form-group>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel3.visible" 
    :uiActionGroup="detailsModel.grouppanel3.uiActionGroup" 
    :caption="$t('task.mobmainedit_form.details.grouppanel3')" 
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
    :caption="$t('task.mobmainedit_form.details.grouppanel1')" 
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
    :caption="$t('task.mobmainedit_form.details.projectname')"  
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
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.projectname.disabled"
    :service="service"
    :acParams="{ serviceName: 'project', interfaceName: 'FetchCurUser'}"
    :value="data.projectname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.projectname = $event">
</app-mob-select-drop-down>
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
    :caption="$t('task.mobmainedit_form.details.modulename')"  
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
    :navigateContext ='{ "project": "%project%", "module": "%module%", "allmodules": "%allmodules%" } '
    :navigateParam ='{ "project": "%project%", "module": "%module%", "allmodules": "%allmodules%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.modulename.disabled"
    :service="service"
    :acParams="{ serviceName: 'projectmodule', interfaceName: 'FetchTaskModules'}"
    :value="data.modulename" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.modulename = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='allmodules' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="allmodules_item"  
    :itemValue="this.data.allmodules" 
    v-show="detailsModel.allmodules.visible" 
    :itemRules="this.rules.allmodules" 
    :caption="$t('task.mobmainedit_form.details.allmodules')"  
    :labelWidth="80"  
    :isShowCaption="true"
    :disabled="detailsModel.allmodules.disabled"
    :error="detailsModel.allmodules.error" 
    :isEmptyCaption="false">
        <app-mob-switch 
    class="app-form-item-switch" 
    :value="data.allmodules"  
    :disabled="detailsModel.allmodules.disabled"
    @change="($event)=>this.data.allmodules = $event" />
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
    :caption="$t('task.mobmainedit_form.details.storyname')"  
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
    :navigateContext ='{ "project": "%project%", "module": "%module%" } '
    :navigateParam ='{ "project": "%project%", "module": "%module%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.storyname.disabled"
    :service="service"
    :acParams="{ serviceName: 'story', interfaceName: 'FetchTaskRelatedStory'}"
    :value="data.storyname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.storyname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='parentname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="parentname_item"  
    :itemValue="this.data.parentname" 
    v-show="detailsModel.parentname.visible" 
    :itemRules="this.rules.parentname" 
    :caption="$t('task.mobmainedit_form.details.parentname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.parentname.disabled"
    :error="detailsModel.parentname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='parentname' 
    deMajorField='name'
    deKeyField='id'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ "n_project_eq": "%project%", "n_id_noteq": "%id%" } '
    :navigateParam ='{ "n_project_eq": "%project%", "n_id_noteq": "%id%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.parentname.disabled"
    :service="service"
    :acParams="{ serviceName: 'task', interfaceName: 'FetchRootTask'}"
    :value="data.parentname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.parentname = $event">
</app-mob-select-drop-down>
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
    :caption="$t('task.mobmainedit_form.details.assignedto')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.assignedto.disabled"
    :error="detailsModel.assignedto.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealNameProject"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.assignedto.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.assignedto"  
    :navigateContext ='{ "project": "%project%", "multiple": "0" } '
    :navigateParam ='{ "project": "%project%", "multiple": "0" } '
    @change="($event)=>this.data.assignedto = $event" />
</app-form-item>



<app-form-item 
    name='multiple' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="multiple_item"  
    :itemValue="this.data.multiple" 
    v-show="detailsModel.multiple.visible" 
    :itemRules="this.rules.multiple" 
    :caption="$t('task.mobmainedit_form.details.multiple')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.multiple.disabled"
    :error="detailsModel.multiple.error" 
    :isEmptyCaption="false">
        <app-mob-switch 
    class="app-form-item-switch" 
    :value="data.multiple"  
    :disabled="detailsModel.multiple.disabled"
    @change="($event)=>this.data.multiple = $event" />
</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel8.visible" 
    :uiActionGroup="detailsModel.grouppanel8.uiActionGroup" 
    :caption="$t('task.mobmainedit_form.details.grouppanel8')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='task' 
    refviewtype='DEMOBMEDITVIEW9'  
    refreshitems='' 
    viewname='task-team-mob-medit-view9' 
    v-show="detailsModel.druipart2.visible" 
    :caption="$t('task.mobmainedit_form.details.druipart2')"  
    paramItem='task' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdefname":"ROOT","srfparentdename":"ZT_TASK","SRFPARENTTYPE":"DER1N","srfparentmode":"DER1N_IBZ_TASKTEAM_ZT_TASK_ROOT","SRFDER1NID":"DER1N_IBZ_TASKTEAM_ZT_TASK_ROOT"}' 
    :parameters="[
        { pathName: 'tasks', parameterName: 'task' },
    ]" 
    tempMode='2'
    :context="context" 
    :viewparams="viewparams" 
    :navigateContext ='{ } ' 
    :navigateParam ='{ } ' 
    :ignorefieldvaluechange="ignorefieldvaluechange" 
    :data="JSON.stringify(this.data)"  
    @drdatasaved="drdatasaved($event)"/>


    
</app-form-group>



<app-form-item 
    name='type' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="type_item"  
    :itemValue="this.data.type" 
    v-show="detailsModel.type.visible" 
    :itemRules="this.rules.type" 
    :caption="$t('task.mobmainedit_form.details.type')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.type.disabled"
    :error="detailsModel.type.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Task__type"
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
    name='status' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="status_item"  
    :itemValue="this.data.status" 
    v-show="detailsModel.status.visible" 
    :itemRules="this.rules.status" 
    :caption="$t('task.mobmainedit_form.details.status')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.status.disabled"
    :error="detailsModel.status.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Task__status"
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
    name='pri' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="pri_item"  
    :itemValue="this.data.pri" 
    v-show="detailsModel.pri.visible" 
    :itemRules="this.rules.pri" 
    :caption="$t('task.mobmainedit_form.details.pri')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.pri.disabled"
    :error="detailsModel.pri.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Task__pri"
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
    name='mailtopk' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="mailtopk_item"  
    :itemValue="this.data.mailtopk" 
    v-show="detailsModel.mailtopk.visible" 
    :itemRules="this.rules.mailtopk" 
    :caption="$t('task.mobmainedit_form.details.mailtopk')"  
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
    :caption="$t('task.mobmainedit_form.details.grouppanel4')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='eststarted' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="eststarted_item"  
    :itemValue="this.data.eststarted" 
    v-show="detailsModel.eststarted.visible" 
    :itemRules="this.rules.eststarted" 
    :caption="$t('task.mobmainedit_form.details.eststarted')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.eststarted.disabled"
    :error="detailsModel.eststarted.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.eststarted" 
    :disabled="detailsModel.eststarted.disabled"
    @change="($event)=>this.data.eststarted = $event"/>
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
    :caption="$t('task.mobmainedit_form.details.deadline')"  
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
    name='estimate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="estimate_item"  
    :itemValue="this.data.estimate" 
    v-show="detailsModel.estimate.visible" 
    :itemRules="this.rules.estimate" 
    :caption="$t('task.mobmainedit_form.details.estimate')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.estimate.disabled"
    :error="detailsModel.estimate.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-number" 
        type="number"  
    :value="data.estimate"
    unit="小时"
    :disabled="detailsModel.estimate.disabled" 
    @change="($event)=>this.data.estimate = $event"/>
</app-form-item>



<app-form-item 
    name='consumed' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="consumed_item"  
    :itemValue="this.data.consumed" 
    v-show="detailsModel.consumed.visible" 
    :itemRules="this.rules.consumed" 
    :caption="$t('task.mobmainedit_form.details.consumed')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.consumed.disabled"
    :error="detailsModel.consumed.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-number" 
        type="number"  
    :value="data.consumed"
    unit="小时"
    :disabled="detailsModel.consumed.disabled" 
    @change="($event)=>this.data.consumed = $event"/>
</app-form-item>



<app-form-item 
    name='left' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="left_item"  
    :itemValue="this.data.left" 
    v-show="detailsModel.left.visible" 
    :itemRules="this.rules.left" 
    :caption="$t('task.mobmainedit_form.details.left')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.left.disabled"
    :error="detailsModel.left.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-number" 
        type="number"  
    :value="data.left"
    unit="小时"
    :disabled="detailsModel.left.disabled" 
    @change="($event)=>this.data.left = $event"/>
</app-form-item>


    
</app-form-group>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel5.visible" 
    :uiActionGroup="detailsModel.grouppanel5.uiActionGroup" 
    :caption="$t('task.mobmainedit_form.details.grouppanel5')" 
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
    :caption="$t('task.mobmainedit_form.details.openedby')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.openedby.disabled"
    :error="detailsModel.openedby.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.openedby.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.openedby"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.openedby = $event" />
</app-form-item>



<app-form-item 
    name='realstarted' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="realstarted_item"  
    :itemValue="this.data.realstarted" 
    v-show="detailsModel.realstarted.visible" 
    :itemRules="this.rules.realstarted" 
    :caption="$t('task.mobmainedit_form.details.realstarted')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.realstarted.disabled"
    :error="detailsModel.realstarted.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.realstarted" 
    :disabled="detailsModel.realstarted.disabled"
    @change="($event)=>this.data.realstarted = $event"/>
</app-form-item>



<app-form-item 
    name='finishedby' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="finishedby_item"  
    :itemValue="this.data.finishedby" 
    v-show="detailsModel.finishedby.visible" 
    :itemRules="this.rules.finishedby" 
    :caption="$t('task.mobmainedit_form.details.finishedby')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.finishedby.disabled"
    :error="detailsModel.finishedby.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.finishedby.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.finishedby"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.finishedby = $event" />
</app-form-item>



<app-form-item 
    name='finisheddate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="finisheddate_item"  
    :itemValue="this.data.finisheddate" 
    v-show="detailsModel.finisheddate.visible" 
    :itemRules="this.rules.finisheddate" 
    :caption="$t('task.mobmainedit_form.details.finisheddate')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.finisheddate.disabled"
    :error="detailsModel.finisheddate.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.finisheddate" 
    :disabled="detailsModel.finisheddate.disabled"
    @change="($event)=>this.data.finisheddate = $event"/>
</app-form-item>



<app-form-item 
    name='canceledby' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="canceledby_item"  
    :itemValue="this.data.canceledby" 
    v-show="detailsModel.canceledby.visible" 
    :itemRules="this.rules.canceledby" 
    :caption="$t('task.mobmainedit_form.details.canceledby')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.canceledby.disabled"
    :error="detailsModel.canceledby.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.canceledby.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.canceledby"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.canceledby = $event" />
</app-form-item>



<app-form-item 
    name='canceleddate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="canceleddate_item"  
    :itemValue="this.data.canceleddate" 
    v-show="detailsModel.canceleddate.visible" 
    :itemRules="this.rules.canceleddate" 
    :caption="$t('task.mobmainedit_form.details.canceleddate')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.canceleddate.disabled"
    :error="detailsModel.canceleddate.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    class="app-form-item-datetime" 
    :value="data.canceleddate" 
    displayFormat="YYYY-MM-DD HH:mm:ss"
    :disabled="detailsModel.canceleddate.disabled"
    @change="($event)=>this.data.canceleddate = $event"/>
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
    :caption="$t('task.mobmainedit_form.details.closedby')"  
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
    name='closedreason' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="closedreason_item"  
    :itemValue="this.data.closedreason" 
    v-show="detailsModel.closedreason.visible" 
    :itemRules="this.rules.closedreason" 
    :caption="$t('task.mobmainedit_form.details.closedreason')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.closedreason.disabled"
    :error="detailsModel.closedreason.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Task__closed_reason"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.closedreason.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.closedreason"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.closedreason = $event" />
</app-form-item>



<app-form-item 
    name='closeddate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="closeddate_item"  
    :itemValue="this.data.closeddate" 
    v-show="detailsModel.closeddate.visible" 
    :itemRules="this.rules.closeddate" 
    :caption="$t('task.mobmainedit_form.details.closeddate')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.closeddate.disabled"
    :error="detailsModel.closeddate.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    class="app-form-item-datetime" 
    :value="data.closeddate" 
    displayFormat="YYYY-MM-DD HH:mm:ss"
    :disabled="detailsModel.closeddate.disabled"
    @change="($event)=>this.data.closeddate = $event"/>
</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel6.visible" 
    :uiActionGroup="detailsModel.grouppanel6.uiActionGroup" 
    :caption="$t('task.mobmainedit_form.details.grouppanel6')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='desc' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="NONE" 
    ref="desc_item"  
    :itemValue="this.data.desc" 
    v-show="detailsModel.desc.visible" 
    :itemRules="this.rules.desc" 
    :caption="$t('task.mobmainedit_form.details.desc')"  
    :labelWidth="0"  
    :isShowCaption="false"
    :disabled="detailsModel.desc.disabled"
    :error="detailsModel.desc.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.desc" @change="(val) =>{this.data.desc =val}" :disabled="detailsModel.desc.disabled" :data="JSON.stringify(this.data)"  name="desc" :uploadparams='{objecttype:"task",objectid: "%id%",version:"editor"}' :exportparams='{objecttype:"task",objectid: "%id%",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>


    
</app-form-group>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel7.visible" 
    :uiActionGroup="detailsModel.grouppanel7.uiActionGroup" 
    :caption="$t('task.mobmainedit_form.details.grouppanel7')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='comment' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="NONE" 
    ref="comment_item"  
    :itemValue="this.data.comment" 
    v-show="detailsModel.comment.visible" 
    :itemRules="this.rules.comment" 
    :caption="$t('task.mobmainedit_form.details.comment')"  
    :labelWidth="0"  
    :isShowCaption="false"
    :disabled="detailsModel.comment.disabled"
    :error="detailsModel.comment.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.comment" @change="(val) =>{this.data.comment =val}" :disabled="detailsModel.comment.disabled" :data="JSON.stringify(this.data)"  name="comment" :uploadparams='{objecttype:"task",objectid: "%id%",version:"editor"}' :exportparams='{objecttype:"task",objectid: "%id%",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>


    
</app-form-group>



<app-form-item 
    name='files' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="files_item"  
    :itemValue="this.data.files" 
    v-show="detailsModel.files.visible" 
    :itemRules="this.rules.files" 
    :caption="$t('task.mobmainedit_form.details.files')"  
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
    :uploadParam='{objecttype:"task",objectid:"0",version:"1"}' 
    :exportParam='{objecttype:"task",objectid:"0",version:"1"}' 
    @formitemvaluechange="onFormItemValueChange" />
</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel9.visible" 
    :uiActionGroup="detailsModel.grouppanel9.uiActionGroup" 
    :caption="$t('task.mobmainedit_form.details.grouppanel9')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='task' 
    refviewtype='DEMOBMDVIEW9'  
    refreshitems='' 
    viewname='action-mob-mdview9' 
    v-show="detailsModel.druipart1.visible" 
    :caption="$t('task.mobmainedit_form.details.druipart1')"  
    paramItem='task' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdename":"ZT_TASK","SRFPARENTTYPE":"CUSTOM"}' 
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




    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import TaskService from '@/app-core/service/task/task-service';
import MobMainEditService from '@/app-core/ctrl-service/task/mob-main-edit-form-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import TaskUIService from '@/ui-service/task/task-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: { }
})
export default class MobMainEditBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobMainEdit
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobMainEdit
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobMainEdit
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobMainEdit
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobMainEdit
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobMainEdit
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobMainEditBase
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
     * @type {MobMainEditService}
     * @memberof MobMainEdit
     */
    protected service: MobMainEditService = new MobMainEditService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MobMainEdit
     */
    protected appEntityService: TaskService = new TaskService();

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof MobMainEditBase
     */  
    public deUIService:TaskUIService = new TaskUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobMainEdit
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof MobMainEdit
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobMainEdit
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobMainEdit
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MobMainEdit
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MobMainEdit
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MobMainEdit
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MobMainEdit
     */
    protected formState: Subject<any> = new Subject();


    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MobMainEditBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MobMainEdit
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MobMainEdit
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MobMainEdit
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MobMainEdit
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MobMainEdit
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
        name: null,
        projectname: null,
        project: null,
        module: null,
        modulename: null,
        allmodules: null,
        storyname: null,
        story: null,
        parentname: null,
        parent: null,
        assignedto: null,
        storyversion: null,
        multiple: null,
        type: null,
        status: null,
        pri: null,
        mailto: null,
        mailtopk: null,
        eststarted: null,
        deadline: null,
        estimate: null,
        consumed: null,
        left: null,
        openedby: null,
        realstarted: null,
        finishedby: null,
        finisheddate: null,
        canceledby: null,
        canceleddate: null,
        closedby: null,
        closedreason: null,
        closeddate: null,
        noticeusers: null,
        desc: null,
        comment: null,
        files: null,
        task: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MobMainEdit
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MobMainEdit
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MobMainEdit
      */
    protected saveState:any ;

    /**
      * 异常信息缓存
      *
      * @type {any}
      * @memberof MobMainEdit
      */
    public errorCache :any = {};

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobMainEdit
     */
    protected rules: any = {
        name: [
            { required: true, type: 'string', message: 'required', trigger: 'change' },
            { required: true, type: 'string', message: 'required', trigger: 'blur' },
            {validator:(rule:any, value:any)=>{return this.verifyDeRules("name").isPast}}
        ],
        assignedto: [
            { required: true, type: 'string', message: 'required', trigger: 'change' },
            { required: true, type: 'string', message: 'required', trigger: 'blur' },
        ],
        type: [
            { required: true, type: 'string', message: 'required', trigger: 'change' },
            { required: true, type: 'string', message: 'required', trigger: 'blur' },
        ],
        deadline: [
            {validator:(rule:any, value:any)=>{return this.verifyDeRules("deadline").isPast}}
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobMainEditBase
     */
    public deRules:any = {
                deadline:[
                  {
                      type:"GROUP",
                      condOP:"OR",
                      ruleInfo:"截至日期必须大于等于预计开始", 
                      isKeyCond:false,
                      isNotMode:false,
                      group:[
                  {
                      type:"SIMPLE",
                      condOP:"ISNULL",
                      ruleInfo:"", 
                      isKeyCond:false,
                      isNotMode:false,
                      deName:"eststarted",
                  },
                  {
                      type:"SIMPLE",
                      condOP:"GTANDEQ",
                      ruleInfo:"截至日期必须大于等于预计开始", 
                      isKeyCond:false,
                      paramValue:"eststarted",
                      paramType:"ENTITYFIELD",
                      isNotMode:false,
                      deName:"deadline",
                  },
                        ]
                  },
                ],
                name:[
                  {
                      type:"STRINGLENGTH",
                      condOP:"",
                      ruleInfo:"任务名称不大于10", 
                      isKeyCond:false,
                      isNotMode:false,
                      maxValue:100,
                      deName:"name",
                      isIncludeMaxValue:true,
                      isIncludeMinValue:false,
                  },
                ],
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
     * @memberof MobMainEdit
     */
    protected detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '任务基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: false, isShowCaption: true, form: this })
, 
        grouppanel8: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel8', visible: false, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '工时信息', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel6: new FormGroupPanelModel({ caption: '任务描述', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel7: new FormGroupPanelModel({ caption: '备注', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel9: new FormGroupPanelModel({ caption: '历史记录', detailType: 'GROUPPANEL', name: 'grouppanel9', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '任务的一生', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'task.mobmainedit_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        name: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        projectname: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        allmodules: new FormItemModel({ caption: '所有模块', detailType: 'FORMITEM', name: 'allmodules', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyname: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        parentname: new FormItemModel({ caption: '父任务', detailType: 'FORMITEM', name: 'parentname', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        parent: new FormItemModel({ caption: '父任务', detailType: 'FORMITEM', name: 'parent', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyversion: new FormItemModel({ caption: '需求版本', detailType: 'FORMITEM', name: 'storyversion', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        multiple: new FormItemModel({ caption: '多人任务', detailType: 'FORMITEM', name: 'multiple', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '任务类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '任务状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailtopk: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailtopk', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        eststarted: new FormItemModel({ caption: '预计开始', detailType: 'FORMITEM', name: 'eststarted', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        deadline: new FormItemModel({ caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        estimate: new FormItemModel({ caption: '最初预计', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        consumed: new FormItemModel({ caption: '总计消耗', detailType: 'FORMITEM', name: 'consumed', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        left: new FormItemModel({ caption: '预计剩余', detailType: 'FORMITEM', name: 'left', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        realstarted: new FormItemModel({ caption: '实际开始', detailType: 'FORMITEM', name: 'realstarted', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        finishedby: new FormItemModel({ caption: '由谁完成', detailType: 'FORMITEM', name: 'finishedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        finisheddate: new FormItemModel({ caption: '实际完成', detailType: 'FORMITEM', name: 'finisheddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        canceledby: new FormItemModel({ caption: '由谁取消', detailType: 'FORMITEM', name: 'canceledby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        canceleddate: new FormItemModel({ caption: '取消时间', detailType: 'FORMITEM', name: 'canceleddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closedby: new FormItemModel({ caption: '由谁关闭', detailType: 'FORMITEM', name: 'closedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closedreason: new FormItemModel({ caption: '关闭原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closeddate: new FormItemModel({ caption: '关闭时间', detailType: 'FORMITEM', name: 'closeddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        noticeusers: new FormItemModel({ caption: '消息通知用户', detailType: 'FORMITEM', name: 'noticeusers', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '任务描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        comment: new FormItemModel({ caption: '备注', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        files: new FormItemModel({ caption: '附件', detailType: 'FORMITEM', name: 'files', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.name')
    onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 projectname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.projectname')
    onProjectnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'projectname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.project')
    onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 module 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    @Watch('data.modulename')
    onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 allmodules 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.allmodules')
    onAllmodulesChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'allmodules', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.storyname')
    onStorynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 parentname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.parentname')
    onParentnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'parentname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 parent 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.parent')
    onParentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'parent', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.assignedto')
    onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyversion 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.storyversion')
    onStoryversionChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyversion', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 multiple 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.multiple')
    onMultipleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'multiple', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    @Watch('data.mailtopk')
    onMailtopkChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailtopk', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 eststarted 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.eststarted')
    onEststartedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'eststarted', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 deadline 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.deadline')
    onDeadlineChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'deadline', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 estimate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.estimate')
    onEstimateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'estimate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 consumed 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.consumed')
    onConsumedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'consumed', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 left 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.left')
    onLeftChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'left', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.openedby')
    onOpenedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 realstarted 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.realstarted')
    onRealstartedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'realstarted', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 finishedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.finishedby')
    onFinishedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'finishedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 finisheddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.finisheddate')
    onFinisheddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'finisheddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 canceledby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.canceledby')
    onCanceledbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'canceledby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 canceleddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.canceleddate')
    onCanceleddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'canceleddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.closedby')
    onClosedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedreason 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.closedreason')
    onClosedreasonChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedreason', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closeddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.closeddate')
    onCloseddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closeddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 noticeusers 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.noticeusers')
    onNoticeusersChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'noticeusers', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
     */
    @Watch('data.desc')
    onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 comment 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (Object.is(name, 'multiple')) {
            this.onFormItemValueChange({ name: 'assignedto', value: null });
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
     * @memberof MobMainEdit
     */
    private async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){
                

        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '1')) {
                ret = true;
            }
            this.detailsModel.druipart2.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '1')) {
                ret = true;
            }
            this.detailsModel.grouppanel8.setVisible(ret);
        }



























        if (Object.is(name, '') || Object.is(name, 'parent') || Object.is(name, 'multiple')) {
            let ret = false;
            const _parent = this.data.parent;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_parent, 'NOTEQ', '-1') && this.$verify.testCond(_multiple, 'EQ', '0') || this.$verify.testCond(_multiple, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.parentname.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = true;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '1')) {
                ret = false;
            }
            this.rules.assignedto.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    rule.required = ret;
                }
                return false;
            });
        }
        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.assignedto.setDisabled(!ret);
        }


        if (Object.is(name, '') || Object.is(name, 'parent')) {
            let ret = false;
            const _parent = this.data.parent;
            if (this.$verify.testCond(_parent, 'EQ', '0') || this.$verify.testCond(_parent, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.multiple.setVisible(ret);
        }








        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'ISNULL', '') || this.$verify.testCond(_multiple, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.estimate.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '0') || this.$verify.testCond(_multiple, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.consumed.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '0') || this.$verify.testCond(_multiple, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.left.setDisabled(!ret);
        }















        if (Object.is(name, 'storyversion')) {
            const details: string[] = ['storyversion'];
            if(await this.validItem('storyversion', this.data['storyversion'])){
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
                let _message :any = (this.$t(`task.mobmainedit_form.details.${field}`) as string) +' '+ this.$t(`app.form.rules.${message}`);
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobMainEdit
     */    
    protected afterCreated(){
        if(this.isautoload){
            this.autoLoad({srfkey:this.context.task});
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
                if(!Object.is(name,"Task")){
                    return;
                }
                if(Object.is(action,'appRefresh') && data.appRefreshAction && this.context.task){
                    this.refresh([data]);
                }
            })
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MobMainEdit
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobMainEdit
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
     * @memberof @memberof MobMainEdit
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
            if(data.task){
                Object.assign(this.context, { task: data.task });
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
            this.drcounter = 2;
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
        Object.assign(this.viewparams,{ name: arg.name});
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
            AppCenterService.notifyMessage({name:"Task",action:'appRefresh',data:Object.assign(data,{appRefreshAction:action===this.createAction?false:true})});
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
            AppCenterService.notifyMessage({name:"Task",action:'appRefresh',data:data});
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
     * @memberof MobMainEdit
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            AppCenterService.notifyMessage({name:"Task",action:'appRefresh',data:data});
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
     * @memberof MobMainEdit
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
            AppCenterService.notifyMessage({name:"Task",action:'appRefresh',data:data});
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
     * @memberof MobMainEdit
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
            AppCenterService.notifyMessage({name:"Task",action:'appRefresh',data:data});
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
     * @memberof MobMainEdit
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
     * @memberof MobMainEdit
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
    * @memberof MobMainEdit
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
     * @memberof MobMainEdit
     */
    public createDefault(){                    
    }

        /**
     * 更新默认值
     * @memberof MobMainEditBase
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
@import './mob-main-edit-form.less';
</style>