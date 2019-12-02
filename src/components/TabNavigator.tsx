import * as React from 'react';
import { ITab } from './TabManager';

export interface TabNavigatorItemProps {
    tab: ITab;
    handleTabClick(id: number): void;
}

export class TabNavigatorItem extends React.Component<TabNavigatorItemProps> {
    render() {
        const { tab, handleTabClick } = this.props;

        return (
            <div onClick={() => handleTabClick(tab.id)}>{tab.title}</div>
        )
    }
}

export interface TabNavigatorProps {
    tabs: ITab[];
    handleTabClick(id: number): void;
}


export class TabNavigator extends React.Component<TabNavigatorProps> {
    render() {
        const { tabs, handleTabClick } = this.props;

        return (
            <div>
                <h1>Tab Navigator</h1>
                {tabs.map(tab => <TabNavigatorItem key={tab.id} tab={tab} handleTabClick={handleTabClick} />)}
            </div>
        )
    }
}