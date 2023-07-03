pragma solidity 0.5.16;

contract HealthGuard {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;
    
    constructor() public {
        createTask("Check out me.com");
    }

    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

    function getTasks() public view returns (address[] memory) {
        return tasks;
    }
}