import { Template } from 'meteor/templating';

import './App.html'; 

Template.mainContainer.helpers({
    tasks: [
        {text: 'This is link 1'},
        {text: 'This is link 2'},
        {text: 'This is link 3'},
    ]
});