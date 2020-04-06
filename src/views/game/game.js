import React from 'react';
class Square extends React.Component {
    render() {
      return (
        <button className="square"
        onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
}
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            status: true,
            end: false
        }
    }
    dealContant() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let arr = this.state.squares;
        let str = lines.find(item => arr[item[0]] && arr[item[0]] === arr[item[2]] && arr[item[0]] === arr[item[2]]);
        console.log(str);
        if (str) {
            alert('WIN:' + this.state.squares[str[0]]);
            this.setState({
                end: true
            })
        }
    }
    handClickHandle(i) {
        if (!this.state.end) {
            let arr = this.state.squares;
            arr[i] = this.state.status ? 'X' : 'O';
            this.setState({
                squares: arr,
                status: !this.state.status
            })
            this.dealContant();
        }
    }
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handClickHandle(i)}
            />;
    }

    render() {
        const status = `Next player: ${this.state.status ? 'X' : 'O'}`;

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}
  
class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}
  
export default Game;
  