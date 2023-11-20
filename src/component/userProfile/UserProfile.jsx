import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";

import "./userProfile.css";
import { useState } from "react";

export default function UserProfile() {
  //state for view profile and edit profile view exchange
  const [viewProfile, setViewProfile] = useState(true);
  const [viewEditProfile, setViewEditProfile] = useState(false);

  //personal profile details
  const initialState = {
    firstname: "tenzin",
    lastname: "tashi",
    email: "tenzin12@gmail.com",
    address1: "dlihe hejjala post ramnagar bangalore karantak india",
    address2: "dlihe hejjala post ramnagar bangalore karantak india",
  };

  //profile img
  const [img, setImg] = useState(
    "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
  );
  const [personalDetail, setPersonalDetail] = useState(initialState);

  const [detail, setDetail] = useState(initialState);

  const onchangeHandlerPersonalDetail = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const updateHandler = () => {
    setPersonalDetail(detail);
    setDetail({ firstname: "",
    lastname: "",
    email: "",
    address1: "",
    address2: "",})
  };

  return (
    <>
      <TopNav />
      <Navbar />
      <div className="container">
        <div className="side-menu">
          <div className="sections">
            <h5 className="title">profile </h5>
            <p
              onClick={() => {
                setViewEditProfile(false);
                setViewProfile(true);
              }}
            >
              view profile
            </p>
            <p
              onClick={() => {
                setViewProfile(false);
                setViewEditProfile(true);
              }}
            >
              edit profile
            </p>
            <p>change my pasword</p>
            <p>order histry</p>
            <p>withdrwaal from membership </p>
          </div>
          <div className="sections">
            <h5 className="title">membership</h5>
            <p>profile</p>
            <p>coupons</p>
            <p>purchase history</p>
            <p>order history</p>
          </div>
        </div>
        <div className={viewProfile ? "visibleUserProfile" : "hidden"}>
          <div>
            <table>
              <tr>
                <td>
                  <p>profile image</p>
                  <img src={img} alt="img unavailable" />
                </td>
              </tr>
              <tr>
                <td>email addess</td>
                <td>{personalDetail.email}</td>
              </tr>

              <tr>
                <td>firtname </td>
                <td>{personalDetail.firstname} </td>
              </tr>
              <tr>
                <td>lastname </td>
                <td>{personalDetail.lastname} </td>
              </tr>
              <tr>
                <td>address 1</td>
                <td>{personalDetail.address1}</td>
              </tr>
              <tr>
                <td>address 2</td>
                <td>{personalDetail.address2}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={viewEditProfile ? "visibleUserProfile" : "hidden"}>
          <div className="edit-profile">
            <h1>edit your profile</h1>
            <table>
              <tr>
                <td>first name </td>
                <td>
                  <input
                    name="firstname"
                    type="text"
                    value={detail.firstname}
                    onChange={onchangeHandlerPersonalDetail}
                  />
                </td>
              </tr>
              <tr>
                <td>last name</td>
                <td>
                  <input
                    name="lastname"
                    type="text"
                    value={detail.lastname}
                    onChange={onchangeHandlerPersonalDetail}
                  />
                </td>
              </tr>
              <tr>
                <td>email address</td>
                <td>
                  <input 
                  value={detail.email}
                    name="email"
                    type="email"
                    onChange={onchangeHandlerPersonalDetail}
                  />
                </td>
              </tr>
              <tr>
                <td>address 1 </td>
                <textarea
                value={detail.address1}
                  name="address1"
                  id=""
                  cols="30"
                  onChange={onchangeHandlerPersonalDetail}
                  rows="5"
                ></textarea>
              </tr>
              <tr>
                <td>address 2 </td>
                <textarea
                value={detail.address2}
                  name="address2"
                  id=""
                  cols="30"
                  onChange={onchangeHandlerPersonalDetail}
                  rows="5"
                ></textarea>
              </tr>
              <tr>
                <td>change profile</td>
                <td>
                  <input
                    name="img"
                    type="file"
                    onChange={(e) => {
                      setImg(e.target.files[0].name);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <button className="update" onClick={updateHandler}>
                  update
                </button>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
