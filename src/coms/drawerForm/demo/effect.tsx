import { ProFormSelect } from '@ant-design/pro-components';
import { Button } from 'antd';
import { DrawerForm, DrawerFormRef } from 'comlab';
import React, { createRef, useEffect, useState } from 'react';

// 定义表单主体内容
type FormProps = { address: string };

const UpdateForm = DrawerForm<FormProps>(
  ({ visible }) => {
    const [options, setOptions] = useState({
      loading: false,
      values: [] as any,
    });
    useEffect(() => {
      if (visible) {
        // 获取远程数据
        setOptions((prev) => ({ ...prev, loading: true }));
        setTimeout(() => {
          setOptions({
            values: [
              {
                value: 'BeiJing',
                label: '北京',
              },
            ],
            loading: false,
          });
        }, 2000);
      }
    }, [visible]);
    return (
      <ProFormSelect
        name="address"
        label="地址"
        fieldProps={{
          options: options.values,
          loading: options.loading,
        }}
      />
    );
  },
  {
    title: '副作用场景',
  },
);

const App: React.FC = () => {
  const updateRef = createRef<DrawerFormRef<FormProps>>();
  const open = () => {
    updateRef.current?.open({
      address: '',
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
