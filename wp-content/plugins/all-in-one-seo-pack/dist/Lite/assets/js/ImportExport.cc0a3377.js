var x=Object.defineProperty,C=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var m=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,a=(t,e)=>{for(var s in e||(e={}))O.call(e,s)&&m(t,s,e[s]);if(d)for(var s of d(e))B.call(e,s)&&m(t,s,e[s]);return t},n=(t,e)=>C(t,E(e));import{a as w,d as c}from"./index.d328c175.js";import{C as p}from"./Index.cb0f42fe.js";import{C as u}from"./Card.be971207.js";import{C as R}from"./Modal.1216ab78.js";import{C as D}from"./Tooltip.3ec20ff5.js";import{S as M}from"./Plus.a9b9ba75.js";import{S as I}from"./index.a4161053.js";import{S as F}from"./History.99f81129.js";import{S as P}from"./Refresh.c697ed05.js";import{S as T}from"./Trash.214b5744.js";import{n as l}from"./vueComponentNormalizer.87056a83.js";import{G as h,a as _}from"./Row.13b6f3f1.js";import{b as A}from"./ToolsSettings.004b222f.js";import"./helpers.db3922d1.js";import{B as S}from"./Checkbox.5873a8d2.js";import{S as y}from"./Download.bc45fb83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./_commonjsHelpers.f40d732e.js";import"./client.94d919c5.js";import"./constants.a1b1778a.js";import"./cleanForSlug.e9a761bb.js";import"./Checkmark.e7547654.js";var z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-card",{staticClass:"aioseo-backup-settings",attrs:{slug:"backupSettings",toggles:!1,"no-slide":"","header-text":t.strings.backupSettings},scopedSlots:t._u([{key:"header-icon",fn:function(){return[s("svg-history")]},proxy:!0}])},[t.backupsDeleteSuccess?s("core-alert",{attrs:{type:"green"}},[t._v(" "+t._s(t.strings.backupSuccessfullyDeleted)+" ")]):t._e(),t.backupsRestoreSuccess?s("core-alert",{attrs:{type:"green"}},[t._v(" "+t._s(t.strings.backupSuccessfullyRestored)+" ")]):t._e(),t.backups.length?t._e():s("div",{staticClass:"aioseo-section-description"},[t._v(" "+t._s(t.strings.noBackups)+" ")]),t.backups.length?[s("div",{staticClass:"backups-table"},[s("div",{staticClass:"backups-rows"},t._l(t.backups,function(i,o){return s("div",{key:o,staticClass:"backup-row",class:{even:o%2===0}},[s("div",{staticClass:"backup-name",domProps:{innerHTML:t._s(t.getBackupName(i))}}),s("div",{staticClass:"backup-actions"},[s("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.restore)+" ")]},proxy:!0}],null,!0)},[s("svg-refresh",{nativeOn:{click:function(r){return t.maybeRestoreBackup(i)}}})],1),s("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.delete)+" ")]},proxy:!0}],null,!0)},[s("svg-trash",{nativeOn:{click:function(r){return t.maybeDeleteBackup(i)}}})],1)],1)])}),0)])]:t._e(),s("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:t.processCreateBackup}},[s("svg-circle-plus"),t._v(" "+t._s(t.strings.createBackup)+" ")],1),t.showModal?s("core-modal",{attrs:{"no-header":""},scopedSlots:t._u([{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body"},[s("button",{staticClass:"close",on:{click:function(i){i.stopPropagation(),t.showModal=!1}}},[s("svg-close",{on:{click:function(i){t.showModal=!1}}})],1),s("h3",[t._v(t._s(t.areYouSure))]),s("div",{staticClass:"reset-description",domProps:{innerHTML:t._s(t.strings.actionCannotBeUndone)}}),s("base-button",{attrs:{type:"blue",size:"medium"},on:{click:t.processBackupAction}},[t._v(" "+t._s(t.iAmSure)+" ")]),s("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(i){t.showModal=!1}}},[t._v(" "+t._s(t.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,1131809547)}):t._e()],2)},j=[];const U={components:{CoreAlert:p,CoreCard:u,CoreModal:R,CoreTooltip:D,SvgCirclePlus:M,SvgClose:I,SvgHistory:F,SvgRefresh:P,SvgTrash:T},data(){return{timeout:null,backupToDelete:null,backupToRestore:null,backupsDeleteSuccess:!1,showModal:!1,backupsRestoreSuccess:!1,loading:!1,strings:{backupSettings:this.$t.__("Backup Settings",this.$td),areYouSureDeleteBackup:this.$t.__("Are you sure you want to delete this backup?",this.$td),areYouSureRestoreBackup:this.$t.__("Are you sure you want to restore this backup?",this.$td),yesDeleteBackup:this.$t.__("Yes, I want to delete this backup",this.$td),yesRestoreBackup:this.$t.__("Yes, I want to restore this backup",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$td),noBackups:this.$t.__("You have no saved backups.",this.$td),createBackup:this.$t.__("Create Backup",this.$td),restore:this.$t.__("Restore",this.$td),delete:this.$t.__("Delete",this.$td),backupSuccessfullyDeleted:this.$t.__("Success! The backup was deleted.",this.$td),backupSuccessfullyRestored:this.$t.__("Success! The backup was restored.",this.$td)}}},computed:n(a({},w(["backups"])),{areYouSure(){return this.backupToDelete?this.strings.areYouSureDeleteBackup:this.strings.areYouSureRestoreBackup},iAmSure(){return this.backupToDelete?this.strings.yesDeleteBackup:this.strings.yesRestoreBackup}}),methods:n(a({},c(["createBackup","deleteBackup","restoreBackup"])),{processCreateBackup(){this.loading=!0,this.createBackup().then(()=>{this.loading=!1})},maybeDeleteBackup(t){this.showModal=!0,this.backupToDelete=t},maybeRestoreBackup(t){this.showModal=!0,this.backupToRestore=t},processDeleteBackup(){this.loading=!0,this.deleteBackup(this.backupToDelete).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToDelete=null,this.backupsDeleteSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},processRestoreBackup(){this.loading=!0,this.restoreBackup(this.backupToRestore).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToRestore=null,this.backupsRestoreSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},getBackupName(t){return this.$t.sprintf(this.$t.__("%1$s at %2$s",this.$td),"<strong>"+this.$moment(t*1e3).tz(this.$moment.tz.guess()).format("MMMM D, YYYY")+"</strong>","<strong>"+this.$moment(t*1e3).tz(this.$moment.tz.guess()).format("h:mmA z")+"</strong>")},processBackupAction(){return this.backupToDelete?this.processDeleteBackup():this.processRestoreBackup()}})},g={};var Y=l(U,z,j,!1,L,null,null,null);function L(t){for(let e in g)this[e]=g[e]}var H=function(){return Y.exports}(),V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15 17V11H19L12 4L5 11H9V17H15ZM12 6.83L14.17 9H13V15H11V9H9.83L12 6.83ZM19 21V19H5V21H19Z",fill:"currentColor"}})])},N=[];const q={},f={};var G=l(q,V,N,!1,J,null,null,null);function J(t){for(let e in f)this[e]=f[e]}var W=function(){return G.exports}(),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-card",{staticClass:"aioseo-export-settings",attrs:{slug:"exportSettings",toggles:!1,"no-slide":"","header-text":t.strings.exportSettings},scopedSlots:t._u([{key:"header-icon",fn:function(){return[s("svg-upload")]},proxy:!0}])},[s("div",{staticClass:"export-settings",class:{"aioseo-settings-row":t.canExportPostOptions}},[s("grid-row",[s("grid-column",{staticClass:"export-all"},[s("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.all,callback:function(i){t.$set(t.options,"all",i)},expression:"options.all"}},[t._v(" "+t._s(t.strings.allSettings)+" ")])],1),t._l(t.toolsSettings,function(i,o){return s("grid-column",{key:o,attrs:{sm:"6"}},[t.options.all?t._e():s("base-checkbox",{attrs:{size:"medium"},model:{value:t.options[i.value],callback:function(r){t.$set(t.options,i.value,r)},expression:"options[setting.value]"}},[t._v(" "+t._s(i.label)+" ")]),i.value!=="all"&&t.options.all?s("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(i.label)+" ")]):t._e()],1)})],2)],1),t.canExportPostOptions?s("div",{staticClass:"export-post-types"},[s("grid-row",[s("grid-column",{staticClass:"export-all"},[s("base-checkbox",{attrs:{size:"medium"},model:{value:t.postOptions.all,callback:function(i){t.$set(t.postOptions,"all",i)},expression:"postOptions.all"}},[t._v(" "+t._s(t.strings.allPostTypes)+" ")])],1),t._l(t.$aioseo.postData.postTypes,function(i,o){return s("grid-column",{key:o,attrs:{sm:"6"}},[t.postOptions.all?t._e():s("base-checkbox",{attrs:{size:"medium"},model:{value:t.postOptions[i.name],callback:function(r){t.$set(t.postOptions,i.name,r)},expression:"postOptions[postType.name]"}},[t._v(" "+t._s(i.label)+" ")]),i.name!=="all"&&t.postOptions.all?s("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(i.label)+" ")]):t._e()],1)})],2)],1):t._e(),s("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.canExport,loading:t.loading},on:{click:t.processExportSettings}},[t._v(" "+t._s(t.strings.exportSettings)+" ")])],1)},K=[];const Q={components:{BaseCheckbox:S,CoreCard:u,GridColumn:h,GridRow:_,SvgUpload:W},mixins:[A],data(){return{options:{},postOptions:{},loading:!1,strings:{exportSettings:this.$t.__("Export Settings",this.$td),allSettings:this.$t.__("Export All Settings",this.$td),allPostTypes:this.$t.__("Export All Post Types",this.$td)}}},computed:{canExport(){const t=[];return Object.keys(this.options).forEach(e=>{t.push(this.options[e])}),Object.keys(this.postOptions).forEach(e=>{t.push(this.postOptions[e])}),t.some(e=>e)},canExportPostOptions(){return["aioseo_page_general_settings","aioseo_page_advanced_settings","aioseo_page_schema_settings","aioseo_page_social_settings","aioseo_page_local_seo_settings"].some(t=>this.$allowed(t))}},methods:n(a({},c(["exportSettings"])),{processExportSettings(){const t=[];this.options.all?(this.$isPro&&t.push("general"),t.push("internal"),this.toolsSettings.filter(s=>s.value!=="all").forEach(s=>{t.push(s.value)})):Object.keys(this.options).forEach(s=>{this.options[s]&&t.push(s)});const e=[];this.postOptions.all?this.$aioseo.postData.postTypes.forEach(s=>{e.push(s.name)}):Object.keys(this.postOptions).forEach(s=>{this.postOptions[s]&&e.push(s)}),this.loading=!0,this.exportSettings({settings:t,postOptions:e}).then(s=>{this.loading=!1,this.options={},this.postOptions={};const i=new Blob([JSON.stringify(s.body.settings)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(i),o.download=`aioseo-export-settings-${this.$moment().format("YYYY-MM-DD")}.json`,o.click(),URL.revokeObjectURL(o.href)})}})},v={};var X=l(Q,Z,K,!1,tt,null,null,null);function tt(t){for(let e in v)this[e]=v[e]}var st=function(){return X.exports}(),et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-card",{staticClass:"aioseo-import-aioseo",attrs:{slug:"importAioseoSettings",toggles:!1,"no-slide":"","header-text":t.strings.importRestoreAioseoSettings},scopedSlots:t._u([{key:"header-icon",fn:function(){return[s("svg-download")]},proxy:!0}])},[t.uploadError?s("core-alert",{staticClass:"import-error",attrs:{type:"red"}},[t._v(" "+t._s(t.uploadError)+" ")]):t._e(),t.uploadSuccess?s("core-alert",{staticClass:"import-error",attrs:{type:"green"}},[t._v(" "+t._s(t.strings.fileUploadedSuccessfully)+" ")]):t._e(),s("div",{staticClass:"file-upload"},[s("base-input",{class:{"aioseo-error":t.uploadError},attrs:{size:"medium",placeholder:t.strings.fileUploadPlaceholder},on:{focus:t.triggerFileUpload},model:{value:t.filename,callback:function(i){t.filename=i},expression:"filename"}}),s("base-button",{attrs:{type:"black",size:"medium"}},[t._v(" "+t._s(t.strings.chooseAFile)+" "),s("base-input",{ref:"file",attrs:{type:"file"},on:{click:t.reset,change:t.handleFileUpload},model:{value:t.inputFile,callback:function(i){t.inputFile=i},expression:"inputFile"}})],1)],1),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.fileUploadDescription)+" ")]),s("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.file||!t.importValidated,loading:t.loading},on:{click:t.submitFile}},[t._v(" "+t._s(t.strings.import)+" ")])],1)},it=[];const ot={components:{CoreAlert:p,CoreCard:u,SvgDownload:y},data(){return{inputFile:null,filename:null,file:null,uploadError:!1,uploadSuccess:!1,loading:!1,strings:{importRestoreAioseoSettings:this.$t.sprintf(this.$t.__("Import / Restore %1$s Settings",this.$td),"AIOSEO"),fileUploadPlaceholder:this.$t.__("Import from a JSON or INI file...",this.$td),chooseAFile:this.$t.__("Choose a File",this.$td),fileUploadDescription:this.$t.__("Imported settings will overwrite existing settings and will not be merged.",this.$td),import:this.$t.__("Import",this.$td),jsonFileTypeRequired:this.$t.__("A JSON or INI file is required to import settings.",this.$td),fileUploadedSuccessfully:this.$t.__("Success! Your settings have been imported.",this.$td),fileUploadFailed:this.$t.__("There was an error importing your settings. Please make sure you are uploading the correct file or it is in the proper format.",this.$td)}}},computed:{importValidated(){return!!(this.file.type==="application/json"||this.file.name.endsWith(".ini"))}},methods:n(a({},c(["uploadFile"])),{reset(){this.uploadError=!1,this.filename=null,this.file=null,this.inputFile=null},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},submitFile(){this.loading=!0,this.uploadFile({file:this.file,filename:this.filename}).then(()=>{this.reset(),this.uploadSuccess=!0,this.loading=!1}).catch(()=>{this.reset(),this.loading=!1,this.uploadError=this.strings.fileUploadFailed})},handleFileUpload(){this.reset(),this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="application/json"&&!this.file.name.endsWith(".ini")&&(this.uploadError=this.strings.jsonFileTypeRequired))}})},$={};var rt=l(ot,et,it,!1,at,null,null,null);function at(t){for(let e in $)this[e]=$[e]}var nt=function(){return rt.exports}(),lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-card",{staticClass:"aioseo-import-others",attrs:{id:"aioseo-import-others",slug:"importOtherPlugins",toggles:!1,"no-slide":"","header-text":t.strings.importSettingsFromOtherPlugins},scopedSlots:t._u([{key:"header-icon",fn:function(){return[s("svg-download")]},proxy:!0}])},[s("div",{staticClass:"aioseo-section-description"},[t._v(" "+t._s(t.strings.importOthersDescription)+" ")]),t.importSuccess?s("core-alert",{staticClass:"import-success",attrs:{type:"green"}},[t._v(" "+t._s(t.importSuccessful)+" ")]):t._e(),t.importError?s("core-alert",{staticClass:"import-error",attrs:{type:"red"}},[t._v(" "+t._s(t.importErrorMessage)+" ")]):t._e(),s("base-select",{attrs:{size:"medium",options:t.plugins,placeholder:t.strings.selectPlugin},scopedSlots:t._u([{key:"option",fn:function(i){var o=i.option;return[s("div",{staticClass:"import-plugin-label"},[s("span",{staticClass:"plugin-label"},[t._v(t._s(o.label))]),o.$isDisabled?s("span",{staticClass:"plugin-status"},[t._v(t._s(t.strings.notInstalled))]):t._e()])]}}]),model:{value:t.plugin,callback:function(i){t.plugin=i},expression:"plugin"}}),t.plugin?s("div",{staticClass:"import-settings"},[t.plugin.canImport?s("grid-row",[s("grid-column",[s("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.all,callback:function(i){t.$set(t.options,"all",i)},expression:"options.all"}},[t._v(" "+t._s(t.strings.allSettings)+" ")])],1),t._l(t.settings,function(i,o){return s("grid-column",{key:o,attrs:{sm:"6"}},[t.options.all?t._e():s("base-checkbox",{attrs:{size:"medium"},model:{value:t.options[i.value],callback:function(r){t.$set(t.options,i.value,r)},expression:"options[setting.value]"}},[t._v(" "+t._s(i.label)+" ")]),i.value!=="all"&&t.options.all?s("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(i.label)+" ")]):t._e()],1)})],2):t._e(),t.plugin.canImport?t._e():s("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.invalidVersion(t.plugin))+" ")])],1):t._e(),s("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.plugin||!t.canImport,loading:t.loading},on:{click:t.processImportPlugin}},[t._v(" "+t._s(t.strings.import)+" ")])],1)},ct=[];const ut={components:{BaseCheckbox:S,CoreAlert:p,CoreCard:u,GridColumn:h,GridRow:_,SvgDownload:y},data(){return{importSuccess:!1,importError:!1,options:{},plugin:null,loading:!1,strings:{importSettingsFromOtherPlugins:this.$t.__("Import Settings From Other Plugins",this.$td),importOthersDescription:this.$t.sprintf(this.$t.__("Choose a plugin to import SEO data directly into %1$s.",this.$td),"AIOSEO"),selectPlugin:this.$t.__("Select a plugin...",this.$td),import:this.$t.__("Import",this.$td),allSettings:this.$t.__("All Settings",this.$td),notInstalled:this.$t.__("not installed",this.$td)}}},watch:{plugin(){this.importSuccess=!1,this.importError=!1,this.options={}}},computed:{settings(){const t=[{value:"settings",label:this.$t.__("SEO Settings",this.$td)},{value:"postMeta",label:this.$t.__("Post Meta",this.$td)}];return this.$isPro&&t.push({value:"termMeta",label:this.$t.__("Term Meta",this.$td)}),t},plugins(){const t=[];return this.$aioseo.importers.forEach(e=>{t.push({value:e.slug,label:e.name,canImport:e.canImport,version:e.version,$isDisabled:!e.installed})}),t},canImport(){const t=[];return Object.keys(this.options).forEach(e=>{t.push(this.options[e])}),t.some(e=>e)},importSuccessful(){return this.$t.sprintf(this.$t.__("%1$s was successfully imported!",this.$td),this.plugin.label)},importErrorMessage(){return this.$t.sprintf(this.$t.__("An error occurred while importing %1$s. Please try again.",this.$td),this.plugin.label)}},methods:n(a({},c(["importPlugins"])),{processImportPlugin(){this.importSuccess=!1,this.importError=!1,this.loading=!0;const t=[];this.options.all?this.settings.filter(e=>e.value!=="all").forEach(e=>{t.push(e.value)}):Object.keys(this.options).forEach(e=>{this.options[e]&&t.push(e)}),this.importPlugins([{plugin:this.plugin.value,settings:t}]).then(()=>{this.loading=!1,this.importSuccess=!0,this.options={}}).catch(()=>{this.loading=!1,this.importError=!0,this.options={}})},invalidVersion(t){return this.$t.sprintf(this.$t.__("We do not support importing from the currently installed version of %1$s (%2$s). Please upgrade to the latest version and try again.",this.$td),t.label,t.version)}})},b={};var pt=l(ut,lt,ct,!1,ht,null,null,null);function ht(t){for(let e in b)this[e]=b[e]}var _t=function(){return pt.exports}(),dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-tools-import-export"},[s("grid-row",[s("grid-column",{attrs:{md:"6"}},[s("import-aioseo"),s("import-others")],1),s("grid-column",{attrs:{md:"6"}},[s("export-settings")],1)],1),s("grid-row",[s("grid-column",[s("backup-settings")],1)],1)],1)},mt=[];const gt={components:{BackupSettings:H,GridColumn:h,GridRow:_,ExportSettings:st,ImportAioseo:nt,ImportOthers:_t},data(){return{strings:{exportBackupSettings:this.$t.__("Export / Backup Settings",this.$td)}}},computed:{},methods:{}},k={};var ft=l(gt,dt,mt,!1,vt,null,null,null);function vt(t){for(let e in k)this[e]=k[e]}var Nt=function(){return ft.exports}();export{Nt as default};