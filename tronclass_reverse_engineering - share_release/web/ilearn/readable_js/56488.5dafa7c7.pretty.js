(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    56488
  ], {
    31571:(e, t, s)=>{
      var a=s(302543);
      e.exports={
        getContents(e){
          if(!e)return[
          ];
          var t=a.map(e.alternates, "content");
          return a.isEmpty(t)?e.content:[
            e.content
          ].concat(t).join("; ")
        }
      }
    }, 42425:(e, t, s)=>{
      var a=s(248124), r=s(302543);
      s(219693), s(418665), s(700533), s(334867), s(906048), s(43148), s(640173), s(14602);
      var n=s(571478);
      e.exports=[
        "$scope", "$http", "$timeout", "toastr", function(e, t, s, o){
          e.ui.ruleType="simple";
          var i=n(e);
          e.errorsNumber=0, e.examId=a("#examId").val(), e.subjectsMap={
            totalScore:0, totalCount:0, selectedCount:0
          }, e.randomSubjectWithAnalysis=[
          ], e.randomSubjectWithAnalysisMap={
          }, e.randomSubjectWithMedia=[
          ], e.randomSubjectWithMediaMap={
          };
          var u=function(t, s){
            var a=arguments.length>2&&void 0!==arguments[
              2
            ]
            &&arguments[
              2
            ], n="random"===t.type?t.limit_type:t.type;
            e.subjectsMap.totalCount+=1, e.subjectsMap.selectedCount+=1, e.subjectsMap[
              s
            ]
            ||(e.subjectsMap[
              s
            ]
            ={
              totalScore:0, totalCount:0, selectedCount:0, scoreErrorCount:0, oldScore:0, inRandom:a
            }), e.subjectsMap[
              s
            ].totalCount+=1, e.subjectsMap[
              s
            ].selectedCount+=1, e.subjectsMap[
              s
            ]
            [
              n
            ]
            ||(e.subjectsMap[
              s
            ]
            [
              n
            ]
            ={
              oldTotalScore:0, totalScore:"", oldScore:0, score:"", totalCount:0, selectedCount:0, randomCount:0, difficultyToggle:!1, scoreErrorCount:0
            }, r.map(e.subjectDifficulty, (function(t, a){
              e.subjectsMap[
                s
              ]
              [
                n
              ]
              [
                a
              ]
              ={
                totalCount:0, selectedCount:0, score:"", totalScore:"", oldTotalScore:"", scoreErrorCount:0
              }
            }))), e.subjectsMap[
              s
            ]
            [
              n
            ]
            [
              t.difficulty_level
            ].totalCount+=1, e.subjectsMap[
              s
            ]
            [
              n
            ]
            [
              t.difficulty_level
            ].selectedCount+=1, e.subjectsMap[
              s
            ]
            [
              n
            ]
            [
              t.difficulty_level
            ].oldSelectedCount=e.subjectsMap[
              s
            ]
            [
              n
            ]
            [
              t.difficulty_level
            ].selectedCount, e.subjectsMap[
              s
            ]
            [
              n
            ].totalCount+=1, e.subjectsMap[
              s
            ]
            [
              n
            ].selectedCount+=1, e.subjectsMap[
              s
            ]
            [
              n
            ].oldSelectedCount=e.subjectsMap[
              s
            ]
            [
              n
            ].selectedCount, "random"===t.type&&(e.subjectsMap[
              s
            ]
            [
              n
            ].randomCount+=1)
          }, c=function(e, t){
            t[
              e.id
            ]
            =[
            ], r.each(e.sub_subjects, (function(s){
              u(s, e.id), t[
                e.id
              ].push(s.id), r.each(s.sub_subjects, (function(e){
                u(e, s.id, !0)
              }))
            }))
          }, l=function(t, s){
            if(e.subjectsMap[
              t
            ]
            [
              s
            ].totalScoreError)return delete e.subjectsMap[
              t
            ]
            [
              s
            ].totalScoreError, e.errorsNumber-=1
          }, d=function(t, s){
            var a, r=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :null;
            if(null!==(a=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              r
            ])&&void 0!==a&&a.totalScoreError)return delete e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              r
            ].totalScoreError, e.errorsNumber-=1
          }, m=function(t, s){
            var a, r=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :null;
            if(r&&null!==(a=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              r
            ])&&void 0!==a&&a.hasScoreError&&(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              r
            ].hasScoreError=!1, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              r
            ].scoreErrorCount-=1, e.errorsNumber-=1), e.subjectsMap[
              t
            ]
            [
              s
            ].hasScoreError)return e.subjectsMap[
              t
            ]
            [
              s
            ].hasScoreError=!1, e.subjectsMap[
              t
            ]
            [
              s
            ].scoreErrorCount-=1, e.errorsNumber-=1
          }, p=function(t, s){
            var a, r, n=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :null;
            n&&null!==(a=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              n
            ])&&void 0!==a&&a.countError&&(null===(r=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              n
            ])||void 0===r||delete r.countError, e.errorsNumber-=1);
            if(e.subjectsMap[
              t
            ]
            [
              s
            ].countError)return delete e.subjectsMap[
              t
            ]
            [
              s
            ].countError, e.errorsNumber-=1
          }, b=function(t, s){
            var a, r, n, o=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :null;
            if(o&&""===(null===(a=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ])||void 0===a?void 0:a.selectedCount)&&(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].countError=e.i18nMessages.fieldRequired, e.errorsNumber+=1), ""===e.subjectsMap[
              t
            ]
            [
              s
            ].selectedCount&&(e.subjectsMap[
              t
            ]
            [
              s
            ].countError=e.i18nMessages.fieldRequired, e.errorsNumber+=1), parseInt(null===(r=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ])||void 0===r?void 0:r.selectedCount)>(null===(n=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ])||void 0===n?void 0:n.totalCount)&&(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].countError=e.i18nMessages.selectedSubjectsCountError, e.errorsNumber+=1), parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ].selectedCount)>e.subjectsMap[
              t
            ]
            [
              s
            ].totalCount)return e.subjectsMap[
              t
            ]
            [
              s
            ].countError=e.i18nMessages.selectedSubjectsCountError, e.errorsNumber+=1
          }, f=function(t, s){
            e.subjectsMap[
              s
            ].totalScore!=e.subjectsMap[
              t
            ].totalScore&&(e.subjectsMap[
              s
            ].randomSubjectPointError||(e.subjectsMap[
              s
            ].randomSubjectPointError=!0, e.errorsNumber+=1))
          }, j=function(t, s){
            e.subjectsMap[
              s
            ].totalScore==e.subjectsMap[
              t
            ].totalScore&&e.subjectsMap[
              s
            ].randomSubjectPointError&&(e.subjectsMap[
              s
            ].randomSubjectPointError=!1, e.errorsNumber-=1)
          }, v=function(t, s, a, r){
            var n, o, i, u=arguments.length>4&&void 0!==arguments[
              4
            ]
            ?arguments[
              4
            ]
            :null;
            (""===e.subjectsMap[
              a
            ]
            [
              r
            ].totalScore&&(e.subjectsMap[
              a
            ]
            [
              r
            ].totalScoreError=e.i18nMessages.fieldRequired, e.errorsNumber+=1), u)&&((null===(n=e.subjectsMap[
              a
            ]
            [
              r
            ]
            [
              u
            ])||void 0===n?void 0:n.selectedCount)>0&&10*(null===(o=e.subjectsMap[
              a
            ]
            [
              r
            ]
            [
              u
            ])||void 0===o?void 0:o.totalScore)%(null===(i=e.subjectsMap[
              a
            ]
            [
              r
            ]
            [
              u
            ])||void 0===i?void 0:i.selectedCount)>0&&(e.subjectsMap[
              a
            ]
            [
              r
            ]
            [
              u
            ].score=e.subjectsMap[
              a
            ]
            [
              r
            ]
            [
              u
            ].score.toFixed(2), e.errorsNumber+=1, e.subjectsMap[
              a
            ]
            [
              r
            ]
            [
              u
            ].hasScoreError=!0, e.subjectsMap[
              a
            ]
            [
              r
            ]
            [
              u
            ].scoreErrorCount+=1));
            if(t>0&&10*s%t>0&&!u)return e.subjectsMap[
              a
            ]
            [
              r
            ].score=e.subjectsMap[
              a
            ]
            [
              r
            ].score.toFixed(2), e.errorsNumber+=1, e.subjectsMap[
              a
            ]
            [
              r
            ].hasScoreError=!0, e.subjectsMap[
              a
            ]
            [
              r
            ].scoreErrorCount+=1
          }, S=function(t, s){
            var a, r=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :null;
            ""===(null===(a=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              r
            ])||void 0===a?void 0:a.totalScore)&&(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              r
            ].totalScoreError=e.i18nMessages.fieldRequired, e.errorsNumber+=1)
          }, _=function(t, s, a, r){
            ""!==r?(r=parseFloat(r), e.subjectsMap[
              t
            ]
            [
              s
            ].score=a>0?parseFloat((r/a).toFixed(2)):"", e.subjectsMap[
              t
            ]
            [
              s
            ].oldScore=e.subjectsMap[
              t
            ]
            [
              s
            ].score):(e.subjectsMap[
              t
            ]
            [
              s
            ].score="", e.subjectsMap[
              t
            ]
            [
              s
            ].oldScore=0)
          }, x=function(t, s, a){
            var r, n=arguments.length>3&&void 0!==arguments[
              3
            ]
            ?arguments[
              3
            ]
            :null;
            return n?(r=t-parseInt(e.subjectsMap[
              s
            ]
            [
              a
            ]
            [
              n
            ].oldSelectedCount), e.subjectsMap[
              s
            ]
            [
              a
            ].selectedCount=parseInt(e.subjectsMap[
              s
            ]
            [
              a
            ].selectedCount)+r, e.subjectsMap[
              s
            ]
            [
              a
            ]
            [
              n
            ].oldSelectedCount=t):r=t-parseInt(e.subjectsMap[
              s
            ]
            [
              a
            ].oldSelectedCount), e.subjectsMap[
              s
            ].selectedCount=parseInt(e.subjectsMap[
              s
            ].selectedCount)+r, e.subjectsMap.selectedCount=parseInt(e.subjectsMap.selectedCount)+r, e.subjectsMap[
              s
            ]
            [
              a
            ].oldSelectedCount=t
          }, y=function(){
            if(e.subjectsMap.totalScore>100)return e.subjectsMap.totalScoreError=e.i18nMessages.totalPointsError, e.errorsNumber+=1
          }, h=function(){
            e.subjectsMap.totalScoreError&&(delete e.subjectsMap.totalScoreError, e.errorsNumber-=1)
          }, g=function(t, s, a){
            var r;
            if(null!==(r=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ])&&void 0!==r&&r.scoreError&&(delete e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].scoreError, e.errorsNumber-=1), e.subjectsMap[
              t
            ]
            [
              s
            ].scoreError)return delete e.subjectsMap[
              t
            ]
            [
              s
            ].scoreError, e.errorsNumber-=1
          }, M=function(t, s, a){
            var r, n;
            if(""===(null===(r=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ])||void 0===r?void 0:r.score)&&(null===(n=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ])||void 0===n?void 0:n.selectedCount)>0&&(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].scoreError=e.i18nMessages.fieldRequired, e.errorsNumber+=1), ""===e.subjectsMap[
              t
            ]
            [
              s
            ].score&&!e.subjectsMap[
              t
            ]
            [
              s
            ].difficultyToggle)return e.subjectsMap[
              t
            ]
            [
              s
            ].scoreError=e.i18nMessages.fieldRequired, e.errorsNumber+=1
          }, w=function(t, s, a){
            var r=(t=""!==t?parseFloat(t):0)-e.subjectsMap[
              s
            ]
            [
              a
            ].oldTotalScore;
            return e.subjectsMap[
              s
            ].inRandom||(e.subjectsMap.totalScore=parseFloat((e.subjectsMap.totalScore+r).toFixed(1))), ""===e.subjectsMap[
              s
            ].totalScore&&(e.subjectsMap[
              s
            ].totalScore=0), e.subjectsMap[
              s
            ].totalScore+=r, e.subjectsMap[
              s
            ].totalScore=parseFloat(e.subjectsMap[
              s
            ].totalScore.toFixed(1)), e.subjectsMap[
              s
            ]
            [
              a
            ].oldTotalScore=t
          };
          e.getMessageWithScore=function(e, t){
            var s=parseFloat(t)>=0?T(t):"  ";
            return e.replace("{0}", s)
          }, e.updateSubjectsCount=function(t, s){
            var a, r, n, o=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :null;
            if(p(t, s, o), m(t, s, o), h(), b(t, s, o), o?(r=parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].selectedCount||0), n=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].score||0), a=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].totalScore||0)):(r=parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ].selectedCount||0), n=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ].score||0), a=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore||0)), x(r, t, s, o), "complex"===e.ui.ruleType)o&&(r>0?(n=parseFloat((a/r).toFixed(2)), e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore+=a, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].score=n, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].oldScore=n, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].oldTotalScore=a):(e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore-=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].oldTotalScore, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].score="", e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].oldScore=0, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              o
            ].oldTotalScore=0)), a=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore||0), _(t, s, r, a), v(r, a, t, s);
            else if(a=parseFloat((r*n).toFixed(1)), o){
              e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                o
              ].totalScore=a;
              var i=a-e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                o
              ].oldTotalScore;
              e.subjectsMap[
                t
              ]
              [
                s
              ].totalScore+=i, e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                o
              ].oldTotalScore=a
            }
            else e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore=a;
            return w(e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore, t, s), y()
          }, e.updateSubjectsTotalScore=function(t, s, a){
            var r, n, o;
            if(m(t, s, a), l(t, s), d(t, s, a), g(t, s, a), h(), a){
              if(r=parseFloat(e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].totalScore||0), 0==(n=parseInt(e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].selectedCount||0)))return;
              o=parseFloat((r-parseFloat(e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].oldTotalScore||0)).toFixed(1)), e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].oldTotalScore=r, ""!==e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].totalScore?(e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].score=n>0?parseFloat((r/n).toFixed(2)):"", e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].oldScore=e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].score):(e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].score="", e.subjectsMap[
                t
              ]
              [
                s
              ]
              [
                a
              ].oldScore=0), e.subjectsMap[
                t
              ]
              [
                s
              ].totalScore=parseFloat((parseFloat(e.subjectsMap[
                t
              ]
              [
                s
              ].totalScore)+o).toFixed(1))
            }
            return r=e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore, n=parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ].selectedCount||0), w(r, t, s), a||_(t, s, n, r), v(n, r, t, s, a), S(t, s, a), y()
          }, e.updateRandomAnalysisSubjectsTotalScore=function(t, s, a){
            l(t, s), g(t, s), h();
            var r=e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore, n=parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ].selectedCount||0);
            w(r, t, s), _(t, s, n, r), v(n, r, t, s), j(a, t), f(a, t), y()
          }, e.updateSubjectsScore=function(t, s, a){
            var r, n, o;
            return h(), m(t, s, a), l(t, s), g(t, s, a), M(t, s, a), a?(n=parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].selectedCount||0), ""!==e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].score?(r=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].score||0), e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].totalScore=parseFloat((r*n).toFixed(1)), o=parseFloat(parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].totalScore||0)-parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].oldTotalScore||0)), e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore=parseFloat((parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore||0)+o).toFixed(1)), e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].oldScore=r, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].oldTotalScore=e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].totalScore):(r=0, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].oldScore=r, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].totalScore="", o=0-e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].oldTotalScore, e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore+=o, e.subjectsMap[
              t
            ]
            [
              s
            ]
            [
              a
            ].oldTotalScore=0), e.subjectsMap[
              t
            ]
            [
              s
            ].oldTotalScore=e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore):(r=e.subjectsMap[
              t
            ]
            [
              s
            ].score, n=parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ].selectedCount||0), ""!==r?(r=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ].score), e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore=parseFloat((r*n).toFixed(1)), e.subjectsMap[
              t
            ]
            [
              s
            ].oldTotalScore=e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore):(r=0, e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore="", e.subjectsMap[
              t
            ]
            [
              s
            ].oldTotalScore=0), o=parseFloat(((r-e.subjectsMap[
              t
            ]
            [
              s
            ].oldScore)*n).toFixed(1))), e.subjectsMap.totalScore=parseFloat((e.subjectsMap.totalScore+o).toFixed(1)), e.subjectsMap[
              t
            ].totalScore=parseFloat((e.subjectsMap[
              t
            ].totalScore+o).toFixed(1)), a||(e.subjectsMap[
              t
            ]
            [
              s
            ].oldScore=r), y()
          }, e.difficultyToggleChange=function(t){
            if(e.subjectsMap[
              0
            ].totalScore-=e.subjectsMap[
              0
            ]
            [
              t
            ].totalScore, e.subjectsMap.totalScore-=e.subjectsMap[
              0
            ]
            [
              t
            ].totalScore, e.subjectsMap[
              0
            ]
            [
              t
            ].difficultyToggle){
              var s, a, n, o, i;
              i=0, r.map(e.subjectDifficulty, (function(s, a){
                i+=parseInt(e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  a
                ].selectedCount||0)
              })), e.subjectsMap[
                0
              ]
              [
                t
              ].selectedCount=i, x(i, 0, t), "simple"===e.ui.ruleType?(a=0, r.each(e.subjectDifficulty, (function(r, n){
                o=parseInt(e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  n
                ].selectedCount||0), s=parseFloat(e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  n
                ].score||0), a+=parseFloat((s*o).toFixed(1))
              })), e.subjectsMap[
                0
              ]
              [
                t
              ].totalScore=a):(a=0, r.each(e.subjectDifficulty, (function(s, r){
                n=parseFloat(e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].totalScore||0), (o=parseInt(e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].selectedCount||0))&&(a+=n), ""!==e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].totalScore?(e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].score=o>0?parseFloat((n/o).toFixed(2)):"", e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].oldScore=e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].score):(e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].score="", e.subjectsMap[
                  0
                ]
                [
                  t
                ]
                [
                  r
                ].oldScore=0)
              })), e.subjectsMap[
                0
              ]
              [
                t
              ].totalScore=parseFloat(a.toFixed(1))), p(0, t), m(0, t), l(0, t), g(0, t), h(), r.map(e.subjectDifficulty, (function(e, s){
                b(0, t, s), v(0, 0, 0, t, s)
              }))
            }
            else{
              var u, c, f;
              if(r.map(e.subjectDifficulty, (function(e, s){
                p(0, t, s), m(0, t, s), d(0, t, s), g(0, t, s)
              })), h(), "simple"===e.ui.ruleType)e.subjectsMap[
                0
              ]
              [
                t
              ].score?e.subjectsMap[
                0
              ]
              [
                t
              ].totalScore=parseFloat((parseInt(e.subjectsMap[
                0
              ]
              [
                t
              ].selectedCount||0)*parseFloat(e.subjectsMap[
                0
              ]
              [
                t
              ].score||0)).toFixed(1)):e.subjectsMap[
                0
              ]
              [
                t
              ].totalScore=0;
              else u=parseInt(e.subjectsMap[
                0
              ]
              [
                t
              ].selectedCount||0), c=parseFloat(e.subjectsMap[
                0
              ]
              [
                t
              ].score||0), ""===e.subjectsMap[
                0
              ]
              [
                t
              ].totalScore?f=0:(f=parseFloat((c*u).toFixed(1)), e.subjectsMap[
                0
              ]
              [
                t
              ].totalScore=f), u>0&&10*f%u>0&&(e.subjectsMap[
                0
              ]
              [
                t
              ].score=parseFloat(e.subjectsMap[
                0
              ]
              [
                t
              ].score||0).toFixed(2), e.errorsNumber+=1, e.subjectsMap[
                0
              ]
              [
                t
              ].hasScoreError=!0, e.subjectsMap[
                0
              ]
              [
                t
              ].scoreErrorCount+=1);
              b(0, t)
            }
            e.subjectsMap[
              0
            ]
            [
              t
            ].oldTotalScore=e.subjectsMap[
              0
            ]
            [
              t
            ].totalScore, e.subjectsMap[
              0
            ].totalScore+=e.subjectsMap[
              0
            ]
            [
              t
            ].totalScore, e.subjectsMap.totalScore+=e.subjectsMap[
              0
            ]
            [
              t
            ].totalScore, y()
          }, e.scoreSetterChange=function(t){
            var s=parseFloat(e.subjectsMap[
              0
            ]
            [
              t
            ].scoreSetterValue||0);
            "simple"===e.ui.ruleType?r.map(e.subjectDifficulty, (function(a, r){
              e.subjectsMap[
                0
              ]
              [
                t
              ]
              [
                r
              ].score=s, e.updateSubjectsScore(0, t, r)
            })):r.map(e.subjectDifficulty, (function(a, r){
              e.subjectsMap[
                0
              ]
              [
                t
              ]
              [
                r
              ].totalScore=s, e.updateSubjectsTotalScore(0, t, r)
            }))
          }, e.updateRandomAnalysisSubjectsScore=function(t, s, a){
            m(t, s), l(t, s), g(t, s), M(t, s);
            var r=e.subjectsMap[
              t
            ]
            [
              s
            ].score, n=parseInt(e.subjectsMap[
              t
            ]
            [
              s
            ].selectedCount||0);
            ""!==r?(r=parseFloat(e.subjectsMap[
              t
            ]
            [
              s
            ].score), e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore=parseFloat((r*n).toFixed(1)), e.subjectsMap[
              t
            ]
            [
              s
            ].oldTotalScore=e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore):(r=0, e.subjectsMap[
              t
            ]
            [
              s
            ].totalScore="", e.subjectsMap[
              t
            ]
            [
              s
            ].oldTotalScore=0);
            var o=parseFloat(((r-e.subjectsMap[
              t
            ]
            [
              s
            ].oldScore)*n).toFixed(1));
            e.subjectsMap[
              t
            ].totalScore=parseFloat((e.subjectsMap[
              t
            ].totalScore+o).toFixed(1)), e.subjectsMap[
              t
            ]
            [
              s
            ].oldScore=r, f(a, t), j(a, t)
          }, e.changeRuleType=function(){
            var t=r.map(e.analysisSubjects, "id").concat([
              0
            ]);
            return r.each(t, (t=>r.each(e.subjectTypes, (function(s){
              if(e.subjectsMap[
                t
              ]
              &&e.subjectsMap[
                t
              ]
              [
                s
              ]
              &&(e.subjectsMap[
                t
              ]
              [
                s
              ].totalScoreError&&(delete e.subjectsMap[
                t
              ]
              [
                s
              ].totalScoreError, e.errorsNumber-=1, e.subjectsMap[
                t
              ]
              [
                s
              ].totalScore=e.subjectsMap[
                t
              ]
              [
                s
              ].totalScore||""), e.subjectsMap[
                t
              ]
              [
                s
              ].scoreError))return delete e.subjectsMap[
                t
              ]
              [
                s
              ].scoreError, e.errorsNumber-=1, e.subjectsMap[
                t
              ]
              [
                s
              ].score=e.subjectsMap[
                t
              ]
              [
                s
              ].score||""
            }))))
          }, e.updateRandomSubjectPoint=function(t){
            var s=parseFloat(e.subjectsMap[
              t
            ].totalScore||0);
            e.subjectsMap[
              t
            ].analysis.totalScore=s, e.subjectsMap[
              t
            ].analysis.score=s, g(t, "analysis"), l(t, "analysis"), r.each(e.randomSubjectWithAnalysisMap[
              t
            ], (function(a){
              if(e.subjectsMap[
                a
              ].totalScore!=s){
                var n=E(s, e.subjectsMap[
                  a
                ].totalCount);
                r.each(e.subjectTypes, (function(t){
                  e.subjectsMap[
                    a
                  ]
                  [
                    t
                  ]
                  &&(e.subjectsMap[
                    a
                  ]
                  [
                    t
                  ].score=n, e.subjectsMap[
                    a
                  ]
                  [
                    t
                  ].oldScore=n, e.subjectsMap[
                    a
                  ]
                  [
                    t
                  ].totalScore=parseFloat((n*e.subjectsMap[
                    a
                  ]
                  [
                    t
                  ].totalCount).toFixed(1)), e.subjectsMap[
                    a
                  ]
                  [
                    t
                  ].oldTotalScore=e.subjectsMap[
                    a
                  ]
                  [
                    t
                  ].totalScore, g(a, t), l(a, t)), e.subjectsMap[
                    a
                  ].totalScore=parseFloat((n*e.subjectsMap[
                    a
                  ].totalCount).toFixed(1))
                }))
              }
              f(t, a), j(t, a)
            }));
            var a=parseFloat(s-e.subjectsMap[
              t
            ].oldScore);
            e.subjectsMap.totalScore=parseFloat((e.subjectsMap.totalScore+a).toFixed(1)), e.subjectsMap[
              t
            ].oldScore=s, h(), y()
          };
          var E=function(e, t){
            return e*=10, 0===t?0:Math.floor(e/t)/10
          }, I=function(t){
            var s=r.reduce(e.subjectTypes, (function(s, a){
              return e.subjectsMap[
                t
              ]
              &&e.subjectsMap[
                t
              ]
              [
                a
              ]
              &&(e.subjectsMap[
                t
              ]
              [
                a
              ].difficultyToggle?r.each(e.subjectDifficultyValueMap, (function(r, n){
                s.push({
                  rule_name:a, rule_point:parseFloat(e.subjectsMap[
                    t
                  ]
                  [
                    a
                  ]
                  [
                    r
                  ].score||0).toString(), rule_number:e.subjectsMap[
                    t
                  ]
                  [
                    a
                  ]
                  [
                    r
                  ].selectedCount.toString(), rule_difficulty_level:n
                })
              })):s.push({
                rule_name:a, rule_point:e.subjectsMap[
                  t
                ]
                [
                  a
                ].score.toString(), rule_number:e.subjectsMap[
                  t
                ]
                [
                  a
                ].selectedCount.toString()
              })), s
            }), [
            ]);
            return{
              subject_index:t, point_rules:s
            }
          }, C=t=>r.reduce(e.subjectTypes, (function(s, a){
            return e.subjectsMap[
              t
            ]
            &&e.subjectsMap[
              t
            ]
            [
              a
            ]
            &&(s[
              a
            ]
            ={
            }, e.subjectsMap[
              t
            ]
            [
              a
            ].difficultyToggle?r.map(e.subjectDifficulty, (function(r, n){
              s[
                a
              ]
              [
                n
              ]
              =e.subjectsMap[
                t
              ]
              [
                a
              ]
              [
                n
              ].score||0
            })):r.map(e.subjectDifficulty, (function(r, n){
              s[
                a
              ]
              [
                n
              ]
              =e.subjectsMap[
                t
              ]
              [
                a
              ].score
            }))), s
          }), {
          }), P=function(){
            var t=e.$parent.currentSubject.saved, a=function(){
              var t={
                0:C(0)
              };
              return r.map(e.analysisSubjects, (e=>t[
                e.id
              ]
              =C(e.id))), r.map(e.mediaSubjects, (e=>t[
                e.id
              ]
              =C(e.id))), r.each(e.randomSubjectWithAnalysis, (function(e){
                e.sub_subjects.length>0&&(t[
                  e.id
                ]
                =C(e.id), r.each(e.sub_subjects, (function(e){
                  t[
                    e.id
                  ]
                  =C(e.id)
                })))
              })), r.each(e.randomSubjectWithMedia, (function(e){
                e.sub_subjects.length>0&&(t[
                  e.id
                ]
                =C(e.id), r.each(e.sub_subjects, (function(e){
                  t[
                    e.id
                  ]
                  =C(e.id)
                })))
              })), t
            }
            ();
            return r.map(e.subjects, (function(e){
              if([
                "analysis", "media"
              ].includes(e.type)){
                var t=a[
                  e.id
                ];
                e.updateSubSubjectsPointByRule(t)
              }
              else if("random"===e.type&&[
                "analysis", "media"
              ].includes(e.limit_type)){
                var s=a[
                  e.id
                ];
                e.updateSubSubjectsPointByRule(s), r.each(e.sub_subjects, (function(e){
                  s=a[
                    e.id
                  ], e.updateSubSubjectsPointByRule(s)
                })), r.each(e.unsavedSubSubjects, (function(e){
                  s=a[
                    e.id
                  ], e.updateSubSubjectsPointByRule(s)
                }))
              }
              else{
                var n=a[
                  0
                ];
                e.updateSubSubjectsPointByRule(n)
              }
            })), s((()=>e.$parent.currentSubject.saved=t))
          }, k=function(){
            var t=r.keys(e.subjectsMap);
            return r.each(t, (function(t){
              if("object"==typeof e.subjectsMap[
                t
              ]){
                var s=r.keys(e.subjectsMap[
                  t
                ]);
                return r.each(e.subjectTypes, (function(a){
                  if(s.includes(a))if("simple"===e.ui.ruleType&&e.subjectsMap[
                    t
                  ]
                  [
                    a
                  ].difficultyToggle?r.map(e.subjectDifficulty, (function(e, s){
                    M(t, a, s)
                  })):"simple"===e.ui.ruleType&&""===e.subjectsMap[
                    t
                  ]
                  [
                    a
                  ].score&&M(t, a), "complex"===e.ui.ruleType&&e.subjectsMap[
                    t
                  ]
                  [
                    a
                  ].difficultyToggle)r.map(e.subjectDifficulty, (function(e, s){
                    S(t, a, s)
                  }));
                  else if("complex"===e.ui.ruleType&&""===e.subjectsMap[
                    t
                  ]
                  [
                    a
                  ].totalScore)return function(t, s){
                    if(""===e.subjectsMap[
                      t
                    ]
                    [
                      s
                    ].totalScore&&!e.subjectsMap[
                      t
                    ]
                    [
                      s
                    ].difficultyToggle)return e.subjectsMap[
                      t
                    ]
                    [
                      s
                    ].totalScoreError=e.i18nMessages.fieldRequired, e.errorsNumber+=1
                  }
                  (t, a)
                }))
              }
            }))
          };
          e.updateSubjectsPoint=function(){
            if(i.show(), k(), e.errorsNumber>0)i.hide();
            else{
              var s, n=((s=[
              ]).push(I(0)), r.map(e.analysisSubjects, (function(e){
                if(e.sub_subjects.length>0)return s.push(I(e.id))
              })), r.map(e.mediaSubjects, (function(e){
                if(e.sub_subjects.length>0)return s.push(I(e.id))
              })), r.each(e.randomSubjectWithAnalysis, (function(e){
                e.sub_subjects.length>0&&(s.push(I(e.id)), r.each(e.sub_subjects, (function(e){
                  s.push(I(e.id))
                })))
              })), r.each(e.randomSubjectWithMedia, (function(e){
                e.sub_subjects.length>0&&(s.push(I(e.id)), r.each(e.sub_subjects, (function(e){
                  s.push(I(e.id))
                })))
              })), s), u=e.context&&e.context.classroom?"/api/classroom-exams/".concat(e.context.classroom.id, "/points"):"/api/exams/".concat(e.examId, "/points-and-rules");
              t.put(u, {
                subjects_points_and_rules:n
              }).success((function(t){
                return o.success(t.message), a("#point-rule-popup").foundation("reveal", "close"), a(".select_subjects_randomly_rule_warning").addClass("hide"), t.select_subjects_randomly_rule&&(e.exam.subjects_rule.select_subjects_randomly_rule=t.select_subjects_randomly_rule), i.hide(), P()
              })).error((function(t){
                i.hide(), e.errors=t.errors
              }))
            }
          };
          var T=function(e){
            return-1===(e=[
              0, 0
            ].includes(e)||e?e+"":"").indexOf(".")?parseInt(e, 10):parseFloat(parseFloat(e).toFixed(1))
          }, D=function(){
            var t=e.exam_or_makeup_exam.subjects_rule.select_subjects_randomly_rule, s=r.map(e.analysisSubjects, "id");
            s.push(0), e.subjectsMap.selectedCount=0, r.each(s, (function(s){
              e.subjectsMap[
                s
              ]
              &&(t[
                s
              ]
              &&(e.subjectsMap[
                s
              ].selectedCount=0, ((t, s)=>{
                r.each(e.subjectTypes, (a=>{
                  if(e.subjectsMap[
                    s
                  ]
                  [
                    a
                  ]){
                    if(Array.isArray(t[
                      s
                    ]
                    [
                      a
                    ])){
                      var n=r.reduce(t[
                        s
                      ]
                      [
                        a
                      ], ((t, n)=>{
                        var o, i=parseFloat(n.subject_point), u=e.subjectDifficultyValueMap[
                          n.subject_difficulty_level
                        ];
                        return u?(o=r.min([
                          parseInt(n.subjects_count, 10), e.subjectsMap[
                            s
                          ]
                          [
                            a
                          ]
                          [
                            u
                          ].totalCount
                        ]), e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ]
                        [
                          u
                        ].selectedCount=o, e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ]
                        [
                          u
                        ].oldSelectedCount=o, e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ]
                        [
                          u
                        ].score=i, e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ]
                        [
                          u
                        ].totalScore=o*i, e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ]
                        [
                          u
                        ].oldTotalScore=o*i, e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ].difficultyToggle=!0):(o=r.min([
                          parseInt(n.subjects_count, 10), e.subjectsMap[
                            s
                          ]
                          [
                            a
                          ].totalCount
                        ]), e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ].score=i, e.subjectsMap[
                          s
                        ]
                        [
                          a
                        ].oldScore=i), t.selectedCountBySubjectType+=o, t.totalScoreBySubjectType+=o*i, t
                      }), {
                        selectedCountBySubjectType:0, totalScoreBySubjectType:0
                      });
                      return e.subjectsMap[
                        s
                      ].selectedCount+=n.selectedCountBySubjectType, e.subjectsMap[
                        s
                      ]
                      [
                        a
                      ].selectedCount=n.selectedCountBySubjectType, e.subjectsMap[
                        s
                      ]
                      [
                        a
                      ].oldSelectedCount=n.selectedCountBySubjectType, void("number"==typeof n.totalScoreBySubjectType&&(e.subjectsMap.totalScore+=T(n.totalScoreBySubjectType), e.subjectsMap[
                        s
                      ].totalScore+=T(n.totalScoreBySubjectType), e.subjectsMap[
                        s
                      ]
                      [
                        a
                      ].totalScore=T(n.totalScoreBySubjectType), e.subjectsMap[
                        s
                      ]
                      [
                        a
                      ].oldTotalScore=T(n.totalScoreBySubjectType)))
                    }
                    var o, i;
                    t[
                      s
                    ]
                    [
                      a
                    ]
                    ?(i=r.min([
                      parseInt(t[
                        s
                      ]
                      [
                        a
                      ].subjects_count, 10), e.subjectsMap[
                        s
                      ]
                      [
                        a
                      ].totalCount
                    ]), o=parseFloat(t[
                      s
                    ]
                    [
                      a
                    ].subject_point)):(i=e.subjectsMap[
                      s
                    ]
                    [
                      a
                    ].totalCount, o=""), e.subjectsMap[
                      s
                    ].selectedCount+=i, e.subjectsMap[
                      s
                    ]
                    [
                      a
                    ].selectedCount=i, e.subjectsMap[
                      s
                    ]
                    [
                      a
                    ].oldSelectedCount=i, "number"==typeof o&&(e.subjectsMap.totalScore+=i*o, e.subjectsMap[
                      s
                    ].totalScore+=i*o, e.subjectsMap[
                      s
                    ]
                    [
                      a
                    ].score=o, e.subjectsMap[
                      s
                    ]
                    [
                      a
                    ].oldScore=o, e.subjectsMap[
                      s
                    ]
                    [
                      a
                    ].totalScore=T(i*o), e.subjectsMap[
                      s
                    ]
                    [
                      a
                    ].oldTotalScore=i*o)
                  }
                }))
              })(t, s)), e.subjectsMap.selectedCount+=e.subjectsMap[
                s
              ].selectedCount)
            }))
          };
          e.analysisSubjects=r.filter(e.subjects, {
            type:"analysis"
          }), e.mediaSubjects=r.filter(e.subjects, {
            type:"media"
          }), e.randomSubjects=r.filter(e.subjects, {
            type:"random"
          }), e.subjectTypes=r.keys(e.subjectTypesNormal), r.map(e.subjects, (function(e){
            if(![
              "analysis", "media", "text", "random"
            ].includes(e.type))return u(e, 0)
          })), r.map(e.randomSubjects, (function(t){
            if(![
              "analysis", "media"
            ].includes(t.limit_type))return u(t, 0);
            [
              "media"
            ].includes(t.limit_type)?(e.randomSubjectWithMedia.push(t), c(t, e.randomSubjectWithMediaMap)):(e.randomSubjectWithAnalysis.push(t), c(t, e.randomSubjectWithAnalysisMap))
          })), r.map(e.analysisSubjects, (e=>r.map(e.sub_subjects, (function(t){
            if("text"!==t.type)return u(t, e.id)
          })))), r.map(e.mediaSubjects, (e=>r.map(e.sub_subjects, (function(t){
            if("paragraph_desc"!==t.type)return u(t, e.id)
          })))), e.exam_or_makeup_exam&&e.exam_or_makeup_exam.subjects_rule&&e.exam_or_makeup_exam.subjects_rule.select_subjects_randomly&&e.exam_or_makeup_exam.subjects_rule.select_subjects_randomly_rule&&D()
        }
      ]
    }, 50953:e=>{
      e.exports={
        getApiPrefix:e=>e?"anonymous-api":"api"
      }
    }, 138566:(e, t, s)=>{
      var a=s(248124), r=s(302543);
      s(219693), s(700533), s(714913), s(169218), s(269193), s(640173), s(850785), s(658379);
      var n=s(592207);
      function o(e, t){
        var s=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var a=Object.getOwnPropertySymbols(e);
          t&&(a=a.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), s.push.apply(s, a)
        }
        return s
      }
      function i(e, t, s){
        return t in e?Object.defineProperty(e, t, {
          value:s, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =s, e
      }
      function u(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      function c(e){
        return function(){
          var t=this, s=arguments;
          return new Promise((function(a, r){
            var n=e.apply(t, s);
            function o(e){
              u(n, a, r, o, i, "next", e)
            }
            function i(e){
              u(n, a, r, o, i, "throw", e)
            }
            o(void 0)
          }))
        }
      }
      s(207452);
      var l=s(793110).default, d=s(181769), m=d.canEditActivity, p=d.hasEditPermissionForBlueprint, b=s(966491), f=s(181769).scoreRules, j=s(5782).default, v=s(674814).A;
      e.exports=[
        "$scope", "$rootScope", "$window", "$location", "$routeParams", "$timeout", "modelHelper", "$http", "toastr", "ExamHelper", "examRepository", "activityRepository", "$filter", "$compile", "publishHelper", "fileSelectModel", function(e, t, u, d, S, _, x, y, h, g, M, w, E, I, C, P){
          Promise.all([
            s.e(28492), s.e(24059), s.e(96674), s.e(64288)
          ]).then(s.bind(s, 964288)), -1!==d.path().indexOf("/score-list")?e.tabView=[
            "exam-paged-student-stats", "exam-score-stats", "exam-subject-stats"
          ].includes(S.view)?S.view:"exam-student-stats":e.tabView="exam-basic-info", e.scoreRules=f(), e.activityReferrer=window.sessionStorage.getItem("activityReferrer"), e.examineesWithSubmission=[
          ], e.groupsWithSubmission=[
          ], e.showInvigilationPopup=!1, e.showExamTips=!1, e.showMakeupExamTips=!1, e.showExamEditNotice=!1, e.batchDeleteItems={
            batchOperation:!1, selectedSubjectCount:0
          }, e.loadComponents=()=>{
            Promise.all([
              s.e(7612), s.e(15471), s.e(10035), s.e(26541)
            ]).then(s.bind(s, 207612))
          }, e.canShowOperations=e=>m(e), e.canEditActivitySelf=e=>p(e), e.canEditExamSelf=e=>!!p(e)||e.can_edit_subject_in_blueprint_sub_exam, e.canEditMakeupExamSelf=e=>!!p(e)||e.can_edit_subject_in_blueprint_sub_makeup_exam, e.uploadWithName=function(e){
            return e.name
          }, e.manageMakeUpExamSubjects=function(){
            y.post("/api/exams/".concat(e.exam.id, "/makeup-exam-paper")).success((function(e){
              u.location.href="/exam/".concat(e.id, "/subjects")
            })).error(h.decorateError((function(){
            })))
          }, e.getSubjectAnswerState=function(e){
            var t=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :null;
            return g.getSubjectAnswerState(e, t)
          }, e.isAnswerOnly=function(e){
            return!(e.answeredCorrectly&&e.answer_explanation||!e.answeredCorrectly&&e.wrong_explanation)
          }, e.submitAnswer=function(e, s){
            var a=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :"course", r=arguments.length>3?arguments[
              3
            ]
            :void 0, n=arguments.length>4?arguments[
              4
            ]
            :void 0;
            return t.$broadcast("submitAnswer", {
              teachingUnitId:e, examId:s, teachingUnitType:a, isSystemSubmit:r, reason:n
            })
          }, e.redirectByUrl=()=>window.location.replace(e.goToUrl), e.$on("onBackToSpecificUrl", (()=>e.redirectByUrl())), e.hasUnsavedSubjects=function(t, s){
            return e.goToUrl=t, e.confirmTitle=s, "/"===d.path()||d.path().indexOf("editingId")>-1?e.$broadcast("checkUnsavedSubject"):e.redirectByUrl()
          }, e.closePopup=function(){
            return a("#exit-subjects-confirmation-popup").foundation("reveal", "close"), !1
          };
          var k=(e, t)=>{
            e&&(e.published=t.published, "exam"===e.type&&r.isEmpty(t.published)&&(e.publish_time=""))
          };
          e.checkActivity=function(){
            var s=c(n.mark((function s(a){
              var r;
              return n.wrap((function(s){
                for(;
                ;
                )switch(s.prev=s.next){
                  case 0:return r=[
                    "".concat(a.type, "-").concat(a.id)
                  ], s.next=3, C.publishActivies(e.course.id, r, {
                    type:!a.published
                  }, !1);
                  case 3:a.published=!a.published, k(e.currentActivity, a), k(e.activity, a), k(e.exam, a), t.$emit("activity-publish-changed", {
                    type:a.published
                  });
                  case 8:case"end":return s.stop()
                }
              }), s)
            })));
            return function(e){
              return s.apply(this, arguments)
            }
          }
          (), e.cancelPublish=s(370102).M, e.editExam=function(s, a){
            var r, n;
            return"module"===a.referrer_type&&(r=a.referrer_id), "syllabus"===a.referrer_type&&(n=a.referrer_id), x.editActivity(t, e, s, r, n, _, a)
          }, e.updateFinalScore=function(e){
            var t=null;
            if(e.score_id)t=y.put("/api/exam-scores/".concat(e.score_id), {
              final_score:e.final_score
            });
            else{
              var s={
                exam_id:e.exam_id, org_id:e.org_id, examinee_id:e.id, final_score:e.final_score
              };
              t=y.post("/api/exam-scores", s)
            }
            e.is_resubmitted=!1;
            return t.success(h.decorateSuccess((function(t){
              return t.score_id&&(e.score_id=t.score_id), statistics.track({
                activity_type:"exam", activity_id:e.exam_id, action:statistics.enums.Action.give_score, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, target_info:{
                  id:e.id, type:"personal", is_student:!0
                }
              })
            }))).error(h.decorateError((function(){
            })))
          }, e.autoSaveStatusComment=function(t){
            var s={
              student_id:t.id, status_comment:t.status_comment
            };
            return y.put("/api/exam-scores/".concat(e.examId, "/status-comment"), s).success(h.decorateSuccess((function(e){
              if(e.status_comment)return t.status_comment=e.status_comment
            }))).error(h.decorateError((function(){
            })))
          }, e.addSubjectAtHeader=t=>e.$broadcast("addSubject", t), e.setUIEditSubjects=()=>e.examUI={
            editSubjects:!0
          }, e.calUnsavedSubjects=()=>e.$broadcast("calUnsavedSubjects"), e.storageSubmissions=()=>e.$broadcast("storageSubmissions"), e.confirmSubmissions=()=>e.$broadcast("confirmSubmissions"), e.closeWarning=function(){
            return a(".select_subjects_randomly_rule_warning").addClass("hide"), !0
          }, e.lastOne=function(){
            var t, s;
            if(e.exam.submit_by_group){
              if((null===(s=e.groupsWithSubmission[
                0
              ])||void 0===s?void 0:s.id)===e.currentGroup.id)return"unclickable"
            }
            else if((null===(t=e.examineesWithSubmission[
              0
            ])||void 0===t?void 0:t.id)===e.currentExaminee.id)return"unclickable";
            return"clickable"
          }, e.nextOne=function(){
            var t, s;
            if(e.exam.submit_by_group){
              if((null===(s=e.groupsWithSubmission.slice().pop())||void 0===s?void 0:s.id)===e.currentGroup.id)return"unclickable"
            }
            else if((null===(t=e.examineesWithSubmission.slice().pop())||void 0===t?void 0:t.id)===e.currentExaminee.id)return"unclickable";
            return"clickable"
          }, e.goToLastOne=function(){
            if("clickable"===e.lastOne()){
              if(e.exam.submit_by_group){
                var t=e.groupsWithSubmission.findIndex((t=>t.id===e.currentGroup.id))-1;
                return e.currentOne.id=e.groupsWithSubmission[
                  t
                ].id
              }
              var s=e.examineesWithSubmission.findIndex((t=>e.currentExaminee.id===t.id))-1;
              return e.currentOne.id=e.examineesWithSubmission[
                s
              ].id
            }
          }, e.goToNextOne=function(){
            if("clickable"===e.nextOne()){
              if(e.exam.submit_by_group){
                var t=e.groupsWithSubmission.findIndex((t=>t.id===e.currentGroup.id))+1;
                return e.currentOne.id=e.groupsWithSubmission[
                  t
                ].id
              }
              var s=e.examineesWithSubmission.findIndex((t=>e.currentExaminee.id===t.id))+1;
              return e.currentOne.id=e.examineesWithSubmission[
                s
              ].id
            }
          }, e.refreshSubmissionCount=function(){
            M.loadExamSubmissionCountStatus(e.exam.id).then((function(t){
              e.allSubmissionCount=t.all_submission_count, e.submissionHasMarkedCount=t.submission_has_marked_count
            }))
          }, e.$watch("currentExaminee.id", (function(t, s){
            if(parseInt(t)!==parseInt(s)&&t&&!s){
              if(0===e.examineesWithSubmission.length){
                var a, r=null===(a=d.search())||void 0===a?void 0:a.conditions;
                M.loadExamExamineeHasSubmission(e.examId, r).then((function(s){
                  e.examineesWithSubmission=s, e.currentOne={
                    id:t
                  }
                }))
              }
              else e.currentOne={
                id:t
              };
              return e.refreshSubmissionCount()
            }
          })), e.$watch("currentGroup.id", (function(t, s){
            if(parseInt(t)!==parseInt(s)&&t&&!s)return 0===e.groupsWithSubmission.length?M.loadExamGroupsWithExamineeHasSubmission(e.examId).then((function(s){
              e.groupsWithSubmission=s, e.currentOne={
                id:t
              }
            })):e.currentOne={
              id:t
            }, e.refreshSubmissionCount()
          })), e.$watch("currentOne.id", (function(t, s){
            if(parseInt(t)!==parseInt(s)&&t&&s){
              if(e.exam.submit_by_group){
                var a=r.find(e.groupsWithSubmission, (e=>e.id===parseInt(t)));
                return d.path("/examinee/".concat(a.examinee_ids[
                  0
                ]))
              }
              return d.path("/examinee/".concat(t))
            }
          })), e.invigilateButtonTips=function(e, t){
            return e?e.submit_by_group?t.group:e.is_practice_mode?t.practice:"":""
          }, e.invigilationDisabled=function(t){
            return!e.exam||!e.exam.enable_invigilation||(e.exam.is_practice_mode||e.exam.submit_by_group)
          }, e.trace=t=>{
            var s={
              activity_id:e.activity.id, activity_type:e.activity.type, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:t
            };
            statistics.track(s)
          }, e.changeTab=(t, s)=>{
            e.tabView=t, s&&e.trace(s)
          };
          var T=(e, t)=>{
            var s;
            return e.id!==t&&(null===(s=e.makeup_exam_paper)||void 0===s?void 0:s.id)===t
          };
          e.showImportSubjectPopup=!1, e.canImport=!1, document.addEventListener("__import-exam-subject-popup-visible", (t=>{
            var s=t.detail.show, a=document.querySelector("import-exam-subject-popup");
            a&&a.show!==s&&(a.show=s, e.showImportSubjectPopup=s)
          }));
          var D=function(){
            var s=S.examId||a("#examId").val();
            if(s)return e.examId=parseInt(s), t.limitedModify=!0, M.initExam(e.examId).then((function(a){
              if(e.exam=a, w.initPublishInfo(e, e.exam), T(a, Number(s))){
                var r=a.make_up_record.makeup_exam, n=r.subjects_rule;
                if(e.exam.exam_subjects_rule=function(e){
                  for(var t=1;
                  t<arguments.length;
                  t++){
                    var s=null!=arguments[
                      t
                    ]
                    ?arguments[
                      t
                    ]
                    :{
                    };
                    t%2?o(Object(s), !0).forEach((function(t){
                      i(e, t, s[
                        t
                      ])
                    })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                  }
                  return e
                }
                ({
                }, e.exam.subjects_rule), Object.assign(e.exam.subjects_rule, n), e.exam.default_options_layout=r.default_options_layout, e.exam.isMakeupExam=!0, (e=>{
                  var t, s=null===(t=e.make_up_record)||void 0===t?void 0:t.makeup_exam;
                  if(!s)return h.error();
                  var a=e.subjects_count, r=s.subjects_count;
                  return a>0&&0===r
                })(a))if((e=>{
                  var t, s, a=e.exam_subjects_rule, r=null===(t=e.make_up_record)||void 0===t||null===(s=t.makeup_exam)||void 0===s?void 0:s.subjects_rule;
                  return a.select_subjects_randomly===r.select_subjects_randomly
                })(a)){
                  var u=document.querySelector("import-exam-subject-popup");
                  u&&(e.showImportSubjectPopup=!0, u.show=e.showImportSubjectPopup)
                }
                else h.info(e.$t("importSubject.canNot"), {
                  timeOut:4e3
                })
              }
              var c;
              e.showExamEditNotice=!(null===(c=e.examUI)||void 0===c||!c.editSubjects||t.progressUi&&(!t.progressUi||t.progressUi.inPreview))&&(e.exam.isMakeupExam?e.exam.makeup_exam_start_notice:e.exam.is_started), A(), O(), e.selectRandomlyExam=!!e.examId&&e.exam.subjects_rule.select_subjects_randomly, e.$emit("activityLoaded", a), e.inMakeUpExam=T(e.exam, e.examId), t.limitedModify=e.exam.limited_modify
            }))
          }, F=(e, t)=>{
            var s, a=null!==(s=t.subjects_rule)&&void 0!==s?s:{
            };
            if(!a.select_subjects_randomly)return!1;
            if(!a.select_subjects_randomly_rule)return!0;
            var r={
            };
            return Object.keys(a.select_subjects_randomly_rule).forEach((function(e){
              r=Object.assign(r, a.select_subjects_randomly_rule[
                e
              ])
            })), !function(e, t){
              if(!t)return!1;
              for(var s=0;
              s<e.length;
              s++){
                var a=e[
                  s
                ].type;
                if("analysis"!==a){
                  if(!t[
                    a
                  ])return!1
                }
                else{
                  var r=e[
                    s
                  ].sub_subjects;
                  if(!r)continue;
                  r.forEach((e=>{
                    if(!t[
                      e.type
                    ])return!1
                  }))
                }
              }
              return!0
            }
            (e, r)
          }, N=t=>{
            var s, a, r;
            if(e.exam.is_practice_mode)return!1;
            var n=null===(s=e.exam.makeup_exam_paper)||void 0===s?void 0:s.id, o=null!==(a=null===(r=e.exam.make_up_record)||void 0===r?void 0:r.makeup_exam)&&void 0!==a?a:{
            };
            return!!n&&F(t, o)
          };
          e.$on("makeup-rule-change", (t=>{
            e.showMakeupExamTips=N(e.makeupExamSubjects)
          }));
          var A=function(){
            var t, s;
            e.exam_or_makeup_exam=e.examId==(null===(t=e.exam.make_up_record)||void 0===t||null===(s=t.makeup_exam)||void 0===s?void 0:s.id)?e.exam.make_up_record.makeup_exam:e.exam, e.exam.makeup_exam_paper&&M.initExamSubjectsSummary(e.exam.makeup_exam_paper.id).then((function(t){
              return e.showMakeupExamTips=N(t), e.makeupExamSubjects=t, e.makeupExamGroupedSubjects=g.groupSubjects(t), e.makeupExamTotalScore=r.reduce(t, ((e, t)=>e.plus(new l(t.point))), new l(0))
            }))
          }, O=function(){
            var t=c(n.mark((function t(){
              var s, r;
              return n.wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:if(s=S.examId||a("#examId").val(), !T(e.exam, s)){
                    t.next=3;
                    break
                  }
                  return t.abrupt("return");
                  case 3:return t.next=5, M.initExamAllSubjects(s);
                  case 5:r=t.sent, e.showExamTips=F(r, e.exam), e.examSubjects=r, e.totalScore=r.reduce(((e, t)=>e.plus(new l(t.point))), new l(0));
                  case 9:case"end":return t.stop()
                }
              }), t)
            })));
            return function(){
              return t.apply(this, arguments)
            }
          }
          ();
          if(e.openBatchOperation=()=>{
            e.batchDeleteItems.batchOperation=!0
          }, e.closeBatchOperation=()=>{
            e.batchDeleteItems.batchOperation=!1, e.$broadcast("close-batch-operation")
          }, e.batchDelete=()=>{
            e.$broadcast("batch-delete")
          }, e.select2OptionsWithUserNo={
            containerCssClass:"select2-user_no", dropdownCssClass:"select2-user_no-drop", formatResult(t){
              var s=a(t.element).data("student"), r="<span class='name truncate-text' tipsy-literal='".concat(E("displayName")(s), "' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(E("displayName")(s), "</span>"), n="<span class='user_no truncate-text' tipsy-literal='".concat(s.user_no, "' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(s.user_no, "</span>");
              return I("<div class='result-wrapper'>".concat(r).concat("<span class='gap'></span>").concat(n, "</div>"))(e)
            }, formatSelection(e){
              return this.formatResult(e)
            }
          }, e.startInvigilate=function(){
            var t=arguments.length>0&&void 0!==arguments[
              0
            ]
            &&arguments[
              0
            ];
            e.exam.is_eztest?window.open(e.exam.invigilation_url, "_blank"):e.invigilationDisabled()||(!0===t?(window.open("/exam/".concat(e.exam.id, "/invigilate"), "_blank"), e.closeInvigilationPopup()):e.startInvigilate(!0))
          }, e.closeInvigilationPopup=function(){
            e.showInvigilationPopup=!1
          }, t.$on("refreshExamSubjectRules", ((e, t)=>{
            M.cleardeferredExam(t), D()
          })), D(), localStorage.getItem("otherDevicesAnsweringTime")){
            var U=localStorage.getItem("otherDevicesAnsweringTime");
            t.otherDevicesAnsweringTime=b.formatDatetime(U), a("#active-on-other-devices-popup").foundation("reveal", "open"), localStorage.removeItem("otherDevicesAnsweringTime")
          }
          e.aiGenerateSubject=c(n.mark((function t(){
            var s;
            return n.wrap((function(t){
              for(;
              ;
              )switch(t.prev=t.next){
                case 0:return t.next=2, M.initExam(e.examId);
                case 2:s=t.sent, j(v, {
                  context:{
                    targetId:s.id, targetType:s.type, isLearningActivity:!0, courseId:e.courseId, moduleId:s.module_id
                  }, airMaxTextLength:Number(e.airMaxTextLength), destroyComponent:!0
                });
                case 4:case"end":return t.stop()
              }
            }), t)
          })))
        }
      ]
    }, 144006:(e, t, s)=>{
      var a=s(248124);
      s(169218), s(269193);
      var r=s(592207);
      function n(e, t){
        if(null==e)return{
        };
        var s, a, r=function(e, t){
          if(null==e)return{
          };
          var s, a, r={
          }, n=Object.keys(e);
          for(a=0;
          a<n.length;
          a++)s=n[
            a
          ], t.indexOf(s)>=0||(r[
            s
          ]
          =e[
            s
          ]);
          return r
        }
        (e, t);
        if(Object.getOwnPropertySymbols){
          var n=Object.getOwnPropertySymbols(e);
          for(a=0;
          a<n.length;
          a++)s=n[
            a
          ], t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e, s)&&(r[
            s
          ]
          =e[
            s
          ])
        }
        return r
      }
      function o(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      function i(e){
        return function(){
          var t=this, s=arguments;
          return new Promise((function(a, r){
            var n=e.apply(t, s);
            function i(e){
              o(n, a, r, i, u, "next", e)
            }
            function u(e){
              o(n, a, r, i, u, "throw", e)
            }
            i(void 0)
          }))
        }
      }
      s(207452), e.exports=[
        "$scope", "$http", "examRepository", "toastr", (e, t, s, o)=>{
          e.formData={
          }, e.makeUpExamId=0, e.randomSubjectConfigError="";
          var u=function(){
            var s=i(r.mark((function s(){
              var a;
              return r.wrap((function(s){
                for(;
                ;
                )switch(s.prev=s.next){
                  case 0:return s.next=2, t.post("/api/exams/".concat(e.exam.id, "/makeup-exam-paper"));
                  case 2:return a=s.sent, s.abrupt("return", a.data.id);
                  case 4:case"end":return s.stop()
                }
              }), s)
            })));
            return function(){
              return s.apply(this, arguments)
            }
          }
          (), c=function(){
            var e=i(r.mark((function e(t){
              var a;
              return r.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, s.initExam(t);
                  case 2:return a=e.sent, e.abrupt("return", a);
                  case 4:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          (), l=()=>{
            var t, s, a, r, n, o, i, u=null!==(t=null===(s=e.exam.make_up_record)||void 0===s?void 0:s.makeup_exam)&&void 0!==t?t:{
            }, c=null!==(a=u.subjects_rule)&&void 0!==a?a:{
            };
            e.formData.select_subjects_randomly=null!==(r=c.select_subjects_randomly)&&void 0!==r&&r, e.formData.shuffle_subjects_randomly=null!==(n=c.shuffle_subjects_randomly)&&void 0!==n?n:"default", e.formData.shuffle_options_randomly=null!==(o=c.shuffle_options_randomly)&&void 0!==o&&o, e.formData.default_options_layout=null!==(i=u.default_options_layout)&&void 0!==i?i:"vertical"
          }, d=()=>{
            e.randomSubjectConfigError=""
          }, m=()=>{
            a("#configure-make-up-exam-popup").foundation("reveal", "close"), l(), d()
          }, p=function(){
            var t=i(r.mark((function t(){
              var s, a, n;
              return r.wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:if(0===e.makeUpExamId||(r=e.makeUpExamId, o=void 0, (null===(o=e.exam.makeup_exam_paper)||void 0===o?void 0:o.id)===r)){
                    t.next=7;
                    break
                  }
                  return t.next=3, c(e.makeUpExamId);
                  case 3:s=t.sent, a=s.make_up_record, n=s.makeup_exam_paper, e.exam.make_up_record=a, e.exam.makeup_exam_paper=n;
                  case 7:l();
                  case 8:case"end":return t.stop()
                }
                var r, o
              }), t)
            })));
            return function(){
              return t.apply(this, arguments)
            }
          }
          ();
          e.selectSubjectsMethodChange=t=>{
            t&&"all_subjects"===e.formData.shuffle_subjects_randomly&&(e.formData.shuffle_subjects_randomly="default")
          }, e.closePopup=m, e.save=i(r.mark((function s(){
            var a, i, c, l, p, b;
            return r.wrap((function(s){
              for(;
              ;
              )switch(s.prev=s.next){
                case 0:return d(), s.next=3, u();
                case 3:return a=s.sent, e.makeUpExamId=a, i="/api/makeup-exams/".concat(e.makeUpExamId), s.prev=6, s.next=9, t.patch(i, e.formData);
                case 9:c=s.sent, r=e.formData, f=void 0, j=void 0, v=void 0, S=void 0, _=void 0, x=void 0, y=void 0, S=null!==(f=null===(j=e.exam.make_up_record)||void 0===j?void 0:j.makeup_exam)&&void 0!==f?f:{
                }, _=null!==(v=S.subjects_rule)&&void 0!==v?v:{
                }, x=r.default_options_layout, y=n(r, [
                  "default_options_layout"
                ]), Object.assign(_, y), S.default_options_layout=x, m(), e.$emit("makeup-rule-change", e.formData), o.success(c.message), s.next=21;
                break;
                case 16:s.prev=16, s.t0=s.catch(6), o.error(e.saveFailed), b=null===(l=s.t0.data)||void 0===l||null===(p=l.errors)||void 0===p?void 0:p.select_subjects_randomly[
                  0
                ], e.randomSubjectConfigError=b;
                case 21:case"end":return s.stop()
              }
              var r, f, j, v, S, _, x, y
            }), s, null, [
              [
                6, 16
              ]
            ])
          }))), p()
        }
      ]
    }, 209541:(e, t, s)=>{
      s(658379), e.exports=[
        "$rootScope", "$scope", "$timeout", function(e, t, s){
          t.showSettingPopup=!1;
          t.changeSubjectSaved=function(){
            t.vueParam.active="more_than_correct"===t.subject.point_rule, t.subject.saved=!1
          };
          var a=function(e){
            var t=0;
            return null==e||e.forEach((e=>{
              e.is_answer&&(t+=1)
            })), t
          }, r=function(){
            var e=0;
            if("multiple_selection"===t.subject.type)e=a(t.subject.options);
            else if("random"===t.subject.type){
              "analysis"===t.subject.limit_type?t.subject.sub_subjects.forEach((t=>{
                t.sub_subjects.forEach((t=>{
                  if("multiple_selection"===t.type){
                    var s=a(t.options);
                    (e<1||s<e)&&(e=s)
                  }
                }))
              })):t.subject.sub_subjects.forEach((t=>{
                if("multiple_selection"===t.type){
                  var s=a(t.options);
                  (e<1||s<e)&&(e=s)
                }
              }))
            }
            return e
          };
          t.vueMethods={
            changeMinimumCount(e){
              t.subject.point_rule_minimum_count=e, t.subject.saved=!1, t.$apply()
            }
          };
          var n=function(){
            t.finishInit=!1, t.subject.point_rule||(t.subject.point_rule="all_correct", t.subject.point_rule_minimum_count=1), t.vueParam={
              currentSubject:t.subject, max:r()
            }, s((()=>{
              t.finishInit=!0
            }))
          };
          return t.$watch("subject", (function(){
            n()
          }), !0), n()
        }
      ]
    }, 212106:(e, t, s)=>{
      var a=s(756029);
      s(678264);
      var r=s(557266);
      e.exports=a.module("exam", [
        "common"
      ]).factory("api", s(427373)).factory("groupApi", s(465857)).factory("EnrollmentFilter", s(827829)).factory("Department", s(860019)).factory("ExamHelper", s(715738)).factory("examRepository", s(489442)).factory("classroomApi", s(612849)).factory("classroomRepository", s(746798)).factory("ExamSubject", s(737016)).factory("ExamNavigationGuard", s(153380).D).factory("sharedApi", s(292144)).factory("subjectLibApi", s(876656)).factory("shtvuApi", s(248473)).factory("shtvuRepository", s(77133)).factory("socket", s(439479)).factory("subjectPointRuleHelper", s(286552)).factory("examApi", s(167663)).directive("parseInteger", r.parseInteger).directive("wheelStopPropagation", r.wheelStopPropagation).directive("vueWrapper", s(557266).vueWrapper).controller("SubjectsEditController", s(541565)).controller("DefaultPaperSubjectsPointRuleController", s(42425)).controller("RandomPaperSubjectsPointRuleController", s(429837)).controller("SubjectEditController", s(343246)).controller("ExamViewController", s(313236)).controller("ExamContentController", s(688750)).controller("ExamScoreListController", s(356092)).controller("ExamCorrectColumnChooserController", s(853134)).controller("ExamScoreMarkController", s(679759)).controller("ExamAttachmentMarkController", s(228614)).controller("ExamPagedStudentStatsController", s(278018)).controller("ExamPreviewController", s(948261)).controller("ExamSubmissionListController", s(655744)).controller("ExamActivityEditController", s(153645)).controller("ExamActivityShowController", s(728994)).controller("ExamRecalculateController", s(699904)).controller("AddSubjectsFromLibraryController", s(395701)).controller("AddSubjectsFromPersonalLibraryController", s(972178)).controller("AddSubjectsFromGroupLibraryController", s(417343)).controller("AddSubjectsFromCourseLibraryController", s(706213)).controller("AddSubjectsFromVtrsLibraryController", s(367265)).controller("AddSubjectsFromNaturesoftLibraryController", s(986899)).controller("AddSubjectsFromCampusLibraryController", s(852409)).controller("ExamController", s(138566)).controller("StatExamScoreDistributionController", s(81384)).controller("StatExamResultController", s(617267)).controller("SaveToLibraryController", s(167459)).controller("StartExamConfirmationPopupController", s(326762)).controller("MakeUpExamPopupController", s(744294)).controller("ZipExamPaperPopupController", s(108920)).controller("InvalidIpConfirmationPopupController", s(249789)).controller("SubjectLibsUploadController", s(333160)).controller("AddSubjectFromStudyPlatformController", s(623752)).controller("AddSubjectFromRandomExtractionShtvuController", s(610281)).controller("AddSubjectFromManualExtractionShtvuController", s(727148)).controller("ConfigureMakeUpExam", s(144006)).controller("MultiSelectPointRuleController", s(209541)).controller("RandomSubjectPopup", s(900923)).controller("ConfigureMakeUpExam", s(144006)).controller("EditSubjectController", s(752105))
    }, 228614:(e, t, s)=>{
      var a=s(248124), r=s(302543);
      s(418665), s(269193), s(683396), s(14602), s(630789);
      var n=s(778435), o=s(966491), i=s(273956);
      e.exports=[
        "$rootScope", "$scope", "$http", "$routeParams", "$filter", "toastr", "storageUploader", "$translate", function(e, t, s, u, c, l, d, m){
          t.loading=!1, t.examId=u.examId||a("#examId").val(), t.subjectAttachmentMap=[
          ];
          var p=t=>{
            e.$broadcast("pdfEditor", t, v(t.subject, t.uploadId, t.fileName)), a("#pdf-editor").foundation("reveal", "open")
          }, b=e=>{
            var t=new Image;
            t.setAttribute("crossOrigin", "anonymous"), t.src=e.url, t.onload=function(){
              var s=document.createElement("canvas");
              s.width=t.width, s.height=t.height;
              t.height, t.width;
              s.getContext("2d").drawImage(t, 0, 0);
              var a=s.toDataURL("image/jpeg", 1);
              e.url=((e, t, s)=>{
                var a=new n("", "pt", "a4"), r=a.internal.pageSize.getWidth(), o=a.internal.pageSize.getHeight(), i=t/r*o, u=s, c=20, l=r-40, d=l/t*s;
                if(u<=i)a.addImage(e, "JPEG", 20, c, l, d);
                else for(;
                u>0;
                )a.addImage(e, "JPEG", 20, c, l, d), c-=o, (u-=i)>0&&a.addPage();
                return URL.createObjectURL(a.output("blob"))
              })(a, s.width, s.height), e.imgURL=window.URL.createObjectURL(i(a)), p(e)
            }, t.crossOrigin=""
          };
          t.$on("changePdfEditor", (function(e, s){
            for(var a=0, r=t.pdfEditorUploadIds.length, n=0;
            n<r;
            n++){
              if(t.pdfEditorUploadIds[
                n
              ]
              ==t.editingUploadId){
                a=n;
                break
              }
            }
            var o=a+s;
            o=o>0?o%r:r-1, t.openEditor(t.pdfEditorUploadIds[
              o
            ], t.activityData.subject)
          })), t.getSubjectAttachmentMap=e=>{
            s.get("/api/submissions/".concat(e, "/submission_marked_attachments")).then((e=>{
              t.subjectAttachmentMap=e.data.marked_attachment_infos
            }))
          }, t.getSubjectAttachmentMapForVue=e=>{
            t.getSubjectAttachmentMap(e), t.submissionId=e
          }, t.openEditor=function(s, a, n){
            t.editingUploadId=s, t.editingSubject=a;
            var o=t.subjectAttachmentMap[
              a.id
            ]
            [
              t.editingUploadId
            ], i=o.origin_upload, u=o.origin_upload.name, c="";
            r.isEmpty(o.marked_attachment)||(c=o.marked_attachment.url), function(s){
              if(t.activityData={
              }, t.activityData.type="exam", t.activityData.subject=s, t.activityData.uploadsLen=s.attachments.length, t.pdfEditorUploadIds=[
              ], s.attachments)for(var a=0;
              a<s.attachments.length;
              a++){
                var r=s.attachments[
                  a
                ];
                e.canEditByPdfEditor(r)&&t.pdfEditorUploadIds.push(r.id)
              }
              e.$broadcast("setActivityData", t.activityData)
            }
            (a);
            var l={
              url:i.url, attachmentUrl:c, name:n, fileName:u, subject:a, uploadId:s, fileType:i.upload.type, imgURL:""
            };
            "image"===i.upload.type?b(l):p(l)
          };
          var f=(e, t)=>d.getUploader(t).upload(e), j=(e, t)=>s.get("/api/submissions/".concat(e, "/subject_marked_attachments/").concat(t)).then((e=>e.data.marked_attachment)), v=(a, n, i)=>(i, u, c)=>{
            var d=e=>{
              console.error(e), l.decorateError()({
                message:m.instant("saveError")
              })
            }, p=t.subjectAttachmentMap[
              a.id
            ]
            [
              n
            ], b=!r.isEmpty(p.marked_attachment), v=null, S=o.base64ToFile(i, "markattachment.txt", "text/plain");
            if(b&&"QINIU"!==p.marked_attachment.storage_type){
              var _=p.marked_attachment;
              v=((e, t, s, a)=>{
                var r={
                  uploadId:s.upload.id, uploadUrl:s.write_url, file:a, transcoder:s.transcoder
                };
                return f(r, s.storage_type).then((()=>j(e, s.upload.id)))
              })(t.submissionId, a.id, _, S).then((e=>{
                p.marked_attachment=e
              }))
            }
            else v=((e, t, a, r)=>{
              var n={
                name:r.name, size:r.size, parent_type:"source_file", parent_id:a, is_scorm:!1, is_wmpkg:!1, is_marked_attachment:!0
              };
              return s.post("/api/uploads", n).then((e=>{
                var t=e.data, s={
                  uploadId:t.id, uploadUrl:t.upload_url, file:r, transcoder:t.transcoder
                };
                return f(s, t.storage_type).then((()=>t))
              })).then((t=>j(e, t.id)))
            })(t.submissionId, a.id, n, S).then((e=>{
              p.marked_attachment=e, a.marked_attachments||(a.marked_attachments=[
              ]), t.subjectAttachmentMap[
                a.id
              ]
              [
                n
              ].marked_attachment=e, s.put("/api/submissions/".concat(t.submissionId, "/subject/").concat(a.id, "/marked_attachment/").concat(e.upload.id)).error(d)
            }));
            v.then((()=>{
              u&&l.decorateSuccess()({
                message:m.instant("saveSuccess")
              })
            })).catch(d).finally((()=>{
              c&&c(p.marked_attachment.url), e.$broadcast("pdfEditor:loading", !1)
            }))
          }
        }
      ]
    }, 249789:(e, t, s)=>{
      var a=s(248124);
      e.exports=[
        "$rootScope", "$scope", "$window", "examRepository", function(e, t, s, r){
          t.examId=a("#examId").val(), e.ipCkeckStatus={
            start:!0, inTest:!1, submit:!1
          }, e.clearCkeckStatus=()=>e.ipCkeckStatus={
            start:!1, inTest:!1, submit:!1
          };
          return t.closePopup=function(){
            return e.ipCkeckStatus.start?void a("#invalid-ip-confirmation-popup").foundation("reveal", "close"):s.location.href="/course/".concat(t.courseId, "/learning-activity#/exam/").concat(t.examId)
          }, t.checkIP=function(){
            if(e.ipCkeckStatus.start)return!1;
            var s=e.ipCkeckStatus.inTest?"in_test":"submit";
            return r.checkExamQualification(t.examId, s, (function(){
              return a("#invalid-ip-confirmation-popup").foundation("reveal", "close"), e.ipCkeckStatus.inTest?t.storageSubmissions():t.confirmSubmissions()
            }), (function(){
            }))
          }
        }
      ]
    }, 278018:(e, t, s)=>{
      var a=s(248124), r=s(302543), n=s(756029), o=s(287092), i=s(793110);
      s(219693), s(700533), s(210557), s(714913), s(334867), s(269193), s(640173), s(850785);
      var u=s(592207);
      function c(e, t){
        var s;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(s=function(e, t){
            if(!e)return;
            if("string"==typeof e)return l(e, t);
            var s=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===s&&e.constructor&&(s=e.constructor.name);
            if("Map"===s||"Set"===s)return Array.from(e);
            if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return l(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            s&&(e=s);
            var a=0, r=function(){
            };
            return{
              s:r, n:function(){
                return a>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    a++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, o=!0, i=!1;
        return{
          s:function(){
            s=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=s.next();
            return o=e.done, e
          }, e:function(e){
            i=!0, n=e
          }, f:function(){
            try{
              o||null==s.return||s.return()
            }
            finally{
              if(i)throw n
            }
          }
        }
      }
      function l(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      function d(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      function m(e){
        return function(){
          var t=this, s=arguments;
          return new Promise((function(a, r){
            var n=e.apply(t, s);
            function o(e){
              d(n, a, r, o, i, "next", e)
            }
            function i(e){
              d(n, a, r, o, i, "throw", e)
            }
            o(void 0)
          }))
        }
      }
      s(207452);
      var p=s(571478), b=s(966491);
      e.exports=[
        "$rootScope", "$scope", "$http", "$routeParams", "ExamHelper", "$filter", "toastr", "examRepository", "ExamSubject", "modelHelper", "$timeout", "statRepository", "filter", function(e, t, s, l, d, f, j, v, S, _, x, y, h){
          var g, M, w=null===(g=window.globalData)||void 0===g||null===(M=g.course)||void 0===M?void 0:M.orgId, E=a("#courseId").val();
          t.condition={
            org_id:null, department_ids:[
            ], grade_ids:[
            ], class_ids:[
            ], section_ids:[
            ], statuses:[
            ], keyword:"", learning_center:!0
          }, t.preOrgId=null, t.vueParam={
            disabled:!0, departments:[
            ]
          }, t.vueMethods={
            updateConditionDepartmentIds:e=>{
              x((()=>{
                t.condition.department_ids=e, t.search()
              }))
            }
          }, t.fromStudentList=!0, t.elementId="#org-select-open-university", t.pagedStudentIds=[
          ], t.groups=[
          ], t.finalCalculate={
            multiplier:1, plusScore:0
          }, t.pageSize=100, t.checkAllSelected=e=>r.every(e, {
            checked:!0
          }), t.switchAll=function(e){
            var s=t.checkAllSelected(e);
            return e.map((e=>e.checked=!s))
          };
          var I=function(e){
            t.pages=e.pages, t.pageIndex=e.page, t.result=e
          };
          t.changePage=function(){
            var e=m(u.mark((function e(s){
              var a;
              return u.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, C(s);
                  case 2:if(a=e.sent, I(a), !t.examId){
                    e.next=6;
                    break
                  }
                  return e.abrupt("return", W());
                  case 6:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          ();
          var C=function(){
            var e=m(u.mark((function e(s){
              var a, r, n, o, i, c, l, d;
              return u.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(t.pageIndex=s, a=t.exam.assign_student_ids&&t.exam.assign_student_ids.length>0, r={
                  }, !a){
                    e.next=20;
                    break
                  }
                  return n=t.exam.assign_student_ids, o=1===t.pageIndex?1:(t.pageIndex-1)*t.pageSize, i=n.length, c=t.pageIndex*t.pageSize>i?i:t.pageIndex*t.pageSize, l=Math.ceil(i/t.pageSize), d=t.pageIndex, r={
                    end:c, start:o, page:d, pages:l, total:i, enrollments:[
                    ]
                  }, t.pagedStudentIds=n.slice((t.pageIndex-1)*t.pageSize, t.pageIndex*t.pageSize), e.next=14, v.initEnrollmentsWithUserIds(t.courseId, n);
                  case 14:if(e.t0=e.sent, e.t0){
                    e.next=17;
                    break
                  }
                  e.t0=[
                  ];
                  case 17:t.filteredExaminees=e.t0, e.next=25;
                  break;
                  case 20:return e.next=22, y.initPagedStudents(t);
                  case 22:r=e.sent, t.filteredExaminees=r.enrollments, t.pagedStudentIds=r.enrollments.map((e=>e.user_id));
                  case 25:return e.next=27, G();
                  case 27:return e.abrupt("return", r);
                  case 28:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          ();
          t.showSubjectsSummary=(e, t, s)=>d.getSubjectsSummary(e, t, s), t.showSubjectsScore=function(e, t){
            return e<100?"，".concat(t.suffix.replace("{}", e), " ( ").concat(t.tip, " )"):"，".concat(t.suffix.replace("{}", e))
          }, t.loading=!1, t.examId=l.examId||a("#examId").val();
          var P=p(t);
          t.ui=d.getUIHelper(), t.edit=function(e){
            return e.showEdit=!0, x((()=>a("#input-".concat(e.id))[
              0
            ].focus()), 100)
          }, t.ui.containsSubmissionNoScore=e=>r.some(e.submissions, (e=>null===e.score)), t.getSubjectIndex=function(e, s){
            if(t.subjects)return d.getSubjectIndex(e, s, t.subjects)
          }, t.resetSubject=function(e){
            e.showEdit=!1
          }, t.editScore=function(e){
            t.autoSaveScore(e, (()=>{
              e.showEdit=!1, e.error=""
            }), null)
          }, t.submissionData={
          };
          var k=function(e){
            var s=r.findIndex(t.originalExaminees, {
              id:e.id
            }), a=null;
            return s+1<t.originalExaminees.length&&(a=r.find(t.originalExaminees, {
              id:t.originalExaminees[
                s+1
              ].id
            })), a&&a.submitted?t.nextExaminee=r.find(t.examinees, {
              id:a.id
            }):t.nextExaminee=null
          };
          t.$watch("submissionData.id", (function(e, t){
            if(e!==t&&t)return T(e), D()
          })), t.giveScoreTo=function(s){
            var a=!(arguments.length>1&&void 0!==arguments[
              1
            ])||arguments[
              1
            ];
            if(a&&(t.originalExaminees=n.copy(t.examinees)), e.currentExaminee=t.currentExaminee=r.find(t.examinees, s), t.currentExaminee.submitted)return k(t.currentExaminee), T(t.currentExaminee.submissions[
              0
            ].id, !0), D()
          };
          var T=function(s){
            var a, n=arguments.length>1&&void 0!==arguments[
              1
            ]
            &&arguments[
              1
            ];
            return n&&(t.submissionData.id=s), a=t.currentExaminee?r.find(t.currentExaminee.submissions, {
              id:parseInt(s)
            }):r.find(t.currentGroup.submissions, {
              id:parseInt(s)
            }), t.submissionData.score=a.score, e.submissionData=t.submissionData
          };
          t.goNextExamineeSubmission=function(){
            return t.save((function(){
              if(t.nextExaminee)return t.giveScoreTo(t.nextExaminee, !1)
            }))
          };
          var D=function(){
            var e=function(e){
              t.instanceId=e.instance_id, t.subjects=r.map(e.subjects_data.subjects, (e=>S.createSubjectBySavedSubject(e, !1))), t.auto_mark=e.auto_mark;
              var s=e.submission_data.subjects, a=e.correct_answers_data.correct_answers, n=e.submission_score_data, o=e.submission_comment_data;
              return d.updateSubjectsDetailData(t.subjects, s, a, n, o), N(), F()
            };
            if(t.examId&&s.get("/api/exams/".concat(t.examId, "/submissions/").concat(t.submissionData.id)).success(e).error((function(){
            })), t.classroomId)return s.get("/api/classroom-exams/".concat(t.classroomId, "/submissions/").concat(t.submissionData.id)).success(e).error((function(){
            }))
          }, F=function(){
            var e, s=0, n=0, o=0, i=0, u=0, l=0;
            t.manualEditMark=!0, r.each(t.subjectList, (function(e){
              if("short_answer"!==e.type){
                var t=parseFloat(e.score);
                return r.isFinite(t)&&(l+=1), o+=1, s+=parseFloat(e.score)
              }
              i+=1;
              var a=parseFloat(e.score);
              if(r.isFinite(a))return n+=a, u+=1
            }));
            var d=o>0, m=i>0&&i===u, p=0===i||m;
            return 0===i&&(t.manualEditMark=l===o&&null!==t.submissionData.score), t.objectiveQuestionScore=d?parseFloat(s.toFixed(1)):"--", t.objectiveQuestionScore=parseFloat(s.toFixed(1)), t.subjectiveQuestionScore=m?parseFloat(n.toFixed(1)):"--", t.score="--", t.manualEditMark&&(t.score=p?parseFloat((s+n).toFixed(1)):"--"), t.currentExaminee&&(e=t.currentExaminee.submissions), t.currentGroup&&(e=t.currentGroup.submissions), (()=>{
              var s, r=[
              ], n=c(e);
              try{
                for(n.s();
                !(s=n.n()).done;
                ){
                  var o=s.value, i=parseFloat(o.score);
                  if(isNaN(i)?o.submissionStatus="".concat(f("datetime")(o.submitted_at), "&nbsp; ").concat(o.submit_method_text)+"&nbsp; ( ".concat(t.notMarked, " )"):(o.score=i, o.submissionStatus="".concat(f("datetime")(o.submitted_at), "&nbsp; ").concat(o.submit_method_text)+"&nbsp; ( ".concat(t.scoreLabel, " ：").concat(o.score, " )")), parseInt(o.id)===parseInt(t.submissionData.id)){
                    var u=a("#s2id_submission .select2-line-content");
                    u.length?r.push(u[
                      0
                    ].innerHTML=o.submissionStatus):r.push(void 0)
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
              return r
            })()
          };
          t.onUpdateObjectiveScore=function(e){
            return s.post("/api/exams/".concat(t.exam.id, "/manualscoring/").concat(e)).success(j.decorateSuccess((function(e){
              t.manualEditMark=!0, r.find(t.currentExaminee.submissions, {
                id:parseInt(t.submissionData.id)
              }).score=e.score, T(e.id), F(), t.refreshSubmissionCount()
            }))).error(j.decorateError((function(){
            })))
          };
          var N=function(){
            t.subjectList=[
            ];
            var e, s=0, a=c(t.subjects);
            try{
              for(a.s();
              !(e=a.n()).done;
              ){
                var r=e.value;
                if("text"!==r.type)if(s+=1, r.number="".concat(s), "analysis"===r.type){
                  var n, i=0, u=c(r.sub_subjects);
                  try{
                    for(u.s();
                    !(n=u.n()).done;
                    ){
                      var l=n.value;
                      i+=1, l.number="".concat(s, ".").concat(i), t.subjectList.push(l)
                    }
                  }
                  catch(e){
                    u.e(e)
                  }
                  finally{
                    u.f()
                  }
                }
                else t.subjectList.push(r)
              }
            }
            catch(e){
              a.e(e)
            }
            finally{
              a.f()
            }
            return t.rowList=o.range(0, Math.ceil(t.subjectList.length/5)-1, !0), t.columnList=[
              0, 1, 2, 3, 4
            ]
          }, A=e=>({
            subject_id:e.id, score:e.score, instance_id:t.instanceId, parent_id:e.parent_id
          }), O=function(e){
            var s, a=[
            ];
            return s=e?[
              e
            ]
            :t.subjects, r.each(s, (function(e){
              if("short_answer"!==e.type&&"fill_in_blank"!==e.type||a.push(A(e)), "analysis"===e.type)return a=a.concat((e=>r.map(r.filter(e, {
                type:"short_answer"
              }), A))(e.sub_subjects))
            })), a
          }, U=(e, s)=>(()=>{
            for(var a=[
            ], n=0;
            n<e.length;
            n++){
              var o=e[
                n
              ];
              if(o.score){
                var i=r.find(t.subjects, (e=>e.id===s[
                  n
                ].subject_id));
                i=$(t.subjects, s[
                  n
                ]), a.push(i.error=o.score)
              }
              else a.push(void 0)
            }
            return a
          })(), $=function(e, t){
            if(!t.parent_id)return r.find(e, {
              id:t.subject_id
            });
            var s=r.find(e, {
              id:t.parent_id
            });
            return r.find(s.sub_subjects, {
              id:t.subject_id
            })
          };
          t.save=function(t){
            return e.currentGroup?V(t):L(t)
          };
          var R=(e, t, s)=>statistics.track({
            activity_id:e, activity_type:"exam", action:statistics.enums.Action.give_score, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, target_info:{
              id:t, type:s, is_student:!0
            }
          }), L=function(){
            var e=arguments.length>0&&void 0!==arguments[
              0
            ]
            &&arguments[
              0
            ], a=arguments.length>1?arguments[
              1
            ]
            :void 0, n=arguments.length>2?arguments[
              2
            ]
            :void 0, o=O(e), i=function(e){
              if(P.hide(), e.message&&j.warning(e.message), n&&n(), e.errors)return U(e.errors.graded_subjects, o)
            }, u=function(e){
              P.hide(), j.success();
              var s=r.find(t.examinees, {
                id:t.currentExaminee.id
              });
              s.score=e.exam_score;
              var n=r.find(t.currentExaminee.submissions, {
                id:parseInt(t.submissionData.id)
              });
              if(n.score=e.submission_score, s.waitingForScore=!1, T(n.id), D(), t.refreshSubmissionCount(), R(t.examId, t.currentExaminee.id, "personal"), a)return a()
            }, c=()=>({
              examinee_id:t.currentExaminee.id, graded_subjects:o, submission_id:t.submissionData.id
            });
            return P.show(), s.post("/api/exams/".concat(t.examId, "/give-score"), c()).success(u).error(i)
          }, V=function(){
            var a=arguments.length>0&&void 0!==arguments[
              0
            ]
            &&arguments[
              0
            ], n=arguments.length>1?arguments[
              1
            ]
            :void 0, o=arguments.length>2?arguments[
              2
            ]
            :void 0, i=O(a), u=function(e){
              if(P.hide(), e.message&&j.error(e.message), o&&o(), e.errors)return U(e.errors.graded_subjects, i)
            }, l=function(s){
              P.hide(), j.success();
              var a=r.find(e.currentGroup.submissions, {
                id:parseInt(t.submissionData.id)
              });
              a.score=s.submission_score;
              var o, i=c(e.currentGroup.examinees);
              try{
                for(i.s();
                !(o=i.n()).done;
                ){
                  o.value.score=s.exam_score
                }
              }
              catch(e){
                i.e(e)
              }
              finally{
                i.f()
              }
              if(t.submissionData.score=a.score, e.submissionData=t.submissionData, F(), t.refreshSubmissionCount(), R(t.examId, e.currentGroup.id, "group"), n)return n()
            }, d=()=>({
              examinee_ids:e.currentGroup.members, graded_subjects:i, submission_id:t.submissionData.id, group_submission_ids:r.map(e.currentGroup.submissions, "id")
            });
            return P.show(), s.post("/api/exams/".concat(t.examId, "/give-scores"), d()).success(l).error(u)
          };
          t.search=function(){
            return t.changePage(1)
          }, t.removeError=function(e){
            if(delete e.error, parseFloat(e.score)>e.getPoint())return e.error=t.invalidScoreMessage
          }, t.autoSaveScore=function(t, s){
            return e.currentGroup?V(t, s):L(t, s)
          }, t.autoSaveSubmissionComment=function(e){
            var a={
              subject_id:e.id, comment:e.comment
            };
            return s.put("/api/exams/".concat(t.examId, "/submissions/").concat(t.submissionData.id, "/comment"), a).success((e=>j.success(e.message))).error((e=>j.error(e.errors.comment)))
          }, t.bindLeftCommentLength=function(e, t){
            e.comment?e.leftCommentLength=t-e.comment.length:e.leftCommentLength=t
          }, t.commentContentExceeded=function(e, s, a){
            s&&(e.comment=e.comment.substr(0, a)), t.bindLeftCommentLength(e, a)
          };
          var B=function(s){
            return t.examinees=r.map(s, (function(e){
              var s, a, n;
              e.studentInfo=_.getBelongTo(e), e.waitingForScore=e.submitted&&null===e.score, e.score=b.formatFloat(e.score), null!==e.final_score&&""!==e.final_score||!e.score||(e.final_score=e.score), e.final_score=b.formatFloat(e.final_score), e.status=e.status_code, e.submissionTime=(s=e.submissions, a="", (n=r.find(s, {
                is_latest_version:!0
              }))&&n.submitted_at&&(a=n.submitted_at), a), e.lastSubmitMethodText=function(e){
                var t="", s=r(e).filter((e=>e.is_latest_version&&e.submitted_at)).sortBy("submitted_at").reverse().first();
                return s&&s.submit_method_text&&(t=s.submit_method_text), t
              }
              (e.submissions), e.status_comment=e.status_comment||"";
              var o=r.find(t.filteredExaminees, {
                id:e.id
              });
              return e.department=o.department, e.learning_center=o.learning_center, e.checked=!1, e
            })), e.examinees=t.examinees, t.pagedExaminees=t.examinees, t.reloadExam=!1, (e=>(()=>{
              var t, s=[
              ], a=c(e);
              try{
                for(a.s();
                !(t=a.n()).done;
                ){
                  var r, n=t.value, o=0, i=c(n.submissions);
                  try{
                    for(i.s();
                    !(r=i.n()).done;
                    )r.value.marked&&(o+=1)
                  }
                  catch(e){
                    i.e(e)
                  }
                  finally{
                    i.f()
                  }
                  s.push(n.marked=o);
                  var u=o>0?"marked":"unmarked";
                  s.push(n.mark=u)
                }
              }
              catch(e){
                a.e(e)
              }
              finally{
                a.f()
              }
              return s
            })())(t.examinees)
          }, G=function(){
            var e=m(u.mark((function e(){
              return u.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(0!==t.pagedStudentIds.length){
                    e.next=4;
                    break
                  }
                  examinees=[
                  ], e.next=7;
                  break;
                  case 4:return e.next=6, v.initExaminees(t.examId, !0, examineeIds=t.pagedStudentIds);
                  case 6:examinees=e.sent;
                  case 7:B(examinees);
                  case 8:case"end":return e.stop()
                }
              }), e)
            })));
            return function(){
              return e.apply(this, arguments)
            }
          }
          ();
          t.$on("afterSaveMakeUpExam", (function(){
            return t.reloadExam=!0, H()
          })), t.showPreviewScore=function(){
            return t.previewScore=!t.previewScore, t.calculateScore(), W()
          }, t.calculateScore=function(){
            if(t.previewScore){
              var e, s=c(t.examinees);
              try{
                for(s.s();
                !(e=s.n()).done;
                ){
                  var a=e.value;
                  !a.submitted&&!t.exam.submit_by_group||a.waitingForScore||(a.preCalculatedScore=(a.score*parseFloat(t.finalCalculate.multiplier||1)+parseFloat(t.finalCalculate.plusScore||0)).toFixed(1), a.calculateOverScoreRange=a.preCalculatedScore>100, a.preCalculatedScore>100&&(a.preCalculatedScore=100))
                }
              }
              catch(e){
                s.e(e)
              }
              finally{
                s.f()
              }
            }
            return!1
          }, t.showScorePopup=function(e, s){
            return t.confirmTitle=e, t.calculateType=s, a("#calculate-score-confirmation-popup").foundation("reveal", "open"), !1
          }, t.isNoScore=function(e){
            return!(!e||void 0!==e.score&&""!==e.score&&null!==e.score)
          };
          a(window).resize((()=>q()));
          var q=function(){
            var e=a(".activity-header").width(), s=a("#submission-list").width(), r=s>e?s:e;
            return(null!=t.exam?t.exam.submit_by_group:void 0)?a(".group-row").width(r):a(".exam-row").width(r)
          }, W=()=>x((function(){
            return q(), a(".sync-scroll").scroll((()=>x((function(){
              return a(".sync-scroll-top").scrollLeft(a(".sync-scroll").scrollLeft()), a(".sync-scroll-header").scrollLeft(a(".sync-scroll").scrollLeft())
            }), 100))), a(".sync-scroll-top").scroll((()=>x((function(){
              return a(".sync-scroll").scrollLeft(a(".sync-scroll-top").scrollLeft()), a(".sync-scroll-header").scrollLeft(a(".sync-scroll-top").scrollLeft())
            }), 100))), function(){
              t.ui.isFullScreenMode||a(window).bind("scroll", (function(){
                if(a(".activity-info").length>0)return t.ui.tableHeadAtTop=a(".activity-info")[
                  0
                ].getBoundingClientRect().top<=0, t.$apply()
              }));
              var e=a("#submission-list").width();
              a(".scrollbar-content").width(e)
            }
            ()
          })), H=function(){
            var e, s=null!==(e=b.loadCorrectColumnSetting(t.examId, "exam"))&&void 0!==e?e:{
              column:{
              }
            };
            return t.examCorrectColumnSetting=s.column, t.columnSetting=r.merge(d.getDefaultColumnSetting(), t.examCorrectColumnSetting), v.initExam(t.examId).then((function(e){
              t.exam=e
            }))
          };
          t.getIndex=(e, t)=>5*e+t, t.scrollTo=function(e){
            var t, s=a("li#subject-".concat(e).replace(".", "\\.")).offset().top;
            t="1"===e||e.indexOf(".1")>0?93:60;
            var r=s+a("div#left-frame").scrollTop()-t;
            return a("div#left-frame").animate({
              scrollTop:r
            }, 500), !0
          }, t.getStudentInfo=_.getBelongTo, t.selectedCanMakeUp=function(){
            return(!t.exam||!t.exam.is_in_progress)&&(!!t.pagedExaminees&&r.some(t.pagedExaminees, "checked"))
          }, t.makeUpExam=function(){
            var e, s=[
            ], a=c(t.pagedExaminees);
            try{
              for(a.s();
              !(e=a.n()).done;
              ){
                var r=e.value;
                r.checked&&s.push(r)
              }
            }
            catch(e){
              a.e(e)
            }
            finally{
              a.f()
            }
            if(s.length>0)return t.$broadcast("makeUpExam", t.exam, s, 0)
          }, t.$on("reloadAfterCalculate", (function(){
            t.changePage(1)
          })), t.examId&&H(), t.examId&&v.initExamSubjectsSummary(t.examId).then((function(e){
            t.subjects=t.subjects||e, t.groupedSubjects=d.groupSubjects(e), t.totalScore=r.reduce(e, ((e, t)=>e.plus(new i(t.point))), new i(0))
          }));
          !function(e){
            h.clearFilter(t), h.initOrgDepartments(t, e).then((()=>{
              t.vueParam.departments=r.cloneDeep(t.departments)
            })), h.initCourseSections(t, E, e), h.initCourseOrgs(t, E, "student")
          }
          (w), v.initExam(t.examId).then((()=>{
            t.changePage(1)
          }))
        }
      ]
    }, 313236:(e, t, s)=>{
      var a=s(248124), r=s(756029), n=s(795093);
      s(418665), s(700533), s(184095), s(269193), s(905880), s(683396), s(979073), s(906048), s(43148), s(348825), s(850785), s(658379), s(14602);
      var o=s(592207);
      function i(e, t){
        var s=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var a=Object.getOwnPropertySymbols(e);
          t&&(a=a.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), s.push.apply(s, a)
        }
        return s
      }
      function u(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var s=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?i(Object(s), !0).forEach((function(t){
            c(e, t, s[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
          }))
        }
        return e
      }
      function c(e, t, s){
        return t in e?Object.defineProperty(e, t, {
          value:s, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =s, e
      }
      function l(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var s=[
          ], a=!0, r=!1, n=void 0;
          try{
            for(var o, i=e[
              Symbol.iterator
            ]
            ();
            !(a=(o=i.next()).done)&&(s.push(o.value), !t||s.length!==t);
            a=!0);
          }
          catch(e){
            r=!0, n=e
          }
          finally{
            try{
              a||null==i.return||i.return()
            }
            finally{
              if(r)throw n
            }
          }
          return s
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return d(e, t);
          var s=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===s&&e.constructor&&(s=e.constructor.name);
          if("Map"===s||"Set"===s)return Array.from(e);
          if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return d(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function d(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      function m(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      function p(e){
        return function(){
          var t=this, s=arguments;
          return new Promise((function(a, r){
            var n=e.apply(t, s);
            function o(e){
              m(n, a, r, o, i, "next", e)
            }
            function i(e){
              m(n, a, r, o, i, "throw", e)
            }
            o(void 0)
          }))
        }
      }
      s(207452);
      var b=s(832992), f=s(731904), j=f._, v=f.setDisableDevtool, S=s(966491).Timer, _=s(364523).initSubjectGroups, x=s(512270);
      e.exports=[
        "$rootScope", "$scope", "$routeParams", "$http", "ExamHelper", "toastr", "statHelper", "$q", "$window", "$interval", "examRepository", "ExamSubject", "$filter", "$timeout", "fileSelectModel", "$location", "socket", "storageUploader", "$sce", function(){
          var e=p(o.mark((function e(t, i, c, d, m, f, y, h, g, M, w, E, I, C, P, k, T, D, F){
            var N, A, O, U, $, R, L, V, B, G, q, W, H, z, Q, J, Y, Z, K, X, ee, te, se, ae, re, ne, oe, ie, ue, ce, le, de, me, pe, be, fe, je, ve, Se, _e, xe, ye, he, ge, Me, we, Ee, Ie, Ce, Pe, ke, Te, De, Fe, Ne, Ae, Oe, Ue, $e, Re, Le, Ve, Be, Ge, qe, We, He, ze, Qe, Je, Ye, Ze, Ke, Xe, et, tt, st, at, rt, nt, ot, it, ut, ct, lt;
            return o.wrap((function(e){
              for(;
              ;
              )switch(e.prev=e.next){
                case 0:return et=function(){
                  var e="return_window", t=t=>{
                    t!==e&&(e=t, w.addExamineeAction(i.examId, i.userId, H?H.id:0, t))
                  }, s={
                    focusEvent:{
                      focus:()=>t("return_window"), blur:()=>t("leave_window")
                    }, beforeunloadEvent:{
                      beforeunload:()=>t("leave_window")
                    }
                  }, a=e=>{
                    if(e in s)for(var t=0, a=Object.entries(s[
                      e
                    ]);
                    t<a.length;
                    t++){
                      var r=l(a[
                        t
                      ], 2), n=r[
                        0
                      ], o=r[
                        1
                      ];
                      g.addEventListener(n, o)
                    }
                  }, r=e=>{
                    if(e in s)for(var t=0, a=Object.entries(s[
                      e
                    ]);
                    t<a.length;
                    t++){
                      var r=l(a[
                        t
                      ], 2), n=r[
                        0
                      ], o=r[
                        1
                      ];
                      g.removeEventListener(n, o)
                    }
                  };
                  return{
                    startTracking:a, stopTracking:r, startTrackingAllEvents:()=>{
                      for(var e in s)a(e)
                    }, stopTrackingAllEvents:()=>{
                      for(var e in s)r(e)
                    }, stopTrackingFocusEventWithReason:e=>{
                      r("focusEvent"), j.includes([
                        "leave_window_limit", "leave_window_timeout"
                      ], e)&&t("leave_window")
                    }
                  }
                }, i.answerSheet={
                  flatSubjects:[
                  ], progress:{
                    answered:0, total:0, totalPoint:0
                  }
                }, i.trustSrc=e=>F.trustAsResourceUrl(e), e.next=5, _(i, !0);
                case 5:O=e.sent, U=O.buildSubjectGroup, $=O.getSubjectIndexInGroup, R=O.subjectGroupState, L=O.flatGroupSubjects, V="/preview"===k.path(), t.progressUi||(t.progressUi={
                  answeredNum:0, subjectsNum:0, inPreview:V, leftTime:"", leftTimeSeconds:0, uncompletedSubjectCnt:0, showUpdateLeftTimeWarning:!1, status:"notStarted"
                }), i.inExam=!0, i.examId=c.examId||a("#examId").val(), i.userId=j.parseInt(a("#userId").data("id")), i.isStudent="True"!==a("#enrollmentIsInstructor").val()&&"True"!==a("#enrollmentIsInstructorAssistant").val(), i.ui=m.getUIHelper(), i.ui.examSubmitted=!1, i.ui.pending=!1, i.ui.loadFinished=!1, i.ui.fullscreen=!1, i.ui.blurTriggered=!1, i.enableAntiCheat=!1, i.isAlertPopupOpen=!1, i.hasPendingSubmission=!1, B=a("#courseId").val(), G=null, q=null, W=null, H=null, z=null, Q="", J=[
                ], Y=et(), Z=a("#invigilation-warning-popup"), K=a("#exam-terminated-popup"), X=new S, i.alert={
                }, i.exam=i.exam||{
                }, i.uploadWithName=function(e){
                  return e.name
                }, ee=function(){
                  j.each(J, (function(e){
                    return e(), !0
                  }))
                }, g.addEventListener("hashchange", (function(){
                  q&&(M.cancel(q), q=null)
                })), document.onkeydown=e=>{
                  i.exam.is_fullscreen_mode&&(9===e.keyCode&&e.preventDefault())
                }, te=e=>d.get("/api/exams/".concat(e.id, "/left_time")).success((t=>e.left_time=t.left_time)).error((function(){
                })), se=null===(N=window.globalData)||void 0===N?void 0:N.user.userNo, ae=null===(A=window.globalData)||void 0===A?void 0:A.user.name, i.usernameAndUserNo="".concat(ae, "***").concat(se), i.loadComponents=()=>{
                  Promise.resolve().then(s.bind(s, 678264))
                }, i.ui.get_subject_attachments=e=>{
                  var t=e.attachments||[
                  ];
                  if(!i.enableAntiCheat||!i.exam.is_leaving_window_constrained&&!i.exam.is_leaving_window_timeout)return t;
                  var s=[
                  ];
                  return t.forEach((e=>{
                    var t=JSON.parse(JSON.stringify(e));
                    t.allow_download=!1, s.push(t)
                  })), s
                }, re=()=>{
                  var e=navigator.userAgent.toLowerCase();
                  /safari/.test(e)&&/applewebkit/.test(e)&&!/chrome/.test(e)&&i.ui.blurTriggered?i.ui.blurTriggered=!1:("visible"===document.visibilityState&&H&&H.id&&!i.ui.examSubmitted&&te(H), i.ui.browserCurrentTabHidden="hidden"===document.visibilityState, "hidden"===document.visibilityState&&(i.exam.is_leaving_window_constrained||i.exam.is_leaving_window_timeout)&&(i.isFileSelectOpen&&a("#file-select").foundation("reveal", "close"), g.dispatchEvent(new Event("blur"))))
                }, ne=j.debounce(re, 2500), document.addEventListener("visibilitychange", ne), i.$on("fileSelectOpen", (function(){
                  P.limitTypes=[
                  ], P.checkIsSelectable=e=>!e.is_folder;
                  return w.addExamineeAction(i.examId, i.userId, H?H.id:0, "upload_file"), i.isFileSelectOpen=!0
                })), a("#file-select").bind("closed.fndtn.reveal", (function(){
                  !i.exam.is_fullscreen_mode||V||i.ui.browserCurrentTabHidden||Je();
                  return w.addExamineeAction(i.examId, i.userId, H?H.id:0, "upload_file_done"), i.isFileSelectOpen=!1
                })), i.openFileSelectPopup=function(e){
                  a("#file-select").foundation("reveal", "open");
                  var t=e.attachments.map((e=>e.id));
                  return t&&t.length>0&&a("#file-select").trigger("preCheckFiles", {
                    fileIds:t
                  }), z=e
                }, i.addAttachments=function(e){
                  if(z){
                    var t=z.attachments.concat(e), s=[
                    ];
                    return j.forEach(t, (function(e){
                      var t=j.pick(e, [
                        "id", "name", "created_at", "thumbnail", "type", "size", "source", "status"
                      ]);
                      return t.url="/api/uploads/".concat(t.id, "/in-rich-content?created_at=").concat(t.created_at), t.allow_download=!0, s.push(t)
                    })), z.attachments=s, We(z), i.calProgress(), _e(), G=null, z=null
                  }
                }, i.deleteFile=function(e, t){
                  var s=[
                  ];
                  return j.forEach(t.attachments, (function(t){
                    if(t.id!==e.id)return s.push(t)
                  })), t.attachments=s, We(t), i.calProgress(), _e(), G=null
                }, i.getSubjectIndex=function(e, t){
                  if(i.subjects){
                    var s=$(e);
                    return-1!==s?s:m.getSubjectIndex(e, t, i.subjects)
                  }
                }, oe=function(){
                  return j.map(i.subjects, (function(e){
                    if(!0===e.unsaved)return e.unsaved=!1
                  })), j.mapValues(i.examSubjects, (function(e){
                    return e.synced=!0, e.synced_failed_times=0
                  }))
                }, ie=e=>j.map(e, (function(e){
                  return i.examSubjects[
                    e
                  ].subject.unsaved=!1, i.examSubjects[
                    e
                  ].synced=!0, i.examSubjects[
                    e
                  ].synced_failed_times=0
                })), ue=function(){
                  var e=!1;
                  return j.mapValues(i.examSubjects, (function(t){
                    if(t.synced||(t.synced_failed_times+=1), t.synced_failed_times>3)return e=!0
                  })), e
                }, i.onChangeSubmission=function(e){
                  V||We(e), _e()
                }, i.calProgress=function(e){
                  var t=!(arguments.length>1&&void 0!==arguments[
                    1
                  ])||arguments[
                    1
                  ];
                  V&&(e&&(e.isFocus=!1), _e());
                  var s=function(e){
                    return H=e, ze(), e.updated_ids?ie(e.updated_ids):oe(), Ve()
                  }, a=function(e, t){
                    e&&t&&-1!=t||f.warning(i.i18nMessages.connectionErrorMessage);
                    var s=e.message||i.i18nMessages.updateErrorMessage;
                    return ue()?(e&&500===t?f.error("".concat(i.i18nMessages.updateErrorMessage, ".")):new RegExp(/5[
                      0-9
                    ]
                    {
                      2
                    }
                    /).test(t)?f.error("".concat(i.i18nMessages.updateErrorMessage, ".（").concat(t, "）")):f.error("".concat(s, ".（").concat(t, "）")), Ve()):((null!=H?H.id:void 0)?e.message&&f.error(e.message):f.error("".concat(s, "...（").concat(t, "）")), Ve())
                  };
                  return e&&(G=e), xe(s, a, t)
                }, i.calSubjectsPointValue=m.calSubjectsPointValue, ce=function(){
                  var e=j.reduce(i.subjects, (function(e, t){
                    var s=t.collectAnswerData();
                    return r.isDefined(s)&&(r.isArray(s)?e.push(...j.flatten(s)):e.push(s)), e
                  }), [
                  ]), s=t.progressUi;
                  return{
                    exam_paper_instance_id:i.examPaperInstanceId, exam_submission_id:(null!=H?H.id:void 0)||null, subjects:e, progress:{
                      answered_num:s.answeredNum, total_subjects:j.max([
                        s.subjectsNum, s.subjects.length
                      ])
                    }
                  }
                }, le=(e, t)=>{
                  "single_selection"===e.type||"true_or_false"===e.type?j.isEmpty(t.answer_option_ids)||(e.answeredOption=t.answer_option_ids[
                    0
                  ]):"multiple_selection"===e.type?j.each(t.answer_option_ids, (t=>j.find(e.options, {
                    id:t
                  }).checked=!0)):"short_answer"===e.type?(e.answered_content=t.answer, t.attachments||(t.attachments=[
                  ]), e.attachments=t.attachments):"fill_in_blank"===e.type&&(e.answers=t.answers)
                }, de=function(e){
                  return e&&e.id?me(e):xe((function(e){
                    e&&e.id&&me(e)
                  }), (function(e){
                    i.ui.examSubmitted=!0, f.warning(e.message), g.location.href="/course/".concat(B, "/learning-activity#/exam/").concat(i.examId)
                  }))
                }, me=function(e){
                  te(H=e), ze(), He(), fe(), be(), pe(), _e()
                }, pe=function(){
                  var e=p(o.mark((function e(){
                    var t, s;
                    return o.wrap((function(e){
                      for(;
                      ;
                      )switch(e.prev=e.next){
                        case 0:if(!(null!==(t=window.featureToggles)&&void 0!==t&&t.examRecordPlayProgress&&H&&H.id)){
                          e.next=5;
                          break
                        }
                        return e.next=3, d.get("/api/exams/submissions/".concat(H.id, "/play-progress"));
                        case 3:s=e.sent, i.play_progress=s.data;
                        case 5:case"end":return e.stop()
                      }
                    }), e)
                  })));
                  return function(){
                    return e.apply(this, arguments)
                  }
                }
                (), be=function(){
                  H.submission_data&&j.assign(i.play_record, H.submission_data.play_record||{
                  })
                }, fe=function(){
                  var e=Be();
                  return e?je(e):(ve(i.subjects, H), i.examSubjects=m.buildExamSubjectsMap(i.subjects), Ve()), m.initMatchingSubjects(e), t.progressUi.subjectsNum=m.getSubjectsNum(i.subjects), i.groupedSubjects=m.groupSubjects(i.subjects), i.preparedSubjects=m.sortSubjectsByType(i.groupedSubjects)
                }, je=function(e){
                  var s=[
                  ];
                  for(var a in e){
                    var r=e[
                      a
                    ];
                    r.sub_of_analysis||s.push(r.subject)
                  }
                  return s=j.orderBy(s, "sort"), t.progressUi.subjects=i.subjects=s, i.examSubjects=e
                }, ve=(e, t)=>{
                  if(null!=t&&t.submission_data){
                    var s=e=>{
                      if([
                        "analysis", "media"
                      ].includes(e.type))j.each(e.sub_subjects, s);
                      else{
                        var a=j.find(t.submission_data.subjects, {
                          subject_id:e.id
                        });
                        a&&le(e, a)
                      }
                    };
                    j.each(e, s)
                  }
                }, Se=e=>{
                  var t;
                  return!![
                    "media", "analysis"
                  ].includes(e.type)&&!(null!==(t=e.sub_subjects)&&void 0!==t&&t.length)
                }, _e=()=>{
                  var e=0;
                  i.answerSheet.flatSubjects.forEach((t=>{
                    t.answered=t.subjectRef.isCompleted()&&!Se(t.subjectRef), t.answered&&(e+=1)
                  })), i.answerSheet.progress.answered=e;
                  var s=t.progressUi, a=e/i.answerSheet.progress.total*100;
                  s.progress=a>=0&&a<=100?"".concat(a, "%"):"0%"
                }, xe=function(e, s){
                  var r=!(arguments.length>2&&void 0!==arguments[
                    2
                  ])||arguments[
                    2
                  ], n=()=>ye(e, s), o=function(e){
                    "invalid_ip_address"===e.error_code?(t.ipErrorMessage=e.message, t.clearCkeckStatus(), t.ipCkeckStatus.inTest=!0, r&&!a("#invalid-ip-confirmation-popup").hasClass("open")&&a("#invalid-ip-confirmation-popup").foundation("reveal", "open")):"rollcall_not_attended"===e.error_code&&r&&!a("#rollcall-not-attended-popup").hasClass("open")&&a("#rollcall-not-attended-popup").foundation("reveal", "open")
                  };
                  return r&&i.exam.is_ip_constrained?w.checkExamQualification(i.examId, "in_test", n, o):ye(e, s)
                }, ye=function(e, t){
                  if(null!=H?H.id:void 0){
                    var s=he();
                    if(!s)return;
                    return d.put("/api/exams/submissions/".concat(H.id, "/multiple-subjects"), s).success(e).error(t)
                  }
                  var a=ce();
                  return d.post("/api/exams/".concat(i.examId, "/submissions/storage"), a).success(e).error(t)
                }, he=function(){
                  var e=[
                  ], s=m.filterUnSubmittedSubjectsAnswers(i.examSubjects);
                  if(j.forEach(s, (function(t){
                    if(!t.synced&&t.index>=0)return e.push({
                      index:t.index, subject_id:t.subject.id, parent_id:t.parent_id, answer:t.subject.collectAnswerData()
                    })
                  })), e.length>0||i.play_record.needSync){
                    delete i.play_record.needSync;
                    var a=t.progressUi;
                    return{
                      exam_paper_instance_id:i.examPaperInstanceId, subjects_answers:e, play_record:i.play_record, progress:{
                        answered_num:a.answeredNum, total_subjects:a.subjectsNum
                      }
                    }
                  }
                  return null
                }, i.$on("storageSubmissions", (()=>i.calProgress(G, !1))), i.$on("calUnsavedSubjects", (()=>i.calUnsavedSubjects())), i.calUnsavedSubjects=function(){
                  if(!i.exam.is_ip_constrained)return ge();
                  return w.checkExamQualification(i.examId, "submit", (()=>ge()), (function(e){
                    "invalid_ip_address"===e.error_code?(t.ipErrorMessage=e.message, t.clearCkeckStatus(), t.ipCkeckStatus.submit=!0, a("#invalid-ip-confirmation-popup").foundation("reveal", "open")):"rollcall_not_attended"===e.error_code&&a("#rollcall-not-attended-popup").foundation("reveal", "open")
                  }))
                }, ge=function(){
                  t.progressUi.uncompletedSubjectCnt=m.getUncompletedSubjectsNum(i.subjects), a("#submit-exam-confirmation-popup").foundation("reveal", "open")
                }, i.$on("confirmSubmissions", (()=>ge())), Me=null, (Me=T.getExamSocket()).on("connect", (()=>{
                  Me.emit("enter_exam", {
                    examId:i.examId, isStudent:i.isStudent
                  })
                })), Me.on("isActiveOnOtherDevices", (e=>{
                  localStorage.setItem("otherDevicesAnsweringTime", e.timestamp), window.location.href="/course/".concat(B, "/learning-activity#/exam/").concat(i.examId)
                })), i.enableInvigilation&&i.isStudent&&(Me.on("be_warned", (()=>{
                  i.ui.examSubmitted||Z.foundation("reveal", "open")
                })), Me.on("terminated", (()=>{
                  i.ui.examSubmitted||(ee(), Me.emit("leave_exam", {
                    examId:i.examId
                  }), i.ui.examSubmitted=!0, Q="terminate", i.exam.check_submit_ip_consistency?d.get("/api/exam/".concat(i.referrerExamId, "/check-submit-ip-qualification")).success((e=>{
                    if(e.check_submit_ip_passed)K.foundation("reveal", "open");
                    else{
                      var t=new CustomEvent("submit-check-ip-failed-popup:open", {
                        detail:{
                          examId:i.referrerExamId, submitByTerminated:!0, courseId:B, allowRetakeExam:e.allow_retake_exam
                        }
                      });
                      K.foundation("reveal", "close"), window.dispatchEvent(t)
                    }
                  })).error((()=>{
                    K.foundation("reveal", "open")
                  })):K.foundation("reveal", "open"))
                }))), g.addEventListener("retake-exam", (()=>{
                  a("#start-exam-confirmation-popup").foundation("reveal", "open")
                })), we=function(e){
                  var t="/course/".concat(B, "/learning-activity#/exam/").concat(i.referrerExamId);
                  "VerificationError"===e&&(t="/course/".concat(B, "/exam#/")), g.location.href=t
                }, i.confirm=we, Ee=function(){
                  var e=p(o.mark((function e(s, r){
                    var n, u, c, l, m, p, b=arguments;
                    return o.wrap((function(e){
                      for(;
                      ;
                      )switch(e.prev=e.next){
                        case 0:if(n=b.length>2&&void 0!==b[
                          2
                        ]
                        ?b[
                          2
                        ]
                        :"course", u=b.length>3&&void 0!==b[
                          3
                        ]
                        &&b[
                          3
                        ], c=b.length>4?b[
                          4
                        ]
                        :void 0, !i.ui.pending){
                          e.next=5;
                          break
                        }
                        return e.abrupt("return");
                        case 5:if(i.ui.loadFinished){
                          e.next=8;
                          break
                        }
                        return i.$watch("ui.loadFinished", (function(e){
                          if(e)return i.submitAnswer(s, r, n, u, c)
                        })), e.abrupt("return");
                        case 8:return i.ui.pending=!0, (l=ce()).reason=c, m=function(e, s){
                          if(t.progressUi.status="failed", i.hasPendingSubmission=!1, i.ui.pending=!1, s&&-1!==s||f.warning(i.i18nMessages.connectionErrorMessage), 400===s||409===s){
                            if(!e.exam_close){
                              var r=e.message?e.message:e.errors.exam_paper_instance_id;
                              return void f.error(r)
                            }
                            a("#confirmation-popup").foundation("reveal", "open")
                          }
                          if(!e.submission_finished)return f.error(i.i18nMessages.submitErrorMessage)
                        }, p=function(e){
                          t.progressUi.status="success", i.hasPendingSubmission=!1, i.ui.pending=!1;
                          var s=V?"true":e.check_submit_ip_passed;
                          if(ee(), statistics.track({
                            activity_type:"exam", activity_id:r, action:statistics.enums.ExamAction.submit, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web
                          }), i.ui.examSubmitted=!0, Q=c, u)return a("#confirmation-popup").foundation("reveal", "open");
                          if((!i.isAlertPopupOpen||i.autoClosePopup)&&s)return we();
                          if(i.exam.check_submit_ip_consistency&&!s&&"user"===c||"terminated"===c){
                            a("#submit-exam-confirmation-popup").foundation("reveal", "close");
                            var n=new CustomEvent("submit-check-ip-failed-popup:open", {
                              detail:{
                                examId:i.referrerExamId, courseId:B, allowRetakeExam:e.allow_retake_exam
                              }
                            });
                            window.dispatchEvent(n)
                          }
                        }, e.abrupt("return", d.post("/api/exams/".concat(i.examId, "/submissions"), l).success(p).error(m));
                        case 14:case"end":return e.stop()
                      }
                    }), e)
                  })));
                  return function(t, s){
                    return e.apply(this, arguments)
                  }
                }
                (), i.submitAnswer=function(e, s, a, r, n){
                  var o=arguments.length>5&&void 0!==arguments[
                    5
                  ]
                  ?arguments[
                    5
                  ]
                  :0;
                  Y.stopTrackingFocusEventWithReason(n), i.enableInvigilation&&Me.emit("leave_exam", {
                    examId:i.examId
                  }), i.hasPendingSubmission=!0, t.progressUi.status="processing", o?C(Ee(e, s, a, r, n), o):Ee(e, s, a, r, n)
                }, t.$on("submitAnswer", ((e, t)=>{
                  i.submitAnswer(t.teachingUnitId, t.examId, t.teachingUnitType, t.isSystemSubmit, t.reason, t.delay)
                })), i.answerContentExceeded=function(){
                }, i.padStart=function(){
                  var e=i.alert.countdown;
                  return isNaN(e)||0===e?"":e<10?"0".concat(e):e
                }, i.getSimToolbar=function(){
                  return i.exam.data&&i.exam.data.limit_short_answer_upload?"clean,code":"clean,code,lmsimage"
                }, Ie=function(){
                  a("#exam-alert-popup .alert-popup").bind("opened.fndtn.reveal", (function(){
                    i.isAlertPopupOpen=!0
                  })), a("#exam-alert-popup .alert-popup").bind("closed.fndtn.reveal", p(o.mark((function e(){
                    return o.wrap((function(e){
                      for(;
                      ;
                      )switch(e.prev=e.next){
                        case 0:if(i.isAlertPopupOpen=!1, X.stop(), i.ui.examSubmitted&&"terminate"!==Q&&i.confirm(), !i.exam.is_fullscreen_mode||V){
                          e.next=6;
                          break
                        }
                        return e.next=6, Je();
                        case 6:i.$emit("examAlertPopupClosed");
                        case 7:case"end":return e.stop()
                      }
                    }), e)
                  }))))
                }, Ce=e=>(i.alert.title=i.i18nMessages.alertPopupTitle, i.alert.message=e, a("#exam-alert-popup .alert-popup").foundation("reveal", "open")), Pe=(e, t)=>{
                  var s="".concat(i.i18nMessages.leavingWindowMessage, "<br />");
                  s+=I("format")(i.i18nMessages.leavingWindowTimesTip, [
                    e, t
                  ]), t>e&&(s="".concat(s, "<br />").concat(i.i18nMessages.autoSubmitTip), i.autoClosePopup=!0, i.submitAnswer(B, i.exam.id, "course", !1, "leave_window_limit", 1e3)), Ce(s)
                }, ke=function(){
                  var e=p(o.mark((function e(t){
                    var s;
                    return o.wrap((function(e){
                      for(;
                      ;
                      )switch(e.prev=e.next){
                        case 0:return e.prev=0, e.next=3, d.get("/api/exams/".concat(i.examId, "/examinees/").concat(i.userId, "/exam-status"));
                        case 3:s=e.sent, j.isEmpty(s.data)?window.localStorage.setItem(t, 0):window.localStorage.setItem(t, s.data.leave_window_times), e.next=10;
                        break;
                        case 7:e.prev=7, e.t0=e.catch(0), window.localStorage.setItem(t, 0);
                        case 10:case"end":return e.stop()
                      }
                    }), e, null, [
                      [
                        0, 7
                      ]
                    ])
                  })));
                  return function(t){
                    return e.apply(this, arguments)
                  }
                }
                (), Te=(e, t)=>{
                  var s=parseInt(window.localStorage.getItem(e)||0, 10);
                  J.push((()=>window.localStorage.removeItem(e)));
                  var a=()=>{
                    document.activeElement instanceof HTMLIFrameElement||i.isContextMenuOpen||i.isFileSelectOpen||i.ui.examSubmitted||(s++, window.localStorage.setItem(e, s), Pe(t, s))
                  };
                  g.addEventListener("unload", a), g.addEventListener("blur", a)
                }, De=()=>{
                  if(!i.exam.is_leaving_window_constrained)return"";
                  var e=i.exam.leaving_window_limit, t="exam_leaving_window_count_".concat(i.examPaperInstanceId), s=parseInt(window.localStorage.getItem(t)||0, 10), a=I("format")(i.i18nMessages.leavingWindowTimesTip, [
                    e, s
                  ]);
                  return s>e&&(a+="<br />".concat(i.i18nMessages.autoSubmitTip)), a
                }, Fe=()=>{
                  var e=i.i18nMessages.leavingWindowMessage, t=De();
                  e+="<br />".concat(t||i.i18nMessages.autoSubmitTip), Ce(e), i.submitAnswer(B, i.exam.id, "course", !1, "leave_window_timeout")
                }, Ne=e=>{
                  var t="exam_leaving_window_time_".concat(i.examPaperInstanceId);
                  J.push((()=>window.localStorage.removeItem(t))), g.addEventListener("unload", (()=>{
                    if(!i.ui.examSubmitted){
                      var e=n.utc().format();
                      return window.localStorage.setItem(t, e)
                    }
                  })), g.addEventListener("blur", (()=>{
                    if(!(X.running()||i.isContextMenuOpen||i.isFileSelectOpen||i.ui.examSubmitted||document.activeElement instanceof HTMLIFrameElement)){
                      if(!a("#exam-alert-popup .alert-popup").hasClass("open")){
                        var t=i.i18nMessages.leavingWindowMessage;
                        Ce(t)
                      }
                      i.ui.blurTriggered=!0, i.alert.countdown=e, X.start((()=>{
                        i.alert.countdown--, i.alert.countdown<=0&&(i.autoClosePopup=!0, X.stop(), Fe())
                      }))
                    }
                  }))
                }, Ae=(e, t)=>{
                  g.addEventListener("blur", (()=>{
                    if(!i.isFileSelectOpen&&!i.ui.examSubmitted){
                      var s="exam_leaving_window_count_".concat(i.examPaperInstanceId), a=parseInt(window.localStorage.getItem(s)||0, 10), r="".concat(i.i18nMessages.leavingWindowMessage, "<br />");
                      r+=I("format")(i.i18nMessages.leavingWindowTimesTip, [
                        e, a
                      ]), i.alert.message=r, i.alert.countdown=t, a>e&&(i.alert.message="".concat(r, "<br />").concat(i.i18nMessages.autoSubmitTip), i.alert.countdown=0)
                    }
                  }))
                }, Oe=()=>i.calProgress(), i.$on("playRecordUpdated", (()=>{
                  i.calProgress()
                })), Ue=e=>{
                  var t=Math.floor(e/60), s=parseInt(e%60, 10);
                  return t=t>=10?t:"0".concat(t), s=s>=10?s:"0".concat(s), "".concat(t, ":").concat(s)
                }, $e=()=>{
                  if(null!==H.left_time){
                    if(H.left_time<=0)return M.cancel(q), q=null, i.hideCancel=!0, void i.submitAnswer(B, i.exam.id, "course", !0, "time is up");
                    t.progressUi.leftTimeSeconds=H.left_time, t.progressUi.leftTime=Ue(H.left_time), H.left_time-=1
                  }
                }, Re=e=>b.compressToUTF16(e), Le=e=>b.decompressFromUTF16(e), Ve=()=>{
                  var e=JSON.stringify(i.examSubjects);
                  return localStorage.setItem("exam_subjects_".concat(i.examPaperInstanceId), Re(e))
                }, Be=()=>{
                  var e="exam_subjects_".concat(i.examPaperInstanceId), t=localStorage.getItem(e);
                  if(!t)return null;
                  var s=JSON.parse(Le(t));
                  return j.map(s, (e=>e.subject=E.createSubjectBySavedSubject(e.subject, !1))), s
                }, Ge=()=>localStorage.removeItem("exam_subjects_".concat(i.examPaperInstanceId)), J.push(Ge), qe=e=>{
                  var t=i.examSubjects[
                    e.parent_id
                  ];
                  t&&t.subject.sub_subjects&&t.subject.sub_subjects.forEach((t=>{
                    t.id===e.id&&(t.answeredOption=e.answeredOption)
                  }))
                }, We=e=>{
                  var t=i.examSubjects[
                    e.id
                  ];
                  t&&t.subject&&(t.synced=!1, t.subject&&e.answeredOption&&(t.subject.answeredOption=e.answeredOption), t.subject.parent_id&&qe(t.subject), Ve())
                }, He=()=>{
                  W&&(window.clearInterval(W), W=null), W=window.setInterval(Oe, 1e4), J.push((()=>{
                    window.clearInterval(W), W=null
                  }))
                }, ze=()=>{
                  q&&(M.cancel(q), q=null), void 0!==H.left_time&&($e(), q=M($e, 1e3)), J.push((()=>{
                    M.cancel(q), q=null
                  }))
                }, Qe=e=>{
                  i.isStudent&&a("body").on(e, (()=>!1))
                }, Je=function(){
                  if(!i.ui.fullscreen&&!i.ui.examSubmitted){
                    var e=document.documentElement;
                    return e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?document.body.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():void 0
                  }
                }, Ye=function(){
                  var e=i.i18nMessages.enterFullscreenMessage;
                  (i.exam.is_leaving_window_constrained||i.exam.is_leaving_window_timeout)&&(e=i.i18nMessages.fullScreenleavingWindowTip), i.alert={
                    title:i.i18nMessages.alertPopupTitle, message:e
                  }, a("[data-reveal]").foundation("reveal", "close"), a("#exam-alert-popup .alert-popup").foundation("reveal", "open")
                }, Ze=function(){
                  var e=p(o.mark((function e(t){
                    var s;
                    return o.wrap((function(e){
                      for(;
                      ;
                      )switch(e.prev=e.next){
                        case 0:if(i.isStudent&&!i.hasPendingSubmission){
                          e.next=2;
                          break
                        }
                        return e.abrupt("return");
                        case 2:s=function(){
                          i.ui.examSubmitted||(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?(g.dispatchEvent(new Event("focus")), i.ui.fullscreen=!0, document.body.style.overflowY&&document.body.style.setProperty("overflow-y", "")):(i.ui.fullscreen=!1, t.is_leaving_window_constrained||t.is_leaving_window_timeout?g.dispatchEvent(new Event("blur")):i.isFileSelectOpen||Ye()))
                        }, document.addEventListener("fullscreenchange", s), document.addEventListener("mozfullscreenchange", s), document.addEventListener("webkitfullscreenchange", s), document.addEventListener("MSFullscreenChange", s);
                        case 7:case"end":return e.stop()
                      }
                    }), e)
                  })));
                  return function(t){
                    return e.apply(this, arguments)
                  }
                }
                (), Ke=function(){
                  var e=function(e){
                    var s=j(e.subjects).sortBy("sort").map((e=>E.createSubjectBySavedSubject(e, !1))).value();
                    t.progressUi.subjects=s, i.subjects=s, i.examPaperInstanceId=e.exam_paper_instance_id, i.groupedSubjects=m.groupSubjects(i.subjects), t.progressUi.subjectsNum=m.getSubjectsNum(i.subjects), i.ui.pending=!1, i.ui.loadFinished=!0, ct(), U(i.subjects);
                    var a=L();
                    R.useGroup&&(i.subjects=a.map((e=>E.createSubjectBySavedSubject(e, !1)))), ct()
                  };
                  i.examId&&w.initExam(i.examId).then((e=>i.exam=e)), i.classroomId&&d.get("/api/classroom-exams/".concat(i.classroomId)).success((function(e){
                    return t.context.classroomId=e.id, t.context.classroom=i.classroom=e, i.currentActivity=i.classroom
                  })).error(f.decorateError()), function(){
                    if(i.examId&&d.get("/api/exams/".concat(i.examId, "/preview")).success((t=>e(t))).error((function(){
                    })), i.classroomId)d.get("/api/classroom-exams/".concat(i.classroomId, "/preview")).success((t=>e(t))).error((function(){
                    }))
                  }
                  ()
                }, Xe=function(e){
                  if(i.enableAntiCheat){
                    if(window.oncontextmenu=function(){
                      return i.isContextMenuOpen=!0, C((()=>i.isContextMenuOpen=!1), 200)
                    }, e.is_leaving_window_constrained){
                      var t="exam_leaving_window_count_".concat(i.examPaperInstanceId);
                      ke(t).finally((()=>{
                        Te(t, e.leaving_window_limit)
                      }))
                    }
                    e.is_leaving_window_timeout&&Ne(e.leaving_window_timeout), e.is_leaving_window_constrained&&e.is_leaving_window_timeout&&Ae(e.leaving_window_limit, e.leaving_window_timeout), e.disable_right_click&&Qe("contextmenu"), e.disable_copy_paste&&(Qe("copy paste"), a("body").addClass("no-select")), e.is_fullscreen_mode&&Ze(e)
                  }
                }, tt=()=>{
                  Y.startTrackingAllEvents(), J.push(Y.stopTrackingAllEvents)
                }, st=()=>Promise.allSettled([
                  w.initExam(i.examId), w.fetchExamTempSubmission(i.examId)
                ]).then((e=>{
                  var t=l(e, 2), s=t[
                    0
                  ], a=t[
                    1
                  ];
                  s.value||Promise.reject(), i.exam=s.value, H=a.value, y.inExamPage(i.exam), i.enableAntiCheat=i.exam.enable_anti_cheat, i.examPaperInstanceId=H?H.instance_id:null, Ie()
                })), at=()=>{
                  var e="exam_leaving_window_count_".concat(i.examPaperInstanceId), t="exam_leaving_window_time_".concat(i.examPaperInstanceId), s=parseInt(window.localStorage.getItem(e)||0), a=window.localStorage.getItem(t);
                  if(i.exam.is_fullscreen_mode&&Ye(), i.exam.is_leaving_window_constrained&&Pe(i.exam.leaving_window_limit, s), i.exam.is_leaving_window_timeout)if(a&&n.utc(a).add(i.exam.leaving_window_timeout, "seconds")<n.utc())i.autoClosePopup=!0, Fe();
                  else{
                    var r=i.i18nMessages.leavingWindowMessage, o=De();
                    o&&(r+="<br />".concat(o)), Ce(r)
                  }
                }, rt=()=>{
                  i.exam.disable_devtool&&v();
                  var e=k.search().instanceId;
                  if(!e)return!1;
                  var t=h.defer();
                  return d.get("/api/exams/".concat(i.examId, "/instance/").concat(e, "/submission")).success((function(e){
                    "none"!==e.submit_method?t.reject("VerificationError"):t.resolve()
                  })).error((function(e){
                    t.reject("VerificationError")
                  })), t.promise
                }, nt=()=>{
                  var e=h.defer();
                  return!1===i.isAlertPopupOpen||i.hasPendingSubmission?e.resolve():i.$on("examAlertPopupClosed", (()=>e.resolve())), e.promise
                }, ot=()=>{
                  (Me=T.getExamSocket(i.examId)).on("update_left_time", (e=>{
                    var s=t.progressUi;
                    return s.showUpdateLeftTimeWarning=!0, H.left_time=e.submission_left_time[
                      H.id
                    ], $e(), C((()=>s.showUpdateLeftTimeWarning=!1), 5e3)
                  }))
                }, it=()=>{
                  d.get("/api/exams/".concat(i.examId, "/distribute")).success((function(e){
                    window.history.replaceState({
                    }, "", "#/take?instanceId=".concat(e.exam_paper_instance_id));
                    var s=j.map(e.subjects, (e=>E.createSubjectBySavedSubject(e, !1)));
                    t.progressUi.subjects=i.subjects=s, i.examPaperInstanceId=e.exam_paper_instance_id, i.ui.pending=!1, de(H), ot(), i.ui.loadFinished=!0, Xe(i.exam), (i.enableInvigilation||i.enableAntiCheat)&&tt(), j.find(s, (e=>{
                      var t;
                      return null===(t=e.data)||void 0===t?void 0:t.is_conflict_subject
                    }))&&!window.localStorage.getItem("e_s_d_c_".concat(i.examId, "_").concat(i.examPaperInstanceId))&&a("#exam-redistribute-popup").foundation("reveal", "open"), U(i.subjects);
                    var r=L();
                    R.useGroup&&(i.subjects=r.map((e=>E.createSubjectBySavedSubject(e, !1)))), ct()
                  })).error((function(e){
                    i.ui.examSubmitted=!0, f.warning(e.message), g.location.href="/course/".concat(B, "/learning-activity#/exam/").concat(i.examId)
                  }))
                }, i.reDistribute=function(){
                  var e=function(){
                    a("#exam-redistribute-popup").foundation("reveal", "close"), g.location.reload()
                  };
                  d.delete("/api/exams/".concat(i.examId, "/submissions/storage")).success(e).error(e)
                }, i.disableDuplicateSubjectsCheck=function(){
                  window.localStorage.setItem("e_s_d_c_".concat(i.examId, "_").concat(i.examPaperInstanceId), Re("disabled"))
                }, ut=function(){
                  if(window.location.hash.includes("instanceId="))return window.location.href="/course/".concat(B, "/exam#/");
                  Ie(), st().then(rt).then(at).then(nt).then(it).catch(we)
                }, i.dragAddCallback=function(e){
                  e&&(m.parseAnswerWithElement(e), V||We(e), _e(), i.$apply())
                }, ct=()=>{
                  var e=0, t=[
                  ];
                  !function s(a){
                    var r, n=arguments.length>1&&void 0!==arguments[
                      1
                    ]
                    ?arguments[
                      1
                    ]
                    :"", o=1;
                    a.forEach(((a, u)=>{
                      var c, l, d, m=n?"".concat(n, ".").concat(u+1):(u+1).toString();
                      R.useGroup&&"subject"!==(null===(c=i.exam.data)||void 0===c?void 0:c.subject_index_type)&&((null===(l=a.group)||void 0===l?void 0:l.id)!==(null===(d=r)||void 0===d?void 0:d.id)?(r=a.group, o=1):o++, m=n?"".concat(n, ".").concat(u+1):o.toString());
                      if([
                        "analysis", "media"
                      ].includes(a.type)){
                        var p=a.sub_subjects.filter((e=>"paragraph_desc"!==e.type));
                        if(null!=p&&p.length){
                          var b, f=n||u+1;
                          R.useGroup&&"subject"!==(null===(b=i.exam.data)||void 0===b?void 0:b.subject_index_type)&&(f=n||o), s(p, f)
                        }
                      }
                      else e+=Number(a.point)>0?Number(a.point):0, t.push({
                        index:m, id:a.id, type:a.type, subjectRef:a, answered:!1
                      })
                    }))
                  }
                  (i.subjects), t=t.filter((e=>![
                    "analysis", "media"
                  ].includes(e.type)||e.subjectRef.sub_subjects.length>0)), i.answerSheet.flatSubjects=t, i.answerSheet.progress.total=t.length, i.answerSheet.progress.totalPoint=e>100?100:e, _e()
                }, i.jumpToSubject=x.jumpToSubject, lt=function(){
                  var e, t, s=arguments.length>0&&void 0!==arguments[
                    0
                  ]
                  ?arguments[
                    0
                  ]
                  :null;
                  if(null!==(e=window.featureToggles)&&void 0!==e&&e.examRecordPlayProgress&&null!==(t=H)&&void 0!==t&&t.id){
                    var a=s||u({
                    }, i.play_progress||{
                    });
                    i.play_progress=a, d.post("/api/exams/submissions/".concat(H.id, "/play-progress"), {
                      play_progress:a
                    }).catch((e=>{
                      console.error("Failed to save play progress:", e)
                    }))
                  }
                }, i.$on("playProgressUpdated", ((e, t)=>{
                  var s;
                  null!==(s=window.featureToggles)&&void 0!==s&&s.examRecordPlayProgress&&(i.play_progress||(i.play_progress={
                  }), i.play_progress[
                    t.play_progress_key
                  ]
                  !==t.play_progress&&(i.play_progress[
                    t.play_progress_key
                  ]
                  =t.play_progress, lt()))
                })), V?Ke():(i.play_record={
                }, i.play_progress={
                }, ut());
                case 142:case"end":return e.stop()
              }
            }), e)
          })));
          return function(t, s, a, r, n, o, i, u, c, l, d, m, p, b, f, j, v, S, _){
            return e.apply(this, arguments)
          }
        }
        ()
      ]
    }, 356092:(e, t, s)=>{
      var a=s(248124), r=s(302543), n=s(756029), o=s(287092);
      function i(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var s=[
          ], a=!0, r=!1, n=void 0;
          try{
            for(var o, i=e[
              Symbol.iterator
            ]
            ();
            !(a=(o=i.next()).done)&&(s.push(o.value), !t||s.length!==t);
            a=!0);
          }
          catch(e){
            r=!0, n=e
          }
          finally{
            try{
              a||null==i.return||i.return()
            }
            finally{
              if(r)throw n
            }
          }
          return s
        }
        (e, t)||c(e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function u(e, t){
        var s;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(s=c(e))||t&&e&&"number"==typeof e.length){
            s&&(e=s);
            var a=0, r=function(){
            };
            return{
              s:r, n:function(){
                return a>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    a++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, o=!0, i=!1;
        return{
          s:function(){
            s=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=s.next();
            return o=e.done, e
          }, e:function(e){
            i=!0, n=e
          }, f:function(){
            try{
              o||null==s.return||s.return()
            }
            finally{
              if(i)throw n
            }
          }
        }
      }
      function c(e, t){
        if(e){
          if("string"==typeof e)return l(e, t);
          var s=Object.prototype.toString.call(e).slice(8, -1);
          return"Object"===s&&e.constructor&&(s=e.constructor.name), "Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?l(e, t):void 0
        }
      }
      function l(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      s(215195), s(219693), s(700533), s(210557), s(334867), s(269193), s(43148), s(640173), s(850785);
      var d=s(571478), m=s(966491), p=s(111172);
      e.exports=[
        "$rootScope", "$scope", "$http", "$routeParams", "ExamHelper", "$filter", "EnrollmentFilter", "toastr", "examRepository", "classroomRepository", "$q", "ExamSubject", "modelHelper", "$location", "$timeout", "commonApi", "treeViewSearch", "statHelper", "throughCourseFilter", function(e, t, c, l, b, f, j, v, S, _, x, y, h, g, M, w, E, I, C){
          var P, k, T, D, F, N, A, O, U=f("orderBy"), $=null===(P=window.globalData)||void 0===P||null===(k=P.course)||void 0===k?void 0:k.orgId, R=a("#courseId").val();
          null===(T=window.globalData)||void 0===T||T.courseRoles.includes("assistant_instructor"), null===(D=window.globalData)||void 0===D||D.courseRoles.includes("student_manager"), null===(F=window.globalData)||void 0===F||null===(N=F.course)||void 0===N||N.isSimulatingInstructor;
          if(t.changeSort=function(e){
            return e!==t.predicate?(t.predicate=e, t.reverse=!1):t.reverse=!t.reverse, te()
          }, t.condition={
            department_ids:[
            ], grade_ids:[
            ], class_ids:[
            ], section_ids:[
            ], statuses:[
            ], keyword:"", teaching_class_ids:[
            ], education_levels:[
            ]
          }, C.initScope(t), t.groups=[
          ], t.finalCalculate={
            multiplier:1, plusScore:0
          }, t.pageSize=100, t.pagination=p(t, g, "examinees"), t.vueParam={
            disabled:!0, departments:[
            ]
          }, t.vueMethods={
            updateConditionDepartmentIds:e=>{
              M((()=>{
                t.condition.department_ids=e, t.search()
              }))
            }
          }, t.markTabView="student", t.recordBehavior=e=>I.track("exam", statistics.enums.MarkExamAction[
            e
          ], {
            course_id:R, activity_id:t.examId
          }), t.switchMarkTabView=e=>{
            t.markTabView!==e&&(t.markTabView=e, "student"===e&&(t.reloadExam=!0, ce()), t.recordBehavior("".concat(e, "_marking_view")))
          }, t.loadComponents=()=>{
            Promise.resolve().then(s.bind(s, 678264))
          }, ![
            "exam-paged-student-stats", "classroom-paged-student-stats"
          ].includes(t.tabView)){
            t.checkAllSelected=e=>r.every(e, {
              checked:!0
            }), t.switchAll=function(e){
              var s=t.checkAllSelected(e);
              return e.map((e=>e.checked=!s))
            };
            var L=function(e){
              return t.pages=e.pages, t.pagedExaminees=e.data
            };
            t.changePage=function(e){
              if(t.pagination.changePageAtFrontEnd(e, t.filteredExaminees, L), t.examId)return ue()
            }, t.showSubjectsSummary=(e, t, s)=>b.getSubjectsSummary(e, t, s), t.showSubjectsScore=function(e, t){
              return e<100?"，".concat(t.suffix.replace("{}", e), " ( ").concat(t.tip, " )"):"，".concat(t.suffix.replace("{}", e))
            }, t.loading=!1, t.examId=l.examId||a("#examId").val(), t.classroomId=l.classroomId||a("#classroomId").val();
            var V=d(t);
            t.calSubjectsPointValue=b.calSubjectsPointValue, t.ui=b.getUIHelper(), t.edit=function(e){
              return e.showEdit=!0, M((()=>a("#input-".concat(e.id))[
                0
              ].focus()), 100)
            }, t.ui.containsSubmissionNoScore=e=>r.some(e.submissions, (e=>null===e.score)), t.getSubjectIndex=function(e, s){
              if(t.subjects)return b.getSubjectIndex(e, s, t.subjects)
            }, t.resetSubject=function(e){
              e.showEdit=!1
            }, t.editScore=function(e){
              t.autoSaveScore(e, (()=>{
                e.showEdit=!1, e.error=""
              }), null)
            }, t.submissionData={
            };
            var B=function(e){
              var s=r.findIndex(t.originalExaminees, {
                id:e.id
              }), a=null;
              return s+1<t.originalExaminees.length&&(a=r.find(t.originalExaminees, {
                id:t.originalExaminees[
                  s+1
                ].id
              })), a&&a.submitted?t.nextExaminee=r.find(t.examinees, {
                id:a.id
              }):t.nextExaminee=null
            };
            t.$watch("submissionData.id", (function(e, t){
              if(e!==t&&t)return G(e), q()
            })), t.giveScoreTo=function(s){
              var a=!(arguments.length>1&&void 0!==arguments[
                1
              ])||arguments[
                1
              ];
              if(a&&(t.originalExaminees=n.copy(t.examinees)), e.currentExaminee=t.currentExaminee=r.find(t.examinees, s), t.currentExaminee.submitted)return B(t.currentExaminee), G(t.currentExaminee.submissions[
                0
              ].id, !0), q()
            };
            var G=function(s){
              var a, n=arguments.length>1&&void 0!==arguments[
                1
              ]
              &&arguments[
                1
              ];
              return n&&(t.submissionData.id=s), a=t.currentExaminee?r.find(t.currentExaminee.submissions, {
                id:parseInt(s)
              }):r.find(t.currentGroup.submissions, {
                id:parseInt(s)
              }), t.submissionData.score=a.score, e.submissionData=t.submissionData
            };
            t.goNextExamineeSubmission=function(){
              return t.save((function(){
                if(t.nextExaminee)return t.giveScoreTo(t.nextExaminee, !1)
              }))
            };
            var q=function(){
              var e=function(e){
                t.instanceId=e.instance_id, t.subjects=r.map(e.subjects_data.subjects, (e=>y.createSubjectBySavedSubject(e, !1))), t.auto_mark=e.auto_mark;
                var s=e.submission_data.subjects, a=e.correct_answers_data.correct_answers, n=e.submission_score_data, o=e.submission_comment_data;
                return b.updateSubjectsDetailData(t.subjects, s, a, n, o), H(), W()
              };
              if(t.examId&&c.get("/api/exams/".concat(t.examId, "/submissions/").concat(t.submissionData.id)).success(e).error((function(){
              })), t.classroomId)return c.get("/api/classroom-exams/".concat(t.classroomId, "/submissions/").concat(t.submissionData.id)).success(e).error((function(){
              }))
            }, W=function(){
              var e, s=0, n=0, o=0, i=0, c=0, l=0;
              t.manualEditMark=!0, r.each(t.subjectList, (function(e){
                if("short_answer"!==e.type){
                  var t=parseFloat(e.score);
                  return r.isFinite(t)&&(l+=1), o+=1, s+=parseFloat(e.score)
                }
                i+=1;
                var a=parseFloat(e.score);
                if(r.isFinite(a))return n+=a, c+=1
              }));
              var d=o>0, m=i>0&&i===c, p=0===i||m;
              return 0===i&&(t.manualEditMark=l===o&&null!==t.submissionData.score), t.objectiveQuestionScore=d?parseFloat(s.toFixed(1)):"--", t.objectiveQuestionScore=parseFloat(s.toFixed(1)), t.subjectiveQuestionScore=m?parseFloat(n.toFixed(1)):"--", t.score="--", t.manualEditMark&&(t.score=p?parseFloat((s+n).toFixed(1)):"--"), t.currentExaminee&&(e=t.currentExaminee.submissions), t.currentGroup&&(e=t.currentGroup.submissions), (()=>{
                var s, r=[
                ], n=u(e);
                try{
                  for(n.s();
                  !(s=n.n()).done;
                  ){
                    var o=s.value, i=parseFloat(o.score);
                    if(isNaN(i)?o.submissionStatus="".concat(f("datetime")(o.submitted_at), "&nbsp; ").concat(o.submit_method_text)+"&nbsp; ( ".concat(t.notMarked, " )"):(o.score=i, o.submissionStatus="".concat(f("datetime")(o.submitted_at), "&nbsp; ").concat(o.submit_method_text)+"&nbsp; ( ".concat(t.scoreLabel, " ：").concat(o.score, " )")), parseInt(o.id)===parseInt(t.submissionData.id)){
                      var c=a("#s2id_submission .select2-line-content");
                      c.length?r.push(c[
                        0
                      ].innerHTML=o.submissionStatus):r.push(void 0)
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
                return r
              })()
            };
            t.onUpdateObjectiveScore=function(e){
              return c.post("/api/exams/".concat(t.exam.id, "/manualscoring/").concat(e)).success(v.decorateSuccess((function(e){
                t.manualEditMark=!0, r.find(t.currentExaminee.submissions, {
                  id:parseInt(t.submissionData.id)
                }).score=e.score, G(e.id), W(), t.refreshSubmissionCount()
              }))).error(v.decorateError((function(){
              })))
            }, t.user_management_department_multi_select_tree={
              keyword:""
            }, t.searchTreeView=function(e){
              return"user_management_department_multi_select_tree"===e&&E.searchDepartmentTree(e, t, t.condition.department_ids)
            };
            var H=function(){
              t.subjectList=[
              ];
              var e, s=0, a=u(t.subjects);
              try{
                for(a.s();
                !(e=a.n()).done;
                ){
                  var r=e.value;
                  if("text"!==r.type)if(s+=1, r.number="".concat(s), "analysis"===r.type){
                    var n, i=0, c=u(r.sub_subjects);
                    try{
                      for(c.s();
                      !(n=c.n()).done;
                      ){
                        var l=n.value;
                        i+=1, l.number="".concat(s, ".").concat(i), t.subjectList.push(l)
                      }
                    }
                    catch(e){
                      c.e(e)
                    }
                    finally{
                      c.f()
                    }
                  }
                  else t.subjectList.push(r)
                }
              }
              catch(e){
                a.e(e)
              }
              finally{
                a.f()
              }
              return t.rowList=o.range(0, Math.ceil(t.subjectList.length/5)-1, !0), t.columnList=[
                0, 1, 2, 3, 4
              ]
            }, z=e=>({
              subject_id:e.id, score:e.score, instance_id:t.instanceId, parent_id:e.parent_id
            }), Q=function(e){
              var s, a=[
              ];
              return s=e?[
                e
              ]
              :t.subjects, r.each(s, (function(e){
                if("short_answer"!==e.type&&"fill_in_blank"!==e.type||a.push(z(e)), "analysis"===e.type)return a=a.concat((e=>r.map(r.filter(e, {
                  type:"short_answer"
                }), z))(e.sub_subjects))
              })), a
            }, J=(e, s)=>(()=>{
              for(var a=[
              ], n=0;
              n<e.length;
              n++){
                var o=e[
                  n
                ];
                if(o.score){
                  var i=r.find(t.subjects, (e=>e.id===s[
                    n
                  ].subject_id));
                  i=Y(t.subjects, s[
                    n
                  ]), a.push(i.error=o.score)
                }
                else a.push(void 0)
              }
              return a
            })(), Y=function(e, t){
              if(!t.parent_id)return r.find(e, {
                id:t.subject_id
              });
              var s=r.find(e, {
                id:t.parent_id
              });
              return r.find(s.sub_subjects, {
                id:t.subject_id
              })
            };
            t.save=function(t){
              return e.currentGroup?X(t):K(t)
            };
            var Z=(e, t, s)=>statistics.track({
              activity_id:e, activity_type:"exam", action:statistics.enums.Action.give_score, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, target_info:{
                id:t, type:s, is_student:!0
              }
            }), K=function(){
              var e=arguments.length>0&&void 0!==arguments[
                0
              ]
              &&arguments[
                0
              ], s=arguments.length>1?arguments[
                1
              ]
              :void 0, a=arguments.length>2?arguments[
                2
              ]
              :void 0, n=Q(e), o=function(e){
                if(V.hide(), e.message&&v.warning(e.message), a&&a(), e.errors)return J(e.errors.graded_subjects, n)
              }, i=function(e){
                V.hide(), v.success();
                var a=r.find(t.examinees, {
                  id:t.currentExaminee.id
                });
                a.score=e.exam_score;
                var n=r.find(t.currentExaminee.submissions, {
                  id:parseInt(t.submissionData.id)
                });
                if(n.score=e.submission_score, a.waitingForScore=!1, G(n.id), W(), t.refreshSubmissionCount(), Z(t.examId, t.currentExaminee.id, "personal"), s)return s()
              }, u=()=>({
                examinee_id:t.currentExaminee.id, graded_subjects:n, submission_id:t.submissionData.id
              });
              return V.show(), c.post("/api/exams/".concat(t.examId, "/give-score"), u()).success(i).error(o)
            }, X=function(){
              var s=arguments.length>0&&void 0!==arguments[
                0
              ]
              &&arguments[
                0
              ], a=arguments.length>1?arguments[
                1
              ]
              :void 0, n=arguments.length>2?arguments[
                2
              ]
              :void 0, o=Q(s), i=function(e){
                if(V.hide(), e.message&&v.error(e.message), n&&n(), e.errors)return J(e.errors.graded_subjects, o)
              }, l=function(s){
                V.hide(), v.success();
                var n=r.find(e.currentGroup.submissions, {
                  id:parseInt(t.submissionData.id)
                });
                n.score=s.submission_score;
                var o, i=u(e.currentGroup.examinees);
                try{
                  for(i.s();
                  !(o=i.n()).done;
                  ){
                    o.value.score=s.exam_score
                  }
                }
                catch(e){
                  i.e(e)
                }
                finally{
                  i.f()
                }
                if(t.submissionData.score=n.score, e.submissionData=t.submissionData, W(), t.refreshSubmissionCount(), Z(t.examId, e.currentGroup.id, "group"), a)return a()
              }, d=()=>({
                examinee_ids:e.currentGroup.members, graded_subjects:o, submission_id:t.submissionData.id, group_submission_ids:r.map(e.currentGroup.submissions, "id")
              });
              return V.show(), c.post("/api/exams/".concat(t.examId, "/give-scores"), d()).success(l).error(i)
            }, ee=function(){
              if(t.filteredExaminees=r.filter(t.examinees, (e=>(!t.exam||!t.exam.has_assign_student||t.exam.assign_student_ids.includes(e.id))&&j.filterEnrollments(t, e))), t.$broadcast("filterExamineesUpdated"), t.changePage(1), null!=l.examineeId){
                var e=r.find(t.filteredExaminees, {
                  id:r.parseInt(l.examineeId)
                });
                return t.giveScoreTo(e)
              }
            };
            t.search=function(){
              return ee()
            }, t.removeError=function(e){
              if(delete e.error, parseFloat(e.score)>e.getPoint())return e.error=t.invalidScoreMessage
            }, t.autoSaveScore=function(t, s){
              return e.currentGroup?X(t, s):K(t, s)
            }, t.autoSaveSubmissionComment=function(e){
              var s={
                subject_id:e.id, comment:e.comment
              };
              return c.put("/api/exams/".concat(t.examId, "/submissions/").concat(t.submissionData.id, "/comment"), s).success((e=>v.success(e.message))).error((e=>v.error(e.errors.comment)))
            }, t.bindLeftCommentLength=function(e, t){
              e.comment?e.leftCommentLength=t-e.comment.length:e.leftCommentLength=t
            }, t.commentContentExceeded=function(e, s, a){
              s&&(e.comment=e.comment.substr(0, a)), t.bindLeftCommentLength(e, a)
            };
            var te=function(){
              var e=t.reverse?"-":"", s="".concat(e).concat(t.predicate), a=[
                s
              ];
              return[
                "score", "final_score"
              ].includes(t.predicate)&&(a=t.reverse?[
                "!".concat(t.predicate), s
              ]
              :[
                "-!".concat(t.predicate), s
              ]), t.filteredExaminees=U(t.filteredExaminees, a), t.changePage(1)
            }, se=e=>(()=>{
              var t, s=[
              ], a=u(e);
              try{
                for(a.s();
                !(t=a.n()).done;
                ){
                  var r, n=t.value, o=0, i=u(n.submissions);
                  try{
                    for(i.s();
                    !(r=i.n()).done;
                    ){
                      r.value.score&&(o+=1)
                    }
                  }
                  catch(e){
                    i.e(e)
                  }
                  finally{
                    i.f()
                  }
                  s.push(n.marked=o);
                  var c=o>0?"marked":"unmarked";
                  s.push(n.mark=c)
                }
              }
              catch(e){
                a.e(e)
              }
              finally{
                a.f()
              }
              return s
            })(), ae=function(e){
              var t="", s=r(e).filter((e=>e.is_latest_version&&e.submitted_at)).sortBy("submitted_at").reverse().first();
              return s&&s.submit_method_text&&(t=s.submit_method_text), t
            }, re=function(s){
              t.examinees=r.map(s, (function(e){
                var s, a, n;
                return e.studentInfo=h.getBelongTo(e, " ", "NFA"===t.deliveryOrg), e.waitingForScore=e.submitted&&null===e.score, e.score=m.formatFloat(e.score), null!==e.final_score&&""!==e.final_score||!e.score||(e.final_score=e.score), e.final_score=m.formatFloat(e.final_score), e.status=e.status_code, e.submissionTime=(s=e.submissions, a="", (n=r.find(s, {
                  is_latest_version:!0
                }))&&n.submitted_at&&(a=n.submitted_at), a), e.lastSubmitMethodText=ae(e.submissions), e.status_comment=e.status_comment||"", e
              })), e.examinees=t.examinees, j.initDepartmentsInfoForEnrollments(t, t.examinees, void 0, $), j.initOrgDepartments(t, $).then((()=>{
                t.vueParam.departments=r.cloneDeep(t.departments), t.vueParam.disabled=!1
              })), t.reloadExam=!1, t.previewScore&&t.calculateScore(), se(t.examinees), ee()
            }, ne=e=>S.initExaminees(t.examId, !0).then((function(t){
              return e.submit_by_group?oe(t):re(t)
            }));
            e.$on("refreshExamData", (function(e, s){
              t.exam=s.new;
              var a=s.old;
              if(a.score_rule!==t.exam.score_rule||((e, t)=>e.submit_by_group!==t.submit_by_group||e.group_set_id!==t.group_set_id)(t.exam, a))return ne(t.exam)
            })), t.$on("afterSaveMakeUpExam", (function(){
              return t.reloadExam=!0, ce()
            })), t.showPreviewScore=function(){
              return t.previewScore=!t.previewScore, t.calculateScore(), ue()
            }, t.calculateScore=function(){
              if(t.previewScore){
                var e, s=u(t.examinees);
                try{
                  for(s.s();
                  !(e=s.n()).done;
                  ){
                    var a=e.value;
                    !a.submitted&&!t.exam.submit_by_group||a.waitingForScore||(a.preCalculatedScore=(a.score*parseFloat(t.finalCalculate.multiplier||1)+parseFloat(t.finalCalculate.plusScore||0)).toFixed(1), a.calculateOverScoreRange=a.preCalculatedScore>100, a.preCalculatedScore>100&&(a.preCalculatedScore=100))
                  }
                }
                catch(e){
                  s.e(e)
                }
                finally{
                  s.f()
                }
              }
              return!1
            }, t.showScorePopup=function(e, s){
              var r=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :"";
              if(!t.isScorePublished)return t.confirmTitle=e, t.calculateType=s, t.recalculateScoreExamType=r, a("#calculate-score-confirmation-popup").foundation("reveal", "open"), !1
            }, t.isNoScore=function(e){
              return!(!e||void 0!==e.score&&""!==e.score&&null!==e.score)
            };
            var oe=function(s){
              S.loadGroups(t.exam.group_set_id).then((function(a){
                a=r.filter(a, (e=>!t.exam.has_assign_group||t.exam.assign_group_ids.includes(e.id))), t.examinees=s, r.each(a, (function(e){
                  e.examinees=r.filter(s, (t=>e.members.includes(t.id))), function(e){
                    if(0===e.members.length)return!1;
                    var t=e.examinees;
                    if(0!==t.length){
                      var s="submitted";
                      r.every(t, {
                        status_code:"unsubmit"
                      })?s="unsubmit":r.every(t, {
                        status_code:"needMakeup"
                      })?s="needMakeup":r.every(t, {
                        status_code:"makeUp"
                      })&&(s="makeUp");
                      var a=r.find(t, {
                        status_code:s
                      }).status_text, n=r.find(t, {
                        status_code:s
                      }).makeup_exam_text;
                      e.status_code=s, e.status_text=a, e.makeup_exam_text=n, [
                        "needMakeup", "makeUp"
                      ].includes(s)&&(e.make_up_closed_time=r.find(t, {
                        status_code:s
                      }).make_up_closed_time)
                    }
                  }
                  (e), e.showMembers=!0, e.submissions=r.sortBy(r.reduce(e.examinees, ((e, t)=>e.concat(r.each(t.submissions, (e=>e.examinee_id=t.id)))), [
                  ]), [
                    "created_at"
                  ]).reverse(), e.submissionTime=(null!=e.submissions[
                    0
                  ]
                  ?e.submissions[
                    0
                  ].submitted_at:void 0)?e.submissions[
                    0
                  ].submitted_at:"", e.lastSubmitMethodText=ae(e.submissions), r.each(e.examinees, (e=>{
                    e.status_comment=e.status_comment||""
                  }))
                })), t.groups=a, e.groups=a, null!=l.examineeId&&(e.currentGroup=r.find(a, (function(e){
                  var t;
                  return t=parseInt(l.examineeId), e.members.includes(t)
                })), t.submissionData=n.copy(e.currentGroup.submissions[
                  0
                ]), q(), e.submissionData=t.submissionData), t.reloadExam=!1, t.previewScore&&t.calculateScore(), se(t.groups)
              }))
            };
            a(window).resize((()=>ie()));
            var ie=function(){
              var e=a(".activity-header").width(), s=a("#submission-list").width(), r=s>e?s:e;
              return(null!=t.exam?t.exam.submit_by_group:void 0)?a(".group-row").width(r):a(".exam-row").width(r)
            }, ue=()=>M((function(){
              return ie(), a(".sync-scroll").scroll((()=>M((function(){
                return a(".sync-scroll-top").scrollLeft(a(".sync-scroll").scrollLeft()), a(".sync-scroll-header").scrollLeft(a(".sync-scroll").scrollLeft())
              }), 100))), a(".sync-scroll-top").scroll((()=>M((function(){
                return a(".sync-scroll").scrollLeft(a(".sync-scroll-top").scrollLeft()), a(".sync-scroll-header").scrollLeft(a(".sync-scroll-top").scrollLeft())
              }), 100))), function(){
                t.ui.isFullScreenMode||a(window).bind("scroll", (function(){
                  if(a(".activity-info").length>0)return t.ui.tableHeadAtTop=a(".activity-info")[
                    0
                  ].getBoundingClientRect().top<=0, t.$apply()
                }));
                var e=a("#submission-list").width();
                return a(".scrollbar-content").width(e)
              }
              ()
            })), ce=function(){
              var e, s=null!==(e=m.loadCorrectColumnSetting(t.examId, "exam"))&&void 0!==e?e:{
                column:{
                }
              };
              t.examCorrectColumnSetting=s.column, t.columnSetting=r.merge(b.getDefaultColumnSetting(), t.examCorrectColumnSetting), t.columnSetting.showGrades=!0===t.columnSetting.showDepartment;
              var a=S.initExam(t.examId), n=S.initExaminees(t.examId, t.reloadExam);
              return x.all([
                a, n, x((e=>{
                  e([
                  ])
                })), x((e=>{
                  e([
                  ])
                }))
              ]).then((function(){
                var e=Array.from(arguments.length<=0?void 0:arguments[
                  0
                ]), s=i(e, 4), a=s[
                  0
                ], r=s[
                  1
                ], n=(s[
                  2
                ], s[
                  3
                ], r);
                return t.exam=a, a.submit_by_group?oe(n):(re(n), me(!1)), ue()
              }))
            };
            t.getIndex=(e, t)=>5*e+t, t.toggleMembers=e=>e.showMembers=!e.showMembers, t.scrollTo=function(e){
              var t, s=a("li#subject-".concat(e).replace(".", "\\.")).offset().top;
              t="1"===e||e.indexOf(".1")>0?93:60;
              var r=s+a("div#left-frame").scrollTop()-t;
              return a("div#left-frame").animate({
                scrollTop:r
              }, 500), !0
            }, t.getStudentInfo=h.getBelongTo, t.selectedCanMakeUp=function(){
              return(!t.exam||!t.exam.is_in_progress)&&(t.groups&&t.groups.length>0?r.some(t.groups, (e=>e.checked&&e.examinees.length>0)):!!t.filteredExaminees&&r.some(t.filteredExaminees, "checked"))
            }, t.makeUpExam=function(){
              var e=[
              ], s=0;
              if(t.exam.submit_by_group){
                var a, r=u(t.groups);
                try{
                  for(r.s();
                  !(a=r.n()).done;
                  ){
                    var n=a.value;
                    n.checked&&(e=e.concat(n.examinees), s+=1)
                  }
                }
                catch(e){
                  r.e(e)
                }
                finally{
                  r.f()
                }
              }
              else{
                var o, i=u(t.filteredExaminees);
                try{
                  for(i.s();
                  !(o=i.n()).done;
                  ){
                    var c=o.value;
                    c.checked&&e.push(c)
                  }
                }
                catch(e){
                  i.e(e)
                }
                finally{
                  i.f()
                }
              }
              if(e.length>0)return t.$broadcast("makeUpExam", t.exam, e, s)
            }, t.viewAssignTarget=(e, s)=>(t.assignTargetPopupTitle=b.buildAssignTargetPopupTitle(t.i18nMessages, e, t.course.students_count), t.vueParam={
              submitByGroup:e.submit_by_group, targetType:s, activityType:"exam_activity", activityId:e.id
            }, a("#assign_target_popup").foundation("reveal", "open")), t.$on("reloadAfterCalculate", (function(){
              return t.reloadExam=!0, ce()
            }));
            t.hasProgressSyncTask=!1;
            var le, de, me=e=>{
              if(t.exam.is_eztest){
                t.columnSetting.showLastSubmitMethod=!1;
                var s=setInterval((()=>{
                  S.getExamSubmissionSyncProgress(t.exam.id, (a=>{
                    a.tasks?t.hasProgressSyncTask=!0:(clearInterval(s), t.hasProgressSyncTask=!1, e&&ne(t.exam))
                  }))
                }), 5e3);
                t.syncSubmissionIntervalId=s
              }
            };
            t.$on("$destory", (()=>clearInterval(t.syncSubmissionIntervalId))), t.syncEztestSubmissions=()=>{
              t.hasProgressSyncTask||(t.hasProgressSyncTask=!0, S.syncExamSubmissionsFromThirdPart(t.exam.id, (()=>{
                me(!0)
              })))
            }, t.examId&&ce(), t.classroomId&&(le=_.initClassroom(t.classroomId), de=_.initSubjectsRule(t.classroomId), x.all([
              le, de
            ]).then((function(){
              var e=i(Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), 2), s=e[
                0
              ], a=e[
                1
              ];
              return t.subjects_rule=a, t.classroom=s, t.classroom.isQuizPublic=t.subjects_rule.public, t.classroom.isQuizControlBySubject=t.subjects_rule.subject_by_subject_control
            })), _.initExaminees(t.classroomId, !0).then((function(e){
              return t.examinees=r.map(e, (function(e){
                return e.studentInfo=[
                  e.department.name, e.grade.name, e.klass.name
                ].join(""), e.waitingForScore=e.submitted&&null===e.score, e.score=m.formatFloat(e.score), e.status=e.submitted?1:2, e
              })), j.initDepartmentsInfoForEnrollments(t, t.examinees), ee(), se(t.examinees)
            }))), "through_course"===(null===(A=window.globalData)||void 0===A||null===(O=A.course)||void 0===O?void 0:O.importedFrom)&&C.loadFilters(t, R)
          }
        }
      ]
    }, 367265:(e, t, s)=>{
      var a=s(400565).initScope;
      e.exports=[
        "$scope", "$http", "toastr", "treeViewSearch", "multiSelect", function(e, t, s, r, n){
          return a(e, t, s, r, n, "vtrs")
        }
      ]
    }, 395701:e=>{
      e.exports=[
        "$scope", function(e){
          return e.ui={
            libraryTab:"personal"
          }, e.changeLibraryTab=t=>e.ui.libraryTab=t, e.reset=function(){
          }
        }
      ]
    }, 400565:(e, t, s)=>{
      var a=s(248124), r=s(302543), n=s(793110), o=s(287092), i=s(756029);
      function u(e, t){
        var s;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(s=function(e, t){
            if(!e)return;
            if("string"==typeof e)return c(e, t);
            var s=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===s&&e.constructor&&(s=e.constructor.name);
            if("Map"===s||"Set"===s)return Array.from(e);
            if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return c(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            s&&(e=s);
            var a=0, r=function(){
            };
            return{
              s:r, n:function(){
                return a>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    a++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, o=!0, i=!1;
        return{
          s:function(){
            s=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=s.next();
            return o=e.done, e
          }, e:function(e){
            i=!0, n=e
          }, f:function(){
            try{
              o||null==s.return||s.return()
            }
            finally{
              if(i)throw n
            }
          }
        }
      }
      function c(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      s(700533), s(658379);
      var l=s(31571);
      e.exports={
        initScope:function(e, t, s, c, d, m){
          var p="/api/subject-libs";
          if("course"===m){
            var b=Number(a("#courseId").val());
            p="/api/course/".concat(b, "/subject-libs")
          }
          else if("vtrs"===m)p="/api/vtrses/subject-libs";
          else if("naturesoft"===m){
            var f=Number(a("#courseId").val());
            p="/api/course/".concat(f, "/naturesoft-libs")
          }
          e.ui={
            totalSubjects:0, totalScore:0, keyword:"", noMoreLeftPoints:!1, hasError:!1, contentLoadingComplete:!1
          }, e.conditions={
            type:"", subjectLibraries:[
            ], exam_subject_types:[
            ], exam_subject_difficulty_levels:[
            ], knowledge_node_ids:[
            ]
          }, e.subject_libraries_multi_select_tree={
            keyword:""
          }, e.getContents=l.getContents;
          var j=function(e){
            return e.hasPointFormatError=!1, e.hasPointValueError=!1, e.hasNumberFormatError=!1, e.hasNumberValueError=!1
          }, v=()=>e.ui.hasError=r.some(e.subjectLibs, (e=>x(e))), S=e=>null==e||r.isEmpty("".concat(e)), _=function(){
            if(!e.selectRandomlyExam){
              var t=r.reduce(e.subjects, (function(e, t){
                var s=t.id?t.point:0;
                return e.minus(new n(s))
              }), new n(100));
              return e.ui.noMoreLeftPoints=t.lessThan(e.ui.totalScore)
            }
          }, x=e=>e.hasPointFormatError||e.hasNumberValueError||e.hasNumberFormatError;
          e.calculate=function(){
            return e.ui.totalSubjects=0, e.ui.totalScore=new n(0), r.map(e.subjectLibs, (function(t){
              if(function(t){
                j(t);
                var s=t.point, a=t.number, n=S(s), o=S(a);
                return n&&o?(v(), !0):(s=new Number(s), a=new Number(a), e.selectRandomlyExam||n||(r.isNaN(s)?t.hasPointFormatError=!0:s<=0&&(t.hasPointValueError=!0)), o||(r.isNaN(a)||a%1!=0?t.hasNumberFormatError=!0:(a<=0||a>t.nums)&&(t.hasNumberValueError=!0)), v(), !x(t))
              }
              (t))return e.ui.totalSubjects+=t.number||0, e.ui.totalScore=e.ui.totalScore.plus(new n(t.number||0).times(new n(t.point||0)))
            })), _()
          }, e.filter=()=>h("subject_libraries_multi_select_tree"), e.reset=function(){
            return r.map(e.subjectLibs, (function(e){
              return e.point=null, e.number=null, j(e)
            })), e.shownLibs=e.subjectLibs, e.ui={
              totalSubjects:0, totalScore:0, keyword:"", noMoreLeftPoints:!1, hasError:!1
            }
          }, e.getSubjects=function(){
            if(_(), r.map(e.subjectLibs, (function(t){
              var s=S(t.point), a=S(t.number);
              if(e.selectRandomlyExam||!s||a||(t.hasPointFormatError=!0), !e.selectRandomlyExam&&!s&&a)return t.hasNumberFormatError=!0
            })), v(), !e.ui.hasError&&!e.ui.noMoreLeftPoints){
              var n=r.reduce(e.subjectLibs, (function(t, s){
                return s.number&&(!e.selectRandomlyExam&&s.point||e.selectRandomlyExam)&&(t.ids.push(s.id), t.numbers.push(s.number), "naturesoft"===m&&t.points.push(s.point)), t
              }), {
                ids:[
                ], numbers:[
                ], points:[
                ]
              });
              if(r.isEmpty(n.ids))a("#add-subjects-from-library-popup").foundation("reveal", "close");
              else{
                var o=function(t){
                  if("naturesoft"===m)e.addNaturesoftSubjects(t);
                  else{
                    var s=t.data;
                    r.each(s, (function(t){
                      return r.each(t.subjects, (function(s){
                        return s.point=r.find(e.subjectLibs, {
                          id:r.parseInt(t.library_id)
                        }).point||"0.0", !0
                      })), !0
                    })), e.addSubjects(s)
                  }
                  return e.ui.totalSubjects=0, e.ui.totalScore=0, g(), a("#add-subjects-from-library-popup").foundation("reveal", "close")
                };
                n.exam_type=e.exam_type;
                var i={
                  exam_subject_types:e.conditions.exam_subject_types, exam_subject_difficulty_levels:e.conditions.exam_subject_difficulty_levels, knowledge_node_ids:e.conditions.knowledge_node_ids
                };
                if(r.assign(n, {
                  conditions:i
                }), "naturesoft"===m){
                  var u=Number(a("#courseId").val());
                  if("exam"===n.exam_type)n.exam_id=e.examId;
                  else{
                    if("classroom"!==n.exam_type)return void s.warning("".concat(n.exam_type, " is not inplemented."));
                    n.exam_id=e.classroomId
                  }
                  var c="/api/course/".concat(u, "/naturesoft-libs/random-import-subjects");
                  t.post(c, n).success(o).error((()=>s.warning()))
                }
                else{
                  t.get("/api/subject-libs/random", {
                    params:n
                  }).success(o).error((()=>s.warning()))
                }
              }
            }
          }, e.expandLibrary=function(e){
            if("folder"===e.type&&e.children.length>0)return e.expanded=!0!==e.expanded
          };
          var y=function(t){
            if("vtrs"!==m){
              var s=r.filter(t, {
                parent_id:0
              }), a=r.groupBy(r.filter(t, (e=>e.parent_id)), "parent_id");
              r.each(t, (e=>e.children=a[
                e.id
              ]
              ||[
              ])), e.subjectLibraries=s
            }
            else e.subjectLibraries=(e=>{
              var t=[
              ];
              return e.forEach((e=>{
                var s=t.find((t=>t.id===e.referrer_id));
                s?s.children.push(e):t.push({
                  id:e.referrer_id, title:"".concat(e.vtrs_name, "(").concat(e.vtrs_code, ")"), parent_id:0, is_folder:!0, nums:0, type:"folder", children:[
                    e
                  ]
                })
              })), t
            })(t)
          };
          e.searchLib=function(){
            e.ui.totalScore=0, e.ui.totalSubjects=0, g()
          };
          var h=t=>function(t){
            var s;
            if(e.subject_libraries_multi_select_tree.keyword){
              var a, n=u(t);
              try{
                for(n.s();
                !(a=n.n()).done;
                )a.value.parent_id=0
              }
              catch(e){
                n.e(e)
              }
              finally{
                n.f()
              }
              t=t.concat(r.filter(e.originalLibs, (e=>e.parent_id>0))), y(t), s=t
            }
            else y(e.originalLibs), s=e.originalLibs;
            return e.subjectLibs=r.filter(s, (e=>(e.nums||e.num_of_subjects)>0))
          }
          (c.searchSubjectLibsTree(t, e)), g=function(){
            e.subjectLibraries=[
            ], e.ui.contentLoadingComplete=!1, e.classroomId?e.exam_type="classroom":e.questionnaireId?e.exam_type="questionnaire":e.exam_type="exam";
            var s={
              exam_type:e.exam_type, with_folder:1, lib_type:e.questionnaireId?"questinnaire":"exam"
            };
            return"exam"!==e.exam_type&&"classroom"!==e.exam_type||(s.conditions={
              exam_subject_types:e.conditions.exam_subject_types, exam_subject_difficulty_levels:e.conditions.exam_subject_difficulty_levels, knowledge_node_ids:e.conditions.knowledge_node_ids
            }), "group"===m&&(s.referrer_type="resource_group"), t.get(p, {
              params:s
            }).success((function(t){
              var s=t.subject_libs||[
              ];
              return(o.guard(null!=e.conditions?e.conditions.exam_subject_types:void 0, (e=>e.length))>0||o.guard(null!=e.conditions?e.conditions.exam_subject_difficulty_levels:void 0, (e=>e.length))>0||o.guard(null!=e.conditions?e.conditions.knowledge_node_ids:void 0, (e=>e.length))>0)&&r.forEach(s, (e=>e.parent_id=0)), e.originalLibs=i.copy(s), e.filter(), e.shownLibs=e.subjectLibs, e.exam&&(e.selectRandomlyExam=e.exam.subjects_rule.select_subjects_randomly), e.ui.contentLoadingComplete=!0
            })).error((()=>e.ui.contentLoadingComplete=!0))
          };
          return function(){
            if(d.multiSelect("#exam-subject-types-select"), d.multiSelect("#classroom-subject-types-select"), d.multiSelect("#exam-subject-levels-select"), r.isEmpty(e.subjectLibs))return g()
          }
          ()
        }
      }
    }, 417343:(e, t, s)=>{
      var a=s(400565).initScope;
      e.exports=[
        "$scope", "$http", "toastr", "treeViewSearch", "multiSelect", function(e, t, s, r, n){
          return a(e, t, s, r, n, "group")
        }
      ]
    }, 429837:(e, t, s)=>{
      var a=s(248124), r=s(302543);
      function n(e, t){
        var s=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var a=Object.getOwnPropertySymbols(e);
          t&&(a=a.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), s.push.apply(s, a)
        }
        return s
      }
      function o(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var s=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?n(Object(s), !0).forEach((function(t){
            i(e, t, s[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
          }))
        }
        return e
      }
      function i(e, t, s){
        return t in e?Object.defineProperty(e, t, {
          value:s, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =s, e
      }
      s(418665), s(700533), s(334867), s(906048), s(14602);
      var u=s(552979).default, c=s(571478);
      e.exports=[
        "$rootScope", "$scope", "$http", "$timeout", "toastr", "subjectPointRuleHelper", function(e, t, s, n, i, l){
          var d=c(t);
          t.ui.ruleType="simple", t.examId=a("#examId").val(), t.analysisSubjects=[
          ], t.mediaSubjects=[
          ];
          var m=[
          ], p=[
          ];
          t.subjectsMap={
          }, t.analysisSubjectGroupExpanded=!0, t.mediaSubjectGroupExpanded=!0, t.subjectTypes=r.keys(t.subjectTypesNormal);
          var b={
            selectedCount:"selectedCountErr", points:"pointsErr", sumPoints:"sumPointsErr", sumPointsEquality:"sumPointsUnequalErr", difficultySumPointsEquality:"difficultySumPointsUnequalErr"
          }, f=r.keys(b);
          t.subjectsMap={
            totalSubjectCount:0, selectedSubjectCount:0, totalSumPoints:0, totalSumPointsError:null, totalValidationErrorNumber:0, rootSubjects:{
            }, analysisSubjects:{
            }, mediaSubjects:{
            }
          };
          var j={
            enableDifficulty:!1, subjectsCount:0, selectedCount:0, selectedCountErr:null, points:"", pointsErr:null, sumPoints:"", sumPointsErr:null, sumPointsUnequalErr:null, difficultySumPoints:"", difficultySumPointsErr:null, difficultySumPointsUnequalErr:null, difficultyPointsSetter:"", difficultySumPointsSetter:"", validationErrNum:0, easy:null, medium:null, hard:null
          }, v={
            subjectsCount:0, selectedCount:0, selectedCountErr:null, points:"", pointsErr:null, sumPoints:"", sumPointsErr:null, validationErrNum:0
          }, S=function(e, s){
            var a=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :null;
            if("rootSubjects"===e){
              if(0===l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                s
              ].sumPoints)&&0===t.subjectsMap.rootSubjects[
                s
              ].selectedCount)return void(t.subjectsMap.rootSubjects[
                s
              ].points="0");
              if(l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                s
              ].sumPoints)||!t.subjectsMap.rootSubjects[
                s
              ].selectedCount)return void(t.subjectsMap.rootSubjects[
                s
              ].points="");
              var r=l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                s
              ].sumPoints), n=10*r/(10*t.subjectsMap.rootSubjects[
                s
              ].selectedCount);
              t.subjectsMap.rootSubjects[
                s
              ].points="".concat(n), l.checkPointsNumericalPrecision(n)||(t.subjectsMap.rootSubjects[
                s
              ].points=n.toFixed(2))
            }
            var o=e=>{
              if(0!==l.getParsedPointsNum(e[
                a
              ]
              [
                s
              ].sumPoints)||0!==e[
                a
              ]
              [
                s
              ].selectedCount)if(!l.isNumberStrOrNumberEmpty(e[
                a
              ]
              [
                s
              ].sumPoints)&&e[
                a
              ]
              [
                s
              ].selectedCount){
                var t=10*l.getParsedPointsNum(e[
                  a
                ]
                [
                  s
                ].sumPoints)/(10*e[
                  a
                ]
                [
                  s
                ].selectedCount);
                e[
                  a
                ]
                [
                  s
                ].points="".concat(t), l.checkPointsNumericalPrecision(t)||(e[
                  a
                ]
                [
                  s
                ].points=t.toFixed(2))
              }
              else e[
                a
              ]
              [
                s
              ].points="";
              else e[
                a
              ]
              [
                s
              ].points="0"
            };
            "analysisSubjects"===e&&o(t.subjectsMap.analysisSubjects), "mediaSubjects"===e&&o(t.subjectsMap.mediaSubjects)
          }, _=function(e, s, a){
            var r=arguments.length>3&&void 0!==arguments[
              3
            ]
            ?arguments[
              3
            ]
            :null;
            if("rootSubjects"===e){
              if(0===l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].sumPoints)&&0===t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].selectedCount)return void(t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].points="0");
              if(l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].sumPoints)||!t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].selectedCount)return void(t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].points="");
              var n=l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].sumPoints), o=10*n/(10*t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].selectedCount);
              t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].points="".concat(o), l.checkPointsNumericalPrecision(o)||(t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].points=o.toFixed(2))
            }
            var i=e=>{
              if(0!==l.getParsedPointsNum(e[
                r
              ]
              [
                s
              ]
              [
                a
              ].sumPoints)||0!==e[
                r
              ]
              [
                s
              ]
              [
                a
              ].selectedCount)if(!l.isNumberStrOrNumberEmpty(e[
                r
              ]
              [
                s
              ]
              [
                a
              ].sumPoints)&&e[
                r
              ]
              [
                s
              ]
              [
                a
              ].selectedCount){
                var t=10*l.getParsedPointsNum(e[
                  r
                ]
                [
                  s
                ]
                [
                  a
                ].sumPoints)/(10*e[
                  r
                ]
                [
                  s
                ]
                [
                  a
                ].selectedCount);
                e[
                  r
                ]
                [
                  s
                ]
                [
                  a
                ].points="".concat(t), l.checkPointsNumericalPrecision(t)||(e[
                  r
                ]
                [
                  s
                ]
                [
                  a
                ].points=t.toFixed(2))
              }
              else e[
                r
              ]
              [
                s
              ]
              [
                a
              ].points="";
              else e[
                r
              ]
              [
                s
              ]
              [
                a
              ].points="0"
            };
            "analysisSubjects"===e&&i(t.subjectsMap.analysisSubjects), "mediaSubjects"===e&&i(t.subjectsMap.mediaSubjects)
          }, x=()=>{
            var e=0;
            r.each(t.subjectsMap.rootSubjects, (t=>{
              var s=t.selectedCount||0;
              e+=s
            })), t.subjectsMap.selectedSubjectCount=e
          }, y=()=>{
            var e=0;
            r.each(t.subjectsMap.rootSubjects, (t=>{
              var s=t.enableDifficulty?l.getParsedPointsNum(t.difficultySumPoints):l.getParsedPointsNum(t.sumPoints);
              e+=s
            })), t.subjectsMap.totalSumPoints=e
          }, h=e=>{
            if(t.subjectsMap.rootSubjects[
              e
            ])if(l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
              e
            ].points))t.subjectsMap.rootSubjects[
              e
            ].sumPoints="";
            else{
              var s=t.subjectsMap.rootSubjects[
                e
              ].selectedCount, a=l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                e
              ].points);
              t.subjectsMap.rootSubjects[
                e
              ].sumPoints="".concat(10*s*a*10/100)
            }
          }, g=e=>{
            if(t.subjectsMap.rootSubjects[
              e
            ]){
              var s=0;
              r.each(t.subjectDifficultyValueMap, (a=>{
                var r=t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  a
                ].selectedCount||0;
                s+=r
              })), t.subjectsMap.rootSubjects[
                e
              ].selectedCount=s
            }
          }, M=e=>{
            if(t.subjectsMap.rootSubjects[
              e
            ]){
              var s=0;
              r.each(t.subjectDifficultyValueMap, (a=>{
                var r=l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  a
                ].sumPoints);
                s+=r
              })), t.subjectsMap.rootSubjects[
                e
              ].difficultySumPoints="".concat(s)
            }
          }, w=(e, s)=>{
            if(t.subjectsMap.rootSubjects[
              e
            ])if(l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
              e
            ]
            [
              s
            ].points))t.subjectsMap.rootSubjects[
              e
            ]
            [
              s
            ].sumPoints="";
            else{
              var a=t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ].selectedCount, r=l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ].points);
              t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ].sumPoints="".concat(10*a*(10*r)/100)
            }
          }, E=e=>{
            t.subjectsMap.rootSubjects[
              e
            ]
            &&r.each(t.subjectDifficultyValueMap, (t=>{
              w(e, t)
            }))
          }, I=(e, s)=>{
            var a="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects, n=0;
            r.each(t.subjectTypes, (e=>{
              if(a[
                s
              ]
              &&a[
                s
              ]
              [
                e
              ]){
                var t=a[
                  s
                ]
                [
                  e
                ].selectedCount||0;
                n+=t
              }
            })), a[
              s
            ].selectedCount=n
          }, C=(e, s)=>{
            var a="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects, n=0;
            r.each(t.subjectTypes, (e=>{
              if(a[
                s
              ]
              &&a[
                s
              ]
              [
                e
              ]){
                var t=l.getParsedPointsNum(a[
                  s
                ]
                [
                  e
                ].sumPoints);
                n+=t
              }
            })), a[
              s
            ].sumPoints="".concat(n)
          }, P=(e, s)=>{
            var a="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(a[
              s
            ]){
              var n=0;
              r.each(t.subjectTypes, (e=>{
                if(a[
                  s
                ]
                [
                  e
                ]){
                  var t=a[
                    s
                  ]
                  [
                    e
                  ].selectedCount||0;
                  n+=t
                }
              })), a[
                s
              ].selectedCount=n
            }
          }, k=(e, s)=>{
            var a="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects, n=0;
            r.each(t.subjectTypes, (e=>{
              if(a[
                s
              ]
              [
                e
              ]){
                var t=l.getParsedPointsNum(a[
                  s
                ]
                [
                  e
                ].difficultySumPoints);
                n+=t
              }
            })), a[
              s
            ].difficultySumPoints="".concat(n)
          }, T=(e, s, a)=>{
            var r="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(r[
              s
            ]
            &&r[
              s
            ]
            [
              a
            ])if(l.isNumberStrOrNumberEmpty(r[
              s
            ]
            [
              a
            ].points))r[
              s
            ]
            [
              a
            ].sumPoints="";
            else{
              var n=r[
                s
              ]
              [
                a
              ].selectedCount, o=l.getParsedPointsNum(r[
                s
              ]
              [
                a
              ].points);
              r[
                s
              ]
              [
                a
              ].sumPoints="".concat(10*n*(10*o)/100)
            }
          }, D=(e, s, a)=>{
            var n="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(n[
              s
            ]
            [
              a
            ]){
              var o=0;
              r.each(t.subjectDifficultyValueMap, (e=>{
                var t=n[
                  s
                ]
                [
                  a
                ]
                [
                  e
                ].selectedCount||0;
                o+=t
              })), n[
                s
              ]
              [
                a
              ].selectedCount=o
            }
          }, F=(e, s)=>{
            r.each(t.subjectTypes, (t=>{
              D(e, s, t)
            }))
          }, N=(e, s, a, r)=>{
            var n="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(n[
              s
            ]
            [
              a
            ])if(l.isNumberStrOrNumberEmpty(n[
              s
            ]
            [
              a
            ]
            [
              r
            ].points))n[
              s
            ]
            [
              a
            ]
            [
              r
            ].sumPoints="";
            else{
              var o=n[
                s
              ]
              [
                a
              ]
              [
                r
              ].selectedCount, i=l.getParsedPointsNum(n[
                s
              ]
              [
                a
              ]
              [
                r
              ].points);
              n[
                s
              ]
              [
                a
              ]
              [
                r
              ].sumPoints="".concat(10*o*(10*i)/100)
            }
          }, A=(e, s, a)=>{
            var n="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            n[
              s
            ]
            &&n[
              s
            ]
            [
              a
            ]
            &&r.each(t.subjectDifficultyValueMap, (t=>{
              N(e, s, a, t)
            }))
          }, O=(e, s, a)=>{
            var n="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(n[
              s
            ]
            [
              a
            ]){
              var o=0;
              r.each(t.subjectDifficultyValueMap, (e=>{
                var t=l.getParsedPointsNum(n[
                  s
                ]
                [
                  a
                ]
                [
                  e
                ].sumPoints);
                o+=t
              })), n[
                s
              ]
              [
                a
              ].difficultySumPoints="".concat(o)
            }
          }, U=(e, s)=>{
            if(t.subjectsMap.rootSubjects[
              e
            ]){
              var a=b[
                s
              ];
              t.subjectsMap.rootSubjects[
                e
              ]
              [
                a
              ]
              &&(t.subjectsMap.rootSubjects[
                e
              ]
              [
                a
              ]
              =null, t.subjectsMap.rootSubjects[
                e
              ].validationErrNum-=1, t.subjectsMap.totalValidationErrorNumber-=1)
            }
          }, $=(e, s)=>{
            if(t.subjectsMap.rootSubjects[
              e
            ]){
              U(e, s);
              var a=b[
                s
              ], r=null;
              switch(s){
                case"selectedCount":null===t.subjectsMap.rootSubjects[
                  e
                ].selectedCount?r=u.t("exam.scoreSetting.numberFieldRequired"):t.subjectsMap.rootSubjects[
                  e
                ].selectedCount>t.subjectsMap.rootSubjects[
                  e
                ].subjectsCount?r=u.t("exam.scoreSetting.selectedCountExceedErr"):l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                  e
                ].sumPoints)||0===l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                  e
                ].sumPoints)||0!==t.subjectsMap.rootSubjects[
                  e
                ].selectedCount||(r=u.t("exam.scoreSetting.sumPointsNotZero"));
                break;
                case"points":0!==t.subjectsMap.rootSubjects[
                  e
                ].selectedCount&&l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                  e
                ].points)?r=u.t("exam.scoreSetting.numberFieldRequired"):l.checkPointsNumericalPrecision(t.subjectsMap.rootSubjects[
                  e
                ].points)||(r=u.t("exam.scoreSetting.pointsPrecisionErrTips"));
                break;
                case"sumPoints":var n=l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                  e
                ].sumPoints)||0, o=t.subjectsMap.rootSubjects[
                  e
                ].selectedCount;
                0!==t.subjectsMap.rootSubjects[
                  e
                ].selectedCount&&l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                  e
                ].sumPoints)?r=u.t("exam.scoreSetting.numberFieldRequired"):l.isNumberDivisible(n, o)||(r=u.t("exam.scoreSetting.sumPointsPrecisionErrTips1"))
              }
              !t.subjectsMap.rootSubjects[
                e
              ]
              [
                a
              ]
              &&r&&(t.subjectsMap.rootSubjects[
                e
              ].validationErrNum+=1, t.subjectsMap.totalValidationErrorNumber+=1), t.subjectsMap.rootSubjects[
                e
              ]
              [
                a
              ]
              =r
            }
          }, R=(e, s, a)=>{
            if(t.subjectsMap.rootSubjects[
              e
            ]){
              var r=b[
                a
              ];
              t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ]
              [
                r
              ]
              &&(t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ]
              [
                r
              ]
              =null, t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ].validationErrNum-=1, t.subjectsMap.rootSubjects[
                e
              ].validationErrNum-=1, t.subjectsMap.totalValidationErrorNumber-=1)
            }
          }, L=(e, s, a)=>{
            if(t.subjectsMap.rootSubjects[
              e
            ]){
              R(e, s, a);
              var r=b[
                a
              ], n=null;
              switch(a){
                case"selectedCount":null===t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].selectedCount?n=u.t("exam.scoreSetting.numberFieldRequired"):t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].selectedCount>t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].subjectsCount?n=u.t("exam.scoreSetting.selectedCountExceedErr"):l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].sumPoints)||0===l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].sumPoints)||0!==t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].selectedCount||(n=u.t("exam.scoreSetting.sumPointsNotZero"));
                break;
                case"points":0!==t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].selectedCount&&l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].points)?n=u.t("exam.scoreSetting.numberFieldRequired"):l.checkPointsNumericalPrecision(t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].points)||(n=u.t("exam.scoreSetting.pointsPrecisionErrTips"));
                break;
                case"sumPoints":var o=l.getParsedPointsNum(t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].sumPoints)||0, i=t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].selectedCount;
                0!==t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].selectedCount&&l.isNumberStrOrNumberEmpty(t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].sumPoints)?n=u.t("exam.scoreSetting.numberFieldRequired"):l.isNumberDivisible(o, i)||(n=u.t("exam.scoreSetting.sumPointsPrecisionErrTips1"))
              }
              !t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ]
              [
                r
              ]
              &&n&&(t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ].validationErrNum+=1, t.subjectsMap.rootSubjects[
                e
              ].validationErrNum+=1, t.subjectsMap.totalValidationErrorNumber+=1), t.subjectsMap.rootSubjects[
                e
              ]
              [
                s
              ]
              [
                r
              ]
              =n
            }
          }, V=(e, s)=>{
            t.subjectsMap.rootSubjects[
              e
            ]
            &&r.each(t.subjectDifficultyValueMap, (t=>{
              R(e, t, s)
            }))
          }, B=(e, s)=>{
            t.subjectsMap.rootSubjects[
              e
            ]
            &&(V(e, s), r.each(t.subjectDifficultyValueMap, (t=>{
              L(e, t, s)
            })))
          }, G=(e, s)=>{
            if(t.subjectsMap.analysisSubjects[
              e
            ]){
              var a=b[
                s
              ];
              t.subjectsMap.analysisSubjects[
                e
              ]
              [
                a
              ]
              &&(t.subjectsMap.analysisSubjects[
                e
              ]
              [
                a
              ]
              =null, t.subjectsMap.analysisSubjects[
                e
              ].validationErrNum-=1, t.subjectsMap.rootSubjects.analysis.validationErrNum-=1, t.subjectsMap.totalValidationErrorNumber-=1)
            }
          }, q=(e, s)=>{
            if(t.subjectsMap.mediaSubjects[
              e
            ]){
              var a=b[
                s
              ];
              t.subjectsMap.mediaSubjects[
                e
              ]
              [
                a
              ]
              &&(t.subjectsMap.mediaSubjects[
                e
              ]
              [
                a
              ]
              =null, t.subjectsMap.mediaSubjects[
                e
              ].validationErrNum-=1, t.subjectsMap.rootSubjects.media.validationErrNum-=1, t.subjectsMap.totalValidationErrorNumber-=1)
            }
          }, W=(e, s)=>{
            var a, n, o=[
            ], i="";
            if("analysis"===e){
              var u, c;
              if(!(o=t.subjectsMap.analysisSubjects)[
                s
              ])return;
              G(s, "sumPointsEquality"), G(s, "difficultySumPointsEquality");
              var l=null===(a=s, u=r.find(t.analysisSubjects, (e=>e.id===a)))||void 0===u?void 0:u.difficulty_level;
              i=t.subjectsMap.rootSubjects.analysis.enableDifficulty?null===(c=t.subjectsMap.rootSubjects.analysis[
                l
              ])||void 0===c?void 0:c.points:t.subjectsMap.rootSubjects.analysis.points
            }
            if("media"===e){
              var d, m;
              if(!(o=t.subjectsMap.mediaSubjects)[
                s
              ])return;
              q(s, "sumPointsEquality"), q(s, "difficultySumPointsEquality");
              var p=null===(n=s, d=r.find(t.mediaSubjects, (e=>e.id===n)))||void 0===d?void 0:d.difficulty_level;
              i=t.subjectsMap.rootSubjects.media.enableDifficulty?null===(m=t.subjectsMap.rootSubjects.media[
                p
              ])||void 0===m?void 0:m.points:t.subjectsMap.rootSubjects.media.points
            }
            var f=o[
              s
            ].enableDifficulty?"difficultySumPointsEquality":"sumPointsEquality", j=b[
              f
            ], v=null;
            switch(f){
              case"sumPointsEquality":i&&parseFloat(i).toFixed(1)!==parseFloat(o[
                s
              ].sumPoints).toFixed(1)&&(v="子题总分和综合题组设置分数不一致");
              break;
              case"difficultySumPointsEquality":i&&parseFloat(i).toFixed(1)!==parseFloat(o[
                s
              ].difficultySumPoints).toFixed(1)&&(v="子题总分和综合题组设置分数不一致")
            }
            !o[
              s
            ]
            [
              j
            ]
            &&v&&(o[
              s
            ].validationErrNum+=1, t.subjectsMap.totalValidationErrorNumber+=1, t.subjectsMap.rootSubjects[
              e
            ].validationErrNum+=1), o[
              s
            ]
            [
              j
            ]
            =v
          }, H=()=>{
            r.each(m, (e=>{
              G(e, "sumPointsEquality"), G(e, "difficultySumPointsEquality")
            })), r.each(m, (e=>{
              W("analysis", e)
            }))
          }, z=()=>{
            r.each(p, (e=>{
              q(e, "sumPointsEquality"), q(e, "difficultySumPointsEquality")
            })), r.each(p, (e=>{
              W("media", e)
            }))
          }, Q=(e, s, a, r)=>{
            var n="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(n[
              s
            ]
            &&n[
              s
            ]
            [
              a
            ]){
              var o=b[
                r
              ];
              n[
                s
              ]
              [
                a
              ]
              [
                o
              ]
              &&(n[
                s
              ]
              [
                a
              ]
              [
                o
              ]
              =null, n[
                s
              ]
              [
                a
              ].validationErrNum-=1, n[
                s
              ].validationErrNum-=1, t.subjectsMap.rootSubjects[
                e
              ].validationErrNum-=1, t.subjectsMap.totalValidationErrorNumber-=1)
            }
          }, J=(e, s, a, r)=>{
            var n="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(n[
              s
            ]
            &&n[
              s
            ]
            [
              a
            ]){
              Q(e, s, a, r);
              var o=b[
                r
              ], i=null;
              switch(r){
                case"selectedCount":null===n[
                  s
                ]
                [
                  a
                ].selectedCount?i=u.t("exam.scoreSetting.numberFieldRequired"):n[
                  s
                ]
                [
                  a
                ].selectedCount>n[
                  s
                ]
                [
                  a
                ].subjectsCount?i=u.t("exam.scoreSetting.selectedCountExceedErr"):l.isNumberStrOrNumberEmpty(n[
                  s
                ]
                [
                  a
                ].sumPoints)||0===l.getParsedPointsNum(n[
                  s
                ]
                [
                  a
                ].sumPoints)||0!==n[
                  s
                ]
                [
                  a
                ].selectedCount||(i=u.t("exam.scoreSetting.sumPointsNotZero"));
                break;
                case"points":0!==n[
                  s
                ]
                [
                  a
                ].selectedCount&&l.isNumberStrOrNumberEmpty(n[
                  s
                ]
                [
                  a
                ].points)?i=u.t("exam.scoreSetting.numberFieldRequired"):l.checkPointsNumericalPrecision(n[
                  s
                ]
                [
                  a
                ].points)||(i=u.t("exam.scoreSetting.pointsPrecisionErrTips"));
                break;
                case"sumPoints":var c=l.getParsedPointsNum(n[
                  s
                ]
                [
                  a
                ].sumPoints)||0, d=n[
                  s
                ]
                [
                  a
                ].selectedCount;
                0!==n[
                  s
                ]
                [
                  a
                ].selectedCount&&l.isNumberStrOrNumberEmpty(n[
                  s
                ]
                [
                  a
                ].sumPoints)?i=u.t("exam.scoreSetting.numberFieldRequired"):l.isNumberDivisible(c, d)||(i=u.t("exam.scoreSetting.sumPointsPrecisionErrTips1"))
              }
              !n[
                s
              ]
              [
                a
              ]
              [
                o
              ]
              &&i&&(n[
                s
              ]
              [
                a
              ].validationErrNum+=1, n[
                s
              ].validationErrNum+=1, t.subjectsMap.rootSubjects[
                e
              ].validationErrNum+=1, t.subjectsMap.totalValidationErrorNumber+=1), n[
                s
              ]
              [
                a
              ]
              [
                o
              ]
              =i
            }
          }, Y=(e, s, a, r, n)=>{
            var o="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(o[
              s
            ]
            [
              a
            ]){
              var i=b[
                n
              ];
              o[
                s
              ]
              [
                a
              ]
              [
                r
              ]
              [
                i
              ]
              &&(o[
                s
              ]
              [
                a
              ]
              [
                r
              ]
              [
                i
              ]
              =null, o[
                s
              ]
              [
                a
              ]
              [
                r
              ].validationErrNum-=1, o[
                s
              ]
              [
                a
              ].validationErrNum-=1, o[
                s
              ].validationErrNum-=1, t.subjectsMap.rootSubjects[
                e
              ].validationErrNum-=1, t.subjectsMap.totalValidationErrorNumber-=1)
            }
          }, Z=(e, s, a, r, n)=>{
            var o="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            if(o[
              s
            ]
            [
              a
            ]){
              Y(e, s, a, r, n);
              var i=b[
                n
              ], c=null;
              switch(n){
                case"selectedCount":null===o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].selectedCount?c=u.t("exam.scoreSetting.numberFieldRequired"):o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].selectedCount>o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].subjectsCount?c=u.t("exam.scoreSetting.selectedCountExceedErr"):l.isNumberStrOrNumberEmpty(o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].sumPoints)||0===l.getParsedPointsNum(o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].sumPoints)||0!==o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].selectedCount||(c=u.t("exam.scoreSetting.sumPointsNotZero"));
                break;
                case"points":0!==o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].selectedCount&&l.isNumberStrOrNumberEmpty(o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].points)?c=u.t("exam.scoreSetting.numberFieldRequired"):l.checkPointsNumericalPrecision(o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].points)||(c=u.t("exam.scoreSetting.pointsPrecisionErrTips"));
                break;
                case"sumPoints":var d=l.getParsedPointsNum(o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].sumPoints)||0, m=o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].selectedCount;
                0!==o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].selectedCount&&l.isNumberStrOrNumberEmpty(o[
                  s
                ]
                [
                  a
                ]
                [
                  r
                ].sumPoints)?c=u.t("exam.scoreSetting.numberFieldRequired"):l.isNumberDivisible(d, m)||(c=u.t("exam.scoreSetting.sumPointsPrecisionErrTips1"))
              }
              !o[
                s
              ]
              [
                a
              ]
              [
                r
              ]
              [
                i
              ]
              &&c&&(o[
                s
              ]
              [
                a
              ]
              [
                r
              ].validationErrNum+=1, o[
                s
              ]
              [
                a
              ].validationErrNum+=1, o[
                s
              ].validationErrNum+=1, t.subjectsMap.rootSubjects[
                e
              ].validationErrNum+=1, t.subjectsMap.totalValidationErrorNumber+=1), o[
                s
              ]
              [
                a
              ]
              [
                r
              ]
              [
                i
              ]
              =c
            }
          }, K=(e, s, a, n)=>{
            r.each(t.subjectDifficultyValueMap, (t=>{
              Y(e, s, a, t, n)
            }))
          }, X=(e, s, a, n)=>{
            K(e, s, a, n), r.each(t.subjectDifficultyValueMap, (t=>{
              Z(e, s, a, t, n)
            }))
          }, ee=()=>{
            t.subjectsMap.totalSumPointsError&&(t.subjectsMap.totalSumPointsError=null, t.subjectsMap.totalValidationErrorNumber-=1), (t.subjectsMap.totalSumPoints<0||t.subjectsMap.totalSumPoints>100)&&(t.subjectsMap.totalSumPointsError||(t.subjectsMap.totalValidationErrorNumber+=1), t.subjectsMap.totalSumPointsError="测试总分已超过100")
          }, te=()=>{
            r.each(t.subjectTypes, (e=>{
              r.each(f, (s=>{
                t.subjectsMap.rootSubjects[
                  e
                ]
                &&(U(e, s), V(e, s), t.subjectsMap.rootSubjects[
                  e
                ].enableDifficulty?B(e, s):$(e, s))
              }))
            })), r.each(m, (e=>{
              r.each(t.subjectTypes, (s=>{
                t.subjectsMap.analysisSubjects[
                  e
                ]
                [
                  s
                ]
                &&r.each(f, (a=>{
                  Q("analysis", e, s, a), K("analysis", e, s, a), t.subjectsMap.analysisSubjects[
                    e
                  ]
                  [
                    s
                  ].enableDifficulty?X("analysis", e, s, a):J("analysis", e, s, a)
                }))
              }))
            })), r.each(p, (e=>{
              r.each(t.subjectTypes, (s=>{
                t.subjectsMap.mediaSubjects[
                  e
                ]
                [
                  s
                ]
                &&r.each(f, (a=>{
                  Q("media", e, s, a), K("media", e, s, a), t.subjectsMap.mediaSubjects[
                    e
                  ]
                  [
                    s
                  ].enableDifficulty?X("media", e, s, a):J("media", e, s, a)
                }))
              }))
            })), H(), z(), ee()
          };
          t.toggleRootSubjectDifficulty=e=>{
            g(e), x(), h(e), E(e), M(e), y(), "analysis"===e&&H(), "media"===e&&z(), t.subjectsMap.rootSubjects[
              e
            ].enableDifficulty?r.each(f, (t=>{
              U(e, t), B(e, t)
            })):r.each(f, (t=>{
              V(e, t), $(e, t)
            })), ee()
          };
          t.toggleSpecificAnalysisDifficulty=(e, s)=>{
            var a="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            ((e, s)=>{
              var a="media"===e?t.subjectsMap.mediaSubjects[
                s
              ]
              :t.subjectsMap.analysisSubjects[
                s
              ], n=a.enableDifficulty;
              r.each(t.subjectTypes, (e=>{
                a[
                  e
                ]
                &&(a[
                  e
                ].enableDifficulty=n)
              }))
            })(e, s), F(e, s), P(e, s), I(e, s), r.each(t.subjectTypes, (t=>{
              T(e, s, t)
            })), C(e, s), a[
              s
            ].enableDifficulty?r.each(t.subjectTypes, (t=>{
              r.each(f, (a=>{
                Q(e, s, t, a), X(e, s, t, a)
              }))
            })):r.each(t.subjectTypes, (t=>{
              r.each(f, (a=>{
                K(e, s, t, a), J(e, s, t, a)
              }))
            })), W(e, s)
          }, t.changePointSettingRuleType=()=>{
            te()
          }, t.collapseOrExpandAnalysis=e=>{
            e.expanded=!e.expanded
          }, t.collapseOrExpandMedia=e=>{
            e.expanded=!e.expanded
          }, t.collapseOrExpandAllAnalysis=()=>{
            t.analysisSubjectGroupExpanded=!t.analysisSubjectGroupExpanded, r.map(t.analysisSubjects, (e=>{
              e.expanded=t.analysisSubjectGroupExpanded
            }))
          }, t.collapseOrExpandAllMedia=()=>{
            t.mediaSubjectGroupExpanded=!t.mediaSubjectGroupExpanded, r.map(t.mediaSubjects, (e=>{
              e.expanded=t.mediaSubjectGroupExpanded
            }))
          }, t.updateRootSubjectSelectedCountSimple=e=>{
            t.subjectsMap.rootSubjects[
              e
            ].selectedCount=l.getParsedSelectedCountNum(t.subjectsMap.rootSubjects[
              e
            ].selectedCount), x(), h(e), y(), $(e, "selectedCount"), $(e, "points"), $(e, "sumPoints"), ee()
          }, t.updateRootSubjectPoints=e=>{
            h(e), y(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (t=>{
              $(e, t)
            })), ee()
          }, t.updateRootSubjectSelectedCountComplex=e=>{
            t.subjectsMap.rootSubjects[
              e
            ].selectedCount=l.getParsedSelectedCountNum(t.subjectsMap.rootSubjects[
              e
            ].selectedCount), S("rootSubjects", e), x(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (t=>{
              $(e, t)
            })), ee()
          }, t.updateRootSubjectSumPoints=e=>{
            S("rootSubjects", e), y(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (t=>{
              $(e, t)
            })), ee()
          }, t.updateRootSubjectDifficultyPointsSetter=e=>{
            (e=>{
              r.each(t.subjectDifficultyValueMap, (s=>{
                t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].points=t.subjectsMap.rootSubjects[
                  e
                ].difficultyPointsSetter
              }))
            })(e), E(e), M(e), y(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (t=>{
              B(e, t)
            })), ee()
          }, t.updateRootSubjectDifficultySelectedCountSimple=(e, s)=>{
            t.subjectsMap.rootSubjects[
              e
            ]
            [
              s
            ].selectedCount=l.getParsedSelectedCountNum(t.subjectsMap.rootSubjects[
              e
            ]
            [
              s
            ].selectedCount), g(e), x(), w(e, s), M(e), y(), "analysis"===e&&H(), "media"===e&&z(), L(e, s, "selectedCount"), L(e, s, "points"), L(e, s, "sumPoints"), ee()
          }, t.updateRootSubjectDifficultyPoints=(e, t)=>{
            w(e, t), M(e), y(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (s=>{
              L(e, t, s)
            })), ee()
          }, t.updateRootSubjectDifficultySumPointsSetter=e=>{
            (e=>{
              r.each(t.subjectDifficultyValueMap, (s=>{
                t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].sumPoints=t.subjectsMap.rootSubjects[
                  e
                ].difficultySumPointsSetter, _("rootSubjects", e, s)
              }))
            })(e), M(e), y(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (t=>{
              B(e, t)
            })), ee()
          }, t.updateRootSubjectDifficultySelectedCountComplex=(e, s)=>{
            t.subjectsMap.rootSubjects[
              e
            ]
            [
              s
            ].selectedCount=l.getParsedSelectedCountNum(t.subjectsMap.rootSubjects[
              e
            ]
            [
              s
            ].selectedCount), x(), _("rootSubjects", e, s), M(e), y(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (t=>{
              L(e, s, t)
            })), ee()
          }, t.updateRootSubjectDifficultySumPoints=(e, t)=>{
            _("rootSubjects", e, t), M(e), y(), "analysis"===e&&H(), "media"===e&&z(), r.each(f, (s=>{
              L(e, t, s)
            })), ee()
          }, t.updateSubSubjectSelectedCountSimple=(e, s, a)=>{
            var r="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            r[
              s
            ]
            [
              a
            ].selectedCount=l.getParsedSelectedCountNum(r[
              s
            ]
            [
              a
            ].selectedCount), I(e, s), T(e, s, a), C(e, s), J(e, s, a, "selectedCount"), J(e, s, a, "points"), J(e, s, a, "sumPoints"), W(e, s)
          }, t.updateSubSubjectPoints=(e, t, s)=>{
            T(e, t, s), C(e, t), r.each(f, (a=>{
              J(e, t, s, a)
            })), W(e, t)
          }, t.updateSubSubjectSelectedCountComplex=(e, s, a)=>{
            var n=[
            ], o="";
            "media"===e?(n=t.subjectsMap.mediaSubjects, o="mediaSubjects"):"analysis"===e&&(n=t.subjectsMap.analysisSubjects, o="analysisSubjects"), n[
              s
            ]
            [
              a
            ].selectedCount=l.getParsedSelectedCountNum(n[
              s
            ]
            [
              a
            ].selectedCount), S(o, a, s), I(e, s), r.each(f, (t=>{
              J(e, s, a, t)
            })), W(e, s)
          }, t.updateSubSubjectSumPoints=(e, t, s)=>{
            S("media"===e?"mediaSubjects":"analysisSubjects", s, t), C(e, t), r.each(f, (a=>{
              J(e, t, s, a)
            })), W(e, t)
          }, t.updateSubSubjectDifficultySelectedCountSimple=(e, s, a, r)=>{
            var n="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            n[
              s
            ]
            [
              a
            ]
            [
              r
            ].selectedCount=l.getParsedSelectedCountNum(n[
              s
            ]
            [
              a
            ]
            [
              r
            ].selectedCount), D(e, s, a), P(e, s), N(e, s, a, r), O(e, s, a), k(e, s), Z(e, s, a, r, "selectedCount"), Z(e, s, a, r, "points"), Z(e, s, a, r, "sumPoints"), W(e, s)
          }, t.updateSubSubjectDifficultyPoints=(e, t, s, a)=>{
            N(e, t, s, a), O(e, t, s), k(e, t), r.each(f, (r=>{
              Z(e, t, s, a, r)
            })), W(e, t)
          }, t.updateSubSubjectDifficultySelectedCountComplex=(e, s, a, n)=>{
            var o="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects, i="media"===e?"mediaSubjects":"analysisSubjects";
            o[
              s
            ]
            [
              a
            ]
            [
              n
            ].selectedCount=l.getParsedSelectedCountNum(o[
              s
            ]
            [
              a
            ]
            [
              n
            ].selectedCount), D(e, s, a), _(i, a, n, s), O(e, s, a), k(e, s), r.each(f, (t=>{
              Z(e, s, a, n, t)
            })), W(e, s)
          }, t.updateSubSubjectDifficultySumPoints=(e, t, s, a)=>{
            _("media"===e?"mediaSubjects":"analysisSubjects", s, a, t), O(e, t, s), k(e, t), r.each(f, (r=>{
              Z(e, t, s, a, r)
            })), W(e, t)
          };
          var se=(e, s)=>{
            var a="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects, n=r.reduce(t.subjectTypes, ((e, n)=>(a[
              s
            ]
            [
              n
            ]
            &&(a[
              s
            ]
            [
              n
            ].enableDifficulty?r.each(t.subjectDifficultyValueMap, ((t, r)=>{
              e.push({
                rule_name:n, rule_point:parseFloat(a[
                  s
                ]
                [
                  n
                ]
                [
                  t
                ].points||"0").toString(), rule_number:a[
                  s
                ]
                [
                  n
                ]
                [
                  t
                ].selectedCount.toString(), rule_difficulty_level:r
              })
            })):e.push({
              rule_name:n, rule_point:parseFloat(a[
                s
              ]
              [
                n
              ].points||"0").toString(), rule_number:a[
                s
              ]
              [
                n
              ].selectedCount.toString()
            })), e)), [
            ]);
            return{
              subject_index:s, point_rules:n
            }
          }, ae=()=>{
            var e=[
            ], s={
              subject_index:0, point_rules:r.reduce(t.subjectTypes, ((e, s)=>(t.subjectsMap.rootSubjects[
                s
              ]
              &&(t.subjectsMap.rootSubjects[
                s
              ].enableDifficulty?r.each(t.subjectDifficultyValueMap, ((a, r)=>{
                e.push({
                  rule_name:s, rule_point:parseFloat(t.subjectsMap.rootSubjects[
                    s
                  ]
                  [
                    a
                  ].points||"0").toString(), rule_number:t.subjectsMap.rootSubjects[
                    s
                  ]
                  [
                    a
                  ].selectedCount.toString(), rule_difficulty_level:r
                })
              })):e.push({
                rule_name:s, rule_point:parseFloat(t.subjectsMap.rootSubjects[
                  s
                ].points||"0").toString(), rule_number:t.subjectsMap.rootSubjects[
                  s
                ].selectedCount.toString()
              })), e)), [
              ])
            };
            return e.push(s), r.each(t.analysisSubjects, (t=>{
              t.sub_subjects.length>0&&e.push(se("analysis", t.id))
            })), r.each(t.mediaSubjects, (t=>{
              t.sub_subjects.length>0&&e.push(se("media", t.id))
            })), e
          }, re=(e, s)=>{
            var a="media"===e?t.subjectsMap.mediaSubjects:t.subjectsMap.analysisSubjects;
            return r.reduce(t.subjectTypes, ((e, n)=>(a[
              s
            ]
            [
              n
            ]
            &&(e[
              n
            ]
            ={
            }, a[
              s
            ]
            [
              n
            ].enableDifficulty?r.map(t.subjectDifficulty, ((t, r)=>{
              e[
                n
              ]
              [
                r
              ]
              =a[
                s
              ]
              [
                n
              ]
              [
                r
              ].points||0
            })):r.map(t.subjectDifficulty, ((t, r)=>{
              e[
                n
              ]
              [
                r
              ]
              =a[
                s
              ]
              [
                n
              ].points
            }))), e)), {
            })
          }, ne=()=>{
            var e=t.$parent.currentSubject.saved, s=(()=>{
              var e={
                0:r.reduce(t.subjectTypes, ((e, s)=>(t.subjectsMap.rootSubjects[
                  s
                ]
                &&(e[
                  s
                ]
                ={
                }, t.subjectsMap.rootSubjects[
                  s
                ].enableDifficulty?r.map(t.subjectDifficulty, ((a, r)=>{
                  e[
                    s
                  ]
                  [
                    r
                  ]
                  =t.subjectsMap.rootSubjects[
                    s
                  ]
                  [
                    r
                  ].points||0
                })):r.map(t.subjectDifficulty, ((a, r)=>{
                  e[
                    s
                  ]
                  [
                    r
                  ]
                  =t.subjectsMap.rootSubjects[
                    s
                  ].points
                }))), e)), {
                })
              };
              return r.map(t.analysisSubjects, (t=>{
                e[
                  t.id
                ]
                =re("analysis", t.id)
              })), r.map(t.mediaSubjects, (t=>{
                e[
                  t.id
                ]
                =re("media", t.id)
              })), e
            })();
            r.map(t.subjects, (e=>{
              [
                "analysis", "media"
              ].includes(e.type)?e.updateSubSubjectsPointByRule(s[
                e.id
              ]):e.updateSubSubjectsPointByRule(s[
                0
              ])
            })), n((()=>{
              t.$parent.currentSubject.saved=e
            }))
          }, oe=()=>{
            d.show();
            var r=ae();
            s.put("/api/exams/".concat(t.examId, "/points-and-rules"), {
              subjects_points_and_rules:r
            }).success((s=>{
              i.success(s.message), a("#point-rule-popup-random").foundation("reveal", "close"), a(".select_subjects_randomly_rule_warning").addClass("hide"), s.select_subjects_randomly_rule&&(t.exam.subjects_rule.select_subjects_randomly_rule=s.select_subjects_randomly_rule), ne(), e.$emit("refreshExamSubjectRules", t.examId), d.hide()
            })).error((e=>{
              d.hide(), i.error(e.message)
            }))
          };
          t.saveSubjectPointsSetting=()=>{
            te(), t.subjectsMap.totalValidationErrorNumber>0||(l.getParsedPointsNum(t.subjectsMap.totalSumPoints)<100?t.$emit("showSavingPointRulesConfirmPopup"):oe())
          };
          var ie=e.$on("confirmSavePointRules", (()=>{
            oe()
          }));
          t.$on("$destroy", (function(){
            ie()
          }));
          var ue=()=>{
            var e=t.exam_or_makeup_exam.subjects_rule.select_subjects_randomly_rule, s=r.map(t.analysisSubjects, "id"), a=r.map(t.mediaSubjects, "id");
            t.subjectsMap.selectedSubjectCount=0, (e=>{
              r.each(t.subjectTypes, (s=>{
                if(t.subjectsMap.rootSubjects[
                  s
                ]
                &&Array.isArray(e[
                  0
                ]
                [
                  s
                ])){
                  var a=r.reduce(e[
                    0
                  ]
                  [
                    s
                  ], ((e, a)=>{
                    var n, o=parseFloat(a.subject_point), i=t.subjectDifficultyValueMap[
                      a.subject_difficulty_level
                    ];
                    return i?(t.subjectsMap.rootSubjects[
                      s
                    ].enableDifficulty=!0, n=r.min([
                      parseInt(a.subjects_count, 10), t.subjectsMap.rootSubjects[
                        s
                      ]
                      [
                        i
                      ].subjectsCount
                    ]), t.subjectsMap.rootSubjects[
                      s
                    ]
                    [
                      i
                    ].selectedCount=n, t.subjectsMap.rootSubjects[
                      s
                    ]
                    [
                      i
                    ].points="".concat(o), t.subjectsMap.rootSubjects[
                      s
                    ]
                    [
                      i
                    ].sumPoints="".concat(n*o), e.totalDifficultySumPoints+=10*n*(10*o)/100):(t.subjectsMap.rootSubjects[
                      s
                    ].enableDifficulty=!1, n=r.min([
                      parseInt(a.subjects_count, 10), t.subjectsMap.rootSubjects[
                        s
                      ].subjectsCount
                    ]), t.subjectsMap.rootSubjects[
                      s
                    ].selectedCount=n, t.subjectsMap.rootSubjects[
                      s
                    ].points="".concat(o), e.totalScoreBySubjectType+=10*n*(10*o)/100), e.selectedCountBySubjectType+=n, e
                  }), {
                    selectedCountBySubjectType:0, totalScoreBySubjectType:0, totalDifficultySumPoints:0
                  });
                  t.subjectsMap.selectedSubjectCount+=a.selectedCountBySubjectType, t.subjectsMap.rootSubjects[
                    s
                  ].selectedCount=a.selectedCountBySubjectType, "number"==typeof a.totalScoreBySubjectType&&(t.subjectsMap.rootSubjects[
                    s
                  ].sumPoints="".concat(l.formattedScore(a.totalScoreBySubjectType)), t.subjectsMap.totalSumPoints+=l.formattedScore(a.totalScoreBySubjectType)), "number"==typeof a.totalDifficultySumPoints&&(t.subjectsMap.rootSubjects[
                    s
                  ].difficultySumPoints="".concat(l.formattedScore(a.totalDifficultySumPoints)), t.subjectsMap.totalSumPoints+=l.formattedScore(a.totalDifficultySumPoints))
                }
              }))
            })(e);
            var n=(s, a)=>{
              r.each(a, (a=>{
                s[
                  a
                ]
                &&e[
                  a
                ]
                &&(s[
                  a
                ].selectedCount=0, ((e, s, a)=>{
                  var n=0, o=0;
                  e[
                    a
                  ].sumPoints=0, r.each(t.subjectTypes, (i=>{
                    if(e[
                      a
                    ]
                    &&Array.isArray(s[
                      a
                    ]
                    [
                      i
                    ])){
                      var u=r.reduce(s[
                        a
                      ]
                      [
                        i
                      ], ((s, n)=>{
                        var o, u=parseFloat(n.subject_point), c=t.subjectDifficultyValueMap[
                          n.subject_difficulty_level
                        ];
                        return c?(e[
                          a
                        ]
                        [
                          i
                        ].enableDifficulty=!0, e[
                          a
                        ].enableDifficulty=!0, o=r.min([
                          parseInt(n.subjects_count, 10), e[
                            a
                          ]
                          [
                            i
                          ]
                          [
                            c
                          ].subjectsCount
                        ]), e[
                          a
                        ]
                        [
                          i
                        ]
                        [
                          c
                        ].selectedCount=o, e[
                          a
                        ]
                        [
                          i
                        ]
                        [
                          c
                        ].points="".concat(u), e[
                          a
                        ]
                        [
                          i
                        ]
                        [
                          c
                        ].sumPoints="".concat(10*o*u*10/100), s.totalDifficultySumPoints+=10*o*u*10/100):(e[
                          a
                        ]
                        [
                          i
                        ].enableDifficulty=!1, e[
                          a
                        ].enableDifficulty=!1, o=r.min([
                          parseInt(n.subjects_count, 10), e[
                            a
                          ]
                          [
                            i
                          ].subjectsCount
                        ]), e[
                          a
                        ]
                        [
                          i
                        ].selectedCount=o, e[
                          a
                        ]
                        [
                          i
                        ].points="".concat(u), s.totalScoreBySubjectType+=10*o*u*10/100), s.selectedCountBySubjectType+=o, s
                      }), {
                        selectedCountBySubjectType:0, totalScoreBySubjectType:0, totalDifficultySumPoints:0
                      });
                      if(e[
                        a
                      ].selectedCount+=u.selectedCountBySubjectType, e[
                        a
                      ]
                      [
                        i
                      ].selectedCount=u.selectedCountBySubjectType, "number"==typeof u.totalScoreBySubjectType){
                        var c=l.formattedScore(u.totalScoreBySubjectType);
                        e[
                          a
                        ]
                        [
                          i
                        ].sumPoints="".concat(c), n+=c
                      }
                      if("number"==typeof u.totalDifficultySumPoints){
                        var d=l.formattedScore(u.totalDifficultySumPoints);
                        e[
                          a
                        ]
                        [
                          i
                        ].difficultySumPoints="".concat(d), o+=d
                      }
                    }
                  })), e[
                    a
                  ].sumPoints="".concat(n), e[
                    a
                  ].difficultySumPoints="".concat(o)
                })(s, e, a))
              }))
            };
            n(t.subjectsMap.analysisSubjects, s), n(t.subjectsMap.mediaSubjects, a)
          };
          t.analysisSubjects=r.filter(t.subjects, {
            type:"analysis"
          }), t.mediaSubjects=r.filter(t.subjects, {
            type:"media"
          }), r.each(t.analysisSubjects, (e=>{
            m.push(e.id)
          })), r.each(t.mediaSubjects, (e=>{
            p.push(e.id)
          })), r.map(t.subjects, (e=>{
            [
              "text", "random"
            ].includes(e.type)||((e=>{
              var s=e.type;
              s in t.subjectsMap.rootSubjects||(t.subjectsMap.rootSubjects[
                s
              ]
              =o({
              }, j), r.each(t.subjectDifficultyValueMap, (e=>{
                t.subjectsMap.rootSubjects[
                  s
                ]
                [
                  e
                ]
                =o({
                }, v)
              })))
            })(e), (e=>{
              var s=e.type, a="none"===e.difficulty_level?"medium":e.difficulty_level;
              t.subjectsMap.totalSubjectCount+=1, t.subjectsMap.selectedSubjectCount+=1, t.subjectsMap.rootSubjects[
                s
              ].subjectsCount+=1, t.subjectsMap.rootSubjects[
                s
              ]
              [
                a
              ].subjectsCount+=1
            })(e))
          })), r.map(t.analysisSubjects, (e=>{
            e.expanded=t.analysisSubjectGroupExpanded, (e=>{
              var s=e.id;
              e.difficulty_level, t.subjectsMap.analysisSubjects[
                s
              ]
              ||(t.subjectsMap.analysisSubjects[
                s
              ]
              =o({
              }, j))
            })(e), r.map(e.sub_subjects, (s=>{
              "text"!==s.type&&(((e, s)=>{
                var a=s.type;
                a in t.subjectsMap.analysisSubjects[
                  e
                ]
                ||(t.subjectsMap.analysisSubjects[
                  e
                ]
                [
                  a
                ]
                =o({
                }, j), r.each(t.subjectDifficultyValueMap, (s=>{
                  t.subjectsMap.analysisSubjects[
                    e
                  ]
                  [
                    a
                  ]
                  [
                    s
                  ]
                  =o({
                  }, v)
                })))
              })(e.id, s), ((e, s)=>{
                var a=s.type, r=s.difficulty_level;
                t.subjectsMap.analysisSubjects[
                  e
                ].subjectsCount+=1, t.subjectsMap.analysisSubjects[
                  e
                ]
                [
                  a
                ].subjectsCount+=1, t.subjectsMap.analysisSubjects[
                  e
                ]
                [
                  a
                ]
                [
                  r
                ].subjectsCount+=1
              })(e.id, s))
            }))
          })), r.map(t.mediaSubjects, (e=>{
            e.expanded=t.mediaSubjectGroupExpanded, (e=>{
              var s=e.id;
              t.subjectsMap.mediaSubjects[
                s
              ]
              ||(t.subjectsMap.mediaSubjects[
                s
              ]
              =o({
              }, j))
            })(e), r.map(e.sub_subjects, (s=>{
              ((e, s)=>{
                var a=s.type;
                a in t.subjectsMap.mediaSubjects[
                  e
                ]
                ||(t.subjectsMap.mediaSubjects[
                  e
                ]
                [
                  a
                ]
                =o({
                }, j), r.each(t.subjectDifficultyValueMap, (s=>{
                  t.subjectsMap.mediaSubjects[
                    e
                  ]
                  [
                    a
                  ]
                  [
                    s
                  ]
                  =o({
                  }, v)
                })))
              })(e.id, s), ((e, s)=>{
                var a=s.type, r=s.difficulty_level;
                t.subjectsMap.mediaSubjects[
                  e
                ].subjectsCount+=1, t.subjectsMap.mediaSubjects[
                  e
                ]
                [
                  a
                ].subjectsCount+=1, t.subjectsMap.mediaSubjects[
                  e
                ]
                [
                  a
                ]
                [
                  r
                ].subjectsCount+=1
              })(e.id, s)
            }))
          })), t.exam_or_makeup_exam.subjects_rule.select_subjects_randomly&&t.exam_or_makeup_exam.subjects_rule.select_subjects_randomly_rule?ue():(()=>{
            r.each(t.subjectTypes, (e=>{
              t.subjectsMap.rootSubjects[
                e
              ]
              &&(t.subjectsMap.rootSubjects[
                e
              ].selectedCount=t.subjectsMap.rootSubjects[
                e
              ].subjectsCount, r.each(t.subjectDifficultyValueMap, (s=>{
                t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].selectedCount=t.subjectsMap.rootSubjects[
                  e
                ]
                [
                  s
                ].subjectsCount
              })))
            }));
            var e=(e, t, s)=>{
              r.each(m, (a=>{
                e[
                  a
                ]
                &&r.each(t, (t=>{
                  e[
                    a
                  ]
                  [
                    t
                  ]
                  &&(e[
                    a
                  ]
                  [
                    t
                  ].selectedCount=e[
                    a
                  ]
                  [
                    t
                  ].subjectsCount, r.each(s, (s=>{
                    e[
                      a
                    ]
                    [
                      t
                    ]
                    [
                      s
                    ].selectedCount=e[
                      a
                    ]
                    [
                      t
                    ]
                    [
                      s
                    ].subjectsCount
                  })))
                }))
              }))
            };
            e(t.subjectsMap.analysisSubjects, t.subjectTypes, t.subjectDifficultyValueMap), e(t.subjectsMap.mediaSubjects, t.subjectTypes, t.subjectDifficultyValueMap)
          })(), r.each(m, (e=>{
            t.subjectsMap.analysisSubjects[
              e
            ].enableDifficulty?(F("analysis", e), P("analysis", e), I("analysis", e)):I("analysis", e)
          })), r.each(p, (e=>{
            t.subjectsMap.mediaSubjects[
              e
            ].enableDifficulty?(F("media", e), P("media", e), I("media", e)):I("media", e)
          })), r.each(t.subjectTypes, (e=>{
            t.subjectsMap.rootSubjects[
              e
            ]
            &&(t.subjectsMap.rootSubjects[
              e
            ].enableDifficulty?(g(e), x()):x())
          })), r.each(m, (e=>{
            t.subjectsMap.analysisSubjects[
              e
            ].enableDifficulty?(r.each(t.subjectTypes, (t=>{
              T("analysis", e, t)
            })), C("analysis", e)):(r.each(t.subjectTypes, (t=>{
              A("analysis", e, t), O("analysis", e, t)
            })), k("analysis", e))
          })), r.each(p, (e=>{
            t.subjectsMap.mediaSubjects[
              e
            ].enableDifficulty?(r.each(t.subjectTypes, (t=>{
              T("media", e, t)
            })), C("media", e)):(r.each(t.subjectTypes, (t=>{
              A("media", e, t), O("media", e, t)
            })), k("media", e))
          })), r.each(t.subjectTypes, (e=>{
            t.subjectsMap.rootSubjects[
              e
            ]
            &&(t.subjectsMap.rootSubjects[
              e
            ].enableDifficulty?(E(e), M(e), y()):(h(e), y()))
          }))
        }
      ]
    }, 638147:(e, t, s)=>{
      s(219693), s(906048), Date.now||(Date.now=function(){
        return(new Date).getTime()
      });
      var a=function(e){
        var t, s, a, r, n=Date.now(), o=document.querySelectorAll("script[src]"), i=o[
          o.length-1
        ].src, u=null, c=!1;
        function l(){
          return this?l:l.toString()
        }
        function d(e, t){
          this.value=e, this.precision=t
        }
        function m(e){
          String(e);
          u&&Math.abs(e-u), u=e, Math.abs(u-r)>l.amortizationThreshold&&(r=u)
        }
        function p(){
          var e, t, s, a=1;
          function r(){
            var n, o=new XMLHttpRequest;
            n=i.indexOf("?")>-1?"&":"?", o.open("HEAD", i+n+"noCache="+Date.now()+parseInt(1e6*Math.random())), o.onreadystatechange=function(){
              this.readyState==this.HEADERS_RECEIVED&&200==this.status&&(t=Date.now())
            }, o.onload=function(){
              if(200==this.status)try{
                var n=this.getAllResponseHeaders();
                -1===n.indexOf("date:")&&-1===n.indexOf("Date:")||function(n){
                  var o=(t-e)/2, i=new d(n+o-t, o);
                  String(i), (1==a||o<=s.precision)&&(s=i);
                  a<10?(a++, r()):(m(s), c=!1)
                }
                (new Date(this.getResponseHeader("Date")).getTime())
              }
              catch(e){
              }
            }, e=Date.now(), o.send()
          }
          c||(c=!0, setTimeout((function(){
            c=!1
          }), 1e4), r())
        }
        return l.parse=Date.parse, l.UTC=Date.UTC, l.now=function(){
          return Date.now()+r
        }, [
          "toString", "toDateString", "toTimeString", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "valueOf", "getTime", "getFullYear", "getUTCFullYear", "getMonth", "getUTCMonth", "getDate", "getUTCDate", "getDay", "getUTCDay", "getHours", "getUTCHours", "getMinutes", "getUTCMinutes", "getSeconds", "getUTCSeconds", "getMilliseconds", "getUTCMilliseconds", "getTimezoneOffset", "toUTCString", "toISOString", "toJSON"
        ].forEach((function(e){
          l[
            e
          ]
          =function(){
            return new Date(l.now())[
              e
            ]
            ()
          }
        })), l.getPrecision=function(){
          if(void 0!==u.precision)return u.precision+Math.abs(u-r)
        }, l.amortizationRate=25, l.amortizationThreshold=2e3, Object.defineProperty(l, "synchronizationIntervalDelay", {
          get:function(){
            return t
          }, set:function(e){
            t=e, clearInterval(s), s=setInterval(p, l.synchronizationIntervalDelay)
          }
        }), l.synchronizationIntervalDelay=6e5, d.prototype.valueOf=function(){
          return this.value
        }, d.prototype.toString=function(){
          return this.value+(void 0!==this.precision?" +/- "+this.precision:"")+" ms"
        }, r=e-n, "undefined"!=typeof performance&&(a=(n-performance.timing.domLoading)/2, r+=a), m(new d(r, a)), setInterval((function(){
          var e=Math.max(-l.amortizationRate, Math.min(l.amortizationRate, u-r));
          r+=e, e&&u.value
        }), 1e3), window.addEventListener("pageshow", p), p(), l
      }
      (Date.now());
      e.exports=a
    }, 655744:(e, t, s)=>{
      var a=s(248124), r=s(302543);
      s(215195), s(269193), s(906048), s(658379);
      var n=s(592207);
      function o(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var s=[
          ], a=!0, r=!1, n=void 0;
          try{
            for(var o, i=e[
              Symbol.iterator
            ]
            ();
            !(a=(o=i.next()).done)&&(s.push(o.value), !t||s.length!==t);
            a=!0);
          }
          catch(e){
            r=!0, n=e
          }
          finally{
            try{
              a||null==i.return||i.return()
            }
            finally{
              if(r)throw n
            }
          }
          return s
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return i(e, t);
          var s=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===s&&e.constructor&&(s=e.constructor.name);
          if("Map"===s||"Set"===s)return Array.from(e);
          if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function i(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      function u(e, t){
        var s=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var a=Object.getOwnPropertySymbols(e);
          t&&(a=a.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), s.push.apply(s, a)
        }
        return s
      }
      function c(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var s=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?u(Object(s), !0).forEach((function(t){
            l(e, t, s[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
          }))
        }
        return e
      }
      function l(e, t, s){
        return t in e?Object.defineProperty(e, t, {
          value:s, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =s, e
      }
      function d(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      s(207452);
      var m=s(731904).setDisableDevtool, p=s(512270), b=s(364523).initSubjectGroups;
      e.exports=[
        "$rootScope", "$scope", "$routeParams", "$http", "$location", "toastr", "ExamHelper", "statHelper", "examRepository", "ExamSubject", "classroomRepository", "$q", function(){
          var e, t=(e=n.mark((function e(t, i, u, l, d, f, j, v, S, _, x, y){
            var h, g, M, w, E, I, C, P, k, T, D, F, N, A, O, U, $, R, L;
            return n.wrap((function(e){
              for(;
              ;
              )switch(e.prev=e.next){
                case 0:return i.inExam=!0, i.examId=u.examId||a("#examId").val(), i.classroomId=u.classroomId||a("#classroomId").val(), t.viewSubmissionDetail=!0, i.calSubjectsPointValue=j.calSubjectsPointValue, i.ui=j.getUIHelper(), i.ui.viewingSubmission=!1, i.ui.viewAnswerSheet=!1, i.answerSheet={
                  flatSubjects:[
                  ], progress:{
                    total:0, totalPoint:0, answered:0
                  }
                }, e.next=11, b(i, !0);
                case 11:M=e.sent, w=M.buildSubjectGroup, E=M.getSubjectIndexInGroup, I=M.subjectGroupState, C=M.flatGroupSubjects, P=M.clearSubjectGroups, i.loadComponents=()=>{
                  Promise.resolve().then(s.bind(s, 678264))
                }, k=null===(h=window.globalData)||void 0===h?void 0:h.user.userNo, T=null===(g=window.globalData)||void 0===g?void 0:g.user.name, i.usernameAndUserNo="".concat(T, "***").concat(k), i.getSubjectIndex=function(e, t){
                  if(i.subjects){
                    var s=E(e);
                    return-1!==s?s:j.getSubjectIndex(e, t, i.subjects)
                  }
                }, D=e=>{
                  var t=!1;
                  return[
                    "single_selection", "true_or_false", "multiple_selection"
                  ].includes(e.type)?t=r.has(e, "submittedOptionIds")&&e.submittedOptionIds.length>0:"fill_in_blank"===e.type?t=!r.some(e.answers, (e=>""===e.content)):"short_answer"===e.type?t=Boolean(e.answer&&""!==e.answer||e.attachments&&e.attachments.length>0):[
                    "cloze", "analysis", "matching"
                  ].includes(e.type)&&(t=!r.some(e.sub_subjects, (e=>!D(e)))), t
                }, i.isAnsweredCorrectly=e=>{
                  var t=!1;
                  return i.correctData&&(t=[
                    "matching", "cloze"
                  ].includes(e.type)?e.sub_subjects.some((e=>i.correctData[
                    e.id
                  ])):i.correctData[
                    e.id
                  ]), t||e.answeredCorrectly
                }, F=e=>!!i.correctData&&"short_answer"===e.type&&!Object.prototype.hasOwnProperty.call(i.correctData, e.id), N=()=>{
                  var e=0, t=[
                  ], s=0;
                  !function a(r){
                    var n, o=arguments.length>1&&void 0!==arguments[
                      1
                    ]
                    ?arguments[
                      1
                    ]
                    :"", u=1;
                    r.forEach(((r, c)=>{
                      var l, d, m, p=o?"".concat(o, ".").concat(c+1):(c+1).toString();
                      if(I.useGroup&&"subject"!==(null===(l=i.exam.data)||void 0===l?void 0:l.subject_index_type)&&((null===(d=r.group)||void 0===d?void 0:d.id)!==(null===(m=n)||void 0===m?void 0:m.id)?(n=r.group, u=1):u++, p=o?"".concat(o, ".").concat(c+1):u.toString()), [
                        "analysis", "media"
                      ].includes(r.type)){
                        var b=r.sub_subjects.filter((e=>"paragraph_desc"!==e.type));
                        if(null!=b&&b.length){
                          var f, j=o||c+1;
                          I.useGroup&&"subject"!==(null===(f=i.exam.data)||void 0===f?void 0:f.subject_index_type)&&(j=o||u), a(b, j)
                        }
                      }
                      else{
                        e+=Number(r.point)>0?Number(r.point):0;
                        var v=D(r);
                        v&&s++, t.push({
                          index:p, id:r.id, type:r.type, subjectRef:r, answered:v, answeredCorrectly:i.isAnsweredCorrectly(r), unmarked:v&&F(r)
                        })
                      }
                    }))
                  }
                  (i.subjects), t=t.filter((e=>![
                    "analysis", "media"
                  ].includes(e.type)||e.subjectRef.sub_subjects.length>0)), i.answerSheet.flatSubjects=t, i.answerSheet.progress.total=t.length, i.answerSheet.progress.answered=s, i.answerSheet.progress.totalPoint=e>100?100:e, i.ui.viewAnswerSheet=!0
                }, A=function(e){
                  var s=function(e){
                    i.subjects=r.map(e.subjects_data.subjects, (e=>_.createSubjectBySavedSubject(e, !1)));
                    var s=e.submission_data.subjects, a=e.correct_answers_data.correct_answers, n=e.submission_score_data, o=e.submission_comment_data, u=e.knowledge_node_data;
                    i.correctData=e.correct_data, j.updateSubjectsDetailData(i.subjects, s, a, n, o, u), i.submissionScore=e.score, t.submissionData&&(t.submissionData.score=e.score, t.submissionData.isSimulated=e.is_simulated), P(), w(i.subjects);
                    var c=C();
                    I.useGroup&&(i.subjects=c.map((e=>_.createSubjectBySavedSubject(e, !1)))), N()
                  }, a=function(e, t){
                    400===t&&(i.scoreNotAnnouncedMessage=e.message), 404===t&&(f.warning(e.message), d.path("/".concat(i.examId)))
                  };
                  if(i.examId&&l.get("/api/exams/".concat(i.examId, "/submissions/").concat(e)).success(s).error(a), i.classroomId)return l.get("/api/classroom-exams/".concat(i.classroomId, "/submissions/").concat(e)).success(s).error(a)
                }, i.viewSubmission=e=>{
                  i.ui.viewingSubmission=!0, A(e)
                }, O=e=>{
                  i.ui.viewingSubmission=!0, t.ui.viewRetakeSubmission=!0, l.get("/api/exams/".concat(i.examId, "/retake-records/").concat(e)).success((e=>{
                    i.subjects=r.map(e.subjects_data.subjects, (e=>_.createSubjectBySavedSubject(e, !1)));
                    var t=e.submission_data.subjects, s=e.correct_answers_data.correct_answers;
                    j.updateSubjectsDetailData(i.subjects, t, s, {
                    }, {
                    })
                  }))
                }, i.canViewScore=()=>i.exam&&i.exam.is_announce_score_time_passed, i.canViewPaper=()=>i.exam&&"no_announce_paper_and_answer"!==i.exam.announce_answer_status, i.canViewAnswer=()=>i.exam&&("immediate_announce"===i.exam.announce_answer_status||"timed_announce"===i.exam.announce_answer_status&&i.exam.is_announce_answer_time_passed), i.returnSubmissionList=()=>i.ui.viewingSubmission=!1, i.currentMarkedAttachment={
                }, i.subjectAttachmentMap={
                }, i.getSubjectAttachmentMap=e=>{
                  l.get("/api/submissions/".concat(e, "/submission_marked_attachments")).then((e=>{
                    i.subjectAttachmentMap=e.data.marked_attachment_infos
                  }))
                }, i.needShowExamMarkedPreview=(e, t)=>{
                  if(!i.subjectAttachmentMap[
                    e
                  ])return!1;
                  var s=i.subjectAttachmentMap[
                    e
                  ]
                  [
                    t
                  ];
                  return s&&!r.isEmpty(s.marked_attachment)
                }, i.previewMarkedAttachment=(e, t)=>{
                  var s=i.subjectAttachmentMap[
                    t.id
                  ]
                  [
                    e
                  ], n=c(c({
                  }, s.origin_upload), s.origin_upload.upload);
                  n.isMarked=!r.isEmpty(s.marked_attachment), n.marked_attachment=s.marked_attachment, i.currentMarkedAttachment=n, a("#preview-exam-marked-attachment").foundation("reveal", "open")
                }, U=function(){
                  if(t.examSubmissions=i.examSubmissions=[
                  ], i.examId&&S.initExamSubmissions(i.examId).then((function(e){
                    return i.examSubmissions=r.sortBy(e.submissions, "created_at"), e.exam_final_score?i.exam.finalScore=e.exam_final_score:i.exam.scoreRule=e.exam_score_rule, t.examSubmissions=i.examSubmissions
                  })), i.classroomId)return x.initMyClassroomSubmissions(i.classroomId).then((function(e){
                    return i.examSubmissions=r.sortBy(e.submissions, "created_at"), t.examSubmissions=i.examSubmissions
                  }))
                }, $=e=>{
                  "True"!==a("#enrollmentIsInstructor").val()&&"True"!==a("#enrollmentIsInstructorAssistant").val()&&u.submissionId&&e.disable_devtool&&m()
                }, R=()=>{
                  S.initExam(i.examId).then((function(e){
                    return v.inExamPage(e), i.exam=e, $(e), U()
                  }))
                }, L=function(){
                  var e=x.initClassroom(i.classroomId), t=x.initSubjectsRule(i.classroomId);
                  return y.all([
                    e, t
                  ]).then((function(){
                    var e=Array.from(arguments.length<=0?void 0:arguments[
                      0
                    ]), t=o(e, 2), s=t[
                      0
                    ], a=t[
                      1
                    ];
                    return i.subjects_rule=a, i.classroom=s, i.classroom.isQuizPublic=i.subjects_rule.public, i.classroom.isQuizControlBySubject=i.subjects_rule.subject_by_subject_control
                  })), U()
                }, i.jumpToSubject=p.jumpToSubject, i.examId&&R(), i.classroomId&&L(), u.retakeRecordId&&O(u.retakeRecordId), u.submissionId&&(t.submissionData={
                  id:u.submissionId
                }, i.$watch((()=>t.submissionData.id), (function(e, t){
                  e!==t&&t&&(A(e), i.getSubjectAttachmentMap(e))
                })), i.viewSubmission(u.submissionId), i.getSubjectAttachmentMap(u.submissionId));
                case 45:case"end":return e.stop()
              }
            }), e)
          })), function(){
            var t=this, s=arguments;
            return new Promise((function(a, r){
              var n=e.apply(t, s);
              function o(e){
                d(n, a, r, o, i, "next", e)
              }
              function i(e){
                d(n, a, r, o, i, "throw", e)
              }
              o(void 0)
            }))
          });
          return function(e, s, a, r, n, o, i, u, c, l, d, m){
            return t.apply(this, arguments)
          }
        }
        ()
      ]
    }, 679759:(e, t, s)=>{
      var a=s(248124), r=s(302543), n=s(287092);
      s(219693), s(700533), s(210557), s(714913), s(334867), s(990345), s(269193), s(683396), s(43148), s(640173), s(658379);
      var o=s(592207);
      function i(e, t){
        var s;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(s=function(e, t){
            if(!e)return;
            if("string"==typeof e)return u(e, t);
            var s=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===s&&e.constructor&&(s=e.constructor.name);
            if("Map"===s||"Set"===s)return Array.from(e);
            if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return u(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            s&&(e=s);
            var a=0, r=function(){
            };
            return{
              s:r, n:function(){
                return a>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    a++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, o=!0, i=!1;
        return{
          s:function(){
            s=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=s.next();
            return o=e.done, e
          }, e:function(e){
            i=!0, n=e
          }, f:function(){
            try{
              o||null==s.return||s.return()
            }
            finally{
              if(i)throw n
            }
          }
        }
      }
      function u(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      function c(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      function l(e){
        return function(){
          var t=this, s=arguments;
          return new Promise((function(a, r){
            var n=e.apply(t, s);
            function o(e){
              c(n, a, r, o, i, "next", e)
            }
            function i(e){
              c(n, a, r, o, i, "throw", e)
            }
            o(void 0)
          }))
        }
      }
      s(207452);
      var d=s(571478), m=s(966491), p=s(552979).default, b=s(580630).useImage2Pdf, f=s(363838), j=s(181769), v=j.canEditActivity, S=j.hasEditPermissionForBlueprint, _=s(218831).camelizeKeys, x=s(5782).default, y=s(124059).A;
      e.exports=[
        "$rootScope", "$scope", "$http", "$routeParams", "ExamHelper", "$filter", "toastr", "examRepository", "ExamSubject", "storageUploader", "$translate", "$timeout", function(e, t, s, u, c, j, h, g, M, w, E, I){
          var C=u.examineeId, P=d(t);
          t.submissionData={
          }, t.currentExaminee=null, t.currentGroup=null, t.groups=[
          ], t.finalCalculate={
            multiplier:1, plusScore:0
          }, t.loading=!1, t.examId=u.examId||a("#examId").val(), t.calSubjectsPointValue=c.calSubjectsPointValue, t.subjectAttachmentMap=[
          ], t.inSubmission=!0, t.ui=c.getUIHelper(), t.ui.containsSubmissionNoScore=e=>r.some(e.submissions, (e=>null===e.score)), t.canShowOperations=e=>v(e), t.canEditActivitySelf=e=>S(e), t.canShowExplanationModal=e=>"short_answer"===e.type, t.canShowAirExamGradingPanel=e=>{
            var s, a=null===(s=window.featureToggles)||void 0===s?void 0:s.airGrading, r="short_answer"===e.type, n=v(t.exam);
            return a&&t.hasAiAbility&&r&&n
          };
          var k=function(){
            var s=l(o.mark((function s(a, r){
              var n, i;
              return o.wrap((function(s){
                for(;
                ;
                )switch(s.prev=s.next){
                  case 0:return s.next=2, g.initExaminees(a, !0, [
                    r
                  ]);
                  case 2:return(n=s.sent).length>0&&(e.currentExaminee=t.currentExaminee=n[
                    0
                  ], (i=t.currentExaminee.submissions[
                    0
                  ])&&(t.submissionData.id=i.id)), s.abrupt("return", t.currentExaminee);
                  case 5:case"end":return s.stop()
                }
              }), s)
            })));
            return function(e, t){
              return s.apply(this, arguments)
            }
          }
          (), T=function(){
            var e=l(o.mark((function e(s){
              var a;
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, g.loadGroups(s);
                  case 2:return a=e.sent, t.groups=a, e.abrupt("return", a);
                  case 5:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          (), D=function(){
            var s=l(o.mark((function s(a, n){
              var i, u;
              return o.wrap((function(s){
                for(;
                ;
                )switch(s.prev=s.next){
                  case 0:if(a=r.filter(a, (e=>!t.exam.has_assign_group||t.exam.assign_group_ids.includes(e.id))), i=r.find(a, (function(e){
                    var t=parseInt(n);
                    return e.members.includes(t)
                  }))){
                    s.next=4;
                    break
                  }
                  return s.abrupt("return", null);
                  case 4:return s.next=6, g.initExaminees(t.examId, !0, i.members);
                  case 6:return i.examinees=s.sent, i.submissions=r.sortBy(r.reduce(i.examinees, ((e, t)=>e.concat(r.each(t.submissions, (e=>e.examinee_id=t.id)))), [
                  ]), [
                    "created_at"
                  ]).reverse(), i.submissionTime=null!=i.submissions[
                    0
                  ]
                  ?i.submissions[
                    0
                  ].submitted_at:"", i.lastSubmitMethodText=F(i.submissions), e.currentGroup=t.currentGroup=i, (u=i.submissions[
                    0
                  ])&&(t.submissionData.id=u.id), s.abrupt("return", i);
                  case 14:case"end":return s.stop()
                }
              }), s)
            })));
            return function(e, t){
              return s.apply(this, arguments)
            }
          }
          (), F=function(e){
            var t="", s=r(e).filter((e=>e.is_latest_version&&e.submitted_at)).sortBy("submitted_at").reverse().first();
            return s&&s.submit_method_text&&(t=s.submit_method_text), t
          };
          t.edit=function(e){
            return e.showEdit=!0, I((()=>a("#input-".concat(e.id))[
              0
            ].focus()), 100)
          }, t.getSubjectIndex=function(e, s){
            if(t.subjects)return c.getSubjectIndex(e, s, t.subjects)
          };
          var N=t=>{
            e.$broadcast("pdfEditor", t, U(t.subject, t.uploadId, t.fileName)), a("#pdf-editor").foundation("reveal", "open")
          };
          t.$on("changePdfEditor", (function(e, s){
            for(var a=0, r=t.pdfEditorUploadIds.length, n=0;
            n<r;
            n++){
              if(t.pdfEditorUploadIds[
                n
              ]
              ==t.editingUploadId){
                a=n;
                break
              }
            }
            var o=a+s;
            o=o>0?o%r:r-1, t.openEditor(t.pdfEditorUploadIds[
              o
            ], t.activityData.subject)
          })), t.getSubjectAttachmentMap=e=>{
            s.get("/api/submissions/".concat(e, "/submission_marked_attachments")).then((e=>{
              t.subjectAttachmentMap=e.data.marked_attachment_infos
            }))
          }, t.openEditor=function(s, a){
            t.editingUploadId=s, t.editingSubject=a;
            var n=t.currentExaminee?t.currentExaminee.name:t.currentGroup.name, o=t.subjectAttachmentMap[
              a.id
            ]
            [
              t.editingUploadId
            ], i=o.origin_upload, u=o.origin_upload.name, c="";
            r.isEmpty(o.marked_attachment)||(c=o.marked_attachment.url), function(s){
              if(t.activityData={
              }, t.activityData.type="exam", t.activityData.subject=s, t.activityData.uploadsLen=s.attachments.length, t.pdfEditorUploadIds=[
              ], s.attachments)for(var a=0;
              a<s.attachments.length;
              a++){
                var r=s.attachments[
                  a
                ];
                e.canEditByPdfEditor(r)&&t.pdfEditorUploadIds.push(r.id)
              }
              e.$broadcast("setActivityData", t.activityData)
            }
            (a);
            var l={
              url:i.url, attachmentUrl:c, name:n, fileName:u, subject:a, uploadId:s, fileType:i.upload.type, imgURL:""
            };
            "image"===i.upload.type?(e=>{
              b(e.url, ((t, s)=>{
                e.url=t, e.imgURL=s, N(e)
              }))
            })(l):N(l)
          };
          var A=(e, t)=>w.getUploader(t).upload(e), O=(e, t)=>s.get("/api/submissions/".concat(e, "/subject_marked_attachments/").concat(t)).then((e=>e.data.marked_attachment));
          t.deleteFile=(e, a)=>{
            var r;
            Object.values(t.subjectAttachmentMap[
              a.id
            ]).find((t=>t.marked_attachment.upload&&t.marked_attachment.upload.id===e.id))&&(r=e.id, s.delete("/api/uploads/marked_attachment/".concat(r))).then((()=>{
              R(), Object.keys(t.subjectAttachmentMap[
                a.id
              ]).forEach((s=>{
                t.subjectAttachmentMap[
                  a.id
                ]
                [
                  s
                ].marked_attachment.upload.id===e.id&&(t.subjectAttachmentMap[
                  a.id
                ]
                [
                  s
                ].marked_attachment={
                })
              }))
            }))
          }, t.$watch((function(){
            return t.submissionData.id
          }), (function(){
            t.submissionData.id&&(t.subjectAttachmentMap=t.getSubjectAttachmentMap(t.submissionData.id))
          }));
          var U=(a, n, o)=>(o, i, u)=>{
            var c=e=>{
              console.error(e), h.decorateError()({
                message:E.instant("saveError")
              })
            }, l=t.subjectAttachmentMap[
              a.id
            ]
            [
              n
            ], d=!r.isEmpty(l.marked_attachment), p=null, b=m.base64ToFile(o, "markattachment.txt", "text/plain");
            if(d&&"QINIU"!==l.marked_attachment.storage_type){
              var f=l.marked_attachment;
              p=((e, t, s, a)=>{
                var r={
                  uploadId:s.upload.id, uploadUrl:s.write_url, file:a, transcoder:s.transcoder
                };
                return A(r, s.storage_type).then((()=>O(e, s.upload.id)))
              })(t.submissionData.id, a.id, f, b).then((e=>{
                l.marked_attachment=e
              }))
            }
            else p=((e, t, a, r)=>{
              var n={
                name:r.name, size:r.size, parent_type:"source_file", parent_id:a, is_scorm:!1, is_wmpkg:!1, is_marked_attachment:!0
              };
              return s.post("/api/uploads", n).then((e=>{
                var t=e.data, s={
                  uploadId:t.id, uploadUrl:t.upload_url, file:r, transcoder:t.transcoder
                };
                return A(s, t.storage_type).then((()=>t))
              })).then((t=>O(e, t.id)))
            })(t.submissionData.id, a.id, n, b).then((e=>{
              l.marked_attachment=e, a.marked_attachments||(a.marked_attachments=[
              ]), t.subjectAttachmentMap[
                a.id
              ]
              [
                n
              ].marked_attachment=e, s.put("/api/submissions/".concat(t.submissionData.id, "/subject/").concat(a.id, "/marked_attachment/").concat(e.upload.id)).error(c)
            }));
            p.then((()=>{
              i&&h.decorateSuccess()({
                message:E.instant("saveSuccess")
              })
            })).catch(c).finally((()=>{
              u&&u(l.marked_attachment.url), e.$broadcast("pdfEditor:loading", !1)
            }))
          };
          t.editScore=function(e){
            t.autoSaveScore(e, (()=>{
              e.showEdit=!1, e.error=""
            }), null)
          }, t.$watch("submissionData.id", (function(e, t){
            if(e!==t&&e)return $(e), R()
          }));
          var $=function(s){
            var a, n=arguments.length>1&&void 0!==arguments[
              1
            ]
            &&arguments[
              1
            ];
            return n&&(t.submissionData.id=s), t.currentExaminee||t.currentGroup?(a=t.currentExaminee?r.find(t.currentExaminee.submissions, {
              id:parseInt(s)
            }):r.find(t.currentGroup.submissions, {
              id:parseInt(s)
            }), t.submissionData.score=a.score, e.submissionData=t.submissionData):null
          }, R=function(){
            t.examId&&s.get("/api/exams/".concat(t.examId, "/submissions/").concat(t.submissionData.id)).success((function(e){
              t.instanceId=e.instance_id, t.subjects=r.map(e.subjects_data.subjects, (e=>M.createSubjectBySavedSubject(e, !1))), t.auto_mark=e.auto_mark, t.examPaperType=p.t("makeupQuestion.".concat(e.exam_type))[
                0
              ].toUpperCase()+p.t("makeupQuestion.".concat(e.exam_type)).slice(1), t.submitMethod=e.submit_method_text, t.isMakeup=e.is_makeup;
              var s=e.submission_data.subjects, a=e.correct_answers_data.correct_answers;
              t.submissionScoreData=e.submission_score_data;
              var n=e.submission_comment_data, o=e.knowledge_node_data;
              return t.submissionData.draftData=e.draft_data?_(e.draft_data):{
              }, c.updateSubjectsDetailData(t.subjects, s, a, t.submissionScoreData, n, o), V(), L()
            })).error((function(){
            }))
          }, L=function(){
            var e, s=0, n=0, o=0, u=0, c=0, l=0;
            t.manualEditMark=!0, r.each(t.subjectList, (function(e){
              if("short_answer"!==e.type){
                var t=parseFloat(e.score);
                return r.isFinite(t)&&(l+=1), o+=1, s+=parseFloat(e.score||0)
              }
              u+=1;
              var a=parseFloat(e.score);
              if(r.isFinite(a))return n+=a, c+=1
            }));
            var d=o>0, m=u>0&&u===c, b=0===u||m;
            return 0===u&&(t.manualEditMark=l===o&&null!==t.submissionData.score), t.objectiveQuestionScore=d?parseFloat(s.toFixed(1)):"--", t.objectiveQuestionScore=parseFloat(s.toFixed(1)), t.subjectiveQuestionScore=m?parseFloat(n.toFixed(1)):"--", t.score="--", t.manualEditMark&&(t.score=b?parseFloat((s+n).toFixed(1)):"--"), t.currentExaminee&&(e=t.currentExaminee.submissions), t.currentGroup&&(e=t.currentGroup.submissions), (()=>{
              var s, r=[
              ], n='<span class="makeup-tag">'.concat(p.t("invigilation.make_up_examination"), "</span>"), o=i(e);
              try{
                for(o.s();
                !(s=o.n()).done;
                ){
                  var u=s.value, c=parseFloat(u.score);
                  if(!isNaN(c)&&u.marked?(u.score=c, u.submissionStatus="".concat(j("datetime")(u.submitted_at), "&nbsp;")+"&nbsp; ( ".concat(t.scoreLabel, " ：").concat(u.score, " )")):u.submissionStatus="".concat(j("datetime")(u.submitted_at), "&nbsp;&nbsp; ( ").concat(t.notMarked, " )"), u.is_makeup?u.text="".concat(u.submissionStatus, "&nbsp").concat(n):u.text="".concat(u.submissionStatus), parseInt(u.id)===parseInt(t.submissionData.id)){
                    var l=a("#s2id_submission .select2-line-content");
                    l.length?r.push(l[
                      0
                    ].innerHTML='<div class="version-tag">'.concat(u.submissionStatus, "</div")):r.push(void 0)
                  }
                  else r.push(void 0)
                }
              }
              catch(e){
                o.e(e)
              }
              finally{
                o.f()
              }
              return a("#submission").select2({
                dropdownCssClass:"select2-drop-without-search", data:e, escapeMarkup:e=>e, templateResult:e=>e.text, templateSelection:e=>e.text
              }), r
            })()
          };
          t.onUpdateObjectiveScore=function(e){
            return s.post("/api/exams/".concat(t.exam.id, "/manualscoring/").concat(e)).success(h.decorateSuccess((function(e){
              t.manualEditMark=!0;
              var s=r.find(t.currentExaminee.submissions, {
                id:parseInt(t.submissionData.id)
              });
              s.score=e.score, s.marked=!0, $(e.id), L(), t.refreshSubmissionCount()
            }))).error(h.decorateError((function(){
            })))
          };
          var V=function(){
            t.subjectList=[
            ];
            var e, s=0, a=i(t.subjects);
            try{
              for(a.s();
              !(e=a.n()).done;
              ){
                var r=e.value;
                if("text"!==r.type)if(s+=1, r.number="".concat(s), [
                  "analysis", "media"
                ].includes(r.type)){
                  var o, u=0, c=i(r.sub_subjects);
                  try{
                    for(c.s();
                    !(o=c.n()).done;
                    ){
                      var l=o.value;
                      "paragraph_desc"!==l.type&&(u+=1, l.number="".concat(s, ".").concat(u), t.subjectList.push(l))
                    }
                  }
                  catch(e){
                    c.e(e)
                  }
                  finally{
                    c.f()
                  }
                }
                else t.subjectList.push(r)
              }
            }
            catch(e){
              a.e(e)
            }
            finally{
              a.f()
            }
            return t.rowList=n.range(0, Math.ceil(t.subjectList.length/5)-1, !0), t.columnList=[
              0, 1, 2, 3, 4
            ]
          }, B=e=>({
            subject_id:e.id, score:e.score, instance_id:t.instanceId, parent_id:e.parent_id
          }), G=function(e){
            var s, a=[
            ];
            return s=e?[
              e
            ]
            :t.subjects, r.each(s, (function(e){
              if("short_answer"!==e.type&&"fill_in_blank"!==e.type||a.push(B(e)), "analysis"===e.type)return a=a.concat((e=>r.map(r.filter(e, {
                type:"short_answer"
              }), B))(e.sub_subjects))
            })), a
          }, q=(e, s)=>(()=>{
            for(var a=[
            ], n=0;
            n<e.length;
            n++){
              var o=e[
                n
              ];
              if(o.score){
                var i=r.find(t.subjects, (e=>e.id===s[
                  n
                ].subject_id));
                i=W(t.subjects, s[
                  n
                ]), a.push(i.error=o.score)
              }
              else a.push(void 0)
            }
            return a
          })(), W=function(e, t){
            if(!t.parent_id)return r.find(e, {
              id:t.subject_id
            });
            var s=r.find(e, {
              id:t.parent_id
            });
            return r.find(s.sub_subjects, {
              id:t.subject_id
            })
          };
          t.save=function(t){
            return e.currentGroup?Q(t):z(t)
          };
          var H=(e, t, s)=>statistics.track({
            activity_id:e, activity_type:"exam", action:statistics.enums.Action.give_score, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, target_info:{
              id:t, type:s, is_student:!0
            }
          }), z=function(){
            var e=arguments.length>0&&void 0!==arguments[
              0
            ]
            &&arguments[
              0
            ], a=arguments.length>1?arguments[
              1
            ]
            :void 0, n=arguments.length>2?arguments[
              2
            ]
            :void 0, o=G(e), i=function(e){
              if(P.hide(), e.message&&h.warning(e.message), n&&n(), e.errors)return q(e.errors.graded_subjects, o)
            }, u=function(e){
              P.hide(), h.success();
              var s=t.currentExaminee;
              s.score=e.exam_score;
              var n=r.find(t.currentExaminee.submissions, {
                id:parseInt(t.submissionData.id)
              });
              if(n.score=e.submission_score, n.marked=e.marked, s.waitingForScore=!1, $(n.id), R(), t.refreshSubmissionCount(), H(t.examId, t.currentExaminee.id, "personal"), a)return a()
            }, c=()=>({
              examinee_id:t.currentExaminee.id, graded_subjects:o, submission_id:t.submissionData.id
            });
            return P.show(), s.post("/api/exams/".concat(t.examId, "/give-score"), c()).success(u).error(i)
          }, Q=function(){
            var a=arguments.length>0&&void 0!==arguments[
              0
            ]
            &&arguments[
              0
            ], n=arguments.length>1?arguments[
              1
            ]
            :void 0, o=arguments.length>2?arguments[
              2
            ]
            :void 0, u=G(a), c=function(e){
              if(P.hide(), e.message&&h.error(e.message), o&&o(), e.errors)return q(e.errors.graded_subjects, u)
            }, l=function(s){
              P.hide(), h.success();
              var a=r.find(e.currentGroup.submissions, {
                id:parseInt(t.submissionData.id)
              });
              a.score=s.submission_score;
              var o, u=i(e.currentGroup.examinees);
              try{
                for(u.s();
                !(o=u.n()).done;
                ){
                  o.value.score=s.exam_score
                }
              }
              catch(e){
                u.e(e)
              }
              finally{
                u.f()
              }
              if(t.submissionData.score=a.score, e.submissionData=t.submissionData, a.marked=s.marked, L(), t.refreshSubmissionCount(), H(t.examId, e.currentGroup.id, "group"), n)return n()
            }, d=()=>({
              examinee_ids:e.currentGroup.members, graded_subjects:u, submission_id:t.submissionData.id, group_submission_ids:r.map(e.currentGroup.submissions, "id")
            });
            return P.show(), s.post("/api/exams/".concat(t.examId, "/give-scores"), d()).success(l).error(c)
          };
          t.autoSaveScore=function(t, s){
            return e.currentGroup?Q(t, s):z(t, s)
          }, t.autoSaveSubmissionComment=function(e){
            var a={
              subject_id:e.id, comment:e.comment
            };
            return s.put("/api/exams/".concat(t.examId, "/submissions/").concat(t.submissionData.id, "/comment"), a).success((e=>h.success(e.message))).error((e=>h.error(e.errors.comment)))
          }, t.isNoScore=function(e){
            return!(!e||void 0!==e.score&&""!==e.score&&null!==e.score)
          }, t.getIndex=(e, t)=>5*e+t, t.scrollTo=function(e){
            var t, s=a("li#subject-".concat(e).replace(".", "\\.")).offset().top;
            t="1"===e||e.indexOf(".1")>0?133:100;
            var r=s+a("div#left-frame").scrollTop()-t;
            return a("div#left-frame").animate({
              scrollTop:r
            }, 500), !0
          }, t.previewVideo=e=>{
            var t="/api/uploads/".concat(e.id);
            return s.get(t).success((function(t){
              e.status=t.status, e.videos=t.videos, e.video_src_type=t.video_src_type, e.orgCode=t.orgCode, e.video_urls=f.getUrls(e)
            }))
          }, t.showExplanationModal=e=>{
            x(y, {
              examId:Number(t.examId), subject:e, markType:"student", destroyComponent:!0
            })
          };
          var J=function(){
            var e=l(o.mark((function e(s){
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, g.initExam(t.examId);
                  case 2:return t.exam=e.sent, t.activity=t.exam, e.abrupt("return", t.exam);
                  case 5:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          ();
          return function(){
            var e=l(o.mark((function e(){
              var s;
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(t.exam){
                    e.next=3;
                    break
                  }
                  return e.next=3, J(t.examId);
                  case 3:if(!t.exam.submit_by_group){
                    e.next=11;
                    break
                  }
                  return e.next=6, T(t.exam.group_set_id);
                  case 6:return s=e.sent, e.next=9, D(s, C);
                  case 9:e.next=13;
                  break;
                  case 11:return e.next=13, k(t.examId, C);
                  case 13:case"end":return e.stop()
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
    }, 699904:(e, t, s)=>{
      var a=s(248124), r=s(302543);
      s(658379), e.exports=[
        "$rootScope", "$scope", "$http", "ExamHelper", "examRepository", "toastr", function(e, t, s, n, o, i){
          return t.examId=a("#examId").val(), t.recalculateOriginal=function(){
            var e=[
            ];
            r.forEach(t.examinees, (function(t){
              e.push(t.id)
            }));
            var a=t.recalculateScoreExamType;
            return s.post("/api/exams/".concat(t.exam.id, "/recalculate"), {
              user_id_list:e, type:a
            }).success((function(e){
              return i.success(e.message), t.$emit("reloadAfterCalculate")
            })).error((function(e, t){
              if([
                400, 404
              ].includes(t)&&e.message)return i.warning(e.message)
            }))
          }, t.recalculateFinal=function(){
            var e=[
            ];
            r.forEach(t.examinees, (function(t){
              if(null!==t.score)return e.push({
                user_id:t.id, score:t.score
              })
            }));
            return s.post("/api/exams/".concat(t.exam.id, "/recalculate/final"), {
              multiplier:parseFloat(t.finalCalculate.multiplier||1), plusScore:parseFloat(t.finalCalculate.plusScore||0)
            }).success((function(e){
              return i.success(e.message), t.$emit("reloadAfterCalculate")
            })).error((function(e, t){
              if([
                400, 404
              ].includes(t)&&e.message)return i.error(e.message)
            }))
          }
        }
      ]
    }, 706213:(e, t, s)=>{
      s(269193);
      var a=s(400565).initScope;
      e.exports=[
        "$scope", "$http", "toastr", "treeViewSearch", "multiSelect", function(e, t, r, n, o){
          return e.loadComponents=()=>{
            Promise.resolve().then(s.bind(s, 678264))
          }, window.addEventListener("selectedKnowledgeNode", (t=>{
            e.conditions.knowledge_node_ids=t.detail.selectedNodeIds, e.searchLib()
          })), a(e, t, r, n, o, "course")
        }
      ]
    }, 728994:(e, t, s)=>{
      var a=s(248124), r=s(302543), n=s(793110);
      s(215195), s(418665), s(700533), s(269193), s(640173), s(14602);
      var o=s(592207);
      function i(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      function u(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var s=[
          ], a=!0, r=!1, n=void 0;
          try{
            for(var o, i=e[
              Symbol.iterator
            ]
            ();
            !(a=(o=i.next()).done)&&(s.push(o.value), !t||s.length!==t);
            a=!0);
          }
          catch(e){
            r=!0, n=e
          }
          finally{
            try{
              a||null==i.return||i.return()
            }
            finally{
              if(r)throw n
            }
          }
          return s
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return c(e, t);
          var s=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===s&&e.constructor&&(s=e.constructor.name);
          if("Map"===s||"Set"===s)return Array.from(e);
          if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return c(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function c(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      s(207452);
      var l=s(552979).default;
      e.exports=[
        "$rootScope", "$scope", "$routeParams", "$window", "$q", "modelHelper", "statHelper", "ExamHelper", "examRepository", "activityRepository", "toastr", "commonApi", "$http", function(e, t, s, c, d, m, p, b, f, j, v, S, _){
          var x, y="True"===a("#enrollment-is-student").val();
          t.examId=s.examId||a("#examId").val(), t.examIsSaving=!1, delete e.progressUi, t.userNo=window.globalData.user.userNo, j.logExamActivityRead(t.examId, {
          }), t.setUIEditSubjects(), t.canSyncPaper=()=>!(t.exam.is_started||0===t.exam.subjects_count&&!t.exam.paper_sync_time||t.exam.is_closed);
          t.openStartAudioExamConfirmationPopup=function(){
            a("#start-audio-exam-confirmation-popup").foundation("reveal", "open")
          }, t.goToSubjects=e=>{
            e.is_started||e.is_closed||(c.location.href="/exam/".concat(e.id, "/subjects"))
          }, t.openStartExamConfirmationPopup=function(s){
            return f.checkExamQualification(s, "start", (function(e){
              return t.exam.is_started=e.is_started, t.exam.is_leaving_window_constrained=e.is_leaving_window_constrained, t.exam.leaving_window_limit=e.leaving_window_limit, t.exam.check_submit_ip_consistency=e.check_submit_ip_consistency, t.exam.has_audio=e.has_audio, t.exam.is_device_active=e.is_device_active, e.is_closed?v.warning(e.message):function(e){
                return!!t.exam.is_started&&f.fetchExamTempSubmission(e).then((function(s){
                  if(s&&0===s.left_time)return t.examIsSaving=!0, void c.location.reload();
                  var r=t.exam;
                  e!=r.id&&(r=t.exam.make_up_record.makeup_exam), t.$emit("startExamConfirmationPopup", r), a("#start-exam-confirmation-popup").foundation("reveal", "open")
                }))
              }
              (s)
            }), (function(t){
              "invalid_ip_address"===t.error_code?(e.ipErrorMessage=t.message, e.clearCkeckStatus(), e.ipCkeckStatus.start=!0, a("#invalid-ip-confirmation-popup").foundation("reveal", "open")):"rollcall_not_attended"===t.error_code&&a("#rollcall-not-attended-popup").foundation("reveal", "open")
            }))
          }, t.showSubjectsSummary=(e, t, s)=>b.getSubjectsSummary(e, t, s), t.showSubjectsScore=function(e, t){
            return e<100?"，".concat(t.suffix.replace("{}", e), " ( ").concat(t.tip, " )"):"，".concat(t.suffix.replace("{}", e))
          }, t.syncSubjectsToPlatform=e=>{
            if(!(e.is_started||0===e.subjects_count&&!e.paper_sync_time||e.is_closed)){
              f.syncExamSubjectsToOtherPlatform(t.examId, (e=>{
                v.success(t.i18nMessages.syncSuccess), t.exam.paper_sync_time=e.paper_sync_time, t.exam.is_paper_sync_complete=!0
              }), (()=>v.error(t.i18nMessages.syncFailed)))
            }
          }, t.saveSubjectsToLib=function(t){
            e.$broadcast("saveSubjectsToLib", {
              examId:t.id, subjectCount:t.subjects_count
            })
          }, t.canSubmitMakeUpExam=()=>t.makeUpRecord&&t.makeUpRecord.is_processing&&!t.makeUpRecord.has_submitted;
          var h=()=>{
            f.initExamMakeUpRecord(t.examId).then((e=>{
              t.makeUpRecord=e.make_up_record, y&&t.$emit("onActivityLoaded", t.makeUpRecord)
            }))
          }, g=function(e){
            return e.subjects_rule.select_subjects_randomly&&e.subjects_rule.select_subjects_randomly_rule&&t.allowInstructorEdit&&(t.perfix=t.selectedPerfix), p.inExamPage(e), t.exam=e, t.currentActivity=t.exam
          }, M=function(){
            if(y){
              var e=f.initExam(t.examId), s=f.fetchExamTempSubmission(t.examId);
              return d.all([
                e, s
              ]).then((function(){
                var e=Array.from(arguments.length<=0?void 0:arguments[
                  0
                ]), s=u(e, 2), a=s[
                  0
                ], r=s[
                  1
                ];
                if(g(a), t.$emit("onActivityLoaded", a), r&&0===r.left_time)return t.examIsSaving=!0
              }))
            }
            return f.initExam(t.examId).then((e=>g(e)))
          };
          t.activityExpired=m.activityExpired, t.showMakeupSummaryInStudentView=function(){
            return!(!t.exam.make_up_record||"makeup_exam"!=t.exam.make_up_record.exam_paper_type)||r.some(t.examSubmissions, {
              exam_paper_type:"makeup_exam"
            })
          }, t.viewAssignTarget=(e, s)=>(t.assignTargetPopupTitle=b.buildAssignTargetPopupTitle(t.i18nMessages, e, t.course.students_count), t.vueParam={
            submitByGroup:e.submit_by_group, targetType:s, activityType:"exam_activity", activityId:e.id
          }, a("#assign_target_popup").foundation("reveal", "open"));
          var w=()=>f.initExamSubjectsSummary(t.examId).then(function(){
            var e, s=(e=o.mark((function e(s){
              return o.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:t.subjects=s, t.groupedSubjects=b.groupSubjects(s), t.hasAudio=r.some(b.flatSubjects(s), (e=>e.has_audio)), t.totalScore=r.reduce(s, ((e, t)=>e.plus(new n(t.point))), new n(0));
                  case 4:case"end":return e.stop()
                }
              }), e)
            })), function(){
              var t=this, s=arguments;
              return new Promise((function(a, r){
                var n=e.apply(t, s);
                function o(e){
                  i(n, a, r, o, u, "next", e)
                }
                function u(e){
                  i(n, a, r, o, u, "throw", e)
                }
                o(void 0)
              }))
            });
            return function(e){
              return s.apply(this, arguments)
            }
          }
          ()), E=()=>{
            t.exam.enable_exam_prerequisite&&"rollcall"==t.exam.exam_prerequisite.target_type&&S.getRollcallStudentsRollcalls(t.exam.exam_prerequisite.target_id, (function(e){
              t.exam_prerequisite_rollcall=e;
              var s={
                absent:0, on_call_fine:0, on_call_arrive_late:0, on_call_leave_early:0, on_call_arrive_late_leave_early:0, on_personal_leave:0, on_public_leave:0, on_sick_leave:0, on_physiological_leave:0, on_funeral_leave:0, on_mental_health_leave:0
              };
              r.extend(s, r.countBy(e.student_rollcalls, (e=>e.rollcall_status))), s.on_call=s.on_call_fine+s.on_call_arrive_late+s.on_call_leave_early+s.on_call_arrive_late_leave_early, s.on_leave=s.on_personal_leave+s.on_public_leave+s.on_sick_leave+s.on_physiological_leave+s.on_funeral_leave+s.on_mental_health_leave, t.exam_prerequisite_rollcall_count=s
            }))
          };
          e.$on("refreshExamData", ((e, s)=>t.exam=t.currentActivity=s.new)), null!==(x=window.featureToggles)&&void 0!==x&&x.lazyLoadCourseSection?Promise.all([
            M(), h()
          ]).then((()=>{
            e.$broadcast("loadingActivityFinished", {
              activityResponse:t.exam, activitiesRead:{
              }
            }), w(), j.initPublishInfo(t, t.exam), E()
          })):(M().then((()=>{
            w(), j.initPublishInfo(t, t.exam), E()
          })), h()), t.get_examination_url=()=>"".concat(t.exam.examination_url).concat(t.userNo), t.canViewKnowledgeNodeReference=()=>!!t.isInstructorView||"published"===t.course.knowledge_graph_publish_type, t.statusTips=e=>({
            processing:l.t("exam.video.status.processing"), missed:l.t("exam.video.status.missedFile"), noReady:l.t("exam.video.status.canNotPlay")
          }
          [
            e
          ]), t.isCanPreview=e=>e.deleted?[
            !1, t.statusTips("missed")
          ]
          :[
            "ready", "failed", "processing"
          ].includes(e.status)?[
            !0, ""
          ]
          :[
            !1, t.statusTips("noReady")
          ], t.showUploadPreview=e=>{
            e.deleted?v.warning(t.statusTips("missed")):_.get("/api/uploads/".concat(e.id)).success((e=>{
              var s=u(t.isCanPreview(e), 2), r=s[
                0
              ], n=s[
                1
              ];
              r?a("#file-previewer").foundation("reveal", "open"):""!==n&&v.warning(n)
            })).error((e=>{
              v.warning(e.message)
            }))
          }
        }
      ]
    }, 744294:(e, t, s)=>{
      var a=s(302543), r=s(795093), n=s(248124), o=s(793110);
      s(219693), s(418665), s(700533), s(269193), s(640173), s(868329), s(14602);
      var i=s(592207);
      function u(e, t, s, a, r, n, o){
        try{
          var i=e[
            n
          ]
          (o), u=i.value
        }
        catch(e){
          return void s(e)
        }
        i.done?t(u):Promise.resolve(u).then(a, r)
      }
      function c(e){
        return function(){
          var t=this, s=arguments;
          return new Promise((function(a, r){
            var n=e.apply(t, s);
            function o(e){
              u(n, a, r, o, i, "next", e)
            }
            function i(e){
              u(n, a, r, o, i, "throw", e)
            }
            o(void 0)
          }))
        }
      }
      s(207452);
      var l=s(552979).default;
      e.exports=[
        "$scope", "$http", "toastr", "$document", "examRepository", function(e, t, s, u, d){
          e.makeUpExamType="exam", e.canCreateMakeUp=!0, e.loading=!1, String.prototype.strip=function(){
            return null!=String.prototype.trim?this.trim():this.replace(/^\s+|\s+$/g, "")
          }, e.t=l.t.bind(l);
          var m=e=>{
            var t, s, r, n, o=null!==(t=null===(s=e.make_up_record)||void 0===s?void 0:s.makeup_exam)&&void 0!==t?t:{
            };
            return(null==e||null===(r=e.subjects_rule)||void 0===r?void 0:r.select_subjects_randomly)===(null==o||null===(n=o.subjects_rule)||void 0===n?void 0:n.select_subjects_randomly)||a.isEmpty(o)
          }, p=e=>{
            var t, s;
            return(null!==(t=null===(s=e.make_up_record)||void 0===s?void 0:s.makeup_exam)&&void 0!==t?t:{
            }).subjects_count>0
          }, b=()=>{
            var t=p(e.exam);
            return"exam"===e.makeUpExamType&&m(e.exam)&&!t||"makeup_exam"===e.makeUpExamType&&t
          };
          e.checkSubjectRule=()=>m(e.exam), e.checkHasSubject=()=>p(e.exam), u.on("open.fndtn.reveal", "#make-up-exam-popup", (()=>{
            e.model.makeUpStartTime="", e.canCreateMakeUp=b()
          })), e.model={
            makeUpStartTime:"", makeUpClosedTime:""
          }, e.checkIsEnglish=function(e){
            return 0===(e=e.strip().toLowerCase()).indexOf("en-")
          };
          var f=function(){
            var e=c(i.mark((function e(t){
              var s;
              return i.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, d.initExam(t);
                  case 2:return s=e.sent, e.abrupt("return", s);
                  case 4:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          (), j=function(){
            var s=c(i.mark((function s(){
              var a;
              return i.wrap((function(s){
                for(;
                ;
                )switch(s.prev=s.next){
                  case 0:return s.next=2, t.post("/api/exams/".concat(e.exam.id, "/makeup-exam-paper"));
                  case 2:return a=s.sent, s.abrupt("return", a.data.id);
                  case 4:case"end":return s.stop()
                }
              }), s)
            })));
            return function(){
              return s.apply(this, arguments)
            }
          }
          (), v=function(){
            var t=c(i.mark((function t(){
              var s, a, r, n;
              return i.wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return t.next=2, j();
                  case 2:return s=t.sent, t.next=5, f(s);
                  case 5:a=t.sent, r=a.make_up_record, n=a.makeup_exam_paper, e.exam.make_up_record=r, e.exam.makeup_exam_paper=n;
                  case 9:case"end":return t.stop()
                }
              }), t)
            })));
            return function(){
              return t.apply(this, arguments)
            }
          }
          ();
          e.save=c(i.mark((function u(){
            var c, d, b, f, j, S, _, x;
            return i.wrap((function(i){
              for(;
              ;
              )switch(i.prev=i.next){
                case 0:if(e.loading=!0, e.exam.make_up_record){
                  i.next=4;
                  break
                }
                return i.next=4, v();
                case 4:return c="/api/exam/".concat(e.exam.id, "/make-up-exam"), u=e.exam, (d=u.subjects_count>0&&!p(u)&&"exam"===e.makeUpExamType&&m(u))&&(c+="?import"), ""===e.model.makeUpStartTime&&(e.model.makeUpStartTime=r.utc().add(5, "seconds").format("YYYY-MM-DDTHH:mm:ss")+"Z"), b=a.map(e.makeUpExaminees, (e=>e.id)), i.prev=9, i.next=12, t.put(c, {
                  start_time:e.model.makeUpStartTime, closed_time:e.model.makeUpClosedTime, student_ids:b, exam_id:e.exam.id, type:"makeup_exam"
                });
                case 12:j=i.sent, S=null!==(f=j.data)&&void 0!==f?f:{
                }, e.model.makeUpClosedTime="", e.$emit("afterSaveMakeUpExam"), n("#make-up-exam-popup").foundation("reveal", "close"), d?(e.exam.make_up_record.makeup_exam.subjects_count=e.exam.subjects_count, e.makeupExamSubjects=[
                  ...e.examSubjects
                ], e.makeupExamTotalScore=e.makeupExamSubjects.reduce(((e, t)=>e.plus(new o(t.point))), new o(0)), (_=S.message)?_+=e.lang.toLocaleLowerCase().indexOf("en")?", ".concat(l.t("makeupExam.imported")):"，".concat(l.t("makeupExam.imported")):_=l.t("makeupExam.imported"), s.success(_)):s.success(S.message), i.next=23;
                break;
                case 20:i.prev=20, i.t0=i.catch(9), null!==(x=i.t0.data)&&void 0!==x&&x.errors?e.errors=i.t0.data.errors:s.error(i.t0.message);
                case 23:return i.prev=23, e.loading=!1, i.finish(23);
                case 26:case"end":return i.stop()
              }
              var u
            }), u, null, [
              [
                9, 20, 23, 26
              ]
            ])
          }))), e.changeMakeupType=function(){
            e.canCreateMakeUp=b()
          };
          var S=()=>{
            e.makeUpExamType=e.checkHasSubject()?"makeup_exam":"exam", e.canCreateMakeUp=b()
          };
          e.$on("makeUpExam", (function(t, s, a, r){
            var n, o;
            e.exam=s, e.makeUpExaminees=a, e.groupLength=r, e.exam.submit_by_group?(o=e.makeUpInfoForGroup, n=e.groupLength):(o=e.makeUpInfo, n=e.makeUpExaminees.length), e.message=o.replace("{0}", n), S()
          })), S()
        }
      ]
    }, 746798:(e, t, s)=>{
      s(552979).default;
      e.exports=[
        "classroomApi", "$q", "toastr", function(e, t, s){
          var a={
          }, r={
          }, n={
          }, o={
          }, i={
          }, u={
          }, c={
          };
          return{
            initClassroom(s){
              if(a[
                s
              ])return a[
                s
              ].promise;
              a[
                s
              ]
              =t.defer();
              return e.getClassroomExam(s, (e=>a[
                s
              ].resolve(e)), (()=>a[
                s
              ].resolve(null))), a[
                s
              ].promise
            }, deleteClassroomCache(e){
              if(a[
                e
              ])return delete a[
                e
              ]
            }, deleteFeedbackCache(e){
              if(r[
                e
              ])return delete r[
                e
              ]
            }, startClassroom:(t, s, r)=>e.startClassroom(t, (function(e){
              return a[
                t
              ]
              &&delete a[
                t
              ], s(e)
            }), (function(e){
              return a[
                t
              ]
              &&delete a[
                t
              ], r(e)
            })), finishClassroom:(t, s, r)=>e.finishClassroom(t, (function(e){
              return a[
                t
              ]
              &&delete a[
                t
              ], s(e)
            }), (function(e){
              return a[
                t
              ]
              &&delete a[
                t
              ], r(e)
            })), initFeedbackActivity(s){
              if(r[
                s
              ])return r[
                s
              ].promise;
              r[
                s
              ]
              =t.defer();
              return e.getFeedbackActivity(s, (e=>r[
                s
              ].resolve(e)), (()=>r[
                s
              ].resolve(null))), r[
                s
              ].promise
            }, initSubjectsRule(s){
              if(n[
                s
              ])return n[
                s
              ].promise;
              n[
                s
              ]
              =t.defer();
              return s?e.getSubjectsRule(s, (e=>n[
                s
              ].resolve(e)), (()=>n[
                s
              ].resolve(null))):n[
                s
              ].resolve({
                subject_by_subject_control:!1, public:!1
              }), n[
                s
              ].promise
            }, initSubjects(s){
              if(o[
                s
              ])return o[
                s
              ].promise;
              o[
                s
              ]
              =t.defer();
              return e.getSubjects(s, (e=>o[
                s
              ].resolve(e)), (()=>o[
                s
              ].resolve(null))), o[
                s
              ].promise
            }, initSubjectsWithStatInfo(s){
              if(i[
                s
              ])return i[
                s
              ].promise;
              i[
                s
              ]
              =t.defer();
              return e.getSubjectsWithStatInfo(s, (e=>i[
                s
              ].resolve(e.subjects)), (()=>i[
                s
              ].resolve([
              ]))), i[
                s
              ].promise
            }, initMyClassroomSubmissions(s){
              if(c[
                s
              ])return c[
                s
              ].promise;
              c[
                s
              ]
              =t.defer();
              return e.getMySubmissions(s, (e=>c[
                s
              ].resolve(e)), (()=>c[
                s
              ].resolve({
              }))), c[
                s
              ].promise
            }, initExaminees(s){
              var a=arguments.length>1&&void 0!==arguments[
                1
              ]
              &&arguments[
                1
              ], r=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :null, n=arguments.length>3&&void 0!==arguments[
                3
              ]
              &&arguments[
                3
              ];
              if(u[
                s
              ]
              &&!n)return u[
                s
              ].promise;
              u[
                s
              ]
              =t.defer();
              return e.getExaminees(s, (e=>u[
                s
              ].resolve(e.examinees)), (()=>u[
                s
              ].resolve([
              ])), a=a, r), u[
                s
              ].promise
            }, getClassroomExamSubmissions(s, a){
              var r=t.defer();
              return e.getClassroomExamSubmissions(s, a, (e=>r.resolve(e)), (()=>r.resolve(null))), r.promise
            }, getExamineesList(s){
              var a=t.defer();
              return e.getExamineesList(s, (e=>a.resolve(e.examinees)), (()=>a.resolve([
              ]))), a.promise
            }, getSubmissionCountStatus(s){
              var a=t.defer();
              return e.getSubmissionCountStatus(s, (e=>a.resolve(e)), (()=>a.resolve({
                all_submission_count:0, submission_has_marked_count:0
              }))), a.promise
            }, getExamineesList(s){
              var a=t.defer();
              return e.getExamineesList(s, (e=>a.resolve(e.examinees)), (()=>a.resolve([
              ]))), a.promise
            }, getSubmissionCountStatus(s){
              var a=t.defer();
              return e.getSubmissionCountStatus(s, (e=>a.resolve(e)), (()=>a.resolve({
                all_submission_count:0, submission_has_marked_count:0
              }))), a.promise
            }
          }
        }
      ]
    }, 852409:(e, t, s)=>{
      var a=s(302543), r=s(793110), n=s(248124), o=s(287092);
      function i(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var s=[
          ], a=!0, r=!1, n=void 0;
          try{
            for(var o, i=e[
              Symbol.iterator
            ]
            ();
            !(a=(o=i.next()).done)&&(s.push(o.value), !t||s.length!==t);
            a=!0);
          }
          catch(e){
            r=!0, n=e
          }
          finally{
            try{
              a||null==i.return||i.return()
            }
            finally{
              if(r)throw n
            }
          }
          return s
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return u(e, t);
          var s=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===s&&e.constructor&&(s=e.constructor.name);
          if("Map"===s||"Set"===s)return Array.from(e);
          if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return u(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function u(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var s=0, a=new Array(t);
        s<t;
        s++)a[
          s
        ]
        =e[
          s
        ];
        return a
      }
      s(215195), s(700533);
      var c=s(512270).getDefaultPlayTimeLimit;
      e.exports=[
        "$scope", "$http", "toastr", "$q", "multiSelect", "$routeParams", function(e, t, s, u, l, d){
          var m=function(){
            if(!e.selectRandomlyExam)return a.reduce(e.subjects, (function(e, t){
              var s=t.id?t.point:0;
              return e.minus(new r(s))
            }), new r(100))
          };
          e.conditions={
            exam_subject_types:[
            ], exam_subject_difficulty_levels:[
            ]
          };
          var p=u.defer(), b=u.defer();
          e.totalInfo={
          }, e.baseClassifications=[
            {
              id:0, name:""
            }
          ];
          var f=t=>a.each(t, (function(t){
            !function(e){
              if(delete e.hasPointFormatError, delete e.hasPointValueError, delete e.hasNumberFormatError, delete e.hasNumberValueError, ""===e.selectSubjectPoint&&(e.selectSubjectPoint=void 0), ""===e.selectSubjectCount)e.selectSubjectCount=void 0
            }
            (t);
            var s=t.selectSubjectPoint, a=t.selectSubjectCount;
            return null!=s&&s<=0&&(t.hasPointValueError=!0), null!=a&&(a%1!=0?t.hasNumberFormatError=!0:a<=0&&(t.hasNumberValueError=!0)), s=s||0, a=a||0, e.totalInfo.selectSubjectCount+=a, e.totalInfo.selectSubjectPoint+=a*s, a&&(!e.selectRandomlyExam&&s||e.selectRandomlyExam)&&e.totalInfo.selectedClassifications.push({
              id:t.id, count:t.selectSubjectCount, point:t.selectSubjectPoint||"0.0"
            }), f(t.children)
          }));
          e.calculate=function(){
            return e.errors&&e.errors.point&&delete e.errors.point, e.totalInfo={
              allValid:!0, leftPoints:m(), selectSubjectCount:0, selectSubjectPoint:0, selectedClassifications:[
              ]
            }, f(e.classifications)
          };
          var j=t=>a.each(t, (function(t){
            var s=t.selectSubjectPoint, a=t.selectSubjectCount;
            return e.selectRandomlyExam||null==s||null!=a||(t.hasNumberFormatError=!0), e.selectRandomlyExam||null!=s||null==a||(t.hasPointFormatError=!0), j(t.children)
          })), v=function t(s){
            if(e.totalInfo.allValid=!a.some(s, (e=>e.hasPointFormatError||e.hasNumberFormatError||e.hasPointValueError||e.hasNumberValueError)), e.totalInfo.allValid)return a.each(s, (e=>t(e.children)))
          };
          e.getSubjects=function(){
            var s=function(t){
              return e.addSubjectsFromCampus(t.subjects), n("#add-subjects-from-library-popup").foundation("reveal", "close")
            }, r=t=>e.errors=t.errors;
            if(j(e.classifications), v(e.classifications), !(!e.totalInfo.allValid||!e.selectRandomlyExam&&e.totalInfo.selectSubjectPoint>e.totalInfo.leftPoints)){
              var o=c([
                e.examId, e.classroomId
              ], !1), i={
                items:e.totalInfo.selectedClassifications, settings:o
              };
              a.assign(i, {
                exam_subject_types:e.conditions.exam_subject_types, exam_subject_difficulty_levels:e.conditions.exam_subject_difficulty_levels
              }), e.examId?t.post("/api/exams/".concat(e.examId, "/imported-subjects-from-campus"), i).success(s).error(r):e.classroomId&&t.post("/api/classrooms/".concat(e.classroomId, "/imported-subjects-from-campus"), i).success(s).error(r)
            }
          };
          var S=function e(t, s){
            var r=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :1;
            return a.each(t, (function(t){
              return t.subjectCount=s[
                t.id
              ]
              ||0, t.level=r, e(t.children, s, r+1)
            }))
          }, _=e=>a.filter(e, (function(e){
            return e.children=_(e.children), (e=>((null!=e?e.subjectCount:void 0)||0)>0)(e)||!a.isEmpty(e.children)
          })), x=function(){
            return e.ui.contentLoadingComplete=!1, e.totalInfo={
              allValid:!0, leftPoints:m(), selectSubjectCount:0, selectSubjectPoint:0, selectedClassifications:[
              ]
            }, p=u.defer(), b=u.defer(), u.all([
              (t.get("/api/campus-subject-lib/classifications").success((e=>b.resolve(e.classifications))).error(a.noop), b.promise), (s=e.classroomId?"classroom":"exam", r={
                exclude_analysis:!0, exam_type:s
              }, "exam"!==s&&"classroom"!==s||(r.conditions={
                exam_subject_types:e.conditions.exam_subject_types, exam_subject_difficulty_levels:e.conditions.exam_subject_difficulty_levels
              }), t.get("/api/campus-subject-lib/classifications/subject-count", {
                params:r
              }).success((e=>p.resolve(e))), p.promise)
            ]).then((function(){
              var t=Array.from(arguments.length<=0?void 0:arguments[
                0
              ]), s=i(t, 2), r=s[
                0
              ], n=s[
                1
              ];
              r=e.baseClassifications.concat(r), S(r, n), e.selectRandomlyExam=!!e.examId&&e.exam.subjects_rule.select_subjects_randomly, e.classifications=r, y()&&(e.classifications=_(a.cloneDeep(e.classifications))), e.ui.contentLoadingComplete=!0
            }));
            var s, r
          }, y=()=>o.guard(null!=e.conditions?e.conditions.exam_subject_types:void 0, (e=>e.length))>0||o.guard(null!=e.conditions?e.conditions.exam_subject_difficulty_levels:void 0, (e=>e.length))>0;
          e.searchCampusLibs=function(){
            x()
          };
          return l.multiSelect("#exam-campus-lib-subject-types-select"), l.multiSelect("#classroom-campus-lib-subject-types-select"), l.multiSelect("#exam-campus-lib-subject-levels-select"), x()
        }
      ]
    }, 853134:(e, t, s)=>{
      var a=s(302543), r=s(248124), n=s(756029), o=s(966491);
      e.exports=[
        "$scope", "$timeout", "$window", function(e, t, s){
          e.updateExamCorrectColumnSetting=t=>{
            o.saveCorrectColumnSetting(e.examId, "exam", t), a.merge(e.columnSetting, t)
          }, e.save=()=>(e.updateExamCorrectColumnSetting(e.settingCopy), t((()=>{
            s.dispatchEvent(new Event("resize"))
          })), r("#exam-correct-column-chooser-popup").foundation("reveal", "close"), !0), e.settingCopy=n.copy(e.columnSetting)
        }
      ]
    }, 900923:(e, t, s)=>{
      s(215195), s(43148), e.exports=[
        "$scope", e=>{
          e.inRandomSubjectPopup=!0, e.expandSubject=(e, t)=>{
            if(!e||e.stopPropagation){
              for(var s=e.target, a=!1;
              s&&s!==e.currentTarget;
              ){
                if(s&&Array.from(s.classList).includes("summary-title")){
                  a=!0;
                  break
                }
                s=s.parentElement
              }
              a&&(e.stopPropagation(), t.ui.showContent=!t.ui.showContent)
            }
          }
        }
      ]
    }, 948261:(e, t, s)=>{
      var a=s(248124), r=s(302543);
      e.exports=[
        "$rootScope", "$scope", "$http", "ExamHelper", "examRepository", "toastr", "ExamSubject", function(e, t, s, n, o, i, u){
          e.progressUi||(e.progressUi={
            answeredNum:0, subjectsNum:0, inPreview:!0
          }), t.examId=a("#examId").val(), t.calProgress=function(s){
            s&&(s.isFocus=!1), e.progressUi.answeredNum=n.getCompletedSubjectsNum(t.subjects);
            var a=e.progressUi.answeredNum/e.progressUi.subjectsNum*100;
            return e.progressUi.progress=0<=a&&a<=100?"".concat(a, "%"):"0%"
          }, t.calSubjectsPointValue=n.calSubjectsPointValue, t.ui=n.getUIHelper(), t.getSubjectIndex=function(e, s){
            if(t.subjects)return n.getSubjectIndex(e, s, t.subjects)
          };
          var c=function(s){
            var a=r(s.subjects).sortBy("sort").map((e=>u.createSubjectBySavedSubject(e, !1))).value();
            return e.progressUi.subjects=a, t.subjects=a, t.examPaperInstanceId=s.exam_paper_instance_id, e.progressUi.subjectsNum=n.getSubjectsNum(t.subjects)
          };
          return t.examId&&o.initExam(t.examId).then((e=>t.exam=e)), t.classroomId&&s.get("/api/classroom-exams/".concat(t.classroomId)).success((function(s){
            return e.context.classroomId=s.id, e.context.classroom=t.classroom=s, t.currentActivity=t.classroom
          })).error(i.decorateError()), function(){
            if(t.examId&&s.get("/api/exams/".concat(t.examId, "/preview")).success((e=>c(e))).error((function(){
            })), t.classroomId)return s.get("/api/classroom-exams/".concat(t.classroomId, "/preview")).success((e=>c(e))).error((function(){
            }))
          }
          ()
        }
      ]
    }, 972178:(e, t, s)=>{
      var a=s(400565).initScope;
      e.exports=[
        "$scope", "$http", "toastr", "treeViewSearch", "multiSelect", function(e, t, s, r, n){
          return a(e, t, s, r, n, "personal")
        }
      ]
    }, 986899:(e, t, s)=>{
      s(571478), s(512270).getDefaultPlayTimeLimit;
      var a=s(400565).initScope;
      e.exports=[
        "$scope", "$http", "toastr", "treeViewSearch", "multiSelect", function(e, t, s, r, n){
          return e.addNaturesoftSubjects=function(t){
            return e.addSubjectsFromCampus(t.subjects)
          }, a(e, t, s, r, n, "naturesoft")
        }
      ]
    }
  }
]);
