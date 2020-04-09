// Generated from Brms.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BrmsListener = require('./BrmsListener').BrmsListener;
var grammarFileName = "Brms.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e\u0002\u001d",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "+\n\u0004\u0006\u0004-\n\u0004\r\u0004\u000e\u0004.\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0006\u00055\n\u0005\r\u0005\u000e\u0005",
    "6\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006?\n\u0006\f\u0006\u000e\u0006B\u000b\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bK\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tR\n\t\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0002\u0002",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0006\u0003\u0002\t\n\u0003\u0002\u001e\u001f\u0004\u0002\u0016\u0017",
    "\u001a\u001a\u0003\u0002\u000f\u0014\u0002`\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0004\u001f\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002",
    "\u0002\u0002\b0\u0003\u0002\u0002\u0002\n:\u0003\u0002\u0002\u0002\f",
    "C\u0003\u0002\u0002\u0002\u000eE\u0003\u0002\u0002\u0002\u0010Q\u0003",
    "\u0002\u0002\u0002\u0012S\u0003\u0002\u0002\u0002\u0014V\u0003\u0002",
    "\u0002\u0002\u0016[\u0003\u0002\u0002\u0002\u0018`\u0003\u0002\u0002",
    "\u0002\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u0003\u0003\u0002\u0002",
    "\u0002\u001f \u0007\u0005\u0002\u0002 !\u0007 \u0002\u0002!\"\u0007",
    "\u001b\u0002\u0002\"#\u0007\u000e\u0002\u0002#$\u0007\u001e\u0002\u0002",
    "$%\u0005\u0006\u0004\u0002%&\u0005\b\u0005\u0002&\u0005\u0003\u0002",
    "\u0002\u0002\',\u0007\u000b\u0002\u0002(*\u0005\u0016\f\u0002)+\u0007",
    "\u0003\u0002\u0002*)\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+-\u0003\u0002\u0002\u0002,(\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\u0007\u0003",
    "\u0002\u0002\u000201\u0007\u0006\u0002\u000212\u0005\n\u0006\u00022",
    "4\u0007\u0007\u0002\u000235\u0005\u0014\u000b\u000243\u0003\u0002\u0002",
    "\u000256\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002",
    "\u0002\u000278\u0003\u0002\u0002\u000289\u0007\b\u0002\u00029\t\u0003",
    "\u0002\u0002\u0002:@\u0005\u000e\b\u0002;<\u0005\f\u0007\u0002<=\u0005",
    "\u000e\b\u0002=?\u0003\u0002\u0002\u0002>;\u0003\u0002\u0002\u0002?",
    "B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002A\u000b\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\t",
    "\u0002\u0002\u0002D\r\u0003\u0002\u0002\u0002EJ\u0005\u0010\t\u0002",
    "FG\u0005\u0018\r\u0002GH\u0005\u0010\t\u0002HK\u0003\u0002\u0002\u0002",
    "IK\u0005\u0012\n\u0002JF\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002",
    "\u0002K\u000f\u0003\u0002\u0002\u0002LR\u0007 \u0002\u0002MR\u0007\u001d",
    "\u0002\u0002NR\t\u0003\u0002\u0002OR\u0007\u0018\u0002\u0002PR\u0007",
    "\u0019\u0002\u0002QL\u0003\u0002\u0002\u0002QM\u0003\u0002\u0002\u0002",
    "QN\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QP\u0003\u0002\u0002",
    "\u0002R\u0011\u0003\u0002\u0002\u0002ST\u0007\u0015\u0002\u0002TU\t",
    "\u0004\u0002\u0002U\u0013\u0003\u0002\u0002\u0002VW\u0007\u001d\u0002",
    "\u0002WX\u0007\u000e\u0002\u0002XY\u0005\u0010\t\u0002YZ\u0007\u0004",
    "\u0002\u0002Z\u0015\u0003\u0002\u0002\u0002[\\\u0007\u001c\u0002\u0002",
    "\\]\u0007\f\u0002\u0002]^\u0007\u001c\u0002\u0002^_\u0007\r\u0002\u0002",
    "_\u0017\u0003\u0002\u0002\u0002`a\t\u0005\u0002\u0002a\u0019\u0003\u0002",
    "\u0002\u0002\t\u001d*.6@JQ"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "';'", "'REGLE'", "'SI'", "'ALORS'", "'FIN'", 
                     "'ET'", "'OU'", "'CONTEXTE'", "'('", "')'", "'='", 
                     "'==='", "'!=='", "'<'", "'<='", "'>'", "'>='", "'EST'", 
                     "'VRAI'", "'FAUX'", "'true'", "'false'", "'DEFINI'", 
                     "'PRIORITE'" ];

var symbolicNames = [ null, null, null, "Rule", "If", "Then", "End", "And", 
                      "Or", "Context", "LeftParen", "RightParen", "Assign", 
                      "Equal", "NotEqual", "Less", "LessEqual", "Greater", 
                      "GreaterEqual", "Is", "True", "False", "AssignTrue", 
                      "AssignFalse", "Defined", "Priority", "Identifier", 
                      "IdentifierWithAttribut", "DigitSequence", "FloatNumber", 
                      "StringLiteral", "Whitespace", "Newline", "BlockComment", 
                      "LineComment" ];

var ruleNames =  [ "rules", "ruleDeclaration", "contextDeclaration", "ruleBody", 
                   "condition", "conditionOperator", "booleanExpression", 
                   "expression", "affirmation", "assignement", "argument", 
                   "operator" ];

function BrmsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BrmsParser.prototype = Object.create(antlr4.Parser.prototype);
BrmsParser.prototype.constructor = BrmsParser;

Object.defineProperty(BrmsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BrmsParser.EOF = antlr4.Token.EOF;
BrmsParser.T__0 = 1;
BrmsParser.T__1 = 2;
BrmsParser.Rule = 3;
BrmsParser.If = 4;
BrmsParser.Then = 5;
BrmsParser.End = 6;
BrmsParser.And = 7;
BrmsParser.Or = 8;
BrmsParser.Context = 9;
BrmsParser.LeftParen = 10;
BrmsParser.RightParen = 11;
BrmsParser.Assign = 12;
BrmsParser.Equal = 13;
BrmsParser.NotEqual = 14;
BrmsParser.Less = 15;
BrmsParser.LessEqual = 16;
BrmsParser.Greater = 17;
BrmsParser.GreaterEqual = 18;
BrmsParser.Is = 19;
BrmsParser.True = 20;
BrmsParser.False = 21;
BrmsParser.AssignTrue = 22;
BrmsParser.AssignFalse = 23;
BrmsParser.Defined = 24;
BrmsParser.Priority = 25;
BrmsParser.Identifier = 26;
BrmsParser.IdentifierWithAttribut = 27;
BrmsParser.DigitSequence = 28;
BrmsParser.FloatNumber = 29;
BrmsParser.StringLiteral = 30;
BrmsParser.Whitespace = 31;
BrmsParser.Newline = 32;
BrmsParser.BlockComment = 33;
BrmsParser.LineComment = 34;

BrmsParser.RULE_rules = 0;
BrmsParser.RULE_ruleDeclaration = 1;
BrmsParser.RULE_contextDeclaration = 2;
BrmsParser.RULE_ruleBody = 3;
BrmsParser.RULE_condition = 4;
BrmsParser.RULE_conditionOperator = 5;
BrmsParser.RULE_booleanExpression = 6;
BrmsParser.RULE_expression = 7;
BrmsParser.RULE_affirmation = 8;
BrmsParser.RULE_assignement = 9;
BrmsParser.RULE_argument = 10;
BrmsParser.RULE_operator = 11;

function RulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_rules;
    return this;
}

RulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RulesContext.prototype.constructor = RulesContext;

RulesContext.prototype.ruleDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RuleDeclarationContext);
    } else {
        return this.getTypedRuleContext(RuleDeclarationContext,i);
    }
};

RulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterRules(this);
	}
};

RulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitRules(this);
	}
};




BrmsParser.RulesContext = RulesContext;

BrmsParser.prototype.rules = function() {

    var localctx = new RulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BrmsParser.RULE_rules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 24;
            this.ruleDeclaration();
            this.state = 27; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BrmsParser.Rule);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_ruleDeclaration;
    return this;
}

RuleDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleDeclarationContext.prototype.constructor = RuleDeclarationContext;

RuleDeclarationContext.prototype.Rule = function() {
    return this.getToken(BrmsParser.Rule, 0);
};

RuleDeclarationContext.prototype.StringLiteral = function() {
    return this.getToken(BrmsParser.StringLiteral, 0);
};

RuleDeclarationContext.prototype.Priority = function() {
    return this.getToken(BrmsParser.Priority, 0);
};

RuleDeclarationContext.prototype.Assign = function() {
    return this.getToken(BrmsParser.Assign, 0);
};

RuleDeclarationContext.prototype.DigitSequence = function() {
    return this.getToken(BrmsParser.DigitSequence, 0);
};

RuleDeclarationContext.prototype.contextDeclaration = function() {
    return this.getTypedRuleContext(ContextDeclarationContext,0);
};

RuleDeclarationContext.prototype.ruleBody = function() {
    return this.getTypedRuleContext(RuleBodyContext,0);
};

RuleDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterRuleDeclaration(this);
	}
};

RuleDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitRuleDeclaration(this);
	}
};




BrmsParser.RuleDeclarationContext = RuleDeclarationContext;

BrmsParser.prototype.ruleDeclaration = function() {

    var localctx = new RuleDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BrmsParser.RULE_ruleDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.match(BrmsParser.Rule);
        this.state = 30;
        this.match(BrmsParser.StringLiteral);
        this.state = 31;
        this.match(BrmsParser.Priority);
        this.state = 32;
        this.match(BrmsParser.Assign);
        this.state = 33;
        this.match(BrmsParser.DigitSequence);
        this.state = 34;
        this.contextDeclaration();
        this.state = 35;
        this.ruleBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContextDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_contextDeclaration;
    return this;
}

ContextDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContextDeclarationContext.prototype.constructor = ContextDeclarationContext;

ContextDeclarationContext.prototype.Context = function() {
    return this.getToken(BrmsParser.Context, 0);
};

ContextDeclarationContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

ContextDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterContextDeclaration(this);
	}
};

ContextDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitContextDeclaration(this);
	}
};




BrmsParser.ContextDeclarationContext = ContextDeclarationContext;

BrmsParser.prototype.contextDeclaration = function() {

    var localctx = new ContextDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BrmsParser.RULE_contextDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(BrmsParser.Context);
        this.state = 42; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 38;
            this.argument();
            this.state = 40;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BrmsParser.T__0) {
                this.state = 39;
                this.match(BrmsParser.T__0);
            }

            this.state = 44; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BrmsParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_ruleBody;
    return this;
}

RuleBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleBodyContext.prototype.constructor = RuleBodyContext;

RuleBodyContext.prototype.If = function() {
    return this.getToken(BrmsParser.If, 0);
};

RuleBodyContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

RuleBodyContext.prototype.Then = function() {
    return this.getToken(BrmsParser.Then, 0);
};

RuleBodyContext.prototype.End = function() {
    return this.getToken(BrmsParser.End, 0);
};

RuleBodyContext.prototype.assignement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignementContext);
    } else {
        return this.getTypedRuleContext(AssignementContext,i);
    }
};

RuleBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterRuleBody(this);
	}
};

RuleBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitRuleBody(this);
	}
};




BrmsParser.RuleBodyContext = RuleBodyContext;

BrmsParser.prototype.ruleBody = function() {

    var localctx = new RuleBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BrmsParser.RULE_ruleBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(BrmsParser.If);
        this.state = 47;
        this.condition();
        this.state = 48;
        this.match(BrmsParser.Then);
        this.state = 50; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 49;
            this.assignement();
            this.state = 52; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BrmsParser.IdentifierWithAttribut);
        this.state = 54;
        this.match(BrmsParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.booleanExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BooleanExpressionContext);
    } else {
        return this.getTypedRuleContext(BooleanExpressionContext,i);
    }
};

ConditionContext.prototype.conditionOperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionOperatorContext);
    } else {
        return this.getTypedRuleContext(ConditionOperatorContext,i);
    }
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitCondition(this);
	}
};




BrmsParser.ConditionContext = ConditionContext;

BrmsParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BrmsParser.RULE_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.booleanExpression();
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BrmsParser.And || _la===BrmsParser.Or) {
            this.state = 57;
            this.conditionOperator();
            this.state = 58;
            this.booleanExpression();
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_conditionOperator;
    return this;
}

ConditionOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionOperatorContext.prototype.constructor = ConditionOperatorContext;

ConditionOperatorContext.prototype.And = function() {
    return this.getToken(BrmsParser.And, 0);
};

ConditionOperatorContext.prototype.Or = function() {
    return this.getToken(BrmsParser.Or, 0);
};

ConditionOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterConditionOperator(this);
	}
};

ConditionOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitConditionOperator(this);
	}
};




BrmsParser.ConditionOperatorContext = ConditionOperatorContext;

BrmsParser.prototype.conditionOperator = function() {

    var localctx = new ConditionOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BrmsParser.RULE_conditionOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        _la = this._input.LA(1);
        if(!(_la===BrmsParser.And || _la===BrmsParser.Or)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_booleanExpression;
    return this;
}

BooleanExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanExpressionContext.prototype.constructor = BooleanExpressionContext;

BooleanExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BooleanExpressionContext.prototype.affirmation = function() {
    return this.getTypedRuleContext(AffirmationContext,0);
};

BooleanExpressionContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

BooleanExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterBooleanExpression(this);
	}
};

BooleanExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitBooleanExpression(this);
	}
};




BrmsParser.BooleanExpressionContext = BooleanExpressionContext;

BrmsParser.prototype.booleanExpression = function() {

    var localctx = new BooleanExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BrmsParser.RULE_booleanExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.expression();
        this.state = 72;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BrmsParser.Equal:
        case BrmsParser.NotEqual:
        case BrmsParser.Less:
        case BrmsParser.LessEqual:
        case BrmsParser.Greater:
        case BrmsParser.GreaterEqual:
            this.state = 68;
            this.operator();
            this.state = 69;
            this.expression();
            break;
        case BrmsParser.Is:
            this.state = 71;
            this.affirmation();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.StringLiteral = function() {
    return this.getToken(BrmsParser.StringLiteral, 0);
};

ExpressionContext.prototype.IdentifierWithAttribut = function() {
    return this.getToken(BrmsParser.IdentifierWithAttribut, 0);
};

ExpressionContext.prototype.FloatNumber = function() {
    return this.getToken(BrmsParser.FloatNumber, 0);
};

ExpressionContext.prototype.DigitSequence = function() {
    return this.getToken(BrmsParser.DigitSequence, 0);
};

ExpressionContext.prototype.AssignTrue = function() {
    return this.getToken(BrmsParser.AssignTrue, 0);
};

ExpressionContext.prototype.AssignFalse = function() {
    return this.getToken(BrmsParser.AssignFalse, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitExpression(this);
	}
};




BrmsParser.ExpressionContext = ExpressionContext;

BrmsParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BrmsParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 79;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BrmsParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.match(BrmsParser.StringLiteral);
            break;
        case BrmsParser.IdentifierWithAttribut:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.match(BrmsParser.IdentifierWithAttribut);
            break;
        case BrmsParser.DigitSequence:
        case BrmsParser.FloatNumber:
            this.enterOuterAlt(localctx, 3);
            this.state = 76;
            _la = this._input.LA(1);
            if(!(_la===BrmsParser.DigitSequence || _la===BrmsParser.FloatNumber)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case BrmsParser.AssignTrue:
            this.enterOuterAlt(localctx, 4);
            this.state = 77;
            this.match(BrmsParser.AssignTrue);
            break;
        case BrmsParser.AssignFalse:
            this.enterOuterAlt(localctx, 5);
            this.state = 78;
            this.match(BrmsParser.AssignFalse);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AffirmationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_affirmation;
    return this;
}

AffirmationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AffirmationContext.prototype.constructor = AffirmationContext;

AffirmationContext.prototype.Is = function() {
    return this.getToken(BrmsParser.Is, 0);
};

AffirmationContext.prototype.Defined = function() {
    return this.getToken(BrmsParser.Defined, 0);
};

AffirmationContext.prototype.True = function() {
    return this.getToken(BrmsParser.True, 0);
};

AffirmationContext.prototype.False = function() {
    return this.getToken(BrmsParser.False, 0);
};

AffirmationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterAffirmation(this);
	}
};

AffirmationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitAffirmation(this);
	}
};




BrmsParser.AffirmationContext = AffirmationContext;

BrmsParser.prototype.affirmation = function() {

    var localctx = new AffirmationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BrmsParser.RULE_affirmation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(BrmsParser.Is);
        this.state = 82;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BrmsParser.True) | (1 << BrmsParser.False) | (1 << BrmsParser.Defined))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_assignement;
    return this;
}

AssignementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignementContext.prototype.constructor = AssignementContext;

AssignementContext.prototype.IdentifierWithAttribut = function() {
    return this.getToken(BrmsParser.IdentifierWithAttribut, 0);
};

AssignementContext.prototype.Assign = function() {
    return this.getToken(BrmsParser.Assign, 0);
};

AssignementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterAssignement(this);
	}
};

AssignementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitAssignement(this);
	}
};




BrmsParser.AssignementContext = AssignementContext;

BrmsParser.prototype.assignement = function() {

    var localctx = new AssignementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BrmsParser.RULE_assignement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(BrmsParser.IdentifierWithAttribut);
        this.state = 85;
        this.match(BrmsParser.Assign);
        this.state = 86;
        this.expression();
        this.state = 87;
        this.match(BrmsParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BrmsParser.Identifier);
    } else {
        return this.getToken(BrmsParser.Identifier, i);
    }
};


ArgumentContext.prototype.LeftParen = function() {
    return this.getToken(BrmsParser.LeftParen, 0);
};

ArgumentContext.prototype.RightParen = function() {
    return this.getToken(BrmsParser.RightParen, 0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitArgument(this);
	}
};




BrmsParser.ArgumentContext = ArgumentContext;

BrmsParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BrmsParser.RULE_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(BrmsParser.Identifier);
        this.state = 90;
        this.match(BrmsParser.LeftParen);
        this.state = 91;
        this.match(BrmsParser.Identifier);
        this.state = 92;
        this.match(BrmsParser.RightParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BrmsParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.Equal = function() {
    return this.getToken(BrmsParser.Equal, 0);
};

OperatorContext.prototype.NotEqual = function() {
    return this.getToken(BrmsParser.NotEqual, 0);
};

OperatorContext.prototype.Less = function() {
    return this.getToken(BrmsParser.Less, 0);
};

OperatorContext.prototype.LessEqual = function() {
    return this.getToken(BrmsParser.LessEqual, 0);
};

OperatorContext.prototype.Greater = function() {
    return this.getToken(BrmsParser.Greater, 0);
};

OperatorContext.prototype.GreaterEqual = function() {
    return this.getToken(BrmsParser.GreaterEqual, 0);
};

OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof BrmsListener ) {
        listener.exitOperator(this);
	}
};




BrmsParser.OperatorContext = OperatorContext;

BrmsParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BrmsParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BrmsParser.Equal) | (1 << BrmsParser.NotEqual) | (1 << BrmsParser.Less) | (1 << BrmsParser.LessEqual) | (1 << BrmsParser.Greater) | (1 << BrmsParser.GreaterEqual))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.BrmsParser = BrmsParser;
