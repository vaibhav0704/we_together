import React from 'react'
import { FaUserCircle, FaMapMarkerAlt, FaUnlock} from 'react-icons/fa';
import { FiMail} from 'react-icons/fi';

const Profile = () => {

    return (
        <div className="container">
            <div className="profile-header">
            </div>
            <div className="avatar">
                <img className="avatar-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="user" />
            </div>
            <div className="form">
                <form className="row g-3">
                    <div className="input-group col-md-6">
                        <input type="text" className="form-control form-field" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon" required />
                        <span className="input-group-text form-field-right" id="basic-addon"><FaUserCircle /></span>
                    </div>
                    
                    <div className="input-group col-md-6">
                        <input type="text" className="form-control form-field" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon" required />
                        <span className="input-group-text form-field-right" id="basic-addon"><FiMail /></span>
                    </div>
                    
                    <div className="input-group col-md-6 mt-5">
                    <input type="text" className="form-control form-field" placeholder="Address" aria-label="Recipient's username" aria-describedby="basic-addon" required />
                        <span className="input-group-text form-field-right" id="basic-addon"><FaMapMarkerAlt /></span>
                    </div>
                    
                    <div className="input-group col-md-6 mt-5">
                        <select className="form-select form-control form-field" aria-label="Default select example">
                            <option selected>Register As: </option>
                            <option value="1">Volunteer</option>
                            <option value="2">Need Help</option>
                        </select>
                    </div>

                        <div className="input-group col-md-6 pt-5 mt-5">
                        <input type="text" className="form-control form-field" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon" required />
                            <span className="input-group-text form-field-right" id="basic-addon"><FaUnlock /></span>
                        </div>
                        
                        <div className="input-group col-md-6 pt-5 mt-5">
                        <input type="text" className="form-control form-field" placeholder="Confirm Password" aria-label="Recipient's username" aria-describedby="basic-addon" required />
                            <span className="input-group-text form-field-right" id="basic-addon"></span>
                        </div>

                </form>
            </div>
        </div>
    )
}

export default Profile;