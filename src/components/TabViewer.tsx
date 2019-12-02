import * as React from 'react';
import { ITab } from './TabManager';

export interface TabViewerProps {
    tab: ITab;
}

export class TabViewer extends React.Component<TabViewerProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const { tab } = this.props;

        return (
            <div>
                <h2>{tab.title}</h2>
                <div>{tab.content}</div>
            </div>
        )
    }
}