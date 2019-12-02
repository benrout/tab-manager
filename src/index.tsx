import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabManager } from './components/TabManager';

export class App extends React.Component {
    render() {
        return (
            <TabManager />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));