import { TaskState, TaskType } from './types.ts'

interface Props {
	task: TaskType
	onArchiveTask: (id: TaskType['id']) => void
	onPinTask: (id: TaskType['id']) => void
}
export function Task({
	task: { id, title, state },
	onArchiveTask,
	onPinTask
}: Props) {
	return (
		<div className={`list-item ${state}`}>
			<label
				htmlFor="checked"
				aria-label={`archiveTask-${id}`}
				className="checkbox"
			>
				<input
					type="checkbox"
					disabled={true}
					name="checked"
					id={`archiveTask-${id}`}
					checked={state === TaskState.TASK_ARCHIVED}
				/>
				<span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
			</label>

			<label htmlFor="title" aria-label={title} className="title">
				<input
					type="text"
					value={title}
					readOnly={true}
					name="title"
					placeholder="Input title"
				/>
			</label>

			{state !== TaskState.TASK_ARCHIVED && (
				<button
					className="pin-button"
					onClick={() => onPinTask(id)}
					id={`pinTask-${id}`}
					aria-label={`pinTask-${id}`}
					key={`pinTask-${id}`}
				>
					<span className={`icon-star`} />
				</button>
			)}
		</div>
	)
}
