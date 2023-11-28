import { Template } from 'meteor/templating';
import { TasksCollection } from '../api/TasksCollection';
import './App.html'; 
import './Tasks.js';


Template.mainContainer.helpers({
    tasks() {
        return TasksCollection.find({}, { sort: {createdAt: -1} });
    }
});

Template.form.events({
    "submit .task-form"(event) {
        // prevent default browser form submit
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        TasksCollection.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value = "";
    }
})