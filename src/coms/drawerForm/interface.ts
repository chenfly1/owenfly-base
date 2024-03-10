import { ProFormProps } from '@ant-design/pro-components';
import { DrawerProps } from 'antd';

export type DrawerFormRef<T> = {
  open: (values?: T) => void;
  close: () => void;
};
export type DrawerFormOptions = {
  confirm?: boolean;
  formOptions?: Exclude<ProFormProps, 'form'>;
} & Pick<DrawerProps, 'title' | 'width' | 'destroyOnClose'>;
