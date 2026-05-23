(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    7796, 21443, 28492, 88788
  ], {
    31262:(e, t, r)=>{
      r.d(t, {
        A:()=>o
      });
      var i=r(595738);
      const n=(0, i.pM)({
        name:"SubjectControlTimeSelect", props:{
          isTimed:{
            type:Boolean, default:!1
          }, time:{
            type:String, default:""
          }, error:{
            type:Array, default:()=>[
            ]
          }
        }, setup(e){
          var t=(0, i.KR)(e.isTimed), r=(0, i.KR)(e.time), n="zh-CN"===document.documentElement.getAttribute("lang")?"zh-CN":"en-US", o=(0, i.EW)((()=>e.isTimed&&e.error&&e.error.length>0&&!r.value)), s=()=>{
            var e=new CustomEvent("subject-control-time-change", {
              detail:{
                isTimed:t.value, time:r.value
              }
            });
            window.dispatchEvent(e)
          };
          return(0, i.wB)((()=>e.isTimed), (e=>{
            t.value=e
          })), (0, i.wB)((()=>e.time), (e=>{
            r.value=e
          })), {
            isTimeLimited:t, selectedTime:r, hasError:o, handleTimerChange:e=>{
              t.value=e, t.value||(r.value=""), s()
            }, handleTimeChange:e=>{
              r.value=e, s()
            }, lang:n
          }
        }
      });
      const o=(0, r(514486).A)(n, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"time-option"
        }, [
          r("div", {
            staticClass:"option"
          }, [
            r("label", {
              staticClass:"radio-option"
            }, [
              r("input", {
                attrs:{
                  type:"radio", name:"timer"
                }, domProps:{
                  checked:!e.isTimeLimited
                }, on:{
                  change:function(t){
                    return e.handleTimerChange(!1)
                  }
                }
              }), e._v(" "), r("span", {
                staticClass:"label-text"
              }, [
                e._v(e._s(e.$t("untimed")))
              ])
            ]), e._v(" "), r("div", {
              staticClass:"radio-option", class:{
                "has-error":e.hasError
              }
            }, [
              r("label", [
                r("input", {
                  attrs:{
                    type:"radio", name:"timer"
                  }, domProps:{
                    checked:e.isTimeLimited
                  }, on:{
                    change:function(t){
                      return e.handleTimerChange(!0)
                    }
                  }
                }), e._v(" "), r("span", {
                  staticClass:"label-text"
                }, [
                  e._v(e._s(e.$t("timed")))
                ])
              ]), e._v(" "), r("div", {
                staticClass:"time-picker-wrapper", on:{
                  click:function(e){
                    e.stopPropagation()
                  }
                }
              }, [
                e.isTimed?r("TimePicker", {
                  staticClass:"time-picker", attrs:{
                    confirm:"", placeholder:e.$t("select_date"), disabled:!e.isTimeLimited, value:e.selectedTime
                  }, on:{
                    "on-change":e.handleTimeChange
                  }
                }):e._e()
              ], 1)
            ])
          ]), e._v(" "), e.hasError?r("div", {
            staticClass:"error-message", class:{
              en:"en-US"===e.lang
            }
          }, [
            e._v(e._s(e.error[
              0
            ]))
          ]):e._e()
        ])
      }), [
      ], !1, null, "24eafc99", null).exports
    }, 61004:(e, t, r)=>{
      r(418665), r(700533), r(14602), r(294132);
      var i=r(924659).createAirChatbotScript, n=r(86886).chatbotShims;
      e.exports=[
        "$scope", e=>{
          var t;
          window.airChatbotConfig={
            launchEnv:"inPage"
          }, i(), t=document.querySelector("air-chatbot-app"), n(t), e.back=()=>{
            window.location.href="/course/".concat(e.course.id, "/content")
          }, e.showAirPanel=!1, e.$watch("player", (t=>{
            var r, i;
            t&&(null!==(r=t.props)&&void 0!==r&&r.plugins.caption||null!==(i=t.props)&&void 0!==i&&i.plugins.chapter)&&(e.showAirPanel=!0)
          }));
          var r=t=>{
            var i=e.course.modules.reduce(((e, t)=>[
              ...e, ...t.activities
            ]), [
            ]).filter((e=>"online_video"===e.type&&e.uploads.length)), n=i.findIndex((e=>e.id===t.id)), o=i[
              n-1
            ], s=i[
              n+1
            ];
            o&&!e.canOpenActivity(o, !1)&&(o=r(o).preOnlineVideo);
            s&&!e.canOpenActivity(s, !1)&&(s=r(s).nextOnlineVideo);
            return{
              preOnlineVideo:o, nextOnlineVideo:s
            }
          }, o=r({
            id:e.onlineVideoId
          }), s=o.preOnlineVideo, a=o.nextOnlineVideo;
          e.prev=s, e.next=a, e.change=t=>{
            window.location.href="/course/".concat(e.course.id, "/online-videos/").concat(t.id)
          }
        }
      ]
    }, 65418:(e, t, r)=>{
      var i=r(302543), n=r(793110);
      function o(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return s(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var i=0, n=function(){
            };
            return{
              s:n, n:function(){
                return i>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    i++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:n
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a=!0, c=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return a=e.done, e
          }, e:function(e){
            c=!0, o=e
          }, f:function(){
            try{
              a||null==r.return||r.return()
            }
            finally{
              if(c)throw o
            }
          }
        }
      }
      function s(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      r(700533), r(334867), e.exports=[
        "$scope", "$http", function(e, t){
          e.currentGroup={
            users:[
            ], usersCount:0, currentUserIndex:0, currentUser:void 0
          }, e.changeGroupUserNavigation=function(t){
            if(null!=t){
              e.currentGroup.currentUserIndex=parseInt(t), e.currentGroup.currentUser=e.currentGroup.users[
                t
              ].student, e.givenScores=i.filter(e.intraScores, (t=>t.reviewer_id===e.currentGroup.currentUser.id&&t.score));
              var r=i.filter(e.givenScores, (e=>e.score));
              if(i.size(r)>0){
                var o=i.reduce(r, ((e, t)=>e.plus(new n(t.score))), new n(0));
                return e.currentGroup.currentUser.outAverageScore=parseFloat(o/i.size(r)).toFixed(1)
              }
            }
          }, e.getGivenScoreTo=function(t){
            var r=i.find(e.givenScores, {
              submitter_id:t
            });
            if(null!=r)return r.score
          }, e.getGivenRubricConditionScoreTo=function(t, r){
            var n=i.find(e.givenScores, {
              submitter_id:t
            });
            if(n&&n.rubric_score){
              var o=i.find(n.rubric_score, {
                name:r
              });
              if(null!=o)return o.score
            }
          }, e.getGivenCommentTo=function(t){
            var r=i.find(e.givenScores, {
              submitter_id:t
            });
            if(null!=r)return r.comment
          }, e.getGivenTime=function(t){
            var r=i.find(e.givenScores, {
              submitter_id:t
            });
            return r?r.updated_at||r.created_at:""
          };
          e.$watch("navigation.currentItem", (function(e, t){
            if(e!==t&&!i.isNull(e))return r()
          }));
          var r=function(){
            var r, n;
            if(e.currentGroup.users=e.navigation.currentItem.students, e.currentGroup.usersCount=e.navigation.currentItem.students.length, 0!==e.currentGroup.usersCount)return(()=>{
              var t, r=[
              ], n=o(e.currentGroup.users);
              try{
                for(n.s();
                !(t=n.n()).done;
                ){
                  var s=t.value;
                  if(s.student){
                    var a, c, u, l=i.filter([
                      null===(a=s.student.department)||void 0===a?void 0:a.name, null===(c=s.student.klass)||void 0===c?void 0:c.name, null===(u=s.student.grade)||void 0===u?void 0:u.name
                    ]);
                    s.student.info=l.join(""), s.student.infoTips=l.join("\n"), r.push(s.user_no=s.student.user_no)
                  }
                  else r.push(void 0)
                }
              }
              catch(e){
                n.e(e)
              }
              finally{
                n.f()
              }
            })(), r=e.navigation.homework.id, n=e.navigation.currentItem.group.id, t.get("/api/activities/".concat(r, "/group/").concat(n, "/intra_submission")).success((function(t){
              return e.intraScores=t.list, e.changeGroupUserNavigation(0)
            })).error((function(){
            }))
          };
          return r()
        }
      ]
    }, 69287:(e, t, r)=>{
      var i=r(302543);
      e.exports=[
        "Navigation", function(e){
          return class{
            constructor(e, t, r){
              var i=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :"review_group_id";
              this.students=t, this.groups=r, this.groupByAttr=i, this.studentInterScores=e, this.interScoreMap=this.groupInterScores(e), this.vmGroups=this.initVMGroups();
              var n=this.vmGroups[
                0
              ];
              n?(this.vmSelectedGroupId=n.id, this.changeGroup(this.vmSelectedGroupId)):this.deleteMembersNav()
            }
            deleteMembersNav(){
              return delete this.groupMembersNav
            }
            changeMember(){
              var e, t, r=arguments.length>0&&void 0!==arguments[
                0
              ]
              ?arguments[
                0
              ]
              :0;
              if(this.groupMembersNav.changeNavigationData(r), this.students)return this.groupMembersNav.currentItem.student=(e=this.groupMembersNav.currentItem.reviewer_id, t=this.students, i.find(t, (t=>t.id===e)))
            }
            changeGroup(t){
              return this.groupMembersNav=new e(this.interScoreMap[
                i.parseInt(t)
              ]), this.groupMembersNav.setNavigationData(), this.changeMember(0)
            }
            initVMGroups(){
              return i.map(this.interScoreMap, ((e, t)=>{
                if(!this.groups)return{
                  id:t, name:e[
                    0
                  ].reviewer_name
                };
                var r=i.find(this.groups, (e=>e.id===i.parseInt(t)));
                return{
                  id:t, name:r.name
                }
              }))
            }
            groupInterScores(e){
              return i.groupBy(e, (e=>e[
                this.groupByAttr
              ]))
            }
          }
        }
      ]
    }, 71819:(e, t, r)=>{
      e.exports=r.p+"assets/audio/8d3d29385987dca9aa1c.mp3"
    }, 80623:(e, t, r)=>{
      var i=r(756029), n=r(302543);
      r(219693), e.exports=function(){
        return class{
          constructor(e, t){
            this.navItems=e, this.homework=t, this.navIndices={
              last:-1, current:-1
            }, this.currentItem=null, this.previousItem=null, this.nextItem=null, this.submissions=this.navItems
          }
          setNavigationData(){
            var e=arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :0;
            return this.navIndices.last=e, this.navIndices.current=e, this.currentItem=i.copy(this.navItems[
              e
            ]), this.nextItem=this.navItems[
              e+1
            ], this.previousItem=this.navItems[
              e-1
            ]
          }
          setNavigationItem(e){
            var t=e?n.indexOf(this.navItems, e):0;
            return this.setNavigationData(t)
          }
          changeNavigationData(e){
            return e=parseInt(e), this.loadLatestItem?this.loadLatestItem(this.navItems[
              e
            ]).then((()=>this.setNavigationData(e))):this.setNavigationData(e)
          }
          goNext(){
            return this.changeNavigationData(this.navIndices.current+1)
          }
          goPrevious(){
            return this.changeNavigationData(this.navIndices.current-1)
          }
          setLoadLatestItem(e){
            return this.loadLatestItem=e
          }
        }
      }
    }, 81343:(e, t, r)=>{
      var i=r(302543), n=r(248124);
      function o(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return s(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var i=0, n=function(){
            };
            return{
              s:n, n:function(){
                return i>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    i++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:n
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a=!0, c=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return a=e.done, e
          }, e:function(e){
            c=!0, o=e
          }, f:function(){
            try{
              a||null==r.return||r.return()
            }
            finally{
              if(c)throw o
            }
          }
        }
      }
      function s(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      r(219693), r(418665), r(990345), r(43148), r(14602);
      var a=r(784582), c=a.homeworkBasics, u=a.personalHomeworkDetails, l=a.groupedHomeworkDetails, d=a.calStartTimeByRule, m=a.calEndTimeByRule, p=r(921443), v="-reallocate";
      e.exports=[
        "$rootScope", "$scope", "$window", "rubricRepository", "activityRepository", "modelHelper", (e, t, r, s, a, f)=>{
          t.ui={
            hiddenScoreRuleSectionTitle:!0, hiddenSelectGroup:!0, disabledChangeMode:!0, hasNoGroup:null, isInterReviewStarted:!1, isIntraReviewStarted:!1
          };
          var h=!1, b=p(t, t.course, a, f, r);
          t.$watch("groupSets", (e=>{
            null!=e&&e.length&&e[
              0
            ].group_count?t.ui.hasNoGroup=!1:t.ui.hasNoGroup=!0
          })), t.canEditSelectedRubric=e=>f.canEditSelectedRubric(t, e.rubric_id), t.rubricChanged=()=>{
            0!==t.homeworkDetails.rubric_id&&(t.homeworkDetails.review_by_inter||t.homeworkDetails.review_by_interGroup)&&(t.homeworkDetails.show_rubric=!0, t.homeworkDetails.rubric_visible_type=t.homeworkDetails.rubric_visible_type?t.homeworkDetails.rubric_visible_type:1), t.homework=t.homeworkDetails, -1===t.homework.rubric_id?e.$broadcast("openRubricPopup", -1, "add"):t.homework.rubric=i.find(t.rubrics, {
              id:parseInt(t.homework.rubric_id, 10)
            })
          }, t.editRubric=()=>(t.homework=t.homeworkDetails, e.$broadcast("openRubricPopup", t.homework.rubric_id, "edit")), t.canEditSelectedIntraRubric=e=>f.canEditSelectedRubric(t, e.intra_rubric_id), t.intraRubricChanged=()=>{
            0!==t.homeworkDetails.intra_rubric_id&&t.homeworkDetails.review_by_intraGroup&&(t.homeworkDetails.show_intra_rubric=!0, t.homeworkDetails.intra_rubric_visible_type=t.homeworkDetails.intra_rubric_visible_type?t.homeworkDetails.intra_rubric_visible_type:2), t.homework=t.homeworkDetails, -1===t.homework.intra_rubric_id?e.$broadcast("openRubricPopup", -1, "addIntra"):t.homework.intra_rubric=i.find(t.rubrics, {
              id:parseInt(t.homework.intra_rubric_id, 10)
            })
          }, t.editIntraRubric=()=>(t.homework=t.homeworkDetails, e.$broadcast("openRubricPopup", t.homework.intra_rubric_id, "edit"));
          var y=e=>{
            var r=i.keys(t.errors);
            return i.remove(r, (t=>-1!==t.indexOf(e))), t.errors=i.pick(t.errors, r)
          };
          t.enableChangeToInterReview=()=>!0, t.unSelectedReviewTypeError=()=>t.errors&&(t.errors.review_by_instructor||t.errors.review_by_inter||t.errors.review_by_interGroup||t.errors.review_by_interGroup), t.updateInterAncIntraScoreTime=()=>{
            h||(t.homeworkDetails.inter_score_start_time=d(t), t.homeworkDetails.inter_score_end_time=m(t), t.homeworkDetails.intra_score_start_time=d(t), t.homeworkDetails.intra_score_end_time=m(t))
          };
          var _=e=>{
            var t={
              assign_target_type:"user", assign_target_scope:"all", assign_student_ids:[
              ], group_set_id:null, assign_group_ids:[
              ], submit_by_group:!1, has_assign_target:!0
            };
            return e&&e.id?(t.submit_by_group=e.submit_by_group, t.assign_student_ids=e.assign_student_ids?e.assign_student_ids:[
            ], t.group_set_id=e.group_set_id?e.group_set_id:null, t.assign_group_ids=e.assign_group_ids?e.assign_group_ids:[
            ], e.submit_by_group&&t.group_set_id?(t.assign_target_type="group", t.assign_target_scope=t.assign_group_ids.length>0?"part":"all"):(t.assign_target_type="user", t.assign_target_scope=t.assign_student_ids.length>0?"part":"all"), t):t
          };
          t.changeReviewRule=e=>{
            t.homeworkDetails[
              e
            ]
            ?(y("review_by"), [
              "review_by_instructor", "review_by_inter", "review_by_interGroup"
            ].includes(e)&&(t.homeworkDetails.show_rubric=!0, t.homeworkDetails.rubric_visible_type||(t.homeworkDetails.rubric_visible_type=3)), [
              "review_by_instructor", "review_by_inter", "review_by_intraGroup"
            ].includes(e)&&(t.homeworkDetails.show_intra_rubric=!0, t.homeworkDetails.rubric_visible_type||(t.homeworkDetails.rubric_visible_type=3)), ![
              "review_by_inter", "review_by_interGroup"
            ].includes(e)||t.homeworkDetails.inter_score_start_time||h||(t.homeworkDetails.inter_score_start_time=d(t), t.homeworkDetails.inter_score_end_time=m(t)), "review_by_intraGroup"!==e||h||(t.homeworkDetails.intra_score_start_time=d(t), t.homeworkDetails.intra_score_end_time=m(t)), (e=>{
              if("review_by_instructor"===e&&(t.homeworkDetails.instructor_score_percentage=0), "review_by_inter"===e&&(t.homeworkDetails.inter_score_percentage=0), "review_by_interGroup"===e&&(t.homeworkDetails.inter_group_score_percentage=0), "review_by_intraGroup"===e)t.homeworkDetails.intra_group_score_percentage=0
            })(e)):([
              "review_by_inter", "review_by_interGroup"
            ].includes(e)&&2===t.homeworkDetails.rubric_visible_type&&(t.homeworkDetails.rubric_visible_type=3, t.homeworkDetails.rubric_visible_time=null), "review_by_intraGroup"===e&&(t.homeworkDetails.intra_rubric_id=0, t.homeworkDetails.show_intra_rubric=!1, t.homeworkDetails.intra_rubric_visible_type=null, t.homeworkDetails.intra_rubric_visible_time=null), (e=>{
              "review_by_instructor"===e?(y("instructor"), t.homeworkDetails.instructor_score_percentage=null):"review_by_intraGroup"===e?(y("intra"), t.homeworkDetails.intra_group_score_percentage=null):("review_by_inter"===e?t.homeworkDetails.inter_score_percentage=null:t.homeworkDetails.inter_group_score_percentage=null, y("inter"), delete t.errors.pieces_cnt, delete t.errors.rubric_id)
            })(e))
          };
          var g=e=>e&&"differentiated"===e.teaching_mode;
          t.$on("openReallocatePopup", (()=>{
            t.ui.submit_by_group=t.activity.submit_by_group, t.ui.hasNoGroup=null, h=!1, b.bindActivityForEdit(t.activity), t.activity.submit_by_group?t.homeworkDetails=l(t.activity, t, e):t.homeworkDetails=u(t.activity, e), t.homeworkBasics=c(t.activity), g(t.course)&&(t.differentiatedData=_(t.activity), t.vueParam={
              differentiatedFormLoaded:!1, courseId:null, targetType:t.differentiatedData.assign_target_type, targetScope:t.differentiatedData.assign_target_scope, assignStudentIds:t.differentiatedData.assign_student_ids, groupSetId:t.differentiatedData.group_set_id, groupIds:t.differentiatedData.assign_group_ids, interReviewStarted:!1, errors:{
              }, disableSelectScope:!1, homeworkMode:"normal", isReallocation:!1
            }, t.vueMethods={
              assignmentTargetChanged:e=>{
                t.differentiatedData.assign_target_type=e.targetType, t.differentiatedData.assign_target_scope=e.scope, t.differentiatedData.assign_student_ids=e.selectedStudentIds, t.differentiatedData.group_set_id=e.groupSetId, t.differentiatedData.assign_group_ids=e.groupIds;
                var r="group"===e.targetType;
                r!==t.differentiatedData.submit_by_group&&(n("#differentiated-choose-".concat(e.targetType)).click(), t.differentiatedData.submit_by_group=r);
                var i=n("#checkbox-review-by-".concat(e.targetType).concat(v)), o=n("#checkbox-review-by-intra-group".concat(v));
                if("part"===e.scope)i.is(":checked")&&i.click(), i.attr("disabled", !0), o&&(o.is(":checked")&&o.click(), o.attr("disabled", !0));
                else{
                  var s=!!(t.ui.isInterReviewStarted||t.ui.isIntraReviewStarted||t.ui.hasNoGroup);
                  i.attr("disabled", s), o&&o.attr("disabled", s)
                }
              }
            }, t.differentiatedData=_(t.activity), t.vueParam.courseId=t.$parent.course.id, t.vueParam.interReviewStarted=t.ui.isInterReviewStarted||t.ui.isIntraReviewStarted, t.vueParam.disableSelectScope=t.$parent.course&&"checkpoint"===t.$parent.course.learning_mode, t.vueParam.targetType=t.differentiatedData.assign_target_type, t.vueParam.targetScope=t.differentiatedData.assign_target_scope, t.vueParam.assignStudentIds=t.differentiatedData.assign_student_ids, t.vueParam.groupSetId=t.differentiatedData.group_set_id, t.vueParam.groupIds=t.differentiatedData.assign_group_ids, t.vueParam.differentiatedFormLoaded=!0, t.vueParam.isReallocation=!0), s.initRubrics().then((e=>t.rubrics=e))
          })), t.$watch("errors", (()=>{
            t.vueParam&&(g(t.$parent.course)&&(t.vueParam.errors=t.errors), t.errors&&t.errors.multiple_choice&&(t.multipleChoiceTitleDuplicateError=Object.values(t.errors.multiple_choice).includes("exam paper title duplicate")))
          })), t.save=()=>{
            0===t.homeworkDetails.rubric_id?(t.homeworkDetails.show_rubric=!1, t.homeworkDetails.rubric_visible_type=null, t.homeworkDetails.rubric_visible_time=null):t.homeworkDetails.show_rubric&&3!==t.homeworkDetails.rubric_visible_type&&(t.homeworkDetails.rubric_visible_time=null), 0===t.homeworkDetails.intra_rubric_id?(t.homeworkDetails.show_intra_rubric=!1, t.homeworkDetails.intra_rubric_visible_type=null, t.homeworkDetails.intra_rubric_visible_time=null):t.homeworkDetails.show_intra_rubric&&3!==t.homeworkDetails.intra_rubric_visible_type&&(t.homeworkDetails.intra_rubric_visible_time=null);
            var e=i.merge({
            }, t.homeworkBasics, t.homeworkDetails);
            g(t.course)&&t.differentiatedData&&(e=i.merge({
            }, e, t.differentiatedData)), (e=>{
              e.uploads=[
              ], e.other_resources=[
              ];
              var r, i=[
              ], n=o(t.homeworkBasics.uploads);
              try{
                for(n.s();
                !(r=n.n()).done;
                ){
                  var s=r.value;
                  f.uploadIsWebResource(s)?i.push(e.uploads.push(s.id)):s.source?(s.allow_download=!0, i.push(e.other_resources.push(s))):i.push(e.uploads.push(s.id))
                }
              }
              catch(e){
                n.e(e)
              }
              finally{
                n.f()
              }
            })(e), (e=>{
              e.uploads&&e.uploads.length>0&&(e.upload_references=i.filter(t.uploads.map((e=>({
                upload_id:e.id, allow_download:e.allow_download, cc_license_name:e.cc_license_name, reference_id:e.reference_id
              }))), "upload_id"))
            })(e), "normal"===e.mode&&delete e.multiple_choice, t.homeworkBasics.non_submit_times&&(e.submit_times=null), e.is_reallocate=!0, b.saveActivity(e).then((()=>{
              r.location.reload()
            }))
          }
        }
      ]
    }, 82240:(e, t, r)=>{
      r.d(t, {
        A:()=>S
      });
      r(418665), r(700533), r(335231), r(168763), r(445708), r(43148), r(158649), r(658379), r(14602);
      var i=r(592207), n=r.n(i), o=(r(207452), r(731904)), s=r(218831), a=r(539963), c=r(374302), u=r(966491);
      function l(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function d(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function s(e){
              l(o, i, n, s, a, "next", e)
            }
            function a(e){
              l(o, i, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      function m(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], i=!0, n=!1, o=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(i=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            i=!0);
          }
          catch(e){
            n=!0, o=e
          }
          finally{
            try{
              i||null==a.return||a.return()
            }
            finally{
              if(n)throw o
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return p(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function p(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      function v(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var i=Object.getOwnPropertySymbols(e);
          t&&(i=i.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }
      function f(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?v(Object(r), !0).forEach((function(t){
            h(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function h(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      var b=r(3449).v4, y=(e, t)=>{
        var r=-1;
        return(r=e.submitByGroup?e.submissionsOfHomework.findIndex((e=>e.group.id===t.currentMemberId)):e.submissionsOfHomework.findIndex((e=>e.student.id===t.currentMemberId)))<0?[
        ]
        :[
          o._.cloneDeep(e.submissionsOfHomework[
            r
          ]), r
        ]
      }, _=()=>({
        homework:{
        }, currentMarkStatus:"all", currentAttachUploads:[
        ], currentAttachUploadId:null, currentSubmissionId:0, currentMemberId:0, memberSubmissionsLoading:!1, submissionUploadsLoading:!1, currentSubmitStatuses:[
        ], unmarkedMemberIds:new Set, currentSubmissions:[
        ], isSkipUnmarkedPopup:!1
      }), g={
        setHomework(e, t){
          e.homework=t
        }, setMembers(e, t){
          e.members=t
        }, setUnmarkedMemberIds(e, t){
          e.unmarkedMemberIds=t
        }, setMemberMarked(e, t){
          var r=e.members.findIndex((e=>e.id===t));
          r<0||(e.members[
            r
          ].markStatus="marked")
        }, setCurrentMarkStatus(e, t){
          e.currentMarkStatus=t
        }, setCurrentSubmitStatuses(e, t){
          e.currentSubmitStatuses=t
        }, setCurrentMemberId(e, t){
          e.currentMemberId=t
        }, setCurrentAttachUploads(e, t){
          t=t.sort(((e, t)=>e.deleted-t.deleted)), e.currentAttachUploads=t
        }, setSomeoneAttachUpload(e, t){
          var r=e.currentAttachUploads.findIndex((e=>e.id===t.id));
          r<0||e.currentAttachUploads.splice(r, 1, t)
        }, setCurrentAttachUploadId(e, t){
          e.currentAttachUploadId=t
        }, setCurrentSubmissionId(e, t){
          e.currentSubmissionId=t
        }, setCurrentSubmissions(e, t){
          e.currentSubmissions=t
        }, setMemberSubmissionsLoading(e, t){
          e.memberSubmissionsLoading=t
        }, setSubmissionUploadsLoading(e, t){
          e.submissionUploadsLoading=t
        }, updateCurrentSubmission(e, t){
          var r=t.submission, i=t.getters;
          if(r.id===e.currentSubmissionId){
            var n=e.currentSubmissions.findIndex((e=>e.id===r.id));
            n<0||e.currentSubmissions.splice(n, 1, f(f({
            }, i.currentSubmission), r))
          }
        }, updateHomeworkAnnounceMarkStatus(e, t){
          e.homework.data.is_announce_mark=t.isAnnounceMark, e.homework.data.announce_score_type=t.announceScoreType, e.homework.data.announce_score_time=t.announceScoreTime
        }, updateMemberMarkStatus(e, t){
          var r=t.submission, i=t.getters;
          if(i.submissionsOfHomework){
            var n=-1;
            if(!((n=i.submitByGroup?i.submissionsOfHomework.findIndex((t=>t.group.id===e.currentMemberId)):i.submissionsOfHomework.findIndex((t=>t.student.id===e.currentMemberId)))<0)){
              var s="unmarked", c=o._.cloneDeep(i.submissionsOfHomework[
                n
              ]);
              (o._.isEmpty(c.submission)||i.currentSubmission.is_latest_version)&&(s=(0, a.vB)(r)), i.submitByGroup?c.group.mark=s:c.student.mark=s, e.homework=o._.tap(o._.cloneDeep(e.homework), (e=>e.submissions.splice(n, 1, c)))
            }
          }
        }, updateMemberStatus(e, t){
          var r=t.getters, i=t.status;
          if(r.submissionsOfHomework){
            var n=m(y(r, e), 2), s=n[
              0
            ], a=n[
              1
            ];
            s&&(r.submitByGroup?s.group.status=i:s.student.status=i, e.homework=o._.tap(o._.cloneDeep(e.homework), (e=>e.submissions.splice(a, 1, s))))
          }
        }, updateSubmissionRecommend(e, t){
          var r=t.getters, i=t.status;
          if(r.submissionsOfHomework){
            var n=m(y(r, e), 2), s=n[
              0
            ], a=n[
              1
            ];
            s&&(s.submission.recommend=i, e.homework=o._.tap(o._.cloneDeep(e.homework), (e=>e.submissions.splice(a, 1, s))))
          }
        }, updateSubmissionOfHomework(e, t){
          var r, i=t.getters, n=t.submission;
          if(i.submissionsOfHomework){
            var s=m(y(i, e), 2), a=s[
              0
            ], c=s[
              1
            ];
            if(a){
              if(a.submission=f(f({
              }, null!==(r=a.submission)&&void 0!==r?r:{
              }), n), i.submitByGroup&&n.students){
                var u=n.students.reduce(((e, t)=>f(f({
                }, e), {
                }, {
                  [
                    t.id
                  ]
                  :t
                })), {
                });
                a.students=a.students.map((e=>{
                  var t, r, i;
                  return{
                    student:f({
                    }, e), final_score:f(f({
                    }, null!==(t=e.final_score)&&void 0!==t?t:{
                    }), null!==(r=u[
                      null===(i=e.student)||void 0===i?void 0:i.id
                    ])&&void 0!==r?r:{
                    })
                  }
                }))
              }
              e.homework=o._.tap(o._.cloneDeep(e.homework), (e=>e.submissions.splice(c, 1, a)))
            }
          }
        }, setSkipUnmarkedPopupStatus(e, t){
          e.isSkipUnmarkedPopup=t
        }, resetState(e){
          var t=_();
          Object.keys(t).forEach((r=>{
            e[
              r
            ]
            =t[
              r
            ]
          }))
        }
      }, w={
        setHomework(e, t){
          (0, e.commit)("setHomework", t)
        }, setMembers(e, t){
          (0, e.commit)("setMembers", t)
        }, setMemberMarked(e, t){
          (0, e.commit)("setMemberMarked", t)
        }, setCurrentSubmitStatuses(e, t){
          var r=e.state, i=e.commit, n=e.getters, o=e.dispatch;
          if(i("setCurrentSubmitStatuses", t.statuses), 0!==n.filteredMembers.length){
            var s=n.filteredMembers.find((e=>e.id===r.currentMemberId));
            o("setCurrentMemberId", s?s.id:n.filteredMembers[
              0
            ].id)
          }
          else o("setCurrentMemberId", 0)
        }, setCurrentMarkStatus:(e, t)=>d(n().mark((function r(){
          var i, o, s, a;
          return n().wrap((function(r){
            for(;
            ;
            )switch(r.prev=r.next){
              case 0:if(i=e.state, o=e.dispatch, s=e.commit, a=e.getters, s("setCurrentMarkStatus", t), 0!==a.filteredMembers.length){
                r.next=6;
                break
              }
              return r.next=5, o("setCurrentMemberId", 0);
              case 5:return r.abrupt("return");
              case 6:if(!(a.filteredMembers.findIndex((e=>e.id===i.currentMemberId))<0)){
                r.next=10;
                break
              }
              return r.next=10, o("setCurrentMemberId", a.filteredMembers[
                0
              ].id);
              case 10:case"end":return r.stop()
            }
          }), r)
        })))(), setCurrentMemberId:(e, t)=>d(n().mark((function r(){
          var i, o, s, a;
          return n().wrap((function(r){
            for(;
            ;
            )switch(r.prev=r.next){
              case 0:if(i=e.dispatch, o=e.commit, s=e.getters, o("setMemberSubmissionsLoading", !0), o("setCurrentMemberId", t), o("setUnmarkedMemberIds", s.realUnmarkedMemberIds), t){
                r.next=10;
                break
              }
              return o("setCurrentSubmissions", [
              ]), r.next=8, i("setCurrentSubmissionId", 0);
              case 8:return o("setMemberSubmissionsLoading", !1), r.abrupt("return");
              case 10:if(!s.submitByGroup){
                r.next=16;
                break
              }
              return r.next=13, (0, c.getGroupSubmissions)(s.homeworkId, t);
              case 13:a=r.sent, r.next=19;
              break;
              case 16:return r.next=18, (0, c.getStudentSubmissions)(s.homeworkId, t);
              case 18:a=r.sent;
              case 19:if(o("setCurrentSubmissions", a.data.list), !(s.submissionsOfCurrentMember.length>0)){
                r.next=25;
                break
              }
              return r.next=23, i("setCurrentSubmissionId", s.submissionsOfCurrentMember[
                0
              ].id);
              case 23:r.next=32;
              break;
              case 25:if(!s.submissionSubmitByInstructor){
                r.next=30;
                break
              }
              return r.next=28, i("setCurrentSubmissionId", s.submissionSubmitByInstructor.id);
              case 28:r.next=32;
              break;
              case 30:return r.next=32, i("setCurrentSubmissionId", 0);
              case 32:o("setMemberSubmissionsLoading", !1);
              case 33:case"end":return r.stop()
            }
          }), r)
        })))(), setCurrentAttachUploads(e, t){
          var r=e.commit, i=e.getters;
          r("setCurrentAttachUploads", [
            ...t, ...o._.map(i.currentSubmission.other_resources||[
            ], (e=>(e.id=b(), e.isSupportMark=!1, e)))
          ])
        }, setSomeoneAttachUpload(e, t){
          (0, e.commit)("setSomeoneAttachUpload", t)
        }, setCurrentAttachUploadId(e, t){
          (0, e.commit)("setCurrentAttachUploadId", t)
        }, setCurrentSubmissionId:(e, t)=>d(n().mark((function r(){
          var i, s, a, l, d, p, v, h, b;
          return n().wrap((function(r){
            for(;
            ;
            )switch(r.prev=r.next){
              case 0:if(i=e.dispatch, s=e.commit, e.getters, s("setSubmissionUploadsLoading", !0), s("setCurrentSubmissionId", t), t){
                r.next=8;
                break
              }
              return i("setCurrentAttachUploadId", 0), i("setCurrentAttachUploads", [
              ]), s("setSubmissionUploadsLoading", !1), r.abrupt("return");
              case 8:return r.next=10, (0, c.getSubmissionAttachements)(t);
              case 10:a=r.sent, l=o._.map(a.data.marked_attachment_infos, (e=>{
                var t=e.origin_upload.upload;
                return(t=f(f({
                }, t), e.origin_upload)).isSupportMark=u.canEditByPdfEditor(t), t.isMarked=!o._.isEmpty(e.marked_attachment), t.marked_attachment=e.marked_attachment, t
              })), (d=o._.find(l, (e=>"auto-generated-pdf"===e.source)))&&(p=d.name.split("."), v=m(p, 1), h=v[
                0
              ], d.name=h), b=l.sort(((e, t)=>e.deleted-t.deleted)), i("setCurrentAttachUploads", b), o._.isEmpty(b)||b[
                0
              ].deleted?s("setCurrentAttachUploadId", 0):s("setCurrentAttachUploadId", b[
                0
              ].id), s("setSubmissionUploadsLoading", !1);
              case 18:case"end":return r.stop()
            }
          }), r)
        })))(), setCurrentSubmissions(e, t){
          (0, e.commit)("setCurrentSubmissions", t)
        }, updateCurrentSubmission(e, t){
          var r=e.commit, i=e.getters, n=t.submission;
          r("updateCurrentSubmission", {
            submission:n, getters:i
          }), r("updateMemberMarkStatus", {
            submission:n, getters:i
          }), r("updateSubmissionOfHomework", {
            submission:n, getters:i
          })
        }, updateHomeworkAnnounceMarkStatus(e, t){
          (0, e.commit)("updateHomeworkAnnounceMarkStatus", t)
        }, updateMemberStatus(e, t){
          (0, e.commit)("updateMemberStatus", {
            getters:e.getters, status:t
          })
        }, updateSubmissionRecommend(e, t){
          (0, e.commit)("updateSubmissionRecommend", {
            getters:e.getters, status:t
          })
        }, updateSubmissionOfHomework(e, t){
          (0, e.commit)("updateSubmissionOfHomework", {
            getters:e.getters, submission:t
          })
        }, setSkipUnmarkedPopupStatus(e, t){
          (0, e.commit)("setSkipUnmarkedPopupStatus", t)
        }, resetState(e){
          (0, e.commit)("resetState")
        }, setCurrentSubmissionUploads(e, t){
          var r=e.state, i=e.dispatch, n=o._.cloneDeep(r.currentSubmission);
          n.submission_correct.uploads=t, i("setCurrentSubmission", n)
        }
      }, k={
        currentMember:(e, t)=>!o._.isEmpty(t.filteredMembers)&&e.currentMemberId?o._.find(t.filteredMembers, {
          id:e.currentMemberId
        }):{
        }, currentSubmission:e=>!o._.isEmpty(e.currentSubmissions)&&e.currentSubmissionId?o._.find(e.currentSubmissions, {
          id:e.currentSubmissionId
        }):{
        }, currentAttachUpload:e=>!o._.isEmpty(e.currentAttachUploads)&&e.currentAttachUploadId?o._.find(e.currentAttachUploads, {
          id:e.currentAttachUploadId
        }):{
        }, homeworkId:e=>o._.isEmpty(e.homework)?0:e.homework.id, submitByGroup:e=>!o._.isEmpty(e.homework)&&e.homework.submit_by_group, isResubmitOpen:e=>!o._.isEmpty(e.homework)&&e.homework.is_resubmit_open, members(e, t){
          if(o._.isEmpty(e.homework))return[
          ];
          var r={
            1:"submitted", 2:"makeUp", 3:"unsubmit", 4:"askedMakeUp", 5:"redo"
          };
          return o._.map(e.homework.submissions, (e=>{
            var i, n=o._.cloneDeep(t.submitByGroup?e.group:e.student), s=t.submitByGroup?"":"(".concat(n.user_no, ")");
            return n.label="".concat(n.name).concat(s), n.markedSubmitted=(null===(i=n.make_up_record)||void 0===i?void 0:i.submitted)||e.submission.marked_submitted, n.memberStatus=(0, a.eg)(t.isResubmitOpen, n), n.submitStatus=r[
              n.status
            ], n
          }))
        }, realUnmarkedMemberIds:(e, t)=>new Set(o._.filter(t.members, (e=>"unmarked"===e.mark)).map((e=>e.id))), filteredMembers(e, t){
          var r=[
          ];
          r="unmarked"===e.currentMarkStatus?t.members.filter((t=>e.unmarkedMemberIds.has(t.id))):"all"===e.currentMarkStatus?t.members:o._.filter(t.members, (t=>t.mark===e.currentMarkStatus));
          var i=e.currentSubmitStatuses.length;
          return 0===i||4===i?r:o._.filter(r, (t=>e.currentSubmitStatuses.includes(t.submitStatus)))
        }, submissionsOfCurrentMember:e=>o._.filter(e.currentSubmissions, a.bC), submissionSubmitByInstructor:e=>o._.find(e.currentSubmissions, a.$D), homeworkData:e=>o._.isEmpty(e.homework)?{
        }
        :(0, s.camelizeKeys)(e.homework.data), memberMarkedCount:(e, t)=>o._.filter(t.members, (e=>"marked"===e.mark)).length, memberUnmarkedCount:(e, t)=>o._.filter(t.members, (e=>"marked"!==e.mark)).length, submissionsOfHomework:e=>o._.isEmpty(e.homework)?[
        ]
        :e.homework.submissions, isLarkUpload(e, t){
          var r;
          return"LARK"===(null===(r=t.currentAttachUpload)||void 0===r?void 0:r.source)
        }, submissionOfHomework:(e, t)=>t.submissionsOfHomework.find((r=>e.currentMemberId===(t.submitByGroup?r.group.id:r.student.id)))
      };
      const S={
        namespaced:!0, state:_(), actions:w, getters:k, mutations:g
      }
    }, 86886:(e, t, r)=>{
      r.r(t), r.d(t, {
        chatbotShims:()=>s
      });
      r(540590), r(418665), r(269193), r(14602);
      var i=function(e, t, r, i){
        return new(r||(r=Promise))((function(n, o){
          function s(e){
            try{
              c(i.next(e))
            }
            catch(e){
              o(e)
            }
          }
          function a(e){
            try{
              c(i.throw(e))
            }
            catch(e){
              o(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((i=i.apply(e, t||[
          ])).next())
        }))
      }, n=function(e, t){
        var r, i, n, o, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, i&&(n=2&a[
                  0
                ]
                ?i.return:a[
                  0
                ]
                ?i.throw||((n=i.return)&&n.call(i), 0):i.next)&&!(n=n.call(i, a[
                  1
                ])).done)return n;
                switch(i=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, i=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], i=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      }, o=function(e){
        return new Promise((function(t){
          e.addEventListener("mounted", (function(){
            t(void 0)
          }))
        }))
      }, s=function(e){
        return i(void 0, void 0, void 0, (function(){
          var t, r, i, s, a, c;
          return n(this, (function(n){
            switch(n.label){
              case 0:return[
                4, o(e)
              ];
              case 1:return n.sent(), t=e.shadowRoot, r=null==t?void 0:t.querySelector("#airChatbot"), i=null==t?void 0:t.querySelector(".chat-header .actions"), s=null==t?void 0:t.querySelector(".chat-header .divider"), a=null==t?void 0:t.querySelector(".header-close"), c=null==t?void 0:t.querySelector(".chat-frame"), i&&s&&a&&(i.style.display="none", s.style.display="none", a.style.display="none"), c&&(c.style.height="100%", c.style.width="100%", c.style.position="initial", c.style.borderRadius="0", c.style.boxShadow="none", c.style.marginTop="0", c.style.marginBottom="0", c.style.marginLeft="0", c.style.marginRight="0", c.style.margin="0"), r&&(r.style.height="100%"), e.style.height="100%", e.style.display="block", [
                2
              ]
            }
          }))
        }))
      }
    }, 99151:(e, t, r)=>{
      var i=r(248124), n=r(302543), o=r(287092), s=r(795093);
      function a(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var i=Object.getOwnPropertySymbols(e);
          t&&(i=i.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }
      function c(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?a(Object(r), !0).forEach((function(t){
            u(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function u(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      function l(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], i=!0, n=!1, o=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(i=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            i=!0);
          }
          catch(e){
            n=!0, o=e
          }
          finally{
            try{
              i||null==a.return||a.return()
            }
            finally{
              if(n)throw o
            }
          }
          return r
        }
        (e, t)||m(e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function d(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=m(e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var i=0, n=function(){
            };
            return{
              s:n, n:function(){
                return i>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    i++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:n
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s=!0, a=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return s=e.done, e
          }, e:function(e){
            a=!0, o=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(a)throw o
            }
          }
        }
      }
      function m(e, t){
        if(e){
          if("string"==typeof e)return p(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          return"Object"===r&&e.constructor&&(r=e.constructor.name), "Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e, t):void 0
        }
      }
      function p(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      r(215195), r(418665), r(700533), r(210557), r(335231), r(107918), r(269193), r(43148), r(640173), r(850785), r(658379), r(14602);
      var v=r(218831).camelizeKeys, f=r(111172), h=r(966491), b=r(709272).TaskMap, y=r(552979).default, _=r(841885);
      e.exports=[
        "$scope", "$rootScope", "$http", "modelHelper", "toastr", "homeworkRepository", "filter", "submissionListUtils", "$location", "$timeout", "$filter", "$routeParams", "homeworkApi", "momentService", "throughCourseFilter", function(e, t, a, u, m, p, g, w, k, S, I, C, x, A, P){
          var T, R, O, E, M=null===(T=window.globalData)||void 0===T||null===(R=T.course)||void 0===R?void 0:R.orgId;
          e.loadComponents=()=>{
            Promise.resolve().then(r.bind(r, 678264))
          }, e.reverse=!1, e.isAutoSave=!1, e.eventType="", e.pageSize=100, e.pagination=f(e, k, "submissions"), e.humanizeBytes=h.humanizeBytes, e.showReviewStatus=!1, e.showIntraReviewStatus=!1, e.isGroupHomework=!1;
          var $=null, D=C.activityId;
          e.paperZip={
            status:"before"
          };
          var j=0;
          null!=e&&null!==(O=e.homework)&&void 0!==O&&null!==(E=O.data)&&void 0!==E&&E.homework_score_percentage&&(e.homework.data.homework_score_percentage.inter_score_percentage||e.homework.data.homework_score_percentage.inter_group_score_percentage||e.homework.data.homework_score_percentage.intra_group_score_percentage)?e.showInstructorScoreColumn=!0:e.showInstructorScoreColumn=!1, e.vueParam={
            disabled:!0, departments:[
            ], showScoreRecords:!1, activityId:e.homework.id, submitter:{
            }, learningActivityType:"homework", isInstructor:e.isInstructorView||e.isSimulatingInstructor
          }, e.vueMethods={
            updateConditionDepartmentIds:t=>{
              S((()=>{
                e.condition.department_ids=t, e.search()
              }))
            }
          }, e.showRecordsModal=t=>{
            var r=e.pagedSubmissions?e.pagedSubmissions:e.submissions;
            e.vueParam.submitter=v(r[
              t
            ].student), e.vueParam.activityId=e.homework.id, e.vueParam.showScoreRecords=!0
          }, e.showGroupRecordsModal=t=>{
            e.vueParam.submitter=v(t), e.vueParam.activityId=e.homework.id, e.vueParam.showScoreRecords=!0
          }, i(window).on("close-score-records-modal", (()=>{
            e.vueParam.showScoreRecords=!1, e.vueParam.activityId=0
          }));
          var U=function(t){
            return e.pages=t.pages, Array.isArray(null==t?void 0:t.data)&&t.data.forEach((e=>{
              var t;
              e.student&&e.final_score?e.final_score.status_comment=null!==(t=e.final_score.status_comment)&&void 0!==t?t:"":e.students&&e.students.forEach((e=>{
                var t;
                e.final_score&&(e.final_score.status_comment=null!==(t=e.final_score.status_comment)&&void 0!==t?t:"")
              }))
            })), e.pagedSubmissions=t.data
          };
          e.changePage=function(t){
            return e.pagination.changePageAtFrontEnd(t, e.filteredSubmissions, U), J()
          }, e.predicateEqual=t=>n.isEqual(e.predicate, t), e.order=function(t){
            var r=function(r){
              var i, n=t[
                t.length-1
              ], o=r, s=d(t);
              try{
                for(s.s();
                !(i=s.n()).done;
                ){
                  o=o[
                    i.value
                  ]
                }
              }
              catch(e){
                s.e(e)
              }
              finally{
                s.f()
              }
              if([
                "in_platform", "cnki"
              ].includes(n)){
                var a=parseFloat(o);
                return isNaN(a)?-1:a
              }
              return[
                "score", "final_score", "review_incomplete_score_minus"
              ].includes(n)?o?parseFloat(o):-1:"inter_scores"===n?o&&o.length>0?e.averageInterScore(o):-1:o
            };
            if(n.isEqual(e.predicate, t)&&!e.isAutoSave)e.reverse=!e.reverse, e.submissions.reverse(), e.filteredSubmissions&&e.filteredSubmissions.reverse();
            else{
              var i=I("orderBy");
              e.submissions=i(e.submissions, r), e.filteredSubmissions&&(e.filteredSubmissions=i(e.filteredSubmissions, r)), e.predicate=t, e.reverse=!1, e.isAutoSave=!1
            }
            return e.changePage(1)
          };
          var L={
            1:"submitted", 2:"makeUp", 3:"unsubmit", 4:"askedMakeUp", 5:"redo"
          };
          e.submitStatuses=[
          ], e.$watch("condition.statuses", ((t, r)=>{
            e.submitStatuses=t.map((e=>L[
              e
            ]))
          })), e.tabs={
          }, e.navigationData={
          }, e.condition={
            department_ids:[
            ], grade_ids:[
            ], class_ids:[
            ], statuses:[
            ], marks:[
            ], keyword:"", teaching_class_ids:[
            ], education_levels:[
            ]
          }, P.initScope(e), e.uiOfSubmissionList={
            useRubric:!1, popupOpened:!1, inInterScoreList:!1, inIntraScoreList:!1
          }, e.homeworkCorrectColumnSetting={
            showUserNo:!0, showDepartment:!1, showReviewCount:!0, showPeerReviewScore:!0, showIntraPeerReviewScore:!0, showInterPeerReviewScore:!0, showAttachmentsSize:!0, showInstructorScore:!0, showComment:!0
          }, e.showSeatNumber&&(e.homeworkCorrectColumnSetting.showSeatNumber=!e.homework.submit_by_group), e.showNickname&&(e.homeworkCorrectColumnSetting.showNickname=!e.homework.submit_by_group), e.homeworkCorrectColumnSetting.showGrade=!0===e.homeworkCorrectColumnSetting.showDepartment;
          e.updateHomeworkCorrectColumnSetting=function(t){
            return e.showSeatNumber&&(e.homeworkCorrectColumnSetting.showSeatNumber=t.showSeatNumber), e.showNickname&&(e.homeworkCorrectColumnSetting.showNickname=t.showNickname), e.homeworkCorrectColumnSetting.showUserNo=t.showUserNo, e.homeworkCorrectColumnSetting.showDepartment=t.showDepartment, e.homeworkCorrectColumnSetting.showGrade=t.showGrade, e.homeworkCorrectColumnSetting.showReviewCount=t.showReviewCount, e.homeworkCorrectColumnSetting.showPeerReviewScore=t.showPeerReviewScore, e.homeworkCorrectColumnSetting.showIntraPeerReviewScore=t.showIntraPeerReviewScore, e.homeworkCorrectColumnSetting.showInterPeerReviewScore=t.showInterPeerReviewScore, e.homeworkCorrectColumnSetting.showComment=t.showComment, e.homeworkCorrectColumnSetting.showAttachmentsSize=t.showAttachmentsSize, e.homeworkCorrectColumnSetting.showInstructorScore=t.showInstructorScore, h.saveCorrectColumnSetting(e.homework.id, "homework", e.homeworkCorrectColumnSetting), J()
          };
          var N=()=>e.homework.inter_score_map&&e.homework.inter_score_map.is_started&&!n.isEmpty(e.homework.interScores);
          e.ui=e.ui||{
          }, e.ui.showNeedInstructorReviewMessage=function(e){
            if(e&&e.submissions&&e.submissions.length>0)return n.some(e.submissions, (e=>e.need_instructor_review))
          }, e.getStudentInfo=u.getBelongTo, e.displayGroupTitle=function(e){
            var t=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :1, r=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :"";
            return"".concat(e, " (").concat(t).concat(r, ")")
          }, e.setViewingData=function(t){
            var r=e.pagedSubmissions?e.pagedSubmissions:e.submissions;
            return w.setViewingData(t, e.homework, r, e.tabs, e.uiOfSubmissionList).then((()=>e.rubric=e.homework.rubric))
          };
          var F=function(t, r){
            var i, n, o=t.submission;
            return e.homework.submit_by_group?(i=r.final_score, n=r.student.id):(i=t.final_score, n=t.student.id), [
              n, o, i
            ]
          }, z=function(e, t){
            var r, i;
            return t?(r=t.final_score.status_comment, i=t.student.id):(r=e.final_score.status_comment, i=e.student.id), [
              i, r
            ]
          }, B=e=>a.post("/api/submissions/".concat(e, "/read"));
          e.autoSave=function(t){
            var r, o=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :null, s=arguments.length>2?arguments[
              2
            ]
            :void 0;
            if(s){
              var a=s.target;
              r=i(a).val(), t.final_score.final_score=r
            }
            e.isAutoSave=!0;
            var c=Array.from(F(t, o)), u=l(c, 3), d=u[
              0
            ], m=u[
              1
            ], p=u[
              2
            ];
            e.updateMarkStatus(t);
            var v=w.autoSave(d, p.final_score, e.homework.id);
            return v.then((function(r){
              if(n.merge(t.submission, r.submission), p.final_score!==r.data.final_score){
                var i=V(statistics.enums.HomeworkAction.update_final_score);
                statistics.track(i)
              }
              return p.final_score=r.data.final_score, e.$broadcast("drawChart")
            })), m.is_resubmitted&&B(m.id).then((()=>m.is_resubmitted=!1)), v
          }, e.autoSaveStatusComment=function(t){
            var r=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :null, i=Array.from(z(t, r)), n=l(i, 2), o=n[
              0
            ], s=n[
              1
            ], a=w.autoSaveStatusComment(e.homework.id, s, o);
            return a.then((function(e){
              return r?r.final_score.status_comment=e.data.status_comment:t.final_score.status_comment=e.data.status_comment
            })), a
          }, e.hasSelected=()=>w.hasSelected(e.filteredSubmissions), e.hasSelectedRecommendable=()=>w.hasSelectedRecommendable(e.filteredSubmissions), e.hasSelectedCanRemind=function(){
            return!(e.homework&&!e.homework.published)&&w.hasSelectedCanRemind(e.filteredSubmissions)
          }, e.hasSelectedCanRemindReview=()=>w.hasSelectedCanRemindReview(e.homework, e.filteredSubmissions), e.hasSelectedDownloadable=()=>w.hasSelectedDownloadable(e.filteredSubmissions), e.hasSelectedCanChangeToUnsubmitted=()=>w.hasSelectedCanChangeToUnsubmitted(e.filteredSubmissions), e.hasSelectedCanChangeToSubmitted=()=>w.hasSelectedCanChangeToSubmitted(e.filteredSubmissions), e.everySelectedCanChangeToRedo=()=>!(!e.homework||e.homework&&(e.homework.is_closed||!e.homework.is_in_progress)||!e.filteredSubmissions)&&w.everySelectedCanChangeToRedo(e.filteredSubmissions, e.homework.submit_by_group);
          var H=function(t){
            var r="";
            return n.some(t, (e=>!!e.submission.recommend))&&(r="\n(".concat(e.recommendCancelWarn, ")")), r
          }, V=function(t){
            return{
              activity_id:e.activity.id, activity_type:e.activity.type, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:t
            }
          };
          e.recommendHomework=function(){
            var t;
            if(e.hasSelectedRecommendable())return e.eventType="recommend", e.popupTitle=e.recommendTitle, e.popupMessage=(t=n.filter(e.filteredSubmissions, (e=>e.selected&&!!e.submission.marked_submitted&&!e.submission.submit_by_instructor&&1!==e.submission.recommend)), (e.homework.submit_by_group?e.recommendGroupConfirmInfo:e.recommendNormalConfirmInfo).replace("{0}", t.length)), i("#confirmation-popup").foundation("reveal", "open"), null
          }, e.remindHomework=function(){
            var t;
            if(e.hasSelectedCanRemind()&&e.homework.need_remind)return e.eventType="remind", e.popupTitle=e.remindTitle, e.popupMessage=(t=n.filter(e.filteredSubmissions, (e=>e.selected&&!e.submission.marked_submitted)), (e.homework.submit_by_group?e.remindGroupConfirmInfo:e.remindNormalConfirmInfo).replace("{0}", t.length)), i("#confirmation-popup").foundation("reveal", "open"), null
          }, e.changeMarkedSubmitted=function(t){
            if(0===t){
              if(!e.hasSelectedCanChangeToUnsubmitted())return
            }
            else if(!e.hasSelectedCanRemind())return;
            return e.eventType={
              0:"unsubmitted", 1:"submitted"
            }
            [
              t
            ], e.popupTitle=e.markedSubmittedTitle[
              t
            ], e.popupMessage=function(t){
              var r=n.filter(e.filteredSubmissions, (function(e){
                return 0===t?e.selected&&!!e.submission.marked_submitted:e.selected&&!e.submission.marked_submitted
              })), i=t?"":H(r);
              return(e.homework.data.submit_by_group?e.markedSubmittedGroupConfirmInfo[
                t
              ]
              +i:e.markedSubmittedNormalConfirmInfo[
                t
              ]
              +i).replace("{0}", r.length)
            }
            (t), i("#confirmation-popup").foundation("reveal", "open"), null
          }, e.changeMarkedRedo=()=>{
            if(e.everySelectedCanChangeToRedo()){
              var t=n.filter(e.filteredSubmissions, (e=>e.selected)), r=n.size(t);
              e.eventType="redo", e.popupTitle=y.t("homeworkRedo.redo");
              var o=H(t), s=e.homework.submit_by_group?"homeworkRedo.confirmTipForGroup":"homeworkRedo.confirmTipForStudent";
              return e.popupMessage=y.t(s, [
                r
              ])+o, i("#confirmation-popup").foundation("reveal", "open")
            }
          }, e.sendNotificationForReview=function(){
            if(e.hasSelectedCanRemindReview())return i("#review-notification-popup").foundation("reveal", "open"), null
          }, e.openSetSameScorePopup=()=>{
            if(e.hasSelected()){
              var t=n.filter(e.submissions, (e=>e.selected)), r=q(t);
              i("#set-same-score-submissions-popup").foundation("reveal", "open"), S((()=>{
                e.$emit("setSameScoreInit", e.homework, r)
              }))
            }
          };
          e.openHomeworkCheckPopup=()=>{
            var t=q(n.filter(e.submissions, (e=>e.selected)));
            i("#homework-check-popup").foundation("reveal", "open"), S((()=>{
              e.$emit("homeworkCheckInit", e.homework, t)
            }))
          };
          var G=()=>(i("#confirmation-popup").foundation("reveal", "close"), n.each(e.filteredSubmissions, (e=>delete e.selected))), q=t=>{
            var r=e.homework.submit_by_group?"group":"student";
            return n.map(t, (e=>e[
              r
            ].id))
          }, K=t=>{
            var r;
            if(!(1===t&&j>0&&j+1e3>Math.floor(Date.now()))){
              var i=n.filter(e.filteredSubmissions, (e=>e.selected&&Boolean(o.guard(null!=e?e.submission:void 0, (e=>e.marked_submitted)))===!t)), s=(()=>{
                var e, t=[
                ], n=d(i);
                try{
                  for(n.s();
                  !(e=n.n()).done;
                  )r=e.value, t.push(r.submittedStatus)
                }
                catch(e){
                  n.e(e)
                }
                finally{
                  n.f()
                }
                return t
              })(), c=q(i), u=(()=>{
                var e, t=[
                ], n=d(i);
                try{
                  for(n.s();
                  !(e=n.n()).done;
                  )r=e.value, t.push(r.submission.id)
                }
                catch(e){
                  n.e(e)
                }
                finally{
                  n.f()
                }
                return t
              })();
              return j=Math.floor(Date.now()), a.put("/api/course/activities/".concat(e.homework.id, "/submission/marked_submitted"), {
                submission_ids:u, student_or_group_ids:c, marked_submitted:t, submittedStatus:s
              }).success((function(r){
                G(), window.dispatchEvent(new CustomEvent("homework-marked-action-success", {
                  detail:e.eventType
                })), n.forEach(i, (function(e){
                  (null!=e?e.submission:void 0)&&(e.submission.marked_submitted=Boolean(t), e.submission.instructor_score=null, e.submission.recommend=0, e.submission.is_redo=!1, e.submittedStatus="", t&&(e.submission.submit_by_instructor=!0))
                }));
                var o=0===t?statistics.enums.HomeworkAction.marked_unsubmitted:statistics.enums.HomeworkAction.marked_submitted, s=V(o);
                return statistics.track(s), m.success(r.message)
              })).error(m.decorateError())
            }
          }, W=new Map([
            [
              "remind", ()=>{
                e.loading=!0;
                var t=w.getUnsubmittedStudentIds(e.filteredSubmissions, e.homework);
                return a.put("/api/homework/".concat(e.homework.id, "/remind"), {
                  student_ids:t
                }).success((function(t){
                  var r=V(statistics.enums.HomeworkAction.remind);
                  return statistics.track(r), G(), window.dispatchEvent(new CustomEvent("homework-marked-action-success", {
                    detail:e.eventType
                  })), e.loading=!1, m.success(t.message)
                })).error(m.decorateError())
              }
            ], [
              "recommend", ()=>{
                var t, r=n.filter(e.filteredSubmissions, (e=>e.selected&&!!e.submission.id&&1!==e.submission.recommend&&!e.submission.submit_by_instructor&&!!e.submission.marked_submitted)), i=(()=>{
                  var e, i=[
                  ], n=d(r);
                  try{
                    for(n.s();
                    !(e=n.n()).done;
                    )t=e.value, i.push(t.submission.id)
                  }
                  catch(e){
                    n.e(e)
                  }
                  finally{
                    n.f()
                  }
                  return i
                })();
                return a.put("/api/submission/recommend", {
                  submission_ids:i
                }).success((function(t){
                  var r=V(statistics.enums.HomeworkAction.recommend);
                  return statistics.track(r), G(), window.dispatchEvent(new CustomEvent("homework-marked-action-success", {
                    detail:e.eventType
                  })), n.each(e.filteredSubmissions, (function(e){
                    if(t.submission_ids.includes(e.submission.id))return e.submission.recommend=1
                  }))
                })).error(m.decorateError())
              }
            ], [
              "unsubmitted", K
            ], [
              "submitted", K
            ], [
              "redo", ()=>{
                var t=n.filter(e.filteredSubmissions, (e=>e.selected)), r={
                  submission_ids:n.map(t, (e=>e.submission.id)), student_or_group_ids:q(t), submittedStatus:n.map(t, (e=>e.submittedStatus))
                };
                return x.markHomeworkSubmissionToRedo(e.homework.id, r, (t=>{
                  window.dispatchEvent(new CustomEvent("homework-marked-action-success", {
                    detail:e.eventType
                  })), n.forEach(e.filteredSubmissions, (t=>{
                    t.selected&&(null!=t?t.submission:void 0)&&(t.submission.marked_submitted=!1, t.submission.is_redo=!0, t.submission.recommend=0, t.submittedStatus="redo", e.homework.submit_by_group?(t.group.status=5, t.group.redo_count+=1):(t.student.status=5, t.student.redo_count+=1))
                  })), e.homework.submissions=e.filteredSubmissions;
                  var r=statistics.enums.HomeworkAction.is_redo, i=V(r);
                  statistics.track(i), m.success(t.message), G()
                }), (e=>{
                  m.error(e.message)
                }))
              }
            ], [
              "unrecommend", ()=>{
                var t=e.filteredSubmissions.find((t=>(e.homework.submit_by_group?t.group.id:t.student.id)===e.currentMemberId));
                e.cancelRecommendSubmission(t), G()
              }
            ]
          ]);
          e.confirm=()=>{
            var t="submitted"===e.eventType?1:0;
            return W.get(e.eventType).call(null, t)
          }, e.hasSelectedNeedMakeUp=function(){
            var t, r;
            return!(null===(t=e.homework)||void 0===t||!t.published)&&(!(null===(r=e.homework)||void 0===r||!r.is_closed)&&w.hasSelectedNeedMakeUp(e.filteredSubmissions))
          };
          e.makeUpHomework=function(){
            if(e.hasSelectedNeedMakeUp())return e.homework=w.buildHomeworkForMakeUp(e.filteredSubmissions, e.homework), e.$emit("makeUpHomework", e.homework, !1)
          }, e.$on("makeUpHomeworkNotifySend", (()=>{
            var e=V(statistics.enums.HomeworkAction.recommend);
            statistics.track(e), re()
          })), e.$on("resubmitHomeworkNotifySend", (()=>re())), e.$on("setSameScoreNotifySend", (()=>{
            var e=V(statistics.enums.HomeworkAction.set_same_score);
            statistics.track(e), re()
          })), e.hasSelectedCanResubmit=()=>w.hasSelectedCanResubmit(e.filteredSubmissions), e.resubmitHomework=function(){
            if(e.hasSelectedCanResubmit())return e.homework=w.buildHomeworkForResubmit(e.filteredSubmissions, e.homework), e.$emit("resubmitHomework", e.homework, !1)
          }, e.checkAllSelected=()=>n.every(e.filteredSubmissions, {
            selected:!0
          }), e.switchAll=function(){
            var t=e.checkAllSelected();
            return e.filteredSubmissions.map((e=>e.selected=!t))
          }, e.changeNavigation=t=>e.navigation.changeNavigationData(t), e.toggleMembers=e=>e.showMembers=!e.showMembers, e.$on("scoreChanged", (()=>e.$broadcast("drawChart"))), e.addReviewBorderClass=function(e, t){
            if(e===t.length-1)return!1;
            var r=t[
              e
            ], i=t[
              e+1
            ];
            return r.need_instructor_review&&i.need_instructor_review
          };
          var Q=function(){
            e.homework.submissions=[
            ];
            var t, r=n.filter(e.submissions, (function(t){
              return t.student?!!g.filterEnrollments(e, t.student)&&(e.homework.submissions.push(t), !0):g.filterEnrollments(e, t.group)
            }));
            if(e.showIntraReviewStatus&&e.condition.statuses.includes("intraReviewNotFinished")){
              var i=n.cloneDeep(e.submissions), o=((t=i).forEach((e=>{
                e.students=n.filter(e.students, (e=>!e.intraReviewFinished))
              })), n.filter(t, (e=>e.students.length>0))), s=r.map((e=>e.group.id)), a=o.filter((e=>!s.includes(e.group.id)));
              e.filteredSubmissions=n.sortBy([
                ...r, ...a
              ], "group_sort")
            }
            else e.filteredSubmissions=r;
            e.homework.submissions=e.filteredSubmissions;
            var c=e.pageIndex?e.pageIndex:1;
            e.changePage(c), e.$broadcast("filterSubmissionsUpdated")
          };
          e.isInReview=function(t){
            return!e.homework.is_inter_review_by_submitter||t.submission.is_in_review
          }, e.search=()=>Q(), e.updateMarkStatus=function(t){
            var r, i=!!e.homework.submit_by_group;
            if(i)r=n.some(t.students, (e=>!!e.final_score.final_score));
            else{
              var o=t.final_score;
              r=!!o&&!!o.final_score
            }
            var s=!!t.submission.instructor_score||!!t.submission.instructor_comment;
            r=r||s;
            var a=t.beReviewedCount>0, c=r||a?"marked":"unmarked";
            return i?t.group.mark=c:t.student.mark=c
          };
          var Y=function(e){
            if(e.make_up_record&&(e.make_up_record.is_closed=s()>s(e.make_up_record.closed_time)), e.resubmit_record)return e.resubmit_record.is_closed=s()>s(e.resubmit_record.closed_time)
          };
          i(window).resize((()=>Z()));
          var Z=function(){
            var t=i(".activity-header").width(), r=i("#submission-list").width(), n=r>t?r:t;
            e.homework.submit_by_group?i(".group-title-row").width(n):i(".homework-row").width(n)
          }, J=()=>S((function(){
            return Z(), i(".sync-scroll").scroll((e=>i(".sync-scroll").scrollLeft(i(e.target).scrollLeft()))), function(){
              e.ui.isFullScreenMode?i(".activity-content-box").on("scroll", (function(){
                if(i(".activity-info").length>0)return e.ui.tableHeadAtTop=i(".activity-info")[
                  0
                ].getBoundingClientRect().top<=0, e.$apply()
              })):i(window).on("scroll", (function(){
                if(i(".activity-info").length>0)return e.ui.tableHeadAtTop=i(".activity-info")[
                  0
                ].getBoundingClientRect().top<=0, e.$apply()
              }));
              var t=i("#submission-list").width();
              return i(".scrollbar-content").width(t)
            }
            ()
          }));
          e.openDuplicateDetectResult=t=>{
            e.duplicateDetectsubmission=t, i("#duplicate-detect-detail").foundation("reveal", "open")
          }, e.isNumber=e=>n.isNumber(e);
          var X=()=>{
            var t, r=0;
            e.homework.duplicateDetect={
              status:"", inPlatFormThreshold:null, duplicateCharCountThreshold:null, cnkiThreshold:null
            }, e.duplicateDetectRunning=()=>e.homework.duplicateDetect&&[
              "running", "init"
            ].includes(e.homework.duplicateDetect.status);
            var o=t=>{
              var r, i;
              e.homework.duplicateDetect.inPlatFormThreshold=null===(r=t.in_platform)||void 0===r?void 0:r.threshold, e.homework.duplicateDetect.cnkiThreshold=null===(i=t.cnki)||void 0===i?void 0:i.threshold
            };
            e.$on("updateDuplicateDetectThreshold", ((e, t)=>{
              o(t)
            }));
            var s=t=>{
              p.loadDuplicateRate(e.homework.id).then((e=>{
                t.forEach((t=>{
                  var r=e.filter((e=>e.submission_id===t.submission.id)), i={
                  };
                  r.forEach((e=>{
                    i[
                      e.provider
                    ]
                    =e.duplicate_rate
                  })), t.duplicateRates=i
                }))
              }))
            }, u=()=>{
              a.get("/api/homework/".concat(e.homework.id, "/duplicate-detect/task")).then((t=>{
                if(!t.data)throw new Error("request error");
                var a, u=(a=t.data).length<2?a:(a.sort(((e, t)=>new Date(t.created_at)-new Date(e.created_at))), new Date(a[
                  0
                ].created_at)-new Date(a[
                  1
                ].created_at)>500?[
                  a[
                    0
                  ]
                ]
                :a), l=[
                ];
                u.forEach((t=>{
                  var r, i=null===(r=t.output)||void 0===r?void 0:r.error_type;
                  "cnki"===(null==t?void 0:t.provider)&&3===t.status&&"not_enough_funds"===i&&m.error(e.$t("homeworkDuplicate.notEnoughFunds")), l.push(b[
                    t.status
                  ])
                }));
                var d=(e=>e.includes("failed")?"failed":n.find(n.values(b), (t=>e.includes(t)))||"success")(l);
                [
                  "success", "failed", "cancel"
                ].includes(d)&&(clearInterval(r), r=0, i(document).foundation("reveal", "close"), function(t){
                  var r=arguments.length>1&&void 0!==arguments[
                    1
                  ]
                  ?arguments[
                    1
                  ]
                  :"success";
                  return t===r&&e.homework.duplicateDetect.status&&e.homework.duplicateDetect.status!==r
                }
                (d, "success")&&(s(e.submissions), m.success(e.$t("homeworkDuplicate.taskDone")), i(".homework-table-container .activity-body.sync-scroll")[
                  0
                ].scrollLeft+=1e3)), e.homework.duplicateDetect.status=d;
                var p=n.reduce(t.data, ((e, t)=>{
                  var r=t.input.config;
                  return e=c(c({
                  }, e), r)
                }), {
                });
                e.homework.duplicateDetect.inPlatformConfig=v(p.in_platform), e.homework.duplicateDetect.cnkiConfig=v(p.cnki), o(p)
              })).catch((()=>{
                console.error("Task error occurred, cancel now."), clearInterval(r), r=0
              }))
            };
            e.allowHomeworkSetting&&(u(), s(e.submissions)), e.startDuplicateDetectStatusInverval=()=>{
              r||(r=setInterval(u, 1e4))
            }, null!==(t=window.featureToggles)&&void 0!==t&&t.homeworkDuplicateDetect&&e.allowHomeworkSetting&&e.startDuplicateDetectStatusInverval(), e.cancelDuplicateDetect=()=>{
              a.delete("/api/homework/".concat(e.homework.id, "/duplicate-detect/task")).then((t=>{
                e.homework.duplicateDetect.status="cancel"
              })).then((()=>{
                m.warning(e.$t("homeworkDuplicate.taskCanceled"))
              }))
            }
          }, ee=function(){
            var t;
            e.predicate=[
            ], (t=h.loadCorrectColumnSetting(e.homework.id, "homework"))&&(e.homeworkCorrectColumnSetting=t.column), p.deferredStudentListPromise.then((function(t){
              e.navigationData.students=t[
                1
              ], e.navigationData.groups=t[
                3
              ]
            }));
            p.loadSubmissionsForInstructor(e.homework, !0, !1).then((t=>{
              var r;
              e.submissions=t, null!==(r=window.featureToggles)&&void 0!==r&&r.homeworkDuplicateDetect&&e.allowHomeworkSetting&&X(), e.submissions.forEach((function(t){
                var r, i, o, s=e.homework.submit_by_group?t.group:t.student;
                if(function(t, r){
                  if(t.submittedStatus="", Y(r), 0!==r.redo_count&&t.submission.is_redo)return t.submittedStatus="redo";
                  if(r.resubmit_record){
                    if(r.make_up_record){
                      var i=r.make_up_record.updated_at||r.make_up_record.created_at;
                      if(t.submission.marked_submitted=r.make_up_record.submitted, !e.homework.is_resubmit_open)return t.submittedStatus="makeUp";
                      var n=r.resubmit_record.updated_at||r.resubmit_record.created_at;
                      if(i>=n&&(t.submittedStatus="makeUp"), i<n)t.submittedStatus="resubmit"
                    }
                    else if(e.homework.is_resubmit_open)t.submittedStatus="resubmit"
                  }
                  else if(r.make_up_record)t.submission.marked_submitted=r.make_up_record.submitted, t.submittedStatus="makeUp"
                }
                (t, s), s&&(s.status=function(e, t){
                  var r=3;
                  return e.submission.marked_submitted?(e.submittedStatus||(r=1), "makeUp"!==e.submittedStatus&&"resubmit"!==e.submittedStatus||(r=2)):("makeUp"===e.submittedStatus&&(r=t.make_up_record.is_closed?3:4), "resubmit"===e.submittedStatus&&(r=t.resubmit_record.is_closed?3:4), "redo"===e.submittedStatus&&(r=5)), r
                }
                (t, s)), e.homework.is_review_homework&&null!==(r=e.homework.intra_score_map)&&void 0!==r&&r.id&&(i=e.homework.intraScores, o=new Map, i.forEach((e=>{
                  var t=e.reviewer_id;
                  o.set(t, (o.get(t)||0)+1)
                })), e.submissions.forEach((e=>{
                  var t=e.students.length-1;
                  e.students.forEach((e=>{
                    var r=e.student.id, i=o.has(r)?o.get(r):0;
                    e.intraReviewFinished=i===t
                  }))
                }))), N()){
                  var a, c;
                  e.homework.submit_by_group?(t.reviewedCount=n.uniqBy(n.filter(t.interScoresAsReviewer, (e=>null!==e.score)), "submitter_id").length, c=n.uniqBy(n.filter(t.interScoresAsSubmitter, (e=>null!==e.score)), "review_group_id")):(t.reviewedCount=n.filter(t.interScoresAsReviewer, (e=>null!==e.score)).length, c=n.filter(t.interScoresAsSubmitter, (e=>null!==e.score))), t.hadScoredInterScores=c||[
                  ], t.beReviewedCount=c.length;
                  var u=null===(a=e.homework.inter_score_map)||void 0===a?void 0:a.pieces_cnt;
                  s.reviewedFinished=t.reviewedCount===u, t.inReview=!n.isEmpty(t.interScoresAsReviewer)||!n.isEmpty(t.interScoresAsSubmitter), t.inReview||(t.notInReviewReason=function(t){
                    return e.homework.data.inter_review_by_submitter?t.submission.marked_submitted?"makeUp"===t.submittedStatus?"LATE_MAKEUP":"resubmit"===t.submittedStatus?"LATE_RESUBMISSION":"LATE_SUBMISSION":"makeUp"===t.submittedStatus?"NO_MAKEUP":"resubmit"===t.submittedStatus?"NO_RESUBMISSION":"NO_SUBMISSION":"LATE_ENROLLMENT"
                  }
                  (t))
                }
                e.updateMarkStatus(t)
              })), e.homework.submit_by_group?(n.map(e.submissions, (function(e){
                return e.group_name=e.group.name, e.group_created_at=e.group.created_at, e.group_sort=e.group.sort
              })), e.submissions=n.sortBy(e.submissions, "group_created_at").reverse(), e.submissions=n.sortBy(e.submissions, "group_name"), e.submissions=n.sortBy(e.submissions, "group_sort")):g.initDepartmentsInfoForEnrollments(e, n.map(e.submissions, (e=>e.student))), g.initOrgDepartments(e, M).then((()=>{
                e.vueParam.departments=n.cloneDeep(e.departments), e.vueParam.disabled=!1
              })), Q(), e.loaded=!0, e.ui.shouldReviewedByStudents=N(), e.hasNoStudents=e.homework.submit_by_group?!n.some(e.submissions, (e=>e.students.length>0)):0===e.submissions.length
            }))
          };
          e.$watch("filteredSubmissions", (t=>{
            var r=n.filter(t, (e=>e.selected)), i=0;
            n.forEach(r, (e=>{
              var t, r;
              null!==(t=e.submission)&&void 0!==t&&t.attachments_size&&(i+=null===(r=e.submission)||void 0===r?void 0:r.attachments_size)
            }));
            var o=_.humanizeBytes();
            e.totalZipSize=o(i), e.selectedCount=r.length, e.isFileSizeExceeded=i>524288e3
          }), !0);
          var te=function(){
            return a.get("/api/zip-status/homework-zip/".concat(D, "?no-intercept=true"), {
            }).success((t=>{
              var r, i, n, o;
              "processing"===e.paperZip.status&&"before"===(null===(r=t.zip)||void 0===r?void 0:r.status)||(e.paperZip=(i=t.zip, n={
                status:"before"
              }, o=()=>{
                clearInterval($), $=null
              }, i?(n=c({
              }, i), i.key&&"ready"===i.status?(o(), n.created_at=s(n.created_at).format(A.DATE_TIME_FORMAT), n):("failed"===i.status||"processing"===n.status&&s().utc().diff(s(i.created_at), "seconds")<=7200||(o(), n.status="exception"), n)):(o(), n)))
            })).error(m.decorateError((function(){
            })))
          };
          e.$on("getPaperZip", (function(){
            $||($=setInterval(te, 5e3))
          }));
          var re=function(){
            var t, r, i, n;
            (e.homework.submit_by_group?(e.isGroupHomework=!0, e.homework.inter_score_map&&e.homework.inter_score_map.id&&(e.showReviewStatus=!0), e.homework.intra_score_map&&e.homework.intra_score_map.id&&(e.showIntraReviewStatus=!0)):e.showReviewStatus=e.homework.is_review_homework, ee(), te().then((()=>{
              "processing"===e.paperZip.status&&($=setInterval(te, 5e3))
            })), "through_course"===(null===(t=window.globalData)||void 0===t||null===(r=t.course)||void 0===r?void 0:r.importedFrom))&&P.loadFilters(e, null===(i=window.globalData)||void 0===i||null===(n=i.course)||void 0===n?void 0:n.id)
          };
          e.submissionHasClosed=w.submissionHasClosed(e.homework);
          var ie=t.$on("refreshHomeworkScoreFromHomeworkMark", (()=>{
            re()
          }));
          return e.$on("$destroy", (()=>{
            ie(), $&&(clearInterval($), $=null)
          })), re()
        }
      ]
    }, 111490:(e, t, r)=>{
      var i=r(756029);
      r(212106), r(708054), r(700436), i.module("activity", [
        "common", "exam", "classroom-module", "questionnaire"
      ]).filter("timeFromNow", r(667399)).factory("commentManager", r(936133)).factory("rubricRepository", r(651534)).factory("util", r(933446)).factory("Rubric", r(131828)).factory("Navigation", r(80623)).factory("homeworkApi", r(946650)).factory("groupApi", r(465857)).factory("forumApi", r(675139)).factory("forumRepository", r(722538)).factory("homeworkRepository", r(429800)).factory("api", r(427373)).factory("entryContentApi", r(413976)).factory("filter", r(827829)).factory("Department", r(860019)).factory("videoPlayerService", r(145289)).factory("GroupInterScoreHelper", r(69287)).factory("submissionListUtils", r(774564)).factory("interactionRepository", r(989946)).factory("lessonApi", r(814921)).factory("rollcallRepository", r(567950)).factory("ClassinApi", r(301722)).factory("entryContentApi", r(413976)).factory("enrollmentsRepository", r(757362)).factory("statRepository", r(412916)).factory("activityService", r(647750)).factory("faceCheckHelper", r(130714)).factory("activityRepository", r(566117)).factory("publishHelper", r(664011)).directive("scrollSlide", r(590730).T).directive("elementReady", r(557266).elementReady).directive("circleBar", r(557266).circleBar).directive("replyList", r(557266).replyList).directive("unreadReply", r(557266).unreadReply).directive("unvisiableReply", r(557266).unvisiableReply).directive("vueWrapper", r(557266).vueWrapper).directive("previewContentInIframe", r(557266).previewContentInIframe).controller("UserCheckpointActivityController", r(22033)).controller("ViewActivityCtrl", r(342104)).controller("TopicListController", r(112237)).controller("TopicController", r(384476)).controller("AddTopicController", r(621670)).controller("AddReplyController", r(736183)).controller("AddCommentController", r(894716)).controller("SubmitHomeworkCtrl", r(473669)).controller("SubmissionListController", r(99151)).controller("ZipHomeworkPopupController", r(482451)).controller("RecommendedSubmissionsController", r(559371)).controller("InterScoreSubmissionsController", r(611745)).controller("InterScoresGivenController", r(398176)).controller("InterScoresReceivedController", r(852976)).controller("IntraScoreSubmissionsController", r(663758)).controller("IntraScoresGivenController", r(65418)).controller("IntraScoresReceivedController", r(852950)).controller("ViewHomeworkPopupController", r(948921)).controller("GiveScoreController", r(725544)).controller("MakeUpHomeworkCtrl", r(483349)).controller("ReviewNotificationController", r(243278)).controller("RubricController", r(905519)).controller("ActivityDetailController", r(390276)).controller("ViewHomeworkController", r(150664)).controller("ViewiLessonController", r(212748)).controller("ViewiLessonControllerTca", r(541949)).controller("VideoSourceSelectController", r(638397)).controller("LessonPlayerController", r(852753)).controller("ViewiSlideController", r(65144)).controller("ViewOnlineVideoController", r(267004)).controller("ViewInteractionController", r(138270)).controller("InteractionSubmissionsController", r(959906)).controller("ViewForumController", r(536496)).controller("ViewChatroomController", r(127296)).controller("ViewScormController", r(207418)).controller("ForumEnrollmentController", r(696251)).controller("ForumGiveScoreController", r(166785)).controller("StatHomeworkScoreDistributionController", r(550381)).controller("UploadEsignController", r(261019)).controller("MaterialController", r(798233)).controller("QuestionnaireActivityController", r(964457)).controller("ScormController", r(743130)).controller("WebLinkController", r(690561)).controller("WebLinkScoreController", r(869160)).controller("HomeworkActivityCtrl", r(618478)).controller("ReallocateHomeworkController", r(81343)).controller("HomeworkLogsCtrl", r(989508)).controller("QuestionnaireLogsCtrl", r(470586)).controller("ExamLogsCtrl", r(269237)).controller("ForumController", r(781757)).controller("OnlineVideoController", r(162145)).controller("InteractionActivityController", r(261656)).controller("RubricController", r(905519)).controller("SlideController", r(203225)).controller("LessonController", r(494324)).controller("LessonControllerTca", r(205589)).controller("ChatroomController", r(857465)).controller("PageController", r(163295)).controller("ActivitySelectStudentController", r(550010)).controller("RaceAnswerController", r(724218)).controller("ClassInteractionListController", r(335034)).controller("RollCallController", r(41546)).controller("PageEditController", r(935886)).controller("VirtualClassroomController", r(73009)).controller("ViewVirtualClassroomController", r(535776)).controller("ZoomController", r(662175)).controller("ViewZoomController", r(885984)).controller("MicrosoftTeamsMeetingController", r(717079)).controller("GoogleMeetingController", r(196339)).controller("WelinkController", r(954970)).controller("TencentMeetingController", r(36375)).controller("ActivityResourceController", r(786831)).controller("ActivityResourceInfoEditController", r(322361)).controller("ViewMicrosoftTeamsMeetingController", r(969904)).controller("SaveToLibraryController", r(167459)).controller("ViewGoogleMeetingController", r(684152)).controller("ViewWelinkController", r(907808)).controller("ViewClassinController", r(850388)).controller("ViewTencentMeetingController", r(940688)).controller("ViewVocabularyController", r(385247)).controller("HomeworkCorrectColumnChooserController", r(189456)).controller("AddOrEditRubricPopupController", r(308227)).controller("SelectStudentController", r(963880)).controller("SetSameScoreSubmissionsController", r(985488)).controller("RollcallDetailController", r(951572)).controller("RollcallRootController", r(121511)).controller("StudentRollcallsController", r(926483)).controller("EntryContentController", r(530172)).controller("VocabularyActivityController", r(656264)).controller("EntryDetailController", r(533282)).controller("VirtualExperimentController", r(438489)).controller("ViewVirtualExperimentController", r(812796)).controller("ViewLamsLessonVirtualExperimentController", r(491379)).controller("VirtualExperimentStudentResultController", r(411556)).controller("VirtualExperimentScoreController", r(208528)).controller("HomeworkCheckController", r(662179)).controller("DuplicateDetectLibPopupController", r(168816)).controller("ActivityPublishStatusController", r(21331)).controller("OnlineVideoFullscreenController", r(61004)).config([
        "$routeProvider", "$compileProvider", function(e, t){
          return t.aHrefSanitizationWhitelist(/^\s*(https?|s?ftp|mailto|tel|file|eztest):/), e.when("/:activityId", {
            templateUrl:"activity/_activity_content.html", reloadOnSearch:!1
          }).when("/homeworks/:activityId/logs", {
            templateUrl:"activity/_activity_content.html", reloadOnSearch:!1
          }).when("/questionnaires/:activityId/logs", {
            templateUrl:"activity/_activity_content.html", reloadOnSearch:!1
          }).when("/:activityId/topics/:topicId", {
            templateUrl:"activity/_activity_content.html", reloadOnSearch:!1
          }).when("/exam/:examId", {
            templateUrl:"exam/_show_exam_activity.html"
          }).when("/exam/:examId/logs", {
            templateUrl:"exam/_logs.html"
          }).when("/exam/:examId/score-list", {
            templateUrl:"exam/_score_list.html"
          }).when("/classroom/:classroomId", {
            templateUrl:"classroom/classroom-activity-page/_show_classroom.html"
          }).when("/classroom/:classroomId/subjects", {
            templateUrl:"classroom/classroom-activity-page/_settings.html"
          }).when("/classroom/:classroomId/score-list", {
            templateUrl:"classroom/classroom-activity-page/_score_list.html"
          }).when("/feedback/:classroomId", {
            templateUrl:"classroom/feedback-activity-page/_show_feedback_activity.html"
          }).when("/questionnaire/:questionnaireId", {
            templateUrl:"questionnaire/_show_questionnaire.html"
          }).when("/questionnaire/:questionnaireId/score-list", {
            templateUrl:"questionnaire/_stat_student.html"
          }).when("/questionnaire/:questionnaireId/question-list", {
            templateUrl:"questionnaire/_stat_subject.html"
          }).when("/live_record/:liveRecordId", {
            templateUrl:"live-record/_live_record_content.html"
          }).when("/select_student/:classModeInteractionId", {
            templateUrl:"select_student/_select_student_content.html"
          }).when("/race_answer/:classModeInteractionId", {
            templateUrl:"race_answer/_race_answer_content.html"
          }).when("/number_rollcall/:rollcallId", {
            templateUrl:"rollcall/rollcall-activity-page/_show_rollcall_activity.html"
          }).when("/qr_rollcall/:rollcallId", {
            templateUrl:"rollcall/rollcall-activity-page/_show_rollcall_activity.html"
          }).when("/danmu/:danmuActivityId", {
            templateUrl:"classroom/danmu-activity-page/_show_danmu_activity.html"
          }).when("/vote/:voteId", {
            templateUrl:"classroom/vote-activity-page/_show_vote_activity.html"
          })
        }
      ]).run([
        "$rootScope", e=>e.setFileSelectScopeId=t=>e.fileSelectScopeId=t
      ])
    }, 112060:(e, t, r)=>{
      r.d(t, {
        FW:()=>s, _O:()=>c
      });
      var i=r(738645), n=r(152229), o=function(e, t, r, i){
        var n, o=arguments.length, s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t, r):i;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, i);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(o<3?n(s):o>3?n(t, r, s):n(t, r))||s);
        return o>3&&s&&Object.defineProperty(t, r, s), s
      }, s=function(){
        function e(){
        }
        return o([
          (0, i.v)()
        ], e.prototype, "id", void 0), o([
          (0, i.v)()
        ], e.prototype, "orgId", void 0), o([
          (0, i.v)()
        ], e.prototype, "parentId", void 0), o([
          (0, i.v)()
        ], e.prototype, "ccLicenseId", void 0), o([
          (0, i.v)()
        ], e.prototype, "referrerId", void 0), o([
          (0, i.v)()
        ], e.prototype, "name", void 0), o([
          (0, i.v)()
        ], e.prototype, "ccLicenseName", void 0), o([
          (0, i.v)()
        ], e.prototype, "ccLicenseLink", void 0), o([
          (0, i.v)()
        ], e.prototype, "ccLicenseCode", void 0), o([
          (0, i.v)()
        ], e.prototype, "ccLicenseDescription", void 0), o([
          (0, i.v)()
        ], e.prototype, "referrerType", void 0), o([
          (0, i.v)()
        ], e.prototype, "resourceType", void 0), o([
          (0, i.v)()
        ], e.prototype, "auditStatus", void 0), o([
          (0, i.v)()
        ], e.prototype, "openScope", void 0), o([
          (0, i.v)()
        ], e.prototype, "allowDownload", void 0), o([
          (0, i.v)()
        ], e.prototype, "allowSave", void 0), o([
          (0, i.v)()
        ], e.prototype, "isFolder", void 0), o([
          (0, i.v)()
        ], e.prototype, "reported", void 0), o([
          (0, i.v)()
        ], e.prototype, "selected", void 0), o([
          (0, i.v)()
        ], e.prototype, "_checked", void 0), o([
          (0, i.v)()
        ], e.prototype, "upload", void 0), o([
          (0, i.v)()
        ], e.prototype, "subjectLibrary", void 0), o([
          (0, i.v)()
        ], e.prototype, "slide", void 0), o([
          (0, i.v)()
        ], e.prototype, "coursePackage", void 0), o([
          (0, i.v)()
        ], e.prototype, "lessonResource", void 0), o([
          (0, i.v)()
        ], e.prototype, "percentage", void 0), o([
          (0, i.v)()
        ], e.prototype, "courseCode", void 0), e
      }
      (), a=function(){
        function e(){
        }
        return o([
          (0, i.v)()
        ], e.prototype, "id", void 0), o([
          (0, i.v)()
        ], e.prototype, "name", void 0), o([
          (0, i.v)({
            name:"user_no"
          })
        ], e.prototype, "userNo", void 0), e
      }
      (), c=function(){
        function e(){
          this.createdAt="", this.createdById=0, this.createdBy=null, this.allowDownload=!1, this.uploadedAt="", this.referenceId=0
        }
        return o([
          (0, i.v)()
        ], e.prototype, "id", void 0), o([
          (0, i.v)()
        ], e.prototype, "name", void 0), o([
          (0, i.v)()
        ], e.prototype, "size", void 0), o([
          (0, i.v)()
        ], e.prototype, "type", void 0), o([
          (0, i.v)()
        ], e.prototype, "status", void 0), o([
          (0, i.v)()
        ], e.prototype, "link", void 0), o([
          (0, i.v)()
        ], e.prototype, "key", void 0), o([
          (0, i.v)({
            name:"created_at"
          })
        ], e.prototype, "createdAt", void 0), o([
          (0, i.v)({
            name:"created_by_id"
          })
        ], e.prototype, "createdById", void 0), o([
          (0, i.v)({
            name:"created_by"
          }), (0, n.Z)((function(){
            return a
          }))
        ], e.prototype, "createdBy", void 0), o([
          (0, i.v)({
            name:"allow_download"
          })
        ], e.prototype, "allowDownload", void 0), o([
          (0, i.v)({
            name:"uploaded_at"
          })
        ], e.prototype, "uploadedAt", void 0), o([
          (0, i.v)({
            name:"reference_id"
          })
        ], e.prototype, "referenceId", void 0), e
      }
      ();
      (function(){
        function e(){
        }
        o([
          (0, i.v)()
        ], e.prototype, "id", void 0), o([
          (0, i.v)()
        ], e.prototype, "title", void 0), o([
          (0, i.v)()
        ], e.prototype, "type", void 0), o([
          (0, i.v)()
        ], e.prototype, "isShared", void 0)
      })(), function(){
        function e(){
        }
        o([
          (0, i.v)()
        ], e.prototype, "id", void 0), o([
          (0, i.v)()
        ], e.prototype, "title", void 0), o([
          (0, i.v)()
        ], e.prototype, "videoId", void 0), o([
          (0, i.v)()
        ], e.prototype, "demandId", void 0), o([
          (0, i.v)()
        ], e.prototype, "templateId", void 0)
      }
      (), function(){
        function e(){
        }
        o([
          (0, i.v)()
        ], e.prototype, "id", void 0), o([
          (0, i.v)()
        ], e.prototype, "name", void 0), o([
          (0, i.v)()
        ], e.prototype, "isFolder", void 0), o([
          (0, i.v)()
        ], e.prototype, "parentId", void 0)
      }
      (), function(){
        function e(){
        }
        o([
          (0, i.v)()
        ], e.prototype, "id", void 0), o([
          (0, i.v)()
        ], e.prototype, "name", void 0), o([
          (0, i.v)()
        ], e.prototype, "mimetype", void 0), o([
          (0, i.v)()
        ], e.prototype, "appId", void 0)
      }
      ()
    }, 127296:(e, t, r)=>{
      var i=r(302543);
      e.exports=[
        "$scope", "$http", "toastr", function(e, t, r){
          var n=()=>e.activity.videoUrl=e.activity.data.video_id?"/user/slides/".concat(e.activity.data.video_id):"";
          e.openConferenceRecord=function(i){
            return t.put("/api/chatrooms/".concat(i.id, "/open")).success((function(t){
              return e.activity.data.video_id=t.data.video_id, n(), o(), r.success(t.message)
            })).error((e=>r.warning(e.message)))
          };
          var o=function(){
            if(e.activity.data.video_id)return t.get("/api/chatrooms/".concat(e.activity.id, "/records")).success((function(t){
              return e.records=t.records, i.each(e.records, (function(t){
                var r=e.activity.data.video_id;
                return t.downloadUrl="/course/".concat(e.activity.course_id, "/chatroom-records/").concat(r, "/records/").concat(t.recording_id, "/download")
              }))
            }))
          };
          return e.activity.chatroomUrl="/user/chatrooms/".concat(e.activity.data.conference_id), e.activity.chatLogUrl="/course/".concat(e.activity.course_id, "/chatroom-chatlog/").concat(e.activity.data.conference_id, "/download"), e.activity.expired=e.activity.is_closed, n(), o()
        }
      ]
    }, 145289:e=>{
      e.exports=[
        function(){
          var e=void 0, t=void 0;
          return{
            register:(r, i)=>(e=r, t=i), play:t=>e(t), resetCurrentTime:()=>t()
          }
        }
      ]
    }, 150664:(e, t, r)=>{
      var i=r(795093), n=r(302543), o=r(793110), s=r(248124), a=r(756029);
      r(540590), r(219693), r(418665), r(700533), r(168763), r(334867), r(658379), r(14602);
      var c=r(592207);
      function u(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function l(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function s(e){
              u(o, i, n, s, a, "next", e)
            }
            function a(e){
              u(o, i, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      function d(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var i=Object.getOwnPropertySymbols(e);
          t&&(i=i.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }
      function m(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?d(Object(r), !0).forEach((function(t){
            p(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function p(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      r(207452);
      var v=r(128260), f=r(731904)._, h=r(181769).scoreRules, b=r(552979).default;
      e.exports=[
        "$rootScope", "$scope", "rubricRepository", "Rubric", "modelHelper", "homeworkApi", "homeworkRepository", "$routeParams", "GroupInterScoreHelper", "$http", "activityApi", "$location", "toastr", function(e, t, r, u, d, p, y, _, g, w, k, S, I){
          t.$t=b.t.bind(b), t.currentItem={
            submissionId:0
          }, t.scoreRules=h(), t.exportScore=()=>{
            window.location.href="/api/homeworks/".concat(t.homework.id, "/export-score")
          }, t.enableHomeworkReferenceAnswer=window.orgSettings.enableHomeworkReferenceAnswer;
          var C=function(e){
            e.cc_license_references&&e.cc_license_references.length>0&&e.uploads&&e.uploads.length>0&&e.cc_license_references.forEach((t=>{
              e.uploads.forEach((e=>{
                e.id===t.upload_id&&(e.cc_license_code=t.cc_license_code, e.cc_license_link=t.cc_license_link, e.cc_license_name=t.cc_license_name)
              }))
            }))
          };
          t.isDecimal=e=>{
            try{
              return new o(e), !0
            }
            catch(e){
              return!1
            }
          }, t.scoreFormat=e=>t.isDecimal(e)?e:"--";
          var x=()=>{
            y.loadSubmissionForStudent(t.homework).then((function(e){
              var r, i, s, a=e.submission_list.filter((e=>e.marked_submitted)).length;
              t.homework.is_over_submit=t.homework.submit_times<=a, t.homework.submitted_status="";
              var c=n.clone(!!t.homework.is_closed);
              e.make_up_record&&!e.make_up_record.has_submitted&&(t.homework.submitted_status="makeUp", t.homework.make_up_record=e.make_up_record, c&&(t.homework.is_closed=e.make_up_record.make_up_is_closed)), e.resubmit_record&&(t.homework.is_resubmit_open&&(t.homework.submitted_status="resubmit"), t.homework.resubmit_record=e.resubmit_record, c&&t.canShowPromptResubmit()&&(t.homework.is_closed=e.resubmit_record.resubmit_is_closed)), e.make_up_record&&e.resubmit_record&&(t.homework.submitted_status="makeUp", e.make_up_record.last_updated_time<e.resubmit_record.last_updated_time&&t.homework.is_resubmit_open&&(t.homework.submitted_status="resubmit"), c&&("makeUp"===t.homework.submitted_status&&(t.homework.is_closed=e.make_up_record.make_up_is_closed), "resubmit"===t.homework.submitted_status&&(t.homework.is_closed=e.resubmit_record.resubmit_is_closed))), t.homework.submission=n.find(e.submission_list, {
                is_latest_version:!0
              }), t.homework.draft_submission_list=n.filter(e.submission_list, {
                is_draft:!0
              }), (t.homework.draft_submission_list.length>0||null!==(r=t.homework.submission)&&void 0!==r&&r.is_redo)&&(t.hasDraft=!0), t.homework.submission&&t.homework.submission.id&&(t.homework.final_score=e.final_score, t.homework.submission_list=n.filter(e.submission_list, {
                is_draft:!1
              }), e&&t.homework.rubric_id>0&&t.homework.rubric_instance_id>0&&(t.rubricScoreData=v.collateRubricScore(t.homework.submission.rubric_score, t.homework.rubric)));
              var u=(e, r)=>{
                return t.isDecimal(e)?[
                  (i=[
                    e, r, .01
                  ], n.reduce(i, ((e, t)=>new o(e).mul(new o(t))), new o(1)).toFixed(1)), e, r
                ]
                :[
                  "--", "--", r
                ];
                var i
              };
              t.finalInstructorScoreItems=u(null===(i=t.homework.final_score)||void 0===i?void 0:i.instructor_score, t.homework.data.homework_score_percentage.instructor_score_percentage);
              var l=t.homework.submit_by_group?t.homework.data.homework_score_percentage.inter_group_score_percentage:t.homework.data.homework_score_percentage.inter_score_percentage;
              t.finalInterScoreItems=u(null===(s=t.homework.final_score)||void 0===s?void 0:s.inter_score, l)
            })).then((()=>{
              var e, r, i, o;
              (null===(e=t.homework.submission_list)||void 0===e?void 0:e.length)>0&&t.homeworkDuplicateDetectEnabled&&(w.get("/api/homework/".concat(t.homework.id, "/duplicate-detect/task")).then((e=>{
                var r=n.reduce(e.data, ((e, t)=>{
                  var r=t.input.config;
                  return m(m({
                  }, e), r)
                }), {
                });
                t.duplicateDetect.inPlatFormThreshold=r.in_platform.threshold, t.duplicateDetect.cnkiThreshold=r.cnki.threshold
              })).catch((()=>{
                console.error("Task error occurred, cancel now.")
              })), r=t.homework.submission_list, (o=null===(i=t.homework.submission)||void 0===i?void 0:i.id)&&y.loadDuplicateRateWithSubmissionId(o).then((e=>{
                var i=f.keyBy(e, "provider");
                t.homework.submission.duplicateRates=i, r.forEach((e=>{
                  e.duplicateRates=o===e.id?i:{
                  }
                }))
              })))
            }))
          };
          t.isRubricViewable=function(e){
            if(e){
              var t=i.utc();
              return i.utc(e)<t
            }
            return!0
          }, function(){
            var e, n;
            t.ui.view=[
              "attributes", "scores"
            ].includes(_.view)?_.view:"attributes", t.ui.showInterScoreEndedMessage=!1, t.ui.showInterScoreEndTimePassedMessage=!1, t.ui.showLogs=-1!==S.path().indexOf("logs"), t.ui.isFullScreenMode=-1!==S.absUrl().indexOf("full-screen"), t.duplicateDetect={
              inPlatFormThreshold:null, cnkiThreshold:null
            }, t.homeworkDuplicateDetectEnabled=null===(e=window.featureToggles)||void 0===e?void 0:e.homeworkDuplicateDetect, t.homeworkCnkiDuplicateDetect=null===(n=window.featureToggles)||void 0===n?void 0:n.homeworkCnkiDuplicateDetect, t.activity.is_over_submit=t.activity.submit_times<=t.activity.user_submit_count, t.activity.can_submit_times=0, t.activeTab="inPlatform", t.openModal=e=>{
              t.activeTab=e
            }, t.activity.submit_times>=t.activity.user_submit_count&&(t.activity.can_submit_times=t.activity.submit_times-t.activity.user_submit_count);
            var o=t.activity;
            if(t.homework=o, t.homework.data.score_rule=o.data.score_rule||"latest", t.homework.notAnnounced=!t.homework.is_announce_score_time_passed&&1==t.homework.data.announce_score_type, t.homework.notPublish=!t.homework.is_announce_score_time_passed&&1!=t.homework.data.announce_score_type, o.data.other_resources&&(t.homework.uploads=t.homework.uploads.concat(o.data.other_resources)), t.showRemindMsg=Boolean(t.homework.data.create_mapping_failed), t.currentActivity=t.homework, o.rubric_id>0&&o.rubric_instance_id>0&&(t.homework.rubric=u.parse(o.rubric_instance, !0)), r.initRubrics().then((e=>t.rubrics=e)), t.ui.isRubricViewable=!!t.homework.data.show_rubric&&t.isRubricViewable(t.homework.data.rubric_visible_time), C(t.homework), !t.isInstructorView)t.ui.isRubricViewable||(t.ui.rubricVisibleMessage="".concat(t.rubricVisibleTip, "-").concat(i(t.homework.data.rubric_visible_time).format("YYYY.MM.DD HH:mm"))), x()
          }
          (), t.canSubmitHomework=function(e){
            var r, i=arguments.length>1&&void 0!==arguments[
              1
            ]
            &&arguments[
              1
            ], n=t.homework.is_in_progress&&(t.homework.non_submit_times||!t.homework.is_over_submit)||(null===(r=t.homework)||void 0===r?void 0:r.make_up_record)&&!t.homework.make_up_record.make_up_is_closed&&!t.homework.make_up_record.has_submitted||t.canShowPromptResubmit();
            return e?n:i?n&&t.homework.submission&&1===t.homework.submission.recommend:n&&(!t.homework.submission||t.homework.submission&&1!==t.homework.submission.recommend)
          }, t.canShowPromptResubmit=function(){
            var e=t.activity.resubmit_record;
            return e&&!e.has_submitted&&t.homework.is_resubmit_open&&"resubmit"===t.homework.submitted_status
          }, t.editRubric=()=>t.$broadcast("openRubricPopup", t.homework.rubric_id, "edit"), t.viewRubric=function(e){
            var r;
            return!e&&t.homework.rubric&&(r=s.extend(t.homework.rubric, {
              id:t.rubric_id
            })), t.$broadcast("openRubricPopup", t.homework.rubric_id, "view", r)
          }, t.hasScore=e=>!(!e||!e.score&&0!==e.score), t.hasSubmissionCorrected=()=>n.some(t.homework.submission_list, (e=>e.submission_correct&&(e.submission_correct.comment||e.submission_correct.instructor_score||e.submission_correct.rubric_score&&e.submission_correct.rubric_score.length>0||e.submission_correct.uploads.length>0))), t.averageInterScore=function(e){
            var t=n.filter(e, (e=>e.score));
            if(t&&!(t.length<=0))return n.reduce(t, ((e, t)=>e.plus(new o(t.score))), new o(0)).dividedBy(new o(t.length)).toFixed(1)
          };
          var A=e=>{
            var t;
            if(!e||null===(t=e.other_resources)||void 0===t||!t.length)return e;
            var r=n.filter(e.other_resources, {
              source:"LARK"
            });
            return e.uploads.push(...r||[
            ]), e
          };
          t.viewSubmissionForStudent=function(){
            var e=arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :null;
            if(e)t.activeTab="instructorTab", t.selectSubmissionForStudent(e);
            else{
              t.activeTab=t.homework.inter_score_map.id?"studentTab":"instructorTab";
              var r=t.homework.submission_list[
                0
              ];
              t.selectSubmissionForStudent(r)
            }
          }, t.selectSubmissionForStudent=function(e){
            var r=arguments.length>1&&void 0!==arguments[
              1
            ]
            &&arguments[
              1
            ];
            t.currentItem.submissionId=e.id;
            var i=function(i){
              return i!==e&&a.copy(i, e), t.currentItem.submission=A(i), t.isInstructorView||P(e.inter_scores), t.currentItem.submission.slide_references&&(t.slides=n.map(t.currentItem.submission.slide_references, "slide")), t.currentItem.student=i.created_by, t.currentItem.group=i.group, t.currentItem.isRecommendSubmission=r, i.created_at!==e.created_at&&(e.created_at=i.created_at), s("#show-score").foundation("reveal", "open"), !0
            }, o=()=>e.recommend=0, c=n.find(t.homework.submission_list, {
              id:e.id
            });
            return c?i(c):t.homework.submit_by_group?p.getGroupSubmission(t.homework.id, e.group_id, i, o):p.getStudentSubmission(t.homework.id, e.created_by.id, i, o)
          }, t.$watch("currentItem.submissionId", ((e, r)=>{
            var i=n.find(t.homework.submission_list, {
              id:parseInt(e, 10)
            });
            i&&(t.currentItem.submission=A(i), t.isInstructorView||i.inter_scores&&P(i.inter_scores), t.currentItem.submission.slide_references&&(t.slides=n.map(t.currentItem.submission.slide_references, "slide")), t.currentItem.student=i.created_by, t.currentItem.group=i.group)
          })), t.getStudentInfo=d.getBelongTo, t.showSlide=d.showSlide, t.switchToSubmissionTab=()=>t.showSubmission=!0, t.switchToDetailTab=()=>t.showSubmission=!1;
          var P=e=>{
            t.homework.submit_by_group&&(t.interScoreHelper=new g(e))
          };
          t.updateRubricForHomework=function(e){
            if(t.homework.rubric=u.parse(e), t.homework.rubric_id=e.id, t.homework.rubric.created_by=e.created_by, t.homework.rubric_instance&&(t.homework.rubric_instance_id=t.homework.rubric.id, t.homework.rubric_instance.id=t.homework.rubric.id, t.homework.rubric_instance.name=t.homework.rubric.name, t.homework.rubric_instance.conditions=t.homework.rubric.conditions, t.homework.rubric_instance.rubric=t.homework.rubric), t.rubrics){
              var r=n.find(t.rubrics, {
                id:e.id
              });
              a.copy(t.homework.rubric, r)
            }
            t.$emit("activityLoaded", n.assign(t.activity, t.homework)), t.$apply()
          }, t.updateDescriptionForHomework=function(e){
            t.homework.data.description=e, t.$emit("activityLoaded", n.assign(t.activity, t.homework)), t.$apply()
          }, e.$on("homeworkSubmitted", (function(e, r){
            var i;
            if(i=r.id, k.getActivity(i, (e=>{
              n.assign(t.activity, e)
            }), (function(){
            })), w.get("/api/submissions/".concat(r.id, "/count")).success((function(e){
              if(t.activity.user_submit_count=e.submission_count, t.activity.can_submit_times=0, t.homework.can_submit_times=t.activity.can_submit_times, t.activity.is_over_submit=t.activity.submit_times<=t.activity.user_submit_count, t.homework.is_over_submit=t.activity.is_over_submit, t.activity.submit_times>=t.activity.user_submit_count)return t.activity.can_submit_times=t.activity.submit_times-t.activity.user_submit_count, t.homework.can_submit_times=t.activity.can_submit_times
            })), !t.isInstructorView)return x()
          })), e.$on("homeworkHasDraftSubmission", (function(e, r){
            var i;
            if((null===(i=t.homework)||void 0===i?void 0:i.id)===r.id)return t.hasDraft=r.has_draft
          })), e.$on("loadingActivityFinished", (function(){
            var e;
            if("homework"===(null===(e=t.activity)||void 0===e?void 0:e.type))return t.homework=t.activity, t.homework.rubric_id>0&&t.homework.rubric_instance_id>0&&(t.homework.rubric=u.parse(t.homework.rubric_instance)), t.homework.notAnnounced=!t.homework.is_announce_score_time_passed&&1==t.homework.data.announce_score_type, t.homework.notPublish=!t.homework.is_announce_score_time_passed&&1!=t.homework.data.announce_score_type, t.uploads=t.homework.uploads
          }));
          var T=e=>e&&e.submission_correct&&e.submission_correct.instructor_score;
          t.hasInstructorScore=function(e){
            var t=T(e);
            return!isNaN(t)&&null!==t&&""!==t
          }, t.getInstructorScore=function(e, r){
            return t.hasInstructorScore(e)?parseFloat(T(e)):r
          };
          t.viewAssignTarget=(e, r)=>(t.assignTargetPopupTitle=(e=>{
            var r="", i="";
            return e.submit_by_group?(r=e.has_assign_group?t.i18nMessages.someGroups:t.i18nMessages.allGroups, i=e.group_set_name):(r=e.has_assign_student?t.i18nMessages.someStudents:t.i18nMessages.allStudents, i=e.has_assign_student?e.assign_student_ids.length:t.course.students_count, i+=" ".concat(t.i18nMessages.unitOfPeople)), "".concat(r, "（").concat(i, "）")
          })(e), t.vueParam={
            submitByGroup:e.submit_by_group, targetType:r, activityType:"learning_activity", activityId:e.id
          }, s("#assign_target_popup").foundation("reveal", "open")), t.canRetract=e=>e.can_retract&&!e.is_redo&&!e.submit_by_instructor&&t.homework.data.allow_retract, t.openSelectedSubmissionPopup=e=>{
            t.readyToRetractSubmission=e
          }, t.studentRetractSubmission=l(c.mark((function r(){
            var i, n, o, a, u, l, d;
            return c.wrap((function(r){
              for(;
              ;
              )switch(r.prev=r.next){
                case 0:if((n=null===(i=t.readyToRetractSubmission)||void 0===i?void 0:i.id)&&t.homework.id){
                  r.next=3;
                  break
                }
                return r.abrupt("return");
                case 3:return r.prev=3, r.next=6, w.put("/api/submissions/".concat(n, "/retract"));
                case 6:t.homework.non_submit_times||(t.homework.can_submit_times+=1, t.homework.can_submit_times>0&&(t.homework.is_over_submit=!1)), (o=t.homework.submission_list.findIndex((e=>e.id===n)))>-1&&((l=t.homework.submission_list.splice(o, 1)[
                  0
                ]).uploads=null!==(a=null===(u=l.uploads)||void 0===u?void 0:u.filter((e=>"auto-generated-pdf"!==e.source)))&&void 0!==a?a:[
                ], t.homework.draft_submission_list||(t.homework.draft_submission_list=[
                ]), t.homework.draft_submission_list.unshift(l), t.hasDraft=!0), e.$emit("$refreshPrerequisitesStatus", t.homework.submission_list.length>0), I.success(t.$t("homework.retractSuccess")), r.next=16;
                break;
                case 13:r.prev=13, r.t0=r.catch(3), 40001===(null===(d=r.t0.data)||void 0===d?void 0:d.code)&&(I.error(t.$t("homework.retractFailed")), t.readyToRetractSubmission.can_retract=!1, setTimeout((()=>{
                  window.location.reload()
                }), 200));
                case 16:t.isInstructorView||x(), s("#retract-submission-confirm-popup").foundation("reveal", "close");
                case 18:case"end":return r.stop()
              }
            }), r, null, [
              [
                3, 13
              ]
            ])
          }))), t.isShowDuplicateRate=(e, r)=>(t.homeworkDuplicateDetectEnabled||t.homeworkCnkiDuplicateDetect)&&e.is_latest_version&&r.some((t=>{
            var r, i;
            return a.isNumber(null===(r=e.duplicateRates)||void 0===r||null===(i=r[
              t
            ])||void 0===i?void 0:i.duplicate_rate)
          })), t.select2OptionsWithMarkedStatus={
            containerCssClass:"", dropdownCssClass:"", formatResult(e){
              var r=n.find(t.homework.submission_list, {
                id:parseInt(e.id, 10)
              }).submission_correct;
              if(r.instructor_score||r.comment)return e.text;
              var i=t.$t("homework.unMarked");
              return"".concat(e.text, '<span class="warning-tag"><i>').concat(i, "</i></span>")
            }, formatSelection(e){
              return this.formatResult(e)
            }
          }, t.validateHomeworkData=function(){
            return!!t.homework&&!(t.homework.group_set_id&&!t.homework.group_id)
          }
        }
      ]
    }, 161788:(e, t, r)=>{
      var i=r(248124), n=r(302543), o=r(793110);
      function s(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], i=!0, n=!1, o=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(i=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            i=!0);
          }
          catch(e){
            n=!0, o=e
          }
          finally{
            try{
              i||null==a.return||a.return()
            }
            finally{
              if(n)throw o
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return a(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function a(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      r(215195), r(700533), e.exports=[
        "$rootScope", "$scope", "$routeParams", "toastr", "classroomRepository", "$q", "ExamHelper", "$window", "classroomApi", function(e, t, r, a, c, u, l, d, m){
          delete e.progressUi;
          var p=i("#userRole").val();
          e.context||(e.context={
          }), e.$on("refreshClassroomData", ((e, t)=>v(t)));
          var v=e=>t.classroom=t.currentActivity=e;
          t.saveSubjectsToLib=()=>e.$broadcast("saveSubjectsToLib", {
            classroomId:t.classroomId, subjectCount:t.subjects.length
          }), t.showSubjectsSummary=(e, t, r)=>l.getSubjectsSummary(e, t, r), t.manageSubjects=function(e){
            return m.getClassroomExam(e.id, (function(r){
              return r.status&&[
                "start", "finish"
              ].includes(r.status)?(a.error(t.classroomStatusChangedMessage), c.deleteClassroomCache(e.id), f()):d.location.href="/course/classroom-exam/".concat(e.id, "/subjects")
            }), (function(){
            }))
          }, t.startClassroom=function(e){
            return c.startClassroom(e.id, (function(r){
              return statistics.track({
                activity_id:e.id, activity_type:"classroom_exam", action:statistics.enums.Action.start, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web
              }), e.is_quiz_control_by_subject?t.progressClassroom(e):(r.syllabus_summary=e.syllabus_summary, r.isQuizPublic=t.subjects_rule.public, r.isQuizControlBySubject=t.subjects_rule.subject_by_subject_control, v(r))
            }), (()=>f()))
          }, t.finishClassroom=function(e){
            return c.finishClassroom(e.id, (r=>{
              r.syllabus_summary=e.syllabus_summary, r.isQuizPublic=t.subjects_rule.public, r.isQuizControlBySubject=t.subjects_rule.subject_by_subject_control, v(r), statistics.track({
                activity_id:e.id, activity_type:"classroom_exam", action:statistics.enums.Action.end, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web
              })
            }), (()=>f()))
          }, t.progressClassroom=e=>d.location.href="/course/classroom-exam/".concat(e.id, "/subjects#/progress");
          var f=function(){
            var r=c.initClassroom(t.classroomId), i=c.initSubjectsRule(t.classroomId);
            return c.initSubjects(t.classroomId).then((function(e){
              return t.subjects=e.subjects, t.groupedSubjects=l.groupSubjects(e.subjects), t.totalScore=n.reduce(e.subjects, ((e, t)=>e.plus(new o(t.point))), new o(0))
            })), u.all([
              r, i
            ]).then((function(){
              var r=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), i=s(r, 2), n=i[
                0
              ], o=i[
                1
              ];
              o&&n&&("Student"===p&&t.$emit("onActivityLoaded", n), t.subjects_rule=o, e.context.classroomId=n.id, e.context.classroom=t.classroom=n, t.currentActivity=t.classroom, t.classroom.isQuizPublic=t.subjects_rule.public, t.classroom.isQuizControlBySubject=t.subjects_rule.subject_by_subject_control)
            }))
          };
          f()
        }
      ]
    }, 168816:(e, t, r)=>{
      var i=r(248124);
      e.exports=[
        "$window", "$scope", function(e, t){
          t.closePopup=()=>{
            i("#duplicate-detect-lib").foundation("reveal", "close");
            var t=new Event("homeworkLibraryRefresh");
            e.dispatchEvent(t)
          }
        }
      ]
    }, 189456:(e, t, r)=>{
      var i=r(248124), n=r(756029);
      e.exports=[
        "$rootScope", "$scope", "$http", "toastr", function(e, t){
          t.save=function(){
            return t.updateHomeworkCorrectColumnSetting(t.homeworkCorrectColumnSettingCopy), i("#homework-correct-column-chooser-popup").foundation("reveal", "close"), !0
          };
          return t.homeworkCorrectColumnSettingCopy=n.copy(t.homeworkCorrectColumnSetting)
        }
      ]
    }, 207418:(e, t, r)=>{
      var i=r(248124);
      r(158649);
      e.exports=[
        "$rootScope", "$scope", "$timeout", "scormUtils", function(e, t, r, n){
          t.ui={
            uploadStatus:"", uploadType:"", sidebarExpanded:!1
          }, t.enterFullScreen=()=>t.enterHTML5FullScreen(i("#scorm-viewer").get(0)), t.enterHTML5FullScreen=function(e){
            return e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():void 0
          }, t.viewScorm=function(e){
            var r=i(".scorm-player-section #scorm-viewer").get(0), n=e.scormUrl;
            if(n){
              var o=n.split("?").pop();
              r&&i(r).attr("src", "/activity/".concat(t.activity.id, "/scorm/").concat(t.scormId, "?").concat(o))
            }
          }, t.toggleSidebar=()=>t.ui.sidebarExpanded=!t.ui.sidebarExpanded;
          return function(){
            if(t.activity.uploads.length>0&&(t.ui.uploadStatus=t.activity.uploads[
              0
            ].status, t.ui.uploadType=t.activity.uploads[
              0
            ].type), t.activity.uploads.length>0&&"ready"===t.activity.uploads[
              0
            ].status&&!t.activity.uploads[
              0
            ].deleted){
              if("scorm"===t.activity.uploads[
                0
              ].type){
                var e=t.activity.uploads[
                  0
                ].scorm.id;
                return t.scormId=e, t.scormManifest=t.activity.uploads[
                  0
                ].scorm.data.manifest, n.bindItemResources(e, t.scormManifest.organizations.organization.item, t.scormManifest.resources.resource), r((()=>t.viewScorm(n.getFirstScoItem(t.scormManifest.organizations.organization.item))))
              }
              var o;
              if("evercam"===t.activity.uploads[
                0
              ].type)return o=t.isVisitor&&t.resourceId?"/anonymous-api/shared-resources/".concat(t.resourceId, "/evercams"):"/api/uploads/embed-material/".concat(t.activity.uploads[
                0
              ].id), r((()=>{
                i(".".concat(t.activity.uploads[
                  0
                ].type, "-container #").concat(t.activity.uploads[
                  0
                ].type, "-viewer")).attr("src", o)
              }))
            }
          }
          ()
        }
      ]
    }, 208528:(e, t, r)=>{
      var i=r(302543), n=r(756029);
      function o(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], i=!0, n=!1, o=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(i=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            i=!0);
          }
          catch(e){
            n=!0, o=e
          }
          finally{
            try{
              i||null==a.return||a.return()
            }
            finally{
              if(n)throw o
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return s(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function s(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      r(215195), r(850785);
      var a=r(111172);
      e.exports=[
        "$scope", "$location", "$q", "$window", "activityRepository", "modelHelper", "EnrollmentFilter", function(e, t, r, s, c, u, l){
          e.condition={
            department_ids:[
            ], grade_ids:[
            ], class_ids:[
            ], statuses:[
            ], keyword:""
          }, e.pageSize=100, e.pagination=a(e, t, "students");
          var d=function(t){
            return e.pages=t.pages, e.pagedStudents=t.data
          };
          e.changePage=function(t){
            e.pagination.changePageAtFrontEnd(t, e.filteredStudents, d)
          }, e.search=()=>m(), e.getReportTitleByType=i.memoize(((t, r)=>{
            var i={
              lab_report:e.labReportTitle, report_part:e.reportPartTitle, steps:e.reportStepsTitle
            };
            return"".concat(t.name, " ").concat(i[
              r
            ])
          }), ((e, t)=>"".concat(e.user_no, "_").concat(t))), e.getReportContentsByType=i.memoize(((e, t)=>{
            var r=e.submissions[
              e.submissions.length-1
            ]
            [
              t
            ];
            return Array.isArray(r)?r:[
              r
            ]
          }), ((e, t)=>"".concat(e.user_no, "_").concat(t))), e.downloadReportAsPdf=function(t, r){
            s.location.href="/course/virtual-experiments/".concat(e.virtualExperimentId, "/")+"users/".concat(t, "/score-report/pdf-download?report_type=").concat(r)
          };
          var m=function(){
            return e.filteredStudents=i.filter(e.students, (t=>l.filterEnrollments(e, t))), e.changePage(1)
          }, p=function(e, t){
            e&&e.score?(t.score=e.score, t.status="completed", t.submissions=e.data||[
            ]):(t.score="--", t.status="uncompleted", t.submissions=[
            ])
          };
          return function(){
            e.virtualExperimentId=e.activity.id;
            var t=e.activity.course_id, s=c.initStudents(t, !0), a=c.initVirtualExperimentScores(e.virtualExperimentId);
            return r.all([
              s, a
            ]).then((function(){
              var t=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), r=o(t, 2), s=r[
                0
              ], a=r[
                1
              ];
              return e.originalStudents=n.copy(s), i.each(s, (function(e){
                e.belongTo=u.getBelongTo(e);
                var t=i.find(a, {
                  user_id:e.id
                });
                p(t, e)
              })), e.students=s, e.filteredStudents=s, l.initDepartmentsInfoForEnrollments(e, s), m()
            }))
          }
          ()
        }
      ]
    }, 212748:(e, t, r)=>{
      var i=r(302543), n=r(248124);
      e.exports=[
        "$scope", "videoPlayerService", "$http", (e, t, r)=>{
          e.ui=e.ui||{
          }, e.playVideo=()=>{
            null!==e.playSchedule&&r.get(e.activity.preview_url).success((r=>{
              var o=r.data.map((e=>({
                file_url:e
              })));
              i.map(o, ((e, t)=>e.id=t)), e.availableVideos=o, t.play(o), n(".video-ctrl-bottom > .ctrl-button.sources").remove(), e.ui.contentLoadingComplete=!0
            })).error((e=>console.error(e)))
          }
        }
      ]
    }, 242634:()=>{
    }, 243278:(e, t, r)=>{
      var i=r(248124), n=r(302543);
      r(640173);
      var o=r(571478);
      e.exports=[
        "$rootScope", "$scope", "$http", "toastr", function(e, t, r, s){
          var a=o(t);
          return t.model={
            sendEmail:!1, emailToInstructorAndAssistantAlso:!1
          }, t.save=function(){
            var e;
            return a.show(), e=t.homework.submit_by_group?n(t.selectedSubmissions).map("students").flatten().map("student").map("id").value():n.map(t.selectedSubmissions, (e=>e.student.id)), r.post("/api/homework/".concat(t.homework.id, "/review-notification"), {
              send_email:t.model.sendEmail, email_to_instructor_and_assistant_also:t.model.emailToInstructorAndAssistantAlso, student_ids:e
            }).success((function(e){
              return a.hide(), i("#review-notification-popup").foundation("reveal", "close"), s.success(e.message)
            })).error((function(e){
              return a.hide(), s.error(e.message)
            }))
          }, t.getReviewNotificationConfirmInfo=function(){
            var e;
            if(t.homework&&!n.isEmpty(t.filteredSubmissions))return e=t.homework.submit_by_group?t.groupConfirmInfoForSelected:t.normalConfirmInfoForSelected, t.selectedSubmissions=n.filter(t.filteredSubmissions, (e=>e.selected&&e.inReview&&e.reviewedCount<t.homework.inter_score_map.pieces_cnt)), e.replace("{0}", t.selectedSubmissions.length)
          }, t.reset=()=>t.model.sendEmail=!1
        }
      ]
    }, 269237:e=>{
      e.exports=[
        "$scope", "$q", "$http", "$routeParams", (e, t, r, i)=>{
          e.examId=i.examId, e.isMakeUpExamFeatureOpen?e.tabView="makeUpList":e.isRetakeExamFeatureOpen&&(e.tabView="retakeRecordList"), e.vueParam={
            examId:e.examId
          };
          var n, o;
          e.isMakeUpExamFeatureOpen&&(n=e.examId, o=t.defer(), r.get("/api/exam/".concat(n, "/logs")).success((e=>o.resolve(e.logs))).error((()=>o.resolve([
          ]))), o.promise).then((t=>{
            e.logs=t
          }))
        }
      ]
    }, 294132:(e, t, r)=>{
      var i=r(962893), n=r(846413), o=(r(269193), r(592207)), s=r.n(o), a=(r(207452), r(595738)), c=r(671520), u=(r(168763), r(552979)), l=(r(906048), r(348825), r(754989), r(658379), function(e, t){
        void 0===t&&(t=!0);
        var r=e/1e3;
        (!r||r<0)&&(r=0);
        var i=Math.floor(r/3600);
        r%=3600;
        var n=Math.floor(r/60);
        r%=60, r=Math.floor(r);
        var o=function(e){
          return e.toString().padStart(2, "0")
        };
        return!i&&t?"".concat(o(n), ":").concat(o(r)):"".concat(o(i), ":").concat(o(n), ":").concat(o(r))
      }), d=function e(t){
        if(Array.isArray(t))return t.map((function(t){
          return e(t)
        }));
        var r={
        };
        return Object.getOwnPropertyNames(t).filter((function(e){
          return!e.startsWith("_")
        })).forEach((function(e){
          r[
            e
          ]
          =t[
            e
          ]
        })), r
      }, m=function(e, t){
        var r=(0, a.EW)((function(){
          return!!t&&function(e, t){
            var r=t.start, i=t.end, n=e.player._innerPlayer.currentTime;
            return(n*=1e3)>=r&&n<i
          }
          (e, t)
        })), i=(0, a.WQ)("isInstructorView", !1), n=(0, a.WQ)("seekable", !0);
        return{
          isActive:r, jumpTo:function(t){
            e.player&&(i||n)&&(e.player._innerPlayer.currentTime=t/1e3)
          }
        }
      }, p=(r(540590), r(418665), r(14602), r(272505)), v=r.n(p), f=r(218831), h=r(755373), b=function(e, t, r, i){
        return new(r||(r=Promise))((function(n, o){
          function s(e){
            try{
              c(i.next(e))
            }
            catch(e){
              o(e)
            }
          }
          function a(e){
            try{
              c(i.throw(e))
            }
            catch(e){
              o(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((i=i.apply(e, t||[
          ])).next())
        }))
      }, y=function(e, t){
        var r, i, n, o, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, i&&(n=2&a[
                  0
                ]
                ?i.return:a[
                  0
                ]
                ?i.throw||((n=i.return)&&n.call(i), 0):i.next)&&!(n=n.call(i, a[
                  1
                ])).done)return n;
                switch(i=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, i=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], i=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      }, _=function(e){
        return b(void 0, void 0, void 0, (function(){
          var t, r;
          return y(this, (function(i){
            switch(i.label){
              case 0:return i.trys.push([
                0, 2, , 3
              ]), t="".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/chapters:batchGet"), [
                4, v().get(t)
              ];
              case 1:return(r=i.sent()).data.data&&r.data.data.length>0?[
                2, (0, f.camelizeKeys)(r.data.data)
              ]
              :[
                2, [
                ]
              ];
              case 2:return i.sent(), [
                2, [
                ]
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, g=function(e){
        return b(void 0, void 0, void 0, (function(){
          var t, r, i, n;
          return y(this, (function(o){
            switch(o.label){
              case 0:return(t=e.getContextInfo)?[
                4, t()
              ]
              :[
                3, 2
              ];
              case 1:return i=o.sent()||{
              }, [
                3, 3
              ];
              case 2:i={
              }, o.label=3;
              case 3:r=i, o.label=4;
              case 4:return o.trys.push([
                4, 6, , 7
              ]), n=(0, f.decamelizeKeys)({
                mediaId:e.mediaId, inputs:[
                  {
                    key:"chapter-input-0", inputUrl:e.source, context:r
                  }
                ], callback:e.callback||""
              }), [
                4, v().post("".concat(e.server, "/api/org/").concat(e.organization, "/media/chapter-task"), n)
              ];
              case 5:return[
                2, o.sent().data.data.id
              ];
              case 6:return o.sent(), [
                2, null
              ];
              case 7:return[
                2
              ]
            }
          }))
        }))
      }, w=function(e){
        return b(void 0, void 0, void 0, (function(){
          var t, r;
          return y(this, (function(i){
            switch(i.label){
              case 0:return i.trys.push([
                0, 2, , 3
              ]), t={
                media_ids:[
                  e.mediaId
                ]
              }, [
                4, v().get("".concat(e.server, "/api/org/").concat(e.organization, "/media/chapter-tasks"), {
                  params:t, paramsSerializer:function(e){
                    return h.stringify(e, {
                      indices:!1
                    })
                  }
                })
              ];
              case 1:return(r=i.sent()).data.data.length>0?[
                2, r.data.data[
                  0
                ]
              ]
              :[
                2, null
              ];
              case 2:return i.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, k=function(e, t, r){
        return void 0===t&&(t=1), void 0===r&&(r=10), b(void 0, void 0, void 0, (function(){
          var i;
          return y(this, (function(n){
            switch(n.label){
              case 0:return n.trys.push([
                0, 2, , 3
              ]), [
                4, v().get("".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/captions"), {
                  params:{
                    page:t, page_size:r
                  }
                })
              ];
              case 1:return i=n.sent(), [
                2, (0, f.camelizeKeys)(i.data.data)
              ];
              case 2:return n.sent(), [
                2, {
                  error:!0, total:0, page:t, pageSize:r, items:[
                  ]
                }
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, S=function(e){
        return b(void 0, void 0, void 0, (function(){
          var t, r, i, n;
          return y(this, (function(o){
            switch(o.label){
              case 0:return o.trys.push([
                0, 5, , 6
              ]), (t=e.getContextInfo)?[
                4, t()
              ]
              :[
                3, 2
              ];
              case 1:return i=o.sent()||{
              }, [
                3, 3
              ];
              case 2:i={
              }, o.label=3;
              case 3:return r=i, n={
                inputs:[
                  {
                    key:"caption-input-0", input_url:e.source, context:r
                  }
                ], callback:e.callback
              }, [
                4, v().post("".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/caption-task"), n)
              ];
              case 4:return[
                2, o.sent().data.data.id
              ];
              case 5:return o.sent(), [
                2, null
              ];
              case 6:return[
                2
              ]
            }
          }))
        }))
      }, I=function(e){
        return b(void 0, void 0, void 0, (function(){
          var t;
          return y(this, (function(r){
            switch(r.label){
              case 0:return r.trys.push([
                0, 2, , 3
              ]), [
                4, v().get("".concat(e.server, "/api/media/media-caption-tasks/progress"), {
                  params:{
                    media_ids:[
                      e.mediaId
                    ]
                  }, paramsSerializer:function(e){
                    return h.stringify(e, {
                      indices:!1
                    })
                  }
                })
              ];
              case 1:return(t=r.sent()).data.data.progress.length>0?[
                2, t.data.data.progress[
                  0
                ]
              ]
              :[
                2, null
              ];
              case 2:return r.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, C=function(e, t, r){
        return b(void 0, void 0, void 0, (function(){
          var i;
          return y(this, (function(n){
            switch(n.label){
              case 0:return n.trys.push([
                0, 2, , 3
              ]), i={
                text:r
              }, [
                4, v().put("".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/captions/").concat(t), i)
              ];
              case 1:return[
                2, n.sent()
              ];
              case 2:return n.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, x=function(e, t){
        return b(void 0, void 0, void 0, (function(){
          return y(this, (function(r){
            switch(r.label){
              case 0:return r.trys.push([
                0, 2, , 3
              ]), [
                4, v().delete("".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/captions/").concat(t))
              ];
              case 1:return[
                2, r.sent()
              ];
              case 2:return r.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, A=function(e, t, r){
        return b(void 0, void 0, void 0, (function(){
          return y(this, (function(i){
            switch(i.label){
              case 0:return i.trys.push([
                0, 2, , 3
              ]), [
                4, v().put("".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/chapters/").concat(t), r)
              ];
              case 1:return[
                2, i.sent()
              ];
              case 2:return i.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, P=function(e){
        return b(void 0, void 0, void 0, (function(){
          return y(this, (function(t){
            switch(t.label){
              case 0:return[
                4, v().get("".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/captions:languages"))
              ];
              case 1:return[
                2, t.sent().data.data
              ]
            }
          }))
        }))
      }, T=function(e, t){
        return b(void 0, void 0, void 0, (function(){
          var r, i, n, o, s, a;
          return y(this, (function(c){
            switch(c.label){
              case 0:return(r=e.getContextInfo)?[
                4, r()
              ]
              :[
                3, 2
              ];
              case 1:return n=c.sent()||{
              }, [
                3, 3
              ];
              case 2:n={
              }, c.label=3;
              case 3:return i=n, o="".concat(e.server, "/api/org/").concat(e.organization, "/media/").concat(e.mediaId, "/captions:translated"), s={
              }, i&&(s={
                Authorization:"Bearer ".concat(i.airAccessToken)
              }), [
                4, v().get(o, {
                  params:{
                    lang:t
                  }, headers:s
                })
              ];
              case 4:return a=c.sent(), [
                2, (0, f.camelizeKeys)(a.data.data)
              ]
            }
          }))
        }))
      };
      function R(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var i=Object.getOwnPropertySymbols(e);
          t&&(i=i.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }
      function O(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?R(Object(r), !0).forEach((function(t){
            E(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function E(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      function M(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      const $=(0, a.pM)({
        props:{
          chapter:{
            type:Object, required:!0
          }, player:{
            type:Object, required:!0
          }, config:{
            type:Object, required:!0
          }, disableInteractions:{
            type:Boolean, default:!1
          }
        }, setup(e, t){
          var r=t.emit, i=(0, a.KR)(), n=(0, a.WQ)("isInstructorView", !1), o=m(e, {
            start:e.chapter.startTs, end:e.chapter.endTs
          }).isActive;
          (0, a.wB)(o, (t=>{
            t&&r("autoscroll", {
              el:i.value, chapter:e.chapter
            })
          }));
          var c=(0, a.KR)(!1), u=(0, a.KR)(e.chapter.title), d=(0, a.KR)(e.chapter.summary), p=function(){
            var t, i=(t=s().mark((function t(){
              return s().wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return t.next=2, A(e.config, e.chapter.id, {
                    title:u.value, summary:d.value
                  });
                  case 2:t.sent&&(c.value=!1, r("update", O(O({
                  }, e.chapter), {
                  }, {
                    title:u.value, summary:d.value
                  })), r("editingEnd"));
                  case 4:case"end":return t.stop()
                }
              }), t)
            })), function(){
              var e=this, r=arguments;
              return new Promise((function(i, n){
                var o=t.apply(e, r);
                function s(e){
                  M(o, i, n, s, a, "next", e)
                }
                function a(e){
                  M(o, i, n, s, a, "throw", e)
                }
                s(void 0)
              }))
            });
            return function(){
              return i.apply(this, arguments)
            }
          }
          ();
          return(0, a.wB)((()=>e.chapter), (()=>{
            u.value=e.chapter.title, d.value=e.chapter.summary
          })), {
            formatTs:l, isActive:o, eleRef:i, clickItem:()=>{
              e.disableInteractions||r("click", e.chapter)
            }, isInstructorView:n, editMode:c, title:u, summary:d, edit:()=>{
              u.value=e.chapter.title, d.value=e.chapter.summary, c.value=!0, r("editingStart")
            }, cancel:()=>{
              c.value=!1, r("editingEnd")
            }, save:p
          }
        }
      });
      var D=r(514486);
      const j=(0, D.A)($, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          ref:"eleRef", staticClass:"online-video-chapter-item", class:{
            active:e.isActive, disabled:e.disableInteractions
          }, on:{
            click:e.clickItem
          }
        }, [
          e.editMode?r("div", {
            staticClass:"online-video-chapter-title-editing"
          }, [
            r("Input", {
              attrs:{
                size:"small"
              }, model:{
                value:e.title, callback:function(t){
                  e.title=t
                }, expression:"title"
              }
            })
          ], 1):r("div", {
            staticClass:"online-video-chapter-title"
          }, [
            r("span", {
              staticClass:"online-video-chapter-ts"
            }, [
              e._v(e._s(e.formatTs(e.chapter.startTs)))
            ]), e._v(" "), r("span", [
              e._v(e._s(e.chapter.title))
            ])
          ]), e._v(" "), e.editMode?r("div", {
            staticClass:"online-video-chapter-summary-editing"
          }, [
            r("Input", {
              attrs:{
                type:"textarea", rows:2
              }, nativeOn:{
                wheel:function(e){
                  e.stopPropagation()
                }
              }, model:{
                value:e.summary, callback:function(t){
                  e.summary=t
                }, expression:"summary"
              }
            }), e._v(" "), r("div", {
              staticClass:"online-video-chapter-actions"
            }, [
              r("Button", {
                attrs:{
                  type:"primary", size:"small"
                }, on:{
                  click:function(t){
                    return t.stopPropagation(), e.save(t)
                  }
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  size:"small"
                }, on:{
                  click:function(t){
                    return t.stopPropagation(), e.cancel(t)
                  }
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ], 1):r("div", {
            staticClass:"online-video-chapter-summary"
          }, [
            e._v(e._s(e.chapter.summary))
          ]), e._v(" "), e.editMode||!e.isInstructorView||e.disableInteractions?e._e():r("Dropdown", {
            staticClass:"online-video-chapter-menu", attrs:{
              transfer:""
            }, scopedSlots:e._u([
              {
                key:"list", fn:function(){
                  return[
                    r("DropdownMenu", [
                      r("DropdownItem", {
                        nativeOn:{
                          click:function(t){
                            return t.stopPropagation(), e.edit(t)
                          }
                        }
                      }, [
                        e._v(e._s(e.$t("edit")))
                      ])
                    ], 1)
                  ]
                }, proxy:!0
              }
            ], null, !1, 3277234806)
          }, [
            r("i", {
              staticClass:"font font-more-small"
            })
          ])
        ], 1)
      }), [
      ], !1, null, "4a143486", null).exports;
      var U=r(316503);
      function L(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function N(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function s(e){
              L(o, i, n, s, a, "next", e)
            }
            function a(e){
              L(o, i, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      const F=(0, a.pM)({
        components:{
          ChapterItem:j, Generating:U.A
        }, props:{
          config:{
            type:Object, required:!0
          }, player:{
            type:Object, required:!0
          }
        }, setup(e){
          var t=(0, a.KR)([
          ]), r=(0, a.KR)(), i=(0, a.KR)(""), n=u.default.t("airOptimization.loading"), o=(0, a.WQ)("airGenStatus", {
            hasCaptions:!1, processing:{
              type:"", status:!1
            }
          }), l=(0, a.WQ)("isInstructorView", !1), d=(0, a.KR)(null), p=0, v=m(e).jumpTo, f=()=>{
            p=setInterval(N(s().mark((function r(){
              var n, o;
              return s().wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:return r.next=2, w(e.config);
                  case 2:if("PROCESSING"===(n=r.sent).status){
                    r.next=11;
                    break
                  }
                  if(p&&clearInterval(p), p=0, "FINISHED"!==n.status){
                    r.next=11;
                    break
                  }
                  return r.next=9, _(e.config);
                  case 9:o=r.sent, t.value=o;
                  case 11:i.value=n.status;
                  case 12:case"end":return r.stop()
                }
              }), r)
            }))), 3e3)
          }, h=function(){
            var t=N(s().mark((function t(){
              return s().wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return i.value="PROCESSING", t.next=3, g(e.config);
                  case 3:if(t.sent){
                    t.next=6;
                    break
                  }
                  return t.abrupt("return");
                  case 6:f();
                  case 7:case"end":return t.stop()
                }
              }), t)
            })));
            return function(){
              return t.apply(this, arguments)
            }
          }
          ();
          (0, a.sV)(N(s().mark((function n(){
            var u;
            return s().wrap((function(n){
              for(;
              ;
              )switch(n.prev=n.next){
                case 0:return n.next=2, _(e.config);
                case 2:return t.value=n.sent, n.next=5, (0, a.dY)();
                case 5:if(new c(r.value), t.value.length){
                  n.next=11;
                  break
                }
                return n.next=9, w(e.config);
                case 9:(u=n.sent)&&(i.value=u.status, "PROCESSING"===u.status&&(o.processing.status=u.status, o.processing.type="chapter", f()));
                case 11:case"end":return n.stop()
              }
            }), n)
          }))));
          return{
            chapters:t, eleRef:r, autoscroll:e=>{
              var t, i, n=e.el, o=n.offsetLeft, s=n.clientWidth, a=(null===(t=r.value)||void 0===t?void 0:t.clientWidth)||0, c=(null===(i=r.value)||void 0===i?void 0:i.scrollLeft)||0, u=o+s;
              u>c+a?r.value.scrollLeft=u-a:o<c&&(r.value.scrollLeft=o)
            }, jumpTo:v, progressStatus:i, generateText:n, generate:h, isInstructorView:l, updateChapter:e=>{
              var r=t.value.findIndex((t=>t.id===e.id));
              r>-1&&t.value.splice(r, 1, e)
            }, editingId:d
          }
        }
      });
      const z=(0, D.A)(F, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          ref:"eleRef", staticClass:"online-video-chapter-list"
        }, [
          e._l(e.chapters, (function(t){
            return r("ChapterItem", {
              key:t.id, attrs:{
                chapter:t, player:e.player, config:e.config, "is-editing":e.editingId===t.id, "disable-interactions":!!e.editingId&&e.editingId!==t.id
              }, on:{
                autoscroll:e.autoscroll, click:function(r){
                  return e.jumpTo(t.startTs)
                }, update:e.updateChapter, editingStart:function(r){
                  e.editingId=t.id
                }, editingEnd:function(t){
                  e.editingId=null
                }
              }
            })
          })), e._v(" "), 0===e.chapters.length?r("div", {
            staticClass:"online-video-chapter-list-generate"
          }, [
            e.isInstructorView?[
              "PROCESSING"!==e.progressStatus?r("div", [
                r("div", [
                  e._v(e._s("FAIL"===e.progressStatus?e.$t("air.generateFail"):e.$t("air.chapter.noModule")))
                ]), e._v(" "), r("button", {
                  staticClass:"button air-primary-generate-button", on:{
                    click:e.generate
                  }
                }, [
                  r("i", {
                    staticClass:"font font-ai-generate"
                  }), e._v("\n          "+e._s("FAIL"===e.progressStatus?e.$t("air.generateAgain"):"AI "+e.$t("air.generate"))+"\n        ")
                ])
              ]):r("Generating", {
                staticClass:"caption-generating", attrs:{
                  "generate-text":e.generateText, "animation-count":0
                }
              })
            ]
            :[
              e._v("\n      "+e._s(e.$t("air.chapter.noModule"))+"\n    ")
            ]
          ], 2):e._e()
        ], 2)
      }), [
      ], !1, null, "9bb00622", null).exports;
      var B=r(384027), H=r(769075), V=r(929119);
      function G(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function q(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function s(e){
              G(o, i, n, s, a, "next", e)
            }
            function a(e){
              G(o, i, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      const K=(0, a.pM)({
        props:{
          data:{
            type:Object, required:!0
          }, player:{
            type:Object, required:!0
          }, config:{
            type:Object, required:!0
          }, disableInteractions:{
            type:Boolean, default:!1
          }
        }, setup(e, t){
          var r=m(e, {
            start:e.data.startMs, end:e.data.endMs
          }).isActive, i=(0, a.WQ)("keywords", (0, a.KR)("")), n=(0, a.WQ)("isInstructorView", !1), o=(0, a.KR)(e.data.text), c=(0, a.KR)(!1), d=function(){
            var r=q(s().mark((function r(){
              return s().wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:return r.next=2, C(e.config, e.data.id, o.value);
                  case 2:r.sent&&(c.value=!1, t.emit("on-update-caption", e.data.id, o.value), t.emit("editingEnd"));
                  case 4:case"end":return r.stop()
                }
              }), r)
            })));
            return function(){
              return r.apply(this, arguments)
            }
          }
          (), p=function(){
            var r=q(s().mark((function r(){
              return s().wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:return r.next=2, H.A.open({
                    title:u.default.t("airCredit.userStateStats.asr"), content:u.default.t("air.caption.deleteTips")
                  });
                  case 2:if(r.sent){
                    r.next=5;
                    break
                  }
                  return r.abrupt("return");
                  case 5:return r.next=7, x(e.config, e.data.id);
                  case 7:null!==r.sent&&t.emit("on-delete-caption", e.data.id);
                  case 9:case"end":return r.stop()
                }
              }), r)
            })));
            return function(){
              return r.apply(this, arguments)
            }
          }
          ();
          return(0, a.wB)((()=>e.data), (()=>{
            o.value=e.data.text
          })), {
            isActive:r, formatTs:l, clickItem:()=>{
              e.disableInteractions||t.emit("click", e.data)
            }, save:d, cancel:()=>{
              o.value=e.data.text, c.value=!1, t.emit("editingEnd")
            }, text:o, del:p, editMode:c, edit:()=>{
              c.value=!0, t.emit("editingStart")
            }, keywords:i, highlightKeyword:V.w, isInstructorView:n
          }
        }
      });
      const W=(0, D.A)(K, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"online-video-caption-subtitle"
        }, [
          r("div", {
            staticClass:"online-video-caption-subtitle-start"
          }, [
            e._v(e._s(e.formatTs(e.data.startMs)))
          ]), e._v(" "), e.editMode?r("div", {
            staticClass:"online-video-caption-subtitle-text-editing"
          }, [
            r("Input", {
              attrs:{
                type:"textarea"
              }, model:{
                value:e.text, callback:function(t){
                  e.text=t
                }, expression:"text"
              }
            }), e._v(" "), r("div", [
              r("Button", {
                attrs:{
                  type:"primary", size:"small"
                }, on:{
                  click:e.save
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  size:"small"
                }, on:{
                  click:e.cancel
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ], 1):r("div", {
            staticClass:"online-video-caption-subtitle-text", class:{
              active:e.isActive, disabled:e.disableInteractions
            }, domProps:{
              innerHTML:e._s(e.highlightKeyword(e.text, e.keywords))
            }, on:{
              click:e.clickItem
            }
          }), e._v(" "), e.editMode||!e.isInstructorView||e.disableInteractions?e._e():r("Dropdown", {
            staticClass:"online-video-caption-subtitle-menu", attrs:{
              transfer:""
            }, scopedSlots:e._u([
              {
                key:"list", fn:function(){
                  return[
                    r("DropdownMenu", [
                      r("DropdownItem", {
                        nativeOn:{
                          click:function(t){
                            return e.edit(t)
                          }
                        }
                      }, [
                        e._v(e._s(e.$t("edit")))
                      ]), e._v(" "), r("DropdownItem", {
                        nativeOn:{
                          click:function(t){
                            return e.del(t)
                          }
                        }
                      }, [
                        e._v(e._s(e.$t("delete")))
                      ])
                    ], 1)
                  ]
                }, proxy:!0
              }
            ], null, !1, 2803883753)
          }, [
            r("i", {
              staticClass:"font font-more-small"
            })
          ])
        ], 1)
      }), [
      ], !1, null, "896485bc", null).exports, Q=(0, a.pM)({
        components:{
          SubtitlesItem:W
        }, props:{
          data:{
            type:Array, required:!0
          }, player:{
            type:Object, required:!0
          }, config:{
            type:Object, required:!0
          }
        }, setup:(e, t)=>({
          jumpTo:m(e).jumpTo, deleteCaption:e=>{
            t.emit("on-delete-caption", e)
          }, updateCaption:(e, r)=>{
            t.emit("on-update-caption", {
              id:e, text:r
            })
          }, editingId:(0, a.KR)(null)
        })
      });
      const Y=(0, D.A)(Q, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", e._l(e.data, (function(t){
          return r("SubtitlesItem", {
            key:t.id, attrs:{
              data:t, player:e.player, config:e.config, "disable-interactions":!!e.editingId&&e.editingId!==t.id
            }, on:{
              click:function(r){
                return e.jumpTo(t.startMs)
              }, "on-delete-caption":e.deleteCaption, "on-update-caption":e.updateCaption, editingStart:function(r){
                e.editingId=t.id
              }, editingEnd:function(t){
                e.editingId=null
              }
            }
          })
        })), 1)
      }), [
      ], !1, null, "d5b290f8", null).exports;
      const Z=(0, a.pM)({
        props:{
          data:{
            type:Object, required:!0
          }, player:{
            type:Object, required:!0
          }
        }, setup:(e, t)=>({
          isActive:m(e, {
            start:e.data.startMs, end:e.data.endMs
          }).isActive, clickItem:()=>{
            t.emit("click", e.data)
          }, keywords:(0, a.WQ)("keywords", (0, a.KR)("")), highlightKeyword:V.w
        })
      });
      const J=(0, D.A)(Z, (function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)("span", {
          staticClass:"online-video-caption-transcript-item", class:{
            active:e.isActive
          }, domProps:{
            innerHTML:e._s(e.highlightKeyword(e.data.text, e.keywords))
          }, on:{
            click:e.clickItem
          }
        })
      }), [
      ], !1, null, "795f510e", null).exports, X=(0, a.pM)({
        components:{
          TranscriptItem:J
        }, props:{
          data:{
            type:Array, required:!0
          }, player:{
            type:Object, required:!0
          }
        }, setup:(e, t)=>({
          clickItem:e=>{
            t.emit("click", e.startMs)
          }
        })
      });
      const ee=(0, D.A)(X, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"online-video-caption-transcript-paragraph"
        }, e._l(e.data, (function(t){
          return r("TranscriptItem", {
            key:t.id, attrs:{
              data:t, player:e.player
            }, on:{
              click:e.clickItem
            }
          })
        })), 1)
      }), [
      ], !1, null, "1f1e724f", null).exports, te=(0, a.pM)({
        components:{
          TranscriptParagraph:ee
        }, props:{
          data:{
            type:Array, required:!0
          }, player:{
            type:Object, required:!0
          }
        }, setup:e=>({
          jumpTo:m(e).jumpTo
        })
      });
      const re=(0, D.A)(te, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", e._l(e.data, (function(t, i){
          return r("TranscriptParagraph", {
            key:i, attrs:{
              data:t, player:e.player
            }, on:{
              click:e.jumpTo
            }
          })
        })), 1)
      }), [
      ], !1, null, "4101c03d", null).exports;
      var ie=r(722720), ne=function(e, t, r, i){
        return new(r||(r=Promise))((function(n, o){
          function s(e){
            try{
              c(i.next(e))
            }
            catch(e){
              o(e)
            }
          }
          function a(e){
            try{
              c(i.throw(e))
            }
            catch(e){
              o(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((i=i.apply(e, t||[
          ])).next())
        }))
      }, oe=function(e, t){
        var r, i, n, o, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, i&&(n=2&a[
                  0
                ]
                ?i.return:a[
                  0
                ]
                ?i.throw||((n=i.return)&&n.call(i), 0):i.next)&&!(n=n.call(i, a[
                  1
                ])).done)return n;
                switch(i=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, i=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], i=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      }, se=(0, ie.F)((function(){
        var e=(0, a.KR)(!1);
        return{
          availableCredits:(0, a.KR)(0), creditActive:(0, a.KR)(!1), creditStatus:(0, a.KR)("inactive"), initialized:e, hasCreditLimit:(0, a.KR)(!0)
        }
      })), ae=function(){
        var e=se(), t=e.availableCredits, r=e.creditActive, i=e.creditStatus, n=e.initialized, o=e.hasCreditLimit;
        function s(e){
          return ne(this, void 0, void 0, (function(){
            var n;
            return oe(this, (function(s){
              switch(s.label){
                case 0:if(!e.toggle)return[
                  2
                ];
                if(!e.getContextInfo)return[
                  3, 4
                ];
                s.label=1;
                case 1:return s.trys.push([
                  1, 3, , 4
                ]), [
                  4, e.getContextInfo()
                ];
                case 2:return function(e){
                  var n;
                  e&&(t.value=e.creditRemaining<=0?0:e.creditRemaining, i.value=e.status, r.value="active"===e.status, Number.isNaN(e.creditRemaining)&&(i.value="none"), o.value=null===(n=e.hasCreditLimit)||void 0===n||n)
                }
                (s.sent()), [
                  3, 4
                ];
                case 3:return n=s.sent(), console.error(n), [
                  3, 4
                ];
                case 4:return[
                  2
                ]
              }
            }))
          }))
        }
        return{
          initAirCredit:function(e){
            return ne(this, void 0, void 0, (function(){
              return oe(this, (function(t){
                switch(t.label){
                  case 0:return!e.toggle||n.value?(n.value=!0, [
                    2
                  ]):[
                    4, s(e)
                  ];
                  case 1:return t.sent(), n.value=!0, [
                    2
                  ]
                }
              }))
            }))
          }
        }
      };
      function ce(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], i=!0, n=!1, o=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(i=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            i=!0);
          }
          catch(e){
            n=!0, o=e
          }
          finally{
            try{
              i||null==a.return||a.return()
            }
            finally{
              if(n)throw o
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return ue(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function ue(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      function le(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function de(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function s(e){
              le(o, i, n, s, a, "next", e)
            }
            function a(e){
              le(o, i, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      const me=(0, a.pM)({
        components:{
          Subtitles:Y, Transcript:re, Generating:U.A
        }, props:{
          config:{
            type:Object, required:!0
          }, player:{
            type:Object, required:!0
          }
        }, setup(e){
          var t=se().creditActive, r=(0, a.KR)("subtitles"), i=(0, a.KR)([
          ]), n=(0, a.KR)(""), o=u.default.t("airOptimization.loading"), c=(0, a.KR)([
          ]), l=(0, a.WQ)("airGenStatus", {
            hasCaptions:!1, processing:{
              type:"", status:!1
            }
          }), m=(0, a.KR)("origin"), p=(0, a.WQ)("isInstructorView", !1), v=(0, a.EW)((()=>c.value.map((t=>({
            label:e.player.i18n.global.t("multiPlayer.playerPlugin.caption.lang.".concat(t.lang)), key:t.lang, generated:t.generated
          }))))), f=(0, a.EW)((()=>e.player.i18n.global.t("multiPlayer.playerPlugin.caption.lang.".concat(m.value)))), h=(0, a.KR)(!1), b=(0, a.KR)("");
          (0, a.Gt)("keywords", b);
          var y=0, _=(0, a.EW)((()=>{
            var t=[
            ], r=0, n=[
            ];
            return i.value.forEach((i=>{
              i.startMs-r>e.config.paragraphSplitInterval?(n.length>0&&t.push(n), n=[
                i
              ]):n.push(i), r=i.endMs
            })), n.length>0&&t.push(n), t
          })), g=[
            {
              name:"subtitles", title:u.default.t("airCredit.userStateStats.asr")
            }, {
              name:"transcript", title:u.default.t("air.caption.transcript")
            }
          ], w=()=>{
            y=setInterval(de(s().mark((function t(){
              var r, o;
              return s().wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return t.next=2, I(e.config);
                  case 2:if("PROCESSING"===(r=t.sent).status){
                    t.next=13;
                    break
                  }
                  if(y&&clearInterval(y), y=0, "FINISHED"!==r.status){
                    t.next=13;
                    break
                  }
                  return l.hasCaptions=!0, t.next=10, k(e.config, 1, 1e5);
                  case 10:o=t.sent, i.value=o.items, e.player.updateCaptions(d(i.value));
                  case 13:n.value=r.status;
                  case 14:case"end":return t.stop()
                }
              }), t)
            }))), 3e3)
          }, C=function(){
            var t=de(s().mark((function t(){
              return s().wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return t.next=2, S(e.config);
                  case 2:if(t.sent){
                    t.next=6;
                    break
                  }
                  return B.Message.error(u.default.t("air.generateFail")), t.abrupt("return");
                  case 6:n.value="PROCESSING", i.value=[
                  ], w();
                  case 9:case"end":return t.stop()
                }
              }), t)
            })));
            return function(){
              return t.apply(this, arguments)
            }
          }
          (), x=function(){
            var t=de(s().mark((function t(r){
              var n;
              return s().wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return m.value=r, t.next=3, T(e.config, r);
                  case 3:n=t.sent, i.value=n.items, e.player.updateCaptions(d(i.value));
                  case 6:case"end":return t.stop()
                }
              }), t)
            })));
            return function(e){
              return t.apply(this, arguments)
            }
          }
          (), A=document.documentElement.getAttribute("lang");
          return(0, a.sV)(de(s().mark((function t(){
            var r, o, a, u, d;
            return s().wrap((function(t){
              for(;
              ;
              )switch(t.prev=t.next){
                case 0:return t.next=2, Promise.all([
                  k(e.config, 1, 1e5), P(e.config)
                ]);
                case 2:if(r=t.sent, o=ce(r, 2), a=o[
                  0
                ], u=o[
                  1
                ], i.value=a.items, c.value=[
                  {
                    lang:"origin", generated:!0
                  }, ...u
                ], 0!==i.value.length){
                  t.next=15;
                  break
                }
                return t.next=11, I(e.config);
                case 11:(d=t.sent)&&(n.value=d.status, "PROCESSING"===d.status&&(l.processing.status=d.status, l.processing.type="caption", w())), t.next=16;
                break;
                case 15:l.hasCaptions=!0;
                case 16:case"end":return t.stop()
              }
            }), t)
          })))), {
            tab:r, tabs:g, captions:i, paragraphs:_, generate:C, progressStatus:n, generateText:o, deleteCaption:t=>{
              i.value=i.value.filter((e=>e.id!==t)), e.player.updateCaptions(d(i.value))
            }, updateCaption:t=>{
              var r=t.id, n=t.text, o=i.value.find((e=>e.id===r));
              o&&(o.text=n, e.player.updateCaptions(d(i.value)))
            }, isSearchBarOpened:h, keywords:b, closeSearchbar:()=>{
              h.value=!1, b.value=""
            }, supportedLanguages:v, changeLanguage:x, currentLang:m, currentLangText:f, downloadCaption:t=>{
              window.location.href="".concat(e.config.server, "/api/media-captions/template?lang=").concat(A, "&format=").concat(t)
            }, isInstructorView:p, creditActive:t
          }
        }
      });
      const pe=(0, D.A)(me, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"online-video-caption"
        }, [
          r("div", {
            staticClass:"online-video-caption-tabs"
          }, [
            e._l(e.tabs, (function(t){
              return r("span", {
                key:t.name, staticClass:"tab-item", class:{
                  active:e.tab===t.name
                }, on:{
                  click:function(r){
                    e.tab=t.name
                  }
                }
              }, [
                e._v("\n      "+e._s(t.title)+"\n    ")
              ])
            })), e._v(" "), e.captions.length||e.isInstructorView?r("div", {
              staticClass:"online-video-caption-toolbar"
            }, [
              r("div", {
                staticClass:"online-video-caption-search"
              }, [
                e.isSearchBarOpened?r("Input", {
                  on:{
                    "on-clear":function(t){
                      e.isSearchBarOpened=!1
                    }
                  }, scopedSlots:e._u([
                    {
                      key:"suffix", fn:function(){
                        return[
                          r("Icon", {
                            attrs:{
                              type:"md-close-circle"
                            }, on:{
                              click:e.closeSearchbar
                            }
                          })
                        ]
                      }, proxy:!0
                    }
                  ], null, !1, 1854027585), model:{
                    value:e.keywords, callback:function(t){
                      e.keywords=t
                    }, expression:"keywords"
                  }
                }):r("Button", {
                  staticClass:"open-search-bar-btn", attrs:{
                    icon:"ios-search"
                  }, on:{
                    click:function(t){
                      e.isSearchBarOpened=!0
                    }
                  }
                })
              ], 1), e._v(" "), r("Dropdown", {
                staticClass:"caption-toolbar-dropdown", attrs:{
                  placement:"left-start", trigger:"click"
                }, scopedSlots:e._u([
                  {
                    key:"list", fn:function(){
                      return[
                        r("DropdownMenu", [
                          r("Dropdown", {
                            staticClass:"language-dropdown", attrs:{
                              placement:"left"
                            }, scopedSlots:e._u([
                              {
                                key:"list", fn:function(){
                                  return[
                                    r("DropdownMenu", {
                                      directives:[
                                        {
                                          name:"perfect-scrollbar-y", rawName:"v-perfect-scrollbar-y"
                                        }
                                      ], staticClass:"sub-dropdown-menus"
                                    }, e._l(e.supportedLanguages, (function(t){
                                      return r("DropdownItem", {
                                        directives:[
                                          {
                                            name:"show", rawName:"v-show", value:e.creditActive||!e.creditActive&&t.generated, expression:"creditActive || (!creditActive && l.generated)"
                                          }
                                        ], key:t.key, class:{
                                          active:e.currentLang===t.key
                                        }, attrs:{
                                          value:t.key
                                        }, nativeOn:{
                                          click:function(r){
                                            return e.changeLanguage(t.key)
                                          }
                                        }
                                      }, [
                                        e._v("\n                    "+e._s(t.label)+"\n                  ")
                                      ])
                                    })), 1)
                                  ]
                                }, proxy:!0
                              }
                            ], null, !1, 1671562705)
                          }, [
                            r("DropdownItem", [
                              e._v("\n                "+e._s(e.$t("airCredit.userStateStats.translation"))+" "+e._s(e.currentLangText)+"\n                "), r("Icon", {
                                attrs:{
                                  type:"ios-arrow-forward"
                                }
                              })
                            ], 1)
                          ], 1), e._v(" "), e.isInstructorView&&e.creditActive?r("DropdownItem", {
                            nativeOn:{
                              click:function(t){
                                return e.generate(t)
                              }
                            }
                          }, [
                            e._v("\n              "+e._s(e.$t("air.generateAgain"))+"\n            ")
                          ]):e._e(), e._v(" "), r("Dropdown", {
                            attrs:{
                              placement:"left"
                            }, scopedSlots:e._u([
                              {
                                key:"list", fn:function(){
                                  return[
                                    r("DropdownMenu", {
                                      directives:[
                                        {
                                          name:"perfect-scrollbar-y", rawName:"v-perfect-scrollbar-y"
                                        }
                                      ], staticClass:"sub-dropdown-menus"
                                    }, [
                                      r("DropdownItem", {
                                        nativeOn:{
                                          click:function(t){
                                            return e.downloadCaption("str")
                                          }
                                        }
                                      }, [
                                        e._v("\n                    "+e._s(e.$t("air.caption.download.str"))+"\n                  ")
                                      ]), e._v(" "), r("DropdownItem", {
                                        nativeOn:{
                                          click:function(t){
                                            return e.downloadCaption("txt")
                                          }
                                        }
                                      }, [
                                        e._v("\n                    "+e._s(e.$t("air.caption.download.txt"))+"\n                  ")
                                      ]), e._v(" "), r("DropdownItem", {
                                        nativeOn:{
                                          click:function(t){
                                            return e.downloadCaption("excel")
                                          }
                                        }
                                      }, [
                                        e._v("\n                    "+e._s(e.$t("air.caption.download.excel"))+"\n                  ")
                                      ])
                                    ], 1)
                                  ]
                                }, proxy:!0
                              }
                            ], null, !1, 92440560)
                          }, [
                            r("DropdownItem", [
                              e._v("\n                "+e._s(e.$t("air.caption.download.title"))+"\n                "), r("Icon", {
                                attrs:{
                                  type:"ios-arrow-forward"
                                }
                              })
                            ], 1)
                          ], 1)
                        ], 1)
                      ]
                    }, proxy:!0
                  }
                ], null, !1, 2007223843)
              }, [
                r("Button", {
                  staticClass:"dropdown-btn"
                }, [
                  r("i", {
                    staticClass:"font font-more-small"
                  })
                ])
              ], 1)
            ], 1):e._e()
          ], 2), e._v(" "), "subtitles"===e.tab?r("Subtitles", {
            attrs:{
              data:e.captions, player:e.player, config:e.config
            }, on:{
              "on-delete-caption":e.deleteCaption, "on-update-caption":e.updateCaption
            }
          }):e._e(), e._v(" "), "transcript"===e.tab?r("Transcript", {
            attrs:{
              data:e.paragraphs, player:e.player
            }
          }):e._e(), e._v(" "), 0===e.captions.length?r("div", {
            staticClass:"online-video-caption-empty"
          }, [
            e.isInstructorView?[
              "PROCESSING"!==e.progressStatus?r("div", [
                r("div", [
                  e._v(e._s("FAIL"===e.progressStatus?e.$t("air.generateFail"):e.$t("air.noCaptionTitle")))
                ]), e._v(" "), r("button", {
                  staticClass:"button air-primary-generate-button", on:{
                    click:e.generate
                  }
                }, [
                  r("i", {
                    staticClass:"font font-ai-generate"
                  }), e._v("\n          "+e._s("FAIL"===e.progressStatus?e.$t("air.generateAgain"):"AI "+e.$t("air.generate"))+"\n        ")
                ])
              ]):r("Generating", {
                staticClass:"caption-generating", attrs:{
                  "generate-text":e.generateText, "animation-count":0
                }
              })
            ]
            :[
              r("div", [
                e._v(e._s(e.$t("air.noCaptionTitle")))
              ])
            ]
          ], 2):e._e()
        ], 1)
      }), [
      ], !1, null, "0997b766", null).exports;
      function ve(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      const fe=(0, a.pM)({
        components:{
          Chapter:z, Caption:pe
        }, props:[
          "player", "isInstructorView", "seekable"
        ], setup(e){
          var t=ae().initAirCredit, r=se().initialized, i=(0, a.KR)(), n=(0, a.KR)(), o={
            hasCaptions:!1, processing:{
              type:"", status:!1
            }
          };
          (0, a.Gt)("airGenStatus", o), (0, a.Gt)("isInstructorView", e.isInstructorView), (0, a.Gt)("seekable", e.seekable);
          var u=(0, a.KR)("caption"), l=(0, a.KR)(""), d=(0, a.KR)();
          return(0, a.wB)((()=>e.player), function(){
            var e, a=(e=s().mark((function e(a){
              var c, u;
              return s().wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(!(u=(null===(c=a.props)||void 0===c?void 0:c.plugins)||[
                  ]).airCredit||r.value){
                    e.next=4;
                    break
                  }
                  return e.next=4, t(u.airCredit);
                  case 4:u.chapter&&(i.value=u.chapter), u.caption?(o.hasCaptions=!1, n.value=u.caption):o.hasCaptions=!0;
                  case 6:case"end":return e.stop()
                }
              }), e)
            })), function(){
              var t=this, r=arguments;
              return new Promise((function(i, n){
                var o=e.apply(t, r);
                function s(e){
                  ve(o, i, n, s, a, "next", e)
                }
                function a(e){
                  ve(o, i, n, s, a, "throw", e)
                }
                s(void 0)
              }))
            });
            return function(e){
              return a.apply(this, arguments)
            }
          }
          ()), (0, a.sV)((()=>{
            var e=new c(d.value, {
              suppressScrollX:!0
            });
            d.value.addEventListener("ps-scroll-y", (()=>{
              var t=getComputedStyle(d.value).height;
              l.value=t, e.update()
            }))
          })), {
            chapterConfig:i, captionConfig:n, tab:u, eleRef:d, height:l
          }
        }
      });
      const he=(0, D.A)(fe, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          ref:"eleRef", staticClass:"online-video-fullscreen-air", style:{
            height:e.height
          }
        }, [
          e.chapterConfig?r("Chapter", {
            attrs:{
              config:e.chapterConfig, player:e.player
            }
          }):e._e(), e._v(" "), r("Tabs", {
            attrs:{
              value:e.tab
            }
          }, [
            r("TabPane", {
              attrs:{
                label:e.$t("airCredit.userStateStats.asr"), name:"caption"
              }
            }, [
              e.captionConfig?r("Caption", {
                attrs:{
                  config:e.captionConfig, player:e.player
                }
              }):e._e()
            ], 1)
          ], 1)
        ], 1)
      }), [
      ], !1, null, "21b78103", null).exports;
      i.default.use(n.A), i.default.customElement("online-video-fullscreen", he)
    }, 301722:(e, t, r)=>{
      var i=r(302543);
      e.exports=[
        "$http", "toastr", function(e, t){
          return{
            getJoinClassinUrl(r, n, o, s){
              var a=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :i.noop;
              return e.get("/api/activies/classin/join-url?course_id=".concat(r, "&activity_id=").concat(n, "&user_id=").concat(o)).success(s).error(t.decorateError(a))
            }
          }
        }
      ]
    }, 322361:(e, t, r)=>{
      var i=r(302543), n=r(248124);
      r(269193), r(683396);
      var o=r(218831).decamelizeKeys, s=r(966491);
      e.exports=[
        "$rootScope", "$scope", "$http", (e, t, r)=>{
          t.resourceEditForm={
            resourceNewName:"", allowDownload:!0, uploads:[
            ]
          }, e.$on("filesSelected", ((e, r)=>{
            var n=t.activity;
            [
              "tencent_meeting", "welink", "lark_meeting", "wecom_meeting", "dingtalk_live", "trial_teaching"
            ].includes(n.type)&&(t.selectedResources=r, t.resourceEditForm.resourceNewName="", 1===r.length&&(t.resourceEditForm.uploads=[
              r[
                0
              ].id
            ], t.resourceEditForm.resourceNewName=r[
              0
            ].name), r.length>1&&(t.resourceEditForm.uploads=i.map(r, "id")), s.openPopupAfterCurrentClose("#activity-upload-resource-info-edit", "#file-select"))
          })), t.createActivityTencentMeetingResource=()=>{
            t.loading=!0, r.post("/api/activities/".concat(t.activity.id, "/resources"), o(t.resourceEditForm)).success((()=>{
              var e=new Event("activity-resource-upload");
              return window.dispatchEvent(e), n("#activity-upload-resource-info-edit").foundation("reveal", "close")
            })).error((()=>{
            })).finally((()=>{
              t.loading=!1
            }))
          }, t.back=()=>{
            e.$broadcast("reset-file-select"), s.openPopupAfterCurrentClose("#file-select", "#activity-upload-resource-info-edit")
          }
        }
      ]
    }, 326834:(e, t, r)=>{
      var i=r(248124), n=r(302543), o=r(287092);
      r(219693), r(334867), r(269193), r(640173);
      var s=r(592207);
      function a(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return c(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var i=0, n=function(){
            };
            return{
              s:n, n:function(){
                return i>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    i++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:n
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s=!0, a=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return s=e.done, e
          }, e:function(e){
            a=!0, o=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(a)throw o
            }
          }
        }
      }
      function c(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      function u(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function l(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function s(e){
              u(o, i, n, s, a, "next", e)
            }
            function a(e){
              u(o, i, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      r(207452);
      var d=r(571478);
      r(552979).default;
      e.exports=[
        "$rootScope", "$scope", "$routeParams", "$http", "toastr", "ExamHelper", "ExamSubject", "classroomRepository", "$q", function(e, t, r, c, u, m, p, v){
          t.inExam=!0, t.examId=r.examId||i("#examId").val(), t.classroomId=r.classroomId||i("#classroomId").val(), e.viewSubmissionDetail=!0, t.examineesId=r.examineeId, t.submissionId=r.submissionId, t.subjects=[
          ], t.currentExaminee=null, t.ui=m.getUIHelper(), t.submissionData={
          };
          var f=d(t), h=function(){
            t.classroomId&&v.getClassroomExamSubmissions(t.classroomId, t.submissionId).then((function(e){
              t.instanceId=e.instance_id, t.subjects=n.map(e.subjects_data.subjects, (e=>p.createSubjectBySavedSubject(e, !1))), t.auto_mark=e.auto_mark;
              var r=e.submission_data.subjects, i=e.correct_answers_data.correct_answers, o=e.submission_score_data, s=e.submission_comment_data;
              return m.updateSubjectsDetailData(t.subjects, r, i, o, s), y(), _()
            }))
          }, b=function(){
            var r=l(s.mark((function r(){
              var i, n;
              return s.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:return r.next=2, v.initExaminees(t.classroomId, !0, [
                    t.examineesId
                  ], !0);
                  case 2:return(i=r.sent).length>0&&(e.currentExaminee=t.currentExaminee=i[
                    0
                  ], (n=t.currentExaminee.submissions[
                    0
                  ])&&(!n.score&&t.currentExaminee.score&&(n.score=t.currentExaminee.score), t.submissionData=n, e.submissionData=n)), r.abrupt("return", t.currentExaminee);
                  case 5:case"end":return r.stop()
                }
              }), r)
            })));
            return function(){
              return r.apply(this, arguments)
            }
          }
          (), y=function(){
            t.subjectList=[
            ];
            var e, r=0, i=a(t.subjects);
            try{
              for(i.s();
              !(e=i.n()).done;
              ){
                var n=e.value;
                "text"!==n.type&&(r+=1, n.number="".concat(r), t.subjectList.push(n))
              }
            }
            catch(e){
              i.e(e)
            }
            finally{
              i.f()
            }
            return t.rowList=o.range(0, Math.ceil(t.subjectList.length/5)-1, !0), t.columnList=[
              0, 1, 2, 3, 4
            ]
          }, _=function(){
            var e=0, r=0, i=0, o=0, s=0, a=0;
            t.manualEditMark=!0, n.each(t.subjectList, (function(t){
              if("short_answer"!==t.type){
                var c=parseFloat(t.score);
                return n.isFinite(c)&&(a+=1), i+=1, e+=parseFloat(t.score||0)
              }
              o+=1;
              var u=parseFloat(t.score);
              if(n.isFinite(u))return r+=u, s+=1
            }));
            var c=i>0, u=o>0&&o===s, l=0===o||u;
            0===o&&(t.manualEditMark=a===i&&null!==t.submissionData.score), t.objectiveQuestionScore=c?parseFloat(e.toFixed(1)):"--", t.objectiveQuestionScore=parseFloat(e.toFixed(1)), t.subjectiveQuestionScore=u?parseFloat(r.toFixed(1)):"--", t.score="--", t.manualEditMark&&(t.score=l?parseFloat((e+r).toFixed(1)):"--")
          };
          t.getSubjectIndex=function(e, r){
            if(t.subjects)return m.getSubjectIndex(e, r, t.subjects)
          }, t.isNoScore=function(e){
            return!(!e||void 0!==e.score&&""!==e.score&&null!==e.score)
          }, t.getIndex=(e, t)=>5*e+t, t.scrollTo=function(e){
            var t, r=i("li#subject-".concat(e).replace(".", "\\.")).offset().top;
            t="1"===e||e.indexOf(".1")>0?133:100;
            var n=r+i("div#left-frame").scrollTop()-t;
            return i("div#left-frame").animate({
              scrollTop:n
            }, 500), !0
          };
          var g=function(e){
            var r=arguments.length>1&&void 0!==arguments[
              1
            ]
            &&arguments[
              1
            ];
            r&&(t.submissionData.id=e), b()
          }, w=function(e, t){
            if(!t.parent_id)return n.find(e, {
              id:t.subject_id
            });
            var r=n.find(e, {
              id:t.parent_id
            });
            return n.find(r.sub_subjects, {
              id:t.subject_id
            })
          }, k=(e, r)=>(()=>{
            for(var i=[
            ], o=0;
            o<e.length;
            o++){
              var s=e[
                o
              ];
              if(s.score){
                var a=n.find(t.subjects, (e=>e.id===r[
                  o
                ].subject_id));
                a=w(t.subjects, r[
                  o
                ]), i.push(a.error=s.score)
              }
              else i.push(void 0)
            }
            return i
          })(), S=(e, t, r)=>statistics.track({
            activity_id:e, activity_type:"classroom", action:statistics.enums.Action.give_score, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, target_info:{
              id:t, type:r, is_student:!0
            }
          }), I=function(e){
            var r, i=[
            ];
            return r=e?[
              e
            ]
            :t.subjects, n.each(r, (function(e){
              "short_answer"!==e.type&&"fill_in_blank"!==e.type||i.push((e=>({
                subject_id:e.id, score:e.score, instance_id:t.instanceId, parent_id:e.parent_id
              }))(e))
            })), i
          };
          return t.autoSaveScore=function(e, r){
            return function(){
              var e=arguments.length>1?arguments[
                1
              ]
              :void 0, r=arguments.length>2?arguments[
                2
              ]
              :void 0, i=I(arguments.length>0&&void 0!==arguments[
                0
              ]
              &&arguments[
                0
              ]), o=function(e){
                if(f.hide(), e.message&&u.warning(e.message), r&&r(), e.errors)return k(e.errors.graded_subjects, i)
              }, s=function(r){
                f.hide(), u.success();
                var i=t.currentExaminee;
                i.score=r.exam_score;
                var o=n.find(t.currentExaminee.submissions, {
                  id:parseInt(t.submissionData.id)
                });
                if(o.score=r.submission_score, o.marked=r.marked, i.waitingForScore=!1, g(o.id), h(), S(t.classroomId, t.currentExaminee.id, "personal"), t.$emit("saveScoreSuccess"), e)return e()
              }, a=()=>({
                examinee_id:t.currentExaminee.id, graded_subjects:i, submission_id:t.submissionData.id
              });
              return f.show(), c.post("/api/classroom/".concat(t.classroomId, "/give-score"), a()).success(s).error(o)
            }
            (e, r)
          }, t.$on("$destroy", (()=>{
            document.body.style.overflow="auto"
          })), function(){
            var e=l(s.mark((function e(){
              return s.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return h(), document.body.style.overflow="hidden", e.next=4, b();
                  case 4:case"end":return e.stop()
                }
              }), e)
            })));
            return function(){
              return e.apply(this, arguments)
            }
          }
          ()()
        }
      ]
    }, 335034:(e, t, r)=>{
      var i=r(302543);
      function n(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return o(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var i=0, n=function(){
            };
            return{
              s:n, n:function(){
                return i>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    i++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:n
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, a=!0, c=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return a=e.done, e
          }, e:function(e){
            c=!0, s=e
          }, f:function(){
            try{
              a||null==r.return||r.return()
            }
            finally{
              if(c)throw s
            }
          }
        }
      }
      function o(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      r(210557), e.exports=[
        "$scope", "modelHelper", "$timeout", "toastr", "$http", function(e, t, r, o, s){
          e.reverse=!1, e.students=[
          ];
          var a=function(){
            var t={
            };
            i.each(e.activity.student_interactions, (e=>t[
              e.student_id
            ]
            =e));
            return s.get("/api/course/".concat(e.course.id, "/students")).success((function(r){
              return i.each(r.students, (function(r){
                var i=t[
                  r.id
                ];
                if(i)return i.name=r.name, i.user_no=r.user_no, i.score||(i.score=0), e.students.push(i)
              })), s.get("/api/courses/".concat(e.course.id, "/interaction-statistics")).success((function(t){
                if(e.interaction_statistics=t.interaction_statistics, e.interaction_statistics)return i.each(e.interaction_statistics, (function(t){
                  var r=i.find(e.students, (function(e){
                    if(e.student_id===parseInt(Object.keys(t)[
                      0
                    ]))return e
                  }));
                  if(r)return r.count=t[
                    r.student_id
                  ]
                }))
              }))
            }))
          };
          e.predicateEqual=t=>i.isEqual(e.predicate, t), e.order=function(t){
            return i.isEqual(e.predicate, t)?(e.reverse=!e.reverse, e.students.reverse()):(e.students=i.sortBy(e.students, (function(e){
              var r, i=t[
                t.length-1
              ], o=e, s=n(t);
              try{
                for(s.s();
                !(r=s.n()).done;
                )o=o[
                  r.value
                ]
              }
              catch(e){
                s.e(e)
              }
              finally{
                s.f()
              }
              return"score"===i?o?parseFloat(o):-1:o
            })), e.predicate=t, e.reverse=!1)
          }, e.addScore=function(e){
            if(e.score<10){
              var t=e.score+1;
              return c(e, t)
            }
          }, e.minusScore=function(e){
            if(e.score>-10){
              var t=e.score-1;
              return c(e, t)
            }
          };
          var c=function(t, r){
            var i=[
              {
                student_id:t.student_id, score:r
              }
            ];
            return t.isGivingScore=!0, s.put("/api/courses/interactions/".concat(e.activity.id, "/score"), i).then((function(){
              return t.score=r, t.isGivingScore=!1
            })).catch((function(r){
              return r.data.message&&(403===r.status?(e.scorePublished=!0, o.error(e.scorePublishedMsg)):o.error(r.data.message)), t.isGivingScore=!1
            }))
          };
          return a()
        }
      ]
    }, 342104:(e, t, r)=>{
      var i=r(248124), n=r(287092);
      r(215195), r(418665), r(335231), r(169218), r(269193), r(979073), r(906048), r(445708), r(43148), r(678636), r(850785), r(158649), r(658379), r(14602);
      var o=r(592207);
      function s(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], i=!0, n=!1, o=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(i=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            i=!0);
          }
          catch(e){
            n=!0, o=e
          }
          finally{
            try{
              i||null==a.return||a.return()
            }
            finally{
              if(n)throw o
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return a(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function a(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, i=new Array(t);
        r<t;
        r++)i[
          r
        ]
        =e[
          r
        ];
        return i
      }
      function c(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function u(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function s(e){
              c(o, i, n, s, a, "next", e)
            }
            function a(e){
              c(o, i, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      r(207452);
      var l=r(791936), d=r(441179), m=r(966491), p=r(571478), v=r(901499), f=r(731904)._, h=r(181769), b=h.canEditActivity, y=h.hasEditPermissionForBlueprint, _=r(951708), g=_.getActivityAiQuizzes, w=_.getSelfSubmissions, k=_.getAirActivityEnableMap, S={
        requestIntervalId:0, h5CmiRequestInfo:null
      }, I=()=>{
        var e=S.h5CmiRequestInfo;
        e&&(window.H5CoursewareInfo.upsertH5CoursewareCmi(e.activityId, e.uploadId, e.state), S.h5CmiRequestInfo=null)
      };
      window.addEventListener("beforeunload", (()=>{
        var e=S.requestIntervalId;
        e&&clearInterval(e), S.h5CmiRequestInfo&&I()
      }));
      var C=e=>{
        var t=e.data;
        if("scorm-finish-on-view-scorm-controller"===t.event&&window.API)window.API.saveCmi(t.activityId, t.scormId, t.cmi);
        else if(window.H5CoursewareInfo){
          var r="";
          try{
            r=atob(t)
          }
          catch(e){
            return
          }
          if(r&&r.includes("@@")){
            var i=window.H5CoursewareInfo;
            S.h5CmiRequestInfo={
              activityId:i.activityId, uploadId:i.uploadId, state:t
            }, S.requestIntervalId||(S.requestIntervalId=setInterval(I, 8e3))
          }
        }
      };
      e.exports=[
        "$rootScope", "$scope", "$routeParams", "$sce", "$location", "activityRepository", "modelHelper", "statHelper", "faceCheckHelper", "Course", "$q", "$http", "$timeout", "$window", "activityApi", "toastr", "publishHelper", function(e, t, r, a, c, h, _, S, I, x, A, P, T, R, O, E, M){
          var $, D, j=p(t);
          j.show();
          var U=i("#courseId").val();
          t.rubricScoreData=[
          ], t.ui={
            showFullScreenLink:!0
          };
          var L=_.addLearningActivityRead, N=_.isActivityRead, F=k();
          t.activityUrl=_.activityUrl, t.activityPopupName=_.activityPopupName, t.getActivityGreyIcon=_.getActivityGreyIcon, t.getActivityI18nMessage=_.getActivityI18nMessage, t.currentMaterialIndex=1;
          var z=t.isInSyllabusPage?"syllabus":"detail";
          window.sessionStorage.setItem("activityReferrer", z), t.completedInfo={
            material:t.materialCompletedInfo, forum:t.forumCompletedInfo, web_link:t.WebLinkCompletedInfo, online_video:t.onlineVideoCompletedInfo, slide:t.slideCompletedInfo, lesson:t.lessonCompletedInfo, chatroom:t.chatroomCompletedInfo, page:t.pageCompletedInfo, scorm:t.scormCompletedInfo, interaction:t.interactionCompletedInfo, virtual_classroom:t.virtualClassroomCompletedInfo, homework:t.homeworkCompletedInfo, microsoft_teams_meeting:t.teamsMeetingCompletedInfo
          }, t.editActivity=function(r){
            var i=t.module?t.module.id:null, n=t.syllabus?t.syllabus.id:null;
            return _.editActivity(e, t, t.course, i, n, T, r)
          }, t.openReallocatePopup=e=>{
            t.editActivity(e), t.$broadcast("openReallocatePopup")
          }, t.editClassroom=r=>_.editActivity(e, t, t.course, r.module_id, r.syllabus_id, T, r), t.$on("activityLoaded", ((e, t)=>G(t)));
          var B=function(e){
            if(t.uploads=[
            ], e.data&&(null!=e.data.other_resources?e.data.other_resources.length:void 0)>0&&(t.uploads=t.uploads.concat(e.data.other_resources)), (null!=e.uploads?e.uploads.length:void 0)>0)return t.uploads=t.uploads.concat(e.uploads)
          };
          t.loadingAiQuizzes=!1;
          var H=function(){
            var e=u(o.mark((function e(r, i){
              var n, s, a, c;
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(!t.isInstructorView){
                    e.next=2;
                    break
                  }
                  return e.abrupt("return");
                  case 2:if(s="lesson"===r.type?t.fakeUpload.aiQuiz:r.uploads[
                    0
                  ].aiQuiz, e.t0=i, e.t0){
                    e.next=8;
                    break
                  }
                  return e.next=7, w(s.id);
                  case 7:e.t0=e.sent;
                  case 8:a=e.t0, c=!(null===(n=a.submission)||void 0===n||!n.id), o=c, t.hasAiQuizSubmission=o, t.$broadcast("updateHasAiQuizSubmission", {
                    hasAiQuizSubmission:o
                  }), t.$apply();
                  case 12:case"end":return e.stop()
                }
                var o
              }), e)
            })));
            return function(t, r){
              return e.apply(this, arguments)
            }
          }
          ();
          t.$on("submissionSuccess", (function(e, t){
            var r=t.activity, i=t.submission;
            H(r, i)
          })), t.aiQuizCount=0, t.aiQuizSubjectCount=0;
          var V=function(){
            var r=u(o.mark((function r(i){
              var n;
              return o.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:if(t.aiQuizCount=0, O){
                    r.next=3;
                    break
                  }
                  return r.abrupt("return");
                  case 3:return t.loadingAiQuizzes=!0, r.next=6, g(i.id);
                  case 6:if(!(n=r.sent)||!n.length){
                    r.next=18;
                    break
                  }
                  if(t.aiQuizSubjectCount=n[
                    0
                  ].subjectsCount, t.aiQuizCount=n.length, f.get(i, "uploads", [
                  ]).forEach((e=>{
                    var t=n.find((t=>t.uploadReferenceId===e.reference_id));
                    e.aiQuiz=t||null
                  })), "lesson"===i.type&&t.fakeUpload&&(t.fakeUpload.aiQuiz=n[
                    0
                  ]), e.$broadcast("loadedActivityAiQuizzes"), "online_video"!==i.type&&"lesson"!==i.type){
                    r.next=16;
                    break
                  }
                  return r.next=16, H(i);
                  case 16:r.next=20;
                  break;
                  case 18:f.get(i, "uploads", [
                  ]).forEach((e=>{
                    e.aiQuiz=null
                  })), t.ui.switchTab="basicInfo";
                  case 20:t.loadingAiQuizzes=!1, B(i), t.$apply();
                  case 23:case"end":return r.stop()
                }
              }), r)
            })));
            return function(e){
              return r.apply(this, arguments)
            }
          }
          ();
          t.$on("updateActivityQuizzes", function(){
            var r=u(o.mark((function r(n, s){
              var a, c, u;
              return o.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:if(a=s.previewFile, c=s.openQuizPanel, u=s.uploadId, s.activityId===t.activity.id){
                    r.next=3;
                    break
                  }
                  return r.abrupt("return");
                  case 3:return r.next=5, V(t.activity);
                  case 5:a&&(i("#file-previewer").foundation("reveal", "open"), e.$emit("previewFile", t.activity.uploads.find((e=>e.id===u)), t.activity)), c&&e.$emit("openAiQuizPanel");
                  case 7:case"end":return r.stop()
                }
              }), r)
            })));
            return function(e, t){
              return r.apply(this, arguments)
            }
          }
          ());
          var G=function(e){
            !function(e){
              if(e.data&&e.data.other_resources&&!(e.data.other_resources.length<=0))e.data.other_resources.forEach((function(e){
                return e.status="ready", e.deleted=!1
              }))
            }
            (e), function(e){
              [
                "material", "online_video", "homework"
              ].includes(e.type)&&e.cc_license_references&&e.cc_license_references.length>0&&e.uploads&&e.uploads.length>0&&e.cc_license_references.forEach((t=>{
                e.uploads.forEach((e=>{
                  e.id===t.upload_id&&(e.cc_license_code=t.cc_license_code, e.cc_license_link=t.cc_license_link, e.cc_license_name=t.cc_license_name, e.cc_license_description=t.cc_license_description)
                }))
              }))
            }
            (e), t.activity=t.currentActivity=e, B(e), t.activity_id=e.id, t.pageContent=m.replaceActivityTypeKey(e.type), "online_video"===e.type&&!t.isInstructorView&&"none"!==e.completion_criterion_key&&e.uploads&&e.uploads.length>0&&"audio"!==e.uploads[
              0
            ].type&&"link"!==e.uploads[
              0
            ].type?h.getOnlineVideoUnplayedSegments(e.id).then((e=>{
              t.unplayedSegments=e
            })):t.unplayedSegments=[
            ], F.get(e.type)&&(!function(e){
              "lesson"!==e.type||t.fakeUpload&&t.fakeUpload.activity_id===e.id||(t.fakeUpload={
                reference_id:0, type:"lesson", aiQuiz:void 0, activity_id:e.id, status:"none"
              }, t.fakePlayer={
                captionStatus:"noCaption", hasCaption:!1, ready:!1
              })
            }
            (e), V(e));
            var r=me(e, e.module_id), i=r.pre, n=r.next;
            t.prevActivity=i, t.nextActivity=n
          }, q=function(e){
            var r=t.isInstructorView||t.isSimulatingInstructor;
            return e.expired=_.activityExpired(e), e.disabled=e.expired&&!r, e.show="chatroom"===e.type||"classroom"===e.type&&"none"!==e.status||r||!_.activityUpcoming(e)
          }, K=()=>f.map(t.course.modules, (function(e){
            return f.map(e.activities, (e=>q(e))), f.map(e.syllabuses, (e=>f.map(e.activities, (e=>q(e)))))
          })), W=function(e){
            var r, i={
              course_id:t.course.id, activity_id:e
            };
            if(t.syllabus&&(i.syllabus_id=t.syllabus.id), t.module&&(i.module_id=t.module.id), S.inPage(i), S.setActivityType(t.activity.type), [
              "material", "online_video"
            ].includes(t.activity.type)||statistics.track({
              activity_id:e, activity_type:t.activity.type, action:statistics.enums.Action.open, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web
            }), [
              "web_link", "slide"
            ].includes(t.activity.type)||!("online_video"!==(r=t.activity).type||t.logYoutubePlayStatus&&m.YOUTUBE_LINK_REGEX.test(null!=r.data?r.data.link:void 0)||!f.isEmpty(r.uploads)&&"swf"!==r.uploads[
              0
            ].type))return S.track(t.activity.type, "view")
          }, Q=function(e){
            var t=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :"view";
            switch(e.type){
              case"material":case"homework":case"online_video":case"forum":case"interaction":case"zoom":return!0;
              case"microsoft_teams_meeting":case"google_meeting":case"webex_meeting":return e.completion_criterion_key===t;
              case"h5_courseware":return!0;
              case"exam":case"tencent_meeting":case"dingtalk_live":return!1;
              case"web_link":return!("reject"===e.audit_status||"auditing"===e.audit_status);
              default:return!0
            }
          }, Y=function(){
            var e=arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :"view";
            if(Q(t.activity, e)){
              var r=function(e){
                if(t.activity){
                  N(t.activitiesRead, t.activity)||L(t.activitiesRead, t.activity.id);
                  var r="full"===e.completeness;
                  r&&_.refreshPrerequisitesStatus(t.activity, t, r, t.completedInfo[
                    t.activity.type
                  ])
                }
              };
              return h.logActivityRead(t.activity.id, {
              }, r)
            }
          };
          t.logJoinActivityRead=function(){
            Y("join")
          }, t.loadActivity=function(r){
            t.unplayedSegments=void 0, delete t.activity, t.syllabus&&t.syllabus.activities&&delete t.fromCurrent;
            var i=h.loadActivity(r), n=h.initActivitiesReadForUser(U);
            return A.all([
              i, n
            ]).then((function(){
              var i, n=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), o=s(n, 2), a=o[
                0
              ], c=o[
                1
              ];
              if(j.hide(), a)return null!==(i=window.featureToggles)&&void 0!==i&&i.lazyLoadCourseSection||(G(a), te(t.activity), W(r), t.activitiesRead=c, K(), Y(), "scorm"===t.activity.type&&t.activity.uploads[
                0
              ]
              &&ne(t.activity, t.activity.uploads[
                0
              ], "view"), "h5_courseware"===t.activity.type&&t.activity.uploads[
                0
              ]
              &&ne(t.activity, t.activity.uploads[
                0
              ], "view")), e.$broadcast("loadingActivityFinished", {
                activityResponse:a, activitiesRead:c
              })
            }))
          };
          var Z=function(e){
            var r=f.find(t.course.activities, {
              id:e.activity_id, type:"online_video"
            });
            if(t.isCourseInCheckpointMode&&r&&r.completion_criterion){
              var i="".concat(t.onlineVideoCompletedInfo, " ").concat(e.data.completeness, "%");
              return e.data.completeness>=_.getCriterion(r)?_.refreshPrerequisitesStatus(r, t, !0, i):_.refreshPrerequisitesStatus(r, t, !1, i)
            }
          };
          t.logAudioPlayed=(e, t, r, i)=>h.logActivityRead(e, {
            start:t, end:r, duration:i
          }, Z), t.logVideoPlayed=function(e, r, i){
            var n=!(arguments.length>3&&void 0!==arguments[
              3
            ])||arguments[
              3
            ];
            return R.st&&!R.st.accessible?E.warning(t.offlineWarning):h.logActivityRead(e, {
              start:r, end:i
            }, Z, (function(){
            }), n)
          }, t.logExternalVideoPlayed=function(e, t, r){
            var i=!(arguments.length>3&&void 0!==arguments[
              3
            ])||arguments[
              3
            ], n=arguments.length>4&&void 0!==arguments[
              4
            ]
            ?arguments[
              4
            ]
            :0;
            return h.logActivityRead(e, {
              start:t, end:r, duration:n
            }, Z, (function(){
            }), i)
          };
          var J=function(e, t){
            var r=f.find(((e, t)=>{
              var r=window.localStorage.getItem("examDefaultBackPlace"), i="";
              return"exam"===r?i="/course/".concat(U, "/exam"):"syllabus"===r&&(i="/course/".concat(U, "/content")), [
                {
                  activityTypes:[
                    "forum"
                  ], defaultBackUrl:"/course/".concat(U, "/").concat(e)
                }, {
                  activityTypes:[
                    "classroom", "feedback", "danmu"
                  ], defaultBackUrl:"/course/".concat(U, "/classroom")
                }, {
                  activityTypes:[
                    "web_link", "material", "online_video", "slide", "page", "interaction", "scorm", "lesson"
                  ], defaultBackUrl:"/course/".concat(U, "/courseware")
                }, {
                  activityTypes:[
                    "exam"
                  ], defaultBackUrl:i||"/course/".concat(U, "/exam"), extraConditions:[
                    {
                      condition:new RegExp(/\/exams?\/\d+\/logs?/), backUrl:"#/exam/".concat(String(t), "/score-list")
                    }
                  ]
                }, {
                  activityTypes:[
                    "questionnaire", "chatroom", "virtual_classroom", "microsoft_teams_meeting"
                  ], defaultBackUrl:"/course/".concat(U, "/content")
                }, {
                  activityTypes:[
                    "homework"
                  ], defaultBackUrl:"/course/".concat(U, "/homework"), extraConditions:[
                    {
                      condition:new RegExp(/\/homeworks?\/\d+\/logs/), backUrl:"#/".concat(String(t), "?view=scores")
                    }
                  ]
                }
              ]
            })(e, t), (t=>t.activityTypes.includes(e)));
            if(!r)return null;
            var i=r.defaultBackUrl;
            if("lesson"===e)return"/course/".concat(U, "/lesson");
            var n=f.find(r.extraConditions||[
            ], (e=>(c.path()||"").match(e.condition)));
            return(null!=n?n.backUrl:void 0)&&(i=n.backUrl), i
          };
          t.goBack=function(){
            var r=null;
            r=t.currentActivity&&"SHTVU"!==t.deliveryOrg?J(t.currentActivity.type, t.currentActivity.id):"/course/".concat(U, "/content");
            var i="function"==typeof e.goBackTrack?e.goBackTrack():void 0, n=!1;
            if(t.activity&&"online_video"!==t.activity.type&&(n=de(t.activity, "exit", (function(){
              return r?R.location.href=r:R.history.back(), i?i():void 0
            }))), !n)return r?R.location.href=r:R.history.back(), i?i():void 0
          }, window.addEventListener("message", C), t.$on("destroy", (()=>{
            window.removeEventListener("message", C)
          })), t.goBackCourse=function(e){
            var r=!1;
            t.activity&&"online_video"!==t.activity.type&&(r=de(t.activity, "exit", (function(){
              R.location.href="/course/".concat(e, "/content")
            }))), r||(R.location.href="/course/".concat(e, "/content"))
          };
          var X=()=>{
            var e, t=i(".module-syllabus-nav .module"), r=t.scrollTop();
            t.css("position", "relative");
            var n=t.innerHeight(), o=t.find(".active"), s=o.outerHeight(), a=null===(e=o.position())||void 0===e?void 0:e.top;
            if(a<0||a+s>n){
              var c=a<0?r+a:r+a-n+s;
              t.scrollTop(c)
            }
          }, ee=function(e){
            oe(), f.map(t.course.modules, (function(r){
              return f.find(r.activities, {
                id:e.id
              })||(r.collapse=!0), r.id!==e.module_id&&r.id!==e.referrer_id||(t.module=r, t.selectedModule=r), f.map(r.syllabuses, (function(i){
                return f.find(i.activities, {
                  id:e.id
                })||(i.collapse=!0), i.id!==e.syllabus_id&&i.id!==e.referrer_id||(i.active=!0, t.syllabus=i, t.module=r, t.selectedModule=r), f.map(i.activities, (t=>t.active=e.id===t.id))
              })), f.map(r.activities, (function(t){
                if(t.id===e.id&&t.type===e.type)return t.active=!0
              }))
            })), setTimeout(X, 50)
          }, te=function(e){
            if(t.course)return ee(e), S.inPage({
              course_id:t.course.id, module_id:e.module_id, syllabus_id:e.syllabus_id, activity_id:e.id
            })
          };
          t.isSyllabusLocked=e=>e.activities.length>0&&f.every(e.activities, (e=>e.is_locked||t.activityHasNotFinishedPrerequisite(e))), t.changeActivity=function(e){
            var r, n;
            if(!M.canViewActivityPermission(t.isInstructorView||(null===(r=window.globalData)||void 0===r||null===(n=r.courseRoles)||void 0===n?void 0:n.includes("student_assistant")), e)&&!M.allowViewUnpublishedActivityDetail(e))return i("#access-forbidden-popup").foundation("reveal", "open"), void(t.__accessForbidden=e);
            var o=!1;
            "online_video"!==e.type?de(e, "enter", void 0):t.activity&&"online_video"!==t.activity.type&&(o=de(t.activity, "exit", (function(){
              R.location.href="/course/".concat(U, "/learning-activity/full-screen#/").concat(e.id)
            }))), o||re(e)
          };
          var re=r=>{
            if(t.uploadsStatus=m.setUploadsFeature(r.uploads), e.ui.ytTimerId&&clearInterval(e.ui.ytTimerId), "live_record"===r.type?t.liveRecordCurrent=null:t.liveRecordCurrent=t.liveRecordActivities[
              t.liveRecordIndex
            ], c.search("view", null), t.canOpenActivity(r)||[
              "chatroom", "virtual_classroom", "zoom", "microsoft_teams_meeting", "welink", "classin"
            ].includes(r.type))return[
              "exam", "classroom", "feedback", "questionnaire", "live_record", "select_student", "race_answer", "number_rollcall", "qr_rollcall"
            ].includes(r.type)?(ee(r), G(r), t.intervalLiveRecordAnalyzedStatus&&clearInterval(t.intervalLiveRecordAnalyzedStatus), "live_record"===r.type&&r.task&&"processing"===r.task.task_status&&(t.processTime=0, t.progress=0, t.intervalLiveRecordAnalyzedStatus=setInterval(ae, 2e3)), c.path("".concat(r.type, "/").concat(r.id))):(t.currentMaterialIndex=1, t.isInstructorView||!r.expired||[
              "homework", "chatroom", "virtual_classroom", "forum", "interaction", "zoom", "microsoft_teams_meeting", "google_meeting", "welink", "classin", "tencent_meeting", "lark_meeting", "wecom_meeting", "dingtalk_live"
            ].includes(r.type)?(t.fromCurrent=!0, c.path("".concat(r.id))):void 0)
          };
          t.trustSrc=e=>a.trustAsResourceUrl(e);
          var ie=e=>{
            switch(e.type){
              case"homework":return!1;
              default:return!0
            }
          }, ne=function(e, r){
            var i=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :"download", n=function(r){
              if(_.refreshActivitiesReadForMaterialActivity(t.activitiesRead, r), "full"===r.completeness&&e.completion_criterion&&t.isCourseInCheckpointMode)return _.refreshPrerequisitesStatus(e, t, !0, t.completedInfo[
                e.type
              ])
            };
            ie(t.activity)&&h.logActivityRead(e.id, {
              upload_id:r.id
            }, n, (()=>{
            })), S.track(e.type, i, {
              activity_id:e.id, upload_id:r.id, file_name:r.name
            })
          };
          t.downloadBlob=function(e, t){
            var r=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :"download";
            t.deleted||ne(e, t, r)
          }, t.canShowOperations=e=>b(e), t.canEditActivitySelf=e=>y(e), t.downloadWeDrive=e=>{
            "WEDRIVE"===e.source&&P.get("/api/wedrive/file/".concat(e.fileid), {
              responseType:"arraybuffer"
            }).then((e=>{
              if(e.data){
                var t=m.bufToUrl(e.data);
                window.open(t, "_blank")
              }
            }))
          }, e.$on("changeFile", ((e, t, r)=>{
            ne(r, t, "view")
          })), t.renderMaterial=function(r, i){
            return t.downloadBlob(r, i), t.upload=i, e.$emit("previewFile", i, r)
          }, t.switchMaterial=function(e, r){
            if(!r){
              "next"===e?t.currentMaterialIndex++:t.currentMaterialIndex--;
              var i=t.activity.uploads[
                t.currentMaterialIndex-1
              ];
              return t.renderMaterial(t.activity, i)
            }
          };
          var oe=()=>f.map(t.course.modules, (function(e){
            return e.collapse=!1, f.map(e.syllabuses, (function(e){
              return e.collapse=!1, e.active=!1, f.map(e.activities, (e=>e.active=!1))
            })), f.map(e.activities, (e=>e.active=!1))
          })), se=e=>f.each(e, (function(e){
            var t=e.name.split(" / ");
            if(3===t.length)return e.displayName=t[
              0
            ], e.dateRange=t[
              1
            ], e.classroom=t[
              2
            ]
          }));
          e.$on("$refreshPrerequisitesStatus", (function(e){
            var r=!(arguments.length>1&&void 0!==arguments[
              1
            ])||arguments[
              1
            ], i=t.activity.completion_criterion;
            if(i){
              var n="forum"===t.activity.type&&i===t.forumSubmittedInfo, o="homework"===t.activity.type&&i===t.homeworkSubmittedInfo, s="lesson"===t.activity.type;
              t.isCourseInCheckpointMode&&(n||o||s)&&_.refreshPrerequisitesStatus(t.activity, t, r, t.completedInfo[
                t.activity.type
              ]);
              var a="forum"===t.activity.type&&i!==t.forumSubmittedInfo, c="homework"===t.activity.type&&i!==t.homeworkSubmittedInfo;
              if(a||c)return _.refreshPrerequisitesStatus(t.activity, t, !1, t.notScored)
            }
          })), e.$on("$forumNoneSubmitted", (function(){
            if(t.isCourseInCheckpointMode&&t.activity.completion_criterion)return _.refreshPrerequisitesStatus(t.activity, t, !1, t.forumNoneCompletedInfo)
          })), e.$on("activityUpdated", (function(e, r){
            if(f.merge(t.activity, r), t.isCourseInCheckpointMode)return v(t, h, r, _, [
            ]).refreshPrerequisitesAfterActivityEdit()
          })), t.toggleCollapse=function(e){
            var r, i=!(arguments.length>1&&void 0!==arguments[
              1
            ])||arguments[
              1
            ], o=!e.collapse;
            if(i&&n.guard(null!=t.course?t.course.modules:void 0, (e=>e.length))>0&&f.forEach(null!=t.course?t.course.modules:void 0, (e=>e.collapse=!0)), e.collapse=o, i)return null!==(r=window.featureToggles)&&void 0!==r&&r.lazyLoadCourseSection&&ve(e.id), t.selectedModule=e
          }, t.resetPrerequisitesTipsPosition=function(e){
            var t=i(e.currentTarget), r=t.offset();
            return t.find(".prerequisites-tips").css("top", r.top-50), !0
          }, t.startAsrAnalyzed=function(){
            var e=t.activity_id;
            return O.createLiveRecordAsrTask(e, (function(e){
              return t.activity.task={
                task_id:e.id, task_status:"processing"
              }, t.progress=0, t.intervalLiveRecordAnalyzedStatus=setInterval(ae, 2e3)
            }), (function(e){
              return t.activity.task={
                task_status:"fail"
              }, E.error(e.message)
            }))
          }, t.downloadCaption=function(){
            return O.getLiveRecordCaptions(t.activity_id, (function(e){
              var r=[
              ];
              e.captions.forEach((e=>r.push("".concat(e, "\r\n\r\n"))));
              var i=new Blob(r, {
                type:"text/plain;charset=utf-8"
              });
              return l.saveAs(i, "".concat(t.activity.title, ".txt"))
            }), (e=>E.error(e.message)))
          };
          var ae=function(){
            return O.getLiveRecordAsrTaskStatus(t.activity_id, (function(e){
              if(e.status)return t.activity.task.task_status=e.status, "success"===e.status||"fail"===e.status?(e.keyword&&(t.activity.keyword=e.keyword), clearInterval(t.intervalLiveRecordAnalyzedStatus)):(t.progress=100*e.progress, t.processTime=e.eta)
            }), (function(e){
              return clearInterval(t.intervalLiveRecordAnalyzedStatus), E.warning(e.message)
            }))
          };
          t.closeFloatLiveRecord=function(){
            if(t.liveRecordCurrent)return t.liveRecordFloatWindowClose=!0
          }, t.openFloatLiveRecord=function(){
            if(t.liveRecordActivities)return t.liveRecordCurrent=t.liveRecordActivities[
              t.liveRecordIndex
            ], t.liveRecordFloatWindowClose=!1
          };
          var ce=function(e){
            if(e)return t.liveRecordActivities=f.filter(e, {
              status:"start"
            }), t.liveRecordIndex=0, t.liveRecordCurrent=null, t.liveRecordFloatWindowClose=!0, "live_record"!==t.activity.type&&(t.liveRecordCurrent=t.liveRecordActivities[
              0
            ], t.liveRecordFloatWindowClose=!1), le()
          }, ue=e=>{
            new d(navigator.userAgent).mobile()&&(R.location.href=(e=>{
              var r=e.type;
              switch(r){
                case"online_video":return"/course/".concat(U, "/online-video/").concat(e.id, "/info");
                case"exam":return t.isInstructorView?"/course/".concat(U, "/").concat(r, "/").concat(e.id, "/submissions"):"/course/".concat(U, "/").concat(r, "/").concat(e.id, "/info");
                case"homework":return t.isInstructorView?"/course/".concat(U, "/").concat(r, "/").concat(e.id, "/submission"):"/course/".concat(U, "/").concat(r, "/").concat(e.id);
                case"chinamcloud_live":return"/course/".concat(U, "/live/").concat(e.id, "/info?courseLiveId=").concat(e.id, ",type=ExtensionLive,source=ChinamcloudLive");
                case"feedback":return"/course/".concat(U, "/feedback-activity/").concat(e.id);
                case"forum":return"/course/".concat(U, "/forum/topic-categories");
                case"web_link":return"/course/".concat(U, "/web-link/").concat(e.id, "/info");
                case"tencent_meeting":return"/course/".concat(U, "/tencentMeeting/").concat(e.id, "/info");
                case"virtual_classroom":return"/course/".concat(U, "/virtual-classroom/").concat(e.id, "/info");
                case"interaction":return"/course/".concat(U, "/interactive-material/").concat(e.id, "/info");
                case"classroom":return"/course/".concat(U, "/quiz/").concat(e.id, "/info");
                default:return"/course/".concat(U, "/").concat(r, "/").concat(e.id, "/info")
              }
            })(e))
          }, le=function(){
            return t.liveRecordHasNext=t.liveRecordIndex<t.liveRecordActivities.length-1, t.liveRecordHasPrev=t.liveRecordIndex>0
          };
          t.nextLiveRecord=function(){
            if(t.liveRecordActivities&&t.liveRecordIndex<t.liveRecordActivities.length-1)return t.liveRecordIndex+=1, t.liveRecordCurrent=t.liveRecordActivities[
              t.liveRecordIndex
            ], le()
          }, t.prevLiveRecord=function(){
            if(t.liveRecordActivities&&t.liveRecordIndex>0)return t.liveRecordIndex-=1, t.liveRecordCurrent=t.liveRecordActivities[
              t.liveRecordIndex
            ], le()
          }, t.analysisTaskStatus=function(e){
            return e?e.task_status:"none"
          };
          var de=function(e, r, i){
            var n=window.globalData.user, o=window.globalData.course;
            return I.initChecker({
              userName:n.name, targetCode:e.id, targetName:e.title, activityType:e.type, businessKey:r, courseCode:o.courseCode, moduleName:t.module?t.module.name:"", syllabusName:t.syllabus?t.syllabus.summary:"", callback:i
            })
          };
          t.$on("onActivityLoaded", ((e, r)=>{
            t.course&&!t.isInSyllabusPage&&r&&"online_video"!==r.type&&(!function(e){
              f.forEach(t.course.modules, (r=>{
                r.id!==e.module_id&&r.id!==e.referrer_id||(t.module=r), f.forEach(r.syllabuses, (r=>{
                  r.id!==e.syllabus_id&&r.id!==e.referrer_id||(t.syllabus=r)
                }))
              }))
            }
            (r), de(r, "enter", void 0)), e.stopPropagation()
          }));
          var me=function e(r, i){
            var n, o=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :new Set;
            if(o.has(r.id))return{
              pre:null, next:null
            };
            if(o.add(r.id), !i)return{
            };
            var s=null===(n=t._course)||void 0===n?void 0:n.getModule(i);
            if(!s)return{
            };
            var a=t._course.course.modules.length, c=t._course.course.modules.findIndex((e=>e.id===s.id)), u=e=>{
              e.sort(((e, t)=>e.syllabus_id===t.syllabus_id?e.sort===t.sort?e.id-t.id:e.sort-t.sort:e.syllabus_id-t.syllabus_id))
            }, l=e=>{
              u(e.activities), u(e.directActivities), e.syllabuses.forEach((e=>{
                u(e.activities)
              }))
            };
            l(s);
            for(var d, m, p=s.activities, v=p.findIndex((e=>e.id===r.id&&e.type===r.type)), f=v-1, h=v+1, b=c;
            b>=0;
            b--){
              if(f>=0){
                d=p[
                  f
                ];
                break
              }
              if(b!==c){
                var y=t._course.course.modules[
                  b
                ];
                if(y.activities.length>0){
                  l(y), d=y.activities[
                    y.activities.length-1
                  ];
                  break
                }
              }
            }
            for(var _=c;
            _<a;
            _++){
              if(h<p.length){
                m=p[
                  h
                ];
                break
              }
              if(_!==c){
                var g=t._course.course.modules[
                  _
                ];
                if(g.activities.length>0){
                  l(g), m=g.activities[
                    0
                  ];
                  break
                }
              }
            }
            if(d&&!t.canOpenActivity(d, !1)){
              var w=e(d, d.module_id, o);
              d=w.pre
            }
            if(m&&!t.canOpenActivity(m, !1)){
              var k=e(m, m.module_id, o);
              m=k.next
            }
            return{
              pre:d, next:m
            }
          }, pe=function(){
            var e=u(o.mark((function e(r){
              var i, n, s;
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(i=h.getNotLoadedModuleId([
                    r
                  ]), n={
                    classrooms:[
                    ], exams:[
                    ], learning_activities:[
                    ], interactions:[
                    ], live_records:[
                    ], rollcalls:[
                    ]
                  }, 0!==i.length){
                    e.next=4;
                    break
                  }
                  return e.abrupt("return", n);
                  case 4:return t._course&&t._course.loadingModule(r, !0), e.next=7, h.getActivitiesByModuleIds(U, i, (o=void 0, o=[
                    "learning_activities", "exams", "classrooms"
                  ], t.enableLiveStreaming&&o.push("live_records"), t.allowInteractionInActivity&&o.push("interactions"), t.allowRollcallView&&o.push("rollcalls"), o.join(",")));
                  case 7:return s=e.sent, h.setLoadedModuleId(i), e.abrupt("return", Object.assign(n, s.data));
                  case 10:case"end":return e.stop()
                }
                var o
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          (), ve=function(){
            var e=u(o.mark((function e(r){
              var i, n, s, a, c, u, l;
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, pe(r);
                  case 2:return i=e.sent, n=i.classrooms, s=i.exams, a=i.learning_activities, c=i.interactions, u=i.live_records, l=i.rollcalls, h.fillClassroomsInModuleAndSyllabus(t._course, n), h.fillExamsInModuleAndSyllabus(t._course, s), h.fillActivitiesInModuleAndSyllabus(t._course, a), c&&h.fillInClassInteractionsInModule(t._course, c||[
                  ]), l&&h.fillRollCallInModule(t._course, l||[
                  ]), u&&h.fillLiveRecordsInModule(t._course, u||[
                  ]), t._course.loadingModule(r, !1), e.abrupt("return", u);
                  case 12:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          ();
          null!==($=window.featureToggles)&&void 0!==$&&$.lazyLoadCourseSection&&t.$on("loadingActivityFinished", function(){
            var e=u(o.mark((function e(r, i){
              var n, s, a, c, u, l;
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(i){
                    e.next=2;
                    break
                  }
                  return e.abrupt("return");
                  case 2:return n=i.activityResponse, s=i.activitiesRead, (a=n.module_id)||("module"===n.referrer_type?a=n.referrer_id:"syllabus"===n.referrer_type&&(c=t._course.getSyllabuses(), (u=c.find((e=>e.id===n.referrer_id)))&&(a=u.module_id))), e.next=7, ve(a);
                  case 7:l=e.sent, G(n), te(t.activity), W(t.activity.id), t.activitiesRead=s, K(), Y(), t.uploadsStatus=m.setUploadsFeature(t.uploads), ce(l||[
                  ]), t.$apply();
                  case 17:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t, r){
              return e.apply(this, arguments)
            }
          }
          ());
          var fe=function(){
            var e=u(o.mark((function e(){
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, h.initCourseAndModules();
                  case 2:t.course=e.sent, se(t.course.modules), t._course=h._course, t.viewActivityControllerInitialed=!0;
                  case 6:case"end":return e.stop()
                }
              }), e)
            })));
            return function(){
              return e.apply(this, arguments)
            }
          }
          ();
          null!==(D=window.featureToggles)&&void 0!==D&&D.lazyLoadCourseSection?fe():function(){
            j.show();
            var e=h.initCourseAndModules();
            U=i("#courseId").val();
            var n=[
              e, h.initActivities(U), h.initExamsForActivityListOnlyRequest(U), h.initClassroomsForActivityListOnlyRequest(U)
            ];
            t.enableLiveStreaming?n.push(h.initLiveRecordsForActivityListOnlyRequest(U)):n.push(Promise.resolve([
            ])), t.allowInteractionInActivity?n.push(h.initInClassInteractionsForActivityList(U)):n.push(Promise.resolve([
            ])), t.allowRollcallView?n.push(h.initRollCallsForActivityList(U)):n.push(Promise.resolve([
            ])), A.all(n).then((function(){
              t.viewActivityControllerInitialed=!0;
              var e=s(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 7), i=e[
                0
              ], n=e[
                1
              ], o=e[
                2
              ], a=e[
                3
              ], c=e[
                4
              ], u=e[
                5
              ], l=e[
                6
              ];
              t.course=i, se(t.course.modules), t._course=h._course, h.fillActivitiesInModuleAndSyllabus(t._course, n, !1), h.fillExamsInModuleAndSyllabus(t._course, o, !1), h.fillClassroomsInModuleAndSyllabus(t._course, a, !1), h.fillLiveRecordsInModule(t._course, c), h.fillInClassInteractionsInModule(t._course, u), h.fillRollCallInModule(t._course, l);
              var d=r.activityId||t.onlineVideoId, p=r.examId, v=r.classroomId, b=r.questionnaireId, y=r.liveRecordId, _=r.rollcallId, g=r.classModeInteractionId, w=r.danmuActivityId;
              if(t.activity_id=t.activity_id||p||v||b||d||y||g||_||w, "SHTVU"===t.deliveryOrg&&h.initCourseTimeTable(t.course.id).then((function(e){
                h.setTimeTableProperty(t.course, e)
              })), t.activity_id){
                var k, S, I;
                if(K(), p?I=f.find(o, {
                  id:parseInt(p)
                }):v?I=f.find(a, {
                  id:parseInt(v)
                }):b?I=f.find(n, {
                  id:parseInt(b)
                }):d?I=f.find(n, {
                  id:parseInt(d)
                }):y?(I=f.find(c, {
                  id:parseInt(y)
                })).task&&"processing"===I.task.task_status&&(t.progress=0, t.processTime=0, t.intervalLiveRecordAnalyzedStatus=setInterval(ae, 2e3)):g?I=f.find(u, {
                  id:parseInt(g)
                }):_?I=f.find(l, {
                  id:parseInt(_)
                }):w&&(I=f.find(u, {
                  id:parseInt(w)
                })), M.canViewActivityPermission(t.isInstructorView||(null===(k=window.globalData)||void 0===k||null===(S=k.courseRoles)||void 0===S?void 0:S.includes("student_assistant")), I)||M.allowViewUnpublishedActivityDetail(I)||(window.location.href="/errors/no_permission"), !t.isInSyllabusPage&&!t.isCourseInCheckpointMode&&!t.onlineVideoFullScreen)return;
                t.enableClientsRedirect&&ue(I), G(I), ee(I), t.uploadsStatus=m.setUploadsFeature(t.uploads), I&&"online_video"!==I.type&&de(I, "enter", void 0), ce(c)
              }
            })), j.hide()
          }
          ()
        }
      ]
    }, 385247:(e, t, r)=>{
      r(418665), r(658379), r(14602), e.exports=[
        "$scope", function(e){
          e.$watch("activity", (()=>{
            e.activity.entries.forEach((e=>{
              e.keywordsStr=e.keywords.map((e=>e.name)).join(" ; "), e.fileCount=e.uploads.length
            }))
          })), e.showEntriesDetail=e=>{
            window.open("/user/resources/entries/".concat(e))
          }, e.view="description"
        }
      ]
    }, 390276:(e, t, r)=>{
      var i=r(248124), n=r(795093);
      r(269193), r(43148), r(658379);
      var o=r(592207);
      function s(e, t, r, i, n, o, s){
        try{
          var a=e[
            o
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(i, n)
      }
      function a(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(i, n){
            var o=e.apply(t, r);
            function a(e){
              s(o, i, n, a, c, "next", e)
            }
            function c(e){
              s(o, i, n, a, c, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      r(207452);
      var c=r(302543), u=r(877401).saveKnowledgeReferencesForActivity, l=r(552979).default, d=r(966491), m=r(181769), p=m.canEditActivity, v=m.hasEditPermissionForBlueprint, f=m.canShowRubricEditOperations, h=r(822087).ActivityAirHelper;
      e.exports=[
        "$rootScope", "$scope", "$routeParams", "statHelper", "$location", "$timeout", "$window", "toastr", "$http", "activityService", "activityRepository", "publishHelper", function(e, t, s, m, b, y, _, g, w, k, S, I){
          var C, x, A, P, T=i("#userId").data("id"), R=i("#userRole").val(), O=null===(C=window.globalData)||void 0===C?void 0:C.user.mobile, E=null===(x=window.globalData)||void 0===x?void 0:x.user.userNo;
          function M(){
            if("material"===t.activity.type){
              t.activity.uploads&&t.activity.uploads.forEach((e=>{
                t.materialUploadKnowledgePointsMap[
                  e.id
                ]
                =[
                ]
              }));
              var e=t.activity.knowledge_node_reference;
              if(e)e.filter((e=>e.data&&e.data.material_uploads)).forEach((e=>{
                e.data.material_uploads.forEach((r=>{
                  t.materialUploadKnowledgePointsMap[
                    r.id
                  ]
                  &&t.materialUploadKnowledgePointsMap[
                    r.id
                  ].push({
                    id:e.knowledge_node.id, name:e.knowledge_node.name
                  })
                }))
              }))
            }
          }
          t.controller="ActivityDetailController", t.ui.tab="attachment", t.moduleName=null!==(A=null===(P=t.module)||void 0===P?void 0:P.name)&&void 0!==A?A:"", t.currentUser={
            userId:T, userRole:R, mobile:O, userNo:E
          }, t.loadComponents=()=>{
            Promise.resolve().then(r.bind(r, 678264))
          }, t.materialUploadKnowledgePointsMap={
          }, t.knowledgeNodeIds=[
          ], t.showKnowledgePointsTipsy=e=>t.materialUploadKnowledgePointsMap[
            e
          ].map((e=>e.name)).join(", "), t.loadActivity(t.onlineVideoId||s.activityId).then((()=>{
            t.activity&&(t.activityLoaded=!0, "Student"===R&&t.$emit("onActivityLoaded", t.activity), d.setUploadsOriginStatus(t.activity.uploads), S.initPublishInfo(t, t.activity), M())
          })), m.trackVisitOnDestroy(t), t.isHttpResource=function(e){
            return"http"!==b.$$protocol&&/^http:\/\//.test(e)},t.checkActivity=function(){var e=a(o.mark((function e(r){var i;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=["".concat(r.type,"-").concat(r.id)],e.next=3,I.publishActivies(r.course_id,i,{type:!r.published},!1);case 3:r.published=!r.published,t.$emit("activity-publish-changed",{type:r.published});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.cancelPublish=r(370102).M,t.isShowingNoteBox=!1,t.showNoteBox=function(){t.canAddNote()&&(t.isShowingNoteBox||(t.isShowingNoteBox=!0,d.animateIncreaseWidth(t.player,-290)))},t.activityResourceSave=function(e){var r=()=>i("#save-confirmation-popup").foundation("reveal","close");return t.confirm=function(){return k.saveActivityResource(e,r,r)},i("#save-confirmation-popup").foundation("reveal","open"),null},t.hideNoteBox=function(){t.isShowingNoteBox&&(d.animateIncreaseWidth(t.player,290),y((()=>(t.isShowingNoteBox=!1,500))))},t.reTranscode=function(e){d.retryTranscode(w,g,_,e)},t.canShowOperations=e=>p(e),t.canShowRubricEditOperations=e=>f(e),t.canEditActivitySelf=e=>v(e);var $=function(e){var r,i;if("online_video"!==t.currentActivity.type||"Student"!==t.currentUser.userRole)return!1;var o,s="".concat(n.utc().format("YYYY-MM-DDTHH:mm:ss"),"Z"),a=null===(r=t.course.course_attributes.data)||void 0===r?void 0:r.course_end_time;if(!a||a<s)return!1;var c,u,l,d=null!==(c=window.featureToggles)&&void 0!==c&&c.face_photo_check_service?"FACE_PHOTO":null!==(u=window.featureToggles)&&void 0!==u&&u.face_recognition_service?"FACE_RECOGNITION":null;if("FACE_PHOTO"===e&&"FACE_PHOTO"===d)o=null===(l=t.course.course_attributes.data)||void 0===l?void 0:l.photo_check_rule;else if("FACE_RECOGNITION"===e&&"FACE_RECOGNITION"===d){var m;o=null===(m=t.course.course_attributes.data)||void 0===m?void 0:m.face_service_rule}return o&&(null===(i=o)||void 0===i?void 0:i.online_video_rules)&&o.online_video_rules.length>0},D=function(){if(!t.currentActivity.syllabus_id)return null;var e=t.module.syllabuses.filter((e=>e.id===t.currentActivity.syllabus_id));return e.length>0?e[0].summary:null},j=function(){var e=$("FACE_PHOTO")?t.course.course_attributes.data.photo_check_rule.online_video_rules:t.course.course_attributes.data.face_service_rule.online_video_rules,i=t.player.duration,n=Math.floor(t.player.currentTime),o=c.map(e,(e=>({percentage:e,second:Math.floor(i*e/100)}))),s=c.find(o,(e=>[n,n-1].includes(e.second)));if(!c.isEmpty(s)){var a=s.percentage,u={userNo:t.currentUser.userNo,sourceType:"web",targetType:"ONLINE_VIDEO",targetCode:"".concat(t.currentActivity.id),targetName:t.currentActivity.title,activityType:"online_video",businessKey:"".concat(a),courseCode:t.course.course_code,moduleName:t.module.name,syllabusName:D(),signHandler:()=>w.get("/api/face-recognition/config").then((e=>e.data)),afterCheckSuccess:e=>{t.player.play()},onShowMask:()=>{t.player.pause()}};$("FACE_PHOTO")?Promise.all([r.e(80575),r.e(81635)]).then(r.t.bind(r,380575,23)).then((e=>{e.default.startFaceCapture(u)})):Promise.all([r.e(80575),r.e(81635)]).then(r.t.bind(r,380575,23)).then((e=>{e.default.startFaceRecognition(u)}))}};t.player={},t.playerInitiated=e=>{t.player=e,($("FACE_PHOTO")||$("FACE_RECOGNITION"))&&e.on("timeupdate",c.throttle(j,1e3))},t.$on("videoStatus",((e,r)=>t.ui.videoStatus=r));t.canAddNote=()=>{return"ready"===t.ui.videoStatus&&t.player&&0!==("function"==typeof(e=t.player).readyState?e.readyState():e.readyState);var e},t.urlProtectedMsg=null,t.protectedDetect=function(e){var r=encodeURIComponent(e);return w.get("/api/csp/detect?url=".concat(r)).then((e=>t.urlProtectedMsg=e.data.msg))},t.canViewKnowledgeNodeReference=()=>!!t.isInstructorView||"published"===t.course.knowledge_graph_publish_type,t.airHelper=new h(e,t),t.ui.switchTab="basicInfo",t.tabChange=function(e){t.ui.switchTab=e},e.$on("viewAiQuizSubmission",((e,r)=>{t.tabChange("submission"),t.uploadId=r.uploadId})),t.$on("updateActivityQuizzes",((e,r)=>{var i=r.uploadId;t.tabChange("submission"),t.uploadId=i})),t.showRelatedKnowledgePoints=()=>{var e;return"material"===(null===(e=t.activity)||void 0===e?void 0:e.type)&&window.featureToggles.knowledgeGraph},t.currentUpload=null,t.openRelatedKpModal=e=>{var r,i=null===(r=document.querySelector("related-knowledge-points-modal"))||void 0===r?void 0:r.getVueInstance();i&&(t.currentUpload=e,t.knowledgeNodeIds=t.materialUploadKnowledgePointsMap[e.id].map((e=>e.id)),i.openModal())};var U=function(){var e=a(o.mark((function e(r){var i;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.currentUpload){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,u(t.activity.id,{uploadId:t.currentUpload.id,knowledgeNodeIds:r});case 5:return g.success(l.t("save_success")),e.next=8,S.loadActivity(t.activity.id);case 8:i=e.sent,t.activity.knowledge_node_reference=i.knowledge_node_reference,M(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),g.success(l.t("save_error"));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),L=e=>{var t;null!==(t=e.detail)&&void 0!==t&&t.knowledgeNodeIds&&U(e.detail.knowledgeNodeIds)};_.addEventListener("knowledge-node-selected",L),t.$on("$destroy",(()=>{_.removeEventListener("knowledge-node-selected",L)})),function(){var e=localStorage.getItem("viewAiQuizSubmission");if(e){var r=JSON.parse(e);t.tabChange("submission"),t.uploadId=r.uploadId,localStorage.removeItem("viewAiQuizSubmission")}var i=localStorage.getItem("disableAutoOpenLinkOnce");t.enableAutoOpenLink&&!i&&t.$watch("activity",(function(e,r){null!=e&&"web_link"===t.activity.type&&t.activity.data&&t.activity.data.link&&window.open(t.activity.data.link,"_blank")})),i&&localStorage.removeItem("disableAutoOpenLinkOnce")}(),t.enableAskAir=function(){var e,r="online_video"===t.currentActivity.type,i=((null===(e=window.globalData)||void 0===e?void 0:e.course)||{}).hasAiAbility,n=(window.featureToggles||{}).airSolver;return i&&n&&r}}]},398176:(e,t,r)=>{var i=r(302543),n=r(756029);r(640173),e.exports=["$scope","$http","Navigation",function(e,t,r){e.submitterData={};var o=function(t){if(t)return e.submitterData.submission=t.submission,e.submitterData.student=t.student,e.submitterData.group=t.group,e.currentItem=e.submitterData};e.changeReviewer=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e.reviewerNav.setNavigationData(t),void 0===e.reviewerNav.currentItem&&(e.reviewerNav.navIndices.current=-1),o(e.reviewerNav.currentItem),e.submitterData.submission&&e.setUploadNav(e.submitterData.submission),e.remindMsg=l()},e.changeReviewGroupMember=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e.groupMemberNav.setNavigationData(t),e.submitterData.submission&&(e.submitterData.currentInterScore=i.find(e.submitterData.submission.inter_scores,(t=>t.reviewer_id===e.groupMemberNav.currentItem.user_id))),e.currentReviewer=i.find(e.navigationData.students,(t=>t.id===e.groupMemberNav.currentItem.user_id)),e.remindMsg=l()},e.changeGroupSubmitter=function(t){var r=i.find(e.groupSubmitterData,(e=>e.group.id===i.parseInt(t)));if(e.selectedGroup=n.copy(r.group),o(r),e.groupMemberNav=a(r.review_group_members),e.changeReviewGroupMember(0),r.submission&&r.submission.inter_scores.length>0){var s=i.filter(r.submission.inter_scores,(t=>t.review_group_id===e.navigation.currentItem.group.id));return e.selectedGroup.averageScore=e.averageInterScore(s)}};var s=r=>t.get("/api/activities/".concat(e.homework.id,"/students/").concat(r,"/submitters")),a=e=>new r(e),c=function(t){return e.groupSubmitterData=t.data.submitters,e.groupSubmitterData.length>0&&e.changeGroupSubmitter(e.groupSubmitterData[0].group.id),e.remindMsg=l()},u=function(t){return e.reviewerNav=a(t.data.submitters),e.changeReviewer(),e.remindMsg=l()},l=function(){var t,r,n=e.navigation.currentItem;if(e.currentSubmission=(t=n,e.homework.submit_by_group?i.find(e.homework.submissions,(e=>e.group.id===t.group.id)):i.find(e.homework.submissions,(e=>e.student.id===t.student.id))),e.homework.is_inter_review_by_submitter){if(!e.currentSubmission.submission||!e.currentSubmission.submission.id||!e.currentSubmission.marked_submitted)return e.msgUnSubmit;if(!e.currentSubmission.submission.is_in_review)return e.msgSubmitTooLate}if(e.homework.is_inter_review_by_submitter&&e.currentSubmission.submission.is_in_review||!e.homework.is_inter_review_by_submitter)return e.homework.submit_by_group?(r=e.selectedGroup?e.selectedGroup.name:"",e.msgNoSubmissionToBeReviewed.replace(/\{0\}/gi,r)):(r=e.submitterData.student?e.submitterData.student.name:"",e.msgNoSubmissionToBeReviewed.replace(/\{0\}/gi,r))},d=function(){var t=e.navigation.currentItem;return e.homework.submit_by_group?s(t.group.id).then(c,(function(){})):s(t.student.id).then(u,(function(){}))};return d(),e.$watch("navigation.currentItem",(function(e,t){if(e!==t)return d()}))}]},411556:(e,t,r)=>{var i=r(248124),n=r(552979).default;e.exports=["$scope","$window","$http","activityRepository",function(e,t,r,o){e.experimentId=e.activity.id;var s;e.activity||o.loadActivity(e.activityId).then((function(t){e.activity=t})),s=i("#userId").attr("value"),r.get("/api/virtual-experiments/".concat(e.activity.id,"/user/").concat(s,"/score")).then((t=>{e.experimentInfos=t.data,e.experimentInfos.scores.submissions.length?e.msg=n.t("virtualExperiment.alert.alreadyCommit",{name:e.activity.title}):e.msg=n.t("virtualExperiment.alert.notCommit",{name:e.activity.title}),e.userInfo=e.experimentInfos.scores.user_info,e.submissions=e.experimentInfos.scores.submissions}))}]},412916:(e,t,r)=>{var i=r(302543);r(269193),r(43148),r(640173),r(658379);var n=r(592207);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function s(e){u(o,i,n,s,a,"next",e)}function a(e){u(o,i,n,s,a,"throw",e)}s(void 0)}))}}r(207452),e.exports=["$http","$q","groupApi","commonApi",function(e,t,r,o){var a={activities:null,modules:null,"topic-categories":null},u={},d=null,m=null,p={},v=null,f=null,h=null,b=null,y=null,_=null,g={},w={},k=null,S=null,I=null,C=null,x=null,A=null,P=null,T=null,R=null,O={},E={},M={},$=null,D=null,j=null,U=function(r,i,n){if(a[i])return a[i].promise;a[i]=t.defer();var o=n?"?fields=".concat(n):"";return"homework-activities"===i&&(o=o?"".concat(o,"&no_paginate=True"):"?no_paginate=True"),["topic-categories","activities"].includes(i)&&(o=o?"".concat(o,"&exclude_cross_course_forum=True"):"?exclude_cross_course_forum=True"),e.get("/api/courses/".concat(r,"/").concat(i).concat(o)).success((e=>a[i].resolve(e[i.replace("-","_")]))).error((function(){return a[i].resolve([]),a[i]=null})),a[i].promise},L=function(r,i,n){if(i in p||(p[i]={submission:null,exam:null,forum:null}),p[i][n])return p[i][n].promise;p[i][n]=t.defer();return e.get("/api/courses/".concat(r,"/students/").concat(i,"/").concat(n,"-status")).success((e=>p[i][n].resolve(e))).error((function(){return p[i][n].resolve({}),p[i][n]=null})),p[i][n].promise},N={initCourseStatInfo(r){if(_)return _.promise;_=t.defer();return e.get("/api/stat/courses/".concat(r,"/for-instructor")).success((e=>_.resolve(e))).error((function(){return _.resolve({}),_=null})),_.promise},initCourseStudentsStat(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.post("/api/stat/courses/".concat(t,"/students?page=").concat(r,"&page_size=").concat(i),n)},getEnrollmentInfo:(e,t)=>l(n.mark((function r(){return n.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!u[t]){r.next=2;break}return r.abrupt("return",u[t]);case 2:return"id,user(id,name,user_no,imported_from),user_id,roles,group_ids,group_set_ids",r.abrupt("return",o.enrollment(e,t,"id,user(id,name,user_no,imported_from),user_id,roles,group_ids,group_set_ids",i.noop,i.noop).then((e=>{var t=e.data,r=t.id,i=t.user_id,n=t.user,o=c(t,["id","user_id","user"]),a=(n.id,s(s({},c(n,["id"])),{},{id:i,enrollment_id:r},o));return u[r]=a,a})));case 4:case"end":return r.stop()}}),r)})))(),initStudentsMoreInfo:e=>(f||(f=t.defer(),function(e,r){if(d)return d.promise;d=t.defer();var n=r||"id,roles,user(id,name,nickname,user_no,comment,department,klass,grade(name)),seat_number,group_set_ids,group_ids,retake_status";return o.enrollments(e,n,{},(function(e){var t=i.map(e.enrollments,(function(e){return e.enrollment_id=e.id,i.extend(e,e.user),delete e.user,e}));return d.resolve(t)}),(function(){})),d.promise}(e).then((function(e){var t=i.filter(e,(e=>e.roles.includes("student")));return i.forEach(t,(function(e){return e.department_code=e.department&&e.department.code?e.department.code:null,e.department_name=e.department&&e.department.name?e.department.name:null,e.grade_name=e.grade&&e.grade.name?e.grade.name:null,e.class_code=e.klass&&e.klass.code?e.klass.code:null,e.class_name=e.klass&&e.klass.name?e.klass.name:null})),f.resolve(t)}))),f.promise),initStudents:e=>(v||(v=t.defer(),function(e){return m||(m=t.defer(),o.enrollments(e,"id,roles,user(id,name,nickname,user_no,comment,org(id,name),user_attributes(tag)),seat_number,group_ids,group_set_ids,retake_status,imported_track_id",{},(function(e){var t=i.map(e.enrollments,(function(e){return e.enrollment_id=e.id,i.extend(e,e.user),delete e.user,e}));return m.resolve(t)}),(function(){}))),m.promise}(e).then((function(e){var t=i.filter(e,(e=>e.roles.includes("student")));return v.resolve(t)}))),v.promise),initStudentsWithCondition(e){var t=arguments;return l(n.mark((function r(){var s,a,c,u;return n.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.length>1&&void 0!==t[1]?t[1]:1,a=t.length>2&&void 0!==t[2]?t[2]:20,c=t.length>3?t[3]:void 0,u=t.length>4&&void 0!==t[4]&&t[4],"id,roles,user_id,user(id,name,nickname,user_no,comment,org(id,name),user_attributes(tag)),seat_number,group_ids,group_set_ids",r.abrupt("return",o.enrollmentsWithConditions(e,"id,roles,user_id,user(id,name,nickname,user_no,comment,org(id,name),user_attributes(tag)),seat_number,group_ids,group_set_ids",s,a,c,null,(e=>e),i.noop,u));case 6:case"end":return r.stop()}}),r)})))()},initPagedStudents(e){var t=this;return l(n.mark((function r(){var i,o,a,u;return n.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.initStudentsWithCondition(e.courseId,e.pageIndex,e.pageSize,s(s({},e.condition),{},{role_names:["student"]}),e.disablePagination);case 2:return i=r.sent,o=i.data,a=o.enrollments,u=a.map((e=>{var t=e.id,r=e.user,i=c(e,["id","user"]),n=r.id,o=c(r,["id"]);return s(s(s({},i),o),{},{id:n,enrollment_id:t})})),r.abrupt("return",s(s({},o),{},{enrollments:u}));case 7:case"end":return r.stop()}}),r)})))()},initPagedCompleteness(r,i,n,o){var s=t.defer();return e.get("/api/course/".concat(r,"/students/activity-reads?page=").concat(i,"&page_size=").concat([n],"&conditions=").concat(JSON.stringify(o))).success((e=>s.resolve(e))).error((()=>s.resolve([]))),s.promise},initPagedCourseCompleteness(r,i,n,o){var s=t.defer();return e.post("/api/course/".concat(r,"/course-completeness?page=").concat(i,"&page_size=").concat(n),o).success((e=>s.resolve(e))).error((()=>s.resolve([]))),s.promise},initCompletenessItems(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.defer();return e.get("/api/course/".concat(r,"/completeness-items?conditions=").concat(JSON.stringify(i))).success((e=>n.resolve(e))).error((()=>n.resolve([]))),n.promise},initUsersActivityCompleteness(r){var i=t.defer();return e.get("/api/course/".concat(r,"/user-completeness")).success((e=>i.resolve(e))).error((()=>i.resolve([]))),i.promise},initModuleSyllabusCompleteness(r){var i=t.defer();return e.get("/api/course/".concat(r,"/module-syllabus-completeness")).success((e=>i.resolve(e))).error((()=>i.resolve([]))),i.promise},initStudentIds(r){if(h)return h.promise;h=t.defer();return e.get("/api/courses/".concat(r,"/student-ids")).success((e=>h.resolve(e.student_ids))).error((()=>h.resolve([]))),h.promise},initGroups(e){if(M[e])return M[e].promise;M[e]=t.defer();return r.getGroups(e,(t=>M[e].resolve(t.groups))),M[e].promise},initActivities:e=>U(e,"activities","id,title,type,sort,module_id,syllabus_id,uploads,created_at,submit_by_group,group_set_id,is_closed,highest_score,lowest_score,average_score,inter_score_map,late_submission_count,has_score_count,data,start_time,completion_criterion,completion_criterion_key,completion_criterion_value,interaction_activity_attributes"),initHomeworkActivities:e=>U(e,"homework-activities",null),initActivityAndGroups(e,r){var n=t.defer(),o=function(){return n.resolve({}),n=null};return N.initActivities(e).then((function(e){var t=i.find(e,{id:r});if(!t)return n.resolve({}),n.promise;if(!t.submit_by_group)return n.resolve({activity:t,groups:[]}),n.promise;return N.initGroups(t.group_set_id).then((e=>n.resolve({activity:t,groups:e}))).catch(o),n.promise})).catch(o),n.promise},initModules:e=>U(e,"modules"),initExams(r,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(b)return b.promise;b=t.defer();return e.get("/api/courses/".concat(r,"/exams?fields=").concat(i,"&conditions=").concat(JSON.stringify(n))).success((function(e){return b.resolve(e.exams)})).error((function(){return b.resolve([]),b=null})),b.promise},initExamAndGroups(e,r){var n=t.defer(),o=()=>n.resolve({});return N.initExams(e).then((function(e){var t=i.find(e,{id:r});if(!t)return n.resolve({}),n.promise;if(!t.submit_by_group)return n.resolve({exam:t,groups:[]}),n.promise;return N.initGroups(t.group_set_id).then((e=>n.resolve({exam:t,groups:e}))).catch(o),n.promise})).catch(o),n.promise},initClassrooms(r){if(y)return y.promise;y=t.defer();return e.get("/api/courses/".concat(r,"/classroom-list")).success((function(e){var t=e.classrooms;return y.resolve(t)})).error((function(){return y.resolve([]),y=null})),y.promise},initTopicCategories:e=>U(e,"topic-categories","id,activity_id,referrer_type,referrer_id,referrer_title,created_at,activity(id,submit_by_group,group_set_id)"),initTopicCategoryAndGroups(e,r){var n=t.defer(),o=()=>n.resolve({});return N.initTopicCategories(e).then((function(e){var t=i.find(e,{id:r});if(!t)return n.resolve({}),n.promise;if(!(null!=t.activity?t.activity.submit_by_group:void 0))return n.resolve({topicCategory:t,groups:[]}),n.promise;return N.initGroups(t.activity.group_set_id).then((e=>n.resolve({topicCategory:t,groups:e}))).catch(o),n.promise})).catch(o),n.promise},initActivityReads(r,i,n,o){var s="".concat(r,"_").concat(i,"_").concat(o);if(g[s])return g[s].promise;g[s]=t.defer();var a="/api/course/".concat(r,"/activity-reads");return a+=o?"?fields=".concat(o):"?fields=id,activity_id,created_for_id,activity_type,completeness,data",n&&(a+="&no-intercept=true"),i&&(a+="&activity_type=".concat(i)),e.get(a).success((e=>g[s].resolve(e.activity_reads))).error((function(){return g[s].resolve([]),g[s]=null})),g[s].promise},initActivityHotValues(r){if(w[r])return w[r].promise;w[r]=t.defer();return e.get("/api/courses/".concat(r,"/hot-values")).success((e=>w[r].resolve(e.hot_values))).error((function(){return w[r].resolve([]),w[r]=null})),w[r].promise},initStudentSubmissionStatus:(e,t)=>L(e,t,"submission"),initStudentExamStatus:(e,t)=>L(e,t,"exam"),initStudentForumStatus:(e,t)=>L(e,t,"forum"),initCourseActivitiesStudentVisits(e,r){var i=t.defer();return stv.courseActivitiesStudentVisits(e,r,(e=>i.resolve(e))),i.promise},initCountInCourse(e){var r=t.defer();return stv.countInCourse(e,(e=>r.resolve(e))),r.promise},initHomeworksSubmissionStatus(r){if(k)return k.promise;k=t.defer();return e.get("/api/courses/".concat(r,"/homeworks/submission-status")).success((e=>k.resolve(e))).error((function(){return k.resolve({}),k=null})),k.promise},initHomeworksSubmissionStat(r){if(S)return S.promise;S=t.defer();return e.get("/api/stat/courses/".concat(r,"/homework")).success((e=>S.resolve(e))).error((function(){S.resolve({}),S=null})),S.promise},initExamsSubmissionStat(r){if(I)return I.promise;I=t.defer();return e.get("/api/stat/courses/".concat(r,"/exam")).success((e=>I.resolve(e))).error((function(){I.resolve({}),I=null})),I.promise},initTopicCategoriesSubmissionStat(r){if(C)return C.promise;C=t.defer();return e.get("/api/stat/courses/".concat(r,"/topic-category")).success((e=>C.resolve(e))).error((function(){C.resolve({}),C=null})),C.promise},initHomeworkScoreStatus(r){if(x)return x.promise;x=t.defer();return e.get("/api/course/".concat(r,"/homework-scores")).success((e=>x.resolve(e))).error((function(){return x.resolve({}),x=null})),x.promise},initForumScoresStatus(r){if(A)return A.promise;A=t.defer();return e.get("/api/course/".concat(r,"/forum-scores")).success((e=>A.resolve(e))).error((function(){return A.resolve({}),A=null})),A.promise},initExamScoreStatus(r){if(P)return P.promise;P=t.defer();return e.get("/api/courses/".concat(r,"/exam-scores")).success((e=>P.resolve(e))).error((function(){return P.resolve({}),P=null})),P.promise},initExamsSubmissionStatus(r){if(T)return T.promise;T=t.defer();return e.get("/api/courses/".concat(r,"/exams/submission-status")).success((e=>T.resolve(e))).error((function(){return T.resolve({}),T=null})),T.promise},initTopicCategoriesSubmissionStatus(r){if(R)return R.promise;R=t.defer();return e.get("/api/courses/".concat(r,"/topic-categories/status")).success((e=>R.resolve(e))).error((function(){return R.resolve({}),R=null})),R.promise},initHomeworkSubmissionStatus(r,i){var n="".concat(r,"_").concat(i);if(O[n])return O[n].promise;O[n]=t.defer();return e.get("/api/courses/".concat(r,"/homeworks/").concat(i,"/submission-status")).success((e=>O[n].resolve(e))).error((function(){return O[n].resolve({}),O[n]=null})),O[n].promise},initExamSubmissionStatus(r,i){var n="".concat(r,"_").concat(i);if(E[n])return E[n].promise;E[n]=t.defer();return e.get("/api/courses/".concat(r,"/exams/").concat(i,"/submission-status")).success((e=>E[n].resolve(e))).error((function(){return E[n].resolve({}),E[n]=null})),E[n].promise},initEnrollmentsAvatars(e){if($)return $.promise;return $=t.defer(),o.enrollmentsSmallAvatars(e,(e=>$.resolve(e.avatars)),(()=>$.resolve({}))),$.promise},initCourse(e){if(r)return r.promise;var r=t.defer();return o.course(e,"id,name,department(name),grade(name),klass(name),created_user(id),subject_code,imported_from",(e=>r.resolve(e)),(()=>r.resolve({}))),r.promise},initBulletins(e){if(D)return D.promise;return D=t.defer(),o.getBulletins(e,{},(e=>D.resolve(e.bulletins)),(()=>D.resolve([]))),D.promise},initOnlineVideoRead:t=>l(n.mark((function r(){return n.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!j){r.next=2;break}return r.abrupt("return",j);case 2:return r.next=4,e.get("/api/stat/courses/".concat(t,"/online-video")).then((e=>e.data));case 4:return j=r.sent,r.abrupt("return",j);case 6:case"end":return r.stop()}}),r)})))(),initHomeworkScoreDistribution:(t,r)=>l(n.mark((function i(){return n.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.get("/api/homework/".concat(t,"/score-distribution?conditions=").concat(JSON.stringify(r)));case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}}),i)})))(),initExamScoreDistribution:(t,r)=>l(n.mark((function i(){return n.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.get("/api/exams/".concat(t,"/score-distribution?conditions=").concat(JSON.stringify(r)));case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}}),i)})))(),initClassroomScoreDistribution:(t,r)=>l(n.mark((function i(){return n.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.get("/api/classroom/".concat(t,"/score-distribution?conditions=").concat(JSON.stringify(r)));case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}}),i)})))(),initTopicPagedStudents:t=>l(n.mark((function r(){var i,o,a,u,l,d,m,p;return n.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t.courseId,o=t.categoryId,a=t.pageIndex,u=t.pageSize,l=t.condition,r.next=3,e.get("/api/stat/courses/".concat(i,"/topic-categories/").concat(o,"/students?page=").concat(a,"&page_size=").concat(u),{params:{conditions:l}});case 3:return d=r.sent,m=d.data.enrollments,p=m.map((e=>{var t=e.id,r=e.user,i=c(e,["id","user"]),n=r.id,o=c(r,["id"]);return s(s(s({},i),o),{},{id:n,enrollment_id:t})})),r.abrupt("return",s(s({},d.data),{},{enrollments:p}));case 7:case"end":return r.stop()}}),r)})))()};return N}]},470586:e=>{e.exports=["$scope","$q","$http","$routeParams",function(e,t,r,i){e.questionnaireId=i.activityId;var n,o;return(n=e.questionnaireId,o=t.defer(),r.get("/api/questionnaires/".concat(n,"/logs")).success((e=>o.resolve(e.logs))).error((()=>o.resolve([]))),o.promise).then((t=>e.logs=t))}]},473669:(e,t,r)=>{var i=r(248124),n=r(756029),o=r(302543);r(269193),r(868329);var s=r(592207);function a(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function s(e){a(o,i,n,s,c,"next",e)}function c(e){a(o,i,n,s,c,"throw",e)}s(void 0)}))}}r(207452);var u=r(571478);r(792364);var l=r(966491);e.exports=["$rootScope","$scope","$http","statHelper","modelHelper","fileSelectModel","toastr","homeworkRepository",function(e,t,r,a,d,m,p,v){var f,h,b,y,_=u(t);t.courseId=i("#courseId").val(),t.ui={hasUnsavedChanges:!1},t.trackActivityVisit=!1,t.multipleChoice={title:""},t.canShowDocumentPreviewTip=(null===(f=window.featureToggles)||void 0===f?void 0:f.documentPreviewNotice)&&!(null!==(h=window.featureToggles)&&void 0!==h&&h.privateWpsOffice)&&!(null!==(b=window.featureToggles)&&void 0!==b&&b.wps_preview)&&!(null!==(y=window.featureToggles)&&void 0!==y&&y.aliyun_office),i(document).on("open.fndtn.reveal","#submit-popup",(()=>{m.context.includeSlides=!0})),i(document).on("closed.fndtn.reveal","#submit-popup",(()=>{t.trackActivityVisit&&window.st.trackVisit()})),e.submitPopupShow=()=>{I()},t.selectChange=()=>{t.multipleChoiceTitleError=""},t.$on("fileSelectOpen",(function(){return m.limitTypes=[],m.checkIsSelectable=e=>!e.is_folder})),t.canSubmit=function(){var e=t.uploads&&t.uploads.length>0,r=t.slides&&t.slides.length>0,i=t.submission&&t.submission.comment&&t.submission.comment.trim();return Boolean(e||r||i)};var g=()=>{i("#submit-popup").foundation("reveal","close"),_.hide()};t.save=function(){var a=c(s.mark((function a(u){var m,v,f=arguments;return s.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(m=f.length>1&&void 0!==f[1]&&f[1],t.closeConfirmPopup(),t.canSubmit()){a.next=4;break}return a.abrupt("return");case 4:return _.show(),v=function(){var a=c(s.mark((function a(){var v,f,h,b,y,k,S,C,x,A;return s.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:f=n.copy(t.uploads),h=e=>"LARK"===e.source,b=o.uniq(o.map(t.uploads.filter((e=>!h(e))),"id")),y=o.filter(t.uploads,h),k=o.map(t.slides,"id"),S=(null!==(v=t.submission.comment)&&void 0!==v?v:"").trim(),C=l.parseUploadsFromRichText(S,"img","image"),"multiple"===(x={comment:S,uploads:b,slides:k,is_draft:m,mode:t.homework.data.mode||"normal",other_resources:y,uploads_in_rich_text:C}).mode&&(x.multiple_choice_title=t.multipleChoice.title),A="POST",t.submission.draft_id&&(A="PUT",x.submission_id=t.submission.draft_id),r({method:A,url:"/api/course/activities/".concat(u,"/submissions"),data:x}).success(function(){var r=c(s.mark((function r(o){return s.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i("#no-upload-popup").foundation("reveal","close"),m?(g(),Array.isArray(t.homework.draft_submission_list)&&t.homework.draft_submission_list.unshift({id:o.submission.id,comment:S,uploads:f}),I()):(g(),t.homework.submission?n.copy(o.submission,t.homework.submission):t.homework.submission=o.submission,e.$emit("$refreshPrerequisitesStatus"),e.$emit("homeworkSubmitted",t.homework),t.homework.is_announce_score_time_passed=o.is_announce_score_time_passed,t.homework.student=o.student,t.homework.student.belongTo=d.getBelongTo(o.student),t.homework.make_up_record&&(t.homework.make_up_record.has_submitted=!0),(null!=t.submission?t.submission.draft_id:void 0)&&delete t.submission.draft_id,window.statistics.track({activity_id:u,activity_type:"homework",action:statistics.enums.HomeworkAction.submit,mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web})),e.$emit("homeworkHasDraftSubmission",{id:t.homework.id,has_draft:m}),o.message&&p.success(o.message),r.abrupt("return",w());case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).error((function(e){if(_.hide(),t.errors=e.errors,!e.errors||!e.errors.multiple_choice_title)return i("#submit-popup").foundation("reveal","close"),e.message?p.error(e.message):void 0;t.multipleChoiceTitleError=e.errors.multiple_choice_title[0]}));case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),a.next=8,v();case 8:t.reset();case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),t.isUploads=function(){return t.uploads&&t.uploads.length>0},t.addFiles=function(e){var r=o.filter(e,(e=>"slide"!==e.type)),i=o.filter(e,(e=>"slide"===e.type));return t.uploads=t.uploads.concat(r),t.slides=t.slides.concat(i),t.dataChangeTrigger()},t.deleteFile=function(e){return o.remove(t.uploads,e),t.dataChangeTrigger()},t.deleteSlide=function(e){return o.remove(t.slides,e),t.dataChangeTrigger()},t.reset=function(){return t.uploads=[],t.slides=[],t.submission.comment=""},t.closeConfirmPopup=function(){var e=i("#no-upload-popup");n.element(e).scope().popupState.popupOpened&&e.foundation("reveal","close")},t.closeSubmitPopup=function(){t.ui.hasUnsavedChanges&&!window.confirm(t.unsavedMsg||"You haven't submitted the assignment. Are you sure you want to leave?")||(t.reset(),i("#submit-popup").foundation("reveal","close"),w())};var w=function(){t.ui.hasUnsavedChanges=!1},k=function(e){var r={course_id:t.courseId,activity_id:e.id};a.inPage(r),a.setActivityType(e.type),window.statistics.track({activity_id:e.id,activity_type:e.type,action:statistics.enums.Action.open,mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web})};t.dataChangeTrigger=function(){if(!t.ui.hasUnsavedChanges)return t.ui.hasUnsavedChanges=!0},t.initDraftSubmissionList=function(){return v.loadSubmissionListForStudent(t.homework).then((function(e){t.homework.draft_submission_list=o.filter(e.submission_list,{is_draft:!0}),t.homework.redo_submission=o.find(e.submission_list,(e=>{var r=t.homework.submission?t.homework.submission.id:0;return!0===e.is_redo&&e.id>=r})),(t.homework.draft_submission_list.length>0||t.homework.redo_submission)&&(t.hasDraft=!0)}))},e.$on("submitHomework",(function(e,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.trackActivityVisit=i,t.homework=r,i&&k(r),I()}));var S=()=>{if(t.homework.draft_submission_list&&t.homework.draft_submission_list.length>0){var e=t.homework.draft_submission_list[0];t.submission.draft_id=e.id,t.submission.comment=e.comment,t.uploads=e.uploads}else t.homework.redo_submission&&(o.remove(t.homework.redo_submission.uploads,(e=>"auto-generated-pdf"===e.source)),t.submission.comment=t.homework.redo_submission.comment,t.uploads=t.homework.redo_submission.uploads)};t.$watch((()=>{var e;return null===(e=t.homework)||void 0===e?void 0:e.draft_submission_list}),(e=>{var r;null!==(r=t.submission)&&void 0!==r&&r.comment||!e||S()})),t.showHomeworkContent=!1,t.toggleHomeworkContent=function(){t.showHomeworkContent=!t.showHomeworkContent};var I=function(){return t.submission={},t.uploads=[],t.slides=[],t.is_draft=!1,e.activityType="homework",t.homework.draft_submission_list?S():t.initDraftSubmissionList().then(S),t.ui.hasUnsavedChanges=!1};if(t.homework)return I()}]},482451:(e,t,r)=>{var i=r(795093),n=r(302543),o=r(248124);function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(678636),r(658379);var c=r(882971).A,u=r(841885);e.exports=["$scope","toastr","$document","$http","$window","$routeParams",function(e,t,r,a,l,d){var m=d.activityId;e.paperZipSize=0,e.outofRecommendedFileSize=!1;e.zipExamPaper=function(){var r=n.filter(e.filteredSubmissions,(e=>e.selected));if(0===r.length&&(r=e.filteredSubmissions),e.includeUnsubmitted||(r=n.filter(r,(e=>{var t;return null===(t=e.submission)||void 0===t?void 0:t.marked_submitted}))),0!==r.length){var o=function(t){var r,n,o,a=-i().utcOffset();if(e.homework.submit_by_group){var c=(()=>{var e,r=[],i=s(t);try{for(i.s();!(e=i.n()).done;)o=e.value,r.push(o.group.id)}catch(e){i.e(e)}finally{i.f()}return r})();r=(()=>{var t,r=[],i=s(e.submissions);try{for(i.s();!(t=i.n()).done;)o=t.value,r.push(o.group.id)}catch(e){i.e(e)}finally{i.f()}return r})(),n={ids:c}}else{var u=(()=>{var e,r=[],i=s(t);try{for(i.s();!(e=i.n()).done;)o=e.value,r.push(o.student.id)}catch(e){i.e(e)}finally{i.f()}return r})();r=(()=>{var t,r=[],i=s(e.submissions);try{for(i.s();!(t=i.n()).done;)o=t.value,r.push(o.student.id)}catch(e){i.e(e)}finally{i.f()}return r})(),n={ids:u}}return n.all_ids=r,n.column_setting=e.homeworkCorrectColumnSetting,n.timezone=a,n}(r);return a.post("/api/homeworks/".concat(m,"/zip"),o).success((function(){e.paperZip.status="processing",e.$emit("getPaperZip")})).error(t.decorateError((function(){})))}c.warning(e.$t("homework.exportTipBefore.noSelectedSubmissions"))},e.reZipExamPaper=function(){a.delete("/api/uploads/".concat(e.paperZip.id,"?no-intercept=true")).success((function(){e.paperZip.status="before"})).error((function(){}))},r.on("open.fndtn.reveal","#zip-homework-popup",(function(){p()})),e.downloadZip=function(){l.open("/api/uploads/".concat(e.paperZip.id,"/blob"),"_blank");var t={activity_id:e.activity.id,activity_type:e.activity.type,mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web,action:statistics.enums.Action.zip};statistics.track(t),o("#zip-homework-popup").foundation("reveal","close")};var p=function(){var t=0,r=n.filter(e.filteredSubmissions,(e=>e.selected)),i=u.humanizeBytes();0===r.length&&(r=e.filteredSubmissions),n.forEach(r,(e=>{var r,i;null!==(r=e.submission)&&void 0!==r&&r.attachments_size&&(t+=null===(i=e.submission)||void 0===i?void 0:i.attachments_size)})),e.paperZipSize=i(t),e.sizeParts=e.paperZipSize.match(/(\d+\.?\d*)\s*(\w+)/),e.outofRecommendedFileSize=t>524288e3,e.includeUnsubmitted=!0,e.selectedSubmissionsCount=r.length}}]},483349:(e,t,r)=>{var i=r(248124);r(640173);var n=r(571478);e.exports=["$rootScope","$scope","$http","toastr",function(e,t,r,o){var s=n(t);return t.model={makeUpClosedTime:""},t.ui={msgForAll:!0},t.save=function(){s.show();var e=t.homework.selected_make_up_student_ids||[],n=t.homework.selected_make_up_group_ids||[],a=t.homework.selected_submission_ids||[];return r.put("/api/homework/".concat(t.homework.id,"/make-up-homework"),{closed_time:t.model.makeUpClosedTime,student_ids:e,group_ids:n,submission_ids:a,homework_id:t.homework.id}).success((function(e){return s.hide(),i("#make-up-homework-popup").foundation("reveal","close"),t.model.makeUpClosedTime="",t.$emit("makeUpHomeworkNotifySend"),window.dispatchEvent(new CustomEvent("homework-marked-action-success",{detail:"makeup"})),o.success(e.message)})).error((function(e){return s.hide(),t.errors=e.errors,o.error(e.message)}))},t.getMakeUpConfirmInfo=function(){if(t.homework){if(t.popupMessage)return t.popupMessage;var e=t.homework.includeRecommendSubmission?"\n("+t.recommendCancelWarn+")":"";return(t.ui.msgForAll?t.homework.submit_by_group?t.makeUpGroupConfirmInfoForAll+e:t.makeUpNormalConfirmInfoForAll+e:t.homework.submit_by_group?t.makeUpGroupConfirmInfoForSelected+e:t.makeUpNormalConfirmInfoForSelected+e).replace("{0}",t.homework.selected_count)}},e.$on("makeUpHomework",(function(e,r,i){return t.homework=r,t.ui.msgForAll=i})),t.reset=function(){return t.errors={},t.model.makeUpClosedTime=""}}]},491379:e=>{e.exports=["$scope","$window","$http","activityRepository","toastr",function(e,t,r,i,n){var o=function(e,r){var n={is_author:!1,activity_id:r};i.getLamsSSOLoginUrl(e,n).then((e=>{t.open(e,"_blank")}))};e.startLearning=function(t){o(e.activity.course_id,t.id)},e.viewLearningProgress=function(t){o(e.activity.course_id,t.id)};e.activity||i.loadActivity(e.activityId).then((function(t){e.activity=t})),i.initPublishInfo(e,e.activity)}]},528492:(e,t,r)=>{r.r(t),r.d(t,{clearTargetCredits:()=>_,createCreditAudit:()=>M,createTargetCredits:()=>h,exportCoursesCredits:()=>I,exportUsersCredits:()=>S,fetchCourseCreditAudit:()=>E,fetchCreditAuditList:()=>D,fetchCurrentSemesterCourseByInstructor:()=>L,fetchDepartments:()=>m,fetchOrgCreditState:()=>p,fetchRoles:()=>d,fetchUserCreditAudit:()=>O,fetchUserStateList:()=>v,fetchUsers:()=>f,getAcademicYears:()=>C,getCourseCreditState:()=>P,getCourseCreditStatistic:()=>w,getCourses:()=>A,getCreditStatisticInfos:()=>k,getOrgSettings:()=>T,getUserCreditStatistic:()=>g,modifyUsageLimit:()=>R,mySemesters:()=>x,switchAirCreditAuditRead:()=>$,switchTargetCreditsStatus:()=>y,updateCreditAudit:()=>j,updateCreditAudits:()=>U,updateTargetCredits:()=>b});r(540590),r(418665),r(169218),r(269193),r(14602);var i=r(272505),n=r.n(i),o=r(218831),s=r(920453),a=r(448941),c=function(){return(c=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},u=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))},l=function(e,t){var r,i,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,i=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};function d(){return u(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,n().get("/api/authz/roles")];case 1:return[2,e.sent().data]}}))}))}function m(){return n().get("/api/departments")}var p=function(){return u(void 0,void 0,void 0,(function(){var e;return l(this,(function(t){switch(t.label){case 0:return[4,n().get("/api/air-credit/org/credit-state-info")];case 1:return e=t.sent().data,[2,(0,s.plainToClass)(a.Lp,e)]}}))}))};function v(e,t,r){return u(this,void 0,void 0,(function(){var i;return l(this,(function(c){switch(c.label){case 0:return[4,n().get("/api/air-credit/user/credit-states",{params:{page:e,page_size:t,conditions:JSON.stringify((0,o.decamelizeKeys)(r))}})];case 1:return i=c.sent().data,[2,(0,s.plainToClassFromExist)(new a.VA(a.mU),i)]}}))}))}function f(e,t,r){return u(this,void 0,void 0,(function(){var i;return l(this,(function(u){switch(u.label){case 0:return[4,n().post("/api/users?page=".concat(e,"&page_size=").concat(t,"&for_management=true&need_ai_activated=true"),c({},(0,o.decamelizeKeys)(r)))];case 1:return(i=u.sent().data).items=i.users,[2,(0,s.plainToClassFromExist)(new a.VA(a.KJ),i)]}}))}))}function h(e){return u(this,void 0,void 0,(function(){var t;return l(this,(function(r){switch(r.label){case 0:return t={assignments:(0,o.decamelizeKeys)(e)},[4,n().post("/api/air-credit/credits",t)];case 1:return[2,r.sent().data]}}))}))}function b(e){return u(this,void 0,void 0,(function(){var t;return l(this,(function(r){switch(r.label){case 0:return t={assignments:(0,o.decamelizeKeys)(e)},[4,n().put("/api/air-credit/credits",t)];case 1:return[2,r.sent().data]}}))}))}function y(e,t,r,i){return void 0===i&&(i=!1),u(this,void 0,void 0,(function(){var o;return l(this,(function(s){switch(s.label){case 0:return o={assign_ids:e,assign_type:t,status:r,refunded:i},[4,n().put("/api/air-credit/credits/status",o)];case 1:return[2,s.sent().data]}}))}))}function _(e,t){return u(this,void 0,void 0,(function(){var r;return l(this,(function(i){switch(i.label){case 0:return r={assign_id:e,assign_type:t},[4,n().put("/api/air-credit/credits/clear-remaining-credits",r)];case 1:return[2,i.sent().data]}}))}))}var g=function(e,t,r,i,c){return void 0===i&&(i=1),void 0===c&&(c=10),u(void 0,void 0,void 0,(function(){var u,d,m;return l(this,(function(l){switch(l.label){case 0:return u=(0,o.decamelizeKeys)({startDate:e,endDate:t,page:i,pageSize:c,conditions:r,type:"user"}),[4,n().get("/api/air-credit/credit-states-stats",{params:u})];case 1:return d=l.sent(),m=(0,s.plainToClass)(a.Zd,d.data.items),[2,{page:d.data.page,pageSize:d.data.page_size,pages:d.data.pages,total:d.data.total,items:m}]}}))}))},w=function(e,t,r,i,c){return void 0===i&&(i=1),void 0===c&&(c=10),u(void 0,void 0,void 0,(function(){var u,d,m;return l(this,(function(l){switch(l.label){case 0:return u=(0,o.decamelizeKeys)({startDate:e,endDate:t,page:i,pageSize:c,conditions:r,type:"course"}),[4,n().get("/api/air-credit/credit-states-stats",{params:u})];case 1:return d=l.sent(),m=(0,s.plainToClass)(a.BM,d.data.items),[2,{page:d.data.page,pageSize:d.data.page_size,pages:d.data.pages,total:d.data.total,items:m}]}}))}))};function k(e){return n().get("/api/air-credit/credit-states-summary",{params:{type:e}})}function S(e,t,r){return u(this,void 0,void 0,(function(){return l(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,n().post("/api/air-credit/user/credit-states-stats/export",c({},(0,o.decamelizeKeys)(c({startDate:e,endDate:t},r))),{responseType:"blob"})];case 1:return[2,i.sent().data];case 2:return i.sent(),[2,null];case 3:return[2]}}))}))}function I(e,t,r){return u(this,void 0,void 0,(function(){return l(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,n().post("/api/air-credit/course/credit-states-stats/export",c({},(0,o.decamelizeKeys)(c({startDate:e,endDate:t},r))),{responseType:"blob"})];case 1:return[2,i.sent().data];case 2:return i.sent(),[2,null];case 3:return[2]}}))}))}var C=function(){return u(void 0,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,n().get("/api/academic-years?fields=id,name,sort,is_active")];case 1:return[2,e.sent().data.academic_years]}}))}))},x=function(e){return u(void 0,void 0,void 0,(function(){var t,r;return l(this,(function(i){switch(i.label){case 0:return t="/api/my-semesters-all",r="",e.length>0&&(r=e.map((function(e){return"academic_year_ids=".concat(e)})).join("&"),t="".concat(t,"?").concat(r,"?fields=id,name,sort,is_active")),[4,n().get("".concat(t))];case 1:return[2,i.sent().data.semesters]}}))}))},A=function(e,t,r){return u(void 0,void 0,void 0,(function(){var i;return l(this,(function(u){switch(u.label){case 0:return[4,n().post("/api/courses?page=".concat(e,"&page_size=").concat(t),c(c({},(0,o.decamelizeKeys)(r)),{fields:"id,name,academic_year,course_code,semester,department(id,name),klass(id,name),instructors(id,name),ai_activation,course_type,imported_from"}))];case 1:return(i=u.sent().data).items=i.courses,[2,(0,s.plainToClassFromExist)(new a.VA(a.ae),i)]}}))}))},P=function(e,t,r){return u(void 0,void 0,void 0,(function(){var i,c;return l(this,(function(u){switch(u.label){case 0:return i=(0,o.decamelizeKeys)({page:e,pageSize:t,conditions:r}),[4,n().get("/api/air-credit/course/credit-states",{params:i})];case 1:return c=u.sent().data,[2,(0,s.plainToClassFromExist)(new a.VA(a.aN),c)]}}))}))},T=function(){return u(void 0,void 0,void 0,(function(){var e,t;return l(this,(function(r){switch(r.label){case 0:return[4,n().get("/api/orgs/".concat(null===(t=window.globalData)||void 0===t?void 0:t.user.orgId,"/settings"))];case 1:return e=r.sent().data,[2,(0,o.camelizeKeys)(e)]}}))}))},R=function(e){return n().put("/api/air-credit/course/usage-limit",{usage_limit:e})},O=function(e){return u(void 0,void 0,void 0,(function(){var t;return l(this,(function(r){switch(r.label){case 0:return[4,n().get("/api/air-credit/users/".concat(e,"/audit"))];case 1:return t=r.sent().data,[2,(0,s.plainToClass)(a.i3,t)]}}))}))},E=function(e){return u(void 0,void 0,void 0,(function(){var t;return l(this,(function(r){switch(r.label){case 0:return[4,n().get("/api/air-credit/courses/".concat(e,"/audit"))];case 1:return t=r.sent().data,[2,(0,s.plainToClass)(a.IT,t)]}}))}))};function M(e,t,r,i){return u(this,void 0,void 0,(function(){return l(this,(function(s){switch(s.label){case 0:return[4,n().post("/api/air-credit/audits",c({},(0,o.decamelizeKeys)({targetId:e,targetType:t,credits:r,reason:i})))];case 1:return[2,s.sent().data]}}))}))}function $(e,t){return void 0===t&&(t=!0),n().put("/api/air-credit/audits/".concat(e,"/read"),c({},(0,o.decamelizeKeys)({read:t})))}function D(e,t,r){return u(this,void 0,void 0,(function(){var i;return l(this,(function(c){switch(c.label){case 0:return[4,n().get("/api/air-credit/audits",{params:{page:e,page_size:t,conditions:JSON.stringify((0,o.decamelizeKeys)(r))}})];case 1:return(i=c.sent().data).items=i.items.map((function(e){return"course"===e.target_type?(0,s.plainToClass)(a.IT,e):(0,s.plainToClass)(a.i3,e)})),[2,i]}}))}))}function j(e,t,r,i){return u(this,void 0,void 0,(function(){return l(this,(function(s){switch(s.label){case 0:return[4,n().put("/api/air-credit/audits/".concat(e),c({},(0,o.decamelizeKeys)({action:t,approvedCredits:r,remark:i})))];case 1:return[2,s.sent().data]}}))}))}function U(e,t,r){return void 0===r&&(r=""),u(this,void 0,void 0,(function(){return l(this,(function(i){switch(i.label){case 0:return[4,n().put("/api/air-credit/audits",c({},(0,o.decamelizeKeys)({auditIds:e,action:t,remark:r})))];case 1:return[2,i.sent().data]}}))}))}function L(e){return void 0===e&&(e=[]),n().get("/api/air-credit/instructors/current-semester-courses",{params:{user_ids:e.join(",")}})}},535776:(e,t,r)=>{r(640173),e.exports=["$scope","$http","toastr","$window",function(e,t,r,i){e.recordings=[];var n=function(){return t.get("/api/".concat(e.activity.course_id,"/virtual-classroom/").concat(e.activity.id,"/recordings")).success((function(t){if(t&&t.sco)return e.recordings=t.sco})).error((e=>r.error(e.message)))};return e.previewRecording=function(t){var r=t["url-path"].$.replace(/\//g,"");i.open("/course/".concat(e.activity.course_id,"/virtual-classroom/").concat(e.activity.id,"/").concat(r))},e.downloadRecording=function(t){var r=t["url-path"].$.replace(/\//g,"");i.open("/course/".concat(e.activity.course_id,"/virtual-classroom/").concat(e.activity.id,"/").concat(r,"/download"))},e.activity.roomUrl=e.activity.data.room_url?"/course/".concat(e.activity.course_id,"/virtual-classroom/").concat(e.activity.id):"",e.activity.expired=e.activity.is_closed,n()}]},536496:(e,t,r)=>{var i=r(571478),n=r(181769),o=n.canEditActivity,s=n.hasEditPermissionForBlueprint,a=r(552979).default;e.exports=["$scope","$routeParams","$http","forumRepository","forumApi","toastr",function(e,t,r,n,c,u){var l=i(e);e.ui.topicId=t.topicId,e.ui.showForumSummary=!0,e.activityId=t.activityId,e.addTopic=()=>{e.$broadcast("addTopic")},e.exportCategoryTopics=e=>c.exportCategoryTopics(e),e.toggleForumSummary=()=>e.ui.showForumSummary=!e.ui.showForumSummary,e.allowCreateTopic=function(){var t,r;return"crossCourse"!==(null===(t=e.activity)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.participation_scope)&&(e.allowTopicEdit||e.activity&&e.activity.is_in_progress&&e.isInCourse)},e.forumDisabled=()=>{var t,r;return!!e.activity&&((!(null!==(t=e.activity.data)&&void 0!==t&&t.enable||void 0===(null===(r=e.activity.data)||void 0===r?void 0:r.enable))||e.activity.is_closed)&&e.enrollmentIsStudent)},e.canEditStatus=()=>{var t,r;return(null===(t=e.activity)||void 0===t?void 0:t.is_in_progress)&&(null===(r=e.activity)||void 0===r?void 0:r.published)},e.canShowOperations=e=>o(e),e.canEditActivitySelf=e=>s(e),e.handelForumStatus=()=>{l.show();var t=e.activity.data.enable||void 0===e.activity.data.enable?a.t("forumActivity.disableMessage"):a.t("forumActivity.enableMessage");c.handleForumStatus(e.activityId,!(e.activity.data.enable||void 0===e.activity.data.enable),(r=>{e.activity.data.enable=r.enable,e.$broadcast("forumUpdated",e.activity),e.enable=r.enable,u.success(t),l.hide()}),(e=>{u.error(e.message),l.hide()}))},e.getConfirmDialog=()=>e.activity.data.enable||void 0===e.activity.data.enable?a.t("forumActivity.disableConfirmMessage"):a.t("forumActivity.enableConfirmMessage");return(()=>{if(t=e.activity,e.isCourseInCheckpointMode&&e.isTogglePrerequisiteOpened&&e.enrollmentIsStudent&&e.activityHasNotFinishedPrerequisite(t))return u.warning("尚未達成開啟條件，無法進入活動！"),void setTimeout((()=>{window.location.href="/course/".concat(e.activity.course_id,"/content")}),2e3);var t;n.loadStudentForumScore(e.activity.id).then((t=>{e.activity&&(e.activity.score=t.score)}))})()}]},541949:(e,t,r)=>{r(269193),r(43148);var i=r(592207);function n(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var s=e.apply(t,r);function a(e){n(s,i,o,a,c,"next",e)}function c(e){n(s,i,o,a,c,"throw",e)}a(void 0)}))}}r(207452);var s=r(757334),a=r(302543),c=r(951708),u=c.getCurrentUserAirToken,l=c.getCurrentUserCredits,d=r(966491),m=(r(818802).A,r(5782).default),p=r(808364).A;e.exports=["$rootScope","$scope","$sce","$window","$http","toastr",(e,t,r,n,c,v)=>{var f;t.ui.contentLoadingCtrueomplete=!1,t.allowRelatedKp=!1;var h=null===(f=window.featureToggles)||void 0===f?void 0:f.airLessonQuiz;t.$on("updateHasAiQuizSubmission",((e,r)=>{var i=r.hasAiQuizSubmission;t.ui.hasAiQuizSubmission=i})),t.answerOnlineVideoQuiz=o(i.mark((function e(){return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.airHelper.answerOnlineVideoQuiz(t.activity,t.fakeUpload);case 1:case"end":return e.stop()}}),e)}))),e.$on("updateAnswerRecord",((e,r)=>{t.ui.hasAnswerRecord=r,t.$apply()}));var b,y,_=()=>!(void 0!==t.activity.without_resource&&!0!==t.activity.without_resource||t.activity.lesson_resource&&1!==t.activity.lesson_resource.deleted);(t.isLessonResourceDeleted=_(),t.iframeReady=()=>{s({log:!1,checkOrigin:!1},"#replayFrame"),h&&(t.fakeUpload.status="ready",t.fakeUpload.originStatus="ready",t.fakeUpload.name=t.activity.lesson_resource?t.activity.lesson_resource.name:t.activity.title,t.fakePlayer.generateCaptionIfNotExits=()=>{document.getElementById("replayFrame").contentWindow.postMessage({event:"wg-video-player:tryGenerateCaption"},"*")}),t.ui.contentLoadingComplete=!0},_())||(y=(null===(b=t.activity)||void 0===b?void 0:b.id)||t.activityId,c.get("/api/lessons/".concat(y,"/player-url?from_page=course")).success((i=>{if(i.url){var n=t.alwaysWithAdminRole?"always_by_admin_role=1":"";a.includes(i.url,"?")?t.iframeSrc=r.trustAsResourceUrl("".concat(i.url,"&lang=").concat(e.langForTca,"&").concat(n)):t.iframeSrc=r.trustAsResourceUrl("".concat(i.url,"?lang=").concat(e.langForTca,"&").concat(n))}else t.ui.contentLoadingComplete=!0})).error(v.decorateError((()=>{}))));var g=e=>{var r=document.getElementById("replayFrame");if(e&&r)if("wg-video-player:getUserAirToken"===e.data)(function(){var e=o(i.mark((function e(){var n,o;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t.activity);case 2:n=e.sent,o={token:n.airAccessToken,event:"wg-video-player:acceptUserAirToken"},r.contentWindow.postMessage(o,"*");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();else if(e.data&&"wg-video-player:getUserAirCredits"===e.data){(function(){var e=o(i.mark((function e(){var t,n;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:t=e.sent,n={creditInfo:t,event:"wg-video-player:acceptUserAirCredits"},r.contentWindow.postMessage(n,"*");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else if(e.data.event&&"wg-video-player:captionStatus"===e.data.event){var n=e.data.captionStatus;t.fakePlayer.ready=!0,t.fakePlayer.captionStatus=n,t.fakePlayer.hasCaption="hasCaption"===n,t.$digest()}else e.data.event&&e.data.event};n.addEventListener("message",g,!1),t.$on("$destroy",(()=>{console.log("lesson controller on destroy"),n.removeEventListener("message",g,!1)})),t.relateKp=o(i.mark((function e(){var r,n;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.sendMessageToPlayer("wg-video-player:getVideoChapters");case 2:return r=e.sent,e.next=5,d.sendMessageToPlayer("wg-video-player:getVideoKnowledgePoint");case 5:n=e.sent,m(p,{activityId:t.activity.id,courseId:t.activity.course_id,chapters:r,knowledgePoints:n,destroyComponent:!0});case 7:case"end":return e.stop()}}),e)})))}]},550381:(e,t,r)=>{var i=r(248124),n=r(302543);r(219693),r(990345),r(850785);var o=r(592207);function s(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function a(e){s(o,i,n,a,c,"next",e)}function c(e){s(o,i,n,a,c,"throw",e)}a(void 0)}))}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(207452);var d=r(825315);e.exports=["$rootScope","$scope","$timeout","statRepository","filter","$location","$routeParams",function(e,t,r,s,c,l,m){var p,v,f;t.activityType="homeworks";var h=document.querySelector("#stat-homework-score-distribution").offsetWidth/2-16;t.isFullScreenMode=-1!==l.absUrl().indexOf("full-screen");var b=t.isFullScreenMode?{height:"510px"}:{};t.ui={showChart:!0,panelStyle:u({right:"-82px",width:"".concat(h,"px")},b)},t.noData=!0,t.condition={class_ids:[],section_ids:[]},t.generateConfig={activityId:Number(m.activityId)||t.homework.id},t.homework&&(t.generateConfig.courseId=t.homework.course_id,t.generateConfig.activityType=t.homework.type),t.isInstructorView=e.isInstructorView,t.userHasAiAbility=null!==(p=null===(v=window.globalData)||void 0===v||null===(f=v.user)||void 0===f?void 0:f.hasAiAbility)&&void 0!==p&&p;var y=document.querySelector("#stat-homework-score-distribution .right-section"),_=e=>{if(y){var t=document.querySelector("#stat-homework-score-distribution .left-section"),n=e.detail.visible;requestAnimationFrame((()=>{y.style.width=n?"50%":"0px",t&&(t.style.flex=n?"0 0 50%":"1"),r((()=>{var e=i("#statistic-chart").data("echarts-instance");null==e||e.resize()}),300)}))}};document.addEventListener("score-analysis-toggle",_),t.$on("$destroy",(()=>{document.removeEventListener("score-analysis-toggle",_)})),t.$on("drawChart",(function(){if(t.ui.showChart)return r((()=>w()))})),t.hasData=()=>!n.isEmpty(t.scoreDatas),t.toggleShowChart=function(){if(t.ui.showChart=!t.ui.showChart,t.ui.showChart)return r((()=>w()))};var g=function(){var e=a(o.mark((function e(){var r,i;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.initHomeworkScoreDistribution(t.homework.id,t.condition);case 2:r=e.sent,t.data=r.data,t.noData=!(Object.keys(t.data.distributions).length>0),t.noData||(i=new CustomEvent("score-analysis-view-disabled:false"),window.dispatchEvent(i));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=a(o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:r((()=>{d.drawBarChart(t.xAxis,t.seriesName,Object.values(t.data.distributions))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.search=()=>{w()};return(()=>{if(t.ui.showChart)return w()})()}]},551947:(e,t,r)=>{r.d(t,{A:()=>u});var i,n=r(118657),o=r(384027),s=(r(831065),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),a([(0,n.kv)({default:!0})],t.prototype,"fix",void 0),t=a([(0,n.uA)({components:{Spin:o.Spin,Icon:o.Icon}})],t)}(n.lD);const u=(0,r(514486).A)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loading-overlay-container"},[r("Spin",{attrs:{fix:e.fix}},[r("svg",{staticClass:"svg-icon loading-spinner"},[r("use",{attrs:{"xlink:href":"#loading-spinner"}})]),e._v(" "),r("div",{staticClass:"hint"},[e._v(e._s(e.$t("loading")))])])],1)}),[],!1,null,"468001bb",null).exports},559371:(e,t,r)=>{var i=r(302543),n=r(756029);r(210557),r(335231),e.exports=["$scope","$http","toastr","modelHelper","$rootScope","Navigation","homeworkRepository","$q",function(e,t,r,o,s,a,c,u){var l;e.init=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t?(e.submissions=i.filter(e.homework.submissions,{submission:{recommend:1}}),e.homework.submit_by_group?d():void 0):m()};var d=function(){return e.submissions=i.sortBy(e.submissions,"group_created_at").reverse(),e.submissions=i.sortBy(e.submissions,"group_name"),e.submissions=i.sortBy(e.submissions,"group_sort")};e.hasRecommendSubmission=()=>i.some(e.submissions,(e=>1===e.submission.recommend));e.setViewingData=function(t){return s.navigation=new a(e.submissions,e.homework),s.navigation.setLoadLatestItem(l),e.tabs.active="scoreTab",l(e.submissions[t]).then((function(){return e.uiOfSubmissionList.popupOpened=!0,e.rubric=e.homework.rubric}))},s.cancelRecommendSubmission=function(n){return t.post("/api/submission/".concat(n.submission.id,"/cancel-recommend")).success((function(t){return window.dispatchEvent(new CustomEvent("homework-marked-action-success",{detail:"unrecommend"})),n.submission.recommend=0,i.remove(e.submissions,n)})).error(r.decorateError((function(){})))},e.toggleRecommendMembers=e=>e.showRecommendMembers=!e.showRecommendMembers||!e.showRecommendMembers,e.$watch("homework.submissions",(function(t,r){if(t!==r||!n.isUndefined(t))return e.init(!0)}),!0);var m=function(){return c.loadRecommendSubmissions(e.homework.id).then((function(t){return e.submissions=t,e.homework.submit_by_group?(i.each(e.submissions,(function(t){if(t.group_name=t.group.name,t.group_created_at=t.group.created_at,t.group_sort=t.group.sort,e.homework.submission&&t.submission.id===e.homework.submission.id)return t.submission=e.homework.submission})),d()):i.each(e.submissions,(function(t){if(t.student.belongTo=o.getBelongTo(t.student),e.homework.submission&&t.submission.id===e.homework.submission.id)return t.submission=e.homework.submission}))}))};return l=function(t){var r=u.defer(),n=i.findIndex(e.navigation.navItems,t),o=function(t){var i;if(i=t,e.navigation.navItems[n].submission=i,s.navigation.setNavigationData(n),e.homework.submit_by_group||r.resolve(t.submission),e.homework.submit_by_group)return r.resolve(t)};return e.homework.submit_by_group?c.loadGroupSubmission(e.navigation.homework.id,e.navigation.submissions[n].submission.group_id).then(o):c.loadStudentSubmission(e.navigation.homework.id,e.navigation.submissions[n].submission.created_by.id).then(o),r.promise}}]},590730:(e,t,r)=>{r(335995),t.T=["$timeout",e=>({link:(t,r)=>e((function(){var e=Math.floor(r.width()/60);if(r.children().length<e)return r.addClass("reset-padding");r.slick({speed:600,draggable:!1,infinite:!1,arrows:!0,slidesPerRow:e,slidesToShow:e,slidesToScroll:e,responsive:!1,prevArrow:'<i class="font font-arrow-left prev"></i>',nextArrow:'<i class="font font-arrow-right next"></i>'});var t=r.find(".active");return r[0].slick.slickGoTo(t.data("index"))}))})]},590815:(e,t,r)=>{r.d(t,{A:()=>i});const i={state:()=>{var e,t;return{isLoading:!0,courseId:(null===(e=window.globalData)||void 0===e||null===(t=e.course)||void 0===t?void 0:t.id)||null,courseName:null,currentUser:{id:null,userNo:null,role:null}}},actions:{setCourseInfo(e,t){(0,e.commit)("setCourseInfo",t)},setCurrentUser(e,t){(0,e.commit)("setCurrentUser",t)}},getters:{},mutations:{setCourseInfo(e,t){var r=t.courseId,i=t.courseName;e.courseId=r,e.courseName=i},setCurrentUser(e,t){var r=t.userId,i=t.userNo,n=t.userRole;e.currentUser.id=r,e.currentUser.userNo=i,e.currentUser.role=n}}}},606913:(e,t,r)=>{r.r(t),r.d(t,{deleteInteraction:()=>c,getCourseUsers:()=>a,getDanmuActivity:()=>o,getDanmuConfig:()=>s});var i=r(272505),n=r.n(i),o=function(e,t){return n().get("/api/courses/interactions/".concat(e,"?conditions=").concat(JSON.stringify(t)))},s=function(e){return n().get("/api/courses/danmu/".concat(e,"/config"))},a=function(e,t){return n().post("/api/course/".concat(e,"/enrollments"),t)},c=function(e){return n().delete("/api/interactions/".concat(e))}},611745:(e,t,r)=>{var i=r(795093),n=r(302543),o=r(248124);e.exports=["$rootScope","$scope","$http","$q","Navigation","homeworkRepository",function(e,t,r,s,a,c){t.uiOfSubmissionList={inInterScoreList:!0,popupOpened:!1,noRubric:0===t.homework.rubric_id};t.endTimePassed=()=>t.homework.inter_score_map.is_closed;var u=()=>t.homework.data.create_mapping_succeeded||!n.isEmpty(t.interScores);t.setViewingData=function(r){var i;return i=n.filter(t.interScores,(e=>!t.homework.is_inter_review_by_submitter||e.submission&&e.submission.id)),e.navigation=new a(i,t.homework),e.navigation.setLoadLatestItem(l),l(t.interScores[r]).then((function(){t.uiOfSubmissionList.popupOpened=!0,t.rubric=t.homework.rubric}))};var l=function(i){var o=s.defer(),a=n.findIndex(t.navigation.navItems,i),c=t.navigation.navItems[a];return c.submission&&c.submission.id?r.get("/api/inter-score-submissions/".concat(c.submission.id)).success((function(t){return r=t,i=c,i.submission=n.extend(i.submission,r),i.submission.created_by_id&&(i.student={id:i.submission.created_by_id}),i.submission.group_id>0&&(i.group={id:i.submission.group_id}),e.navigation.setNavigationData(a),o.resolve();var r,i})):(t.homework.submit_by_group?c.group={id:c.submitter_id}:c.student={id:c.submitter_id},e.navigation.setNavigationData(a),o.resolve()),o.promise},d=function(){return t.homework.inter_score_map.is_started?!u()&&t.homework.inter_score_map.is_closed?"NO_REVIEW_MAPPING_AND_CLOSED":u()?t.homework.submission&&t.homework.submission.is_in_review?null:(e=t.homework.submission,t.homework.data.inter_review_by_submitter?e.marked_submitted?"makeUp"===t.homework.submitted_status?"LATE_MAKEUP":"resubmit"===t.homework.submitted_status?"LATE_RESUBMISSION":"LATE_SUBMISSION":"makeUp"===t.homework.submitted_status?"NO_MAKEUP":"resubmit"===t.homework.submitted_status?"NO_RESUBMISSION":"NO_SUBMISSION":"LATE_ENROLLMENT"):"WAIT_REVIEW_MAPPING":"REVIEW_NOT_STARTED";var e};return function(){t.uiOfSubmissionList.isRubricViewable=!!t.homework.data.show_rubric&&t.isRubricViewable(t.homework.data.rubric_visible_time);var e=function(e){return t.homework.submission=e,t.remindMsg=d(),t.showInterScores=null===t.remindMsg};return r.get("/api/activities/".concat(t.homework.id,"/inter-score-rules")).success((function(r){if(t.interScores=r.inter_scores,function(e,r){var o=r.end_time;if(o){var s=i.utc(),a=i.utc(o).subtract(3,"days");n.some(e,(e=>e.submission&&e.submission.id&&null===e.score))&&s.isAfter(a)&&!r.is_closed&&(t.ui.showInterScoreEndedMessage=!0),t.ui.showInterScoreEndTimePassedMessage=r.is_closed}}(t.interScores,t.homework.inter_score_map),t.homework.submit_by_group&&t.homework.group_id)return c.loadGroupSubmission(t.homework.id,t.homework.group_id).then(e);var s=o("#userId").data("id");return c.loadStudentSubmission(t.homework.id,s).then(e)}))}()}]},628593:e=>{e.exports=["$scope","$routeParams","$window",function(e,t,r){e.vueParam={voteId:Number(t.voteId)},r.addEventListener("on-load-vote",(t=>{e.$emit("activityLoaded",t.detail.data),e.$apply()}))}]},638397:(e,t,r)=>{var i=r(302543),n=r(248124);r(43148),e.exports=["$rootScope","$scope","$document",function(e,t,r){return t.selectedIds=[],r.on("open.fndtn.reveal","[data-reveal]",(()=>t.selectedIds=i.map(t.selectedVideos,(e=>e.id)))),t.selectVideo=function(e){if((!e.isSelected||1!==t.selectedIds.length)&&(e.isSelected||!(t.selectedIds.length>=3)))return e.isSelected=!e.isSelected,e.isSelected?t.selectedIds.push(e.id):i.remove(t.selectedIds,(t=>t===e.id))},t.confirmSelect=function(){return t.$parent.selectedVideos=i.filter(t.availableVideos,(e=>i.includes(t.selectedIds,e.id))),n("#select-video-sources-popup").foundation("reveal","close"),t.initVideos(!0)},t.cancelSelect=function(){i.each(t.$parent.selectedVideos,(function(e){e.isSelected=!0})),n("#select-video-sources-popup").foundation("reveal","close")}}]},645374:(e,t,r)=>{var i=r(248124),n=r(302543);r(868329),r(658379),e.exports=["$rootScope","$scope","$routeParams","classroomRepository","activityRepository","toastr","classroomApi","$timeout",function(e,t,r,o,s,a,c,u){var l;delete e.progressUi;e.context||(e.context={}),e.$on("refreshFeedbackData",((e,r)=>t.classroom=t.currentActivity=r));var d=null;t.canAddFeedbackItem=()=>t.classroom&&["none","start"].includes(t.classroom.status)&&null===d,t.canEditFeedbackItem=e=>["none","start"].includes(t.classroom.status)&&null===d&&0===e.votes&&(e.created_by_id===t.currentUserId||0===e.created_by_id);var m=()=>u((function(){i("input.feedback-input").focus()}));t.addFeedbackItem=function(){if(null===d){var e={id:null,created_by_id:0,title:"",votes:0};return d=e,t.classroom.feedbacks.push(e),m()}},t.isEditing=e=>null!==d&&e.id===d.id,t.editingFeedback=function(e){return d=e,m()};var p=function(){return o.deleteFeedbackCache(t.classroom.id),y()};t.deleteFeedback=function(e){return c.deleteFeedback(e,(()=>p()),(function(){}))},t.saveFeedback=function(e){var r=function(e){return d=null,t.classroom.feedbacks=e.feedbacks,statistics.track({activity_id:t.activity.id,activity_type:t.activity.type,action:statistics.enums.FeedbackAction.add_item,mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web}),b(t.classroom.feedbacks)},i=function(e){if(e.errors&&e.errors.title)return a.error(e.errors.title[0])};return e&&e.id>0?v(e)?void a.error(t.feedbackAlreadyExistMsg):c.updateFeedback(t.classroom.id,e.id,{title:e.title},r,i):""===e.title.trim()?(d=null,void t.classroom.feedbacks.pop()):v(e)?void a.error(t.feedbackAlreadyExistMsg):c.createFeedback(t.classroom.id,{title:e.title},r,i)},t.onKeyDown=function(e,r){if(13===e.keyCode)return t.saveFeedback(r)};var v=e=>n.find(t.classroom.feedbacks,(function(t){return t.id!==e.id&&e.title===t.title})),f=function(e){var r={start:"start",finish:"end"}[e.status];return statistics.track({activity_type:"feedback",activity_id:t.classroom.id,action:statistics.enums.Action[r],mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web,point:"start"===r?1:0}),t.classroom.status=e.status},h=()=>p();t.startFeedbackActivity=()=>o.startClassroom(t.classroom.id,f,h),t.finishFeedbackActivity=()=>o.finishClassroom(t.classroom.id,f,h),t.isStudent=null===(l=window.globalData)||void 0===l?void 0:l.courseRoles.some((e=>["student","student_assistant"].includes(e)));var b=e=>n.forEach(e,(e=>e.title=e.title in t.preset?t.preset[e.title]:e.title)),y=()=>o.initFeedbackActivity(r.classroomId).then((function(r){return t.enableFeedbackNewUi&&(r.feedbacks=r.feedbacks.filter((e=>!t.isStudent||!e.created_by_id||e.created_by_id===t.currentUserId||e.voted))),e.context.classroomId=r.id,e.context.classroom=t.classroom=r,b(t.classroom.feedbacks),s.initPublishInfo(t,t.classroom),t.$emit("activityLoaded",r)}));return y()}]},659090:(e,t,r)=>{var i=r(302543);r(658379);var n=r(592207);function o(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}r(207452);var s=r(606913),a=s.getDanmuActivity,c=s.getDanmuConfig,u=s.getCourseUsers,l=r(111172),d=r(966491);e.exports=["$rootScope","$scope","$http","ExamHelper","$routeParams","toastr","$location","classroomApi",function(e,t,r,s,m,p,v){t.classroom={},t.classroomTitle="",t.deleteMessage="",t.pageSize=10,t.pageIndex=1,t.pagination=l(t,v,"items");var f=[];t.getDeleteMessage=()=>t.$t("danmuActivity.message.delete");var h=(e,n,o)=>{var s="".concat(o,"/danmus/interaction-").concat(e,"?page=").concat(t.pageIndex,"&perPage=").concat(t.pageSize,"&token=").concat(n);r.get(s).then((e=>{var r,n;t.result=e.data,t.result.page_size=e.data.perPage,t.result.pages=Math.ceil(e.data.total/t.result.page_size),t.ui.pageIndexInput=t.result.page,t.classroom.danmu=(r=e.data.items,n=[],r.forEach((e=>{var t=i.find(f,{id:e.user.userId});t&&n.push({id:e._id,studentName:t.name,studentNo:t.user_no,content:e.text,sendTime:d.formatDatetime(e.createdAt,"YYYY.MM.DD HH:mm")})})),n)}))},b=function(){var e,t=(e=n.mark((function e(){var t,r,i;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(m.danmuActivityId);case 2:t=e.sent,r=t.data.token,i=t.data.server,h(m.danmuActivityId,r,i);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(i,n){var s=e.apply(t,r);function a(e){o(s,i,n,a,c,"next",e)}function c(e){o(s,i,n,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();t.updatePageSize=e=>{t.pageSize=e,t.pagination.changePage(t.pageIndex,b,i.noop)},t.changePage=e=>{t.pageIndex=e,t.pagination.changePage(e,b,i.noop)},t.deleteDanmu=e=>{c(m.danmuActivityId).then((t=>{var i=t.data.token,n=t.data.server;((e,t,i)=>{var n="".concat(i,"/danmus/").concat(e,"?token=").concat(t);r.delete(n).then((()=>{h(m.danmuActivityId,t,i)}))})(e,i,n)})).catch()};var y;y=e=>{e.data.enrollments.forEach((e=>{f.push(e.user)})),b()},a(m.danmuActivityId,{with_detail:!0}).then((e=>{t.classroom=e.data.interaction,t.$emit("activityLoaded",t.classroom),null==t.classroom.end_time?t.classroom.isInProgress=!0:t.classroom.isInProgress=!1,t.classroomTitle="".concat(t.$t("activityType.danmu")," ").concat(t.classroom.title),u(t.classroom.course_id,{fields:"user(id,name,user_no)"}).then(y)})).catch()}]},660470:(e,t,r)=>{var i=r(302543);e.exports=["$rootScope","$scope","$http","ExamHelper","examRepository","toastr","ExamSubject","classroomApi",function(e,t,r,n,o,s,a,c){e.progressUi||(e.progressUi={answeredNum:0,subjectsNum:0,inProgress:!1}),t.calProgress=function(){e.progressUi.answeredNum=u(t.subjects);var r=e.progressUi.answeredNum/e.progressUi.subjectsNum*100;return e.progressUi.progress=0<=r&&r<=100?"".concat(r,"%"):"0%"},t.calSubjectsPointValue=n.calSubjectsPointValue,t.ui=n.getUIHelper(),t.getSubjectIndex=function(e,r){if(t.subjects)return n.getSubjectIndex(e,r,t.subjects)},t.startSubject=function(e){var r="start";return c.updateClassroomSubjectStatus(t.classroomId,e.id,r,(()=>e.settings.status=r),(()=>d()))},t.finishSubject=function(e){var r="finish";return c.updateClassroomSubjectStatus(t.classroomId,e.id,r,(function(){return e.settings.status=r,l(),m(e)}),(()=>d()))};var u=e=>i.filter(e,(e=>"finish"===e.settings.status)).length,l=function(){return t.calProgress(),t.currentSubjectIndex=u(t.subjects)},d=()=>r.get("/api/classrooms/".concat(t.classroomId,"/subjects-stat")).success((e=>p(e))).error((function(){})),m=function(e){return r.get("/api/classrooms/".concat(t.classroomId,"/subject-stat/").concat(e.id)).success((function(t){if(t)return e.num_of_correct_answers=t.num_of_correct_answers,e.num_of_wrong_answers=t.num_of_wrong_answers,e.num_of_not_answered=t.num_of_not_answered,e.accuracy=t.accuracy,e.options=t.options})).error((function(){}))},p=function(r){var o=i(r.subjects).sortBy("sort").map((function(e){return e.settings.options_layout="vertical",a.createSubjectBySavedSubject(e,!1)})).value();return e.progressUi.subjects=o,t.subjects=o,t.examPaperInstanceId=r.exam_paper_instance_id,e.progressUi.subjectsNum=n.getSubjectsNum(t.subjects),l()};return r.get("/api/classroom-exams/".concat(t.classroomId)).success((function(r){return e.context.classroomId=r.id,e.context.classroom=t.classroom=r,e.progressUi.inProgress="start"===r.status&&r.is_quiz_control_by_subject,t.currentActivity=t.classroom})).error(s.decorateError()),d()}]},662179:(e,t,r)=>{var i=r(248124);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(700533),r(990345),r(658379);var a=r(218831).decamelizeKeys,c=r(271098).getUploadsInLib,u=r(571478),l=r(731904)._;e.exports=["$window","$rootScope","$scope","$http","homeworkApi","toastr","multiSelect",function(e,t,r,n,s,d,m){r.ui={libraryIsEmpty:!0},r.courses=[],r.config={checkInPlatform:!0,inPlatform:{checkWithinCurrentHomework:!0,checkWithinHomeworkLibrary:!1,checkWithinHistoryHomework:!1,historyCourseIds:[],threshold:30,duplicateCharCountThreshold:20},checkInThirdParty:!1,thirdPartyProviders:[],vpcs:{version:"undergraduate",threshold:30},cnki:{threshold:30}},r.configIsOk=()=>r.config.checkInThirdParty||r.config.checkInPlatform&&Object.values(r.config.inPlatform).some((e=>!0===e));var p=u(r);t.$on("".concat("homeworkCheck","Init"),((e,t,i)=>{r.currentHomework=t,r.targetIds=i,r.currentHomework&&r.homework.duplicateDetect.inPlatformConfig&&(r.config.inPlatform=r.homework.duplicateDetect.inPlatformConfig),r.homeworkDuplicateDetectCnkiEnalbe&&r.config.thirdPartyProviders.push("cnki")}));var v=()=>r.currentHomework&&r.currentHomework.id,f=e=>{p.show();var t="/api/homework/".concat(e,"/duplicate-detect"),s=[];r.config.checkInPlatform&&s.push({provider_type:"in_platform",config:a(r.config.inPlatform)}),r.config.checkInThirdParty&&l.forEach(r.config.thirdPartyProviders,(e=>{s.push({provider_type:e,config:a(r.config[e])})}));var c={target_ids:r.targetIds,providers:s};n.post(t,c).success((function(e){p.hide(),i("#".concat("homework-check-popup")).foundation("reveal","close"),d.success(),r.homework.duplicateDetect.status="running",r.startDuplicateDetectStatusInverval();var t=l.reduce(e,((e,t)=>{var r=t.input.config;return e=o(o({},e),r)}),{});r.$emit("updateDuplicateDetectThreshold",t)})).error((function(e){p.hide(),e.message?d.error(e.message):r.errors=e.errors}))};r.save=()=>{if("number"!=typeof r.config.inPlatform.threshold)return d.error(r.$t("homeworkDuplicate.checkRateThresholdFormatError"));if("number"!=typeof r.config.inPlatform.duplicateCharCountThreshold)return d.error(r.$t("homeworkDuplicate.checkingRuleFormatError"));var e=v();return s.getHomeworkDuplicateRate(r.homework.id,r.targetIds,(t=>0===t.items.length?f(e):i("#homework-check-sub-popup").foundation("reveal","open")),(()=>d.warning()))},r.confirm=()=>{i("#homework-check-sub-popup").foundation("reveal","close");var e=v();f(e)};var h=()=>{c(r.courseId).then((e=>{r.ui.libraryIsEmpty=0===e.total,r.ui.libraryIsEmpty&&(r.config.inPlatform.checkWithinHomeworkLibrary=!1),r.$apply()}))};e.addEventListener("homeworkLibraryRefresh",(e=>{h()}));r.initCourses=()=>{var e="/api/courses/".concat(r.courseId,"/instructors-courses?with_homework_count=1");n.get(e).success((function(e){return r.courses=l.map(e.courses.filter((e=>e.id!==r.courseId)),(e=>(e=>{var t,r,i,n,o,s,a="".concat(e.name,"(").concat(e.homework_count,")"),c=[a];return null!==(t=e.academic_year)&&void 0!==t&&t.name||null!==(r=e.semester)&&void 0!==r&&r.name?(e.option='<span class="course-name">'.concat(a,'</span>\n                        <span class="academic-year-semester-container">\n                          <span class="academic-year-name">').concat((null===(i=e.academic_year)||void 0===i?void 0:i.name)||"--",'</span>\n                          <div class="delimiter"></div>\n                          <span class="semester-name">').concat((null===(n=e.semester)||void 0===n?void 0:n.name)||"--","</span>\n                        </span>"),null!==(o=e.academic_year)&&void 0!==o&&o.name&&c.push(e.academic_year.name),null!==(s=e.semester)&&void 0!==s&&s.name&&c.push(e.semester.name)):e.option='<span class="course-name">'.concat(a,"</span>"),e.title=c.join(" | "),e})(e))),m.multiSelect("#homework-history-courses-select",[],!0,!0,!0)})).error((function(e){d.error(e.message)}))},r.$watch("config.inPlatform.checkWithinHistoryHomework",(function(e){e||(r.config.inPlatform.historyCourseIds=[],m.multiSelect("#homework-history-courses-select",[],!0,!0,!0))}));h()}]},663758:(e,t,r)=>{var i=r(795093),n=r(302543),o=r(248124);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,n=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(215195),e.exports=["$rootScope","$scope","$q","Navigation","modelHelper","homeworkRepository",function(e,t,r,s,c,m){t.uiOfSubmissionList={inIntraScoreList:!0,popupOpened:!1},t.isIntraReviewStarted=function(e){return(e.intra_score_map.start_time?i.utc(e.intra_score_map.start_time):i.utc(e.start_time))<i.utc()},t.getStudentInfo=c.getBelongTo,t.setViewingData=r=>m.loadGroupSubmissionList(t.homework.id,t.intraScores[r].group_id).then((function(i){t.uiOfSubmissionList.popupOpened=!0,t.intraRubric=t.homework.intra_rubric_instance;var o,a=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=d(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}(t.intraScores);try{for(a.s();!(o=a.n()).done;){var c=o.value;c.submissions=n.filter(i.list,{is_draft:!1}),c.submission=i.list.length>0?i.list[0]:{},c.group={id:c.group_id}}}catch(e){a.e(e)}finally{a.f()}return e.navigation=new s(t.intraScores,t.homework),e.navigation.setNavigationData(r)})),t.$on("scoreChanged",(function(e,r){var i=n.find(t.intraScores,{reviewer_id:r.reviewer_id,submitter_id:r.submitter_id});return i.score=r.score,i.rubric_score=r.rubric_score,i.comment=r.comment})),t.getScoreForSubmitter=function(e){var r=n.find(t.intraScores,{submitter_id:e.id});if(null!=r)return r.score};return function(){if(t.isIntraReviewStarted(t.homework)){t.uiOfSubmissionList.isIntraRubricViewable=!!t.homework.data.show_intra_rubric&&t.isRubricViewable(t.homework.data.intra_rubric_visible_time),t.uiOfSubmissionList.isIntraRubricViewable&&(t.ui.intraRubricVisibleMessage="".concat(t.rubricVisibleTip,"-").concat(i(t.homework.data.intra_rubric_visible_time).format("YYYY.MM.DD HH:mm")));var e=o("#userId").data("id"),s=m.loadIntraScores(t.homework.id),c=m.loadGroupOtherUsers(t.homework.group_set_id);return r.all([s,c]).then((function(){var r=Array.from(arguments.length<=0?void 0:arguments[0]),i=l(r,2),o=i[0],s=i[1];return t.intraScores=[],t.submitters=s,n.each(s,(function(r){var i=n.find(o,{submitter_id:r.id,reviewer_id:e});if(i){var s=i.created_at,c=i.updated_at,l=u(i,["created_at","updated_at"]),d=c||s;return t.intraScores.push(a(a({},l),{},{intra_score_at:d}))}return t.intraScores.push({submitter:r,submitter_id:r.id,reviewer_id:e,score:null,rubric_score:null,comment:null,group_id:r.group_id,homework_id:t.homework.id,intra_score_at:null})}))}))}}()}]},678264:(e,t,r)=>{r.r(t);r(269193);var i=r(846413),n=r(384027),o=r.n(n),s=r(962893),a=r(494082),c=r(979278);r(382014),r(704468);s.default.use(o()),s.default.use(i.A),s.default.component("SvgIcon",c.A),s.default.component("user-authz-role-manage",(function(){return Promise.all([r.e(49123),r.e(13821),r.e(97786),r.e(339),r.e(18774),r.e(75360),r.e(93392),r.e(64060)]).then(r.bind(r,38732))})),s.default.component("authz-role-permissions",(function(){return Promise.all([r.e(8919),r.e(6696),r.e(59127)]).then(r.bind(r,261530))})),s.default.component("differentiated-form",(function(){return Promise.all([r.e(56662),r.e(58675),r.e(79392),r.e(66491),r.e(7796),r.e(18774),r.e(75360),r.e(74302),r.e(51708),r.e(48941),r.e(90625)]).then(r.bind(r,649320))})),s.default.component("activity-target-list",(function(){return Promise.all([r.e(25996),r.e(13067),r.e(74e3),r.e(37873)]).then(r.bind(r,237873))})),s.default.component("date-picker-ext",(function(){return Promise.all([r.e(18774),r.e(75360),r.e(92082)]).then(r.bind(r,454985))})),s.default.component("meeting-status",(function(){return r.e(89163).then(r.bind(r,389163))})),s.default.component("teaching-team",(function(){return r.e(79067).then(r.bind(r,279067))})),s.default.component("inclass-report",(function(){return Promise.all([r.e(25996),r.e(13067),r.e(27724),r.e(86826),r.e(64524)]).then(r.bind(r,286826))})),s.default.component("course-score-setting",(function(){return Promise.all([r.e(5587),r.e(73096),r.e(18774),r.e(75360),r.e(74302),r.e(3738),r.e(60797)]).then(r.bind(r,28298))})),s.default.component("course-score",(function(){return Promise.all([r.e(5587),r.e(18774),r.e(75360),r.e(4742)]).then(r.bind(r,656163))})),s.default.component("wg-slider",(function(){return r.e(34019).then(r.bind(r,634019))})),s.default.component("sub-course-list",(function(){return Promise.all([r.e(84010),r.e(79055),r.e(31734)]).then(r.bind(r,734132))})),s.default.component("moodle-course-import",(function(){return Promise.all([r.e(40002),r.e(18774),r.e(75360),r.e(18283)]).then(r.bind(r,782124))})),s.default.component("cc-license-multiple-select",(function(){return r.e(38480).then(r.bind(r,638480))})),s.default.component("orgs-resource-management",(function(){return Promise.all([r.e(45683),r.e(3738),r.e(88465)]).then(r.bind(r,151424))})),s.default.component("department-filter",(function(){return Promise.all([r.e(18774),r.e(75360),r.e(7974),r.e(61813)]).then(r.bind(r,654207))})),s.default.component("selects",(function(){return r.e(56238).then(r.bind(r,556238))})),s.default.component("online-teaching-list",(function(){return Promise.all([r.e(56662),r.e(49123),r.e(32655),r.e(66498),r.e(79392),r.e(66491),r.e(339),r.e(12855),r.e(18774),r.e(75360),r.e(74302),r.e(15134),r.e(79055),r.e(3738),r.e(26132),r.e(21093),r.e(49009),r.e(34673),r.e(70397)]).then(r.bind(r,278080))})),s.default.component("config-alert-method-popup",(function(){return Promise.all([r.e(31066),r.e(31552)]).then(r.bind(r,31552))})),s.default.component("select-member-popup",(function(){return Promise.all([r.e(67888),r.e(18774),r.e(75360),r.e(7974),r.e(94862),r.e(40251)]).then(r.bind(r,106140))})),s.default.component("select-course-timetable",(function(){return Promise.all([r.e(56863),r.e(18774),r.e(75360),r.e(79055),r.e(57492)]).then(r.bind(r,85481))})),s.default.component("vote-detail",(function(){return Promise.all([r.e(56662),r.e(26359),r.e(53105),r.e(79392),r.e(66491),r.e(18774),r.e(75360),r.e(9217)]).then(r.bind(r,50212))})),s.default.component("score-list-modal",(function(){return Promise.all([r.e(61141),r.e(18774),r.e(75360),r.e(74302),r.e(59241)]).then(r.bind(r,252587))})),s.default.component("rollcall-filter-popup",(function(){return Promise.all([r.e(17621),r.e(18774),r.e(75360),r.e(2105)]).then(r.bind(r,45176))})),(0,a.P)("homework-duplicate-detail",(function(){return Promise.all([r.e(56662),r.e(79392),r.e(66491),r.e(97786),r.e(339),r.e(18774),r.e(75360),r.e(74302),r.e(6485),r.e(45685)]).then(r.bind(r,6485))})),(0,a.P)("homework-duplicate-lib",(function(){return Promise.all([r.e(56662),r.e(77444),r.e(79392),r.e(66491),r.e(97786),r.e(339),r.e(18774),r.e(75360),r.e(84769)]).then(r.bind(r,820994))})),(0,a.P)("cloud-classroom-rule-setting",(function(){return Promise.all([r.e(38329),r.e(15134),r.e(87899)]).then(r.bind(r,220037))})),(0,a.P)("zip-score-popup",(function(){return Promise.all([r.e(69624),r.e(18774),r.e(75360),r.e(37291)]).then(r.bind(r,811606))})),(0,a.P)("calendar-meeting-popup",(function(){return Promise.all([r.e(49123),r.e(32655),r.e(12855),r.e(74302),r.e(49009),r.e(44184)]).then(r.bind(r,520035))})),(0,a.P)("lark-group-chat-operate-result-popup",(function(){return Promise.all([r.e(7145),r.e(18774),r.e(75360),r.e(74648)]).then(r.bind(r,985845))})),(0,a.P)("pdf-preview-shim",(function(){return Promise.all([r.e(56662),r.e(79392),r.e(66491),r.e(48938),r.e(7796),r.e(78435),r.e(339),r.e(18774),r.e(75360),r.e(74302),r.e(51708),r.e(48941),r.e(26645),r.e(28245)]).then(r.bind(r,143587))})),(0,a.P)("water-mark",(function(){return r.e(5247).then(r.bind(r,505247))})),(0,a.P)("subject-download",(function(){return Promise.all([r.e(15225),r.e(18774),r.e(75360),r.e(51262)]).then(r.bind(r,414261))})),(0,a.P)("home-page-setting",(function(){return Promise.all([r.e(35675),r.e(25223),r.e(85059)]).then(r.bind(r,231998))})),(0,a.P)("home-page",(function(){return Promise.all([r.e(32622),r.e(18774),r.e(75360),r.e(15134),r.e(79055),r.e(31510)]).then(r.bind(r,905771))})),(0,a.P)("subject-mark",(function(){return Promise.all([r.e(56662),r.e(83825),r.e(79392),r.e(66491),r.e(48938),r.e(97786),r.e(339),r.e(18774),r.e(75360),r.e(51708),r.e(48941),r.e(28492),r.e(46706),r.e(22924),r.e(9371),r.e(39591),r.e(67016),r.e(24059),r.e(96674),r.e(32436)]).then(r.bind(r,383602))})),(0,a.P)("student-study-analysis",(function(){return Promise.all([r.e(25996),r.e(39176),r.e(96431),r.e(33489),r.e(6641),r.e(14891),r.e(55789),r.e(19326),r.e(8820),r.e(83170),r.e(50625),r.e(27783),r.e(10188),r.e(13067),r.e(339),r.e(18774),r.e(75360),r.e(74302),r.e(48987),r.e(10257),r.e(8870),r.e(27724),r.e(31110)]).then(r.bind(r,621280))})),(0,a.P)("word-cloud",(function(){return Promise.all([r.e(3347),r.e(84764),r.e(18774),r.e(75360),r.e(8937)]).then(r.bind(r,442004))})),(0,a.P)("tencent-meeting-list",(function(){return Promise.all([r.e(83522),r.e(18774),r.e(75360),r.e(15134),r.e(19707)]).then(r.bind(r,183189))})),(0,a.P)("signup-info",(function(){return Promise.all([r.e(75513),r.e(92455)]).then(r.bind(r,989589))})),(0,a.P)("videos-analysis",(function(){return Promise.all([r.e(25996),r.e(13067),r.e(18774),r.e(75360),r.e(48987),r.e(10257),r.e(52751),r.e(24418),r.e(77547)]).then(r.bind(r,439209))})),(0,a.P)("instructor-study-analysis",(function(){return Promise.all([r.e(56662),r.e(7930),r.e(79392),r.e(66491),r.e(48938),r.e(22541),r.e(7796),r.e(97786),r.e(339),r.e(18774),r.e(75360),r.e(74302),r.e(38579),r.e(51708),r.e(65238),r.e(5636),r.e(48941),r.e(89616)]).then(r.bind(r,288795))})),(0,a.P)("save-to-library-modal",(function(){return Promise.all([r.e(44703),r.e(76679)]).then(r.bind(r,976679))})),(0,a.P)("subject-lib-statistic",(function(){return Promise.all([r.e(25996),r.e(15225),r.e(66832),r.e(13067),r.e(18774),r.e(75360),r.e(7974),r.e(94299)]).then(r.bind(r,311962))})),(0,a.P)("visits-stat-study-analysis",(function(){return Promise.all([r.e(25996),r.e(39176),r.e(96431),r.e(33489),r.e(6641),r.e(14891),r.e(55789),r.e(19326),r.e(8820),r.e(83170),r.e(50625),r.e(27783),r.e(9733),r.e(97786),r.e(13067),r.e(339),r.e(18774),r.e(75360),r.e(48987),r.e(15134),r.e(10257),r.e(51517),r.e(93707)]).then(r.bind(r,5235))})),(0,a.P)("subject-lib-course-list",(function(){return Promise.all([r.e(25996),r.e(46169),r.e(13067),r.e(18774),r.e(75360),r.e(74679),r.e(90179),r.e(62698)]).then(r.bind(r,133296))})),(0,a.P)("course-subject-lib-tab",(function(){return Promise.all([r.e(16831),r.e(74679),r.e(13944)]).then(r.bind(r,878594))})),(0,a.P)("course-subject-lib-folder-tab",(function(){return Promise.all([r.e(46169),r.e(18774),r.e(75360),r.e(71296)]).then(r.bind(r,259508))})),(0,a.P)("questionnaire-subject-stat",(function(){return Promise.all([r.e(10067),r.e(18774),r.e(75360),r.e(39370)]).then(r.bind(r,45205))})),(0,a.P)("image-preview",(function(){return Promise.all([r.e(18774),r.e(75360),r.e(53517)]).then(r.bind(r,635864))})),(0,a.P)("subject-knowledge-node-filter",(function(){return Promise.all([r.e(6411),r.e(18774),r.e(75360),r.e(7974),r.e(37192)]).then(r.bind(r,718592))})),(0,a.P)("vtrs-audit",(function(){return Promise.all([r.e(25996),r.e(67888),r.e(44893),r.e(97786),r.e(13067),r.e(339),r.e(18774),r.e(75360),r.e(80123),r.e(87056)]).then(r.bind(r,356807))})),(0,a.P)("vtrs-stat",(function(){return Promise.all([r.e(18041),r.e(18774),r.e(75360),r.e(53360)]).then(r.bind(r,538789))})),(0,a.P)("vtrs-manage",(function(){return Promise.all([r.e(25996),r.e(67888),r.e(48458),r.e(13067),r.e(17224),r.e(18774),r.e(75360),r.e(80123),r.e(4899)]).then(r.bind(r,994818))})),(0,a.P)("share-course-modal",(function(){return Promise.all([r.e(7623),r.e(18774),r.e(75360),r.e(10383)]).then(r.bind(r,475272))})),(0,a.P)("exam-submit-ip-check-failed-popup",(function(){return Promise.all([r.e(62383),r.e(18774),r.e(75360),r.e(48423)]).then(r.bind(r,985038))})),s.default.component("no-data",(function(){return r.e(44443).then(r.bind(r,166824))})),(0,a.P)("department-stat-by-user",(function(){return Promise.all([r.e(25996),r.e(47611),r.e(13067),r.e(17224),r.e(18774),r.e(75360),r.e(44404)]).then(r.bind(r,469313))})),(0,a.P)("department-user-attendance",(function(){return Promise.all([r.e(25996),r.e(15175),r.e(13067),r.e(17224),r.e(18774),r.e(75360),r.e(35918)]).then(r.bind(r,168553))})),(0,a.P)("department-user-alert-statistic",(function(){return Promise.all([r.e(25996),r.e(92794),r.e(13067),r.e(17224),r.e(18774),r.e(75360),r.e(83176)]).then(r.bind(r,700005))})),(0,a.P)("department-user-alert-detail",(function(){return Promise.all([r.e(25996),r.e(70413),r.e(13067),r.e(17224),r.e(18774),r.e(75360),r.e(93366)]).then(r.bind(r,458295))})),(0,a.P)("download-print-permissions-form",(function(){return Promise.all([r.e(30646),r.e(79055),r.e(58684)]).then(r.bind(r,26860))})),(0,a.P)("exam-stat-score",(function(){return Promise.all([r.e(56662),r.e(39176),r.e(96431),r.e(33489),r.e(6641),r.e(14891),r.e(55789),r.e(19326),r.e(8820),r.e(83170),r.e(50625),r.e(27783),r.e(62115),r.e(79392),r.e(66491),r.e(48938),r.e(22541),r.e(7796),r.e(93780),r.e(97786),r.e(339),r.e(18774),r.e(75360),r.e(74302),r.e(38579),r.e(51708),r.e(65238),r.e(5636),r.e(48941),r.e(77136),r.e(15682)]).then(r.bind(r,593372))})),(0,a.P)("homework-statistics",(function(){return Promise.all([r.e(56662),r.e(39176),r.e(96431),r.e(33489),r.e(6641),r.e(14891),r.e(55789),r.e(19326),r.e(8820),r.e(83170),r.e(50625),r.e(27783),r.e(62115),r.e(79392),r.e(66491),r.e(48938),r.e(22541),r.e(7796),r.e(93780),r.e(97786),r.e(339),r.e(18774),r.e(75360),r.e(74302),r.e(38579),r.e(51708),r.e(65238),r.e(5636),r.e(48941),r.e(77136),r.e(74613)]).then(r.bind(r,811153))})),s.default.customElement("subject-control-time-select",r(31262).A),s.default.customElement("vue-time-picker",r(689044).A),(0,a.P)("related-knowledge-points-modal",(function(){return Promise.all([r.e(56662),r.e(95034),r.e(79392),r.e(66491),r.e(22541),r.e(18774),r.e(75360),r.e(38579),r.e(51708),r.e(5636),r.e(48941),r.e(4488)]).then(r.bind(r,806698))}))},684152:(e,t,r)=>{var i=r(302543);r(566117);e.exports=["$scope","modelHelper","activityRepository",function(e,t,r){var n=t.addLearningActivityRead,o=t.isActivityRead;e.logGoogleMeetingRead=function(){var s;if("join"===(null===(s=e.activity)||void 0===s?void 0:s.completion_criterion_key)){return r.logActivityRead(e.activity.id,{},(function(){return o(e.activitiesRead,e.activity)||n(e.activitiesRead,e.activity.id),t.refreshPrerequisitesStatus(e.activity,e,!0,e.completedInfo[e.activity.type])}),i.noop())}};var s;e.activity.joinMeetingUrl=(s=e.activity)&&s.data&&s.data.meeting&&s.data.meeting.hangout_link,e.activity.expired=e.activity.is_closed,r.initPublishInfo(e,e.activity)}]},689044:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(595738);const n=(0,i.pM)({name:"vueTimePicker",props:{time:{type:String,default:""}},setup(e){var t=(0,i.KR)(e.time);return(0,i.wB)((()=>e.time),(e=>{t.value=e})),{selectedTime:t,handleTimeChange:e=>{var r;t.value=e,r=new CustomEvent("vue-time-picker-change",{detail:{time:t.value}}),window.dispatchEvent(r)}}}});const o=(0,r(514486).A)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("TimePicker",{staticStyle:{width:"168px","margin-left":"8px"},attrs:{confirm:"",placeholder:e.$t("select_date"),value:e.selectedTime},on:{"on-change":e.handleTimeChange}})}),[],!1,null,"7cc0aa46",null).exports},708054:(e,t,r)=>{var i=r(756029);r(678218),e.exports=i.module("classroom-module",["common"]).factory("api",r(427373)).factory("classroomApi",r(612849)).factory("classroomRepository",r(746798)).factory("EnrollmentFilter",r(827829)).factory("Department",r(860019)).factory("examRepository",r(489442)).controller("ExamContentController",r(688750)).controller("ExamPreviewController",r(948261)).controller("ClassroomController",r(925789)).controller("EditClassroomController",r(154383)).controller("ShowClassroomController",r(161788)).controller("FeedbackActivityController",r(645374)).controller("SubjectsEditController",r(541565)).controller("SubjectEditController",r(343246)).controller("ExamScoreListController",r(356092)).controller("ClassroomPagedStudentStats",r(859862)).controller("ClassroomExamineeSubmissionController",r(326834)).controller("ExamSubmissionListController",r(655744)).controller("ClassroomExamController",r(878850)).controller("ClassroomExamProgressController",r(660470)).controller("StatClassroomScoreDistributionController",r(761106)).controller("DanmuActivityController",r(659090)).controller("VoteActivityController",r(628593)).controller("SubjectControlTimeController",r(189495))},709272:(e,t,r)=>{r.r(t),r.d(t,{TaskMap:()=>i});var i={0:"init",1:"running",2:"success",3:"failed",4:"cancel"}},725544:(e,t,r)=>{var i=r(248124),n=r(302543),o=r(793110),s=r(756029);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,n=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=m(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}function m(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(219693),r(418665),r(700533),r(335231),r(168763),r(334867),r(990345),r(269193),r(683396),r(906048),r(43148),r(658379),r(14602);var v=r(580630).useImage2Pdf,f=r(128260),h=r(966491),b=r(571478);e.exports=["$rootScope","$scope","$http","toastr","modelHelper","$sce","fileSelectModel","Navigation","uploadService","uploadClass","homeworkRepository","$compile","$translate","storageUploader","submissionListUtils","multiSelect","$timeout",function(e,t,r,a,u,m,p,y,_,g,w,k,S,I,C,x,A){var P;t.temp={},t.errors={},t.showCommetError=!1,t.currentItem={},t.dataBindTo={},t.attachments={uploads:[]},t.submissionMarkedUploadDetails=[],t.markedVersions=[],t.ui||(t.ui={}),t.ui.submissionIdx=0,t.ui.submitStatus=null!==(P=t.condition)&&void 0!==P&&P.statuses?t.condition.statuses:[];var T=b(t);t.loading=!1,t.hasAttachmentsChanged=!1,t.showSlide=u.showSlide,i(document).on("open.fndtn.reveal","#give-score",(()=>p.context.includeSlides=!1)),t.$on("fileSelectOpen",(function(){return p.limitTypes=[],p.checkIsSelectable=e=>!e.is_folder})),t.select2Options={dropdownCssClass:"select2-drop-without-search rubric-score",formatResult(e){var t="<div class='score'><span class='green-square'></span><span>".concat(e.text,"</span></div>"),r="<div class='description'>".concat(i(e.element).data("description"),"</div>");return"<div class='result-wrapper'>".concat(t).concat(r,"</div>")},formatSelection:e=>parseFloat(e.id)},t.displayName=function(e){return t.showNickname&&e.nickname?"".concat(e.name," (").concat(e.nickname,")"):e.name},t.select2OptionsWithUserNo={containerCssClass:"select2-user_no",dropdownCssClass:"select2-user_no-drop",formatResult(e){var r=i(e.element).data("user"),o="<span class='name truncate-text' tipsy-literal='".concat(t.displayName(r),"' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(t.displayName(r),"</span>");n.includes([1,2],r.status)&&"unmarked"==r.mark&&(o="<span class='name truncate-text' tipsy-literal='".concat(t.displayName(r),"' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(t.displayName(r),'<span class="warning-tag"><i>').concat(t.unmarkedTag,"</i></span></span>"));var s="<span class='user_no truncate-text' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>".concat(r.user_no,"</span>");return k("<div class='result-wrapper'>".concat(o).concat("<span class='gap'></span>").concat(s,"</div>"))(t)},formatSelection(e){return this.formatResult(e)}},t.select2OptionsWithAvatar={dropdownCssClass:"select2-drop-without-search select2-avatar-drop",dropdownAutoWidth:!0,formatResult(e){var r,n=i(e.element).data("student"),o=u.getBelongTo(n);r=n.avatar_small_url?"<div class='avatar32'><img src='".concat(n.avatar_small_url,"'></img></div>"):"<div class='avatar32'><i class='font font-avatar'></i></div>";var s="<div class='truncate-text'>".concat(t.displayName(n),"</div>"),a="<div class='detail-data'>".concat(s,"<div class='detail'>").concat(o,"   ").concat(n.user_no,"</div></div>");return"<div class='result-wrapper'>".concat(r).concat(a,"</div>")},formatSelection:e=>e.text},t.select2OptionsWithMarkedStatus={containerCssClass:"",dropdownCssClass:"",formatResult(e){var r=t.currentItem.submissions[e.id].submission_correct;return r.instructor_score||r.comment?e.text:"".concat(e.text,'<span class="warning-tag"><i>').concat(t.unmarkedTag,"</i></span>")},formatSelection(e){return this.formatResult(e)}};var R=function(e){var r,i=n.filter(e.list,{is_draft:!1});t.currentItem.submissions=((r=i).forEach((e=>{var t=n.filter(null==e?void 0:e.other_resources,{source:"LARK"});e.uploads.push(...t||[])})),r);var o,s=d(t.currentItem.submissions.entries());try{for(s.s();!(o=s.n()).done;){var a=l(o.value,2),c=a[0],u=a[1];u.idx=c,u.inter_scores=t.currentItem.submissions[0].inter_scores,u.group_inter_score=t.currentItem.submissions[0].group_inter_score,t.navigationData&&n.each(u.inter_scores,(e=>e.reviewer=n.find(t.navigationData.students,(t=>t.id===e.reviewer_id))))}}catch(e){s.e(e)}finally{s.f()}return O(),E(),t.ui.submissionIdx=0},O=()=>{if(t.uploadIdToIndexes={},t.currentItem.submission.uploads){var e,r=d(t.currentItem.submission.uploads.entries());try{for(r.s();!(e=r.n()).done;){var i=l(e.value,2),n=i[0],o=i[1];t.uploadIdToIndexes[o.id]=n}}catch(e){r.e(e)}finally{r.f()}}},E=()=>{var r,i,n={type:"homework"};M()&&(n.submission_id=t.currentItem.submission.id,n.uploads=(null===(r=t.currentItem.submission)||void 0===r?void 0:r.uploads)||[],n.uploadsLen=n.uploads.length,n.activity={id:null===(i=t.currentItem.submission)||void 0===i?void 0:i.activity_id,type:n.type},n.markedAttachmentMap=t.markedAttachmentMap,n.uploadIdToIndexes=t.uploadIdToIndexes||{},n.score=t.dataBindTo.score);e.$broadcast("setActivityData",n)},M=()=>t.currentItem.submission&&t.currentItem.submission.id;t.$watch("dataBindTo.score",(()=>{E()}));var $=e=>"100.0"===e?"100":e,D=function(){if(t.dataBindTo=M()?{submission_id:t.currentItem.submission.id}:{},t.dataBindTo.uiOfSubmissionList=t.uiOfSubmissionList,t.dataBindTo.markedAttachmentMap=t.markedAttachmentMap,!t.uiOfSubmissionList.inIntraScoreList){var e;if(t.uiOfSubmissionList.inInterScoreList)t.dataBindTo.id=t.currentItem.id,t.dataBindTo.score=$(t.currentItem.score),t.dataBindTo.reviewer_comment=t.currentItem.comment,t.dataBindTo.rubric_score=t.currentItem.rubric_score,t.dataBindTo.score_at=null!==(e=t.currentItem.updated_at)&&void 0!==e?e:"",t.dataBindTo.interId=t.currentItem.id;else t.dataBindTo.score=$(t.currentItem.submission.submission_correct.instructor_score),t.dataBindTo.rubric_score=t.currentItem.submission.submission_correct&&t.currentItem.submission.submission_correct.rubric_score,t.dataBindTo.reviewer_comment=t.currentItem.submission.instructor_comment,t.attachments.uploads=t.currentItem.submission.submission_correct?t.currentItem.submission.submission_correct.uploads:[],t.dataBindTo.score_at=t.dataBindTo.score||t.dataBindTo.reviewer_comment?t.currentItem.submission.score_at:"";return t.homework.rubric&&(t.rubricScoreData=f.collateRubricScore(t.dataBindTo.rubric_score,t.homework.rubric)),t.uiOfSubmissionList.useRubric=n.some(t.rubricScoreData,(e=>"number"==typeof e.score))||!!t.homework.rubric,t.currentItem.submission&&t.currentItem.submission.slide_references&&(t.slides=n.map(t.currentItem.submission.slide_references,"slide")),function(){if(t.currentItem.submissions=[],M())return t.homework.submit_by_group?w.loadGroupSubmissionList(t.currentItem.submission.activity_id,t.currentItem.group.id).then((e=>R(e))):w.loadStudentSubmissionList(t.currentItem.submission.activity_id,t.currentItem.student.id).then((e=>R(e)))}()}var r=t.currentItem.score;return"100.0"==r&&(r="100"),t.dataBindTo.score=r,t.dataBindTo.rubric_score=t.currentItem.rubric_score,t.dataBindTo.reviewer_comment=t.currentItem.comment,t.dataBindTo.score_at=t.currentItem.intra_score_at,t.homework.intra_rubric_instance&&(t.rubricScoreData=f.collateRubricScore(t.dataBindTo.rubric_score,t.homework.intra_rubric_instance)),t.uiOfSubmissionList.useRubric=t.homework.intra_rubric_instance_id>0,t.currentItem.submission&&t.currentItem.submission.slide_references&&(t.slides=n.map(t.currentItem.submission.slide_references,"slide")),t.ui.submissionIdx=0},j=()=>{t.isInstructorView&&t.currentItem.submission.id&&N(t.currentItem.submission.id)};t.changeTab=function(e){if(t.tabs.active=e,"receivedTab"===e||"receivedIntraTab"===e)return t.setUploadNav(t.navigation.currentItem.submission.uploads)},t.setUploadNav=function(t){if(t)return e.uploadNav=new y(t),e.uploadNav.setNavigationItem()},t.$on("filterSubmissionsUpdated",(()=>{t.uiOfSubmissionList.popupOpened&&(t.setViewingData(0),t.navigation.navIndices.current=0)})),t.$watch("condition.statuses",(function(e){x.multiSelect("#status-select")})),t.$watch("navigation.currentItem",(function(e,i){var s,a;if(e!==i&&null!==e)return(e=>{t.currentItem=e})(e),D(),j(),t.isInstructorView&&t.currentItem.group&&t.homework.intra_score_map.id>0&&(s=t.currentItem.submission.activity_id,a=t.currentItem.group.id,t.averageScore="",r.get("/api/activities/".concat(s,"/group/").concat(a,"/intra_submission")).success((function(e){var r=e.list,i=n.filter(r,(e=>e.score));if(n.size(i)>0){var s=n.reduce(i,((e,t)=>e.plus(new o(t.score))),new o(0));return t.averageScore=parseFloat(s/n.size(i)).toFixed(1),t.averageScore}})).error((function(){}))),e.submission?t.setUploadNav(e.submission.uploads):void 0})),t.historyMarkedVersions=()=>n.filter(t.currentItem.submissions,(e=>!e.is_latest_version&&(e.submission_correct.instructor_score||e.submission_correct.comment))),t.switchLatestSubmission=function(){t.ui.submissionIdx=0,t.changeSubmission(0)},t.switchLatestMarkedSubmission=function(){var e=t.historyMarkedVersions();e.sort((function(e,t){return e.submission_correct.updated_at>t.submission_correct.updated_at?-1:1})),t.ui.submissionIdx=e[0].idx,t.changeSubmission(t.ui.submissionIdx)},t.changeSubmission=function(e){var r=t.currentItem.submissions?t.currentItem.submissions[e]:void 0;if(r)return t.currentItem.submission=r,t.dataBindTo.id=r.id,t.uiOfSubmissionList.inIntraScoreList||t.uiOfSubmissionList.inInterScoreList||(t.dataBindTo.score=$(r.submission_correct.instructor_score),t.dataBindTo.reviewer_comment=r.instructor_comment),t.dataBindTo.rubric_score=r.submission_correct&&r.submission_correct.rubric_score,t.attachments.uploads=r.submission_correct?r.submission_correct.uploads:[],t.dataBindTo.score_at=t.dataBindTo.score||t.dataBindTo.reviewer_comment?r.score_at:"",j(),O(),E(),t.setUploadNav(r.uploads)},t.changeScore=function(){if(t.uiOfSubmissionList.useRubric&&!t.uiOfSubmissionList.inIntraScoreList&&!t.uiOfSubmissionList.inInterScoreList&&t.currentItem.submission.submission_correct.instructor_score)return t.uiOfSubmissionList.useRubric=!1};var U=()=>{var e="",r="";return t.uiOfSubmissionList.inIntraScoreList||t.uiOfSubmissionList.inInterScoreList?(e=t.currentItem.score,r=t.currentItem.comment):(e=t.currentItem.submission.submission_correct.instructor_score,r=t.currentItem.submission.instructor_comment),e!==t.dataBindTo.score||r!==t.dataBindTo.reviewer_comment||t.hasAttachmentsChanged};t.switchNext=()=>{var e=()=>{t.navigation.goNext(),t.hasAttachmentsChanged=!1};if(t.allowHomeworkScoreMark&&U())return t.addScore(e);e()},t.swithPrevious=()=>{var e=()=>{t.navigation.goPrevious(),t.hasAttachmentsChanged=!1};if(t.allowHomeworkScoreMark&&U())return t.addScore(e);e()},t.changeSubmitStatus=()=>{var e;e=t.homework.submit_by_group?t.submissions:t.pagedSubmissions?t.pagedSubmissions:t.submissions;var r=n.filter(e,(e=>n.isEmpty(t.ui.submitStatus)||t.ui.submitStatus.includes(e.student.status.toString())));return C.initNavigation(t.homework,r)},t.changeSelectItem=()=>{var e=()=>{t.navigation.changeNavigationData(t.navigation.navIndices.current),t.hasAttachmentsChanged=!1};if(t.allowHomeworkScoreMark&&U())return t.addScore(e);e()},t.$on("syncSubmissionScore",((e,r)=>{t.dataBindTo.score=r,t.uiOfSubmissionList.useRubric=!1})),t.addScore=function(e,i){void 0===i&&(i=!0);var c;return t.uiOfSubmissionList.useRubric&&!function(){if(null!=t.rubricScoreData?t.rubricScoreData.length:void 0)return n.every(t.rubricScoreData,(e=>"number"==typeof e.score))}()?t.showUseRubricError=!0:(T.show(),t.showUseRubricError=!1,r.put(function(){if(t.uiOfSubmissionList.inInterScoreList)return"/api/inter-scores/".concat(t.dataBindTo.interId);if(t.uiOfSubmissionList.inIntraScoreList)return"/api/activities/".concat(t.homework.id,"/intra-score/score");return"/api/course/activities/".concat(t.homework.id,"/submission/score?fields=").concat("id,score,instructor_comment,rubric_score,final_score","&need_submission_correct=true")}(),(c={score:t.dataBindTo.score,reviewer_comment:t.dataBindTo.reviewer_comment,uploads:n.map(t.attachments.uploads,"id"),id:t.dataBindTo.id},t.uiOfSubmissionList.useRubric&&(c.rubric_score=s.copy(t.rubricScoreData),n.each(c.rubric_score,(e=>e.score=new o(e.score).toFixed(2)))),t.currentItem.group&&(c.group_id=t.currentItem.group.id),t.currentItem.student&&t.currentItem.student.id&&(c.student_id=t.currentItem.student.id),t.uiOfSubmissionList.inIntraScoreList&&(c.submitter_id=t.currentItem.submitter_id),c)).success((function(r){(e=>{var r=(new Date).toISOString();t.uiOfSubmissionList.inInterScoreList||t.uiOfSubmissionList.inIntraScoreList?t.currentItem.score===t.dataBindTo.score&&t.currentItem.comment===t.dataBindTo.reviewer_comment||(t.dataBindTo.score_at=r,t.currentItem.score=t.dataBindTo.score,t.currentItem.comment=t.dataBindTo.reviewer_comment,t.uiOfSubmissionList.inIntraScoreList?(t.currentItem.intra_score_at=r,n.find(t.intraScores,{reviewer_id:e.reviewer_id,submitter_id:e.submitter_id}).intra_score_at=r):(t.currentItem.updated_at=r,n.find(t.interScores,(e=>e.id===t.currentItem.id)).updated_at=r)):t.dataBindTo.score_at=r})(r),r.submission_correct&&(t.attachments.uploads=r.submission_correct.uploads),T.hide(),i&&a.success(t.saveSuccessMessage);var o=0,s="personal";t.currentItem.group&&(o=t.currentItem.group.id,s="group"),t.currentItem.student&&t.currentItem.student.id&&(o=t.currentItem.student.id),statistics.track({activity_id:t.homework.id,activity_type:"homework",action:statistics.enums.Action.give_score,mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web,target_info:{id:o,type:s,is_student:!0}});var c,u;if(t.uiOfSubmissionList.inIntraScoreList||(c=t.navigation.submissions[t.navigation.navIndices.current],u=t.currentItem.submissions[t.ui.submissionIdx]?t.currentItem.submissions[t.ui.submissionIdx]:{submission_correct:{}},t.uiOfSubmissionList.inInterScoreList?(c.score=r.score,c.rubric_score=r.rubric_score,c.comment=r.comment):(c.submission.is_latest_version&&(c.submission.score=r.score,c.submission.instructor_comment=r.instructor_comment,c.submission.instructor_score=t.dataBindTo.score),u.instructor_comment=r.instructor_comment,u.score=t.dataBindTo.score,u.submission_correct.comment=r.instructor_comment,u.submission_correct.instructor_score=t.dataBindTo.score,u.submission_correct.updated_at=t.dataBindTo.score_at),t.homework.submit_by_group?n.forEach(c.students,(function(e){return e.final_score.score=n.find(r.students,{id:e.student.id}).score,e.final_score.final_score=n.find(r.students,{id:e.student.id}).final_score})):c.final_score&&(c.final_score.score=r.score,c.final_score.final_score=r.final_score),t.currentItem.submission||(t.currentItem.submission={}),t.updateOriginalSubmissionMarkStatus(c),t.setSubmissionReviewed()),t.uiOfSubmissionList.inInterScoreList&&(t.currentItem.submission.inter_score||(t.currentItem.submission.inter_score={})),t.$emit("scoreChanged",r),e)return e()})).error(a.decorateError((function(e,r){if(T.hide(),t.setSubmissionReviewed(),400===r)return t.errors=e.errors,t.navigation.navIndices.current=t.navigation.navIndices.last}))))},t.updateOriginalSubmissionMarkStatus=function(e){var r,i,o=!!t.homework.submit_by_group;if(o)i=n.some(e.students,(e=>!!e.final_score.final_score||!!e.final_score.instructor_comment));else{var s=e.final_score;i=!(!s||!s.final_score&&!s.instructor_comment)}var a=!(null===(r=e.submission)||void 0===r||!r.instructor_comment);i=i||a;var c=e.beReviewedCount>0,u=i||c?"marked":"unmarked";o?e.group.mark=u:e.student.mark=u},t.setSubmissionReviewed=function(){if(-1!==t.navigation.navIndices.current){var e=t.navigation.navItems[t.navigation.navIndices.current].submission;if(e&&e.is_resubmitted){return r.post("/api/submissions/".concat(e.id,"/read"),{}).success((()=>e.is_resubmitted=!1))}}},t.reset=function(){return t.setSubmissionReviewed(),t.errors={},t.uiOfSubmissionList.useRubric=!1,t.uiOfSubmissionList.popupOpened=!1,t.showUseRubricError=!1,delete e.uploadNav},t.calculateRubricScore=function(){var e;return"100.0"===(e=n.reduce(t.rubricScoreData,((e,t)=>e.plus(n.isNaN(parseFloat(t.score))?0:new o(t.score))),new o(0)).toFixed(1))&&(e="100"),t.dataBindTo.score=e,e},t.$on("updateTotalRubricScore",(e=>t.calculateRubricScore())),t.scoreDataOnlyViewable=function(e){return!!e.score_published||(t.uiOfSubmissionList.inInterScoreList?e.inter_score_map.is_closed:!t.allowHomeworkScoreMark)};var L=function(){t.showCommetError=!1,t.$apply()};t.reviewCommentChange=function(e){t.dataBindTo.reviewer_comment.length>e?(t.dataBindTo.reviewer_comment=t.dataBindTo.reviewer_comment.substr(0,e),t.showCommetError=!0,setTimeout(L,2e3)):t.showCommetError=!1},t.changeFile=function(t){if(!(t<0||t>=e.uploadNav.navItems.length))return e.uploadNav.changeNavigationData(t),e.$emit("previewFile",e.uploadNav.currentItem)},t.isInReview=()=>!t.homework.is_inter_review_by_submitter||t.currentItem.inReview,t.selectRubric=function(){t.state="selection",t.showUseRubricError=!1,t.uiOfSubmissionList.inIntraScoreList?(t.rubricScoreData.inIntraScoreList=!0,e.$broadcast("openRubricPopup",t.homework.intra_rubric_id,"selection",t.rubricScoreData)):e.$broadcast("openRubricPopup",t.homework.rubric_id,"selection",t.rubricScoreData)},t.fileExtension=h.fileExtension,t.trustAsResourceUrl=m.trustAsResourceUrl,t.addFiles=e=>{t.attachments.uploads=t.attachments.uploads.concat(e),t.hasAttachmentsChanged=!0},t.deleteFile=e=>{var r=Object.values(t.markedAttachmentMap).find((t=>t.marked_attachment.upload&&t.marked_attachment.upload.id===e.id));r&&(r.marked_attachment={}),n.remove(t.attachments.uploads,e),t.hasAttachmentsChanged=!0},t.markedAttachmentMap={};var N=e=>{r.get("/api/submissions/".concat(e,"/marked_attachments")).then((e=>{t.markedAttachmentMap=e.data.marked_attachment_infos.reduce(((e,t)=>(e[t.origin_upload.upload.id]=t,e)),{})}))},F=(e,t)=>I.getUploader(t).upload(e),z=(e,t)=>r.get("/api/submissions/".concat(e,"/marked_attachments/").concat(t)).then((e=>e.data.marked_attachment)),B=(e,i,n)=>{var o={name:n.name,size:n.size,parent_type:"source_file",parent_id:i,is_scorm:!1,is_wmpkg:!1,is_marked_attachment:!0};return r.post("/api/uploads",o).then((e=>{var t=e.data,r={uploadId:t.id,uploadUrl:t.upload_url,file:n,transcoder:t.transcoder};return F(r,t.storage_type).then((()=>t))})).then((i=>{var n=[i.id],o={submission_id:e,uploads:n,partial_create:!0};t.homework.submit_by_group?o.group_id=t.currentItem.group.id:o.student_id=t.currentItem.student.id;var s="/api/course/activities/".concat(t.homework.id,"/submissions/correct-uploads");return r.put(s,o).then((()=>{})).catch((e=>console.error(e))),i})).then((t=>z(e,t.id)))},H=(e,i,o,s)=>{var a={name:o.name,size:o.size,parent_type:"source_file",parent_id:i,is_scorm:!1,is_wmpkg:!1,is_marked_attachment:!0};return r.post("/api/uploads",a).then((e=>{var t=e.data,r={uploadId:t.id,uploadUrl:t.upload_url,file:o,transcoder:t.transcoder};return F(r,t.storage_type).then((()=>t))})).then((e=>{var i,o,a=n.map(t.attachments.uploads,"id").indexOf(s.id);return t.attachments.uploads.splice(a,1),0!==s.reference_id?(i=e.id,o=s.reference_id,r.put("/api/uploads/references/".concat(o),{upload_id:i})).then((()=>e)):(e=>r.delete("/api/uploads/marked_attachment/".concat(e)))(s.id).then((()=>e))})).then((t=>z(e,t.id)))},V=(e,t,r)=>{var i={uploadId:t.upload.id,uploadUrl:t.write_url,file:r,transcoder:t.transcoder};return F(i,t.storage_type).then((()=>z(e,t.upload.id)))},G=r=>{var o,s,u;e.$broadcast("pdfEditor",r,(o=r.submissionId,s=r.uploadId,u=r.attachmentName,(r,i,l)=>{var d=()=>{var e={activity_id:t.activity.id,activity_type:t.activity.type,mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web,action:statistics.enums.HomeworkAction.mark};statistics.track(e),t.dataBindTo.score&&t.dataBindTo.score.length>0&&t.dataBindTo.score<=100?t.addScore(null,i):i&&a.decorateSuccess()({message:S.instant("saveSuccess")})};if(!r)return d(),void e.$broadcast("pdfEditor:loading",!1);var m=t.markedAttachmentMap[s],p=!n.isEmpty(m.marked_attachment),v=null,f=h.base64ToFile(r,u,"text/plain");if(p&&"QINIU"!==m.marked_attachment.storage_type){var b=m.marked_attachment;v=V(o,b,f).then((e=>{m.marked_attachment=e}))}else if(p&&"QINIU"===m.marked_attachment.storage_type){var y=m.marked_attachment.upload;v=H(o,s,f,y).then((e=>{m.marked_attachment=e,t.attachments.uploads.push(c(c({},e.upload),{},{parent_type:"source_file"})),t.hasAttachmentsChanged=!0}))}else v=B(o,s,f).then((e=>{m.marked_attachment=e,t.attachments.uploads.push(c(c({},e.upload),{},{parent_type:"source_file"})),t.hasAttachmentsChanged=!0}));v.then(d).catch((e=>{console.error(e),a.decorateError()({message:S.instant("saveError")})})).finally((()=>{l&&l(m.marked_attachment.url),e.$broadcast("pdfEditor:loading",!1)}))})),i("#pdf-editor").foundation("reveal","open")};t.$on("changePdfEditor",(function(r,i){var n=t.currentItem.submission.uploads,o=n.length,s=t.uploadIdToIndexes[t.editingUploadId],a=0;["document","image","audio","video","file"].includes(n[a=(s+=i)<0?o+s:s%o].type)?t.openEditor(n[a].id):i>0?e.$broadcast("changePdfEditor",++i):e.$broadcast("changePdfEditor",--i)})),t.openEditor=e=>{t.editingUploadId=e;var r=t.currentItem.submission.id,i=t.homework.submit_by_group?t.currentItem.group_name:t.currentItem.student.name,o=t.markedAttachmentMap[e],s=o.origin_upload,a=o.origin_upload.name,c="";n.isEmpty(o.marked_attachment)||(c=o.marked_attachment.url);var u={url:s.url,attachmentUrl:c,attachmentName:"markattatchment.txt",name:i,fileName:a,submissionId:r,uploadId:e,fileType:s.upload.type,imgURL:""};"image"===s.upload.type?(e=>{v(e.url,((t,r)=>{e.url=t,e.imgURL=r,G(e)}))})(u):G(u)},t.justViewHomework=()=>t.isSimulatingInstructor;t.isInstructorView?t.uiOfSubmissionList.isRubricViewable=t.homework.rubric_id>0:t.uiOfSubmissionList.isRubricViewable=!!t.homework.data.show_rubric&&t.isRubricViewable(t.homework.data.rubric_visible_time),t.showInstructorScore=!0,t.isShowSwitchButton=!0;var q=e.$on("open-give-score",((e,r)=>{t.showInstructorScore=!1,t.isShowSwitchButton=!1,t.tabs.active="receivedTab",0==r.currentItem.submission.inter_scores.length&&r.homework.intra_score_map&&r.homework.intra_score_map.id>0&&(t.tabs.active="receivedIntraTab"),i("#give-score").foundation("reveal","open"),t.navigation=new y,t.navigation.homework=r.homework,t.navigation.submissions=r.homework.submissions,t.navigation.currentItem=r.currentItem,t.uiOfSubmissionList.popupOpened=!0}));t.$on("$destroy",(()=>{q()}))}]},755805:(e,t,r)=>{r.d(t,{A:()=>l});r(269193);var i=r(592207),n=r.n(i),o=(r(207452),r(302543)),s=r.n(o),a=r(951708);function c(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function s(e){c(o,i,n,s,a,"next",e)}function a(e){c(o,i,n,s,a,"throw",e)}s(void 0)}))}}const l={namespaced:!0,state:{userCreditState:{},courseCreditState:{}},actions:{fetchCurrentUserState:e=>u(n().mark((function t(){var r,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,(0,a.getCurrentUserCredits)();case 3:i=t.sent,r("setUserCreditState",i);case 5:case"end":return t.stop()}}),t)})))(),fetchCurrentCourseState:(e,t)=>u(n().mark((function r(){var i,o,s;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.commit,o=t.courseId,r.next=4,(0,a.getCurrentCourseCredits)(o);case 4:s=r.sent,i("setCourseCreditState",s);case 6:case"end":return r.stop()}}),r)})))()},getters:{userRemainingCredits:e=>s().isEmpty(e.userCreditState)?0:e.userCreditState.creditRemaining||0,hasRemainingCredits:(e,t)=>t.userRemainingCredits>0,courseRemainingCredits:e=>s().isEmpty(e.courseCreditState)?0:e.courseCreditState.creditRemaining||0,hasCourseRemainingCredits:(e,t)=>t.courseRemainingCredits>0},mutations:{setUserCreditState(e,t){e.userCreditState=t},setCourseCreditState(e,t){e.courseCreditState=t}}}},761106:(e,t,r)=>{var i=r(248124),n=r(302543);r(990345),r(269193),r(850785);var o=r(592207);function s(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function a(e){s(o,i,n,a,c,"next",e)}function c(e){s(o,i,n,a,c,"throw",e)}a(void 0)}))}}r(207452);var c=r(825315);e.exports=["$scope","$routeParams","$timeout","statRepository",function(e,t,r,s){e.classroomId=t.classroomId||i("#classroomId").val(),e.ui={showChart:!0},e.noData=!0,e.condition={class_ids:[],section_ids:[]},e.$on("drawChart",(function(){if(e.ui.showChart)return r((()=>l()))})),e.hasData=()=>!n.isEmpty(e.scoreDatas),e.toggleShowChart=function(){if(e.ui.showChart=!e.ui.showChart,e.ui.showChart)return r((()=>l()))};var u=function(){var t=a(o.mark((function t(){var r;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.initClassroomScoreDistribution(e.classroomId,e.condition);case 2:r=t.sent,e.data=r.data,e.noData=!(Object.keys(e.data.distributions).length>0);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=a(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:r((()=>{c.drawBarChart(e.xAxis,e.seriesName,Object.values(e.data.distributions))}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.search=()=>{l()};return function(){if(e.ui.showChart)return l()}()}]},774564:(e,t,r)=>{var i=r(302543),n=r(795093);e.exports=["$rootScope","$http","toastr","Navigation","homeworkRepository","$q",function(e,t,r,o,s,a){var c=function(t,r){var n=a.defer(),o=i.findIndex(e.navigation.navItems,r),c=function(t){var r,s;return r=t,(s=e.navigation.navItems[o]).submission=i.extend(s.submission,r),e.navigation.setNavigationData(o),n.resolve(t)};if(t.submit_by_group){var u=e.navigation.navItems[o].group.id;s.loadGroupSubmission(e.navigation.homework.id,u).then(c)}else{var l=e.navigation.navItems[o].student.id;s.loadStudentSubmission(e.navigation.homework.id,l).then(c)}return n.promise},u=function(e,t){var r=y(e);return d(r,t)},l=function(e,t){var r=[];return t.submit_by_group&&i.each(e,(e=>r.push(e.group.id))),r},d=function(e,t){var r=[];return t.submit_by_group?i.each(e,(e=>i.each(e.students,(e=>r.push(e.student.id))))):i.each(e,(e=>r.push(e.student.id))),r},m=e=>i.some(e,(e=>e.selected)),p=e=>i.some(e,(e=>e.selected&&!e.submission.marked_submitted)),v=e=>i.some(e,(e=>e.selected&&!!e.submission.marked_submitted)),f=e=>i.some(e,(e=>e.selected)),h=e=>i.filter(e,(e=>f([e]))),b=e=>i.filter(e,(e=>e.selected&&!e.submission.marked_submitted)),y=e=>i.filter(e,(e=>e.selected&&e.submission.marked_submitted));return{setViewingData:function(t,r,i,n,s){return function(t,r){e.navigation=new o(r,t),e.navigation.setLoadLatestItem((e=>c(t,e)))}(r,i),n.active="scoreTab",c(r,i[t]).then((()=>s.popupOpened=!0))},autoSave:function(e,n,o){var s=a.defer();return t.put("/api/course/activities/".concat(o,"/score"),{student_id:e,score:n}).success((function(e){return s.resolve(e),r.success(e.message)})).error((function(e,t){return s.reject(),400===t?(i.each(e.errors.score,(e=>r.error(e))),s.reject()):r.warning()})),s.promise},autoSaveStatusComment:function(e,n,o){var s=a.defer(),c={student_id:o,status_comment:n};return t.put("/api/course/activities/".concat(e,"/submission/status-comment"),c).success((function(e){return s.resolve(e),r.success(e.message)})).error((function(e,t){return s.reject(),400===t?(i.each(e.errors.score,(e=>r.error(e))),s.reject()):r.warning()})),s.promise},hasSelected:m,hasSelectedRecommendable:e=>i.some(e,(e=>e.selected&&!!e.submission.marked_submitted&&!e.submission.submit_by_instructor&&1!==e.submission.recommend)),hasSelectedCanRemind:p,hasSelectedCanChangeToUnsubmitted:v,hasSelectedCanChangeToSubmitted:p,everySelectedCanChangeToRedo:(e,t)=>{var r=i.filter(e,(e=>e.selected));return 0!==r.length&&i.every(r,(e=>{var r;return r=t?i.every(e.students,(e=>!(e.final_score.final_score||e.final_score.score)))&&!(e.submission.instructor_score||e.submission.score):!(e.final_score.score||e.final_score.final_score||e.submission.instructor_score||e.submission.score),e.submission.marked_submitted&&r}))},getUnsubmittedStudentIds:function(e,t){var r=b(e);return d(r,t)},hasSelectedNeedMakeUp:f,hasSelectedDownloadable:m,hasSelectedCanResubmit:v,buildHomeworkForMakeUp:function(e,t){var r=h(e);t.selected_count=r.length;var n=d(r,t),o=[];return t.selected_make_up_student_ids=n,t.submit_by_group&&(o=l(r,t)),t.selected_make_up_group_ids=o,t.selected_submission_ids=[],i.each(r,(function(e){if(e.submission.id)return t.selected_submission_ids.push(e.submission.id)})),t.includeRecommendSubmission=i.some(r,(e=>!!e.submission.recommend)),t},buildHomeworkForResubmit:function(e,t){var r=y(e);t.submitted_count=r.length;var n=u(e,t);return t.selected_submitted_student_ids=n,t.includeRecommendSubmission=i.some(r,(e=>!!e.submission.recommend)),t},hasSelectedCanRemindReview:(e,t)=>i.some(t,(t=>t.selected&&t.inReview&&t.reviewedCount<e.inter_score_map.pieces_cnt)),submissionHasClosed:e=>{if(!e.end_time)return!1;var t="".concat(n.utc().format("YYYY-MM-DDTHH:mm:ss"),"Z");return e.end_time<t}}}]},786831:(e,t,r)=>{var i,n,o,s=r(248124);e.exports=["$rootScope","statHelper","$scope","$timeout","$window",(e,t,r,a,c)=>{i||(i=()=>{s("#file-select").foundation("reveal","open")}),o||(o=r=>{s("#file-previewer").foundation("reveal","open");var i=r.detail.activity,n=r.detail;return e.$emit("previewFile",n,i),t.track(i.type,"view",{activity_id:i.id,upload_id:n.id,upload_reference_id:n.reference_id})}),n||(n=e=>{var r=e.detail.activity,i=e.detail;return t.track(r.type,"download",{activity_id:r.id,upload_id:i.id,upload_reference_id:i.reference_id})});c.removeEventListener("preview-upload",o),c.removeEventListener("statistics-download",n),c.removeEventListener("open-file-selector",i),c.addEventListener("open-file-selector",i),c.addEventListener("preview-upload",o),c.addEventListener("statistics-download",n)}]},793310:(e,t,r)=>{r(111490)},808364:(e,t,r)=>{r.d(t,{A:()=>v});r(540590),r(195755),r(418665),r(700533),r(379432),r(334867),r(169218),r(990345),r(269193),r(43148),r(658379),r(14602);var i=r(595738),n=r(877401),o=r(551947),s=r(302543),a=r.n(s),c=r(213096),u=r(731904),l=function(){return(l=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},d=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))},m=function(e,t){var r,i,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,i=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};const p=(0,i.pM)({name:"KnowledgeGraphConcatChapterKnowledgeModal",components:{LoadingOverlay:o.A},props:{activityId:{type:Number,required:!0},courseId:{type:Number,required:!0},chapters:{type:Array,required:!0},knowledgePoints:{type:Array,required:!0}},setup:function(e,t){var r=this,o=(0,c.s)(),s=(0,i.KR)(!0),p=(0,i.KR)(!1),v=function(){s.value=!1},f=function(){v()},h=(0,i.KR)([]),b=(0,i.KR)(0),y=(0,i.EW)((function(){if(!h.value.length)return[];var e=[],t=h.value.flatMap((function(e){return e.knowledgeSimilarities.map((function(e){return e.similarityFormat||1/0}))})),r=t.length?Math.min.apply(Math,t):1/0;if(r!==1/0){for(var i=100;i>r;)e.push({value:i,label:"".concat(i<100?o.t("knowledgePoint.filterAbove",[i]):"100%")}),i-=10;i<=r&&e.push({value:r,label:"".concat(r<100?o.t("knowledgePoint.filterAbove",[r]):"100%")})}return e})),_=(0,i.EW)((function(){var e=b.value||0;return h.value.map((function(t){return l(l({},t),{knowledgeSimilarities:t.knowledgeSimilarities.filter((function(t){return t.similarityFormat&&t.similarityFormat>=e}))})})).filter((function(e){return e.knowledgeSimilarities.length>0}))})),g=(0,i.KR)(!1),w=function(){(0,i.dY)((function(){var e=b.value||0,t=h.value.flatMap((function(t){return t.knowledgeSimilarities.filter((function(t){return t.similarityFormat&&t.similarityFormat>=e})).map((function(e){return e.checked}))}));g.value=t.length>0&&t.every((function(e){return e}))}))},k=(0,i.KR)(0),S=(0,i.EW)((function(){return h.value.reduce((function(e,t){return t.knowledgeSimilarities.reduce((function(e,t){return t.checked?e+1:e}),e)}),0)})),I=(0,i.KR)(!1);d(r,void 0,void 0,(function(){var t,r,i,o,s,a,c;return m(this,(function(u){switch(u.label){case 0:I.value=!0,u.label=1;case 1:return u.trys.push([1,3,,4]),t=(0,n.getKnowledgeReferencesForActivity)(Number(e.activityId)),r=(0,n.knowledgeSimilarity)(e.courseId,{knowledge_points:e.knowledgePoints.map((function(e){return{id:e.id,name:e.name}}))}),[4,Promise.all([t,r])];case 2:return i=u.sent(),o=i[0],s=i[1],a={},null==o||o.forEach((function(e){var t,r;a[e.knowledgeNodeId]||(a[e.knowledgeNodeId]=[]),null===(r=null===(t=e.data)||void 0===t?void 0:t.mediaFragments)||void 0===r||r.forEach((function(t){var r;null===(r=null==t?void 0:t.knowledgePointList)||void 0===r||r.forEach((function(t){a[e.knowledgeNodeId].push(t.id)}))}))})),h.value=s.map((function(e){return l(l({},e),{knowledgeSimilarities:e.knowledgeSimilarities.map((function(t){var r=a[t.id],i=!1;return r&&(i=r.includes(e.id)),l(l({},t),{similarityFormat:Number((100*t.similarity).toFixed()),checked:i})}))})})),k.value=h.value.reduce((function(e,t){return t.knowledgeSimilarities.reduce((function(e,t){return t.checked?e+1:e}),e)}),0),w(),[3,4];case 3:return c=u.sent(),console.log(c),[3,4];case 4:return I.value=!1,setTimeout((function(){var e,t;p.value=((null===(e=document.querySelector(".kg-table-body"))||void 0===e?void 0:e.scrollHeight)||0)>((null===(t=document.querySelector(".kg-table-body"))||void 0===t?void 0:t.clientHeight)||0)}),0),[2]}}))}));return{loading:I,modalShow:s,hasScroll:p,closeModal:f,cancel:v,save:function(){return d(r,void 0,void 0,(function(){var t,r,i,s,c,l;return m(this,(function(d){switch(d.label){case 0:t=a().keyBy(e.chapters,"id"),r=a().keyBy(e.knowledgePoints,"id"),i=[],h.value.forEach((function(e){e.knowledgeSimilarities.forEach((function(t){var n;if(t.checked){var o=r[e.id];null===(n=o.data)||void 0===n||n.chapterIds,i.push({data:o.data,knowledgePointId:o.id,knowledgePointName:o.name,knowledgeNodeId:t.id,knowledgeNodeName:t.name,similarity:t.similarity})}}))})),s={},i.forEach((function(e){s[e.knowledgeNodeId]?(s[e.knowledgeNodeId].chapterIds=a().union(s[e.knowledgeNodeId].chapterIds,e.data.chapterIds),s[e.knowledgeNodeId].knowledgePointList.push({similarity:e.similarity,id:e.knowledgePointId,name:e.knowledgePointName})):s[e.knowledgeNodeId]={chapterIds:e.data.chapterIds,knowledgeNodeId:e.knowledgeNodeId,knowledgeNodeName:e.knowledgeNodeName,knowledgePointList:[{similarity:e.similarity,id:e.knowledgePointId,name:e.knowledgePointName}]}})),c=[],Object.values(s).forEach((function(e){e.chapterIds.forEach((function(r){c.push({chapterId:r,chapterName:t[r].title,startTs:t[r].startTs,endTs:t[r].endTs,mediaId:t[r].mediaId,knowledgeNodeId:e.knowledgeNodeId,knowledgeNodeName:e.knowledgeNodeName,knowledgePointList:e.knowledgePointList})}))})),d.label=1;case 1:return d.trys.push([1,3,,4]),[4,(0,n.saveKnowledgeReferencesForActivity)(e.activityId,{fragments:c})];case 2:return d.sent(),u.Toast.success(o.t("save_success")),f(),setTimeout((function(){window.location.reload()}),2e3),[3,4];case 3:return l=d.sent(),console.log(l),[3,4];case 4:return[2]}}))}))},fragments:h,isAllSelected:g,selectAll:function(){(0,i.dY)((function(){var e=b.value||0;h.value.forEach((function(t){t.knowledgeSimilarities.filter((function(t){return t.similarityFormat&&t.similarityFormat>=e})).forEach((function(e){e.checked=g.value}))}))}))},checkSelection:w,goToKnowledgePage:function(t){window.open("/course/".concat(e.courseId,"/knowledge-graph#/mind-map/").concat(t),"_blank")},filterOptions:y,filteredSimilar:b,filteredFragments:_,selectedCount:S,relatedCount:k}}});const v=(0,r(514486).A)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{ref:"modal",attrs:{width:900,"class-name":"knowledgeGraphConcatChapterKnowledgeModal","mask-closable":!1,closable:!1},scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"knowledgeGraphConcatChapterKnowledgeModal-header"},[r("span",{staticClass:"knowledgeGraphConcatChapterKnowledgeModal-title"},[e._v(e._s(e.$t("knowledgePoint.modalTitle")))]),e._v(" "),r("i",{staticClass:"font font-close",on:{click:function(t){return e.closeModal()}}})])]},proxy:!0},{key:"footer",fn:function(){return[r("Button",{attrs:{disabled:e.loading},on:{click:e.cancel}},[e._v(e._s(e.$t("cancel")))]),e._v(" "),r("Button",{attrs:{disabled:e.loading,type:"primary"},on:{click:e.save}},[e._v(e._s(e.$t("save")))])]},proxy:!0}]),model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[e._v(" "),e.loading?r("div",{staticClass:"kg-body"},[e.loading?r("LoadingOverlay"):e._e()],1):r("div",{staticClass:"kg-body"},[r("div",[e._v(e._s(e.$t("knowledgePoint.modalTips")))]),e._v(" "),r("div",{staticClass:"kg-toolbar"},[r("span",{staticClass:"related-summary"},[e._v("\n        "+e._s(e.$t("knowledgePoint.relatedSummary"))+"\n        "),r("span",{staticClass:"highlight"},[e._v(e._s(e.$t("knowledgePoint.summaryCount",[e.relatedCount])))])]),e._v(" "),r("div",{staticClass:"kg-filter"},[r("span",[e._v(e._s(e.$t("knowledgePoint.similarity")))]),e._v(" "),r("Select",{attrs:{clearable:""},on:{"on-change":e.checkSelection},model:{value:e.filteredSimilar,callback:function(t){e.filteredSimilar=t},expression:"filteredSimilar"}},e._l(e.filterOptions,(function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])})),1)],1)]),e._v(" "),r("div",{staticClass:"kg-table"},[r("div",{staticClass:"kg-table-header"},[r("div",{staticClass:"kg-table-row"},[r("div",{staticClass:"kg-table-column"},[r("div",{staticClass:"kg-table-cell"},[e._v(e._s(e.$t("knowledgePoint.mediaPoint")))])]),e._v(" "),r("div",{staticClass:"kg-table-column"},[r("div",{staticClass:"kg-table-cell"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.isAllSelected,expression:"isAllSelected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isAllSelected)?e._i(e.isAllSelected,null)>-1:e.isAllSelected},on:{change:[function(t){var r=e.isAllSelected,i=t.target,n=!!i.checked;if(Array.isArray(r)){var o=e._i(r,null);i.checked?o<0&&(e.isAllSelected=r.concat([null])):o>-1&&(e.isAllSelected=r.slice(0,o).concat(r.slice(o+1)))}else e.isAllSelected=n},function(t){return e.selectAll()}]}}),e._v("\n              "+e._s(e.$t("knowledgePoint.knowledgeGraphPoint"))+"\n            ")])])])]),e._v(" "),r("div",{staticClass:"kg-table-body",class:{hasScroll:e.hasScroll}},e._l(e.filteredFragments,(function(t,i){return r("div",{key:i,staticClass:"kg-table-row"},[r("div",{staticClass:"kg-table-column"},[r("div",{staticClass:"kg-table-cell"},[e._v(e._s(t.name))])]),e._v(" "),r("div",{staticClass:"kg-table-column"},e._l(t.knowledgeSimilarities,(function(t){return r("div",{key:t.id,staticClass:"kg-table-cell"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"similarity.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(r){var i=t.checked,n=r.target,o=!!n.checked;if(Array.isArray(i)){var s=e._i(i,null);n.checked?s<0&&e.$set(t,"checked",i.concat([null])):s>-1&&e.$set(t,"checked",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(t,"checked",o)},function(t){return e.checkSelection()}]}}),e._v(" "),r("div",{staticClass:"kg-table-cell-main"},[r("span",[e._v(e._s(t.name))]),e._v(" "),r("span",{staticClass:"similarity"},[e._v("\n                  "+e._s(e.$t("knowledgePoint.similarity"))+" "+e._s(t.similarityFormat)+" %\n                ")])]),e._v(" "),r("span",{staticClass:"kg-table-cell-ctrl navNode",on:{click:function(r){return e.goToKnowledgePage(t.id)}}},[r("SvgIcon",{staticClass:"operate-icon",attrs:{name:"preview-open"}})],1)])})),0)])})),0)])])])}),[],!1,null,"dc1c733a",null).exports},812796:(e,t,r)=>{var i=r(302543);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,n=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(158649),e.exports=["$scope","$window","$http","activityRepository","toastr",function(e,t,r,o,s){e.openLinkInNewTab=e=>{t.open("/course/".concat(e.course_id,"/virtual-experiments/").concat(e.id,"/new-page"),"_blank")},e.openActivity=function(r){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.location.href=i?"/course/".concat(e.course.id,"/learning-activity/full-screen#/").concat(r.id):"/course/".concat(e.course.id,"/learning-activity#/").concat(r.id)};t.addEventListener("message",(function(t){var o,a;i.isEmpty(null===(o=t.data)||void 0===o?void 0:o.uid)||function(t){r.post("/api/virtual-experiments/".concat(e.activity.id,"/score"),t).success((function(e){s.success(e.message)})).error(i.noop)}({uid:t.data.uid,score:t.data.score,lab_report:t.data.labreport,report_part:t.data.reportpart,steps:(a=t.data.steps,i.map(a,(e=>{var t=n(e.split("//"),11);return{number:t[0],title:t[1],start_time:t[2],end_time:t[3],duration:t[4],total_score:t[5],score:t[6],opt_count:t[7],comment:t[8],score_model:t[9],remark:t[10]}})))})}),!1);e.activity||o.loadActivity(e.activityId).then((function(t){e.activity=t})),o.initPublishInfo(e,e.activity)}]},814921:e=>{e.exports=["$http","toastr",function(e,t){return{createSuiteComment(r,i,n,o){var s="/api/video-suites/".concat(r,"/comments");return e.post(s,i).success(t.decorateSuccess(n)).error(t.decorateError(o))},editSuiteComment(r,i,n,o){var s="/api/video-suite/comments/".concat(r);return e.put(s,i).success(t.decorateSuccess(n)).error(t.decorateError(o))},deleteSuiteComment(r,i,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s="/api/video-suite/comments/".concat(r);return o||(s+="?no-intercept=true"),e.delete(s).success(t.decorateSuccess(i)).error(t.decorateError(n))}}}]},850388:(e,t,r)=>{var i=r(248124);e.exports=["$scope","ClassinApi",function(e,t){!function(r){var n=i("#userId").data("id");if(r){var o=r.teaching_unit_id,s=r.id;t.getJoinClassinUrl(o,s,n,(function(t){e.activity.joinUrl=t.url,e.activity.joinMeetingUrl=t.url}))}}(e.activity),e.activity.expired=e.activity.is_closed,e.activity.class_uid=e.activity.data.class_uid,e.activity.joinUrl=""}]},852753:(e,t,r)=>{var i=r(248124),n=r(302543),o=r(756029);function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(714913),r(168763),r(334867),r(754989);var c=r(966491);e.exports=["$rootScope","$scope","$interval","$timeout","activityRepository","videoPlayerService","lessonApi","commentManager","$window",function(e,t,r,a,u,l,d,m,p){var v=0,f=4,h=["main","up","down"];t.commentManager=m,t.videoCtrl={isLoaded:!1,isPlaying:!1,isSliding:!1,isOnVideoUpdate:!1,isBuffering:!1,isGlobalMuted:!1,isCommenting:!1,currentTime:0,duration:0,currentTimeStr:"00:00",durationStr:"00:00",volume:100,inFullScreen:!1,maximizeToWindow:!1,showCommentList:!1},t.comment={};var b=0,y=[],_=null,g=()=>i(".video-wrapper").each((function(e){var t=this;if(n.each(h,(e=>i(t).removeClass(e))),e<h.length)return i(t).addClass(h[e])})),w=()=>k(0),k=function(e){var t=i("#video_"+e).get(0);return t||a((()=>i("#video_"+e).get(0)))},S=function(){var e=w();return(()=>{var t,r=[],n=s(y);try{for(n.s();!(t=n.n()).done;){var o=t.value;i(o).is(i(e))?r.push(void 0):r.push(o.currentTime=e.currentTime)}}catch(e){n.e(e)}finally{n.f()}return r})()},I=e=>y.map((t=>t.volume=e)),C=function(){return t.videoCtrl.inFullScreen=!1,E(),t.$apply()},x=function(e){return t.videoCtrl.currentTimeStr=c.secondsToHms(e.currentTime),t.videoCtrl.durationStr=c.secondsToHms(e.duration),t.$apply()},A=()=>y.map((e=>e.pause())),P=()=>y.map((e=>e.play())),T=()=>n.filter(y,(e=>e.currentTime<e.duration)),R=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=w();if(i.currentTime=e,S(),!r)return A(),t.videoCtrl.isPlaying=!1;var o=T();return n.each(o,(e=>e.play())),o.length>0?t.videoCtrl.isPlaying=!0:void 0},O=function(){if(t.videoCtrl.isLoaded){var e=n.filter(y,(e=>!e.ended&&e.readyState!=v)),r=n.every(e,{readyState:f});if(t.videoCtrl.isBuffering&&r){if(t.videoCtrl.isBuffering=!1,S(),t.videoCtrl.isPlaying)return P()}else if(!t.videoCtrl.isBuffering&&!r)return t.videoCtrl.isBuffering=!0,A()}},E=function(){var e=0;e=t.videoCtrl.inFullScreen?i(window).width():b||_.width();var r=t.selectedVideos.length;3===r?(M(i(".video-wrapper.main video"),e,.67),M(i(".video-wrapper.up video"),e,.33),M(i(".video-wrapper.down video"),e,.33)):2===r?(M(i(".video-wrapper.main video"),e,.5),M(i(".video-wrapper.up video"),e,.5)):M(i(".video-wrapper.main video"),e,1);var n=0;if(t.videoCtrl.maximizeToWindow){var o=_.height(),s=i(".lesson-video-ctrl-container").height();n=(i(window).height()-o-s)/2}return _.css("margin-top",n)},M=function(e,t,r){var n=parseFloat(t*r).toFixed(1),o=parseFloat(t*r/1.7777777777777777).toFixed(1);return i(e).width(n).height(o)},$=function(){n.each(y,(function(e){return i(e).unbind("timeupdate"),i(e).unbind("durationchange"),i(e).on("ended",(function(){if(this.ended=!0,n.every(y,"ended"))return t.videoCtrl.isPlaying=!1}))}));var e=w();return i(e).on("timeupdate",(function(){var e=n.parseInt(this.currentTime);if(t.commentMap[e]&&t.commentManager.registerComment(t.commentMap[e]),t.commentManager.updatePlayerTime(this.currentTime),!t.videoCtrl.isSliding){t.videoCtrl.isOnVideoUpdate=!0;var r=Math.round(100*this.currentTime/this.duration);return i("#video-slider").slider({value:r}),t.videoCtrl.isOnVideoUpdate=!1,x(this),t.videoCtrl.currentTime=this.currentTime}})),t.activity&&c.enableTrack(t,i(e),t.activity,"video"),i(e).on("durationchange",(function(){return x(this),t.videoCtrl.duration=this.duration,t.videoCtrl.isLoaded=!0})),i(".video-wrapper").on("click",(function(){var e,r,n;if(!i(this).hasClass("main"))return function(){if(t.activity){var e,r=s(t.activity.video_suite.videos);try{for(r.s();!(e=r.n()).done;)e.value.hover=!1}catch(e){r.e(e)}finally{r.f()}t.$apply()}}(),e=this,r=i(".video-wrapper.main").attr("class"),n=i(e).attr("class"),i(".video-wrapper.main").attr("class",n),i(e).attr("class",r),E()})),i(window).resize((()=>E())),i(document).bind("fullscreenchange",(function(){if(!document.fullscreenElement)return C()})),i(document).bind("mozfullscreenchange",(function(){if(!document.mozFullScreen)return C()})),i(document).bind("webkitfullscreenchange",(function(){if(!document.webkitIsFullScreen)return C()})),i(document).bind("MSFullscreenChange",(function(){if(!document.msFullscreenElement)return C()})),i(document).bind("keydown",(e=>a((function(){if(t.videoCtrl.maximizeToWindow&&27===e.keyCode)return j()}))))};t.logVideoPlayed=function(r,i,n){var o={start:i,end:n,duration:t.videoCtrl.duration};return u.logActivityRead(r,o,(()=>e.$emit("$refreshPrerequisitesStatus")))},t.initVideos=e=>a((function(){y=n.filter(i("video").toArray(),(e=>e.id.startsWith("video_"))),_=i(".lesson-video-container");for(var r=0;r<t.selectedVideos.length;r++){var o=t.selectedVideos[r];o.isSelected=!0,k(r).muted=o.mute}(g(),$(),E(),t.videoCtrl.currentTime>0)&&(w().currentTime=t.videoCtrl.currentTime,S());if(e)return P(),t.videoCtrl.isPlaying=!0})),t.togglePlay=function(){if(t.videoCtrl.isLoaded)return t.videoCtrl.isPlaying?A():P(),t.videoCtrl.isPlaying=!t.videoCtrl.isPlaying},t.toggleVolume=function(){return t.videoCtrl.isGlobalMuted=!t.videoCtrl.isGlobalMuted,t.videoCtrl.isGlobalMuted?i("#volume-slider").slider("value",0):i("#volume-slider").slider("value",t.videoCtrl.volume),t.videoCtrl.isGlobalMuted},t.secondsToHms=c.secondsToHms;var D=function(e){return t.videoCtrl.maximizeToWindow=e,a((()=>E()))},j=function(){return t.videoCtrl.inFullScreen=!1,document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():D(!1)};t.toggleFullScreen=function(){var e=i(".lesson-player").get(0);return t.videoCtrl.inFullScreen?j():function(e){return t.videoCtrl.inFullScreen=!0,b=_.width(),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():D(!0)}(e)},t.muteVideo=function(e,t){return e.mute=!e.mute,k(t).muted=e.mute},t.downloadVideo=function(e,t){return p.open("/course/".concat(e.course_id,"/lesson/").concat(e.id,"/video/").concat(t.id),"_blank"),null},t.openVideoSourcePopup=function(){return i("#select-video-sources-popup").foundation("reveal","open",{multiple_opened:!0}),A(),t.videoCtrl.isPlaying=!1};var U=function(){return t.videoCtrl.isCommenting=!1,t.videoCtrl.playerState&&t.togglePlay(),t.comment={}};t.saveComment=function(){var e=t.comment.id?t.comment.comment_at:t.videoCtrl.currentTime,r={content:t.comment.content,comment_at:String(e)};return t.comment.id?d.editSuiteComment(t.comment.id,r,(function(e){var r,i;return t.activity&&(r=e,i=t.activity.video_suite.comments,n.find(i,(e=>r.id===e.id)).content=r.content),U()}),(function(){})):d.createSuiteComment(t.activity.video_suite.id,r,(function(e){var r,i;return t.commentManager.registerComment(e),r=e,i=n.parseInt(r.comment_at),t.commentMap[i]=r,t.activity&&function(e,t){var r=n.findIndex(t,(t=>n.parseInt(e.comment_at)===n.parseInt(t.comment_at)));if(r>=0){var i=t[r],o=((e,t,r)=>()=>r.splice(e,1,t))(r,e,t);return d.deleteSuiteComment(i.id,o,(function(){}),!1)}var s=n.sortedIndex(t,e,(e=>parseFloat(e.comment_at)));t.splice(s,0,e)}(e,t.activity.video_suite.comments),U()}),(function(){}))},t.editComment=function(e){t.videoCtrl.playerState=t.videoCtrl.isPlaying;if(R(e.comment_at,!1),t.comment=o.copy(e),!t.videoCtrl.isCommenting)return t.toggleComment(t.videoCtrl.playerState)},t.jumpFromComment=function(e){return t.videoCtrl.isCommenting=!1,t.comment.content="",R(e.comment_at)},t.commentContentExceeded=function(e){if(e){var r=t.comment.content.substr(0,t.maxPostContentLength);return t.comment.content=r}},t.toggleComment=function(e){return t.videoCtrl.isCommenting=!t.videoCtrl.isCommenting,t.videoCtrl.isCommenting?(e||(t.videoCtrl.playerState=t.videoCtrl.isPlaying),t.videoCtrl.isPlaying?t.togglePlay():void 0):(t.videoCtrl.playerState&&t.togglePlay(),t.comment={})},t.toggleCommentList=()=>t.videoCtrl.showCommentList=!t.videoCtrl.showCommentList,t.closeCommentList=()=>t.videoCtrl.showCommentList=!1,t.deleteSuiteComment=function(e){return d.deleteSuiteComment(e.id,(function(){n.remove(t.activity.video_suite.comments,(t=>t.id===e.id));var r=n.parseInt(e.comment_at);return delete t.commentMap["".concat(r)],t.commentManager.deleteComment(e.id)}),(function(){}))},t.$on("$destroy",(()=>n.each(y,(function(e){return e.pause(),e.src=""}))));return l.register((function(e){return t.selectedVideos=e||(t.availableVideos?t.availableVideos.slice(0,3):void 0)||[],t.commentMap={},t.maxCommentContentLength=140,t.activity&&n.each(t.activity.video_suite.comments,(function(e){var r=n.parseInt(e.comment_at);return t.commentMap[r]=e})),i("#video-slider").slider({range:"max",value:0,min:0,max:100,slide:()=>t.videoCtrl.isSliding=!0,change(){if(t.videoCtrl.isLoaded&&!t.videoCtrl.isOnVideoUpdate){var e=i(this).slider("value"),r=parseInt(e/100*t.videoCtrl.duration);return R(r),t.commentManager.comment&&(t.commentManager.hideDisplayedComment(),t.videoCtrl.isCommenting&&U()),t.videoCtrl.isSliding=!1}}}),i("#volume-slider").slider({range:"max",value:t.videoCtrl.volume,min:0,max:100,change(){var e=i(this).slider("value");return t.videoCtrl.isGlobalMuted&&e>0&&(t.videoCtrl.isGlobalMuted=!1),t.videoCtrl.isGlobalMuted?I(0):(t.videoCtrl.volume=e,I(t.videoCtrl.volume/100))}}),r(O,500),t.initVideos()}),(function(){return t.videoCtrl.currentTimeStr="00:00",t.videoCtrl.currentTime=0,t.videoCtrl.isPlaying=!1,t.$apply()})),t.$emit("playerRegistered")}]},852950:(e,t,r)=>{var i=r(302543),n=r(793110);function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(700533),r(334867),e.exports=["$scope","$http",function(e,t){e.currentGroup={users:[],usersCount:0,currentUserIndex:0,currentUser:void 0},e.changeGroupUserNavigation=function(t){if(null!=t){e.currentGroup.currentUserIndex=parseInt(t),e.currentGroup.currentUser=e.currentGroup.users[t].student,e.receivedScores=i.filter(e.intraScores,(t=>t.submitter_id===e.currentGroup.currentUser.id&&t.score));var r=i.filter(e.receivedScores,(e=>e.score));if(i.size(r)>0){var o=i.reduce(r,((e,t)=>e.plus(new n(t.score))),new n(0));return e.currentGroup.currentUser.inAverageScore=parseFloat(o/i.size(r)).toFixed(1)}}},e.getReceivedScoreFrom=function(t){var r=i.find(e.receivedScores,{reviewer_id:t});if(null!=r)return r.score},e.getReceivedRubricConditionScoreFrom=function(t,r){var n=i.find(e.receivedScores,{reviewer_id:t});if(n&&n.rubric_score){var o=i.find(n.rubric_score,{name:r});if(null!=o)return o.score}},e.getReceivedCommentFrom=function(t){var r=i.find(e.receivedScores,{reviewer_id:t});if(null!=r)return r.comment},e.getReceivedTime=function(t){var r=i.find(e.receivedScores,{reviewer_id:t});return r?r.updated_at||r.created_at:""};e.$watch("navigation.currentItem",(function(e,t){if(e!==t&&!i.isNull(e))return r()}));var r=function(){var r,n;if(e.currentGroup.users=e.navigation.currentItem.students,e.currentGroup.usersCount=e.navigation.currentItem.students.length,0!==e.currentGroup.usersCount)return(()=>{var t,r=[],n=o(e.currentGroup.users);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.student){var a,c,u,l=i.filter([null===(a=s.student.department)||void 0===a?void 0:a.name,null===(c=s.student.klass)||void 0===c?void 0:c.name,null===(u=s.student.grade)||void 0===u?void 0:u.name]);s.student.info=l.join(""),s.student.infoTips=l.join("\n"),r.push(s.user_no=s.student.user_no)}else r.push(void 0)}}catch(e){n.e(e)}finally{n.f()}})(),r=e.navigation.homework.id,n=e.navigation.currentItem.group.id,t.get("/api/activities/".concat(r,"/group/").concat(n,"/intra_submission")).success((function(t){return e.intraScores=t.list,e.changeGroupUserNavigation(0)})).error((function(){}))};return r()}]},852976:(e,t,r)=>{var i=r(302543);e.exports=["$scope","GroupInterScoreHelper",function(e,t){var r=function(){return e.homework.submit_by_group?e.interScoreHelper=new t(e.navigation.currentItem.submission.inter_scores,e.navigationData.students,e.navigationData.groups):i.each(e.navigation.currentItem.submission.inter_scores,(t=>t.reviewer=i.find(e.navigationData.students,(e=>e.id===t.reviewer_id)))),e.currentItem.submissions.map((t=>t.inter_scores=e.currentItem.submissions[0].inter_scores))};return r(),e.$watch("navigation.currentItem",(function(e,t){if(e!==t&&!i.isNull(e))return r()}))}]},859862:(e,t,r)=>{var i=r(248124),n=r(302543);r(215195),r(269193),r(850785);var o=r(592207);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,n=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function c(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function s(e){c(o,i,n,s,a,"next",e)}function a(e){c(o,i,n,s,a,"throw",e)}s(void 0)}))}}r(207452);var l=r(966491);e.exports=["$scope","$routeParams","$timeout","statRepository","classroomRepository","filter","$q",function(e,t,r,a,c,d,m){var p,v,f=null===(p=window.globalData)||void 0===p||null===(v=p.course)||void 0===v?void 0:v.orgId,h=i("#courseId").val();e.courseId=h,e.classroomId=t.classroomId||i("#classroomId").val(),e.condition={org_id:null,department_ids:[],grade_ids:[],class_ids:[],section_ids:[],statuses:[],keyword:"",learning_center:!0},e.preOrgId=null,e.vueParam={disabled:!0,departments:[]},e.vueMethods={updateConditionDepartmentIds:t=>{r((()=>{e.condition.department_ids=t,e.search()}))}},e.elementId="#org-select-open-university",e.noStatusFilter=!0,e.noSort=!0,e.pagedStudentIds=[],e.groups=[],e.finalCalculate={multiplier:1,plusScore:0},e.pageSize=100,e.loading=!1;var b=function(t){e.pages=t.pages,e.pageIndex=t.page,e.result=t};e.changePage=function(){var e=u(o.mark((function e(t){var r;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:r=e.sent,b(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var y=function(){var t=u(o.mark((function t(r){var i;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.pageIndex=r,t.next=3,a.initPagedStudents(e);case 3:return i=t.sent,e.filteredExaminees=i.enrollments,e.pagedStudentIds=i.enrollments.map((e=>e.user_id)),t.next=8,k();case 8:return t.abrupt("return",i);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(t){return e.examinees=n.map(t,(function(e){return e.studentInfo=[e.department.name,e.grade.name,e.klass.name].join(""),e.waitingForScore=e.submitted&&null===e.score,e.score=l.formatFloat(e.score),e.status=e.submitted?1:2,e})),e.pagedExaminees=e.examinees,e.examinees};e.ui.containsSubmissionNoScore=e=>n.some(e.submissions,(e=>null===e.score));e.search=function(){e.vueParam.disabled=Boolean(!e.condition.org_id);var t=Number(e.condition.org_id),r=e.preOrgId;return e.condition&&null!==e.condition.org_id?t!==r&&(S(t),e.preOrgId=t,e.condition.department_ids=[],e.condition.grade_ids=[],e.condition.class_ids=[],e.condition.section_ids=[],e.condition.keyword="",e.condition.statuses=[],e.vueParam.departments=[],e.$broadcast("refreshTreeViewModel")):e.preOrgId&&(e.preOrgId=null,d.clearFilter(e)),e.changePage(1)};var g,w,k=function(){var t=u(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.pagedStudentIds.length){t.next=4;break}examinees=[],t.next=7;break;case 4:return t.next=6,c.initExaminees(e.classroomId,!0,e.pagedStudentIds,!0);case 6:examinees=t.sent;case 7:_(examinees);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();g=c.initClassroom(e.classroomId),w=c.initSubjectsRule(e.classroomId),m.all([g,w]).then((function(){var t=Array.from(arguments.length<=0?void 0:arguments[0]),r=s(t,2),i=r[0],n=r[1];return e.subjects_rule=n,e.classroom=i,e.classroom.isQuizPublic=e.subjects_rule.public,e.classroom.isQuizControlBySubject=e.subjects_rule.subject_by_subject_control}));var S=function(t){d.clearFilter(e),d.initOrgDepartments(e,t).then((()=>{e.vueParam.departments=n.cloneDeep(e.departments)})),d.initCourseOrgs(e,h,"student")};return S(f),e.changePage(1)}]},878850:(e,t,r)=>{var i=r(302543),n=r(793110);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,n=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(215195),r(700533),e.exports=["$rootScope","$scope","$routeParams","$q","ExamHelper","classroomRepository",function(e,t,r,s,a,c){var u=r.classroomId;t.saveSubjectsToLib=()=>e.$broadcast("saveSubjectsToLib",{classroomId:u,subjectCount:t.subjects.length});var l,d;return t.showSubjectsSummary=(e,t,r)=>a.getSubjectsSummary(e,t,r),l=c.initClassroom(u),d=c.initSubjectsRule(u),s.all([l,d]).then((function(){var e=Array.from(arguments.length<=0?void 0:arguments[0]),r=o(e,2),i=r[0],n=r[1];return t.subjects_rule=n,t.classroom=i,t.classroom.isQuizPublic=t.subjects_rule.public,t.classroom.isQuizControlBySubject=t.subjects_rule.subject_by_subject_control})),c.initSubjects(u).then((function(e){return t.subjects=e.subjects,t.groupedSubjects=a.groupSubjects(e.subjects),t.totalScore=i.reduce(e.subjects,((e,t)=>e.plus(new n(t.point))),new n(0))}))}]},885984:(e,t,r)=>{var i=r(795093);e.exports=["$scope","activityRepository",function(e,t){e.recordings=[];!function(){e.activity.zoomUrl=e.activity.data.meeting_id?"/course/".concat(e.activity.course_id,"/zoom/").concat(e.activity.id):"";var r=i(e.activity.start_time).add(e.activity.data.duration,"minutes");e.activity.meetingClosed=r<i(),e.activity.expired=e.activity.is_closed,e.activity.displayUrl="".concat(e.zoomMeetingUrl,"/j/").concat(e.activity.data.meeting_id),e.activity.data.encrypted_password&&(e.activity.displayUrl="".concat(e.zoomMeetingUrl,"/j/").concat(e.activity.data.meeting_id,"?pwd=").concat(e.activity.data.encrypted_password)),t.initPublishInfo(e,e.activity)}()}]},907808:(e,t,r)=>{var i=r(248124),n=r(117127);e.exports=["$scope",function(e){if(e.standbyVisitDuration){var t=parseInt(e.standbyVisitDuration),r=0,o=null,s=()=>{!0!==window.statisticsSettings.showIdleWarning&&(r+=60),r===60*t&&st.trackVisit(),r>=60*window.statisticsSettings.idleThreshold-60&&null===o&&(o=st.visitStartFrom),!0===window.statisticsSettings.showIdleWarning&&0!==r&&"open"!==i.cookie("userOpenLink")&&function(){r+=60;var e=Math.max(parseInt((Date.now()-o)/1e3,10),0),i=e-60*window.statisticsSettings.idleThreshold;e>=60*t&&(i+=60*t),i&&i>0?st.trackVisit(autoInterval=null,i):st.visitStartFrom=Date.now(),r=0,o=null}()};e.markUserOpenLink=function(){i.cookie("userOpenLink","open",{expires:1})};setInterval(s,6e4),n(i.removeCookie("userOpenLink"))}}]},921443:(e,t,r)=>{var i=r(302543),n=r(795093);r(700533),r(269193),r(979073),r(906048),r(43148),r(678636),r(640173),r(158649),r(658379);var o=r(592207);function s(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(i,n)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function a(e){s(o,i,n,a,c,"next",e)}function c(e){s(o,i,n,a,c,"throw",e)}a(void 0)}))}}r(207452);var c=r(571478),u=r(601341),l=r(951708),d=l.getActivityAiQuizzes,m=l.getAirActivityEnableMap;e.exports=function(e,t,r,s,l){var p=function(t){if(null!=t&&t.errors){e.errors=t.errors,e.errors.completion_criterion&&e.errors.completion_criterion.value&&(e.errors.completion_criterion_value=e.errors.completion_criterion.value,delete e.errors.completion_criterion);var r=t.errors.syllabus_id||t.errors.module_id;r&&(e.errors.chapter_id=r)}if(A.hide(),e.handleErrors)return e.handleErrors()},v=e=>e.activities=i.sortBy(e.activities,["sort","id"]),f=m(),h=e=>e.directActivities=i.sortBy(e.directActivities,["sort","id"]),b=function(){var e=a(o.mark((function e(r){var n,s;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.find(t.modules,{id:r.module_id}),t.activities=t.activities||[],t.activities.push(r),n){e.next=5;break}return e.abrupt("return");case 5:if(n.activities=n.activities||[],n.activities.push(r),!r.syllabus_id){e.next=14;break}return(s=i.find(n.syllabuses,{id:r.syllabus_id})).activities=s.activities||[],s.activities.push(r),e.abrupt("return",v(s));case 14:return n.directActivities=n.directActivities||[],n.directActivities.push(r),e.abrupt("return",h(n));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){["material","online_video","homework"].includes(e.type)&&e.cc_license_references&&e.cc_license_references.length>0&&e.uploads&&e.uploads.length>0&&e.cc_license_references.forEach((t=>{e.uploads.forEach((e=>{e.id===t.upload_id&&(e.cc_license_code=t.cc_license_code,e.cc_license_link=t.cc_license_link,e.cc_license_name=t.cc_license_name,e.cc_license_description=t.cc_license_description)}))}))},_=function(t){return["material","online_video","interaction","web_link","page","homework","forum"].includes(t.type)&&statistics.track({activity_id:t.id,activity_type:t.type,action:statistics.enums.Action.create,mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web}),A.hide(),y(t),b(t),"forum"===t.type&&e.$emit("forumCreated",t),"homework"===t.type&&e.$emit("homeworkCreated"),"interaction"===t.type&&e.$emit("interactionCreated",t),"questionnaire"===t.type&&e.$emit("questionnaireCreated",t),P.includes(t.type)&&e.$emit("coursewareCreated",t),console.log(t.type),"virtual_experiment"===t.type&&e.$emit("virtualExperimentCreated",t),"welink"===t.type?e.openActivity(t):e.close()},g=function(){var n=a(o.mark((function n(s){return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A.hide(),r.removeActivityFromCourse(s.id,t,{deleteOriginal:!0}),y(s),n.next=5,b(s);case 5:e.$emit("dependantsUpdated",s),"forum"===s.type&&e.$emit("forumUpdated",s),"homework"===s.type&&e.$emit("homeworkUpdated",s),P.includes(s.type)&&e.$emit("coursewareUpdated",s),"questionnaire"===s.type&&e.$emit("questionnaireUpdated",s),"virtual_experiment"===s.type&&e.$emit("virtualExperimentUpdated",s),e.prerequisites&&e.prerequisites.length>0&&13===t.course_type&&window.dispatchEvent(new CustomEvent("refresh-all-items-sub-count",{detail:{refreshAllActivities:!0}})),e.close(),i.includes(l.location.pathname,"learning-activity")&&l.location.reload();case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(t){return e.completionCriteria=t.completion_criteria,e.completionCriteriaOptions=i.filter(e.completionCriteria,(e=>"none"!==e.completion_criterion_type)),e.selectedCriterion=i.find(e.completionCriteria,{is_default:!0}),e.selectedCompletionCriterion={id:e.selectedCriterion.id.toString()},e.hasCompletionCriterion=t.has_completion_criterion,e.refreshSelectedCriterion()},k=()=>e.hasCompletionCriterion=!1,S=t=>e.groupSets=t.group_sets,I=()=>e.groupSets=[],C=t=>e.prerequisites=i.reduce(t.prerequisites,(function(t,r){var n=i.find(e.preActivities,{key:r.key});return n&&t.push({key:r.key,activity:n}),t}),[]);e.refreshSelectedCriterion=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==t&&(e.hasCompletionCriterion=t),e.hasCompletionCriterion?e.selectedCriterion=i.find(e.completionCriteria,{id:parseInt(e.selectedCompletionCriterion.id)}):e.selectedCriterion=i.find(e.completionCriteria,{completion_criterion_type:"none"})},e.refreshSelectedUsingPhase=function(t){e.usingPhase=t},e.refreshActivityTeachingModel=function(t){e.activityTeachingModel=t},e.reviseError=function(){if(e.errors.completion_criterion_value)return delete e.errors.completion_criterion_value},e.addPrerequisite=function(){return e.prerequisites.push({key:""})},e.deletePrerequisite=t=>i.pull(e.prerequisites,t),e.findActivityFor=t=>t.activity=i.find(e.preActivities,{key:t.key});var x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=function(r){e.hasDependents=r.has_dependents,e.preActivities=s.getPreActivities(t,r.unavailable_prerequisites),e.hasPreActivities=i.some(e.preActivities,(e=>"activity"===e.optionType)),C(n)},a=function(){e.preActivities=s.getPreActivities(t,[]),e.hasPreActivities=i.some(e.preActivities,(e=>"activity"===e.optionType)),C(n)};if(n&&n.module_id>0)return r.getUnavailablePrerequisites(n,o,a);n||(e.preActivities=s.getPreActivities(t,[]),e.hasPreActivities=i.some(e.preActivities,(e=>"activity"===e.optionType)))},A=c(e);e.errors={};var P=["web_link","material","online_video","interaction","slide","page","scorm","lesson"],T=function(){if(e.moduleStartTime=null,e.moduleEndTime=null,e.startActivityType="now",(null!=e.chapter?e.chapter.id:void 0)&&e.chapter.id.match("^module")){var t=i.find(e.modulesAndSyllabuses,(t=>e.chapter&&t.value===e.chapter.id)),r=/\d{4}-\d{1,2}-\d{1,2}\s\d{1,2}:\d{1,2}-\d{1,2}:\d{1,2}/g;if(t&&(null!=t.name?t.name.match(r):void 0)){var n=t.name.match(r)[0],o=n.split(" ")[0].replace(new RegExp(/-/gm),"/"),s=n.split(" ")[1].split("-");return e.moduleStartTime=new Date("".concat(o," ").concat(s[0])),e.moduleEndTime=new Date("".concat(o," ").concat(s[1]))}}};e.changeAutoStartType=function(){return"before"===e.ui.autoStartType?e.autoStartTime=e.currentTime:"during"===e.ui.autoStartType?e.autoStartTime=e.moduleStartTime:"after"===e.ui.autoStartType?e.autoStartTime=e.moduleEndTime:void 0},e.changeModule=function(){"SHTVU"===e.deliveryOrg&&T()};var R=function(){var t=t=>{var r=t.detail;e.aiSetting=r};l.addEventListener("aiActivitySettingChange",t),e.$on("$destroy",(()=>{l.removeEventListener("aiActivitySettingChange",t)}))},O=function(){var t=a(o.mark((function t(r){var i,n,s;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!0===f.get(e.currentActivity.type),s=null==r,n){t.next=4;break}return t.abrupt("return");case 4:if(!s){t.next=7;break}return n&&e.hasAiAbility?e.aiSetting={submitTimes:1,nonCustom:!1,announceAnswerAndExplanation:!1}:e.aiSetting=null,t.abrupt("return");case 7:if(!n||!e.hasAiAbility){t.next=10;break}return e.aiSetting={submitTimes:r.submit_times,nonCustom:r.submit_times>1,announceAnswerAndExplanation:r.announce_answer_and_explanation},t.abrupt("return");case 10:return t.next=12,d(r.id);case 12:if(t.t1=i=t.sent,t.t0=null!==t.t1,!t.t0){t.next=16;break}t.t0=void 0!==i;case 16:if(!t.t0){t.next=20;break}t.t2=i,t.next=21;break;case 20:t.t2=[];case 21:if(!t.t2.length){t.next=25;break}return e.aiSetting={submitTimes:r.submit_times,nonCustom:r.submit_times>1,announceAnswerAndExplanation:r.announce_answer_and_explanation},t.abrupt("return");case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var e=a(o.mark((function e(){var t,r=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:null,O(t),R();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{initActivity:function(){e.modulesAndSyllabuses=s.modulesAndSyllabuses(t),T(),e.startActivityType="now",e.ui.autoStartType="before",e.currentTime=new Date,e.autoStartTime=e.currentTime,e.effective_now=!0,e.never_expire=!0,e.showStart=!1,e.inPopup=!0,e.hasDependents=!1,r.getCompletionCriteriaForType(e.currentActivity.type,t.id,w,k),e.usingPhase="unspecified",e.activityTeachingModel="online",["homework","forum"].includes(e.currentActivity.type)&&r.getGroupSets(t.id,S,I),e.isCourseInCheckpointMode&&(x(),e.prerequisites=[]),r.initPublishInfo(e,e.currentActivity),u(e.currentActivity),E()},bindActivityForEdit(i){if(r.setPublishInfoForActivity(i),r.getActivityCompletionCriteria(i,t.id,w,k),["homework","forum"].includes(i.type)&&r.getGroupSets(t.id,S,I),e.inPopup=!0,e.hasDependents=!1,e.modulesAndSyllabuses=s.modulesAndSyllabuses(t),e.startActivityType=null,e.autoStartTime=null,e.effective_now=!i.start_time,e.never_expire=!i.end_time,e.showStart=i.start_time,e.usingPhase=i.using_phase?i.using_phase:"unspecified",e.activityTeachingModel=i.teaching_model?i.teaching_model:"online",E(i),e.isCourseInCheckpointMode)return x(i)},saveActivity(o){A.show(),"now"===e.startActivityType?delete o.start_time:"auto"===e.startActivityType&&(o.start_time=n.utc(e.autoStartTime).format("YYYY-MM-DD")+"T"+n.utc(e.autoStartTime).format("HH:mm:ss")+"Z"),""===o.start_time&&delete o.start_time,!e.never_expire&&o.end_time||delete o.end_time;var s=i.find(e.modulesAndSyllabuses,(t=>e.chapter&&t.value===e.chapter.id));return s?(o.syllabus_id=s.syllabusId,o.module_id=s.moduleId):(delete o.syllabus_id,delete o.module_id),o.completion_criterion={activity_completion_criterion_type_id:e.selectedCriterion?e.selectedCriterion.id:0,value:e.selectedCriterion?e.selectedCriterion.value:0},o.using_phase=e.usingPhase,o.teaching_model=e.activityTeachingModel,o.prerequisites=i.reduce(e.prerequisites,(function(e,t){return t.activity&&!i.find(e,{activity_id:t.activity.id,activity_type:t.activity.type})&&e.push({activity_id:t.activity.id,activity_type:t.activity.type}),e}),[]),function(t){if(f.has(t.type)){var r=!0===f.get(t.type);e.aiSetting?(t.submit_times=Number(e.aiSetting.submitTimes),t.announce_answer_and_explanation=e.aiSetting.announceAnswerAndExplanation):r&&(t.submit_times=t.submit_times||1,t.announce_answer_and_explanation=t.announce_answer_and_explanation||!1)}}(o),o.id?(delete o.data,r.saveActivity(t.id,o,g,p)):(function(t){if(t.submit_by_group&&!t.group_set_id&&e.groupSets.length)t.group_set_id=e.groupSets[0].id}(o),r.saveActivity(t.id,o,_,p))}}}},929119:(e,t,r)=>{r.d(t,{w:()=>n});r(979073),r(906048),r(640173);var i=r(962893).default,n=function(e,t){var r=e;return t&&(r=e.replace(new RegExp(t,"g"),"<mark>".concat(t,"</mark>"))),i.prototype.$sanitize(r,{allowedTags:["mark"]})}},935886:(e,t,r)=>{var i=r(248124),n=r(756029),o=r(287092),s=r(302543);r(269193),r(158649);r(757334);e.exports=["$scope","activityRepository","$rootScope",function(e,t,a){Promise.all([r.e(19186),r.e(47303)]).then(r.bind(r,619186)),e.ui={inEditingMode:!1},e.activity.content=e.activity.data.content,e.activity.libraryResourceItems=e.activity.data.library_resource_items||[],e.ui.onlyPreviewInIframe="moodle"===e.activity.imported_from||"common-cartridge"===e.activity.imported_from,e.ui.onlyPreviewInIframe&&(e.iframeHeight=i(window).height()-i("#previewInIframe").offset().top-120),e.enterEditingMode=()=>e.ui.inEditingMode=!0,e.$watch((()=>e.activity.data.content),(()=>{e.activity.content||e.ui.inEditingMode||(e.activity.content=e.activity.data.content)})),e.save=function(){var r=n.copy(e.activity);return r.completion_criterion={activity_completion_criterion_type_id:0,value:0},delete r.data,0===r.syllabus_id&&delete r.syllabus_id,0===r.module_id&&delete r.module_id,t.saveActivity(e.course.id,r,(function(){return e.activity.data.content=e.activity.content,e.ui.inEditingMode=!1}),(function(t){if(t)return e.errors=t.errors}))},e.cancel=function(){return e.activity.content=e.activity.data.content,e.ui.inEditingMode=!1};var c;return c=o.guard(null!=e.activity?e.activity.uploads:void 0,(e=>e[0])),a.goBackTrack=()=>{return statistics.track((t=statistics.enums.CourseWareAction.close,r={activity_id:e.activity.id,activity_type:"page",mode:statistics.enums.Mode.normal,channel:statistics.enums.Channel.web,action:t},c&&(r=s.merge(r,{sub_type:c.name.split(".").pop(),sub_id:c.id})),r));var t,r}}]},936133:e=>{e.exports=["$timeout",function(e){var t=t=>e((()=>t.show=!1),5e3);return new class{constructor(){this.preCommentId=null}registerComment(e){return this.comment=e,this.comment.show=!0}updatePlayerTime(e){if(this.comment&&this.comment.comment_at!==e)return this.comment.id!==this.preCommentId&&(this.preCommentId=this.comment.id,t(this.comment)),this.comment.id===this.preCommentId&&this.comment.show?t(this.comment):void 0}hideDisplayedComment(){return this.comment.show=!1}deleteComment(e){if(this.comment&&this.comment.id===e)return delete this.comment}}}]},940688:e=>{e.exports=["$scope",function(e){var t;e.activity.joinMeetingUrl=(t=e.activity)&&t.data?t.data.join_url:"",e.activity.expired=e.activity.is_closed,e.activity&&e.activity.data&&(e.activity.meeting_code=e.activity.data.meeting_code)}]},948921:(e,t,r)=>{var i=r(302543),n=r(248124);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(269193);var c=r(966491),u=r(795093);e.exports=["$scope","toastr","$http",function(e,t,o){var a,l;e.popupState={},e.tabs={active:"instructorTab"},e.changeTab=function(t){e.tabs.active!==t&&(e.tabs.active=t)},e.loadComponents=()=>{Promise.resolve().then(r.bind(r,678264))},e.currentUpload={},e.reset=()=>{e.popupState.popupOpened=!1,e.currentUpload={}},e.isAnnounceMark=void 0===e.homework.data.is_announce_mark||e.homework.data.is_announce_mark,e.isNewMarkToggleOpen=null===(a=window.featureToggles)||void 0===a?void 0:a.homeworkMarkNew,e.isShowComment=()=>{var t,r;return e.isNewMarkToggleOpen?e.isAnnounceMark&&(null===(t=e.currentItem.submission)||void 0===t?void 0:t.instructor_comment):null===(r=e.currentItem.submission)||void 0===r?void 0:r.instructor_comment},e.isShowAttach=()=>{var t,r,i,n,o,s;return e.isNewMarkToggleOpen?e.isAnnounceMark&&(null===(t=e.currentItem.submission)||void 0===t||null===(r=t.submission_correct)||void 0===r||null===(i=r.uploads)||void 0===i?void 0:i.length):null===(n=e.currentItem.submission)||void 0===n||null===(o=n.submission_correct)||void 0===o||null===(s=o.uploads)||void 0===s?void 0:s.length},e.submissionId=null===(l=e.currentItem.submission)||void 0===l?void 0:l.id;e.$watch("currentItem.submission.id",((r,n)=>{var a;(a=r)&&o.get("/api/submissions/".concat(a,"/marked_attachments")).success((t=>{if(e.attachments=i.map(t.marked_attachment_infos,(e=>{var t=s({},e.origin_upload);return t.isMarked=!i.isEmpty(e.marked_attachment),t.marked_attachment=e.marked_attachment,t})),!i.isEmpty(t.text_marked_attachment)){var r={id:-1,name:"".concat(e.$t("homework.uploadName"),"(").concat(u(e.currentItem.submission.created_at).format("YYYYMMDDHHmmss"),")"),submissionId:e.currentItem.submission.id,source:"auto-generated-pdf",type:"document",marked_attachment:t.text_marked_attachment};e.currentItem.submission.uploads.unshift(r),e.attachments.push({upload:r,isMarked:!0})}})).error((e=>{t.error(e.message)}))})),e.canCheckMarked=t=>{var r=i.find(e.attachments,(e=>e.upload.id===t));if(!r)return!1;var n=c.canEditByPdfEditor(r.upload);return e.isNewMarkToggleOpen?e.isAnnounceMark&&r.isMarked:n&&r.isMarked},e.openMarkedDetail=t=>{e.currentUpload=s(s({},i.find(e.attachments,(e=>e.upload.id===t.id))),t),n("#preview-homework-marked").foundation("reveal","open")},e.previewHomeworkSubmission=(t,r,i)=>{e.canCheckMarked(r.id)?e.openMarkedDetail(r):n("#file-previewer").foundation("reveal","open"),e.downloadBlob(t,r,i)},n(document).on("open.fndtn.reveal","#show-score",(()=>{e.popupState.popupOpened=!0,e.tabs.active=e.activeTab}))}]},959906:(e,t,r)=>{var i=r(302543);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,n=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}r(215195),r(210557),r(850785),e.exports=["$scope","interactionRepository","$q","modelHelper","filter","$filter",function(e,t,r,o,s,a){e.ui={predicate:"",reverse:!1},e.changeSort=function(t){return t!==e.ui.predicate?(e.ui.predicate=t,e.ui.reverse=!1):e.ui.reverse=!e.ui.reverse,c()};var c=function(){var t=e.ui.reverse?"-":"",r="".concat(t).concat(e.ui.predicate),i=[r];return"score"===e.ui.predicate&&(i=["-submitted",r]),e.filteredExaminees=a("orderBy")(e.filteredExaminees,i)};e.condition={department_ids:[],grade_ids:[],class_ids:[],statuses:[],keyword:""},e.search=()=>e.filteredExaminees=i.filter(e.examinees,(t=>s.filterEnrollments(e,t)));var u,l;return u=t.initSubmissions(e.activity.id),l=t.initStudents(e.activity.course_id,!0),r.all([u,l]).then((function(){var t=Array.from(arguments.length<=0?void 0:arguments[0]),r=n(t,2),a=r[0],c=r[1];return i.each(c,(function(e){return e.submission=i.find(a,{user_id:e.id}),e.score=e.submission?e.submission.score:null,e.belongTo=o.getBelongTo(e),e.submitted=Boolean(e.submission&&"finished"===e.submission.status),e.status=e.submitted?1:2,!0})),e.examinees=c,e.filteredExaminees=c,s.initDepartmentsInfoForEnrollments(e,c)}))}]},969904:(e,t,r)=>{var i=r(302543);r(566117);e.exports=["$scope","modelHelper","activityRepository",function(e,t,r){var n=t.addLearningActivityRead,o=t.isActivityRead;e.logMicrosoftTeamsMeetingRead=function(){var s;if("join"===(null===(s=e.activity)||void 0===s?void 0:s.completion_criterion_key)){return r.logActivityRead(e.activity.id,{},(function(){return o(e.activitiesRead,e.activity)||n(e.activitiesRead,e.activity.id),t.refreshPrerequisitesStatus(e.activity,e,!0,e.completedInfo[e.activity.type])}),i.noop())}};var s;e.activity.joinMeetingUrl=(s=e.activity)&&s.data&&s.data.meeting&&s.data.meeting.join_web_url,e.activity.expired=e.activity.is_closed,r.initPublishInfo(e,e.activity)}]},985488:(e,t,r)=>{var i=r(248124),n=r(571478);e.exports=["$rootScope","$scope","$http","toastr",function(e,t,r,o){var s=n(t),a="setSameScore",c={setSameScore:e=>"/api/courses/activities/".concat(e,"/submissions"),setSameScoreAsync:e=>"/api/courses/activities/".concat(e,"/submissions-async")},u=()=>{t.score="",t.comment="",t.currentHomework=null,t.targetIds=[],t.shouldAsync=!1},l=()=>t.currentHomework&&t.currentHomework.id;t.isGroupHomework=()=>t.currentHomework&&t.currentHomework.submit_by_group,t.targetsLength=()=>t.targetIds.length,t.hasTargets=()=>t.targetsLength()>0,t.loading=!1,e.$on("".concat(a,"Init"),((e,r,i,n)=>{t.currentHomework=r,t.targetIds=i,t.shouldAsync=n})),t.clear=()=>{u()},t.save=()=>{var e=function(e){s.hide(),t.loading=!1,i("#".concat("set-same-score-submissions-popup")).foundation("reveal","close"),u(),t.$emit("".concat(a,"NotifySend")),o.success(e.message)},n=function(e){s.hide(),t.loading=!1,e.message?o.error(e.message):t.errors=e.errors};if(!t.loading){t.loading=!0,s.show();var d={score:t.score,comment:t.comment,target_ids:t.targetIds};t.shouldAsync?r.put(c.setSameScoreAsync(l()),d).success(e).error(n):r.put(c.setSameScore(l()),d).success(e).error(n)}},u()}]},989508:e=>{e.exports=["$scope","$routeParams","homeworkRepository",function(e,t,r){return e.homeworkId=t.activityId,e.logType="remind_homework",e.initLogs=function(t){return e.logType=t,r.loadLogsByType(e.homeworkId,t).then((t=>e.logs=t))},e.initLogs(e.logType)}]}}]);
