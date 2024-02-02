import React from "react";

const ModalDialog = () => {
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>showModal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className=" flex modal-box">
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalDialog;
