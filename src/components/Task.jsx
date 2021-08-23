import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import { addDays, isAfter, isBefore, isToday } from 'date-fns'





const FORMAT = "dd/MM/yyyy";

function formatDate(date, format, locale) {
	return dateFnsFormat(date, format, { locale });
}

const AddTask = ({ onAddTask, onCancel }) => {
	const [task, setTask] = useState("");
	const [date, setDate] = useState(null);
	return (
		<div className="add-task-dialog">
			<input value={task} onChange={(event) => setTask(event.target.value)} />
			<div className="add-task-actions">

				<div className="btns-container">
					<button disabled={!task} className="add-btn" onClick={() => { onAddTask(task, date); setTask("") }}>ADD</button>
					<button className="cancel-btn" onClick={() => { onCancel(); setTask("") }} >CANCEL</button>

				</div>
				<div className="icons-container">
					<DayPickerInput
						onDayChange={(day) => setDate(day)}
						placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
						formatDate={formatDate}
						format={FORMAT}
						dayPickerProps={
							{ modifiers: { disabled: [{ before: new Date() }], } }
						}
					/>
				</div>
			</div>

		</div>
	)
}

const Task_Mapping = {
	INBOX: "Inbox",
	TODAY: "Today",
	NEXT7: "Next 7 Days",
};

const TaskItems = ({ selectedTab, tasks }) => {

	console.log(selectedTab);
	console.log(tasks);


	if (selectedTab === "INBOX") {
		return (

			tasks.length > 0 ? tasks.map((task) => <div className="inbx">

				<span id='spn1'>{task.text}</span>   <span>{dateFnsFormat(new Date(task.date), FORMAT)}</span>
			</div>) : <p>NO TASKS YET</p>

		)
	}



	if (selectedTab === "NEXT7") {
		return (tasks.filter(
			(task) => isAfter(task.date, new Date()) && isBefore(task.date, addDays(new Date(), 7))

		).map((task) => (
			<p>
				{task.text}  {dateFnsFormat(new Date(task.date), FORMAT)} {" "}
			</p>
		)));

	}


	if (selectedTab === "TODAY") {
		return tasks.filter(
			(task) => isToday(task.date)
		).map(
			(task) => (


				<div className="tdy">

					<span id='spn1'>{task.text}</span>   <span>{dateFnsFormat(new Date(task.date), FORMAT)}</span>
				</div>

			)
		);
	}

}




function Task({ selectedTab }) {

	const [showTask, setShowTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	const addNewTask = (text, date) => {
		console.log("text :" + text);
		console.log("date: " + date);
		const newTaskItem = { text, date: date || new Date() }
		setTasks([...tasks, newTaskItem]);
	};

	return (
		<div className="task">
			<h2>{Task_Mapping[selectedTab]}</h2>

			<div className="add-task-btn" onClick={() => setShowTask(!showTask)}>
				<span className="plus">+</span>
				<span className="add-task-text"> ADD TASK</span>
			</div>

			{showTask && <AddTask onAddTask={addNewTask} onCancel={() => setShowTask(false)} />}


			{/* 
			{tasks.length > 0 ? tasks.map((task) => <p>
				{task.text}
				{dateFnsFormat(new Date(task.date), FORMAT)}
			</p>) : <p>NO TASKS YET</p>} */}



			{tasks.length > 0 ? (
				<TaskItems tasks={tasks} selectedTab={selectedTab} />

			) : (<p>NO TASKS</p>)}
		</div>


	);
};

export default Task
