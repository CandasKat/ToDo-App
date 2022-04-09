export class Model {
    user;
    items;

    constructor() {
        this.user = "Candas";
        this.items = [
            new TodoItem("Kahvalti",true),
            new TodoItem("Spor",false),
            new TodoItem("Kitap Okumak",true),
            new TodoItem("Oglen Yemegi",false),
            new TodoItem("Sinema",false)
        ];
    }
    
}

export class TodoItem {
    description;
    action;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}