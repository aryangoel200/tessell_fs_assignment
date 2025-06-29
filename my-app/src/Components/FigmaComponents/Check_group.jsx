import CheckBoxLA, { RadioLa } from "./Check_radio";

export default function Check_group({ selected, state }) {
    return <>
        <div className={`chk_group ${state} ${selected} `}>
            <div className={`sec_chk_group ${selected} ${state}`}>
                <RadioLa isChecked={selected} state={state} />
                <span className={`span_chk_gr ${selected} ${state}`}>This is a checkbox/radio</span>
            </div>
        </div>
    </>
}