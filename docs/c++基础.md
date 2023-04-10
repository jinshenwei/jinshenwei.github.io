#  学习 [c++基础]



## 一.数据类型

### 整型

- short 短整型     2字节 (-32768 ~ 32767)
- int 整型            4字节
- long 长整型       4字节  
- long long 长长整型         8字节

### sizeof关键字

作用：可以统计数据类型所占的内存大小

```c++
#include<iostream>
using namespace std;

int main()
{
    short num1 = 10;

    cout << "short所占的内存大小为：" << sizeof(num1) << endl;
    system("pause");
    return 0;
}
```

### 浮点型

- float  4字节       7位有效数字
- double  8字节    16位有效数字

### 字符型

- char

- ```c
  char ch = 'a'; 
  ```

### 转义字符

| 转义字符 |      含义      |      |
| :------: | :------------: | ---- |
|    \a    |      警报      |      |
|    \b    |      退格      |      |
|    \f    |      换页      |      |
|    \n    |      换行      |      |
|    \r    |      回车      |      |
|    \t    |    水平制表    |      |
|    \\    | 一个反斜线字符 |      |

### 字符串型

c：

```c++
char name[] = "sunwukong";
```

c++：

```c++
string str = "hello world";
```

注意：再用string定义字符串时，要引入头文件

```c++
#include <string>
```

### 数据的输入

- cin >> 

- ```c++
  int main()
  {   
      //1.整形
      int a = 0;
      cout << "请给整形a赋值：" << endl;
      cin >> a;
      cout << a << endl;
  
      //2.浮点型
      float f = 3.14f;
      cout << "请给浮点型变量f赋值:" << endl;
      cin >> f;
      cout << f << endl;
  
      system("pause");
      return 0;
  }
  ```

  

## 二. 运算符

### 算数运算符

+，-，*，/, % 

_注意：两个整数相除依然是整数，将小数部分自动去除_

_注意：%取模运算时，两个小数不能做取模运算_



前置递增： ++a 先让变量加一，在进行表达式运算

后置递增： a++ 先进行表达式运算，后让变量加一



### 赋值运算符

+=，-=，*=，/=，%=

### 比较运算符

### 逻辑运算符

！， && ，|| 

## 三.程序流程结构

### 三目运算符

在c++中 三目运算返回的是一个变量，可以直接赋值

### switch语句

```C++
#include<iostream>
using namespace std;

int main() {

	int score = 0;
	cout << "请输入您的评分" << endl;
	cin >> score;

	switch (score) {
	case 10:
		cout << "您认为电影非常好" << endl;
	case 9:
		cout << "您认为电影非常好" << endl;
	case 8:
		cout << "您认为电影一般" << endl;
	case 7:
		cout << "您认为电影一般" << endl;
	case 6:
		cout << "您认为电影比较差" << endl;
	case 5:
		cout << "您认为电影比较差" << endl;
	default:
		cout << "您认为这是烂片" << endl;
	}
	system("pause");
	return 0;
```

_注意：switch判断时只能是整形或者字符型，不可以是一个区间_

### while循环

猜数字游戏

```c++
#include<iostream>
using namespace std;
#include <ctime>

int main() {
	// 添加随机数种子，利用系统时间生成随机数，防止每次生成的数字都一样
	srand((unsigned int)time(NULL));

	int num1 = rand()%100 + 1;
	int num2 = 0;
	while (num1 != num2) {
		cout << "请输入一个1 到 100 的数字" << endl;
		cin >> num2;
		if (num2 > num1) {
			cout << "您猜大了" << endl;
		}
		else if (num2 < num1)
		{
			cout << "您猜小了" << endl;
		}
		else {
			cout << "恭喜您，猜对了" << endl;
			break;
		}
	}
	system("pause");
		return 0;
```

#### do...while

先执行一次循环，再判断条件

```c++
int num = 0;
	do
	{
		cout << num << endl;
		num++;
	} while (num <= 9)
```



### for循环语句

满足循环条件，执行循环语句

### 嵌套循环

打印九九乘法表

```C++
	for (int i = 1; i < 10; i++) {
		for (int j = 1; j <= i; j++) {
			cout << j << "*" << i << "=" << j * i << " ";
		}
		cout << endl;
	}
```

![553d42e8e431ab26a24818eb66067b4](C:\Users\JINSHE~1\AppData\Local\Temp\WeChat Files\553d42e8e431ab26a24818eb66067b4.png)

### countinue语句

```c++
int main() {

	for (int i = 0; i <= 100; i++) {
		if (i % 2 == 0) {
			continue;// 可以筛选条件，执行到此就不在向下执行，执行下一次循环
		}
		cout << i << endl;
	}
```

### goto语句

无条件地跳转代码

如果标记名称存在，执行到goto语句时，会跳转到标记的位置

## 数组

### 概述

- 特点：数组中的每个数据元素都是相同的数据类型
- 特点：数组是由连续的内存位置组成的

### 定义方法

1. 数据类型 数组名[ 数组长度 ]；

2. 数据类型 数组名[ 数组长度 ] = {值1， 值2 ......}

3. 数据类型 数组名[ ] = { 值1， 值2， .....}

   _注意，如果在初始化数据时没有全部填写完，会用零来填补剩余的数据_
   
   

### 数组名作用

- 可以统计整个数组在内存中的长的
- 可以获取数组在内存中的首地址

![c731f419a5fdb4adbcc322ca593b038](C:\Users\JINSHE~1\AppData\Local\Temp\WeChat Files\c731f419a5fdb4adbcc322ca593b038.png)

### 冒泡排序

***以下是排列一个整型数组的 冒泡排序代码：***

```c++
#include<iostream>
using namespace std;

int main()
{
	int arr[9] = { 4,2,8,0,5,7,1,3,9 };
	int end = sizeof(arr) / sizeof(arr[0]) - 1;
	for (int i = 0; i <= end; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;


	for (int i = 0; i < end; i++) {
		for (int j = 0; j < end - i; j++) {
			if (arr[j] > arr[j + 1]) {
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}


	for (int k = 0; k <= end; k++) {
		cout << arr[k] << " ";
	}
	cout << endl;
	system("pause");
	return 0;
}
```



### 二维数组

#### 定义方法

1. 数据类型 数组名 [ 行数 ] [ 列数 ] ；
2. 数据类型 数组名 [ 行数 ] [ 列数 ] = { {数据1， 数据2}， {数据3， 数据4} }
3. 数据类型 数组名 [ 行数 ] [ 列数 ] = {数据1， 数据2， 数据3， 数据4}
4. 数据类型 数组名 [ ] [ 列数 ] = {数据1， 数据2， 数据3， 数据4}

#### 数组名称

- 可以统计整个数组在内存中的长的
- 可以获取数组在内存中的首地址



## 函数

### 函数的定义

1. 返回值类型
2. 函数名
3. 参数列表
4. 函数体语句
5. return表达式

### 函数的调用

普通的调用方法

### 值传递

当形参在函数中发生变化时，实参并不会改变。

![da9327f8a49b67692f14140e736c798](C:\Users\JINSHE~1\AppData\Local\Temp\WeChat Files\da9327f8a49b67692f14140e736c798.png)

### 函数的封装

1. 创建.h后缀名的头文件
2. 创建.cpp的源文件
3. 在头文件中写函数的声明
4. 在源文件中写函数的定义

***在头文件中创建 swap.h 文件***

```c++
#include<iostream>
using namespace std;


void swap(int num1, int num2);
```

***在源文件中创建 swap.cpp 文件***

```c++
#include "swap.h"
void swap(int num1, int num2) {
	cout << "before:" << endl;
	cout << num1 << "--" << num2 << endl;

	int temp = 0;
	temp = num1;
	num1 = num2;
	num2 = temp;

	cout << "after:" << endl;
	cout << num1 << "--" << num2 << endl;
	return;
}
```

***使用函数***

```c++
#include "swap.h"
int main() {

	int a = 10;
	int b = 20;
	swap(a, b);


	system("pause");
	return 0;
}
```

## 指针

### 作用

可以通过指针间接访问一段内存

- 内存编号从零开始记录，一般用十六进制数字表示
- 可以利用指针变量保存地址

### 定义方法

```c++
int a = 10;
	int * p; //定义指针

	p = &a; // 建立指针和变量的关系

	*p = 1000; // 通过解引用来访问a变量
	cout << a << endl;
```

### 指针所占的内存空间

在32位操作系统占4字节 64位8字节（不管是什么类型）

### 空指针和野指针

- 空指针：指针变量指向内存中编号为0的空间

- 用途：初始化指针变量

- 注意：空指针指向的内存是不可以访问的

  ```
  int * p = NULL;
  ```

  

- 野指针：指针变量指向非法的内存空间

- ```c++
  	int* p = (int *)0x1100;
  
  	cout << *p << endl;
  ```

  _注意：这样访问会报错，因为此内存空间是非法的_

### const修饰指针

1. const修饰指针： --常量指针

指针的指向可以改，指针指向的值不能改

```c++
int a = 10;
	int b = 10;
	int* p = &a;

	const int* p = &a;
```



1. const修饰常量： --指针常量

指针的指向不可以改，但是指针指向的值可以改

```c++
int a = 10;
	int b = 10;
	int* p = &a;

	int* const p = &a;
```



1. const既修饰指针，又修饰常量

指针的指向和指向的值都不可以改

```c++
	int a = 10;
	int b = 10;
	int* p = &a;

	const int* const p = &a;
```



### 指针和数组

利用指针遍历数组

```c++
	int arr[10] = { 1,2,3,4,5,6,7,8,9,10 };

	int* p = arr; //p指向4个字节的单位

	for (int i = 0; i < 10; i++) {
		cout << *p << endl;
		p++;
	}
```

### 指针和函数

当通过函数的形式进行值传递时，只会改变形参的值，并不会改变实参的值。

而通过指针进行地址传递则可以改变

```c++
void swap02(int* p1, int* p2) {
	int temp = *p1;
	*p1 = *p2;
	*p2 = temp;
}
	
int main() {
	int a = 10;
	int b = 20;
	
	swap02(&a, &b);
	cout << " a : " << a << endl;
	cout << " b : " << b << endl;
	

	system("pause");
	return 0;
}
```

## 结构体

### 结构体的基本概念

结构体属于用户自定义的数据类型，允许用户存储不同的数据类型

### 语法

struct 结构体名 { 结构体成员列表 }；

通过结构体创建变量的方式有三种：

- struct 结构体名 变量名
- struct 结构体名 变量名 = {  }
- 在创建结构体时附上变量名

```c++
struct Student {

	string name;

	int age;

	int score;
}s3;

int main() {
//第一种方法
	struct Student s1; // 在这里，struct关键字可以省略
	s1.name = "张三";
	s1.age = 18;
	s1.score = 100;
	cout << " 姓名： " << s1.name << " 年龄： " << s1.age << " 分数： " << s1.score << endl;
//第二种方法
	struct Student s2 = {
		"李四",
		19,
		80
	};
	cout << " 姓名： " << s2.name << " 年龄： " << s2.age << " 分数： " << s2.score << endl;
//第三种方法
	s3.name = "王五";
	s3.age = 19;
	s3.score = 60;
	cout << " 姓名： " << s3.name << " 年龄： " << s3.age << " 分数： " << s3.score << endl;

	system("pause");
	return 0;
}
```

_注意：在创建变量时，结构体名称可以省略_

### 结构体数组

```c++
struct Student stuArr[3] = {
		{"张三", 18 , 100},
		{"李四", 28 , 80},
		{"王五", 38 , 60},
	};
```

### 结构体指针

```c++
int main() {
	
	Student s = { "张三" ,18 , 100 };

	// 通过指针指向结构体变量

	Student* p = &s;

	// 通过指针访问结构体变量中的数据

	cout << "姓名： " << p->name << "年龄： " << p->age << "分数： " << p->score << endl;

	system("pause");
	return 0;
}
```

_注意：通过结构体指针访问结构体中的属性，需要用”  -> “_

### 结构体嵌套结构体

结构过于复杂，就不跟着敲代码了/(ㄒoㄒ)/~~

### 结构体作函数参数

- 值传递

```c++
struct Student {

	string name;

	int age;

	int score;
};
void print(struct Student s) {
	cout  << " 姓名： " << s.name << " 年龄： " << s.age << " 分数： " << s.score << endl;

};

int main() {
	
	Student s = { "张三" ,18 , 100 };

	
	Student* p = &s;

	print(s);

	
	system("pause");
	return 0;
}
```

_注意：值传递只能修改形参的值，而主函数中的实参并不会被修改_

- 地址传递

```c++
void print02(struct Student * p) {
	cout << "姓名： " << p->name << "年龄： " << p->age << "分数： " << p->score << endl;
};

int main() {
	
	Student s = { "张三" ,18 , 100 };

	print02(&s);

	
	system("pause");
	return 0;
}
```

_而地址传递则可以改变子函数和主函数中结构体里的数据_

### 结构体中const的使用

- 值传递中，将形参进行传递，会自动拷贝一份结构体，占用很大内存。 -- 而使用指针通过地址传递，则只会传递四个字节

- 方法：在子函数的形参前加上const
