function isWinner(board, symbol) {
    //check for rows 0,1,2  3,4,5  6,7,8
    if ((board[0] == board[1]) && (board[1] == board[2]) && (board[2] == symbol)) return symbol;
    if ((board[3] == board[4]) && (board[4] == board[5]) && (board[5] == symbol)) return symbol;
    if ((board[6] == board[7]) && (board[7] == board[8]) && (board[8] == symbol)) return symbol;

    //for col 0,3,6  1,4,7  2,5,8
    if ((board[0] == board[3]) && (board[3] == board[6]) && (board[6] == symbol)) return symbol;
    if ((board[1] == board[4]) && (board[4] == board[7]) && (board[7] == symbol)) return symbol;
    if ((board[2] == board[5]) && (board[5] == board[8]) && (board[8] == symbol)) return symbol;

    //for diagonal 0,4,8   2,4,6
    if ((board[0] == board[4]) && (board[4] == board[8]) && (board[8] == symbol)) return symbol;
    if ((board[2] == board[4]) && (board[4] == board[6]) && (board[6] == symbol)) return symbol;

    return "";
}
export default isWinner;