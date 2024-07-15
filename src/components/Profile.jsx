import Card from "react-bootstrap/Card";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

function Profile({profile}) {
  //const dispatch = useDispatch();
//
  //const profileData = useSelector((state) => state.profile);
  //const profileStatus = useSelector((state) => state.profile.status);

  return (
    <Card>
      <Card.Img src="src\assets\pipo.jpg" className=" bg-image"></Card.Img>

      <Card.Img variant="top" src={profile.image} alt="Profile image" className="rounded-circle profile-image" />
      <Card.Body>
        <Card.Title>{profile.name + " " + profile.surname} </Card.Title>
        <Card.Text>{profile.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Profile;