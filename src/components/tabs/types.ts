import React from 'react';
import { GenericProps } from '../../types';

export interface ITabContext {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

export interface TabsProps extends GenericProps {
  defaultValue: string;
}

export interface TabsSubcomponentProps extends GenericProps {
  value: string;
}

export type TabsSubcomponents =
  | 'Tabs Trigger'
  | 'Tabs Panel'
  | 'Tabs List';
