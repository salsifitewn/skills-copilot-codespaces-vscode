function skillsMember() {
    var member = {
        name: 'John',
        age: 18,
        skills: ['C++', 'Java', 'Javascript'],
        sayHello: function() {
            console.log('Hello, my name is ' + this.name);
        }
    };
    member.sayHello();
    console.log('My skills: ' + member.skills.join(', '));
}