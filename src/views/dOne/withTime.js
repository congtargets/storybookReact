import React from 'react';

export default function withTimer(WrappedComponent){
    return class extends React.Component {
        state = {time: new Date()};
        componentDidMount(){
            this.timerID = setInterval(()=>this.tick(),1000);
        }
        componentWillUnmount(){
            clearInterval(this.timerID);
        }
        tick(){
            this.setState({
                time: new Date()
            })
        }
        render(){
            console.log('this.props');
            console.log(this.props);
            return <WrappedComponent time={this.state.time}{...this.props}/>;
        }

    };
}