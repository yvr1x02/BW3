import {
  Container,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  NavDropdown,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import ContentProfile from "./ContentProfile";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function TopBar() {
  const [activeLink, setActiveLink] = useState(null); //!!!!TRACCIAMENTO DEL LINK SELEZIONATO!!!!
  const navigate = useNavigate();
  const handleLinkClick = (link) => {
    //!!!!!! handLinkClick PRENDE IL LINK AL CLICK
    setActiveLink(link);
  };
  return (
    <Navbar expand="lg" className="ContTot">
      <Container className="StrutturaNav">
        <NavLink to="/HomePage" className="linkIcon">
          <i className=" fs-1 bi bi-linkedin text-primary linkIcon"></i>
        </NavLink>
        <InputGroup>
          <InputGroupText className="iconSearch">
            <Search />
          </InputGroupText>
          <FormControl type="text" placeholder="Cerca" />
        </InputGroup>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto navBarTot">
            <NavLink
              href="#home"
              to="/HomePage"
              className="{`text-center txtNavBar ${activeLink === '#home' ? 'active' : ''}`} Home-link" //!!!!  'activeLink' è uguale al valore #href SEMPRE   Se activeLink è uguale a #home, aggiungi anche la classe active
              onClick={() => handleLinkClick("#home")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
              </svg>{" "}
              Home
            </NavLink>
            <Nav.Link
              href="#rete"
              className={`text-center txtNavBar ${activeLink === "#rete" ? "active" : ""}`}
              onClick={() => handleLinkClick("#rete")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
              </svg>{" "}
              Rete
            </Nav.Link>
            <Nav.Link
              href="#lavoro"
              className={`text-center txtNavBar ${activeLink === "#lavoro" ? "active" : ""}`}
              onClick={() => handleLinkClick("#lavoro")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>{" "}
              Lavoro
            </Nav.Link>
            <Nav.Link
              href="#messaggistica"
              className={`text-center txtNavBar ${activeLink === "#messaggistica" ? "active" : ""}`}
              onClick={() => handleLinkClick("#messaggistica")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>{" "}
              Messaggistica
            </Nav.Link>
            <Nav.Link
              href="#notifiche"
              className={`text-center txtNavBar ${activeLink === "#notifiche" ? "active" : ""}`}
              onClick={() => handleLinkClick("#notifiche")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>{" "}
              Notifiche
            </Nav.Link>
            <NavDropdown
              title={
                <span className="spanicon">
                  <img
                    width="22"
                    src="https://media.licdn.com/dms/image/D4E03AQGeXEc1cR5ocw/profile-displayphoto-shrink_100_100/0/1716390382871?e=1726704000&amp;v=beta&amp;t=af8yDGEvQF-fwdZhugrzJgU6neYQB0Vsx5rrWsWM13M"
                    height="22"
                    alt="Mattia Susin"
                    id="ember17"
                    className="global-nav__me-photo evi-image ember-view iconProfiloNavBar"
                  />
                  <br />
                  <span id="ProfiloTxt">Profilo</span>
                </span>
              }
              id="basic-nav-dropdown"
              className="DropCont1"
            >
              <Dropdown className="prova">
                <DropdownItem eventKey="1">
                  <span className="d-flex">
                    <i className="bi bi-person-circle iconDropMenu"></i>
                    <span>
                      <p className="ms-2 text-center txtProfilName">Pinco Pallo</p>
                      <p className="infoDrop ms-2">Info</p>
                    </span>
                  </span>
                  <NavLink to="/ProfilePage">
                    <button className="btnDrop">Visualizza Profilo</button>
                  </NavLink>
                  <DropdownDivider />
                </DropdownItem>
                <DropdownItem eventKey="2" className="fw-bold">
                  Account
                </DropdownItem>
                <p className="ms-3 fw-bold pAccount">
                  {" "}
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/emoji/48/yellow-square-emoji.png"
                    alt="yellow-square-emoji"
                  />{" "}
                  Prova 1 mese di Premium per 0 EUR
                </p>
                <p className="ms-3 pAccount ">Impostazioni e Privacy</p>
                <p className="ms-3 pAccount ">Guida</p>
                <p className="ms-3 pAccount ">Lingua</p>
                <DropdownDivider />
                <DropdownItem eventKey="3" className="fw-bold">
                  Gestisci
                </DropdownItem>
                <p className="ms-3 pAccount">Post e Attività</p>
                <p className="ms-3 pAccount">Account per la pubblicazione di off...</p>
                <DropdownDivider />
                <p className="ms-3 pAccount">Esci</p>
              </Dropdown>
            </NavDropdown>
          </Nav>
          <div className="vr"></div>
        </NavbarCollapse>
        <div className="SecondElement dropdown-wrapper">
          <NavDropdown
            title={
              <span className="grillSpan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match grigliaIcon"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <br />
                <span className="txtNavBar" id="grillSpan">
                  Per le aziende
                </span>
              </span>
            }
            id="nav-dropdown"
            align="end"
            className="custom-nav-dropdown DropCont"
          >
            <Dropdown className="dropdown-menu-left">
              <ContentProfile />
            </Dropdown>
          </NavDropdown>
          <p className="txtp">Prova Premium per 0 EUR</p>
        </div>
      </Container>
    </Navbar>
  );
}
export default TopBar;
