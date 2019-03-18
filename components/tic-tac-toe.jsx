class TicTacToe extends React.Component{
    state = {
        cells: new Array(9),
        firstMove: 'X'
    }

    handleClick(e, cellIndex){
        this.state.firstMove
        this.state.cells[cellIndex] = this.state.firstMove;
        this.state.firstMove = this.state.firstMove === 'X' ? 'O' : 'X';
        this.setState(this.state)
    }

    render(){
        console.log(this.state.cells);
        return <div id="tic-tac-toe" className="container-fluid">
            <div className="row">
                <div className="col-4" onClick={(e) =>this.handleClick(e, 0)}>{this.state.cells[0]}</div>
                <div className="col-4" onClick={(e) =>this.handleClick(e, 1)}>{this.state.cells[1]}</div>
                <div className="col-4" onClick={(e) =>this.handleClick(e, 2)}>{this.state.cells[2]}</div>
            </div>
            <div className="row">
                <div className="col-4" onClick={(e) =>this.handleClick(e, 3)}>{this.state.cells[3]}</div>
                <div className="col-4" onClick={(e) =>this.handleClick(e, 4)}>{this.state.cells[4]}</div>
                <div className="col-4" onClick={(e) =>this.handleClick(e, 5)}>{this.state.cells[5]}</div>
            </div>
            <div className="row">
                <div className="col-4" onClick={(e) =>this.handleClick(e, 6)}>{this.state.cells[6]}</div>
                <div className="col-4" onClick={(e) =>this.handleClick(e, 7)}>{this.state.cells[7]}</div>
                <div className="col-4" onClick={(e) =>this.handleClick(e, 8)}>{this.state.cells[8]}</div>
            </div>
        </div>
    }
}

ReactDOM.render(
    <TicTacToe />,
    document.getElementById('root')
);