enum TokenType  {
    AND,
    ASSIGN,
    COMMA,
    CLASSNAME,
}

type Token = {
    type: TokenType,
    literal: string,
}

export {
    TokenType,
    Token
}