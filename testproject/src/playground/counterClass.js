class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddOne = handleAddOne.bind(this)
        this.handleReset = handleReset.bind(this)
        this.handleMinusOne = handleMinusOne.bind(this)
        this.state = {
            count: 0
        }
    }
    handleAddOne(){
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    handleMinusOne(){
        this.setState((prevState) => ({count: prevState.count - 1}))
    }
    handleReset(){
        this.setState(() => ({count: 0}))
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1> 
                <Buttons 
                    handleAddOne={this.handleAddOne}
                    handleMinusOne={this.handleMinusOne}
                    handleReset={this.handleReset}
                />
            </div>
        )
    }
}


const Buttons = (props) => {
    return (
        <div>
            <Reset handleReset={props.handleReset} />
            <Add handleAddOne={props.handleAddOne} />
            <Subtract handleMinusOne={props.handleMinusOne} />
        </div>
    )
}

const Reset = (props) => {
    return (
        <div>
            <button onClick={props.handleReset}>Reset Count</button>
        </div>
    )
}

const Add = (props) => {
    return (
        <div>
            <button onClick={props.handleAddOne}>+1</button>
        </div>
    )
}

const Subtract = (props) => {
    return (
        <div>
            <button onClick={props.handleMinusOne}>-1</button>
        </div>
    )
}