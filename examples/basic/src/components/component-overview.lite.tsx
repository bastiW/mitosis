import Button from "../blocks/button.lite";
import Modal from "../blocks/modal.lite";
import {useStore} from "@builder.io/mitosis";

export default function ComponentOverview() {

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
            <Modal onConfirm={(name) => state._onModalConfirm(name)} onCancel={() => state._onModalCancel()}></Modal>
        </>
    );
}
