/* eslint-disable react/prop-types */
import {PictureControls} from "./PictureControls";
import {useDispatch, useSelector} from "react-redux";
import {
    getActiveTab,
    getScreenshot,
    registerUser,
    setAuthError,
} from "../features/auth/authSlice";
import {Navigate} from "react-router-dom";
import {getFaces} from "../features/auth/facenetSlice";
import {useState} from "react";

export const Register = () => {
    // const isFirefox = typeof InstallTrigger !== 'undefined';

    const activeTab = useSelector(getActiveTab);
    const dispatch = useDispatch();
    const [studentId, setStudentId] = useState("");
    const screenshot = useSelector(getScreenshot);
    const faces = useSelector(getFaces);

    const manageForm = (e) => {
        e.preventDefault();
        validateInputs();
        if (studentId !== "" && screenshot != null && faces.length !== 0) {
            const user = {
                studentId,
                descriptor: Object.values(faces[0].descriptor),
            };
            dispatch(registerUser(user)).then((payload) => {
                if (payload.meta.requestStatus === "fulfilled") {
                    <Navigate to="/dashboard" />;
                }
            });
        }
    };

    const validateInputs = () => {
        if (screenshot == null) {
            dispatch(
                setAuthError({
                    register: {screenshot: "A face IMAGE is required."},
                })
            );
        } else {
            dispatch(setAuthError({register: {screenshot: null}}));
        }
    };

    return (
        <form
            className={
                "login100-form " + (activeTab === "register" ? "active" : "")
            }
        >
            <div>
                <p>Student</p>
                <select
                    name=""
                    id=""
                    onChange={(e) => setStudentId(e.target.value)}
                >
                    <option value="673c01105c54f043930b7fa0">Select</option>
                    <option value="">Select</option>
                    <option value="">Select</option>
                    <option value="673c01105c54f043930b7fa0">Select</option>
                </select>
            </div>

            <PictureControls />

            <div className="container-login100-form-btn">
                <button
                    type="button"
                    className="my-submit-btn zoom-in"
                    onClick={(e) => manageForm(e)}
                >
                    Register
                </button>
            </div>
        </form>
    );
};
