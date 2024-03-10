---
group:
  title: 组件
  order: 0
demo:
  cols: 2
title: DrawerForm
subtitle: 抽屉表单
---

# 抽屉表单

基于抽屉交互展示表单内容。

## 使用场景

基于当前页面进行一个临时表单操作，如创建纪录、更新记录、或查看数据，执行完成后平滑回到当前页面。

## 代码演示

<code src="./demo/basic.tsx" description="主体内容为表单域元素集合，打开抽屉时进行表单赋值，提交操作时表单值作为回调函数参数，并通过回调响应值控制抽屉的显隐。
">基本场景</code>
<code src="./demo/effect.tsx" description="当抽屉显隐状态变更时，进行副作用处理，如抽屉打开时请求远程数据">副作用场景</code>

## API

### DrawerForm

DrawerForm 本质是一个高阶组件，应用时以抽屉主体内容组件（表单内容为泛型 T，可具体定义类型）以及基本配置作为入参，生产实际应用的抽屉表单。参数说明如下：

| 参数名            | 说明                                                                                          | 类型                                                                          | 默认值 | 版本 |
| ----------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------ | ---- |
| children          | 主体内容组件，组件 props 包括 `source: 表单内容初始值; form: 表单实例; visible: 抽屉容器状态` | (props: { source?: T; form: ProFormInstance; visible: boolean }) => ReactNode | null   |      |
| drawerFormOptions | 抽屉以及表单配置, [配置项](#DrawerFormOptions)                                                | object                                                                        | null   |      |

### DrawerFormOptions

| 参数名         | 说明                                                                                                                | 类型           | 默认值 | 版本 |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | -------------- | ------ | ---- |
| title          | 标题                                                                                                                | ReactNode      |        |      |
| width          | 宽度                                                                                                                | string\|number | 400    |      |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素                                                                                        | boolean        | false  |      |
| confirm        | 是否为确认操作的抽屉，将不展示取消按钮                                                                              | boolean        | false  |      |
| formOptions    | 表单配置，除 `form` 外的所有属性均可配置， [参考 Ant.Form](https://ant-design.antgroup.com/components/form-cn#form) | object         | null   |      |

### DrawerFormProps

| 参数名 | 说明                 | 类型                            | 默认值 | 版本 |
| ------ | -------------------- | ------------------------------- | ------ | ---- |
| submit | 点击确认时的回调方法 | (value: T) => Promise<boolean>; |        |      |

### DrawerFormRef

| 方法名 | 说明     | 类型                        | 默认值 | 版本 |
| ------ | -------- | --------------------------- | ------ | ---- |
| open   | 打开抽屉 | open: (values?: T) => void; |        |      |
| close  | 关闭抽屉 | close: () => void;          |        |      |

## FAQ
