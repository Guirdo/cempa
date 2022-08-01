enum TokenType  {
    //Delimeters
    COMMA,
    SEMICOLON,
    LPAREN,
    RPAREN,
    WHITESPACE,
    EOL,
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
    ECO,

    //Literals
    NUMBER,
    STRING,
    BOOLEAN,
    COMMENT,
    IDENT,

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

const keywords = {
    'si': TokenType.SI,
    'fin': TokenType.FIN,
    'eco': TokenType.ECO,
    'numero': TokenType.CLASSNAME,
    'texto': TokenType.CLASSNAME,
}

function lookForIdentifierType(literal: string) {
    if(keywords[literal]){
        return keywords[literal]
    }else{
        return TokenType.IDENT
    }
}

export {
    TokenType,
    Token,
    lookForIdentifierType
}