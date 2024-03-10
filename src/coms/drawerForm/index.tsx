import { ProForm, ProFormInstance } from '@ant-design/pro-components';
import { Button, Drawer, Form, Space } from 'antd';
import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import './index.less';
import { DrawerFormOptions, DrawerFormRef } from './interface';

const DrawerForm = <T extends Record<string, any>>(
  children: (props: {
    source?: T;
    form: ProFormInstance;
    visible: boolean;
  }) => ReactNode,
  options: DrawerFormOptions,
) =>
  forwardRef<DrawerFormRef<T>, { submit?: (value: T) => Promise<boolean> }>(
    ({ submit }, ref) => {
      const [loading, setLoading] = useState(false);
      const [visible, setVisible] = useState(false);
      const [source, setSource] = useState<T>();
      const [form] = Form.useForm();
      const { confirm, formOptions, ...drawerOptions } = options;

      const open = (values?: T) => {
        form.setFieldsValue(values);
        setSource(values);
        setVisible(true);
      };

      const close = () => {
        setVisible(false);
        form.resetFields();
      };

      /** 提交表单处理 */
      const submitHandler = () => {
        form.validateFields().then(() => {
          const values = form.getFieldsValue();
          if (submit) {
            setLoading(true);
            submit(values)
              .then((res) => {
                if (res) close();
              })
              .finally(() => {
                setLoading(false);
              });
          }
        });
      };

      useImperativeHandle(ref, () => ({
        open,
        close,
      }));

      const footer = () => {
        return (
          <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {confirm ? null : (
              <Button key="back" onClick={close}>
                取消
              </Button>
            )}
            <Button
              type="primary"
              key="ok"
              loading={loading}
              onClick={submitHandler}
            >
              确定
            </Button>
          </Space>
        );
      };
      return (
        <Drawer
          width={400}
          open={visible}
          onClose={close}
          footer={footer()}
          {...drawerOptions}
        >
          <ProForm
            layout="horizontal"
            className="drawer-form__main"
            colon={false}
            grid={true}
            submitter={false}
            labelCol={{ flex: '80px' }}
            {...formOptions}
            form={form}
          >
            {children({ source, form, visible })}
          </ProForm>
        </Drawer>
      );
    },
  );

export default DrawerForm;
