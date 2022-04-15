"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1710],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7473:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={id:"html_reporter",title:"HTML Reporter",sidebar_label:"HTML Reporter",slug:"html_reporter.html"},l=void 0,p={unversionedId:"extensions/html_reporter",id:"extensions/html_reporter",isDocsHomePage:!1,title:"HTML Reporter",description:"Latest Release",source:"@site/docs/extensions/html_reporter.md",sourceDirName:"extensions",slug:"/extensions/html_reporter.html",permalink:"/docs/extensions/html_reporter.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/html_reporter.md",tags:[],version:"current",frontMatter:{id:"html_reporter",title:"HTML Reporter",sidebar_label:"HTML Reporter",slug:"html_reporter.html"},sidebar:"extensions",previous:{title:"JUnit XML",permalink:"/docs/extensions/junit_xml.html"},next:{title:"Allure",permalink:"/docs/extensions/allure.html"}},c=[],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest/kotest-extensions-htmlreporter"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-extensions-htmlreporter",alt:"Latest Release"}))),(0,a.kt)("p",null,"When using ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions/junit_xml.html"},"JUnit XML"),", we can generate XML results from tests that are able to produce output with nested\ntests. Unfortunately, Gradle generates its HTML reports with the results it has in-memory, which doesn't support nested\ntests, and it doesn't seem to be able to fetch results from a different XML."),(0,a.kt)("p",null,"To solve this, Kotest has a listener that is able to generate HTML reports based on the XML reports that are generated\nby ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions/junit_xml.html"},"JUnit XML"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The following module is needed: ",(0,a.kt)("inlineCode",{parentName:"p"},"io.kotest:kotest-extensions-htmlreporter")," in your build. Search maven central for latest version ",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-extensions-htmlreporter"},"here"),"."))),(0,a.kt)("p",null,"In order to use it, we simply need to add it as a listener through ",(0,a.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"project config"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class ProjectConfig : AbstractProjectConfig() {\n\n   override val specExecutionOrder = SpecExecutionOrder.Annotated\n\n    override fun extensions(): List<Extension> = listOf(\n        JunitXmlReporter(\n            includeContainers = false,\n            useTestPathAsName = true,\n        ),\n        HtmlReporter()\n    )\n}\n")),(0,a.kt)("p",null,"Notice that we also add ",(0,a.kt)("inlineCode",{parentName:"p"},"JunitXmlReporter"),". This will generate the necessary XML reports, used to generate the HTML reports.\nThere's no additional configuration needed, it should simply start generating HTML reports."),(0,a.kt)("p",null,"By default, it stores reports in ",(0,a.kt)("inlineCode",{parentName:"p"},"path/to/buildDir/reports/tests/test")," but this can be modified by changing the parameter\n",(0,a.kt)("inlineCode",{parentName:"p"},"outputDir"),"."))}m.isMDXComponent=!0}}]);