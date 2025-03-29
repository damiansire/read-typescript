[
  {
    type: "interface",
    name: "Task",
    exported: true,
    content: [
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "state", type: "ProjectState" },
    ],
  },
  {
    type: "enum",
    name: "ProjectState",
    exported: false,
    content: [
      { name: "Cancelled", value: "Cancelled" },
      { name: "Completed", value: "Completed" },
      { name: "InProgress", value: "In Progress" },
      { name: "Pending", value: "Pending" },
      { name: "Blocked", value: "Blocked" },
    ],
  },
];
