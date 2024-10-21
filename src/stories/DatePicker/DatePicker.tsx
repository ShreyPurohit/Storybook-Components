import { useState } from "react"

interface IDatePickerProps {
    onChange: (date: string) => void,
    value: string,
    withTimePicker: boolean,
    theme: 'light' | 'dark',
    withActionButtons: boolean,
    disabled: boolean
}

const DatePicker: React.FC<IDatePickerProps> = ({ value, theme, withActionButtons, disabled, onChange, withTimePicker }) => {
    const [date, setDate] = useState(value)
    const [time, setTime] = useState('')

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value
        setDate(newDate)
        onChange(`${newDate}${withTimePicker ? ` ${time}` : ''}`);
    }

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = e.target.value;
        setTime(newTime);
        onChange(`${date} ${newTime}`);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onChange(withTimePicker ? `${date} ${time}` : date);
    };

    const resetDateTime = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setDate('')
        setTime('')
    }

    const containerClass = theme === 'dark' ? 'bg-black text-white-400 border w-max' : 'bg-white text-black border w-max';

    return (
        <div className={`p-4 rounded ${containerClass}`}>
            <form className="flex flex-col items-center">
                <div className="border w-max border-black">
                    <input
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        disabled={disabled}
                        className={`p-2 focus:outline-none bg-stone-300 disabled:cursor-not-allowed disabled:text-stone-500 font-medium uppercase`}
                    />
                    {withTimePicker && (
                        <input
                            type="time"
                            value={time}
                            onChange={handleTimeChange}
                            disabled={disabled}
                            className={`p-2 font-medium uppercase focus:outline-none bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed`}
                        />
                    )}
                </div>
                {withActionButtons && (
                    <div className="flex justify-center gap-2 mt-2">
                        <button
                            onClick={handleSubmit}
                            disabled={disabled}
                            className={`px-3 py-1 border border-black uppercase bg-stone-300 font-medium rounded shadow hover:shadow-none tracking-wide disabled:text-stone-500 disabled:shadow-none disabled:cursor-not-allowed`}
                        >
                            Submit
                        </button>
                        <button
                            onClick={resetDateTime}
                            disabled={disabled}
                            className={`px-3 py-1 border border-black uppercase font-medium bg-stone-300 rounded shadow hover:shadow-none tracking-wide disabled:text-stone-500 disabled:shadow-none disabled:cursor-not-allowed`}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default DatePicker