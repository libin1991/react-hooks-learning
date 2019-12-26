import React from 'react';
import ReactDOM from 'react-dom';

import App from './app8/index';

class Main extends React.Component {
    state = {
        count: 0
    }

    countUp = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    countDown = () => {
        const { count } = this.state;
        this.setState({ count: count - 1 });
    }

    componentDidUpdate() {
        setTimeout(() => {
            console.log(this.state.count);
        }, 2000)
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h4>我的测试</h4>
                <App></App>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
