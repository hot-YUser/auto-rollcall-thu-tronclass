## 修正移动端获取首页尾页异常问题
`

    window.onload = function(){
    const viewerContainer = document.querySelector("#viewerContainer")
    const viewer = document.querySelector("#viewer")
    let showCurrentPageTimeout = null

    //修正移动端页面获取首页尾页异常
    viewerContainer.addEventListener("scroll",debounce(()=>{
        const currentPage = document.querySelectorAll(".pdfCurrentPage")
        
        if(showCurrentPageTimeout)clearTimeout(showCurrentPageTimeout)
        currentPage.forEach(page=>page.style.opacity = "1")
        showCurrentPageTimeout = setTimeout(()=>{
        currentPage.forEach(page=>page.style.opacity = "0")
        },1500)
        if(viewerContainer.scrollTop===0 && PDFViewerApplication.page === 1)return
        if(viewerContainer.scrollTop===0){
        PDFViewerApplication.page = 1
        }else if((viewerContainer.clientHeight+viewerContainer.scrollTop)>=viewer.clientHeight){
        PDFViewerApplication.page = PDFViewerApplication.pagesCount
        }
    }),500)
    }
`

code by viewer.html

## 增加pdf页数显示
`
.pdfViewer .canvasWrapper .pdfCurrentPage{
  font-size: 14px;
  position: absolute;
  left: 4px;
  bottom: 6px;
  width: 30px;
  line-height: 20px;
  height: 20px;
  background: rgba(0,0,0,0.7);
  border-radius: 4px;
  color: #fff;
  text-align: center;
  transition: opacity 0.5s ease-out;
  opacity: 0;
}
`

code by viewer.css

## 去除pdf复制文本功能
`
var TextLayerMode = {
    DISABLE: 1,
    ENABLE: 1,
    ENABLE_ENHANCE: 2
};
`

code by viewer.js


## disable & hide annotationLayer only hide annotationLayer.section in pdf.js version 2.4

changed files:

- public/libs/pdf.js-3.3/web/viewer.css
- public/libs/pdf.js-3.3/web/viewer.js
- public/libs/pdf.js/web/viewer.css

## restore annotation mode in pdf.js version 3.3
- public/libs/pdf.js-3.3/web/viewer.js
