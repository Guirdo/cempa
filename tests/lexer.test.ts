import Lexer from "../cempa/lexer";
import { Token, TokenType } from "../cempa/token"

describe('lexer', () => {
    let tokens: Token[]

    beforeEach(()=> {
        tokens = []
    })

    test('should declare and initialize a variable', () => {
        let source = 'numero tacos = 13';

        let expectedTokens: Token[] = [
            { type: TokenType.CLASSNAME, literal: 'numero' },
            { type: TokenType.IDENT, literal: 'tacos' },
            { type: TokenType.ASSIGN, literal: '=' },
            { type: TokenType.NUMBER, literal: '13' },
        ]

        let lexer = new Lexer(source)
        for (let i = 0; i < 4; i++)
            tokens.push(lexer.nextToken())

        expect(tokens).toStrictEqual(expectedTokens)

    })

    test('should initialize a simple control statement and ignore a comment ', () =>{
        let source = `
            si a < b 
                eco "A es menor que b"
            fin
        `

        let expectedTokens: Token[] = [
            { type: TokenType.SI, literal: 'si' },
            { type: TokenType.IDENT, literal: 'a' },
            { type: TokenType.LESSER, literal: '<' },
            { type: TokenType.IDENT, literal: 'b' },
            { type: TokenType.ECO, literal: 'eco' },
            { type: TokenType.STRING, literal: '"A es menor que b"' },
            { type: TokenType.FIN, literal: 'fin' },
        ]

        let lexer = new Lexer(source)
        for(let i=0; i<7; i++){
            tokens.push(lexer.nextToken())
        }

        /* console.log(expectedTokens)
        console.log(tokens) */
        expect(tokens).toStrictEqual(expectedTokens)
    })

})