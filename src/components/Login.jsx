/* eslint-disable react/prop-types */
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {
    getActiveTab,
    getAuthError,
    getRequest,
    getScreenshot,
    loginUser,
    setAuthError,
} from "../features/auth/authSlice";
import {getFaces} from "../features/auth/facenetSlice";
import {PictureControls} from "./PictureControls";
import {useState} from "react";

export const Login = ({enableInput}) => {
    // const isFirefox = typeof InstallTrigger !== 'undefined';
    const [classDay, setClassday] = useState(0);
    const [studentId, setStudentId] = useState("");

    const activeTab = useSelector(getActiveTab);
    const dispatch = useDispatch();
    const request = useSelector(getRequest);
  
    const screenshot = useSelector(getScreenshot);
    const error = useSelector(getAuthError);
    const faces = useSelector(getFaces);

    const manageForm = (e) => {
        e.preventDefault();
        dispatch(setAuthError({login: {serverErr: null}}));

        if (screenshot != null && faces.length !== 0) {
            const user = {
                studentId,
                classDay,
                descriptor: Object.values(faces[0].descriptor),
            };
            dispatch(loginUser(user)).then((payload) => {
                if (payload.meta.requestStatus === "fulfilled") {
                    <Navigate to="/dashboard" />;
                }
            });
        }
    };

    return (
        <form
            className={
                "login100-form " + (activeTab === "login" ? "active" : "")
            }
        >
            <div>
                <p>Classday</p>
                <select
                    name=""
                    id=""
                    onChange={(e) => setClassday(e.target.value)}
                    value={classDay}
                >   
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
            <div>
                <p>Students</p>
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
                    Login
                </button>
            </div>
        </form>
    );
};
