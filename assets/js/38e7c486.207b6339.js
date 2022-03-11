"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[411],{8525:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return o},default:function(){return h}});var r=t(5086),i=t(9126),n=(t(7711),t(4635)),s=["components"],p={title:"\u6982\u89c8",slug:"/api",order:1},l=void 0,u={unversionedId:"guide/API/api",id:"guide/API/api",isDocsHomePage:!1,title:"\u6982\u89c8",description:"Garfish \u662f garfish \u9ed8\u8ba4\u5bfc\u51fa\u7684\u5b9e\u4f8b\uff08\u5b57\u8282\u5185\u90e8\u7528\u6237\u53ef\u4f7f\u7528 @byted/garfish \u5305\uff09\uff0c Garfish \u4e3b\u8981\u7684 API \u90fd\u5728 Garfish \u5b9e\u4f8b\u4e0a\uff0c\u901a\u8fc7 Garfish \u5b9e\u4f8b\u53ef\u4ee5\u5b8c\u6210\u5bf9\u5fae\u524d\u7aef\u6574\u4e2a\u5e94\u7528\u7684\u7ba1\u7406\u3002",source:"@site/docs/guide/API/api.md",sourceDirName:"guide/API",slug:"/api",permalink:"/api",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/API/api.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1647006270,formattedLastUpdatedAt:"2022/3/11",frontMatter:{title:"\u6982\u89c8",slug:"/api",order:1},sidebar:"guide",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/quickStart"},next:{title:"Garfish.run",permalink:"/api/run"}},o=[{value:"Garfish \u5b9e\u4f8b\u65b9\u6cd5",id:"garfish-\u5b9e\u4f8b\u65b9\u6cd5",children:[],level:2}],f={toc:o};function h(e){var a=e.components,t=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Garfish \u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"garfish")," \u9ed8\u8ba4\u5bfc\u51fa\u7684\u5b9e\u4f8b\uff08\u5b57\u8282\u5185\u90e8\u7528\u6237\u53ef\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"@byted/garfish")," \u5305\uff09\uff0c Garfish \u4e3b\u8981\u7684 API \u90fd\u5728 Garfish \u5b9e\u4f8b\u4e0a\uff0c\u901a\u8fc7 Garfish \u5b9e\u4f8b\u53ef\u4ee5\u5b8c\u6210\u5bf9\u5fae\u524d\u7aef\u6574\u4e2a\u5e94\u7528\u7684\u7ba1\u7406\u3002"),(0,n.kt)("h2",{id:"garfish-\u5b9e\u4f8b\u65b9\u6cd5"},"Garfish \u5b9e\u4f8b\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/run"},"Garfish.run")," \uff08\u53ef\u4ee5\u7528\u4e8e\u521d\u59cb\u5316\u5e94\u7528\u53c2\u6570\uff0c\u5e76\u542f\u52a8\u8def\u7531\u76d1\u542c\u80fd\u529b\uff0c\u5f53\u8def\u7531\u53d1\u751f\u53d8\u5316\u65f6\u81ea\u52a8\u6fc0\u6d3b\u5e94\u7528\u548c\u9500\u6bc1\u5e94\u7528\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/registerapp"},"Garfish.registerApp"),"\uff08\u7528\u4e8e\u52a8\u6001\u6ce8\u518c\u5e94\u7528\u4fe1\u606f\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/loadapp"},"Garfish.loadApp"),"\uff08\u53ef\u4ee5\u624b\u52a8\u63a7\u5236\u5b50\u5e94\u7528\u52a0\u8f7d\u548c\u9500\u6bc1\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/router"},"Garfish.router"),"\uff08\u63d0\u4f9b\u8def\u7531\u8df3\u8f6c\u548c\u8def\u7531\u5b88\u536b\u80fd\u529b\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/channel"},"Garfish.channel"),"\uff08\u63d0\u4f9b\u5e94\u7528\u95f4\u901a\u4fe1\u7684\u80fd\u529b\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/setexternal"},"Garfish.setExternal"),"\uff08\u652f\u6301\u5e94\u7528\u95f4\u7684\u4f9d\u8d56\u5171\u4eab\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/getglobalobject"},"Garfish.getGlobalObject"),"\uff08\u7528\u4e8e\u83b7\u53d6\u771f\u5b9e Window\uff09")))}h.isMDXComponent=!0}}]);