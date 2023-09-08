import {
  TabsProps,
  TabsSubcomponentProps,
  TabsSubcomponents,
} from './types';
import { GenericProps } from '../../types';
import { TabsProvider } from './context';
import { getSubcomponent } from '../../utilities';
import { useTabsContext } from './hooks';
import styles from './styles.module.css';

function Tabs({ children, defaultValue }: TabsProps) {
  const TabPanels = getSubcomponent<TabsSubcomponents>(
    children,
    'Tabs Panel',
  );
  const TabsList = getSubcomponent<TabsSubcomponents>(
    children,
    'Tabs List',
  );

  return (
    <TabsProvider defaultValue={defaultValue}>
      <div role='group'>
        {TabsList}
        {TabPanels}
      </div>
    </TabsProvider>
  );
}

function TabsList({ children }: GenericProps) {
  const TabTriggers = getSubcomponent<TabsSubcomponents>(
    children,
    'Tabs Trigger',
  );

  return (
    <ul role='tablist' className={styles['tabs-list']}>
      {TabTriggers}
    </ul>
  );
}
TabsList.displayName = 'Tabs List';

function TabsTrigger({ children, value }: TabsSubcomponentProps) {
  const { setCurrent, current } = useTabsContext();

  return (
    <li role='tab' onClick={() => setCurrent(value)}>
      <button>{children}</button>
      <div
        className={current === value ? styles['tabs-trigger-active'] : ''}
      />
    </li>
  );
}
TabsTrigger.displayName = 'Tabs Trigger';

function TabsPanel({ children, value }: TabsSubcomponentProps) {
  const { current } = useTabsContext();

  return current === value ? (
    <section className={styles['tabs-panel']} role='tabpanel'>
      {children}
    </section>
  ) : null;
}
TabsPanel.displayName = 'Tabs Panel';

Tabs.Trigger = TabsTrigger;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;

export { TabsPanel, TabsTrigger, TabsList };
export default Tabs;
