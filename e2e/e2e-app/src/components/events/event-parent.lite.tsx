import {useStore} from "@builder.io/mitosis";
import EventChild from "./event-child.lite";

export default function EventParent() {

    const state = useStore({
        _onModalCancel() {
           console.log('Modal canceled');
        },

        _onModalConfirm(name: string) {
            console.log(`Modal confirmed with name: ${name}`);
        },

    });


    return (
        <>
            <h1>Output Parent</h1>
            <EventChild onConfirm={(name) => state._onModalConfirm(name)} onCancel={() => state._onModalCancel()}></EventChild>

        </>
    );
}
