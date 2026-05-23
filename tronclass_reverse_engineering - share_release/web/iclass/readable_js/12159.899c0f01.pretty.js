(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    12159
  ], {
    33400:(e, t, r)=>{
      r.d(t, {
        A:()=>i
      });
      var n=r(595738), o=r(945208), a=r(790965);
      const s=(0, n.pM)({
        name:"Avatar", props:{
          user:{
            type:Object, required:!0
          }
        }, setup:function(e){
          var t=(0, n.EW)((function(){
            return e.user.avatarBigUrl||e.user.avatarSmallUrl||a
          }));
          return{
            avatar:o.default, imgUrl:t
          }
        }
      });
      const i=(0, r(514486).A)(s, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"wgAvatar"
        }, [
          e.user.avatarBigUrl||e.user.avatarSmallUrl?r("img", {
            attrs:{
              src:e.imgUrl
            }
          }):r("svg", {
            staticClass:"avatar-svg", attrs:{
              viewBox:e.avatar.viewBox
            }
          }, [
            r("use", {
              attrs:{
                "xlink:href":"#"+e.avatar.id
              }
            })
          ])
        ])
      }), [
      ], !1, null, null, null).exports
    }, 86023:(e, t, r)=>{
      r.d(t, {
        A:()=>c
      });
      r(169218), r(658379);
      var n=r(595738), o=r(731904), a=r(552979), s=function(){
        return(s=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      const i=(0, n.pM)({
        name:"ValidateResult", props:{
          result:{
            type:Object, required:!0
          }, full:{
            type:Boolean, default:!0
          }
        }, setup:function(e){
          var t={
            homework:"homework_score", exam:"exam_score", chapterExam:"chapter_exam", offlineScore:"offline_score", scorePercentage:"score_percentage"
          }, r=(0, n.KR)(t.homework), i=(0, n.EW)((function(){
            var t=e.full?400:600;
            return document.body.offsetHeight-t
          })), c=(0, n.EW)((function(){
            var e=[
              {
                title:a.default.t("tabIndex"), key:"index"
              }, {
                title:a.default.t("chaoxingScore.studentName"), key:"userName"
              }, {
                title:a.default.t("chaoxingScore.studentNo"), key:"userNo"
              }, {
                title:a.default.t("chaoxingScore.itemName"), key:"name"
              }, {
                title:a.default.t("score"), key:"score"
              }, {
                title:a.default.t("chaoxingScore.errorReason"), key:"error", className:"error-reason-column", width:150
              }
            ];
            return r.value===t.offlineScore?e.filter((function(e){
              return"name"!==e.key
            })):e
          })), l=(0, n.EW)((function(){
            return o._.countBy(e.result.validateRecords, "recordType")
          })), u=(0, n.EW)((function(){
            var t=e.result.validateRecords.filter((function(e){
              return e.recordType===r.value
            })), n=[
            ], o=1;
            return t.forEach((function(e){
              if(e.records&&e.records.length){
                var t=0;
                e.records.forEach((function(r){
                  var a;
                  n.push({
                    index:o, userNo:e.userNo, userName:e.userName, error:r.error, name:r.name, score:r.score, rowspan:0===t?null===(a=e.records)||void 0===a?void 0:a.length:0, colspan:1
                  }), t++
                }))
              }
              else n.push(s(s({
              }, e), {
                index:o, rowspan:1, colspan:1
              }));
              o++
            })), n
          }));
          return{
            currentTab:r, columns:c, data:u, tableHeight:i, tabs:t, handleSpan:function(e){
              var t=e.row, r=e.columnIndex;
              return 0===r||1===r||2===r?[
                t.rowspan, t.colspan
              ]
              :[
                1, 1
              ]
            }, countByRecordType:l
          }
        }
      });
      const c=(0, r(514486).A)(i, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"validate-result-wrapper"
        }, [
          r("div", {
            staticClass:"overview-wrapper"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), r("span", [
              e._t("default")
            ], 2)
          ]), e._v(" "), r("div", {
            staticClass:"result-content-wrapper"
          }, [
            r("div", {
              staticClass:"tabs-wrapper"
            }, e._l(e.tabs, (function(t, n){
              return r("div", {
                key:n, staticClass:"tab", class:{
                  active:e.currentTab===t
                }, on:{
                  click:function(r){
                    e.currentTab=t
                  }
                }
              }, [
                e._v("\n        "+e._s(e.$t("chaoxingScore."+n))+" ("+e._s(e.countByRecordType[
                  t
                ]
                ||0)+")\n      ")
              ])
            })), 0), e._v(" "), r("Table", {
              staticClass:"table-wrapper", attrs:{
                border:"", columns:e.columns, data:e.data, "max-height":e.tableHeight, "span-method":e.handleSpan
              }
            })
          ], 1)
        ])
      }), [
      ], !1, null, "7f14de0c", null).exports
    }, 95187:(e, t, r)=>{
      var n=r(302543);
      function o(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var n=Object.getOwnPropertySymbols(e);
          t&&(n=n.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }
      function a(e){
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
          t%2?o(Object(r), !0).forEach((function(t){
            s(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function s(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      var i=r(795093), c=r(966491), l=r(571478), u=r(111172);
      e.exports=[
        "$scope", "$rootScope", "api", "Upload", "DataImportHelper", "toastr", "$timeout", "$http", "$location", "$window", "statHelper", function(e, t, r, o, s, d, p, f, m, v, h){
          var g=l(e), _={
          }, y={
          };
          e.humanizeBytes=c.humanizeBytes, e.pageSize=10, e.pagination=u(e, m, "passed_records");
          var S=function(t){
            return e.pages=t.pages, e.pagedPassedRecords=t.data
          };
          e.changePage=t=>e.pagination.changePageAtFrontEnd(t, e.passedRecords, S), _.data={
            record_type:"item_score", course_id:t.courseId, announce_score_time:i().toISOString(), announce_score_type:"immediate_announce", group_id:0, scored:!0
          }, window.addEventListener("send-score-item-form-data", (e=>{
            _.data=a(a({
            }, _.data), e.detail)
          })), e.init=function(){
            var r=t.importType;
            return _.importType=r, _.errorPriority={
              user_no:1, item_score:2, item_name:3
            }, y=new s(_.errorPriority), e.ui=y.ui
          };
          var b={
          };
          e.$on("endImport", (function(){
            return 3===e.ui.wizardStep?v.location.reload():e.goStepFirst()
          })), e.goStepFirst=function(){
            if(!(e.ui.wizardStep<2))return delete b.access_key, delete e.failedRecords, y.goStepFirst(), e.deleteUploaded(e.ui)
          }, e.doStepSecond=function(){
            return g.show(), o.upload({
              url:"/api/data-import/validation", file:e.getUploaded()[
                0
              ], method:"POST", data:_.data
            }).then((function(t){
              var r=n.filter(t.data.records, "errors");
              e.failedRecords=r, e.passedRecords=t.data.passed_records, e.changePage(1);
              var o=t.data.record_number;
              return y.updateRecordsPickedError(e.failedRecords), b.access_key=t.data.access_key, g.hide(), y.updateSecondStepData(e.failedRecords), e.correctRecordNumber=o-r.length, e.ui.stepThirdEnable=e.ui.importConfirmed&&e.correctRecordNumber>0
            }), (function(e){
              return d.error(e.data.message), g.hide()
            }))
          };
          return e.doStepThird=function(){
            g.show();
            var n={
              access_key:b.access_key, course_id:t.courseId
            };
            return r.importItemScores(n, (function(t){
              var r=t.job_id, n=()=>((e, t, r)=>f.get("/api/jobs/".concat(e, "/status")).success(t).error(d.decorateError(r)))(r, o), o=function(t){
                return"finished"===t.status?function(t){
                  var r="".concat(_.importType, "s"), n="".concat(_.importType, "s_failed");
                  e.importedRecords=t[
                    r
                  ], e.failedRecords=t[
                    n
                  ], y.updateRecordsPickedError(e.failedRecords), g.hide();
                  var o={
                    mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:statistics.enums.ScoreAction.add_score_item, module:statistics.enums.TeachingActionModule.score
                  };
                  return statistics.track(o), e.ui.wizardStep=3
                }
                (t.result):"failed"===t.status?(g.hide(), d.error(e.errorText.importFailed)):p(n, 5e3)
              };
              return p(n, 5e3)
            }))
          }, e.onFileSelect=e.setFileSelectContext(e), e.getHref=function(e){
            var t=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :"school";
            return"/static/data_import_templates/".concat(t, "-item-scores-").concat(e, ".xls")
          }
        }
      ]
    }, 97248:(e, t, r)=>{
      r.d(t, {
        A:()=>c
      });
      r(169218);
      var n=r(731904), o=r(795093), a=r(595738), s=r(552979), i=function(){
        return(i=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      const c=(0, a.pM)({
        props:{
          value:{
            type:[
              Array, Array, String, Date
            ], default:""
          }, type:{
            type:String, default:"date"
          }, format:{
            type:String, default:"yyyy.MM.dd"
          }, disabled:{
            type:Boolean, default:!1
          }, placement:{
            type:String, default:"bottom-start"
          }, placeholder:{
            type:String, default:""
          }, options:{
            type:Object, default:null
          }, splitPanels:{
            type:Boolean, default:!0
          }, returnformat:{
            type:String, default:""
          }, transfer:{
            type:Boolean, default:!1
          }, transferClassName:{
            type:String, default:""
          }, clearable:{
            type:Boolean, default:!0
          }, size:{
            type:String, default:"default"
          }, displayMode:{
            type:String, default:""
          }, useDefaultShortcuts:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var r=t.emit, c=(0, a.KR)(null), l={
            shortcuts:[
              {
                text:s.default.t("teachingCalendar.today"), value:function(){
                  var e=new Date;
                  return[
                    e, e
                  ]
                }
              }, {
                text:s.default.t("filter.range.week"), value:function(){
                  var e=new Date, t=new Date;
                  return t.setDate(t.getDate()-6), [
                    t, e
                  ]
                }
              }, {
                text:s.default.t("filter.range.month"), value:function(){
                  var e=new Date, t=new Date;
                  return t.setDate(t.getDate()-29), [
                    t, e
                  ]
                }
              }
            ]
          }, u=function(e){
            return"string"==typeof e&&e?n.TimeUtils.toLocalDate(e):(0, n.isDate)(e)?e:null
          };
          return(0, a.wB)((function(){
            return e.value
          }), (function(){
            Array.isArray(e.value)?c.value=n._.map(e.value, (function(e){
              return u(e)
            })):c.value=u(e.value)
          }), {
            deep:!0, immediate:!0
          }), {
            dateValue:c, change:function(){
              var t;
              if(Array.isArray(c.value)){
                var a=(0, n._)(c.value).filter(n.isDate).value();
                t=2===a.length?e.returnformat?[
                  o(a[
                    0
                  ]).format(e.returnformat), o(a[
                    1
                  ]).format(e.returnformat)
                ]
                :[
                  a[
                    0
                  ].toISOString(), n.TimeUtils.endOfDay(a[
                    1
                  ]).toISOString()
                ]
                :[
                ]
              }
              else t=c.value?e.returnformat?o(c.value).format(e.returnformat):c.value.toISOString():"";
              r("input", t), r("on-change", t)
            }, getOptions:function(){
              var t={
                disabledDate:function(){
                  return!1
                }
              };
              return e.useDefaultShortcuts&&(t=i(i({
              }, t), l)), e.options&&(t=i(i({
              }, t), e.options)), t
            }
          }
        }
      })
    }, 99528:(e, t, r)=>{
      var n=r(248124);
      e.exports=[
        "$http", "$q", function(e, t){
          var r=n("#courseId").val();
          return{
            getEduCourseScoreRate:function(){
              var n=t.defer();
              return e.get("/api/edu-scores/get-course-score-rate/".concat(r)).success((e=>n.resolve(e))), n.promise
            }, getSubmitTime:function(){
              var n=t.defer();
              return e.get("/api/edu-scores/get-submit-time/".concat(r)).success((e=>n.resolve(e))).error((e=>n.resolve(e))), n.promise
            }, getEduSubmitLogs:function(){
              var n=t.defer();
              return e.get("/api/edu-scores/get-submit-logs/".concat(r)).success((e=>n.resolve(e))), n.promise
            }
          }
        }
      ]
    }, 106159:(e, t, r)=>{
      var n=r(248124), o=r(756029), a=r(793110);
      function s(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], n=!0, o=!1, a=void 0;
          try{
            for(var s, i=e[
              Symbol.iterator
            ]
            ();
            !(n=(s=i.next()).done)&&(r.push(s.value), !t||r.length!==t);
            n=!0);
          }
          catch(e){
            o=!0, a=e
          }
          finally{
            try{
              n||null==i.return||i.return()
            }
            finally{
              if(o)throw a
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return i(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function i(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(215195), r(168763), r(67500);
      var c=r(966491), l=r(571478);
      e.exports=[
        "$scope", "$q", "onlineVideoCompletenessRepository", "activityRepository", "$rootScope", function(e, t, r, i, u){
          var d=n("#courseId").val(), p=l(e);
          e.scored=!1, e.setting={
            score_method:"rate", custom_score_rule:[
              {
                percentage:80, score:100
              }, {
                percentage:60, score:80
              }, {
                percentage:30, score:60
              }, {
                percentage:0, score:30
              }
            ], score_percentage:0, include_none_criterion:!1, include_unpublished:!1
          }, e.validateSliderModel=e=>""!==e&&!c.endsWith(e, "."), e.verifySliderModel=t=>parseFloat(t)>e.leftScorePercentage, e.addRule=function(t){
            var r=e.setting.custom_score_rule, n=r[
              t
            ], o=n.percentage>0?n.percentage-1:0;
            return r.splice(t+1, 0, {
              percentage:o, score:n.score
            })
          }, e.deleteRule=function(t){
            return e.setting.custom_score_rule.splice(t, 1)[
              0
            ]
          }, e.save=function(){
            return p.show(), e.scored?r.update(e.setting).then((function(e){
              n("#online-video-completeness-setting").foundation("reveal", "close"), u.$emit("onlineVideoCompletenessScoreSettingChanged", e);
              var t={
                mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:statistics.enums.ScoreAction.score_setting, module:statistics.enums.TeachingActionModule.score
              };
              return statistics.track(t), p.hide()
            }), (function(t){
              return p.hide(), e.errors=t.errors
            })):(e.setting.id&&r.delete(d).then((()=>u.$emit("onlineVideoCompletenessScoreSettingChanged", {
            }))), n("#online-video-completeness-setting").foundation("reveal", "close"), p.hide())
          };
          return t.all([
            r.init(), i.getLeftScorePercentage(d)
          ]).then((function(){
            var t=Array.from(arguments.length<=0?void 0:arguments[
              0
            ]), r=s(t, 2), n=r[
              0
            ], i=r[
              1
            ];
            n.id&&(e.setting=o.copy(n), e.scored=!0), e.leftScorePercentage=i, e.setting.score_percentage&&(e.leftScorePercentage=e.leftScorePercentage.plus(new a(e.setting.score_percentage))), e.currentScorePercentage&&(e.setting.score_percentage=e.currentScorePercentage, e.leftScorePercentage=new a(e.currentScorePercentageLeft||0).plus(new a(e.currentScorePercentage)))
          }))
        }
      ]
    }, 119167:(e, t, r)=>{
      var n=r(756029);
      r(238696), n.module("score", [
        "common"
      ]).directive("scoreItemFilterDropdown", r(709936)).directive("scoreLog", r(875838).E).factory("api", r(427373)).factory("groupApi", r(465857)).factory("rollcallRepository", r(567950)).factory("performanceApi", r(43252)).factory("performanceRepository", r(113494)).factory("Department", r(860019)).factory("userFilter", r(827829)).factory("scoreItemFilter", r(903686)).factory("onlineVideoCompletenessRepository", r(350896)).factory("eduScoresRepository", r(99528)).factory("DataImportHelper", r(256119)).factory("fileSelectModel", r(667164)).factory("scoreRepository", r(782554)).factory("scoreHelper", r(598258)).factory("KwncEnrollmentScoreBookService", r(598258)).factory("examListRepository", r(980108)).factory("activityRepository", r(566117)).factory("publishHelper", r(664011)).controller("ScoreCtrl", r(525006)).controller("NewScoreCtrl", r(699833)).controller("ScoreDetailController", r(941096)).controller("UserCheckpointActivityController", r(22033)).controller("EditScorePercentageCtrl", r(863306)).controller("WarningCtrl", r(446264)).controller("WarningDetailCtrl", r(919902)).controller("StatTotalScoreForInstructorDistributionController", r(445949)).controller("RollcallScoreSettingController", r(849340)).controller("OnlineVideoCompletenessSettingCtrl", r(106159)).controller("ScoreItemSettingCtrl", r(612845)).controller("ScoreTypeSettingsController", r(339835)).controller("CourseEnrollmentScoreBookCtrl", r(997709)).controller("CourseAnnounceScoreSettingsCtrl", r(378238)).controller("UpdateAllStudentsTotalScoreCtrl", r(909550)).controller("CustomScoreItemCtrl", r(690340)).controller("ScoreColumnChooserController", r(953845)).controller("finalExaminationItemSettingController", r(775579)).controller("ScorePublishItemSettingController", r(701699)).controller("ImportScoreController", r(225214)).controller("BatchImportScoreController", r(981751)).controller("ImportItemScoreController", r(989216)).controller("BatchImportItemScoreController", r(95187)).controller("SubmitFinalScoreInfoController", r(624971)).controller("SubmitScoreUploadsController", r(344512)).controller("EditFinalScoreController", r(122458)).controller("ActivityPublishStatusController", r(21331)).controller("PerformanceScoreSettingController", r(426404)).config([
        "$routeProvider", e=>e.when("/", {
          templateUrl:"score/_show.html"
        }).when("/setting", {
          templateUrl:"score/_score_percentage_setting.html"
        }).when("/score/warnings", {
          templateUrl:"score/_warnings.html"
        }).when("/score/:warningId/info", {
          templateUrl:"score/_warning_detail.html"
        })
      ])
    }, 122458:(e, t, r)=>{
      var n=r(302543), o=r(248124);
      function a(e, t){
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
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i=!0, c=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return i=e.done, e
          }, e:function(e){
            c=!0, a=e
          }, f:function(){
            try{
              i||null==r.return||r.return()
            }
            finally{
              if(c)throw a
            }
          }
        }
      }
      function s(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(979073), r(906048), r(640173), r(850785), r(658379);
      var i=r(111172);
      e.exports=[
        "$rootScope", "$scope", "$http", "toastr", "$location", function(e, t, r, s, c){
          var l;
          t.tabType={
            add_students:"add_students", check_students:"check_students"
          }, t.selectTab=t.tabType.add_students, t.totalCandidateStudents=[
          ], t.filterCandiateStudents=[
          ], t.originalCanidateStudents=[
          ], t.selectedStudents=[
          ], t.filterSelectedStudents=[
          ], t.pageSize=10, t.pageSizeOptions=[
            10, 20, 30, 50, 100
          ], t.pagination=i(t, c, "students"), t.hasWrongScoreEdited=!1, t.ui={
            contentLoadingComplete:!1
          }, t.conditions={
            keyword:""
          }, e.$on("initStudentFinalScore", (function(e, r){
            var n=arguments.length>2&&void 0!==arguments[
              2
            ]
            &&arguments[
              2
            ];
            l(r, n), n&&(t.changeTab("check_students"), d())
          })), t.changeTab=function(e){
            return t.selectTab=e, t.initConditions(), t.search(1)
          }, t.initConditions=()=>t.conditions={
            keyword:""
          };
          var u=function(e){
            return t.pages=e.pages, t.selectTab===t.tabType.add_students?t.pagedCandiateStudents=e.data:t.pagedSelectedStudents=e.data
          };
          t.changePage=function(e){
            var r=t.selectTab===t.tabType.add_students?t.filterCandiateStudents:t.filterSelectedStudents;
            return t.pagination.changePageAtFrontEnd(e, r, u)
          }, t.search=function(e){
            t.ui.contentLoadingComplete=!1;
            var r=null!=t.conditions?t.conditions.keyword:void 0, o=new RegExp(t.conditions.keyword.replace(/[
              |\\{
              }
              ()[
                \
              ]
              ^$+*?.
            ]
            /g, "\\$&"), "i");
            return t.selectTab===t.tabType.add_students?t.filterCandiateStudents=n.filter(t.totalCandidateStudents, (e=>!r||o.test(e.name)||o.test(e.user_no))):t.filterSelectedStudents=n.filter(t.selectedStudents, (e=>!r||o.test(e.name)||o.test(e.user_no))), t.changePage(e), t.ui.contentLoadingComplete=!0
          }, t.deleteSelectedStudent=function(e){
            return e.selected=!1, e.new_final_score="", n.remove(t.selectedStudents, {
              id:e.id
            }), delete e.score_error, t.hasWrongScoreEdited=p(), t.search(t.pageIndex)
          }, t.updateSelectedStudent=function(e){
            return e.selected?t.selectedStudents.push(e):(e.new_final_score="", n.remove(t.selectedStudents, {
              id:e.id
            })), delete e.score_error, t.hasWrongScoreEdited=p(), t.search(t.pageIndex)
          };
          var d=function(){
            var e=n.filter(t.selectedStudents, (e=>"processing"===e.status)).length, r=n.filter(t.selectedStudents, (e=>"passed"===e.status)).length;
            return t.statusCount={
              inProcessingCount:e, passedCount:r, failedCount:t.selectedStudents.length-e-r
            }
          }, p=()=>n.some(t.selectedStudents, (e=>e.score_error));
          return t.removeError=function(e){
            return delete e.score_error, t.hasWrongScoreEdited=p()
          }, t.confirm=function(){
            if(n.forEach(t.selectedStudents, (function(e){
              if(!e.new_final_score||parseFloat(e.new_final_score)<0||parseFloat(e.new_final_score)>100)return e.score_error=!0
            })), t.hasWrongScoreEdited=p(), !t.hasWrongScoreEdited)return e.$emit("editStudentFinalScore", t.selectedStudents), o("#edit-student-final-score-popup").foundation("reveal", "close"), null
          }, t.resetEdit=function(){
            return t.selectedStudents=[
            ], e.$emit("editStudentFinalScore", t.selectedStudents)
          }, l=function(){
            var e=arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :null, r=arguments.length>1?arguments[
              1
            ]
            :void 0;
            t.hasWrongScoreEdited=!1;
            var o=e||[
            ], s=[
            ];
            t.totalCandidateStudents=[
            ], t.selectedStudents=[
            ];
            var i, c=a(t.students);
            try{
              for(c.s();
              !(i=c.n()).done;
              ){
                var l=i.value;
                s.push({
                  id:l.id, user_no:l.user_no, name:l.name, total_score:l.total_score, enrollment_id:l.enrollment_id
                })
              }
            }
            catch(e){
              c.e(e)
            }
            finally{
              c.f()
            }
            return t.originalCanidateStudents=n.clone(s), n.forEach(s, (function(e){
              t.totalCandidateStudents.push(e);
              var a=n.find(o, {
                enrollment_id:e.enrollment_id
              });
              return a?(e.selected=!0, e.new_final_score=(null!=a?a.new_final_score:void 0)||"", e.status=(null!=a?a.status:void 0)||"", e.total_score=r?null!=a?a.total_score:void 0:e.total_score, t.selectedStudents.push(e)):(e.selected=!1, e.new_final_score="")
            })), t.search(), t.changePage(1)
          }
        }
      ]
    }, 150655:(e, t, r)=>{
      r.d(t, {
        A:()=>n
      });
      const n=r(97248).A
    }, 180287:(e, t, r)=>{
      r.d(t, {
        A:()=>n
      });
      r(418665), r(678636), r(658379), r(14602);
      const n=function(e){
        var t={
        };
        return e.keys().forEach((function(r){
          var n=e(r);
          return t[
            r.match(/[
              \w-
            ]
            +/)[
              0
            ]
          ]
          =n.default||n
        })), t
      }
    }, 225214:(e, t, r)=>{
      var n=r(248124), o=r(302543);
      r(640173), r(658379);
      r(966491), r(571478);
      e.exports=[
        "$scope", "$rootScope", "api", "Upload", "DataImportHelper", "toastr", "$timeout", "$http", "uploadService", function(e, t, r, a, s, i, c, l, u){
          var d=n("#courseId").val();
          return t.importType="score", t.courseId=d, e.setUploaded=e=>t.uploaded=e, e.getUploaded=()=>t.uploaded, e.deleteUploaded=function(e){
            return delete t.uploaded, e.uploadSucceeded=!1
          }, e.endImport=function(){
            delete t.uploaded, e.$broadcast("endImport"), n("#batch-import-score-popup").foundation("reveal", "close")
          }, e.setFileSelectContext=function(t){
            return function(r, n){
              var a;
              if(!(r.length<=0))if(r.length>1)i.warning(t.errorText.singleFile);
              else{
                if(u.checkFiles(r, n, a=[
                  "xls"
                ]))return t.ui.uploadSucceeded=!0, o.forEach(r, (function(e){
                  return e.progress=100, e.finished=!0, !0
                })), e.setUploaded(r);
                var s=n;
                "object"==typeof n&&void 0!==n.DOCUMENT&&(s=n.DOCUMENT);
                var c=u.humanizeBytes(s);
                i.warning(t.errorText.formatAndLimit.replace(/\{
                  0\
                }
                /gi, c).replace(/\{
                  1\
                }
                /gi, a))
              }
            }
          }, e.selectFile=function(){
            return n('#batch-import-score-popup input[name="fileSelector"]').click(), !0
          }
        }
      ]
    }, 238696:(e, t, r)=>{
      var n=r(962893), o=r(846413), a=r(552979), s=(r(540590), r(418665), r(700533), r(334867), r(269193), r(658379), r(14602), r(595738)), i=r(255634), c=r(731904), l=r(979278), u=r(703066), d=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, p=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const f=(0, s.pM)({
        props:{
          value:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var r=this, n=t.emit, o=(0, s.KR)(""), a=function(){
            n("input", !1), o.value=""
          };
          return{
            toggleOpen:function(e){
              return d(r, void 0, void 0, (function(){
                return p(this, (function(t){
                  return n("input", e), o.value="", [
                    2
                  ]
                }))
              }))
            }, close:a, groupName:o, commit:function(){
              n("on-submit", o.value), a()
            }
          }
        }
      });
      var m=r(514486);
      const v=(0, m.A)(f, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"create-group-modal", attrs:{
            value:e.value, "footer-hide":!0, width:400, title:e.$t("courseScore.scoreItemGroup.createGroup")
          }, on:{
            "on-visible-change":e.toggleOpen
          }
        }, [
          r("div", [
            r("div", {
              staticClass:"name-input"
            }, [
              r("div", {
                staticClass:"label-name"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.groupName")))
              ]), e._v(" "), r("div", {
                staticClass:"input-div"
              }, [
                r("Input", {
                  model:{
                    value:e.groupName, callback:function(t){
                      e.groupName=t
                    }, expression:"groupName"
                  }
                })
              ], 1)
            ]), e._v(" "), r("div", {
              staticClass:"buttons"
            }, [
              r("Button", {
                attrs:{
                  type:"primary", disabled:!e.groupName
                }, on:{
                  click:e.commit
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  type:"default"
                }, on:{
                  click:e.close
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "7c1b6552", null).exports;
      var h=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, g=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const _=(0, s.pM)({
        props:{
          value:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var r=this, n=t.emit, o=function(){
            n("input", !1)
          };
          return{
            toggleOpen:function(e){
              return h(r, void 0, void 0, (function(){
                return g(this, (function(t){
                  return n("input", e), [
                    2
                  ]
                }))
              }))
            }, close:o, commit:function(){
              n("on-submit"), o()
            }
          }
        }
      });
      const y=(0, m.A)(_, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"delete-group-modal", attrs:{
            value:e.value, "footer-hide":!0, width:400, title:e.$t("courseScore.scoreItemGroup.deleteGroup")
          }, on:{
            "on-visible-change":e.toggleOpen
          }
        }, [
          r("div", [
            r("div", {
              staticClass:"delete-tips"
            }, [
              e._v("\n      "+e._s(e.$t("courseScore.scoreItemGroup.deleteGroupTips"))+"\n    ")
            ]), e._v(" "), r("div", {
              staticClass:"buttons"
            }, [
              r("Button", {
                attrs:{
                  type:"primary"
                }, on:{
                  click:e.commit
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  type:"default"
                }, on:{
                  click:e.close
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "0ac4bcc4", null).exports;
      var S=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, b=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const w=(0, s.pM)({
        props:{
          value:{
            type:Boolean, default:!1
          }, name:{
            type:String, required:!0
          }, groupId:{
            type:Number, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=t.emit, o=(0, s.KR)(""), a=function(){
            n("input", !1), o.value=""
          };
          return{
            toggleOpen:function(t){
              return S(r, void 0, void 0, (function(){
                return b(this, (function(r){
                  return n("input", t), o.value=t?e.name:"", [
                    2
                  ]
                }))
              }))
            }, close:a, groupName:o, commit:function(){
              n("on-submit", e.groupId, o.value), a()
            }
          }
        }
      });
      const C=(0, m.A)(w, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"edit-group-modal", attrs:{
            value:e.value, "footer-hide":!0, width:400, title:e.$t("courseScore.scoreItemGroup.editGroup")
          }, on:{
            "on-visible-change":e.toggleOpen
          }
        }, [
          r("div", [
            r("div", {
              staticClass:"name-input"
            }, [
              r("div", {
                staticClass:"label-name"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.groupName")))
              ]), e._v(" "), r("div", {
                staticClass:"input-div"
              }, [
                r("Input", {
                  model:{
                    value:e.groupName, callback:function(t){
                      e.groupName=t
                    }, expression:"groupName"
                  }
                })
              ], 1)
            ]), e._v(" "), r("div", {
              staticClass:"buttons"
            }, [
              r("Button", {
                attrs:{
                  type:"primary", disabled:!e.groupName
                }, on:{
                  click:e.commit
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  type:"default"
                }, on:{
                  click:e.close
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "42c83758", null).exports;
      var I=r(297786), x=(r(169218), r(795093)), k=r(454985), A=function(){
        return(A=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, T=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, E=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const $=(0, s.pM)({
        name:"common-setting-modal", components:{
          DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, I.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScoreType:e.scoreItem.announceScoreType, announceScoreTime:e.scoreItem.announceScoreTime
            }
          })), i=(0, s.KR)(A({
          }, o.value)), l=(0, s.EW)((function(){
            return[
              "custom", "homework_activity", "exam_activity", "forum_activity"
            ].includes(e.scoreItem.type)
          }));
          (0, s.wB)((function(){
            return i.value.scored
          }), (function(t){
            "false"===t?(i.value.groupId=0, i.value.announceScoreType="no_announce", i.value.announceScoreTime=null):i.value.groupId=e.scoreItemGroups[
              0
            ].id
          }));
          return{
            ok:function(){
              return T(r, void 0, void 0, (function(){
                var r;
                return E(this, (function(o){
                  switch(o.label){
                    case 0:return o.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, u.np)(e.scoreItem.id, i.value)
                    ];
                    case 1:return r=o.sent(), t.emit("on-submit"), c.Toast.success(r.message), [
                      3, 3
                    ];
                    case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return n.value=!1, [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:i, onChangeAnnounceScore:function(e){
              i.value.announceScoreTime="no_announce"===e?null:x().toISOString()
            }, needAnnounceScore:l, visibleChangeHandler:function(e){
              e&&(i.value=A({
              }, o.value))
            }
          }
        }
      });
      const P=(0, m.A)($, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"common-setting-modal", attrs:{
            width:"660", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1):e._e(), e._v(" "), e.needAnnounceScore?r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.publishScore"), props:"announceScoreType"
              }
            }, [
              r("RadioGroup", {
                on:{
                  "on-change":e.onChangeAnnounceScore
                }, model:{
                  value:e.formData.announceScoreType, callback:function(t){
                    e.$set(e.formData, "announceScoreType", t)
                  }, expression:"formData.announceScoreType"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"no_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.willNotPublish")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"immediate_announce"
                  }
                }, [
                  "exam_activity"===e.scoreItem.type?r("span", [
                    e._v("\n            "+e._s(e.$t("courseScore.scoreItemGroup.immediateSubmit"))+"\n          ")
                  ]):r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.immediatePublish")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"timed_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.customPublishScoreTime")))
                ])
              ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreType?r("div", [
                r("DatePickerExt", {
                  staticStyle:{
                    width:"175px"
                  }, attrs:{
                    type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                  }, model:{
                    value:e.formData.announceScoreTime, callback:function(t){
                      e.$set(e.formData, "announceScoreTime", t)
                    }, expression:"formData.announceScoreTime"
                  }
                })
              ], 1):e._e()
            ], 1):e._e()
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
              }
            }, [
              e._v(e._s(e.$t("confirm")))
            ]), e._v(" "), r("Button", {
              on:{
                click:e.cancel
              }
            }, [
              e._v(e._s(e.$t("cancel")))
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "23d8035b", null).exports;
      r(168763);
      var D=r(302543), N=r.n(D), R=function(){
        return(R=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, M=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, O=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const G=(0, s.pM)({
        name:"online-video-completeness-setting-modal", components:{
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, I.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, scoreMethod:"rate", customScoreRule:[
                {
                  percentage:80, score:100
                }, {
                  percentage:60, score:80
                }, {
                  percentage:30, score:60
                }, {
                  percentage:0, score:30
                }
              ], includeNoneCriterion:!1
            }
          })), i=(0, s.KR)({
          }), l=(0, s.KR)(N().cloneDeep(o.value));
          (0, s.wB)((function(){
            return l.value.scored
          }), (function(t){
            l.value.groupId="false"===t?0:e.scoreItemGroups[
              0
            ].id
          })), (0, s.sV)((function(){
            return M(r, void 0, void 0, (function(){
              var t;
              return O(this, (function(r){
                switch(r.label){
                  case 0:return t=i, [
                    4, (0, u.$n)(e.scoreItem.teachingUnitId)
                  ];
                  case 1:return t.value=r.sent(), l.value=R(R({
                  }, l.value), N().cloneDeep(i.value)), [
                    2
                  ]
                }
              }))
            }))
          }));
          return{
            ok:function(){
              return M(r, void 0, void 0, (function(){
                var r;
                return O(this, (function(o){
                  switch(o.label){
                    case 0:return o.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, u.wm)(e.scoreItem.teachingUnitId, l.value)
                    ];
                    case 1:return o.sent(), t.emit("on-submit"), c.Toast.success(a.default.t("save_success")), [
                      3, 3
                    ];
                    case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return n.value=!1, r=i, [
                      4, (0, u.$n)(e.scoreItem.teachingUnitId)
                    ];
                    case 4:return r.value=o.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:l, addRule:function(e){
              var t=l.value.customScoreRule, r=t[
                e
              ], n=r.percentage>0?r.percentage-1:0;
              t.splice(e+1, 0, {
                percentage:n, score:r.score
              })
            }, deleteRule:function(e){
              l.value.customScoreRule.splice(e, 1)
            }, blurHandler:function(e){
              var t=l.value.customScoreRule, r=t[
                e
              ];
              r.percentage||(e===t.length-1?r.percentage=0:r.percentage=t[
                e+1
              ].percentage+1)
            }, blurScoreHandler:function(e){
              var t=l.value.customScoreRule, r=t[
                e
              ];
              r.score||(e===t.length-1?r.score=0:r.score=t[
                e+1
              ].score+1)
            }, visibleChangeHandler:function(e){
              e&&0!==Object.keys(i.value).length&&(l.value=R(R({
              }, N().cloneDeep(o.value)), N().cloneDeep(i.value)))
            }
          }
        }
      });
      const F=(0, m.A)(G, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"onlin-video-completeness-setting-modal", attrs:{
            width:"640", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.onlineVideoTip")))
            ])
          ]), e._v(" "), r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1):e._e(), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.criterion")
              }
            }, [
              r("Checkbox", {
                model:{
                  value:e.formData.includeNoneCriterion, callback:function(t){
                    e.$set(e.formData, "includeNoneCriterion", t)
                  }, expression:"formData.includeNoneCriterion"
                }
              }, [
                e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.videoCriterionTip"))+"\n      ")
              ])
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreType"), props:"scoreMethod"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scoreMethod, callback:function(t){
                    e.$set(e.formData, "scoreMethod", t)
                  }, expression:"formData.scoreMethod"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"rate"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.preSet")))
                ]), e._v(" "), r("div", {
                  staticStyle:{
                    "margin-left":"24px"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.videoScoreTips")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"custom"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.customPercent")))
                ])
              ], 1), e._v(" "), "custom"===e.formData.scoreMethod?r("div", {
                staticClass:"custom-percentage-area"
              }, [
                r("Row", {
                  staticClass:"custom-percentage-row first-row"
                }, [
                  r("Col", {
                    attrs:{
                      span:"12"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.viewPercent")))
                  ]), e._v(" "), r("Col", {
                    attrs:{
                      span:"12"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.percentValue")))
                  ])
                ], 1), e._v(" "), e._l(e.formData.customScoreRule, (function(t, n){
                  return r("Row", {
                    key:n, staticClass:"custom-percentage-row"
                  }, [
                    r("Col", {
                      attrs:{
                        span:"12"
                      }
                    }, [
                      r("InputNumber", {
                        attrs:{
                          max:100, min:0, precision:0
                        }, on:{
                          "on-blur":function(t){
                            return e.blurHandler(n)
                          }
                        }, model:{
                          value:t.percentage, callback:function(r){
                            e.$set(t, "percentage", r)
                          }, expression:"row.percentage"
                        }
                      }), e._v(" "), r("span", {
                        staticClass:"percent-span"
                      }, [
                        e._v("%")
                      ]), e._v(" "), r("span", {
                        staticClass:"period-span"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.to")))
                      ]), e._v(" "), r("span", 0===n?[
                        e._v("100")
                      ]
                      :[
                        e._v("< "+e._s(e.formData.customScoreRule[
                          n-1
                        ].percentage))
                      ]), e._v(" "), r("span", {
                        staticClass:"percent-span"
                      }, [
                        e._v("%")
                      ])
                    ], 1), e._v(" "), r("Col", {
                      attrs:{
                        span:"12"
                      }
                    }, [
                      r("InputNumber", {
                        attrs:{
                          max:100, min:0
                        }, on:{
                          "on-blur":function(t){
                            return e.blurScoreHandler(n)
                          }
                        }, model:{
                          value:t.score, callback:function(r){
                            e.$set(t, "score", r)
                          }, expression:"row.score"
                        }
                      }), e._v(" "), r("span", {
                        staticClass:"button-area"
                      }, [
                        n!==e.formData.customScoreRule.length-1&&e.formData.customScoreRule.length<10?r("i", {
                          staticClass:"font font-option-plus", on:{
                            click:function(t){
                              return t.stopPropagation(), e.addRule(n)
                            }
                          }
                        }):e._e(), e._v(" "), n>0&&n!==e.formData.customScoreRule.length-1?r("i", {
                          staticClass:"font font-option-minus", on:{
                            click:function(t){
                              return t.stopPropagation(), e.deleteRule(n)
                            }
                          }
                        }):e._e()
                      ])
                    ], 1)
                  ], 1)
                }))
              ], 2):e._e()
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
              }
            }, [
              e._v(e._s(e.$t("confirm")))
            ]), e._v(" "), r("Button", {
              on:{
                click:e.cancel
              }
            }, [
              e._v(e._s(e.$t("cancel")))
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "6a92d042", null).exports;
      var L=function(){
        return(L=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, B=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, j=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const U=(0, s.pM)({
        name:"performance-setting-modal", components:{
          SvgIcon:l.A, DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, I.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.KR)(!1), i=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScoreSetting:"no_announce", announceScoreTime:null, scoreUnit:1, standardScore:1
            }
          })), l=(0, s.KR)({
          }), d=(0, s.KR)(L({
          }, i.value));
          (0, s.sV)((function(){
            return B(r, void 0, void 0, (function(){
              var t;
              return j(this, (function(r){
                switch(r.label){
                  case 0:return o.value=!0, t=l, [
                    4, (0, u.md)(e.scoreItem.teachingUnitId)
                  ];
                  case 1:return t.value=r.sent(), d.value=L(L({
                  }, d.value), l.value), o.value=!1, [
                    2
                  ]
                }
              }))
            }))
          }));
          (0, s.wB)((function(){
            return d.value.scored
          }), (function(t){
            "false"===t?(d.value.groupId=0, d.value.announceScoreSetting="no_announce", d.value.announceScoreTime=null):d.value.groupId=e.scoreItemGroups[
              0
            ].id
          }));
          return{
            ok:function(){
              return B(r, void 0, void 0, (function(){
                var r, o, s;
                return j(this, (function(i){
                  switch(i.label){
                    case 0:r=L(L({
                      name:"performance"
                    }, d.value), {
                      announceScoreTime:"timed_announce"===d.value.announceScoreSetting?d.value.announceScoreTime:null
                    }), o=null, i.label=1;
                    case 1:return i.trys.push([
                      1, 3, , 4
                    ]), [
                      4, (0, u.BE)(e.scoreItem.teachingUnitId, r)
                    ];
                    case 2:return o=i.sent(), t.emit("on-submit"), c.Toast.success(o.message), [
                      3, 4
                    ];
                    case 3:return i.sent(), c.Toast.error(o?o.message:a.default.t("save_error")), [
                      3, 4
                    ];
                    case 4:return n.value=!1, s=l, [
                      4, (0, u.md)(e.scoreItem.teachingUnitId)
                    ];
                    case 5:return s.value=i.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:d, loading:o, blurHandler:function(e){
              var t=e;
              d.value[
                t
              ]
              ||(d.value[
                t
              ]
              =1)
            }, onChangeAnnounceScore:function(e){
              d.value.announceScoreTime="timed_announce"===e?x().toISOString():null
            }, visibleChangeHandler:function(e){
              e&&0!==Object.keys(l.value).length&&(d.value=L(L({
              }, i.value), l.value))
            }
          }
        }
      });
      const V=(0, m.A)(U, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"performance-setting-modal", attrs:{
            width:"700", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.performanceScoreTips")))
            ])
          ]), e._v(" "), r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120, loading:e.loading
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1):e._e(), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.publishScore"), props:"announceScoreSetting"
              }
            }, [
              r("RadioGroup", {
                on:{
                  "on-change":e.onChangeAnnounceScore
                }, model:{
                  value:e.formData.announceScoreSetting, callback:function(t){
                    e.$set(e.formData, "announceScoreSetting", t)
                  }, expression:"formData.announceScoreSetting"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"no_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.doNotPublish")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"immediate_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.immediateScore")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"timed_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.scheduledPublishing")))
                ])
              ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreSetting?r("div", [
                r("DatePickerExt", {
                  staticStyle:{
                    width:"175px"
                  }, attrs:{
                    type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                  }, model:{
                    value:e.formData.announceScoreTime, callback:function(t){
                      e.$set(e.formData, "announceScoreTime", t)
                    }, expression:"formData.announceScoreTime"
                  }
                })
              ], 1):e._e()
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                required:"", props:"scoreUnit"
              }, scopedSlots:e._u([
                {
                  key:"label", fn:function(){
                    return[
                      e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.scoreUnit"))+"\n        "), r("Tooltip", {
                        attrs:{
                          content:e.$t("courseScore.scoreItemGroup.scoreUnitTip"), placement:"top"
                        }
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"tips"
                          }
                        })
                      ], 1)
                    ]
                  }, proxy:!0
                }
              ])
            }, [
              e._v(" "), r("InputNumber", {
                attrs:{
                  min:1, precision:0
                }, on:{
                  "on-blur":function(t){
                    return e.blurHandler("scoreUnit")
                  }
                }, model:{
                  value:e.formData.scoreUnit, callback:function(t){
                    e.$set(e.formData, "scoreUnit", t)
                  }, expression:"formData.scoreUnit"
                }
              }), e._v(" "), r("span", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
              ])
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                required:"", props:"standardScore"
              }, scopedSlots:e._u([
                {
                  key:"label", fn:function(){
                    return[
                      e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.baseScore"))+"\n        "), r("Tooltip", {
                        attrs:{
                          content:e.$t("courseScore.scoreItemGroup.baseScoreTip"), placement:"top"
                        }
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"tips"
                          }
                        })
                      ], 1)
                    ]
                  }, proxy:!0
                }
              ])
            }, [
              e._v(" "), r("InputNumber", {
                attrs:{
                  min:0, precision:0
                }, on:{
                  "on-blur":function(t){
                    return e.blurHandler("standardScore")
                  }
                }, model:{
                  value:e.formData.standardScore, callback:function(t){
                    e.$set(e.formData, "standardScore", t)
                  }, expression:"formData.standardScore"
                }
              }), e._v(" "), r("span", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
              ])
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
              }
            }, [
              e._v(e._s(e.$t("confirm")))
            ]), e._v(" "), r("Button", {
              on:{
                click:e.cancel
              }
            }, [
              e._v(e._s(e.$t("cancel")))
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "6a9cca4d", null).exports;
      var K=function(){
        return(K=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, W=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, H=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const q=(0, s.pM)({
        name:"rollcall-setting-modal", components:{
          SvgIcon:l.A, DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r, n=this, o=(0, I.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), i=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScore:"no_announce", announceScoreTime:null, scoreMethod:"rate", punishScoreOnAbsence:null, arriveLateAsAbsence:null, leaveEarlyAsAbsence:null, lateCombineEarlyAsAbsence:null, onSickLeaveAsAbsence:null, onPersonalLeaveAsAbsence:null, maxAbsenceTimes:null
            }
          })), l=(0, s.KR)({
          }), d=(0, s.Kh)({
            advancedSettings:!0, arriveLateAsAbsence:!1, leaveEarlyAsAbsence:!1, lateCombineEarlyAsAbsence:!1, onPersonalLeaveAsAbsence:!1, onSickLeaveAsAbsence:!1, maxAbsenceTimes:!1
          }), p=(0, s.KR)(K({
          }, i.value)), f=null!==(r=window.featureToggles.leaveConsideredAbsence)&&void 0!==r&&r;
          (0, s.wB)([
            function(){
              return d.lateCombineEarlyAsAbsence
            }, function(){
              return d.arriveLateAsAbsence
            }, function(){
              return d.leaveEarlyAsAbsence
            }, function(){
              return d.maxAbsenceTimes
            }, function(){
              return d.onPersonalLeaveAsAbsence
            }, function(){
              return d.onSickLeaveAsAbsence
            }
          ], (function(e, t){
            var r=function(e, t){
              return{
                cancelLeaveEarlyAndArriveLateSettings:e[
                  0
                ]
                !==t[
                  0
                ]
                &&!0===e[
                  0
                ], cancelLateCombineEarlysettings:e[
                  1
                ]
                !==t[
                  1
                ]
                &&!0===e[
                  1
                ]
                ||e[
                  2
                ]
                !==t[
                  2
                ]
                &&!0===e[
                  2
                ]
              }
            }
            (e, t);
            r.cancelLeaveEarlyAndArriveLateSettings&&(p.value.arriveLateAsAbsence=null, p.value.leaveEarlyAsAbsence=null, d.arriveLateAsAbsence=!1, d.leaveEarlyAsAbsence=!1), r.cancelLateCombineEarlysettings&&(p.value.lateCombineEarlyAsAbsence=null, d.lateCombineEarlyAsAbsence=!1), d.lateCombineEarlyAsAbsence?p.value.lateCombineEarlyAsAbsence=p.value.lateCombineEarlyAsAbsence||1:p.value.lateCombineEarlyAsAbsence=null, d.arriveLateAsAbsence?p.value.arriveLateAsAbsence=p.value.arriveLateAsAbsence||1:p.value.arriveLateAsAbsence=null, d.leaveEarlyAsAbsence?p.value.leaveEarlyAsAbsence=p.value.leaveEarlyAsAbsence||1:p.value.leaveEarlyAsAbsence=null, d.onPersonalLeaveAsAbsence?p.value.onPersonalLeaveAsAbsence=p.value.onPersonalLeaveAsAbsence||1:p.value.onPersonalLeaveAsAbsence=null, d.onSickLeaveAsAbsence?p.value.onSickLeaveAsAbsence=p.value.onSickLeaveAsAbsence||1:p.value.onSickLeaveAsAbsence=null, d.maxAbsenceTimes?p.value.maxAbsenceTimes=p.value.maxAbsenceTimes||1:p.value.maxAbsenceTimes=null
          }));
          (0, s.wB)((function(){
            return p.value.scored
          }), (function(t){
            p.value.groupId="false"===t?0:e.scoreItemGroups[
              0
            ].id
          }));
          var m=function(){
            d.arriveLateAsAbsence=!!p.value.arriveLateAsAbsence, d.leaveEarlyAsAbsence=!!p.value.leaveEarlyAsAbsence, d.lateCombineEarlyAsAbsence=!!p.value.lateCombineEarlyAsAbsence, d.maxAbsenceTimes=!!p.value.maxAbsenceTimes, d.onPersonalLeaveAsAbsence=!!p.value.onPersonalLeaveAsAbsence, d.onSickLeaveAsAbsence=!!p.value.onSickLeaveAsAbsence
          };
          (0, s.sV)((function(){
            return W(n, void 0, void 0, (function(){
              var t;
              return H(this, (function(r){
                switch(r.label){
                  case 0:return t=l, [
                    4, (0, u.U1)(e.scoreItem.teachingUnitId)
                  ];
                  case 1:return t.value=r.sent(), p.value=K(K({
                  }, p.value), l.value), p.value.announceScore=p.value.announceScoreTime?"timed_announce":"no_announce", m(), [
                    2
                  ]
                }
              }))
            }))
          }));
          return{
            ok:function(){
              return W(n, void 0, void 0, (function(){
                var r, n;
                return H(this, (function(s){
                  switch(s.label){
                    case 0:return s.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, u.br)(e.scoreItem.teachingUnitId, p.value)
                    ];
                    case 1:return r=s.sent(), t.emit("on-submit"), c.Toast.success(r.message), [
                      3, 3
                    ];
                    case 2:return s.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return o.value=!1, n=l, [
                      4, (0, u.U1)(e.scoreItem.teachingUnitId)
                    ];
                    case 4:return n.value=s.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              o.value=!1
            }, show:o, formData:p, uiSetting:d, onChangeAnnounceScore:function(e){
              p.value.announceScoreTime="timed_announce"===e?x().toISOString():null
            }, onChangeScoreMethod:function(e){
              p.value.punishScoreOnAbsence="count"===e?1:null
            }, inputNumberBlurHandler:function(e){
              var t=e;
              p.value[
                t
              ]
              ||(p.value[
                t
              ]
              =1)
            }, visibleChangeHandler:function(e){
              e&&0!==Object.keys(l.value).length&&(p.value=K(K({
              }, i.value), l.value), p.value.announceScore=p.value.announceScoreTime?"timed_announce":"no_announce", m())
            }, diableLeaveRollcallSetting:f
          }
        }
      });
      const z=(0, m.A)(q, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"rollcall-setting-modal", attrs:{
            width:"900", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), "rate"===e.formData.scoreMethod?r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips1")))
            ]):r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips2")))
            ])
          ]), e._v(" "), r("div", {
            staticClass:"modal-content"
          }, [
            r("Form", {
              staticClass:"setting-form-area", attrs:{
                model:e.formData, "label-position":"left", "label-width":120
              }
            }, [
              r("FormItem", {
                class:{
                  "no-margin-bottom":"true"===e.formData.scored
                }, attrs:{
                  label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
                }
              }, [
                r("RadioGroup", {
                  model:{
                    value:e.formData.scored, callback:function(t){
                      e.$set(e.formData, "scored", t)
                    }, expression:"formData.scored"
                  }
                }, [
                  r("Radio", {
                    attrs:{
                      label:"true"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("yes")))
                    ])
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"false"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("no")))
                    ])
                  ])
                ], 1)
              ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
                staticClass:"no-margin-bottom select-score-group", attrs:{
                  label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
                }
              }, [
                r("Select", {
                  model:{
                    value:e.formData.groupId, callback:function(t){
                      e.$set(e.formData, "groupId", t)
                    }, expression:"formData.groupId"
                  }
                }, e._l(e.scoreItemGroups, (function(e){
                  return r("Option", {
                    key:e.id, attrs:{
                      value:e.id, label:e.name
                    }
                  })
                })), 1)
              ], 1):e._e(), e._v(" "), r("FormItem", {
                attrs:{
                  label:e.$t("courseScore.scoreItemGroup.publishScore"), props:"announceScore"
                }
              }, [
                r("RadioGroup", {
                  on:{
                    "on-change":e.onChangeAnnounceScore
                  }, model:{
                    value:e.formData.announceScore, callback:function(t){
                      e.$set(e.formData, "announceScore", t)
                    }, expression:"formData.announceScore"
                  }
                }, [
                  r("Radio", {
                    attrs:{
                      label:"no_announce"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.willNotPublish")))
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"timed_announce"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.customPublishScoreTime")))
                  ])
                ], 1), e._v(" "), "timed_announce"===e.formData.announceScore?r("div", [
                  r("DatePickerExt", {
                    staticStyle:{
                      width:"175px"
                    }, attrs:{
                      type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                    }, model:{
                      value:e.formData.announceScoreTime, callback:function(t){
                        e.$set(e.formData, "announceScoreTime", t)
                      }, expression:"formData.announceScoreTime"
                    }
                  })
                ], 1):e._e()
              ], 1)
            ], 1), e._v(" "), r("div", {
              staticClass:"all-setting-area"
            }, [
              r("Row", [
                r("Col", {
                  staticClass:"icon-area", attrs:{
                    span:"6"
                  }
                }, [
                  r("div", {
                    staticClass:"icon-wrapper"
                  }, [
                    r("SvgIcon", {
                      attrs:{
                        name:"activity-timing"
                      }
                    })
                  ], 1), e._v(" "), r("div", {
                    staticClass:"icon-tip"
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreMethod")))
                  ])
                ]), e._v(" "), r("Col", {
                  staticClass:"radios-area", attrs:{
                    span:"18"
                  }
                }, [
                  r("RadioGroup", {
                    attrs:{
                      vertical:""
                    }, on:{
                      "on-change":e.onChangeScoreMethod
                    }, model:{
                      value:e.formData.scoreMethod, callback:function(t){
                        e.$set(e.formData, "scoreMethod", t)
                      }, expression:"formData.scoreMethod"
                    }
                  }, [
                    r("Radio", {
                      attrs:{
                        label:"rate"
                      }
                    }, [
                      e._v("\n              "+e._s(e.$t("rollcallScoreSettingPage.scoreWithAttendance"))+"\n              "), r("div", {
                        staticClass:"radio-tips"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips1")))
                      ])
                    ]), e._v(" "), r("Radio", {
                      attrs:{
                        label:"count"
                      }
                    }, [
                      e._v("\n              "+e._s(e.$t("courseScore.scoreItemGroup.scoreWithRule"))+"\n              "), r("div", {
                        staticClass:"radio-tips"
                      }, [
                        e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.punishScoreOnAbsence"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:"count"!==e.formData.scoreMethod
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("punishScoreOnAbsence")
                            }
                          }, model:{
                            value:e.formData.punishScoreOnAbsence, callback:function(t){
                              e.$set(e.formData, "punishScoreOnAbsence", t)
                            }, expression:"formData.punishScoreOnAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("courseScore.scoreItemGroup.points"))+"\n              ")
                      ], 1)
                    ])
                  ], 1)
                ], 1)
              ], 1), e._v(" "), r("div", {
                staticClass:"advance-setting-area"
              }, [
                r("div", {
                  staticClass:"button-area", on:{
                    click:function(t){
                      t.stopPropagation(), e.uiSetting.advancedSettings=!e.uiSetting.advancedSettings
                    }
                  }
                }, [
                  e.uiSetting.advancedSettings?r("div", [
                    e._v("\n            "+e._s(e.$t("hideAdvanceControl"))+"\n            "), r("i", {
                      staticClass:"font font font-down-arrow"
                    })
                  ]):r("div", [
                    e._v("\n            "+e._s(e.$t("showAdvanceControl"))+"\n            "), r("i", {
                      staticClass:"font font-up-arrow"
                    })
                  ])
                ]), e._v(" "), e.uiSetting.advancedSettings?r("Row", [
                  r("Col", {
                    attrs:{
                      span:"10"
                    }
                  }, [
                    r("div", {
                      staticClass:"setting-area"
                    }, [
                      r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.arriveLateAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "arriveLateAsAbsence", t)
                            }, expression:"uiSetting.arriveLateAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallRecordPage.arriveLate"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.arriveLateAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("arriveLateAsAbsence")
                            }
                          }, model:{
                            value:e.formData.arriveLateAsAbsence, callback:function(t){
                              e.$set(e.formData, "arriveLateAsAbsence", t)
                            }, expression:"formData.arriveLateAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.leaveEarlyAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "leaveEarlyAsAbsence", t)
                            }, expression:"uiSetting.leaveEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallRecordPage.leaveEarly"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.leaveEarlyAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("leaveEarlyAsAbsence")
                            }
                          }, model:{
                            value:e.formData.leaveEarlyAsAbsence, callback:function(t){
                              e.$set(e.formData, "leaveEarlyAsAbsence", t)
                            }, expression:"formData.leaveEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.lateCombineEarlyAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "lateCombineEarlyAsAbsence", t)
                            }, expression:"uiSetting.lateCombineEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallRecordPage.lateCombineEarly"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.lateCombineEarlyAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("lateCombineEarlyAsAbsence")
                            }
                          }, model:{
                            value:e.formData.lateCombineEarlyAsAbsence, callback:function(t){
                              e.$set(e.formData, "lateCombineEarlyAsAbsence", t)
                            }, expression:"formData.lateCombineEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          attrs:{
                            disabled:e.diableLeaveRollcallSetting
                          }, model:{
                            value:e.uiSetting.onPersonalLeaveAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "onPersonalLeaveAsAbsence", t)
                            }, expression:"uiSetting.onPersonalLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.personalLeave"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:e.diableLeaveRollcallSetting||!e.uiSetting.onPersonalLeaveAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("onPersonalLeaveAsAbsence")
                            }
                          }, model:{
                            value:e.formData.onPersonalLeaveAsAbsence, callback:function(t){
                              e.$set(e.formData, "onPersonalLeaveAsAbsence", t)
                            }, expression:"formData.onPersonalLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          attrs:{
                            disabled:e.diableLeaveRollcallSetting
                          }, model:{
                            value:e.uiSetting.onSickLeaveAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "onSickLeaveAsAbsence", t)
                            }, expression:"uiSetting.onSickLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.sickLeave"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:e.diableLeaveRollcallSetting||!e.uiSetting.onSickLeaveAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("onSickLeaveAsAbsence")
                            }
                          }, model:{
                            value:e.formData.onSickLeaveAsAbsence, callback:function(t){
                              e.$set(e.formData, "onSickLeaveAsAbsence", t)
                            }, expression:"formData.onSickLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.maxAbsenceTimes, callback:function(t){
                              e.$set(e.uiSetting, "maxAbsenceTimes", t)
                            }, expression:"uiSetting.maxAbsenceTimes"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.reach"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.maxAbsenceTimes
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("maxAbsenceTimes")
                            }
                          }, model:{
                            value:e.formData.maxAbsenceTimes, callback:function(t){
                              e.$set(e.formData, "maxAbsenceTimes", t)
                            }, expression:"formData.maxAbsenceTimes"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsZeroScore"))+"\n              ")
                      ], 1)
                    ])
                  ]), e._v(" "), r("Col", {
                    attrs:{
                      span:"14"
                    }
                  }, [
                    r("div", {
                      staticClass:"tip-area"
                    }, [
                      e._v("\n              "+e._s(e.$t("rollcallScoreSettingPage.settingInfo"))+"\n              "), r("i", {
                        staticClass:"arrow-left"
                      })
                    ])
                  ])
                ], 1):e._e()
              ], 1)
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
              }
            }, [
              e._v(e._s(e.$t("confirm")))
            ]), e._v(" "), r("Button", {
              on:{
                click:e.cancel
              }
            }, [
              e._v(e._s(e.$t("cancel")))
            ])
          ], 1)
        ])
      }), [
      ], !1, null, "ed15eaae", null).exports;
      var Y=function(){
        return(Y=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, J=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Z=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const X=(0, s.pM)({
        name:"questionnaire-setting-modal", components:{
          DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, I.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScoreType:e.scoreItem.announceScoreType, announceScoreTime:e.scoreItem.announceScoreTime
            }
          })), i=(0, s.KR)(Y({
          }, o.value));
          (0, s.wB)((function(){
            return i.value.scored
          }), (function(t){
            "false"===t?(i.value.groupId=0, i.value.announceScoreType="no_announce", i.value.announceScoreTime=null):i.value.groupId=e.scoreItemGroups[
              0
            ].id
          }));
          return{
            ok:function(){
              return J(r, void 0, void 0, (function(){
                var r;
                return Z(this, (function(o){
                  switch(o.label){
                    case 0:return o.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, u.np)(e.scoreItem.id, i.value)
                    ];
                    case 1:return r=o.sent(), t.emit("on-submit"), c.Toast.success(r.message), [
                      3, 3
                    ];
                    case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return n.value=!1, [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:i, onChangeAnnounceScore:function(e){
              i.value.announceScoreTime="no_announce"===e?null:x().toISOString()
            }, visibleChangeHandler:function(e){
              e&&(i.value=Y({
              }, o.value))
            }
          }
        }
      });
      const Q=(0, m.A)(X, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"questionnaire-setting-modal", attrs:{
            width:"620", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("div", {
              staticClass:"scored-tip scored-true"
            }, [
              r("i", {
                staticClass:"arrow-top"
              }), e._v(" "), r("div", {
                staticClass:"group-row"
              }, [
                r("div", {
                  staticClass:"required-label"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreGroupName")))
                ]), e._v(" "), r("Select", {
                  staticClass:"select-group", model:{
                    value:e.formData.groupId, callback:function(t){
                      e.$set(e.formData, "groupId", t)
                    }, expression:"formData.groupId"
                  }
                }, e._l(e.scoreItemGroups, (function(e){
                  return r("Option", {
                    key:e.id, attrs:{
                      value:e.id, label:e.name
                    }
                  })
                })), 1)
              ], 1), e._v(" "), r("div", {
                staticClass:"tip-row"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.questionnaireScoredTip")))
              ])
            ]):r("div", {
              staticClass:"scored-tip scored-false"
            }, [
              r("i", {
                staticClass:"arrow-top"
              }), e._v(" "), r("div", {
                staticClass:"tip-row"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.questionnaireNotScoredTip")))
              ])
            ])
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
              }
            }, [
              e._v(e._s(e.$t("confirm")))
            ]), e._v(" "), r("Button", {
              on:{
                click:e.cancel
              }
            }, [
              e._v(e._s(e.$t("cancel")))
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "1f7e2ea6", null).exports, ee=(0, s.pM)({
        name:"score-setting-modal", components:{
          common:P, onlineVideoCompleteness:F, performance:V, rollcall:z, questionnaire:Q
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          return{
            visible:(0, I.hRP)(e, "value", t.emit, {
              eventName:"input"
            }), comp:(0, s.EW)((function(){
              return"performance_score_setting"===e.scoreItem.type?V:"rollcall_score_setting"===e.scoreItem.type?z:"online_video_completeness_score_setting"===e.scoreItem.type?F:"questionnaire_activity"===e.scoreItem.type?Q:P
            }))
          }
        }
      });
      const te=(0, m.A)(ee, (function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)(e.comp, {
          tag:"component", attrs:{
            "score-item":e.scoreItem, "score-item-groups":e.scoreItemGroups
          }, on:{
            "on-submit":function(t){
              return e.$emit("on-submit")
            }
          }, model:{
            value:e.visible, callback:function(t){
              e.visible=t
            }, expression:"visible"
          }
        })
      }), [
      ], !1, null, "f3269d22", null).exports;
      var re=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, ne=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const oe=(0, s.pM)({
        props:{
          course:{
            type:Object
          }, allowChangeGroups:{
            type:Boolean, default:!0
          }
        }, components:{
          TooltipExt:i.A, AddScoreGroupModal:v, DeleteScoreGroupModal:y, EditScoreGroupModal:C, SvgIcon:l.A, ScoreItemSettingModal:te
        }, setup:function(e, t){
          var r=this, n=(t.emit, (0, s.KR)(!1)), o=(0, s.KR)(!1), i=(0, s.KR)(!1), l=(0, s.KR)(0), d=(0, s.KR)(0), p=(0, s.KR)(""), f=(0, s.KR)(!1), m=(0, s.KR)(), v=(0, s.KR)([
          ]), h=[
            {
              title:a.default.t("courseScore.scoreItemGroup.scoreItem"), key:"name", slot:"name"
            }, {
              title:a.default.t("courseScore.scoreItemGroup.weight"), key:"weight", slot:"weight"
            }, {
              title:a.default.t("courseScore.scoreItemGroup.operation"), key:"option", slot:"option", width:140
            }
          ], g=(0, s.EW)((function(){
            return c._.sum(c._.map(v.value, (function(e){
              return Number(e.percentage)
            }))).toFixed(1)
          })), _=(0, s.EW)((function(){
            var e={
            };
            return v.value.forEach((function(t){
              e[
                t.id
              ]
              =c._.sum(c._.map(t.items, (function(e){
                return Number(e.weight)
              }))).toFixed(1)
            })), e
          })), y=(0, s.EW)((function(){
            var e={
            };
            return v.value.forEach((function(t){
              e[
                t.id
              ]
              =c._.sum(c._.map(t.items, (function(e){
                return e.customWeightEnabled?Number(e.weight):0
              }))).toFixed(1)
            })), e
          })), S=(0, s.EW)((function(){
            var e={
            };
            return v.value.forEach((function(t){
              t.items.forEach((function(t){
                e[
                  t.id
                ]
                =t
              }))
            })), e
          })), b=c._.debounce((function(){
            return re(r, void 0, void 0, (function(){
              return ne(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, (0, u.Px)(e.course.id, v.value.filter((function(e){
                      return e.id>0
                    })))
                  ];
                  case 1:return t.sent(), c.Toast.success(a.default.t("save_success")), [
                    2
                  ]
                }
              }))
            }))
          }), 1e3), w=function(e){
            var t=e.items, r=t.filter((function(e){
              return e.customWeightEnabled
            })), n=t.filter((function(e){
              return!e.customWeightEnabled
            })), o=+(100-r.reduce((function(e, t){
              return e+(parseFloat(t.weight)||0)
            }), 0)).toFixed(1), a=n.length;
            if(0!==a){
              var s=Math.floor(o/a*10)/10, i=+(o-(s=s<.1?0:s)*a).toFixed(1), c=0;
              t.forEach((function(e, t){
                if(!e.customWeightEnabled){
                  if(c===a-1){
                    var r=+(s+i).toFixed(1);
                    e.weight=r<.1?0:r
                  }
                  else e.weight=s;
                  c++
                }
              }))
            }
          }, C=(0, s.EW)((function(){
            return v.value.some((function(e){
              return!!e.importedFrom
            }))
          }));
          (0, s.wB)((function(){
            return e.course
          }), (function(){
            return re(r, void 0, void 0, (function(){
              var t;
              return ne(this, (function(r){
                switch(r.label){
                  case 0:return e.course&&e.course.id?(t=v, [
                    4, (0, u.Ad)(e.course.id)
                  ]):[
                    3, 2
                  ];
                  case 1:t.value=r.sent(), v.value.length>0&&v.value.forEach((function(e){
                    0!==e.id&&w(e)
                  })), r.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          }), {
            immediate:!0
          });
          return{
            goBackScorePage:function(){
              var t;
              window.location.href="/course/".concat(null===(t=e.course)||void 0===t?void 0:t.id, "/score")
            }, editScoreItemSetting:function(e){
              m.value=e, f.value=!0
            }, columns:h, scoreItemGroups:v, editGroup:function(t, n){
              return re(r, void 0, void 0, (function(){
                var r;
                return ne(this, (function(o){
                  switch(o.label){
                    case 0:return(null===(r=e.course)||void 0===r?void 0:r.id)?[
                      4, (0, u.YL)(e.course.id, t, n)
                    ]
                    :[
                      2
                    ];
                    case 1:return o.sent(), c._.find(v.value, (function(e){
                      return e.id===t
                    })).name=n, c.Toast.success(a.default.t("save_success")), [
                      2
                    ]
                  }
                }))
              }))
            }, deleteGroup:function(){
              return re(r, void 0, void 0, (function(){
                var t, r;
                return ne(this, (function(n){
                  switch(n.label){
                    case 0:return(null===(r=e.course)||void 0===r?void 0:r.id)?[
                      4, (0, u.BT)(e.course.id, l.value)
                    ]
                    :[
                      2
                    ];
                    case 1:return n.sent(), l.value=0, c.Toast.success(a.default.t("save_success")), t=v, [
                      4, (0, u.Ad)(e.course.id)
                    ];
                    case 2:return t.value=n.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, getScoreItemIcon:function(e){
              return"homework_activity"===e?"font-syllabus-homework":"forum_activity"===e?"font-syllabus-forum":"exam_activity"===e?"font-syllabus-exam":"questionnaire_activity"===e?"font-syllabus-questionnaire":"web_link_activity"===e?"font-syllabus-web-link":"classroom_exam_activity"===e?"font-syllabus-classroom":"virtual_experiment_activity"===e?window.orgSettings.enableLamsLessonVirtualExperiment?"font-syllabus-lams-lesson-virtual-experiment":"font-syllabus-virtual-experiment":"online_video_completeness_score_setting"===e?"font-score-item-video-completeness":"performance_score_setting"===e?"font-score-item-performance":"rollcall_score_setting"===e?"font-score-item-rollcall":"interaction_activity"===e?"font-syllabus-interaction":"font-score-item-custom"
            }, getActivityJumpUrl:function(t){
              var r, n, o, a, s, i;
              return"exam_activity"===t.type?"/course/".concat(null===(r=e.course)||void 0===r?void 0:r.id, "/learning-activity#/exam/").concat(t.referrerId):"classroom_exam_activity"===t.type?"/course/".concat(null===(n=e.course)||void 0===n?void 0:n.id, "/learning-activity#/classroom/").concat(t.referrerId):"questionnaire_activity"===t.type?"/course/".concat(null===(o=e.course)||void 0===o?void 0:o.id, "/learning-activity#/questionnaire/").concat(t.referrerId):"performance_score_setting"===t.type?"/course/".concat(null===(a=e.course)||void 0===a?void 0:a.id, "/performance"):"rollcall_score_setting"===t.type?"/course/".concat(null===(s=e.course)||void 0===s?void 0:s.id, "/rollcall"):"/course/".concat(null===(i=e.course)||void 0===i?void 0:i.id, "/learning-activity#/").concat(t.referrerId)
            }, showAddGroupModal:n, openAddGroupModal:function(){
              n.value=!0
            }, createGroup:function(t){
              return re(r, void 0, void 0, (function(){
                var r, n;
                return ne(this, (function(o){
                  switch(o.label){
                    case 0:return(null===(n=e.course)||void 0===n?void 0:n.id)?[
                      4, (0, u.UT)(e.course.id, t)
                    ]
                    :[
                      2
                    ];
                    case 1:return o.sent(), c.Toast.success(a.default.t("save_success")), r=v, [
                      4, (0, u.Ad)(e.course.id)
                    ];
                    case 2:return r.value=o.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, showDeleteGroupModal:o, openDeleteGroupModal:function(e){
              o.value=!0, l.value=e
            }, showEditGroupModal:i, openEditGroupModal:function(e){
              d.value=e.id, p.value=e.name, i.value=!0
            }, needEditGroupName:p, needEditGroupId:d, currentGroupsPercentage:g, currentGroupItemsPercentageMap:_, groupItemsMap:S, groupPercentageChange:function(e, t){
              g.value>100&&(0, s.dY)((function(){
                t.percentage=e-g.value+100
              })), b()
            }, itemWeightChange:function(e, t, r){
              y.value[
                t.id
              ]
              >100&&(0, s.dY)((function(){
                r.weight=e-y.value[
                  t.id
                ]
                +100
              })), w(t), b()
            }, customWeightEnabledChange:function(e, t){
              e||w(t), b()
            }, showSettingModal:f, currentScoreItem:m, afterScoreItemSettingUpdated:function(){
              return re(r, void 0, void 0, (function(){
                var t;
                return ne(this, (function(r){
                  switch(r.label){
                    case 0:return e.course?(t=v, [
                      4, (0, u.Ad)(e.course.id)
                    ]):[
                      2
                    ];
                    case 1:return t.value=r.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, groupImportFromExternal:C
          }
        }
      });
      const ae=(0, m.A)(oe, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-group-setting-content"
        }, [
          r("div", {
            staticClass:"main-content"
          }, [
            r("div", {
              staticClass:"header-content"
            }, [
              r("div", {
                staticClass:"go-back-link", on:{
                  click:e.goBackScorePage
                }
              }, [
                r("i", {
                  staticClass:"font font-arrow-left-middle"
                }), e._v(" "), r("span", [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.gradeRatioSetting")))
                ])
              ])
            ]), e._v(" "), r("div", {
              staticClass:"body-content"
            }, [
              r("div", {
                staticClass:"group-percentage-tip", class:{
                  incomplete:e.currentGroupsPercentage<100
                }
              }, [
                e.currentGroupsPercentage<100?r("Icon", {
                  staticClass:"warning", attrs:{
                    type:"ios-alert", size:"18"
                  }
                }):r("i", {
                  staticClass:"font font-success"
                }), e._v(" "), r("span", {
                  domProps:{
                    innerHTML:e._s(e.$t("courseScore.scoreItemGroup.percentageTip", [
                      e.currentGroupsPercentage, (100-e.currentGroupsPercentage).toFixed(1)
                    ]))
                  }
                })
              ], 1), e._v(" "), r("div", {
                staticClass:"title-area-div"
              }, [
                r("div", {
                  staticClass:"group-count"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.total", [
                    e.scoreItemGroups.length-1
                  ])))
                ]), e._v(" "), !e.groupImportFromExternal&&e.allowChangeGroups?r("a", {
                  on:{
                    click:e.openAddGroupModal
                  }
                }, [
                  r("i", {
                    staticClass:"font font-add-new-elem"
                  }), e._v(" "), r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.createGroup")))
                  ])
                ]):e._e()
              ]), e._v(" "), e._l(e.scoreItemGroups, (function(t){
                return r("div", {
                  key:t.id, staticClass:"item-group"
                }, [
                  r("div", {
                    staticClass:"item-group-header"
                  }, [
                    r("div", {
                      staticClass:"left-area"
                    }, [
                      r("span", {
                        staticClass:"group-name"
                      }, [
                        e._v(e._s(t.name))
                      ]), e._v(" "), t.id>0?r("InputNumber", {
                        attrs:{
                          max:100, min:0, disabled:e.groupImportFromExternal, precision:0, "active-change":!1
                        }, on:{
                          "on-change":function(r){
                            return e.groupPercentageChange(r, t)
                          }
                        }, model:{
                          value:t.percentage, callback:function(r){
                            e.$set(t, "percentage", r)
                          }, expression:"group.percentage"
                        }
                      }):e._e(), e._v(" "), t.id>0?r("span", [
                        e._v("%")
                      ]):e._e()
                    ], 1), e._v(" "), t.id>0&&!e.groupImportFromExternal&&e.allowChangeGroups?r("div", {
                      staticClass:"right-area"
                    }, [
                      r("a", {
                        on:{
                          click:function(r){
                            return e.openEditGroupModal(t)
                          }
                        }
                      }, [
                        r("i", {
                          staticClass:"font font-edit"
                        })
                      ]), e._v(" "), r("a", {
                        on:{
                          click:function(r){
                            return e.openDeleteGroupModal(t.id)
                          }
                        }
                      }, [
                        r("i", {
                          staticClass:"font font-delete"
                        })
                      ])
                    ]):e._e()
                  ]), e._v(" "), r("div", {
                    staticClass:"item-group-body"
                  }, [
                    0!==t.id?r("div", {
                      staticClass:"item-group-percentage-tip", class:{
                        incomplete:e.currentGroupItemsPercentageMap[
                          t.id
                        ]
                        <100
                      }
                    }, [
                      r("span", {
                        domProps:{
                          innerHTML:e._s(e.$t("courseScore.scoreItemGroup.itemGroupPercentageTip", [
                            e.currentGroupItemsPercentageMap[
                              t.id
                            ], (100-e.currentGroupItemsPercentageMap[
                              t.id
                            ]).toFixed(1)
                          ]))
                        }
                      })
                    ]):e._e(), e._v(" "), r("Table", {
                      attrs:{
                        columns:e.columns, data:t.items, size:"small"
                      }, scopedSlots:e._u([
                        {
                          key:"name", fn:function(t){
                            var n=t.row;
                            return[
                              r("div", {
                                staticClass:"score-item-name"
                              }, [
                                r("i", {
                                  staticClass:"font", class:e.getScoreItemIcon(n.type)
                                }), e._v(" "), [
                                  "online_video_completeness_score_setting", "custom"
                                ].includes(n.type)?r("TooltipExt", {
                                  attrs:{
                                    text:n.name
                                  }
                                }):r("a", {
                                  staticClass:"activity-jump-btn", attrs:{
                                    href:e.getActivityJumpUrl(n), target:"_blank"
                                  }
                                }, [
                                  r("TooltipExt", {
                                    attrs:{
                                      text:n.name
                                    }
                                  })
                                ], 1)
                              ], 1)
                            ]
                          }
                        }, {
                          key:"weight", fn:function(n){
                            var o=n.row;
                            return[
                              r("div", {
                                staticClass:"item-weight-div"
                              }, [
                                r("div", {
                                  staticClass:"weight-div"
                                }, [
                                  r("InputNumber", {
                                    attrs:{
                                      max:100, min:0, precision:1, "active-change":!1, disabled:!e.groupItemsMap[
                                        o.id
                                      ].customWeightEnabled
                                    }, on:{
                                      "on-change":function(r){
                                        return e.itemWeightChange(r, t, e.groupItemsMap[
                                          o.id
                                        ])
                                      }
                                    }, model:{
                                      value:e.groupItemsMap[
                                        o.id
                                      ].weight, callback:function(t){
                                        e.$set(e.groupItemsMap[
                                          o.id
                                        ], "weight", t)
                                      }, expression:"groupItemsMap[row.id].weight"
                                    }
                                  }), e._v(" "), r("span", [
                                    e._v("%")
                                  ])
                                ], 1), e._v(" "), t.id>0?r("Checkbox", {
                                  on:{
                                    "on-change":function(r){
                                      return e.customWeightEnabledChange(r, t)
                                    }
                                  }, model:{
                                    value:e.groupItemsMap[
                                      o.id
                                    ].customWeightEnabled, callback:function(t){
                                      e.$set(e.groupItemsMap[
                                        o.id
                                      ], "customWeightEnabled", t)
                                    }, expression:"groupItemsMap[row.id].customWeightEnabled"
                                  }
                                }, [
                                  e._v("\n                  "+e._s(e.$t("courseScore.scoreItemGroup.customWeight"))+"\n                ")
                                ]):e._e()
                              ], 1)
                            ]
                          }
                        }, {
                          key:"option", fn:function(t){
                            var n=t.row;
                            return[
                              r("div", {
                                staticClass:"options-div"
                              }, [
                                r("a", {
                                  on:{
                                    click:function(t){
                                      return e.editScoreItemSetting(n)
                                    }
                                  }
                                }, [
                                  e._v(e._s(e.$t("courseScore.scoreItemGroup.settings")))
                                ])
                              ])
                            ]
                          }
                        }
                      ], null, !0)
                    })
                  ], 1)
                ])
              }))
            ], 2)
          ]), e._v(" "), r("AddScoreGroupModal", {
            on:{
              "on-submit":e.createGroup
            }, model:{
              value:e.showAddGroupModal, callback:function(t){
                e.showAddGroupModal=t
              }, expression:"showAddGroupModal"
            }
          }), e._v(" "), r("DeleteScoreGroupModal", {
            on:{
              "on-submit":e.deleteGroup
            }, model:{
              value:e.showDeleteGroupModal, callback:function(t){
                e.showDeleteGroupModal=t
              }, expression:"showDeleteGroupModal"
            }
          }), e._v(" "), r("EditScoreGroupModal", {
            attrs:{
              "group-id":e.needEditGroupId, name:e.needEditGroupName
            }, on:{
              "on-submit":e.editGroup
            }, model:{
              value:e.showEditGroupModal, callback:function(t){
                e.showEditGroupModal=t
              }, expression:"showEditGroupModal"
            }
          }), e._v(" "), e.currentScoreItem?r("ScoreItemSettingModal", {
            attrs:{
              "score-item":e.currentScoreItem, "score-item-groups":e.scoreItemGroups.filter((function(e){
                return e.id
              }))
            }, on:{
              "on-submit":e.afterScoreItemSettingUpdated
            }, model:{
              value:e.showSettingModal, callback:function(t){
                e.showSettingModal=t
              }, expression:"showSettingModal"
            }
          }):e._e()
        ], 1)
      }), [
      ], !1, null, "b705a394", null).exports;
      r(906048);
      var se=r(88595), ie=r(33400), ce=r(660787), le=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, ue=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const de=(0, s.pM)({
        components:{
          TooltipExt:i.A, Avatar:ie.A
        }, props:{
          course:{
            type:Object
          }
        }, setup:function(e, t){
          var r, n, o=this, i=(t.emit, null===(n=null===(r=window.globalData)||void 0===r?void 0:r.user)||void 0===n?void 0:n.id), l=(0, s.KR)(), d=(0, s.KR)(), p=(0, s.KR)(), f=(0, s.KR)(), m=(0, s.KR)([
          ]), v=(0, s.KR)([
          ]), h=(0, s.KR)([
          ]), g=(0, s.KR)([
          ]), _=(0, s.KR)([
          ]), y=(0, s.KR)([
          ]), S=(0, s.KR)([
          ]), b=(0, s.KR)({
          }), w=(0, s.KR)({
          }), C=(0, s.KR)({
          }), I=(0, s.KR)(), x=(0, s.KR)(), k=(0, s.KR)([
          ]), A=(0, s.KR)(!0), T=[
            {
              title:a.default.t("courseScore.scoreItemGroup.scoreItem"), key:"name", slot:"name"
            }, {
              title:a.default.t("courseScore.scoreItemGroup.weightedScore"), key:"weightedScore", slot:"score", sortable:!0
            }
          ], E=function(e, t){
            var r=Math.round(e*(t/100)*10)/10;
            return Number.isInteger(r)?Math.trunc(r):r
          }, $=function(e){
            return"scored"===e?"published":[
              "unpublished", "unsubmitted", "unmarked", "unscored", "published"
            ].includes(e)?e:[
              "un_submitted"
            ].includes(e)?"unsubmitted":[
              "un_marked"
            ].includes(e)?"unmarked":[
              "un_scored"
            ].includes(e)?"unscored":"unpublished"
          }, P=(0, s.EW)((function(){
            var e=!1, t=0;
            return c._.forEach(m.value, (function(r){
              var n=0;
              c._.forEach(r.items, (function(t){
                [
                  "unpublished", "unsubmitted", "unmarked", "unscored"
                ].includes(t.status)?"unpublished"===t.status&&(e=!0):n+=t.rawScore*t.weight/100
              })), t+=n*r.percentage/100
            })), e?I.value.rawScore:E(t, 100)
          })), D=(0, s.EW)((function(){
            var e, t, r;
            return(null===(e=I.value)||void 0===e?void 0:e.instructorScoreTime)?I.value.totalScore:null!==(t=P.value)&&void 0!==t?t:null===(r=I.value)||void 0===r?void 0:r.totalScore
          })), N=(0, s.EW)((function(){
            return!!x.value&&("immediate_announce"===x.value.announceScoreType||"timed_announce"===x.value.announceScoreType&&x.value.isAnnounceScoreTimePassed)
          })), R=(0, s.EW)((function(){
            if(!x.value)return"--";
            if("immediate_announce"===x.value.announceRawScoreType)return String(Math.round(10*P.value)/10);
            if("timed_announce"===x.value.announceRawScoreType){
              if(x.value.isAnnounceRawScoreTimePassed)return String(Math.round(10*P.value)/10);
              var e=se.A.formatDatetime(x.value.announceRawScoreTime, "YYYY-MM-DD HH:mm");
              return a.default.t("courseScore.scoreItemGroup.publishTip", [
                e
              ])
            }
            return a.default.t("courseScore.scoreItemGroup.unpublish")
          })), M=(0, s.EW)((function(){
            if(!x.value)return"--";
            var e=se.A.formatDatetime(x.value.announceScoreTime, "YYYY-MM-DD HH:mm");
            return a.default.t("courseScore.scoreItemGroup.publishTip", [
              e
            ])
          })), O=function(){
            return le(o, void 0, void 0, (function(){
              var t, r, n, o, a, s, T, P, D, N, R, M, O, G, F, L, B, j, U;
              return ue(this, (function(V){
                switch(V.label){
                  case 0:return(null===(U=e.course)||void 0===U?void 0:U.id)?[
                    4, Promise.all([
                      (0, ce.B)(e.course.id, i), (0, u._p)(e.course.id), (0, u.HE)(e.course.id), (0, u.kX)(e.course.id), (0, u.ke)(e.course.id), (0, u.LL)(e.course.id), (0, u.g7)(e.course.id), (0, u.WD)(e.course.id), (0, u.BI)(e.course.id), (0, u.Pj)(e.course.id), (0, u.rZ)(e.course.id), (0, u.BV)(e.course.id), (0, u.K3)(e.course.id), (0, u._i)(e.course.id), (0, u.Qi)(e.course.id), (0, u.zc)(e.course.id), (0, u.DU)(e.course.id)
                    ])
                  ]
                  :[
                    2
                  ];
                  case 1:return t=V.sent(), r=t[
                    0
                  ], n=t[
                    1
                  ], o=t[
                    2
                  ], a=t[
                    3
                  ], s=t[
                    4
                  ], T=t[
                    5
                  ], P=t[
                    6
                  ], D=t[
                    7
                  ], N=t[
                    8
                  ], R=t[
                    9
                  ], M=t[
                    10
                  ], O=t[
                    11
                  ], G=t[
                    12
                  ], F=t[
                    13
                  ], L=t[
                    14
                  ], B=t[
                    15
                  ], j=t[
                    16
                  ], l.value=r, d.value=n, p.value=o, f.value=a, v.value=s, h.value=T, b.value=P, S.value=D, w.value=N, g.value=R, _.value=M, y.value=O, C.value=G, I.value=F, k.value=L, x.value=B, m.value=j, c._.forEach(m.value, (function(e){
                    c._.forEach(e.items, (function(t){
                      if("rollcall_score_setting"===t.type&&d.value)d.value.public&&(t.rawScore=d.value.score, t.weightedScore=E(t.rawScore, t.weight)), t.status=d.value.public?"published":"unpublished";
                      else if("performance_score_setting"===t.type&&p.value)p.value.scoreAnnounced&&(t.rawScore=p.value.score, t.weightedScore=E(t.rawScore, t.weight)), t.status=p.value.scoreAnnounced?"published":"unpublished";
                      else if("online_video_completeness_score_setting"===t.type&&f.value)t.rawScore=f.value.score, t.weightedScore=E(t.rawScore, t.weight), t.status="published";
                      else if("interaction_activity"===t.type){
                        var r=c._.find(v.value, (function(e){
                          return e.activityId===t.referrerId
                        }));
                        r?(t.rawScore=r.score, t.weightedScore=E(t.rawScore, t.weight), t.status="published"):t.status="unscored"
                      }
                      else if("exam_activity"===t.type){
                        var n=c._.find(h.value, (function(e){
                          return e.activityId===t.referrerId
                        })), o="unsubmitted";
                        b.value[
                          t.referrerId
                        ]
                        &&b.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]
                        &&(o=$(b.value[
                          t.referrerId
                        ]
                        [
                          i
                        ])), n&&t.isAnnounceScore?(t.rawScore=n.score, t.weightedScore=E(t.rawScore, t.weight)):(t.rawScore=0, t.weightedScore=0), t.status=t.isAnnounceScore?o:"unpublished"
                      }
                      else if("homework_activity"===t.type){
                        var a=c._.find(S.value, (function(e){
                          return e.activityId===t.referrerId
                        })), s="unsubmitted";
                        w.value[
                          t.referrerId
                        ]
                        &&w.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]
                        &&"unmarked"===(s=$(w.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]))&&(s="unscored"), a&&t.isAnnounceScore?(t.rawScore=a.score, t.weightedScore=E(t.rawScore, t.weight)):(t.rawScore=0, t.weightedScore=0), t.status=t.isAnnounceScore?s:"unpublished"
                      }
                      else if("forum_activity"===t.type){
                        var l=c._.find(g.value, (function(e){
                          return e.activityId===t.referrerId
                        })), u="published";
                        t.isAnnounceScore&&l&&(null!==l.score||void 0!==l.score)?(t.rawScore=l.score, t.weightedScore=E(t.rawScore, t.weight)):u="unscored", t.status=t.isAnnounceScore?u:"unpublished"
                      }
                      else if("questionnaire_activity"===t.type){
                        var m=c._.find(_.value, (function(e){
                          return e.activityId===t.referrerId
                        }));
                        !m||null===m.score&&void 0===m.score?(t.rawScore=0, t.weightedScore=0, t.status="unscored"):(t.rawScore=m.score, t.weightedScore=E(t.rawScore, t.weight), t.status="published")
                      }
                      else if("classroom_exam_activity"===t.type){
                        var I=c._.find(y.value, (function(e){
                          return e.activityId===t.referrerId
                        })), x="unsubmitted";
                        C.value[
                          t.referrerId
                        ]
                        &&C.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]
                        &&(x=$(C.value[
                          t.referrerId
                        ]
                        [
                          i
                        ])), t.status=t.isAnnounceScore?x:"unpublished", !I||"published"!==t.status||null===I.score&&void 0===I.score?(t.rawScore=0, t.weightedScore=0):(t.rawScore=I.score, t.weightedScore=E(t.rawScore, t.weight))
                      }
                      else if("custom"===t.type){
                        var A=c._.find(k.value, (function(e){
                          return e.id===t.id
                        })), T="published";
                        A&&null!==A.score&&void 0!==A.score?(t.rawScore=E(parseFloat(A.score.toString()), 100), t.weightedScore=E(t.rawScore, t.weight)):T="unscored", t.status=t.isAnnounceScore?T:"unpublished"
                      }
                      [
                        "unpublished", "unsubmitted", "unmarked", "unscored"
                      ].includes(t.status)||(e.weightedScore=Math.round(10*(t.weightedScore+e.weightedScore))/10)
                    }))
                  })), A.value=!1, [
                    2
                  ]
                }
              }))
            }))
          };
          return(0, s.sV)((function(){
            O()
          })), {
            currentUserDetail:l, scoreItemGroups:m, columns:T, getScoreItemIcon:function(e){
              return"homework_activity"===e?"font-syllabus-homework":"forum_activity"===e?"font-syllabus-forum":"exam_activity"===e?"font-syllabus-exam":"questionnaire_activity"===e?"font-syllabus-questionnaire":"web_link_activity"===e?"font-syllabus-web-link":"classroom_exam_activity"===e?"font-syllabus-classroom":"virtual_experiment_activity"===e?window.orgSettings.enableLamsLessonVirtualExperiment?"font-syllabus-lams-lesson-virtual-experiment":"font-syllabus-virtual-experiment":"online_video_completeness_score_setting"===e?"font-score-item-video-completeness":"performance_score_setting"===e?"font-score-item-performance":"rollcall_score_setting"===e?"font-score-item-rollcall":"interaction_activity"===e?"font-syllabus-interaction":"font-score-item-custom"
            }, getActivityJumpUrl:function(t){
              var r, n, o, a, s;
              return"exam_activity"===t.type?"/course/".concat(null===(r=e.course)||void 0===r?void 0:r.id, "/learning-activity#/exam/").concat(t.referrerId):"classroom_exam_activity"===t.type?"/course/".concat(null===(n=e.course)||void 0===n?void 0:n.id, "/learning-activity#/classroom/").concat(t.referrerId):"questionnaire_activity"===t.type?"/course/".concat(null===(o=e.course)||void 0===o?void 0:o.id, "/learning-activity#/questionnaire/").concat(t.referrerId):"rollcall_score_setting"===t.type?"/course/".concat(null===(a=e.course)||void 0===a?void 0:a.id, "/rollcall"):"/course/".concat(null===(s=e.course)||void 0===s?void 0:s.id, "/learning-activity#/").concat(t.referrerId)
            }, totalScore:D, videoScore:f, totalScorePublishTimeStr:M, rawScoreValue:R, displayFinalScore:N, announceScoreSettings:x, loading:A, hasUnpublishedItems:function(e){
              return c._.some(e.items, (function(e){
                return"unpublished"===e.status
              }))
            }
          }
        }
      });
      const pe=(0, m.A)(de, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"student-score-page"
        }, [
          e.loading?e._e():r("div", {
            staticClass:"student-info-area"
          }, [
            e.currentUserDetail?r("div", {
              staticClass:"student-infos"
            }, [
              r("div", {
                staticClass:"student-avatar"
              }, [
                r("Avatar", {
                  staticClass:"avatar64", attrs:{
                    user:e.currentUserDetail
                  }
                })
              ], 1), e._v(" "), r("div", {
                staticClass:"student-info"
              }, [
                r("div", {
                  staticClass:"student-name"
                }, [
                  e._v(e._s(e.currentUserDetail.name)+"（"+e._s(e.currentUserDetail.userNo)+"）")
                ]), e._v(" "), r("div", {
                  staticClass:"department-info"
                }, [
                  e.currentUserDetail.department&&e.currentUserDetail.department.name?r("div", {
                    staticClass:"department"
                  }, [
                    e._v("\n            "+e._s(e.currentUserDetail.department.name)+"\n          ")
                  ]):e._e(), e._v(" "), e.currentUserDetail.department&&e.currentUserDetail.department.name&&e.currentUserDetail.grade&&e.currentUserDetail.grade.name?r("div", {
                    staticClass:"split"
                  }):e._e(), e._v(" "), e.currentUserDetail.grade&&e.currentUserDetail.grade.name?r("div", {
                    staticClass:"grade"
                  }, [
                    e._v("\n            "+e._s(e.currentUserDetail.grade.name)+"\n          ")
                  ]):e._e(), e._v(" "), (e.currentUserDetail.department&&e.currentUserDetail.department.name||e.currentUserDetail.grade&&e.currentUserDetail.grade.name)&&e.currentUserDetail.klass&&e.currentUserDetail.klass.name?r("div", {
                    staticClass:"split"
                  }):e._e(), e._v(" "), e.currentUserDetail.klass&&e.currentUserDetail.klass.name?r("div", {
                    staticClass:"klass"
                  }, [
                    e._v("\n            "+e._s(e.currentUserDetail.klass.name)+"\n          ")
                  ]):e._e()
                ])
              ])
            ]):e._e(), e._v(" "), r("div", {
              staticClass:"student-score-area"
            }, [
              e.displayFinalScore?r("div", {
                staticClass:"total-score"
              }, [
                r("div", {
                  staticClass:"final-score-label"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.finalScore"))+"：")
                ]), e._v(" "), r("div", {
                  staticClass:"final-scores"
                }, [
                  r("div", {
                    staticClass:"final-score-value"
                  }, [
                    e._v(e._s(e.totalScore))
                  ])
                ])
              ]):r("div", {
                staticClass:"no-announce-score"
              }, [
                r("div", {
                  staticClass:"first-line-info"
                }, [
                  r("div", {
                    staticClass:"final-score-label"
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.finalScore"))+"：")
                  ]), e._v(" "), e.announceScoreSettings&&"no_announce"===e.announceScoreSettings.announceScoreType?r("div", {
                    staticClass:"announce-status"
                  }, [
                    e._v("\n            "+e._s(e.$t("courseScore.scoreItemGroup.unpublish"))+"\n          ")
                  ]):e._e(), e._v(" "), e.announceScoreSettings&&"timed_announce"===e.announceScoreSettings.announceScoreType?r("div", {
                    staticClass:"announce-status"
                  }, [
                    e._v("\n            "+e._s(e.totalScorePublishTimeStr)+"\n          ")
                  ]):e._e()
                ])
              ]), e._v(" "), r("div", {
                staticClass:"raw-score"
              }, [
                r("div", {
                  staticClass:"raw-score-label"
                }, [
                  e._v("\n          "+e._s(e.$t("scoreRecord.originalScore"))+"\n          "), r("Tooltip", {
                    staticStyle:{
                      display:"inline"
                    }, attrs:{
                      content:e.$t("courseScore.scoreItemGroup.originalScoreTip"), placement:"top"
                    }
                  }, [
                    r("i", {
                      staticClass:"font font-question"
                    })
                  ]), e._v("\n          ：\n        ")
                ], 1), e._v(" "), r("div", {
                  staticClass:"raw-score-value"
                }, [
                  e._v(e._s(e.rawScoreValue))
                ])
              ])
            ])
          ]), e._v(" "), e.loading?e._e():r("div", {
            staticClass:"student-score-groups-area"
          }, [
            e.scoreItemGroups.length>0?e._l(e.scoreItemGroups, (function(t){
              return r("div", {
                key:t.id, staticClass:"item-group"
              }, [
                r("div", {
                  staticClass:"item-group-header"
                }, [
                  r("div", {
                    staticClass:"left-area"
                  }, [
                    r("span", {
                      staticClass:"group-name"
                    }, [
                      e._v(e._s(t.name)+" ("+e._s(t.percentage)+"%)")
                    ])
                  ]), e._v(" "), r("div", {
                    staticClass:"right-area"
                  }, [
                    e._v("\n            "+e._s(e.$t("courseScore.scoreItemGroup.score"))+"：\n            "), e.hasUnpublishedItems(t)?r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.partiallyUnpublished")))
                    ]):r("span", [
                      e._v(e._s(t.weightedScore))
                    ])
                  ])
                ]), e._v(" "), r("div", {
                  staticClass:"item-group-body"
                }, [
                  r("Table", {
                    attrs:{
                      columns:e.columns, data:t.items, size:"small"
                    }, scopedSlots:e._u([
                      {
                        key:"name", fn:function(t){
                          var n=t.row;
                          return[
                            r("div", {
                              staticClass:"score-item-name"
                            }, [
                              r("i", {
                                staticClass:"font", class:e.getScoreItemIcon(n.type)
                              }), e._v(" "), r("div", [
                                [
                                  "online_video_completeness_score_setting", "performance_score_setting", "custom"
                                ].includes(n.type)?r("TooltipExt", {
                                  attrs:{
                                    text:n.name
                                  }
                                }):e._e(), e._v(" "), [
                                  "online_video_completeness_score_setting", "performance_score_setting", "custom"
                                ].includes(n.type)?e._e():r("a", {
                                  staticClass:"activity-jump-btn", attrs:{
                                    href:e.getActivityJumpUrl(n), target:"_blank"
                                  }
                                }, [
                                  r("TooltipExt", {
                                    attrs:{
                                      text:n.name
                                    }
                                  })
                                ], 1), e._v(" "), "online_video_completeness_score_setting"===n.type&&e.videoScore?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e.videoScore.percentageRange?r("div", [
                                    e._v("\n                      "+e._s(e.$t("courseScore.scoreItemGroup.videoScoreCustomedTips", [
                                      e.videoScore.completeRate
                                    ].concat(e.videoScore.percentageRange, [
                                      e.videoScore.score
                                    ])))+"\n                    ")
                                  ]):r("div", [
                                    e._v(e._s(e.$t("courseScore.scoreItemGroup.videoScoreTips")))
                                  ])
                                ]):e._e(), e._v(" "), "performance_score_setting"===n.type?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.performanceScoreTips"))+"\n                  ")
                                ]):e._e(), e._v(" "), "rollcall_score_setting"===n.type&&"rate"===n.scoreMethod?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips1"))+"\n                  ")
                                ]):e._e(), e._v(" "), "rollcall_score_setting"===n.type&&"count"===n.scoreMethod?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips2"))+"\n                  ")
                                ]):e._e()
                              ], 1)
                            ])
                          ]
                        }
                      }, {
                        key:"score", fn:function(t){
                          var n=t.row;
                          return[
                            r("div", {
                              staticClass:"item-score-div"
                            }, [
                              [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?e._e():r("span", {
                                staticClass:"score"
                              }, [
                                e._v("\n                  "+e._s(n.weightedScore)+"\n                ")
                              ]), e._v(" "), [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?r("div", {
                                staticClass:"no-score"
                              }, [
                                r("span", {
                                  staticClass:"icon", class:n.status
                                }), e._v(" "), "homework_activity"===n.type&&[
                                  "unmarked", "unscored"
                                ].includes(n.status)?r("span", {
                                  staticClass:"status"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.unscored"))+"\n                  ")
                                ]):r("span", {
                                  staticClass:"status"
                                }, [
                                  e._v(e._s(e.$t("courseScore.scoreItemGroup."+n.status)))
                                ])
                              ]):e._e(), e._v(" "), [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?e._e():r("span", {
                                staticClass:"tips"
                              }, [
                                e._v("\n                  ("+e._s(e.$t("courseScore.scoreItemGroup.rawScore"))+": "+e._s(n.rawScore)+" *\n                  "+e._s(e.$t("courseScore.scoreItemGroup.weight"))+": "+e._s(n.weight)+"%)\n                ")
                              ]), e._v(" "), [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?r("span", {
                                staticClass:"tips"
                              }, [
                                e._v("\n                  ("+e._s(e.$t("courseScore.scoreItemGroup.rawScore"))+": -- *\n                  "+e._s(e.$t("courseScore.scoreItemGroup.weight"))+": "+e._s(n.weight)+"%)\n                ")
                              ]):e._e()
                            ])
                          ]
                        }
                      }
                    ], null, !0)
                  })
                ], 1)
              ])
            })):e._e(), e._v(" "), 0===e.scoreItemGroups.length?r("div", {
              staticClass:"no-score-group"
            }, [
              r("Icon", {
                attrs:{
                  custom:"font font-no-score-record", size:"90"
                }
              }), e._v(" "), r("span", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.noScoreGroupMsg")))
              ])
            ], 1):e._e()
          ], 2)
        ])
      }), [
      ], !1, null, "2b908a95", null).exports;
      r(184095), r(979073), r(43148), r(754989);
      var fe=r(311629), me=r(307974), ve=r(772297), he=function(){
        return(he=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, ge=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, _e=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const ye=(0, s.pM)({
        name:"add-score-item", props:{
          value:{
            type:Boolean
          }, scoreItem:{
            type:Object
          }, scoreItemGroups:{
            type:Array
          }, courseId:{
            type:Number
          }
        }, components:{
          DatePickerExt:k.default
        }, setup:function(e, t){
          var r=this, n=(0, I.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            var t, r, n, o, a;
            return{
              name:(null===(t=e.scoreItem)||void 0===t?void 0:t.name)||"", scored:(null===(r=e.scoreItem)||void 0===r?void 0:r.scored)||!0, groupId:(null===(n=e.scoreItem)||void 0===n?void 0:n.groupId)||(e.scoreItemGroups?e.scoreItemGroups[
                0
              ].id:0), announceScoreType:(null===(o=e.scoreItem)||void 0===o?void 0:o.announceScoreType)||"immediate_announce", announceScoreTime:(null===(a=e.scoreItem)||void 0===a?void 0:a.announceScoreTime)||x().toISOString()
            }
          })), i=(0, s.EW)((function(){
            return void 0!==e.scoreItem
          })), l=(0, s.KR)(he({
          }, o.value)), d=(0, s.EW)((function(){
            var t;
            return!!i.value&&!!(null===(t=e.scoreItem)||void 0===t?void 0:t.externalCode)
          }));
          return{
            show:n, formData:l, onChangeAnnounceScore:function(e){
              l.value.announceScoreTime="no_announce"===e?null:x().toISOString()
            }, ok:function(){
              return ge(r, void 0, void 0, (function(){
                return _e(this, (function(o){
                  switch(o.label){
                    case 0:return i.value?[
                      4, ge(r, void 0, void 0, (function(){
                        var r, n;
                        return _e(this, (function(o){
                          switch(o.label){
                            case 0:return o.trys.push([
                              0, 2, , 3
                            ]), [
                              4, (0, u.np)((null===(n=e.scoreItem)||void 0===n?void 0:n.id)||0, l.value)
                            ];
                            case 1:return r=o.sent(), t.emit("afterUpdateScoreItem"), c.Toast.success(r.message), [
                              3, 3
                            ];
                            case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                              3, 3
                            ];
                            case 3:return[
                              2
                            ]
                          }
                        }))
                      }))
                    ]
                    :[
                      3, 2
                    ];
                    case 1:return o.sent(), [
                      3, 4
                    ];
                    case 2:return[
                      4, ge(r, void 0, void 0, (function(){
                        var r;
                        return _e(this, (function(n){
                          switch(n.label){
                            case 0:return n.trys.push([
                              0, 2, , 3
                            ]), [
                              4, (0, u.AW)(e.courseId||0, l.value)
                            ];
                            case 1:return r=n.sent(), t.emit("afterCreateScoreItem", {
                              groupId:l.value.groupId
                            }), c.Toast.success(r.message), [
                              3, 3
                            ];
                            case 2:return n.sent(), c.Toast.error(a.default.t("save_error")), [
                              3, 3
                            ];
                            case 3:return[
                              2
                            ]
                          }
                        }))
                      }))
                    ];
                    case 3:o.sent(), o.label=4;
                    case 4:return n.value=!1, window.location.reload(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, visibleChangeHandler:function(e){
              e&&(l.value=he({
              }, o.value))
            }, isUpdate:i, hasExternalCode:d
          }
        }
      });
      const Se=(0, m.A)(ye, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"add-score-item", attrs:{
            width:"700", title:e.isUpdate?e.$t("courseScore.scoreItemGroup.editOne"):e.$t("courseScore.scoreItemGroup.addOne")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.addOneTip")))
            ])
          ]), e._v(" "), r("Form", {
            staticClass:"add-score-item-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              staticClass:"no-margin-bottom score-item-name", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreItemName"), required:"", props:"name"
              }
            }, [
              r("Input", {
                staticClass:"name", attrs:{
                  placeholder:e.$t("vtrs.userIndex.pleaseInput"), disabled:e.hasExternalCode
                }, model:{
                  value:e.formData.name, callback:function(t){
                    e.$set(e.formData, "name", t)
                  }, expression:"formData.name"
                }
              })
            ], 1), e._v(" "), r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                attrs:{
                  transfer:""
                }, model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("homework.publishScore"), props:"announceScoreType"
              }
            }, [
              r("RadioGroup", {
                on:{
                  "on-change":e.onChangeAnnounceScore
                }, model:{
                  value:e.formData.announceScoreType, callback:function(t){
                    e.$set(e.formData, "announceScoreType", t)
                  }, expression:"formData.announceScoreType"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"immediate_announce"
                  }
                }, [
                  e._v(e._s(e.$t("homework.publishNow")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"no_announce"
                  }
                }, [
                  e._v(e._s(e.$t("homework.willNotPublish")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"timed_announce"
                  }
                }, [
                  e._v(e._s(e.$t("homework.customPublishScoreTime")))
                ])
              ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreType?r("div", [
                r("DatePickerExt", {
                  staticStyle:{
                    width:"175px"
                  }, attrs:{
                    type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1, transfer:!0
                  }, model:{
                    value:e.formData.announceScoreTime, callback:function(t){
                      e.$set(e.formData, "announceScoreTime", t)
                    }, expression:"formData.announceScoreTime"
                  }
                })
              ], 1):e._e()
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
              }
            }, [
              e._v(e._s(e.$t("confirm")))
            ]), e._v(" "), r("Button", {
              on:{
                click:e.cancel
              }
            }, [
              e._v(e._s(e.$t("cancel")))
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "9ae5b846", null).exports;
      r(714913), r(335231);
      var be=r(818183), we=r(218831), Ce=r(769075), Ie=r(209624);
      const xe=(0, s.pM)({
        name:"score-filter", props:{
          position:{
            type:Object, default:function(){
              return{
                top:"0", left:"0"
              }
            }
          }, scoreItem:{
            type:Object, required:!0
          }
        }, directives:{
          TransferDom:Ie.A
        }, components:{
        }, setup:function(e, t){
          var r=(0, s.KR)({
            scoreState:"all", scoreLowLimit:0, scoreUpperLimit:0
          }), n=function(){
            t.emit("close")
          }, o=(0, s.EW)((function(){
            return"all"===r.value.scoreState&&0===r.value.scoreLowLimit&&0===r.value.scoreUpperLimit
          })), a=function(){
            t.emit("set-score-filters", !o.value)
          }, i=(0, s.EW)((function(){
            var t="item-".concat(e.scoreItem.id, "-score");
            return[
              "raw_score", "total_score"
            ].includes(e.scoreItem.type)?t=e.scoreItem.type:"group"===e.scoreItem.type&&(t="group-".concat(e.scoreItem.id, "-score")), t
          }));
          return{
            condition:r, close:n, reset:function(){
              o.value||(r.value={
                scoreState:"all", scoreLowLimit:0, scoreUpperLimit:0
              }, t.emit("set-score-filters", !o.value), fe.A.$emit("send-score-filter", {
                key:i.value, value:void 0
              }))
            }, ok:function(){
              "all"!==r.value.scoreState?o.value||(fe.A.$emit("send-score-filter", {
                key:i.value, value:r.value
              }), n()):n()
            }, disabled:o, filterChange:a, formatter:function(e){
              return 0===e?"":e
            }, parser:function(e){
              return""===e?0:e
            }, filterStateChange:function(e){
              [
                "all", "unscored"
              ].includes(e)&&(r.value.scoreLowLimit=0, r.value.scoreUpperLimit=0), a(), "all"===e&&fe.A.$emit("send-score-filter", {
                key:i.value, value:void 0
              })
            }
          }
        }
      });
      const ke=(0, m.A)(xe, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          directives:[
            {
              name:"transfer-dom", rawName:"v-transfer-dom"
            }, {
              name:"click-outside-el", rawName:"v-click-outside-el", value:e.close, expression:"close"
            }
          ], staticClass:"score-filter", style:{
            top:e.position.top, left:e.position.left
          }, attrs:{
            "data-transfer":!0
          }
        }, [
          r("div", {
            staticClass:"score-filter-container"
          }, [
            r("div", {
              staticClass:"score-state-filter"
            }, [
              r("div", {
                staticClass:"score-filter-left"
              }, [
                e._v(e._s(e.$t("vtrs.table.status")))
              ]), e._v(" "), r("div", {
                staticClass:"score-filter-right"
              }, [
                r("RadioGroup", {
                  attrs:{
                    vertical:""
                  }, on:{
                    "on-change":e.filterStateChange
                  }, model:{
                    value:e.condition.scoreState, callback:function(t){
                      e.$set(e.condition, "scoreState", t)
                    }, expression:"condition.scoreState"
                  }
                }, [
                  r("Radio", {
                    attrs:{
                      label:"all"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.state.all")))
                    ])
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"scored"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.state.scored")))
                    ])
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"unscored"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.state.unscored")))
                    ])
                  ])
                ], 1)
              ], 1)
            ]), e._v(" "), r("div", {
              staticClass:"score-filter-divider"
            }), e._v(" "), r("div", {
              staticClass:"score-range-filter"
            }, [
              r("div", {
                staticClass:"score-filter-left"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreRange")))
              ]), e._v(" "), r("div", {
                staticClass:"score-filter-right"
              }, [
                r("InputNumber", {
                  attrs:{
                    step:1, precision:1, min:.1, max:100, formatter:e.formatter, parser:e.parser, "active-change":!1, disabled:[
                      "all", "unscored"
                    ].includes(e.condition.scoreState)
                  }, on:{
                    "on-change":e.filterChange
                  }, model:{
                    value:e.condition.scoreLowLimit, callback:function(t){
                      e.$set(e.condition, "scoreLowLimit", t)
                    }, expression:"condition.scoreLowLimit"
                  }
                }), e._v(" "), r("span", [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.to")))
                ]), e._v(" "), r("InputNumber", {
                  attrs:{
                    step:1, precision:1, min:e.condition.scoreLowLimit, max:100, formatter:e.formatter, parser:e.parser, "active-change":!1, disabled:[
                      "all", "unscored"
                    ].includes(e.condition.scoreState)
                  }, on:{
                    "on-change":e.filterChange
                  }, model:{
                    value:e.condition.scoreUpperLimit, callback:function(t){
                      e.$set(e.condition, "scoreUpperLimit", t)
                    }, expression:"condition.scoreUpperLimit"
                  }
                })
              ], 1)
            ])
          ]), e._v(" "), r("div", {
            staticClass:"score-filter-footer"
          }, [
            r("div", {
              staticClass:"score-filter-button score-filter-reset", class:{
                disabled:e.disabled
              }, on:{
                click:e.reset
              }
            }, [
              e._v("\n      "+e._s(e.$t("courseScore.scoreItemGroup.reset"))+"\n    ")
            ]), e._v(" "), r("div", {
              staticClass:"score-filter-button score-filter-ok", class:{
                disabled:e.disabled&&"all"!==e.condition.scoreState
              }, on:{
                click:e.ok
              }
            }, [
              e._v("\n      "+e._s(e.$t("ok"))+"\n    ")
            ])
          ])
        ])
      }), [
      ], !1, null, "60abffd0", null).exports;
      var Ae=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Te=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const Ee=(0, s.pM)({
        name:"score-item-option", props:{
          scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }, scoreStatus:{
            type:String
          }
        }, components:{
          EditScoreItem:Se, Confirm:Ce.A, ScoreFilter:ke, SvgIcon:l.A
        }, setup:function(e, t){
          var r, n, o=this, i=(0, s.KR)(!1), c=(0, s.nI)(), l=(0, s.KR)(!1), d=(0, s.KR)(!1), p=(0, s.KR)({
            top:"0", left:"0"
          }), f=(null===(n=null===(r=window.globalData)||void 0===r?void 0:r.course)||void 0===n?void 0:n.isSimulatingInstructor)||!1, m=(0, s.EW)((function(){
            return d.value?a.default.t("courseScore.scoreItemGroup.hasFilter"):a.default.t("courseScore.scoreItemGroup.filter")
          }));
          return{
            visible:i, selectOption:function(t, r){
              return Ae(o, void 0, void 0, (function(){
                var r, n, o;
                return Te(this, (function(s){
                  switch(s.label){
                    case 0:return"edit"!==t?[
                      3, 1
                    ]
                    :(i.value=!0, [
                      3, 6
                    ]);
                    case 1:return"delete"!==t?[
                      3, 5
                    ]
                    :[
                      4, Ce.A.open({
                        type:"warning", title:a.default.t("courseScore.scoreItemGroup.deleteOne"), content:"".concat(a.default.t("courseScore.scoreItemGroup.deleteScoreItemConfirm"), "“").concat(e.scoreItem.name, "”?"), width:416, verticalCenter:!1
                      })
                    ];
                    case 2:return s.sent()?[
                      4, (0, u.fK)(e.scoreItem.id)
                    ]
                    :[
                      3, 4
                    ];
                    case 3:s.sent(), be.A.success(a.default.t("delete_success")), window.location.reload(), s.label=4;
                    case 4:return[
                      3, 6
                    ];
                    case 5:r=null===(o=null==c?void 0:c.proxy)||void 0===o?void 0:o.$el, n=r.getBoundingClientRect(), p.value={
                      top:"".concat(n.bottom+window.scrollY, "px"), left:"".concat(n.left+window.scrollX-290, "px")
                    }, l.value=!0, s.label=6;
                    case 6:return[
                      2
                    ]
                  }
                }))
              }))
            }, showFilter:l, filterPosition:p, handleScoreFilters:function(e){
              d.value=e
            }, hasScoreFilter:d, filterLabel:m, isSimulatingInstructor:f
          }
        }
      });
      const $e=(0, m.A)(Ee, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-item-option", class:{
            "has-filter":e.hasScoreFilter
          }
        }, [
          "custom"!==e.scoreItem.type||e.isSimulatingInstructor?r("div", {
            staticClass:"other-filter-icon"
          }, [
            r("SvgIcon", {
              staticClass:"new-filter-icon", class:{
                "has-filter":e.hasScoreFilter
              }, attrs:{
                name:"new-filter"
              }, nativeOn:{
                click:function(t){
                  return r=t, e.selectOption("filter", r);
                  var r
                }
              }
            })
          ], 1):r("div", [
            r("Dropdown", {
              attrs:{
                transfer:"", "transfer-class-name":"score-item-option-container"
              }, on:{
                "on-click":function(t, r){
                  return e.selectOption(t, r)
                }
              }, scopedSlots:e._u([
                {
                  key:"list", fn:function(){
                    return[
                      r("DropdownMenu", [
                        r("DropdownItem", {
                          class:{
                            "has-filter":e.hasScoreFilter
                          }, attrs:{
                            name:"filter"
                          }
                        }, [
                          e._v(e._s(e.filterLabel))
                        ]), e._v(" "), "submitted"!==e.scoreStatus?r("DropdownItem", {
                          attrs:{
                            name:"edit"
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("edit"))+"\n          ")
                        ]):e._e(), e._v(" "), "submitted"===e.scoreStatus||e.scoreItem.externalCode?e._e():r("DropdownItem", {
                          attrs:{
                            name:"delete"
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("delete"))+"\n          ")
                        ])
                      ], 1)
                    ]
                  }, proxy:!0
                }
              ], null, !1, 2615472871)
            }, [
              r("div", {
                staticClass:"dropdown-header"
              }, [
                r("i", {
                  staticClass:"font font-ellipsis", class:{
                    "has-filter":e.hasScoreFilter
                  }
                })
              ])
            ])
          ], 1), e._v(" "), "custom"===e.scoreItem.type?r("EditScoreItem", {
            attrs:{
              "score-item-groups":e.scoreItemGroups, "score-item":e.scoreItem
            }, model:{
              value:e.visible, callback:function(t){
                e.visible=t
              }, expression:"visible"
            }
          }):e._e(), e._v(" "), r("ScoreFilter", {
            directives:[
              {
                name:"show", rawName:"v-show", value:e.showFilter, expression:"showFilter"
              }
            ], attrs:{
              position:e.filterPosition, "score-item":e.scoreItem
            }, on:{
              close:function(t){
                e.showFilter=!1
              }, "set-score-filters":e.handleScoreFilters
            }
          })
        ], 1)
      }), [
      ], !1, null, "2c3bcd05", null).exports;
      var Pe=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, De=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const Ne=(0, s.pM)({
        name:"score-log-dropdown", components:{
          TooltipExt:i.A
        }, directives:{
          TransferDom:Ie.A
        }, props:{
          items:{
            type:Array, required:!0
          }
        }, setup:function(e){
          var t, r=this, n=null===(t=document.documentElement.getAttribute("lang"))||void 0===t?void 0:t.startsWith("en"), o=n?285:240, a=o/2, i=(0, s.KR)(!1), c=(0, s.KR)(null), l=(0, s.KR)(null), u=(0, s.KR)("top"), d=(0, s.KR)(), p=function(e){
            c.value&&l.value&&(l.value.contains(e.target)||c.value.contains(e.target)||(i.value=!1))
          };
          (0, s.sV)((function(){
            document.addEventListener("click", p, !0)
          })), (0, s.xo)((function(){
            document.removeEventListener("click", p, !0)
          }));
          var f=(0, s.EW)((function(){
            return"top"===u.value?"top":"bottom"
          }));
          return{
            isExpanded:i, toggleDropdown:function(){
              return Pe(r, void 0, void 0, (function(){
                var e, t, r, n, p, f, m, v, h, g, _;
                return De(this, (function(y){
                  switch(y.label){
                    case 0:return i.value?(i.value=!1, [
                      2
                    ]):c.value&&l.value?[
                      4, (0, s.dY)()
                    ]
                    :[
                      2
                    ];
                    case 1:return y.sent(), e=c.value, t=l.value, r=e.getBoundingClientRect(), n=r.top, p=r.left, f=r.height, m=r.width, v=window.innerHeight, [
                      4, (0, s.dY)()
                    ];
                    case 2:return y.sent(), h=t.offsetHeight, g="top", _=n+f+10, v-n-f/2-100<h&&(g="bottom", _=n-h-10), u.value=g, d.value={
                      position:"absolute", top:"".concat(_, "px"), left:"".concat(p+m/2-a, "px"), width:"".concat(o, "px"), background:"white", borderRadius:"3px", boxShadow:"0px 0px 1px rgba(38, 40, 51, 0.24), 0px 4px 20px rgba(38, 40, 51, 0.16)", zIndex:1, transformStyle:"preserve-3d"
                    }, i.value=!0, [
                      2
                    ]
                  }
                }))
              }))
            }, triggerRef:c, menuRef:l, menuStyle:d, arrowClass:f, formatTime:function(e){
              return x(e).format("YYYY-MM-DD HH:mm:ss")
            }, isEnglish:n
          }
        }
      });
      const Re=(0, m.A)(Ne, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          directives:[
            {
              name:"show", rawName:"v-show", value:e.items.length>0, expression:"items.length > 0"
            }
          ], staticClass:"score-log-dropdown"
        }, [
          r("div", {
            ref:"triggerRef", staticClass:"clickable-icon", on:{
              click:function(t){
                return t.stopPropagation(), e.toggleDropdown(t)
              }
            }
          }, [
            e._t("default")
          ], 2), e._v(" "), r("div", {
            directives:[
              {
                name:"transfer-dom", rawName:"v-transfer-dom"
              }
            ], ref:"menuRef", class:[
              "dropdown-menu", {
                visible:e.isExpanded
              }
            ], style:e.menuStyle, attrs:{
              "data-transfer":!0
            }, on:{
              click:function(e){
                e.stopPropagation()
              }
            }
          }, [
            r("div", {
              staticClass:"dropdown-arrow", class:e.arrowClass
            }), e._v(" "), r("div", {
              staticClass:"dropdown-title"
            }, [
              e._v(e._s(e.$t("courseScore.finalScoreChangeLog.title")))
            ]), e._v(" "), r("div", {
              staticClass:"dropdown-items"
            }, e._l(e.items, (function(t, n){
              return r("div", {
                key:n, staticClass:"dropdown-item"
              }, [
                r("div", {
                  staticClass:"dropdown-time"
                }, [
                  e._v(e._s(e.formatTime(t.scoredAt)))
                ]), e._v(" "), r("div", {
                  staticClass:"dropdown-info"
                }, [
                  r("TooltipExt", {
                    staticClass:"scored-by", attrs:{
                      text:t.scoredBy
                    }
                  }), e._v(" "), t.deleteFinalScore?e._e():r("span", {
                    staticClass:"change-to"
                  }, [
                    e._v("\n            "+e._s(e.$t("courseScore.finalScoreChangeLog.changeTo"))+"\n          ")
                  ]), e._v(" "), r("span", {
                    staticClass:"score-text"
                  }, [
                    e._v("\n            "+e._s(t.deleteFinalScore?e.$t("courseScore.finalScoreChangeLog.clearScore"):Number(t.score)+(e.isEnglish?" ":"")+e.$t("courseScore.finalScoreChangeLog.points"))+"\n          ")
                  ])
                ], 1)
              ])
            })), 0)
          ])
        ])
      }), [
      ], !1, null, "2606f8b2", null).exports;
      var Me=r(272505), Oe=r.n(Me), Ge=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Fe=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Le=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          return Fe(this, (function(t){
            switch(t.label){
              case 0:return"id,name,department(name),grade(name),klass(name),created_user(id),subject_code,imported_from", [
                4, Oe().get("/api/courses/".concat(e), {
                  params:{
                    fields:"id,name,department(name),grade(name),klass(name),created_user(id),subject_code,imported_from"
                  }
                })
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, Be=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/score-status"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, je=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/score-type-settings"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ue=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return"id,title,data,start_time,end_time,is_announce_score_time_passed,score_percentage,created_at,published,module_sort,syllabus_sort,sort,has_assign_student,assign_student_ids,publish_type,is_in_progress", t="/api/course/".concat(e, "/homework-scores"), [
                4, Oe().get(t, {
                  params:{
                    fields:"id,title,data,start_time,end_time,is_announce_score_time_passed,score_percentage,created_at,published,module_sort,syllabus_sort,sort,has_assign_student,assign_student_ids,publish_type,is_in_progress"
                  }
                })
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ve=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/homework-student-status"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ke=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/exam-student-status"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, We=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/classroom-student-status"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, He=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/rollcall/setting"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, qe=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/rollcall/scores"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, ze=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/custom-score-items"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ye=function(e, t, r){
        return Ge(void 0, void 0, void 0, (function(){
          var n;
          return Fe(this, (function(o){
            switch(o.label){
              case 0:return n="/api/custom-score-items/".concat(e, "/students/").concat(t, "/score"), [
                4, Oe().put(n, {
                  score:r
                })
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }, Je=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return"id,roles,user(id,name,nickname,user_no,comment,grade(id,name),klass(id,name,code),department(id,name,code,stopped),org(id,name),user_attributes(tag)),seat_number,total_score,score_comment,published,instructor_score_time,scored_instructor(name),exceptional_case,original_exceptional_case,data", t="/api/course/".concat(e, "/enrollments"), [
                4, Oe().get(t, {
                  params:{
                    fields:"id,roles,user(id,name,nickname,user_no,comment,grade(id,name),klass(id,name,code),department(id,name,code,stopped),org(id,name),user_attributes(tag)),seat_number,total_score,score_comment,published,instructor_score_time,scored_instructor(name),exceptional_case,original_exceptional_case,data"
                  }
                })
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ze=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return"enrollment_id,total_score,original_total_score,admin_comment", t="/api/course/".concat(e, "/scores"), [
                4, Oe().get(t, {
                  params:{
                    fields:"enrollment_id,total_score,original_total_score,admin_comment"
                  }
                })
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Xe=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/enrollment-raw-score"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Qe=function(e){
        return Ge(void 0, void 0, void 0, (function(){
          var t;
          return Fe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/score-ranks"), [
                4, Oe().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, et=function(e, t){
        return Ge(void 0, void 0, void 0, (function(){
          var r;
          return Fe(this, (function(n){
            switch(n.label){
              case 0:return r="/api/enrollment/".concat(e, "/exceptional-case"), [
                4, Oe().put(r, (0, we.decamelizeKeys)({
                  exceptionalCase:t
                }))
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, tt=function(e, t){
        return Ge(void 0, void 0, void 0, (function(){
          var r;
          return Fe(this, (function(n){
            switch(n.label){
              case 0:return r="/api/enrollment/".concat(e, "/total-score"), [
                4, Oe().put(r, (0, we.decamelizeKeys)(t))
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, rt=(r(215195), r(678636), {
        homework_activity:"homework", exam_activity:"exam", classroom_exam_activity:"classroom", forum_activity:"forum", questionnaire_activity:"questionnaire", interaction_activity:"interaction", web_link_activity:"web_link", virtual_experiment_activity:"virtual_experiment"
      }), nt=function(e, t, r){
        if(void 0===r&&(r=null), "rollcall_score_setting"===e.type)return null;
        if("online_video_completeness_score_setting"===e.type)return null;
        if("custom"===e.type)return null;
        if("performance_score_setting"===e.type)return null;
        var n=rt[
          e.type
        ];
        return r&&!r.includes(n)?null:N().find(t, {
          type:n, id:e.referrerId
        })
      }, ot=r(756029), at=function(){
        return(at=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, st=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, it=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, ct=(0, s.Kh)({
        loaded:!1, course:null, isAllowPerformanceView:!0, activityStudentStatus:{
        }, condition:{
          score:{
          }, groupScore:{
          }, filters:{
            departmentIds:[
            ], gradeIds:[
            ], classIds:[
            ]
          }
        }, students:[
        ], allStudents:[
        ], members:[
        ], activities:[
        ], percentageData:{
        }, allScoresItem:[
        ], sharedBetweenScopes:{
          students:[
          ], filteredStudents:[
          ]
        }, rollcall:0, performance:0, onlineVideoCompletenessScore:0, classes:[
        ], grades:[
        ], departments:[
        ]
      }), lt=function(e){
        isNaN(e.final_score)||null===e.final_score||(e.score=e.final_score)
      }, ut=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/courses/".concat(e, "/exams"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/courses/".concat(e, "/exam-scores?no-intercept=true"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ].exams, o=r[
                    1
                  ].exam_scores;
                  ct.exams=N().each(ot.copy(n), (function(e){
                    return e.type="exam", e.score_published=e.is_announce_score_time_passed, e.url="/course/".concat(ct.courseId, "/learning-activity#/exam/").concat(e.id), e.scores=N().filter(o, {
                      activity_id:e.id
                    }), N().each(e.scores, (function(e){
                      lt(e)
                    }))
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, dt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/courses/".concat(e, "/classroom-list"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/classroom-exam-scores"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].classrooms, a=n[
                    1
                  ].classroom_scores;
                  ct.classrooms=N().filter(o, {
                    type:"classroom"
                  }), ct.classrooms=N().each(ot.copy(ct.classrooms), (function(t){
                    return t.url="/course/".concat(e, "/learning-activity#/classroom/").concat(t.id), t.scores=N().filter(a, {
                      activity_id:t.id
                    }), t.start_time=t.created_at
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, pt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return ct.performanceSetting={
                score_percentage:0
              }, ct.performanceScore=[
              ], t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/performance/score-percentage"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/performance/scores?isOriginalScore=true"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ], o=r[
                    1
                  ].scores;
                  ct.performanceSetting=n, ct.performanceScore=o||[
                  ]
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, ft=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/virtual-experiments"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/virtual-experiment-scores"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].virtual_experiments, a=n[
                    1
                  ].virtual_experiments_scores;
                  ct.virtualExperimentActivities=N().each(ot.copy(o), (function(t){
                    return t.type="virtual_experiment", t.url="/course/".concat(e, "/learning-activity#/").concat(t.id), t.scores=N().filter(a, {
                      activity_id:t.id
                    }), t.public=t.can_show_score, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, mt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/forum-activities"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/forum-scores"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].forum_activities, a=n[
                    1
                  ].forum_scores;
                  ct.forumActivities=N().each(ot.copy(o), (function(t){
                    return t.type="forum", t.url="/course/".concat(e, "/learning-activity#/").concat(t.id), t.scores=N().filter(a, {
                      activity_id:t.id
                    }), t.start_time=t.start_time||t.created_at, t.public=t.can_show_score, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, vt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/web-link-activities"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/web-link-scores"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].web_link_activities, a=n[
                    1
                  ].web_link_scores;
                  ct.weblinkActivities=N().each(ot.copy(o), (function(t){
                    return t.type="web_link", t.url="/course/".concat(e, "/learning-activity#/").concat(t.id), t.scores=N().filter(a, {
                      activity_id:t.id
                    }), t.start_time=t.start_time||t.created_at, t.public=t.can_show_score, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, ht=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/questionnaires"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/questionnaire-scores"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ], a=n[
                    1
                  ], s=o.questionnaires, i=a.questionnaire_scores, c=N().filter(s, (function(e){
                    return e.data.is_scored
                  }));
                  ct.questionnaireActivities=N().each(N().cloneDeep(c), (function(t){
                    return t.type="questionnaire", t.url="/course/".concat(e, "/learning-activity/full-screen#/questionnaire/").concat(t.id), t.scores=N().filter(i, {
                      activity_id:t.id
                    }), t.start_time=t.start_time||t.created_at, t.public=!0, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, gt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/interactions"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/interaction-scores"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ].interactions, o=r[
                    1
                  ].interaction_scores;
                  ct.interactionActivities=N().each(ot.copy(n), (function(e){
                    return e.type="interaction", e.url="/course/".concat(ct.courseId, "/learning-activity/full-screen#/").concat(e.id), e.scores=N().filter(o, {
                      activity_id:e.id
                    }), e.start_time=e.start_time||e.created_at, e.public=!0, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, _t=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/online-video-completeness/setting?no-loading-animation=true"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Ge(void 0, void 0, void 0, (function(){
                  var t;
                  return Fe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/online-video-completeness/scores"), [
                        4, Oe().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ], o=r[
                    1
                  ];
                  ct.onlineVideoCompletenessScoreSetting=N().cloneDeep(n), ct.onlineVideoCompletenessScore=o
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, yt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t;
          return it(this, (function(r){
            switch(r.label){
              case 0:return[
                4, ze(e)
              ];
              case 1:return t=r.sent(), ct.customScoreItems=N().each(t.custom_score_items, (function(e){
                e.score_count=e.scores.length;
                for(var t={
                }, r=0, n=e.scores;
                r<n.length;
                r++){
                  var o=n[
                    r
                  ];
                  t[
                    o.user_id
                  ]
                  =o.score
                }
                return e.scores=t
              })), [
                2
              ]
            }
          }))
        }))
      }, St=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t;
          return it(this, (function(r){
            switch(r.label){
              case 0:return[
                4, Ze(e)
              ];
              case 1:return t=r.sent().course_scores, N().each(ct.students, (function(e){
                var r=N().find(t, {
                  enrollment_id:e.enrollment_id
                });
                e.total_score=r.total_score, e.original_total_score=r.original_total_score, e.admin_comment=r.admin_comment
              })), [
                2
              ]
            }
          }))
        }))
      }, bt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t;
          return it(this, (function(r){
            switch(r.label){
              case 0:return[
                4, Je(e)
              ];
              case 1:return t=r.sent(), ct.members=t.enrollments.map((function(e){
                e.enrollment_id=e.id, e.raw_score=0;
                var t=at(at({
                }, e), e.user);
                return delete t.user, t
              })), ct.students=N().filter(ct.members, (function(e){
                return e.roles.includes("student")
              })), N().forEach(ct.students, (function(e){
                e.total_score=parseFloat(e.total_score), e.department_code=e.department&&e.department.code?e.department.code:void 0, e.grade_name=e.grade&&e.grade.name?e.grade.name:void 0, e.class_code=e.klass&&e.klass.code?e.klass.code:void 0, e.user_no=e.user_no?e.user_no:void 0, e.selected=!1, e.dissertation_finished=e.instructor_score_time&&"finish_dissertation_rule"===ct.scoreTypeSettings.score_type
              })), n=ct.students, ct.departments=N().sortedUniqBy(N().sortBy(N().map(n, (function(e){
                return e.department
              })), "id"), "id"), ct.grades=N().sortedUniqBy(N().sortBy(N().map(n, (function(e){
                return e.grade?e.grade:{
                  id:0
                }
              })), "id"), "id"), ct.classes=N().sortedUniqBy(N().sortBy(N().map(n, (function(e){
                return e.klass?e.klass:{
                  id:0
                }
              })), "id"), "id"), ct.sharedBetweenScopes.students=ct.students, ct.filteredStudents=ct.students, ct.sharedBetweenScopes.filteredStudents=ct.filteredStudents, ct.courseScoresPublished||"partial_submitted"===ct.scoreStatus?[
                2, St(e)
              ]
              :[
                2
              ]
            }
            var n
          }))
        }))
      }, wt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return e.total_score||(e.total_score=0), t={
                total_score:e.total_score, delete_instructor_score_time:!1
              }, [
                4, tt(e.enrollment_id, t)
              ];
              case 1:return r=n.sent(), e.scored_instructor=r.scored_instructor, e.instructor_score_time=r.instructor_score_time, e.original_total_score=e.total_score, e.data=r.data, [
                2
              ]
            }
          }))
        }))
      }, Ct=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return[
                4, Xe(e)
              ];
              case 1:return t=n.sent(), r=N().keyBy(t.data, "enrollment_id"), N().forEach(ct.students, (function(e){
                if(e.rawScoreNotFixed=parseFloat(r[
                  e.enrollment_id
                ].raw_score_not_fixed), e.raw_score=parseFloat(r[
                  e.enrollment_id
                ].raw_score), e.instructor_score_time||ct.courseScoresPublished||function(e){
                  ct.enableUpdateAllStudentsFinalScore?e.total_score=e.instructor_score_time?e.total_score:NaN:e.total_score=e.raw_score<0?0:e.raw_score
                }
                (e), e.final_exam_score&&(e.final_exam_score=parseFloat(e.final_exam_score)), ct.totalScoreInteger)return e.total_score=Math.round(e.total_score)
              })), [
                2
              ]
            }
          }))
        }))
      }, It=function(e, t){
        return((ct.activityStudentStatus[
          e.type
        ]
        ||{
        })[
          e.id
        ]
        ||{
        })[
          t.id
        ]
        ||""
      }, xt=function(e, t, r){
        t.forEach((function(t){
          var n=0;
          t.items.forEach((function(t){
            var o, a=function(e, t){
              if("rollcall_score_setting"===e.type)return t.rollcall;
              if("online_video_completeness_score_setting"===e.type)return t.onlineVideoCompletenessScore;
              if("performance_score_setting"===e.type)return t.performance;
              if("custom"===e.type)return t[
                "custom".concat(e.id)
              ];
              var r=rt[
                e.type
              ];
              return t[
                "".concat(r).concat(e.referrerId)
              ]
            }
            (t, e), s=nt(t, r), i=!s||(null===(o=s.published)||void 0===o||o);
            e[
              "item-".concat(t.id, "-score")
            ]
            =a, a>0&&i&&(n+=a*t.weight/100)
          })), e[
            "group-".concat(t.id, "-score")
          ]
          =Math.round(100*n)/100
        }))
      }, kt=function(e){
        var t=ct.customScoreItems.reduce((function(e, t){
          return e+parseFloat(t.score_percentage)
        }), 0);
        N().forEach(ct.students, (function(r){
          r.rollcall=null!=ct.rollcallScore[
            r.id
          ]
          ?ct.rollcallScore[
            r.id
          ]
          :-1, ct.onlineVideoCompletenessScoreSetting.id&&(r.onlineVideoCompletenessScore=ct.onlineVideoCompletenessScore[
            r.id
          ].score), N().forEach(ct.customScoreItems, (function(e){
            return r[
              "custom".concat(e.id)
            ]
            =null!=e.scores[
              r.id
            ]
            ?e.scores[
              r.id
            ]
            :-1
          })), r.score_total_percentage=0, r.score_total_percentage+=parseFloat(ct.rollcallSetting.score_percentage), r.score_total_percentage+=t, ct.isAllowPerformanceView&&(r.performance=null!=ct.performanceScore[
            r.id
          ]
          ?ct.performanceScore[
            r.id
          ]
          :-1, r.score_total_percentage+=parseFloat(ct.performanceSetting.score_percentage)), r.score_total_percentage+=parseFloat(ct.onlineVideoCompletenessScoreSetting.score_percentage||0), N().forEach(ct.activities, (function(e){
            var t=function(e, t){
              var r=N().find(e.scores, {
                activity_id:e.id, student_id:t.id
              });
              return r&&(r.score||0===r.score)?parseFloat(r.score):""
            }
            (e, r);
            "un_assigned"!==It(e, r)&&(r.score_total_percentage+=parseFloat(e.score_percentage)), r[
              e.type+e.id
            ]
            =""!==t?t:-1
          })), xt(r, e, ct.activities)
        }))
      }, At=function(){
        if(function(){
          var e=N().find(ct.allScoresItem, {
            name:"rollcall"
          });
          if(!e)return e={
            name:"rollcall", ref_obj:"rollcall", hasScoreCount:0, edu_score_key:"null", score_type:"rollcall"
          }, ct.allScoresItem.splice(0, 0, e);
          var t=N().findIndex(ct.allScoresItem, {
            name:"rollcall"
          });
          t>=0&&ct.allScoresItem.splice(t, 1)
        }
        (), ct.allScoresItem){
          var e=N().find(ct.allScoresItem, {
            name:"rollcall"
          });
          if(e){
            var t=N().filter(ct.students, (function(e){
              return e.rollcall>0
            }));
            e.hasScoreCount=t.length
          }
        }
        return 0
      }, Tt=function(e){
        var t=ct.homeworks.concat(ct.exams).concat(ct.classrooms).concat(ct.forumActivities).concat(ct.questionnaireActivities).concat(ct.virtualExperimentActivities).concat(ct.interactionActivities);
        ct.isToggleWeblinkScoreSettingOpened&&(t=t.concat(ct.weblinkActivities)), ct.activities=N().sortBy(t, [
          "module_sort", "syllabus_sort", "sort", "created_at"
        ]), ct.percentageData.activityList=ot.copy(ct.activities), ct.percentageData.customScoreItemList=ot.copy(ct.customScoreItems), kt(e), At(), ct.allStudents=ct.students, ct.loaded=!0
      }, Et=[
      ], $t=function(e, t){
        return st(void 0, void 0, void 0, (function(){
          var r, n;
          return it(this, (function(o){
            return Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return t=ct, [
                      4, Le(e)
                    ];
                    case 1:return t.course=r.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), r=function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Be(e)
                    ];
                    case 1:return t=r.sent(), ct.scoreSettings={
                      autoPublish:t.auto_publish, canPublishScore:t.can_publish_score
                    }, ct.scoreSettings.isScorePublishStarted=x().diff(x(t.score_publish_start), "seconds")>0, ct.scorePublishDeadline=t.score_publish_deadline, ct.scoreStatus=t.score_status, ct.published_name=t.published_name, ct.courseScoresPublished="submitted"===ct.scoreStatus, "string"==typeof t.published_at&&(ct.published_at=x(t.published_at).format("YYYY.MM.DD HH:mm")), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e), n=function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, je(e)
                    ];
                    case 1:return t=r.sent(), ct.scoreTypeSettings={
                      score_type:t.score_type, passing_score:t.passing_score
                    }, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e), Et.push(r, n), Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Ue(e)
                    ];
                    case 1:return t=r.sent(), ct.homeworks=N().each(t.homework_activities, (function(e){
                      return e.type="homework", e.score_published=e.is_announce_score_time_passed, e.url="/course/".concat(ct.courseId, "/learning-activity#/").concat(e.id), e.scores=N().find(t.scores, {
                        homework_id:e.id
                      }).scores, N().each(e.scores, (function(e){
                        lt(e)
                      }))
                    })), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Ve(e)
                    ];
                    case 1:return t=r.sent(), ct.activityStudentStatus.homework=t, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Et.push(ut(e)), Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Ke(e)
                    ];
                    case 1:return t=r.sent(), ct.activityStudentStatus.exam=t, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Et.push(dt(e)), Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, We(e)
                    ];
                    case 1:return t=r.sent(), ct.activityStudentStatus.classroom=t, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, He(e)
                    ];
                    case 1:return t=r.sent(), ct.rollcallSetting=at({
                      score_percentage:0
                    }, t), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, qe(e)
                    ];
                    case 1:return t=r.sent(), ct.rollcallScore=t.scores||[
                    ], [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), ct.isAllowPerformanceView&&Et.push(pt(e)), Et.push(ft(e)), Et.push(mt(e)), Et.push(vt(e)), Et.push(ht(e)), Et.push(gt(e)), Et.push(_t(e)), Et.push(yt(e)), ct.allowDisplayScoreRanks&&Et.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Qe(e)
                    ];
                    case 1:return t=r.sent(), ct.scoreRanks=t.score_ranks, ct.passScoreValue=100, N().each(ct.scoreRanks, (function(e){
                      if(e.min<ct.passScoreValue&&!0===e.pass)return ct.passScoreValue=e.min
                    })), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Promise.all([
              r, n
            ]).then((function(){
              return st(void 0, void 0, void 0, (function(){
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, bt(e)
                    ];
                    case 1:return r.sent(), Et.push(Ct(e)), Promise.all(Et).then((function(){
                      return Tt(t)
                    })), [
                      2
                    ]
                  }
                }))
              }))
            })), [
              2
            ]
          }))
        }))
      }, Pt=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Dt=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Nt=function(e, t, r){
        if(r||2===arguments.length)for(var n, o=0, a=t.length;
        o<a;
        o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t, 0, o)), n[
          o
        ]
        =t[
          o
        ]);
        return e.concat(n||Array.prototype.slice.call(t))
      };
      const Rt=(0, s.pM)({
        name:"total-score-table", components:{
          TooltipExt:i.A, SvgIcon:l.A, ScoreItemOption:$e, ScoreLogDropdown:Re
        }, props:{
          scoreItemGroups:{
            type:Array, required:!0
          }, height:{
            type:Number, required:!0
          }, scoreStatus:{
            type:String
          }
        }, setup:function(e){
          var t, r, n, o, c=this, u=(null===(r=null===(t=window.globalData)||void 0===t?void 0:t.course)||void 0===r?void 0:r.id)||0, d=(0, s.KR)({
            key:"", order:"asc"
          }), p=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                var o="number"==typeof r[
                  e
                ]
                ?r[
                  e
                ]
                :0, a="number"==typeof n[
                  e
                ]
                ?n[
                  e
                ]
                :0;
                return(t?-1:1)*(o-a)
              }));
              var r=t?"desc":"asc";
              d.value={
                key:e, order:r
              }
            }
          }, f=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                return(t?-1:1)*r[
                  e
                ].localeCompare(n[
                  e
                ])
              }));
              var r=t?"desc":"asc";
              d.value={
                key:e, order:r
              }
            }
          }, m=function(e, t){
            return d.value.key===e&&d.value.order===t
          }, v=(0, s.EW)((function(){
            var t, r=[
              {
                title:a.default.t("courseScore.classMember"), slot:"name", width:160, fixed:"left", renderHeader:function(e, t){
                  return e("div", [
                    e("span", a.default.t("courseScore.classMember")), e("span", {
                      class:"ivu-table-sort"
                    }, [
                      e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropup", {
                            on:m("user_no", "asc")
                          }
                        ], on:{
                          click:function(){
                            return f("user_no", !1)
                          }
                        }
                      }), e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                            on:m("user_no", "desc")
                          }
                        ], on:{
                          click:function(){
                            return f("user_no", !0)
                          }
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:a.default.t("scoreRecord.originalScore"), key:"raw_score", slot:"rawScore", width:142, fixed:"right", className:"right-column", renderHeader:function(t, r){
                  return t("div", {
                    class:"raw-score"
                  }, [
                    t("div", [
                      t("span", a.default.t("scoreRecord.originalScore")), t("Tooltip", {
                        props:{
                          transfer:!0, content:a.default.t("courseScore.scoreItemGroup.scoreFormula"), placement:"top"
                        }
                      }, [
                        t(l.A, {
                          props:{
                            name:"help"
                          }
                        })
                      ]), t("span", {
                        class:"ivu-table-sort"
                      }, [
                        t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:m("raw_score", "asc")
                            }
                          ], on:{
                            click:function(){
                              return p("raw_score", !1)
                            }
                          }
                        }), t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:m("raw_score", "desc")
                            }
                          ], on:{
                            click:function(){
                              return p("raw_score", !0)
                            }
                          }
                        })
                      ]), t($e, {
                        props:{
                          "score-item":{
                            id:0, type:"raw_score"
                          }, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ]), t("div", {
                      class:"raw-score-tip"
                    }, a.default.t("scoreRecord.fullMarksTip"))
                  ])
                }
              }, {
                title:a.default.t("scoreRecord.finalScore"), key:"total_score", width:142, fixed:"right", className:"right-column", slot:"totalScore", renderHeader:function(t, r){
                  return t("div", {
                    class:"total-score"
                  }, [
                    t("div", [
                      t("span", a.default.t("scoreRecord.finalScore")), t("span", {
                        class:"ivu-table-sort"
                      }, [
                        t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:m("total_score", "asc")
                            }
                          ], on:{
                            click:function(){
                              return p("total_score", !1)
                            }
                          }
                        }), t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:m("total_score", "desc")
                            }
                          ], on:{
                            click:function(){
                              return p("total_score", !0)
                            }
                          }
                        })
                      ]), t($e, {
                        props:{
                          "score-item":{
                            id:0, type:"total_score"
                          }, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:a.default.t("scoreRecord.exceptional"), width:98, fixed:"right", slot:"exceptionalCases", className:"right-column"
              }, {
                title:a.default.t("tencent_meeting.note"), width:98, fixed:"right", slot:"scoreComment", className:"right-column"
              }
            ];
            (null===(t=window.exceptionalCaseInfo)||void 0===t?void 0:t.enabled)||(r=r.filter((function(e){
              return"exceptionalCases"!==e.slot
            })));
            var n=e.scoreItemGroups.map((function(t){
              var r="group-".concat(t.id, "-score");
              return{
                title:t.name, key:r, minWidth:180, renderHeader:function(n, o){
                  return n("div", {
                    class:"group-name"
                  }, [
                    n("div", [
                      n(i.A, {
                        props:{
                          text:t.name
                        }
                      }), n("span", {
                        class:"ivu-table-sort"
                      }, [
                        n("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:m(r, "asc")
                            }
                          ], on:{
                            click:function(){
                              return p(r, !1)
                            }
                          }
                        }), n("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:m(r, "desc")
                            }
                          ], on:{
                            click:function(){
                              return p(r, !0)
                            }
                          }
                        })
                      ]), n($e, {
                        props:{
                          "score-item":{
                            id:t.id, type:"group"
                          }, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ]), n("div", {
                      class:"score-percentage"
                    }, "".concat(t.percentage, "%"))
                  ])
                }
              }
            }));
            return r.splice.apply(r, Nt([
              1, 0
            ], n, !1)), r
          })), h=(0, s.EW)((function(){
            return ct.loaded?ct.students:[
            ]
          })), g=(null===(o=null===(n=window.globalData)||void 0===n?void 0:n.course)||void 0===o?void 0:o.isSimulatingInstructor)||!1;
          fe.A.$on("refreshScore", (function(){
            (0, s.dY)((function(){
              return Pt(c, void 0, void 0, (function(){
                return Dt(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, yt(u)
                    ];
                    case 1:return t.sent(), ct.loaded=!1, [
                      4, Ct(u)
                    ];
                    case 2:return t.sent(), Tt(e.scoreItemGroups), [
                      2
                    ]
                  }
                }))
              }))
            }))
          })), fe.A.$on("refreshErrorScore", (function(){
            ct.loaded=!1, setTimeout((function(){
              ct.loaded=!0
            }), 300)
          })), fe.A.$on("clear-sorted-by", (function(){
            d.value.key=""
          }));
          var _=(0, s.EW)((function(){
            var e=window;
            if(!e.exceptionalCaseInfo)return{
            };
            var t=e.exceptionalCaseInfo, r={
            };
            return Object.keys(t.mapping).forEach((function(e){
              t.allowExceptionalCaseType.includes(e)&&(r[
                e
              ]
              =t.mapping[
                e
              ])
            })), r
          })), y=N().debounce((function(e, t){
            return Pt(c, void 0, void 0, (function(){
              var r;
              return Dt(this, (function(n){
                switch(n.label){
                  case 0:if(!t)return[
                    2
                  ];
                  r={
                  }, n.label=1;
                  case 1:return n.trys.push([
                    1, 3, , 4
                  ]), [
                    4, et(e.enrollment_id, t)
                  ];
                  case 2:return r=n.sent(), be.A.success(a.default.t("save_success")), [
                    3, 4
                  ];
                  case 3:return n.sent(), console.error("updateStudentExceptionalCase failed with:", r), be.A.error(a.default.t("save_error")), [
                    3, 4
                  ];
                  case 4:return[
                    2
                  ]
                }
              }))
            }))
          }), 600), S=N().debounce((function(e){
            return Pt(c, void 0, void 0, (function(){
              var t;
              return Dt(this, (function(r){
                switch(r.label){
                  case 0:t={
                  }, r.label=1;
                  case 1:return r.trys.push([
                    1, 3, , 4
                  ]), [
                    4, (n=e.enrollment_id, o=e.score_comment, Ge(void 0, void 0, void 0, (function(){
                      var e;
                      return Fe(this, (function(t){
                        switch(t.label){
                          case 0:return e="/api/enrollment/".concat(n, "/score-comment"), [
                            4, Oe().put(e, (0, we.decamelizeKeys)({
                              scoreComment:o
                            }))
                          ];
                          case 1:return[
                            2, t.sent().data
                          ]
                        }
                      }))
                    })))
                  ];
                  case 2:return t=r.sent(), be.A.success(a.default.t("save_success")), [
                    3, 4
                  ];
                  case 3:return r.sent(), console.error("updateStudentScoreComment failed with:", t), be.A.error(a.default.t("save_error")), [
                    3, 4
                  ];
                  case 4:return[
                    2
                  ]
                }
                var n, o
              }))
            }))
          }), 2e3), b=N().debounce((function(e){
            return Pt(c, void 0, void 0, (function(){
              var t;
              return Dt(this, (function(r){
                switch(r.label){
                  case 0:t={
                  }, r.label=1;
                  case 1:return r.trys.push([
                    1, 3, , 4
                  ]), [
                    4, wt(e)
                  ];
                  case 2:return t=r.sent(), be.A.success(a.default.t("save_success")), [
                    3, 4
                  ];
                  case 3:return r.sent(), console.error("updateTotalScore failed with:", t), be.A.error(a.default.t("save_error")), [
                    3, 4
                  ];
                  case 4:return[
                    2
                  ]
                }
              }))
            }))
          }), 1500);
          return{
            columns:v, scoreDatas:ct, items:h, exceptionalMapping:_, caseChangeHandler:y, commentChangeHandler:S, getEditTip:function(e){
              return"".concat(a.default.t("scoreRecord.lastEditTime"), ": ").concat(function(e, t){
                void 0===t&&(t="YYYY.MM.DD HH:mm");
                var r=x(e);
                return r.isValid()?r.format(t):e
              }
              (e.data.manual_change_final_score_time), " ").concat(e.data.manual_scored_instructor)
            }, totalScoreChangeHandler:b, getManualChangeFinalScore:function(e){
              var t, r;
              return(null===(t=e.data)||void 0===t?void 0:t.manual_change_final_score)?(null===(r=e.data)||void 0===r?void 0:r.manual_change_final_score.length)?(0, we.camelizeKeys)(e.data.manual_change_final_score):[
                {
                  scoredAt:e.data.manual_change_final_score_time, scoredBy:e.data.manual_scored_instructor, score:e.total_score, deleteFinalScore:!1
                }
              ]
              :[
              ]
            }, isSimulatingInstructor:g
          }
        }
      });
      const Mt=(0, m.A)(Rt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"total-score-table"
        }, [
          r("Table", {
            staticClass:"table-content", attrs:{
              height:e.height, columns:e.columns, data:e.items, loading:!e.scoreDatas.loaded
            }, scopedSlots:e._u([
              {
                key:"name", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", {
                      staticClass:"student-name-area"
                    }, [
                      r("div", {
                        staticClass:"student-name"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.name
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"student-no"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.user_no
                          }
                        })
                      ], 1)
                    ])
                  ]
                }
              }, {
                key:"rawScore", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", [
                      e._v(e._s(n.raw_score))
                    ])
                  ]
                }
              }, {
                key:"totalScore", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", {
                      staticClass:"total-score-area"
                    }, [
                      "submitted"===e.scoreStatus||e.isSimulatingInstructor?r("span", [
                        e._v(e._s(n.total_score))
                      ]):r("Input", {
                        staticClass:"input-total-score", class:{
                          "has-score-time":Boolean(n.data&&n.data.manualChangeFinalScore&&n.data.manualChangeFinalScore.length)
                        }, on:{
                          "on-change":function(t){
                            return e.totalScoreChangeHandler(n)
                          }
                        }, model:{
                          value:n.total_score, callback:function(t){
                            e.$set(n, "total_score", t)
                          }, expression:"row.total_score"
                        }
                      }), e._v(" "), r("ScoreLogDropdown", {
                        attrs:{
                          items:e.getManualChangeFinalScore(n)
                        }
                      }, [
                        r("i", {
                          staticClass:"icon icon-total-score-changed"
                        })
                      ])
                    ], 1)
                  ]
                }
              }, {
                key:"exceptionalCases", fn:function(t){
                  var n=t.row;
                  return[
                    e.isSimulatingInstructor?r("span", {
                      staticClass:"select-exceptional-case"
                    }, [
                      e._v("\n        "+e._s(e.exceptionalMapping[
                        n.exceptional_case
                      ])+"\n      ")
                    ]):r("Select", {
                      staticClass:"select-exceptional-case", attrs:{
                        disabled:"submitted"===e.scoreStatus
                      }, on:{
                        "on-change":function(t){
                          return e.caseChangeHandler(n, t)
                        }
                      }, model:{
                        value:n.exceptional_case, callback:function(t){
                          e.$set(n, "exceptional_case", t)
                        }, expression:"row.exceptional_case"
                      }
                    }, e._l(e.exceptionalMapping, (function(t, n){
                      return r("Option", {
                        key:n, attrs:{
                          value:n
                        }
                      }, [
                        e._v(e._s(t))
                      ])
                    })), 1)
                  ]
                }
              }, {
                key:"scoreComment", fn:function(t){
                  var n=t.row;
                  return[
                    "submitted"===e.scoreStatus||e.isSimulatingInstructor?r("span", {
                      staticClass:"input-score-comment"
                    }, [
                      e._v("\n        "+e._s(n.score_comment)+"\n      ")
                    ]):r("Input", {
                      staticClass:"input-score-comment", on:{
                        "on-change":function(t){
                          return e.commentChangeHandler(n)
                        }
                      }, model:{
                        value:n.score_comment, callback:function(t){
                          e.$set(n, "score_comment", t)
                        }, expression:"row.score_comment"
                      }
                    })
                  ]
                }
              }
            ])
          })
        ], 1)
      }), [
      ], !1, null, "5236ffc3", null).exports;
      var Ot=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Gt=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Ft=function(e, t, r){
        if(r||2===arguments.length)for(var n, o=0, a=t.length;
        o<a;
        o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t, 0, o)), n[
          o
        ]
        =t[
          o
        ]);
        return e.concat(n||Array.prototype.slice.call(t))
      };
      const Lt=(0, s.pM)({
        name:"group-score-table", components:{
          TooltipExt:i.A, scoreItemOption:$e
        }, props:{
          itemGroup:{
            type:Object, required:!0
          }, courseId:{
            type:Number, required:!0
          }, height:{
            type:Number, required:!0
          }, scoreItemGroups:{
            type:Array
          }, scoreStatus:{
            type:String
          }
        }, setup:function(e){
          var t, r, n=this, o=function(t){
            var r=function(e, t, r){
              if("rollcall_score_setting"===e.type)return"/course/".concat(t, "/rollcall");
              if("online_video_completeness_score_setting"===e.type)return"";
              if("custom"===e.type)return"";
              if("performance_score_setting"===e.type)return"/course/".concat(t, "/performance");
              var n=rt[
                e.type
              ], o=N().find(r, {
                type:n, id:e.referrerId
              });
              return o?o.url:""
            }
            (t, e.courseId, ct.activities);
            r&&(window.location.href=r)
          }, c=(0, s.KR)({
            key:"", order:"asc"
          }), l=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                return(t?-1:1)*(r[
                  e
                ]
                -n[
                  e
                ])
              }));
              var r=t?"desc":"asc";
              c.value={
                key:e, order:r
              }
            }
          }, u=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                return(t?-1:1)*r[
                  e
                ].localeCompare(n[
                  e
                ])
              }));
              var r=t?"desc":"asc";
              c.value={
                key:e, order:r
              }
            }
          }, d=function(e, t){
            return c.value.key===e&&c.value.order===t
          }, p=(null===(r=null===(t=window.globalData)||void 0===t?void 0:t.course)||void 0===r?void 0:r.isSimulatingInstructor)||!1, f=(0, s.EW)((function(){
            if(0===e.itemGroup.items.length)return[
              {
                title:a.default.t("courseScore.classMember"), slot:"name", width:160, fixed:"left", renderHeader:function(e, t){
                  return e("div", [
                    e("span", a.default.t("courseScore.classMember")), e("span", {
                      class:"ivu-table-sort"
                    }, [
                      e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropup", {
                            on:d("user_no", "asc")
                          }
                        ], on:{
                          click:function(){
                            return u("user_no", !1)
                          }
                        }
                      }), e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                            on:d("user_no", "desc")
                          }
                        ], on:{
                          click:function(){
                            return u("user_no", !0)
                          }
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:e.itemGroup.name, render:function(e, t){
                  return e("div", String(0))
                }
              }
            ];
            var t=[
              {
                title:a.default.t("courseScore.classMember"), slot:"name", width:160, fixed:"left", renderHeader:function(e, t){
                  return e("div", [
                    e("span", a.default.t("courseScore.classMember")), e("span", {
                      class:"ivu-table-sort"
                    }, [
                      e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropup", {
                            on:d("user_no", "asc")
                          }
                        ], on:{
                          click:function(){
                            return u("user_no", !1)
                          }
                        }
                      }), e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                            on:d("user_no", "desc")
                          }
                        ], on:{
                          click:function(){
                            return u("user_no", !0)
                          }
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:e.itemGroup.name, width:155, fixed:"right", render:function(t, r){
                  var n=function(t){
                    return t[
                      "group-".concat(e.itemGroup.id, "-score")
                    ]
                  }
                  (r.row);
                  return t("div", String(n))
                }
              }
            ], r=N().debounce((function(e, t, r){
              return Ot(n, void 0, void 0, (function(){
                var n;
                return Gt(this, (function(o){
                  switch(o.label){
                    case 0:return n=Number(e), !Number.isFinite(n)||n<0||n>100?(be.A.error(a.default.t("save_error")), fe.A.$emit("refreshErrorScore"), [
                      2
                    ]):[
                      4, Ye(t, r, e)
                    ];
                    case 1:return o.sent(), be.A.success(a.default.t("save_success")), fe.A.$emit("refreshScore"), [
                      2
                    ]
                  }
                }))
              }))
            }), 600), s=e.itemGroup.items.map((function(t){
              var n="item-".concat(t.id, "-score");
              return{
                title:t.name, key:n, scoreItemId:t.id, itemType:t.type, minWidth:180, renderHeader:function(r, s){
                  var c, u=r("div", {
                    on:{
                      click:function(){
                        return o(t)
                      }
                    }, class:{
                      "clickable-item":![
                        "custom", "online_video_completeness_score_setting"
                      ].includes(t.type)
                    }
                  }, [
                    r(i.A, {
                      props:{
                        text:t.name
                      }
                    })
                  ]), p=[
                  ], f=nt(t, ct.activities);
                  return f&&null!==(c=f.published)&&void 0!==c&&!c&&p.push(r("div", {
                    class:"publish-text"
                  }, a.default.t("activityPublish.unpublished"))), r("div", {
                    class:"group-name"
                  }, Ft([
                    r("div", {
                      class:"name-tooltip"
                    }, [
                      u, r("div", {
                        class:"ivu-table-sort"
                      }, [
                        r("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:d(n, "asc")
                            }
                          ], on:{
                            click:function(){
                              return l(n, !1)
                            }
                          }
                        }), r("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:d(n, "desc")
                            }
                          ], on:{
                            click:function(){
                              return l(n, !0)
                            }
                          }
                        })
                      ]), r($e, {
                        props:{
                          "score-item":t, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ]), r("div", {
                      class:"percent-text"
                    }, "".concat(t.weight, "%"))
                  ], p, !0))
                }, render:function(o, s){
                  var i=s.row, c=i[
                    n
                  ], l=nt(t, ct.activities, [
                    "homework", "exam", "classroom"
                  ]), u="score-item", d=-1===c?"0":String(c);
                  if(l){
                    var f=It(l, i);
                    "un_assigned"===f?(u="score-item-info", d=a.default.t("courseScore.scoreItemGroup.unAssigned")):"un_submitted"===f?(u="score-item-warning", d=a.default.t("courseScore.scoreItemGroup.unsubmitted")):"un_marked"===f?(u="score-item-info", d=a.default.t("courseScore.scoreItemGroup.unMarked")):"un_scored"===f&&(u="score-item-info", d=a.default.t("courseScore.scoreItemGroup.unScored"))
                  }
                  else{
                    if("custom"===s.column.itemType&&"submitted"!==e.scoreStatus&&!p)return o("Input", {
                      props:{
                        value:d=-1===c?"":String(c)
                      }, class:"input-score-comment", on:{
                        input:function(e){
                          return r(e, s.column.scoreItemId, s.row.id)
                        }
                      }
                    });
                    "custom"===s.column.itemType&&(d=-1===c?"":String(c))
                  }
                  return o("div", {
                    class:u
                  }, d)
                }
              }
            }));
            return t.splice.apply(t, Ft([
              1, 0
            ], s, !1)), t
          })), m=(0, s.EW)((function(){
            return ct.loaded?ct.students:[
            ]
          }));
          return fe.A.$on("clear-sorted-by", (function(){
            c.value.key=""
          })), {
            columns:f, scoreDatas:ct, items:m
          }
        }
      });
      const Bt=(0, m.A)(Lt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"group-score-table"
        }, [
          r("Table", {
            staticClass:"table-content", attrs:{
              height:e.height, columns:e.columns, data:e.items, loading:!e.scoreDatas.loaded
            }, scopedSlots:e._u([
              {
                key:"name", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", {
                      staticClass:"student-name-area"
                    }, [
                      r("div", {
                        staticClass:"student-name"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.name
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"student-no"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.user_no
                          }
                        })
                      ], 1)
                    ])
                  ]
                }
              }
            ])
          })
        ], 1)
      }), [
      ], !1, null, "a5d5fb06", null).exports;
      const jt=(0, s.pM)({
        name:"alert-message", props:{
          scoreStatus:{
            type:Object
          }
        }, setup:function(e){
          return{
            isScorePublishStarted:(0, s.EW)((function(){
              return!(!e.scoreStatus||!e.scoreStatus.scorePublishStart)&&x().diff(e.scoreStatus.scorePublishStart, "seconds")>0
            }))
          }
        }
      });
      const Ut=(0, m.A)(jt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return e.scoreStatus&&e.isScorePublishStarted?r("div", {
          staticClass:"alert-div"
        }, [
          "submitted"===e.scoreStatus.scoreStatus?r("div", {
            staticClass:"ivu-alert ivu-alert-success ivu-alert-with-icon"
          }, [
            e._m(0), e._v(" "), r("div", {
              staticClass:"ivu-alert-message status"
            }, [
              r("b", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreSubmitted")))
              ]), e._v(" "), e.scoreStatus.publishedAt?r("span", [
                e._v("\n        （\n        "), e.scoreStatus.publishedName?r("span", [
                  e._v(e._s(e.scoreStatus.publishedName))
                ]):e._e(), e._v(" "), e.scoreStatus.publishedName?e._e():r("span", [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.autoSubmit")))
                ]), e._v("\n        ,\n        "), r("span", [
                  e._v(e._s(e._f("datetime")(e.scoreStatus.publishedAt)))
                ]), e._v("\n        ）\n      ")
              ]):e._e()
            ])
          ]):e._e(), e._v(" "), "submitted"!==e.scoreStatus.scoreStatus&&"partial_submitted"!==e.scoreStatus.scoreStatus&&e.scoreStatus.scorePublishDeadline?r("div", {
            staticClass:"ivu-alert ivu-alert-warning ivu-alert-with-icon"
          }, [
            e._m(1), e._v(" "), r("div", {
              staticClass:"ivu-alert-message status"
            }, [
              r("b", [
                "submitting"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.scoreSubmitting"))+"\n        ")
                ]):e._e(), e._v(" "), "unsubmitted"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.unsubmitScore"))+"\n        ")
                ]):e._e(), e._v(" "), "expired"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.unsubmitScore"))+"\n        ")
                ]):e._e()
              ]), e._v(" "), e.scoreStatus.scorePublishDeadline?r("span", [
                "unsubmitted"==e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          （\n          "), r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.scorePublishDeadline"))+":")
                  ]), e._v(" "), r("span", [
                    e._v(e._s(e._f("datetime")(e.scoreStatus.scorePublishDeadline)))
                  ]), e._v(" "), e.scoreStatus.autoPublish?r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.autoSubmitWhenDeadline")))
                  ]):e._e(), e._v("\n          ）\n        ")
                ]):e._e(), e._v(" "), "expired"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          （\n          "), r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.expiredDeadlineTips"))+":")
                  ]), e._v(" "), r("span", [
                    e._v(e._s(e._f("datetime")(e.scoreStatus.scorePublishDeadline)))
                  ]), e._v("\n          ）\n        ")
                ]):e._e()
              ]):e._e()
            ])
          ]):e._e()
        ]):e._e()
      }), [
        function(){
          var e=this.$createElement, t=this._self._c||e;
          return t("span", {
            staticClass:"ivu-alert-icon"
          }, [
            t("i", {
              staticClass:"ivu-icon font font-checkmark-circle"
            })
          ])
        }, function(){
          var e=this.$createElement, t=this._self._c||e;
          return t("span", {
            staticClass:"ivu-alert-icon"
          }, [
            t("i", {
              staticClass:"ivu-icon font font-alert-circle"
            })
          ])
        }
      ], !1, null, "43167de5", null).exports;
      var Vt=r(516844), Kt=(r(868329), r(793110)), Wt=r.n(Kt), Ht=r(630240), qt=r(953768), zt=r(545620);
      r(164464), r(700329);
      Ht.Yx([
        zt.a
      ]);
      const Yt=(0, s.pM)({
        name:"chart-page", components:{
          ECharts:qt.A
        }, props:{
          courseId:{
            type:Number, required:!0
          }
        }, setup:function(e){
          var t=(0, s.KR)([
            a.default.t("learningAnalysis.scoreLevel.under60"), a.default.t("learningAnalysis.scoreLevel.between60To70"), a.default.t("learningAnalysis.scoreLevel.between70To80"), a.default.t("learningAnalysis.scoreLevel.between80To90"), a.default.t("learningAnalysis.scoreLevel.between90To100")
          ]), r=getComputedStyle(document.documentElement).getPropertyValue("--primary-brand-color-lightened-1").trim(), n=(0, s.EW)((function(){
            return ct.loaded?ct.students:[
            ]
          })), o=function(e){
            return null!=e.total_score&&!Number.isNaN(e.total_score)
          }, i=(0, s.EW)((function(){
            var e=new(Wt())(0);
            c._.each(n.value, (function(t){
              o(t)&&(e=e.plus(new(Wt())(t.total_score||0)))
            }));
            var t, r=e.dividedBy((t=0, c._.each(n.value, (function(e){
              o(e)&&(t+=1)
            })), t));
            return r>new(Wt())(0)?parseFloat(r.toFixed(1)):0
          })), l=(0, s.EW)((function(){
            var e=c._.maxBy(c._.filter(n.value, (function(e){
              return o(e)
            })), (function(e){
              return parseFloat(e.total_score)
            }));
            return e&&!Number.isNaN(e.total_score)?parseFloat(e.total_score):0
          })), u=(0, s.EW)((function(){
            if(!ct.loaded)return 0;
            var e=c._.minBy(c._.filter(n.value, (function(e){
              return o(e)
            })), (function(e){
              return parseFloat(e.total_score)
            }));
            return e&&!Number.isNaN(e.total_score)?parseFloat(e.total_score):0
          })), d=(0, s.EW)((function(){
            var e=[
              1, 2, 3, 4, 5
            ].map((function(e){
              return 0
            }));
            return c._.each(n.value, (function(t){
              o(t)&&(t.total_score<60?e[
                0
              ]
              ++:t.total_score>=60&&t.total_score<70?e[
                1
              ]
              ++:t.total_score>=70&&t.total_score<80?e[
                2
              ]
              ++:t.total_score>=80&&t.total_score<90?e[
                3
              ]
              ++:t.total_score>=90&&e[
                4
              ]
              ++)
            })), e
          })), p=(0, s.EW)((function(){
            return{
              backgroundColor:"white", color:[
                r
              ], tooltip:{
                show:!0, trigger:"axis", axisPointer:{
                  type:"none"
                }
              }, grid:{
                borderWidth:0
              }, xAxis:{
                type:"category", data:t.value, axisLabel:{
                  interval:0
                }, splitLine:{
                  show:!0, lineStyle:{
                    opacity:.2
                  }
                }, splitArea:{
                  show:!1
                }, axisLine:{
                  lineStyle:{
                    color:"#aaaaaa"
                  }
                }, axisTick:{
                  lineStyle:{
                    color:"#aaaaaa"
                  }
                }
              }, yAxis:{
                name:a.default.t("courseScore.scoreItemGroup.studentCount"), type:"value", splitArea:{
                  show:!0, areaStyle:{
                    color:[
                      "rgba(250,250,250,0.3)", "rgba(200,200,200,0.1)"
                    ]
                  }
                }, splitLine:{
                  show:!0, lineStyle:{
                    opacity:.2
                  }
                }, axisLine:{
                  lineStyle:{
                    color:"#aaaaaa"
                  }
                }
              }, series:[
                {
                  name:a.default.t("courseScore.scoreItemGroup.studentCount"), data:d.value, type:"bar", barMaxWidth:40, itemStyle:{
                    normal:{
                      barBorderRadius:0
                    }
                  }
                }
              ]
            }
          }));
          return{
            students:n, averageScore:i, highestScore:l, lowestScore:u, options:p
          }
        }
      });
      const Jt=(0, m.A)(Yt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"chart-page"
        }, [
          r("div", {
            staticClass:"chart-page-title"
          }, [
            e._v(e._s(e.$t("courseScore.scoreItemGroup.totalScoreStatistics")))
          ]), e._v(" "), r("div", {
            staticClass:"score-summary-section"
          }, [
            r("div", {
              staticClass:"summary-card"
            }, [
              r("div", {
                staticClass:"summary-label"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.avgScore")))
              ]), e._v(" "), r("div", {
                staticClass:"summary-info"
              }, [
                r("span", {
                  staticClass:"value"
                }, [
                  e._v(e._s(e.averageScore))
                ]), e._v(" "), r("span", {
                  staticClass:"unit"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
                ])
              ])
            ]), e._v(" "), r("div", {
              staticClass:"summary-card"
            }, [
              r("div", {
                staticClass:"summary-label"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.highestScore")))
              ]), e._v(" "), r("div", {
                staticClass:"summary-info"
              }, [
                r("span", {
                  staticClass:"value"
                }, [
                  e._v(e._s(e.highestScore))
                ]), e._v(" "), r("span", {
                  staticClass:"unit"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
                ])
              ])
            ]), e._v(" "), r("div", {
              staticClass:"summary-card"
            }, [
              r("div", {
                staticClass:"summary-label"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.lowestScore")))
              ]), e._v(" "), r("div", {
                staticClass:"summary-info"
              }, [
                r("span", {
                  staticClass:"value"
                }, [
                  e._v(e._s(e.lowestScore))
                ]), e._v(" "), r("span", {
                  staticClass:"unit"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
                ])
              ])
            ])
          ]), e._v(" "), r("div", {
            staticClass:"chart-section-div"
          }, [
            r("ECharts", {
              staticStyle:{
                height:"100%", width:"100%"
              }, attrs:{
                options:e.options, autoresize:""
              }
            })
          ], 1)
        ])
      }), [
      ], !1, null, "458eb4d4", null).exports;
      const Zt=(0, s.pM)({
        name:"ScoreExportModal", components:{
          SvgIcon:l.A
        }, props:{
          value:{
            type:Boolean, default:!1
          }
        }, emits:[
          "on-export", "on-custom-export"
        ], setup:function(e, t){
          var r=t.emit, n=(0, I.hRP)(e, "value", r, {
            eventName:"input"
          }), o=(0, s.KR)("generic");
          return{
            visible:n, selectedOption:o, selectOption:function(e){
              o.value=e
            }, handleExport:function(){
              "template"===o.value?r("on-custom-export"):r("on-export"), o.value="generic", n.value=!1
            }, handleCancel:function(){
              o.value="generic", n.value=!1
            }
          }
        }
      });
      const Xt=(0, m.A)(Zt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          attrs:{
            "class-name":"vertical-center-modal", title:e.$t("courseScore.scoreItemGroup.exportScore"), "mask-closable":!1, closable:!0, width:"600"
          }, on:{
            "on-cancel":e.handleCancel
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  r("div", {
                    staticClass:"flex"
                  }, [
                    r("Button", {
                      attrs:{
                        type:"primary"
                      }, on:{
                        click:e.handleExport
                      }
                    }, [
                      e._v(e._s(e.$t("export")))
                    ]), e._v(" "), r("Button", {
                      on:{
                        click:e.handleCancel
                      }
                    }, [
                      e._v(e._s(e.$t("cancel")))
                    ])
                  ], 1)
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.visible, callback:function(t){
              e.visible=t
            }, expression:"visible"
          }
        }, [
          r("div", {
            staticClass:"score-export-container"
          }, [
            r("Row", {
              attrs:{
                gutter:20
              }
            }, [
              r("Col", {
                attrs:{
                  span:"12"
                }
              }, [
                r("div", {
                  class:[
                    "export-option", {
                      selected:"generic"===e.selectedOption
                    }
                  ], on:{
                    click:function(t){
                      return e.selectOption("generic")
                    }
                  }
                }, [
                  r("div", {
                    staticClass:"export-card"
                  }, [
                    r("div", {
                      staticClass:"checkmark"
                    }, [
                      r("i", {
                        staticClass:"font font-check-mark"
                      })
                    ]), e._v(" "), r("div", {
                      staticClass:"card-content"
                    }, [
                      r("div", {
                        staticClass:"icon-placeholder green-bg"
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"resources-cover-excel-v1", size:28
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"export-type-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.commonExport")))
                      ]), e._v(" "), r("div", {
                        staticClass:"exort-desc-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.commonExportTip")))
                      ])
                    ])
                  ])
                ])
              ]), e._v(" "), r("Col", {
                attrs:{
                  span:"12"
                }
              }, [
                r("div", {
                  class:[
                    "export-option", {
                      selected:"template"===e.selectedOption
                    }
                  ], on:{
                    click:function(t){
                      return e.selectOption("template")
                    }
                  }
                }, [
                  r("div", {
                    staticClass:"export-card"
                  }, [
                    r("div", {
                      staticClass:"checkmark"
                    }, [
                      r("i", {
                        staticClass:"font font-check-mark"
                      })
                    ]), e._v(" "), r("div", {
                      staticClass:"card-content"
                    }, [
                      r("div", {
                        staticClass:"icon-placeholder orange-bg"
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"template-score", size:28
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"export-type-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.customExport")))
                      ]), e._v(" "), r("div", {
                        staticClass:"export-desc-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.customExportTip")))
                      ])
                    ])
                  ])
                ])
              ])
            ], 1)
          ], 1)
        ])
      }), [
      ], !1, null, "43f1f394", null).exports;
      var Qt=r(248124), er=function(){
        return(er=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, tr=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, rr=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const nr=(0, s.pM)({
        name:"score-page", components:{
          TotalScore:Mt, GroupScore:Bt, SvgIcon:l.A, TooltipExt:i.A, AddScoreItem:Se, AlertMessage:Ut, chartPage:Jt, TreeSelect:me.A, ExportScoreModal:Xt
        }, props:{
          course:{
            type:Object
          }
        }, setup:function(e){
          var t, r, n=this, o=(0, s.KR)([
          ]), c=(0, s.KR)("total"), l=(0, s.KR)(""), d=(0, s.KR)(!1), p=(0, s.KR)("list"), f=(0, s.KR)(), m=(0, s.KR)(), v=(0, s.KR)([
          ]), h=(0, s.KR)([
          ]), g=(0, s.KR)([
          ]), _=(0, s.KR)(!1);
          (0, s.wB)((function(){
            return ct.loaded
          }), (function(e){
            if(e){
              var t=a.default.t("notSpecifiedText");
              v.value=(0, ve.oM)(ct.departments.map((function(e){
                return er(er({
                }, e), {
                  name:e.name||t
                })
              }))), h.value=ct.grades.map((function(e){
                return{
                  id:e.id, title:e.name||t
                }
              })), g.value=ct.classes.map((function(e){
                return{
                  id:e.id, title:e.name||t
                }
              }))
            }
          }), {
            immediate:!0
          });
          var y=(0, s.EW)((function(){
            return m.value?m.value.clientHeight-136:0
          })), S=(0, s.EW)((function(){
            return f.value?f.value.scoreStatus:""
          })), b=(0, s.EW)((function(){
            return new RegExp(l.value, "g")
          })), w=(0, s.EW)((function(){
            var e;
            return null===(e=window.orgSettings)||void 0===e?void 0:e.splitDepartmentsAndGradesAndHideClasses
          })), C=function(e){
            var t, r, n;
            if(l.value&&!b.value.test(e.name)&&!b.value.test(e.user_no))return!1;
            for(var o="total"===c.value?ct.condition.groupScore:ct.condition.score, a=0, s=Object.entries(o);
            a<s.length;
            a++){
              var i=s[
                a
              ], u=i[
                0
              ], d=i[
                1
              ];
              if(d){
                var p=e[
                  u
                ];
                if("unscored"===d.scoreState){
                  if(N().isNumber(p)&&p>-1)return!1
                }
                else{
                  if("all"===d.scoreState)continue;
                  if((d.scoreLowLimit||d.scoreUpperLimit)&&!(N().isNumber(p)&&p>=d.scoreLowLimit&&p<=d.scoreUpperLimit))return!1
                }
              }
            }
            for(var f=0, m=Object.entries(ct.condition.filters);
            f<m.length;
            f++){
              var v=m[
                f
              ], h=(u=v[
                0
              ], v[
                1
              ]);
              if(!N().isEmpty(h))if("departmentIds"===u){
                if(!h.includes((null===(t=e.department)||void 0===t?void 0:t.id)||0))return!1
              }
              else if("gradeIds"===u){
                if(!h.includes((null===(r=e.grade)||void 0===r?void 0:r.id)||0))return!1
              }
              else if("classIds"===u&&!h.includes((null===(n=e.klass)||void 0===n?void 0:n.id)||0))return!1
            }
            return!0
          }, I=function(){
            ct.loaded&&(ct.students=ct.allStudents.filter(C), fe.A.$emit("clear-sorted-by"))
          };
          (0, s.wB)((function(){
            return e.course
          }), (function(){
            return tr(n, void 0, void 0, (function(){
              var t;
              return rr(this, (function(r){
                switch(r.label){
                  case 0:return e.course&&e.course.id?[
                    4, (0, u.Ad)(e.course.id)
                  ]
                  :[
                    3, 2
                  ];
                  case 1:t=r.sent(), o.value=t.filter((function(e){
                    return e.id
                  })), $t(e.course.id, o.value), r.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          }), {
            immediate:!0
          }), (0, s.wB)(c, (function(){
            return I()
          }));
          var x=(null===(r=null===(t=window.globalData)||void 0===t?void 0:t.course)||void 0===r?void 0:r.isSimulatingInstructor)||!1, k=function(e){
            var t;
            if(void 0===e&&(e=!0), "XMU"===(null===(t=window.globalData)||void 0===t?void 0:t.deliveryOrg)&&e)_.value=!0;
            else{
              var r="score/list/excel?column=all&conditions=".concat(JSON.stringify({
              }));
              window.location.href=r
            }
          };
          return(0, s.sV)((function(){
            return tr(n, void 0, void 0, (function(){
              var t;
              return rr(this, (function(r){
                switch(r.label){
                  case 0:return e.course&&e.course.id?(t=f, [
                    4, (0, u.z9)(e.course.id)
                  ]):[
                    3, 2
                  ];
                  case 1:t.value=r.sent(), r.label=2;
                  case 2:return fe.A.$on("send-score-filter", (function(e){
                    if(ct.loaded){
                      var t=e.key;
                      t.startsWith("item-")?ct.condition.score[
                        t
                      ]
                      =e.value:ct.condition.groupScore[
                        t
                      ]
                      =e.value, ct.students=ct.allStudents.filter(C), fe.A.$emit("clear-sorted-by")
                    }
                  })), [
                    2
                  ]
                }
              }))
            }))
          })), (0, s.xo)((function(){
            fe.A.$off("send-score-filter")
          })), {
            addOneScoreItemVisible:d, scoreItemGroups:o, activeTab:c, inputValue:l, search:I, renderLabel:function(e){
              return function(t){
                return t(i.A, {
                  props:{
                    transfer:!0, placement:"top", effect:"light", "white-space":"normal", text:e
                  }
                })
              }
            }, addScoreItem:function(e){
              if("addOne"===e)d.value=!0;
              else{
                var t=document.querySelector("[ng-controller=NewScoreCtrl]"), r=(0, Vt.useAngularScope)(t);
                r.openBatchAddScoreItemModal(), r.scoreItemGroups=o.value
              }
            }, jumpToScoreGroupSetting:function(){
              e.course&&e.course.id&&(window.location.href="/course/".concat(e.course.id, "/score-item-group/setting"))
            }, switchDisplayMode:function(e){
              p.value=e, console.log("displayMode is ", p.value)
            }, displayMode:p, openPublicScoreModal:function(){
              Qt("#course-announce-score-settings").foundation("reveal", "open")
            }, scoreStatus:f, scoreStatusLabel:S, openPublishScoreConfirm:function(){
              var e=document.querySelector("[ng-controller=NewScoreCtrl]");
              (0, Vt.useAngularScope)(e).students=ct.allStudents, Qt("#score-confirmation-popup").foundation("reveal", "open")
            }, height:y, scoreContentRef:m, filterDepartments:v, departmentChanged:function(e){
              ct.condition.filters.departmentIds=e.map((function(e){
                return e.id
              })), ct.students=ct.allStudents.filter(C)
            }, filterGrades:h, gradeChanged:function(e){
              ct.condition.filters.gradeIds=e.map((function(e){
                return e.id
              })), ct.students=ct.allStudents.filter(C)
            }, filterClasses:g, classChanged:function(e){
              ct.condition.filters.classIds=e.map((function(e){
                return e.id
              })), ct.students=ct.allStudents.filter(C)
            }, exportScore:k, exportScoreByType:function(e){
              "details"!==e?k():window.location.href="score/detail/excel"
            }, hideClasses:w, exportModalVisible:_, exportCustomScore:function(){
              window.location.href="score/custom/excel"
            }, isSimulatingInstructor:x
          }
        }
      });
      const or=(0, m.A)(nr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          attrs:{
            id:"score-page"
          }
        }, [
          r("AlertMessage", {
            attrs:{
              "score-status":e.scoreStatus
            }
          }), e._v(" "), r("div", {
            staticClass:"score-config-area"
          }, [
            r("div", {
              staticClass:"config-left-area"
            }, [
              e.scoreStatus&&"submitted"!==e.scoreStatus.scoreStatus&&!e.isSimulatingInstructor?r("Dropdown", {
                on:{
                  "on-click":e.addScoreItem
                }, scopedSlots:e._u([
                  {
                    key:"list", fn:function(){
                      return[
                        r("DropdownMenu", [
                          r("DropdownItem", {
                            attrs:{
                              name:"addOne"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.addOne")))
                          ]), e._v(" "), r("DropdownItem", {
                            attrs:{
                              name:"batchAdd"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.batchAdd")))
                          ])
                        ], 1)
                      ]
                    }, proxy:!0
                  }
                ], null, !1, 3636309533)
              }, [
                r("div", {
                  staticClass:"dropdown-header"
                }, [
                  r("div", {
                    staticClass:"dropdown-header-left"
                  }, [
                    r("SvgIcon", {
                      staticClass:"img", attrs:{
                        name:"add"
                      }
                    }), e._v(" "), r("div", {
                      staticClass:"dropdown-header-title"
                    }, [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.addScore")))
                    ])
                  ], 1), e._v(" "), r("div", {
                    staticClass:"dropdown-header-right"
                  }, [
                    r("SvgIcon", {
                      staticClass:"img", attrs:{
                        name:"arrow-down-solid"
                      }
                    })
                  ], 1)
                ])
              ]):e._e(), e._v(" "), e.scoreStatus&&"submitted"!==e.scoreStatus.scoreStatus&&!e.isSimulatingInstructor?r("Button", {
                on:{
                  click:e.jumpToScoreGroupSetting
                }
              }, [
                r("i", {
                  staticClass:"font font-score-percent"
                }), e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.gradeRatioSetting"))+"\n      ")
              ]):e._e(), e._v(" "), r("Dropdown", {
                on:{
                  "on-click":e.exportScoreByType
                }, scopedSlots:e._u([
                  {
                    key:"list", fn:function(){
                      return[
                        r("DropdownMenu", [
                          r("DropdownItem", {
                            attrs:{
                              name:"overview"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.exportOverview")))
                          ]), e._v(" "), r("DropdownItem", {
                            attrs:{
                              name:"details"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.exportDetails")))
                          ])
                        ], 1)
                      ]
                    }, proxy:!0
                  }
                ])
              }, [
                r("div", {
                  staticClass:"dropdown-export-button"
                }, [
                  r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.export")))
                  ])
                ])
              ]), e._v(" "), e.scoreStatus&&[
                "unsubmitted", "submitting", "partial_submitted"
              ].includes(e.scoreStatus.scoreStatus)&&e.scoreStatus.canPublishScore&&!e.isSimulatingInstructor?r("Button", {
                on:{
                  click:e.openPublishScoreConfirm
                }
              }, [
                e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.submitScore"))+"\n      ")
              ]):e._e(), e._v(" "), e.scoreStatus&&"submitted"!==e.scoreStatus.scoreStatus&&!e.isSimulatingInstructor?r("Button", {
                on:{
                  click:e.openPublicScoreModal
                }
              }, [
                e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.publicScore"))+"\n      ")
              ]):e._e()
            ], 1), e._v(" "), r("div", {
              staticClass:"config-right-area"
            }, [
              r("div", {
                staticClass:"display-mode-buttons"
              }, [
                r("div", {
                  staticClass:"display-mode-button list", class:{
                    active:"list"===e.displayMode
                  }, on:{
                    click:function(t){
                      return e.switchDisplayMode("list")
                    }
                  }
                }, [
                  r("SvgIcon", {
                    attrs:{
                      name:"list"
                    }
                  }), e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.list"))+"\n        ")
                ], 1), e._v(" "), r("div", {
                  staticClass:"display-mode-button chart", class:{
                    active:"chart"===e.displayMode
                  }, on:{
                    click:function(t){
                      return e.switchDisplayMode("chart")
                    }
                  }
                }, [
                  r("SvgIcon", {
                    attrs:{
                      name:"chart"
                    }
                  }), e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.chart"))+"\n        ")
                ], 1)
              ])
            ])
          ]), e._v(" "), r("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"list"===e.displayMode, expression:"displayMode === 'list'"
              }
            ], ref:"scoreContentRef", staticClass:"score-content-area"
          }, [
            r("div", {
              staticClass:"score-filter-area"
            }, [
              r("div", {
                staticClass:"filter-left-area"
              }, [
                r("div", [
                  r("span", {
                    staticClass:"title"
                  }, [
                    e._v(e._s(e.$t("department")))
                  ]), e._v(" "), r("TreeSelect", {
                    attrs:{
                      data:e.filterDepartments, "min-width":142
                    }, on:{
                      "on-checked-data":e.departmentChanged
                    }
                  })
                ], 1), e._v(" "), r("div", [
                  r("span", {
                    staticClass:"title"
                  }, [
                    e._v(e._s(e.$t("grade")))
                  ]), e._v(" "), r("TreeSelect", {
                    attrs:{
                      data:e.filterGrades, "min-width":142
                    }, on:{
                      "on-checked-data":e.gradeChanged
                    }
                  })
                ], 1), e._v(" "), e.hideClasses?r("div", [
                  r("span", {
                    staticClass:"title"
                  }, [
                    e._v(e._s(e.$t("clazz")))
                  ]), e._v(" "), r("TreeSelect", {
                    attrs:{
                      data:e.filterClasses, "min-width":142
                    }, on:{
                      "on-checked-data":e.classChanged
                    }
                  })
                ], 1):e._e()
              ]), e._v(" "), r("div", {
                staticClass:"filter-right-area"
              }, [
                r("Input", {
                  staticStyle:{
                    width:"200px"
                  }, attrs:{
                    suffix:"ios-search", clearable:"", search:"", placeholder:e.$t("courseScore.scoreItemGroup.scorePlaceholder")
                  }, on:{
                    "on-change":e.search
                  }, model:{
                    value:e.inputValue, callback:function(t){
                      e.inputValue=t
                    }, expression:"inputValue"
                  }
                })
              ], 1)
            ]), e._v(" "), r("Tabs", {
              staticClass:"tabs", attrs:{
                name:"score-item-group-tab", animated:!1
              }, model:{
                value:e.activeTab, callback:function(t){
                  e.activeTab=t
                }, expression:"activeTab"
              }
            }, [
              r("TabPane", {
                key:0, attrs:{
                  label:e.$t("courseScore.scoreItemGroup.totalScore"), name:"total"
                }
              }, [
                r("TotalScore", {
                  attrs:{
                    "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatusLabel, height:e.height
                  }
                })
              ], 1), e._v(" "), e._l(e.scoreItemGroups, (function(t){
                return r("TabPane", {
                  key:t.id, attrs:{
                    label:e.renderLabel(t.name), name:""+t.id
                  }
                }, [
                  e.course?r("GroupScore", {
                    attrs:{
                      "item-group":t, height:e.height, "course-id":e.course.id, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatusLabel
                    }
                  }):e._e()
                ], 1)
              }))
            ], 2)
          ], 1), e._v(" "), r("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"chart"===e.displayMode, expression:"displayMode === 'chart'"
              }
            ], staticClass:"chart-score-content-area"
          }, [
            e.course?r("chartPage", {
              attrs:{
                "course-id":e.course.id
              }
            }):e._e()
          ], 1), e._v(" "), e.scoreItemGroups.length>0&&e.course?r("AddScoreItem", {
            attrs:{
              "course-id":e.course.id, "score-item-groups":e.scoreItemGroups
            }, model:{
              value:e.addOneScoreItemVisible, callback:function(t){
                e.addOneScoreItemVisible=t
              }, expression:"addOneScoreItemVisible"
            }
          }):e._e(), e._v(" "), r("ExportScoreModal", {
            on:{
              "on-export":function(t){
                return e.exportScore(!1)
              }, "on-custom-export":e.exportCustomScore
            }, model:{
              value:e.exportModalVisible, callback:function(t){
                e.exportModalVisible=t
              }, expression:"exportModalVisible"
            }
          })
        ], 1)
      }), [
      ], !1, null, "3415d172", null).exports;
      var ar=r(86023), sr=function(){
        return(sr=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      const ir=(0, s.pM)({
        name:"batch-add-score-items", props:{
          scoreItemGroups:{
            type:Array
          }
        }, components:{
          ValidateResult:ar.A, DatePickerExt:k.default
        }, setup:function(e, t){
          var r=(0, s.EW)((function(){
            return{
              scored:!0, groupId:e.scoreItemGroups&&e.scoreItemGroups.length>0?e.scoreItemGroups[
                0
              ].id:0, announceScoreType:"immediate_announce", announceScoreTime:x().toISOString()
            }
          })), n=(0, s.KR)(sr({
          }, r.value)), o=function(){
            var e=sr({
            }, n.value);
            window.dispatchEvent(new CustomEvent("send-score-item-form-data", {
              detail:(0, we.decamelizeKeys)(e)
            }))
          };
          (0, s.wB)((function(){
            return e.scoreItemGroups
          }), (function(){
            e.scoreItemGroups&&e.scoreItemGroups.length>0&&(n.value.groupId=e.scoreItemGroups[
              0
            ].id, o())
          }));
          return{
            formData:n, onChangeAnnounceScore:function(e){
              n.value.announceScoreTime="no_announce"===e?null:x().toISOString(), o()
            }, onChange:function(){
              o()
            }
          }
        }
      });
      const cr=(0, m.A)(ir, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Form", {
          staticClass:"add-score-item-form-area", attrs:{
            model:e.formData, "label-position":"left", "label-width":120
          }
        }, [
          r("FormItem", {
            staticClass:"no-margin-bottom select-score-group", attrs:{
              label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
            }
          }, [
            r("Select", {
              on:{
                "on-change":e.onChange
              }, model:{
                value:e.formData.groupId, callback:function(t){
                  e.$set(e.formData, "groupId", t)
                }, expression:"formData.groupId"
              }
            }, e._l(e.scoreItemGroups, (function(e){
              return r("Option", {
                key:e.id, attrs:{
                  value:e.id, label:e.name
                }
              })
            })), 1)
          ], 1), e._v(" "), r("FormItem", {
            staticClass:"publish-score", attrs:{
              label:e.$t("homework.publishScore"), props:"announceScoreType"
            }
          }, [
            r("RadioGroup", {
              on:{
                "on-change":e.onChangeAnnounceScore
              }, model:{
                value:e.formData.announceScoreType, callback:function(t){
                  e.$set(e.formData, "announceScoreType", t)
                }, expression:"formData.announceScoreType"
              }
            }, [
              r("Radio", {
                attrs:{
                  label:"immediate_announce"
                }
              }, [
                e._v(e._s(e.$t("homework.publishNow")))
              ]), e._v(" "), r("Radio", {
                attrs:{
                  label:"no_announce"
                }
              }, [
                e._v(e._s(e.$t("homework.willNotPublish")))
              ]), e._v(" "), r("Radio", {
                attrs:{
                  label:"timed_announce"
                }
              }, [
                e._v(e._s(e.$t("homework.customPublishScoreTime")))
              ])
            ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreType?r("div", [
              r("DatePickerExt", {
                staticStyle:{
                  width:"175px"
                }, attrs:{
                  type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                }, model:{
                  value:e.formData.announceScoreTime, callback:function(t){
                    e.$set(e.formData, "announceScoreTime", t)
                  }, expression:"formData.announceScoreTime"
                }
              })
            ], 1):e._e()
          ], 1)
        ], 1)
      }), [
      ], !1, null, "4a545dd2", null).exports;
      var lr=r(384027), ur=(r(158649), "ivu-input-number"), dr="ivu-icon";
      function pr(e, t){
        var r, n, o;
        try{
          r=e.toString().split(".")[
            1
          ].length
        }
        catch(e){
          r=0
        }
        try{
          n=t.toString().split(".")[
            1
          ].length
        }
        catch(e){
          n=0
        }
        return o=Math.pow(10, Math.max(r, n)), (Math.round(e*o)+Math.round(t*o))/o
      }
      const fr={
        name:"InputNumber", props:{
          max:{
            type:Number, default:1/0
          }, min:{
            type:Number, default:-1/0
          }, step:{
            type:Number, default:1
          }, activeChange:{
            type:Boolean, default:!0
          }, value:{
            type:Number, default:1
          }, size:{
            validator:e=>!0, default(){
              return this.$IVIEW&&""!==this.$IVIEW.size?this.$IVIEW.size:"default"
            }
          }, disabled:{
            type:Boolean, default:!1
          }, autofocus:{
            type:Boolean, default:!1
          }, readonly:{
            type:Boolean, default:!1
          }, editable:{
            type:Boolean, default:!0
          }, name:{
            type:String
          }, precision:{
            type:Number
          }, elementId:{
            type:String
          }, formatter:{
            type:Function
          }, parser:{
            type:Function
          }, placeholder:{
            type:String, default:""
          }
        }, data(){
          return{
            focused:!1, upDisabled:!1, downDisabled:!1, currentValue:this.value
          }
        }, computed:{
          wrapClasses(){
            return[
              "".concat(ur), {
                [
                  "".concat(ur, "-").concat(this.size)
                ]
                :!!this.size, [
                  "".concat(ur, "-disabled")
                ]
                :this.disabled, [
                  "".concat(ur, "-focused")
                ]
                :this.focused
              }
            ]
          }, handlerClasses:()=>"".concat(ur, "-handler-wrap"), upClasses(){
            return[
              "".concat(ur, "-handler"), "".concat(ur, "-handler-up"), {
                [
                  "".concat(ur, "-handler-up-disabled")
                ]
                :this.upDisabled
              }
            ]
          }, innerUpClasses:()=>"".concat(ur, "-handler-up-inner ").concat(dr, " ").concat(dr, "-ios-arrow-up"), downClasses(){
            return[
              "".concat(ur, "-handler"), "".concat(ur, "-handler-down"), {
                [
                  "".concat(ur, "-handler-down-disabled")
                ]
                :this.downDisabled
              }
            ]
          }, innerDownClasses:()=>"".concat(ur, "-handler-down-inner ").concat(dr, " ").concat(dr, "-ios-arrow-down"), inputWrapClasses:()=>"".concat(ur, "-input-wrap"), inputClasses:()=>"".concat(ur, "-input"), precisionValue(){
            return this.currentValue&&this.precision?this.formatByPrecision(this.currentValue, this.precision):this.currentValue
          }, formatterValue(){
            return this.formatter&&null!==this.precisionValue?this.formatter(this.precisionValue):this.precisionValue
          }
        }, methods:{
          formatByPrecision:(e, t)=>Math.floor(e*Math.pow(10, t))/Math.pow(10, t), preventDefault(e){
            e.preventDefault()
          }, up(e){
            var t=Number(e.target.value);
            this.upDisabled&&Number.isNaN(t)||this.changeStep("up", e)
          }, down(e){
            var t=Number(e.target.value);
            this.downDisabled&&Number.isNaN(t)||this.changeStep("down", e)
          }, changeStep(e, t){
            if(!this.disabled&&!this.readonly){
              var r=Number(t.target.value), n=Number(this.currentValue), o=Number(this.step);
              if(!Number.isNaN(n)){
                if(!Number.isNaN(r))if("up"===e){
                  if(!(pr(r, o)<=this.max))return;
                  n=r
                }
                else if("down"===e){
                  if(!(pr(r, -o)>=this.min))return;
                  n=r
                }
                "up"===e?n=pr(n, o):"down"===e&&(n=pr(n, -o)), this.setValue(n)
              }
            }
          }, setValue(e){
            e&&!Number.isNaN(this.precision)&&(e=Number(this.formatByPrecision(e, this.precision)));
            var t=this.min, r=this.max;
            null!==e&&(e>r?e=r:e<t&&(e=t)), this.$nextTick((()=>{
              this.currentValue=e, this.$emit("input", e), this.$emit("on-change", e)
            }))
          }, focus(e){
            this.focused=!0, this.$emit("on-focus", e)
          }, blur(){
            this.focused=!1, this.$emit("on-blur")
          }, keyDown(e){
            38===e.keyCode?(e.preventDefault(), this.up(e)):40===e.keyCode&&(e.preventDefault(), this.down(e))
          }, change(e){
            if(("change"!==e.type||!this.activeChange)&&("input"!==e.type||this.activeChange)){
              var t=e.target.value.trim();
              if(this.parser&&(t=this.parser(t)), 0===t.length)return this.setValue(0), void(e.target.value=0);
              if("input"!==e.type||!t.match(/^-?\.?$|\.$/g)){
                var r=this.precision, n=this.currentValue;
                if(r){
                  var o="".concat(t).match(/\./g);
                  o&&o.length>=2&&(n="".concat(this.currentValue, "."))
                }
                t=Number(t), Number.isNaN(t)?e.target.value=n:(this.currentValue=t, this.setValue(t))
              }
            }
          }, changeVal(e){
            if(e=Number(e), Number.isNaN(e))this.upDisabled=!0, this.downDisabled=!0;
            else{
              var t=this.step;
              this.upDisabled=e+t>this.max, this.downDisabled=e-t<this.min
            }
          }
        }, mounted(){
          this.changeVal(this.currentValue)
        }, watch:{
          value(e){
            this.currentValue=e
          }, currentValue(e){
            this.changeVal(e), this.$nextTick((()=>{
              if(this.precision){
                var e=(this.currentValue||0).toString().length, t=this.$refs.precisionCursor;
                t.selectionStart=t.selectionEnd=e
              }
            }))
          }, min(){
            this.changeVal(this.currentValue)
          }, max(){
            this.changeVal(this.currentValue)
          }
        }
      };
      const mr=(0, m.A)(fr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          class:e.wrapClasses
        }, [
          r("div", {
            class:e.handlerClasses
          }, [
            r("a", {
              class:e.upClasses, on:{
                click:e.up
              }
            }, [
              r("span", {
                class:e.innerUpClasses, on:{
                  click:e.preventDefault
                }
              })
            ]), e._v(" "), r("a", {
              class:e.downClasses, on:{
                click:e.down
              }
            }, [
              r("span", {
                class:e.innerDownClasses, on:{
                  click:e.preventDefault
                }
              })
            ])
          ]), e._v(" "), r("div", {
            class:e.inputWrapClasses
          }, [
            r("input", {
              ref:"precisionCursor", class:e.inputClasses, attrs:{
                id:e.elementId, disabled:e.disabled, autocomplete:"off", spellcheck:"false", autofocus:e.autofocus, readonly:e.readonly||!e.editable, name:e.name, placeholder:e.placeholder
              }, domProps:{
                value:e.formatterValue
              }, on:{
                focus:e.focus, blur:e.blur, keydown:function(t){
                  return t.stopPropagation(), e.keyDown(t)
                }, input:e.change, mouseup:e.preventDefault, change:e.change
              }
            })
          ])
        ])
      }), [
      ], !1, null, null, null).exports, vr=(0, s.pM)({
        components:{
          InputNumber:mr, SvgIcon:l.A
        }, model:{
          prop:"percentage", event:"input"
        }, props:{
          name:{
            type:String, required:!0
          }, icon:{
            type:String, required:!0
          }, percentage:{
            type:Number, default:0
          }, desc:{
            type:String, default:""
          }, disabled:{
            type:Boolean, default:!1
          }, max:{
            type:Number, default:100
          }
        }, setup:function(e, t){
          var r=(0, s.WQ)("hasChanged");
          return{
            percentageChange:function(e){
              r&&(r.value=!0), t.emit("input", null!=e?e:0)
            }, formatNumber:function(e){
              return Number(null!=e?e:0)
            }
          }
        }
      });
      const hr=(0, m.A)(vr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-setting-category-wrapper"
        }, [
          r("div", {
            staticClass:"score-setting-category-name flex-shrink-0"
          }, [
            r("span", [
              r("SvgIcon", {
                class:e.icon, attrs:{
                  name:e.icon
                }
              })
            ], 1), e._v(" "), r("span", {
              staticClass:"break-all"
            }, [
              e._v(e._s(e.name))
            ])
          ]), e._v(" "), r("div", {
            staticClass:"score-setting-category-percentage flex-shrink-0"
          }, [
            r("InputNumber", {
              attrs:{
                value:e.percentage, max:e.max, min:0, disabled:e.disabled, formatter:e.formatNumber, precision:0
              }, on:{
                input:e.percentageChange
              }
            }), e._v("\n    %\n  ")
          ], 1), e._v(" "), r("div", {
            staticClass:"score-setting-category-desc"
          }, [
            e._v(e._s(e.desc))
          ]), e._v(" "), r("div", {
            staticClass:"score-setting-category-actions"
          }, [
            e._t("default")
          ], 2)
        ])
      }), [
      ], !1, null, "5e61044c", null).exports, gr=(0, s.pM)({
        components:{
          ScoreCategoryWrapper:hr, Button:lr.Button
        }, model:{
          prop:"percentage", event:"input"
        }, props:{
          percentage:{
            type:Number, default:0
          }, icon:{
            type:String, default:""
          }, name:{
            type:String, default:""
          }, desc:{
            type:String, default:""
          }, btnText:{
            type:String, default:""
          }, type:{
            type:String, required:!0
          }, left:{
            type:Number, required:!0
          }, scoreMode:{
            type:String
          }
        }, setup:function(e, t){
          return{
            handleClick:function(){
              t.emit("on-click", e.type)
            }, percentageChange:function(e){
              t.emit("input", e)
            }, max:(0, s.EW)((function(){
              return new Kt.Decimal(e.left||0).plus(new Kt.Decimal(e.percentage||0)).toNumber()
            })), disabled:"onlineVideo"===e.type&&!e.scoreMode
          }
        }
      });
      const _r=(0, m.A)(gr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-setting-rollcall"
        }, [
          r("ScoreCategoryWrapper", {
            attrs:{
              name:e.name, icon:e.icon, desc:e.desc, percentage:e.percentage, max:e.max, disabled:e.disabled
            }, on:{
              input:e.percentageChange
            }
          }, [
            e.btnText?r("Button", {
              attrs:{
                ghost:"", size:"small"
              }, on:{
                click:e.handleClick
              }
            }, [
              e._v(e._s(e.btnText))
            ]):e._e()
          ], 1)
        ], 1)
      }), [
      ], !1, null, null, null).exports;
      var yr=r(408576);
      const Sr=(0, s.pM)({
        name:"activity-publish-status", props:{
          isInstructor:{
            type:Boolean, required:!0
          }, activity:{
            type:Object, required:!0
          }
        }, setup:e=>({
          unPublished:(0, s.EW)((()=>!e.activity.published))
        })
      });
      const br=(0, m.A)(Sr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return e.unPublished?r("span", {
          staticClass:"publish-status-reminder", attrs:{
            "ng-if":"isInstructor"
          }
        }, [
          e._v("\n  "+e._s(e.$t("activityPublish.unpublishedReminder"))+"\n")
        ]):e._e()
      }), [
      ], !1, null, "0e26cde0", null).exports;
      var wr=function(){
        return(wr=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, Cr=function(e){
        return JSON.parse(JSON.stringify(e))
      }, Ir=[
        {
          title:a.default.t("activityName"), slot:"title", width:320
        }, {
          title:a.default.t("weight"), slot:"scorePercentage"
        }
      ], xr=function(e){
        return e.reduce((function(e, t){
          var r;
          return new Kt.Decimal(null!==(r=t.value)&&void 0!==r?r:0).plus(e)
        }), new Kt.Decimal(0)).toNumber()
      };
      const kr=(0, s.pM)({
        components:{
          ScoreCategoryWrapper:hr, Button:lr.Button, Icon:lr.Icon, RadioGroup:lr.RadioGroup, Radio:lr.Radio, Table:lr.Table, InputNumber:mr, ActivityPublishStatus:yr.A, UnpublishedReminder:br, TooltipExt:i.A
        }, props:{
          activities:{
            type:Array, default:function(){
              return[
              ]
            }
          }, left:{
            type:Number, required:!0
          }, scoreType:{
            type:String, default:"percentage"
          }, weight:{
            type:Number, default:0
          }, isInstructor:Boolean
        }, setup:function(e, t){
          var r, n, o, a, i=(0, s.WQ)("hasChanged"), c=(0, s.KR)(0), l=(0, s.KR)(0), u=(0, s.KR)(100), d=(0, s.KR)(!1), p=(0, s.KR)(e.scoreType), f=(r=e.activities, n=p.value, o=Cr(r), a=Cr(r).map((function(e){
            return wr(wr({
            }, e), {
              value:0
            })
          })), "weight"===n?{
            weight:o, percentage:a
          }
          :{
            weight:a, percentage:o
          }), m=(0, s.KR)(f[
            p.value
          ]), v=function(e){
            var t=e.filter((function(e){
              return!1!==e.isScored
            })).length, r=100%t, n=(100-r)/t;
            e.forEach((function(e){
              !1!==e.isScored&&(e.value=n+r, r=0)
            }))
          };
          return(0, s.nT)((function(){
            c.value="weight"===p.value?e.weight:xr(e.activities), l.value=xr(e.activities), "weight"===p.value?u.value=new Kt.Decimal(100).minus(xr(e.activities)).toNumber():u.value=e.left
          })), (0, s.nT)((function(){
            m.value=f[
              p.value
            ]
          })), {
            totalPercentage:c, expanded:d, columns:Ir, mode:p, totalWeight:l, weightLeft:u, data:m, percentageChange:function(t){
              var r, n;
              i&&(i.value=!0);
              var o=e.activities.find((function(e){
                return e.scoreItemId===t.scoreItemId
              })), a=m.value.find((function(e){
                return e.scoreItemId===t.scoreItemId
              }));
              a&&(a.value=null!==(r=t.value)&&void 0!==r?r:0), o&&(o.value=null!==(n=t.value)&&void 0!==n?n:0, l.value=xr(e.activities)), "weight"!==p.value?c.value=l.value:u.value=new Kt.Decimal(100).minus(xr(e.activities)).toNumber()
            }, formatNumber:function(e){
              return Number(null!=e?e:0)
            }, modeChange:function(r){
              t.emit("on-score-type-change", r);
              var n=f[
                r
              ];
              e.activities.forEach((function(e, t){
                var r=n[
                  t
                ];
                r&&(e.value=r.value)
              }))
            }, changeTotalPercentage:function(e){
              "weight"===p.value&&(t.emit("on-weight-change", e), c.value=Number(null!=e?e:0))
            }, resetWeight:function(){
              "weight"===p.value&&(v(e.activities), v(m.value))
            }
          }
        }
      });
      const Ar=(0, m.A)(kr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-setting-activity"
        }, [
          r("ScoreCategoryWrapper", e._b({
            attrs:{
              percentage:e.totalPercentage, disabled:"percentage"===e.mode, max:e.totalPercentage+e.left
            }, on:{
              input:e.changeTotalPercentage
            }
          }, "ScoreCategoryWrapper", e.$attrs, !1), [
            r("Button", {
              attrs:{
                ghost:"", size:"small", type:100===e.totalWeight||e.expanded||"weight"!==e.mode?"default":"error"
              }, on:{
                click:function(t){
                  e.expanded=!e.expanded
                }
              }
            }, [
              e._v("\n      "+e._s(e.$t("scorePercentageSetting.assignedWeight"))+"\n      "), e.expanded?r("Icon", {
                attrs:{
                  type:"ios-arrow-up"
                }
              }):r("Icon", {
                attrs:{
                  type:"ios-arrow-down"
                }
              })
            ], 1)
          ], 1), e._v(" "), e.expanded?r("div", {
            staticClass:"score-setting-activity-detail"
          }, [
            r("div", {
              staticClass:"score-setting-activity-mode-wrapper"
            }, [
              r("RadioGroup", {
                staticClass:"score-setting-activity-mode", on:{
                  "on-change":e.modeChange
                }, model:{
                  value:e.mode, callback:function(t){
                    e.mode=t
                  }, expression:"mode"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"weight"
                  }
                }, [
                  e._v(e._s(e.$t("scorePercentageSetting.weightMode")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"percentage"
                  }
                }, [
                  e._v(e._s(e.$t("scorePercentageSetting.courseMode")))
                ])
              ], 1), e._v(" "), "weight"===e.mode?r("Button", {
                attrs:{
                  size:"small", type:"primary"
                }, on:{
                  click:e.resetWeight
                }
              }, [
                e._v("\n        "+e._s(e.$t("scorePercentageSetting.resetWeight"))+"\n      ")
              ]):e._e()
            ], 1), e._v(" "), r("div", {
              staticClass:"score-setting-activity-item-wrapper"
            }, [
              r("div", {
                staticClass:"score-setting-activity-weight-total"
              }, [
                r("span", [
                  e._v(e._s(e.$t("scorePercentageSetting.totalWeight", [
                    "weight"===e.mode?100:e.totalWeight
                  ])))
                ]), e._v(" "), "weight"===e.mode?r("span", [
                  e._v("\n          "+e._s(e.$t("scorePercentageSetting.assignedActivityWeight"))+"\n          "), r("span", {
                    staticStyle:{
                      color:"#ff9700"
                    }
                  }, [
                    e._v(e._s(e.totalWeight)+"%")
                  ])
                ]):e._e(), e._v(" "), "weight"===e.mode?r("span", [
                  e._v("\n          "+e._s(e.$t("scorePercentageSetting.leftActivityWeight"))+"\n          "), r("span", {
                    staticStyle:{
                      color:"#20bec8"
                    }
                  }, [
                    e._v(e._s(e.weightLeft)+"%")
                  ])
                ]):e._e(), e._v(" "), e.totalWeight<100&&"weight"===e.mode?r("span", {
                  staticStyle:{
                    color:"#f85353"
                  }
                }, [
                  r("i", {
                    staticClass:"font font-info"
                  }), e._v("\n          "+e._s(e.$t("scorePercentageSetting.totalWeightTip"))+"\n        ")
                ]):e._e()
              ]), e._v(" "), r("Table", {
                attrs:{
                  data:e.data, columns:e.columns
                }, scopedSlots:e._u([
                  {
                    key:"title", fn:function(e){
                      var t=e.row;
                      return[
                        r("TooltipExt", {
                          attrs:{
                            text:t.title
                          }
                        })
                      ]
                    }
                  }, {
                    key:"scorePercentage", fn:function(t){
                      var n=t.row;
                      return[
                        r("InputNumber", {
                          attrs:{
                            max:n.value+e.weightLeft, min:0, precision:0, formatter:e.formatNumber, disabled:!1===n.isScored
                          }, on:{
                            "on-change":function(t){
                              return e.percentageChange(n)
                            }
                          }, model:{
                            value:n.value, callback:function(t){
                              e.$set(n, "value", t)
                            }, expression:"row.value"
                          }
                        }), e._v("\n          %\n          "), r("ActivityPublishStatus", {
                          attrs:{
                            "is-instructor":e.isInstructor, activity:n
                          }
                        }), e._v(" "), r("UnpublishedReminder", {
                          attrs:{
                            "is-instructor":e.isInstructor, activity:n
                          }
                        })
                      ]
                    }
                  }
                ], null, !1, 3870415088)
              })
            ], 1)
          ]):e._e()
        ], 1)
      }), [
      ], !1, null, "e850f37e", null).exports;
      var Tr=r(944315), Er=r(783679), $r=r(248124), Pr=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Dr=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Nr={
        rollcall:"rollcall-score-setting", performance:"performance-score-setting-popup", onlineVideo:"online-video-completeness-setting"
      };
      const Rr=(0, s.pM)({
        components:{
          Button:lr.Button, Alert:lr.Alert, Icon:lr.Icon, ScoreItemPercentage:_r, ActivityPercentage:Ar, SvgIcon:l.A
        }, props:[
          "courseId", "usePerformance", "useVirtualExperiment", "useRollcall", "useWeblink"
        ], setup:function(e, t){
          var r=this, n=(0, Tr.w)(e), o=n.categories, i=n.currentScorePercentage, c=n.getPercentageData, l=n.rollcallSetting, d=n.onlineVideoSetting, p=n.performanceSetting, f=n.loading, m=(0, s.KR)(!1), v=(0, s.KR)([
          ]), h=(0, s.KR)(!1);
          (0, s.Gt)("hasChanged", h);
          var g, _, y, S=(0, s.EW)((function(){
            return v.value.some((function(e){
              return"weight"===e.mode&&e.weightLeft>0
            }))
          })), b=function(t){
            return Pr(r, void 0, void 0, (function(){
              var r;
              return Dr(this, (function(n){
                switch(n.label){
                  case 0:return r=!0, h.value?[
                    4, Ce.A.open({
                      title:a.default.t("tips"), content:a.default.t("scorePercentageSetting.leaveTip")
                    })
                  ]
                  :[
                    3, 2
                  ];
                  case 1:r=n.sent(), n.label=2;
                  case 2:return r&&(window.location.href=null!=t?t:"/course/".concat(e.courseId, "/score")), [
                    2
                  ]
                }
              }))
            }))
          }, w=function(t){
            t.preventDefault(), b("/course/".concat(e.courseId, "/content"))
          };
          return(0, s.sV)((function(){
            document.body.classList.add("score-setting");
            var t=(0, Vt.useAngularScope)();
            _=t.$on("onlineVideoCompletenessScoreSettingChanged", (function(e, t){
              var r;
              if(d.value){
                var n=Er.hN.createByType("online_video_completeness_score_setting");
                n.scoreItemId=t.score_item_id, n.value=Number(null!==(r=t.score_percentage)&&void 0!==r?r:0), n.scoreMethod=t.score_method, d.value=n
              }
            })), g=t.$on("rollcallScoreSettingUpdated", (function(e, t){
              var r;
              l.value&&(l.value.value=Number(null!==(r=t.score_percentage)&&void 0!==r?r:0), l.value.scoreMethod=t.score_method, l.value.punishScoreOnAbsence=t.punish_score_on_absence)
            })), e.usePerformance&&(y=t.$on("updatedPerformanceSetting", (function(e, t){
              var r;
              if(p.value){
                var n=Er.hN.createByType("performance_score_setting");
                n.scoreItemId=t.score_item_id, n.value=Number(null!==(r=t.score_percentage)&&void 0!==r?r:0), p.value=n
              }
            })));
            var r=document.querySelector(".back-to-course");
            r&&r.addEventListener("click", w)
          })), (0, s.hi)((function(){
            null==g||g(), null==_||_(), null==y||y();
            var e=document.querySelector(".back-to-course");
            e&&e.removeEventListener("click", w)
          })), {
            categories:o, currentScorePercentage:i, handleVisibleChange:function(e){
              e||t.emit("input", e)
            }, save:function(){
              return Pr(r, void 0, void 0, (function(){
                var t, r;
                return Dr(this, (function(n){
                  switch(n.label){
                    case 0:m.value=!0, t=c(), r=t.map((function(e){
                      var t;
                      return{
                        type:e.type, score_type:e.scoreType, score_item_id:e.scoreItemId, value:e.value, children:(null!==(t=e.children)&&void 0!==t?t:[
                        ]).map((function(e){
                          return{
                            score_item_id:e.scoreItemId, value:e.value
                          }
                        }))
                      }
                    })), n.label=1;
                    case 1:return n.trys.push([
                      1, 5, 6, 7
                    ]), [
                      4, Ce.A.open({
                        type:"info", title:a.default.t("tips"), content:a.default.t("scorePercentageSetting.modifiedTip")
                      })
                    ];
                    case 2:return n.sent()?[
                      4, (0, u.m$)(e.courseId, {
                        items:r
                      })
                    ]
                    :[
                      3, 4
                    ];
                    case 3:n.sent(), window.location.href="/course/".concat(e.courseId, "/score"), n.label=4;
                    case 4:return[
                      3, 7
                    ];
                    case 5:return n.sent(), lr.Message.error(a.default.t("operationFailed")), [
                      3, 7
                    ];
                    case 6:return m.value=!1, [
                      7
                    ];
                    case 7:return[
                      2
                    ]
                  }
                }))
              }))
            }, handleClick:function(e){
              var t, r, n, o=Nr[
                e
              ];
              if(o){
                $r("#".concat(o)).foundation("reveal", "open");
                var a=(0, Vt.useAngularScope)();
                switch(a.currentScorePercentageLeft=i.value.left, e){
                  case"rollcall":a.currentScorePercentage=null===(t=l.value)||void 0===t?void 0:t.value;
                  break;
                  case"onlineVideo":a.currentScorePercentage=null===(r=d.value)||void 0===r?void 0:r.value;
                  break;
                  case"performance":a.currentScorePercentage=null===(n=p.value)||void 0===n?void 0:n.value
                }
              }
            }, back:b, loading:f, saving:m, onScoreTypeChange:function(e, t){
              t.setting.scoreType=e
            }, onWeightChange:function(e, t){
              t.setting.value=e
            }, activityPercentageRefs:v, disabledSaveBtn:S
          }
        }
      });
      const Mr=(0, m.A)(Rr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return e.loading?r("div", {
          staticClass:"loading-container"
        }, [
          r("SvgIcon", {
            attrs:{
              name:"loading-spinner"
            }
          })
        ], 1):r("div", {
          ref:"eleRef", staticClass:"score-setting-container"
        }, [
          r("div", {
            staticClass:"score-setting-header"
          }, [
            r("div", {
              staticClass:"score-setting-header-left"
            }, [
              r("a", {
                on:{
                  click:function(){
                    return e.back()
                  }
                }
              }, [
                r("Icon", {
                  attrs:{
                    type:"ios-arrow-back"
                  }
                })
              ], 1), e._v(" "), r("span", {
                staticClass:"score-setting-header-title"
              }, [
                e._v(e._s(e.$t("scorePercentageSetting.percentageSetting")))
              ])
            ]), e._v(" "), r("Button", {
              attrs:{
                size:"small", type:"primary", disabled:e.currentScorePercentage.left<0||e.disabledSaveBtn, loading:e.saving
              }, on:{
                click:e.save
              }
            }, [
              e._v("\n      "+e._s(e.$t("save"))+"\n    ")
            ])
          ], 1), e._v(" "), r("div", {
            staticClass:"score-setting-content"
          }, [
            r("div", {
              staticClass:"percentage-overview"
            }, [
              r("Alert", {
                attrs:{
                  "show-icon":""
                }
              }, [
                r("span", [
                  e._v(e._s(e.$t("scorePercentageSetting.assignedPercentage")))
                ]), e._v(" "), r("span", {
                  staticClass:"percentage-assigned"
                }, [
                  e._v(e._s(e.currentScorePercentage.used)+"%")
                ]), e._v(" "), r("span", [
                  e._v(", "+e._s(e.$t("scorePercentageSetting.availablePercentage")))
                ]), e._v(" "), r("span", {
                  staticClass:"percentage-remaining"
                }, [
                  e._v(e._s(Math.max(e.currentScorePercentage.left, 0))+"%")
                ]), e._v(" "), r("span", [
                  e._v(", "+e._s(e.$t("scorePercentageSetting.unpublishedPercentage")))
                ]), e._v(" "), r("span", {
                  staticClass:"percentage-error"
                }, [
                  e._v(e._s(e.currentScorePercentage.unpublished)+"%")
                ]), e._v(" "), r("span", [
                  e._v(e._s(e.$t("scorePercentageSetting.unpublishedReminder")))
                ]), e._v(" "), e.currentScorePercentage.left<0?r("span", [
                  e._v(", "+e._s(e.$t("scorePercentageSetting.excessPercentage")))
                ]):e._e(), e._v(" "), e.currentScorePercentage.left<0?r("span", {
                  staticClass:"percentage-error"
                }, [
                  e._v("\n          "+e._s(e.currentScorePercentage.left)+"%\n        ")
                ]):e._e()
              ])
            ], 1), e._v(" "), r("div", {
              staticClass:"score-setting-category-container"
            }, [
              e._l(e.categories, (function(t, n){
                return[
                  "activity"===t.type?r("ActivityPercentage", {
                    key:n, ref:"activityPercentageRefs", refInFor:!0, attrs:{
                      name:t.name, icon:t.icon, desc:t.desc, "score-type":t.setting.scoreType, weight:t.setting.value, left:e.currentScorePercentage.left, activities:t.setting.children
                    }, on:{
                      "on-score-type-change":function(r){
                        return e.onScoreTypeChange(r, t)
                      }, "on-weight-change":function(r){
                        return e.onWeightChange(r, t)
                      }
                    }
                  }):r("ScoreItemPercentage", {
                    key:n, attrs:{
                      name:t.name, icon:t.icon, desc:t.desc, "btn-text":t.btnText, type:t.type, "score-mode":t.setting.scoreMethod, left:e.currentScorePercentage.left
                    }, on:{
                      "on-click":e.handleClick
                    }, model:{
                      value:t.setting.value, callback:function(r){
                        e.$set(t.setting, "value", r)
                      }, expression:"item.setting.value"
                    }
                  })
                ]
              }))
            ], 2)
          ])
        ])
      }), [
      ], !1, null, "73866983", null).exports;
      n.default.use(o.A), n.default.use(a.default), n.default.customElement("score-setting", Mr), n.default.customElement("score-item-setting", ae), n.default.customElement("student-score-index", pe), n.default.customElement("score-page", or), n.default.customElement("score-item-form", cr)
    }, 255634:(e, t, r)=>{
      r.d(t, {
        A:()=>c
      });
      var n, o=r(118657), a=(n=function(e, t){
        return(n=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var r in t)Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function r(){
          this.constructor=e
        }
        n(e, t), e.prototype=null===t?Object.create(t):(r.prototype=t.prototype, new r)
      }), s=function(e, t, r, n){
        var o, a=arguments.length, s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t, r):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, n);
        else for(var i=e.length-1;
        i>=0;
        i--)(o=e[
          i
        ])&&(s=(a<3?o(s):a>3?o(t, r, s):o(t, r))||s);
        return a>3&&s&&Object.defineProperty(t, r, s), s
      };
      const i=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return a(t, e), t.prototype.onlyShowOverflowed=function(){
          var e=this.$refs.span, t=this.$refs.tooltip.$refs.popper;
          e.offsetWidth<e.scrollWidth||e.offsetHeight<e.scrollHeight?t.style.visibility="visiable":t.style.visibility="hidden"
        }, t.prototype.onHide=function(){
          var e=this.$refs.tooltip.$refs.popper;
          e.style.visibility=null, e.style.display="none"
        }, s([
          (0, o.kv)({
            required:!0
          })
        ], t.prototype, "text", void 0), s([
          (0, o.kv)({
            default:"top"
          })
        ], t.prototype, "placement", void 0), s([
          (0, o.kv)({
            default:!0
          })
        ], t.prototype, "transfer", void 0), s([
          (0, o.kv)({
            default:""
          })
        ], t.prototype, "transferClassName", void 0), s([
          (0, o.kv)({
            default:!1
          })
        ], t.prototype, "customContent", void 0), s([
          (0, o.kv)({
            default:!1
          })
        ], t.prototype, "htmlTips", void 0), t=s([
          (0, o.uA)({
            name:"tooltip-advanced"
          })
        ], t)
      }
      (o.lD);
      const c=(0, r(514486).A)(i, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Tooltip", {
          ref:"tooltip", attrs:{
            content:e.text, placement:e.placement, transfer:e.transfer, "transfer-class-name":e.transferClassName
          }, on:{
            "on-popper-show":e.onlyShowOverflowed, "on-popper-hide":e.onHide
          }, scopedSlots:e._u([
            e.customContent||e.htmlTips?{
              key:"content", fn:function(){
                return[
                  r("div", {
                    domProps:{
                      innerHTML:e._s(e.text)
                    }
                  })
                ]
              }, proxy:!0
            }
            :null
          ], null, !0)
        }, [
          e._v(" "), e.customContent?r("div", {
            ref:"span", staticClass:"text-too-long", domProps:{
              innerHTML:e._s(e.text)
            }
          }):r("span", {
            ref:"span", staticClass:"text-too-long"
          }, [
            e._v(e._s(e.text))
          ])
        ])
      }), [
      ], !1, null, "6394a288", null).exports
    }, 259834:(e, t, r)=>{
      r.r(t), r.d(t, {
        default:()=>c
      });
      var n=r(512897), o=r.n(n), a=r(55042), s=r.n(a), i=new(o())({
        id:"clear", use:"clear-usage", viewBox:"0 0 16 16", content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear">\n    <g fill="none" fill-rule="evenodd">\n        <g fill-rule="nonzero">\n            <g>\n                <g transform="translate(-612 -1855) translate(612 1855)">\n                    <circle cx="8" cy="8" r="8" fill="#E8E8E8" />\n                    <g fill="#808695">\n                        <path d="M1.354.646L4 3.293 6.646.646C6.82.473 7.09.454 7.284.59l.07.057c.195.196.195.512 0 .708L4.707 4l2.647 2.646c.195.196.195.512 0 .708-.196.195-.512.195-.708 0L4 4.707 1.354 7.354c-.174.173-.443.192-.638.057l-.07-.057c-.195-.196-.195-.512 0-.708L3.293 4 .646 1.354C.451 1.158.451.842.646.646c.196-.195.512-.195.708 0z" transform="translate(4 4)" />\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</symbol>'
      });
      s().add(i);
      const c=i
    }, 273227:(e, t, r)=>{
      r.r(t), r.d(t, {
        default:()=>c
      });
      var n=r(512897), o=r.n(n), a=r(55042), s=r.n(a), i=new(o())({
        id:"info", use:"info-usage", viewBox:"0 0 14 14", content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" id="info">\n<style type="text/css">\n\t#info .st0{fill-rule:evenodd;clip-rule:evenodd;fill:currentColor;}\n</style>\n<title>icon/alert/常规</title>\n<desc>Created with Sketch.</desc>\n<g>\n\t<path id="info_Combined-Shape" class="st0" d="M7,1c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S3.7,1,7,1z M7.6,5.8H6.4v3.6l-0.6,0v0.9h2.4\n\t\tV9.4l-0.6,0V5.8z M6.4,5.8H5.8v0.9h0.6V5.8z M7,3.4c-0.5,0-0.9,0.4-0.9,0.9S6.5,5.2,7,5.2s0.9-0.4,0.9-0.9S7.5,3.4,7,3.4z" />\n</g>\n</symbol>'
      });
      s().add(i);
      const c=i
    }, 311629:(e, t, r)=>{
      r.d(t, {
        A:()=>n
      });
      const n=new(r(962893).default)
    }, 339835:(e, t, r)=>{
      var n=r(248124), o=r(756029);
      r(624665).Angular;
      e.exports=[
        "$scope", "api", "$http", "$window", "toastr", function(e, t, r, a, s){
          var i=n("#courseId").val();
          e.totalScoreType={
            normalRule:"normal_rule", scorePassRule:"score_pass_rule", finishDissertationRule:"finish_dissertation_rule"
          }, e.save=function(){
            return e.scoreTypeSettings=e.scoreTypePopupSettings, r.put("/api/courses/".concat(i, "/score-type-settings"), e.scoreTypePopupSettings).success((t=>{
              e.scoreTypeSettings.passing_score=e.scoreTypePopupSettings.passing_score, n("#course-score-type-settings").foundation("reveal", "close"), s.success(t.message), a.location.reload()
            }))
          }, e.$watch("scoreTypePopupSettings.score_type", (function(t, r){
            "score_pass_rule"===t&&null===e.scoreTypeSettings.passing_score?e.scoreTypePopupSettings.passing_score=60:e.scoreTypePopupSettings.passing_score="score_pass_rule"!==t?null:e.scoreTypeSettings.passing_score
          }));
          e.scoreTypePopupSettings=o.copy(e.scoreTypeSettings)
        }
      ]
    }, 344512:(e, t, r)=>{
      var n=r(302543), o=r(248124);
      e.exports=[
        "$scope", "$http", "toastr", "$q", "$rootScope", "fileSelectModel", function(e, t, r, a, s, i){
          e.errors=[
          ], e.$on("fileSelectOpen", (()=>i.limitTypes=[
            "file", "document", "image"
          ])), s.$on("initSubmitScoreUploads", (()=>c()));
          var c=function(){
            var r;
            return(r=a.defer(), t.get("/api/courses/".concat(e.courseId, "/submit-info")).success((e=>r.resolve(e.records))), r.promise).then((function(t){
              return e.uploads=(null!=t?t.uploads:void 0)||[
              ], e.comment=(null!=t?t.comment:void 0)||""
            }))
          };
          return e.addFiles=t=>e.uploads=t.concat(e.uploads), e.deleteFile=t=>n.remove(e.uploads, t), e.saveEditedUploads=function(){
            var n={
              comment:e.comment, uploads:e.uploads?e.uploads.map((e=>e.id)):[
              ]
            };
            return t.post("/api/courses/".concat(e.courseId, "/submit-score-uploads"), n).success((function(){
              return r.success(), o("#submit-final-score-info-popup").foundation("reveal", "close")
            })).error(r.decorateError((t=>e.errors=t.errors)))
          }
        }
      ]
    }, 378238:(e, t, r)=>{
      var n=r(248124);
      e.exports=[
        "$scope", "api", function(e, t){
          var r=n("#courseId").val();
          e.errors={
          }, e.announceScoreSettings={
            announce_score_type:1, announce_score_time:null, announce_raw_score_type:1, announce_raw_score_time:null
          }, e.announceScoreType={
            NO_ANNOUNCE:"no_announce", IMMEDIATE_ANNOUNCE:"immediate_announce", TIMED_ANNOUNCE:"timed_announce"
          }, e.ui={
            contentLoadingComplete:!1
          }, e.saveAnnounceScoreSettings=function(){
            var o={
              announce_score_type:e.announceScoreSettings.announce_score_type, announce_raw_score_type:e.announceScoreSettings.announce_raw_score_type
            };
            return e.announceScoreSettings.announce_score_type===e.announceScoreType.TIMED_ANNOUNCE&&(o.announce_score_time=e.announceScoreSettings.announce_score_time), e.announceScoreSettings.announce_raw_score_type===e.announceScoreType.TIMED_ANNOUNCE&&(o.announce_raw_score_time=e.announceScoreSettings.announce_raw_score_time), t.updateAnnounceScoreSettings(r, o, (e=>n("#course-announce-score-settings").foundation("reveal", "close")), (function(t){
              (null!=t?t.errors:void 0)&&(e.errors=t.errors)
            }))
          };
          return t.getAnnounceScoreSettings(r, (function(t){
            e.announceScoreSettings=t.announce_score_settings||{
            }, e.ui.contentLoadingComplete=!0
          }), (function(){
          }))
        }
      ]
    }, 408576:(e, t, r)=>{
      r.d(t, {
        A:()=>a
      });
      var n=r(595738);
      const o=(0, n.pM)({
        name:"activity-publish-status", props:{
          isInstructor:{
            type:Boolean, required:!0
          }, activity:{
            type:Object, required:!0
          }
        }, setup:e=>({
          unPublished:(0, n.EW)((()=>!e.activity.published))
        })
      });
      const a=(0, r(514486).A)(o, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("span", {
          staticClass:"publish-status-container", attrs:{
            "ng-if":"isInstructor"
          }
        }, [
          e.unPublished?r("span", {
            staticClass:"unpublish item-status"
          }, [
            e._v(e._s(e.$t("activityPublish.unpublished")))
          ]):e._e()
        ])
      }), [
      ], !1, null, "a5f4cba4", null).exports
    }, 426404:(e, t, r)=>{
      var n=r(248124), o=r(592207);
      function a(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var n=Object.getOwnPropertySymbols(e);
          t&&(n=n.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }
      function s(e){
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
            i(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function i(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      function c(e, t, r, n, o, a, s){
        try{
          var i=e[
            a
          ]
          (s), c=i.value
        }
        catch(e){
          return void r(e)
        }
        i.done?t(c):Promise.resolve(c).then(n, o)
      }
      r(207452);
      var l=r(793110).Decimal;
      e.exports=[
        "$rootScope", "$scope", "performanceRepository", "activityRepository", "performanceApi", "toastr", (e, t, r, a, i, u)=>{
          var d=n("#courseId").val();
          t.setting={
          };
          var p=function(){
            var e, n=(e=o.mark((function e(){
              var n, s;
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, r.initCoursePerformanceScoreSetting();
                  case 2:n=e.sent, s=n.setting, t.setting=s, a.getLeftScorePercentage(d).then((e=>{
                    t.leftScorePercentage=e, t.leftScorePercentage=t.leftScorePercentage.plus(new l(t.setting.score_percentage)), t.currentScorePercentage&&(t.setting.score_percentage=t.currentScorePercentage, t.leftScorePercentage=new l(t.currentScorePercentageLeft||0).plus(new l(t.currentScorePercentage)))
                  }));
                  case 6:case"end":return e.stop()
                }
              }), e)
            })), function(){
              var t=this, r=arguments;
              return new Promise((function(n, o){
                var a=e.apply(t, r);
                function s(e){
                  c(a, n, o, s, i, "next", e)
                }
                function i(e){
                  c(a, n, o, s, i, "throw", e)
                }
                s(void 0)
              }))
            });
            return function(){
              return n.apply(this, arguments)
            }
          }
          ();
          t.save=()=>i.updatePerformanceScoreSetting(d, {
            name:"performance", percentage:t.setting.score_percentage, score_unit:t.setting.score_unit, standard_score:t.setting.standard_score, announce_score_time:"timed_announce"===t.setting.announce_score_setting?t.setting.announce_score_time:null, announce_score_setting:t.setting.announce_score_setting
          }, (r=>{
            e.$broadcast("updatedPerformanceSetting", s(s({
            }, t.setting), r)), u.success(r.message), n("#performance-score-setting-popup").foundation("reveal", "close")
          }), (e=>{
            e.message&&u.error(e.message), t.errors=e.errors
          })), p()
        }
      ]
    }, 445949:(e, t, r)=>{
      var n=r(302543), o=r(793110), a=r(287092);
      function s(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return i(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s=!0, c=!1;
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
            c=!0, a=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(c)throw a
            }
          }
        }
      }
      function i(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(334867), r(43148);
      var c=r(825315);
      e.exports=[
        "$scope", "$timeout", "$window", function(e, t, r){
          e.ui={
            showChart:!1, editingCount:0
          }, e.$on("drawChart", (function(){
            if(e.ui.showChart)return t((()=>u()))
          })), e.hasData=()=>n.some(e.students, (e=>i(e))), e.toggleShowChart=function(){
            if(e.ui.showChart=!e.ui.showChart, e.ui.showChart)return t((()=>u()))
          }, e.countStudents=function(){
            if(e.students)return e.students.length
          }, e.countStudentsByScore=function(){
            var t=arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :60;
            return n.filter(e.students, (e=>i(e)&&e.total_score>=t)).length
          }, e.calcAverageScore=function(){
            var t=new o(0);
            n.each(e.students, (function(e){
              if(i(e))return t=t.plus(new o(e.total_score||0))
            }));
            var r=t.dividedBy(l());
            return r>0?parseFloat(r.toFixed(1)):0
          }, e.calcHighestScore=function(){
            if(e.hasData()){
              var t=n.maxBy(n.filter(e.students, (e=>i(e))), (e=>parseFloat(e.total_score)));
              return isNaN(t.total_score)?0:parseFloat(t.total_score)
            }
            return 0
          }, e.canShowScoreEditBtn=()=>{
            var e, t;
            return null===(e=window.featureToggles)||void 0===e||!e.enableIndependentCoTeachingPermission||(null===(t=window.globalData)||void 0===t||!t.courseRoles.includes("lecturer"))
          }, e.calcLowestScore=function(){
            if(e.hasData()){
              var t=n.minBy(n.filter(e.students, (e=>i(e))), (e=>parseFloat(e.total_score)));
              return isNaN(t.total_score)?0:parseFloat(t.total_score)
            }
            return 0
          };
          var i=e=>null!=e.total_score&&!isNaN(e.total_score), l=function(){
            var t=0;
            return n.each(e.students, (function(e){
              if(i(e))return t+=1
            })), t
          }, u=function(){
            return e.allowDisplayScoreRanks&&e.scoreRanks?(e.passScoreValue>=0&&(e.passNumber=0, e.failNumber=0, n.each(e.students, (function(t){
              t.total_score>=e.passScoreValue?e.passNumber+=1:e.failNumber+=1
            }))), c.drawBarChart(function(){
              var t, r=[
              ], n=s(e.scoreRanks);
              try{
                for(n.s();
                !(t=n.n()).done;
                ){
                  var o=t.value;
                  o.rank?r.push("(".concat(o.rank, ")\n").concat(o.min, "-").concat(Math.floor(o.max)).concat(e.i18nMessages.score)):r.push("\n".concat(o.min, "-").concat(Math.floor(o.max)).concat(e.i18nMessages.score))
                }
              }
              catch(e){
                n.e(e)
              }
              finally{
                n.f()
              }
              return r
            }
            (), e.seriesName, (t=a.range(1, e.scoreRanks.length, !0).map((e=>0)), n.each(e.students, (function(r){
              if(i(r))return(()=>{
                for(var n=[
                ], o=0;
                o<e.scoreRanks.length;
                o++){
                  var a=e.scoreRanks[
                    o
                  ];
                  r.total_score<=a.max&&r.total_score>=a.min?n.push(t[
                    o
                  ]
                  ++):n.push(void 0)
                }
                return n
              })()
            })), t))):c.drawBarChart(e.xAxis, e.seriesName, function(){
              var t=[
                1, 2, 3, 4, 5
              ].map((e=>0));
              return n.each(e.students, (function(e){
                if(i(e)&&(e.total_score<60&&t[
                  0
                ]
                ++, e.total_score>=60&&e.total_score<70&&t[
                  1
                ]
                ++, e.total_score>=70&&e.total_score<80&&t[
                  2
                ]
                ++, e.total_score>=80&&e.total_score<90&&t[
                  3
                ]
                ++, e.total_score>=90))return t[
                  4
                ]
                ++
              })), t
            }
            ());
            var t
          }, d=function(t){
            if(e.isEditing())return(t||r.event).returnValue="You have unsaved changes!"
          };
          return e.$watch("students", (function(){
            e.ui.showChart&&t((()=>u()))
          }), !0), e.ui.showChart&&t((()=>u())), r.addEventListener?r.addEventListener("beforeunload", d):r.onbeforeunload=d
        }
      ]
    }, 446264:(e, t, r)=>{
      var n=r(248124), o=r(302543);
      r(658379), e.exports=[
        "$scope", "$location", "$http", "toastr", "api", function(e, t, r, a, s){
          e.backUrlList=[
          ];
          var i=n("#courseId").val();
          e.setWarningThreshold=function(t){
            e.warning=o.find(e.warnings, {
              id:t
            });
            return s.getWarningThreshold(i, t, (function(t){
              return e.warningThreshold=t.data||{
              }, o.forEach(e.warningStatus, (t=>e.warningThreshold[
                t
              ]
              =e.warningThreshold[
                t
              ]
              ||{
              })), n("#warning-rules-popup").foundation("reveal", "open")
            }), (function(){
            }))
          }, e.HasWarningThreshold=()=>o.some(e.warningThreshold, (e=>e&&e.value)), e.genWainingStudentList=function(){
            var r=e.warning.id;
            return s.saveWarningThreshold(i, r, e.warningThreshold, (function(){
              return n("#warning-rules-popup").foundation("reveal", "close"), t.path("/score/"+r+"/info")
            }), (function(){
            }))
          };
          var c=function(){
            return s.warnings(i, "id,name,data,start_date,end_date,ready,submitted,is_started,is_closed", (function(t){
              return e.warnings=t.warnings, o.forEach(e.warnings, (function(e){
                return e.starting=e.is_started&&!e.is_closed, !0
              }))
            }), (function(){
            }))
          };
          return e.courseId=i, c(), function(){
            e.backUrlList=[
            ];
            var t={
              url:"/course/".concat(i, "/score#/"), name:"score"
            };
            return e.backUrlList.push(t), e.backUrlList.push({
              url:"/", name:"warnings"
            })
          }
          ()
        }
      ]
    }, 454985:(e, t, r)=>{
      r.r(t), r.d(t, {
        default:()=>a
      });
      var n=r(611854), o=r(150655);
      const a=(0, r(514486).A)(o.A, n.X, n.Y, !1, null, "183bd19f", null).exports
    }, 516844:(e, t, r)=>{
      r.r(t), r.d(t, {
        useAngularScope:()=>a, useAngularService:()=>o
      });
      var n=r(756029), o=function(e){
        return n.element(document.body).injector().get(e)
      }, a=function(e){
        return n.element(e||document.body).scope()
      }
    }, 525006:(e, t, r)=>{
      var n=r(248124), o=r(756029), a=r(793110);
      r(241128), r(215195), r(219693), r(700533), r(168763), r(995843), r(169218), r(269193), r(906048), r(43148), r(640173), r(850785), r(658379);
      var s=r(592207);
      function i(e, t, r, n, o, a, s){
        try{
          var i=e[
            a
          ]
          (s), c=i.value
        }
        catch(e){
          return void r(e)
        }
        i.done?t(c):Promise.resolve(c).then(n, o)
      }
      function c(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], n=!0, o=!1, a=void 0;
          try{
            for(var s, i=e[
              Symbol.iterator
            ]
            ();
            !(n=(s=i.next()).done)&&(r.push(s.value), !t||r.length!==t);
            n=!0);
          }
          catch(e){
            o=!0, a=e
          }
          finally{
            try{
              n||null==i.return||i.return()
            }
            finally{
              if(o)throw a
            }
          }
          return r
        }
        (e, t)||u(e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function l(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=u(e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s=!0, i=!1;
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
            i=!0, a=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(i)throw a
            }
          }
        }
      }
      function u(e, t){
        if(e){
          if("string"==typeof e)return d(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          return"Object"===r&&e.constructor&&(r=e.constructor.name), "Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e, t):void 0
        }
      }
      function d(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(207452);
      var p=r(302543), f=r(571478), m=r(795093);
      e.exports=[
        "$scope", "$http", "toastr", "$q", "activityRepository", "$timeout", "$rootScope", "rollcallRepository", "userFilter", "scoreItemFilter", "onlineVideoCompletenessRepository", "eduScoresRepository", "$document", "performanceRepository", "$window", "commonApi", "momentService", "scoreHelper", "$routeParams", (e, t, r, u, d, v, h, g, _, y, S, b, w, C, I, x, k, A, T)=>{
          var E, $=n("html").attr("lang");
          e.programEnabled=null===(E=window.featureToggles)||void 0===E?void 0:E.enableProgram, e.submiting=!1, e.allowFilterByShareOrg=!0, e.condition={
            org_ids:[
            ], department_ids:[
            ], grade_ids:[
            ], class_ids:[
            ], keyword:"", score_item:"0", score_state:"0"
          }, e.selectedStudent={
            ids:[
            ]
          }, e.ui.allSelected=!1, e.programEnabled&&(e.condition.program_ids=[
          ]), e.isToggleWeblinkScoreSettingOpened="True"===n("#is-toggle-web-link-score-setting-opened").val(), e.ui.scoreFilterSelected=!1;
          var P=n("#courseId").val()||T.courseId;
          e.openSubmitFinalScoreInfoPopup=e=>{
            h.$broadcast("initSubmitFinalScoreInfo"), n("#".concat(e)).foundation("reveal", "open")
          }, e.openSubmitUploadPopup=e=>{
            h.$broadcast("initSubmitScoreUploads"), n("#".concat(e)).foundation("reveal", "open")
          }, e.openChaoxingImportModal=()=>{
            var e=new CustomEvent("chaoxing-score-import:open");
            window.dispatchEvent(e)
          }, e.getSelectedClassNames=()=>{
            var t=[
            ];
            return p.includes(e.condition.class_ids, "0")&&t.push(e.noSpecifiedClass), p.forEach(e.classes, (r=>{
              e.condition.class_ids.includes("".concat(r.id))&&t.push(r.name)
            })), t.join()
          }, e.showScoreReport=t=>{
            var r="score/".concat(t, "?class_names=").concat(e.getSelectedClassNames());
            return I.open(r, "_blank"), null
          }, e.percentageData={
          }, e.allScoresItem=[
          ], e.scoreColumnSetting={
            showRollCallScore:!0, showPerformanceScore:!0, showOnlineVideoCompletenessScore:!0, showRawScore:!0, showExceptionalCase:!0, showScoreComment:!0, hiddenCustomScoreItemKeys:{
            }, hiddenActivityKeys:{
            }
          }, e.openChaoxingImportModal=()=>{
            var e=new CustomEvent("chaoxing-score-import:open");
            window.dispatchEvent(e)
          };
          var D=()=>(n(".activity-body ul").width("auto"), v((()=>(n(".activity-body ul").width()<n(".activity-body").width()?n(".activity-body ul").width("100%"):n(".activity-body ul").width("auto"), n(".sync-scroll").scroll((e=>n(".sync-scroll").scrollLeft(n(e.target).scrollLeft()))), n(".sync-scroll-score").scroll((e=>n(".sync-scroll-score").scrollLeft(n(e.target).scrollLeft()))), n(window).bind("scroll", (()=>{
            n(".student-info").length>0&&(e.ui.tableHeadAtTop=n(".student-info")[
              0
            ].getBoundingClientRect().top<=0, e.$apply())
          })), n(".scrollbar-content").width(n(".activity-header-list").width()), void n(".scrollbar-content-score").width(n(".score-list").width())))));
          e.updateScoreColumnSetting=t=>{
            var r;
            return e.scoreColumnSetting.showRollCallScore=t.showRollCallScore, e.scoreColumnSetting.showPerformanceScore=t.showPerformanceScore, e.scoreColumnSetting.showOnlineVideoCompletenessScore=t.showOnlineVideoCompletenessScore, e.scoreColumnSetting.showRawScore=t.showRawScore, e.scoreColumnSetting.showExceptionalCase=t.showExceptionalCase, e.scoreColumnSetting.showScoreComment=t.showScoreComment, e.scoreColumnSetting.hiddenCustomScoreItemKeys=t.hiddenCustomScoreItemKeys, e.scoreColumnSetting.hiddenActivityKeys=t.hiddenActivityKeys, r=JSON.stringify(e.scoreColumnSetting), n.cookie("scoreColumnSetting", r, {
              expires:365
            }), D()
          }, e.editingStatus={
          }, e.isEditing=()=>!p.isEmpty(e.editingStatus), e.updateEditingStatus=(t, r, n)=>v((()=>{
            var o="".concat(t, "-").concat(r);
            if(!n)return delete e.editingStatus[
              o
            ];
            e.editingStatus[
              o
            ]
            =n
          })), e.getEditingClass=(t, r)=>{
            var n="".concat(t, "-").concat(r), o=e.editingStatus[
              n
            ];
            return{
              processing:"processing"===o, "process-error":"process-error"===o
            }
          }, e.getStudentRank=t=>{
            if(e.scoreRanks){
              var r, n=l(e.scoreRanks);
              try{
                for(n.s();
                !(r=n.n()).done;
                ){
                  var o=r.value;
                  if(t.total_score>=o.min&&t.total_score<=o.max)return o.rank
                }
              }
              catch(e){
                n.e(e)
              }
              finally{
                n.f()
              }
            }
          }, e.getStudentRankForKWNC=(t, r, n)=>{
            if(e.scoreRanks){
              var o, a=e.scoreBookService.getStudentResultScore(t, r, n), s=l(e.scoreRanks);
              try{
                for(s.s();
                !(o=s.n()).done;
                ){
                  var i=o.value;
                  if(a>=i.min&&a<=i.max)return i.rank
                }
              }
              catch(e){
                s.e(e)
              }
              finally{
                s.f()
              }
            }
          }, e.getDissertationStyle=()=>({
            "with-dissertation":"finish_dissertation_rule"===e.scoreTypeSettings.score_type, "dissertation-in-en-US":"finish_dissertation_rule"===e.scoreTypeSettings.score_type&&("en-US"===$||"en-GB"===$||"th-TH"===$)
          });
          e.getTotalScoreStyle=t=>{
            var r={
              "with-score-pass":"score_pass_rule"===e.scoreTypeSettings.score_type
            }, n=(t=>{
              var r={
                "with-rank":null!=e.getStudentRank(t)
              };
              return"KWNC"===e.deliveryOrg&&Object.assign(r, {
                "with-rank":e.getStudentRankForKWNC(t.total_score, t.course_total_score, t.after_make_up_score)
              }), r
            })(t), o=e.getDissertationStyle();
            return Object.assign(r, n), Object.assign(r, o), r
          }, e.isFullItems=t=>"score_pass_rule"===e.scoreTypeSettings.score_type&&!e.checkScoreIsNaN(t.total_score)&&null!=e.getStudentRank(t), e.isDissertationWithRank=t=>"finish_dissertation_rule"===e.scoreTypeSettings.score_type&&null!=e.getStudentRank(t), e.isScoreStatus=t=>"score_pass_rule"===e.scoreTypeSettings.score_type&&!e.checkScoreIsNaN(t.total_score), e.getStudentScorePassedStatus=t=>A.isScorePassed(t.total_score, e.scoreTypeSettings.passing_score)?e.scorePassedMessage.passed:e.scorePassedMessage.notPassed, e.isKwncCustomScoreItem=t=>e.scoreBookService.isKwncCustomScoreItem(t);
          var N=u.defer(), R=u.defer(), M=u.defer(), O=u.defer(), G=u.defer(), F=u.defer(), L=u.defer(), B=u.defer(), j=u.defer(), U=u.defer(), V=u.defer(), K=u.defer(), W=u.defer(), H=u.defer(), q=u.defer(), z=u.defer(), Y=u.defer(), J=u.defer(), Z=u.defer(), X=u.defer(), Q=u.defer(), ee=u.defer(), te=[
            N.promise, R.promise, M.promise, O.promise, G.promise, F.promise, B.promise, j.promise, U.promise, V.promise, Z.promise, K.promise, W.promise, q.promise, z.promise, J.promise, X.promise, Q.promise, ee.promise
          ];
          e.isAllowPerformanceView&&te.push(H.promise), e.allowDisplayScoreRanks&&te.push(Y.promise), e.sharedBetweenScopes={
            students:[
            ], filteredStudents:[
            ]
          }, e.studentsReadyPromise=F.promise, e.hasNaNTotalScore=()=>{
            var t, r=e.students;
            return null!==(t=window.featureToggles)&&void 0!==t&&t.publishScoreOfPartialStudents&&(r=p.filter(r, {
              selected:!0
            })), p.filter(r, {
              total_score:NaN
            }).length>0
          };
          e.allowToPublishScore=()=>{
            var t, r=!e.hasNaNTotalScore();
            return[
              "TKU", "STAGING-TKU"
            ].includes(e.deliveryOrg)&&(r="finish_dissertation_rule"===e.scoreTypeSettings.score_type||(t=p.filter(e.students, (e=>[
              0, "0"
            ].includes(e.total_score))), !(e.students.length===t.length||e.hasNaNTotalScore()))), r
          }, e.publishScoreConfirmPopup=()=>{
            var t;
            e.limitScorePublishByPercentage&&e.$broadcast("calculatePercentage"), null!==(t=window.featureToggles)&&void 0!==t&&t.publishScoreOfPartialStudents&&!e.selectedStudent.ids.length?(e.hideCancel=!0, n("#confirmation-popup").foundation("reveal", "open")):n("#score-confirmation-popup").foundation("reveal", "open")
          }, e.confirm=()=>{
            n("#confirmation-popup").foundation("reveal", "close")
          };
          e.isSelectedStudentsPercentage100=()=>{
            var t, r, n=e.students;
            return"finish_dissertation_rule"===e.scoreTypeSettings.score_type&&p.forEach(n, (t=>{
              t.total_score=e.checkScoreIsNaN(t.total_score)?0:t.total_score
            })), null!==(t=window.featureToggles)&&void 0!==t&&t.publishScoreOfPartialStudents&&(n=p.filter(n, {
              selected:!0
            })), null!==(r=window.featureToggles)&&void 0!==r&&r.enableAuditorCourseRole&&(n=p.filter(n, {
              is_auditor:!1
            })), window.orgSettings.enableOffCampusUserFlag&&(n=p.reject(n, {
              imported_from:"identity_registered"
            })), n.every((e=>100===function(e){
              var t=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :5, r=Math.pow(10, t);
              return Math.round(e*r)/r
            }
            (e.score_total_percentage)))
          };
          var re=t=>{
            x.scoreStatus(t, (t=>(e.scoreSettings={
              autoPublish:t.auto_publish, canPublishScore:t.can_publish_score
            }, e.scoreSettings.isScorePublishStarted=m().diff(m(t.score_publish_start), "seconds")>0, e.scorePublishDeadline=t.score_publish_deadline, e.scoreStatus=t.score_status, e.published_name=t.published_name, e.courseScoresPublished="submitted"===e.scoreStatus, "string"==typeof t.published_at&&(e.published_at=m(t.published_at).format(k.DATE_TIME_FORMAT)), R.resolve())), (e=>R.reject(e)))
          };
          e.publishScore=()=>{
            var n, o, a=e.students, s=e.scoreStatus;
            "finish_dissertation_rule"===e.scoreTypeSettings.score_type&&p.forEach(a, (t=>{
              t.total_score=e.checkScoreIsNaN(t.total_score)?0:t.total_score
            })), null!==(n=window.featureToggles)&&void 0!==n&&n.publishScoreOfPartialStudents&&(a=p.filter(a, {
              selected:!0
            })), null!==(o=window.featureToggles)&&void 0!==o&&o.enableAuditorCourseRole&&(a=p.filter(a, {
              is_auditor:!1
            })), window.orgSettings.enableOffCampusUserFlag&&(a=p.reject(a, {
              imported_from:"identity_registered"
            }));
            var i;
            return i=p.map(a, (e=>{
              var t={
              };
              return t.enrollment_id=e.enrollment_id, t.total_score=parseFloat(e.total_score), t
            })), e.scoreStatus="submitting", e.ui.contentLoadingComplete=!1, t.put("/api/enrollments/score", {
              course_id:P, enrollments:i
            }).success((t=>{
              e.ui.contentLoadingComplete=!0, r.success(t.message), p.forEach(e.members, (e=>(e.published=!0, e.original_total_score=e.total_score, e.original_exceptional_case=e.exceptional_case))), re(P), e.track(statistics.enums.ScoreAction.publish_score), [
                "FJU", "STAGING-FJU"
              ].includes(e.deliveryOrg)?v((()=>{
                window.open(e.scoreBookFJU), window.location.reload()
              }), 600):window.location.reload()
            })).error((t=>(e.ui.contentLoadingComplete=!0, e.scoreStatus=s, r.error(t.message))))
          };
          var ne=e=>{
            isNaN(e.final_score)||null===e.final_score||(e.score=e.final_score)
          };
          e.activityStudentStatus={
          };
          e.getStudentStatus=(t, r)=>((e.activityStudentStatus[
            t.type
          ]
          ||{
          })[
            t.id
          ]
          ||{
          })[
            r.id
          ]
          ||"";
          var oe=()=>t.get("/api/course/".concat(P, "/scores?fields=").concat("enrollment_id,total_score,original_total_score,admin_comment")).success((t=>{
            var r=t.courseScores;
            return p.each(e.students, (e=>{
              var t=p.find(r, {
                enrollment_id:e.enrollment_id
              });
              return t&&(e.total_score=t.total_score, e.original_total_score=t.original_total_score, e.admin_comment=t.admin_comment), !0
            })), F.resolve()
          })).error((e=>F.reject(e))), ae=()=>{
            e.rollcallScore=[
            ];
            return t.get("/api/course/".concat(P, "/rollcall/scores")).success((t=>(e.rollcallScore=t.scores||[
            ], W.resolve()))).error(r.decorateError((e=>W.reject(e))))
          };
          e.performanceScore=[
          ];
          var se=()=>(e.performanceSetting={
            score_percentage:0
          }, e.performanceScore=[
          ], C.initScorePercentage().then((n=>{
            e.performanceSetting=n;
            return t.get("/api/course/".concat(P, "/performance/scores?isOriginalScore=true")).success((t=>(e.performanceScore=t.scores||[
            ], H.resolve()))).error(r.decorateError((e=>H.reject(e))))
          }), (e=>H.reject(e)))), ie=I.orgSettings.enableShowRetakeTag, ce=t=>x.enrollmentsSmallAvatars(t, (t=>{
            var r=t.avatars;
            return((e, t)=>{
              p.forEach(e, (e=>e.avatar_small_url=t[
                e.id
              ]))
            })(e.students, r), L.resolve()
          }), (()=>L.resolve({
          })), !0);
          e.getScore=(e, t)=>{
            var r=p.find(e.scores, {
              activity_id:e.id, student_id:t.id
            });
            return r&&(r.score||0===r.score)?parseFloat(r.score):""
          };
          var le=()=>x.courseEnrollmentsRawScore(P, (t=>{
            var r=p.keyBy(t.data, "enrollment_id");
            return F.promise.then((()=>(p.forEach(e.students, (t=>{
              if(t.rawScoreNotFixed=parseFloat(r[
                t.enrollment_id
              ].raw_score_not_fixed), t.raw_score=parseFloat(r[
                t.enrollment_id
              ].raw_score), t.instructor_score_time||e.courseScoresPublished||(t=>{
                e.enableUpdateAllStudentsFinalScore?t.total_score=t.instructor_score_time?t.total_score:NaN:t.total_score=t.raw_score<0?0:t.raw_score
              })(t), t.final_exam_score&&(t.final_exam_score=parseFloat(t.final_exam_score)), e.totalScoreInteger)return t.total_score=Math.round(t.total_score)
            })), e.$broadcast("drawChart"), J.resolve())))
          }), (e=>J.reject(e)));
          function ue(e, t, r){
            var n, o=t.scoreFilterSelected&&(n=e.score_percentage, 0===Number(n)), a=!t.toggleShowFinalExamination&&r.hiddenActivityKeys[
              e.type+e.id
            ];
            return!o&&(!a||t.toggleShowFinalExamination)
          }
          e.$on("scoreChanged", (()=>{
            e.onlineVideoCompletenessScoreSetting=o.copy(S.setting), le(), y.initData("#score-item-select", e.activities, e.customScoreItems, e.rollcallScore, e.onlineVideoCompletenessScore, e.performanceScore), e.$broadcast("drawChart"), e.reInitScroll()
          })), h.$on("rollcallScoreSettingUpdated", (()=>(ae(), le()))), e.reInitScroll=()=>D(), e.track=e=>{
            var t={
              mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:e, module:statistics.enums.TeachingActionModule.score
            };
            statistics.track(t)
          }, e.activityCategories=[
          ], e.filterCategory=t=>t.activities.some((t=>ue(t, e.ui, e.scoreColumnSetting)));
          e.flatCategories=e=>e.map((e=>e.activities)).flat();
          var de=function(){
            var t, r=(t=s.mark((function t(){
              return s.wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:if("KWNC"===e.deliveryOrg){
                    t.next=2;
                    break
                  }
                  return t.abrupt("return", new Promise((e=>{
                    e()
                  })));
                  case 2:return e.scoreBookService=new A.KwncEnrollmentScoreBookService(e.courseId, e.customScoreItems, e.students, e.deliveryOrg), t.next=5, e.scoreBookService.prepareEnrollmentScoreBook();
                  case 5:return t.next=7, e.scoreBookService.afterGetEnrollmentScoreBook(e.course);
                  case 7:return t.next=9, e.scoreBookService.enrollmentScoreBook;
                  case 9:return e.enrollmentScoreBook=t.sent, t.next=12, e.scoreBookService.originEnrollmentScoreBook;
                  case 12:return e.originEnrollmentScoreBook=t.sent, t.next=15, e.scoreBookService.continuousAssessmentScore;
                  case 15:return e.continuousAssessmentScore=t.sent, t.next=18, e.scoreBookService.customExamItem;
                  case 18:return e.customExamItem=t.sent, t.next=21, e.$broadcast("getTotalScorePercentage");
                  case 21:return t.next=23, new Promise((e=>{
                    e()
                  }));
                  case 23:return t.abrupt("return", t.sent);
                  case 24:case"end":return t.stop()
                }
              }), t)
            })), function(){
              var e=this, r=arguments;
              return new Promise((function(n, o){
                var a=t.apply(e, r);
                function s(e){
                  i(a, n, o, s, c, "next", e)
                }
                function c(e){
                  i(a, n, o, s, c, "throw", e)
                }
                s(void 0)
              }))
            });
            return function(){
              return r.apply(this, arguments)
            }
          }
          (), pe=(e, t, r, n)=>({
            name:e, ref_obj:t, hasScoreCount:r, edu_score_key:"null", score_type:n
          }), fe=()=>{
            if((()=>{
              e.hasRollcall=e.scoreColumnSetting&&e.scoreColumnSetting.showRollCallScore;
              var t=p.find(e.allScoresItem, {
                name:"rollcall"
              });
              if(e.hasRollcall&&!t)return t=pe("rollcall", "rollcall", 0, "rollcall"), void e.allScoresItem.splice(0, 0, t);
              var r=p.findIndex(e.allScoresItem, {
                name:"rollcall"
              });
              r>=0&&e.allScoresItem.splice(r, 1)
            })(), e.allScoresItem){
              var t=p.find(e.allScoresItem, {
                name:"rollcall"
              });
              if(t){
                var r=p.filter(e.students, (e=>e.rollcall>0));
                t.hasScoreCount=r.length
              }
            }
            return 0
          }, me=()=>{
            var t=de();
            (()=>{
              var t=n.cookie("scoreColumnSetting");
              if(t)try{
                e.scoreColumnSetting=JSON.parse(t)
              }
              catch(e){
                console.log("error: ", e)
              }
            })(), D();
            var r, s, i=e.homeworks.concat(e.exams).concat(e.classrooms).concat(e.forumActivities).concat(e.questionnaireActivities).concat(e.virtualExperimentActivities).concat(e.interactionActivities);
            return e.activities=p.sortBy(i, [
              "module_sort", "syllabus_sort", "sort", "created_at"
            ]), e.activityCategories=(r=e.activities, s=p.groupBy(r, "type"), [
              "homework", "exam", "forum", "classroom", "interaction", "questionnaire", "virtual_experiment"
            ].map((t=>{
              var r, n=null!==(r=s[
                t
              ])&&void 0!==r?r:[
              ];
              return{
                name:e.$t("activityType.".concat(t)), icon:"score-".concat(t.replace(/_/g, "-")), activities:n, totalPercentage:n.reduce(((e, t)=>new a(t.score_percentage).plus(e)), new a(0)).toNumber()
              }
            }))), d.initPublishInfoForActivities(e.activities), e.percentageData.activityList=o.copy(e.activities), e.percentageData.customScoreItemList=o.copy(e.customScoreItems), _.initDepartmentsInfoForEnrollments(e, e.students, e.course.is_shared_public_course), y.initData("#score-item-select", e.activities, e.customScoreItems, e.rollcallScore, e.onlineVideoCompletenessScore, e.performanceScore), t.then((()=>{
              return t=e.customScoreItems.reduce(((e, t)=>e+parseFloat(t.score_percentage)), 0), void p.forEach(e.students, (r=>{
                r.rollcall=null!=e.rollcallScore[
                  r.id
                ]
                ?e.rollcallScore[
                  r.id
                ]
                :-1, e.onlineVideoCompletenessScoreSetting.id&&(r.onlineVideoCompletenessScore=e.onlineVideoCompletenessScore[
                  r.id
                ].score), p.forEach(e.customScoreItems, (e=>r[
                  "custom".concat(e.id)
                ]
                =null!=e.scores[
                  r.id
                ]
                ?e.scores[
                  r.id
                ]
                :-1)), r.score_total_percentage=0, r.score_total_percentage+=parseFloat(e.rollcallSetting.score_percentage), r.score_total_percentage+=t, e.isAllowPerformanceView&&(r.performance=null!=e.performanceScore[
                  r.id
                ]
                ?e.performanceScore[
                  r.id
                ]
                :-1, r.score_total_percentage+=parseFloat(e.performanceSetting.score_percentage)), r.score_total_percentage+=parseFloat(e.onlineVideoCompletenessScoreSetting.score_percentage||0), p.forEach(e.activities, (t=>{
                  var n=e.getScore(t, r);
                  "un_assigned"!==e.getStudentStatus(t, r)&&(r.score_total_percentage+=parseFloat(t.score_percentage)), r[
                    t.type+t.id
                  ]
                  =""!==n?n:-1
                })), "KWNC"===e.deliveryOrg&&e.scoreBookService&&(e.scoreBookService.writeAfterMakeUpScoreToStudent(r), e.scoreBookService.writeCourseTotalScoreToStudent(r), e.scoreBookService.writeChangeLogOfFinalScoreToStudent(r))
              }));
              var t
            })), fe(), e.loaded=!0, e.track(statistics.enums.ScoreAction.view), ce(P)
          }, ve=()=>{
            e.filteredStudents=p.filter(e.students, (t=>_.filterEnrollments(e, t, e.course.is_shared_public_course)&&y.isStudentMatch(t, e.condition))), e.sharedBetweenScopes.filteredStudents=e.filteredStudents
          };
          (null!=e.course?e.course.is_shared_public_course:void 0)&&e.$watch("condition.org_ids", ve), e.$watch("condition.department_ids", ve), e.$watch("condition.grade_ids", ve), e.$watch("condition.class_ids", ve);
          e.$watch("condition.score_item", ((t, r)=>(t===y.scoreItemNoSpecified?(e.condition.score_state=y.scoreStateAll, e.condition.score_low_limit=null, e.condition.score_upper_limit=null, n("#score-state-select").multiselect("disable")):n("#score-state-select").multiselect("enable"), v((()=>n("#score-state-select").multiselect("refresh")), 100)))), e.search=()=>ve(), e.getScoreFilterStr=()=>y.getScoreFilterStr(e.condition, e.scoreItemFilterMessage, e.scoreStateFilterMessage), e.scoreInputDisabled=()=>e.condition.score_item===y.scoreItemNoSpecified||e.condition.score_state!==y.scoreStateHasScore, e.disableScoreEditRule=t=>e.courseScoresPublished||!e.allowCourseEditScore&&e.isInstructorView||t.published, e.showNullScoreText=()=>{
            if(e.enableUpdateAllStudentsFinalScore){
              if("finish_dissertation_rule"===e.scoreTypeSettings.score_type)return;
              return e.showNullScore.nullScoreText
            }
          }, e.checkScoreIsNaN=e=>isNaN(e), e.getTotalScore=t=>e.checkScoreIsNaN(t.total_score)?e.showNullScore.nullScoreText:t.total_score, e.getAfterMakeUpScore=t=>e.checkScoreIsNaN(t.after_make_up_score)?e.showNullScore.nullScoreText:t.after_make_up_score, e.disableKwncCustomScoreItem=t=>e.isKwncCustomScoreItem(t)&&0===t.score_percentage;
          var he=()=>u.all([
            S.init(), S.getScoresOfCourse(P)
          ]).then((function(){
            var t=Array.from(arguments.length<=0?void 0:arguments[
              0
            ]), r=c(t, 2), n=r[
              0
            ], a=r[
              1
            ];
            return e.onlineVideoCompletenessScoreSetting=o.copy(n), e.onlineVideoCompletenessScore=a, q.resolve()
          }), (e=>q.reject(e))), ge=()=>{
            var t=u.defer();
            return u.all([
              b.getEduSubmitLogs(P)
            ]).then((function(){
              var t=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), r=c(t, 1), n=r[
                0
              ];
              return e.eduSubmitLogs=o.copy(n)
            })), t.resolve()
          }, _e=()=>{
            var t=u.defer();
            return u.all([
              b.getSubmitTime(P)
            ]).then((function(){
              var t=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), r=c(t, 1), n=r[
                0
              ];
              return e.submitTime=o.copy(n), e.canSubmitScore=e.submitTime.can_submit_score
            })), t.resolve()
          }, ye=()=>x.customScoreItemScores(P, (t=>(e.customScoreItems=p.each(o.copy(t.custom_score_items), (e=>{
            e.score_count=e.scores.length;
            var t, r={
            }, n=l(e.scores);
            try{
              for(n.s();
              !(t=n.n()).done;
              ){
                var o=t.value;
                r[
                  o.user_id
                ]
                =o.score
              }
            }
            catch(e){
              n.e(e)
            }
            finally{
              n.f()
            }
            return e.scores=r
          })), z.resolve())), (e=>z.reject(e))), Se=()=>x.getScoreRanks(P, (t=>(e.scoreRanks=t.score_ranks, e.passScoreValue=100, p.each(e.scoreRanks, (t=>{
            t.min<e.passScoreValue&&!0===t.pass&&(e.passScoreValue=t.min)
          })), Y.resolve())), (e=>Y.reject(e)));
          h.$on("onlineVideoCompletenessScoreSettingChanged", (()=>{
            var t=parseFloat(e.onlineVideoCompletenessScoreSetting.score_percentage||0);
            u.all([
              S.init(), S.getScoresOfCourse(P)
            ]).then((function(){
              var r=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), n=c(r, 2), a=n[
                0
              ], s=n[
                1
              ];
              return e.onlineVideoCompletenessScoreSetting=o.copy(a), e.onlineVideoCompletenessScore=s, le(), e.students&&e.students.forEach((r=>r.score_total_percentage+=parseFloat(e.onlineVideoCompletenessScoreSetting.score_percentage||0)-t)), y.initData("#score-item-select", e.activities, e.customScoreItems, e.rollcallScore, e.onlineVideoCompletenessScore, e.performanceScore), e.$broadcast("drawChart")
            }))
          })), h.$on("customScoreItemChanged", (()=>{
            z=u.defer();
            var t=e.customScoreItems.reduce(((e, t)=>e+parseFloat(t.score_percentage)), 0);
            ye().then((()=>{
              le(), e.percentageData.customScoreItemList=o.copy(e.customScoreItems), D();
              var r=e.customScoreItems.reduce(((e, t)=>e+parseFloat(t.score_percentage)), 0);
              e.students&&e.students.forEach((e=>e.score_total_percentage+=r-t))
            }))
          })), e.addCustomScoreItem=function(){
            var t=arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :"";
            e.$broadcast("bindCustomScoreItemForAdd", t), D()
          }, e.hasCustomExperimentalScore=()=>!!e.allScoresItem&&!!e.allScoresItem.find((e=>"实验成绩"===e.name));
          e.$watch("onlineVideoCompletenessScoreSetting", (()=>{
            if(e.hasOnlineVideo=e.onlineVideoCompletenessScoreSetting&&e.onlineVideoCompletenessScoreSetting.hasOwnProperty("id")&&e.onlineVideoCompletenessScoreSetting.id&&e.scoreColumnSetting.showOnlineVideoCompletenessScore, e.hasOnlineVideo){
              var t=pe("onlineVideo", "onlineVideo", 0, "onlineVideo");
              return e.allScoresItem.splice(1, 0, t)
            }
            var r=p.findIndex(e.allScoresItem, {
              name:"onlineVideo"
            });
            if(r>=0)return e.allScoresItem.splice(r, 1)
          })), pe=(e, t, r, n)=>({
            name:e, ref_obj:t, hasScoreCount:r, edu_score_key:"null", score_type:n
          });
          e.$watch("onlineVideoCompletenessScore", (()=>{
            if(e.allScoresItem&&e.hasOnlineVideo){
              var t, r=p.find(e.allScoresItem, {
                name:"onlineVideo"
              });
              t=e.canSubmitZero?p.filter(e.onlineVideoCompletenessScore, (e=>e.score>=0)):p.filter(e.onlineVideoCompletenessScore, (e=>e.score>0)), r.hasScoreCount=t.length, e.hasOnlineVideoCompletenessScore=t
            }
            return 0
          }));
          var be=()=>{
            if(p.forEach(e.allScoresItem, (e=>e.edu_score_key="null")), e.eduCourseScoreRate){
              var t=p.filter(e.eduCourseScoreRate.scores_rate, {
                is_selected:!0
              });
              p.forEach(t, (e=>e.is_selected=!1))
            }
            e.submitCount=0
          };
          e.$watch("canSubmitScore", (()=>{
            var t;
            e.canSubmitScore&&"HK"===window.globalData.deliveryOrg&&(be(), t=u.defer(), u.all([
              b.getEduCourseScoreRate(P)
            ]).then((function(){
              var t=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 1)[
                0
              ];
              return e.eduCourseScoreRate=o.copy(t)
            })), t.resolve(), ge())
          }));
          e.$watch("customScoreItems", ((t, r)=>(p.forEach(r, ((t, r)=>{
            var n=p.findIndex(e.allScoresItem, {
              ref_obj:t
            });
            return e.allScoresItem.splice(n, 1)
          })), p.forEach(e.customScoreItems, ((t, r)=>{
            var n=pe(t.name, t, t.score_count, "customscore");
            return e.allScoresItem.splice(r+2, 0, n)
          })))));
          e.$watch("activities", (()=>{
            e.allScoresItem&&p.forEach(e.activities, (t=>{
              var r=t.scores?t.scores.length:0, n=pe(t.title, t, r, "learningactivity");
              e.allScoresItem.push(n)
            }))
          }));
          var we=()=>{
            e.submitCount=e.selectedEduScoreKey.length
          }, Ce=(e, t)=>{
            var r=e.indexOf(t);
            r>-1&&e.splice(r, 1)
          };
          e.$watch("eduCourseScoreRate.scores_rate", we), e.selectedEduScoreKey=[
          ], e.selectEduSubmitScore=(t, r)=>{
            if(t!==r)return r&&Ce(e.selectedEduScoreKey, r), t&&e.selectedEduScoreKey.push(t), we()
          }, e.resetScoreSelection=t=>(Ce(e.selectedEduScoreKey, t.edu_score_key), t.edu_score_key="null", we());
          var Ie=()=>{
            var t={
              course_id:e.courseId, is_submit_zero:e.canSubmitZero, score_type_edu_score_keys:[
              ], edu_course_score_rate:o.copy(e.eduCourseScoreRate)
            }, r=(e.allScoresItem, p.filter(e.allScoresItem, (e=>"null"!==e.edu_score_key)));
            return p.forEach(r, (e=>{
              var r, n;
              "rollcall"===e.ref_obj||"onlineVideo"===e.ref_obj?(n=e.ref_obj, r=0):(n=e.ref_obj.type||"custom", r=e.ref_obj.id);
              var o={
                score_item_type:n, ref_id:r, edu_score_key:e.edu_score_key
              };
              return t.score_type_edu_score_keys.push(o)
            })), t
          };
          w.on("close.fndtn.reveal", "#edu-score-submit-popup", (()=>{
            be(), e.iKnowCheck=!1, e.ui.iKnowCheck=e.iKnowCheck
          })), e.submitScores=()=>{
            var o, a=f(e), s=Ie();
            if(s.score_type_edu_score_keys.length)return(o=e.selectedEduScoreKey).some(((e, t)=>o.indexOf(e)!==t))?(r.error(e.duplicateKeysMessage), !1):(a.show(), e.submiting=!0, t.post("/api/edu-scores/submit-course-scores", s).success((t=>(a.hide(), e.submiting=!1, n("#edu-score-submit-popup").foundation("reveal", "close"), r.success(t.message), ge()))).error(((t, o)=>{
              if(a.hide(), e.submiting=!1, n("#edu-score-submit-popup").foundation("reveal", "close"), 500===o&&r.error(), t.message&&r.error(t.message), t.errors&&(t.errors.course_id&&r.error(t.errors.course_id), t.errors.score_type_edu_score_keys))return r.error(t.errors.score_type_edu_score_keys)
            })))
          }, e.hasEduScoreKey=e=>!(!e.edu_score_key||""===e.edu_score_key||"null"===e.edu_score_key), e.iKnowCheckChange=()=>{
            e.iKnowCheck=!e.iKnowCheck, e.ui.iKnowCheck=e.iKnowCheck
          }, e.showFloatingMessage=function(t, r){
            var n=!(arguments.length>2&&void 0!==arguments[
              2
            ])||arguments[
              2
            ];
            if(e.floatingMsg={
              showFloatingMessage:!0, status:t
            }, e.errorMessage=r, n)return v((()=>{
              t===e.floatingMsg.status&&(e.floatingMsg.showFloatingMessage=!1, e.floatingMsg.status="")
            }), 3e3)
          }, e.removeFloatingMessage=()=>v((()=>{
            n("input.process-error").length>0||(e.floatingMsg={
              showFloatingMessage:!1, status:null
            })
          }));
          e.openWithClassIds=()=>{
            var t=(()=>{
              var t=e.condition.class_ids, r=[
              ];
              return!t||t.length<1?r:(p.map(e.classes, (e=>r.push(e.id))), t)
            })(), r="score/report";
            t&&t.length>0?r="score/report?class_ids=".concat(t):e.classes&&1===e.classes.length&&(r="score/report?class_ids=".concat(e.classes[
              0
            ].id)), I.open(r, "_blank")
          }, e.score_export=t=>{
            I.location.href="score/list/excel?column=".concat(t, "&filter_by_score=").concat(e.ui.scoreFilterSelected, "&conditions=").concat(JSON.stringify(e.condition))
          }, e.openScorePaper=()=>{
            var t="score/list?conditions=".concat(JSON.stringify(e.condition));
            e.track("view_score_list"), I.open(t, "_blank")
          }, e.reSubmitScore=()=>{
            n("input.process-error").trigger("blur")
          };
          var xe=t=>e.showFloatingMessage("init-failed", "", !1);
          e.$watch("enableScoreItemSetting", (()=>{
            if(e.enableScoreItemSetting){
              x.getScoreItemSettings(e.courseId, (t=>{
                t.hasOwnProperty("practice_score")&&(e.hasPracticeScore=!0, e.practiceScore=t.practice_score.toString()), t.hasOwnProperty("experimental_score")&&(e.hasExperimentalScore=!0, e.experimentalScore=t.experimental_score.toString()), t.hasOwnProperty("final_score")&&(e.hasFinalScore=!0, e.finalScore=t.final_score.toString()), t.hasOwnProperty("mid_term_score")&&(e.hasMidTermScore=!0, e.midTermScore=t.mid_term_score.toString())
              }))
            }
          }));
          return(r=>(e.courseId=r, (t=>{
            var r="id,name,department(name),grade(name),klass(name),created_user(id),subject_code,imported_from";
            "KWNC"===e.deliveryOrg&&(r+=",course_attributes(data)"), e.showMoocVideoScore&&(r+=",course_attributes(audience_type)"), x.course(t, r, (t=>(e.course=t, N.resolve())), (e=>N.resolve(e)))
          })(r), re(r), (r=>{
            t.get("/api/courses/".concat(r, "/score-type-settings")).success((t=>{
              e.scoreTypeSettings={
                score_type:t.score_type, passing_score:t.passing_score
              }, M.resolve()
            })).error((e=>M.reject(e)))
          })(r), (t=>{
            x.homeworkScores(t, "id,title,data,start_time,end_time,is_announce_score_time_passed,score_percentage,created_at,prerequisites,module_sort,syllabus_sort,sort,has_assign_student,assign_student_ids,published,is_in_progress", (t=>(e.homeworks=p.each(o.copy(t.homework_activities), (r=>(r.type="homework", r.score_published=r.is_announce_score_time_passed, r.url="/course/".concat(e.courseId, "/learning-activity#/").concat(r.id), r.scores=p.find(t.scores, {
              homework_id:r.id
            }).scores, p.each(r.scores, (e=>{
              ne(e)
            }))))), O.resolve())), (e=>O.reject(e)))
          })(r), (t=>{
            x.homeworkStudentStatus(t, (t=>{
              e.activityStudentStatus.homework=t, X.resolve()
            }), (e=>{
              X.resolve(e)
            }))
          })(r), (t=>{
            var r=d.initExams(t), n=d.initExamScores(t);
            u.all([
              r, n
            ]).then((function(){
              var t=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), r=t[
                0
              ], n=t[
                1
              ];
              return e.exams=p.each(o.copy(r), (t=>(t.type="exam", t.score_published=t.is_announce_score_time_passed, t.url="/course/".concat(e.courseId, "/learning-activity#/exam/").concat(t.id), t.scores=p.filter(n, {
                activity_id:t.id
              }), p.each(t.scores, (e=>{
                ne(e)
              }))))), G.resolve()
            }), (e=>G.reject(e)))
          })(r), (t=>{
            x.examStudentStatus(t, (t=>{
              e.activityStudentStatus.exam=t, Q.resolve()
            }), (e=>{
              Q.resolve(e)
            }))
          })(r), (t=>{
            var r=d.initClassroom(t), n=d.initClassroomScores(t);
            u.all([
              r, n
            ]).then((function(){
              var r=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), n=r[
                0
              ], a=r[
                1
              ];
              return e.classrooms=p.filter(n, {
                type:"classroom"
              }), e.classrooms=p.each(o.copy(e.classrooms), (e=>(e.url="/course/".concat(t, "/learning-activity#/classroom/").concat(e.id), e.scores=p.filter(a, {
                activity_id:e.id
              }), e.start_time=e.created_at))), B.resolve()
            }), (e=>B.reject(e)))
          })(r), (t=>{
            x.classroomStudentStatus(t, (t=>{
              e.activityStudentStatus.classroom=t, Q.resolve()
            }), (e=>{
              Q.resolve(e)
            }))
          })(r), e.rollcallSetting={
            score_percentage:0
          }, g.init().then((t=>(e.rollcallSetting=t, K.resolve())), (e=>K.reject(e))), ae(), e.isAllowPerformanceView&&se(), (t=>{
            var r=d.initCourseVirtualExperimentActivity(t), n=d.initCourseVirtualExperimentScores(t);
            u.all([
              r, n
            ]).then((function(){
              var r=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), n=r[
                0
              ], a=r[
                1
              ];
              return e.virtualExperimentActivities=p.each(o.copy(n), (e=>(e.type="virtual_experiment", e.url="/course/".concat(t, "/learning-activity#/").concat(e.id), e.scores=p.filter(a, {
                activity_id:e.id
              }), e.public=e.can_show_score, !0))), ee.resolve()
            }), (e=>ee.reject(e)))
          })(r), (t=>{
            var r=d.initForumActivity(t), n=d.initForumScores(t);
            u.all([
              r, n
            ]).then((function(){
              var r=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), n=r[
                0
              ], a=r[
                1
              ];
              return e.forumActivities=p.each(o.copy(n), (e=>(e.type="forum", e.url="/course/".concat(t, "/learning-activity#/").concat(e.id), e.scores=p.filter(a, {
                activity_id:e.id
              }), e.start_time=e.start_time||e.created_at, e.public=e.can_show_score, !0))), j.resolve()
            }), (e=>j.reject(e)))
          })(r), (t=>{
            var r=d.initWeblinkActivity(t), n=d.initWeblinkScores(t);
            u.all([
              r, n
            ]).then((function(){
              var r=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), n=r[
                0
              ], a=r[
                1
              ];
              return e.weblinkActivities=p.each(o.copy(n), (e=>(e.type="web_link", e.url="/course/".concat(t, "/learning-activity#/").concat(e.id), e.scores=p.filter(a, {
                activity_id:e.id
              }), e.start_time=e.start_time||e.created_at, e.public=e.can_show_score, !0))), U.resolve()
            }), (e=>U.reject(e)))
          })(r), (t=>{
            var r=d.initQuestionnaireActivity(t), n=d.initQuestionnaireScores(t);
            u.all([
              r, n
            ]).then((function(){
              var r=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), n=r[
                0
              ], a=r[
                1
              ], s=p.filter(n, (e=>e.data.is_scored));
              return e.questionnaireActivities=p.each(o.copy(s), (e=>(e.type="questionnaire", e.url="/course/".concat(t, "/learning-activity/full-screen#/questionnaire/").concat(e.id), e.scores=p.filter(a, {
                activity_id:e.id
              }), e.start_time=e.start_time||e.created_at, e.public=!0, !0))), V.resolve()
            }), (e=>V.reject(e)))
          })(r), (t=>{
            var r=d.initInteractionActivity(t), n=d.initInteractionScores(t);
            u.all([
              r, n
            ]).then((function(){
              var t=c(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), r=t[
                0
              ], n=t[
                1
              ];
              return e.interactionActivities=p.each(o.copy(r), (t=>(t.type="interaction", t.url="/course/".concat(e.courseId, "/learning-activity/full-screen#/").concat(t.id), t.scores=p.filter(n, {
                activity_id:t.id
              }), t.start_time=t.start_time||t.created_at, t.public=!0, !0))), Z.resolve()
            }), (e=>Z.reject(e)))
          })(r), he(), ye(), u.all([
            M.promise, R.promise
          ]).then((()=>{
            (t=>{
              var r="id,roles,user(id,name,nickname,user_no,comment,imported_from,grade(id,name),klass(id,name,code),department(id,name,code,stopped),org(id,name),user_attributes(tag)),seat_number,total_score,score_comment,published,instructor_score_time,scored_instructor(name),exceptional_case,original_exceptional_case,data";
              e.programEnabled&&(r="id,roles,user(id,name,nickname,user_no,comment,imported_from,grade(id,name),klass(id,name,code),department(id,name,code,stopped),org(id,name),program(id,name)),seat_number,total_score,score_comment,published,instructor_score_time,scored_instructor(name),exceptional_case,original_exceptional_case,program(id,name),data"), ie&&(r+=",retake_status"), x.enrollments(t, r, e.condition, (t=>(e.members=p.map(t.enrollments, (e=>(e.enrollment_id=e.id, n.extend(e, e.user), delete e.user, e))), e.students=p.filter(e.members, (e=>e.roles.includes("student"))), p.forEach(e.students, (t=>{
                t.total_score=parseFloat(t.total_score), t.department_code=t.department&&t.department.code?t.department.code:void 0, t.grade_name=t.grade&&t.grade.name?t.grade.name:void 0, t.class_code=t.klass&&t.klass.code?t.klass.code:void 0, t.user_no=t.user_no?t.user_no:void 0, t.selected=!1, t.dissertation_finished=t.instructor_score_time&&"finish_dissertation_rule"===e.scoreTypeSettings.score_type
              })), e.sharedBetweenScopes.students=e.students, e.filteredStudents=e.students, e.sharedBetweenScopes.filteredStudents=e.filteredStudents, e.courseScoresPublished||"partial_submitted"===e.scoreStatus?oe():F.resolve())), (e=>F.reject(e)))
            })(r)
          })), "HK"===window.globalData.deliveryOrg&&_e(), le(), e.allowDisplayScoreRanks&&Se(), u.all(te).then(me, xe)))(P)
        }
      ]
    }, 611854:(e, t, r)=>{
      r.d(t, {
        X:()=>n, Y:()=>o
      });
      var n=function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)("DatePicker", {
          ref:"datePicker", class:e.displayMode, attrs:{
            editable:!1, disabled:e.disabled, format:e.format, type:e.type, placement:e.placement, placeholder:e.placeholder, options:e.getOptions(), returnformat:e.returnformat, transfer:e.transfer, clearable:e.clearable, "split-panels":e.splitPanels, size:e.size, "transfer-class-name":e.transferClassName
          }, on:{
            "on-change":e.change
          }, model:{
            value:e.dateValue, callback:function(t){
              e.dateValue=t
            }, expression:"dateValue"
          }
        })
      }, o=[
      ]
    }, 612845:(e, t, r)=>{
      var n=r(248124), o=r(571478);
      e.exports=[
        "$scope", "toastr", "examListRepository", "$http", function(e, t, r, a){
          var s=n("#courseId").val(), i=o(e);
          e.loading=!1, e.save=function(){
            i.show();
            var r={
            };
            e.hasExperimentalScore&&(r.experimental_score=e.experimentalScore), e.hasPracticeScore&&(r.practice_score=e.practiceScore), e.hasFinalScore&&(r.final_score=e.finalScore), e.hasMidTermScore&&(r.mid_term_score=e.midTermScore);
            var o="/api/courses/".concat(s, "/score-item-settings");
            return a.put(o, r).success((()=>{
              n("#score-item-setting").foundation("reveal", "close"), t.success(e.saveSuccess), i.hide(), window.location.reload()
            })).error((()=>{
              t.error(e.saveFailed), i.hide()
            }))
          }
        }
      ]
    }, 624971:(e, t, r)=>{
      var n=r(302543), o=r(248124);
      function a(e, t){
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
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i=!0, c=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return i=e.done, e
          }, e:function(e){
            c=!0, a=e
          }, f:function(){
            try{
              i||null==r.return||r.return()
            }
            finally{
              if(c)throw a
            }
          }
        }
      }
      function s(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      e.exports=[
        "$scope", "$http", "toastr", "$q", "$rootScope", "fileSelectModel", function(e, t, r, s, i, c){
          i.$on("editStudentFinalScore", ((t, r)=>e.editScoreStudents=r)), i.$on("initSubmitFinalScoreInfo", (function(){
            return l(), u()
          }));
          var l=function(){
            return e.inViewMode=!1, e.inProcessing=!1, e.editScoreStudents=[
            ], e.errors=[
            ]
          }, u=function(){
            var r;
            return(r=s.defer(), t.get("/api/courses/".concat(e.courseId, "/submit-final-score-record")).success((e=>r.resolve(e.records))), r.promise).then((function(t){
              return e.submitRecords=t, e.inProcessing=n.some(e.submitRecords, (e=>e.processing_count>0))
            }))
          };
          return e.viewEditStudentFinalScorePopup=function(t, r){
            e.inViewMode=!0, e.editScoreStudents=[
            ];
            var s, c=a(n.find(e.submitRecords, {
              id:r
            }).score_edit_records);
            try{
              for(c.s();
              !(s=c.n()).done;
              ){
                var l=s.value;
                e.editScoreStudents.push({
                  total_score:l.original_score, new_final_score:l.score, enrollment_id:l.enrollment_id, status:l.status, selected:!0
                })
              }
            }
            catch(e){
              c.e(e)
            }
            finally{
              c.f()
            }
            i.$broadcast("initStudentFinalScore", e.editScoreStudents, e.inViewMode), o("#"+t).foundation("reveal", "open")
          }, e.openEditStudentFinalScorePopup=function(t){
            e.inViewMode=!1, i.$broadcast("initStudentFinalScore", e.editScoreStudents), o("#"+t).foundation("reveal", "open")
          }, e.saveEditedFinalScore=function(){
            var a=n.map(e.editScoreStudents, (function(e){
              var t={
              };
              return t.enrollment_id=e.enrollment_id, t.score=parseFloat(e.new_final_score), t.original_score=parseFloat(e.total_score), t
            }));
            return t.post("/api/courses/".concat(e.courseId, "/submit-final-score"), {
              edited_score:a
            }).success((function(){
              return r.success(), o("#submit-final-score-info-popup").foundation("reveal", "close")
            })).error(r.decorateError((t=>e.errors=t.errors)))
          }
        }
      ]
    }, 660787:(e, t, r)=>{
      r.d(t, {
        B:()=>u
      });
      r(540590), r(418665), r(269193), r(14602);
      var n=r(272505), o=r.n(n), a=r(920453), s=r(218831), i=r(765321), c=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, l=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, u=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          var r, n, c, u;
          return l(this, (function(l){
            switch(l.label){
              case 0:return r=window.RequestScope, n={
              }, r&&(n[
                "Request-Scope"
              ]
              =r), [
                4, o().get("/api/courses/".concat(e, "/enrollments/users/").concat(t), {
                  headers:n
                })
              ];
              case 1:return c=l.sent(), u=(0, s.camelizeKeys)(c.data), [
                2, (0, a.plainToClass)(i.KJ, u, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }
    }, 679578:(e, t, r)=>{
      r.d(t, {
        A:()=>a
      });
      r(219693), r(418665), r(107918), r(14602);
      var n=new Map([
        [
          "info", "ivu-icon-ios-information-circle"
        ], [
          "warning", "ivu-icon-ios-alert"
        ], [
          "success", "ivu-icon-ios-checkmark-circle"
        ], [
          "error", "ivu-icon-ios-close-circle"
        ]
      ]);
      const o={
        props:{
          value:Boolean, type:{
            type:String, default:"info", validator:e=>-1!==[
              "info", "warning", "success", "error"
            ].indexOf(e)
          }, title:{
            type:String
          }, content:{
            type:String
          }, divider:{
            type:Boolean, default:!1
          }, width:{
            type:Number, default:480
          }, verticalCenter:{
            type:Boolean, default:!1
          }, showCancel:{
            type:Boolean, default:!0
          }, confirmText:{
            type:String, default:""
          }, cancelText:{
            type:String, default:""
          }, lockScroll:{
            type:Boolean, default:!0
          }, hideIcon:{
            type:Boolean, default:!1
          }, className:{
            type:String, default:""
          }
        }, data(){
          return{
            icon:"ivu-icon-ios-information-circle", visible:this.value
          }
        }, watch:{
          value(e){
            this.visible=e
          }, visible(e){
            this.$emit("on-visible-change", e)
          }, type(e){
            this.icon=n.get(e)
          }
        }, computed:{
          modalClass(){
            return this.verticalCenter?"vertical-center-modal ".concat(this.className):this.className
          }
        }, methods:{
          ok(){
            this.$emit("on-ok")
          }, cancel(){
            this.$emit("on-cancel")
          }, hidden(){
            this.$emit("on-hidden")
          }, visibleChange(e){
            this.value=e
          }
        }
      };
      const a=(0, r(514486).A)(o, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"wg-confirm", class:{
            "no-border":!e.divider
          }, attrs:{
            value:e.value, "class-name":e.modalClass, width:e.width, "lock-scroll":e.lockScroll
          }, on:{
            "on-hidden":e.hidden, "on-visible-change":e.visibleChange
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  e._t("header", [
                    e.hideIcon?e._e():r("div", {
                      staticClass:"ivu-modal-confirm-head-icon", class:"ivu-modal-confirm-head-icon-"+e.type
                    }, [
                      r("i", {
                        staticClass:"ivu-icon", class:e.icon
                      })
                    ]), e._v(" "), r("span", {
                      staticClass:"title"
                    }, [
                      e._v("\n        "+e._s(e.title)+"\n      ")
                    ])
                  ])
                ]
              }, proxy:!0
            }, {
              key:"footer", fn:function(){
                return[
                  e._t("footer", [
                    r("Button", {
                      attrs:{
                        type:"primary"
                      }, on:{
                        click:e.ok
                      }
                    }, [
                      e._v(e._s(e.confirmText||e.$t("confirm")))
                    ]), e._v(" "), e.showCancel?r("Button", {
                      on:{
                        click:e.cancel
                      }
                    }, [
                      e._v(e._s(e.cancelText||e.$t("cancel")))
                    ]):e._e()
                  ])
                ]
              }, proxy:!0
            }
          ], null, !0)
        }, [
          e._t("default", [
            e._v("\n    "+e._s(e.content)+"\n  ")
          ])
        ], 2)
      }), [
      ], !1, null, "5daf803e", null).exports
    }, 690340:(e, t, r)=>{
      var n=r(248124), o=r(756029), a=r(793110);
      r(67500);
      var s=r(966491), i=r(571478);
      e.exports=[
        "$scope", "activityRepository", "$http", "$window", "toastr", "statHelper", function(e, t, r, c, l, u){
          var d, p=n("#courseId").val(), f=i(e);
          return e.announceScoreType={
            NO_ANNOUNCE:"no_announce", IMMEDIATE_ANNOUNCE:"immediate_announce", TIMED_ANNOUNCE:"timed_announce"
          }, e.ui={
            announceScoreType:"immediate_announce"
          }, e.scoreItem={
            name:"", score_percentage:0, announce_score_time:null
          }, e.disableEditExternalScoreItemName=c.orgSettings.disableEditExternalScoreItemName, e.validateSliderModel=e=>""!==e&&!s.endsWith(e, "."), e.verifySliderModel=t=>parseFloat(t)>e.leftScorePercentage, e.save=function(){
            var t=function(t){
              f.hide(), n("#add-score-item-popup").foundation("reveal", "close"), l.success(t.message), e.$emit("customScoreItemChanged");
              var r={
                mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:statistics.enums.ScoreAction.add_score_item, module:statistics.enums.TeachingActionModule.score
              };
              statistics.track(r), c.location.reload()
            }, o=function(t){
              return f.hide(), e.errors=t.errors
            };
            return f.show(), e.scoreItem.id?r.put("/api/course/custom-score-items/".concat(e.scoreItem.id), {
              name:e.scoreItem.name, percentage:e.scoreItem.score_percentage, announce_score_type:e.ui.announceScoreType, announce_score_time:"timed_announce"===e.ui.announceScoreType?e.scoreItem.announce_score_time:null
            }).success(t).error(o):r.post("/api/courses/".concat(p, "/custom-score-item"), {
              name:e.scoreItem.name, percentage:e.scoreItem.score_percentage, announce_score_type:e.ui.announceScoreType, announce_score_time:"timed_announce"===e.ui.announceScoreType?e.scoreItem.announce_score_time:null
            }).success(t).error(o)
          }, e.reset=()=>delete e.errors, e.$on("bindCustomScoreItemForEdit", (function(t, r){
            return e.scoreItem=o.copy(r), e.ui.announceScoreType=e.scoreItem.announce_score_type, d()
          })), e.$on("bindCustomScoreItemForAdd", (function(t){
            var r=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :"";
            return e.scoreItem={
              name:r, score_percentage:0, announce_score_time:null
            }, e.ui.announceScoreType="immediate_announce", d()
          })), e.allowEditScoreItemName=e=>!c.orgSettings.enableAhmuGetStudentsScore||"实验成绩"!==e, d=()=>t.getLeftScorePercentage(p).then((function(t){
            return e.leftScorePercentage=t, e.leftScorePercentage=e.leftScorePercentage.plus(new a(e.scoreItem.score_percentage))
          }))
        }
      ]
    }, 699833:(e, t, r)=>{
      var n=r(248124), o=r(302543), a=r(795093), s=r(756029);
      function i(e, t){
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
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s=!0, i=!1;
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
            i=!0, a=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(i)throw a
            }
          }
        }
      }
      function c(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(700533), r(168763), r(169218), r(43148), r(658379), e.exports=[
        "$scope", "$http", "toastr", "$q", "$timeout", "$rootScope", "userFilter", "$window", "commonApi", "momentService", "scoreHelper", function(e, t, r, c, l, u, d, p, f, m, v){
          var h, g=n("html").attr("lang");
          e.programEnabled=null===(h=window.featureToggles)||void 0===h?void 0:h.enableProgram, e.submiting=!1, e.allowFilterByShareOrg=!0, e.condition={
            org_ids:[
            ], department_ids:[
            ], grade_ids:[
            ], class_ids:[
            ], keyword:"", score_item:"0", score_state:"0"
          }, e.openBatchAddScoreItemModal=function(){
            n("#batch-import-item-score-popup").foundation("reveal", "open")
          }, e.scoreItemGroups=[
          ], e.selectedStudent={
            ids:[
            ]
          }, e.ui.allSelected=!1, e.ui.showChart=!1, e.$on("score-chart-toggle-changed", ((t, r)=>{
            e.ui.showChart=r
          })), e.programEnabled&&(e.condition.program_ids=[
          ]), e.isToggleWeblinkScoreSettingOpened="True"===n("#is-toggle-web-link-score-setting-opened").val(), e.ui.scoreFilterSelected=!1, e.openSubmitFinalScoreInfoPopup=function(e){
            u.$broadcast("initSubmitFinalScoreInfo"), n("#".concat(e)).foundation("reveal", "open")
          }, e.openSubmitUploadPopup=function(e){
            u.$broadcast("initSubmitScoreUploads"), n("#".concat(e)).foundation("reveal", "open")
          }, e.openChaoxingImportModal=()=>{
            var e=new CustomEvent("chaoxing-score-import:open");
            window.dispatchEvent(e)
          }, e.getSelectedClassNames=function(){
            var t=[
            ];
            return o.include(e.condition.class_ids, "0")&&t.push(e.noSpecifiedClass), o.forEach(e.classes, (function(r){
              if(e.condition.class_ids.includes("".concat(r.id)))return t.push(r.name)
            })), t.join()
          }, e.showScoreReport=function(t){
            var r="score/".concat(t, "?class_names=").concat(e.getSelectedClassNames());
            return p.open(r, "_blank"), null
          }, e.percentageData={
          }, e.allScoresItem=[
          ], e.scoreColumnSetting={
            showRollCallScore:!0, showPerformanceScore:!0, showOnlineVideoCompletenessScore:!0, showRawScore:!0, showExceptionalCase:!0, showScoreComment:!0, hiddenCustomScoreItemKeys:{
            }, hiddenActivityKeys:{
            }
          }, e.openChaoxingImportModal=()=>{
            var e=new CustomEvent("chaoxing-score-import:open");
            window.dispatchEvent(e)
          };
          e.updateScoreColumnSetting=function(t){
            var r;
            e.scoreColumnSetting.showRollCallScore=t.showRollCallScore, e.scoreColumnSetting.showPerformanceScore=t.showPerformanceScore, e.scoreColumnSetting.showOnlineVideoCompletenessScore=t.showOnlineVideoCompletenessScore, e.scoreColumnSetting.showRawScore=t.showRawScore, e.scoreColumnSetting.showExceptionalCase=t.showExceptionalCase, e.scoreColumnSetting.showScoreComment=t.showScoreComment, e.scoreColumnSetting.hiddenCustomScoreItemKeys=t.hiddenCustomScoreItemKeys, e.scoreColumnSetting.hiddenActivityKeys=t.hiddenActivityKeys, r=JSON.stringify(e.scoreColumnSetting), n.cookie("scoreColumnSetting", r, {
              expires:365
            })
          }, e.editingStatus={
          }, e.isEditing=()=>!o.isEmpty(e.editingStatus), e.updateEditingStatus=(t, r, n)=>l((function(){
            var o="".concat(t, "-").concat(r);
            return n?e.editingStatus[
              o
            ]
            =n:delete e.editingStatus[
              o
            ]
          })), e.getEditingClass=function(t, r){
            var n="".concat(t, "-").concat(r), o=e.editingStatus[
              n
            ];
            return{
              processing:"processing"===o, "process-error":"process-error"===o
            }
          }, e.getStudentRank=function(t){
            if(e.scoreRanks){
              var r, n=i(e.scoreRanks);
              try{
                for(n.s();
                !(r=n.n()).done;
                ){
                  var o=r.value;
                  if(t.total_score>=o.min&&t.total_score<=o.max)return o.rank
                }
              }
              catch(e){
                n.e(e)
              }
              finally{
                n.f()
              }
            }
          }, e.getDissertationStyle=function(){
            return{
              "with-dissertation":"finish_dissertation_rule"==e.scoreTypeSettings.score_type, "dissertation-in-en-US":"finish_dissertation_rule"==e.scoreTypeSettings.score_type&&("en-US"==g||"en-GB"==g||"th-TH"==g)
            }
          }, e.getTotalScoreStyle=function(t){
            var r={
              "with-rank":null!=e.getStudentRank(t), "with-score-pass":"score_pass_rule"==e.scoreTypeSettings.score_type
            }, n=e.getDissertationStyle();
            return Object.assign(r, n), r
          }, e.isFullItems=t=>"score_pass_rule"===e.scoreTypeSettings.score_type&&!e.checkTotalScoreIsNaN(t)&&null!=e.getStudentRank(t), e.isDissertationWithRank=t=>"finish_dissertation_rule"===e.scoreTypeSettings.score_type&&null!=e.getStudentRank(t), e.isScoreStatus=t=>"score_pass_rule"===e.scoreTypeSettings.score_type&&!e.checkTotalScoreIsNaN(t), e.getStudentScorePassedStatus=function(t){
            return v.isScorePassed(t.total_score, e.scoreTypeSettings.passing_score)?e.scorePassedMessage.passed:e.scorePassedMessage.notPassed
          };
          var _=c.defer(), y=c.defer(), S=c.defer(), b=c.defer(), w=c.defer(), C=c.defer(), I=(c.defer(), c.defer()), x=c.defer(), k=c.defer(), A=c.defer(), T=c.defer(), E=c.defer(), $=c.defer(), P=c.defer(), D=c.defer(), N=c.defer(), R=c.defer(), M=c.defer(), O=c.defer(), G=c.defer(), F=c.defer(), L=[
            _.promise, y.promise, S.promise, b.promise, w.promise, C.promise, I.promise, x.promise, k.promise, A.promise, M.promise, T.promise, E.promise, P.promise, D.promise, R.promise, O.promise, G.promise, F.promise
          ];
          e.isAllowPerformanceView&&L.push($.promise), e.allowDisplayScoreRanks&&L.push(N.promise), e.sharedBetweenScopes={
            students:[
            ], filteredStudents:[
            ]
          }, e.studentsReadyPromise=C.promise, e.hasNaNTotalScore=()=>o.filter(e.students, {
            total_score:NaN
          }).length>0, e.allowToPublishScore=()=>!e.hasNaNTotalScore(), e.publishScoreConfirmPopup=function(){
            var t;
            e.limitScorePublishByPercentage&&e.$broadcast("calculatePercentage"), null!==(t=window.featureToggles)&&void 0!==t&&t.publishScoreOfPartialStudents&&!e.selectedStudent.ids.length?(e.hideCancel=!0, n("#confirmation-popup").foundation("reveal", "open")):n("#score-confirmation-popup").foundation("reveal", "open")
          }, e.confirm=function(){
            n("#confirmation-popup").foundation("reveal", "close")
          };
          e.publishScore=function(){
            var n, a, s=e.students, i=e.scoreStatus;
            "finish_dissertation_rule"===e.scoreTypeSettings.score_type&&o.forEach(s, (t=>{
              t.total_score=e.checkTotalScoreIsNaN(t)?0:t.total_score
            })), null!==(n=window.featureToggles)&&void 0!==n&&n.publishScoreOfPartialStudents&&(s=o.filter(s, {
              selected:!0
            })), null!==(a=window.featureToggles)&&void 0!==a&&a.enableAuditorCourseRole&&(s=o.filter(s, {
              is_auditor:!1
            }));
            var c;
            return c=o.map(s, (function(e){
              var t={
              };
              return t.enrollment_id=e.enrollment_id, t.total_score=parseFloat(e.total_score), t
            })), e.scoreStatus="submitting", e.ui.contentLoadingComplete=!1, t.put("/api/enrollments/score", {
              course_id:H, enrollments:c
            }).success((function(t){
              e.ui.contentLoadingComplete=!0, r.success(t.message), o.forEach(e.members, (function(e){
                return e.published=!0, e.original_total_score=e.total_score, e.original_exceptional_case=e.exceptional_case
              })), B(H), e.track(statistics.enums.ScoreAction.publish_score), window.location.reload()
            })).error((function(t){
              return e.ui.contentLoadingComplete=!0, e.scoreStatus=i, r.error(t.message)
            }))
          };
          var B=function(t){
            f.scoreStatus(t, (function(t){
              return e.scoreSettings={
                autoPublish:t.auto_publish, canPublishScore:t.can_publish_score
              }, e.scoreSettings.isScorePublishStarted=a().diff(a(t.score_publish_start), "seconds")>0, e.scorePublishDeadline=t.score_publish_deadline, e.scoreStatus=t.score_status, e.published_name=t.published_name, e.courseScoresPublished="submitted"==e.scoreStatus, "string"==typeof t.published_at&&(e.published_at=a(t.published_at).format(m.DATE_TIME_FORMAT)), y.resolve()
            }), (e=>y.reject(e)))
          };
          e.activityStudentStatus={
          }, e.getStudentStatus=function(t, r){
            return((e.activityStudentStatus[
              t.type
            ]
            ||{
            })[
              t.id
            ]
            ||{
            })[
              r.id
            ]
            ||""
          }, e.performanceScore=[
          ], e.getScore=function(e, t){
            var r=o.find(e.scores, {
              activity_id:e.id, student_id:t.id
            });
            return r&&(r.score||0===r.score)?parseFloat(r.score):""
          }, e.track=e=>{
            var t={
              mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:e, module:statistics.enums.TeachingActionModule.score
            };
            statistics.track(t)
          };
          var j=function(){
            !function(){
              var t=n.cookie("scoreColumnSetting");
              if(t)try{
                e.scoreColumnSetting=JSON.parse(t)
              }
              catch(e){
              }
            }
            (), e.activities=[
            ], e.percentageData.activityList=s.copy(e.activities), e.percentageData.customScoreItemList=s.copy(e.customScoreItems), d.initDepartmentsInfoForEnrollments(e, e.students, e.course.is_shared_public_course), U(), K(), e.loaded=!0, e.track(statistics.enums.ScoreAction.view)
          }, U=()=>{
            var t=e.customScoreItems.reduce(((e, t)=>e+parseFloat(t.score_percentage)), 0);
            o.forEach(e.students, (function(r){
              r.rollcall=null!=e.rollcallScore[
                r.id
              ]
              ?e.rollcallScore[
                r.id
              ]
              :-1, e.onlineVideoCompletenessScoreSetting.id&&(r.onlineVideoCompletenessScore=e.onlineVideoCompletenessScore[
                r.id
              ].score), o.forEach(e.customScoreItems, (e=>r[
                "custom".concat(e.id)
              ]
              =null!=e.scores[
                r.id
              ]
              ?e.scores[
                r.id
              ]
              :-1)), r.score_total_percentage=0, r.score_total_percentage+=parseFloat(e.rollcallSetting.score_percentage), r.score_total_percentage+=t, e.isAllowPerformanceView&&(r.performance=null!=e.performanceScore[
                r.id
              ]
              ?e.performanceScore[
                r.id
              ]
              :-1, r.score_total_percentage+=parseFloat(e.performanceSetting.score_percentage)), r.score_total_percentage+=parseFloat(e.onlineVideoCompletenessScoreSetting.score_percentage||0), o.forEach(e.activities, (function(t){
                var n=e.getScore(t, r);
                "un_assigned"!==e.getStudentStatus(t, r)&&(r.score_total_percentage+=parseFloat(t.score_percentage)), r[
                  t.type+t.id
                ]
                =""!==n?n:-1
              }))
            }))
          };
          e.checkTotalScoreIsNaN=e=>isNaN(e.total_score), e.getTotalScore=t=>e.checkTotalScoreIsNaN(t)?e.showNullScore.nullScoreText:t.total_score;
          var V;
          V=(e, t, r, n)=>({
            name:e, ref_obj:t, hasScoreCount:r, edu_score_key:"null", score_type:n
          });
          var K=function(){
            if(function(){
              e.hasRollcall=e.scoreColumnSetting&&e.scoreColumnSetting.showRollCallScore;
              var t=o.find(e.allScoresItem, {
                name:"rollcall"
              });
              if(e.hasRollcall&&!t)return t=V("rollcall", "rollcall", 0, "rollcall"), e.allScoresItem.splice(0, 0, t);
              var r=o.findIndex(e.allScoresItem, {
                name:"rollcall"
              });
              r>=0&&e.allScoresItem.splice(r, 1)
            }
            (), e.allScoresItem){
              var t=o.find(e.allScoresItem, {
                name:"rollcall"
              });
              if(t){
                var r=o.filter(e.students, (e=>e.rollcall>0));
                t.hasScoreCount=r.length
              }
            }
            return 0
          };
          e.selectedEduScoreKey=[
          ], e.showFloatingMessage=function(t, r){
            var n=!(arguments.length>2&&void 0!==arguments[
              2
            ])||arguments[
              2
            ];
            if(e.floatingMsg={
              showFloatingMessage:!0, status:t
            }, e.errorMessage=r, n)return l((function(){
              if(t===e.floatingMsg.status)return e.floatingMsg.showFloatingMessage=!1, e.floatingMsg.status=""
            }), 3e3)
          };
          var W=t=>e.showFloatingMessage("init-failed", "", !1), H=n("#courseId").val()||$routeParams.courseId;
          return function(r){
            return e.courseId=r, B(r), function(r){
              t.get("/api/courses/".concat(r, "/score-type-settings")).success((function(t){
                e.scoreTypeSettings={
                  score_type:t.score_type, passing_score:t.passing_score
                }, S.resolve()
              })).error((e=>S.reject(e)))
            }
            (r), c.all([
              S.promise, y.promise
            ]).then((()=>{
              e.students=[
              ]
            })), c.all(L).then(j, W)
          }
          (H)
        }
      ]
    }, 701699:(e, t, r)=>{
      var n=r(248124), o=r(756029), a=r(302543);
      function s(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], n=!0, o=!1, a=void 0;
          try{
            for(var s, i=e[
              Symbol.iterator
            ]
            ();
            !(n=(s=i.next()).done)&&(r.push(s.value), !t||r.length!==t);
            n=!0);
          }
          catch(e){
            o=!0, a=e
          }
          finally{
            try{
              n||null==i.return||i.return()
            }
            finally{
              if(o)throw a
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return i(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function i(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(215195), r(158649), r(658379);
      var c=r(571478);
      e.exports=[
        "$scope", "$http", "toastr", "rollcallRepository", "onlineVideoCompletenessRepository", "$q", "performanceRepository", function(e, t, r, i, l, u, d){
          var p=n("#courseId").val(), f=(c(e), ()=>{
            var r;
            e.rollcallScore=o.copy(e.rollcallScore), e.onlineVideoCompletenessScore=o.copy(e.onlineVideoCompletenessScore), e.performanceScore=o.copy(e.performanceScore), e.activityList=o.copy(e.activities), e.customScoreItemList=o.copy(e.customScoreItems), u.all([
              i.init(), l.init(), d.initScorePercentage()
            ]).then((function(){
              var t=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), r=s(t, 3), n=r[
                0
              ], a=r[
                1
              ], i=r[
                2
              ];
              return e.rollcallSetting=o.copy(n), e.onlineVideoCompletenessSetting=o.copy(a), e.performanceSetting=o.copy(i)
            })), e.referrerItems=[
            ], e.customScoreItemList.forEach((t=>{
              var r={
                key:"custom-".concat(t.id), title:"".concat(t.name, " (").concat(t.score_percentage, "%)"), type:"custom", id:t.id
              };
              e.referrerItems.push(r)
            })), e.activityList.forEach((t=>{
              t.unique_key="".concat(t.type, "-").concat(t.id), r={
                key:"".concat(t.type, "-").concat(t.id), title:"".concat(t.title, " (").concat(t.score_percentage, "%)"), type:t.type, id:t.id
              }, e.referrerItems.push(r)
            })), e.referrerItemsOther=[
              {
                key:"rollcall-0", type:"rollcall", id:0
              }, {
                key:"performance-0", type:"performance", id:0
              }, {
                key:"online_video_completeness-0", type:"online_video_completeness", id:0
              }
            ], e.scorePublishItems={
            };
            return t.get("/api/courses/".concat(p, "/score-publish-items")).success((t=>e.scorePublishItems=t.score_publish_items)).error((function(){
            }))
          });
          return e.isExpired=function(e){
            return!e.is_started||e.is_closed
          }, e.enableSubmit=function(e){
            return e.is_started&&!e.is_closed&&e.referrer_key
          }, e.submit=function(n){
            if(!n.is_closed&&n.is_started){
              var o=a.find(e.referrerItemsOther, {
                key:n.referrer_key
              });
              o||(o=a.find(e.referrerItems, {
                key:n.referrer_key
              }));
              var s=a.map(e.students, (function(t){
                var r=function(t, r){
                  var n=t.referrer_key.split("-")[
                    0
                  ], o=parseInt(t.referrer_key.split("-")[
                    1
                  ]), s=0;
                  if("rollcall"===n)s=e.rollcallScore[
                    r.id
                  ];
                  else if("online_video_completeness"===n)s=e.onlineVideoCompletenessScore[
                    r.id
                  ].score;
                  else if("performance"===n)s=e.performanceScore[
                    r.id
                  ];
                  else if("custom"===n)s=a.find(e.customScoreItemList, {
                    id:o
                  }).scores[
                    r.id
                  ];
                  else{
                    var i=a.find(e.activityList, {
                      unique_key:t.referrer_key
                    });
                    s=e.$parent.getScore(i, r)
                  }
                  return s&&""!==s?s:0
                }
                (n, t), o={
                };
                return o.user_id=t.id, o.user_no=t.user_no, o.score=parseFloat(r), o
              }));
              t.put("/api/score-publish-item-maps", {
                item_id:n.id, course_id:p, referrer_id:o.id, referrer_type:o.type, enrollments:s
              }).success((function(e){
                return r.success(e.message), f()
              })).error((function(e){
                return r.error(e.message), n.submitting=!1
              }))
            }
          }, e.openConfirmPopup=function(t){
            !t.is_closed&&t.is_started&&(e.currentItem=t, n("#confirmation-popup").foundation("reveal", "open"))
          }, e.confirm=function(){
            e.submit(e.currentItem), n("#confirmation-popup").foundation("reveal", "close")
          }, f()
        }
      ]
    }, 703066:(e, t, r)=>{
      r.d(t, {
        $n:()=>F, AW:()=>K, Ad:()=>y, BE:()=>B, BI:()=>R, BT:()=>g, BV:()=>E, DU:()=>S, HE:()=>w, K3:()=>M, LL:()=>x, OW:()=>f, Pj:()=>A, Px:()=>O, Qi:()=>D, U1:()=>j, UT:()=>h, WD:()=>k, YL:()=>_, _i:()=>$, _p:()=>b, br:()=>U, fK:()=>W, g7:()=>N, kX:()=>C, ke:()=>I, m$:()=>m, md:()=>G, np:()=>V, pT:()=>d, rZ:()=>T, rv:()=>v, wm:()=>L, yj:()=>u, z9:()=>p, zc:()=>P
      });
      r(540590), r(418665), r(269193), r(14602);
      var n=r(272505), o=r.n(n), a=r(218831), s=r(920453), i=r(783679), c=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, l=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, u=function(e, t, r){
        return c(void 0, void 0, void 0, (function(){
          var n, c, u, d, p;
          return l(this, (function(l){
            switch(l.label){
              case 0:return n={
                "Content-Type":"multipart/form-data"
              }, (c=new FormData).append("record_type", t), c.append("course_id", "".concat(r)), c.append("file", e), [
                4, o().post("/api/data-import/validation", c, {
                  headers:n
                })
              ];
              case 1:return u=l.sent(), d=(0, a.camelizeKeys)(u.data.error_records), p=(0, s.plainToClass)(i.EC, d, {
                excludeExtraneousValues:!0, exposeDefaultValues:!0
              }), [
                2, {
                  accessKey:u.data.access_key, validateRecords:p, correctCount:u.data.correct_count
                }
              ]
            }
          }))
        }))
      }, d=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            return[
              2, o().post("/api/data-import/chaoxing-score/".concat(t), {
                access_key:e
              })
            ]
          }))
        }))
      }, p=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/courses/".concat(e, "/score-status"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.xj, (0, a.camelizeKeys)(t.data))
              ]
            }
          }))
        }))
      }, f=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t, r, n, s, i;
          return l(this, (function(c){
            switch(c.label){
              case 0:return t=(null===(i=null===(s=window.globalData)||void 0===s?void 0:s.user)||void 0===i?void 0:i.id)?"api":"anonymous-api", r="/".concat(t, "/course/").concat(e, "/score-percentages"), [
                4, o().get(r)
              ];
              case 1:return n=c.sent(), [
                2, (0, a.camelizeKeys)(n.data)
              ]
            }
          }))
        }))
      }, m=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          var r;
          return l(this, (function(n){
            return r="/api/courses/".concat(e, "/score-percentages"), [
              2, o().put(r, t)
            ]
          }))
        }))
      }, v=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t, r, n, a, c;
          return l(this, (function(l){
            switch(l.label){
              case 0:return t=(null===(c=null===(a=window.globalData)||void 0===a?void 0:a.user)||void 0===c?void 0:c.id)?"api":"anonymous-api", r="/".concat(t, "/courses/").concat(e, "/score-percentages-setting"), [
                4, o().get(r)
              ];
              case 1:return n=l.sent(), [
                2, (0, s.plainToClass)(i.hN, n.data, {
                  strategy:"excludeAll"
                })
              ]
            }
          }))
        }))
      }, h=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            return[
              2, o().post("/api/courses/".concat(e, "/score-item-groups"), {
                group_name:t
              })
            ]
          }))
        }))
      }, g=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            return[
              2, o().delete("/api/courses/".concat(e, "/score-item-groups/").concat(t))
            ]
          }))
        }))
      }, _=function(e, t, r){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(n){
            return[
              2, o().put("/api/courses/".concat(e, "/score-item-groups/").concat(t), {
                group_name:r
              })
            ]
          }))
        }))
      }, y=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/courses/".concat(e, "/score-item-groups"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.ho, (0, a.camelizeKeys)(t.data.items))
              ]
            }
          }))
        }))
      }, S=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/courses/".concat(e, "/student/score-item-groups"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.ho, (0, a.camelizeKeys)(t.data.items))
              ]
            }
          }))
        }))
      }, b=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/rollcall-score"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.gt, (0, a.camelizeKeys)(t.data))
              ]
            }
          }))
        }))
      }, w=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/performance-score?isOriginalScore=true"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.TB, (0, a.camelizeKeys)(t.data))
              ]
            }
          }))
        }))
      }, C=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/online-video-completeness/score"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.wk, (0, a.camelizeKeys)(t.data))
              ]
            }
          }))
        }))
      }, I=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/interaction-scores"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i._T, (0, a.camelizeKeys)(t.data.interaction_scores))
              ]
            }
          }))
        }))
      }, x=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/courses/".concat(e, "/exam-scores?no-intercept=true"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i._T, (0, a.camelizeKeys)(t.data.exam_scores))
              ]
            }
          }))
        }))
      }, k=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/homework-scores?fields=id,title,data,start_time,end_time,syllabus_id,module_id,is_announce_score_time_passed,score_percentage,created_at,prerequisites,module_sort,syllabus_sort,sort,publish_type,is_in_progress"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.OK, (0, a.camelizeKeys)(t.data.scores))
              ]
            }
          }))
        }))
      }, A=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/forum-scores"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i._T, (0, a.camelizeKeys)(t.data.forum_scores))
              ]
            }
          }))
        }))
      }, T=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/questionnaire-scores"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i._T, (0, a.camelizeKeys)(t.data.questionnaire_scores))
              ]
            }
          }))
        }))
      }, E=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/classroom-exam-scores"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i._T, (0, a.camelizeKeys)(t.data.classroom_scores))
              ]
            }
          }))
        }))
      }, $=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/student-self-score"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.gq, (0, a.camelizeKeys)(t.data.self_score))
              ]
            }
          }))
        }))
      }, P=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/courses/".concat(e, "/announce-score-settings"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.RI, (0, a.camelizeKeys)(t.data.announce_score_settings))
              ]
            }
          }))
        }))
      }, D=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/courses/".concat(e, "/custom-score-items"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.Y7, (0, a.camelizeKeys)(t.data.custom_score_items))
              ]
            }
          }))
        }))
      }, N=function(e){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(t){
            switch(t.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/exam-student-status"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, R=function(e){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(t){
            switch(t.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/homework-student-status"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, M=function(e){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(t){
            switch(t.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/classroom-student-status"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, O=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            return[
              2, o().put("/api/courses/".concat(e, "/score-item-percentages"), {
                score_item_groups:(0, a.decamelizeKeys)(t)
              })
            ]
          }))
        }))
      }, G=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/performance/score-setting"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.FB, (0, a.camelizeKeys)(t.data.setting))
              ]
            }
          }))
        }))
      }, F=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/online-video-completeness/setting"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.no, (0, a.camelizeKeys)(t.data))
              ]
            }
          }))
        }))
      }, L=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().put("/api/course/".concat(e, "/online-video-completeness/setting"), (0, a.decamelizeKeys)(t))
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, B=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().put("/api/course/".concat(e, "/performance/score-setting"), (0, a.decamelizeKeys)(t))
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, j=function(e){
        return c(void 0, void 0, void 0, (function(){
          var t;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().get("/api/course/".concat(e, "/rollcall/setting"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.plainToClass)(i.eH, (0, a.camelizeKeys)(t.data))
              ]
            }
          }))
        }))
      }, U=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().put("/api/course/".concat(e, "/rollcall/setting"), (0, a.decamelizeKeys)(t))
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, V=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().put("/api/course/custom-score-items/".concat(e), (0, a.decamelizeKeys)(t))
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, K=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, o().post("/api/courses/".concat(e, "/custom-score-item"), (0, a.decamelizeKeys)(t))
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, W=function(e){
        return c(void 0, void 0, void 0, (function(){
          return l(this, (function(t){
            return[
              2, o().delete("/api/course/custom-score-items/".concat(e))
            ]
          }))
        }))
      }
    }, 709936:(e, t, r)=>{
      var n=r(248124);
      function o(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], n=!0, o=!1, a=void 0;
          try{
            for(var s, i=e[
              Symbol.iterator
            ]
            ();
            !(n=(s=i.next()).done)&&(r.push(s.value), !t||r.length!==t);
            n=!0);
          }
          catch(e){
            o=!0, a=e
          }
          finally{
            try{
              n||null==i.return||i.return()
            }
            finally{
              if(o)throw a
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
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(215195), e.exports=()=>({
        restrict:"A", scope:{
          scoreItemWidgetClosed:"&", scoreItemTitle:"&", disabled:"@"
        }, link(e, t, r){
          var a=!1, s=t.next(".score-item-widget");
          n("#score-item-select, #score-state-select").on("multiselectopen", (e=>a=!0)), n("#score-item-select, #score-state-select").on("multiselectclose", (e=>a=!1));
          var i=function(){
            e.$apply((()=>e.scoreItemWidgetClosed()));
            var r=o(Array.from(e.scoreItemTitle()), 2), n=r[
              0
            ], a=r[
              1
            ];
            return t.children("span.item-name").text(n), t.children("span.score-range").text(a)
          };
          return t.click((function(){
            if(!e.disabled)return s.toggleClass("hide"), s.hasClass("hide")?i():void 0
          })), s.on("mouseleave", (function(){
            if(!a){
              setTimeout((function(){
                if(!a)return s.addClass("hide")
              }), 50);
              return i()
            }
          }))
        }
      })
    }, 765321:(e, t, r)=>{
      r.d(t, {
        Gw:()=>l, KJ:()=>u, SR:()=>d, rU:()=>o, sY:()=>a
      });
      var n, o, a, s=r(738645), i=r(152229), c=function(e, t, r, n){
        var o, a=arguments.length, s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t, r):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, n);
        else for(var i=e.length-1;
        i>=0;
        i--)(o=e[
          i
        ])&&(s=(a<3?o(s):a>3?o(t, r, s):o(t, r))||s);
        return a>3&&s&&Object.defineProperty(t, r, s), s
      };
      !function(e){
        e[
          e.INSTRUCTOR=0
        ]
        ="INSTRUCTOR", e[
          e.STUDENT=1
        ]
        ="STUDENT", e[
          e.ADMIN=2
        ]
        ="ADMIN", e[
          e.WG_ADMIN=3
        ]
        ="WG_ADMIN"
      }
      (n||(n={
      })), function(e){
        e.qq="qq", e.wechat="wechat", e.weibo="weibo"
      }
      (o||(o={
      })), function(e){
        e.home="home", e.shipping="shipping"
      }
      (a||(a={
      }));
      var l=function(){
        function e(){
        }
        return c([
          (0, s.v)()
        ], e.prototype, "id", void 0), c([
          (0, s.v)(), (0, i.Z)((function(){
            return u
          }))
        ], e.prototype, "user", void 0), e
      }
      (), u=function(){
        function e(e, t, r, n){
          this.webexAuth=!1, this.larkAuth=!1, this.id=e, this.userNo=t, this.name=r, this.role=n
        }
        return e.prototype.isInstructor=function(){
          return n.INSTRUCTOR===this.role
        }, c([
          (0, s.v)()
        ], e.prototype, "id", void 0), c([
          (0, s.v)()
        ], e.prototype, "userNo", void 0), c([
          (0, s.v)()
        ], e.prototype, "name", void 0), c([
          (0, s.v)()
        ], e.prototype, "role", void 0), c([
          (0, s.v)()
        ], e.prototype, "org", void 0), c([
          (0, s.v)()
        ], e.prototype, "groupName", void 0), c([
          (0, s.v)()
        ], e.prototype, "department", void 0), c([
          (0, s.v)()
        ], e.prototype, "avatarBigUrl", void 0), c([
          (0, s.v)()
        ], e.prototype, "isLeader", void 0), c([
          (0, s.v)()
        ], e.prototype, "sex", void 0), c([
          (0, s.v)()
        ], e.prototype, "education", void 0), c([
          (0, s.v)()
        ], e.prototype, "teachingDate", void 0), c([
          (0, s.v)()
        ], e.prototype, "occupationType", void 0), c([
          (0, s.v)()
        ], e.prototype, "mobilePhone", void 0), c([
          (0, s.v)()
        ], e.prototype, "email", void 0), c([
          (0, s.v)()
        ], e.prototype, "userAttributes", void 0), c([
          (0, s.v)()
        ], e.prototype, "userAddresses", void 0), c([
          (0, s.v)()
        ], e.prototype, "userAuthExternals", void 0), c([
          (0, s.v)()
        ], e.prototype, "klass", void 0), c([
          (0, s.v)()
        ], e.prototype, "program", void 0), c([
          (0, s.v)()
        ], e.prototype, "grade", void 0), c([
          (0, s.v)()
        ], e.prototype, "webexAuth", void 0), c([
          (0, s.v)()
        ], e.prototype, "larkAuth", void 0), e
      }
      (), d=function(){
        function e(){
        }
        return c([
          (0, s.v)()
        ], e.prototype, "id", void 0), c([
          (0, s.v)()
        ], e.prototype, "name", void 0), e
      }
      ()
    }, 769075:(e, t, r)=>{
      r.d(t, {
        A:()=>c
      });
      r(269193);
      var n=r(962893), o=r(679578);
      function a(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var n=Object.getOwnPropertySymbols(e);
          t&&(n=n.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }
      function s(e){
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
            i(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function i(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      o.A.open=function(){
        var e=arguments.length>0&&void 0!==arguments[
          0
        ]
        ?arguments[
          0
        ]
        :{
        };
        return new Promise((t=>{
          var r=new n.default({
            data:()=>({
              visible:!1
            }), render(t){
              var n={
              };
              return e.render&&(n.default=()=>e.render(t, r)), e.renderHeader&&(n.header=()=>e.renderHeader(t, r)), e.renderFooter&&(n.footer=()=>e.renderFooter(t, r)), t(o.A, {
                props:s(s({
                }, e), {
                }, {
                  value:this.visible
                }), scopedSlots:n
              })
            }, methods:{
              show(){
                this.visible=!0
              }, close(){
                this.visible=!1
              }
            }
          });
          r.$mount(), document.body.append(r.$el), r.show();
          var a=r.$children[
            0
          ];
          a.$on("on-ok", (()=>{
            r.visible=!1, t(!0)
          })), a.$on("on-cancel", (()=>{
            r.visible=!1, t(!1)
          })), a.$on("on-hidden", (()=>{
            t(!1), r.$el.remove()
          }))
        }))
      };
      const c=o.A
    }, 772297:(e, t, r)=>{
      r.d(t, {
        ej:()=>s, oM:()=>a, qS:()=>i, rY:()=>u
      });
      r(43148), r(658379);
      var n=r(88595), o=r(731904);
      function a(e){
        return e.map((function(e){
          var t={
            title:e.name, id:e.id
          };
          return e.departments&&e.departments.length>0&&(t.children=a(e.departments)), t
        }))
      }
      function s(e){
        return e.map((function(e){
          var t={
            label:e.name, id:e.id
          };
          return e.departments&&e.departments.length>0&&(t.children=s(e.departments)), t
        }))
      }
      function i(e, t){
        return e.length>0&&!n.A.isAfterByNow(e)?"authz.expired":t.length>0&&n.A.isAfterByNow(t)?"authz.not_started":"authz.normal"
      }
      function c(e){
        var t=[
        ];
        return t.push.apply(t, e), e.forEach((function(e){
          e.departments&&e.departments.length>0&&t.push.apply(t, c(e.departments))
        })), t
      }
      function l(e, t){
        var r=e.filter((function(e){
          return e.parent_id===t
        }));
        return r.forEach((function(t){
          r.push.apply(r, l(e, t.id))
        })), r
      }
      function u(e, t){
        var r=c(e), n=[
        ], a=[
        ];
        return t.forEach((function(e){
          if(!a.includes(e)){
            var t=l(r, e).filter((function(t){
              return t.id!==e
            })).map((function(e){
              return e.id
            }));
            a.push.apply(a, t);
            var o=r.find((function(t){
              return t.id===e
            }));
            n.push(o?o.name:"")
          }
        })), o._.filter(n, (function(e){
          return e.length>0
        })).join(",")
      }
    }, 775579:(e, t, r)=>{
      var n=r(248124), o=r(756029), a=r(302543);
      function s(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return i(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s=!0, c=!1;
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
            c=!0, a=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(c)throw a
            }
          }
        }
      }
      function i(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(43148), r(658379);
      var c=r(571478);
      e.exports=[
        "$scope", "$http", "toastr", function(e, t, r){
          var i=n("#courseId").val(), l=c(e);
          return e.hasItemSelected=()=>a.some(e.scoreItems, "selected"), e.save=function(){
            l.show();
            var o=a.filter(e.scoreItems, "selected");
            return t.put("/api/courses/".concat(i, "/final-examination-items"), {
              items:o
            }).success((function(e){
              return l.hide(), n("#final-examination-item-setting-popup").foundation("reveal", "close"), r.success(e.message)
            })).error((function(e){
              if(l.hide(), e.message)return r.error(e.message)
            }))
          }, function(){
            var r, n, c=o.copy(e.activities), l=o.copy(e.customScoreItems);
            e.scoreItems=[
            ];
            var u, d=s(l);
            try{
              for(d.s();
              !(u=d.n()).done;
              )r=u.value, n={
                key:"custom-".concat(r.id), title:r.name, type:"custom", id:r.id
              }, e.scoreItems.push(n)
            }
            catch(e){
              d.e(e)
            }
            finally{
              d.f()
            }
            var p, f=s(c);
            try{
              for(f.s();
              !(p=f.n()).done;
              )r=p.value, n={
                key:"".concat(r.type, "-").concat(r.id), title:r.title, type:r.type, id:r.id
              }, e.scoreItems.push(n)
            }
            catch(e){
              f.e(e)
            }
            finally{
              f.f()
            }
            return t.get("/api/courses/".concat(i, "/final-examination-items")).success((t=>a.forEach(e.scoreItems, (function(e){
              if(t.final_examination_items.includes(e.key))return e.selected=!0
            })))).error((function(){
            }))
          }
          ()
        }
      ]
    }, 783679:(e, t, r)=>{
      r.d(t, {
        EC:()=>f, FB:()=>E, OK:()=>I, RI:()=>x, TB:()=>_, Y7:()=>b, _T:()=>C, eH:()=>D, gq:()=>w, gt:()=>g, hN:()=>h, ho:()=>T, no:()=>P, wk:()=>S, xj:()=>k
      });
      var n, o=r(731904), a=r(738645), s=r(152229), i=r(510543), c=r(958793), l=(n=function(e, t){
        return(n=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var r in t)Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function r(){
          this.constructor=e
        }
        n(e, t), e.prototype=null===t?Object.create(t):(r.prototype=t.prototype, new r)
      }), u=function(e, t, r, n){
        var o, a=arguments.length, s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t, r):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, n);
        else for(var i=e.length-1;
        i>=0;
        i--)(o=e[
          i
        ])&&(s=(a<3?o(s):a>3?o(t, r, s):o(t, r))||s);
        return a>3&&s&&Object.defineProperty(t, r, s), s
      }, d=function(){
        function e(){
          this.error=""
        }
        return u([
          (0, a.v)()
        ], e.prototype, "userNo", void 0), u([
          (0, a.v)()
        ], e.prototype, "userName", void 0), u([
          (0, a.v)()
        ], e.prototype, "recordType", void 0), u([
          (0, a.v)()
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "error", void 0), e
      }
      (), p=function(){
        function e(){
          this.error=""
        }
        return u([
          (0, a.v)()
        ], e.prototype, "name", void 0), u([
          (0, a.v)()
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "error", void 0), e
      }
      (), f=function(e){
        function t(){
          var t=null!==e&&e.apply(this, arguments)||this;
          return t.records=[
          ], t
        }
        return l(t, e), u([
          (0, a.v)(), (0, s.Z)((function(){
            return p
          }))
        ], t.prototype, "records", void 0), t
      }
      (d), m=function(){
        function e(){
        }
        return u([
          (0, a.v)({
            name:"score_item_id"
          })
        ], e.prototype, "scoreItemId", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            e.value;
            return e.obj.value||0
          }))
        ], e.prototype, "originValue", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value, r=e.obj;
            return"score_type"in r&&"weight"!==r.score_type?0:null!=t?t:0
          }))
        ], e.prototype, "value", void 0), e=u([
          (0, c.n)()
        ], e)
      }
      (), v=function(e){
        function t(){
          var t=null!==e&&e.apply(this, arguments)||this;
          return t.isScored=!0, t.published=!0, t
        }
        return l(t, e), u([
          (0, a.v)()
        ], t.prototype, "title", void 0), u([
          (0, a.v)({
            name:"is_scored"
          })
        ], t.prototype, "isScored", void 0), u([
          (0, a.v)({
            name:"published"
          })
        ], t.prototype, "published", void 0), t=u([
          (0, c.n)()
        ], t)
      }
      (m), h=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        var r;
        return l(t, e), r=t, t.createByType=function(e){
          var t=new r;
          return t.type=e, t
        }, u([
          (0, a.v)()
        ], t.prototype, "type", void 0), u([
          (0, a.v)({
            name:"score_method"
          })
        ], t.prototype, "scoreMethod", void 0), u([
          (0, a.v)({
            name:"punish_score_on_absence"
          })
        ], t.prototype, "punishScoreOnAbsence", void 0), u([
          (0, a.v)({
            name:"score_type"
          })
        ], t.prototype, "scoreType", void 0), u([
          (0, a.v)()
        ], t.prototype, "title", void 0), u([
          (0, a.v)(), (0, s.Z)((function(){
            return v
          }))
        ], t.prototype, "children", void 0), t=r=u([
          (0, c.n)()
        ], t)
      }
      (m), g=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "public", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t&&Number(t)
          }))
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "rollcallCount", void 0), u([
          (0, a.v)()
        ], e.prototype, "rollcallTimes", void 0), u([
          (0, a.v)()
        ], e.prototype, "scored", void 0), e
      }
      (), _=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "scoreAnnounced", void 0), u([
          (0, a.v)()
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "interactionScore", void 0), e
      }
      (), y=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "percentage", void 0), u([
          (0, a.v)()
        ], e.prototype, "score", void 0), e
      }
      (), S=function(){
        function e(){
        }
        return Object.defineProperty(e.prototype, "percentageRange", {
          get:function(){
            if(!this.rule.length)return null;
            for(var e=0, t=this.rule[
              this.rule.length-1
            ].percentage, r=0;
            r<this.rule.length;
            r++){
              var n=this.rule[
                r
              ];
              if(n.percentage<=this.completeRate){
                e=n.percentage, t=r-1>=0?this.rule[
                  r-1
                ].percentage:100;
                break
              }
            }
            return[
              e, t
            ]
          }, enumerable:!1, configurable:!0
        }), u([
          (0, a.v)()
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "completeRate", void 0), u([
          (0, a.v)(), (0, s.Z)((function(){
            return y
          }))
        ], e.prototype, "rule", void 0), e
      }
      (), b=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "id", void 0), u([
          (0, a.v)()
        ], e.prototype, "name", void 0), u([
          (0, a.v)()
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "canAnnounceScore", void 0), e
      }
      (), w=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "totalScore", void 0), u([
          (0, a.v)()
        ], e.prototype, "rawScore", void 0), u([
          (0, a.v)()
        ], e.prototype, "instructorScoreTime", void 0), e
      }
      (), C=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "activityId", void 0), e
      }
      (), I=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "score", void 0), u([
          (0, a.v)()
        ], e.prototype, "activityId", void 0), u([
          (0, a.v)()
        ], e.prototype, "finalScore", void 0), u([
          (0, a.v)()
        ], e.prototype, "studentId", void 0), e
      }
      (), x=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "announceScoreType", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return o.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "announceScoreTime", void 0), u([
          (0, a.v)()
        ], e.prototype, "isAnnounceScoreTimePassed", void 0), u([
          (0, a.v)()
        ], e.prototype, "announceRawScoreType", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return o.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "announceRawScoreTime", void 0), u([
          (0, a.v)()
        ], e.prototype, "isAnnounceRawScoreTimePassed", void 0), e
      }
      (), k=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "autoPublish", void 0), u([
          (0, a.v)()
        ], e.prototype, "canPublishScore", void 0), u([
          (0, a.v)()
        ], e.prototype, "id", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t?o.TimeUtils.toLocalDate(t):null
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "scorePublishDeadline", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t?o.TimeUtils.toLocalDate(t):null
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "scorePublishStart", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t?o.TimeUtils.toLocalDate(t):null
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "publishedAt", void 0), u([
          (0, a.v)()
        ], e.prototype, "scoreStatus", void 0), u([
          (0, a.v)()
        ], e.prototype, "publishedName", void 0), e
      }
      (), A=function(){
        function e(){
          this.scoreMethod="rate", this.rawScore=0, this.weightedScore=0, this.status="", this.externalCode=""
        }
        return u([
          (0, a.v)()
        ], e.prototype, "id", void 0), u([
          (0, a.v)()
        ], e.prototype, "name", void 0), u([
          (0, a.v)()
        ], e.prototype, "percentage", void 0), u([
          (0, a.v)()
        ], e.prototype, "weight", void 0), u([
          (0, a.v)()
        ], e.prototype, "teachingUnitId", void 0), u([
          (0, a.v)()
        ], e.prototype, "customWeightEnabled", void 0), u([
          (0, a.v)()
        ], e.prototype, "scored", void 0), u([
          (0, a.v)()
        ], e.prototype, "type", void 0), u([
          (0, a.v)()
        ], e.prototype, "referrerId", void 0), u([
          (0, a.v)()
        ], e.prototype, "groupId", void 0), u([
          (0, a.v)()
        ], e.prototype, "announceScoreType", void 0), u([
          (0, a.v)()
        ], e.prototype, "announceScoreTime", void 0), u([
          (0, a.v)()
        ], e.prototype, "scoreMethod", void 0), u([
          (0, a.v)()
        ], e.prototype, "isAnnounceScore", void 0), u([
          (0, a.v)()
        ], e.prototype, "externalCode", void 0), e
      }
      (), T=function(){
        function e(){
          this.items=[
          ], this.weightedScore=0, this.importedFrom=""
        }
        return u([
          (0, a.v)()
        ], e.prototype, "id", void 0), u([
          (0, a.v)()
        ], e.prototype, "name", void 0), u([
          (0, a.v)()
        ], e.prototype, "percentage", void 0), u([
          (0, a.v)(), (0, s.Z)((function(){
            return A
          }))
        ], e.prototype, "items", void 0), e
      }
      (), E=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "announceScoreSetting", void 0), u([
          (0, a.v)()
        ], e.prototype, "announceScoreTime", void 0), u([
          (0, a.v)()
        ], e.prototype, "scorePercentage", void 0), u([
          (0, a.v)()
        ], e.prototype, "scoreUnit", void 0), u([
          (0, a.v)()
        ], e.prototype, "standardScore", void 0), e
      }
      (), $=(function(){
        function e(){
        }
        u([
          (0, a.v)()
        ], e.prototype, "scorePercentageLeft", void 0), u([
          (0, a.v)()
        ], e.prototype, "scorePercentageTotal", void 0)
      }
      (), function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "percentage", void 0), u([
          (0, a.v)()
        ], e.prototype, "score", void 0), e
      }
      ()), P=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "id", void 0), u([
          (0, a.v)()
        ], e.prototype, "scoreMethod", void 0), u([
          (0, a.v)(), (0, s.Z)((function(){
            return $
          }))
        ], e.prototype, "customScoreRule", void 0), u([
          (0, a.v)()
        ], e.prototype, "scorePercentage", void 0), u([
          (0, a.v)()
        ], e.prototype, "includeNoneCriterion", void 0), e
      }
      (), D=function(){
        function e(){
        }
        return u([
          (0, a.v)()
        ], e.prototype, "announceScoreTime", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t&&Number(t)
          }))
        ], e.prototype, "arriveLateAsAbsence", void 0), u([
          (0, a.v)()
        ], e.prototype, "autoScoring", void 0), u([
          (0, a.v)()
        ], e.prototype, "autoScoreBasis", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t&&Number(t)
          }))
        ], e.prototype, "lateCombineEarlyAsAbsence", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t&&Number(t)
          }))
        ], e.prototype, "leaveEarlyAsAbsence", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t&&Number(t)
          }))
        ], e.prototype, "maxAbsenceTimes", void 0), u([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return t&&Number(t)
          }))
        ], e.prototype, "punishScoreOnAbsence", void 0), u([
          (0, a.v)()
        ], e.prototype, "scoreMethod", void 0), u([
          (0, a.v)()
        ], e.prototype, "scorePercentage", void 0), e
      }
      ();
      !function(){
        function e(){
        }
        u([
          (0, a.v)()
        ], e.prototype, "scoredAt", void 0), u([
          (0, a.v)()
        ], e.prototype, "scoredBy", void 0), u([
          (0, a.v)()
        ], e.prototype, "deleteFinalScore", void 0), u([
          (0, a.v)()
        ], e.prototype, "score", void 0)
      }
      ()
    }, 790965:(e, t, r)=>{
      e.exports=r.p+"assets/images/large/42a51066e41e4593c871.svg"
    }, 825315:(e, t, r)=>{
      var n=r(795093), o=r(287092), a=r(302543), s=r(248124);
      function i(e, t){
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
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s=!0, i=!1;
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
            i=!0, a=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(i)throw a
            }
          }
        }
      }
      function c(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(594582), r(700533), r(714913), r(269193), r(43148), r(158649), r(868329), e.exports={
        getTimeRangeSplits(e, t, r){
          if(t<e)return[
          ];
          e=n(e, "YYYY-MM-DDTHH:mm:ssZ"), t=n(t, "YYYY-MM-DDTHH:mm:ssZ");
          for(var o=e.startOf(r), a={
            minute:"YYYY,MM,DD,HH,mm", hour:"YYYY,MM,DD,HH", day:"YYYY,MM,DD", month:"YYYY,MM", year:"YYYY"
          }, s=[
          ];
          o<=t;
          )s.push(o.format(a[
            r
          ])), o.add(1, r+"s");
          return s
        }, showDuration(e, t, r){
          return e?t?this.formattedTime(t):r:"- -"
        }, getSplitType(e, t){
          var r=n.duration(n(t, "YYYY-MM-DDTHH:mm:ssZ")-n(e, "YYYY-MM-DDTHH:mm:ssZ"));
          return r.asMinutes()<=120?"minute":r.asHours()<=48?"hour":r.asDays()<=62?"day":r.asDays()<=731?"month":"year"
        }, getCustomRangeXAxis:(e, t)=>e.map((function(e){
          var r=e.split(",");
          return 1===r.length?r[
            0
          ]
          :2===r.length?t[
            parseInt(r[
              1
            ])-1
          ]
          :3===r.length?"".concat(r[
            1
          ], "/").concat(r[
            2
          ]):4===r.length?r[
            3
          ]
          :5===r.length?"".concat(r[
            3
          ], ":").concat(r[
            4
          ]):void 0
        })), withLeading0:e=>e<10?"0".concat(e).slice(-2):"".concat(e), formattedTime(e){
          if(!e)return"";
          var t=this.withLeading0(e%60), r=this.withLeading0((e-t)/60%60), n=this.withLeading0(parseInt((e-t)/60/60, 10));
          return"".concat(n, ":").concat(r, ":").concat(t)
        }, parseDuration(e){
          if(!e)return{
            hours:"00", mins:"00", seconds:"00"
          };
          var t=this.withLeading0(e%60), r=this.withLeading0((e-t)/60%60);
          return{
            hours:this.withLeading0(parseInt((e-t)/60/60, 10)), mins:r, seconds:t
          }
        }, getxAxis(e, t){
          var r=new Date, s=o.range(0, 24, !0);
          e=e||[
            1, 2, 3, 4, 5, 6, 7
          ], t=t||[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
          ];
          var i=r.getDay(), c=r.getHours()+1, l=r.getMonth()+1;
          return{
            day:a.union(s.slice(c, 24), s.slice(0, c)), week:a.union(e.slice(i, 7), e.slice(0, i)), month:a.map(o.range(29, 0, !0), (e=>n().subtract(e, "day").format("MM/DD"))), year:a.union(t.slice(l, 12), t.slice(0, l))
          }
        }, aggregateStudentStatInfo(e, t, r, n){
          var o=e[
            "".concat(t.id)
          ];
          o&&a.map(o, (function(e, o){
            return t.statInfo[
              o
            ]
            =0, a.map(e, (function(e, s){
              r.includes(a.parseInt(s))&&("material"===o?a.map(e, (function(e, r){
                n.includes(a.parseInt(r))&&(t.statInfo[
                  o
                ]
                +=e)
              })):t.statInfo[
                o
              ]
              +=e)
            }))
          }))
        }, collectUploadIds(e){
          var t=[
          ];
          return a.map(e, (function(e){
            if("material"===e.type)return t=t.concat(a.map(e.uploads, "id"))
          })), t
        }, initRangAndxAxisAndSeries(e){
          return e.range="week", e.xAxis=this.getxAxis(e.weekDays, e.months), e.series={
            day:[
            ], week:[
            ], month:[
            ], year:[
            ], dateRange:[
            ]
          }
        }, addOrAppendVisit(e, t){
          if(e){
            var r=t.visits||t;
            return a.map(r, (function(t, r){
              if(r===e.length&&e.push(0), !a.isNaN(t))return e[
                r
              ]
              +=t
            }))
          }
        }, getSeries(e, t){
          return{
            name:e, type:"line", smooth:!0, itemStyle:{
              normal:{
                areaStyle:{
                  type:"default"
                }
              }
            }, data:t, yAxisIndex:arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :0, zlevel:arguments.length>3&&void 0!==arguments[
              3
            ]
            ?arguments[
              3
            ]
            :0
          }
        }, collectStatInfo(e){
          e.activity=a.reduce(a.map([
            "web_link", "material", "homework", "forum", "online_video", "slide", "lesson", "exam", "classroom", "page", "questionnaire", "interaction", "chatroom", "virtual_classroom", "scorm", "lark_meeting", "tencent_meeting"
          ], (t=>e[
            t
          ]
          ||0)), ((e, t)=>e+t));
          return e.all_material=a.reduce(a.map([
            "web_link", "material", "online_video", "slide", "lesson", "page"
          ], (t=>e[
            t
          ]
          ||0)), ((e, t)=>e+t)), e
        }, switchRange(e, t, r){
          e.range=t, a.isEmpty(e.series[
            t
          ])?("day"===t&&stv.courseActivitiesVisitsToday(e.courseId, !0, r), "month"===t&&stv.courseActivitiesVisitsDays(e.courseId, 30, !0, r), "year"===t&&stv.courseActivitiesVisitsYear(e.courseId, !0, r)):this.drawChart(e.visitTypes, e.xAxis[
            t
          ], e.series[
            t
          ], t)
        }, switchRangeForBulletinVisits(e, t, r){
          e.range=t, a.isEmpty(e.series[
            t
          ])?("day"===t&&stv.bulletinVisitsToday(e.courseId, r), "month"===t&&stv.bulletinVisitsDays(e.courseId, 30, r), "year"===t&&stv.bulletinVisitsYear(e.courseId, r)):this.drawChart(e.visitTypes, e.xAxis[
            t
          ], e.series[
            t
          ], t)
        }, emptyVisits(e){
          if("month"===e)return a.map(o.range(1, 30, !0), (()=>0));
          if("day"===e){
            var t=(new Date).getHours()+1;
            return a.map(o.range(1, t, !0), (()=>0))
          }
          if("year"===e){
            var r=(new Date).getMonth()+1;
            return a.map(o.range(1, r, !0), (()=>0))
          }
          return"week"===e?a.map([
            1, 2, 3, 4, 5, 6, 7
          ], (()=>0)):void 0
        }, onGetActivitiesVisits(e, t, r, n){
          var o=[
          ], s=e.range;
          return a.map(t, ((t, n)=>{
            if(a.includes(n, r)){
              var s=a.parseInt(n.substring(n.lastIndexOf("_")+1));
              if(!a.isNaN(s))if(a.find(e.items, {
                id:s
              }))return this.addOrAppendVisit(o, t)
            }
          })), a.isEmpty(o)&&(o=this.emptyVisits(s)), "year"===s&&o.length>12&&o.shift(), e.series[
            s
          ]
          =[
            this.getSeries(e.visitTypes[
              0
            ], o)
          ], n((()=>this.drawChart(e.visitTypes, e.xAxis[
            s
          ], e.series[
            s
          ], s)))
        }, drawCustomRangeChart(e, t, r, n){
          for(var o=t.map((()=>0)), a=0;
          a<t.length;
          a++){
            var s=t[
              a
            ];
            null!=r[
              s
            ]
            &&(o[
              a
            ]
            =r[
              s
            ].visits)
          }
          return e.series.custom=[
            this.getSeries(e.visitTypes[
              0
            ], o)
          ], n((()=>this.drawChart(e.visitTypes, e.xAxis.custom, e.series.custom, "custom")))
        }, drawChart(e, t, n){
          var o=arguments.length>3&&void 0!==arguments[
            3
          ]
          ?arguments[
            3
          ]
          :"week", i=arguments.length>4&&void 0!==arguments[
            4
          ]
          ?arguments[
            4
          ]
          :"statistic-chart", c=arguments.length>5&&void 0!==arguments[
            5
          ]
          ?arguments[
            5
          ]
          :null;
          return Promise.all([
            r.e(39176), r.e(96431), r.e(33489), r.e(6641), r.e(14891), r.e(55789), r.e(19326), r.e(8820), r.e(83170), r.e(50625), r.e(27783), r.e(47219)
          ]).then(r.bind(r, 408820)).then((r=>function(r){
            var l=s("#"+i);
            if(!(n&&n.length>0&&a.some(n, (e=>!a.isEmpty(e.data)))))return l.addClass("no-data");
            l.removeClass("no-data");
            var u=r.init(l[
              0
            ], "macarons"), d=0;
            "day"===o?d=2:"month"===o&&(d=4);
            var p=[
              "#B1D8FC", "#FEC3B5"
            ], f=function(e){
              return isNaN(e)?e:e>=1e6?(e/1e3).toLocaleString("en-US")+"K":parseInt(e).toLocaleString("en-US")
            }, m={
              backgroundColor:"white", color:p, tooltip:{
                show:!0, trigger:"axis", axisPointer:{
                  type:"none"
                }
              }, legend:{
                data:e
              }, grid:{
                borderWidth:0, x:60, x2:50, y:40, y2:60
              }, xAxis:[
                {
                  type:"category", data:t, splitArea:{
                    show:!1
                  }, splitLine:{
                    show:!0, lineStyle:{
                      opacity:.2
                    }
                  }, axisLine:{
                    lineStyle:{
                      color:"#aaaaaa"
                    }
                  }, axisTick:{
                    show:!1, interval:"auto"
                  }, axisLabel:{
                    interval:"auto"
                  }
                }
              ], yAxis:function(e){
                var t=p;
                return 1===e.length&&(t=[
                  "#aaaaaa"
                ]), a.map(e, ((e, r)=>({
                  name:e, type:"value", nameTextStyle:{
                    color:"#333333"
                  }, splitArea:{
                    show:!0, areaStyle:{
                      color:[
                        "rgba(250,250,250,0.3)", "rgba(200,200,200,0.1)"
                      ]
                    }
                  }, axisLine:{
                    lineStyle:{
                      color:t[
                        r
                      ]
                    }
                  }, splitLine:{
                    show:!0, lineStyle:{
                      opacity:.2
                    }
                  }, axisLabel:{
                    margin:5, formatter:f
                  }
                })))
              }
              (e), series:n
            };
            return c&&(m.grid=c), d>0&&(m.xAxis[
              0
            ].axisTick.interval=d, m.xAxis[
              0
            ].axisLabel.interval=d), u.setOption(m), l.on("resizeChart", (()=>u.resize()))
          }
          (r)))
        }, drawBarChart(e, t, n){
          var o=s("#statistic-chart"), i=getComputedStyle(document.documentElement).getPropertyValue("--primary-brand-color-lightened-1").trim();
          if(!n||0===n.length||a.every(n, (e=>0===e)))return o.addClass("no-data");
          o.removeClass("no-data");
          return Promise.all([
            r.e(39176), r.e(96431), r.e(33489), r.e(6641), r.e(14891), r.e(55789), r.e(19326), r.e(8820), r.e(83170), r.e(50625), r.e(27783), r.e(47219)
          ]).then(r.bind(r, 408820)).then((r=>function(r){
            var a=r.init(o[
              0
            ], "macarons"), c={
              backgroundColor:"white", color:[
                i
              ], tooltip:{
                show:!0, trigger:"axis", axisPointer:{
                  type:"none"
                }
              }, grid:{
                borderWidth:0, left:0, right:0, containLabel:!0
              }, xAxis:[
                {
                  type:"category", data:e, axisLabel:{
                    interval:0
                  }, splitLine:{
                    show:!0, lineStyle:{
                      opacity:.2
                    }
                  }, splitArea:{
                    show:!1
                  }, axisLine:{
                    lineStyle:{
                      color:"#aaaaaa"
                    }
                  }, axisTick:{
                    lineStyle:{
                      color:"#aaaaaa"
                    }
                  }
                }
              ], yAxis:[
                {
                  name:t, type:"value", splitArea:{
                    show:!0, areaStyle:{
                      color:[
                        "rgba(250,250,250,0.3)", "rgba(200,200,200,0.1)"
                      ]
                    }
                  }, splitLine:{
                    show:!0, lineStyle:{
                      opacity:.2
                    }
                  }, axisLine:{
                    lineStyle:{
                      color:"#aaaaaa"
                    }
                  }
                }
              ], series:[
                {
                  name:t, type:"bar", barMaxWidth:40, itemStyle:{
                    normal:{
                      barBorderRadius:0
                    }
                  }, data:n
                }
              ]
            };
            return a.setOption(c), s(o[
              0
            ]).data("echarts-instance", a), o.on("resizeChart", (()=>a.resize()))
          }
          (r)))
        }, hasIntersection(e, t){
          var r, n=i(e);
          try{
            for(n.s();
            !(r=n.n()).done;
            ){
              var o=r.value;
              if(t.includes(o))return!0
            }
          }
          catch(e){
            n.e(e)
          }
          finally{
            n.f()
          }
          return!1
        }, findLastTime:(e, t)=>a.isEmpty(e)||a.isEmpty(t)?a.isEmpty(e)?t:e:n(e)>n(t)?e:t, patchStatFunc(e){
          e.findLastTime=this.findLastTime
        }
      }
    }, 831065:(e, t, r)=>{
      r.r(t), r.d(t, {
        default:()=>c
      });
      var n=r(512897), o=r.n(n), a=r(55042), s=r.n(a), i=new(o())({
        id:"loading-spinner", use:"loading-spinner-usage", viewBox:"0 0 50 50", content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" id="loading-spinner">\n    <defs>\n        <mask id="loading-spinner_ring">\n            <circle cx="25" cy="25" r="22" stroke="#FFF" stroke-width="6" fill="" />\n        </mask>\n\n        <filter id="loading-spinner_blur" x="0" y="0">\n            <feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur>\n        </filter>\n\n        <path id="loading-spinner_p" d="M 25, 25\n                        L 62.5, 25\n                        A 37.5, 37.5, 0, 0, 1, 61.6805, 32.796\n                        L 25, 25\n                        A 0, 0, 0, 0, 0, 25, 25 z" fill="" />\n    </defs>\n    <g mask="url(#loading-spinner_ring)" transform="rotate(21.6, 25, 25)">\n        <g filter="url(#loading-spinner_blur)">\n            <use xlink:href="#loading-spinner_p" fill-opacity="0" transform="rotate(0, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.03" transform="rotate(12, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.07" transform="rotate(24, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.1" transform="rotate(36, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.14" transform="rotate(48, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.17" transform="rotate(60, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.2" transform="rotate(72, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.24" transform="rotate(84, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.28" transform="rotate(96, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.31" transform="rotate(108, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.34" transform="rotate(120, 25 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.38" transform="rotate(132, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.41" transform="rotate(144, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.45" transform="rotate(156, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.48" transform="rotate(168, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.52" transform="rotate(180, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.55" transform="rotate(192, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.59" transform="rotate(204, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.62" transform="rotate(216, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.66" transform="rotate(228, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.69" transform="rotate(240, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.7" transform="rotate(252, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.72" transform="rotate(264, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.76" transform="rotate(276, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.79" transform="rotate(288, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.83" transform="rotate(300, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.86" transform="rotate(312, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.93" transform="rotate(324, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.97" transform="rotate(336, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="1" transform="rotate(348, 25, 25)" />\n        </g>\n    </g>\n</symbol>'
      });
      s().add(i);
      const c=i
    }, 833221:(e, t, r)=>{
      r(119167)
    }, 854184:(e, t, r)=>{
      r.d(t, {
        n:()=>l
      });
      var n=r(738645), o=r(510543), a=r(152229), s=r(731904), i=function(e, t, r, n){
        var o, a=arguments.length, s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t, r):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, n);
        else for(var i=e.length-1;
        i>=0;
        i--)(o=e[
          i
        ])&&(s=(a<3?o(s):a>3?o(t, r, s):o(t, r))||s);
        return a>3&&s&&Object.defineProperty(t, r, s), s
      }, c=function(){
        function e(){
        }
        return i([
          (0, n.v)()
        ], e.prototype, "userNo", void 0), i([
          (0, n.v)()
        ], e.prototype, "name", void 0), i([
          (0, n.v)(), (0, o.d)((function(e){
            var t=e.value;
            return s.TimeUtils.millisecondToHms(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "watchTime", void 0), e
      }
      (), l=function(){
        function e(){
          this.watchUsers=[
          ]
        }
        return i([
          (0, n.v)()
        ], e.prototype, "views", void 0), i([
          (0, n.v)()
        ], e.prototype, "viewers", void 0), i([
          (0, n.v)(), (0, o.d)((function(e){
            var t=e.value;
            return s.TimeUtils.millisecondToHms(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "avgViewTime", void 0), i([
          (0, n.v)()
        ], e.prototype, "likes", void 0), i([
          (0, n.v)()
        ], e.prototype, "messages", void 0), i([
          (0, n.v)()
        ], e.prototype, "liveViewers", void 0), i([
          (0, a.Z)((function(){
            return c
          }))
        ], e.prototype, "watchUsers", void 0), e
      }
      ()
    }, 875838:(e, t, r)=>{
      var n=r(248124);
      function o(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return a(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var n=0, o=function(){
            };
            return{
              s:o, n:function(){
                return n>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    n++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, i=!0, c=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return i=e.done, e
          }, e:function(e){
            c=!0, s=e
          }, f:function(){
            try{
              i||null==r.return||r.return()
            }
            finally{
              if(c)throw s
            }
          }
        }
      }
      function a(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      function s(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var n=Object.getOwnPropertySymbols(e);
          t&&(n=n.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }
      function i(e){
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
          t%2?s(Object(r), !0).forEach((function(t){
            c(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function c(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      r(754989);
      var l=r(795093);
      t.E=[
        "$rootScope", "$compile", (e, t)=>({
          restrict:"AE", scope:{
            items:"="
          }, link(r, a, s){
            var c, u=(null!==(c=document.documentElement.getAttribute("lang"))&&void 0!==c?c:"").startsWith("en"), d=u?285:240, p=d/2, f=n("<div>").css({
              display:"none", position:"absolute", background:"white", "border-radius":"3px", "line-height":1.5, "box-shadow":"0px 0px 1px 0px rgba(38, 40, 51, 0.24), 0px 4px 20px 0px rgba(38, 40, 51, 0.16)", color:"#262833", "transform-style":"preserve-3d", "z-index":"true"===s.popupOnTop?9999:null
            }), m=e=>{
              var t={
                position:"absolute", border:"7px solid #E8EAEC", "border-left-color":"transparent", "border-right-color":"transparent", transform:"translateX(-50%)", left:"50%"
              }, r=i(i({
              }, t), {
              }, {
                border:"6px solid white"
              });
              "top"===e?(t[
                "border-top"
              ]
              ="none", t.top="-7px", r[
                "border-top"
              ]
              ="none", r.top="-5px"):(t[
                "border-bottom"
              ]
              ="none", t.bottom="-7px", r[
                "border-bottom"
              ]
              ="none", r.bottom="-5px");
              var o=n("<div>").css(t), a=n("<div>").css(r);
              return n("<div>").append(o, a).children()
            }, v=()=>n("<div>".concat(e.$t("courseScore.finalScoreChangeLog.title"), "</div>")).css({
              "border-bottom":"1px solid #E8EAEC", padding:"8px 12px", color:"#70748C"
            }), h=()=>{
              var t, a=n("<div>").css({
                padding:"0 12px", margin:"8px 0", "max-height":"248px", "overflow-y":"auto", width:"".concat(d, "px")
              }), s=o(r.items);
              try{
                for(s.s();
                !(t=s.n()).done;
                ){
                  var i=t.value, c=n("<div>").css({
                    padding:"8px"
                  }), p=n("<div>").text(l(i.scored_at).format("YYYY-MM-DD HH:mm:ss")).css({
                    color:"#70748C", "font-size":"13px"
                  }), f=n("<div>"), m=n('<span style="display: inline-block; max-width: 85px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; vertical-align: middle;" tipsy-literal="'.concat(i.scored_by, '" tipsy-ellipsis="yes">')).text(i.scored_by), v=i.delete_final_score?"":e.$t("courseScore.finalScoreChangeLog.changeTo"), h=i.delete_final_score?"".concat(e.$t("courseScore.finalScoreChangeLog.clearScore")):"".concat(Number(i.score)).concat(u?" ":"").concat(e.$t("courseScore.finalScoreChangeLog.points")), g=n("<span>").text(v).css({
                    color:"#70748C", margin:i.delete_final_score?"0 0.3em":"0 0.6em"
                  }), _=n("<span>").text(h);
                  c.append(p, f), f.append(m, g, _), a.append(c)
                }
              }
              catch(e){
                s.e(e)
              }
              finally{
                s.f()
              }
              return a
            }, g=!1, _=e=>{
              e.stopPropagation(), (e=>{
                if(!g)return!1;
                var t=f.offset(), r=t.top, n=t.left, o=f.outerHeight(), a=f.outerWidth();
                return e.clientX>=n&&e.clientX<=n+a&&e.clientY>=r&&e.clientY<=r+o
              })(e)||y()
            }, y=()=>{
              f.hide(), g=!1, document.removeEventListener("click", _, !0)
            };
            f.append(m("top"), v(), h()), a.css("cursor", "pointer"), n(document.documentElement).append(t(f)(r)), a.on("click", (e=>{
              var n, o, s, i, c, l;
              e.stopPropagation(), g?y():(n=a.offset(), o=n.left, s=n.top, i=a.outerHeight(), c=a.outerWidth(), l="top", window.innerHeight-s-i/2-100<f.outerHeight()?(f.css({
                left:o+c/2-p, top:s-f.outerHeight()-10
              }), l="bottom"):f.css({
                left:o+c/2-p, top:s+i+10
              }), f.html(null).append(m(l), v(), h()), t(f)(r), f.show(), g=!0, document.addEventListener("click", _, !0))
            }))
          }
        })
      ]
    }, 903686:(e, t, r)=>{
      var n=r(302543);
      function o(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], n=!0, o=!1, a=void 0;
          try{
            for(var s, i=e[
              Symbol.iterator
            ]
            ();
            !(n=(s=i.next()).done)&&(r.push(s.value), !t||r.length!==t);
            n=!0);
          }
          catch(e){
            o=!0, a=e
          }
          finally{
            try{
              n||null==i.return||i.return()
            }
            finally{
              if(o)throw a
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
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(215195), r(43148), r(158649), e.exports=[
        "multiSelect", function(e){
          var t=function(e, t){
            var r=function(e, t){
              if(t.score_item===s.scoreItemRollcallScore)return s.rollcallScore[
                e.id
              ];
              if(t.score_item===s.scoreItemPerformanceScore)return s.performanceScore[
                e.id
              ];
              if(t.score_item===s.scoreItemVideoCompleteness)return s.videoCompletenessScore[
                e.id
              ].score;
              var r=o(Array.from(t.score_item.split("-")), 2), a=r[
                0
              ], i=r[
                1
              ];
              if("custom"===i)return n.find(s.customScoreItems, {
                id:parseInt(a)
              }).scores[
                e.id
              ];
              var c, l=n.find(s.activities, {
                id:parseInt(a), type:i
              });
              return l&&(c=n.find(l.scores, {
                student_id:e.id
              })), c?c.score:void 0
            }
            (e, t);
            if(t.score_state===s.scoreStateNoScore)return void 0===r;
            var a=isNaN(parseFloat(t.score_low_limit))?0:parseFloat(t.score_low_limit);
            return(isNaN(parseFloat(t.score_upper_limit))?100:parseFloat(t.score_upper_limit))>=r&&r>=a
          }, r=function(e, t){
            if([
              s.scoreItemNoSpecified, s.scoreItemRollcallScore, s.scoreItemVideoCompleteness, s.scoreItemPerformanceScore
            ].includes(e.score_item))return t[
              e.score_item
            ];
            var r=o(Array.from(e.score_item.split("-")), 2), a=r[
              0
            ], i=r[
              1
            ];
            if("custom"===i)return n.find(s.customScoreItems, {
              id:parseInt(a)
            }).name;
            var c=n.find(s.activities, {
              id:parseInt(a), type:i
            });
            return c?c.title:void 0
          }, a=function(e, t){
            if(e.score_state===s.scoreStateAll||e.score_state===s.scoreStateNoScore)return t[
              e.score_state
            ];
            var r=isNaN(parseFloat(e.score_low_limit))?0:parseFloat(e.score_low_limit), n=isNaN(parseFloat(e.score_upper_limit))?100:parseFloat(e.score_upper_limit);
            return"".concat(r, "-").concat(n)
          }, s={
            scoreItemVideoCompleteness:"-3", scoreItemPerformanceScore:"-2", scoreItemRollcallScore:"-1", scoreItemNoSpecified:"0", scoreStateAll:"0", scoreStateHasScore:"1", scoreStateNoScore:"2", activities:[
            ], customScoreItems:[
            ], rollcallScore:[
            ], performanceScore:[
            ], videoCompletenessScore:{
            }, getScoreFilterStr:(e, t, n)=>[
              r(e, t), a(e, n)
            ], initData(t, r, n, o, a, s){
              return this.activities=r, this.customScoreItems=n, this.rollcallScore=o, this.performanceScore=s, this.videoCompletenessScore=a, function(t, r){
                var n=arguments.length>2&&void 0!==arguments[
                  2
                ]
                &&arguments[
                  2
                ];
                return e.multiSelect(t, r, n)
              }
              (t, 0, !1)
            }, isStudentMatch(e, r){
              return r.score_item===this.scoreItemNoSpecified||r.score_state===s.scoreStateAll||t(e, r)
            }
          };
          return s
        }
      ]
    }, 909550:(e, t, r)=>{
      var n=r(248124), o=r(302543), a=r(795093);
      r(906048), r(658379), e.exports=[
        "$scope", "$http", "toastr", function(e, t, r){
          e.updateTotalScoreSettings={
            updateMode:1, confirmDelete:!1, confirmUpdate:!1
          }, e.updateTotalScoreMode={
            updateFinalScore:"update_final_score", deleteFinalScore:"delete_final_score"
          };
          var s=n("#courseId").val();
          e.confirm=()=>{
            var i, c;
            "update_final_score"===e.updateTotalScoreSettings.updateMode?(i={
              course_id:s, enrollments:[
              ]
            }, c=[
            ], o.forEach(e.students, (function(t){
              !0!==t.published&&(c.push(t.enrollment_id), i.enrollments.push({
                enrollment_id:t.enrollment_id, total_score:t.raw_score
              }), t.total_score=t.raw_score, t.dissertation_finished="finish_dissertation_rule"===e.scoreTypeSettings.score_type||void 0)
            })), t.put("/api/enrollments/total-score?mode=".concat(e.updateTotalScoreSettings.updateMode), i).success((function(t){
              n("#update-all-students-total-score").foundation("reveal", "close");
              var o=t.data;
              e.students.forEach((e=>{
                if(c.includes(e.enrollment_id)){
                  var t=o[
                    e.enrollment_id
                  ];
                  t&&(e.instructor_score_time=a().toString(), e.original_total_score=e.raw_score, e.data=t)
                }
              })), r.success(t.message);
              var s={
                mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:statistics.enums.ScoreAction.update_final_score, module:statistics.enums.TeachingActionModule.score
              };
              statistics.track(s)
            })).error((function(){
            }))):function(){
              var a={
                course_id:s, enrollments:[
                ]
              }, i=[
              ];
              o.forEach(e.students, (function(t){
                !1===e.checkScoreIsNaN(t.total_score)&&!0!==t.published&&(i.push(t.enrollment_id), a.enrollments.push({
                  enrollment_id:t.enrollment_id, total_score:0
                }), t.total_score=NaN, t.dissertation_finished="finish_dissertation_rule"!==e.scoreTypeSettings.score_type&&void 0)
              })), t.put("/api/enrollments/total-score?mode=".concat(e.updateTotalScoreSettings.updateMode), a).success((function(t){
                n("#update-all-students-total-score").foundation("reveal", "close");
                var o=t.data;
                e.students.forEach((e=>{
                  if(i.includes(e.enrollment_id)){
                    var t=o[
                      e.enrollment_id
                    ];
                    t&&(e.instructor_score_time=null, e.original_total_score=NaN, e.data=t)
                  }
                })), r.success(t.message);
                var a={
                  mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:statistics.enums.ScoreAction.update_final_score, module:statistics.enums.TeachingActionModule.score
                };
                statistics.track(a)
              })).error((function(){
              }))
            }
            ()
          }, e.confirmUpdateFinalScore=function(){
            return"update_final_score"===e.updateTotalScoreSettings.updateMode&&e.updateTotalScoreSettings.confirmUpdate||"delete_final_score"===e.updateTotalScoreSettings.updateMode&&e.updateTotalScoreSettings.confirmDelete
          }, e.$watch("updateTotalScoreSettings.updateMode", (function(){
            e.updateTotalScoreSettings.confirmDelete=e.updateTotalScoreSettings.confirmUpdate=!1
          }));
          e.updateTotalScoreSettings={
            updateMode:"update_final_score"
          }
        }
      ]
    }, 919902:(e, t, r)=>{
      var n=r(248124), o=r(302543);
      r(658379);
      var a=r(571478);
      e.exports=[
        "$scope", "$http", "$routeParams", "toastr", "api", function(e, t, r, s, i){
          var c=a(e), l=n("#courseId").val();
          e.warninigStudentsCount=null, e.currentWarningStudent={
          }, e.backUrlList=[
          ], e.editWarningStatus=function(t){
            return delete e.errors, e.currentWarningStudent=t
          }, e.deleteWarningsStatus=function(t){
            return i.deleteWarningStudent(l, t, (function(r){
              return o.remove(e.warninigStudents, {
                id:t
              }), e.warninigStudentsCount=e.warninigStudents.length, s.success(r.message)
            }), (function(){
            }))
          }, e.commitWarning=function(){
            return i.updateWarningThreshold(e.courseId, e.warningId, (function(t){
              return e.warning.threshold_status="submit", s.success(t.message)
            }), (function(){
            }))
          }, e.saveComment=function(){
            var t={
              course_id:e.courseId, comment:e.currentWarningStudent.comment, display:e.currentWarningStudent.display
            };
            return c.show(), i.updateWarningStudentComment(e.currentWarningStudent.id, t, (function(){
              return c.hide(), u()
            }), (function(t){
              return c.hide(), e.errors=t.errors
            }))
          };
          var u=()=>n("#warning-status-popup").foundation("reveal", "close"), d=function(){
            return i.getWarningStudents(e.courseId, e.warningId, "id,enrollment,notify_status,comment,data", (function(t){
              return e.warninigStudentsCount=t.warning_students.length, e.warninigStudents=o.forEach(t.warning_students, (function(t){
                return t.name=t.enrollment.user.name, t.user_no=t.enrollment.user.user_no, function(t){
                  return t.warning_status_name="", o.forEach(t.data.warnings, (function(r, n){
                    return t.warning_status_name.length>0?t.warning_status_name+=", ".concat(e.warningStatusName[
                      n
                    ]):t.warning_status_name=e.warningStatusName[
                      n
                    ]
                  }))
                }
                (t)
              }))
            }), (function(){
            }))
          };
          return e.courseId=l, e.warningId=o.parseInt(r.warningId), i.getWarning(e.courseId, e.warningId, (function(t){
            return e.warning=t, e.warning.starting=e.warning.is_started&&!e.warning.is_closed, d()
          }), (function(){
          })), function(){
            e.backUrlList=[
            ];
            var t={
              url:"/course/".concat(l, "/score#/"), name:"score"
            }, r={
              url:"/course/".concat(l, "/score#/score/warnings"), name:"warnings"
            };
            return e.backUrlList.push(t), e.backUrlList.push(r), e.backUrlList.push({
              url:"/", name:"currentWarning"
            })
          }
          ()
        }
      ]
    }, 941096:(e, t, r)=>{
      var n=r(302543), o=r(793110), a=r(248124);
      r(210557), r(334867), r(43148), r(658379);
      var s=r(111172);
      e.exports=[
        "$rootScope", "$scope", "$http", "toastr", "$filter", "$location", "modelHelper", function(e, t, r, i, c, l, u){
          t.tableCellWidth=100, t.tableCellHeight=56, t.ui.scoreFilterSelected=t.ui.toggleShowFinalExamination, t.predicate="", t.reverse=!1;
          var d=c("orderBy");
          t.pageSize=100, t.pagination=s(t, l, "students");
          var p=function(e){
            t.pages=e.pages, t.pagedStudents=e.data, m()
          };
          t.changePage=e=>{
            t.pagination.changePageAtFrontEnd(e, t.filteredStudents, p)
          };
          var f=function(){
            t.ui.allSelected=!n.find(t.pagedStudents, {
              selected:!1, published:!1
            })
          };
          t.selectAllStudents=function(){
            n.each(t.pagedStudents, (function(e){
              e.selected||e.published||!t.ui.allSelected?e.selected&&!t.ui.allSelected&&function(e){
                e.selected=!1, t.selectedStudent.ids=t.selectedStudent.ids.filter((t=>t!==e.id))
              }
              (e):function(e){
                e.selected=!0, t.selectedStudent.ids.push(e.id)
              }
              (e)
            }))
          };
          var m=function(){
            n.each(t.pagedStudents, (function(e){
              e.selected=t.selectedStudent.ids.includes(e.id)
            })), f()
          }, v=e=>t.enableUpdateAllStudentsFinalScore&&"finish_dissertation_rule"==t.scoreTypeSettings.score_type&&!e.dissertation_finished;
          t.changeSelectStudent=function(e){
            e.selected?t.selectedStudent.ids.push(e.id):t.selectedStudent.ids=t.selectedStudent.ids.filter((t=>t!==e.id)), f()
          }, t.$watch("sharedBetweenScopes.filteredStudents", (()=>g())), t.$on("studentChange", (()=>{
            t.hasStudents=t.sharedBetweenScopes.students.length>0
          })), t.studentsReadyPromise.then((function(){
            return t.hasStudents=t.sharedBetweenScopes.students.length>0, g()
          })), t.changeSort=function(e){
            return t.isEqual(e, t.predicate)?t.reverse=!t.reverse:(t.predicate=e, t.reverse=!1), g()
          };
          var h=function(e, r){
            if(!t.predicate)return e.index<r.index?-1:1;
            var n=Number(e.value), o=Number(r.value);
            return isNaN(n)||isNaN(o)?e.value.localeCompare(r.value):n<o?-1:1
          }, g=function(){
            return t.filteredStudents=d(t.sharedBetweenScopes.filteredStudents, t.predicate, t.reverse, h), t.changePage(1)
          };
          t.isEqual=(e, t)=>n.isEqual(e, t), t.getStudentInfo=u.getBelongTo, t.isScoreChanged=e=>t.courseScoresPublished&&parseFloat(e.total_score)!==parseFloat(e.original_total_score), t.isExceptionalCaseChanged=e=>t.courseScoresPublished&&e.exceptional_case!==e.original_exceptional_case, t.updateTotalScore=function(e){
            e.total_score||(e.total_score=0);
            var n={
              total_score:e.total_score, delete_instructor_score_time:!1
            };
            return v(e)&&(n.total_score=0, n.delete_instructor_score_time=!0), r.put("/api/enrollment/".concat(e.enrollment_id, "/total-score"), n).success((function(r){
              e.scored_instructor=r.scored_instructor, e.instructor_score_time=r.instructor_score_time, e.original_total_score=e.total_score, e.data=r.data, v(e)&&(e.total_score=NaN);
              var n={
                mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:statistics.enums.ScoreAction.update_final_score, module:statistics.enums.TeachingActionModule.score
              };
              return statistics.track(n), t.$broadcast("drawChart")
            })).error((function(){
            }))
          }, t.allowEditAfterMakeUpScore=()=>{
            var e=!0;
            return t.customScoreItems.forEach((t=>{
              "考試成績"===t.name&&(e=new o(t.score_percentage||0)>0)
            })), e
          }, t.updateAfterMakeUpScore=function(e){
            e.after_make_up_score||(e.after_make_up_score=null);
            var t={
              after_make_up_score:e.after_make_up_score
            };
            return r.put("/api/enrollment/".concat(e.enrollment_id, "/after-makeup-score"), t).success((function(t){
              e.scored_instructor=t.scored_instructor, e.instructor_score_time=t.instructor_score_time, e.original_total_score=e.total_score, e.data=t.data
            })).error((function(){
            }))
          }, t.saveScoreComment=e=>r.put("/api/enrollment/".concat(e.enrollment_id, "/score-comment"), {
            score_comment:e.score_comment
          }), t.savingStatus={
          };
          var _=function(e, r){
            return r?t.savingStatus[
              e.id
            ]
            =!0:delete t.savingStatus[
              e.id
            ]
          }, y=function(e, r, n, s){
            var i;
            r=new o(r||0);
            var c=new o(n||0).times(r).dividedBy(100), l=new o(s||0).times(r).dividedBy(100);
            e.rawScoreNotFixed?(i=l.minus(c), e.rawScoreNotFixed=parseFloat(new o(e.rawScoreNotFixed).plus(i)), e.raw_score=e.rawScoreNotFixed.toFixed(1)):(c=c.toDecimalPlaces(1), i=(l=l.toDecimalPlaces(1)).minus(c), e.raw_score=parseFloat(new o(e.raw_score).plus(i).toFixed(1))), e.instructor_score_time||t.courseScoresPublished||t.enableUpdateAllStudentsFinalScore||(e.total_score=e.raw_score), t.totalScoreInteger&&(e.total_score=Math.round(e.total_score));
            var u=a("#total-score-".concat(e.id));
            return u.hasClass("process-error")&&u.removeClass("process-error"), t.$broadcast("drawChart"), _(e, !1)
          };
          return t.saveRollcallScore=function(e, n){
            return _(e, !0), r.put("/api/enrollment/".concat(e.enrollment_id, "/rollcall-score"), {
              rollcall_score:t.rollcallScore[
                e.id
              ]
            }).success((()=>y(e, t.rollcallSetting.score_percentage, n, t.rollcallScore[
              e.id
            ]))).error((()=>_(e, !1)))
          }, t.saveCustomScoreItemScore=function(e, t, n){
            return _(t, !0), r.put("/api/custom-score-items/".concat(e.id, "/students/").concat(t.id, "/score"), {
              score:e.scores[
                t.id
              ]
            }).success((()=>y(t, e.score_percentage, n, e.scores[
              t.id
            ]))).error((()=>_(t, !1)))
          }, t.renderDpPosition=function(e){
            var t=e.currentTarget, r=t.parentElement, n=document.querySelector(".score-body"), o=r.querySelector(".dropdown-list"), a={
              left:t.offsetLeft-n.scrollLeft+"px"
            };
            o.style.left=a.left
          }, t.updateExceptionalCase=function(e, n){
            if(e.exceptional_case!==n)return t.updateEditingStatus("exceptional_case", e.id, "processing"), t.showFloatingMessage("processing", "", !1), r.put("/api/enrollment/".concat(e.enrollment_id, "/exceptional-case"), {
              exceptional_case:n
            }).success((function(r){
              return e.exceptional_case=n, e.original_exceptional_case=n, t.showFloatingMessage("process-success", r.message), t.updateEditingStatus("exceptional_case", e.id, null)
            })).error((function(r, n){
              return 400===n?t.showFloatingMessage("process-valid-error", r.message, !1):t.showFloatingMessage("process-failed-no-retry", "", !1), t.updateEditingStatus("exceptional_case", e.id, "process-error")
            }))
          }, t.inviteUsers=()=>e.invitingCourseUsers=!0, t.editCustomScoreItem=t=>e.$broadcast("bindCustomScoreItemForEdit", t), t.deleteCustomScoreItem=function(e){
            return r.delete("/api/course/custom-score-items/".concat(e.id)).success((function(e){
              return i.success(e.message), t.$emit("customScoreItemChanged")
            })).error((e=>i.error(e.message)))
          }
        }
      ]
    }, 944315:(e, t, r)=>{
      r.d(t, {
        w:()=>d
      });
      r(540590), r(418665), r(700533), r(714913), r(269193), r(14602);
      var n=r(595738), o=r(793110), a=r(552979), s=r(703066), i=r(783679), c=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, l=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, u=function(e, t, r){
        if(r||2===arguments.length)for(var n, o=0, a=t.length;
        o<a;
        o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t, 0, o)), n[
          o
        ]
        =t[
          o
        ]);
        return e.concat(n||Array.prototype.slice.call(t))
      }, d=function(e){
        var t=(0, n.KR)(), r=(0, n.KR)(), d=(0, n.KR)(), p=(0, n.KR)(), f=(0, n.KR)(), m=(0, n.KR)(), v=(0, n.KR)(), h=(0, n.KR)(), g=(0, n.KR)(), _=(0, n.KR)(), y=(0, n.KR)([
        ]), S=(0, n.KR)([
        ]), b=((0, n.KR)(), (0, n.KR)()), w=(0, n.KR)(!0), C=(0, n.EW)((function(){
          return u(u([
            t.value, r.value, d.value, p.value, f.value, m.value, v.value, h.value, g.value, _.value
          ], y.value, !0), S.value, !0)
        })), I=new o.Decimal(0), x=function(){
          return C.value.reduce((function(e, t){
            return"weight"!==t.scoreType&&t.children?t.children?e.plus(t.children.reduce((function(e, t){
              return e.plus(new o.Decimal(t.value||0))
            }), new o.Decimal(0))):e:e.plus(new o.Decimal(t.value||0))
          }), new o.Decimal(0))
        }, k=(0, n.EW)((function(){
          var e, t, r, n, a=x().plus(I).toNumber();
          return{
            used:a, left:new o.Decimal(null!==(t=null===(e=b.value)||void 0===e?void 0:e.scorePercentageTotal)&&void 0!==t?t:100).minus(a).toNumber(), unpublished:new o.Decimal(null!==(n=null===(r=b.value)||void 0===r?void 0:r.unpublishedPercentage)&&void 0!==n?n:0).toNumber()
          }
        })), A=(0, n.EW)((function(){
          var n, o, s, c, l, b, w, C, I, x, k, A, T, E=u(u([
            {
              name:a.default.t("scorePercentageSetting.rollcall"), icon:"score-rollcall", desc:"count"===(null===(n=v.value)||void 0===n?void 0:n.scoreMethod)?a.default.t("scorePercentageSetting.rollcallScoreWithRule", [
                null!==(o=v.value.punishScoreOnAbsence)&&void 0!==o?o:0
              ]):a.default.t("scorePercentageSetting.rollcallScoreMethods"), setting:null!==(s=v.value)&&void 0!==s?s:{
              }, btnText:a.default.t("scorePercentageSetting.scoreSetting"), type:"rollcall"
            }, {
              name:a.default.t("activityType.homework"), icon:"score-homework", desc:a.default.t("scorePercentageSetting.homeworkScoreMethods"), type:"activity", setting:null!==(c=t.value)&&void 0!==c?c:i.hN.createByType("homework_activity")
            }, {
              name:a.default.t("activityType.exam"), icon:"score-exam", desc:a.default.t("scorePercentageSetting.examScoreMethods"), type:"activity", setting:null!==(l=r.value)&&void 0!==l?l:i.hN.createByType("exam_activity")
            }, {
              name:a.default.t("activityType.forum"), icon:"score-forum", desc:a.default.t("scorePercentageSetting.forumScoreMethods"), type:"activity", setting:null!==(b=d.value)&&void 0!==b?b:i.hN.createByType("forum_activity")
            }, {
              name:a.default.t("activityType.classroom"), icon:"score-classroom", desc:a.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(w=p.value)&&void 0!==w?w:i.hN.createByType("classroom_exam_activity")
            }, {
              name:a.default.t("activityType.questionnaire"), icon:"score-questionnaire", desc:a.default.t("scorePercentageSetting.questionnaireMethods"), type:"activity", setting:null!==(C=f.value)&&void 0!==C?C:i.hN.createByType("questionnaire_activity")
            }, {
              name:a.default.t("activityType.interaction"), icon:"score-interaction", desc:a.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(I=m.value)&&void 0!==I?I:i.hN.createByType("interaction_activity")
            }, {
              name:a.default.t("web_link"), icon:"weblink-icon", desc:a.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(x=g.value)&&void 0!==x?x:i.hN.createByType("web_link_activity")
            }, {
              name:a.default.t("scorePercentageSetting.onlineVideo"), icon:"score-online-video", desc:"custom"===(null===(k=h.value)||void 0===k?void 0:k.scoreMethod)?a.default.t("scorePercentageSetting.customRate"):a.default.t("scorePercentageSetting.onlineVideoScoreMethods"), setting:null!==(A=h.value)&&void 0!==A?A:{
              }, type:"onlineVideo", btnText:a.default.t("scorePercentageSetting.scoreSetting")
            }, {
              name:a.default.t("performance"), icon:"score-performance", desc:a.default.t("scorePercentageSetting.performanceScoreMethods"), setting:null!==(T=_.value)&&void 0!==T?T:{
              }, type:"performance", btnText:a.default.t("scorePercentageSetting.scoreSetting")
            }
          ], y.value.map((function(e){
            return{
              name:e.title, icon:"score-custom", desc:"", setting:e, type:"custom"
            }
          })), !0), S.value.map((function(e){
            return{
              name:e.title, icon:"score-virtual-experiment", desc:"", setting:e, type:"virtual-experiment"
            }
          })), !0);
          return e.useWeblink||(E=E.filter((function(e){
            return"weblink-icon"!==e.icon
          }))), e.usePerformance||(E=E.filter((function(e){
            return"performance"!==e.type
          }))), e.useRollcall||(E=E.filter((function(e){
            return"rollcall"!==e.type
          }))), E
        }));
        (0, n.sV)((function(){
          return c(void 0, void 0, void 0, (function(){
            var n, a, u, C, k, A, T, E, $, P, D, N, R, M, O;
            return l(this, (function(G){
              switch(G.label){
                case 0:return w.value=!0, [
                  4, (F=e.courseId, c(void 0, void 0, void 0, (function(){
                    var e, t, r;
                    return l(this, (function(n){
                      switch(n.label){
                        case 0:return[
                          4, Promise.all([
                            (0, s.OW)(F), (0, s.rv)(F)
                          ])
                        ];
                        case 1:return e=n.sent(), t=e[
                          0
                        ], r=e[
                          1
                        ], [
                          2, {
                            coursePercentage:t, activityScoreSettings:r
                          }
                        ]
                      }
                    }))
                  })))
                ];
                case 1:return n=G.sent(), a=n.coursePercentage, u=n.activityScoreSettings, y.value=u.filter((function(e){
                  return"custom"===e.type
                })), S.value=u.filter((function(e){
                  return"virtual_experiment_activity"===e.type
                })), v.value=null!==(C=u.find((function(e){
                  return"rollcall_score_setting"===e.type
                })))&&void 0!==C?C:i.hN.createByType("rollcall_score_setting"), h.value=null!==(k=u.find((function(e){
                  return"online_video_completeness_score_setting"===e.type
                })))&&void 0!==k?k:i.hN.createByType("online_video_completeness_score_setting"), _.value=null!==(A=u.find((function(e){
                  return"performance_score_setting"===e.type
                })))&&void 0!==A?A:i.hN.createByType("performance_score_setting"), b.value=a, t.value=null!==(T=u.find((function(e){
                  return"homework_activity"===e.type
                })))&&void 0!==T?T:i.hN.createByType("homework_activity"), r.value=null!==(E=u.find((function(e){
                  return"exam_activity"===e.type
                })))&&void 0!==E?E:i.hN.createByType("exam_activity"), d.value=null!==($=u.find((function(e){
                  return"forum_activity"===e.type
                })))&&void 0!==$?$:i.hN.createByType("forum_activity"), p.value=null!==(P=u.find((function(e){
                  return"classroom_exam_activity"===e.type
                })))&&void 0!==P?P:i.hN.createByType("classroom_exam_activity"), f.value=null!==(D=u.find((function(e){
                  return"questionnaire_activity"===e.type
                })))&&void 0!==D?D:i.hN.createByType("questionnaire_activity"), m.value=null!==(N=u.find((function(e){
                  return"interaction_activity"===e.type
                })))&&void 0!==N?N:i.hN.createByType("interaction_activity"), g.value=null!==(R=u.find((function(e){
                  return"web_link_activity"===e.type
                })))&&void 0!==R?R:i.hN.createByType("web_link_activity"), I=new o.Decimal(null!==(M=a.scorePercentageTotal)&&void 0!==M?M:100).minus(x()).minus(null!==(O=a.scorePercentageLeft)&&void 0!==O?O:0), w.value=!1, [
                  2
                ]
              }
              var F
            }))
          }))
        }));
        return{
          categories:A, currentScorePercentage:k, rollcallSetting:v, onlineVideoSetting:h, performanceSetting:_, loading:w, getPercentageData:function(){
            return A.value.map((function(e){
              return e.setting
            })).filter((function(e){
              var t;
              return void 0!==e.value||!!(null===(t=e.children)||void 0===t?void 0:t.length)
            }))
          }
        }
      }
    }, 945208:(e, t, r)=>{
      r.r(t), r.d(t, {
        default:()=>c
      });
      var n=r(512897), o=r.n(n), a=r(55042), s=r.n(a), i=new(o())({
        id:"avatar", use:"avatar-usage", viewBox:"0 0 32 32", content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" id="avatar">\n<path fill="currentColor" class="st0" d="M27.5,27.2c1.5-1.5,2.6-3.2,3.4-5.1c0,0,0-0.1,0-0.1c0.2-0.4,0.3-0.9,0.5-1.4c0-0.1,0-0.2,0.1-0.3\n\tc0.1-0.4,0.2-0.8,0.3-1.2c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.6,0.1-0.9c0.1-0.5,0.1-1,0.1-1.6c0-4.3-1.7-8.3-4.7-11.3\n\tc-3-3-7-4.7-11.3-4.7C11.7,0,7.7,1.7,4.7,4.7c-3,3-4.7,7-4.7,11.3c0,0.5,0,1,0.1,1.5c0,0.3,0.1,0.5,0.1,0.8c0,0.2,0.1,0.5,0.1,0.7\n\tc0.1,0.4,0.2,0.7,0.3,1c0,0.1,0.1,0.3,0.1,0.4c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0.1,0.2c0.2,0.4,0.4,0.9,0.6,1.3c0,0,0,0,0,0.1\n\tc0.7,1.3,1.5,2.6,2.6,3.7c0,0,0,0,0,0l0,0c0.1,0.1,0.2,0.3,0.4,0.4c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7\n\tC27.4,27.3,27.4,27.2,27.5,27.2L27.5,27.2C27.5,27.2,27.5,27.2,27.5,27.2z M5.4,5.4C8.2,2.6,12,1,16,1s7.8,1.6,10.6,4.4S31,12,31,16\n\tc0,0.5,0,1-0.1,1.5c0,0.2-0.1,0.5-0.1,0.7c0,0.2-0.1,0.5-0.1,0.7c-0.1,0.3-0.2,0.7-0.2,1c0,0.1-0.1,0.2-0.1,0.4\n\tc-0.1,0.4-0.2,0.8-0.4,1.1c0,0.1,0,0.1-0.1,0.2c-0.2,0.4-0.3,0.8-0.6,1.2c0,0,0,0,0,0c-0.6,1.2-1.5,2.4-2.4,3.4\n\tc-1-1.3-3.3-2.2-6-2.2c-3,0-3-1.1-2.7-2.3c0.4-1.5,3.1-0.8,3.9-4.8c0,0,1.5-1.1,1.7-2.3s-0.7-1.8-1.6-1.2c0,0,1-6.7-4-7.8\n\tc-0.7-0.2-1.6-0.3-2.4-0.3c-1.1,0-2,0.2-2.8,0.4c-0.4,0.1-0.8,0.3-1.1,0.6c-0.6,0-1.6,0.1-2.4-0.1c0,0,0.1,1.4,0.3,2.4\n\tc0,0.1-0.5-0.1-0.7,0.6C9,9.7,9.2,11.4,9.4,12.4c0,0.6,0.1,1.1,0.1,1.1c-0.9-0.5-1.7,0-1.6,1.2C8,15.9,9.5,17,9.5,17\n\tc0.8,3.9,3.4,3.2,3.9,4.8c0.3,1.2,0.3,2.2-2.7,2.3c-2.6,0-4.7,0.9-5.8,2.1C4.6,25.7,4.3,25.4,4,25c0,0,0,0,0,0\n\tc-0.3-0.4-0.5-0.7-0.8-1.1c0,0,0,0,0-0.1c-0.2-0.4-0.4-0.7-0.6-1.1c0,0,0-0.1-0.1-0.1c-0.2-0.4-0.3-0.7-0.5-1.1\n\tc0-0.1-0.1-0.2-0.1-0.3c-0.1-0.3-0.2-0.7-0.3-1c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.3-0.2-0.6-0.2-0.9c0-0.2-0.1-0.5-0.1-0.7\n\tc0-0.2-0.1-0.4-0.1-0.7C1,17,1,16.5,1,16C1,12,2.6,8.2,5.4,5.4z" />\n</symbol>'
      });
      s().add(i);
      const c=i
    }, 953768:(e, t, r)=>{
      r.d(t, {
        A:()=>p
      });
      r(418665), r(14602);
      var n=r(630240), o=r(931135), a=r.n(o), s=r(957221), i=[
        "legendselectchanged", "legendselected", "legendunselected", "legendscroll", "datazoom", "datarangeselected", "timelinechanged", "timelineplaychanged", "restore", "dataviewchanged", "magictypechanged", "geoselectchanged", "geoselected", "geounselected", "pieselectchanged", "pieselected", "pieunselected", "mapselectchanged", "mapselected", "mapunselected", "axisareaselected", "focusnodeadjacency", "unfocusnodeadjacency", "brush", "brushselected", "rendered", "finished", "click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"
      ], c=[
        "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"
      ], l=[
        "theme", "initOptions", "autoresize"
      ], u=[
        "manualUpdate", "watchShallow"
      ];
      const d={
        props:{
          options:Object, theme:[
            String, Object
          ], initOptions:Object, group:String, autoresize:Boolean, watchShallow:Boolean, manualUpdate:Boolean
        }, data:()=>({
          lastArea:0
        }), watch:{
          group(e){
            this.chart.group=e
          }
        }, methods:{
          mergeOptions(e, t, r){
            this.manualUpdate&&(this.manualOptions=e), this.chart?this.delegateMethod("setOption", e, t, r):this.init(e)
          }, appendData(e){
            this.delegateMethod("appendData", e)
          }, resize(e){
            this.delegateMethod("resize", e)
          }, dispatchAction(e){
            this.delegateMethod("dispatchAction", e)
          }, convertToPixel(e, t){
            return this.delegateMethod("convertToPixel", e, t)
          }, convertFromPixel(e, t){
            return this.delegateMethod("convertFromPixel", e, t)
          }, containPixel(e, t){
            return this.delegateMethod("containPixel", e, t)
          }, showLoading(e, t){
            this.delegateMethod("showLoading", e, t)
          }, hideLoading(){
            this.delegateMethod("hideLoading")
          }, getDataURL(e){
            return this.delegateMethod("getDataURL", e)
          }, getConnectedDataURL(e){
            return this.delegateMethod("getConnectedDataURL", e)
          }, clear(){
            this.delegateMethod("clear")
          }, dispose(){
            this.delegateMethod("dispose")
          }, delegateMethod(e){
            this.chart||this.init();
            for(var t=arguments.length, r=new Array(t>1?t-1:0), n=1;
            n<t;
            n++)r[
              n-1
            ]
            =arguments[
              n
            ];
            return this.chart[
              e
            ]
            (...r)
          }, delegateGet(e){
            return this.chart||this.init(), this.chart[
              e
            ]
            ()
          }, getArea(){
            return this.$el.offsetWidth*this.$el.offsetHeight
          }, init(e){
            if(!this.chart){
              var t=n.Ay.init(this.$el, this.theme, this.initOptions);
              this.group&&(t.group=this.group), t.setOption(e||this.manualOptions||this.options||{
              }, !0), i.forEach((e=>{
                t.on(e, (t=>{
                  this.$emit(e, t)
                }))
              })), c.forEach((e=>{
                t.getZr().on(e, (t=>{
                  this.$emit("zr:".concat(e), t)
                }))
              })), this.autoresize&&(this.lastArea=this.getArea(), this.__resizeHandler=a()((()=>{
                0===this.lastArea?(this.mergeOptions({
                }, !0), this.resize(), this.mergeOptions(this.options||this.manualOptions||{
                }, !0)):this.resize(), this.lastArea=this.getArea()
              }), 100, {
                leading:!0
              }), (0, s.c)(this.$el, this.__resizeHandler)), Object.defineProperties(this, {
                width:{
                  configurable:!0, get:()=>this.delegateGet("getWidth")
                }, height:{
                  configurable:!0, get:()=>this.delegateGet("getHeight")
                }, isDisposed:{
                  configurable:!0, get:()=>!!this.delegateGet("isDisposed")
                }, computedOptions:{
                  configurable:!0, get:()=>this.delegateGet("getOption")
                }
              }), this.chart=t
            }
          }, initOptionsWatcher(){
            this.__unwatchOptions&&(this.__unwatchOptions(), this.__unwatchOptions=null), this.manualUpdate||(this.__unwatchOptions=this.$watch("options", ((e, t)=>{
              !this.chart&&e?this.init():this.chart.setOption(e, e!==t)
            }), {
              deep:!this.watchShallow
            }))
          }, destroy(){
            this.autoresize&&(0, s.p)(this.$el, this.__resizeHandler), this.dispose(), this.chart=null
          }, refresh(){
            this.chart&&(this.destroy(), this.init())
          }
        }, created(){
          this.initOptionsWatcher(), l.forEach((e=>{
            this.$watch(e, (()=>{
              this.refresh()
            }), {
              deep:!0
            })
          })), u.forEach((e=>{
            this.$watch(e, (()=>{
              this.initOptionsWatcher(), this.refresh()
            }))
          }))
        }, mounted(){
          this.options&&this.init()
        }, activated(){
          this.autoresize&&this.chart&&this.chart.resize()
        }, destroyed(){
          this.chart&&this.destroy()
        }, connect(e){
          "string"!=typeof e&&(e=e.map((e=>e.chart))), n.Ay.connect(e)
        }, disconnect(e){
          n.Ay.disConnect(e)
        }, registerMap(e, t, r){
          n.Ay.registerMap(e, t, r)
        }, registerTheme(e, t){
          n.Ay.registerTheme(e, t)
        }, graphic:n.Ay.graphic
      };
      const p=(0, r(514486).A)(d, (function(){
        var e=this.$createElement;
        return(this._self._c||e)("div", {
          staticClass:"echarts"
        })
      }), [
      ], !1, null, null, null).exports
    }, 953845:(e, t, r)=>{
      var n=r(302543), o=r(248124), a=r(756029);
      function s(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], n=!0, o=!1, a=void 0;
          try{
            for(var s, i=e[
              Symbol.iterator
            ]
            ();
            !(n=(s=i.next()).done)&&(r.push(s.value), !t||r.length!==t);
            n=!0);
          }
          catch(e){
            o=!0, a=e
          }
          finally{
            try{
              n||null==i.return||i.return()
            }
            finally{
              if(o)throw a
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return i(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function i(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, n=new Array(t);
        r<t;
        r++)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      r(215195), r(700533), e.exports=[
        "$scope", "rollcallRepository", "onlineVideoCompletenessRepository", "$q", function(e, t, r, i){
          var c=function(e){
            var t=n.filter(e, (e=>!e.checked));
            return n.reduce(t, (function(e, t){
              return e[
                t.key
              ]
              =!0, e
            }), {
            })
          };
          e.save=function(){
            return e.scoreColumnSettingCopy.hiddenCustomScoreItemKeys=c(e.customScoreItemList), e.scoreColumnSettingCopy.hiddenActivityKeys=c(e.activityList), e.updateScoreColumnSetting(e.scoreColumnSettingCopy), o("#score-column-chooser-popup").foundation("reveal", "close"), !0
          };
          return function(){
            n.map(e.activities, (function(e){
              return e.id
            })), n.map(e.activities, (function(e){
              return e.title
            })), n.map(e.activities, (function(e){
              return e.type
            }));
            return e.scoreColumnSettingCopy=a.copy(e.scoreColumnSetting), e.customScoreItemList=n.map(e.customScoreItems, (function(t){
              return{
                name:t.name, score_percentage:t.score_percentage, key:t.id, checked:!e.scoreColumnSetting.hiddenCustomScoreItemKeys[
                  t.id
                ]
              }
            })), e.activityList=n.map(e.activities, (function(t){
              return{
                title:t.title, url:t.url, score_percentage:t.score_percentage, key:t.type+t.id, checked:!e.scoreColumnSetting.hiddenActivityKeys[
                  t.type+t.id
                ]
              }
            })), i.all([
              t.init(), r.init()
            ]).then((function(){
              var t=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), r=s(t, 2), n=r[
                0
              ], o=r[
                1
              ];
              return e.rollcallSetting=a.copy(n), e.onlineVideoCompletenessSetting=a.copy(o)
            }))
          }
          ()
        }
      ]
    }, 980108:e=>{
      e.exports=[
        "$q", "examApi", function(e, t){
          var r={
          }, n=()=>r={
          };
          return{
            initExamsWithPage(n, o){
              if(r[
                o.page
              ]
              &&!o.reloadPage)return r[
                o.page
              ].promise;
              r[
                o.page
              ]
              =e.defer();
              return t.initExamsWithPage(n, o, (e=>r[
                o.page
              ].resolve(e)), (()=>r[
                o.page
              ].resolve(null))), r[
                o.page
              ].promise
            }, addExam:(e, r, o, a)=>t.saveExam(e, r, (function(e){
              return n(), o(e)
            }), a), editExam:(e, r, o)=>t.editExam(e, (function(e){
              return n(), r(e)
            }), o), deleteExam:e=>t.deleteExam(e, (()=>n()), (function(){
            })), batchDeleteExams:e=>t.deleteExams(e, (()=>n()), (function(){
            })), checkExamQualification:(e, r, o, a)=>t.checkExamQualification(e, r, (function(e){
              return n(), o(e)
            }), (e=>a(e)))
          }
        }
      ]
    }, 981751:(e, t, r)=>{
      var n=r(302543), o=r(966491), a=r(571478), s=r(111172);
      e.exports=[
        "$scope", "$rootScope", "api", "Upload", "DataImportHelper", "toastr", "$timeout", "$http", "$location", "$window", function(e, t, r, i, c, l, u, d, p, f){
          var m=a(e), v={
          }, h={
          };
          e.humanizeBytes=o.humanizeBytes, e.pageSize=10, e.pagination=s(e, p, "passed_records");
          var g=function(t){
            return e.pages=t.pages, e.pagedPassedRecords=t.data
          };
          e.changePage=t=>e.pagination.changePageAtFrontEnd(t, e.passedRecords, g), e.init=function(){
            var r=t.importType;
            return v.importType=r, v.errorPriority={
              user_no:1, total_score:2
            }, v.data={
              record_type:"score", course_id:t.courseId
            }, h=new c(v.errorPriority), e.ui=h.ui
          };
          var _={
          };
          e.$on("endImport", (function(){
            return 3===e.ui.wizardStep?f.location.reload():e.goStepFirst()
          })), e.goStepFirst=function(){
            if(!(e.ui.wizardStep<2))return delete _.access_key, delete e.failedRecords, h.goStepFirst(), e.deleteUploaded(e.ui)
          }, e.doStepSecond=function(){
            return m.show(), i.upload({
              url:"/api/data-import/validation", file:e.getUploaded()[
                0
              ], method:"POST", data:v.data
            }).then((function(t){
              var r=n.filter(t.data.records, "errors");
              e.failedRecords=r, e.passedRecords=t.data.passed_records, e.changePage(1);
              var o=t.data.record_number;
              return h.updateRecordsPickedError(e.failedRecords), _.access_key=t.data.access_key, m.hide(), h.updateSecondStepData(e.failedRecords), e.correctRecordNumber=o-r.length, e.ui.stepThirdEnable=e.ui.importConfirmed&&e.correctRecordNumber>0
            }), (function(e){
              return l.error(e.data.message), m.hide()
            }))
          };
          return e.doStepThird=function(){
            m.show();
            var n={
              access_key:_.access_key, course_id:t.courseId
            };
            return r.importScores(n, (function(t){
              var r=t.job_id, n=()=>((e, t, r)=>d.get("/api/jobs/".concat(e, "/status")).success(t).error(l.decorateError(r)))(r, o), o=function(t){
                return"finished"===t.status?function(t){
                  var r="".concat(v.importType, "s"), n="".concat(v.importType, "s_failed");
                  return e.importedRecords=t[
                    r
                  ], e.failedRecords=t[
                    n
                  ], h.updateRecordsPickedError(e.failedRecords), m.hide(), e.ui.wizardStep=3
                }
                (t.result):"failed"===t.status?(m.hide(), l.error(e.errorText.importFailed)):u(n, 5e3)
              };
              return u(n, 5e3)
            }))
          }, e.onFileSelect=e.setFileSelectContext(e), e.getHref=function(e){
            var t=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :"school";
            return"/static/data_import_templates/".concat(t, "-scores-").concat(e, ".xls")
          }
        }
      ]
    }, 989216:(e, t, r)=>{
      var n=r(248124), o=r(302543);
      r(640173), r(658379), e.exports=[
        "$scope", "$rootScope", "api", "Upload", "DataImportHelper", "toastr", "$timeout", "$http", "uploadService", function(e, t, r, a, s, i, c, l, u){
          var d=n("#courseId").val();
          return t.importType="item_score", t.courseId=d, e.setUploaded=e=>t.uploaded=e, e.getUploaded=()=>t.uploaded, e.deleteUploaded=function(e){
            return delete t.uploaded, e.uploadSucceeded=!1
          }, e.endImport=function(){
            delete t.uploaded, e.$broadcast("endImport"), n("#batch-import-item-score-popup").foundation("reveal", "close")
          }, e.setFileSelectContext=function(t){
            return function(r, n){
              var a;
              if(!(r.length<=0))if(r.length>1)i.warning(t.errorText.singleFile);
              else{
                if(u.checkFiles(r, n, a=[
                  "xls"
                ]))return t.ui.uploadSucceeded=!0, o.forEach(r, (function(e){
                  return e.progress=100, e.finished=!0, !0
                })), e.setUploaded(r);
                var s=n;
                "object"==typeof n&&void 0!==n.DOCUMENT&&(s=n.DOCUMENT);
                var c=u.humanizeBytes(s);
                i.warning(t.errorText.formatAndLimit.replace(/\{
                  0\
                }
                /gi, c).replace(/\{
                  1\
                }
                /gi, a))
              }
            }
          }, e.selectFile=function(){
            return n('#batch-import-item-score-popup input[name="fileSelector"]').click(), !0
          }
        }
      ]
    }, 997709:(e, t, r)=>{
      var n=r(248124), o=r(302543);
      r(269193), r(658379);
      var a=r(592207);
      function s(e, t, r, n, o, a, s){
        try{
          var i=e[
            a
          ]
          (s), c=i.value
        }
        catch(e){
          return void r(e)
        }
        i.done?t(c):Promise.resolve(c).then(n, o)
      }
      function i(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(n, o){
            var a=e.apply(t, r);
            function i(e){
              s(a, n, o, i, c, "next", e)
            }
            function c(e){
              s(a, n, o, i, c, "throw", e)
            }
            i(void 0)
          }))
        }
      }
      r(207452), e.exports=[
        "$scope", "$http", "toastr", function(e, t, r){
          var s=n("#courseId").val(), c=function(t, n){
            "onSuccess"===t&&(e.errorInfo="", o.isEmpty(n)||(o.forEach(e.enrollmentScoreBook, (e=>{
              var t=n[
                e.id
              ];
              t&&(e.course_total_score=t)
            })), e.scoreBookService.originEnrollmentScoreBook=e.enrollmentScoreBook)), "onError"===t&&(e.errors={
            }, e.errorInfo="", n.errors.hasOwnProperty("enrollment_score_book")?o.forEach(n.errors.enrollment_score_book, (t=>{
              "make_up_score"in t&&(e.errorInfo=t.make_up_score)
            })):r.error(n.errors), o.forEach(e.enrollmentScoreBook, (function(t){
              var r="make_up_score_"+t.id;
              (0>t.make_up_score||t.make_up_score>100)&&(e.errors[
                r
              ]
              =e.errorInfo)
            })))
          };
          e.save=function(){
            var n={
              course_id:s, enrollment_score_book:[
              ]
            };
            o.forEach(e.enrollmentScoreBook, (function(t){
              var r=null;
              [
                "", "-"
              ].includes(t.make_up_score)||(r=t.make_up_score), n.enrollment_score_book.push({
                enrollment_id:t.id, make_up_score:r, continuous_assessment_score:e.continuousAssessmentScore[
                  t.user_id
                ]
              })
            }));
            return t.put("/api/enrollments/score-book", n).success((function(e){
              c("onSuccess", e), r.success(e.message)
            })).error((function(e){
              c("onError", e)
            }))
          }, e.updateMakeupScoreInfo=function(e){
            !1===e.need_make_up&&(e.make_up_score=null)
          }, e.reset=i(a.mark((function t(){
            return a.wrap((function(t){
              for(;
              ;
              )switch(t.prev=t.next){
                case 0:return t.next=2, e.scoreBookService.resetEnrollmentScoreBook();
                case 2:e.enrollmentScoreBook=e.scoreBookService.enrollmentScoreBook;
                case 3:case"end":return t.stop()
              }
            }), t)
          }))), e.$on("getTotalScorePercentage", (()=>{
            e.totalScorePercentage=e.scoreBookService.totalScorePercentage
          }));
          o.forEach(e.enrollmentScoreBook, (t=>e.convertNeedMakeUp(t)))
        }
      ]
    }
  }
]);
