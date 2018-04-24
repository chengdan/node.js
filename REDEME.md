# node.js简单爬取内容实现

- 检查是否安装了nodeJs
    ```
    node -v
    (如果没有显示安装的话先按照node)
    ```

- 生成package.json文件
    1.  直接手动生成
    ```json
    {
      "name": "04.23",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "cheerio": "0.12.3",
        "iconv-lite": "^0.4.21",
        "request": "2.27.0"
      }
    }
    ```
    2. 使用命令行 
    ```
    npm init   
    ```
    
- 生成index.js文件（或其它文件名也可以）

- 下载依赖包（request，cheerio，iconv-lite）
     1. request用来发送请求  
     2. cheerio类似jQuery，方便操作数据       
     3. iconv-lite解决乱码问题
     
    ```
    npm install request cheerio iconv-lite -s
    ```
    
- 在生成的index.js文件中引入包

- 使用request发送请求，将需要抓取数据的地址写入

# 注意（并解决乱码问题）：

- request发送请求的对象中encoding: null一点要写，否则页面会乱码
- let html = iconv.decode(body, 'gb2312')解决乱码问题
- $ = cheerio.load(html, {decodeEntities: false})使用$符合进行操作

# 运行

- 通过命令行 node index.js 运行

### 存储数据

- 最后将数据存储到数据库中（我这里没有安装，等后期完善再写上去）


#### 如果我写的有什么问题还希望大家指出，谢谢！