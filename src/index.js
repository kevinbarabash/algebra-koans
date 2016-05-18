import React from 'react';
import ReactDOM from 'react-dom';

import katex from 'katex';

class TeX extends React.Component {
    static propTypes = {
        code: React.PropTypes.string.isRequired
    };

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        katex.render(this.props.code, node);
    }

    render() {
        return <span/>;
    }
}

class App extends React.Component {
    render() {
        return <div>
            <h1>Hello, world!</h1>
            <TeX code="c = \pm\sqrt{a^2 + b^2}"/>
        </div>;
    }
}

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<App />, container);
