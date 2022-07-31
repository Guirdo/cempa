import { Token, TokenType } from "../cempa/token"

test('assigment', () => { 
    let source = 'numero tacos';
    let testToken: Token = {
        type: TokenType.CLASSNAME,
        literal: 'numero',
    }
    console.log(testToken)
 })