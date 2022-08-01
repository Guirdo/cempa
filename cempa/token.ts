enum TokenType  {
    //Delimeters
    COMMA,
    SEMICOLON,
    LPAREN,
    RPAREN,
    ENDLINE,
    FIN,

    //Aritmethics operators
    PLUS,
    MINUS,
    MULTIPLICATION,
    DIVISION,
    MODULUS,
    INCREMENT,
    DECREMENT,

    //Logic operators
    AND,
    OR,
    LESSER,
    GREATER,
    EQUAL,
    LESSER_EQ,
    GREATER_EQ,
    NEGATION,
    UNEQUAL,

    //Control
    SI,
    OSI,
    SINO,
    SEGUN,
    CASO,
    PORDEFECTO,

    //Assignation
    ASSIGN,

    //CLASSES
    CLASSNAME,
    FUNCTION,

    //Literals
    NUMBER,
    STRING,
    BOOLEAN,
    COMMENT,

    //Loops
    PARA,
    CADA,
    HACER,
    MIENTRAS,

}

type Token = {
    type: TokenType,
    literal: string,
}

export {
    TokenType,
    Token
}