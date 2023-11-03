import './App.css'
import { Task } from './components/Task/Task.tsx'
import { TaskState } from './components/Task/types.ts'

const tasks = [
	{
		id: Date.now().toString(),
		title: 'Test task title',
		state: TaskState.TASK_INBOX
	},
	{
		id: Date.now().toString(),
		title: 'Test task title',
		state: TaskState.TASK_INBOX
	},
	{
		id: Date.now().toString(),
		title: 'Test task title',
		state: TaskState.TASK_INBOX
	},
	{
		id: Date.now().toString(),
		title: 'Test task title',
		state: TaskState.TASK_INBOX
	}
]

function App() {
	return (
		<>
			{tasks.map((task) => (
				<Task task={task} onArchiveTask={() => {}} onPinTask={() => {}} />
			))}
		</>
	)
}

export default App
