# 学习[c++ 核心]

## 内存分区模型

c++程序在执行时，将内存方向划分为4个区域

- 代码区：存放函数体的二进制代码，由操作系统进行管理
- 全局区：存放全局变量和静态变量，常量
- 栈区：由编译器自动分配释放，存放函数的参数值，局部变量等
- 堆区；由程序员分配和释放，若程序员不释放，程序结束时由操作系统回收

***内存四区的意义： 不同区域存放的数据，赋予不同的生命周期，给我们更方便的灵活编程***

### 程序执行前

在程序编译后，生成了exe可执行程序，未执行该程序前分为两个区域

***代码区：***

- *存放CPU执行的机器指令*
- 代码区使共享的，共享的目的是对于频繁的被执行程序，只需要在内存中有一份代码即可
- 代码区是只读的，使其只读的原因是为了防止程序意外地修改了他的指令

***全局区：***

- *全局变量和静态变量存放于此*
- 全局区还包含了常量区，字符串常量和其他常量也存放于此，
- 该区域的数据在程序结束后由操作系统释放

### 栈区

- 形参 和 局部变量存放于此
- _注意：不要返回栈区的地址，因为栈区的内存会在使用一次后被释放_

### 堆区

```c++
int* func()
{						// 利用new关键字，可以将数据开辟到堆区
	int* p = new int(10); // 指针本质上是一个局部变量，放在栈上
	return p;			 // 指针保存的数据放在堆区
}

int main() {

	int* p = func();

	cout << *p << endl;

	system("pause");
	return 0;
}
```

### new关键字

堆区开辟的地址，由程序员手动释放，释放利用操作符delete 

## 引用

给变量起别名

### 语法

数据类型 &别名 = 原名

_注意：引用必须初始化， 引用在初始化后就不可以发生改变_

### 引用做函数参数

复习：参数传递有两种方式，

1. 值传递
2. 地址传递

引用传递：

```c++
void mySwap03(int& a, int& b) {
	int temp = a;
	a = b;
	b = temp;
}


int main() {

	int a = 10;
	int b = 20;


	cout << "引用传递:" << endl;
	mySwap03(a, b);
	cout << "a = " << a << endl;
	cout << "b = " << b << endl;

	system("pause");
	return 0;
}
```

### 引用做函数返回值

```c++
int& test01() {
	static int a = 10; // 可以在变量前加上static关键字将数据存放到堆区
	return a;
}

int main() {

	int& b = test01();
	cout << b << endl;
	cout << b << endl;

	system("pause");
	return 0;
}
```

_注意：如果函数的返回值是引用，则这个函数调用可以作为左值_

### 引用的本质

引用的本质在c++内部实现是一个指针常量

### 常量引用

用来修饰形参，防止误操作

## 函数提高

### 函数的默认参数

数据类型 函数名（参数 = 默认值）{

}

```c++
#include<iostream>
using namespace std;

int func(int a  , int c ,int b = 10 ) {
	return a + c + b;
}



int main() {

	cout << func(10,20) << endl;


	system("pause");
	return 0;
}
```

_注意：附加默认参数的参数要写在实际参数的后面_

_注意：如果函数声明有默认参数，函数实现就不能有默认参数_

### 函数占位参数

在参数中传入数据类型，当作一个占位参数

```c++
#include<iostream>
using namespace std;

void fn(int a,string) {
		
	cout << "this is fn" << endl;
}

int main() {

	fn(10, "10");
	
	system("pause");
	return 0;
}
```

### 函数重载

作用：函数名可以相同，提高重复性

***函数重载满足的条件：***

- 同一个作用域下
- 函数名称相同
- ***函数参数类型不同，或者个数不同 或者顺序不同***

_注意：函数的返回值不可以作为函数重载的条件_

### 函数重载碰到默认参数

```c++
void func() {
	cout << "func" << endl;
}

void func(int a) {
	cout << "func (int a)" << endl;
}

int main() {

	func(10);

	system("pause");
	return 0;
}
```

```c++
void func(int &a) {				//当传入的参数是一个常量时，参数不能										为引用参数
	cout << "func" << endl;
}

void func(const int &a) {	// 所以当传入常量时，函数重载的目标函									数将会是参数为常量引用的函数
	cout << "func (int a)" << endl;
}



int main() {

	func(10);

	system("pause");
	return 0;
}
```



_注意：当函数重载碰到默认参数，会出现二义性_

## 类和对象

### 三大特性

- 封装
- 继承
- 多态

### 封装的意义

1. public
2. protected
3. private

### struct 和 class 的区别

struct的默认权限是公共， class默认权限是私有

### 类的分文件编写

首先创建 头文件 xxx.h 

```c++
#pragma once
#include <iostream>
using namespace std;

class Point {
public:
	void setX(int x);
	int getX();
	void setY(int y);
	int getY();
private:
	int m_X;
	int m_Y;
};// 在头文件中，只写入函数声明，不包含具体的函数实现
```

再创建源文件 xxx.cpp

```c++
#include"point.h" //首先引入刚刚编写的头文件

void Point::setX(int x) {
	m_X = x;
}
int Point::getX() {
	return m_X;
}
void Point::setY(int y) {
	m_Y = y;
}
int Point::getY() {
	return m_Y;
}// 放入有关函数的具体实现 ， 并在每个函数前加上此函数的作用域 Point::
```

最后，在源文件中引入需要用到的类的头文件

_注意：如果要在一个类文件中使用另一个类文件，那么也需要在头文件中引入另一个类文件的头文件。_

### 对象的初始化和清理

- 构造函数 
  1. 构造函数没有返回值，也不写void
  2. 函数名称与类名相同
  3. 构造函数可以有参数，可以发生重载
  4. 程序在***调用***对象时会自动调用构造，无需手动调用，而且只会调用一次

- 析构函数
  1. 没有返回值，不屑void
  2. 在名称前加上~
  3. 不可以有参数，不可以发生重载
  4. 程序在***销毁***对象时会自动调用构造，无需手动调用，而且只会调用一次

```c++
class Person {
public:
	Person(){
		cout << "这是构造函数" << endl;
	}

	~Person() {
		cout << "这是析构函数" << endl;
	}

};
```

### 构造函数的分类和调用

两种分类方式

- 按参数分为：有参构造 `Person(int a)` 和无参构造 `Person()`
- 按类型分为：普通构造和拷贝构造 `Person( const Person &p )`

三种调用方式

- 括号法

```c++
void test01() {

	//1.括号法调用

	Person p1;  // 调用默认构造函数时，不要加括号,因为编译器会认为这是一个函数的声明

	Person p2(10);

	Person p3(p2);

	cout << "p2的年龄为： " << p2.age << endl;
	cout << "p3的年龄为： " << p3.age << endl;

}
```



- 显示法

```c++
Person p1;

	Person p2 = Person(10); // Person(10) 为匿名对象 特点：当前行执行结束后，系统会立即回收掉匿名对象

	Person p3 = Person(p2);//注意，不要用拷贝构造函数初始化匿名对象
```



- 隐式转换法

```c++
	//3.隐式转换法调用
	Person p4 = 10; //有参构造
	Person p5 = p4;

```



### 拷贝构造函数的调用时机

- 使用一个已创建完毕的对象来初始化一个新对象

- 值传递的方式给娴熟参数传值

- 以值方式返回局部对象

  

### 构造函数的调用规则

只要写一个类，c++编译器 至少给一个类添加三个函数

1. 默认构造函数
2. 默认析构函数
3. 默认拷贝函数

构造函数规则如下：

- 如果用户定义有参构造函数， c++不再提供默认无参构造函数 但是会提供默认拷贝函数
- 如果用户定义拷贝构造函数， c++不会再提供其他构造函数

### ***浅拷贝与深拷贝***

浅拷贝：简单的赋值拷贝操作

深拷贝：在堆区重新申请空间，进行拷贝操作

```c++
#include<iostream>
using namespace std;
#include<string>

class Person {
public:
	int m_age;
	int *m_Height;

	Person() {
		cout << "无参构造函数" << endl;
	}

	Person(int a , int height) {
		cout << "有参构造函数" << endl;
		m_age = a;
		m_Height = new int(height); // 利用new把 height创建在堆区 ， 此时返回的是一个指针，指向m_Height存储的数据
	}

	//自己实现一个拷贝构造函数，解决浅拷贝带来的问题
	Person(const Person& p) {
		cout << "Person拷贝构造函数的调用" << endl;
		m_age = p.m_age;

		m_Height = new int(*p.m_Height);
	}

	~Person() {
		//析构代码，将堆区开辟的数据做释放操作
		if (m_Height != NULL) {
			delete m_Height;
			m_Height = NULL;
		}
		cout << "析构函数" << endl;
	}
};
 
void test01() {

	Person p1(20 , 160);

	cout << "p1的年龄为： " << p1.m_age << "身高为： " << *p1.m_Height << endl;

	Person p2(p1);

	cout << "p2的年龄为： " << p2.m_age << "身高为： " << *p2.m_Height << endl;

}

int main() {

	test01();


	system("pause");
	return 0;
}
```

***总结：如果属性有在堆区开辟的，一定要自己提供拷贝构造函数，防止浅拷贝带来的问题***

### 初始化列表

```c++
class Person {

public:
	int m_A;
	int m_B;
	int m_C;
// 设置形参
	Person(int a, int b ,int c) :m_A(a), m_B(b), m_C(c) {
		cout << "初始化别表" << endl;
	}

};

void test01() {

	Person p1(30, 20, 10);//初始化列表的语法，传入参数
	
}
```

### 类对象作为类成员

当有其他类作为本类的成员时，先创建其他类，在创建本类。

而在析构时，会执行本类的析构函数，在执行其他类。

### 静态成员

静态成员就是在成员变量和成员函数前加上关键字static，成为静态成员。

- 静态成员变量

  - 所有对象共享同一份数据
  - 在编译阶段分配内存
  - 类内声明，类外初始化
  - 访问方式：通过对象，或通过类名来访问

  ```c++
  class Person {
  
  public:
  
  	static int m_A;
  
  };
  int Person::m_A = 100;
  
  void test01() {
  	Person p1;
  	cout << p1.m_A << endl; //通过属性来访问
  
  	cout << Person::m_A << endl;//通过类名来访问
  }
  ```

- 静态成员函数
  - ***只能访问静态成员对象***
  - 所有对象都共享同一个函数
  - 访问方式：通过对象，通过类名

### c++对象模型和this指针

#### 成员变量和成员函数是分开存储的

只有非静态成员对象属于类的对象上

#### this 指针

this 指针指向被调用的成员函数所属的对象

- this指针是隐含每一个非静态成员函数内的一种指针
- this指针不需要定义直接使用即可

this指针的用途

- 当形参和成员变量同名时，可用this指针来区分
- 在类的非静态成员函数中返回对象本身，可使用return *this

```c++
#include<iostream>
using namespace std;
#include<string>

class Person {

public:

	int age;

	Person(int age) {
		this->age = age; //this指针指向被调用成员函数所属的对象
	}

	Person& addAge(Person& p) {  
        // 当返回值是解指针,返回本体时，要用引用的方式接收数据

		this->age += p.age;

		return *this;
	}
};

void test02() {

	Person p2(10);

	Person p3(20);

	p3.addAge(p2).addAge(p2);
	cout << "p3的年龄为： " << p3.age << endl;
}

int main() {

	test02();

	system("pause");
	return 0;
}
```

### 空指针访问成员函数

无法访问成员中的属性

### 运算符重载

只能利用全局函数重载左移运算符

```c++
class Person {
	friend ostream& operator<<(ostream& cout, Person& p);
public:
	Person(int a, int b) {
		m_A = a;
		m_B = b;
	}

private:

	int m_A;
	int m_B;

};

ostream & operator<<(ostream &cout,Person & p) {
	cout << "m_A = " << p.m_A << "m_B = " << p.m_B; 
	return cout;
}

void test02() {
	Person p(10, 20);
	cout << p << endl;
}
```

### 递增运算符重载

```c++
class MyInteger{
	friend ostream& operator<<(ostream& cout, MyInteger myint);
public:
	MyInteger() {
		m_Num = 0;
	}

	//重载前置运算符
	MyInteger& operator++() {  //返回引用是为了可以修改实参
		++m_Num;
		return *this;
	}

	MyInteger operator++(int) {  //传入int占位参数，可以区分前置和后置递增
	MyInteger temp = *this;
		++m_Num;
		return temp;
	}
```

### 赋值运算符重载

为解决深浅拷贝问题，要手动写入深拷贝代码，并返回自身可以实现链式调用

### 关系运算符重载

### 函数调用运算符重载

## 继承

### 构造和析构的顺序

遵循栈的数据规则，后进先出，构造函数的打印顺序与析构函数顺序相反。

### 同名成员的访问

当在子类中访问父类的同名成员属性，需要在属性名前加上作用域。

```c++
cout << "Son m_A = " << s.m_A << endl;
	cout << "Base m_A = " << s.Base::m_A << endl;
```

访问同名成员函数，同样也要加上作用域。

### 同名静态成员的处理方式

当通过对象访问数据时，在变量前加上作用于即可

通过类名访问时，同样要加上作用域

### 多继承语法

`class Son : public Base01, public Base02`

实际开发不建议使用；

### 菱形继承

![7164b682f789580286ae089cfef3b07](C:\Users\JINSHE~1\AppData\Local\Temp\WeChat Files\7164b682f789580286ae089cfef3b07.png)

利用虚继承，解决菱形继承的重复继承问题

加上virtual关键字， `virtual public Base{} `

底层原理：生成一个vbptr的指针，通过内存偏移量找到对应的数据。

## 多态

### 多态分为两类：

- 静态多态：函数重载，运算符重载
- 动态多态：派生类和虚函数实现运行时多态

区别

- 静态多态的函数地址早绑定 - 编译阶段确定函数地址
- 动态多态的函数地址晚绑定 - 运行阶段确定函数地址



- 语法：

在父类的成员函数前加入 virtual 关键字 ， 实现函数地址的玩绑定

在子类中重写虚函数

- 实现：

```c++
class Animal {
public:
	virtual void speak() {
		cout << "动物在说话" << endl;

	}
};

class Cat : public Animal {

public:
	void speak() {
		cout << "小猫在说话" << endl;
	}

};
class Dog : public Animal {
public:
	void speak() {
				cout << "小狗在说话" << endl;
	}
};

void doSpeak(Animal& animal) { // Animal & animal = cat 父类的指针可以直接指向子类对象
	animal.speak();
}

void test01() {
	Cat cat;
	doSpeak(cat);

	Dog dog;
	doSpeak(dog);

}
```

### 多态的原理剖析

当在父类中定义virtual 虚函数是，在父类中添加了一个 vfptr 指针 

- ```c++
  public:
  	virtual void speak() {
  		cout << "动物在说话" << endl;
  	}
  ```

- 当子类中重写了父类中的虚函数，子类中的虚函数表会替换掉父类中的虚函数表，所以当用父类的引用指向子类对象时，会从子类的虚函数表中找函数的入口地址，发生多态。

- 作用：满足代码的开闭原则 ，对拓展开放，对修改关闭

以下是满足开闭原则的计算器案例：

```c++
class Calculator {
public:
	int m_Num1;
	int m_Num2;

	virtual int getResult() {
		return 0;
	}

};

// 加法计算器
class AddCalculator : public Calculator {
public:
	virtual int getResult() {
		return m_Num1 + m_Num2;
	}

};

// 减法计算器
class SubCalculator : public Calculator {
public:
	int getResult() {
		return m_Num1 - m_Num2;
	}

};

// 乘法计算器
class MulCalculator : public Calculator {
public:
int getResult() {
		return m_Num1 * m_Num2;
	}
};

void test01() {
	Calculator* cal = new AddCalculator;
	cal->m_Num1 = 10;
	cal->m_Num2 = 10;
	cout << "10 + 10 = " << cal->getResult() << endl;
	delete cal;
	cal = new SubCalculator;
	cal->m_Num1 = 10;
	cal->m_Num2 = 10;
	cout << "10 - 10 = " << cal->getResult() << endl;
	delete cal;
	cal = new MulCalculator;
	cal->m_Num1 = 10;
	cal->m_Num2 = 10;
	cout << "10 * 10 = " << cal->getResult() << endl;
	delete cal;
}
```



### 纯虚函数和多态类

在多态中，通常父类函数中的系函数的实现是毫无意义的，必须在子类中实现

因此可以将虚函数改为纯虚函数

#### 语法

`virtual 返回值类型 函数名 （参数列表） = 0；`

当类中有了纯虚函数，这个类也称为抽象类

```c++
class Base {  // 抽象类
public:
	virtual void func() = 0; //创建抽象类
};
class Son : public Base {
public:
	void func() {
		cout << "func函数调用" << endl;
	}
};
void test01() {
	Base * base = new Son;
	base->func();
}
```

#### 制作茶叶案例

```c++
class Base {
public:
	virtual void Boil() = 0;

	virtual void Brew() = 0;

	virtual void PutSomething() = 0;

	void make() {
		Boil();
		Brew();
		PutSomething();
	}
};

class Coffe : public Base {
public:
	void Boil() {

		cout << "煮农夫山泉" << endl;
	}

	void Brew() {
		cout << "倒入杯中" << endl;
	}

	void PutSomething() {
		cout << "加入糖和牛奶" << endl;
	}
};

void doWork(Base* abs) {
	abs->make();	
}
void test01() {
	Coffe c;
	doWork(&c);
}

```

#### 制作电脑案例

```c++
// 案例描述：把每个零件分装成抽象类，并提供不同的厂商生产的不同零件
// 创建电脑类让电脑工作的函数，并且调用每个零件工作的接口

class CPU {
public:
	virtual void calculate() = 0;
};

class VideoCard {
public:
	virtual void display() = 0;
};

class Memory { 
public:
	virtual void storage() = 0;
};

// 电脑的组装
class Computer {
public:
	// 设置电脑类的构造函数 
	Computer(CPU * cpu, VideoCard* vc, Memory* mem) {
		m_cpu = cpu;
		m_vc = vc;
		m_mem = mem;
	}

	void doWork() {
		m_cpu->calculate();
		m_vc->display();
		m_mem->storage(); 
	}
private:

	CPU* m_cpu; 
	VideoCard* m_vc;
	Memory* m_mem;
}; 


// intel厂商

class Intel : public CPU, public VideoCard, public Memory {

	void calculate() {  //在子类中重写纯虚函数
		cout << "Intel CPU" << endl;
	}

	void display(){
		cout << "Intel VideoCard" << endl;
	}
	void storage() {
		cout << "Intel Memory" << endl;
	}

};

// Lenovo
class Lenovo : public CPU, public VideoCard, public Memory {

	void calculate() {
		cout << "Lenovo CPU" << endl;
	}

	void display() {
		cout << "Lenovo VideoCard" << endl;
	}
	void storage() {
		cout << "Lenovo Memory" << endl;
	}

};

void test01() {

	CPU * intelCpu = new Intel; // 通过父类创建子类对象，使用多态
	VideoCard * intelCard = new Intel;
	Memory * intelMem = new Intel;
	Computer* c1 = new Computer(intelCpu, intelCard, intelMem);
	c1->doWork();
	delete c1;

}
```



## 文件操作

程序运行时产生的数据都属于临时数据，程序一旦结束都会被释放

通过文件可以将数据*永久化*

需要包含头文件 <fstream>

文件分为两种类型

1. 文本文件 - 文件以文本的ASCII码形式存储在计算机中
2. 二进制文件 - 文件以文本的二进制形式存储在计算机中，用户一般不能直接读懂他们

操作文件的三大类

- ofstream  ： 写文件
- ifstream ： 读文件
- fstream ： 读写文件

### 文本文件

1. 包含头文件 `#include<fstream>`
2. 创建流对象 `fstream ofs` /  `ifstream ifs`
3. 打开文件 `ofs.open("文件路径"，打开方式)`
4. 写数据 `ofs << "写入的数据"`
5. 关闭文件 `ofs.close();`

![fb05a007d2367db23a9c16e0ca23ed6](C:\Users\JINSHE~1\AppData\Local\Temp\WeChat Files\fb05a007d2367db23a9c16e0ca23ed6.png)

```c++
#include<iostream> // 写文件
using namespace std;
#include<fstream>

void test01(){

	ofstream ofs;

	ofs.open("test.txt", ios::out);

	ofs << "姓名：张三" << endl;
	ofs << "性别：男" << endl;
	ofs << "年龄：18" << endl;

	ofs.close();
}
```

```c++
void test01() { // 读文件
	ifstream ifs;

	ifs.open("test.txt", ios::in);

	if (!ifs.is_open()) {
		cout << "文件打开失败" << endl;
		return;
	}

	//读数据
	char buf[1024] = { 0 };
	while (ifs >> buf) {
		cout << buf << endl;
	}
	ifs.close();
```

### 二进制文件

写文件

- 包含头文件 ` #include <ofstream> `
- 创建输出流对象并打开文件 ` ofs.write("文件名" , ios::out | ios::binary )`
- 写文件 ` ofs.write((const char *)&p, sizeof(p));`  //这里的p指创建的对象
- 关闭文件

读文件

- 实在是看不懂，等要用到再回来看看
