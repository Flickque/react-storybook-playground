export type TaskType = {
	id: string
	title: string
	state: TaskState
}

export enum TaskState {
	TASK_INBOX,
	TASK_PINNED,
	TASK_ARCHIVED
}
