import "./header.css";

import React from "react";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";

import {
  faBed,
  faCalendarDays,
  faCar,
  faMountainSun,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext.js";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [openCal, setOpenCal] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const [destination, setDestination] = useState("");

  const [options, setOptions] = useState({
    adults: 1,
    childern: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        city: destination,
        dates: date,
        options: options,
      },
    });
    navigate("/hotels", { state: { destination, date, options } });
  };

  const handleOptions = (name, opt) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opt === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMountainSun} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDiscription">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free LamaBooking account.
            </p>
            {!user && (
              <Link to="/login">
                <button className="headerBtn">Sign in / Register</button>
              </Link>
            )}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where? (try madrid)"
                  className="headerSearchInput"
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenCal(!openCal)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/mm/yyyy"
                )}`}</span>
                {openCal && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adults} adults  |  ${options.childern} childerns  |  ${options.room} rooms`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionItemText">Adults</span>
                      <div className="optionsCounter">
                        <button
                          onClick={() => handleOptions("adults", "i")}
                          className="optionItemButton"
                        >
                          +
                        </button>
                        <span className="optionItemCounter">{`${options.adults}`}</span>
                        <button
                          onClick={() => handleOptions("adults", "d")}
                          className="optionItemButton"
                          disabled={options.adults <= 1}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionItemText">Childern</span>
                      <div className="optionsCounter">
                        <button
                          onClick={() => handleOptions("childern", "i")}
                          className="optionItemButton"
                        >
                          +
                        </button>
                        <span className="optionItemCounter">{`${options.childern}`}</span>
                        <button
                          onClick={() => handleOptions("childern", "d")}
                          className="optionItemButton"
                          disabled={options.childern <= 0}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionItemText">Rooms</span>
                      <div className="optionsCounter">
                        <button
                          onClick={() => handleOptions("room", "i")}
                          className="optionItemButton"
                        >
                          +
                        </button>
                        <span className="optionItemCounter">{`${options.room}`}</span>
                        <button
                          onClick={() => handleOptions("room", "d")}
                          className="optionItemButton"
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button onClick={handleSearch} className="headerBtn">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
