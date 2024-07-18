import { useState, useEffect } from "react";
import { Modal, Button, Form, FormGroup, FormSelect, FormCheck } from "react-bootstrap";

const ExperienceModal = ({ show, handleClose, handleSave, experience }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [image, setImage] = useState(null);

  

  useEffect(() => {
    if (experience) {
      setRole(experience.role);
      setCompany(experience.company);
      setStartDate(experience.startDate);
      setEndDate(experience.endDate);
      setDescription(experience.description);
      setArea(experience.area);
    }
  }, [experience]);

  const handleSubmit = () => {
    const exp = { role, company, startDate, endDate, description, area };
    handleSave(exp, image);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{experience ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bodyForm modal-body-scrollable">
        <div className="ContCheckForm">
          <div>
            <h6 className="pt-2">Informa la rete</h6>
          </div>
          <div className="d-flex">
            <p className="">
              Attiva l’opzione per informare la tua rete delle principali modifiche al profilo (ad esempio un nuovo lavoro) e degli anniversari lavorativi. Gli aggiornamenti possono richiedere fino a 2 ore. Scopri di più sulla <span className="text-primary fw-bold spanForm">condivisione delle modifiche del profilo.</span>
            </p>
            <h5 className="me-2 d-flex align-items-center">SI</h5>
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              className="checkForm"
            />
          </div>
        </div>
        <Form className="ms-4 me-4">
          <Form.Group controlId="formRole">
            <Form.Label>Qualifica*</Form.Label>
            <Form.Control
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Esempio: Retail Sales Manager"
            />
          </Form.Group>
          <Form.Label>Tipo di impiego</Form.Label>
          <Form.Select
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Esempio: Retail Sales Manager"
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
          </Form.Select>
          <p>
            Scopri di più sui <span className="text-primary fw-bold spanForm">tipi di impiego.</span>
          </p>
          <FormGroup>
          </FormGroup>
          <Form.Group controlId="formCompany">
            <Form.Label>Nome Azienda*</Form.Label>
            <Form.Control
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Esempio: Microsoft"
            />
            <FormGroup>
              <label className="form-label">Tipo di località</label>
              <FormSelect
                className="form-select"
                size="sm"
                aria-label="Default select example"
              >
                <option value="">Seleziona</option>
                <option value="1">In sede</option>
                <option value="2">Ibrida</option>
                <option value="3">Da remoto</option>
              </FormSelect>
              <p className="text-secondary">Scegli un tipo di località (es. da remoto)</p>
            </FormGroup>
            <FormGroup>
              <div className="d-flex ">
              <FormCheck  label={``} />
              <p className="mt-1">Attualmente ricopro questo ruolo</p>
              </div>
              
            </FormGroup>
          </Form.Group>
          <Form.Group controlId="formStartDate">
            <Form.Label>Data Inizio*</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEndDate">
            <Form.Label>Data Fine*</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <FormGroup>
            <div className="d-flex"> 

            <FormCheck className="checkSize" label={``} /> 
            <p className="mt-1">Termina ora la posizione attuale</p>
            </div>
          </FormGroup>
          <Form.Group controlId="formDescription">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
             as="textarea"
             rows={3}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formArea">
            <Form.Label>Sommario del profilo</Form.Label>
            <Form.Control
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Esempio: Retail Sales Manager"
            />
          <span className="spanfs">Compare sotto il tuo nome nella parte superiore del profilo</span>
          </Form.Group>
          <label className="form-label">
                    <h6 className="fs-5 fw-bold m-0 mt-3">Competenze</h6> <br />
                    <button 
                      onClick={() => this.setState({ CompetenzeInput: true })}
                      className="btnCompetenze mb-4"
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
                    <p>
                      Ti consigliamo di aggiungere le 5 competenze più utilizzate
                      in questo ruolo. Appariranno anche nella sezione Competenze.
                    </p>
                  </label>
          <Form.Group controlId="formImage">
          <h5 className="m-0 fw-bold ">Media</h5> <br />
          <Form.Control className="btnCompetenze" type="file" onChange={handleImageChange} />
                    <p>
                      Aggiungi contenuti multimediali come immagini, documenti,
                      siti o presentazioni. Scopri di più sui
                      <span>tipi di file multimediali supportati</span>
                      </p>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="fw-bold btnForm mb-2" variant="primary" onClick={handleSubmit}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
