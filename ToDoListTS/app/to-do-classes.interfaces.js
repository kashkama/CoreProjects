var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority) {
            this.description = description;
            this.priority = priority;
            this.done = false;
        }
        ;
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description, priority) {
            var _this = _super.call(this, description, priority) || this;
            _this.description = description;
            _this.priority = priority;
            return _this;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
