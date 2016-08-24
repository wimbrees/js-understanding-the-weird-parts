(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        // Return an instance of Greetr.init, so that there's no need to write "new" when calling G$ in app.js
        return new Greetr.init(firstName, lastName, language);
    };

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validateLanguage: function() {
            // if (!~supportedLangs.indexOf(this.language)) {
            // Same as:
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg = formal ? this.formalGreeting() : this.greeting();

            if (console) {
                console.log(msg);
            }

            // Return this so that the method is chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // Return this so that the method is chainable
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validateLanguage();

            // Return this so that the method is chainable
            return this;
        },

        HTMLGreeting: function(selector, formal, language) {
            this.language = language;

            if (!$) {
                throw 'jQuery not loaded';
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg = formal ? this.formalGreeting() : this.greeting();
            selector.text(msg);

            // Return this so that the method is chainable
            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language) {
                
        this.firstName = firstName || 'John';
        this.lastName = lastName || 'Doe';
        this.language = language || 'en';

    };

    // It's clearer to write the methods in Greetr.prototype
    Greetr.init.prototype = Greetr.prototype;

    // Expose two globals: Greetr and G$
    // global = window;
    global.Greetr = global.G$ = Greetr;

// window works for a browser, but the code could also be executed somewhere else
// jQuery is passed as an argument (not really needed), since any other libraries could be used to select elements from the DOM
})(window, $);