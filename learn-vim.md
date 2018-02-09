## start you show
##  Basics of vim modes 常用的指令
### i进入到insert模式
>> 编辑文件以后保存并退出的指令
* ZZ
* esc退出:wq
* esc推迟:wq!
>> 编辑文件不保存退出
* ecs :q!
>> w! 保存并没有退
### normal 模式下
>> 普通模式下 k:光标定位到上一行 j:光标定位到下一行 
>> w:跳到下一个单词 
>> b:跳到上一个或者之前的单词
>> 10j: 数字+方向指令 光标跳到多行,例如10j: 往下跳十行
### To have absolute line numbering
>> 设置是否显示文件每一行的行数
* :set number 设置显示行数
* :set nonumber 设置不显示行数 
### To have relative line numbering
* :set relativenumber
* :set norelativenumber
