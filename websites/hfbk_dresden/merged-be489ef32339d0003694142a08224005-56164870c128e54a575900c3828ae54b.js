
!function(e){"use strict";var t={i18n:{ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayOfWeek:["Вск","Пн","Вт","Ср","Чт","Пт","Сб"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeek:["So","Mo","Di","Mi","Do","Fr","Sa"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeek:["zo","ma","di","wo","do","vr","za"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeek:["Paz","Pts","Sal","Çar","Per","Cum","Cts"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeek:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeek:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],dayOfWeek:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeek:["nd","pn","wt","śr","cz","pt","sb"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeek:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeek:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeek:["일","월","화","수","목","금","토"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeek:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},da:{months:["January","Februar","Marts","April","Maj","Juni","July","August","September","Oktober","November","December"],dayOfWeek:["Søn","Man","Tir","ons","Tor","Fre","lør"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeek:["日","月","火","水","木","金","土"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeek:["CN","T2","T3","T4","T5","T6","T7"]}},value:"",lang:"en",format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,closeOnDateSelect:!1,closeOnWithoutClick:!0,timepicker:!0,datepicker:!0,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,style:"",id:"",roundTime:"round",className:"",weekends:[],yearOffset:0};Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0,a=this.length;n<a;n++)if(this[n]===e)return n;return-1}),e.fn.xdsoftScroller=function(t){return this.each(function(){var n=e(this);if(!e(this).hasClass("xdsoft_scroller_box")){var a=function(e){var t={x:0,y:0};if("touchstart"==e.type||"touchmove"==e.type||"touchend"==e.type||"touchcancel"==e.type){var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];t.x=n.pageX,t.y=n.pageY}else"mousedown"!=e.type&&"mouseup"!=e.type&&"mousemove"!=e.type&&"mouseover"!=e.type&&"mouseout"!=e.type&&"mouseenter"!=e.type&&"mouseleave"!=e.type||(t.x=e.pageX,t.y=e.pageY);return t},r=0,o=n.children().eq(0),s=n[0].clientHeight,i=o[0].offsetHeight,d=e('<div class="xdsoft_scrollbar"></div>'),u=e('<div class="xdsoft_scroller"></div>'),c=100,l=!1;d.append(u),n.addClass("xdsoft_scroller_box").append(d),u.on("mousedown.xdsoft_scroller",function(a){s||n.trigger("resize_scroll.xdsoft_scroller",[t]);var o=a.pageY,i=parseInt(u.css("margin-top")),l=d[0].offsetHeight;e(document.body).addClass("xdsoft_noselect"),e([document.body,window]).on("mouseup.xdsoft_scroller",function f(){e([document.body,window]).off("mouseup.xdsoft_scroller",f).off("mousemove.xdsoft_scroller",r).removeClass("xdsoft_noselect")}),e(document.body).on("mousemove.xdsoft_scroller",r=function(e){var t=e.pageY-o+i;t<0&&(t=0),t+u[0].offsetHeight>l&&(t=l-u[0].offsetHeight),n.trigger("scroll_element.xdsoft_scroller",[c?t/c:0])})}),n.on("scroll_element.xdsoft_scroller",function(e,t){s||n.trigger("resize_scroll.xdsoft_scroller",[t,!0]),t=t>1?1:t<0||isNaN(t)?0:t,u.css("margin-top",c*t),o.css("marginTop",-parseInt((i-s)*t))}).on("resize_scroll.xdsoft_scroller",function(e,t,a){s=n[0].clientHeight,i=o[0].offsetHeight;var r=s/i,l=r*d[0].offsetHeight;r>1?u.hide():(u.show(),u.css("height",parseInt(l>10?l:10)),c=d[0].offsetHeight-u[0].offsetHeight,a!==!0&&n.trigger("scroll_element.xdsoft_scroller",[t?t:Math.abs(parseInt(o.css("marginTop")))/(i-s)]))}),n.mousewheel&&n.mousewheel(function(e,t,a,r){var d=Math.abs(parseInt(o.css("marginTop")));return n.trigger("scroll_element.xdsoft_scroller",[(d-20*t)/(i-s)]),e.stopPropagation(),!1}),n.on("touchstart",function(e){l=a(e)}),n.on("touchmove",function(e){if(l){var t=a(e),r=Math.abs(parseInt(o.css("marginTop")));n.trigger("scroll_element.xdsoft_scroller",[(r-(t.y-l.y))/(i-s)]),e.stopPropagation(),e.preventDefault()}}),n.on("touchend touchcancel",function(e){l=!1})}n.trigger("resize_scroll.xdsoft_scroller",[t])})},e.fn.datetimepicker=function(n){var a=48,r=57,o=96,s=105,i=17,d=46,u=13,c=27,l=8,f=37,m=38,h=39,g=40,p=9,x=116,v=65,y=67,D=86,T=90,w=89,b=!1,_=e.isPlainObject(n)||!n?e.extend(!0,{},t,n):e.extend({},t),M=0,k=function(e){e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function t(n){e.is(":disabled")||e.is(":hidden")||!e.is(":visible")||e.data("xdsoft_datetimepicker")||(clearTimeout(M),M=setTimeout(function(){e.data("xdsoft_datetimepicker")||S(e),e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft",t).trigger("open.xdsoft")},100))})},S=function(t){function n(){var e=_.value?_.value:t&&t.val&&t.val()?t.val():"";return e&&W.isValidDate(e=Date.parseDate(e,_.format))?M.data("changed",!0):e="",e||_.startDate===!1||(e=W.strToDateTime(_.startDate)),e?e:0}var M=e("<div "+(_.id?'id="'+_.id+'"':"")+" "+(_.style?'style="'+_.style+'"':"")+' class="xdsoft_datetimepicker xdsoft_noselect '+_.className+'"></div>'),k=e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),S=e('<div class="xdsoft_datepicker active"></div>'),O=e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"></button></div>'),F=e('<div class="xdsoft_calendar"></div>'),I=e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),C=I.find(".xdsoft_time_box").eq(0),H=e('<div class="xdsoft_time_variant"></div>'),Y=e('<div class="xdsoft_scrollbar"></div>'),P=(e('<div class="xdsoft_scroller"></div>'),e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>')),A=e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');O.find(".xdsoft_month span").after(P),O.find(".xdsoft_year span").after(A),O.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft",function(t){O.find(".xdsoft_select").hide();var n=e(this).find(".xdsoft_select").eq(0),a=0,r=0;W.currentTime&&(a=W.currentTime[e(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()),n.show();for(var o=n.find("div.xdsoft_option"),s=0;s<o.length&&o.eq(s).data("value")!=a;s++)r+=o[0].offsetHeight;return n.xdsoftScroller(r/(n.children()[0].offsetHeight-n[0].clientHeight)),t.stopPropagation(),!1}),O.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft",function(e){e.stopPropagation(),e.preventDefault()}).on("mousedown.xdsoft",".xdsoft_option",function(t){W&&W.currentTime&&W.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](e(this).data("value")),e(this).parent().parent().hide(),M.trigger("xchange.xdsoft"),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input"))}),M.setOptions=function(n){if(_=e.extend(!0,{},_,n),n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length&&(_.allowTimes=e.extend(!0,[],n.allowTimes)),n.weekends&&e.isArray(n.weekends)&&n.weekends.length&&(_.weekends=e.extend(!0,[],n.weekends)),!_.open&&!_.opened||_.inline||t.trigger("open.xdsoft"),_.inline&&(M.addClass("xdsoft_inline"),t.after(M).hide(),M.trigger("afterOpen.xdsoft")),_.inverseButton&&(_.next="xdsoft_prev",_.prev="xdsoft_next"),_.datepicker?S.addClass("active"):S.removeClass("active"),_.timepicker?I.addClass("active"):I.removeClass("active"),_.value&&(t&&t.val&&t.val(_.value),W.setCurrentTime(_.value)),isNaN(_.dayOfWeekStart)||parseInt(_.dayOfWeekStart)<0||parseInt(_.dayOfWeekStart)>6?_.dayOfWeekStart=0:_.dayOfWeekStart=parseInt(_.dayOfWeekStart),_.timepickerScrollbar||Y.hide(),_.minDate&&/^-(.*)$/.test(_.minDate)&&(_.minDate=W.strToDateTime(_.minDate).dateFormat(_.formatDate)),_.maxDate&&/^\+(.*)$/.test(_.maxDate)&&(_.maxDate=W.strToDateTime(_.maxDate).dateFormat(_.formatDate)),O.find(".xdsoft_today_button").css("visibility",_.todayButton?"visible":"hidden"),_.mask){var k=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange)return e.selectionStart}catch(n){return 0}},F=function(e,t){var e="string"==typeof e||e instanceof String?document.getElementById(e):e;if(!e)return!1;if(e.createTextRange){var n=e.createTextRange();return n.collapse(!0),n.moveEnd(t),n.moveStart(t),n.select(),!0}return!!e.setSelectionRange&&(e.setSelectionRange(t,t),!0)},C=function(e,t){var n=e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return RegExp(n).test(t)};switch(t.off("keydown.xdsoft"),!0){case _.mask===!0:_.mask=_.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59");case"string"==e.type(_.mask):C(_.mask,t.val())||t.val(_.mask.replace(/[0-9]/g,"_")),t.on("keydown.xdsoft",function(n){var M=this.value,S=n.which;switch(!0){case S>=a&&S<=r||S>=o&&S<=s||S==l||S==d:var O=k(this),I=S!=l&&S!=d?String.fromCharCode(o<=S&&S<=s?S-a:S):"_";for(S!=l&&S!=d||!O||(O--,I="_");/[^0-9_]/.test(_.mask.substr(O,1))&&O<_.mask.length&&O>0;)O+=S==l||S==d?-1:1;if(M=M.substr(0,O)+I+M.substr(O+1),""==e.trim(M))M=_.mask.replace(/[0-9]/g,"_");else if(O==_.mask.length)break;for(O+=S==l||S==d?0:1;/[^0-9_]/.test(_.mask.substr(O,1))&&O<_.mask.length&&O>0;)O+=S==l||S==d?-1:1;C(_.mask,M)?(this.value=M,F(this,O)):""==e.trim(M)?this.value=_.mask.replace(/[0-9]/g,"_"):t.trigger("error_input.xdsoft");break;case!!~[v,y,D,T,w].indexOf(S)&&b:case!!~[c,m,g,f,h,x,i,p,u].indexOf(S):return!0}return n.preventDefault(),!1})}}_.validateOnBlur&&t.off("blur.xdsoft").on("blur.xdsoft",function(){_.allowBlank&&!e.trim(e(this).val()).length?(e(this).val(null),M.data("xdsoft_datetime").empty()):Date.parseDate(e(this).val(),_.format)?M.data("xdsoft_datetime").setCurrentTime(e(this).val()):(e(this).val(W.now().dateFormat(_.format)),M.data("xdsoft_datetime").setCurrentTime(e(this).val())),M.trigger("changedatetime.xdsoft")}),_.dayOfWeekStartPrev=0==_.dayOfWeekStart?6:_.dayOfWeekStart-1,M.trigger("xchange.xdsoft")},M.data("options",_).on("mousedown.xdsoft",function(e){return e.stopPropagation(),e.preventDefault(),A.hide(),P.hide(),!1});var N=I.find(".xdsoft_time_box");N.append(H),N.xdsoftScroller(),M.on("afterOpen.xdsoft",function(){N.xdsoftScroller()}),M.append(S).append(I),_.withoutCopyright!==!0&&M.append(k),S.append(O).append(F),e("body").append(M);var W=new function(){var e=this;e.now=function(){var e=new Date;return _.yearOffset&&e.setFullYear(e.getFullYear()+_.yearOffset),e},e.currentTime=this.now(),e.isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},e.setCurrentTime=function(t){e.currentTime="string"==typeof t?e.strToDateTime(t):e.isValidDate(t)?t:e.now(),M.trigger("xchange.xdsoft")},e.empty=function(){e.currentTime=null},e.getCurrentTime=function(t){return e.currentTime},e.nextMonth=function(){var t=e.currentTime.getMonth()+1;return 12==t&&(e.currentTime.setFullYear(e.currentTime.getFullYear()+1),t=0),e.currentTime.setDate(Math.min(Date.daysInMonth[t],e.currentTime.getDate())),e.currentTime.setMonth(t),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input")),M.trigger("xchange.xdsoft"),t},e.prevMonth=function(){var t=e.currentTime.getMonth()-1;return t==-1&&(e.currentTime.setFullYear(e.currentTime.getFullYear()-1),t=11),e.currentTime.setDate(Math.min(Date.daysInMonth[t],e.currentTime.getDate())),e.currentTime.setMonth(t),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input")),M.trigger("xchange.xdsoft"),t},e.strToDateTime=function(t){var n,a,r=[];return(r=/^(\+|\-)(.*)$/.exec(t))&&(r[2]=Date.parseDate(r[2],_.formatDate))?(n=r[2].getTime()-1*r[2].getTimezoneOffset()*6e4,a=new Date(W.now().getTime()+parseInt(r[1]+"1")*n)):a=t?Date.parseDate(t,_.format):e.now(),e.isValidDate(a)||(a=e.now()),a},e.strtodate=function(t){var n=t?Date.parseDate(t,_.formatDate):e.now();return e.isValidDate(n)||(n=e.now()),n},e.strtotime=function(t){var n=t?Date.parseDate(t,_.formatTime):e.now();return e.isValidDate(n)||(n=e.now()),n},e.str=function(){return e.currentTime.dateFormat(_.format)}};O.find(".xdsoft_today_button").on("mousedown.xdsoft",function(){M.data("changed",!0),W.setCurrentTime(0),M.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){t.val(W.str()),M.trigger("close.xdsoft")}),O.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,a=!1;!function r(e){W.currentTime.getMonth();t.hasClass(_.next)?W.nextMonth():t.hasClass(_.prev)&&W.prevMonth(),!a&&(n=setTimeout(r,e?e:100))}(500),e([document.body,window]).on("mouseup.xdsoft",function o(){clearTimeout(n),a=!0,e([document.body,window]).off("mouseup.xdsoft",o)})}),I.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,a=!1,r=110;!function o(e){var s=C[0].clientHeight,i=H[0].offsetHeight,d=Math.abs(parseInt(H.css("marginTop")));t.hasClass(_.next)&&i-s-_.timeHeightInTimePicker>=d?H.css("marginTop","-"+(d+_.timeHeightInTimePicker)+"px"):t.hasClass(_.prev)&&d-_.timeHeightInTimePicker>=0&&H.css("marginTop","-"+(d-_.timeHeightInTimePicker)+"px"),C.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(H.css("marginTop"))/(i-s))]),r=r>10?10:r-10,!a&&(n=setTimeout(o,e?e:r))}(500),e([document.body,window]).on("mouseup.xdsoft",function s(){clearTimeout(n),a=!0,e([document.body,window]).off("mouseup.xdsoft",s)})});var z=0;M.on("xchange.xdsoft",function(t){clearTimeout(z),z=setTimeout(function(){for(var t="",n=new Date(W.currentTime.getFullYear(),W.currentTime.getMonth(),1,12,0,0),a=0,r=W.now();n.getDay()!=_.dayOfWeekStart;)n.setDate(n.getDate()-1);t+="<table><thead><tr>";for(var o=0;o<7;o++)t+="<th>"+_.i18n[_.lang].dayOfWeek[o+_.dayOfWeekStart>6?0:o+_.dayOfWeekStart]+"</th>";t+="</tr></thead>",t+="<tbody><tr>";var s=!1,i=!1;_.maxDate!==!1&&(s=W.strtodate(_.maxDate),s=new Date(s.getFullYear(),s.getMonth(),s.getDate(),23,59,59,999)),_.minDate!==!1&&(i=W.strtodate(_.minDate),i=new Date(i.getFullYear(),i.getMonth(),i.getDate()));for(var d,u,c,l=[];a<W.currentTime.getDaysInMonth()||n.getDay()!=_.dayOfWeekStart||W.currentTime.getMonth()==n.getMonth();)l=[],a++,d=n.getDate(),u=n.getFullYear(),c=n.getMonth(),l.push("xdsoft_date"),(s!==!1&&n>s||i!==!1&&n<i)&&l.push("xdsoft_disabled"),W.currentTime.getMonth()!=c&&l.push("xdsoft_other_month"),(_.defaultSelect||M.data("changed"))&&W.currentTime.dateFormat("d.m.Y")==n.dateFormat("d.m.Y")&&l.push("xdsoft_current"),r.dateFormat("d.m.Y")==n.dateFormat("d.m.Y")&&l.push("xdsoft_today"),(0==n.getDay()||6==n.getDay()||~_.weekends.indexOf(n.dateFormat("d.m.Y")))&&l.push("xdsoft_weekend"),_.beforeShowDay&&"function"==typeof _.beforeShowDay&&l.push(_.beforeShowDay(n)),t+='<td data-date="'+d+'" data-month="'+c+'" data-year="'+u+'" class="xdsoft_date xdsoft_day_of_week'+n.getDay()+" "+l.join(" ")+'"><div>'+d+"</div></td>",n.getDay()==_.dayOfWeekStartPrev&&(t+="</tr>"),n.setDate(d+1);t+="</tbody></table>",F.html(t),O.find(".xdsoft_label span").eq(0).text(_.i18n[_.lang].months[W.currentTime.getMonth()]),O.find(".xdsoft_label span").eq(1).text(W.currentTime.getFullYear());var f="",m="",c="",h=function(e,t){var n=W.now();n.setHours(e),e=parseInt(n.getHours()),n.setMinutes(t),t=parseInt(n.getMinutes()),l=[],(_.maxTime!==!1&&W.strtotime(_.maxTime).getTime()<n.getTime()||_.minTime!==!1&&W.strtotime(_.minTime).getTime()>n.getTime())&&l.push("xdsoft_disabled"),(_.initTime||_.defaultSelect||M.data("changed"))&&parseInt(W.currentTime.getHours())==parseInt(e)&&(_.step>59||Math[_.roundTime](W.currentTime.getMinutes()/_.step)*_.step==parseInt(t))&&(_.defaultSelect||M.data("changed")?l.push("xdsoft_current"):_.initTime&&l.push("xdsoft_init_time")),parseInt(r.getHours())==parseInt(e)&&parseInt(r.getMinutes())==parseInt(t)&&l.push("xdsoft_today"),f+='<div class="xdsoft_time '+l.join(" ")+'" data-hour="'+e+'" data-minute="'+t+'">'+n.dateFormat(_.formatTime)+"</div>"};if(_.allowTimes&&e.isArray(_.allowTimes)&&_.allowTimes.length)for(var a=0;a<_.allowTimes.length;a++)m=W.strtotime(_.allowTimes[a]).getHours(),c=W.strtotime(_.allowTimes[a]).getMinutes(),h(m,c);else for(var a=0,o=0;a<(_.hours12?12:24);a++)for(o=0;o<60;o+=_.step)m=(a<10?"0":"")+a,c=(o<10?"0":"")+o,h(m,c);H.html(f);var g="",a=0;for(a=parseInt(_.yearStart,10)+_.yearOffset;a<=parseInt(_.yearEnd,10)+_.yearOffset;a++)g+='<div class="xdsoft_option '+(W.currentTime.getFullYear()==a?"xdsoft_current":"")+'" data-value="'+a+'">'+a+"</div>";for(A.children().eq(0).html(g),a=0,g="";a<=11;a++)g+='<div class="xdsoft_option '+(W.currentTime.getMonth()==a?"xdsoft_current":"")+'" data-value="'+a+'">'+_.i18n[_.lang].months[a]+"</div>";P.children().eq(0).html(g),e(this).trigger("generate.xdsoft")},10),t.stopPropagation()}).on("afterOpen.xdsoft",function(){if(_.timepicker){var e;if(H.find(".xdsoft_current").length?e=".xdsoft_current":H.find(".xdsoft_init_time").length&&(e=".xdsoft_init_time"),e){var t=C[0].clientHeight,n=H[0].offsetHeight,a=H.find(e).index()*_.timeHeightInTimePicker+1;n-t<a&&(a=n-t),H.css("marginTop","-"+parseInt(a)+"px"),C.trigger("scroll_element.xdsoft_scroller",[parseInt(a)/(n-t)])}}});var J=0;F.on("click.xdsoft","td",function(n){n.stopPropagation(),J++;var a=e(this),r=W.currentTime;return!a.hasClass("xdsoft_disabled")&&(r.setDate(a.data("date")),r.setMonth(a.data("month")),r.setFullYear(a.data("year")),M.trigger("select.xdsoft",[r]),t.val(W.str()),(J>1||_.closeOnDateSelect===!0||0===_.closeOnDateSelect&&!_.timepicker)&&!_.inline&&M.trigger("close.xdsoft"),_.onSelectDate&&_.onSelectDate.call&&_.onSelectDate.call(M,W.currentTime,M.data("input")),M.data("changed",!0),M.trigger("xchange.xdsoft"),M.trigger("changedatetime.xdsoft"),void setTimeout(function(){J=0},200))}),H.on("click.xdsoft","div",function(t){t.stopPropagation();var n=e(this),a=W.currentTime;return!n.hasClass("xdsoft_disabled")&&(a.setHours(n.data("hour")),a.setMinutes(n.data("minute")),M.trigger("select.xdsoft",[a]),M.data("input").val(W.str()),!_.inline&&M.trigger("close.xdsoft"),_.onSelectTime&&_.onSelectTime.call&&_.onSelectTime.call(M,W.currentTime,M.data("input")),M.data("changed",!0),M.trigger("xchange.xdsoft"),void M.trigger("changedatetime.xdsoft"))}),M.mousewheel&&S.mousewheel(function(e,t,n,a){return!_.scrollMonth||(t<0?W.nextMonth():W.prevMonth(),!1)}),M.mousewheel&&C.unmousewheel().mousewheel(function(e,t,n,a){if(!_.scrollTime)return!0;var r=C[0].clientHeight,o=H[0].offsetHeight,s=Math.abs(parseInt(H.css("marginTop"))),i=!0;return t<0&&o-r-_.timeHeightInTimePicker>=s?(H.css("marginTop","-"+(s+_.timeHeightInTimePicker)+"px"),i=!1):t>0&&s-_.timeHeightInTimePicker>=0&&(H.css("marginTop","-"+(s-_.timeHeightInTimePicker)+"px"),i=!1),C.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(H.css("marginTop"))/(o-r))]),e.stopPropagation(),i}),M.on("changedatetime.xdsoft",function(){if(_.onChangeDateTime&&_.onChangeDateTime.call){var e=M.data("input");_.onChangeDateTime.call(M,W.currentTime,e),e.trigger("change")}}).on("generate.xdsoft",function(){_.onGenerate&&_.onGenerate.call&&_.onGenerate.call(M,W.currentTime,M.data("input"))});var j=0;t.mousewheel&&t.mousewheel(function(e,n,a,r){return!_.scrollInput||(!_.datepicker&&_.timepicker?(j=H.find(".xdsoft_current").length?H.find(".xdsoft_current").eq(0).index():0,j+n>=0&&j+n<H.children().length&&(j+=n),H.children().eq(j).length&&H.children().eq(j).trigger("mousedown"),!1):_.datepicker&&!_.timepicker?(S.trigger(e,[n,a,r]),t.val&&t.val(W.str()),M.trigger("changedatetime.xdsoft"),!1):void 0)});var L=function(){var t=M.data("input").offset(),n=t.top+M.data("input")[0].offsetHeight-1,a=t.left;n+M[0].offsetHeight>e(window).height()+e(window).scrollTop()&&(n=t.top-M[0].offsetHeight+1),n<0&&(n=0),a+M[0].offsetWidth>e(window).width()&&(a=t.left-M[0].offsetWidth+M.data("input")[0].offsetWidth),M.css({left:a,top:n})};M.on("open.xdsoft",function(){var t=!0;_.onShow&&_.onShow.call&&(t=_.onShow.call(M,W.currentTime,M.data("input"))),t!==!1&&(M.show(),M.trigger("afterOpen.xdsoft"),L(),e(window).off("resize.xdsoft",L).on("resize.xdsoft",L),_.closeOnWithoutClick&&e([document.body,window]).on("mousedown.xdsoft",function n(){M.trigger("close.xdsoft"),e([document.body,window]).off("mousedown.xdsoft",n)}))}).on("close.xdsoft",function(e){var t=!0;_.onClose&&_.onClose.call&&(t=_.onClose.call(M,W.currentTime,M.data("input"))),t===!1||_.opened||_.inline||M.hide(),e.stopPropagation()}).data("input",t);var E=0;M.data("xdsoft_datetime",W),M.setOptions(_),W.setCurrentTime(n()),M.trigger("afterOpen.xdsoft"),t.data("xdsoft_datetimepicker",M).on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function(e){t.is(":disabled")||t.is(":hidden")||!t.is(":visible")||(clearTimeout(E),E=setTimeout(function(){t.is(":disabled")||t.is(":hidden")||!t.is(":visible")||(W.setCurrentTime(n()),M.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(t){var n=(this.value,t.which);switch(!0){case!!~[u].indexOf(n):var a=e("input:visible,textarea:visible");return M.trigger("close.xdsoft"),a.eq(a.index(this)+1).focus(),!1;case!!~[p].indexOf(n):return M.trigger("close.xdsoft"),!0}})},O=function(t){var n=t.data("xdsoft_datetimepicker");n&&(n.data("xdsoft_datetime",null),n.remove(),t.data("xdsoft_datetimepicker",null).off("open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft"),e(window).off("resize.xdsoft"),e([window,document.body]).off("mousedown.xdsoft"),t.unmousewheel&&t.unmousewheel())};return e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl",function(e){e.keyCode==i&&(b=!0)}).on("keyup.xdsoftctrl",function(e){e.keyCode==i&&(b=!1)}),this.each(function(){var t;if(t=e(this).data("xdsoft_datetimepicker")){if("string"===e.type(n))switch(n){case"show":e(this).select().focus(),t.trigger("open.xdsoft");break;case"hide":t.trigger("close.xdsoft");break;case"destroy":O(e(this));break;case"reset":this.value=this.defaultValue,this.value&&t.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value,_.format))||t.data("changed",!1),t.data("xdsoft_datetime").setCurrentTime(this.value)}else t.setOptions(n);return 0}"string"!==e.type(n)&&(!_.lazyInit||_.open||_.inline?S(e(this)):k(e(this)))})}}(jQuery),Date.parseFunctions={count:0},Date.parseRegexes=[],Date.formatFunctions={count:0},Date.prototype.dateFormat=function(e){if("unixtime"==e)return parseInt(this.getTime()/1e3);null==Date.formatFunctions[e]&&Date.createNewFormat(e);var t=Date.formatFunctions[e];return this[t]()},Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;for(var code="Date.prototype."+funcName+" = function() {return ",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,code+="'"+String.escape(ch)+"' + "):code+=Date.getFormatCode(ch):special=!0;eval(code.substring(0,code.length-3)+";}")},Date.getFormatCode=function(e){switch(e){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(e)+"' + "}},Date.parseDate=function(e,t){if("unixtime"==t)return new Date(isNaN(parseInt(e))?0:1e3*parseInt(e));null==Date.parseFunctions[t]&&Date.createParser(t);var n=Date.parseFunctions[t];return Date[n](e)},Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++,regexNum=Date.parseRegexes.length,currentGroup=1;Date.parseFunctions[format]=funcName;for(var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {",regex="",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,regex+=String.escape(ch)):(obj=Date.formatCodeToRegex(ch,currentGroup),currentGroup+=obj.g,regex+=obj.s,obj.g&&obj.c&&(code+=obj.c)):special=!0;code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}",code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}",Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$"),eval(code)},Date.formatCodeToRegex=function(e,t){switch(e){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+t+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+t+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+t+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+t+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+t+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+t+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(e)}}},Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3")},Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0")},Date.prototype.getDayOfYear=function(){var e=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var t=0;t<this.getMonth();++t)e+=Date.daysInMonth[t];return e+this.getDate()},Date.prototype.getWeekOfYear=function(){var e=this.getDayOfYear()+(4-this.getDay()),t=new Date(this.getFullYear(),0,1),n=7-t.getDay()+4;return String.leftPad(Math.ceil((e-n)/7)+1,2,"0")},Date.prototype.isLeapYear=function(){var e=this.getFullYear();return 0==(3&e)&&(e%100||e%400==0&&e)},Date.prototype.getFirstDayOfMonth=function(){var e=(this.getDay()-(this.getDate()-1))%7;return e<0?e+7:e},Date.prototype.getLastDayOfMonth=function(){var e=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return e<0?e+7:e},Date.prototype.getDaysInMonth=function(){return Date.daysInMonth[1]=this.isLeapYear()?29:28,Date.daysInMonth[this.getMonth()]},Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},String.escape=function(e){return e.replace(/('|\\)/g,"\\$1")},String.leftPad=function(e,t,n){var a=new String(e);for(null==n&&(n=" ");a.length<t;)a=n+a;return a},Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Date.y2kYear=50,Date.monthNumbers={Jan:0,Feb:1,Mar:2,
Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"},function(e){"function"==typeof define&&define.amd?define(["jquery.flot.min"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var r,o=t||window.event,s=[].slice.call(arguments,1),i=0,d=0,u=0,c=0,l=0;return t=e.event.fix(o),t.type="mousewheel",o.wheelDelta&&(i=o.wheelDelta),o.detail&&(i=o.detail*-1),o.deltaY&&(u=o.deltaY*-1,i=u),o.deltaX&&(d=o.deltaX,i=d*-1),void 0!==o.wheelDeltaY&&(u=o.wheelDeltaY),void 0!==o.wheelDeltaX&&(d=o.wheelDeltaX*-1),c=Math.abs(i),(!n||c<n)&&(n=c),l=Math.max(Math.abs(u),Math.abs(d)),(!a||l<a)&&(a=l),r=i>0?"floor":"ceil",i=Math[r](i/n),d=Math[r](d/a),u=Math[r](u/a),s.unshift(t,i,d,u),(e.event.dispatch||e.event.handle).apply(this,s)}var n,a,r=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(e.event.fixHooks)for(var s=r.length;s;)e.event.fixHooks[r[--s]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var _slice=Array.prototype.slice,_slicedToArray=function(){function e(e,t){var i=[],n=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{!n&&o["return"]&&o["return"]()}finally{if(r)throw s}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.parsley=t(e.jQuery)}(this,function(e){"use strict";function t(e,t){return e.parsleyAdaptedCallback||(e.parsleyAdaptedCallback=function(){var i=Array.prototype.slice.call(arguments,0);i.unshift(this),e.apply(t||T,i)}),e.parsleyAdaptedCallback}function i(e){return 0===e.lastIndexOf(D,0)?e.substr(D.length):e}function n(){var t=this,i=window||global;_extends(this,{isNativeEvent:function(e){return e.originalEvent&&e.originalEvent.isTrusted!==!1},fakeInputEvent:function(i){t.isNativeEvent(i)&&e(i.target).trigger("input")},misbehaves:function(i){t.isNativeEvent(i)&&(t.behavesOk(i),e(document).on("change.inputevent",i.data.selector,t.fakeInputEvent),t.fakeInputEvent(i))},behavesOk:function(i){t.isNativeEvent(i)&&e(document).off("input.inputevent",i.data.selector,t.behavesOk).off("change.inputevent",i.data.selector,t.misbehaves)},install:function(){if(!i.inputEventPatched){i.inputEventPatched="0.0.3";for(var n=["select",'input[type="checkbox"]','input[type="radio"]','input[type="file"]'],r=0;r<n.length;r++){var s=n[r];e(document).on("input.inputevent",s,{selector:s},t.behavesOk).on("change.inputevent",s,{selector:s},t.misbehaves)}}},uninstall:function(){delete i.inputEventPatched,e(document).off(".inputevent")}})}var r=1,s={},a={attr:function(e,t,i){var n,r,s,a=new RegExp("^"+t,"i");if("undefined"==typeof i)i={};else for(n in i)i.hasOwnProperty(n)&&delete i[n];if(!e)return i;for(s=e.attributes,n=s.length;n--;)r=s[n],r&&r.specified&&a.test(r.name)&&(i[this.camelize(r.name.slice(t.length))]=this.deserializeValue(r.value));return i},checkAttr:function(e,t,i){return e.hasAttribute(t+i)},setAttr:function(e,t,i,n){e.setAttribute(this.dasherize(t+i),String(n))},generateID:function(){return""+r++},deserializeValue:function(t){var i;try{return t?"true"==t||"false"!=t&&("null"==t?null:isNaN(i=Number(t))?/^[\[\{]/.test(t)?e.parseJSON(t):t:i):t}catch(n){return t}},camelize:function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},dasherize:function(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){var e;window.console&&"function"==typeof window.console.warn&&(e=window.console).warn.apply(e,arguments)},warnOnce:function(e){s[e]||(s[e]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){s={}},trimString:function(e){return e.replace(/^\s+|\s+$/g,"")},parse:{date:function S(e){var t=e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);if(!t)return null;var i=t.map(function(e){return parseInt(e,10)}),n=_slicedToArray(i,4),r=(n[0],n[1]),s=n[2],a=n[3],S=new Date(r,s-1,a);return S.getFullYear()!==r||S.getMonth()+1!==s||S.getDate()!==a?null:S},string:function(e){return e},integer:function(e){return isNaN(e)?null:parseInt(e,10)},number:function(e){if(isNaN(e))throw null;return parseFloat(e)},"boolean":function(e){return!/^\s*false\s*$/i.test(e)},object:function(e){return a.deserializeValue(e)},regexp:function(e){var t="";return/^\/.*\/(?:[gimy]*)$/.test(e)?(t=e.replace(/.*\/([gimy]*)$/,"$1"),e=e.replace(new RegExp("^/(.*?)/"+t+"$"),"$1")):e="^"+e+"$",new RegExp(e,t)}},parseRequirement:function(e,t){var i=this.parse[e||"string"];if(!i)throw'Unknown requirement specification: "'+e+'"';var n=i(t);if(null===n)throw"Requirement is not a "+e+': "'+t+'"';return n},namespaceEvents:function(t,i){return t=this.trimString(t||"").split(/\s+/),t[0]?e.map(t,function(e){return e+"."+i}).join(" "):""},difference:function(t,i){var n=[];return e.each(t,function(e,t){i.indexOf(t)==-1&&n.push(t)}),n},all:function(t){return e.when.apply(e,_toConsumableArray(t).concat([42,42]))},objectCreate:Object.create||function(){var e=function(){};return function(t){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof t)throw TypeError("Argument must be an object");e.prototype=t;var i=new e;return e.prototype=null,i}}(),_SubmitSelector:'input[type="submit"], button:submit'},o={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,triggerAfterFailure:"input",errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(e){},errorsContainer:function(e){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},l=function(){this.__id__=a.generateID()};l.prototype={asyncSupport:!0,_pipeAccordingToValidationResult:function(){var t=this,i=function(){var i=e.Deferred();return!0!==t.validationResult&&i.reject(),i.resolve().promise()};return[i,i]},actualizeOptions:function(){return a.attr(this.element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(e){this.domOptions=a.objectCreate(this.parent.options),this.options=a.objectCreate(this.domOptions);for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t]);this.actualizeOptions()},_listeners:null,on:function(e,t){this._listeners=this._listeners||{};var i=this._listeners[e]=this._listeners[e]||[];return i.push(t),this},subscribe:function(t,i){e.listenTo(this,t.toLowerCase(),i)},off:function(e,t){var i=this._listeners&&this._listeners[e];if(i)if(t)for(var n=i.length;n--;)i[n]===t&&i.splice(n,1);else delete this._listeners[e];return this},unsubscribe:function(t,i){e.unsubscribeTo(this,t.toLowerCase())},trigger:function(e,t,i){t=t||this;var n,r=this._listeners&&this._listeners[e];if(r)for(var s=r.length;s--;)if(n=r[s].call(t,t,i),n===!1)return n;return!this.parent||this.parent.trigger(e,t,i)},asyncIsValid:function(e,t){return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),this.whenValid({group:e,force:t})},_findRelated:function(){return this.options.multiple?e(this.parent.element.querySelectorAll("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')):this.$element}};var u=function(e,t){var i=e.match(/^\s*\[(.*)\]\s*$/);if(!i)throw'Requirement is not an array: "'+e+'"';var n=i[1].split(",").map(a.trimString);if(n.length!==t)throw"Requirement has "+n.length+" values when "+t+" are needed";return n},d=function(e,t,i){var n=null,r={};for(var s in e)if(s){var o=i(s);"string"==typeof o&&(o=a.parseRequirement(e[s],o)),r[s]=o}else n=a.parseRequirement(e[s],t);return[n,r]},h=function(t){e.extend(!0,this,t)};h.prototype={validate:function(e,t){if(this.fn)return arguments.length>3&&(t=[].slice.call(arguments,1,-1)),this.fn(e,t);if(Array.isArray(e)){if(!this.validateMultiple)throw"Validator `"+this.name+"` does not handle multiple values";return this.validateMultiple.apply(this,arguments)}var i=arguments[arguments.length-1];if(this.validateDate&&i._isDateInput())return arguments[0]=a.parse.date(arguments[0]),null!==arguments[0]&&this.validateDate.apply(this,arguments);if(this.validateNumber)return!isNaN(e)&&(arguments[0]=parseFloat(arguments[0]),this.validateNumber.apply(this,arguments));if(this.validateString)return this.validateString.apply(this,arguments);throw"Validator `"+this.name+"` only handles multiple values"},parseRequirements:function(t,i){if("string"!=typeof t)return Array.isArray(t)?t:[t];var n=this.requirementType;if(Array.isArray(n)){for(var r=u(t,n.length),s=0;s<r.length;s++)r[s]=a.parseRequirement(n[s],r[s]);return r}return e.isPlainObject(n)?d(n,t,i):[a.parseRequirement(n,t)]},requirementType:"string",priority:2};var p=function(e,t){this.__class__="ValidatorRegistry",this.locale="en",this.init(e||{},t||{})},c={email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,date:{test:function(e){return null!==a.parse.date(e)}},url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i")};c.range=c.number;var f=function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},m=function(e,t){return t.map(a.parse[e])},g=function(e,t){return function(i){for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.pop(),t.apply(void 0,[i].concat(_toConsumableArray(m(e,r))))}},v=function(e){return{validateDate:g("date",e),validateNumber:g("number",e),requirementType:e.length<=2?"string":["string","string"],priority:30}};p.prototype={init:function(e,t){this.catalog=t,this.validators=_extends({},this.validators);for(var i in e)this.addValidator(i,e[i].fn,e[i].priority);window.Parsley.trigger("parsley:validator:init")},setLocale:function(e){if("undefined"==typeof this.catalog[e])throw new Error(e+" is not available in the catalog");return this.locale=e,this},addCatalog:function(e,t,i){return"object"==typeof t&&(this.catalog[e]=t),!0===i?this.setLocale(e):this},addMessage:function(e,t,i){return"undefined"==typeof this.catalog[e]&&(this.catalog[e]={}),this.catalog[e][t]=i,this},addMessages:function(e,t){for(var i in t)this.addMessage(e,i,t[i]);return this},addValidator:function(e,t,i){if(this.validators[e])a.warn('Validator "'+e+'" is already defined.');else if(o.hasOwnProperty(e))return void a.warn('"'+e+'" is a restricted keyword and is not a valid validator name.');return this._setValidator.apply(this,arguments)},updateValidator:function(e,t,i){return this.validators[e]?this._setValidator.apply(this,arguments):(a.warn('Validator "'+e+'" is not already defined.'),this.addValidator.apply(this,arguments))},removeValidator:function(e){return this.validators[e]||a.warn('Validator "'+e+'" is not defined.'),delete this.validators[e],this},_setValidator:function(e,t,i){"object"!=typeof t&&(t={fn:t,priority:i}),t.validate||(t=new h(t)),this.validators[e]=t;for(var n in t.messages||{})this.addMessage(n,e,t.messages[n]);return this},getErrorMessage:function(e){var t;if("type"===e.name){var i=this.catalog[this.locale][e.name]||{};t=i[e.requirements]}else t=this.formatMessage(this.catalog[this.locale][e.name],e.requirements);return t||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage},formatMessage:function(e,t){if("object"==typeof t){for(var i in t)e=this.formatMessage(e,t[i]);return e}return"string"==typeof e?e.replace(/%s/i,t):""},validators:{notblank:{validateString:function(e){return/\S/.test(e)},priority:2},required:{validateMultiple:function(e){return e.length>0},validateString:function(e){return/\S/.test(e)},priority:512},type:{validateString:function(e,t){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=i.step,r=void 0===n?"any":n,s=i.base,a=void 0===s?0:s,o=c[t];if(!o)throw new Error("validator type `"+t+"` is not supported");if(!o.test(e))return!1;if("number"===t&&!/^any$/i.test(r||"")){var l=Number(e),u=Math.max(f(r),f(a));if(f(l)>u)return!1;var d=function(e){return Math.round(e*Math.pow(10,u))};if((d(l)-d(a))%d(r)!=0)return!1}return!0},requirementType:{"":"string",step:"string",base:"number"},priority:256},pattern:{validateString:function(e,t){return t.test(e)},requirementType:"regexp",priority:64},minlength:{validateString:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxlength:{validateString:function(e,t){return e.length<=t},requirementType:"integer",priority:30},length:{validateString:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(e,t){return e.length<=t},requirementType:"integer",priority:30},check:{validateMultiple:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},min:v(function(e,t){return e>=t}),max:v(function(e,t){return e<=t}),range:v(function(e,t,i){return e>=t&&e<=i}),equalto:{validateString:function(t,i){var n=e(i);return n.length?t===n.val():t===i},priority:256}}};var y={},_=function k(e,t,i){for(var n=[],r=[],s=0;s<e.length;s++){for(var a=!1,o=0;o<t.length;o++)if(e[s].assert.name===t[o].assert.name){a=!0;break}a?r.push(e[s]):n.push(e[s])}return{kept:r,added:n,removed:i?[]:k(t,e,!0).added}};y.Form={_actualizeTriggers:function(){var e=this;this.$element.on("submit.Parsley",function(t){e.onSubmitValidate(t)}),this.$element.on("click.Parsley",a._SubmitSelector,function(t){e.onSubmitButton(t)}),!1!==this.options.uiEnabled&&this.element.setAttribute("novalidate","")},focus:function(){if(this._focusedField=null,!0===this.validationResult||"none"===this.options.focus)return null;for(var e=0;e<this.fields.length;e++){var t=this.fields[e];if(!0!==t.validationResult&&t.validationResult.length>0&&"undefined"==typeof t.options.noFocus&&(this._focusedField=t.$element,"first"===this.options.focus))break}return null===this._focusedField?null:this._focusedField.focus()},_destroyUI:function(){this.$element.off(".Parsley")}},y.Field={_reflowUI:function(){if(this._buildUI(),this._ui){var e=_(this.validationResult,this._ui.lastValidationResult);this._ui.lastValidationResult=this.validationResult,this._manageStatusClass(),this._manageErrorsMessages(e),this._actualizeTriggers(),!e.kept.length&&!e.added.length||this._failedOnce||(this._failedOnce=!0,this._actualizeTriggers())}},getErrorsMessages:function(){if(!0===this.validationResult)return[];for(var e=[],t=0;t<this.validationResult.length;t++)e.push(this.validationResult[t].errorMessage||this._getErrorMessage(this.validationResult[t].assert));return e},addError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._addError(e,{message:i,assert:n}),s&&this._errorClass()},updateError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._updateError(e,{message:i,assert:n}),s&&this._errorClass()},removeError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.updateClass,n=void 0===i||i;this._buildUI(),this._removeError(e),n&&this._manageStatusClass()},_manageStatusClass:function(){this.hasConstraints()&&this.needsValidation()&&!0===this.validationResult?this._successClass():this.validationResult.length>0?this._errorClass():this._resetClass()},_manageErrorsMessages:function(t){if("undefined"==typeof this.options.errorsMessagesDisabled){if("undefined"!=typeof this.options.errorMessage)return t.added.length||t.kept.length?(this._insertErrorWrapper(),0===this._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")),this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)):this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var i=0;i<t.removed.length;i++)this._removeError(t.removed[i].assert.name);for(i=0;i<t.added.length;i++)this._addError(t.added[i].assert.name,{message:t.added[i].errorMessage,assert:t.added[i].assert});for(i=0;i<t.kept.length;i++)this._updateError(t.kept[i].assert.name,{message:t.kept[i].errorMessage,assert:t.kept[i].assert})}},_addError:function(t,i){var n=i.message,r=i.assert;this._insertErrorWrapper(),this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-"+t).html(n||this._getErrorMessage(r)))},_updateError:function(e,t){var i=t.message,n=t.assert;this._ui.$errorsWrapper.addClass("filled").find(".parsley-"+e).html(i||this._getErrorMessage(n))},_removeError:function(e){this._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+e).remove()},_getErrorMessage:function(e){var t=e.name+"Message";return"undefined"!=typeof this.options[t]?window.Parsley.formatMessage(this.options[t],e.requirements):window.Parsley.getErrorMessage(e)},_buildUI:function(){if(!this._ui&&!1!==this.options.uiEnabled){var t={};this.element.setAttribute(this.options.namespace+"id",this.__id__),t.$errorClassHandler=this._manageClassHandler(),t.errorsWrapperId="parsley-id-"+(this.options.multiple?"multiple-"+this.options.multiple:this.__id__),t.$errorsWrapper=e(this.options.errorsWrapper).attr("id",t.errorsWrapperId),t.lastValidationResult=[],t.validationInformationVisible=!1,this._ui=t}},_manageClassHandler:function(){if("string"==typeof this.options.classHandler)return 0===e(this.options.classHandler).length&&ParsleyUtils.warn("No elements found that match the selector `"+this.options.classHandler+"` set in options.classHandler or data-parsley-class-handler"),e(this.options.classHandler);if("function"==typeof this.options.classHandler)var t=this.options.classHandler.call(this,this);return"undefined"!=typeof t&&t.length?t:this._inputHolder()},_inputHolder:function(){return this.options.multiple&&"SELECT"!==this.element.nodeName?this.$element.parent():this.$element},_insertErrorWrapper:function(){var t;if(0!==this._ui.$errorsWrapper.parent().length)return this._ui.$errorsWrapper.parent();if("string"==typeof this.options.errorsContainer){if(e(this.options.errorsContainer).length)return e(this.options.errorsContainer).append(this._ui.$errorsWrapper);a.warn("The errors container `"+this.options.errorsContainer+"` does not exist in DOM")}else"function"==typeof this.options.errorsContainer&&(t=this.options.errorsContainer.call(this,this));return"undefined"!=typeof t&&t.length?t.append(this._ui.$errorsWrapper):this._inputHolder().after(this._ui.$errorsWrapper)},_actualizeTriggers:function(){var e,t=this,i=this._findRelated();i.off(".Parsley"),this._failedOnce?i.on(a.namespaceEvents(this.options.triggerAfterFailure,"Parsley"),function(){t._validateIfNeeded()}):(e=a.namespaceEvents(this.options.trigger,"Parsley"))&&i.on(e,function(e){t._validateIfNeeded(e)})},_validateIfNeeded:function(e){var t=this;e&&/key|input/.test(e.type)&&(!this._ui||!this._ui.validationInformationVisible)&&this.getValue().length<=this.options.validationThreshold||(this.options.debounce?(window.clearTimeout(this._debounced),this._debounced=window.setTimeout(function(){return t.validate()},this.options.debounce)):this.validate())},_resetUI:function(){this._failedOnce=!1,this._actualizeTriggers(),"undefined"!=typeof this._ui&&(this._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(),this._ui.lastValidationResult=[],this._ui.validationInformationVisible=!1)},_destroyUI:function(){this._resetUI(),"undefined"!=typeof this._ui&&this._ui.$errorsWrapper.remove(),delete this._ui},_successClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)},_errorClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)},_resetClass:function(){this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)}};var w=function(t,i,n){this.__class__="Form",this.element=t,this.$element=e(t),this.domOptions=i,this.options=n,this.parent=window.Parsley,this.fields=[],this.validationResult=null},b={pending:null,resolved:!0,rejected:!1};w.prototype={onSubmitValidate:function(e){var t=this;if(!0!==e.parsley){var i=this._submitSource||this.$element.find(a._SubmitSelector)[0];if(this._submitSource=null,this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!0),!i||null===i.getAttribute("formnovalidate")){window.Parsley._remoteCache={};var n=this.whenValidate({event:e});"resolved"===n.state()&&!1!==this._trigger("submit")||(e.stopImmediatePropagation(),e.preventDefault(),"pending"===n.state()&&n.done(function(){t._submit(i)}))}}},onSubmitButton:function(e){this._submitSource=e.currentTarget},_submit:function(t){if(!1!==this._trigger("submit")){if(t){var i=this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!1);0===i.length&&(i=e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),i.attr({name:t.getAttribute("name"),value:t.getAttribute("value")})}this.$element.trigger(_extends(e.Event("submit"),{parsley:!0}))}},validate:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1],s=i[2];t={group:n,force:r,event:s}}return b[this.whenValidate(t).state()]},whenValidate:function(){var t,i=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.group,s=n.force,o=n.event;this.submitEvent=o,o&&(this.submitEvent=_extends({},o,{preventDefault:function(){a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),i.validationResult=!1}})),this.validationResult=!0,this._trigger("validate"),this._refreshFields();var l=this._withoutReactualizingFormOptions(function(){return e.map(i.fields,function(e){return e.whenValidate({force:s,group:r})})});return(t=a.all(l).done(function(){i._trigger("success")}).fail(function(){i.validationResult=!1,i.focus(),i._trigger("error")}).always(function(){i._trigger("validated")})).pipe.apply(t,_toConsumableArray(this._pipeAccordingToValidationResult()))},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={group:n,force:r}}return b[this.whenValid(t).state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.group,r=i.force;this._refreshFields();var s=this._withoutReactualizingFormOptions(function(){return e.map(t.fields,function(e){return e.whenValid({group:n,force:r})})});return a.all(s)},reset:function(){for(var e=0;e<this.fields.length;e++)this.fields[e].reset();this._trigger("reset")},destroy:function(){this._destroyUI();for(var e=0;e<this.fields.length;e++)this.fields[e].destroy();this.$element.removeData("Parsley"),this._trigger("destroy")},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var t=this,i=this.fields;return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e,i){var n=new window.Parsley.Factory(i,{},t);if(("Field"===n.__class__||"FieldMultiple"===n.__class__)&&!0!==n.options.excluded){var r=n.__class__+"-"+n.__id__;"undefined"==typeof t.fieldsMappedById[r]&&(t.fieldsMappedById[r]=n,t.fields.push(n))}}),e.each(a.difference(i,t.fields),function(e,t){t.reset()})}),this},_withoutReactualizingFormOptions:function(e){var t=this.actualizeOptions;this.actualizeOptions=function(){return this};var i=e();return this.actualizeOptions=t,i},_trigger:function(e){return this.trigger("form:"+e)}};var F=function(e,t,i,n,r){var s=window.Parsley._validatorRegistry.validators[t],a=new h(s);n=n||e.options[t+"Priority"]||a.priority,r=!0===r,_extends(this,{validator:a,name:t,requirements:i,priority:n,isDomConstraint:r}),this._parseRequirements(e.options)},C=function(e){var t=e[0].toUpperCase();return t+e.slice(1)};F.prototype={validate:function(e,t){var i;return(i=this.validator).validate.apply(i,[e].concat(_toConsumableArray(this.requirementList),[t]))},_parseRequirements:function(e){var t=this;this.requirementList=this.validator.parseRequirements(this.requirements,function(i){return e[t.name+C(i)]})}};var E=function(t,i,n,r){this.__class__="Field",this.element=t,this.$element=e(t),"undefined"!=typeof r&&(this.parent=r),this.options=n,this.domOptions=i,this.constraints=[],this.constraintsByName={},this.validationResult=!0,this._bindConstraints()},A={pending:null,resolved:!0,rejected:!1};E.prototype={validate:function(t){arguments.length>=1&&!e.isPlainObject(t)&&(a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),t={options:t});var i=this.whenValidate(t);if(!i)return!0;switch(i.state()){case"pending":return null;case"resolved":return!0;case"rejected":return this.validationResult}},whenValidate:function(){var e,t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=i.group;if(this.refreshConstraints(),!r||this._isInGroup(r))return this.value=this.getValue(),this._trigger("validate"),(e=this.whenValid({force:n,value:this.value,_refreshed:!0}).always(function(){t._reflowUI()}).done(function(){t._trigger("success")}).fail(function(){t._trigger("error")}).always(function(){t._trigger("validated")})).pipe.apply(e,_toConsumableArray(this._pipeAccordingToValidationResult()))},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(e){return"undefined"==typeof e&&(e=this.getValue()),!(!e.length&&!this._isRequired()&&"undefined"==typeof this.options.validateIfEmpty)},_isInGroup:function(t){return Array.isArray(this.options.group)?-1!==e.inArray(t,this.options.group):this.options.group===t},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={force:n,value:r}}var s=this.whenValid(t);return!s||A[s.state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=void 0!==n&&n,s=i.value,o=i.group,l=i._refreshed;if(l||this.refreshConstraints(),!o||this._isInGroup(o)){if(this.validationResult=!0,!this.hasConstraints())return e.when();if("undefined"!=typeof s&&null!==s||(s=this.getValue()),!this.needsValidation(s)&&!0!==r)return e.when();var u=this._getGroupedConstraints(),d=[];return e.each(u,function(i,n){var r=a.all(e.map(n,function(e){return t._validateConstraint(s,e)}));if(d.push(r),"rejected"===r.state())return!1}),a.all(d)}},_validateConstraint:function(t,i){var n=this,r=i.validate(t,this);return!1===r&&(r=e.Deferred().reject()),a.all([r]).fail(function(e){n.validationResult instanceof Array||(n.validationResult=[]),n.validationResult.push({assert:i,errorMessage:"string"==typeof e&&e})})},getValue:function(){var e;return e="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof e||null===e?"":this._handleWhitespace(e)},reset:function(){return this._resetUI(),this._trigger("reset")},destroy:function(){this._destroyUI(),this.$element.removeData("Parsley"),this.$element.removeData("FieldMultiple"),this._trigger("destroy")},refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},addConstraint:function(e,t,i,n){if(window.Parsley._validatorRegistry.validators[e]){var r=new F(this,e,t,i,n);"undefined"!==this.constraintsByName[r.name]&&this.removeConstraint(r.name),this.constraints.push(r),this.constraintsByName[r.name]=r}return this},removeConstraint:function(e){for(var t=0;t<this.constraints.length;t++)if(e===this.constraints[t].name){this.constraints.splice(t,1);break}return delete this.constraintsByName[e],this},updateConstraint:function(e,t,i){return this.removeConstraint(e).addConstraint(e,t,i)},_bindConstraints:function(){for(var e=[],t={},i=0;i<this.constraints.length;i++)!1===this.constraints[i].isDomConstraint&&(e.push(this.constraints[i]),t[this.constraints[i].name]=this.constraints[i]);this.constraints=e,this.constraintsByName=t;for(var n in this.options)this.addConstraint(n,this.options[n],void 0,!0);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){null!==this.element.getAttribute("required")&&this.addConstraint("required",!0,void 0,!0),null!==this.element.getAttribute("pattern")&&this.addConstraint("pattern",this.element.getAttribute("pattern"),void 0,!0);var e=this.element.getAttribute("min"),t=this.element.getAttribute("max");null!==e&&null!==t?this.addConstraint("range",[e,t],void 0,!0):null!==e?this.addConstraint("min",e,void 0,!0):null!==t&&this.addConstraint("max",t,void 0,!0),null!==this.element.getAttribute("minlength")&&null!==this.element.getAttribute("maxlength")?this.addConstraint("length",[this.element.getAttribute("minlength"),this.element.getAttribute("maxlength")],void 0,!0):null!==this.element.getAttribute("minlength")?this.addConstraint("minlength",this.element.getAttribute("minlength"),void 0,!0):null!==this.element.getAttribute("maxlength")&&this.addConstraint("maxlength",this.element.getAttribute("maxlength"),void 0,!0);var i=this.element.type;return"number"===i?this.addConstraint("type",["number",{step:this.element.getAttribute("step")||"1",base:e||this.element.getAttribute("value")}],void 0,!0):/^(email|url|range|date)$/i.test(i)?this.addConstraint("type",i,void 0,!0):this},_isRequired:function(){return"undefined"!=typeof this.constraintsByName.required&&!1!==this.constraintsByName.required.requirements},_trigger:function(e){return this.trigger("field:"+e)},_handleWhitespace:function(e){return!0===this.options.trimValue&&a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(e=e.replace(/\s{2,}/g," ")),"trim"!==this.options.whitespace&&"squish"!==this.options.whitespace&&!0!==this.options.trimValue||(e=a.trimString(e)),e},_isDateInput:function(){var e=this.constraintsByName.type;return e&&"date"===e.requirements},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled)return[this.constraints];for(var e=[],t={},i=0;i<this.constraints.length;i++){var n=this.constraints[i].priority;t[n]||e.push(t[n]=[]),t[n].push(this.constraints[i])}return e.sort(function(e,t){return t[0].priority-e[0].priority}),e}};var x=E,$=function(){this.__class__="FieldMultiple"};$.prototype={addElement:function(e){return this.$elements.push(e),this},refreshConstraints:function(){var t;if(this.constraints=[],"SELECT"===this.element.nodeName)return this.actualizeOptions()._bindConstraints(),
this;for(var i=0;i<this.$elements.length;i++)if(e("html").has(this.$elements[i]).length){t=this.$elements[i].data("FieldMultiple").refreshConstraints().constraints;for(var n=0;n<t.length;n++)this.addConstraint(t[n].name,t[n].requirements,t[n].priority,t[n].isDomConstraint)}else this.$elements.splice(i,1);return this},getValue:function(){if("function"==typeof this.options.value)return this.options.value(this);if("undefined"!=typeof this.options.value)return this.options.value;if("INPUT"===this.element.nodeName){if("radio"===this.element.type)return this._findRelated().filter(":checked").val()||"";if("checkbox"===this.element.type){var t=[];return this._findRelated().filter(":checked").each(function(){t.push(e(this).val())}),t}}return"SELECT"===this.element.nodeName&&null===this.$element.val()?[]:this.$element.val()},_init:function(){return this.$elements=[this.$element],this}};var P=function(t,i,n){this.element=t,this.$element=e(t);var r=this.$element.data("Parsley");if(r)return"undefined"!=typeof n&&r.parent===window.Parsley&&(r.parent=n,r._resetOptions(r.options)),"object"==typeof i&&_extends(r.options,i),r;if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");if("undefined"!=typeof n&&"Form"!==n.__class__)throw new Error("Parent instance must be a Form instance");return this.parent=n||window.Parsley,this.init(i)};P.prototype={init:function(e){return this.__class__="Parsley",this.__version__="2.7.2",this.__id__=a.generateID(),this._resetOptions(e),"FORM"===this.element.nodeName||a.checkAttr(this.element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){return"radio"===this.element.type||"checkbox"===this.element.type||"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple")},handleMultiple:function(){var t,i,n=this;if(this.options.multiple=this.options.multiple||(t=this.element.getAttribute("name"))||this.element.getAttribute("id"),"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");if(!this.options.multiple)return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),t&&e('input[name="'+t+'"]').each(function(e,t){"radio"!==t.type&&"checkbox"!==t.type||t.setAttribute(n.options.namespace+"multiple",n.options.multiple)});for(var r=this._findRelated(),s=0;s<r.length;s++)if(i=e(r.get(s)).data("Parsley"),"undefined"!=typeof i){this.$element.data("FieldMultiple")||i.addElement(this.$element);break}return this.bind("parsleyField",!0),i||this.bind("parsleyFieldMultiple")},bind:function(t,i){var n;switch(t){case"parsleyForm":n=e.extend(new w(this.element,this.domOptions,this.options),new l,window.ParsleyExtend)._bindFields();break;case"parsleyField":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new l,window.ParsleyExtend);break;case"parsleyFieldMultiple":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new $,new l,window.ParsleyExtend)._init();break;default:throw new Error(t+"is not a supported Parsley type")}return this.options.multiple&&a.setAttr(this.element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof i?(this.$element.data("FieldMultiple",n),n):(this.$element.data("Parsley",n),n._actualizeTriggers(),n._trigger("init"),n)}};var V=e.fn.jquery.split(".");if(parseInt(V[0])<=1&&parseInt(V[1])<8)throw"The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";V.forEach||a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");var O=_extends(new l,{element:document,$element:e(document),actualizeOptions:null,_resetOptions:null,Factory:P,version:"2.7.2"});_extends(x.prototype,y.Field,l.prototype),_extends(w.prototype,y.Form,l.prototype),_extends(P.prototype,l.prototype),e.fn.parsley=e.fn.psly=function(t){if(this.length>1){var i=[];return this.each(function(){i.push(e(this).parsley(t))}),i}return e(this).length?new P(this[0],t):void a.warn("You must bind Parsley on an existing element.")},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),O.options=_extends(a.objectCreate(o),window.ParsleyConfig),window.ParsleyConfig=O.options,window.Parsley=window.psly=O,O.Utils=a,window.ParsleyUtils={},e.each(a,function(e,t){"function"==typeof t&&(window.ParsleyUtils[e]=function(){return a.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),a[e].apply(a,arguments)})});var M=window.Parsley._validatorRegistry=new p(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);window.ParsleyValidator={},e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "),function(e,t){window.Parsley[t]=function(){return M[t].apply(M,arguments)},window.ParsleyValidator[t]=function(){var e;return a.warnOnce("Accessing the method '"+t+"' through Validator is deprecated. Simply call 'window.Parsley."+t+"(...)'"),(e=window.Parsley)[t].apply(e,arguments)}}),window.Parsley.UI=y,window.ParsleyUI={removeError:function(e,t,i){var n=!0!==i;return a.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e.removeError(t,{updateClass:n})},getErrorsMessages:function(e){return a.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),e.getErrorsMessages()}},e.each("addError updateError".split(" "),function(e,t){window.ParsleyUI[t]=function(e,i,n,r,s){var o=!0!==s;return a.warnOnce("Accessing UI is deprecated. Call '"+t+"' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e[t](i,{message:n,assert:r,updateClass:o})}}),!1!==window.ParsleyConfig.autoBind&&e(function(){e("[data-parsley-validate]").length&&e("[data-parsley-validate]").parsley()});var T=e({}),R=function(){a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},D="parsley:";e.listen=function(e,n){var r;if(R(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(r=arguments[1],n=arguments[2]),"function"!=typeof n)throw new Error("Wrong parameters");window.Parsley.on(i(e),t(n,r))},e.listenTo=function(e,n,r){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");if("string"!=typeof n||"function"!=typeof r)throw new Error("Wrong parameters");e.on(i(n),t(r))},e.unsubscribe=function(e,t){if(R(),"string"!=typeof e||"function"!=typeof t)throw new Error("Wrong arguments");window.Parsley.off(i(e),t.parsleyAdaptedCallback)},e.unsubscribeTo=function(e,t){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");e.off(i(t))},e.unsubscribeAll=function(t){R(),window.Parsley.off(i(t)),e("form,input,textarea,select").each(function(){var n=e(this).data("Parsley");n&&n.off(i(t))})},e.emit=function(e,t){var n;R();var r=t instanceof x||t instanceof w,s=Array.prototype.slice.call(arguments,r?2:1);s.unshift(i(e)),r||(t=window.Parsley),(n=t).trigger.apply(n,_toConsumableArray(s))};e.extend(!0,O,{asyncValidators:{"default":{fn:function(e){return e.status>=200&&e.status<300},url:!1},reverse:{fn:function(e){return e.status<200||e.status>=300},url:!1}},addAsyncValidator:function(e,t,i,n){return O.asyncValidators[e]={fn:t,url:i||!1,options:n||{}},this}}),O.addValidator("remote",{requirementType:{"":"string",validator:"string",reverse:"boolean",options:"object"},validateString:function(t,i,n,r){var s,a,o={},l=n.validator||(!0===n.reverse?"reverse":"default");if("undefined"==typeof O.asyncValidators[l])throw new Error("Calling an undefined async validator: `"+l+"`");i=O.asyncValidators[l].url||i,i.indexOf("{value}")>-1?i=i.replace("{value}",encodeURIComponent(t)):o[r.element.getAttribute("name")||r.element.getAttribute("id")]=t;var u=e.extend(!0,n.options||{},O.asyncValidators[l].options);s=e.extend(!0,{},{url:i,data:o,type:"GET"},u),r.trigger("field:ajaxoptions",r,s),a=e.param(s),"undefined"==typeof O._remoteCache&&(O._remoteCache={});var d=O._remoteCache[a]=O._remoteCache[a]||e.ajax(s),h=function(){var t=O.asyncValidators[l].fn.call(r,d,i,n);return t||(t=e.Deferred().reject()),e.when(t)};return d.then(h,h)},priority:-1}),O.on("form:submit",function(){O._remoteCache={}}),l.prototype.addAsyncValidator=function(){return a.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),O.addAsyncValidator.apply(O,arguments)},O.addMessages("en",{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),O.setLocale("en");var I=new n;I.install();var q=O;return q});
jQuery(document).ready(function(e){function a(e,a){l(e,a),e.find(a.container).first().show()}function n(a,n){if(n.tabs){var t=e("<div />",{"class":n.tabMenuClassName}).insertBefore(a.children(n.container).filter(":first"));a.children(n.container).each(function(i,r){var l=e("<button/>").html(e(this).children(n.header).html()).addClass(0==i?n.tabMenuItemActiveClassName:"").addClass("item"+i).addClass("btn btn-default").prop("type","button").on("click keypress",{container:a.children(n.container),fieldset:e(r)},function(){var t=e(this),i=t.parent().children().index(t);s(a,n,t,i)});n.tabIndex&&l.prop("tabindex",i),t.append(l)})}}function t(a,n){n.navigation&&a.children(n.container).each(function(t){var i=e("<div />").addClass("powermail_fieldwrap").addClass("powermail_tab_navigation").appendTo(e(this));t>0&&i.append(c(a,n)),t<a.children(n.container).length-1&&i.append(o(a,n))})}function i(a,n){e.fn.parsley&&"data-parsley-validate"===a.data("parsley-validate")&&a.parsley().subscribe("parsley:field:validated",function(){v(a,n),C(a,n)})}function r(a,n){n.openTabOnError&&e.fn.parsley&&e.listen("parsley:field:error",function(){setTimeout(function(){a.find("."+n.tabMenuClassName+" > ."+n.tabMenuItemErrorClassName+":first").click()},50)})}function s(a,n,t,i){$activeTab=b(a,n),$activeTab.removeClass(n.tabMenuItemActiveClassName),t.addClass(n.tabMenuItemActiveClassName),l(a,n),e(".powermail_fieldset",a).slice(i,i+1).show()}function l(e,a){e.children(a.container).hide()}function c(a,n){return e("<a />").prop("href","#").addClass("btn btn-warning").html("<").click(function(e){e.preventDefault(),u(a,n)})}function o(a,n){return e("<a />").prop("href","#").addClass("btn btn-primary pull-right").html(">").click(function(e){e.preventDefault(),d(a,n)})}function d(e,a){var n=m(e,a);$activeTab=b(e,a),$activeTab.removeClass(a.tabMenuItemActiveClassName).next().addClass(a.tabMenuItemActiveClassName),f(e,a,n+1)}function u(e,a){var n=m(e,a);$activeTab=b(e,a),$activeTab.removeClass(a.tabMenuItemActiveClassName).prev().addClass(a.tabMenuItemActiveClassName),f(e,a,n-1)}function f(e,a,n){l(e,a),e.find(".powermail_fieldset").slice(n,n+1).show()}function m(e,a){var n=p(e,a),t=n.index(b(e,a));return parseInt(t)}function p(e,a){return e.find("."+a.tabMenuClassName).children()}function b(e,a){var n=p(e,a);return n.filter("."+a.tabMenuItemActiveClassName)}function v(e,a){var n=p(e,a);n.removeClass(a.tabMenuItemErrorClassName)}function C(a,n){a.parsley().isValid()||a.find(".parsley-error").each(function(){var t=a.find(".powermail_fieldset").index(e(this).closest(".powermail_fieldset")),i=p(a,n),r=i.slice(t,t+1);r.addClass(n.tabMenuItemErrorClassName)})}e.fn.powermailTabs=function(e){"use strict";var s=jQuery(this);e=jQuery.extend({container:"fieldset",header:"legend",tabs:!0,navigation:!0,openTabOnError:!0,tabIndex:!0,tabMenuClassName:"btn-group",tabMenuItemActiveClassName:"btn-primary",tabMenuItemErrorClassName:"btn-danger"},e),a(s,e),n(s,e),t(s,e),i(s,e),r(s,e)}});
function PowermailForm(e){"use strict";this.initialize=function(){t(),a(),i(),r(),o(),n(),f(),l()};var t=function(){e.fn.powermailTabs&&e(".powermail_morestep").each(function(){e(this).powermailTabs()})},a=function(){e("form[data-powermail-ajax]").length&&p()},i=function(){if(e('*[data-powermail-location="prefill"]').length&&navigator.geolocation){e(this);navigator.geolocation.getCurrentPosition(function(t){var a=t.coords.latitude,i=t.coords.longitude,r=C()+"/index.php?eID=powermailEidGetLocation";jQuery.ajax({url:r,data:"lat="+a+"&lng="+i,cache:!1,success:function(t){t&&e('*[data-powermail-location="prefill"]').val(t)}})})}},r=function(){e.fn.datetimepicker&&e(".powermail_date").each(function(){var t=e(this);if("date"===t.prop("type")||"datetime-local"===t.prop("type")||"time"===t.prop("type")){if(!t.data("datepicker-force")){if(e(this).data("date-value")){var a=g(e(this).data("date-value"),e(this).data("datepicker-format"),t.prop("type"));null!==a&&e(this).val(a)}return}t.prop("type","text"),t.val(e(this).data("date-value"))}var i=!0,r=!0;"date"===t.data("datepicker-settings")?r=!1:"time"===t.data("datepicker-settings")&&(i=!1),t.datetimepicker({format:t.data("datepicker-format"),timepicker:r,datepicker:i,lang:"en",i18n:{en:{months:t.data("datepicker-months").split(","),dayOfWeek:t.data("datepicker-days").split(",")}}})})},o=function(){e(".powermail_all_type_password.powermail_all_value").html("********")},n=function(){e.fn.parsley&&e(".powermail_reset").on("click","",function(){e('form[data-parsley-validate="data-parsley-validate"]').parsley().reset()})},l=function(){window.Parsley&&(x(),b())},p=function(){var t,a=!1;e(document).on("submit","form[data-powermail-ajax]",function(i){var r=e(this),o=r.closest(".tx-powermail");r.data("powermail-ajax-uri")&&(t=r.data("powermail-ajax-uri"));var n=r.data("powermail-form");a||(e.ajax({type:"POST",url:r.prop("action"),data:new FormData(r.get(0)),contentType:!1,processData:!1,beforeSend:function(){s(r)},complete:function(){d(r),f(),c(o)},success:function(i){var o=e('*[data-powermail-form="'+n+'"]:first',i);o.length?(e('*[data-powermail-form="'+n+'"]:first').closest(".tx-powermail").html(o),e.fn.powermailTabs&&e(".powermail_morestep").powermailTabs(),e.fn.parsley&&e('form[data-parsley-validate="data-parsley-validate"]').parsley(),w()):(t?D(t):r.submit(),a=!0)}}),i.preventDefault())})},s=function(t){d(t),e(".powermail_submit",t).length?e(".powermail_submit",t).parent().append(y()):t.closest(".tx-powermail").append(y())},d=function(e){e.closest(".tx-powermail").find(".powermail_progressbar").remove()},c=function(t){var a=e.Event("submitted.powermail.form");t.trigger(a)},f=function(){e(".powermail_fieldwrap_file").find(".deleteAllFiles").each(function(){u(e(this).closest(".powermail_fieldwrap_file").find('input[type="file"]'))}),e(".deleteAllFiles").click(function(){m(e(this).closest(".powermail_fieldwrap_file").find('input[type="hidden"]')),e(this).closest("ul").fadeOut(function(){e(this).remove()})})},u=function(e){e.prop("disabled","disabled").addClass("hide").prop("type","hidden")},m=function(e){e.prop("disabled",!1).removeClass("hide").prop("type","file")},w=function(){e("img.powermail_captchaimage").each(function(){var t=h(e(this).prop("src"));e(this).prop("src",t+"?hash="+v(5))})},h=function(e){var t=e.split("?");return t[0]},v=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<e;i++)t+=a.charAt(Math.floor(Math.random()*a.length));return t},g=function(e,t,a){var i=Date.parseDate(e,t);if(null===i)return null;var r=new Date(i),o=r.getFullYear()+"-";o+=("0"+(r.getMonth()+1)).slice(-2)+"-",o+=("0"+r.getDate()).slice(-2);var n=("0"+r.getHours()).slice(-2)+":"+("0"+r.getMinutes()).slice(-2),l=o+"T"+n;return"date"===a?o:"datetime-local"===a?l:"time"===a?n:null},y=function(){return e("<div />").addClass("powermail_progressbar").html(e("<div />").addClass("powermail_progress").html(e("<div />").addClass("powermail_progess_inner")))},_=function(e){for(var t=e.get(0),a=0,i=0;i<t.files.length;i++){var r=t.files[i];r.size>a&&(a=r.size)}return parseInt(a)},x=function(){window.Parsley.addValidator("powermailfilesize",function(t,a){if(a.indexOf(",")!==-1){var i=a.split(","),r=parseInt(i[0]),o=e('*[name="tx_powermail_pi1[field]['+i[1]+'][]"]');if(o.length&&_(o)>r)return!1}return!0},32).addMessage("en","powermailfilesize","Error")},b=function(){window.Parsley.addValidator("powermailfileextensions",function(t,a){var i=e('*[name="tx_powermail_pi1[field]['+a+'][]"]');return!i.length||k(j(t),i.prop("accept"))},32).addMessage("en","powermailfileextensions","Error")},k=function(e,t){return t.indexOf("."+e)!==-1},j=function(e){return e.split(".").pop().toLowerCase()},D=function(e){e.indexOf("http")!==-1?window.location=e:window.location.pathname=e},C=function(){var t;return t=e("base").length>0?jQuery("base").prop("href"):"https:"!=window.location.protocol?"http://"+window.location.hostname:"https://"+window.location.hostname}}jQuery(document).ready(function(e){"use strict";var t=new window.PowermailForm(e);t.initialize()});
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);
//TEST-Flag; true = Simulation Mobil-Gerät auf Desktop-Browsern
var DISABLE_MOBILE_DETECT = false;
var bodyScrollTop = 0;
var currMouseY;
var SHOW_HEADER_UNTIL_MOUSE_Y = 100;
var SHOW_HEADER_UNTIL_DOC_SCROLL_Y = 0;
var platform; //desk / mobil / desk-xs
var viewport_width = document.documentElement.clientWidth;


function obscureAddMid() {
        document.write('@');
}
function obscureAddEnd() {
        document.write('.');
}

  $( function() {
    $( ".resizable" ).resizable({
       handles: 'e, w',
       minWidth: 400,
       maxWidth: viewport_width-400
    });
  } );
  



   



$(document).ready(function(){

  init();

    //contrast-button   

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  var tstamp = new Date().getTime();
  var lastStored = window.localStorage.getItem("hfbk") || window.sessionStorage.getItem("hfbk") || getCookie('hfbk');
  if(lastStored) { 
    lastStored = JSON.parse(lastStored);
  }
  
  var customColorObj = null;
  
  if(lastStored && (tstamp - lastStored.time) / (1000 * 3600 * 24) < 1) {
        customColorObj = lastStored;
    } else {
        customColorObj = {
            time: tstamp,
           // colr: all_colors[Math.floor(Math.random() * all_colors.length)],
            contrast: 0      
        }

        try {
            window.localStorage.setItem("hfbk", JSON.stringify(customColorObj));
        } catch(e) {
            //alert(e);
        }

        try {
            window.sessionStorage.setItem("hfbk", JSON.stringify(customColorObj));
        } catch(e) {
            //alert(e);
        }

        try {
            setCookie("hfbk", JSON.stringify(customColorObj), 1);
        } catch(e) {
            //alert(e);
        }

    }
  

  if(lastStored && lastStored.contrast === 1) {


         
       $('body').addClass("contrast");
   
   }

    $('.accessibility-switch').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    var stored_data = window.lastStored || JSON.parse( window.localStorage.getItem("hfbk") || window.sessionStorage.getItem("hfbk") || getCookie('hfbk') );

    if(!!stored_data.contrast && stored_data.contrast === 1) {
      stored_data.contrast = 0; 
      if($('body').hasClass("contrast")) {
        $('body').removeClass("contrast");
        $('body').addClass("default");
        console.log('entferne Klasse contrast');
      }
      
    } else {
      stored_data.contrast = 1;
        $('body').addClass("contrast");
        console.log('setze Klasse contrast');
    }

    try {
      window.localStorage.setItem("hfbk", JSON.stringify(stored_data));
    } catch(e) {
      //alert(e);
    }

    try {
      window.sessionStorage.setItem("hfbk", JSON.stringify(stored_data));
    } catch(e) {
      //alert(e);
    }

    try {
      setCookie("hfbk", JSON.stringify(stored_data), 1);
    } catch(e) {
      //alert(e);
    }
  });   

      
    $('form.date-menu').on('submit', function(e) {
        e.preventDefault;
              
        var url = $(this).find('select').val();
        if(url) {
            console.log('    success');
            location.href = url;
        }
        
        return false;
    });

    
    $('.scrollbox').on("resize, scroll",function(){
      if ($('.scrollbox').scrollTop()>150) {
         $('#top-link').addClass('show');


      } else {
        $('#top-link').removeClass('show');
      }
    });


        

  /*menue*/
  /*
  $('.slide').on( "click", function() {
      
      if ($('.menue').hasClass('active')) {
        //$('.dropdown').addClass('panelout');
      //  $('.location-selection').addClass('panelout');
           //   $('.active').addClass('open blubber');
              setTimeout( function() {
                  //$('.active').addClass('open');
              }, 10);
      //  $('.sub_navi').addClass('slide');
      } else {
      
        $('.dropdown').removeClass('panelout');
        $('.location-selection').removeClass('panelout');
      }
      
    });
*/
/*
    $('[data-submenu]').submenupicker();
    

    $('.dropdown .dropdown-button').on( "click", function() {
      if ($('.dropdown').hasClass('panelout')) {
        $('.dropdown').removeClass('panelout').fadeIn(1000);
        $('.location-selection').removeClass('panelout');
        //$('.sub_navi').css( "left","0" );
      } else {
        $('.dropdown').addClass('panelout');
        $('.location-selection').addClass('panelout');
        $(".sub_navi").addClass('slide');
      }
    });


    $('.dropdown-subbutton').on( "click", function() {
      if ($('.dropdown-menu .menue').hasClass('panelout')) {
        $('.dropdown-menu .menue').removeClass('panelout');
        //$('.location-selection').removeClass('panelout');
        if ($('.dropdown').hasClass('open')) {
          $('.dropdown').children('a').css('display', 'block');
        }
        //$('.dropdown').addClass('open');
      } else {
        $('.dropdown-menu .menue').addClass('panelout');
        $('.location-selection').addClass('panelout');
        $(".sub_navi2").addClass('slide');
        if ($('.dropdown').hasClass('open')) {
          $('.dropdown').children('a').css('display', 'none');
        }
      }
    });  
*/
  /*fancy*/
  $('.fancybox').fancybox({
      loop     : true,
      caption : function( instance, item ) {
        return $(this).find('img').attr('title');
      }      
  });

/* Suche ein- ausblenden*/
  $('#searchbutton').on( "click", function() {
    $("#suchbox").toggle("slide");
    $('#ke_search_searchfield_sword').focus();
  })  
  $('.searchbox-button').on( "click", function() {
    $('#suchbox').hide();
  })


/*Suchfeld bei Eingabe ausdehnen*/
var initialWidth = $("#ke_search_searchfield_sword").width();
$("#ke_search_searchfield_sword").keydown( function(event) {
   var charWidth = 8.5;
   var elemwidth = $(this).val().length*charWidth;
   if ($(this).width() < elemwidth)
   {   
       $(this).width(elemwidth);
       
   } else {
       //$(this).width(initialWidth );
   }


});

//resize flexslider in accordion
$('.card-collapse').on('shown.bs.collapse', function(e) {
  var picslider = $('.flexslider').data('flexslider'); 
  picslider.resize();
});

//link-klasse je nach fileextension setzen
$("a").each(function(){
    var match = this.href.match(/\.([a-zA-Z0-9]{2,4})([#;?]|$)/);
    if(match){
        if(match[1]!="pdf") {
          $(this).addClass("linkIcon-" + match[1]);                  
        }
        else $(this).addClass("linkIcon-" + match[1]);        
    }
});

$('.panel-collapse').on('shown.bs.collapse', function(e) {
    var $panel = $(this).closest('.panel');
    $('html,body').animate({
      scrollTop: $panel.offset().top-95
    }, 800);
  });



        /**
         * toggle list view for person register
         */

        $('.switch_view-wrapper').on('click', 'button', function(e){

            e.stopPropagation();
            e.preventDefault();
            
            if($('.person-register').length) {
              var id = $('.person-register').first().data('id');
  
              var stored_data = window.lastStored || JSON.parse( window.localStorage.getItem(id));
              if(!stored_data) {
                stored_data = {};
              }
  
              if(!!stored_data.personregisterview && stored_data.personregisterview === "list") {
                  stored_data.personregisterview = "vcard";
              } else {
                  stored_data.personregisterview = "list";
              }
                
                $('.person-register h3').each(function(i,elem) {
                    $(elem).children('a, span').text( $(elem).data(stored_data.personregisterview) );
                });
  
              $('.person-register').attr('data-view', stored_data.personregisterview);
              $('button.switch_view').attr('data-view', stored_data.personregisterview);
  
              window.localStorage.setItem(id, JSON.stringify(stored_data));
            }
        });



        /**
         * select a category to filter register of persons
         */

        var filtered_categories = [];
        var removeValueFromArray = function(array, value) {
            var found;
            while ((found = array.indexOf(value, found)) !== -1) {
                array.splice(found, 1);
            }
            return array;
        };

        $('.category-wrapper').on('click', '.dropdown-menu a', function(e) {

            e.stopPropagation();
            e.preventDefault();

//            console.log("~~~~~ filter clicked");

            var $clicked = $(this);
            var category = $clicked.data('value');
            var select = $clicked.closest('.dropdown').data('index');


            
            /* deactivate other filters --- start */
            $('#person-search').val('').trigger('change');
            $('.category-wrapper button, #person-search').removeClass('active');
            $clicked.closest('.dropdown-menu').prev('button').addClass('active');
            $('.category-wrapper button:not(.active) + .dropdown-menu a.option.selected:not(.all)').each(function(i, option) {
                var cat = $(option).data('value');
                var sel = $(option).closest('.dropdown').data('index');
                filtered_categories[sel] = removeValueFromArray(filtered_categories[sel], cat);
                $(option).removeClass('selected');
            });
            /* deactivate other filters --- end */



            if($clicked.hasClass('selected')) {

                if($clicked.hasClass("all")) {
                    $clicked.closest('.dropdown-menu').find('a.option.selected').trigger('click');

                } else {
//                    var $all_link = $clicked.closest('.dropdown-menu').find('a.all');
//                    if($all_link.hasClass('selected')) {
//                        $all_link.removeClass('selected');
//                        filtered_categories = filterByCategory(filtered_categories, "0");
//                    }
                    $clicked.closest('.dropdown-menu').find('a.all.selected').removeClass('selected');
                    filtered_categories[select] = removeValueFromArray(filtered_categories[select], category);
                }

                $clicked.removeClass('selected');

            } else {

                if($clicked.hasClass("all")) {
                    $clicked.closest('.dropdown-menu').find('a.option:not(.selected)').trigger('click');

                } else {
                    if(!!filtered_categories[select] === false) {
                        filtered_categories[select] = [];
                    }
                    filtered_categories[select].push(category);
                }

                $clicked.addClass('selected');
                if($clicked.closest('.dropdown-menu').find('a.option:not(.selected)').length === 0) {
                    $clicked.closest('.dropdown-menu').find('a.all').addClass('selected');
                }

            }

            var new_label = $clicked.closest('.dropdown-menu').find('a.option.selected').map(function() { return $(this).text(); }).get().join(', ');

//            console.log("~~~~~ filtering for", filtered_categories);
//            console.log("      ", new_label);

            var merged = [].concat.apply([], filtered_categories).join("");

//            console.log("      merged =", merged);

            if(merged.length) {
                $('.news-list-view .news-list-item')
                    .addClass('hidden-by-category')
                    .filter( function(index) {
                        for (var key in filtered_categories) {
                            var filter_cat = filtered_categories[key];
                            var found = false;

                            if(filter_cat.length) {
    //                            console.log("~~~~~ comparing item:", filter_cat, $(this).data('categories'));
                                for (var index in filter_cat) {
                                    var filter_cat_item = filter_cat[index];
                                    var filter_regex = new RegExp("(--|^)" + filter_cat_item + "(--|$)");
//                                    console.log('~~~~~ filter:', filter_regex, $(this).data('categories'));
//                                    if($(this).data('categories').indexOf(filter_cat_item) !== -1) {
                                    if($(this).data('categories').match(filter_regex)) {
                                        found = true;
                                        break;
                                    }
                                }

                                if(!found) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    })
                    .removeClass('hidden-by-category');
            
            } else {
                $('.news-list-view .news-list-item').removeClass('hidden-by-category');
                
            
                /* deactivate other filters --- start */
                $clicked.closest('.dropdown-menu').prev('button').removeClass('active');
                /* deactivate other filters --- end */
            }
        });



        /**
         * filter register of persons according to search input
         */

        var $personSearch = $('#person-search');
        if($personSearch.length) {

            /* Save current value of element */
            $personSearch.data('oldVal', $personSearch.val());

            /* Look for changes in the value */
            $('#person-search').on('propertychange change click keyup input paste', function() {

                /* If value has changed... */
                var new_val = $personSearch.val();
                if ($personSearch.data('oldVal') != new_val) {
            
            
                    /* deactivate other filters --- start */
                    $('.category-wrapper button').removeClass('active');
                    $('.category-wrapper .dropdown-menu a.option.selected').each(function(i, option) {
                        var cat = $(option).data('value');
                        var sel = $(option).closest('.dropdown').data('index');
                        filtered_categories[sel] = removeValueFromArray(filtered_categories[sel], cat);
                        $(option).removeClass('selected');
                    });
                    $('.person-register .news-list-item').removeClass('hidden-by-category');
                    $('#person-search').addClass('active');
                    /* deactivate other filters --- end */
            
            

                    /* Updated stored value */
                    $personSearch.data('oldVal', new_val);

                    /* Do action */
                    if(new_val.length) {
                    $('.person-register .news-list-item')
                        .addClass('hidden-by-search')
                        .filter(function(index, elem) {
                            var content = $(elem).html()
                                            .toLowerCase()
                                            .replace(/\<.*?\>/g, " ") // replace all tags including their attributes with whitespace
                                            .replace(/[\r\n]+/g, " ") // replace all line breaks with whitespace
                                            .replace(/\s+/g, " ") // replace all kinds of (multiple) whitespaces with a single default whitespace
                                            .replace(/[^0-9a-z\u0080-\u00FF ]+/g, ""); // strip all non default unicode alphanumeric characters

//                            console.log("~~~~~ item:", $(elem).text());

                            var found = false;
                            $.each(new_val.toLowerCase().split(","), function(i, val) {
                                var search = val.trim();
//                                console.log("~~~~~ filter:", content, search, content.indexOf(search));
                                if(search.length && content.indexOf(search) > -1) {
                                    found = true;
                                    return true;
                                }
                            });
                            return found;
                        })
                        .removeClass('hidden-by-search');

                    } else {
                        $('.person-register .news-list-item').removeClass('hidden-by-search');
                    }
                }
            });
        }


        /**
         * add capital letter anchors to person register list view
         */
        
        if( $('.switch_view-wrapper').length > 0 ) {
            
//            console.info('found switch_view-wrapper');
            
            $('button.switch_view').attr('data-view', $('.person-register').first().data('view') );
            
            var person_letters = [];
            var $person_list = $('foobar');

            $('.person-register .news-list-item h2').each( function(i, elem) {

                if(!$person_list.length) {
                    $person_list = $(elem).closest('.news.persons');
                }

                var firstChar = $(elem).data('list');
                firstChar = firstChar.substr(0, 1);

                if($.inArray(firstChar, person_letters) == -1) {
                    person_letters.push(firstChar);
                    $('<span />', {
                        'id' : "letter_" + firstChar
                    }).insertBefore($(elem));
                }
            });

            if(person_letters.length >= 1) {

                $person_list.prepend( $('<div />', {
                    'class' : "col-xs-12 letter-anchors"
                }));
                $person_list.append( $('<div />', {
                    'class' : "col-xs-12 letter-anchors"
                }));
                for(var i in person_letters) {
                    $('<a />', {
                        'class' : "btn btn-default letter-anchor",
                        'html' : person_letters[i],
                        'href' : '//' + location.host + location.pathname + location.search + "#letter_" + person_letters[i]
                    }).appendTo('.letter-anchors')
                }
            }
        }

/*scroll to element with anchor*/
$(document).on("click","a.site-anchor, a.letter-anchor",function(e){  
if ($(this).attr('href').match('#')){
  event.preventDefault();

  $('.scrollbox').animate({
            scrollTop: $("#"+$(this).attr('href').split('#')[1]).offset().top-100
            }, 1200);  


    /*$("#content").mCustomScrollbar("scrollTo",$("#"+$(this).attr('href').split('#')[1]));
      
    if ($(("#content").mCustomScrollbar("scrollTo",$("#heading"+$(this).attr('href').split('#')[1])).length)) {
       $("#content").mCustomScrollbar("scrollTo",$("#heading"+$(this).attr('href').split('#')[1]).substring(1));
    }

    */
}
  
});

//opens link with pdf in new window
$(function() {
    $('a[href$=".pdf"]').prop('target', '_blank');
    $('a[href$=".html"]').prop('target', '_blank');
});

/*$("a.site-anchor, a.letter-anchor").click(function( event) {  
if ($(this).attr('href').match('#')){
  event.preventDefault();
  $("#content").mCustomScrollbar("scrollTo",$("#"+$(this).attr('href').split('#')[1]));
}
});

$("a.crosssite-anchor").click(function( event) {  
if ($(this).attr('href').match('#')){  
  $("#content").mCustomScrollbar("scrollTo",$("#"+$(this).attr('href').split('#')[1]));
  $('html,body').animate({
          scrollTop: $("#"+$(this).attr('href').split('#')[1]).offset().top
          }, 800);  
}
});
*/

/*
  // Opening accordion based on URL and scroll into view
  var url = document.location.toString();

  if ( url.match('#') ) {
      
      var $anchor = $('#'+url.split('#')[1]);
      
      //normaler anker
      $("#content").mCustomScrollbar("scrollTo",$anchor);

     /*$('html,body').animate({
          scrollTop: $anchor.offset().top-100
        }, 800);*/
  /*} else {
    //console.log('not');
    $("#main-content .panel-collapse").each(function(index, element){
      $(element).addClass(index == 0 ? "in" : "");
    }); 
  }
  */


})



window.addEventListener("load", function(){
  
  //remove switch_view-wrapper
  $('.switch_view-wrapper').remove();
    
  
  //doppelte IDs in CE der Accordions beheben

  $('.collapse .card-body div').each(function(){
    if(this.id){
    this.id = "card-"+this.id;
    }
  });  
  

 /*breiter flexslider-content*/
 $('.wsflexslider-style2').closest('.flexslider').find('.flex-direction-nav').addClass('style2');


  //scroll to top Button
  $( "#content" ).append( '<a id="top-link"></a>' );
  var topbtn = $('#top-link');

 $('#top-link').on('click',function () {
                   
            $('.scrollbox').animate({
                scrollTop: 0
            }, 1000);
          }); 


/*
  topbtn.on('click', function(e) {
    e.preventDefault();
    $("#content").mCustomScrollbar("scrollTo", "top");
  });  
*/


if (location.hash) {
  //$("#content").mCustomScrollbar("scrollTo",location.hash);
 
 $('.scrollbox').animate({
            scrollTop: $(''+location.hash+'').offset().top-100
            }, 1200);        
  }

});


function init() {

    checkPlatform();

  if($(window).width() > 767) {
  
  }   

    /*$('#main-content .row .default').addClass("content-hidden").viewportChecker({
        classToAdd: 'content-visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 0    
    });   
    */

}

function checkPlatform () {

    platform = "desk";

    if(!DISABLE_MOBILE_DETECT){

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            platform = "mobil";

            if (window.innerWidth <= 768) {              
              //$("#content").mCustomScrollbar("destroy");
            }
        }else{
            if (window.innerWidth < 768) {
                platform = "desk-xs";
            }
        }
    }else{
        platform = "mobil";
    }

    $('html').removeClass().addClass(platform);

}



window.pers_reg_view = "";

;(function(window, document) {
//	console.log($('.person-register').first().data('id'));
	
	if($('.person-register').length) {
		var id = $('.person-register').first().data('id');

		var stored_data = window.lastStored || JSON.parse( window.localStorage.getItem(id));
		if(!stored_data) {
        	stored_data = {};
        }
	    var last_personregisterview = $('.person-register').first().data('view');

	    if(!!stored_data && stored_data.personregisterview) {
	        last_personregisterview = stored_data.personregisterview;
	    } else {
//	    	stored_data = {};
	        stored_data.personregisterview = last_personregisterview
	        window.localStorage.setItem(id, JSON.stringify(stored_data));
	    }

	    var pers_reg_view = document.createAttribute("data-view");
	        pers_reg_view.value = last_personregisterview;

	    window.pers_reg_view = pers_reg_view
	}
	

}(window, document));