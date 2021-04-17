/**
 * @description
 * @author RayJason
 * @date 2021/04/15
 * @param {*} sUrl 链接
 * @param {*} sKey 参数名
 * @return {*} 
 */
function getUrlParam(sUrl, sKey) {
  var result,
    sParam = {}
//   console.log(sUrl.match(/[\?&]?(\w+)=(\w+)/g))
  sUrl.replace(/[\?&]?(\w+)=(\w+)/g, (k0, k1, k2) => {
    sParam[k1] === void 0
      ? (sParam[k1] = k2)
      : (sParam[k1] = [].concat(sParam[k1], k2))
  })
  sKey === void 0 || sKey === ''
    ? (result = sParam)
    : (result = sParam[sKey] || '')
  return result
}

function getUrlParam1(sUrl,sKey){
	var result = {};
	sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
		if(result[k] !== void 0){
			result[k] = [].concat(result[k],v);
		}else{
			result[k] = v;
		}
	});
	if(sKey === void 0){
		return result;
	}else{
		return result[sKey] || '';
	}
}

// 占用内存最小 最快
function getUrlParam2(sUrl, sKey) {
    var r=/(\?|&)(\w+)\=(\w+)/g;
    var res={};
    // console.log(r.exec(sUrl))
    while(r.exec(sUrl)!=null){
        console.log(RegExp.$1)
        if(res[RegExp.$2]){
            var temp=res[RegExp.$2];
            res[RegExp.$2]=[].concat(temp,RegExp.$3)
        }else{
            res[RegExp.$2]=RegExp.$3;
        }
        console.log('res:',res)
    }
    if(sKey) {
        return res[sKey]||'';
    }
    return res;
 }

console.log(
  getUrlParam2('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe', 'key')
)
