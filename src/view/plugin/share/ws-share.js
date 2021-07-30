
// (function(){
//     "use strict";

//     var $doc = $(document);
//     var shareHandlers = {
//         'twitter': function(prop,shareUrl){
//             var D=550,A=450,C=screen.height,B=screen.width,H=Math.round((B/2)-(D/2)),G=0;
//             if(C>A){G=Math.round((C/2)-(A/2))}
//             window.open(shareUrl,'','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
//         },
//         'facebook': function(prop,shareUrl){
//             var D=550,A=450,C=screen.height,B=screen.width,H=Math.round((B/2)-(D/2)),G=0;
//             if(C>A){G=Math.round((C/2)-(A/2))}
//             window.open(shareUrl,'','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
//         },
//         'googleplus': function(prop,shareUrl){
//             var D=600,A=460,C=screen.height,B=screen.width,H=Math.round((B/2)-(D/2)),G=0;
//             if(C>A){G=Math.round((C/2)-(A/2))}
//             window.open(shareUrl, 'Share to Google+','left='+H+',top='+G+',width='+D+',height='+A+',menubar=no,location=no,status=no');
//         },
//         'weibo': null,
//         'tencentweibo': null,
//         'qzone': null
//     }
    
//     $doc.on('click', '[ws-share-type]', shareClickHandler);
//     function shareClickHandler(e){
//         let type = e.currentTarget.getAttribute("ws-share-type"),
//         props = {
//             img: "https://picsum.photos/1920/108",
//             title: "$target.data('title')",
//             description: "$target.data('description')",
//             url: "http://wdesign.pageswx.cn/WSCodex/index.html?brand=wondershare",
//             docTitle: document.title,
//             tag:"tagTest"
//         }
        
//         let shareUrl = getShareUrl(type, props);

//         if(shareHandlers[type]){
//             shareHandlers[type](props,shareUrl);
//         }else{
//             window.open(shareUrl, '', '');
//         }
//     }
//     function getShareUrl(type, origin_props){
//         let url = ''
//         switch(type){
//             case 'facebook'://
//                 // url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fsharing%2Fweb%2F&display=popup&ref=plugin&src=like&kid_directed_site=0&app_id=113869198637480"
//                 url = 'https://www.facebook.com/sharer/sharer.php?u='+ origin_props.url + "&title=" + origin_props.title + "&image=" + origin_props.img + "&hashtag=" + origin_props.tag;
//             break;
//             case 'twitter'://推特
//                 url = '//twitter.com/intent/tweet?url='+ origin_props.url +'&text='+ origin_props.description;
//             break;
//             case 'youtube'://youtube
//                 url = '//twitter.com/intent/tweet?url='+ origin_props.url +'&text='+ origin_props.description;
//             break;
//             case 'instagram'://instagram
//                 url = '//twitter.com/intent/tweet?url='+ origin_props.url +'&text='+ origin_props.description;
//             break;
//             case 'pinterest'://
//                 url = 'https://plus.google.com/share?url='+ origin_props.url;
//             break;
//             case 'gmail'://
//                 url = 'https://plus.google.com/share?url='+ origin_props.url;
//             break;

//             case 'linkedin'://领英
//                 url = 'https://plus.google.com/share?url='+ origin_props.url;
//             break;
//             case 'tumblr'://
//                 url = 'https://plus.google.com/share?url='+ origin_props.url;
//             break;
//             case 'sinaweibo'://新浪微博
//                 url = 'http://service.weibo.com/share/share.php?url='+ origin_props.url +'&title='+ origin_props.title +' '+ origin_props.description +'&pic='+ origin_props.img +'&searchPic=false';
//             break;
//             case 'tencentweibo'://腾讯微博
//                 url = 'http://share.v.t.qq.com/index.php?c=share&a=index&url='+ origin_props.url +'&title='+ origin_props.description +'&pic='+ origin_props.img;
//             break;
//             case 'qzone'://qq 空间
//                 url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ origin_props.url +'&title='+ origin_props.docTitle +'&summary='+ origin_props.description +'&pics='+ origin_props.img;
//             break;
//             case 'qq'://qq 好友
//                 url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ origin_props.url +'&title='+ origin_props.docTitle +'&summary='+ origin_props.description +'&pics='+ origin_props.img;
//             break;
//             case 'wechatfriends'://微信好友
//                 url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ origin_props.url +'&title='+ origin_props.docTitle +'&summary='+ origin_props.description +'&pics='+ origin_props.img;
//             break;
//             case 'wechatmoments'://微信朋友圈
//                 url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ origin_props.url +'&title='+ origin_props.docTitle +'&summary='+ origin_props.description +'&pics='+ origin_props.img;
//             break;
//             case 'bilibili'://b站
//                 url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ origin_props.url +'&title='+ origin_props.docTitle +'&summary='+ origin_props.description +'&pics='+ origin_props.img;
//             break;
            
            
//         }
//         return url;
//     }
    
// })();