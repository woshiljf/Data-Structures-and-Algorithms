/**
 * webpack常用的配置
 * entry
 * 
 * output
 * 
 * moudule: {
 *  
 *   rules:[
 * 
 * 
 *   ]
 *  
 * 
 *  
 *  
 * }
 * 
 * resolve
 * 
 * deserver
 * 
 *  // 自动分析多入口的chunk中，有没有公共的文件，如果有会单独打包成一个chunk
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
 * 
 * 
 * 
 * 
 * 
 */