//  把整个请求封装成 只接受一个对象参数的函数 暴露出去
export default (params: any)=>{
	//  判断对象参数是否有效
	if((params instanceof Object) == false){
		console.log('参数错误，应该传入对象')
		return
	}
	let url: string = params.url
	let method: any = params.method
	let data: {string: any} = params.data
	let header: {} = params.header || {};
	let timeout: number = params.timeout || 12000
	let dataType: string = params.dataType || 'json'
	let responseType: string = params.responseType || 'text'  //  响应的数据类型
	let sslVerify: boolean = params.sslVerify || false  //  验证 ssl 证书
	let withCredentials: boolean = params.withCredentials || false  //	跨域请求时是否携带凭证（cookies）
	//	请求方式 GET POST
	if	(method) {
		method = method.toUpperCase();	//	小写转大写
		if (method == "POST") {
			header = {"content-type":"application/x-www-form-urlencoded"}
		}
	}
	//	发起请求 加载动画
	if (!params.hideLoading){
		uni.showLoading({
			title:"加载中"
		})
	}
		//	发起网络请求
		uni.request({
			url:url,
			method:method || "GET",
			data:data,
			header:header,
			timeout: timeout,
			dataType: dataType,
			responseType: responseType,
			sslVerify: sslVerify,
			withCredentials: withCredentials,
			success: (res: any) => {
				if	(res.statusCode && res.statusCode != 200){
					//	api错误
					uni.showModal({
						content:res.msg
					})
					return;
				}
				typeof params.success == "function" && params.success(res.data);
			},
			fail: (err: any) => {
				uni.showModal({
					content:err.msg
				})
				typeof params.fail == "function" && params.fail(err.data);
			},
			complete: (e: any) => {
				console.log("请求完成");
				uni.hideLoading()
				typeof params.complete == "function" && params.complete(e.data);
				return;
			}
		})
}