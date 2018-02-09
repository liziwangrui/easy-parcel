# easy-parcel
## how to install
```
npm install parcel-bundler --save-dev
``` 
## how to init project && start
```
npm init -y && touch index.html && touch index.js
```
## edit your index.html && index.js
点击看截图[index.html](https://github.com/liziwangrui/easy-parcel/blob/master/images/indeHtml.png)
点击看截图[index.js](https://github.com/liziwangrui/easy-parcel/blob/master/images/indexJs.png)
## package.json
点击看截图[package.json](https://github.com/liziwangrui/easy-parcel/blob/master/images/3.png)
## run npm start
点击看截图[npm start](https://github.com/liziwangrui/easy-parcel/blob/master/images/parce2%402x.png)
## 生产环境的构建 需且仅需要你在package.json文件中添加这么一行
```
"scripts": {
  "build": "parcel build index.js"
}
```
>> 当然你也可以指定打包路径
