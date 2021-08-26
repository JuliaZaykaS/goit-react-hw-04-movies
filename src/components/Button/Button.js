import s from './Button.module.css';


export default function Button({onClickBtn}) {
    return (
        <button type="button" onClick={onClickBtn} className={s.button}>Go back</button>
    )
}