(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{240:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"学习-c-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习-c-基础"}},[t._v("#")]),t._v(" 学习 [c++基础]")]),t._v(" "),a("h2",{attrs:{id:"一-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-数据类型"}},[t._v("#")]),t._v(" 一.数据类型")]),t._v(" "),a("h3",{attrs:{id:"整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[t._v("#")]),t._v(" 整型")]),t._v(" "),a("ul",[a("li",[t._v("short 短整型     2字节 (-32768 ~ 32767)")]),t._v(" "),a("li",[t._v("int 整型            4字节")]),t._v(" "),a("li",[t._v("long 长整型       4字节")]),t._v(" "),a("li",[t._v("long long 长长整型         8字节")])]),t._v(" "),a("h3",{attrs:{id:"sizeof关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sizeof关键字"}},[t._v("#")]),t._v(" sizeof关键字")]),t._v(" "),a("p",[t._v("作用：可以统计数据类型所占的内存大小")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include<iostream>\nusing namespace std;\n\nint main()\n{\n    short num1 = 10;\n\n    cout << "short所占的内存大小为：" << sizeof(num1) << endl;\n    system("pause");\n    return 0;\n}\n')])])]),a("h3",{attrs:{id:"浮点型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点型"}},[t._v("#")]),t._v(" 浮点型")]),t._v(" "),a("ul",[a("li",[t._v("float  4字节       7位有效数字")]),t._v(" "),a("li",[t._v("double  8字节    16位有效数字")])]),t._v(" "),a("h3",{attrs:{id:"字符型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符型"}},[t._v("#")]),t._v(" 字符型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("char")])]),t._v(" "),a("li",[a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])])]),t._v(" "),a("h3",{attrs:{id:"转义字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转义字符"}},[t._v("#")]),t._v(" 转义字符")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("转义字符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("警报")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\b")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("退格")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("换页")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("换行")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\r")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("回车")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("水平制表")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一个反斜线字符")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"字符串型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串型"}},[t._v("#")]),t._v(" 字符串型")]),t._v(" "),a("p",[t._v("c：")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('char name[] = "sunwukong";\n')])])]),a("p",[t._v("c++：")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('string str = "hello world";\n')])])]),a("p",[t._v("注意：再用string定义字符串时，要引入头文件")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#include <string>\n")])])]),a("h3",{attrs:{id:"数据的输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据的输入"}},[t._v("#")]),t._v(" 数据的输入")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("cin >>")])]),t._v(" "),a("li",[a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('int main()\n{   \n    //1.整形\n    int a = 0;\n    cout << "请给整形a赋值：" << endl;\n    cin >> a;\n    cout << a << endl;\n\n    //2.浮点型\n    float f = 3.14f;\n    cout << "请给浮点型变量f赋值:" << endl;\n    cin >> f;\n    cout << f << endl;\n\n    system("pause");\n    return 0;\n}\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"二-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-运算符"}},[t._v("#")]),t._v(" 二. 运算符")]),t._v(" "),a("h3",{attrs:{id:"算数运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算数运算符"}},[t._v("#")]),t._v(" 算数运算符")]),t._v(" "),a("p",[t._v("+，-，*，/, %")]),t._v(" "),a("p",[a("em",[t._v("注意：两个整数相除依然是整数，将小数部分自动去除")])]),t._v(" "),a("p",[a("em",[t._v("注意：%取模运算时，两个小数不能做取模运算")])]),t._v(" "),a("p",[t._v("前置递增： ++a 先让变量加一，在进行表达式运算")]),t._v(" "),a("p",[t._v("后置递增： a++ 先进行表达式运算，后让变量加一")]),t._v(" "),a("h3",{attrs:{id:"赋值运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值运算符"}},[t._v("#")]),t._v(" 赋值运算符")]),t._v(" "),a("p",[t._v("+=，-=，*=，/=，%=")]),t._v(" "),a("h3",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[t._v("#")]),t._v(" 比较运算符")]),t._v(" "),a("h3",{attrs:{id:"逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[t._v("#")]),t._v(" 逻辑运算符")]),t._v(" "),a("p",[t._v("！， && ，||")]),t._v(" "),a("h2",{attrs:{id:"三-程序流程结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-程序流程结构"}},[t._v("#")]),t._v(" 三.程序流程结构")]),t._v(" "),a("h3",{attrs:{id:"三目运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三目运算符"}},[t._v("#")]),t._v(" 三目运算符")]),t._v(" "),a("p",[t._v("在c++中 三目运算返回的是一个变量，可以直接赋值")]),t._v(" "),a("h3",{attrs:{id:"switch语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch语句"}},[t._v("#")]),t._v(" switch语句")]),t._v(" "),a("div",{staticClass:"language-C++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include<iostream>\nusing namespace std;\n\nint main() {\n\n\tint score = 0;\n\tcout << "请输入您的评分" << endl;\n\tcin >> score;\n\n\tswitch (score) {\n\tcase 10:\n\t\tcout << "您认为电影非常好" << endl;\n\tcase 9:\n\t\tcout << "您认为电影非常好" << endl;\n\tcase 8:\n\t\tcout << "您认为电影一般" << endl;\n\tcase 7:\n\t\tcout << "您认为电影一般" << endl;\n\tcase 6:\n\t\tcout << "您认为电影比较差" << endl;\n\tcase 5:\n\t\tcout << "您认为电影比较差" << endl;\n\tdefault:\n\t\tcout << "您认为这是烂片" << endl;\n\t}\n\tsystem("pause");\n\treturn 0;\n')])])]),a("p",[a("em",[t._v("注意：switch判断时只能是整形或者字符型，不可以是一个区间")])]),t._v(" "),a("h3",{attrs:{id:"while循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#while循环"}},[t._v("#")]),t._v(" while循环")]),t._v(" "),a("p",[t._v("猜数字游戏")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include<iostream>\nusing namespace std;\n#include <ctime>\n\nint main() {\n\t// 添加随机数种子，利用系统时间生成随机数，防止每次生成的数字都一样\n\tsrand((unsigned int)time(NULL));\n\n\tint num1 = rand()%100 + 1;\n\tint num2 = 0;\n\twhile (num1 != num2) {\n\t\tcout << "请输入一个1 到 100 的数字" << endl;\n\t\tcin >> num2;\n\t\tif (num2 > num1) {\n\t\t\tcout << "您猜大了" << endl;\n\t\t}\n\t\telse if (num2 < num1)\n\t\t{\n\t\t\tcout << "您猜小了" << endl;\n\t\t}\n\t\telse {\n\t\t\tcout << "恭喜您，猜对了" << endl;\n\t\t\tbreak;\n\t\t}\n\t}\n\tsystem("pause");\n\t\treturn 0;\n')])])]),a("h4",{attrs:{id:"do-while"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-while"}},[t._v("#")]),t._v(" do...while")]),t._v(" "),a("p",[t._v("先执行一次循环，再判断条件")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int num = 0;\n\tdo\n\t{\n\t\tcout << num << endl;\n\t\tnum++;\n\t} while (num <= 9)\n")])])]),a("h3",{attrs:{id:"for循环语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for循环语句"}},[t._v("#")]),t._v(" for循环语句")]),t._v(" "),a("p",[t._v("满足循环条件，执行循环语句")]),t._v(" "),a("h3",{attrs:{id:"嵌套循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套循环"}},[t._v("#")]),t._v(" 嵌套循环")]),t._v(" "),a("p",[t._v("打印九九乘法表")]),t._v(" "),a("div",{staticClass:"language-C++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\tfor (int i = 1; i < 10; i++) {\n\t\tfor (int j = 1; j <= i; j++) {\n\t\t\tcout << j << "*" << i << "=" << j * i << " ";\n\t\t}\n\t\tcout << endl;\n\t}\n')])])]),a("p",[t._v("![553d42e8e431ab26a24818eb66067b4](C:\\Users\\JINSHE~1\\AppData\\Local\\Temp\\WeChat Files\\553d42e8e431ab26a24818eb66067b4.png)")]),t._v(" "),a("h3",{attrs:{id:"countinue语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#countinue语句"}},[t._v("#")]),t._v(" countinue语句")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int main() {\n\n\tfor (int i = 0; i <= 100; i++) {\n\t\tif (i % 2 == 0) {\n\t\t\tcontinue;// 可以筛选条件，执行到此就不在向下执行，执行下一次循环\n\t\t}\n\t\tcout << i << endl;\n\t}\n")])])]),a("h3",{attrs:{id:"goto语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goto语句"}},[t._v("#")]),t._v(" goto语句")]),t._v(" "),a("p",[t._v("无条件地跳转代码")]),t._v(" "),a("p",[t._v("如果标记名称存在，执行到goto语句时，会跳转到标记的位置")]),t._v(" "),a("h2",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("ul",[a("li",[t._v("特点：数组中的每个数据元素都是相同的数据类型")]),t._v(" "),a("li",[t._v("特点：数组是由连续的内存位置组成的")])]),t._v(" "),a("h3",{attrs:{id:"定义方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义方法"}},[t._v("#")]),t._v(" 定义方法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("数据类型 数组名[ 数组长度 ]；")])]),t._v(" "),a("li",[a("p",[t._v("数据类型 数组名[ 数组长度 ] = {值1， 值2 ......}")])]),t._v(" "),a("li",[a("p",[t._v("数据类型 数组名[ ] = { 值1， 值2， .....}")]),t._v(" "),a("p",[a("em",[t._v("注意，如果在初始化数据时没有全部填写完，会用零来填补剩余的数据")])])])]),t._v(" "),a("h3",{attrs:{id:"数组名作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组名作用"}},[t._v("#")]),t._v(" 数组名作用")]),t._v(" "),a("ul",[a("li",[t._v("可以统计整个数组在内存中的长的")]),t._v(" "),a("li",[t._v("可以获取数组在内存中的首地址")])]),t._v(" "),a("p",[t._v("![c731f419a5fdb4adbcc322ca593b038](C:\\Users\\JINSHE~1\\AppData\\Local\\Temp\\WeChat Files\\c731f419a5fdb4adbcc322ca593b038.png)")]),t._v(" "),a("h3",{attrs:{id:"冒泡排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[t._v("#")]),t._v(" 冒泡排序")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("以下是排列一个整型数组的 冒泡排序代码：")])])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include<iostream>\nusing namespace std;\n\nint main()\n{\n\tint arr[9] = { 4,2,8,0,5,7,1,3,9 };\n\tint end = sizeof(arr) / sizeof(arr[0]) - 1;\n\tfor (int i = 0; i <= end; i++) {\n\t\tcout << arr[i] << " ";\n\t}\n\tcout << endl;\n\n\n\tfor (int i = 0; i < end; i++) {\n\t\tfor (int j = 0; j < end - i; j++) {\n\t\t\tif (arr[j] > arr[j + 1]) {\n\t\t\t\tint temp = arr[j];\n\t\t\t\tarr[j] = arr[j + 1];\n\t\t\t\tarr[j + 1] = temp;\n\t\t\t}\n\t\t}\n\t}\n\n\n\tfor (int k = 0; k <= end; k++) {\n\t\tcout << arr[k] << " ";\n\t}\n\tcout << endl;\n\tsystem("pause");\n\treturn 0;\n}\n')])])]),a("h3",{attrs:{id:"二维数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维数组"}},[t._v("#")]),t._v(" 二维数组")]),t._v(" "),a("h4",{attrs:{id:"定义方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义方法-2"}},[t._v("#")]),t._v(" 定义方法")]),t._v(" "),a("ol",[a("li",[t._v("数据类型 数组名 [ 行数 ] [ 列数 ] ；")]),t._v(" "),a("li",[t._v("数据类型 数组名 [ 行数 ] [ 列数 ] = { {数据1， 数据2}， {数据3， 数据4} }")]),t._v(" "),a("li",[t._v("数据类型 数组名 [ 行数 ] [ 列数 ] = {数据1， 数据2， 数据3， 数据4}")]),t._v(" "),a("li",[t._v("数据类型 数组名 [ ] [ 列数 ] = {数据1， 数据2， 数据3， 数据4}")])]),t._v(" "),a("h4",{attrs:{id:"数组名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组名称"}},[t._v("#")]),t._v(" 数组名称")]),t._v(" "),a("ul",[a("li",[t._v("可以统计整个数组在内存中的长的")]),t._v(" "),a("li",[t._v("可以获取数组在内存中的首地址")])]),t._v(" "),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("h3",{attrs:{id:"函数的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的定义"}},[t._v("#")]),t._v(" 函数的定义")]),t._v(" "),a("ol",[a("li",[t._v("返回值类型")]),t._v(" "),a("li",[t._v("函数名")]),t._v(" "),a("li",[t._v("参数列表")]),t._v(" "),a("li",[t._v("函数体语句")]),t._v(" "),a("li",[t._v("return表达式")])]),t._v(" "),a("h3",{attrs:{id:"函数的调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的调用"}},[t._v("#")]),t._v(" 函数的调用")]),t._v(" "),a("p",[t._v("普通的调用方法")]),t._v(" "),a("h3",{attrs:{id:"值传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值传递"}},[t._v("#")]),t._v(" 值传递")]),t._v(" "),a("p",[t._v("当形参在函数中发生变化时，实参并不会改变。")]),t._v(" "),a("p",[t._v("![da9327f8a49b67692f14140e736c798](C:\\Users\\JINSHE~1\\AppData\\Local\\Temp\\WeChat Files\\da9327f8a49b67692f14140e736c798.png)")]),t._v(" "),a("h3",{attrs:{id:"函数的封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的封装"}},[t._v("#")]),t._v(" 函数的封装")]),t._v(" "),a("ol",[a("li",[t._v("创建.h后缀名的头文件")]),t._v(" "),a("li",[t._v("创建.cpp的源文件")]),t._v(" "),a("li",[t._v("在头文件中写函数的声明")]),t._v(" "),a("li",[t._v("在源文件中写函数的定义")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("在头文件中创建 swap.h 文件")])])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#include<iostream>\nusing namespace std;\n\n\nvoid swap(int num1, int num2);\n")])])]),a("p",[a("em",[a("strong",[t._v("在源文件中创建 swap.cpp 文件")])])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include "swap.h"\nvoid swap(int num1, int num2) {\n\tcout << "before:" << endl;\n\tcout << num1 << "--" << num2 << endl;\n\n\tint temp = 0;\n\ttemp = num1;\n\tnum1 = num2;\n\tnum2 = temp;\n\n\tcout << "after:" << endl;\n\tcout << num1 << "--" << num2 << endl;\n\treturn;\n}\n')])])]),a("p",[a("em",[a("strong",[t._v("使用函数")])])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include "swap.h"\nint main() {\n\n\tint a = 10;\n\tint b = 20;\n\tswap(a, b);\n\n\n\tsystem("pause");\n\treturn 0;\n}\n')])])]),a("h2",{attrs:{id:"指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针"}},[t._v("#")]),t._v(" 指针")]),t._v(" "),a("h3",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),a("p",[t._v("可以通过指针间接访问一段内存")]),t._v(" "),a("ul",[a("li",[t._v("内存编号从零开始记录，一般用十六进制数字表示")]),t._v(" "),a("li",[t._v("可以利用指针变量保存地址")])]),t._v(" "),a("h3",{attrs:{id:"定义方法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义方法-3"}},[t._v("#")]),t._v(" 定义方法")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int a = 10;\n\tint * p; //定义指针\n\n\tp = &a; // 建立指针和变量的关系\n\n\t*p = 1000; // 通过解引用来访问a变量\n\tcout << a << endl;\n")])])]),a("h3",{attrs:{id:"指针所占的内存空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针所占的内存空间"}},[t._v("#")]),t._v(" 指针所占的内存空间")]),t._v(" "),a("p",[t._v("在32位操作系统占4字节 64位8字节（不管是什么类型）")]),t._v(" "),a("h3",{attrs:{id:"空指针和野指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空指针和野指针"}},[t._v("#")]),t._v(" 空指针和野指针")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("空指针：指针变量指向内存中编号为0的空间")])]),t._v(" "),a("li",[a("p",[t._v("用途：初始化指针变量")])]),t._v(" "),a("li",[a("p",[t._v("注意：空指针指向的内存是不可以访问的")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int * p = NULL;\n")])])])]),t._v(" "),a("li",[a("p",[t._v("野指针：指针变量指向非法的内存空间")])]),t._v(" "),a("li",[a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\tint* p = (int *)0x1100;\n\n\tcout << *p << endl;\n")])])]),a("p",[a("em",[t._v("注意：这样访问会报错，因为此内存空间是非法的")])])])]),t._v(" "),a("h3",{attrs:{id:"const修饰指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const修饰指针"}},[t._v("#")]),t._v(" const修饰指针")]),t._v(" "),a("ol",[a("li",[t._v("const修饰指针： --常量指针")])]),t._v(" "),a("p",[t._v("指针的指向可以改，指针指向的值不能改")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int a = 10;\n\tint b = 10;\n\tint* p = &a;\n\n\tconst int* p = &a;\n")])])]),a("ol",[a("li",[t._v("const修饰常量： --指针常量")])]),t._v(" "),a("p",[t._v("指针的指向不可以改，但是指针指向的值可以改")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int a = 10;\n\tint b = 10;\n\tint* p = &a;\n\n\tint* const p = &a;\n")])])]),a("ol",[a("li",[t._v("const既修饰指针，又修饰常量")])]),t._v(" "),a("p",[t._v("指针的指向和指向的值都不可以改")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\tint a = 10;\n\tint b = 10;\n\tint* p = &a;\n\n\tconst int* const p = &a;\n")])])]),a("h3",{attrs:{id:"指针和数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针和数组"}},[t._v("#")]),t._v(" 指针和数组")]),t._v(" "),a("p",[t._v("利用指针遍历数组")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\tint arr[10] = { 1,2,3,4,5,6,7,8,9,10 };\n\n\tint* p = arr; //p指向4个字节的单位\n\n\tfor (int i = 0; i < 10; i++) {\n\t\tcout << *p << endl;\n\t\tp++;\n\t}\n")])])]),a("h3",{attrs:{id:"指针和函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针和函数"}},[t._v("#")]),t._v(" 指针和函数")]),t._v(" "),a("p",[t._v("当通过函数的形式进行值传递时，只会改变形参的值，并不会改变实参的值。")]),t._v(" "),a("p",[t._v("而通过指针进行地址传递则可以改变")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('void swap02(int* p1, int* p2) {\n\tint temp = *p1;\n\t*p1 = *p2;\n\t*p2 = temp;\n}\n\t\nint main() {\n\tint a = 10;\n\tint b = 20;\n\t\n\tswap02(&a, &b);\n\tcout << " a : " << a << endl;\n\tcout << " b : " << b << endl;\n\t\n\n\tsystem("pause");\n\treturn 0;\n}\n')])])]),a("h2",{attrs:{id:"结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体"}},[t._v("#")]),t._v(" 结构体")]),t._v(" "),a("h3",{attrs:{id:"结构体的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体的基本概念"}},[t._v("#")]),t._v(" 结构体的基本概念")]),t._v(" "),a("p",[t._v("结构体属于用户自定义的数据类型，允许用户存储不同的数据类型")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[t._v("struct 结构体名 { 结构体成员列表 }；")]),t._v(" "),a("p",[t._v("通过结构体创建变量的方式有三种：")]),t._v(" "),a("ul",[a("li",[t._v("struct 结构体名 变量名")]),t._v(" "),a("li",[t._v("struct 结构体名 变量名 = {  }")]),t._v(" "),a("li",[t._v("在创建结构体时附上变量名")])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('struct Student {\n\n\tstring name;\n\n\tint age;\n\n\tint score;\n}s3;\n\nint main() {\n//第一种方法\n\tstruct Student s1; // 在这里，struct关键字可以省略\n\ts1.name = "张三";\n\ts1.age = 18;\n\ts1.score = 100;\n\tcout << " 姓名： " << s1.name << " 年龄： " << s1.age << " 分数： " << s1.score << endl;\n//第二种方法\n\tstruct Student s2 = {\n\t\t"李四",\n\t\t19,\n\t\t80\n\t};\n\tcout << " 姓名： " << s2.name << " 年龄： " << s2.age << " 分数： " << s2.score << endl;\n//第三种方法\n\ts3.name = "王五";\n\ts3.age = 19;\n\ts3.score = 60;\n\tcout << " 姓名： " << s3.name << " 年龄： " << s3.age << " 分数： " << s3.score << endl;\n\n\tsystem("pause");\n\treturn 0;\n}\n')])])]),a("p",[a("em",[t._v("注意：在创建变量时，结构体名称可以省略")])]),t._v(" "),a("h3",{attrs:{id:"结构体数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体数组"}},[t._v("#")]),t._v(" 结构体数组")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('struct Student stuArr[3] = {\n\t\t{"张三", 18 , 100},\n\t\t{"李四", 28 , 80},\n\t\t{"王五", 38 , 60},\n\t};\n')])])]),a("h3",{attrs:{id:"结构体指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体指针"}},[t._v("#")]),t._v(" 结构体指针")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('int main() {\n\t\n\tStudent s = { "张三" ,18 , 100 };\n\n\t// 通过指针指向结构体变量\n\n\tStudent* p = &s;\n\n\t// 通过指针访问结构体变量中的数据\n\n\tcout << "姓名： " << p->name << "年龄： " << p->age << "分数： " << p->score << endl;\n\n\tsystem("pause");\n\treturn 0;\n}\n')])])]),a("p",[a("em",[t._v("注意：通过结构体指针访问结构体中的属性，需要用”  -> “")])]),t._v(" "),a("h3",{attrs:{id:"结构体嵌套结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体嵌套结构体"}},[t._v("#")]),t._v(" 结构体嵌套结构体")]),t._v(" "),a("p",[t._v("结构过于复杂，就不跟着敲代码了/(ㄒoㄒ)/~~")]),t._v(" "),a("h3",{attrs:{id:"结构体作函数参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体作函数参数"}},[t._v("#")]),t._v(" 结构体作函数参数")]),t._v(" "),a("ul",[a("li",[t._v("值传递")])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('struct Student {\n\n\tstring name;\n\n\tint age;\n\n\tint score;\n};\nvoid print(struct Student s) {\n\tcout  << " 姓名： " << s.name << " 年龄： " << s.age << " 分数： " << s.score << endl;\n\n};\n\nint main() {\n\t\n\tStudent s = { "张三" ,18 , 100 };\n\n\t\n\tStudent* p = &s;\n\n\tprint(s);\n\n\t\n\tsystem("pause");\n\treturn 0;\n}\n')])])]),a("p",[a("em",[t._v("注意：值传递只能修改形参的值，而主函数中的实参并不会被修改")])]),t._v(" "),a("ul",[a("li",[t._v("地址传递")])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('void print02(struct Student * p) {\n\tcout << "姓名： " << p->name << "年龄： " << p->age << "分数： " << p->score << endl;\n};\n\nint main() {\n\t\n\tStudent s = { "张三" ,18 , 100 };\n\n\tprint02(&s);\n\n\t\n\tsystem("pause");\n\treturn 0;\n}\n')])])]),a("p",[a("em",[t._v("而地址传递则可以改变子函数和主函数中结构体里的数据")])]),t._v(" "),a("h3",{attrs:{id:"结构体中const的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体中const的使用"}},[t._v("#")]),t._v(" 结构体中const的使用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("值传递中，将形参进行传递，会自动拷贝一份结构体，占用很大内存。 -- 而使用指针通过地址传递，则只会传递四个字节")])]),t._v(" "),a("li",[a("p",[t._v("方法：在子函数的形参前加上const")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);