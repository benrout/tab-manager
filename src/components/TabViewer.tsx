import * as React from 'react';

export interface TabViewerProps {
    tab: any;
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