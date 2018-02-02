webpackJsonp([1],{"17wW":function(e,t){},"4MIy":function(e,t){},"7zck":function(e,t){},"K+1U":function(e,t){},Mlyo:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("/5sW"),n={data:function(){return{appname:"The Meetup App",drawer:!1}},computed:{menuItems:function(){var e=[{icon:"home",title:"Home",link:"/"},{icon:"person_add",title:"Signup",link:"/signup"},{icon:"lock_open",title:"Signin",link:"/signin"}];return this.userIsAuthenticated&&(e=[{icon:"home",title:"Home",link:"/"},{icon:"group",title:"View Meetups",link:"/meetups"},{icon:"add_circle",title:"Organize Meetup",link:"/meetup/new"}]),e},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-list",[i("v-list-tile",[i("v-list-tile-title",{staticClass:"title"},[e._v("\n            "+e._s(e.appname)+"\n          ")])],1)],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list",[e._l(e.menuItems,function(t){return i("v-list-tile",{key:t.title,attrs:{to:t.link,exact:""}},[i("v-list-tile-action",[i("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),i("v-list-tile-content",[e._v("\n          "+e._s(t.title)+"\n        ")])],1)}),e._v(" "),e.userIsAuthenticated?i("v-list-tile",{on:{click:e.onLogout}},[i("v-list-tile-action",[i("v-icon",[e._v("exit_to_app")])],1),e._v(" "),i("v-list-tile-content",[e._v("\n          Logout\n        ")])],1):e._e()],2)],1),e._v(" "),i("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[i("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.drawer=!e.drawer}}}),e._v(" "),i("v-toolbar-title",[i("router-link",{staticStyle:{cursor:"pointer"},attrs:{tag:"span",to:"/"}},[e._v(e._s(e.appname))])],1),e._v(" "),i("v-spacer"),e._v(" "),i("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e._l(e.menuItems,function(t){return i("v-btn",{key:t.title,attrs:{flat:"",to:t.link,exact:""}},[i("v-icon",{attrs:{left:""}},[e._v(e._s(t.icon))]),e._v("\n        "+e._s(t.title)+"\n      ")],1)}),e._v(" "),e.userIsAuthenticated?i("v-btn",{attrs:{flat:""},on:{click:e.onLogout}},[i("v-icon",{attrs:{left:""}},[e._v("exit_to_app")]),e._v("\n        Logout\n      ")],1):e._e()],2)],1),e._v(" "),i("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")(n,a,!1,function(e){i("w0YE")},null,null).exports,o=i("/ocq"),l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[i("v-btn",{staticClass:"primary",attrs:{large:"",to:"/meetups"}},[e._v("Explore Meetups")])],1),e._v(" "),i("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[i("v-btn",{staticClass:"primary",attrs:{large:"",to:"/meetup/new"}},[e._v("Organize Meetup")])],1)],1),e._v(" "),i("v-layout",{staticClass:"mt-3"},[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[e.loading?i("v-progress-circular",{attrs:{indeterminate:"",size:70,width:5,color:"primary"}}):i("v-carousel",e._l(e.carouselItems,function(t){return i("v-carousel-item",{key:t.id,staticStyle:{cursor:"pointer"},attrs:{src:t.imageSrc},on:{click:function(i){e.navigateTo(t.id)}}},[i("div",{staticClass:"carousel-title"},[e._v(e._s(t.title))])])}))],1)],1),e._v(" "),i("v-layout",{staticClass:"mt-3"},[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[i("p",[e._v("Join our awesome meetups")])])],1)],1)},staticRenderFns:[]};var u=i("VU/8")({data:function(){return{}},computed:{carouselItems:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{navigateTo:function(e){this.$router.push("/meetups/"+e)}}},l,!1,function(e){i("4MIy")},"data-v-237cfe9c",null).exports,c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",e._l(e.meetups,function(t){return i("v-layout",{key:t.id,staticClass:"mb-3",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[i("v-card",{staticClass:"white--text",attrs:{color:"info"}},[i("v-container",{attrs:{fluid:"","grid-list-lg":""}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs5:""}},[i("v-card-media",{attrs:{src:t.imageSrc,height:"160px",contain:""}})],1),e._v(" "),i("v-flex",{attrs:{xs7:""}},[i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("div",{staticClass:"headline"},[e._v(e._s(t.title))]),e._v(" "),i("div",[e._v(e._s(e._f("dateFilter")(t.date)))])])]),e._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",dark:"",to:"/meetups/"+t.id}},[i("v-icon",{attrs:{left:""}},[e._v("arrow_forward")]),e._v("\n                  View Meetup\n                ")],1)],1)],1)],1)],1)],1)],1)],1)}))},staticRenderFns:[]};var d=i("VU/8")({computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},c,!1,function(e){i("ZTop")},null,null).exports,p={data:function(){return{valid:!0,titleRules:[function(e){return!!e||"Name is required"}],locationRules:[function(e){return!!e||"Location is required"}],imageRules:[function(e){return!!e||"Image is required"}],descriptionRules:[function(e){return!!e||"Description is required"}],dateRules:[function(e){return!!e||"Date is required"}],timeRules:[function(e){return!!e||"Time is required"}],meetupInfo:{title:"",location:"",imageSrc:"",description:"",image:null},date:"",time:""}},computed:{datetime:function(){var e=new Date;if(""!==this.date&&""!==this.time){var t=Date.parse(this.date+" "+this.time);e=new Date(t)}return e}},methods:{createMeetup:function(){this.$refs.form.validate()&&this.datetime&&this.meetupInfo.image?(this.meetupInfo.date=this.datetime,this.$store.dispatch("createMeetup",this.meetupInfo),this.$router.push("/meetups")):console.log("Invalid form content")},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=this,i=e.target.files;if(i[0].name.lastIndexOf(".")<=0)return alert("Please select a valid file");var r=new FileReader;r.addEventListener("load",function(){t.meetupInfo.imageSrc=r.result}),r.readAsDataURL(i[0]),this.meetupInfo.image=i[0]}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md6:"","offset-sm2":"","offset-md3":""}},[i("h1",{staticClass:"primary--text"},[e._v("Organize Meetup")]),e._v(" "),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{label:"Meetup name",rules:e.descriptionRules,required:""},model:{value:e.meetupInfo.title,callback:function(t){e.$set(e.meetupInfo,"title",t)},expression:"meetupInfo.title"}}),e._v(" "),i("v-text-field",{attrs:{label:"Location",rules:e.locationRules,required:""},model:{value:e.meetupInfo.location,callback:function(t){e.$set(e.meetupInfo,"location",t)},expression:"meetupInfo.location"}}),e._v(" "),i("v-btn",{staticClass:"primary",on:{click:e.onPickFile}},[e._v("\n          Upload image\n        ")]),e._v(" "),i("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}}),e._v(" "),i("img",{staticStyle:{width:"100%"},attrs:{src:e.meetupInfo.imageSrc}}),e._v(" "),i("v-text-field",{attrs:{label:"Description",rules:e.descriptionRules,required:"","multi-line":""},model:{value:e.meetupInfo.description,callback:function(t){e.$set(e.meetupInfo,"description",t)},expression:"meetupInfo.description"}}),e._v(" "),i("v-menu",{attrs:{lazy:"","close-on-content-click":!0,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"}},[i("v-text-field",{attrs:{slot:"activator",label:"Date",rules:e.dateRules,"prepend-icon":"event",readonly:"",required:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),i("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),i("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"}},[i("v-text-field",{attrs:{slot:"activator",label:"Time",rules:e.timeRules,"prepend-icon":"access_time",readonly:"",required:""},slot:"activator",model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),e._v(" "),i("v-time-picker",{attrs:{autosave:"",format:"24hr"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),e._v(" "),i("v-btn",{staticClass:"primary",on:{click:e.createMeetup}},[e._v("\n          Submit\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var m=i("VU/8")(p,v,!1,function(e){i("PCfy")},null,null).exports,f={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-layout",[e.loading?i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[i("v-progress-circular",{attrs:{indeterminate:"",size:70,width:5,color:"primary"}})],1):i("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[i("v-card",[i("v-card-media",{staticClass:"white--text",attrs:{height:"300px",src:e.meetup.imageSrc}}),e._v(" "),i("v-card-title",[i("div",[i("h3",[e._v(e._s(e.meetup.title))]),e._v(" "),i("span",{staticClass:"grey--text"},[e._v(e._s(e._f("dateFilter")(e.meetup.date)))]),i("br"),e._v(" "),e.userIsCreator?[i("app-edit-meetup-date-dialog",{attrs:{meetup:e.meetup}}),e._v(" "),i("app-edit-meetup-time-dialog",{attrs:{meetup:e.meetup}})]:e._e(),e._v(" "),i("br"),e._v(" "),i("span",[e._v(e._s(e.meetup.location))]),i("br"),e._v(" "),i("span",[e._v(e._s(e.meetup.description))])],2)]),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),e.userIsCreator?[i("app-edit-meetup-details-dialog",{attrs:{meetup:e.meetup}})]:e._e(),e._v(" "),e.userIsAuthenticated&&!e.userIsCreator?i("app-meetup-register-dialog",{attrs:{meetupId:e.meetup.id}}):e._e()],2)],1)],1)],1)],1)},staticRenderFns:[]};var h=i("VU/8")(f,g,!1,function(e){i("Vt0e")},null,null).exports,_={render:function(){var e=this.$createElement;return(this._self._c||e)("h1",[this._v("UserProfile")])},staticRenderFns:[]};var b=i("VU/8")({},_,!1,function(e){i("ol6G")},null,null).exports,x={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"white pt-4 pb-4 pl-4 pr-4",attrs:{xs12:"",sm8:"",md6:"","offset-sm2":"","offset-md3":"","elevation-1":""}},[e.error?i("v-alert",{attrs:{color:"error",icon:"error",dismissible:"",value:"true"},on:{input:e.closeAlert}},[e._v("\n          "+e._s(e.error.message)+"\n        ")]):e._e(),e._v(" "),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{label:"E-mail",type:"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),i("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),i("v-btn",{attrs:{loading:e.loading,disabled:e.loading},on:{click:e.onSignin}},[e._v("\n            Login\n          ")])],1)],1)],1)],1)},staticRenderFns:[]};var w=i("VU/8")({data:function(){return{valid:!0,email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(e){null!==e&&"undefined"!==e&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},closeAlert:function(){this.$store.dispatch("clearError")}}},x,!1,function(e){i("ku+B")},null,null).exports,y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"white pt-4 pb-4 pl-4 pr-4",attrs:{xs12:"",sm8:"",md6:"","offset-sm2":"","offset-md3":"","elevation-1":""}},[e.error?i("v-alert",{attrs:{color:"error",icon:"error",dismissible:"",value:"true"},on:{input:e.closeAlert}},[e._v("\n        "+e._s(e.error.message)+"\n      ")]):e._e(),e._v(" "),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{label:"E-mail",type:"email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),i("v-text-field",{attrs:{label:"Password",type:"password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),i("v-text-field",{attrs:{label:"Confirm password",type:"password",rules:[e.confirmPasswordRules],required:""},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),e._v(" "),i("v-btn",{attrs:{loading:e.loading,disabled:e.loading},on:{click:e.onSignup}},[e._v("\n          Register\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var k=i("VU/8")({data:function(){return{valid:!0,email:"",password:"",confirmPassword:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=5||"Password must be greater than 8 characters"}]}},computed:{confirmPasswordRules:function(){return this.password===this.confirmPassword||"Passwords not matching"},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(e){null!==e&&"undefined"!==e&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},closeAlert:function(){this.$store.dispatch("clearError")}}},y,!1,function(e){i("xjQU")},null,null).exports,M=i("NYxO"),I=i("Dd8w"),U=i.n(I),C=i("Sazm"),$={state:{loadedMeetups:[]},mutations:{setLoadedMeetups:function(e,t){e.loadedMeetups=t},createMeetup:function(e,t){e.loadedMeetups.push(t)},updateMeetupData:function(e,t){var i=e.loadedMeetups.find(function(e){return e.id===t.id});t.title&&(i.title=t.title),t.description&&(i.description=t.description),t.date&&(i.date=t.date)}},actions:{loadMeetups:function(e){var t=e.commit;t("setLoading",!0),C.database().ref("meetups").once("value").then(function(e){var i=[],r=e.val();for(var n in r)i.push({id:n,title:r[n].title,location:r[n].location,description:r[n].description,imageSrc:r[n].imageSrc,date:r[n].date,creatorId:r[n].creatorId});t("setLoadedMeetups",i),t("setLoading",!1)}).catch(function(e){t("setLoading",!1),console.log(e)})},createMeetup:function(e,t){var i=e.commit,r=e.getters,n={title:t.title,location:t.location,description:t.description,date:t.date.toISOString(),creatorId:r.user.id},a=void 0,s=void 0;C.database().ref("meetups").push(n).then(function(e){return s=e.key}).then(function(e){var i=t.image.name,r=i.slice(i.lastIndexOf("."));return C.storage().ref("meetups/"+e+"."+r).put(t.image)}).then(function(e){return a=e.metadata.downloadURLs[0],C.database().ref("meetups").child(s).update({imageSrc:a})}).then(function(){i("createMeetup",U()({},n,{imageSrc:a,id:s}))}).catch(function(e){console.log(e)})},updateMeetupData:function(e,t){var i=e.commit;i("setLoading",!0);var r={};t.title&&(r.title=t.title),t.description&&(r.description=t.description),t.date&&(r.date=t.date),C.database().ref("meetups").child(t.id).update(r).then(function(){i("updateMeetupData",t),i("setLoading",!1)}).catch(function(e){console.log(e),i("setLoading",!1)})}},getters:{loadedMeetups:function(e){return e.loadedMeetups.sort(function(e,t){return e.date>t.date})},featuredMeetups:function(e,t){return t.loadedMeetups.slice(0,5)},loadedMeetup:function(e){return function(t){return e.loadedMeetups.find(function(e){return e.id===t})}}}},D=i("uqrR"),S=i.n(D),R={state:{user:null},mutations:{registerUserForMeetup:function(e,t){var i=t.id;if(e.user.registeredMeetups.findIndex(function(e){return e.id===i})>=0)return!1;e.user.registeredMeetups.push(i),e.user.fbKeys[i]=t.fbKey},unregisterUserFromMeetup:function(e,t){var i=e.user.registeredMeetups;i.splice(i.findIndex(function(e){return e.id===t}),1),S()(e.user.fbKeys,t)},setUser:function(e,t){e.user=t}},actions:{registerUserForMeetup:function(e,t){var i=e.commit,r=e.getters;i("setLoading",!0);var n=r.user;C.database().ref("/users/"+n.id).child("/registrations/").push(t).then(function(e){i("setLoading",!1),i("registerUserForMeetup",{id:t,fbKey:e.key})}).catch(function(e){i("setLoading",!1),console.log(e)})},unregisterUserFromMeetup:function(e,t){var i=e.commit,r=e.getters;i("setLoading",!0);var n=r.user;if(!n.fbKeys)return!1;var a=n.fbKeys[t];C.database().ref("/users/"+n.id+"/registrations/").child(a).remove().then(function(){i("setLoading",!1),i("unregisterUserFromMeetup",t)}).catch(function(e){i("setLoading",!1),console.log(e)})},signUserUp:function(e,t){var i=e.commit;i("setLoading",!0),i("clearError"),C.auth().createUserWithEmailAndPassword(t.email,t.password).then(function(e){i("setLoading",!1);var t={id:e.uid,registeredMeetups:[],fbKeys:{}};i("setUser",t)}).catch(function(e){i("setLoading",!1),i("setError",e)})},signUserIn:function(e,t){var i=e.commit;i("setLoading",!0),i("clearError"),C.auth().signInWithEmailAndPassword(t.email,t.password).then(function(e){i("setLoading",!1);var t={id:e.uid,registeredMeetups:[],fbKeys:{}};i("setUser",t)}).catch(function(e){i("setLoading",!1),i("setError",e)})},autoSignIn:function(e,t){var i=e.commit;e.getters;i("setUser",{id:t.uid,registeredMeetups:[],fbKeys:{}})},fetchUserData:function(e){var t=e.commit,i=e.getters;t("setLoading",!0),C.database().ref("/users/"+i.user.id+"/registrations/").once("value").then(function(e){var r=e.val(),n=[],a={};for(var s in r)n.push(r[s]),a[r[s]]=s;var o={id:i.user.id,registeredMeetups:n,fbKeys:a};t("setLoading",!1),t("setUser",o)}).catch(function(e){console.log(e),t("setLoading",!1)})}},getters:{user:function(e){return e.user}}},E={state:{loading:!1,error:null},mutations:{setLoading:function(e,t){e.loading=t},setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{logout:function(e){var t=e.commit;C.auth().signOut(),t("setUser",null)},clearError:function(e){(0,e.commit)("clearError")}},getters:{loading:function(e){return e.loading},error:function(e){return e.error}}};r.a.use(M.a);var L=new M.a.Store({modules:{meetup:$,user:R,shared:E}}),F=function(e,t,i){L.getters.user?i():i("/signin")};r.a.use(o.a);var T=new o.a({routes:[{path:"/",name:"Home",component:u},{path:"/meetups",name:"Meetups",component:d},{path:"/meetup/new",name:"MeetupAdd",component:m,beforeEnter:F},{path:"/meetups/:id",name:"MeetupView",props:!0,component:h},{path:"/profile",name:"UserProfile",component:b,beforeEnter:F},{path:"/signin",name:"UserLogin",component:w},{path:"/signup",name:"UserSignup",component:k}]}),P=i("3EgV"),q=i.n(P),A=(i("7zck"),{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[i("v-icon",{attrs:{left:""}},[e._v("mode_edit")]),e._v("\n    Edit\n  ")],1),e._v(" "),i("v-card",[i("v-card-title",[e._v("\n      Edit Meetup\n    ")]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-text",[i("v-text-field",{attrs:{name:"title",id:"title",label:"Meetup name",required:"",rules:e.titleRules},model:{value:e.editedTitle,callback:function(t){e.editedTitle=t},expression:"editedTitle"}}),e._v(" "),i("v-text-field",{attrs:{name:"description",id:"description",label:"Description","multi-line":"",required:"",rules:e.descriptionRules},model:{value:e.editedDescription,callback:function(t){e.editedDescription=t},expression:"editedDescription"}})],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.dialog=!1}}},[e._v("Close")]),e._v(" "),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.onSaveChanges(t)}}},[e._v("Save")])],1)],1)],1)},staticRenderFns:[]});var V=i("VU/8")({props:["meetup"],data:function(){return{titleRules:[function(e){return!!e||"Name is required"}],descriptionRules:[function(e){return!!e||"Description is required"}],dialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){if(""===this.editedTitle.trim()||""===this.editedDescription.trim())return!1;this.dialog=!1,this.$store.dispatch("updateMeetupData",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription})}}},A,!1,function(e){i("17wW")},null,null).exports,z={props:["meetup"],data:function(){return{dialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var e=new Date(this.meetup.date),t=new Date(this.editableDate).getUTCDate(),i=new Date(this.editableDate).getUTCMonth(),r=new Date(this.editableDate).getUTCFullYear();e.setUTCDate(t),e.setUTCMonth(i),e.setUTCFullYear(r),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:e})}},created:function(){var e=new Date(this.meetup.date),t=e.getUTCDate(),i=e.getUTCMonth()+1,r=e.getUTCFullYear();this.editableDate=r+"-"+i+"-"+t}},K={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{"max-width":"320px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[i("v-icon",{attrs:{left:""}},[e._v("mode_edit")]),e._v("\n    Date\n  ")],1),e._v(" "),i("v-card",[i("v-card-title",[e._v("\n      Edit Date\n    ")]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-text",[i("v-date-picker",{staticStyle:{width:"100%"},attrs:{actions:""},scopedSlots:e._u([{key:"default",fn:function(t){return t.save,t.cancel,[i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.dialog=!1}}},[e._v("Close")]),e._v(" "),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.onSaveChanges(t)}}},[e._v("Save")])]}}]),model:{value:e.editableDate,callback:function(t){e.editableDate=t},expression:"editableDate"}})],1)],1)],1)},staticRenderFns:[]};var O=i("VU/8")(z,K,!1,function(e){i("V0/Z")},null,null).exports,Y={props:["meetup"],data:function(){return{dialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var e=new Date(this.meetup.date),t=this.editableTime.match(/^(\d+)/)[1],i=this.editableTime.match(/:(\d+)/)[1];e.setHours(t),e.setMinutes(i),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:e})}},created:function(){this.editableTime=new Date(this.meetup.date).toTimeString()}},H={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{"max-width":"320px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[i("v-icon",{attrs:{left:""}},[e._v("mode_edit")]),e._v("\n    Time\n  ")],1),e._v(" "),i("v-card",[i("v-card-title",[e._v("\n      Edit Time\n    ")]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-text",[i("v-time-picker",{staticStyle:{width:"100%"},attrs:{actions:"",format:"24hr"},scopedSlots:e._u([{key:"default",fn:function(t){return t.save,t.cancel,[i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.dialog=!1}}},[e._v("Close")]),e._v(" "),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.onSaveChanges(t)}}},[e._v("Save")])]}}]),model:{value:e.editableTime,callback:function(t){e.editableTime=t},expression:"editableTime"}})],1)],1)],1)},staticRenderFns:[]};var N=i("VU/8")(Y,H,!1,function(e){i("K+1U")},null,null).exports,W={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{persistent:"","max-width":"360"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-btn",{staticClass:"secondary",attrs:{slot:"activator"},slot:"activator"},[i("v-icon",{attrs:{left:""}},[e._v("add")]),e._v("\n    "+e._s(e.userIsRegistered?"Unregister":"Register")+"\n  ")],1),e._v(" "),i("v-card",[e.userIsRegistered?i("v-card-title",[e._v("\n      Are you sure to unregister from this meetup?\n    ")]):i("v-card-title",[e._v("\n      Register for meetup?\n    ")]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-text",[e._v("\n      You can always change your descision later on\n    ")]),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.dialog=!1}}},[e._v("Close")]),e._v(" "),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.onAgree(t)}}},[e._v("Save")])],1)],1)],1)},staticRenderFns:[]};var j=i("VU/8")({props:["meetupId"],data:function(){return{dialog:!1}},computed:{userIsRegistered:function(){var e=this;return this.$store.getters.user.registeredMeetups.findIndex(function(t){return t===e.meetupId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}},W,!1,function(e){i("Mlyo")},null,null).exports;r.a.use(q.a,{theme:{primary:"#E64A19",secondary:"#FF5722",accent:"#FF9800",error:"#b71c1c"}}),r.a.filter("dateFilter",function(e){return new Date(e).toLocaleString("en-us",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),r.a.component("app-edit-meetup-details-dialog",V),r.a.component("app-edit-meetup-date-dialog",O),r.a.component("app-edit-meetup-time-dialog",N),r.a.component("app-meetup-register-dialog",j),r.a.config.productionTip=!1,new r.a({el:"#app",router:T,store:L,render:function(e){return e(s)},created:function(){var e=this;C.initializeApp({apiKey:"AIzaSyAdafitIAN_ptq5UoKT9v0Iu_5UT-dG5C0",authDomain:"meetup-webapp.firebaseapp.com",databaseURL:"https://meetup-webapp.firebaseio.com",projectId:"meetup-webapp",storageBucket:"meetup-webapp.appspot.com"}),C.auth().onAuthStateChanged(function(t){t&&(e.$store.dispatch("autoSignIn",t),e.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},PCfy:function(e,t){},"V0/Z":function(e,t){},Vt0e:function(e,t){},ZTop:function(e,t){},"ku+B":function(e,t){},ol6G:function(e,t){},w0YE:function(e,t){},xjQU:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a6789b00cf5729a5057e.js.map