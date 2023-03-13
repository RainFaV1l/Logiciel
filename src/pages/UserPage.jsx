import { useParams } from "react-router-dom";
import USERS from "../data/USERS";

const UserPage = () => {
  const params = useParams();
  const userId = params.id;
  let user;
  USERS.map((item) => {
    if (userId == item.id) {
      user = item;
    }
  });
  return (
    <div className="user">
      <div className="user__container container">
        <div className="user__row">
          <div className="user__img">
            <img src={user.img} alt="img" />
          </div>
          <div className="user__info">
            <h3 className="user__fullname">{user.name + " " + user.surname}</h3>
            <p className="user__tel">Телефон: {user.tel}</p>
            <p className="user__address">Адрес: {user.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
