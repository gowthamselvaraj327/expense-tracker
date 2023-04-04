import './ExpenseDate.css';
const ExpenseDate = (props) => {

    const { date } = props;
    const month = date.toLocaleString('en-IN', {month: 'long'});
    const date_ = date.toLocaleDateString('en-IN', {day: '2-digit'});
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{date_}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    )
};

export default ExpenseDate;