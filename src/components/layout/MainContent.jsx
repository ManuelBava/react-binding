import ActivityList from "../sections/ActivityList";
import ChangeBtnStyleSection from "../sections/ChangeBtnStyleSection";
import ChangeLanguageSection from "../sections/ChangeLanguageSection";
import CounterSection from "../sections/CounterSection";
import TextAlignChangerSection from "../sections/TextAlignChangerSection";

export default function MainContent() {
    return (
        <>
            <CounterSection />
            <ChangeBtnStyleSection />
            <TextAlignChangerSection />
            <ChangeLanguageSection />
            <ActivityList />
        </>
    )
}