import { lookForIdentifierType, Token, TokenType } from "./token"

class Lexer {
    readPosition: number
    position: number
    character: string
    tokens: Token[]
    input: string

    constructor(input: string){
        this.readPosition = 0
        this.tokens = []
        this.input = input
        
        this.readCharacter()
    }

    nextToken(){
        let token: Token
        this.skipWhiteSpace()

        if(this.isLetter(this.character)){
            let literal = this.readIdentifier()
            let type = lookForIdentifierType(literal)

            token = { type,literal }
        }else if(this.isNumber(this.character)){
            let literal = this.readNumber()

            token = {type: TokenType.NUMBER, literal}
        }else if(/\"/.test(this.character)){
            let literal = this.readString()

            token = {type: TokenType.STRING, literal}
        }else if(/=/.test(this.character)){
            token = { type: TokenType.ASSIGN, literal: this.character }
        }else if(/</.test(this.character)){
            token = { type: TokenType.LESSER, literal: '<'}
        }

        this.readCharacter()

        return token
    }

    isLetter(character){
        return /[a-z]/.test(character)
    }

    isNumber(character){
        return /[0-9]/.test(character)
    }

    readString(){
        let initialPosition = this.position
        this.readCharacter()
        
        let quote = /\"/
        while(!quote.test(this.character))
            this.readCharacter()
        
        this.readCharacter()

        return this.input.slice(initialPosition,this.position)
    }

    readNumber(){
        let initialPosition = this.position

        while(this.isNumber(this.character))
            this.readCharacter()
        
        return this.input.slice(initialPosition,this.position)
    }

    readIdentifier(){
        const initialPosition = this.position

        while(this.isLetter(this.character))
            this.readCharacter()

        return this.input.slice(initialPosition,this.position)
    }

    readCharacter(){
        if( this.readPosition >= this.input.length){
            this.character = ''
        }else{
            this.character = this.input[this.readPosition]
        }

        this.position = this.readPosition
        this.readPosition++
    }

    skipWhiteSpace(){
        while(/[\s\n]/.test(this.character)) 
            this.readCharacter()
    }
}

export default Lexer