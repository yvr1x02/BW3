import { Component } from "react";
import { Container, Form, FormCheck, FormGroup, FormSelect, Row } from "react-bootstrap";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompetenzeInput: false,
      MediaInput: false,
      formValue: {
        informaRete: false,
        qualifica: '',
        impiego: '',
        nomeAzienda: '',
        località: '',
        attualmenteLavoro: false,
        dataInizioMese: '',
        dataInizioAnno: '',
        dataFineMese: '',
        dataFineAnno: '',
        terminaOra: false,
        descrizione: '',
        sommario: '',
        competenze: '',
        media: '',
      }
    };
  }

  render() {
    const { CompetenzeInput, MediaInput } = this.state;

    return (
      <Container>
        <Row className="ControlloPosi">
          <div className="ContainerForm scrollable-content">
            <div id="ContainerScrollBar">
              <div className="ContCheckForm">
                
                <div className="me-2">
                  <h6 className="pt-2">Informa la rete</h6>
                  <p className="">
                    Attiva l’opzione per informare la tua rete delle principali
                    modifiche al profilo (ad esempio un nuovo lavoro) e degli
                    anniversari lavorativi. Gli aggiornamenti possono richiedere
                    fino a 2 ore. Scopri di più sulla <span className="text-primary fw-bold spanForm">
                      condivisione delle modifiche del profilo.
                    </span>
                  </p>
                </div>
                <Form className="checkForm">
                  <h5 className="me-2">SI</h5>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    className="checkForm"
                    checked={this.state.formValue.informaRete}
                    onChange={(e) => {
                      this.setState({
                        formValue: {
                          ...this.state.formValue,
                          informaRete: e.target.checked,
                        }
                      })
                    }}
                  />
                </Form>
              </div>
              <div className="ps-4 pe-4 pt-2 pb-2">
                <label className="form-label">Qualifica</label>
                <div className="mb-4">
                  <input
                    className="form-controlForm form-control-sm"
                    type="text"
                    placeholder="Esempio: Retail Sales Manager"
                    aria-label=".form-control-sm example"
                    value={this.state.formValue.qualifica}
                    onChange={(e) => {
                      this.setState({
                        formValue: {
                          ...this.state.formValue,
                          qualifica: e.target.value,
                        }
                      })
                    }}
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="form-label">Tipo di impiego</label>
                  <FormSelect
                    className="form-select"
                    size="sm"
                    aria-label="Default select example"
                    value={this.state.formValue.impiego}
                    onChange={(e) => {
                      this.setState({
                        formValue: {
                          ...this.state.formValue,
                          impiego: e.target.value,
                        }
                      })
                    }}
                  >
                    <option value="">Seleziona</option>
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
                    Scopri di più sui <span className="text-primary fw-bold spanForm">
                      tipi di impiego.
                    </span>
                  </p>
                </div>

                <div className="mb-4">
                  <label className="form-label">Nome Azienda</label>
                  <input
                    className="form-controlForm form-control-sm"
                    type="text"
                    placeholder="Esempio: Microsoft"
                    aria-label=".form-control-sm example"
                    value={this.state.formValue.nomeAzienda}
                    onChange={(e) => {
                      this.setState({
                        formValue: {
                          ...this.state.formValue,
                          nomeAzienda: e.target.value,
                        }
                      })
                    }}
                  ></input>
                </div>

                <div className="mb-4">
                  <label className="form-label">Tipo di località</label>
                  <FormSelect
                    className="form-select"
                    size="sm"
                    aria-label="Default select example"
                    value={this.state.formValue.località}
                    onChange={(e) => {
                      this.setState({
                        formValue: {
                          ...this.state.formValue,
                          località: e.target.value,
                        }
                      })
                    }}
                  >
                    <option value="">Seleziona</option>
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
                        checked={this.state.formValue.attualmenteLavoro}
                        onChange={(e) => {
                          this.setState({
                            formValue: {
                              ...this.state.formValue,
                              attualmenteLavoro: e.target.checked,
                            }
                          })
                        }}
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
                      value={this.state.formValue.dataInizioMese}
                      onChange={(e) => {
                        this.setState({
                          formValue: {
                            ...this.state.formValue,
                            dataInizioMese: e.target.value,
                          }
                        })
                      }}
                    >
                      <option value="">Mese</option>
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
                      value={this.state.formValue.dataInizioAnno}
                      onChange={(e) => {
                        this.setState({
                          formValue: {
                            ...this.state.formValue,
                            dataInizioAnno: e.target.value,
                          }
                        })
                      }}
                    >
                      <option value="">Anno</option>
                      {Array.from(new Array(50), (val, index) => 2024 - index).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </Row>

                <Row className="form-select-container mb-4">
                  <label className="form-label">Data fine</label>
                  <div className="form-select1">
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      value={this.state.formValue.dataFineMese}
                      onChange={(e) => {
                        this.setState({
                          formValue: {
                            ...this.state.formValue,
                            dataFineMese: e.target.value,
                          }
                        })
                      }}
                    >
                      <option value="">Mese</option>
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
                      value={this.state.formValue.dataFineAnno}
                      onChange={(e) => {
                        this.setState({
                          formValue: {
                            ...this.state.formValue,
                            dataFineAnno: e.target.value,
                          }
                        })
                      }}
                    >
                      <option value="">Anno</option>
                      {Array.from(new Array(50), (val, index) => 2024 - index).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
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
                        checked={this.state.formValue.terminaOra}
                        onChange={(e) => {
                          this.setState({
                            formValue: {
                              ...this.state.formValue,
                              terminaOra: e.target.checked,
                            }
                          })
                        }}
                      />
                    </div>
                  ))}
                </Form>

                <FormGroup
                  className="mb-5"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="form-controlForm"
                    value={this.state.formValue.descrizione}
                    onChange={(e) => {
                      this.setState({
                        formValue: {
                          ...this.state.formValue,
                          descrizione: e.target.value,
                        }
                      })
                    }}
                  />
                </FormGroup>
                <div>
                  <label className="form-label fs-6 text-secondary">
                    Sommario del profilo
                  </label>
                  <input
                    className="form-controlForm form-control-sm"
                    type="text"
                    placeholder="Esempio: Retail Sales Manager"
                    aria-label=".form-control-sm example"
                    value={this.state.formValue.sommario}
                    onChange={(e) => {
                      this.setState({
                        formValue: {
                          ...this.state.formValue,
                          sommario: e.target.value,
                        }
                      })
                    }}
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
                  {!CompetenzeInput && (
                    <button 
                      onClick={() => this.setState({ CompetenzeInput: true })}
                      className="btnCompetenze"
                    >
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                x1="12"
                                x2="12"
                                y1="19"
                                y2="5"
                              />
                              <line
                                fill="#0066CC"
                                stroke="#0066CC"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
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
                  )}
                  {CompetenzeInput && (
                    <input
                      className="form-controlForm form-control-sm"
                      type="text"
                      placeholder="Esempio: Retail Sales Manager"
                      aria-label=".form-control-sm example"
                      value={this.state.formValue.competenze}
                      onChange={(e) => {
                        this.setState({
                          formValue: {
                            ...this.state.formValue,
                            competenze: e.target.value,
                          }
                        })
                      }}
                    ></input>
                  )}
                </div>

                <div>
                  <label className="form-label">
                    <h5 className="mt-4 fw-bold">Media</h5> <br />
                    <p>
                      Aggiungi contenuti multimediali come immagini, documenti,
                      siti o presentazioni. Scopri di più sui
                      <span>tipi di file multimediali supportati</span>
                    </p>
                  </label>
                  {!MediaInput && (
                    <button
                      onClick={() => this.setState({ MediaInput: true })}
                      className="btnCompetenze"
                    >
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                x1="12"
                                x2="12"
                                y1="19"
                                y2="5"
                              />
                              <line
                                fill="#0066CC"
                                stroke="#0066CC"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
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
                  )}
                  {MediaInput && (
                    <div className="containerDrop mt-2">
                      <div className="contenitoreDropDown1">
                        <div className="svgDropDown1">
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z"
                              fill="#1C274C"
                            />
                            <path
                              d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z"
                              fill="#1C274C"
                            />
                          </svg>
                        </div>
                        <div>
                          <h6>Aggiungi link</h6>
                          <p>Usalo per video,articoli e siti web</p>
                        </div>
                      </div>
                      <hr className="hrDropDownForm" />
                      <div className="contenitoreDropDown2">
                        <div className="svgDropDown2">
                          <svg
                            fill="#000000"
                            width="30px"
                            height="30px"
                            viewBox="0 0 36 36"
                            version="1.1"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>image-gallery-solid</title>
                            <path
                              d="M30.14,3h0a1,1,0,0,0-1-1h-22a1,1,0,0,0-1,1h0V4h24Z"
                              className="clr-i-solid clr-i-solid-path-1"
                            ></path>
                            <path
                              d="M32.12,7V7a1,1,0,0,0-1-1h-26a1,1,0,0,0-1,1h0V8h28Z"
                              className="clr-i-solid clr-i-solid-path-2"
                            ></path>
                            <path
                              d="M32.12,10H3.88A1.88,1.88,0,0,0,2,11.88V30.12A1.88,1.88,0,0,0,3.88,32H32.12A1.88,1.88,0,0,0,34,30.12V11.88A1.88,1.88,0,0,0,32.12,10ZM8.56,13.45a3,3,0,1,1-3,3A3,3,0,0,1,8.56,13.45ZM30,28h-24l7.46-7.47a.71.71,0,0,1,1,0l3.68,3.68L23.21,19a.71.71,0,0,1,1,0L30,24.79Z"
                              className="clr-i-solid clr-i-solid-path-3"
                            ></path>
                            <rect
                              x="0"
                              y="0"
                              width="36"
                              height="36"
                              fillOpacity="0"
                            />
                          </svg>
                        </div>
                        <div>
                          <h6>
                            Aggiungi contenuto <br /> multimediale{" "}
                          </h6>
                          <p>Carica immagini,presentazioni o documenti</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="fissa">
                 <hr /> 
                <div className="fissa d-flex justify-content-end">
                  <button className="fw-bold btnForm mb-2">Salva</button>
                </div> 
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default FormPage;
