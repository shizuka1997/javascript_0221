class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cat extends Animal {
    constructor(name, age, type) {
        super(name, age);
        this.type = type;
    }

    speak() {
        console.log(this.name + 'が「にゃーん」と鳴きました！');
    }
}

const cat = new Cat('タマ', 3, 'シャム');

cat.speak();
