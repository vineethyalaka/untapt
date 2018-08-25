listController.prototype = {
    addTolist: function() {
        if (this.itemname === "") {
            return false;
        }

        this.todos.push({
            name: this.itemname,
            quantity: this.toquantity,
            done: false
        });

        this.itemname = '';
        this.toquantity = 0;
    }
};

function basketController() {
    this.editorEnabled = false;
}

basketController.prototype = {
    enableEditor: function() {
        this.editorEnabled = true;

        this.itemname = this.todo.name;
        this.toquantity = this.todo.quantity;
    },

    disableEditor: function() {
        this.editorEnabled = false;
    },

    save: function() {
        if (this.itemname === "") {
            return false;
        }

        this.todo.name = this.itemname;
        this.todo.quantity = this.toquantity;

        this.disableEditor();
    }
};

function listController() {
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.todos = [{
        name: "Milk",
        quantity: 1,
        done: false},
    {
        name: "Cereal",
        quantity: 2,
        done: true},
    {
        name: 'Cheddar Cheese',
        quantity: 3,
        done: false},
	{
        name: 'Goat Cheese',
        quantity: 1,
        done: false}];
}