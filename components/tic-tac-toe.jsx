class TicTacToe extends React.Component{
    state = {
        cells: new Array(9),
        turn: 'X',
        win : false
    }

    isWin (){
        if(
            this.horizontalWin(this.state.turn) ||
            this.verticalWin(this.state.turn) ||
            this.crossWin(this.state.turn)
        ){
            this.state.win = true;
        }
    }

    horizontalWin (turn){
        if(
            (this.state.cells[0] == turn && this.state.cells[1] == turn && this.state.cells[2] == turn) ||
            (this.state.cells[3] == turn && this.state.cells[4] == turn && this.state.cells[5] == turn) ||
            (this.state.cells[6] == turn && this.state.cells[7] == turn && this.state.cells[8] == turn)
        ){
            return true;
        }
        return false
    }

    verticalWin (turn){
        if(
            (this.state.cells[0] == turn && this.state.cells[3] == turn && this.state.cells[6] == turn) ||
            (this.state.cells[1] == turn && this.state.cells[4] == turn && this.state.cells[7] == turn) ||
            (this.state.cells[2] == turn && this.state.cells[5] == turn && this.state.cells[8] == turn)
        ){
            return true;
        }
        return false
    }

    crossWin(turn){
        if(
            (this.state.cells[0] == turn && this.state.cells[4] == turn && this.state.cells[8] == turn) ||
            (this.state.cells[2] == turn && this.state.cells[4] == turn && this.state.cells[6] == turn)
        ){
            return true;
        }
        return false
    }

    handleClick(e, cellIndex){
        if(!this.state.win && this.state.cells[cellIndex] === undefined){
            this.state.cells[cellIndex] = this.state.turn;
            this.setState(this.state);
            this.isWin();
            if(!this.state.win){
                this.state.turn = this.state.turn === 'X' ? 'O' : 'X';
            }
        }
    }

    render(){
        return <div id="tic-tac-toe" className="container-fluid">
            <div className="row">
                <div className="col-4" onClick={(e) => this.handleClick(e, 0)} >{this.state.cells[0]}</div>
                <div className="col-4" onClick={(e) => this.handleClick(e, 1)} >{this.state.cells[1]}</div>
                <div className="col-4" onClick={(e) => this.handleClick(e, 2)} >{this.state.cells[2]}</div>
            </div>
            <div className="row">
                <div className="col-4" onClick={(e) => this.handleClick(e, 3)} >{this.state.cells[3]}</div>
                <div className="col-4" onClick={(e) => this.handleClick(e, 4)} >{this.state.cells[4]}</div>
                <div className="col-4" onClick={(e) => this.handleClick(e, 5)} >{this.state.cells[5]}</div>
            </div>
            <div className="row">
                <div className="col-4" onClick={(e) => this.handleClick(e, 6)} >{this.state.cells[6]}</div>
                <div className="col-4" onClick={(e) => this.handleClick(e, 7)} >{this.state.cells[7]}</div>
                <div className="col-4" onClick={(e) => this.handleClick(e, 8)} >{this.state.cells[8]}</div>
            </div>
            {
                this.state.win ?
                    <h2>{this.state.turn} Wins!</h2> :
                    <h2>Turn: {this.state.turn}</h2>
            }
        </div>
    }
}

ReactDOM.render(
    <TicTacToe />,
    document.getElementById('root')
);