export interface Task {
  title: string;
  description: string;
  state: ProjectState;
  stack: { technology: string }[];
}

enum ProjectState {
  Cancelled = "Cancelled",
  Completed = "Completed",
  InProgress = "In Progress",
  Pending = "Pending",
  Blocked = "Blocked",
}
