grammar Brms;
// Parser

rules: ruleDeclaration+;

ruleDeclaration:
	Rule StringLiteral Priority Assign DigitSequence contextDeclaration ruleBody;

contextDeclaration: Context (argument ','?)+;

ruleBody: If condition Then assignement+ End;

condition:
	booleanExpression (conditionOperator booleanExpression)*;

conditionOperator: And | Or;

booleanExpression: expression operator expression;
expression:
	StringLiteral
	| IdentifierWithAttribut
	| (FloatNumber | DigitSequence)
	| True
	| False
	| Defined
	| AssignTrue
	| AssignFalse;

assignement: IdentifierWithAttribut Assign expression ';';

argument: Identifier LeftParen Identifier RightParen;

operator:
	Equal
	| NotEqual
	| Is
	| Less
	| LessEqual
	| Greater
	| GreaterEqual;
// Lexter

Rule: 'REGLE';
If: 'SI';
Then: 'ALORS';
End: 'FIN';
And: 'ET';
Or: 'OU';
Context: 'CONTEXTE';
LeftParen: '(';
RightParen: ')';
Assign: '=';
Equal: '===';
NotEqual: '!==';
Less: '<';
LessEqual: '<=';
Greater: '>';
GreaterEqual: '>=';
Is: 'EST';
True: 'VRAI';
False: 'FAUX';
AssignTrue: 'true';
AssignFalse: 'false';
Defined: 'DEFINI';
Priority: 'PRIORITE';

Identifier: IdentifierNonDigit (IdentifierNonDigit | Digit)*;
IdentifierWithAttribut: Identifier ('.' Identifier)?;

fragment IdentifierNonDigit: Nondigit | UniversalCharacterName;
fragment Nondigit: [a-zA-Z_];

fragment Digit: [0-9];
DigitSequence: Digit+;
FloatNumber: Digit+ '.' Digit+;
fragment Sign: '+' | '-';

StringLiteral: ('"' SChar* '"') | ('\'' SChar* '\'');

fragment SChar:
	~["\\\r\n]
	| EscapeSequence
	| '\\\n' // Added line
	| '\\\r\n';
// Added line
fragment UniversalCharacterName:
	'\\u' HexQuad
	| '\\U' HexQuad HexQuad;
fragment HexQuad:
	HexadecimalDigit HexadecimalDigit HexadecimalDigit HexadecimalDigit;
fragment HexadecimalDigit: [0-9a-fA-F];
fragment EscapeSequence:
	'\\' ['"?abfnrtv\\]
	| UniversalCharacterName;

Whitespace: [ \t]+ -> skip;
Newline: ( '\r' '\n'? | '\n') -> skip;
BlockComment: '/*' .*? '*/' -> skip;
LineComment: '//' ~[\r\n]* -> skip;
