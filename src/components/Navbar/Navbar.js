import React from "react";
import { Link } from "react-router-dom";
import * as Cgicons from "react-icons/cg";
import * as Ioicons from "react-icons/io";
import * as Bsicons from "react-icons/bs";
import * as Vscicons from "react-icons/vsc";
import "./Navbar.css";

function Navbars() {
  // search = (e) => {
  //   const value = e.target.value;
  //   const todos = this.state.todos.filter((todo) => {
  //     return todo.content.toLowerCase().includes(value);
  //   });
  //   console.log(value);
  //   this.setState({
  //     todos,
  //   });
  // };

  return (
    <>
      <div className="navbar">
        <div className="todo">
          <Cgicons.CgMenuGridO className="iconmenu" />
          <span>To Do</span>
        </div>
        {/* <div className="col-md-7 searchs">
          <div className="search" data-placement="left" title="Search">
            <div className="btn-search">
              <button>
                <Cgicons.CgSearch className="iconsearch" />
              </button>
            </div>
            <div className="input-search">
              <input type="search" />
            </div>
          </div>
        </div> */}
        <div className="setting">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Cgicons.CgProfile className="iconsetting" />
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <Link class="dropdown-item" to="/login">
                Logout
              </Link>
            </div>
          </div>
          {/* <div className="Question">
            <Bsicons.BsQuestion className="iconsetting" />
          </div> */}
          {/* <div className="settings">
            <Ioicons.IoMdSettings className="iconsetting" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbars;
