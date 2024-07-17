import {
  Container,
  Form,
  FormCheck,
  FormGroup,
  FormSelect,
  Row,
} from "react-bootstrap";
function FormExp() {
  return (
    <Container>
      <Row className="ControlloPosi">
        <div className="ContainerForm scrollable-content">
          <div className="d-flex justify-content-between ps-4 pe-4 pt-2 pb-2">
            <h4>Aggiungi Esperienza</h4>
            <button className="buttonExit">X</button>
          </div>
          <div id="ContainerScrollBar">
            <div className="ContCheckForm">
              <div>
                <h6 className="pt-2">Informa la rete</h6>
                <p className="">
                  Attiva l’opzione per informare la tua rete delle principali
                  modifiche al profilo (ad esempio un nuovo lavoro) e degli
                  anniversari lavorativi. Gli aggiornamenti possono richiedere
                  fino a 2 ore. Scopri di più sulla{" "}
                  <span className="text-primary fw-bold spanForm">
                    condivisione delle modifiche del profilo.
                  </span>
                </p>
              </div>
              <Form className="checkForm">
                <h5>SI</h5>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label=""
                  className="checkForm"
                />
              </Form>
            </div>
            <div className="ps-4 pe-4 pt-2 pb-2">
              <div className="mb-4">
                <label className="form-label">Qualifica</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Esempio: Retail Sales Manager"
                  aria-label=".form-control-sm example"
                ></input>
              </div>
              <div className="mb-4">
                <label className="form-label">Tipo di impiego</label>
                <FormSelect
                  className="form-select"
                  size="sm"
                  aria-label="Default select example"
                >
                  <option selected>Seleziona</option>
                  <option value="1">A tempo Pieno</option>
                  <option value="2">Part-time</option>
                  <option value="3">Autonomo</option>
                  <option value="4">Freelance</option>
                  <option value="5">A contratto</option>
                  <option value="6">Stage</option>
                  <option value="7">Apprendistato</option>
                  <option value="8">Stagionale</option>
                </FormSelect>
                <p>
                  Scopri di più sui{" "}
                  <span className="text-primary fw-bold spanForm">
                    tipi di impiego.
                  </span>
                </p>
              </div>

              <div className="mb-4">
                <label className="form-label">Nome Azienda</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Esempio: Microsoft"
                  aria-label=".form-control-sm example"
                ></input>
              </div>

              <div className="mb-4">
                <label className="form-label">Tipo di località</label>
                <FormSelect
                  className="form-select"
                  size="sm"
                  aria-label="Default select example"
                >
                  <option selected>Seleziona</option>
                  <option value="1">In sede</option>
                  <option value="2">Ibrida</option>
                  <option value="3">Da remoto</option>
                </FormSelect>
                <p className="text-secondary">
                  Scegli un tipo di località (es. da remoto)
                </p>
              </div>

              <Form className="mt-5 mb-4">
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <FormCheck
                      type={type}
                      id={`default-${type}`}
                      label={`Attualmente ricopro questo ruolo`}
                    />
                  </div>
                ))}
              </Form>

              <Row className="form-select-container mb-4">
                <label className="form-label">Data inizio</label>
                <div className="form-select1">
                  <select
                    className="form-select form-select-sm col-6"
                    aria-label="Small select example"
                  >
                    <option selected>Mese</option>
                    <option value="1">Gennaio</option>
                    <option value="2">Febbraio</option>
                    <option value="3">Marzo</option>
                    <option value="4">Aprile</option>
                    <option value="5">Maggio</option>
                    <option value="6">Giugno</option>
                    <option value="7">Luglio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Settembre</option>
                    <option value="10">Ottobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Dicembre</option>
                  </select>
                </div>
                <div className="form-select1">
                  <select
                    className="form-select form-select-sm col-6"
                    aria-label="Small select example"
                  >
                    <option selected>Anno</option>
                    <option value="1">2024</option>
                    <option value="2">2023</option>
                    <option value="3">2024</option>
                    <option value="4">2022</option>
                    <option value="5">2021</option>
                    <option value="6">2020</option>
                    <option value="7">2019</option>
                    <option value="8">2018</option>
                    <option value="9">2017</option>
                    <option value="10">2016</option>
                    <option value="11">2015</option>
                    <option value="12">2014</option>
                    <option value="13">202</option>
                    <option value="14">2013</option>
                    <option value="15">2012</option>
                    <option value="16">2011</option>
                    <option value="17">2010</option>
                    <option value="18">2009</option>
                    <option value="19">2008</option>
                    <option value="20">2007</option>
                    <option value="21">2006</option>
                    <option value="1">2005</option>
                    <option value="2">2004</option>
                    <option value="3">2003</option>
                    <option value="1">2002</option>
                    <option value="2">2001</option>
                    <option value="3">2000</option>
                    <option value="1">1999</option>
                    <option value="2">1998</option>
                    <option value="3">1997</option>
                    <option value="1">1996</option>
                    <option value="2">1995</option>
                    <option value="3">1994</option>
                    <option value="1">1993</option>
                    <option value="2">1992</option>
                    <option value="3">1991</option>
                    <option value="1">1990</option>
                    <option value="2">1989</option>
                    <option value="3">1987</option>
                    <option value="1">202</option>
                    <option value="2">1986</option>
                    <option value="3">1985</option>
                    <option value="1">1984</option>
                    <option value="2">1983</option>
                    <option value="3">1982</option>
                    <option value="1">1981</option>
                    <option value="2">1980</option>
                  </select>
                </div>
              </Row>

              <Row className="form-select-container mb-4">
                <label className="form-label">Data fine</label>
                <div className="form-select1">
                  <select
                    className="form-select form-select-sm"
                    aria-label="Small select example"
                  >
                    <option selected>Mese</option>
                    <option value="1">Gennaio</option>
                    <option value="2">Febbraio</option>
                    <option value="3">Marzo</option>
                    <option value="4">Aprile</option>
                    <option value="5">Maggio</option>
                    <option value="6">Giugno</option>
                    <option value="7">Luglio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Settembre</option>
                    <option value="10">Ottobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Dicembre</option>
                  </select>
                </div>
                <div className="form-select1">
                  <select
                    className="form-select form-select-sm"
                    aria-label="Small select example"
                  >
                    <option selected>Anno</option>
                    <option value="1">2024</option>
                    <option value="2">2023</option>
                    <option value="3">2024</option>
                    <option value="4">2022</option>
                    <option value="5">2021</option>
                    <option value="6">2020</option>
                    <option value="7">2019</option>
                    <option value="8">2018</option>
                    <option value="9">2017</option>
                    <option value="10">2016</option>
                    <option value="11">2015</option>
                    <option value="12">2014</option>
                    <option value="13">202</option>
                    <option value="14">2013</option>
                    <option value="15">2012</option>
                    <option value="16">2011</option>
                    <option value="17">2010</option>
                    <option value="18">2009</option>
                    <option value="19">2008</option>
                    <option value="20">2007</option>
                    <option value="21">2006</option>
                    <option value="1">2005</option>
                    <option value="2">2004</option>
                    <option value="3">2003</option>
                    <option value="1">2002</option>
                    <option value="2">2001</option>
                    <option value="3">2000</option>
                    <option value="1">1999</option>
                    <option value="2">1998</option>
                    <option value="3">1997</option>
                    <option value="1">1996</option>
                    <option value="2">1995</option>
                    <option value="3">1994</option>
                    <option value="1">1993</option>
                    <option value="2">1992</option>
                    <option value="3">1991</option>
                    <option value="1">1990</option>
                    <option value="2">1989</option>
                    <option value="3">1987</option>
                    <option value="2">1986</option>
                    <option value="3">1985</option>
                    <option value="1">1984</option>
                    <option value="2">1983</option>
                    <option value="3">1982</option>
                    <option value="1">1981</option>
                    <option value="2">1980</option>
                  </select>
                </div>
              </Row>

              <Form className="mb-4">
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <FormCheck
                      className="checkSize"
                      type={type}
                      id={`default-${type}`}
                      label={`Termina ora la posizione attuale:`}
                    />
                  </div>
                ))}
              </Form>

              <FormGroup
                className="mb-5"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrizione</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </FormGroup>
              <div>
                <label className="form-label fs-6 text-secondary">
                  Sommario del profilo
                </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Esempio: Retail Sales Manager"
                  aria-label=".form-control-sm example"
                ></input>
                <span className="spanfs">
                  Compare sotto il tuo nome nella parte superiore del profilo
                </span>
              </div>

              <div className="mt-4">
                <label className="form-label">
                  <span className="fs-5 fw-bold">Competenze</span> <br />
                  <p>
                    Ti consigliamo di aggiungere le 5 competenze più utilizzate
                    in questo ruolo. Appariranno anche nella sezione Competenze.
                  </p>
                </label>
                <button className="btnCompetenze">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />

                    <g id="Complete">
                      <g data-name="add" id="add-2">
                        <g>
                          <line
                            fill="#0066CC"
                            stroke="#0066CC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="12"
                            x2="12"
                            y1="19"
                            y2="5"
                          />

                          <line
                            fill="#0066CC"
                            stroke="#0066CC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="5"
                            x2="19"
                            y1="12"
                            y2="12"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Aggiungi una competenza
                </button>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Esempio: Retail Sales Manager"
                  aria-label=".form-control-sm example"
                ></input>
              </div>

                  <div>

              <label className="form-label">
                <h5>Media</h5> <br />
                <p>
                  Aggiungi contenuti multimediali come immagini, documenti, siti
                  o presentazioni. Scopri di più sui{" "}
                  <span>tipi di file multimediali supportati</span>
                </p>
              </label>
              <button className="btnCompetenze">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />

                    <g id="Complete">
                      <g data-name="add" id="add-2">
                        <g>
                          <line
                            fill="#0066CC"
                            stroke="#0066CC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="12"
                            x2="12"
                            y1="19"
                            y2="5"
                          />

                          <line
                            fill="#0066CC"
                            stroke="#0066CC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="5"
                            x2="19"
                            y1="12"
                            y2="12"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Aggiungi media
                </button>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Esempio: Retail Sales Manager"
                  aria-label=".form-control-sm example"
                ></input>
                  </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
              <button className=" fw-bold btnForm mb-2">Salva</button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default FormExp;
