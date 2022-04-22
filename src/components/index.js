import React, {Component} from 'react';

function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        rendet() {
            return <WrapperComponent {this.props}/>
        }
    }

    return Wrapper;
}