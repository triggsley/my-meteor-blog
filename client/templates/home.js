Template.home.created = function(){
    console.log('Created the home template');
};

Template.home.rendered = function(){
    console.log('Rendered the home template');
};

Template.home.destroyed = function(){
    console.log('Destroyed the home template');
};

Template.home.helpers({
    exampleHelper: function(){
        return 'This text came from a helper with some <Strong>HTML</Strong>.';
    },

    dataContextHelper: function(){
        return {
            someText: 'This text was set using a help of the parent template.',
            someNested: {
                text: 'That comes from "someNested.text"'
            }
        };
    }
});


