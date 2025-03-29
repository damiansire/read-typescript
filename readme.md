El objetivo final es algo de este estilo:

input

```
export interface Task {
  title: string;
  description: string;
  state: ProjectState;
}

enum ProjectState {
  Cancelled = "Cancelled",
  Completed = "Completed",
  InProgress = "In Progress",
  Pending = "Pending",
  Blocked = "Blocked",
}
```

output

```
[
  {
    type: "interface",
    name: "Task",
    content: [
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "state", type: "ProjectState" },
    ],
  },
  {
    type: "enum",
    name: "ProjectState",
    content: [
      { name: "Cancelled", value: "Cancelled" },
      { name: "Completed", value: "Completed" },
      { name: "InProgress", value: "In Progress" },
      { name: "Pending", value: "Pending" },
      { name: "Blocked", value: "Blocked" },
    ],
  },
];
```
