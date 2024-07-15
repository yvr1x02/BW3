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

function TopBar() {
    return (
      <Navbar expand="lg" className="ContTot">
        <Container className="StrutturaNav">
          <i className=" fs-1 bi bi-linkedin text-primary linkIcon"></i>
          <InputGroup>
            <InputGroupText className="iconSearch">
              <Search />
            </InputGroupText>
            <FormControl type="text" placeholder="Cerca" />
          </InputGroup>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-center txtNavBar">
                <i className=" fs-4 bi bi-house-door-fill"></i>Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-center txtNavBar">
                <i className=" fs-4 bi bi-people-fill "></i> Rete
              </Nav.Link>
              <Nav.Link href="#link" className="text-center txtNavBar">
                <i className=" fs-4 bi bi-briefcase-fill"></i> Lavoro
              </Nav.Link>
              <Nav.Link href="#link" className="text-center txtNavBar">
                <i className=" fs-4 bi bi-chat-dots-fill"></i> Messaggistica
              </Nav.Link>
              <Nav.Link href="#link" className="text-center txtNavBar">
                <i className=" fs-4 bi bi-bell-fill"></i> Notifiche
              </Nav.Link>
              <NavDropdown
                className="frstCont"
                title={
                  <span className="spanicon">
                    <i className="fs-4 bi bi-person-circle IconProfilo"></i>
                    <br />
                    <span className="txtNavBar">Profilo</span>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <Dropdown className="prova">
                  <DropdownItem eventKey="1">
                    <span className="d-flex">
                      <i className="bi bi-person-circle iconDropMenu"></i>
                      <span>
                        <p className="ms-2 text-center txtProfilName">
                          Pinco Pallo
                        </p>
                        <p className="infoDrop ms-2">Info</p>
                      </span>
                    </span>
                    <button className="btnDrop">Visualizza Profilo</button>
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
                  <p className="ms-3 pAccount">
                    Account per la pubblicazione di off...
                  </p>
                  <DropdownDivider />
                  <p className="ms-3 pAccount">Esci</p>
                </Dropdown>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>
          <div className="SecondElement">
            <NavDropdown
              title={
                <span>
                  <i className="fs-4 bi bi-grid-3x3-gap-fill ms-4"></i>
                  <br />
                  <span className="txtNavBar">Per le aziende</span>
                </span>
              }
              id="basic-nav-dropdown">
                
              <Dropdown className="DropMenuAziende" align="end">
                <DropdownItem eventKey="1">Action</DropdownItem>
                <DropdownItem eventKey="2">Another action</DropdownItem>
                <DropdownItem eventKey="3">Something else here</DropdownItem>
                <DropdownDivider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </Dropdown>
            </NavDropdown>
            <p className="txtp">Prova Premium per 0 EUR</p>
          </div>
        </Container>
      </Navbar>
    );
  }
export default TopBar;
