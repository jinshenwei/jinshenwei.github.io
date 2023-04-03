# 学习 [props的单项数据传递]

在子组件定义的props只能在父组件里定义值，在父组件里创建定量，并通过 v-bind绑定

作用：确保数据的安全性

***一下是父组件里的代码案例 ***

```vue


<script setup>
  import MyProps from './components/MyProps.vue';
  import { ref } from 'vue';

  const count = ref(0);
</script>



<template>
  <h1>hello</h1>
  <MyProps :count="count"></MyProps>
  <button @click="count++">点我一下</button>
</template>


```

## 但是，当在父组件里定义的是一个obj对象时，此时count是obj对象的一个属性，那么在子组件里是可以更改count的值



***以下是代码案例***

```vue
<script setup>
  import MyProps from './components/MyProps.vue';
  import { ref } from 'vue';

  const count = ref(0);

  const obj = ref({
    count: 0,
  })
</script>



<template>
  <h1>hello</h1>
  <MyProps :count="count" :obj="obj"></MyProps>
  <button @click="obj.count++">点我一下</button>
</template>
```

***注意*** ：当在父组件传属性值时，需要采用驼峰命名法 例如"maxLength",方便数据的爬取 或者max-length

## props配置

可以在子组件中配置props，来限制props传入属性的类型

以下是代码案例：

```html
const props = defineProps({
    count: Number,
    obj: Object,
    maxLength: {
        type: String,               // 类型
        required: true,             // 必填项
        default: "哈哈",             // 默认值
        validator: (value) => {      // 自定义校验规则
            return value.length > 5;
        }
    }
})
```

