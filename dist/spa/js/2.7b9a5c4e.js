(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"8b24":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("main-component",{attrs:{active:"",characters:e.characters},on:{updatePage:function(t){e.updateThePage(t)}}})],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:this.$q.platform.is.iphone?"column":"row"},[n("div",{staticClass:"col-3"},[this.$q.platform.is.desktop?n("q-img",{style:e.desktopStyle,attrs:{src:a("c505")}}):e._e(),this.$q.platform.is.iphone?n("q-img",{style:e.iphoneStyle,attrs:{src:a("c505")}}):e._e()],1),n("div",{staticClass:"col",style:this.$q.platform.is.iphone?e.columnStyleIphone:e.columnStyleDesktop},[n("div",{style:this.$q.platform.is.iphone?e.iphoneInputStyle:e.desktopInputStyle},[n("q-input",{attrs:{"input-style":"font-style: normal; font-weight: 500; font-size: 16px; color: #A9B1BD;",borderless:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("a",{staticClass:"main-text",staticStyle:{"margin-left":"20px","margin-right":"20px"}},[e._v("Search by")]),n("q-separator",{attrs:{size:"2px",vertical:""}}),n("q-select",{staticClass:"main-text",style:e.$q.platform.is.iphone?"width: 80px":"width: 120px",attrs:{color:"secondary",dense:"",borderless:"",options:e.searchOpts,"map-options":"","emit-values":""},on:{input:function(t){e.searchType=t.label}},scopedSlots:e._u([{key:"selected",fn:function(){return[n("a",{staticClass:"main-text",style:e.$q.platform.is.iphone?"margin-left: 10px; margin-top: 3px":"margin-left: 16px"},[e._v(" "+e._s(e.searchType))])]},proxy:!0}]),model:{value:e.searchType,callback:function(t){e.searchType=t},expression:"searchType"}}),n("q-separator",{attrs:{size:"2px",vertical:""}})]},proxy:!0},{key:"append",fn:function(){return[n("q-btn",{attrs:{color:"secondary",round:"",dense:"",flat:"",icon:"search"}})]},proxy:!0}]),model:{value:e.searchBox,callback:function(t){e.searchBox=t},expression:"searchBox"}})],1)])]),n("q-separator",{staticStyle:{color:"#E5EAF4"}}),n("q-table",{attrs:{dense:"",data:e.favSwitch?e.favData:e.data,columns:e.columns,"row-key":e.searchType,filter:e.searchBox,flat:"","hide-pagination":"",pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"body-cell-photo",fn:function(e){return[n("q-td",{attrs:{props:e}},[n("div",[n("q-img",{staticStyle:{height:"68px",width:"43px"},attrs:{src:e.row.image}})],1)])]}},{key:"body-cell-fav",fn:function(t){return[n("q-td",{attrs:{props:t}},[n("div",{key:e.componentKey},[n("q-btn",{staticStyle:{border:"2px solid #11B0C8",width:"43px",height:"43px"},attrs:{color:"secondary",flat:!t.row.fav,icon:t.row.fav?"star":"star_border"},on:{click:function(a){t.row.fav?e.unFavorChar(t.row):e.favorChar(t.row)}}})],1)])]}},{key:"top",fn:function(){return[n("q-btn",{staticClass:"main-text",attrs:{push:"",color:e.allCharsBtn?"secondary":"primary",flat:"",label:"All Characters"},on:{click:function(t){return e.getAllChars()}}}),n("q-btn",{staticClass:"main-text",attrs:{push:"",color:e.favCharsBtn?"secondary":"primary",flat:"",label:"Favorites"},on:{click:function(t){return e.filterFavs()}}}),n("q-space")]},proxy:!0},{key:"no-data",fn:function(t){var a=t.icon,s=t.message,o=t.filter;return[n("div",{staticClass:"full-width row flex-center text-secondary q-gutter-sm"},[n("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),n("span",[e._v("\n          Well this is sad... "+e._s(s)+"\n        ")]),n("q-icon",{attrs:{size:"2em",name:o?"filter_b_and_w":a}})],1)]}},{key:"body-cell",fn:function(t){return[n("q-td",{attrs:{props:t}},[n("a",{staticClass:"main-text"},[e._v(e._s(t.value))])])]}},{key:"body-cell-gender",fn:function(t){return[n("q-td",{attrs:{props:t}},[n("div",{staticClass:"row"},["male"==t.value.toLowerCase()||"female"==t.value.toLowerCase()?n("q-icon",{attrs:{name:"male"==t.value.toLowerCase()?"male":"female",color:"primary",size:"22px"}}):e._e(),"genderless"==t.value.toLowerCase()||"unknown"==t.value.toLowerCase()?n("q-icon",{attrs:{name:"genderless"==t.value.toLowerCase()?"close":"remove",size:"sm",color:"primary"}}):e._e(),n("a",{staticClass:"main-text",staticStyle:{"margin-left":"4px"}},[e._v(e._s(t.value))])],1)])]}}])}),n("q-separator",{staticStyle:{color:"#E5EAF4"}}),n("div",{staticClass:"row items-start q-pa-md",style:e.$q.platform.is.iphone?e.paginationStyleIphone:e.paginationStyleDesktop},[n("q-pagination",{attrs:{dense:"",color:"secondary","max-pages":e.$q.platform.is.iphone?1:9,max:e.maxPagesCount,"boundary-numbers":!0,"direction-links":!0,size:e.$q.platform.is.iphone?"17px":"23.5px",padding:"xs md","icon-prev":"arrow_left","icon-next":"arrow_right"},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1)],1)},r=[],i=a("e4fd"),l=Object(i["defineComponent"])({name:"CompositionComponent",props:["characters"],watch:{characters:{handler(){this.data=this.data.concat(this.characters.results),this.filterEpisodes()}}},computed:{maxPagesCount:function(){var e=Math.round(this.data.length/8);return e}},mounted(){this.generateButtonData()},updated(){},methods:{favorChar(e){var t=this.data.findIndex((t=>{if(t.id===e.id)return t}));null!=t&&(this.data[t].fav=!0,this.favData.push(this.data[t])),this.forceRerender()},unFavorChar(e){var t=this.favData.findIndex((t=>{if(t.id===e.id)return t}));null!=t&&(this.favData[t].fav=!1,this.favData.splice(t,1)),this.forceRerender()},forceRerender(){this.componentKey+=1},filterFavs(){this.allCharsBtn=!1,this.favCharsBtn=!0,this.favSwitch=!0},getAllChars(){this.allCharsBtn=!0,this.favCharsBtn=!1,this.favSwitch=!1},filterEpisodes(){this.characters.results.forEach((e=>{e.episode.length>1&&(e.episode=[...e.episode].pop().episode),"object"===typeof e.episode&&(e.episode=e.episode[0].episode),e.fav=!1}))},generateButtonData(){for(let e=1;e<=34;e++)this.$emit("updatePage",e)}},data(){const e=[{label:"Name",val:"name"},{label:"Identifier",val:"id"},{label:"Episode",val:"episode"}];return{componentKey:0,favSwitch:!1,searchBox:"",searchType:e[0].label,allCharsBtn:!0,favCharsBtn:!1,searchOpts:e,columns:[{name:"photo",align:"left",label:"Photo",field:"photo"},{name:"id",align:"left",label:"Character ID",field:"id"},{name:"name",align:"left",label:"Name",field:"name"},{name:"gender",align:"left",label:"Gender",field:"gender"},{name:"species",align:"left",label:"Species",field:"species"},{name:"episode",align:"left",label:"Last Episode",field:"episode"},{name:"fav",align:"left",label:"Add To Favorites",field:"fav"}],data:[],favData:[],pageButtons:[],pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:8},desktopStyle:"height: 140px; max-width: 250px; margin-left:35%",iphoneStyle:"height: 140px; max-width: 250px; margin-left:17%",desktopInputStyle:"box-sizing: border-box; border-radius: 12px; border: 1px solid #A9B1BD; width: 505px; height: 56px",iphoneInputStyle:"box-sizing: border-box; border-radius: 12px; border: 1px solid #A9B1BD; width: 335px; height: 56px; margin-bottom: 10px; padding-top: 0px",columnStyleDesktop:"margin-left:5%; margin-top:3%",columnStyleIphone:"margin-left:5%;",paginationStyleDesktop:"margin-left: 153px; margin-bottom: 61px; margin-top: 40px;",paginationStyleIphone:"margin-bottom: 41px; margin-top: 20px;"}}}),p=l,c=(a("9ee5"),a("2877")),d=a("068f"),h=a("27f9"),f=a("eb85"),u=a("ddd8"),m=a("9c40"),g=a("eaac"),y=a("db86"),v=a("2c91"),x=a("0016"),b=a("3b16"),w=a("eebe"),C=a.n(w),q=Object(c["a"])(p,o,r,!1,null,"9bb68176",null),S=q.exports;C()(q,"components",{QImg:d["a"],QInput:h["a"],QSeparator:f["a"],QSelect:u["a"],QBtn:m["a"],QTable:g["a"],QTd:y["a"],QSpace:v["a"],QIcon:x["a"],QPagination:b["a"]});var k,_=a("5640"),B=a.n(_),I=a("9530"),$=a.n(I);function D(){return $()(k||(k=B()(["\n      query ($page: Int!){\n        characters (page: $page) {\n          info {\n            count,\n            pages,\n            next,\n            prev\n          }\n          results {\n            image,\n            id,\n            name,\n            gender,\n            species,\n            episode { episode }\n          }\n        }\n      }"])))}var P=Object(i["defineComponent"])({name:"PageIndex",components:{MainComponent:S},methods:{async updateThePage(e){this.$apollo.queries.characters.fetchMore({variables:{page:e},updateQuery:(e,{fetchMoreResult:t})=>{const a=t.characters;return{characters:a}}})}},data(){return{characters:Object(i["ref"])([])}},apollo:{characters:{query:D(),variables:{page:1},loadingKey:"loading"}},setup(){}}),Q=P,T=a("9989"),E=Object(c["a"])(Q,n,s,!1,null,null,null);t["default"]=E.exports;C()(E,"components",{QPage:T["a"]})},"9ee5":function(e,t,a){"use strict";a("d529")},c505:function(e,t,a){e.exports=a.p+"img/58f37720a4fa116215a9240f.6275bc46.png"},d529:function(e,t,a){}}]);