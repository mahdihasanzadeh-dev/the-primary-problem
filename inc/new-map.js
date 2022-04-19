
  const MAP_ADDRESS = 'https://cdn.jsdelivr.net/gh/mahdihasanzadeh-dev/the-primary-problem@main/inc/map.html';
  const STATE_ADDRESS = 'https://cdn.jsdelivr.net/gh/mahdihasanzadeh-dev/the-primary-problem@main/inc/state.json'
  !function(e){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)t.d(n,i,function(a){return e[a]}.bind(null,i));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";var n;function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t(1);var s="<?php echo get_template_directory_uri(); ?>";var r=MAP_ADDRESS,d=480,c=.2,o=1-c,l=document.querySelector("#ua-map"),u=null,f=null,g=null,m=null,p=null,x=null,R=null,w=null,h=null,v=null,I=(i(n={stateScoreCardLegend:null,rawTableResp:null,gradingReference:null,stateData:null,candidateData:null,candidateDataByState:null,candidateMaxPerState:null,campaignData:null,campaignDataByState:null,campaignMaxPerState:null,victories:null,singleIssue:null,isCandidates:null,isCampaign:null,focusedState:null,focusedStateEl:null,isNarrowPanel:!1,canHidePanel:!1,stateGradeRcvCitiesIndex:null,candidateRowRefs:null,stateNameRowIndex:null,stateIsFederalRowIndex:null,candidateNameRowIndex:null,candidateOfficeRowIndex:null,candidatePartyRowIndex:null,candidateCaucusRowIndex:null,campaignRowRefs:null,campaignCityRowIndex:null},"stateNameRowIndex",null),i(n,"campaignIssueRowIndex",null),i(n,"campaignStatusRowIndex",null),i(n,"campaignOrganizationRowIndex",null),i(n,"campaignDetailRowIndex",null),i(n,"campaignLinkRowIndex",null),n);function y(){u.classList.add("show"),new Promise(function(resolve, reject){resolve(mapData)}).then((function(e){var a,t;!function(e){I.rawTableResp=e,I.stateData=e.stateTableData,I.gradingReference=(a=e.gradingData,t={},a.forEach((function(e){t[e[0]]=e.slice(1)})),t),I.stateScoreCardLegend=e.stateTableData[0],I.stateGradeRcvCitiesIndex=I.stateScoreCardLegend.indexOf("rcv_cities"),I.campaignData=e.campaignData,I.candidateData=e.candidateData,I.victories=e.victoryData;var a,t}(e),function(){var e=l.dataset.issue,a=l.dataset.isCandidates,t=l.dataset.isCampaign;e?(L(),g.classList.add("single-issue"),I.singleIssue=e,I.singleIssueIndex=I.stateScoreCardLegend.indexOf(I.singleIssue)):a?(I.isCandidates=!0,I.candidateRowRefs=I.candidateData[0],I.stateNameRowIndex=I.candidateRowRefs.indexOf("State"),I.stateIsFederalRowIndex=I.candidateRowRefs.indexOf("Federal"),I.candidateNameRowIndex=I.candidateRowRefs.indexOf("Name"),I.candidateOfficeRowIndex=I.candidateRowRefs.indexOf("Office"),I.candidatePartyRowIndex=I.candidateRowRefs.indexOf("Party"),I.candidateCaucusRowIndex=I.candidateRowRefs.indexOf("Caucus"),n={},i=0,I.candidateData.forEach((function(e){var a=S(e[I.stateNameRowIndex]);n[a]?n[a].push(e):n[a]=[e],n[a].length>i&&(i=n[a].length)})),I.candidateDataByState=n,I.candidateMaxPerState=i,L(),C(),b(),R.classList.add("hide")):t?(I.isCampaign=!0,L(),C(),b(),g.classList.add("campaign-map")):b();var n,i;I.isNarrowPanel=l.dataset.useNarrowPanel,I.isNarrowPanel&&g.classList.add("narrow-panel");I.campaignRowRefs=I.campaignData[0],I.campaignCityRowIndex=I.campaignRowRefs.indexOf("City"),I.stateNameRowIndex=I.campaignRowRefs.indexOf("State"),I.campaignIssueRowIndex=I.campaignRowRefs.indexOf("Reform"),I.campaignStatusRowIndex=I.campaignRowRefs.indexOf("Status"),I.campaignOrganizationRowIndex=I.campaignRowRefs.indexOf("Organization"),I.campaignDetailRowIndex=I.campaignRowRefs.indexOf("Sentence"),I.campaignLinkRowIndex=I.campaignRowRefs.indexOf("Link"),s={},r=0,I.campaignData.forEach((function(e){if(!I.singleIssue||e[I.campaignIssueRowIndex].toLowerCase().replace(/\s/g,"_")===I.singleIssue){var a=S(e[I.stateNameRowIndex]);s[a]?s[a].push(e):s[a]=[e],s[a].length>r&&(r=s[a].length)}})),I.campaignDataByState=s,I.campaignMaxPerState=r;var s,r}(),I.isCandidates?function(){for(var e in I.candidateDataByState){var a=I.candidateDataByState[e].length/I.candidateMaxPerState;O(e,a)}}():I.isCampaign?function(){for(var e in I.campaignDataByState){var a=I.campaignDataByState[e].find((function(e){return"Victory"===e[I.campaignStatusRowIndex]}));O(e,a?1:.25)}}():(a=I.singleIssue?I.singleIssueIndex:3,t=I.singleIssue?10:40,I.stateData.forEach((function(e,n){if(n){var i=e[a]/t;O(S(e[0]),i)}}))),u.classList.remove("show")})).catch((function(e){console.log("Error fetching data: ",e)}))}function S(e){return e.toLowerCase().replace(" ","-")}function L(){p.classList.add("hide")}function C(){v.classList.add("hide")}function b(){R.classList.add("hide")}function O(e,a){var t=f.querySelector("#"+e);if(t){var n=a*o+c;t.style.opacity=n}}function D(e){var a=e.target.closest(".state");if(a){I.focusedStateEl=a,I.focusedState=a.id,g.classList.add("hide"),window.setTimeout((function(){var e,a;I.isCandidates?function(){var e=I.candidateDataByState[I.focusedState];if(e){I.canHidePanel=!1;var a=e.filter((function(e){return"Yes"===e[I.stateIsFederalRowIndex]})),t=e.filter((function(e){return"No"===e[I.stateIsFederalRowIndex]})),n=E(a),i=E(t),s={};n.length&&(s.Federal=n),i.length&&(s.State=i),B(s)}else I.canHidePanel=!0,q([{name:"",copy:"No active candidates."}]);N(I.focusedState)}():I.isCampaign?function(){var e=I.campaignDataByState[I.focusedState];if(e){I.canHidePanel=!1;var a=e.filter((function(e){return"Victory"===e[I.campaignStatusRowIndex]})),t=e.filter((function(e){return"In Progress"===e[I.campaignStatusRowIndex]})),n=T(a),i=T(t),s={};n.length&&(s.Victory=n),i.length&&(s["In Progress"]=i),B(s)}else I.canHidePanel=!0,q([{name:"",copy:"No active campaigns."}]);N(I.focusedState),k()}():(N((a=I.stateData.find((function(e){return e[0].toLowerCase().replace(" ","-")===I.focusedState})))[0]),I.singleIssue||(e=a[2],p.innerText=e),function(e){var a=void 0;if(I.singleIssue)if(a=e.slice(I.singleIssueIndex,I.singleIssueIndex+1),I.canHidePanel="0"===a[0],"ranked_choice_voting"===I.singleIssue){var t=e[I.stateGradeRcvCitiesIndex];t?(w.innerText=t,R.classList.remove("hide")):b()}else b();else a=e.slice(4,8);q(a.map((function(a,t){var n=I.singleIssue?I.singleIssueIndex:t+4,i=I.stateScoreCardLegend[n];return{name:i.replace(/\_/g," "),copy:j(i,a,e[0])}})))}(a),k()),window.innerWidth>d&&function(){var e=f.scrollWidth/f.width.baseVal.value,a=I.focusedStateEl.getBBox();a.x=a.x*e,a.y=a.y*e,a.width=a.width*e,a.height=a.height*e;var t=a.x-g.offsetWidth<50?a.x+a.width/2:a.x+a.width/2-g.offsetWidth,n=a.y+a.height/2+g.offsetHeight>f.clientHeight?a.y+a.height/2-g.offsetHeight:a.y+a.height/2;g.style.transform="translate("+t+"px, "+n+"px)"}(),I.canHidePanel||(g.classList.remove("hide"),g.classList.remove("collapse"))}),300);var t=f.querySelector(".current");t&&t.classList.remove("current"),a.classList.add("current")}}function P(e){window.innerWidth<=d?(g.classList.add("collapse"),g.classList.add("hide")):e.relatedTarget.classList.contains("state-info-panel")||(g.classList.add("hide"),f.querySelector(".current").classList.remove("current"))}function E(e){return e.map((function(e){var a="Sen."===e[I.candidateOfficeRowIndex]?"Senate ("+e[I.candidatePartyRowIndex]+")":"Rep "+e[I.candidateOfficeRowIndex]+" ("+e[I.candidatePartyRowIndex]+")";return e[I.candidateCaucusRowIndex]&&(a+="<br/>"+e[I.candidateCaucusRowIndex]),{name:e[I.candidateNameRowIndex],copy:a}}))}function T(e){return e.map((function(e){return{name:e[I.campaignOrganizationRowIndex],copy:e[I.campaignDetailRowIndex]}}))}function N(e){m.innerText=e.replace("-"," ")}function j(e,a,t){return t+" "+I.gradingReference[e][parseInt(a)]}function q(e){for(;x.firstChild;)x.removeChild(x.firstChild);e.forEach((function(e){x.insertAdjacentHTML("beforeend",H(e))}))}function B(e){for(;x.firstChild;)x.removeChild(x.firstChild);var a=function(a){var t=document.createElement("div");t.classList.add("issue-column");var n=document.createElement("div");n.classList.add("text-sans"),n.classList.add("text-red"),n.innerText=a,t.insertAdjacentElement("beforeend",n),e[a].forEach((function(e){var a=H(e);t.insertAdjacentHTML("beforeend",a)})),x.insertAdjacentElement("beforeend",t)};for(var t in e)a(t)}function H(e){return'\n    <div class="issue-grid-item">\n      <div class="issue-name text-sans text-bold">'+e.name+'</div>\n      <p class="issue-copy">'+e.copy+"</p>\n    </div>\n  "}function k(){var e=I.campaignDataByState[I.focusedState];if(e){var a=e.filter((function(e){return"Victory"===e[I.campaignStatusRowIndex]}));if(a.length){for(;h.firstChild;)h.removeChild(h.firstChild);a.forEach((function(e){var a=document.createElement("a");a.classList.add("campaign-link"),a.classList.add("link-map"),a.setAttribute("href",e[I.campaignLinkRowIndex]),a.setAttribute("target","_blank"),a.innerText=e[I.campaignOrganizationRowIndex],h.insertAdjacentElement("beforeend",a)})),v.classList.remove("hide")}else v.classList.add("hide")}else v.classList.add("hide")}function M(){var e,a;u=l.querySelector(".map-loader"),f=l.querySelector("#map-full"),g=l.querySelector(".state-info-panel"),m=g.querySelector(".state-name"),p=g.querySelector(".state-grade"),x=g.querySelector(".issue-grid"),R=g.querySelector(".cities-list"),w=R.querySelector(".cities-list-item"),v=g.querySelector(".campaign-list"),h=g.querySelector(".campaign-list-links"),e=l.dataset.hover,a=l.dataset.fill,e&&f.setAttribute("style","--hover-color:"+e),a&&(f.querySelector("#us-map-monomcolor").style.fill=a),y()}fetch(r).then((function(e){return e.text()})).then((function(e){for(;l.firstChild;)l.removeChild(l.firstChild);l.insertAdjacentHTML("beforeend",e),M(),f.addEventListener("mouseover",D),f.addEventListener("mouseleave",P)}))},function(e,a,t){}]);
//# sourceMappingURL=map.js.map
