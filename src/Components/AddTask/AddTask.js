import React, { useState } from 'react'

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(true)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('please add a task')
            return
        }
        onSave({ text, day, reminder })
        setText('')
        setDay('')
        setReminder('')


    }
    return (
        <form className=".add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" value={text} placeholder="add task" onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" value={day} placeholder="add Day and Time" onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} placeholder="add task" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save" />

        </form>
    )
}

export default AddTask
