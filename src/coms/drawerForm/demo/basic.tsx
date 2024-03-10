import { ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Button } from 'antd';
import { DrawerForm, DrawerFormRef } from 'comlab';
import React, { createRef } from 'react';

// 定义表单主体内容
type FormProps = { id: string; title: string; description: string };

const UpdateForm = DrawerForm<FormProps>(
  () => {
    return (
      <>
        <ProFormText name="id" hidden />
        <ProFormText
          name="title"
          label="标题"
          fieldProps={{
            maxLength: 20,
          }}
          rules={[{ required: true }]}
        />
        <ProFormTextArea
          name="description"
          label="描述"
          fieldProps={{ maxLength: 200 }}
        />
      </>
    );
  },
  {
    title: '基本场景',
    formOptions: { labelCol: { flex: '60px' } },
  },
);

const App: React.FC = () => {
  const updateRef = createRef<DrawerFormRef<FormProps>>();
  const open = () => {
    updateRef.current?.open({
      id: 'test',
      title: 'title',
      description: 'description',
    });
  };
  const submit = async (values: FormProps) => {
    console.log(values);
    return true;
  };
  return (
    <>
      <Button onClick={open}>点击打开表单</Button>
      <UpdateForm ref={updateRef} submit={submit} />
    </>
  );
};

export default App;
