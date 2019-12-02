import * as React from 'react';
import { TabViewer } from './TabViewer';
import { TabNavigator } from './TabNavigator';

export interface TabManagerState {
    tabs: ITab[];
    isLoading: boolean;
    error: string;
    selectedTab: ITab;
}

export interface ITab {
    id: number;
    title: string;
    content: string;
}

export class TabManager extends React.Component<{}, TabManagerState> {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [],
            isLoading: true,
            error: '',
            selectedTab: null
        }
    };

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        try {
            this.setState({
                tabs: [
                    { id: 1, title: 'home', content: 'home content' },
                    { id: 2, title: 'contact', content: 'contact content' },
                    { id: 3, title: 'about', content: 'about content' }
                ]
            }, () => {
                this.setState({
                    selectedTab: this.state.tabs[0]
                });
            });
        } catch (error) {
            this.setState({
                error
            });
        } finally {
            this.setState({
                isLoading: false
            });
        }
    }

    handleTabClick = (id: number) => {
        const selectedTab: ITab = this.state.tabs.filter(tab => tab.id === id)[0];
        this.setState({
            selectedTab
        });
    }

    render() {
        const { isLoading, tabs, error, selectedTab } = this.state;
        
        return (
            <div>
                {isLoading ?
                    <div>Loading</div>
                    :
                    error ?
                        <div>{error}</div>
                        :
                        <div>
                            <TabNavigator handleTabClick={this.handleTabClick} tabs={tabs} />
                            {selectedTab ? <TabViewer tab={selectedTab} /> : null}
                        </div>
                }
            </div>
        );
    }
}